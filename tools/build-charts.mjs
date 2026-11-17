// Builds both playable charts from the analysed audio and the authored
// section maps. Run:
//   node tools/analyze-audio.mjs /tmp/world.wav /tmp/world.json
//   node tools/analyze-audio.mjs /tmp/cryout.wav /tmp/cryout.json
//   node tools/build-charts.mjs /tmp/cryout.json /tmp/world.json
import fs from 'node:fs';
import path from 'node:path';

const [cryoutAnalysisPath, worldAnalysisPath] = process.argv.slice(2);
if (!cryoutAnalysisPath || !worldAnalysisPath) {
  console.error('usage: node tools/build-charts.mjs cryout-analysis.json world-analysis.json');
  process.exit(1);
}

const ROOT = path.resolve(import.meta.dirname, '..');
const cryoutAnalysis = JSON.parse(fs.readFileSync(cryoutAnalysisPath, 'utf8'));
const worldAnalysis = JSON.parse(fs.readFileSync(worldAnalysisPath, 'utf8'));
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

const charts = {
  cryout: buildCryout(),
  world: buildWorld(),
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
