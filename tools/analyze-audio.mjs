// Offline audio analyser used to build the rhythm-game charts.
// Reads a mono 16-bit WAV (ffmpeg -ac 1 -ar 22050) and emits onset, tempo,
// energy, and section data as JSON. No external DSP dependencies.
import fs from 'node:fs';

const path = process.argv[2];
const outPath = process.argv[3];
if (!path || !outPath) {
  console.error('usage: node tools/analyze-audio.mjs input.wav output.json');
  process.exit(1);
}

function readWav(file) {
  const buf = fs.readFileSync(file);
  if (buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WAVE') {
    throw new Error('not a RIFF/WAVE file');
  }
  let off = 12;
  let fmt = null;
  while (off + 8 <= buf.length) {
    const id = buf.toString('ascii', off, off + 4);
    const size = buf.readUInt32LE(off + 4);
    const body = off + 8;
    if (id === 'fmt ') {
      fmt = {
        format: buf.readUInt16LE(body),
        channels: buf.readUInt16LE(body + 2),
        sampleRate: buf.readUInt32LE(body + 4),
        bits: buf.readUInt16LE(body + 14),
      };
    } else if (id === 'data') {
      if (!fmt) throw new Error('data before fmt');
      const bytes = Math.min(size, buf.length - body);
      const n = Math.floor(bytes / (fmt.bits / 8) / fmt.channels);
      const data = new Float32Array(n);
      if (fmt.bits === 16) {
        for (let i = 0; i < n; i++) {
          const s = buf.readInt16LE(body + i * 2 * fmt.channels);
          data[i] = s / 32768;
        }
      } else if (fmt.bits === 32 && fmt.format === 3) {
        for (let i = 0; i < n; i++) data[i] = buf.readFloatLE(body + i * 4 * fmt.channels);
      } else {
        throw new Error('unsupported wav format ' + JSON.stringify(fmt));
      }
      return { ...fmt, data, duration: n / fmt.sampleRate };
    }
    off = body + size + (size & 1);
  }
  throw new Error('no data chunk');
}

// ---- radix-2 FFT -----------------------------------------------------------
function makeFft(n) {
  const bits = Math.log2(n);
  if (!Number.isInteger(bits)) throw new Error('fft size must be power of two');
  const rev = new Uint16Array(n);
  for (let i = 0; i < n; i++) {
    let r = 0;
    for (let b = 0; b < bits; b++) r |= ((i >> b) & 1) << (bits - 1 - b);
    rev[i] = r;
  }
  const cos = new Float64Array(n / 2);
  const sin = new Float64Array(n / 2);
  for (let i = 0; i < n / 2; i++) {
    cos[i] = Math.cos(-2 * Math.PI * i / n);
    sin[i] = Math.sin(-2 * Math.PI * i / n);
  }
  const re = new Float64Array(n);
  const im = new Float64Array(n);
  return (input) => {
    for (let i = 0; i < n; i++) { re[rev[i]] = input[i]; im[rev[i]] = 0; }
    for (let size = 2; size <= n; size <<= 1) {
      const half = size >> 1;
      const step = n / size;
      for (let i = 0; i < n; i += size) {
        for (let j = 0, k = 0; j < half; j++, k += step) {
          const a = i + j, b = a + half;
          const tr = re[b] * cos[k] - im[b] * sin[k];
          const ti = re[b] * sin[k] + im[b] * cos[k];
          re[b] = re[a] - tr; im[b] = im[a] - ti;
          re[a] += tr; im[a] += ti;
        }
      }
    }
    return { re, im };
  };
}

const wav = readWav(path);
const sr = wav.sampleRate;
const x = wav.data;
const N = 2048;
const hop = 512;
const frames = Math.max(0, Math.floor((x.length - N) / hop) + 1);
const fft = makeFft(N);
const win = new Float32Array(N);
for (let i = 0; i < N; i++) win[i] = 0.5 - 0.5 * Math.cos(2 * Math.PI * i / (N - 1));
const bins = N / 2 + 1;
const freqPerBin = sr / N;

const flux = new Float64Array(frames);
const lowE = new Float64Array(frames);
const midE = new Float64Array(frames);
const highE = new Float64Array(frames);
const rms = new Float64Array(frames);
const prev = new Float64Array(bins);
const cur = new Float64Array(bins);
const frameBuf = new Float64Array(N);

for (let f = 0; f < frames; f++) {
  const start = f * hop;
  let e = 0;
  for (let i = 0; i < N; i++) {
    const s = x[start + i] || 0;
    frameBuf[i] = s * win[i];
    e += s * s;
  }
  rms[f] = Math.sqrt(e / N);
  const { re, im } = fft(frameBuf);
  let sumLow = 0, sumMid = 0, sumHigh = 0;
  for (let b = 1; b < bins; b++) {
    cur[b] = Math.sqrt(re[b] * re[b] + im[b] * im[b]);
    const hz = b * freqPerBin;
    if (hz < 160) sumLow += cur[b] * cur[b];
    else if (hz < 2400) sumMid += cur[b] * cur[b];
    else if (hz < 11000) sumHigh += cur[b] * cur[b];
    if (f > 0) {
      const d = Math.log1p(cur[b] * 40) - Math.log1p(prev[b] * 40);
      if (d > 0) flux[f] += d;
    }
  }
  lowE[f] = sumLow; midE[f] = sumMid; highE[f] = sumHigh;
  for (let b = 1; b < bins; b++) prev[b] = cur[b];
}

console.log('frames', frames, 'sr', sr, 'duration', wav.duration.toFixed(2));

// Normalise onset flux with a ~0.5 s adaptive mean so quiet sections still
// produce readable peaks.
const fluxNorm = new Float64Array(frames);
const adapt = 22; // frames (~0.5s)
for (let f = 0; f < frames; f++) {
  let sum = 0, n = 0;
  for (let j = Math.max(0, f - adapt); j <= Math.min(frames - 1, f + adapt); j++) { sum += flux[j]; n++; }
  fluxNorm[f] = flux[f] / (sum / n + 1e-9);
}

// ---- tempo: autocorrelation of the onset envelope --------------------------
const fps = sr / hop;
const minLag = Math.floor(60 / 200 * fps);
const maxLag = Math.ceil(60 / 50 * fps);
const ac = [];
for (let lag = minLag; lag <= maxLag; lag++) {
  let sum = 0, count = 0;
  for (let i = lag; i < frames; i++) {
    if (fluxNorm[i] > 0.6 && fluxNorm[i - lag] > 0.6) sum += fluxNorm[i] * fluxNorm[i - lag];
    count++;
  }
  ac.push({ lag, bpm: 60 * fps / lag, score: sum / count });
}
const tempoPeaks = [];
for (let i = 1; i < ac.length - 1; i++) {
  if (ac[i].score > ac[i - 1].score && ac[i].score >= ac[i + 1].score) tempoPeaks.push(ac[i]);
}
tempoPeaks.sort((a, b) => b.score - a.score);
console.log('tempo top:', tempoPeaks.slice(0, 12).map(p => `${p.bpm.toFixed(1)}bpm(${p.score.toFixed(3)})`).join('  '));

// Fold octaves into a musically useful range and rescore with a beat comb.
const candidates = [];
for (const p of tempoPeaks.slice(0, 30)) {
  let bpm = p.bpm;
  while (bpm < 70) bpm *= 2;
  while (bpm > 190) bpm /= 2;
  if (!candidates.some(c => Math.abs(c.bpm - bpm) < 1.2)) candidates.push({ bpm, score: p.score });
}
for (const c of candidates) {
  const period = 60 / c.bpm;
  let best = { phase: 0, score: -1 };
  for (let ph = 0; ph < fps * period; ph += 1) {
    let sum = 0;
    for (let t = ph / fps; t < wav.duration; t += period) {
      const idx = Math.round(t * fps);
      let peak = 0;
      for (let d = -2; d <= 2; d++) peak = Math.max(peak, fluxNorm[idx + d] || 0);
      sum += peak;
    }
    if (sum > best.score) best = { phase: ph / fps, score: sum };
  }
  c.period = period;
  c.phase = best.phase;
  c.combScore = best.score / Math.max(1, Math.floor(wav.duration / period));
}
candidates.sort((a, b) => b.combScore - a.combScore);
console.log('folded candidates:', candidates.slice(0, 8).map(c => `${c.bpm.toFixed(1)}bpm phase=${c.phase.toFixed(3)} comb=${c.combScore.toFixed(2)}`).join('  '));
const tempo = candidates[0];

// ---- onset peaks -----------------------------------------------------------
const peaks = [];
const minGap = Math.round(0.055 * fps);
const adaptive = new Float64Array(frames);
for (let f = 0; f < frames; f++) {
  let sum = 0, n = 0;
  for (let j = Math.max(0, f - 12); j <= Math.min(frames - 1, f + 12); j++) { sum += fluxNorm[j]; n++; }
  adaptive[f] = sum / n;
}
for (let f = 2; f < frames - 2; f++) {
  if (fluxNorm[f] < 1.18) continue;
  if (fluxNorm[f] < fluxNorm[f - 1] || fluxNorm[f] < fluxNorm[f + 1]) continue;
  if (fluxNorm[f] < adaptive[f] * 1.32) continue;
  const t = f / fps;
  if (peaks.length && t - peaks[peaks.length - 1].t < minGap / fps) {
    if (fluxNorm[f] > peaks[peaks.length - 1].strength) peaks[peaks.length - 1] = { t, strength: fluxNorm[f], low: lowE[f], mid: midE[f], high: highE[f] };
    continue;
  }
  peaks.push({ t: +t.toFixed(3), strength: +fluxNorm[f].toFixed(2), low: lowE[f], mid: midE[f], high: highE[f] });
}

// ---- bar energy ------------------------------------------------------------
const beats = [];
for (let t = tempo.phase; t < wav.duration; t += tempo.period) beats.push(+t.toFixed(3));
if (beats.length && beats[0] > 0.35) beats.unshift(+(beats[0] - tempo.period).toFixed(3));
const bars = [];
for (let i = 0; i + 4 < beats.length; i += 4) {
  const t0 = beats[i], t1 = beats[i + 4];
  const a = Math.max(0, Math.floor(t0 * fps));
  const b = Math.min(frames, Math.ceil(t1 * fps));
  let e = 0, lo = 0, mi = 0, hi = 0;
  for (let f = a; f < b; f++) { e += rms[f] * rms[f]; lo += lowE[f]; mi += midE[f]; hi += highE[f]; }
  const n = Math.max(1, b - a);
  bars.push({
    t: +t0.toFixed(2),
    rms: +Math.sqrt(e / n).toFixed(4),
    low: +(lo / n).toFixed(1),
    mid: +(mi / n).toFixed(1),
    high: +(hi / n).toFixed(1),
  });
}
const rmsSorted = bars.map(b => b.rms).sort((a, b) => a - b);
const med = rmsSorted[Math.floor(rmsSorted.length / 2)] || 1;
for (const b of bars) b.rel = +(b.rms / med).toFixed(2);
console.log('bars', bars.length);
console.log('bar energy:', bars.map(b => b.rel).join(' '));
console.log('peaks', peaks.length, 'first', peaks.slice(0, 8).map(p => p.t).join(','));
console.log('beats', beats.length, 'bpm', tempo.bpm.toFixed(2), 'phase', tempo.phase.toFixed(3));

fs.writeFileSync(outPath, JSON.stringify({
  source: path,
  duration: +wav.duration.toFixed(3),
  sampleRate: sr,
  frameRate: +fps.toFixed(3),
  tempo: {
    bpm: +tempo.bpm.toFixed(3),
    period: +tempo.period.toFixed(4),
    phase: +tempo.phase.toFixed(4),
    confidence: +tempo.combScore.toFixed(3),
  },
  beats,
  bars,
  peaks: peaks.map(p => ({ ...p, low: +p.low.toFixed(1), mid: +p.mid.toFixed(1), high: +p.high.toFixed(1) })),
}, null, 0));
console.log('wrote', outPath);
