// Rhythm analysis and note selection for the offline chart builder.
//
// The important rule is "chart the record, not the waveform": onsets are
// normalised, weighted toward drums/bass, and snapped to a fitted subdivision
// grid. Density is driven by the authored recipe and then modulated by the
// section's measured energy, so a quiet verse cannot turn into a wall of notes
// just because the analyser found a lot of tiny spectral spikes.

import { onsetWeight, percentile } from './tempo.mjs';

export const ACTIVE_LANES = { 4: [2, 3, 4, 5], 6: [1, 2, 3, 4, 5, 6], 8: [0, 1, 2, 3, 4, 5, 6, 7] };

export function lanesForSection(section) {
  if (section.keys === 1) return [3];
  if (section.keys === 2) return section.lanes || [2, 4];
  return ACTIVE_LANES[section.keys] || ACTIVE_LANES[8];
}

export function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

export function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Adds band-normalised, instrument-aware fields to the analyser's peak list.
export function normalizePeaks(peaks) {
  const strengths = peaks.map((p) => p.s ?? p.strength ?? 0);
  const sLow = percentile(strengths, 0.12);
  const sHigh = Math.max(sLow + 1e-6, percentile(strengths, 0.95));
  const lowTop = Math.max(1, percentile(peaks.map((p) => p.low || 0), 0.9));
  const midTop = Math.max(1, percentile(peaks.map((p) => p.mid || 0), 0.9));
  const highTop = Math.max(1, percentile(peaks.map((p) => p.high || 0), 0.9));

  return peaks.map((p) => {
    const sN = clamp(((p.s ?? p.strength ?? 0) - sLow) / (sHigh - sLow), 0, 1.5);
    const lowN = clamp((p.low || 0) / lowTop, 0, 1.4);
    const midN = clamp((p.mid || 0) / midTop, 0, 1.4);
    const highN = clamp((p.high || 0) / highTop, 0, 1.4);
    const percussive = clamp(lowN * 0.72 + midN * 0.28, 0, 1.4);
    const melodic = clamp(midN * 0.46 + highN * 0.54, 0, 1.4);
    const weight = sN * (0.3 + 0.7 * Math.max(percussive, melodic * 0.82));
    return {
      t: p.t,
      s: p.s ?? p.strength ?? 0,
      low: p.low || 0,
      mid: p.mid || 0,
      high: p.high || 0,
      sN, lowN, midN, highN, percussive, melodic,
      weight,
      kind: percussive >= melodic * 1.06 ? 'percussive' : 'melodic',
    };
  }).filter((p) => p.weight > 0.075);
}

function phaseHistogram(peaks, period, bins, weightFn) {
  const hist = new Float64Array(bins);
  for (const p of peaks) {
    const phase = ((p.t % period) + period) % period;
    const bin = Math.min(bins - 1, Math.floor((phase / period) * bins));
    hist[bin] += weightFn(p);
  }
  return hist;
}

function bestHistogramPhase(hist, toleranceBins) {
  let best = 0;
  let bestScore = -Infinity;
  const bins = hist.length;
  for (let i = 0; i < bins; i++) {
    let score = 0;
    for (let d = -toleranceBins; d <= toleranceBins; d++) {
      const idx = ((i + d) % bins + bins) % bins;
      const w = 1 - Math.abs(d) / (toleranceBins + 1);
      score += hist[idx] * w * w;
    }
    if (score > bestScore) { bestScore = score; best = i; }
  }
  return { index: best, score: bestScore };
}

function phaseScore(peaks, period, phase, tolerance, weightFn) {
  let score = 0;
  let hits = 0;
  for (const p of peaks) {
    const k = Math.round((p.t - phase) / period);
    const d = Math.abs(p.t - (phase + k * period));
    if (d > tolerance) continue;
    const w = 1 - d / tolerance;
    score += weightFn(p) * w * w;
    hits++;
  }
  return { score, hits };
}

// Fits BPM + beat phase for one tempo region. The declared BPM is a hint, not
// a fact: CHRONOSTASIS is authored at 99.4 but the record sits at 98.0, and a
// 1.4% error smears the last minute of the chart by almost two seconds.
export function fitRegion(peaks, opts = {}) {
  const {
    bpmHint = 120,
    start = 0,
    end = Infinity,
    range = 0.02,
    minSamples = 40,
  } = opts;
  const local = peaks.filter((p) => p.t >= start - 1 && p.t <= end + 1 && p.weight > 0.16);
  const source = local.length >= minSamples ? local : peaks.filter((p) => p.t >= start - 1 && p.t <= end + 1);
  if (!source.length) return { bpm: bpmHint, phase: 0, score: 0, samples: 0 };

  const weightFn = (p) => p.weight * (0.55 + 0.45 * Math.max(p.percussive, p.melodic * 0.85));
  let best = null;
  const lo = bpmHint * (1 - range);
  const hi = bpmHint * (1 + range);
  for (let bpm = lo; bpm <= hi + 1e-9; bpm += 0.01) {
    const period = 60 / bpm;
    const hist = phaseHistogram(source, period, 300, weightFn);
    const tolBins = Math.max(1, Math.round((0.045 / period) * 300));
    const hp = bestHistogramPhase(hist, tolBins);
    const phase = (hp.index / 300) * period;
    const refined = phaseScore(source, period, phase, 0.045, weightFn);
    const driftPenalty = 1 - Math.min(0.06, Math.abs(bpm - bpmHint) / bpmHint * 0.8);
    const score = refined.score * driftPenalty;
    if (!best || score > best.score) {
      best = { bpm: +bpm.toFixed(3), phase: +phase.toFixed(4), score, hits: refined.hits };
    }
  }

  // Refine the phase against the stronger half of the region's onsets.
  const cut = percentile(source.map(weightFn), 0.5);
  const strong = source.filter((p) => weightFn(p) >= cut);
  const period = 60 / best.bpm;
  let phase = best.phase;
  let refined = -Infinity;
  for (let d = -0.035; d <= 0.035 + 1e-9; d += 0.001) {
    const candidate = ((best.phase + d) % period + period) % period;
    const sc = phaseScore(strong, period, candidate, 0.045, weightFn).score;
    if (sc > refined) { refined = sc; phase = candidate; }
  }
  return { bpm: best.bpm, phase: +phase.toFixed(4), score: best.score, hits: best.hits, samples: source.length };
}

// Finds which beat of the bar is the strongest low-frequency downbeat.
export function fitBarBeat(peaks, bpm, phase) {
  const period = 60 / bpm;
  let best = { beat: 0, score: -Infinity };
  for (let beat = 0; beat < 4; beat++) {
    let score = 0;
    const barPhase = phase + beat * period;
    for (const p of peaks) {
      if (p.t < 1) continue;
      const k = Math.round((p.t - barPhase) / (period * 4));
      const d = Math.abs(p.t - (barPhase + k * period * 4));
      if (d > 0.07) continue;
      const w = 1 - d / 0.07;
      score += (p.low || 0) * w * w + (p.mid || 0) * w * 0.2;
    }
    if (score > best.score) best = { beat, score };
  }
  return best;
}

// Scores how well a subdivision grid explains the section's onset energy.
function subdivisionScore(peaks, period, phase, div, step) {
  let covered = 0;
  let total = 0;
  let hits = 0;
  for (const p of peaks) {
    const w = p.weight * (0.55 + 0.45 * Math.max(p.percussive, p.melodic * 0.85));
    total += w;
    const k = Math.round((p.t - phase) / step);
    const d = Math.abs(p.t - (phase + k * step));
    const tol = Math.min(0.045, step * 0.46);
    if (d > tol) continue;
    covered += w * (1 - d / tol);
    hits++;
  }
  if (!total) return { score: 0, hits: 0, step };
  // Finer grids explain more onsets, so charge a small complexity premium.
  const complexity = div === 3 ? 0.045 : 0.03 * (div - 2);
  return { score: covered / total - complexity, hits, step };
}

export function fitSectionGrid(peaks, opts) {
  const {
    bpm,
    phase,
    start,
    end,
    preferredDiv = 2,
    allowTriplets = true,
  } = opts;
  const period = 60 / bpm;
  const local = peaks.filter((p) => p.t >= start - 0.6 && p.t <= end + 0.6 && p.weight > 0.15);
  const divs = allowTriplets ? [2, 3, 4] : [2, 4];
  let best = null;
  for (const div of divs) {
    const step = period / div;
    if (step < 0.1) continue;
    const basePhase = ((phase % step) + step) % step;
    // Try the exact subdivision phase plus a few local nudges, but never drift
    // far enough to leave the region's beat grid.
    for (let d = -0.02; d <= 0.02 + 1e-9; d += 0.005) {
      const candidate = ((basePhase + d) % step + step) % step;
      const score = subdivisionScore(local, period, candidate, div, step);
      const preference = div === preferredDiv ? 0.012 : 0;
      const value = score.score + preference;
      if (!best || value > best.value) {
        best = { div, step, phase: candidate, value, score: score.score, hits: score.hits };
      }
    }
  }
  if (!best) best = { div: 2, step: period / 2, phase: ((phase % (period / 2)) + period / 2) % (period / 2), score: 0, hits: 0 };
  return {
    bpm,
    div: best.div,
    step: best.step,
    phase: +best.phase.toFixed(4),
    score: best.score,
    hits: best.hits,
  };
}

// RMS is measured in 2-second windows, which is exactly the right resolution
// for "is this a verse or a chorus" and has no tempo assumptions baked in.
export function sectionEnergy(bars, start, end) {
  const inside = bars.filter((b) => b.t + 2 > start && b.t < end);
  if (!inside.length) return 0.4;
  const mean = inside.reduce((s, b) => s + b.rms, 0) / inside.length;
  return mean;
}

export function normalizeEnergies(energies) {
  const values = Object.values(energies);
  if (!values.length) return {};
  const lo = percentile(values, 0.12);
  const hi = percentile(values, 0.9);
  const span = Math.max(1e-6, hi - lo);
  const out = {};
  for (const [name, value] of Object.entries(energies)) out[name] = clamp((value - lo) / span, 0, 1.2);
  return out;
}

// Snaps onsets to grid slots and returns the strongest support for each slot.
export function buildSlotMap(peaks, grid, start, end) {
  const slots = new Map();
  const tol = Math.min(0.045, grid.step * 0.47);
  for (const p of peaks) {
    if (p.t < start - grid.step || p.t > end + grid.step) continue;
    const k = Math.round((p.t - grid.phase) / grid.step);
    const t = grid.phase + k * grid.step;
    if (t < start || t > end) continue;
    const d = Math.abs(p.t - t);
    if (d > tol) continue;
    const key = Math.round(t * 1000);
    const strength = p.weight * (1 - d / tol);
    const entry = slots.get(key);
    if (!entry) {
      slots.set(key, { t, accent: strength, metric: 0, weight: p.weight, kind: p.kind, count: 1, best: p });
    } else {
      entry.accent = Math.max(entry.accent, strength) + strength * 0.18;
      entry.weight = Math.max(entry.weight, p.weight);
      entry.count++;
      if (strength > entry.accent * 0.8) entry.best = p;
    }
  }
  return slots;
}

export function metricWeight(t, grid, barPhase) {
  const beatPeriod = grid.step * grid.div;
  const inBeat = ((t - grid.phase) / grid.step) % grid.div;
  const pos = Math.round(((inBeat % grid.div) + grid.div) % grid.div);
  const beatPos = pos === 0 ? 1 : grid.div === 4 ? (pos === 2 ? 0.58 : 0.3) : 0.44;
  const inBar = ((t - barPhase) / beatPeriod) % 4;
  const beatInBar = Math.round(((inBar % 4) + 4) % 4);
  const down = beatInBar === 0 ? 1 : 0;
  return beatPos * 0.72 + down * 0.28;
}

// Chooses note times. The greedy priority selection is bounded by a minimum
// spacing derived from the target density, so fast sections never become a
// continuous wall and slow sections never drop to random taps.
export function selectNoteTimes(peaks, opts) {
  const {
    grid,
    barPhase,
    start,
    end,
    tdps,
    energy,
    rng,
    firstNote,
  } = opts;
  const step = grid.step;
  const playStart = Math.max(start, firstNote ?? start);
  const firstSlot = Math.ceil((playStart - grid.phase) / step - 1e-6);
  const lastSlot = Math.floor((end - grid.phase) / step + 1e-6);
  if (lastSlot < firstSlot) return { times: [], slots: [], target: 0, grid };

  const map = buildSlotMap(peaks, grid, grid.phase + firstSlot * step, grid.phase + lastSlot * step);
  const candidates = [];
  for (let k = firstSlot; k <= lastSlot; k++) {
    const t = +(grid.phase + k * step).toFixed(4);
    const slot = map.get(Math.round(t * 1000));
    const metric = metricWeight(t, grid, barPhase);
    const accent = slot ? slot.accent : 0;
    // Weak subdivisions without an onset are noise, not rhythm.
    if (!slot && metric < 0.55) continue;
    const priority = accent * 1.15 + metric * 0.62 + energy * 0.1 + rng() * 0.035;
    candidates.push({
      t, accent, metric, priority,
      strong: accent >= 0.42,
      kind: slot?.kind || 'fill',
    });
  }
  if (!candidates.length) return { times: [], slots: [], target: 0, grid };

  const duration = Math.max(0.5, end - playStart);
  const target = Math.max(1, Math.round(tdps * duration));
  const minGap = clamp(0.58 / Math.max(0.5, tdps), 0.105, 0.46);

  candidates.sort((a, b) => b.priority - a.priority);
  const selected = [];
  for (const c of candidates) {
    if (selected.length >= Math.ceil(target * 1.06)) break;
    if (!c.strong && selected.length >= Math.ceil(target * 0.88)) continue;
    let ok = true;
    for (const s of selected) {
      if (Math.abs(s.t - c.t) < minGap) { ok = false; break; }
    }
    if (!ok) continue;
    selected.push(c);
  }

  // A section should open on its strongest available cue, not on whichever
  // fill note happened to sort first.
  selected.sort((a, b) => a.t - b.t);
  if (selected.length && selected[0].t > playStart + step * 2.5) {
    const opening = candidates
      .filter((c) => c.t >= playStart && c.t <= playStart + step * 2.5 && c.strong)
      .sort((a, b) => b.priority - a.priority)[0];
    if (opening && !selected.some((s) => Math.abs(s.t - opening.t) < 1e-6)) {
      selected.unshift(opening);
      selected.sort((a, b) => a.t - b.t);
    }
  }

  return { times: selected.map((s) => s.t), slots: selected, target, grid, minGap };
}

export function validateNotes(notes, grid, peaks) {
  const issues = [];
  const byTime = new Map();
  for (const n of notes) {
    const key = `${n.t}:${n.lane}`;
    if (byTime.has(key)) issues.push(`duplicate note ${key}`);
    byTime.set(key, n);
    if (n.t < 0) issues.push(`negative time ${n.t}`);
    if (n.type === 'hold' && (!n.dur || n.dur <= 0)) issues.push(`hold without duration at ${n.t}`);
  }
  const sorted = [...notes].sort((a, b) => a.t - b.t);
  const laneLast = new Map();
  for (const n of sorted) {
    const prev = laneLast.get(n.lane);
    if (prev) {
      const gap = n.t - prev.t;
      if (gap < 0.085) issues.push(`same-lane gap ${gap.toFixed(3)}s on lane ${n.lane} at ${n.t}`);
      if (prev.type === 'hold' && n.t < prev.t + prev.dur - 0.02) {
        issues.push(`note inside hold on lane ${n.lane} at ${n.t}`);
      }
    }
    laneLast.set(n.lane, n);
  }
  return issues;
}
