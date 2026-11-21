// Tempo and grid fitting for the offline chart builder.
//
// The analysed onset list already contains far more events than a chart should
// ever use (grace notes, reverb tails, vocal breaths), so tempo is fitted by
// scoring the whole onset field against candidate beat grids instead of
// trusting a single inter-onset interval. Phase is fit on a fine histogram and
// then refined with the strongest percussive onsets, which are the events a
// player actually locks onto.

const TAU = Math.PI * 2;

function percentile(values, p) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const i = Math.min(sorted.length - 1, Math.max(0, Math.floor((sorted.length - 1) * p)));
  return sorted[i];
}

export function onsetWeight(peak, mode = 'balanced') {
  const low = Math.max(0, peak.low || 0);
  const mid = Math.max(0, peak.mid || 0);
  const high = Math.max(0, peak.high || 0);
  const strength = Math.max(0.001, peak.s || peak.strength || 0);
  // Absolute band energy varies a lot between masters, so normalise inside the
  // track before blending. The result is a 0..1 "how much does this event
  // matter rhythmically" score.
  const total = low + mid + high + 1e-9;
  const percussive = (low * 1.25 + mid * 0.85) / total;
  const melodic = (mid * 1.1 + high * 0.55) / total;
  const modeMix = mode === 'percussive'
    ? percussive
    : mode === 'melodic'
      ? melodic
      : percussive * 0.65 + melodic * 0.35;
  return strength * (0.35 + 0.65 * modeMix);
}

function phaseHistogram(peaks, period, bins = 240, mode = 'balanced') {
  const hist = new Float64Array(bins);
  for (const peak of peaks) {
    const phase = ((peak.t % period) + period) % period;
    const bin = Math.min(bins - 1, Math.floor((phase / period) * bins));
    hist[bin] += onsetWeight(peak, mode);
  }
  return hist;
}

function scorePhase(hist, phaseIndex, toleranceBins) {
  let sum = 0;
  const bins = hist.length;
  for (let d = -toleranceBins; d <= toleranceBins; d++) {
    const idx = ((phaseIndex + d) % bins + bins) % bins;
    const w = 1 - Math.abs(d) / (toleranceBins + 1);
    sum += hist[idx] * w * w;
  }
  return sum;
}

function bestPhase(hist, toleranceBins) {
  let best = 0;
  let bestScore = -Infinity;
  for (let i = 0; i < hist.length; i++) {
    const score = scorePhase(hist, i, toleranceBins);
    if (score > bestScore) { bestScore = score; best = i; }
  }
  return { index: best, score: bestScore };
}

function scoreOffset(peaks, period, offset, tolerance = 0.05, mode = 'balanced') {
  let score = 0;
  let hits = 0;
  for (const peak of peaks) {
    const rounded = Math.round((peak.t - offset) / period);
    const grid = offset + rounded * period;
    const d = Math.abs(peak.t - grid);
    if (d > tolerance) continue;
    const w = 1 - d / tolerance;
    score += onsetWeight(peak, mode) * w * w;
    hits++;
  }
  return { score, hits };
}

// Finds the beat period near the declared BPM and the phase that explains the
// most onset energy. A tiny preference keeps the authored tempo when several
// neighbouring periods score within noise.
export function fitTempo(peaks, opts = {}) {
  const {
    bpmHint = 120,
    beatOffsetHint = 0,
    range = 0.05,
    step = 0.05,
    tolerance = 0.045,
    mode = 'balanced',
  } = opts;
  if (!peaks.length) return { bpm: bpmHint, beatOffset: beatOffsetHint, score: 0, hits: 0 };

  const minBpm = bpmHint * (1 - range);
  const maxBpm = bpmHint * (1 + range);
  let best = null;
  for (let bpm = minBpm; bpm <= maxBpm + 1e-9; bpm += step) {
    const period = 60 / bpm;
    const bins = 240;
    const hist = phaseHistogram(peaks, period, bins, mode);
    const toleranceBins = Math.max(1, Math.round((tolerance / period) * bins));
    const phase = bestPhase(hist, toleranceBins);
    const offset = (phase.index / bins) * period;
    const refined = scoreOffset(peaks, period, offset, tolerance, mode);
    const hintPenalty = 1 - Math.min(0.04, Math.abs(bpm - bpmHint) / bpmHint * 0.35);
    const score = refined.score * hintPenalty;
    if (!best || score > best.score) {
      best = {
        bpm: +bpm.toFixed(3),
        beatOffset: +offset.toFixed(4),
        score,
        hits: refined.hits,
      };
    }
  }

  // The histogram phase can be half a bin off. Refine against the strongest
  // onsets rather than the full field so reverb tails do not drag it.
  const strong = peaks.filter((p) => onsetWeight(p, mode) >= percentile(peaks.map((p) => onsetWeight(p, mode)), 0.55));
  const period = 60 / best.bpm;
  let refinedOffset = best.beatOffset;
  let refinedScore = -Infinity;
  for (let delta = -0.03; delta <= 0.03 + 1e-9; delta += 0.001) {
    const offset = best.beatOffset + delta;
    const result = scoreOffset(strong, period, offset, tolerance, mode);
    if (result.score > refinedScore) {
      refinedScore = result.score;
      refinedOffset = offset;
    }
  }
  const snapped = ((refinedOffset % period) + period) % period;
  return {
    bpm: best.bpm,
    beatOffset: +snapped.toFixed(4),
    score: best.score,
    hits: best.hits,
  };
}

// Picks which beat of the fitted bar starts the bar. Low-frequency energy is
// weighted up because kicks and bass notes mark downbeats far more reliably
// than hats or melody.
export function fitBarPhase(peaks, bpm, beatOffset, opts = {}) {
  const { tolerance = 0.05, mode = 'percussive' } = opts;
  const period = 60 / bpm;
  let best = { beat: 0, score: -Infinity, hits: 0 };
  for (let beat = 0; beat < 4; beat++) {
    const offset = beatOffset + beat * period;
    const result = scoreOffset(peaks, period * 4, offset, tolerance, mode);
    if (result.score > best.score) best = { beat, score: result.score, hits: result.hits };
  }
  return { beat: best.beat, barOffset: +(((beatOffset + best.beat * period) % (period * 4)) + period * 4) % (period * 4), score: best.score };
}

// Fits the grid phase inside one section. The section may start at a rest, so
// the search is seeded by the track-level phase and only moves when the local
// audio gives a clearly stronger alignment.
export function fitSectionGrid(peaks, opts = {}) {
  const {
    bpm,
    beatOffsetHint = 0,
    start = 0,
    end = Infinity,
    tolerance = 0.045,
    maxShift = 0.12,
  } = opts;
  const period = 60 / bpm;
  const local = peaks.filter((p) => p.t >= start - 1.5 && p.t <= end + 1.5);
  const source = local.length >= 12 ? local : peaks;
  let bestOffset = ((beatOffsetHint % period) + period) % period;
  let bestScore = scoreOffset(source, period, bestOffset, tolerance, 'balanced').score;
  for (let delta = -maxShift; delta <= maxShift + 1e-9; delta += 0.002) {
    const candidate = ((bestOffset + delta) % period + period) % period;
    const score = scoreOffset(source, period, candidate, tolerance, 'balanced').score;
    if (score > bestScore * 1.04 + 1e-6) {
      bestScore = score;
      bestOffset = candidate;
    }
  }
  return { beatOffset: +bestOffset.toFixed(4), score: bestScore, samples: local.length };
}

export function median(values) {
  return percentile(values, 0.5);
}

export { percentile };
