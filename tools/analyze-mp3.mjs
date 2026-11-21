// Optional browser-based analyser for the MP3 assets. It decodes each file with
// the Web Audio API (so no system ffmpeg is required), computes spectral-flux
// onsets and bar energy, then writes the same JSON shape used by
// tools/analyze-audio.mjs. The committed analysis files are the reproducible
// inputs for tools/build-game-charts.mjs; this script only regenerates them.
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const runtime = process.env.PLAYWRIGHT_RUNTIME || process.env.HOME + '/.local/share/omgithub-playwright';
const require = createRequire(join(runtime, 'package.json'));
const { chromium } = require('playwright');

process.env.DISPLAY = ':' + readFileSync(join(runtime, 'display'), 'utf8').trim();
const launchOptions = JSON.parse(readFileSync(join(runtime, 'linux.json'), 'utf8')).browser?.launchOptions || {};
const browser = await chromium.launch({ ...launchOptions, timeout: 30000 });
const page = await browser.newPage({ viewport: { width: 640, height: 360 } });
await page.goto(process.env.CRYOUT_URL || 'http://127.0.0.1:3000/', { waitUntil: 'load', timeout: 60000 });

const jobs = [
  { id: 'cryout', url: '/audio/cryout.mp3', bpm: 100, phase: 0.535 },
  { id: 'world', url: '/audio/world-yearning.mp3', bpm: 120, phase: 0.04 },
  { id: 'chronostasis', url: '/audio/chronostasis.mp3', bpm: 99.4, phase: 0.323 },
];

const results = await page.evaluate(async (jobs) => {
  const ctx = new AudioContext({ sampleRate: 22050, latencyHint: 'playback' });
  const N = 2048;
  const hop = 512;
  const bins = N / 2 + 1;
  const win = new Float32Array(N);
  for (let i = 0; i < N; i++) win[i] = 0.5 - 0.5 * Math.cos(2 * Math.PI * i / (N - 1));

  function makeFft(n) {
    const bits = Math.log2(n);
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
  const fft = makeFft(N);

  async function analyze(job) {
    const res = await fetch(job.url);
    if (!res.ok) throw new Error('fetch ' + job.url + ' ' + res.status);
    const ab = await res.arrayBuffer();
    const buf = await ctx.decodeAudioData(ab);
    const sr = buf.sampleRate;
    const len = buf.length;
    const x = new Float32Array(len);
    for (let c = 0; c < buf.numberOfChannels; c++) {
      const data = buf.getChannelData(c);
      for (let i = 0; i < len; i++) x[i] += data[i] / buf.numberOfChannels;
    }
    const duration = buf.duration;
    const frames = Math.max(0, Math.floor((len - N) / hop) + 1);
    const flux = new Float64Array(frames);
    const lowE = new Float64Array(frames);
    const midE = new Float64Array(frames);
    const highE = new Float64Array(frames);
    const rms = new Float64Array(frames);
    const prev = new Float64Array(bins);
    const cur = new Float64Array(bins);
    const frame = new Float64Array(N);
    const freqPerBin = sr / N;

    for (let f = 0; f < frames; f++) {
      const start = f * hop;
      let e = 0;
      for (let i = 0; i < N; i++) {
        const s = x[start + i] || 0;
        frame[i] = s * win[i];
        e += s * s;
      }
      rms[f] = Math.sqrt(e / N);
      const { re, im } = fft(frame);
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

    const fluxNorm = new Float64Array(frames);
    const adapt = 22;
    for (let f = 0; f < frames; f++) {
      let sum = 0, n = 0;
      for (let j = Math.max(0, f - adapt); j <= Math.min(frames - 1, f + adapt); j++) { sum += flux[j]; n++; }
      fluxNorm[f] = flux[f] / (sum / n + 1e-9);
    }

    const fps = sr / hop;
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
        if (fluxNorm[f] > peaks[peaks.length - 1].strength) {
          peaks[peaks.length - 1] = { t, strength: fluxNorm[f], low: lowE[f], mid: midE[f], high: highE[f] };
        }
        continue;
      }
      peaks.push({ t, strength: fluxNorm[f], low: lowE[f], mid: midE[f], high: highE[f] });
    }

    const beat = 60 / job.bpm;
    const beats = [];
    for (let t = job.phase; t < duration; t += beat) beats.push(+t.toFixed(3));
    if (beats.length && beats[0] > 0.35) beats.unshift(+(beats[0] - beat).toFixed(3));
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
    const rmsSorted = bars.map((b) => b.rms).sort((a, b) => a - b);
    const med = rmsSorted[Math.floor(rmsSorted.length / 2)] || 1;
    for (const b of bars) b.rel = +(b.rms / med).toFixed(2);

    return {
      source: job.url,
      duration: +duration.toFixed(3),
      sampleRate: sr,
      frameRate: +fps.toFixed(3),
      tempo: { bpm: job.bpm, period: +(60 / job.bpm).toFixed(4), phase: job.phase, confidence: 1 },
      beats,
      bars,
      peaks: peaks.map((p) => ({
        t: +p.t.toFixed(3),
        strength: +p.strength.toFixed(2),
        low: +p.low.toFixed(1), mid: +p.mid.toFixed(1), high: +p.high.toFixed(1),
      })),
    };
  }

  const out = {};
  for (const job of jobs) out[job.id] = await analyze(job);
  await ctx.close();
  return out;
}, jobs);

mkdirSync(new URL('./source/', import.meta.url), { recursive: true });
for (const [id, data] of Object.entries(results)) {
  writeFileSync(new URL(`./source/${id}-analysis.json`, import.meta.url), JSON.stringify(data));
  console.log(`${id}: ${data.duration}s, ${data.peaks.length} peaks, ${data.bars.length} bars`);
}
await browser.close();
