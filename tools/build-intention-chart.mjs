import { readFileSync, writeFileSync } from 'node:fs';

// INTENTION is charted from the decoded song itself. The offline analysis in
// tools/source/intention-onsets.json gives us the real onset peaks and the
// tempo windows, so the note grid follows the performance rather than a
// guessed constant BPM.
const analysis = JSON.parse(readFileSync(new URL('./source/intention-onsets.json', import.meta.url)));
const peaks = analysis.peaks;
const duration = 213.505;

const ACTIVE = {
  1: [3],
  2: [2, 4],
  4: [2, 3, 4, 5],
  6: [1, 2, 3, 4, 5, 6],
};

const notes = [];
const laneUses = Array.from({ length: 8 }, () => []);
let rngState = 0x1f04a3d7;
function rnd() {
  rngState ^= rngState << 13; rngState >>>= 0;
  rngState ^= rngState >> 17;
  rngState ^= rngState << 5; rngState >>>= 0;
  return rngState / 0xffffffff;
}
function hash(t, salt = 0) {
  const x = Math.sin(t * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function strengthAt(t, tol = 0.075) {
  let s = 0;
  for (const p of peaks) {
    if (p.t > t + tol) break;
    if (p.t >= t - tol) s = Math.max(s, p.s);
  }
  return s;
}

function laneFree(lane, t, gap = 0.085) {
  for (const u of laneUses[lane]) {
    if (t > u.from - gap && t < u.to + gap) return false;
  }
  return true;
}
function useLane(lane, from, to) {
  laneUses[lane].push({ from, to });
}
function addTap(t, lane) {
  if (laneFree(lane, t)) {
    notes.push({ t: +t.toFixed(3), lane });
    useLane(lane, t, t + 0.04);
    return true;
  }
  return false;
}
function addHold(t, lane, dur) {
  if (!laneFree(lane, t, 0.12)) return false;
  if (!laneFree(lane, t + dur, 0.12)) return false;
  notes.push({ t: +t.toFixed(3), lane, type: 'hold', dur: +dur.toFixed(3) });
  useLane(lane, t, t + dur);
  return true;
}

function grid(start, end, bpm, offset, div = 1) {
  const step = 60 / bpm / div;
  const out = [];
  let k = Math.ceil((start - offset) / step - 1e-6);
  for (let t = offset + k * step; t <= end + 1e-6; t += step) {
    if (t >= start - 1e-6) out.push(+t.toFixed(3));
  }
  return out;
}
function ramp(start, end, bpmA, bpmB, div = 1, offset = 0) {
  const out = [];
  let t = start;
  let n = 0;
  while (t <= end + 1e-6) {
    out.push(+t.toFixed(3));
    const p = (t - start) / Math.max(0.001, end - start);
    const bpm = bpmA + (bpmB - bpmA) * p;
    t += 60 / bpm / div;
    n++;
    if (n > 4000) break;
  }
  return out;
}

// ---------------------------------------------------------------- sections
const sections = [
  {
    name: 'VOID', start: 0, end: 17.5, keys: 4, bpm: 75, beatOffset: 0,
    color: '#ffffff', accent: '#ffffff', energy: 0.2, bloom: 0.36,
    intro: true, phase: 'void', notes: false,
  },
  {
    name: 'REVELATION', start: 17.5, end: 28.5, keys: 4, bpm: 150, beatOffset: 0.075,
    color: '#dff4ff', accent: '#ffffff', energy: 0.36, bloom: 0.5, phase: 'ocean',
  },
  {
    name: 'DESCENT', start: 28.5, end: 33.5, keys: 1, bpm: 150, beatOffset: 0.075,
    color: '#ffffff', accent: '#ffffff', energy: 0.55, bloom: 0.48, phase: 'spin',
  },
  {
    name: 'ASSAIL', start: 33.5, end: 46, keys: 4, bpm: 150, beatOffset: 0.075,
    color: '#ffffff', accent: '#ffffff', energy: 0.62, bloom: 0.5, phase: 'field',
  },
  {
    name: 'LIBRA', start: 46, end: 61.5, keys: 4, bpm: 150, beatOffset: 0.075,
    color: '#ffffff', accent: '#ffffff', energy: 0.68, bloom: 0.55, phase: 'pillars',
  },
  {
    name: 'HALO', start: 61.5, end: 72, keys: 4, bpm: 150, beatOffset: 0.075,
    color: '#ffffff', accent: '#ffffff', energy: 0.7, bloom: 0.58, phase: 'halo',
  },
  {
    name: 'DISTORTION', start: 72, end: 74.5, keys: 4, bpm: 150, beatOffset: 0.075,
    color: '#ffffff', accent: '#ffffff', energy: 0.3, bloom: 0.38, phase: 'dark', notes: false,
  },
  {
    name: 'GUILT', start: 74.5, end: 81, keys: 1, bpm: 165, beatOffset: 0.075,
    color: '#ff3355', accent: '#ff3355', energy: 0.58, bloom: 0.32, phase: 'guilt',
  },
  {
    name: 'GUILT II', start: 81, end: 88, keys: 1, bpm: 180, beatOffset: 0.075,
    color: '#ff3355', accent: '#ff3355', energy: 0.72, bloom: 0.34, phase: 'guilt',
  },
  {
    name: 'OFFBEAT', start: 88, end: 94.2, keys: 2, bpm: 185, beatOffset: 0.19,
    color: '#ffffff', accent: '#ffffff', energy: 0.7, bloom: 0.4, phase: 'offbeat', gimmick: true,
  },
  {
    // The second READY snaps the fracture back to one lane and holds it until
    // the 1:40 camera break.
    name: 'FASTBEAT', start: 94.2, end: 104, keys: 1, bpm: 195, beatOffset: 0.005,
    color: '#ffffff', accent: '#ffffff', energy: 0.82, bloom: 0.42, phase: 'fastbeat',
  },
  {
    name: 'TIDE', start: 104, end: 117, keys: 4, bpm: 150, beatOffset: 0.375,
    color: '#dff4ff', accent: '#ffffff', energy: 0.5, bloom: 0.52, phase: 'ocean2',
  },
  {
    name: 'MEMORY', start: 117, end: 139, keys: 4, bpm: 150, beatOffset: 0.375,
    color: '#dfe9ff', accent: '#ffffff', energy: 0.48, bloom: 0.5, phase: 'memory',
  },
  {
    name: 'STATIC', start: 139, end: 157, keys: 4, bpm: 145, beatOffset: 0.375,
    color: '#e6ecff', accent: '#ffffff', energy: 0.55, bloom: 0.48, phase: 'static',
  },
  {
    name: 'DETERMINATION', start: 157, end: 181, keys: 6, bpm: 150, beatOffset: 0.375,
    color: '#fff6d8', accent: '#ffffff', energy: 0.78, bloom: 0.6, phase: 'determined',
  },
  {
    name: 'WHITEOUT', start: 181, end: 182, keys: 4, bpm: 150, beatOffset: 0.375,
    color: '#ffffff', accent: '#ffffff', energy: 0.2, bloom: 0.2, phase: 'white', notes: false,
  },
  {
    name: 'FAKE GUILT', start: 182, end: 204.5, keys: 4, bpm: 150, beatOffset: 0.385,
    color: '#ff3355', accent: '#ff3355', energy: 0.7, bloom: 0.36, phase: 'fake',
  },
  {
    name: 'DAWN', start: 204.5, end: duration, keys: 4, bpm: 150, beatOffset: 0.385,
    color: '#ffe9a8', accent: '#ffffff', energy: 0.22, bloom: 0.6, phase: 'dawn', notes: false,
  },
];

for (const s of sections) {
  s.firstNote = null;
  s.intro = !!s.intro;
  s.camZ = 17.2;
  s.camY = 6.7;
  s.rotY = 0;
  s.rotZ = 0;
  s.tilt = 0;
  s.spread = 1;
  s.y = 0.06;
  s.spin = 0.02;
  s.motion = 'fan';
  s.motionAmp = 0;
  s.motionSpeed = 0.4;
  s.motionPitch = 0;
  s.city = 0;
}

// Note travel speed per section. The "Ready" run keeps raising it alongside
// the tempo so the 195 BPM passages feel physically faster, not just denser.
const noteSpeedBySection = {
  VOID: 1, REVELATION: .95, DESCENT: 1, ASSAIL: 1.02, LIBRA: 1, HALO: 1.05,
  DISTORTION: .9, GUILT: 1.05, 'GUILT II': 1.12, OFFBEAT: 1.18,
  FASTBEAT: 1.28, TIDE: 1.02, MEMORY: 1, STATIC: 1.04, DETERMINATION: 1.12,
  WHITEOUT: 1, 'FAKE GUILT': 1.15, DAWN: 1,
};
for (const s of sections) s.noteSpeed = noteSpeedBySection[s.name] ?? 1;

function pickLane(keys, i, variant = 0) {
  const set = ACTIVE[keys];
  if (keys === 1) return set[0];
  if (keys === 2) return set[(i + variant) % 2];
  const pats = {
    0: [0, 1, 2, 3, 2, 1, 3, 0, 2, 1, 0, 3],
    1: [0, 2, 1, 3, 0, 3, 1, 2, 0, 1, 2, 3],
    2: [3, 2, 1, 0, 1, 2, 3, 2, 1, 0, 2, 3],
    3: [0, 1, 0, 2, 1, 3, 2, 3, 0, 2, 3, 1],
  };
  const p = pats[variant % 4];
  return set[p[i % p.length] % set.length];
}

function run(start, end, div, opts = {}) {
  const sec = sections.find((s) => start >= s.start && start < s.end);
  const out = grid(start, end, sec.bpm, sec.beatOffset, div);
  let i = 0;
  let added = 0;
  for (const t of out) {
    const strength = strengthAt(t, 0.065);
    const min = opts.min ?? 0;
    if (strength < min) { i++; continue; }
    // deterministic thinning keeps every phrase breathing instead of filling
    // every subdivision of an already dense boss chart
    if (opts.keep && hash(t, opts.salt || 1) > opts.keep) { i++; continue; }
    if (opts.skip && i % opts.skip === opts.skip - 1) { i++; continue; }
    const lane = opts.lane ?? pickLane(sec.keys, i, opts.variant || 0);
    if (addTap(t, lane)) added++;
    i++;
  }
  return added;
}

// REVELATION: the first reveal of the ocean. Sparse, ringing taps with long
// gaps so the player can look at the skyline before the boss takes hold.
run(19.6, 24.4, 2, { min: 0.022, keep: 0.62, variant: 0 });
run(24.4, 28.5, 2, { min: 0.012, keep: 0.82, variant: 1 });

// DESCENT: one lane, a fast camera corkscrew. Quarter notes on the real grid.
run(30.7, 33.5, 2, { keep: 0.85, lane: 3 });

// ASSAIL: the field opens to four lanes.
run(35.7, 40, 2, { min: 0.012, keep: 0.8, variant: 2 });
run(40, 46, 2, { min: 0.006, keep: 0.9, variant: 3 });

// LIBRA: pillars grow and the camera glides around the library. Holds in the
// wide-open bars give the player something to lean on while looking around.
addHold(47.1, 2, 1.25);
addHold(52.4, 5, 1.6);
addHold(57.15, 3, 1.75);
run(46, 52, 2, { min: 0.008, keep: 0.78, variant: 1 });
run(52, 58, 2, { min: 0.006, keep: 0.82, variant: 0 });
run(58, 61.5, 2, { min: 0.004, keep: 0.9, variant: 3 });

// HALO: top-down camera, spinning star, and the first sixteenth-note bursts.
addHold(62.1, 4, 1.3);
run(61.5, 66.2, 2, { min: 0.004, keep: 0.86, variant: 2 });
run(66.2, 71.8, 4, { keep: 0.42, variant: 1 });

// GUILT: one lane, black screen. The tempo climbs from 150 to 180, so the
// grid is integrated ramp-by-ramp instead of snapped to a fixed BPM.
for (const t of ramp(76.8, 81, 150, 168, 1)) addTap(t, 3);
for (const t of ramp(81, 88, 168, 180, 1)) addTap(t, 3);
for (const t of ramp(84.2, 88, 174, 180, 2)) {
  if (hash(t, 12) < 0.5) addTap(t, 3);
}

// OFFBEAT: two lanes, the gimmick. The accented tap is always the fourth beat
// of the bar; the second lane answers on a syncopated off-beat so the rhythm
// is deliberately different from the pulse. The second READY then hands the
// screen back to a single lane.
function offbeatBars(start, end, bpmA, bpmB) {
  const times = ramp(start, end, bpmA, bpmB, 4); // sixteenth grid
  let bar = 0;
  for (let i = 16; i + 15 < times.length; i += 16) {
    const base = times[i];
    addTap(times[i + 12], 2);             // beat 4 — the required accent
    addTap(times[i + 6], 4);              // the "and" of beat 2 — displacement
    if (bar % 2 === 1) addTap(times[i + 14], 4); // late sixteenth answer
    if (bar % 4 === 3) {
      addTap(times[i + 13], 2);
      addTap(times[i + 15], 4);
    }
    bar++;
  }
  // late gimmick pressure: quick two-lane alternations on the last bar
  const tail = times.slice(-12);
  tail.forEach((t, i) => {
    if (i % 2 === 0) addTap(t, i % 4 === 0 ? 2 : 4);
  });
}
offbeatBars(88, 94.2, 180, 190);

// FASTBEAT: the second READY drops back to one lane at 195 BPM. Eighths carry
// the body and a short sixteenth surge lands just before the 1:40 lens break.
for (const t of ramp(94.2, 104, 195, 195, 2)) {
  if (hash(t, 4) < 0.94) addTap(t, 3);
}
for (const t of ramp(102.4, 104, 195, 195, 4)) {
  if (hash(t, 5) < 0.62) addTap(t, 3);
}

// TIDE: ocean return. Holds carry the memory of the guilt section; taps fill
// the gaps between them so the long notes never feel like dead space.
addHold(106.4, 3, 1.6);
addHold(109.4, 2, 1.8);
addHold(112.3, 5, 2.0);
addHold(115.1, 4, 1.5);
run(106.2, 110, 2, { min: 0.004, keep: 0.62, variant: 2 });
run(110, 117, 2, { min: 0.004, keep: 0.7, variant: 0 });

// MEMORY: the guilt memory floats toward the sky. Sparse first half, with
// holds that let the player watch it rise; the second half fills back in.
addHold(117.6, 3, 2.2);
addHold(121.3, 5, 1.8);
addHold(124.4, 2, 2.5);
addHold(128.6, 4, 1.6);
addHold(132.2, 5, 2.1);
addHold(136.0, 3, 1.9);
run(117, 126, 2, { min: 0.004, keep: 0.48, variant: 1 });
run(126, 139, 2, { min: 0.002, keep: 0.74, variant: 3 });

// STATIC: transparent interference. Medium density, a few long holds.
addHold(140.2, 2, 1.5);
addHold(145.8, 5, 1.8);
addHold(151.1, 3, 2.0);
run(139, 148, 2, { min: 0.002, keep: 0.66, variant: 2 });
run(148, 157, 2, { min: 0.002, keep: 0.76, variant: 1 });

// DETERMINATION: six lanes, bright and open. Chords land on the strongest
// onsets, and long holds anchor each phrase.
addHold(159.4, 2, 2.0);
addHold(163.4, 6, 1.8);
addHold(167.0, 3, 2.4);
addHold(171.2, 4, 1.7);
addHold(175.0, 2, 2.2);
addHold(178.4, 6, 1.9);
{
  const times = grid(159.4, 181, 150, 0.375, 2);
  let i = 0;
  for (const t of times) {
    const s = strengthAt(t, 0.06);
    if (s < 0.003 && hash(t, 21) > 0.55) { i++; continue; }
    const lane = pickLane(6, i, 1);
    addTap(t, lane);
    if (s > 0.055 && i % 4 === 0) {
      const other = pickLane(6, i + 3, 2);
      if (other !== lane) addTap(t, other);
    }
    i++;
  }
}

// FAKE GUILT: four lanes on black, glitching, with the decorative bar nearly
// empty. Sixteenth bursts in the last bar make the final push feel dangerous.
addHold(184.4, 2, 1.4);
addHold(188.4, 5, 1.6);
addHold(195.6, 3, 1.5);
{
  const times = grid(184.3, 199, 150, 0.385, 2);
  let i = 0;
  for (const t of times) {
    if (hash(t, 31) > 0.82) { i++; continue; }
    addTap(t, pickLane(4, i, 2));
    i++;
  }
  for (const t of grid(199, 204.5, 150, 0.385, 4)) {
    if (hash(t, 33) < 0.52) addTap(t, pickLane(4, Math.round(t * 10), 3));
  }
}

// Sort and fill section first-note metadata.
notes.sort((a, b) => a.t - b.t || a.lane - b.lane);
for (const s of sections) {
  const n = notes.find((x) => x.t >= s.start && x.t < s.end);
  s.firstNote = n ? n.t : s.start;
}

// ---------------------------------------------------------------- events
const events = [];
function ev(e) { events.push(e); }
function cam(t, pos, look, fov = 52, roll = 0, dur = 1.0) {
  ev({ t: +t.toFixed(3), type: 'bossCamera', pos, look, fov, roll, dur });
}
function pulse(t, power = 0.4) { ev({ t: +t.toFixed(3), type: 'pulse', power }); }
function glitch(t, power = 0.8) { ev({ t: +t.toFixed(3), type: 'bossGlitch', power }); }
function caption(t, title, sub = '', kicker = '', hold = 3.2) {
  ev({ t: +t.toFixed(3), type: 'caption', kicker, title, sub, hold });
}
function intent(t, mode, data = {}) {
  ev({ t: +t.toFixed(3), type: 'intent', mode, ...data });
}
function boundary(t, phase, extra = {}) {
  intent(t, 'phase', { phase, ...extra });
}
function hud(t, hudMode, extra = {}) {
  intent(t, 'hud', { hud: hudMode, ...extra });
}

// Opening: black void, white motes, and a title card. The lane field is
// completely hidden until the ocean reveal; this is a lane-less overture.
cam(0, [0, 10, 34], [0, 11, -70], 52, 0, 0.01);
intent(0, 'phase', { phase: 'void' });
glitch(0, 0.35);
caption(1.1, 'INTENTION', 'A BOSS IN FOUR MEMORIES', 'PROLOGUE', 4.6);
pulse(4.6, 0.5);
cam(4.8, [0, 9, 31], [0, 10, -66], 54, -0.012, 1.6);
pulse(8.4, 0.45);
cam(8.6, [-7, 7, 25], [5, 9, -58], 58, 0.02, 1.8);
glitch(10.6, 0.55);
pulse(12.8, 0.5);
cam(12.8, [5, 8.5, 28], [-4, 9, -62], 55, -0.018, 1.7);
caption(13.2, 'THE OCEAN REMEMBERS', 'ONE LINE. ONE BREATH.', 'REVELATION', 3.2);

// Ocean reveal.
boundary(17.5, 'ocean');
hud(17.5, 'clear');
cam(17.5, [0, 7.2, 20], [0, 4.0, -12], 55, 0, 1.6);
glitch(17.5, 0.7);
pulse(17.5, 0.7);
ev({ t: 17.5, type: 'bossPhase', mode: 'play' });
cam(20.6, [-5.5, 6.2, 17], [1.8, 3.4, -6], 53, 0.012, 1.3);
pulse(20.6, 0.4);
cam(24.0, [5.5, 6.8, 16], [-1.8, 3.5, -7], 53, -0.015, 1.3);
pulse(24.0, 0.4);
cam(27.0, [0, 7.0, 18], [0, 4.0, -9], 54, 0, 1.0);

// One-lane corkscrew. The camera orbits the centred hit ring, then snaps back
// to the four-lane field.
boundary(28.5, 'spin');
caption(28.8, 'ONE LINE', 'HOLD THE CENTRE', 'DESCENT', 2.4);
cam(28.5, [0, 2.6, 7.2], [0, 1.5, 0], 58, 0, 0.4);
for (let i = 0; i < 6; i++) {
  const a = i * Math.PI / 3 + 0.4;
  cam(29.2 + i * 0.72, [Math.sin(a) * 4.4, 1.7 + (i % 2) * 1.1, Math.cos(a) * 4.4 + 1.4],
    [0, 1.2, 0], 60, Math.sin(a) * 0.1, 0.55);
  glitch(29.2 + i * 0.72, 0.32);
}
boundary(33.2, 'field');
cam(33.2, [0, 7.0, 17.2], [0, 4.05, 0], 50, 0, 0.7);
pulse(33.2, 0.55);

// Four-lane assault.
cam(36.0, [-4.5, 6.0, 15.5], [1.2, 3.5, -2], 52, 0.02, 1.2);
cam(40.0, [4.5, 6.4, 16.5], [-1.2, 3.6, -2], 52, -0.02, 1.2);
pulse(40, 0.45);

// Libra pillars. The camera glides laterally through the library, always
// keeping the ring row in the lower half of the frame.
boundary(46, 'pillars');
caption(46.4, 'LIBRA', 'FOUR PILLARS. ONE WEIGHT.', 'APOTHEOSIS', 3.4);
cam(46, [-9, 5.2, 16], [2.5, 3.1, -7], 56, 0.025, 1.5);
glitch(46, 0.55);
pulse(46, 0.7);
cam(49.4, [-14, 6.0, 10], [4.5, 3.4, -12], 58, 0.035, 1.4);
cam(52.8, [12, 5.6, 12], [-3.5, 3.2, -10], 58, -0.03, 1.5);
cam(56.2, [15, 6.6, 5], [-4, 3.8, -16], 58, -0.04, 1.4);
cam(59.2, [3, 7.2, 10], [0, 4.0, -12], 56, 0.02, 1.2);
pulse(52.8, 0.5);

// Halo / top-down. The spinning star sits above the libra while the camera
// looks down through it; the lane rows stay visible at the bottom edge.
boundary(61.5, 'halo');
hud(61.8, 'text', { text: 'INTENTIONS', sub: 'LOOK UP', hold: 3.4 });
cam(61.5, [0, 14.5, 13], [0, 0, -12], 62, 0, 1.2);
glitch(61.5, 0.8);
pulse(61.5, 0.8);
cam(63.4, [0, 15.5, 7], [0, 0, -16], 62, 0.03, 1.1);
cam(65.8, [0, 13.0, 8], [0, 0, -8], 60, -0.03, 1.2);
cam(68.4, [4, 9.0, 14], [-1, 2.4, -6], 55, 0.035, 1.3);
cam(70.6, [0, 8.0, 17], [0, 4.0, 0], 53, 0, 1.0);

// Distortion / blackout.
boundary(72, 'dark');
hud(72, 'distort', { power: 1 });
hud(72, 'heartbeat', { on: true, bpm: 150 });
cam(72, [0, 3.2, 8.0], [0, 2.5, -1], 56, 0.025, 0.8);
glitch(72, 1.2);
pulse(72, 0.8);
cam(73.3, [0, 2.4, 6.2], [0, 2.2, -1], 60, -0.04, 0.7);

// GUILT: consciousness returns on a black screen. One lane, heartbeat, and a
// red bar that only stays full if the player keeps landing perfects.
boundary(74.5, 'guilt');
hud(74.5, 'distort', { on: false });
hud(74.5, 'black', { on: true });
hud(74.5, 'guilt', { on: true, value: 100 });
hud(74.5, 'heartbeat', { on: true, bpm: 160 });
caption(75.0, 'READY', 'KEEP IT FULL', 'GUILT', 2.6);
cam(74.5, [0, 2.8, 11.4], [0, 2.4, 0], 52, 0, 0.7);
glitch(74.5, 1.1);
pulse(74.5, 0.8);
cam(78, [0, 2.6, 9.4], [0, 2.2, 0], 54, 0.015, 1.0);
cam(81, [0, 3.2, 12.2], [0, 2.6, 0], 52, -0.015, 1.0);
caption(81.2, 'FASTER', 'TRUST THE PULSE', 'GUILT II', 2.2);
glitch(81, 0.75);

// OFFBEAT: two lanes. The bar opens to a wide frame while the notes answer
// the fourth beat from the syncopated side.
boundary(88, 'offbeat');
hud(88, 'glitch', { on: true });
caption(88.2, 'OFFBEAT', 'TWO LINES. FOURTH BEAT.', 'FRACTURE', 3.0);
cam(88, [0, 4.0, 14.8], [0, 3.1, 0], 54, 0, 0.8);
glitch(88, 1.0);
pulse(88, 0.8);
cam(91, [-3, 3.6, 12.5], [1, 2.8, 0], 52, 0.02, 0.9);

// Second READY: the fracture resolves back to the fast one-lane pattern.
boundary(94.2, 'fastbeat');
hud(94.2, 'heartbeat', { on: true, bpm: 195 });
caption(94.2, 'READY', 'FASTER STILL', 'FASTBEAT', 2.2);
glitch(94.2, 0.9);
pulse(94.2, 0.7);
cam(94.2, [3, 4.2, 14.2], [-1, 3.1, 0], 52, -0.02, 0.9);
cam(97, [0, 3.5, 11.5], [0, 2.7, 0], 50, 0, 0.8);
cam(100, [0, 3.2, 10.5], [0, 2.5, 0], 50, 0.045, 0.8);

// One lane, metallic and close, until the 1:40 camera break.
caption(100.2, 'ONE LINE', 'NO ROOM LEFT', 'FASTBEAT II', 2.2);
glitch(100, 1.0);
pulse(102, 0.7);
// 1:40 — the lens itself starts to come apart before the ocean returns.
cam(102.4, [-2.4, 2.9, 9.4], [0.6, 2.4, 0], 52, 0.055, 0.6);
cam(103.4, [2.4, 3.1, 9.0], [-0.6, 2.5, 0], 53, -0.06, 0.5);
glitch(103.4, 1.2);
pulse(103.4, 0.8);

// Ocean return. Guilt releases; the world comes back in blue.
boundary(104, 'ocean2');
hud(104, 'black', { on: false });
hud(104, 'guilt', { on: false });
hud(104, 'heartbeat', { on: false });
hud(104, 'glitch', { on: false });
hud(104, 'clear');
cam(104, [0, 8.0, 21], [0, 4.2, -12], 55, 0, 1.3);
pulse(104, 0.7);
cam(108, [-6, 7.0, 19], [1.8, 4.0, -10], 54, 0.02, 1.4);
cam(112, [6, 8.0, 18], [-1.8, 4.2, -9], 54, -0.02, 1.4);
cam(115.5, [0, 8.6, 21], [0, 4.8, -14], 54, 0, 1.1);

// MEMORY: the guilt memory rises toward the sky. The camera lifts its gaze
// without losing the ring row; a transparent static veil crosses the screen.
boundary(117, 'memory');
hud(117, 'static', { on: true, power: 0.6 });
hud(117, 'heartbeat', { on: true, bpm: 90 });
caption(117.6, 'THE MEMORY RISES', 'DO NOT LET GO', 'MEMORY', 3.4);
cam(117, [0, 8.2, 21], [0, 5.2, -16], 55, 0, 1.4);
pulse(117, 0.6);
glitch(117, 0.6);
cam(123, [0, 8.0, 19], [0, 6.0, -20], 55, 0.015, 1.6);
cam(129, [0, 8.4, 19.5], [0, 5.8, -18], 55, -0.012, 1.6);
cam(135, [0, 8.2, 20], [0, 5.2, -15], 55, 0, 1.4);
pulse(129, 0.5);

// STATIC: interference thickens, then determination cuts through.
boundary(139, 'static');
hud(139, 'static', { on: true, power: 1 });
hud(139, 'distort', { on: true, power: 0.6 });
caption(139.4, 'STATIC', 'SOMETHING REMAINS', '', 2.8);
cam(139, [0, 7.4, 18.5], [0, 4.4, -8], 55, 0.015, 1.2);
glitch(139, 0.8);
cam(145, [-4, 7.2, 17], [1.4, 4.2, -6], 54, 0.02, 1.5);
cam(151, [4, 7.8, 19], [-1.4, 4.4, -7], 54, -0.02, 1.5);
pulse(151, 0.55);

// DETERMINATION: all bright, six lanes, the resolve phrase.
boundary(157, 'determined');
hud(157, 'static', { on: false });
hud(157, 'distort', { on: false });
hud(157, 'heartbeat', { on: false });
hud(157, 'bright', { on: true });
caption(157.4, 'DETERMINATION', 'ALL OF IT, NOW', '', 3.2);
cam(157, [0, 8.6, 23], [0, 4.8, -9], 55, 0, 1.4);
pulse(157, 0.8);
glitch(157, 0.5);
cam(163, [-5, 7.4, 19], [1.6, 4.2, -4], 53, 0.018, 1.4);
cam(169, [5, 7.8, 20], [-1.6, 4.4, -5], 53, -0.018, 1.4);
cam(175, [0, 8.4, 22], [0, 4.8, -8], 54, 0, 1.4);
pulse(169, 0.55);
pulse(175, 0.6);

// Whiteout and the false guilt.
boundary(181, 'white');
hud(181, 'white', { on: true });
cam(181, [0, 8.0, 20], [0, 4.0, 0], 54, 0, 0.4);
glitch(181, 1.2);
boundary(182, 'fake');
hud(182, 'white', { on: false });
hud(182, 'black', { on: true });
hud(182, 'fakeGuilt', { on: true, value: 14 });
hud(182, 'heartbeat', { on: true, bpm: 150 });
hud(182, 'glitch', { on: true });
caption(182.4, 'GUILT', 'IT WILL NOT REFILL', '', 3.0);
cam(182, [0, 3.3, 12.0], [0, 2.7, 0], 50, 0.02, 0.6);
glitch(182, 1.2);
pulse(182, 0.8);
cam(188, [0, 3.1, 10.8], [0, 2.5, 0], 49, -0.02, 1.0);
cam(194, [0, 3.7, 13.2], [0, 3.0, 0], 51, 0.015, 1.0);
glitch(194, 0.8);
cam(200, [0, 3.4, 11.5], [0, 2.8, 0], 50, -0.015, 0.9);
glitch(200, 0.9);

// Dawn. The fake bar is replaced by the rainbow sync bar; all notes are
// hidden, the ocean opens, and the flowers take over the frame.
boundary(204.5, 'dawn');
hud(204.5, 'fakeGuilt', { on: false });
hud(204.5, 'black', { on: false });
hud(204.5, 'glitch', { on: false });
hud(204.5, 'heartbeat', { on: false });
hud(204.5, 'bright', { on: false });
hud(204.5, 'yellow', { on: true });
hud(204.5, 'rainbow', { on: true });
ev({ t: 204.5, type: 'bossPhase', mode: 'outro' });
caption(204.5, 'DAWN', 'THE WEIGHT IS LIGHT', '', 4.0);
cam(204.5, [0, 7.5, 20], [0, 4.5, -12], 55, 0, 1.4);
pulse(204.6, 0.8);
glitch(204.5, 0.8);
cam(208.0, [0, 9.5, 25], [0, 8.0, -40], 56, 0, 2.2);
cam(211.2, [0, 12, 30], [0, 12, -60], 58, 0, 2.0);
hud(211.5, 'white', { on: false });

// Pulse/tick accents every two bars for the main body. These only drive
// background bloom and the libra, never judging.
for (const s of sections) {
  if (!s.notes === false) { /* noop: keeps the branch readable */ }
  if (s.start < 17.5 || s.start >= 204.5) continue;
  const bpm = s.bpm;
  const beat = 60 / bpm;
  for (let t = s.start + beat * 2; t < s.end; t += beat * 4) {
    if (hash(t, 8) > 0.55) pulse(t, 0.2 + hash(t, 9) * 0.3);
  }
}

events.sort((a, b) => a.t - b.t);
const holds = notes.filter((n) => n.type === 'hold');
const chart = {
  song: {
    title: 'INTENTION',
    shortTitle: 'INTENTION',
    artist: 'ORIGINAL TRACK',
    bpm: 180,
    bpmLabel: '180 / 195 BPM',
    bpmMap: [
      { t: 0, bpm: 75 },
      { t: 17.5, bpm: 150 },
      { t: 74.5, bpm: 165 },
      { t: 81, bpm: 180 },
      { t: 94.2, bpm: 195 },
      { t: 104, bpm: 150 },
      { t: 181, bpm: 150 },
      { t: 204.5, bpm: 150 },
    ],
    duration,
    chartEnd: 212.8,
    introEnd: 17.5,
    beatOffset: 0.075,
    difficulty: 'BOSS',
    laneLabel: '1 · 2 · 4 · 6',
    boss: true,
    theme: 'intention',
    laneColors: ['#ffffff'],
    fadeStart: 209.6,
    fadeEnd: 212.2,
  },
  sections,
  notes,
  events,
  ghosts: [],
  swings: [],
};

writeFileSync(new URL('../src/charts/intention.js', import.meta.url),
  '// Generated by tools/build-intention-chart.mjs — do not edit by hand.\n'
  + 'export const CHART = ' + JSON.stringify(chart, null, 2) + ';\n');

console.log(JSON.stringify({
  notes: notes.length,
  holds: holds.length,
  events: events.length,
  first: notes[0]?.t,
  last: notes.at(-1)?.t,
  sections: sections.length,
  durations: holds.slice(0, 6).map((h) => h.dur),
}, null, 1));
