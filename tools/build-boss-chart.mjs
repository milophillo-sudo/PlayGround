// Builds the boss chart for "The Untouchable of f Ra IA's Land".
// The track's tempo map is authored from an onset fit of the audio:
//   overture / finale ... 111.1 BPM (16th grid)
//   clock chamber ......  96.0 BPM (8th grid)
// Run:
//   node tools/build-boss-chart.mjs tools/source/untouchable-onsets.json
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const analysisPath = process.argv[2] || path.join(ROOT, 'tools/source/untouchable-onsets.json');
const analysis = JSON.parse(fs.readFileSync(analysisPath, 'utf8'));
const peaks = [...analysis.peaks].sort((a, b) => a.t - b.t);

const MAIN_BPM = 111.1;
const MAIN_OFFSET = 0.409;
const MAIN_BEAT = 60 / MAIN_BPM;
const MAIN_BAR = MAIN_BEAT * 4;
const MAIN_16 = MAIN_BEAT / 4;

const MID_BPM = 96;
const MID_START = 28.492;
const MID_BEAT = 60 / MID_BPM;
const MID_BAR = MID_BEAT * 4;
const MID_8 = MID_BEAT / 2;

const INTRO_END = 28.492;
const CHART_END = 141.829;
const DURATION = 147.541;

const ACTIVE = { 4: [2, 3, 4, 5], 6: [1, 2, 3, 4, 5, 6], 8: [0, 1, 2, 3, 4, 5, 6, 7] };

const PATTERNS = {
  4: [
    [0, 3, 1, 2, 2, 1, 3, 0], [0, 1, 2, 3, 2, 1, 0, 3],
    [0, 2, 1, 3, 2, 0, 3, 1], [3, 0, 2, 1, 0, 3, 1, 2],
  ],
  6: [
    [0, 5, 1, 4, 2, 3, 2, 4, 1, 5], [0, 1, 2, 3, 4, 5, 4, 3, 2, 1],
    [0, 3, 1, 4, 2, 5, 3, 0, 2, 4], [0, 4, 1, 5, 2, 4, 3, 5, 2, 0],
    [3, 2, 1, 0, 2, 4, 5, 3, 1, 0], [0, 2, 4, 1, 3, 5, 2, 4, 1, 3],
  ],
  8: [
    [0, 7, 1, 6, 2, 5, 3, 4, 3, 5, 2, 6, 1, 7], [0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1],
    [0, 3, 4, 7, 1, 2, 5, 6, 2, 4, 1, 6, 0, 7], [0, 4, 1, 5, 2, 6, 3, 7, 3, 6, 2, 5, 1, 4],
    [7, 6, 5, 4, 3, 2, 1, 0, 2, 4, 1, 5, 3, 7],
  ],
};

// One bar per row. 2 marks a downbeat that can also carry a mirrored chord.
// The 96 BPM sections use eight eighth-note slots, everything else uses 16ths.
const RHYTHMS_16 = {
  GALLERY: [
    [2, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1],
    [2, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
  ],
  HUNT: [
    [2, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [2, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0],
    [2, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
  ],
  FROZEN: [
    [2, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    [2, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
  ],
  DESCENT: [
    [2, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
  ],
  ASCENT: [
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],
  APOTHEOSIS: [
    [2, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
    [2, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1],
  ],
  FINALE: [
    [2, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    [2, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    [2, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
  ],
};

const RHYTHMS_8 = {
  CHAMBER: [
    [2, 0, 0, 1, 0, 0, 1, 0],
    [2, 0, 1, 0, 0, 1, 0, 0],
  ],
  MECHANISM: [
    [2, 0, 1, 1, 0, 1, 0, 1],
    [2, 1, 0, 1, 1, 0, 1, 0],
  ],
  DESCENT: [
    [2, 0, 1, 1, 1, 1, 1, 1],
  ],
};

const MOTION = {
  OVERTURE: ['orbit', 0.03, 0.25, 0.015],
  RELIQUARY: ['wave', 0.05, 0.35, 0.02],
  HUSH: ['flat', 0.01, 0.2, 0.005],
  PROCESSION: ['orbit', 0.1, 0.6, 0.04],
  CHAMBER: ['wave', 0.04, 0.4, 0.018],
  MECHANISM: ['clock', 0.075, 0.55, 0.03],
  DESCENT: ['slope', 0.12, 0.7, 0.05],
  GALLERY: ['orbit', 0.13, 0.75, 0.05],
  HUNT: ['zigzag', 0.16, 0.95, 0.065],
  FROZEN: ['flat', 0.02, 0.2, 0.008],
  ASCENT: ['orbit', 0.16, 0.9, 0.06],
  APOTHEOSIS: ['clock', 0.18, 1.05, 0.075],
  FINALE: ['orbit', 0.2, 1.15, 0.085],
  OUTRO: ['flat', 0.0, 0.2, 0.0],
};

function motion(name) {
  const [m, amp, speed, pitch] = MOTION[name] || ['fan', 0.05, 0.4, 0.02];
  return { motion: m, motionAmp: amp, motionSpeed: speed, motionPitch: pitch };
}

const SECTIONS = [
  {
    name: 'OVERTURE', start: 0.000, end: 9.050, keys: 8, intro: true,
    color: '#ffcf6e', accent: '#ff3b5c', energy: 0.42, bloom: 0.68,
    rotY: 0, rotZ: 0, tilt: 0, spread: 1, y: 0, camZ: 19.5, camY: 7.2, spin: 0.02,
    lookY: 5, lookZ: -2, bpm: MAIN_BPM, beatOffset: MAIN_OFFSET,
  },
  {
    name: 'RELIQUARY', start: 9.050, end: 18.770, keys: 8, intro: true,
    color: '#ffb45e', accent: '#9b6bff', energy: 0.62, bloom: 0.8,
    rotY: 0, rotZ: 0, tilt: 0, spread: 1, y: 0, camZ: 19.5, camY: 7.2, spin: 0.03,
    lookY: 5, lookZ: -2, bpm: MAIN_BPM, beatOffset: MAIN_OFFSET,
  },
  {
    name: 'HUSH', start: 18.770, end: 20.390, keys: 8, intro: true,
    color: '#b8c8ff', accent: '#ffd166', energy: 0.2, bloom: 0.42,
    rotY: 0, rotZ: 0, tilt: 0, spread: 1, y: 0, camZ: 19.5, camY: 7.2, spin: 0.01,
    lookY: 5, lookZ: -2, bpm: MAIN_BPM, beatOffset: MAIN_OFFSET,
  },
  {
    name: 'PROCESSION', start: 20.390, end: 28.492, keys: 8, intro: true,
    color: '#ff8a5e', accent: '#ffd166', energy: 0.84, bloom: 0.96,
    rotY: 0, rotZ: 0, tilt: 0, spread: 1, y: 0, camZ: 19.5, camY: 7.2, spin: 0.05,
    lookY: 5, lookZ: -2, bpm: MAIN_BPM, beatOffset: MAIN_OFFSET,
  },
  {
    name: 'CHAMBER', start: 28.492, end: 48.492, keys: 4, firstNote: 29.742,
    color: '#a99bff', accent: '#ffd166', energy: 0.32, bloom: 0.62,
    rotY: 0.0, rotZ: 0.0, tilt: 0.02, spread: 0.98, y: 0.08,
    camZ: 18.8, camY: 7.0, spin: 0.025, lookY: 5.0, lookZ: -2,
    bpm: MID_BPM, beatOffset: MID_START,
  },
  {
    name: 'MECHANISM', start: 48.492, end: 61.492, keys: 6,
    color: '#ffb45e', accent: '#ff4d6d', energy: 0.62, bloom: 0.82,
    rotY: 0.05, rotZ: -0.018, tilt: 0.015, spread: 1.03, y: 0.1,
    camZ: 17.4, camY: 6.8, spin: 0.06, lookY: 5.4, lookZ: -4,
    bpm: MID_BPM, beatOffset: MID_START,
  },
  {
    name: 'DESCENT', start: 61.492, end: 63.590, keys: 6,
    color: '#ff6b7a', accent: '#ffd166', energy: 0.76, bloom: 0.9,
    rotY: -0.06, rotZ: 0.025, tilt: -0.02, spread: 1.05, y: 0.12,
    camZ: 16.4, camY: 6.4, spin: 0.09, lookY: 5.6, lookZ: -5,
    bpm: MID_BPM, beatOffset: MID_START,
  },
  {
    name: 'GALLERY', start: 63.590, end: 70.069, keys: 6,
    color: '#ff7a5e', accent: '#ffd166', energy: 0.84, bloom: 0.98,
    rotY: 0.08, rotZ: -0.03, tilt: 0.025, spread: 1.06, y: 0.14,
    camZ: 16.2, camY: 6.7, spin: 0.1, lookY: 5.8, lookZ: -6,
    bpm: MAIN_BPM, beatOffset: MAIN_OFFSET,
  },
  {
    name: 'HUNT', start: 70.069, end: 89.449, keys: 6,
    color: '#ff4d6d', accent: '#ffd166', energy: 0.98, bloom: 1.08,
    rotY: -0.1, rotZ: 0.04, tilt: -0.025, spread: 1.08, y: 0.16,
    camZ: 15.8, camY: 6.6, spin: 0.13, lookY: 6.0, lookZ: -6,
    bpm: MAIN_BPM, beatOffset: MAIN_OFFSET,
  },
  {
    name: 'FROZEN', start: 89.449, end: 105.429, keys: 4,
    color: '#9fc7ff', accent: '#d7e8ff', energy: 0.3, bloom: 0.58,
    rotY: -0.02, rotZ: 0.01, tilt: 0.04, spread: 0.94, y: 0.24,
    camZ: 19.2, camY: 7.8, spin: 0.02, lookY: 5.0, lookZ: -2,
    bpm: MAIN_BPM, beatOffset: MAIN_OFFSET,
  },
  {
    name: 'ASCENT', start: 105.429, end: 107.509, keys: 6,
    color: '#ffd166', accent: '#ff7a5e', energy: 0.88, bloom: 1.0,
    rotY: 0.06, rotZ: -0.025, tilt: 0.02, spread: 1.04, y: 0.12,
    camZ: 16.4, camY: 6.5, spin: 0.1, lookY: 5.8, lookZ: -5,
    bpm: MAIN_BPM, beatOffset: MAIN_OFFSET,
  },
  {
    name: 'APOTHEOSIS', start: 107.509, end: 123.829, keys: 8,
    color: '#ff9a5e', accent: '#ff3b5c', energy: 1.04, bloom: 1.14,
    rotY: -0.12, rotZ: 0.05, tilt: -0.03, spread: 1.1, y: 0.18,
    camZ: 15.4, camY: 6.5, spin: 0.15, lookY: 6.0, lookZ: -6,
    bpm: MAIN_BPM, beatOffset: MAIN_OFFSET,
  },
  {
    name: 'FINALE', start: 123.829, end: CHART_END, keys: 8,
    color: '#ff3b5c', accent: '#ffd166', energy: 1.12, bloom: 1.2,
    rotY: 0.14, rotZ: -0.055, tilt: 0.035, spread: 1.12, y: 0.2,
    camZ: 14.8, camY: 6.3, spin: 0.17, lookY: 6.2, lookZ: -7,
    bpm: MAIN_BPM, beatOffset: MAIN_OFFSET,
  },
  {
    name: 'OUTRO', start: CHART_END, end: DURATION, keys: 4,
    color: '#c9b8ff', accent: '#ffd166', energy: 0.18, bloom: 0.46,
    rotY: 0, rotZ: 0, tilt: 0.02, spread: 0.92, y: 0.3,
    camZ: 19.6, camY: 7.8, spin: 0.02, lookY: 5.0, lookZ: -2,
    bpm: MAIN_BPM, beatOffset: MAIN_OFFSET,
  },
].map((s) => ({
  ...s,
  ...motion(s.name),
  city: 0,
}));

function round(n, d = 3) { return +Number(n).toFixed(d); }

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rng = mulberry32(0xb0551710);
const peakIndex = new Map();
for (const p of peaks) peakIndex.set(Math.round(p.t * 1000), p);
function nearestPeak(t, window = 0.08) {
  let best = null;
  let bestD = window;
  for (const p of peaks) {
    const d = Math.abs(p.t - t);
    if (d <= bestD) { bestD = d; best = p; }
    if (p.t > t + window) break;
  }
  return best;
}

// ---------------------------------------------------------------- notes
const notes = [];

for (const [si, sec] of SECTIONS.entries()) {
  if (sec.intro || sec.name === 'OUTRO') continue;
  const keys = sec.keys;
  const active = ACTIVE[keys];
  const mid = sec.bpm === MID_BPM;
  const step = mid ? MID_8 : MAIN_16;
  const gridPhase = mid ? MID_START : MAIN_OFFSET;
  const barSlots = mid ? 8 : 16;
  const barLength = mid ? MID_BAR : MAIN_BAR;
  const first = Math.max(sec.start, sec.firstNote ?? sec.start);
  const last = sec.end - 0.08;
  const startSlot = Math.ceil((first - gridPhase) / step - 1e-6);
  const endSlot = Math.floor((last - gridPhase) / step - 1e-6);
  const masks = mid ? RHYTHMS_8[sec.name] : RHYTHMS_16[sec.name];
  const patterns = PATTERNS[keys];
  let lastLane = -1;
  let lastT = -99;
  let count = 0;

  for (let slot = startSlot; slot <= endSlot; slot++) {
    const t = gridPhase + slot * step;
    const barNo = Math.floor((t - gridPhase) / barLength + 1e-6);
    const local = ((slot % barSlots) + barSlots) % barSlots;
    const mask = masks[barNo % masks.length];
    let value = mask[local];
    if (!value) continue;

    const peak = nearestPeak(t, mid ? 0.085 : 0.075);
    const onBeat = local % (mid ? 2 : 4) === 0;
    const onDown = local === 0;
    // Grid-first charting, but thin unsupported offbeats so the chart keeps
    // breathing with the record instead of becoming a flat wall of notes.
    if (!peak && !onBeat && rng() < 0.5) continue;
    if (peak && peak.strength < 0.95 && !onBeat && rng() < 0.65) continue;
    if (mid && !peak && !onDown && rng() < 0.34) continue;

    const pattern = patterns[(si + Math.floor(slot / (barSlots * 2))) % patterns.length];
    let pi = (slot + Math.floor(slot / barSlots) * 2) % pattern.length;
    let pos = pattern[pi];
    let lane = active[pos];
    if (lane === lastLane && t - lastT < Math.max(0.16, step * 1.2)) {
      pos = pattern[(pi + 1) % pattern.length];
      lane = active[pos];
      if (lane === lastLane && t - lastT < 0.14) continue;
    }

    notes.push({ t: round(t), lane });
    lastLane = lane;
    lastT = t;
    count++;

    // Mirrored two-thumb chord on the first bar of every four. Chords are
    // deliberately side-symmetric so neither hand has to cross the other.
    if (value === 2 && (barNo % 4 === 0 || (sec.name === 'FINALE' && barNo % 2 === 1))) {
      const mirror = active[keys - 1 - pos];
      if (mirror !== lane) {
        notes.push({ t: round(t), lane: mirror });
        count++;
      }
    }

    // A few 16th ornaments over the strongest 96 BPM hits keep the middle
    // chamber from feeling like a slower, separate chart.
    if (mid && peak && peak.strength > 2.0 && rng() < 0.5) {
      const t2 = round(t + step / 2);
      const p2 = nearestPeak(t2, 0.06);
      if (t2 < sec.end - 0.08 && (p2 || peak.strength > 2.8)) {
        const pos2 = (pos + 2) % keys;
        const lane2 = active[pos2];
        if (lane2 !== lane) {
          notes.push({ t: t2, lane: lane2 });
          count++;
        }
      }
    }
  }
  console.log(`  ${sec.name}: ${count} notes`);
}

// Breathing holds in the two quiet clock chambers.
for (const name of ['CHAMBER', 'FROZEN']) {
  const sec = SECTIONS.find((s) => s.name === name);
  const keys = sec.keys;
  const active = ACTIVE[keys];
  const mid = sec.bpm === MID_BPM;
  const bar = mid ? MID_BAR : MAIN_BAR;
  const beat = mid ? MID_BEAT : MAIN_BEAT;
  const first = sec.firstNote ?? sec.start;
  for (let b = 0; b < 8; b++) {
    if (b % 3 !== 1) continue;
    const t = round(first + (b + 1) * bar + beat / 2);
    if (t > sec.end - 1.6) continue;
    notes.push({
      t, lane: active[(b * 2 + 1) % keys], type: 'hold',
      dur: round(beat * (mid ? 2 : 1.5)),
    });
  }
}

notes.sort((a, b) => a.t - b.t || a.lane - b.lane);

// Holds win their lane.
const holds = notes.filter((n) => n.type === 'hold');
const filtered = notes.filter((n) => {
  if (n.type === 'hold') return true;
  for (const h of holds) {
    if (n.lane === h.lane && n.t > h.t - 0.1 && n.t < h.t + h.dur + 0.08) return false;
  }
  return true;
});

const finalNotes = [];
const seen = new Set();
for (const n of filtered) {
  const key = `${n.t}:${n.lane}`;
  if (seen.has(key)) continue;
  seen.add(key);
  const prev = finalNotes[finalNotes.length - 1];
  if (prev && prev.lane === n.lane && n.t - prev.t < 0.105 && !n.type && !prev.type) continue;
  finalNotes.push(n.type === 'hold'
    ? { t: round(n.t), lane: n.lane, type: 'hold', dur: round(n.dur) }
    : { t: round(n.t), lane: n.lane });
}

// ---------------------------------------------------------------- events
const events = [];
const ghosts = [];
function addEvent(t, type, data = {}) {
  events.push({ t: round(t), type, ...data });
}
function nearestSection(t) {
  for (let i = SECTIONS.length - 1; i >= 0; i--) {
    if (t >= SECTIONS[i].start) return SECTIONS[i];
  }
  return SECTIONS[0];
}

// Cinematic camera score. Every key lands on a beat or bar line, then eases
// quickly to its position before the next one.
const cameraKeys = [
  [0.000, [0, 15, 48], [0, 18, -70], 48, 0.00, 0.02],
  [0.409, [0, 14, 46], [0, 20, -74], 48, 0.00, 1.10],
  [2.569, [0, 10, 31], [0, 20, -78], 52, -0.02, 0.85],
  [4.729, [-7, 5.5, 20], [2, 23, -86], 58, 0.025, 0.78],
  [6.889, [8, 3.1, 10], [-4, 19, -82], 61, 0.035, 0.72],
  [9.050, [-16, 10, -2], [8, 15, -66], 55, -0.03, 0.92],
  [11.210, [13, 17, -14], [-10, 12, -82], 52, 0.05, 0.85],
  [13.370, [0, 24, 16], [0, 14, -44], 50, 0.00, 0.72],
  [15.530, [0, 3.0, 6], [0, 23, -88], 63, 0.02, 0.68],
  [17.690, [0, 12, 38], [0, 21, -88], 48, 0.00, 1.05],
  [19.850, [0, 6, 18], [0, 25, -88], 58, -0.03, 0.52],
  [21.490, [-12, 15, 10], [6, 11, -48], 55, 0.04, 0.8],
  [23.650, [12, 4, 4], [-4, 19, -74], 60, -0.05, 0.62],
  [25.810, [0, 26, 26], [0, 0, -4], 58, 0.03, 0.72],
  [27.970, [0, 9.5, 26], [0, 5, -2], 51, 0.00, 0.52],
  [28.492, [0, 7.4, 19.2], [0, 4.87, -2], 48.62, 0.00, 0.6],
  [33.550, [0, 8.1, 18.4], [0, 4.88, -3], 51.58, 0.00, 0.8],
  [40.742, [-5, 9.2, 18.8], [2, 5.2, -4], 52.07, 0.02, 1.0],
  [48.492, [-4, 7.8, 17.2], [2, 4.38, -6], 52.36, -0.02, 0.9],
  [54.920, [5, 8.05, 16.4], [-2, 4.43, -6], 54, 0.03, 0.9],
  [61.492, [-7, 6.6, 15.4], [4, 3.81, -10], 51, -0.04, 0.7],
  [63.590, [0, 7.32, 16.2], [0, 3.91, -7], 54, 0.03, 0.6],
  [70.069, [0, 6.7, 15.4], [0, 3.46, -9], 54, 0.00, 0.7],
  [74.390, [-6, 6.9, 14.6], [3, 3.61, -10], 54, 0.035, 0.85],
  [78.710, [6, 7.19, 15], [-3, 3.67, -10], 54, -0.04, 0.85],
  [83.030, [0, 5.55, 13.8], [0, 3.27, -8], 54, 0.02, 0.85],
  [87.350, [-8, 7.23, 14.2], [4, 4, -9], 54, -0.03, 0.65],
  [89.449, [0, 8.8, 20.2], [0, 5.34, -2], 49.91, 0.00, 0.9],
  [97.438, [-8, 9.6, 18.4], [4, 5.19, -6], 51.91, 0.025, 1.1],
  [105.429, [0, 7.16, 16], [0, 4.01, -6], 54, -0.03, 0.55],
  [107.509, [0, 6.7, 15.4], [0, 3.6, -8], 54, 0.02, 0.6],
  [111.829, [-7, 6.9, 14.2], [0, 3.82, -9], 54, -0.04, 0.9],
  [116.149, [5, 5.7, 13.2], [0, 3.26, -10], 54, 0.045, 0.9],
  [120.469, [0, 4.78, 12.6], [0, 2.7, -12], 54, -0.02, 0.9],
  [123.829, [0, 5.69, 14], [0, 3.1, -10], 54, 0.03, 0.7],
  [128.149, [-8, 6.41, 13], [0, 3.68, -10], 54, -0.045, 0.95],
  [132.469, [8, 6.03, 12.4], [0, 3.59, -10], 54, 0.05, 0.95],
  [136.789, [0, 3.96, 11.2], [0, 2.53, -12], 54, -0.03, 0.9],
  [141.829, [0, 9, 19], [0, 5.69, 0], 52.39, 0.00, 1.2],
];
for (const [t, pos, look, fov, roll, dur] of cameraKeys) {
  addEvent(t, 'bossCamera', { pos, look, fov, roll, dur });
}

// Glitch punctuation: the cuts land on the same beats as the camera moves.
for (const [t, power] of [
  [0.409, 0.5], [4.729, 0.7], [8.950, 0.9], [13.370, 0.65], [18.770, 1.0],
  [21.490, 0.8], [23.650, 0.9], [27.970, 1.15], [28.492, 1.3], [48.492, 0.7],
  [63.590, 1.1], [70.069, 1.2], [89.449, 0.9], [105.429, 0.75],
  [107.509, 1.15], [123.829, 1.25], [141.829, 0.7],
]) {
  addEvent(t, 'bossGlitch', { power });
}

// Chapters / title cards.
for (const [t, kicker, title, sub, hold] of [
  [0.700, 'OVERTURE', 'THE UNTOUCHABLE', "OF f RA IA'S LAND", 5.6],
  [9.200, 'I', 'THE NAVE', 'EVERY SAINT HAS TURNED AWAY', 4.2],
  [20.500, 'II', 'THE PROCESSION', 'THE HOUR HAND FALLS', 4.0],
  [26.300, 'III', 'THE CLOCK', 'DO NOT LET IT STRIKE', 2.4],
]) {
  addEvent(t, 'caption', { kicker, title, sub, hold });
}

addEvent(INTRO_END, 'bossPhase', { mode: 'play' });
addEvent(CHART_END, 'bossPhase', { mode: 'outro' });

// Bars, downbeat pulses, and clock accents.
for (const sec of SECTIONS) {
  const mid = sec.bpm === MID_BPM;
  const bar = mid ? MID_BAR : MAIN_BAR;
  const beat = mid ? MID_BEAT : MAIN_BEAT;
  const phase = mid ? MID_START : MAIN_OFFSET;
  if (sec.intro) {
    // The overture breathes in half-bars so the camera cuts have room.
    for (let i = 0; ; i++) {
      const t = phase + i * MAIN_BAR;
      if (t >= sec.end - 0.02) break;
      if (t < sec.start - 0.02) continue;
      addEvent(t, 'pulse', { power: round(0.28 + sec.energy * 0.55, 2) });
      if (i % 4 === 0) addEvent(t + 0.02, 'wind', { power: round(0.7 + sec.energy * 0.6, 2) });
    }
    if (sec.energy > 0.7) addEvent(sec.start + 0.04, 'vibe', { power: round(sec.energy, 2) });
    continue;
  }

  const firstBar = Math.ceil((sec.start - phase) / bar - 1e-6);
  const lastBar = Math.ceil((sec.end - phase) / bar - 1e-6);
  for (let b = firstBar; b < lastBar; b++) {
    const t = phase + b * bar;
    if (t < sec.start - 0.02 || t > sec.end - 0.04) continue;
    addEvent(t, 'pulse', { power: round(0.22 + sec.energy * 0.62, 2) });
    addEvent(t, 'bossTick', { hand: b % 2 ? 'slow' : 'fast', power: round(0.35 + sec.energy * 0.6, 2) });
    if (sec.energy > 0.75 && b % 4 === 1) {
      addEvent(t + beat / 2, 'pulse', { power: 0.85 });
    }
    const idle = [0, 7].filter((lane) => !ACTIVE[sec.keys].includes(lane));
    if (idle.length && b % 2 === 0) {
      const lane = idle[(b / 2) % idle.length];
      addEvent(t + 0.03, 'echo', {
        lane, dir: lane ? 1 : -1, power: round(0.5 + sec.energy * 0.7, 2),
      });
    }
  }

  // Strong onsets become extra stage accents without flooding the event list.
  let lastAccent = -99;
  const strong = peaks.filter((p) => p.t >= sec.start && p.t < sec.end && p.strength > 3.15);
  for (const p of strong) {
    if (p.t - lastAccent < bar * 1.7) continue;
    lastAccent = p.t;
    const lane = ACTIVE[sec.keys][Math.floor(p.t * 2) % sec.keys];
    addEvent(p.t, 'burst', { lane, power: round(Math.min(1.2, 0.45 + p.strength / 4), 2) });
    if (p.strength > 3.8) addEvent(p.t + 0.03, 'vibe', { power: round(Math.min(1.15, p.strength / 4.5), 2) });
    if (p.strength > 3.6) addEvent(p.t + 0.02, 'wind', { power: round(Math.min(1.3, 0.6 + p.strength / 5), 2) });
  }

  // Unused lanes keep their wind flourish during play.
  const idle = [0, 1, 6, 7].filter((lane) => !ACTIVE[sec.keys].includes(lane));
  idle.forEach((lane, i) => {
    ghosts.push({ t: round(sec.start + 0.05 + i * 0.08), lane, type: 'sweep' });
    ghosts.push({ t: round(sec.start + bar * 2 + i * 0.13), lane, type: 'bounce' });
  });

  if (sec.name === 'GALLERY' || sec.name === 'APOTHEOSIS') {
    addEvent(sec.start + bar * 2, 'motion', { style: 'orbit', amp: 0.16, speed: 1.05, pitch: 0.08 });
  }
  if (sec.name === 'FINALE') {
    addEvent(sec.start + bar * 3, 'motion', { style: 'clock', amp: 0.2, speed: 1.2, pitch: 0.1 });
  }
}

events.sort((a, b) => a.t - b.t || String(a.type).localeCompare(String(b.type)));
ghosts.sort((a, b) => a.t - b.t);

const chart = {
  song: {
    title: "THE UNTOUCHABLE OF f RA IA'S LAND",
    shortTitle: 'THE UNTOUCHABLE',
    artist: 'f RA IA',
    bpm: MAIN_BPM,
    bpmLabel: '111 / 96 BPM',
    bpmMap: [
      { t: 0, bpm: MAIN_BPM },
      { t: MID_START, bpm: MID_BPM },
      { t: 63.590, bpm: MAIN_BPM },
    ],
    duration: DURATION,
    chartEnd: CHART_END,
    introEnd: INTRO_END,
    beatOffset: MAIN_OFFSET,
    difficulty: 'BOSS',
    laneLabel: '4 · 6 · 8',
    freeNotes: true,
    boss: true,
    fadeStart: 140.2,
    fadeEnd: 142.6,
  },
  sections: SECTIONS,
  notes: finalNotes,
  events,
  ghosts,
};

fs.mkdirSync(path.join(ROOT, 'src/charts'), { recursive: true });
fs.writeFileSync(
  path.join(ROOT, 'src/charts/untouchable.js'),
  `// Generated by tools/build-boss-chart.mjs — do not hand-edit.\nexport const CHART = ${JSON.stringify(chart, null, 2)};\n`,
);

const holdsOut = finalNotes.filter((n) => n.type === 'hold').length;
console.log(`untouchable: ${finalNotes.length} notes, ${holdsOut} holds, ${events.length} events, ${ghosts.length} ghosts, end ${CHART_END}s`);
const bySection = {};
for (const n of finalNotes) {
  const sec = nearestSection(n.t);
  bySection[sec.name] = (bySection[sec.name] || 0) + 1;
}
console.log('per section', bySection);
