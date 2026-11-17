// Builds both playable charts from the analysed audio and the authored
// section maps. Run:
//   node tools/analyze-audio.mjs /tmp/world.wav /tmp/world.json
//   node tools/analyze-audio.mjs /tmp/cryout.wav /tmp/cryout.json
//   node tools/analyze-audio.mjs /tmp/chrono.wav /tmp/chrono.json
//   node tools/build-charts.mjs /tmp/cryout.json /tmp/world.json /tmp/chrono.json
import fs from 'node:fs';
import path from 'node:path';

const [cryoutAnalysisPath, worldAnalysisPath, chronoAnalysisPath] = process.argv.slice(2);
if (!cryoutAnalysisPath || !worldAnalysisPath || !chronoAnalysisPath) {
  console.error('usage: node tools/build-charts.mjs cryout-analysis.json world-analysis.json chronostasis-analysis.json');
  process.exit(1);
}

const ROOT = path.resolve(import.meta.dirname, '..');
const cryoutAnalysis = JSON.parse(fs.readFileSync(cryoutAnalysisPath, 'utf8'));
const worldAnalysis = JSON.parse(fs.readFileSync(worldAnalysisPath, 'utf8'));
const chronoAnalysis = JSON.parse(fs.readFileSync(chronoAnalysisPath, 'utf8'));
const legacy = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/source/cryout-legacy.json'), 'utf8'));

const ACTIVE = { 4: [2, 3, 4, 5], 6: [1, 2, 3, 4, 5, 6], 8: [0, 1, 2, 3, 4, 5, 6, 7] };
const ALL = [0, 1, 2, 3, 4, 5, 6, 7];

const PATTERNS = {
  4: [
    [0, 2, 1, 3], [0, 1, 2, 3], [2, 0, 3, 1], [1, 2, 0, 3],
    [0, 3, 1, 2], [3, 1, 2, 0], [0, 2, 3, 1], [2, 3, 0, 1],
  ],
  6: [
    [0, 2, 4, 5, 3, 1], [1, 2, 3, 4, 5, 4], [0, 1, 3, 4, 2, 5],
    [3, 2, 1, 0, 2, 4], [0, 3, 1, 4, 2, 5], [5, 4, 3, 2, 1, 0],
    [1, 3, 2, 4, 3, 5], [2, 4, 3, 1, 5, 0],
  ],
  8: [
    [0, 2, 1, 3, 4, 6, 5, 7], [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 4, 1, 5, 2, 6, 3, 7], [7, 5, 6, 4, 3, 1, 2, 0],
    [0, 2, 4, 6, 7, 5, 3, 1], [2, 4, 3, 5, 1, 6, 0, 7],
    [1, 3, 5, 7, 6, 4, 2, 0], [6, 4, 2, 0, 1, 3, 5, 7],
  ],
};

const CHORDS = {
  4: [[0, 2], [1, 3], [0, 3], [1, 2]],
  6: [[0, 2], [1, 4], [0, 5], [2, 4], [1, 3]],
  8: [[0, 3], [1, 5], [2, 6], [4, 7], [0, 6], [1, 4]],
};

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function round(n, d = 3) { return +Number(n).toFixed(d); }
function lanePos(keys, pos) { return ACTIVE[keys][((pos % keys) + keys) % keys]; }

function idleLanes(keys) { return ALL.filter((l) => !ACTIVE[keys].includes(l)); }

function motionFor(name, index) {
  const table = {
    SIGNAL: ['fan', 0.045, 0.45, 0.02],
    ASCENT: ['fan', 0.075, 0.55, 0.035],
    CURRENT: ['wave', 0.1, 0.7, 0.05],
    SURGE: ['slope', 0.15, 0.85, 0.075],
    DRIFT: ['tiltL', 0.11, 0.5, 0.04],
    PRESSURE: ['zigzag', 0.145, 1.0, 0.07],
    BREAK: ['flat', 0.0, 0.3, 0.0],
    CRYOUT: ['orbit', 0.175, 1.0, 0.085],
    AFTERGLOW: ['fan', 0.055, 0.4, 0.02],
    OUTRO: ['flat', 0.0, 0.3, 0.0],
    INTRO: ['fan', 0.05, 0.45, 0.02],
    VERSE: ['wave', 0.075, 0.6, 0.035],
    BUILD: ['fan', 0.1, 0.7, 0.05],
    LIFT: ['slope', 0.13, 0.82, 0.065],
    CHORUS: ['wave', 0.15, 0.95, 0.08],
    DRIVE: ['zigzag', 0.18, 1.05, 0.095],
    RETURN: ['orbit', 0.14, 0.9, 0.07],
    FINAL: ['orbit', 0.17, 1.0, 0.085],
    // CHRONOSTASIS: clockwork motion language, distinct from the other charts.
    GEARS: ['fan', 0.06, 0.55, 0.025],
    PENDULUM: ['wave', 0.16, 0.95, 0.08],
    STASIS: ['flat', 0.02, 0.2, 0.01],
    TICK: ['zigzag', 0.17, 1.15, 0.09],
    CHRONO: ['orbit', 0.18, 1.05, 0.09],
    CLOCK: ['fan', 0.04, 0.4, 0.02],
  };
  const [motion, amp, speed, pitch] = table[name] || ['fan', 0.06 + (index % 2) * 0.02, 0.5, 0.03];
  return { motion, motionAmp: amp, motionSpeed: speed, motionPitch: pitch };
}

function splitChords(notes) {
  const groups = [];
  for (const n of notes) {
    const g = groups[groups.length - 1];
    if (g && Math.abs(g.t - n.t) < 0.004) g.notes.push(n);
    else groups.push({ t: n.t, notes: [n] });
  }
  return groups;
}

// ---------------------------------------------------------------- CRYOUT ----
function buildCryout() {
  const beat = 60 / 100;
  const bar = beat * 4;
  const offset = 0.535; // authored beat phase of the original chart
  const sections = legacy.sections.map((s, i) => ({
    ...s,
    ...motionFor(s.name, i),
    city: 0,
  }));

  const holds = legacy.notes.filter((n) => n.type === 'hold');
  const taps = legacy.notes.filter((n) => n.type !== 'hold');
  const assigned = [];
  const prevLane = { 4: -1, 6: -1, 8: -1 };

  sections.forEach((sec, sectionIndex) => {
    const keys = sec.keys;
    const active = ACTIVE[keys];
    const secGroups = splitChords(taps.filter((n) => n.t >= sec.start && n.t < sec.end));
    const secHolds = holds.filter((n) => n.t >= sec.start && n.t < sec.end);
    const patterns = PATTERNS[keys];
    const base = (sectionIndex * 3) % patterns.length;
    let groupIdx = 0;

    for (const group of secGroups) {
      const variant = patterns[(base + Math.floor(groupIdx / 8)) % patterns.length];
      if (group.notes.length > 1) {
        const pair = CHORDS[keys][(sectionIndex + groupIdx) % CHORDS[keys].length];
        group.notes.forEach((n, j) => {
          const lane = lanePos(keys, pair[j % pair.length]);
          assigned.push({ ...n, lane });
        });
      } else {
        let pos = variant[groupIdx % variant.length];
        let lane = lanePos(keys, pos);
        if (lane === prevLane[keys] && group.t - (assigned[assigned.length - 1]?.t ?? -99) < 0.42) {
          pos = (pos + 1) % variant.length;
          lane = lanePos(keys, pos);
        }
        assigned.push({ ...group.notes[0], lane });
        prevLane[keys] = lane;
      }
      groupIdx++;
    }
    assigned.push(...secHolds);
  });

  // Drop taps that would overlap a hold in the same lane.
  const holdByLane = new Map();
  for (const h of holds) {
    if (!holdByLane.has(h.lane)) holdByLane.set(h.lane, []);
    holdByLane.get(h.lane).push(h);
  }
  const notes = assigned.filter((n) => {
    if (n.type === 'hold') return true;
    const list = holdByLane.get(n.lane) || [];
    return !list.some((h) => n.t > h.t - 0.12 && n.t < h.t + h.dur + 0.12);
  });

  // Keep the chart ordered and deduplicated.
  const seen = new Set();
  const finalNotes = notes
    .filter((n) => {
      const key = `${n.t}:${n.lane}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => a.t - b.t || a.lane - b.lane)
    .map((n) => n.type === 'hold'
      ? { t: round(n.t, 3), lane: n.lane, type: 'hold', dur: round(n.dur, 3) }
      : { t: round(n.t, 3), lane: n.lane });

  const events = [];
  const ghosts = [];
  sections.forEach((sec) => {
    const first = Math.ceil((sec.start - offset) / bar) * bar + offset;
    const idle = idleLanes(sec.keys);
    for (let t = first, i = 0; t < sec.end - 0.03; t += bar, i++) {
      events.push({ t: round(t, 3), type: 'pulse', power: round(0.25 + sec.energy * 0.65, 2) });
      if (idle.length && i % 2 === 0) {
        const lane = idle[(i / 2) % idle.length];
        events.push({
          t: round(t + 0.02, 3), type: 'echo', lane,
          dir: lane < 3.5 ? -1 : 1,
          power: round(0.45 + sec.energy * 0.7, 2),
        });
      }
      if (sec.energy > 0.68 && i % 4 === 1) {
        const lane = ACTIVE[sec.keys][(i + 2) % sec.keys];
        events.push({ t: round(t, 3), type: 'burst', lane, power: round(0.5 + sec.energy * 0.7, 2) });
      }
    }
    if (sec.energy > 0.8) events.push({ t: round(sec.start + 0.02, 3), type: 'vibe', power: round(sec.energy, 2) });
    idle.forEach((lane, i) => {
      ghosts.push({ t: round(sec.start + 0.04 + i * 0.055, 3), lane, type: 'sweep' });
      ghosts.push({ t: round(sec.start + bar * 2 + i * 0.12, 3), lane, type: 'bounce' });
    });
  });

  // extra motion beats during the long final section
  for (const t of [99.335, 111.335]) {
    const sec = sections.find((s) => t >= s.start && t < s.end);
    if (sec) events.push({ t, type: 'motion', style: t < 105 ? 'wave' : 'zigzag', amp: 0.16, speed: 1.0 });
  }

  events.sort((a, b) => a.t - b.t || a.type.localeCompare(b.type));
  ghosts.sort((a, b) => a.t - b.t);

  return {
    song: {
      title: 'CRYOUT', shortTitle: 'CRYOUT', artist: 'ORIGINAL TRACK',
      bpm: 100, duration: 138.1, chartEnd: 133.5, beatOffset: 0.535,
      difficulty: 'ADVANCED', laneLabel: '4 · 6 · 8',
      fadeStart: 131.4, fadeEnd: 133.4,
    },
    sections, notes: finalNotes, events, ghosts,
  };
}

// ---------------------------------------------------------------- WORLD -----
const worldSections = [
  { name: 'INTRO', start: 0.04, end: 10.04, keys: 4, color: '#7ec8ff', accent: '#ffb45e', energy: 0.16, rotY: 0.0, rotZ: 0.0, tilt: 0.0, spread: 1.0, y: 0.0, camZ: 17.6, camY: 6.9, bloom: 0.5, spin: 0.03, firstNote: 2.04 },
  { name: 'VERSE', start: 10.04, end: 22.04, keys: 4, color: '#66e0ff', accent: '#ff8ac8', energy: 0.5, rotY: 0.03, rotZ: -0.015, tilt: 0.012, spread: 1.02, y: 0.04, camZ: 16.9, camY: 6.7, bloom: 0.68, spin: 0.05, firstNote: 10.04 },
  { name: 'BUILD', start: 22.04, end: 38.04, keys: 6, color: '#84a6ff', accent: '#ffc46b', energy: 0.66, rotY: -0.06, rotZ: 0.025, tilt: -0.015, spread: 1.05, y: 0.08, camZ: 16.2, camY: 6.5, bloom: 0.8, spin: 0.07, firstNote: 22.04 },
  { name: 'LIFT', start: 38.04, end: 54.04, keys: 6, color: '#b58cff', accent: '#ffa25e', energy: 0.8, rotY: 0.1, rotZ: -0.04, tilt: 0.025, spread: 1.08, y: 0.12, camZ: 15.5, camY: 6.3, bloom: 0.9, spin: 0.1, firstNote: 38.04 },
  { name: 'CHORUS', start: 54.04, end: 70.04, keys: 6, color: '#ff8f6b', accent: '#ffe27a', energy: 0.92, rotY: -0.13, rotZ: 0.05, tilt: -0.025, spread: 1.1, y: 0.15, camZ: 15.1, camY: 6.2, bloom: 0.96, spin: 0.12, firstNote: 54.04 },
  { name: 'DRIVE', start: 70.04, end: 86.04, keys: 6, color: '#ff5f9e', accent: '#7af0ff', energy: 1.0, rotY: 0.15, rotZ: -0.055, tilt: 0.03, spread: 1.12, y: 0.18, camZ: 14.9, camY: 6.1, bloom: 1.0, spin: 0.14, firstNote: 70.04 },
  { name: 'BREAK', start: 86.04, end: 98.04, keys: 4, color: '#d9eaff', accent: '#8f9dff', energy: 0.34, rotY: -0.02, rotZ: 0.01, tilt: 0.05, spread: 0.93, y: 0.4, camZ: 18.1, camY: 7.3, bloom: 0.55, spin: 0.035, firstNote: 86.04 },
  { name: 'RETURN', start: 98.04, end: 122.04, keys: 6, color: '#63e6d8', accent: '#ff8ac8', energy: 0.82, rotY: 0.04, rotZ: -0.02, tilt: 0.015, spread: 1.06, y: 0.1, camZ: 15.7, camY: 6.4, bloom: 0.88, spin: 0.09, firstNote: 98.04 },
  { name: 'FINAL', start: 122.04, end: 138.04, keys: 6, color: '#ff6fc4', accent: '#ffd36b', energy: 0.9, rotY: -0.1, rotZ: 0.04, tilt: -0.02, spread: 1.09, y: 0.14, camZ: 15.0, camY: 6.2, bloom: 0.98, spin: 0.13, firstNote: 122.04 },
  { name: 'OUTRO', start: 138.04, end: 142.55, keys: 4, color: '#7fa8ff', accent: '#d7c4ff', energy: 0.2, rotY: 0.0, rotZ: 0.0, tilt: 0.03, spread: 0.9, y: 0.3, camZ: 19.2, camY: 7.6, bloom: 0.42, spin: 0.02, firstNote: 138.04 },
].map((s, i) => ({
  ...s,
  ...motionFor(s.name, i),
  city: { INTRO: 1, VERSE: 0.16, BUILD: 0.12, LIFT: 0.2, CHORUS: 0.16, DRIVE: 0.24, BREAK: 0.62, RETURN: 0.14, FINAL: 0.2, OUTRO: 0.72 }[s.name] || 0,
}));

function onsetStrength(peaks, t, window = 0.075) {
  let best = 0;
  for (const p of peaks) {
    if (p.t > t + window) break;
    if (p.t >= t - window && p.strength > best) best = p.strength;
  }
  return best;
}

function buildWorld() {
  const bpm = 120;
  const beat = 60 / bpm;
  const bar = beat * 4;
  const offset = 0.04;
  const peaks = [...worldAnalysis.peaks].sort((a, b) => a.t - b.t);
  const rng = mulberry32(0x51a7c0de);
  const notes = [];

  worldSections.forEach((sec, sectionIndex) => {
    const keys = sec.keys;
    const patterns = PATTERNS[keys];
    const base = (sectionIndex * 2) % patterns.length;
    const firstBar = Math.ceil((Math.max(sec.start, sec.firstNote) - offset) / bar - 1e-6);
    const lastBar = Math.ceil((sec.end - offset) / bar - 1e-6);
    let groupIdx = 0;
    let lastLane = -1;
    let lastT = -99;

    for (let b = firstBar; b < lastBar; b++) {
      const barStart = offset + b * bar;
      if (barStart > sec.end - 0.18) continue;
      if (barStart + 0.02 < sec.firstNote) continue;

      const energy = sec.energy;
      let mask;
      if (energy < 0.3) mask = [0, 4];
      else if (energy < 0.55) mask = [0, 2, 4, 6];
      else if (energy < 0.72) mask = [0, 1, 2, 3, 4, 6];
      else if (energy < 0.88) mask = [0, 1, 2, 3, 4, 5, 6, 7];
      else mask = [0, 1, 2, 3, 4, 5, 6, 7];

      // A short 16th tail on some high-energy bars keeps the chart hard
      // without forcing long thumb-crossing bursts.
      const extra16 = energy > 0.85 && b % 4 === 3 ? 6 : -1;

      for (let mi = 0; mi < mask.length; mi++) {
        const slot = mask[mi];
        const t = barStart + slot * beat / 2;
        if (t < sec.firstNote - 0.01 || t > sec.end - 0.12) continue;
        const strength = onsetStrength(peaks, t);
        const onBeat = slot % 2 === 0;
        // Thin quiet off-beats, but never remove the downbeat anchors.
        if (!onBeat && strength < 1.55 && energy < 0.84 && rng() < 0.34) continue;
        if (onBeat && strength < 1.2 && energy < 0.4 && slot !== 0) continue;

        const variant = patterns[(base + Math.floor(groupIdx / 8)) % patterns.length];
        let pos = variant[groupIdx % variant.length];
        let lane = lanePos(keys, pos);
        if (lane === lastLane && t - lastT < beat * 0.8) {
          pos = (pos + 1 + (groupIdx % 2)) % variant.length;
          lane = lanePos(keys, pos);
        }
        notes.push({ t: round(t, 3), lane });
        lastLane = lane;
        lastT = t;
        groupIdx++;

        // occasional two-thumb chord on the downbeat, never on consecutive bars
        if (onBeat && slot === 0 && energy > 0.62 && b % 4 === 0) {
          const pair = CHORDS[keys][(sectionIndex + Math.floor(b / 4)) % CHORDS[keys].length];
          const lanes = [lanePos(keys, pair[0]), lanePos(keys, pair[1])];
          if (!lanes.includes(lane)) {
            const other = lanes[0] === lane ? lanes[1] : lanes[0];
            notes.push({ t: round(t, 3), lane: other });
          }
        }

        if (slot === extra16) {
          const lane2 = lanePos(keys, pos + 1);
          const t2 = round(t + beat / 4, 3);
          if (lane2 !== lane && t2 < sec.end - 0.05) {
            notes.push({ t: t2, lane: lane2 });
            lastLane = lane2;
            lastT = t2;
          }
        }
      }
    }

    // slow holds in the breathing sections
    if (sec.energy < 0.55) {
      const holdPositions = sec.name === 'BREAK' ? [1, 4] : [0, 2];
      holdPositions.forEach((pos, i) => {
        const t = round(sec.firstNote + (i + 1) * bar * 2 + beat / 2, 3);
        if (t < sec.end - 1.2) notes.push({ t, lane: lanePos(keys, pos), type: 'hold', dur: round(beat * 2, 3) });
      });
    }
  });

  // Remove anything overlapping a hold or too close in the same lane, and
  // enforce a minimum 16th-note gap between any two notes.
  const holds = notes.filter((n) => n.type === 'hold');
  const filtered = notes.filter((n) => {
    if (n.type === 'hold') return true;
    for (const h of holds) {
      if (n.lane === h.lane && n.t > h.t - 0.1 && n.t < h.t + h.dur + 0.08) return false;
    }
    return true;
  }).sort((a, b) => a.t - b.t || a.lane - b.lane);

  const finalNotes = [];
  const seen = new Set();
  for (const n of filtered) {
    const key = `${n.t}:${n.lane}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const prev = finalNotes[finalNotes.length - 1];
    if (prev && n.t - prev.t < 0.105 && n.lane === prev.lane) continue;
    finalNotes.push(n.type === 'hold'
      ? { t: round(n.t, 3), lane: n.lane, type: 'hold', dur: round(n.dur, 3) }
      : { t: round(n.t, 3), lane: n.lane });
  }

  const events = [];
  const ghosts = [];
  worldSections.forEach((sec) => {
    const first = Math.ceil((sec.start - offset) / bar) * bar + offset;
    const idle = idleLanes(sec.keys);
    for (let t = first, i = 0; t < sec.end - 0.03; t += bar, i++) {
      events.push({ t: round(t, 3), type: 'pulse', power: round(0.22 + sec.energy * 0.7, 2) });
      if (idle.length && i % 2 === 0) {
        const lane = idle[(i / 2) % idle.length];
        events.push({
          t: round(t + 0.03, 3), type: 'echo', lane,
          dir: lane < 3.5 ? -1 : 1,
          power: round(0.5 + sec.energy * 0.8, 2),
        });
      }
      if (sec.energy > 0.62 && i % 4 === 2) {
        const lane = ACTIVE[sec.keys][(i + 1) % sec.keys];
        events.push({ t: round(t, 3), type: 'burst', lane, power: round(0.45 + sec.energy * 0.8, 2) });
      }
    }
    if (sec.energy > 0.8) events.push({ t: round(sec.start + 0.02, 3), type: 'vibe', power: round(sec.energy, 2) });
    idle.forEach((lane, i) => {
      ghosts.push({ t: round(sec.start + 0.04 + i * 0.06, 3), lane, type: 'sweep' });
      ghosts.push({ t: round(sec.start + bar * 2 + i * 0.14, 3), lane, type: 'bounce' });
    });
  });

  // Energy lifts in the analysed bars become extra "good vibe" moments.
  worldAnalysis.bars.forEach((barData, i) => {
    const prev = worldAnalysis.bars[i - 1];
    if (!prev) return;
    if (barData.rel > 1.14 && prev.rel < 1.08) {
      events.push({ t: round(barData.t, 3), type: 'vibe', power: 0.85 });
      for (const lane of [0, 7]) {
        events.push({ t: round(barData.t + 0.05, 3), type: 'echo', lane, dir: lane ? 1 : -1, power: 1.15 });
      }
    }
  });

  events.sort((a, b) => a.t - b.t || a.type.localeCompare(b.type));
  ghosts.sort((a, b) => a.t - b.t);

  return {
    song: {
      title: 'WORLD YEARNING FOR AN END', shortTitle: 'WORLD YEARNING',
      artist: 'ORIGINAL TRACK', bpm, duration: 143.47, chartEnd: 142.55,
      beatOffset: offset, difficulty: 'HARD', laneLabel: '4 · 6',
      thumbFriendly: true, fadeStart: 140.8, fadeEnd: 142.9,
    },
    sections: worldSections, notes: finalNotes, events, ghosts,
  };
}


// ---------------------------------------------------------------- CHRONOSTASIS
// The third track is charted from its own motif data instead of reusing the
// cryout/world event recipe. Its signature visual is a background clock built
// from the two lanes outside the playable 4/6-lane field: the slow hour hand
// and the fast minute hand tick with the music, freeze during the breakdown,
// and sprint through the final section.
const chronoSections = [
  { name: 'INTRO', start: 0.000, end: 18.431, keys: 4, color: '#8ecfff', accent: '#ffd166', energy: 0.22, rotY: 0.0, rotZ: 0.0, tilt: 0.02, spread: 0.94, y: 0.28, camZ: 18.8, camY: 7.4, bloom: 0.48, spin: 0.02, firstNote: 2.4, density: 0.22, city: 0.58, clock: 'off' },
  { name: 'GEARS', start: 18.431, end: 24.483, keys: 4, color: '#6fe3ff', accent: '#ffd166', energy: 0.5, rotY: 0.02, rotZ: -0.012, tilt: 0.01, spread: 1.0, y: 0.12, camZ: 17.4, camY: 7.0, bloom: 0.68, spin: 0.05, firstNote: 18.431, density: 0.5, city: 0.38, clock: 'run' },
  { name: 'VERSE', start: 24.483, end: 42.877, keys: 6, color: '#78b8ff', accent: '#ffe29a', energy: 0.64, rotY: 0.04, rotZ: -0.02, tilt: 0.015, spread: 1.04, y: 0.08, camZ: 16.7, camY: 6.7, bloom: 0.78, spin: 0.07, firstNote: 24.483, density: 0.62, city: 0.2, clock: 'run' },
  { name: 'PENDULUM', start: 42.877, end: 66.417, keys: 6, color: '#b18cff', accent: '#ffd166', energy: 0.8, rotY: -0.09, rotZ: 0.035, tilt: -0.02, spread: 1.08, y: 0.14, camZ: 15.8, camY: 6.4, bloom: 0.9, spin: 0.1, firstNote: 42.877, density: 0.76, city: 0.14, clock: 'run' },
  { name: 'STASIS', start: 66.417, end: 76.075, keys: 4, color: '#dfeaff', accent: '#9aa8ff', energy: 0.26, rotY: -0.02, rotZ: 0.01, tilt: 0.04, spread: 0.92, y: 0.42, camZ: 18.4, camY: 7.5, bloom: 0.5, spin: 0.02, firstNote: 66.417, density: 0, city: 0.7, clock: 'freeze', swing: true },
  { name: 'RETURN', start: 76.075, end: 90.561, keys: 6, color: '#64e6d8', accent: '#ffe29a', energy: 0.76, rotY: 0.05, rotZ: -0.02, tilt: 0.012, spread: 1.05, y: 0.1, camZ: 16.2, camY: 6.6, bloom: 0.86, spin: 0.08, firstNote: 76.68, density: 0.7, city: 0.16, clock: 'run' },
  { name: 'TICK', start: 90.561, end: 110.480, keys: 6, color: '#ffd166', accent: '#7af0ff', energy: 0.84, rotY: -0.1, rotZ: 0.04, tilt: -0.02, spread: 1.08, y: 0.15, camZ: 15.6, camY: 6.3, bloom: 0.94, spin: 0.11, firstNote: 90.561, density: 0.8, city: 0.2, clock: 'run' },
  { name: 'FINAL', start: 110.480, end: 129.795, keys: 6, color: '#ff9f6b', accent: '#ffd166', energy: 0.94, rotY: 0.12, rotZ: -0.045, tilt: 0.025, spread: 1.1, y: 0.18, camZ: 15.0, camY: 6.1, bloom: 1.0, spin: 0.14, firstNote: 110.480, density: 0.9, city: 0.24, clock: 'final' },
  { name: 'OUTRO', start: 129.795, end: 140.000, keys: 4, color: '#9fb8ff', accent: '#d7c4ff', energy: 0.3, rotY: 0.0, rotZ: 0.0, tilt: 0.03, spread: 0.9, y: 0.34, camZ: 19.2, camY: 7.6, bloom: 0.46, spin: 0.02, firstNote: 129.795, density: 0.28, city: 0.72, clock: 'off', holds: 1 },
].map((s, i) => ({ ...s, ...motionFor(s.name, i) }));

function nearestPeak(peaks, t, window = 0.085) {
  let best = null;
  let bestD = window;
  for (const p of peaks) {
    const d = Math.abs(p.t - t);
    if (d <= bestD) { bestD = d; best = p; }
  }
  return best;
}

function buildChronostasis() {
  const bpm = 99.4;
  const beat = 60 / bpm;
  const bar = beat * 4;
  const offset = 0.323; // downbeat phase derived from the track's onset grid
  const step = beat / 4;
  const rng = mulberry32(0x0c10c4a7);
  const peaks = [...chronoAnalysis.peaks].sort((a, b) => a.t - b.t);
  const notes = [];
  const swings = [];

  // The clock's two hands live on the two unused lanes (0 and 7). Note
  // patterns are built around their tick-tock symmetry, so the chart and the
  // background clock share one motif rather than unrelated decoration.
  const clockOrder = {
    4: [0, 3, 1, 2, 2, 1, 3, 0],
    6: [0, 5, 1, 4, 2, 3, 3, 2, 4, 1, 5, 0],
  };

  chronoSections.forEach((sec) => {
    const keys = sec.keys;
    if (sec.swing) {
      // STASIS is the antique-clock gimmick: no lane notes, only centre taps
      // scheduled where the bob crosses the middle of its swing.
      const period = beat * 4;
      for (let t = sec.start + period / 4; t < sec.end - beat * 0.5; t += period / 2) {
        swings.push({ t: round(t, 3) });
      }
      return;
    }
    const startSlot = Math.ceil((Math.max(sec.start, sec.firstNote) - offset) / step - 1e-6);
    const endSlot = Math.floor((sec.end - 0.07 - offset) / step - 1e-6);
    let lastLane = -1;
    let lastT = -99;

    for (let slot = startSlot; slot <= endSlot; slot++) {
      const t = offset + slot * step;
      const is16 = slot % 2 === 1;
      const isBeat = slot % 4 === 0;
      const peak = nearestPeak(peaks, t);
      const strength = peak ? peak.strength : 0;

      let chance = sec.density;
      if (is16) chance *= 0.42;
      if (!peak && !isBeat) chance *= 0.2;
      else if (strength < 1.15 && !isBeat) chance *= 0.5;
      if (sec.name === 'INTRO' && !isBeat && strength < 1.7) chance *= 0.3;
      if (sec.name === 'STASIS') chance *= 0.72;
      if (rng() > chance) continue;

      let pos;
      if (sec.name === 'PENDULUM' || sec.name === 'GEARS') {
        const swing = [0, keys - 1, 1, keys - 2, 2, keys - 3];
        pos = swing[Math.floor(slot / 2) % swing.length];
      } else {
        const order = clockOrder[keys];
        pos = order[Math.floor(slot / 2) % order.length];
      }
      // A small deterministic turn every two bars keeps long sections from
      // looping the same lane shape forever.
      if (Math.floor(slot / 8) % 2 === 1 && keys > 4) pos = (pos + 1) % keys;

      let lane = lanePos(keys, pos);
      if (lane === lastLane && t - lastT < beat * 0.72) {
        pos = (pos + 1 + (Math.floor(slot / 4) % 2)) % keys;
        lane = lanePos(keys, pos);
      }
      if (lane === lastLane && t - lastT < 0.16) continue;

      notes.push({ t: round(t, 3), lane });
      lastLane = lane;
      lastT = t;

      // Motif chords are deliberately sparse and symmetric: one per four bars
      // at most, so a thumb on each side can take them without crossing.
      const barNo = Math.floor((t - sec.start) / bar + 1e-6);
      if (isBeat && barNo % 4 === 0 && sec.energy > 0.6 && rng() < 0.55) {
        const other = lanePos(keys, keys - 1 - pos);
        if (other !== lane) notes.push({ t: round(t, 3), lane: other });
      }

      // Clock-tick 16th tails: the fast hand's tick is echoed by one adjacent
      // note, never a long run of 16ths.
      if (!is16 && sec.energy > 0.72 && (slot % 8 === 2 || slot % 8 === 6) && strength > 1.55) {
        const t2 = round(t + step, 3);
        if (t2 < sec.end - 0.05) {
          const p2 = nearestPeak(peaks, t2, 0.07);
          if (!p2 || p2.strength > 1.0) {
            const lane2 = lanePos(keys, (pos + (slot % 8 === 2 ? 1 : keys - 1)) % keys);
            if (lane2 !== lane) notes.push({ t: t2, lane: lane2 });
          }
        }
      }
    }

    if (sec.holds) {
      const holdPositions = sec.holds === 2 ? [1, keys - 2] : [0];
      holdPositions.forEach((pos, i) => {
        const t = round(sec.start + bar * (0.6 + i * 1.5) + step, 3);
        if (t < sec.end - 1.2) {
          notes.push({ t, lane: lanePos(keys, pos), type: 'hold', dur: round(beat * (sec.holds === 2 ? 3 : 2), 3) });
        }
      });
    }
  });

  // Holds win their lane; taps that would crowd them are removed.
  const holds = notes.filter((n) => n.type === 'hold');
  const filtered = notes.filter((n) => {
    if (n.type === 'hold') return true;
    for (const h of holds) {
      if (n.lane === h.lane && n.t > h.t - 0.1 && n.t < h.t + h.dur + 0.08) return false;
    }
    return true;
  }).sort((a, b) => a.t - b.t || a.lane - b.lane);

  const finalNotes = [];
  const seen = new Set();
  for (const n of filtered) {
    const key = `${n.t}:${n.lane}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const prev = finalNotes[finalNotes.length - 1];
    if (prev && prev.lane === n.lane && n.t - prev.t < 0.115) continue;
    finalNotes.push(n.type === 'hold'
      ? { t: round(n.t, 3), lane: n.lane, type: 'hold', dur: round(n.dur, 3) }
      : { t: round(n.t, 3), lane: n.lane });
  }

  const events = [];
  const ghosts = [];
  const idle = [0, 7]; // the two hands: never part of a 4/6-lane chart

  chronoSections.forEach((sec) => {
    const clockOn = sec.clock !== 'off';
    events.push({
      t: round(sec.start + 0.001, 3), type: 'clock', mode: sec.clock,
      power: round(sec.clock === 'freeze' ? 0.75 : Math.min(1, 0.5 + sec.energy * 0.5), 2),
    });

    if (clockOn && sec.clock !== 'freeze') {
      const firstBeat = Math.ceil((sec.start - offset) / beat) * beat + offset;
      for (let t = firstBeat, i = 0; t < sec.end - 0.02; t += beat, i++) {
        const p = nearestPeak(peaks, t, 0.09);
        const power = p ? Math.min(1.25, 0.35 + p.strength / 3.2) : 0.45;
        events.push({
          t: round(t, 3), type: 'clockTick',
          hand: i % 2 ? 'slow' : 'fast',
          power: round(power, 2),
        });
      }
    }

    // Strong analysed onsets become the section's motif accents. They are
    // spaced by at least ~2 bars so the background clock never strobes.
    const strong = peaks.filter((p) => p.t >= sec.start && p.t < sec.end && p.strength > 2.75);
    let lastMotif = -99;
    if (!sec.swing) strong.forEach((p) => {
      if (p.t - lastMotif < bar * 1.8) return;
      lastMotif = p.t;
      const side = ACTIVE[sec.keys][p.t % 2 < 1 ? 0 : sec.keys - 1];
      events.push({ t: round(p.t, 3), type: 'burst', lane: side, power: round(Math.min(1.15, 0.45 + p.strength / 4), 2) });
      if (p.strength > 3.25) events.push({ t: round(p.t + 0.02, 3), type: 'vibe', power: round(Math.min(1, p.strength / 4.6), 2) });
      if (clockOn) {
        events.push({
          t: round(p.t + 0.04, 3), type: 'echo',
          lane: idle[Math.floor(p.t) % idle.length],
          dir: Math.floor(p.t) % idle.length ? 1 : -1,
          power: round(Math.min(1.1, 0.55 + p.strength / 4), 2),
        });
        ghosts.push({
          t: round(p.t + 0.06, 3), lane: idle[Math.floor(p.t) % idle.length],
          type: p.strength > 3.4 ? 'bounce' : 'sweep',
        });
      }
    });

    if (sec.energy > 0.6) {
      events.push({ t: round(sec.start + 0.03, 3), type: 'burst', lane: ACTIVE[sec.keys][1], power: round(0.6 + sec.energy * 0.4, 2) });
    }
    if (sec.energy > 0.8) {
      events.push({ t: round(sec.start + 0.06, 3), type: 'vibe', power: round(sec.energy, 2) });
    }
    if (clockOn) {
      idle.forEach((lane, i) => {
        ghosts.push({ t: round(sec.start + 0.04 + i * 0.07, 3), lane, type: 'sweep' });
      });
    }
    if (sec.name === 'PENDULUM') {
      events.push({ t: round(sec.start + bar * 4, 3), type: 'motion', style: 'wave', amp: 0.18, speed: 1.05, pitch: 0.09 });
    }
    if (sec.name === 'FINAL') {
      events.push({ t: round(sec.start + bar * 2, 3), type: 'motion', style: 'orbit', amp: 0.19, speed: 1.2, pitch: 0.1 });
    }
    if (sec.swing) {
      events.push({
        t: round(sec.start + 0.002, 3), type: 'pendulum', mode: 'start',
        period: round(beat * 4, 4), amplitude: 0.42,
      });
      events.push({ t: round(sec.end - 0.002, 3), type: 'pendulum', mode: 'stop' });
    }
  });

  events.sort((a, b) => a.t - b.t || a.type.localeCompare(b.type));
  ghosts.sort((a, b) => a.t - b.t);

  return {
    song: {
      title: 'CHRONOSTASIS', shortTitle: 'CHRONOSTASIS',
      artist: 'ORIGINAL TRACK', bpm, duration: 142.1, chartEnd: 139.85,
      beatOffset: offset, difficulty: 'EXPERT', laneLabel: '4 · 6',
      thumbFriendly: true, fadeStart: 138.4, fadeEnd: 140.0,
    },
    sections: chronoSections, notes: finalNotes, events, ghosts,
    swings: swings.sort((a, b) => a.t - b.t),
  };
}

const charts = {
  cryout: buildCryout(),
  world: buildWorld(),
  chronostasis: buildChronostasis(),
};

fs.mkdirSync(path.join(ROOT, 'src/charts'), { recursive: true });
for (const [id, chart] of Object.entries(charts)) {
  const file = path.join(ROOT, `src/charts/${id}.js`);
  fs.writeFileSync(file, `// Generated by tools/build-charts.mjs — do not hand-edit.
export const CHART = ${JSON.stringify(chart, null, 2)};
`);
  const counts = chart.notes.reduce((acc, n) => {
    acc.total++;
    if (n.type === 'hold') acc.holds++;
    return acc;
  }, { total: 0, holds: 0 });
  console.log(`${id}: ${counts.total} notes, ${counts.holds} holds, ${chart.events.length} events, ${chart.ghosts.length} ghosts, end ${chart.song.chartEnd}s`);
}
