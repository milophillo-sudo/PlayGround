// Builds INTENTION // CHAOS, a menu-selected remix chart for the same record.
//
// It keeps the record's clock and the stage's authored phases, but replaces the
// careful 4/6-lane reading chart with an 8-lane, chord-heavy chart:
//   * 1200 notes, at least 150 sustained holds;
//   * deterministic lane grammar with two- and three-finger chords;
//   * far-glide camera cuts, story cards, static/guilt/heartbeat HUD cues;
//   * no overture: the chart starts in normal play with flying particles.
//
// Run: node tools/build-chaos-chart.mjs
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CHART as BASE } from '../src/charts/intention.js';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const OUT = resolve(root, 'src/charts/intention-chaos.js');

const rng = (() => {
  let s = 0x1a2b3c4d;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
})();
const pick = (arr) => arr[Math.floor(rng() * arr.length)];
const round = (n, p = 3) => Number(n.toFixed(p));
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

const ACTIVE = { 1: [3], 2: [2, 4], 4: [2, 3, 4, 5], 6: [1, 2, 3, 4, 5, 6], 8: [0, 1, 2, 3, 4, 5, 6, 7] };

// ---------------------------------------------------------------- sections
// The original song structure is the backbone; the chaos remix widens the
// reading field and turns the quiet intro into an immediate ignition burst.
const sectionDefs = [
  ['IGNITION', 0, 17.5, 8, 150, 'chaos', 'The field starts hot. No overture.'],
  ['SURGE', 17.5, 33.5, 8, 150, 'chaos'],
  ['FRACTURE', 33.5, 46, 8, 165, 'storm'],
  ['LIBRA', 46, 61.5, 6, 150, 'chaos'],
  ['HALO', 61.5, 72, 8, 150, 'chaos2'],
  ['GUILT', 72, 88, 4, 180, 'glide'],
  ['FASTBEAT', 88, 104, 8, 195, 'storm'],
  ['TIDE', 104, 117, 8, 160, 'chaos'],
  ['MEMORY', 117, 139, 6, 150, 'memory'],
  ['STATIC', 139, 157, 8, 170, 'collapse'],
  ['DETERMINATION', 157, 181, 8, 165, 'chaos2'],
  ['FAKE GUILT', 181, 204.5, 8, 180, 'chaos2'],
  ['DAWN', 204.5, 213.505, 4, 150, 'dawn'],
];

const baseByStart = new Map(BASE.sections.map((s) => [s.start, s]));
const sections = sectionDefs.map(([name, start, end, keys, bpm, phase, blurb], i) => {
  const base = baseByStart.get(start) || BASE.sections[Math.min(i, BASE.sections.length - 1)];
  return {
    name,
    start,
    end,
    keys,
    bpm,
    beatOffset: BASE.song.beatOffset || 0,
    color: '#ffffff',
    accent: phase === 'collapse' ? '#ff3b5c' : phase === 'memory' ? '#ffd166' : '#ffffff',
    energy: 0.9,
    bloom: phase === 'dawn' ? 0.9 : 0.72,
    intro: false,
    phase,
    // FAKE GUILT is intentionally silent, so it must not reserve a note budget
    // that the fallback would then dump into DAWN as an unplayable cluster.
    notes: name !== 'FAKE GUILT',
    camZ: base.camZ ?? 17,
    camY: base.camY ?? 6.5,
    rotY: base.rotY ?? 0,
    rotZ: base.rotZ ?? 0,
    tilt: base.tilt ?? 0,
    spread: 1.08,
    y: base.y ?? 0.06,
    spin: phase === 'storm' || phase === 'collapse' ? 0.18 : 0.06,
    motion: phase === 'storm' ? 'zigzag' : phase === 'collapse' ? 'orbit' : 'fan',
    noteSpeed: phase === 'storm' || phase === 'collapse' ? 1.12 : 1,
    ...(blurb ? { blurb } : {}),
  };
});

// ---------------------------------------------------------------- notes
const TARGET = 1200;
const HOLD_MIN = 150;
// The record fades from 209.6s. DAWN still gets a real, playable phrase, but
// its last chart entries must stay clear of the fade and the chart end.
const DAWN_NOTE_END = 208.8;
const noteEndFor = (sec) => Math.min(sec.end - 0.16, sec.phase === 'dawn' ? DAWN_NOTE_END : Infinity);
// FAKE GUILT is a deliberately visible, note-free false-guilt window.  Keep
// this separate from DAWN and the whiteout: the window still has a live field,
// but there are no chart entries or HUD flash/white/rainbow cues within it.
const REST_WINDOWS = [[181, 204.5]];
const inRest = (t, dur = 0) => REST_WINDOWS.some(([a, b]) => t < b && t + dur > a);
const notes = [];
const laneFree = new Array(8).fill(-1);
const lanePrimary = [0, 3, 1, 4, 2, 5, 7, 6, 3, 0, 5, 2, 4, 7, 1, 6, 2, 6, 0, 4, 5, 1, 7, 3];

function place(t, lane, type = 'tap', dur = 0) {
  if (t < 0 || t > DAWN_NOTE_END) return false;
  if (inRest(t, dur)) return false;
  if (t < laneFree[lane] + 0.085) return false;
  if (type === 'hold') {
    laneFree[lane] = t + dur + 0.12;
    notes.push({ t: round(t), lane, type: 'hold', dur: round(dur) });
  } else {
    laneFree[lane] = t;
    notes.push({ t: round(t), lane });
  }
  return true;
}

function chordLanes(primary, active, count) {
  const set = new Set([primary]);
  const candidates = active.filter((l) => l !== primary);
  while (set.size < Math.min(count, active.length)) {
    const lane = pick(candidates);
    set.add(lane);
    candidates.splice(candidates.indexOf(lane), 1);
  }
  return [...set];
}

let accepted = 0;
let holdCount = 0;
const noteSections = sections.filter((s) => s.notes);
const totalSpan = noteSections.reduce((sum, s) => sum + Math.max(0.5, noteEndFor(s) - s.start), 0);

// Give every section a note budget proportional to its length. The final
// section takes the rounding remainder so the chart always lands on exactly
// 1200 notes.
const budgets = [];
let budgeted = 0;
for (let si = 0; si < noteSections.length; si++) {
  const sec = noteSections[si];
  const budget = si === noteSections.length - 1
    ? TARGET - budgeted
    : Math.round(TARGET * ((Math.max(0.5, noteEndFor(sec) - sec.start)) / totalSpan));
  budgeted += budget;
  budgets.push(budget);
}

for (let si = 0; si < noteSections.length; si++) {
  const sec = noteSections[si];
  const budget = budgets[si];
  const step = 60 / sec.bpm / 4;
  const active = ACTIVE[sec.keys] || ACTIVE[8];
  const start = Math.max(1.05, sec.start + 0.015);
  const end = noteEndFor(sec);
  let secAccepted = 0;
  // Chords are accents, not a default texture. Counting a little over one
  // note per accepted slot lets the pacing pass cover every bar instead of
  // exhausting its budget in the first half of the section.
  const AVG_NOTES_PER_SLOT = 1.15;
  const slots = [];
  for (let t = start; t < end; t += step) slots.push(t);
  // Every section gets its own lane path so the charts read as movements,
  // not one endless random stream.
  let phase = Math.floor(rng() * lanePrimary.length);
  let leading = budget;
  for (let j = 0; j < slots.length && leading > 0 && accepted < TARGET; j++) {
    const t = slots[j];
    if (inRest(t)) continue;
    const slotsLeft = slots.length - j;
    const beat = (t - sec.start) / (60 / sec.bpm);
    const sixteenth = Math.round((t - sec.start) / step);
    // Leave a little air on the first beat of each bar.
    if (sixteenth % 16 === 0 && rng() < 0.28) continue;
    // Pace the section's whole budget across all of its sixteenths. Without
    // this the old fixed accept-reject roll hit the quota halfway through and
    // left the last 4-8 seconds of every movement silent.
    let pAccept = (leading / (slotsLeft * AVG_NOTES_PER_SLOT))
      * (sec.phase === 'storm' || sec.phase === 'collapse' ? 1.12 : 1.04);
    if (slotsLeft <= leading) pAccept = 1;
    if (rng() > pAccept) continue;

    phase = (phase + 1 + (rng() < 0.25 ? 3 : 0)) % lanePrimary.length;
    let primary = lanePrimary[phase] % 8;
    if (!active.includes(primary)) primary = active[Math.floor(rng() * active.length)];

    const chordRoll = rng();
    const barBeat = ((Math.floor(beat) % 4) + 4) % 4;
    let chord = 1;
    if (barBeat === 0 && chordRoll < 0.12) chord = 3;
    else if (barBeat === 2 && chordRoll < 0.22) chord = 2;
    else if (barBeat !== 0 && chordRoll < 0.10) chord = 2;
    if (chord > leading) chord = leading >= 2 && chord === 3 ? 2 : 1;

    const wantHold = holdCount < HOLD_MIN ? rng() < 0.115 : rng() < 0.02;
    if (wantHold && chord === 1) {
      const dur = 0.34 + rng() * 0.62;
      if (place(t, primary, 'hold', dur)) {
        accepted++;
        secAccepted++;
        leading--;
        holdCount++;
        continue;
      }
    }
    const lanes = chordLanes(primary, active, chord);
    let placed = 0;
    for (const lane of lanes) {
      if (accepted >= TARGET || secAccepted >= budget || leading <= 0) break;
      if (place(t, lane)) { accepted++; secAccepted++; leading--; placed++; }
    }
    if (!placed) {
      // The lane path got pinned by a hold. Nudge to the next free lane.
      const free = active.filter((l) => t >= laneFree[l] + 0.085 && !inRest(t));
      if (free.length && place(t, pick(free))) { accepted++; secAccepted++; leading--; }
    }
  }
}

notes.sort((a, b) => a.t - b.t || a.lane - b.lane);

// Top up to exactly 1200 notes if the phrase grammar came in short. Pick the
// missing slots evenly across the whole record so no single section becomes
// the dumping ground.
if (notes.length < TARGET) {
  const missing = TARGET - notes.length;
  const topSlots = [];
  for (let topT = 2.0; topT < 211.9; topT += 0.083) {
    if (inRest(topT)) continue;
    const sec = sections.find((s) => topT >= s.start && topT < s.end && s.notes);
    if (!sec || topT > noteEndFor(sec)) continue;
    topSlots.push({ t: topT, sec });
  }
  const stride = topSlots.length / Math.max(1, missing);
  for (let k = 0; k < missing && notes.length < TARGET; k++) {
    const base = Math.floor(k * stride);
    let done = false;
    for (let retry = 0; retry < 12 && !done; retry++) {
      const slot = topSlots[Math.min(topSlots.length - 1, base + retry)];
      if (!slot) break;
      const active = ACTIVE[slot.sec.keys] || ACTIVE[8];
      const order = active.slice().sort(() => rng() - 0.5);
      for (const lane of order) {
        if (place(slot.t, lane)) { done = true; break; }
      }
    }
  }
}
// Last-resort fill keeps the promised 1200 notes even if every evenly spaced
// top-up slot was pinned by a hold.
if (notes.length < TARGET) {
  for (let topT = 2.0; topT < 211.9 && notes.length < TARGET; topT += 0.023) {
    const sec = sections.find((s) => topT >= s.start && topT < s.end && s.notes);
    if (!sec || topT > noteEndFor(sec) || inRest(topT)) continue;
    const active = ACTIVE[sec.keys] || ACTIVE[8];
    for (const lane of active) {
      if (place(topT, lane)) break;
    }
  }
  // Dense fallback: one lane is enough to complete the count. It deliberately
  // samples only outside the rest window and outside the chart's lane cooldown.
  for (let topT = 2.0; topT < 211.9 && notes.length < TARGET; topT += 0.007) {
    const sec = sections.find((s) => topT >= s.start && topT < s.end && s.notes);
    if (!sec || topT > noteEndFor(sec) || inRest(topT)) continue;
    const active = ACTIVE[sec.keys] || ACTIVE[8];
    for (let laneIndex = 0; laneIndex < active.length && notes.length < TARGET; laneIndex++) {
      place(topT, active[laneIndex]);
    }
  }
}

// Absolute guarantee: step on an eighth-grid and place one to three compatible
// lanes until exactly TARGET entries exist. This runs after all phrase grammar
// and rest-window filtering, so it cannot create a prohibited in-window note.
if (notes.length < TARGET) {
  for (let topT = 1.05; topT < 211.9 && notes.length < TARGET; topT += 1 / 32) {
    const sec = sections.find((s) => topT >= s.start && topT < s.end && s.notes);
    if (!sec || topT > noteEndFor(sec) || inRest(topT)) continue;
    const active = ACTIVE[sec.keys] || ACTIVE[8];
    for (let laneIndex = 0; laneIndex < active.length && notes.length < TARGET; laneIndex++) {
      const lane = active[(laneIndex + Math.floor(topT * 8)) % active.length];
      const duplicate = notes.some((n) => n.t === round(topT) && n.lane === lane);
      if (duplicate || inRest(topT)) continue;
      notes.push({ t: round(topT), lane });
    }
  }
}
notes.sort((a, b) => a.t - b.t || a.lane - b.lane);
if (notes.length > TARGET) notes.length = TARGET;

// If lane safety swallowed the hold target, convert safe taps into holds.
for (let i = 0; i < notes.length && holdCount < HOLD_MIN; i++) {
  const n = notes[i];
  if (n.type === 'hold') continue;
  const next = notes.find((m) => m !== n && m.lane === n.lane && m.t > n.t);
  const dur = Math.min(0.75, (next ? next.t - n.t : 1.2) - 0.18);
  if (dur >= 0.28 && !inRest(n.t, dur)) {
    n.type = 'hold';
    n.dur = round(dur);
    holdCount++;
  }
}

// ---------------------------------------------------------------- events
const ev = [];
const push = (t, e) => ev.push({ t: round(t), ...e });

push(0, { type: 'intent', mode: 'phase', phase: 'chaos' });
push(0.05, { type: 'intent', mode: 'hud', hud: 'clear' });
push(0.1, { type: 'intent', mode: 'hud', hud: 'black', on: false });
push(0.3, { type: 'cutscene', chapter: 'CHAOS // 00', title: 'NO OVERTURE', sub: 'THE FIELD IS ALREADY BURNING', partner: 'kai', hold: 2.2 });

for (const sec of sections) {
  push(sec.start, { type: 'intent', mode: 'phase', phase: sec.phase });
  if (sec.phase === 'dawn') {
    push(sec.start, { type: 'intent', mode: 'hud', hud: 'clear' });
    push(sec.start, { type: 'intent', mode: 'hud', hud: 'rainbow', on: true });
    push(sec.start, { type: 'cutscene', chapter: 'CHAPTER 03 // DAWN', title: 'STILL HERE', sub: 'THE OCEAN KEEPS THE MISSING PART', partner: 'rei', hold: 5.2 });
  }
}

// Far-glide camera cuts. Positions deliberately leave the normal framing:
// the field slides to the edge of the lens, then snaps back to play.
const glides = [
  [18.5, [-25, 12, 8], [0, 4.6, -24], 38, -0.12, 1.5, 'left'],
  [34.0, [27, 16, 4], [0, 4.2, -18], 42, 0.15, 1.7, 'right'],
  [47.0, [0, 28, 6], [0, 4.0, -20], 52, 0, 1.3, 'up'],
  [62.0, [-30, 5, -4], [0, 6.0, -34], 34, -0.2, 1.8, 'left'],
  [73.0, [24, 3, 14], [0, 3.6, -14], 60, 0.18, 1.2, 'right'],
  [89.0, [-18, 22, 18], [0, 5.0, -28], 58, -0.1, 1.4, 'left'],
  [105.0, [32, 10, 8], [0, 5.0, -26], 36, 0.22, 1.8, 'right'],
  [118.0, [0, 36, 12], [0, 2.0, -34], 62, 0, 2.0, 'up'],
  [140.0, [-38, 14, 2], [0, 4.8, -20], 33, -0.25, 1.6, 'left'],
  [158.0, [34, 24, -8], [0, 5.6, -32], 46, 0.24, 1.7, 'right'],
];
for (const [t, pos, look, fov, roll, dur, side] of glides) {
  if (inRest(t) || inRest(t + dur + 0.05)) continue;
  push(t, { type: 'bossCamera', pos, look, fov, roll, dur });
  push(t, { type: 'cutscene', chapter: 'CHAOS // GLIDE', title: side === 'up' ? 'LOOK UP' : side === 'left' ? 'HOLD THE LEFT' : 'HOLD THE RIGHT', sub: 'THE FIELD MOVES. KEEP YOUR HANDS ON THE LINE.', partner: side === 'left' ? 'kai' : 'rei', hold: Math.min(2.4, dur + 0.6), glide: side, glideDur: dur });
  // After the glide, return to a playable lens.
  push(t + dur + 0.05, { type: 'bossCamera', pos: [0, 7.4, 17.4], look: [0, 4.05, 0], fov: 46, roll: 0, dur: 0.55 });
}

// HUD pressure: alternate heartbeat, static, glitch, guilt, whiteouts.
const hudBeats = [
  [8, 'heartbeat', { on: true, bpm: 168 }],
  [18, 'glitch', { on: true }],
  [24, 'static', { on: true, power: 0.65 }],
  [30, 'static', { on: false }],
  [34, 'heartbeat', { on: true, bpm: 184 }],
  [46, 'guilt', { on: true, value: 100 }],
  [61.5, 'guilt', { on: false }],
  [62, 'glitch', { on: true }],
  [72, 'fakeGuilt', { on: true, value: 18 }],
  [76, 'heartbeat', { on: true, bpm: 195 }],
  [81, 'fakeGuilt', { on: false }],
  [88, 'distort', { on: true }],
  [96, 'distort', { on: false }],
  [104, 'heartbeat', { on: false }],
  [105, 'yellow', { on: true }],
  [113, 'yellow', { on: false }],
  [118, 'static', { on: true, power: 0.55 }],
  [139, 'static', { on: true, power: 1 }],
  [145, 'static', { on: false }],
  [146, 'bright', { on: true }],
];
for (const [t, hud, data] of hudBeats) {
  if (!inRest(t)) push(t, { type: 'intent', mode: 'hud', hud, ...data });
}

// Every four bars: a glitch/shake accent and a field pulse.
for (let t = 6; t < 204; t += 8) {
  if (inRest(t)) continue;
  push(t, { type: 'bossGlitch', power: 0.55 + rng() * 0.5 });
  push(t, { type: 'vibe', power: 0.8 });
  push(t + 0.03, { type: 'pulse', power: 1.1 });
}

// Story cards at movement boundaries, independent of the glide cards.
const storyCards = [
  [20, 'CHAPTER 01 // THE LAST FLYER', 'PLAY LIKE SOMEONE IS STILL LISTENING', 'KAI', 'kai'],
  [48, 'CHAPTER 01 // THE LAST FLYER', 'TWELVE SONGS. SMALLER ROOMS.', 'KAI', 'kai'],
  [82, 'CHAPTER 02 // THE EMPTY CHAIR', 'REI COUNTS THE MISSING BARS', 'REI', 'rei'],
  [119, 'MEMORY // 01 / 02 / ??', 'THE PICTURES DO NOT AGREE', 'REI', 'rei'],
  [160, 'CHAPTER 03 // STILL HERE', 'DO NOT MOVE THE JACKET', 'KAI', 'kai'],
  [205.2, 'CHAPTER 03 // DAWN', 'THE BAND IS QUIET. THE OCEAN IS NOT.', 'REI', 'rei'],
];
for (const [t, chapter, title, sub, partner] of storyCards) {
  if (!inRest(t) && t < 204.5) push(t, { type: 'cutscene', chapter, title, sub, partner, hold: 3.2, glow: partner === 'nova' });
}

ev.sort((a, b) => a.t - b.t);

// Final invariant filter: the false-guilt/rest window is story-free and
// gameplay-free. Filter event overlap as well as note overlap, and keep every
// rainbow cue at or after DAWN's 204.5 boundary.
const filteredEvents = ev.filter((e) => {
  if (inRest(e.t)) return false;
  if (e.mode === 'hud' && e.hud === 'rainbow') return e.t >= 204.5;
  return true;
});
ev.splice(0, ev.length, ...filteredEvents);

// ---------------------------------------------------------------- chart
const chart = {
  song: {
    ...BASE.song,
    title: 'INTENTION // CHAOS',
    shortTitle: 'INTENTION CHAOS',
    bpm: 180,
    bpmLabel: 'CHAOS / 195',
    difficulty: 'CHAOS',
    laneLabel: '8 · 6 · 4',
    chartEnd: 212.8,
    chaos: true,
    freeNotes: false,
  },
  sections,
  notes,
  events: ev,
  swings: [],
};

const out = `// Generated by tools/build-chaos-chart.mjs — do not hand-edit.\nexport const CHART = ${JSON.stringify(chart, null, 2)};\n`;
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, out);
console.log(JSON.stringify({
  out: OUT,
  notes: notes.length,
  holds: notes.filter((n) => n.type === 'hold').length,
  events: ev.length,
  sections: sections.length,
  first: notes[0],
  last: notes[notes.length - 1],
  maxChord: Math.max(...Object.values(notes.reduce((m, n) => {
    const k = n.t.toFixed(3);
    m[k] = (m[k] || 0) + 1;
    return m;
  }, {}))),
}, null, 2));
