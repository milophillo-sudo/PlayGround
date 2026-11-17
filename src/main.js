import { TRACKS, DEFAULT_TRACK_ID, TRACK_BY_ID } from './tracks.js';
import { createScene } from './scene.js';
import { AudioEngine } from './audio.js';

// ---------------------------------------------------------------- constants
const KEYMAP = {
  KeyA: 0, KeyS: 1, KeyD: 2, KeyF: 3, KeyJ: 4, KeyK: 5, KeyL: 6, Semicolon: 7,
  Numpad1: 0, Numpad2: 1, Numpad3: 2, Numpad4: 3, Numpad5: 4, Numpad6: 5, Numpad7: 6, Numpad8: 7,
};
const ACTIVE = { 4: [2, 3, 4, 5], 6: [1, 2, 3, 4, 5, 6], 8: [0, 1, 2, 3, 4, 5, 6, 7] };
const HIT_WINDOW = 0.185;
const EARLY_WINDOW = 0.16;
const WIN = { perfect: 0.045, great: 0.09, good: 0.135, bad: 0.185 };
const SCORE = { perfect: 3000, great: 2000, good: 1000, bad: 300 };
const WEIGHT = { perfect: 1, great: 0.85, good: 0.55, bad: 0.25, miss: 0 };
const BEST_KEY = 'cryout-best-v2';
const LEGACY_BEST_KEY = 'cryout-best-v1';
const LANE_LEAD = 2.05; // notes become tappable before their section starts

// ---------------------------------------------------------------- dom
const $ = (id) => document.getElementById(id);
const dom = {
  canvas: $('scene'), hud: $('hud'), pads: [...document.querySelectorAll('.pad')],
  start: $('startScreen'), startBtn: $('startBtn'), startLabel: $('startBtnLabel'),
  loadFill: $('loadFill'), startLanes: $('startLanes'), startTrack: $('startTrack'),
  startLength: $('startLength'), startLevel: $('startLevel'), trackCards: [...document.querySelectorAll('.track-card')],
  score: $('score'), acc: $('acc'), maxCombo: $('maxCombo'), progress: $('progressFill'),
  progressGlow: $('progressGlow'), section: $('sectionName'), time: $('timeLabel'),
  keys: $('keysCount'), energy: $('energyFill'), comboHud: $('comboHud'), comboNum: $('comboNum'),
  judge: $('judge'), pauseBtn: $('pauseBtn'), pause: $('pauseScreen'), result: $('resultScreen'),
  toast: $('toast'), rank: $('rank'), finalScore: $('finalScore'), finalAcc: $('finalAcc'),
  cPerfect: $('cPerfect'), cGreat: $('cGreat'), cGood: $('cGood'), cBad: $('cBad'),
  cMiss: $('cMiss'), fMaxCombo: $('fMaxCombo'), fcBadge: $('fcBadge'), resultTag: $('resultTag'),
  bestScoreLabel: $('bestScoreLabel'), bestBadge: $('bestBadge'), bestNote: $('bestNote'),
  bestLine: $('bestLine'), hudTrack: $('hudTrack'), hudBpm: $('hudBpm'),
  resultTrack: $('resultTrack'), resultDiff: $('resultDiff'), resultBpm: $('resultBpm'),
  footTrack: $('footTrack'), footLanes: $('footLanes'),
  barPerfect: $('barPerfect'), barGreat: $('barGreat'), barGood: $('barGood'),
  barBad: $('barBad'), barMiss: $('barMiss'), peakCombo: $('peakCombo'),
  comboLine: $('comboLine'), comboFill: $('comboFill'), accRing: $('accRing'),
  scoreDelta: $('scoreDelta'), resultLoading: $('resultLoading'), loadTrack: $('loadTrack'),
  loadProgress: $('loadProgress'), loadPct: $('loadPct'), loadRank: $('loadRank'),
  flash: $('flash'),
};

// ---------------------------------------------------------------- state
const scene = createScene(dom.canvas);
const audio = new AudioEngine();
let selectedTrack = TRACK_BY_ID[DEFAULT_TRACK_ID] || TRACKS[0];
let chart = selectedTrack.chart;
let noteObjects = [];
let gameState = 'boot'; // boot | menu | playing | paused | results
let currentSection = null;
let sectionIndex = 0;
let chartEnd = chart.song.chartEnd;
let trackDuration = chart.song.duration;
let loadToken = 0;
let resultToken = 0;
let lastPrefetch = null;
let comboHistory = [];
let comboClock = 0;
let vibeTimer = 0;

const stats = {
  score: 0, combo: 0, maxCombo: 0, judged: 0, weight: 0,
  perfect: 0, great: 0, good: 0, bad: 0, miss: 0, dropped: 0,
  health: 100,
};
const held = new Array(8).fill(false);
const holdNote = new Array(8).fill(null);
// Any finger resting anywhere on the screen keeps holds alive, so two-thumb
// holds never break when a second finger lands or slides between lanes.
const touchPoints = new Set();
function touching() { return touchPoints.size > 0; }
let toastTimer = 0;
let ghostCursor = 0;
let eventCursor = 0;

// ---------------------------------------------------------------- personal best
function readBestMap() {
  const map = {};
  try {
    const legacy = localStorage.getItem(LEGACY_BEST_KEY);
    if (legacy) map.cryout = JSON.parse(legacy);
  } catch { /* ignore */ }
  try {
    const raw = localStorage.getItem(BEST_KEY);
    if (raw) Object.assign(map, JSON.parse(raw) || {});
  } catch { /* ignore */ }
  return map;
}

let bestMap = readBestMap();
let personalBest = bestMap[selectedTrack.id] || null;

function renderBest() {
  personalBest = bestMap[selectedTrack.id] || null;
  const text = personalBest
    ? `${String(personalBest.score).padStart(7, '0')} · ${personalBest.rank || '—'}`
    : '—';
  if (dom.bestScoreLabel) dom.bestScoreLabel.textContent = text;
  if (dom.bestLine) dom.bestLine.innerHTML = `PERSONAL BEST <b>${text}</b>`;
  for (const card of dom.trackCards) {
    const best = bestMap[card.dataset.track];
    const tag = card.querySelector('.tc-best');
    if (tag) tag.textContent = best ? best.rank || '—' : '';
  }
}

// ---------------------------------------------------------------- build
scene.setSection(chart.sections[0]);
scene.setTempo(chart.song.bpm, chart.song.beatOffset);
scene.setCity(chart.sections[0].city || 0);

function clearNoteObjects() {
  for (const n of noteObjects) {
    n.group.removeFromParent();
    n.head.material.dispose();
    if (n.body) n.body.material.dispose();
    if (n.tail) n.tail.material.dispose();
  }
  noteObjects = [];
}

function buildNotes() {
  clearNoteObjects();
  noteObjects = chart.notes.map((data, index) => {
    const created = scene.makeNote(data.lane, data.type);
    created.group.visible = false;
    return {
      data, index, lane: data.lane, type: data.type,
      state: 'pending', endTime: data.t + (data.dur || 0),
      group: created.group, head: created.head, body: created.body, tail: created.tail,
      color: created.color, tickAt: data.t,
    };
  });
}

function resetGame() {
  for (const n of noteObjects) {
    n.state = 'pending';
    n.tickAt = n.data.t;
    n.group.visible = false;
    n.group.position.set(0, 0, 0);
    n.head.visible = true;
    n.head.scale.set(1.04, 1.04, 1);
    n.head.material.opacity = 1;
    if (n.body) {
      n.body.visible = true;
      n.body.scale.set(0.52, 1, 1);
      n.body.position.y = 0.5;
      n.tail.visible = true;
      n.tail.position.y = 1;
    }
  }
  Object.assign(stats, {
    score: 0, combo: 0, maxCombo: 0, judged: 0, weight: 0,
    perfect: 0, great: 0, good: 0, bad: 0, miss: 0, dropped: 0, health: 100,
  });
  held.fill(false);
  holdNote.fill(null);
  touchPoints.clear();
  ghostCursor = 0;
  eventCursor = 0;
  comboHistory = [];
  comboClock = 0;
  vibeTimer = 0;
  scene.clearGhosts();
  sectionIndex = 0;
  currentSection = null;
  updateSection(chart.sections[0], true);
  updateHUD(0);
  setCombo(0, false);
  dom.judge.className = '';
  for (const p of dom.pads) p.classList.remove('pressed');
  dom.flash.classList.remove('on');
}

function activeLanesFor(keys) {
  return ACTIVE[keys] || ACTIVE[8];
}

function lanesAhead(t) {
  const lanes = new Set();
  for (const n of noteObjects) {
    if (n.state !== 'pending') continue;
    const dt = n.data.t - t;
    if (dt < LANE_LEAD && dt > -HIT_WINDOW) lanes.add(n.lane);
  }
  return lanes;
}

// ---------------------------------------------------------------- ui helpers
function pad2(n) { return String(n).padStart(2, '0'); }
function fmtTime(sec) {
  const s = Math.max(0, Math.floor(sec));
  return `${Math.floor(s / 60)}:${pad2(s % 60)}`;
}

function updateHUD(t) {
  if (t - comboClock >= 0.32) {
    comboClock = t;
    comboHistory.push(stats.combo);
    if (comboHistory.length > 260) comboHistory.shift();
  }
  dom.score.textContent = String(stats.score).padStart(7, '0');
  const acc = stats.judged ? (stats.weight / stats.judged) * 100 : 100;
  dom.acc.textContent = acc.toFixed(2) + '%';
  dom.maxCombo.textContent = stats.maxCombo;
  const p = Math.max(0, Math.min(1, t / chartEnd));
  dom.progress.style.width = (p * 100).toFixed(2) + '%';
  dom.progressGlow.style.left = (p * 100).toFixed(2) + '%';
  const secs = Math.max(0, Math.min(trackDuration, t));
  dom.time.textContent = `${fmtTime(secs)} / ${fmtTime(trackDuration)}`;
  dom.energy.style.height = Math.max(0, Math.min(100, stats.health)).toFixed(1) + '%';
}

function showJudge(kind, text) {
  const el = dom.judge;
  el.textContent = text || kind.toUpperCase();
  el.className = kind;
  // restart the CSS animation
  void el.offsetWidth;
  el.classList.add('pop');
}

function setCombo(value, bump = true) {
  stats.combo = value;
  if (value > stats.maxCombo) stats.maxCombo = value;
  dom.comboNum.textContent = value;
  dom.maxCombo.textContent = stats.maxCombo;
  if (value >= 2) {
    dom.comboHud.classList.add('on');
  } else {
    dom.comboHud.classList.remove('on');
  }
  if (value >= 2 && bump) {
    dom.comboHud.classList.remove('bump');
    void dom.comboHud.offsetWidth;
    dom.comboHud.classList.add('bump');
  }
}

function toast(text, duration = 1300) {
  dom.toast.textContent = text;
  dom.toast.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => dom.toast.classList.remove('on'), duration);
}

function updateSection(sec, force = false) {
  if (!sec || (!force && sec === currentSection)) return;
  currentSection = sec;
  scene.setSection(sec);
  dom.section.textContent = sec.name;
  dom.keys.textContent = sec.keys;
  const active = new Set(activeLanesFor(sec.keys));
  for (const pad of dom.pads) {
    const lane = Number(pad.dataset.lane);
    const live = active.has(lane);
    pad.classList.toggle('active', live);
    pad.classList.toggle('sleep', !live);
    pad.setAttribute('aria-hidden', String(!live));
    pad.tabIndex = live ? 0 : -1;
  }
  document.documentElement.style.setProperty('--cyan', sec.color);
  document.documentElement.style.setProperty('--magenta', sec.accent);
  if (!force) {
    toast(`${sec.name} // ${sec.keys} LANES`, 1100);
    scene.state.shake = Math.min(0.12, scene.state.shake + 0.035);
  }
}

function findSection(t) {
  const ss = chart.sections;
  for (let i = ss.length - 1; i >= 0; i--) {
    if (t >= ss[i].start) return { index: i, sec: ss[i] };
  }
  return { index: 0, sec: ss[0] };
}

// ---------------------------------------------------------------- judging
function judgeHit(note, offset) {
  const a = Math.abs(offset);
  let kind;
  if (a <= WIN.perfect) kind = 'perfect';
  else if (a <= WIN.great) kind = 'great';
  else if (a <= WIN.good) kind = 'good';
  else kind = 'bad';

  stats[kind]++;
  stats.judged++;
  stats.weight += WEIGHT[kind];
  stats.score += SCORE[kind];
  stats.health = Math.min(100, stats.health + (kind === 'perfect' ? 1.1 : kind === 'great' ? .8 : kind === 'good' ? .4 : -1.6));

  if (kind === 'bad') {
    setCombo(0, false);
  } else {
    setCombo(stats.combo + 1);
  }

  if (note.type === 'hold') {
    note.state = 'holding';
    note.endTime = note.data.t + note.data.dur;
    note.tickAt = audio.time;
    note.head.visible = false;
    holdNote[note.lane] = note;
  } else {
    note.state = 'done';
    note.group.visible = false;
  }

  const text = kind === 'perfect' ? 'PERFECT' : kind === 'great' ? 'GREAT' : kind === 'good' ? 'GOOD' : 'BAD';
  showJudge(kind, text);
  scene.hitFx(note.lane, kind);
  audio.click(note.lane, kind === 'perfect' ? 0.52 : 0.38);
}

function missNote(note) {
  if (note.state !== 'pending') return;
  note.state = 'miss';
  note.group.visible = false;
  stats.miss++;
  stats.judged++;
  stats.health = Math.max(0, stats.health - 5);
  setCombo(0, false);
  showJudge('miss', 'MISS');
  scene.missFx(note.lane);
  audio.thud();
}

function dropHold(note) {
  if (note.state !== 'holding') return;
  note.state = 'dropped';
  note.group.visible = false;
  holdNote[note.lane] = null;
  stats.dropped++;
  stats.miss++;
  stats.judged++;
  stats.health = Math.max(0, stats.health - 4);
  setCombo(0, false);
  showJudge('miss', 'HOLD LOST');
  scene.missFx(note.lane);
  audio.thud();
}

function completeHold(note) {
  if (note.state !== 'holding') return;
  note.state = 'done';
  note.group.visible = false;
  holdNote[note.lane] = null;
  stats.score += 450;
  stats.health = Math.min(100, stats.health + 1.2);
  scene.pressFx(note.lane);
  scene.hitFx(note.lane, 'great');
}

function pressLane(lane) {
  if (gameState !== 'playing') return;
  scene.pressFx(lane);
  audio.click(lane, 0.16);
  const t = audio.time;
  if (t < 0) return;

  let best = null;
  let bestAbs = Infinity;
  for (const n of noteObjects) {
    if (n.lane !== lane || n.state !== 'pending') continue;
    const d = t - n.data.t;
    if (d < -EARLY_WINDOW || d > HIT_WINDOW) continue;
    const a = Math.abs(d);
    if (a < bestAbs) { bestAbs = a; best = n; }
  }
  if (!best) return;
  judgeHit(best, t - best.data.t);
}

function releaseLane(lane) {
  if (gameState !== 'playing') return;
  const n = holdNote[lane];
  if (!n) return;
  // Another finger still resting on the glass keeps every active hold alive.
  if (touching()) return;
  holdNote[lane] = null;
  if (audio.time < n.endTime - 0.12) dropHold(n);
  else completeHold(n);
}

// ---------------------------------------------------------------- note render
const SPEED = 8.4;

function updateNotes(t) {
  const ns = scene.noteScale;
  for (const n of noteObjects) {
    if (n.state === 'pending') {
      const y = (n.data.t - t) * SPEED;
      // local lane space: the lane frame supplies the diagonal world position
      n.group.position.set(0, y, 0.24);
      n.group.visible = y < 14.5 && y > -1.3;
      n.head.scale.set(1.04 * ns, 1.04 * ns, 1);
      if (n.body) {
        const len = n.data.dur * SPEED;
        n.body.visible = n.group.visible;
        n.tail.visible = n.group.visible;
        n.body.scale.set(0.52 * ns, len, 1);
        n.body.position.y = len / 2;
        n.body.material.rotation = -scene.laneScreenAngle(n.lane);
        n.tail.scale.set(0.68 * ns, 0.68 * ns, 1);
        n.tail.position.y = len;
      }
      if (t > n.data.t + HIT_WINDOW) missNote(n);
    } else if (n.state === 'holding') {
      if (!held[n.lane] && !touching()) { dropHold(n); continue; }
      if (t >= n.endTime - 0.02) {
        completeHold(n);
        continue;
      }
      const remain = Math.max(0, (n.endTime - t) * SPEED);
      n.group.visible = true;
      n.group.position.set(0, 0.02, 0.24);
      n.head.visible = false;
      if (n.body) {
        n.body.visible = remain > 0.03;
        n.body.scale.set(0.52 * ns, remain, 1);
        n.body.position.y = remain / 2;
        n.body.material.rotation = -scene.laneScreenAngle(n.lane);
        n.tail.visible = remain > 0.4;
        n.tail.scale.set(0.68 * ns, 0.68 * ns, 1);
        n.tail.position.y = remain;
      }
      if (t > n.tickAt) {
        n.tickAt = t + 0.12;
        stats.score += 24;
        stats.health = Math.min(100, stats.health + 0.06);
      }
    } else {
      n.group.visible = false;
    }
  }
}

// ---------------------------------------------------------------- game flow
async function startGame() {
  if (!audio.loaded) return;
  resultToken++;
  dom.start.classList.remove('show');
  dom.result.classList.remove('show');
  dom.resultLoading.classList.remove('show');
  dom.pause.classList.remove('show');
  dom.hud.classList.remove('hidden');
  dom.hud.setAttribute('aria-hidden', 'false');
  document.body.classList.add('playing');
  resetGame();
  gameState = 'starting';
  try {
    await audio.start(0, { fadeStart: selectedTrack.fadeStart, fadeEnd: selectedTrack.fadeEnd });
    gameState = 'playing';
    toast(`LISTEN // ${chart.sections[0].keys} LANES`, 1500);
  } catch (err) {
    console.error(err);
    gameState = 'menu';
    document.body.classList.remove('playing');
    dom.hud.classList.add('hidden');
    dom.start.classList.add('show');
    dom.startLabel.textContent = 'AUDIO ERROR';
    toast('AUDIO COULD NOT START', 3000);
  }
}

function pauseGame() {
  if (gameState !== 'playing') return;
  gameState = 'paused';
  audio.pause();
  dom.pause.classList.add('show');
}

async function resumeGame() {
  if (gameState !== 'paused') return;
  audio.resume();
  dom.pause.classList.remove('show');
  gameState = 'playing';
}

function quitToMenu() {
  resultToken++;
  gameState = 'menu';
  audio.stop();
  audio.resume();
  dom.pause.classList.remove('show');
  dom.result.classList.remove('show');
  dom.resultLoading.classList.remove('show');
  dom.hud.classList.add('hidden');
  dom.hud.setAttribute('aria-hidden', 'true');
  dom.start.classList.add('show');
  document.body.classList.remove('playing');
  scene.setSection(chart.sections[0]);
  scene.setTempo(chart.song.bpm, chart.song.beatOffset);
  scene.setCity(chart.sections[0].city || 0);
  scene.setPreviewLanes(new Set());
  for (const n of noteObjects) n.group.visible = false;
  held.fill(false);
  holdNote.fill(null);
  touchPoints.clear();
  ghostCursor = 0;
  eventCursor = 0;
  scene.clearGhosts();
  for (const p of dom.pads) p.classList.remove('pressed', 'active', 'sleep');
  document.documentElement.style.setProperty('--cyan', '#5ee7ff');
  document.documentElement.style.setProperty('--magenta', '#ff5fd2');
}

function rankFor(acc, judged) {
  if (judged === 0) return 'F';
  if (acc >= 99.5) return 'S+';
  if (acc >= 98) return 'S';
  if (acc >= 93) return 'A';
  if (acc >= 86) return 'B';
  if (acc >= 76) return 'C';
  return acc < 50 ? 'F' : 'D';
}

function comboGraphPath(history, peak) {
  const w = 320, h = 116;
  const pts = history.length ? history : [0, 0, 0, 0];
  const max = Math.max(1, peak, ...pts);
  const step = w / Math.max(1, pts.length - 1);
  let line = '';
  for (let i = 0; i < pts.length; i++) {
    const x = i * step;
    const y = h - (pts[i] / max) * (h - 10);
    line += `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  const fill = `${line}L${w} ${h}L0 ${h}Z`;
  return { line, fill };
}

function flashScreen(power = 1) {
  dom.flash.style.opacity = String(Math.min(0.42, 0.16 + power * 0.18));
  dom.flash.classList.add('on');
  clearTimeout(vibeTimer);
  vibeTimer = setTimeout(() => {
    dom.flash.style.opacity = '';
    dom.flash.classList.remove('on');
  }, 180);
}

function animateNumber(el, to, duration, formatter) {
  const from = 0;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = formatter(Math.round(from + (to - from) * eased));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function showResults(data) {
  const { rank, acc, full, isBest, prevBest, judgeTotals } = data;
  dom.rank.textContent = rank;
  dom.finalScore.textContent = '0000000';
  dom.finalAcc.textContent = '0.00%';
  animateNumber(dom.finalScore, data.score, 900, (n) => String(n).padStart(7, '0'));
  animateNumber(dom.fMaxCombo, data.maxCombo, 700, (n) => String(n));
  const accStart = performance.now();
  const accTick = (now) => {
    const p = Math.min(1, (now - accStart) / 900);
    const value = acc * (1 - Math.pow(1 - p, 3));
    dom.finalAcc.textContent = value.toFixed(2) + '%';
    dom.accRing.style.setProperty('--acc', value.toFixed(2) + '%');
    if (p < 1) requestAnimationFrame(accTick);
  };
  requestAnimationFrame(accTick);

  dom.cPerfect.textContent = data.counts.perfect;
  dom.cGreat.textContent = data.counts.great;
  dom.cGood.textContent = data.counts.good;
  dom.cBad.textContent = data.counts.bad;
  dom.cMiss.textContent = data.counts.miss;
  const total = Math.max(1, judgeTotals);
  dom.barPerfect.style.width = ((data.counts.perfect / total) * 100).toFixed(1) + '%';
  dom.barGreat.style.width = ((data.counts.great / total) * 100).toFixed(1) + '%';
  dom.barGood.style.width = ((data.counts.good / total) * 100).toFixed(1) + '%';
  dom.barBad.style.width = ((data.counts.bad / total) * 100).toFixed(1) + '%';
  dom.barMiss.style.width = ((data.counts.miss / total) * 100).toFixed(1) + '%';

  const graph = comboGraphPath(comboHistory, stats.maxCombo);
  dom.comboLine.setAttribute('d', graph.line);
  dom.comboFill.setAttribute('d', graph.fill);
  dom.peakCombo.textContent = stats.maxCombo;

  dom.resultTrack.textContent = selectedTrack.title;
  dom.resultDiff.textContent = selectedTrack.difficulty;
  dom.resultBpm.textContent = `${selectedTrack.bpm} BPM`;
  dom.footTrack.textContent = selectedTrack.shortTitle;
  dom.footLanes.textContent = selectedTrack.laneLabel;
  dom.resultTag.textContent = full ? 'FULL COMBO // FIELD MASTERED'
    : acc < 50 ? 'SIGNAL LOST // TRY AGAIN'
    : 'CLEARED // SIGNAL COMPLETE';
  dom.fcBadge.classList.toggle('on', full);
  dom.bestBadge.classList.toggle('on', isBest);

  const best = bestMap[selectedTrack.id] || null;
  dom.bestNote.innerHTML = best
    ? `${String(best.score).padStart(7, '0')} · ${best.rank || '—'}`
    : 'FIRST RUN';
  dom.scoreDelta.textContent = isBest
    ? (prevBest ? `NEW BEST +${String(Math.max(0, data.score - prevBest.score)).padStart(5, '0')}` : 'FIRST CLEAR')
    : `PB GAP ${String(Math.max(0, (best?.score || 0) - data.score)).padStart(5, '0')}`;

  dom.result.classList.remove('show');
  void dom.result.offsetWidth;
  dom.result.classList.add('show');
  setTimeout(() => { dom.resultLoading.classList.remove('show'); }, 60);
  dom.resultLoading.setAttribute('aria-hidden', 'true');
}

function finishGame() {
  if (gameState !== 'playing' && gameState !== 'paused') return;
  gameState = 'results';
  audio.stop();
  audio.resume();
  dom.hud.classList.add('hidden');
  dom.hud.setAttribute('aria-hidden', 'true');
  dom.pause.classList.remove('show');
  document.body.classList.remove('playing');

  const acc = stats.judged ? (stats.weight / stats.judged) * 100 : 100;
  const rank = rankFor(acc, stats.judged);
  comboHistory.push(stats.combo);
  if (comboHistory.length > 260) comboHistory.shift();
  const full = stats.miss === 0 && stats.bad === 0 && stats.judged > 0;
  const runScore = stats.score;
  const prevBest = bestMap[selectedTrack.id] || null;
  const isBest = !prevBest
    || runScore > prevBest.score
    || (runScore === prevBest.score && acc > prevBest.acc);
  if (isBest) {
    bestMap[selectedTrack.id] = { score: runScore, acc, rank, maxCombo: stats.maxCombo, full, at: Date.now() };
    try { localStorage.setItem(BEST_KEY, JSON.stringify(bestMap)); } catch { /* storage unavailable */ }
  }
  renderBest();

  const data = {
    score: runScore, acc, rank, full, isBest, prevBest,
    maxCombo: stats.maxCombo, counts: { ...stats }, judgeTotals: stats.judged,
  };

  const token = ++resultToken;
  dom.result.classList.remove('show');
  dom.resultLoading.classList.add('show');
  dom.resultLoading.setAttribute('aria-hidden', 'false');
  dom.loadTrack.textContent = `${selectedTrack.shortTitle} // ${selectedTrack.difficulty}`;
  dom.loadRank.textContent = '?';
  dom.loadProgress.style.width = '0%';
  dom.loadPct.textContent = '00%';

  const start = performance.now();
  const duration = 1650;
  const tick = (now) => {
    if (token !== resultToken) return;
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    dom.loadProgress.style.width = (eased * 100).toFixed(1) + '%';
    dom.loadPct.textContent = String(Math.round(eased * 100)).padStart(2, '0') + '%';
    if (p < 1) requestAnimationFrame(tick);
    else {
      dom.loadRank.textContent = rank;
      setTimeout(() => {
        if (token === resultToken) showResults(data);
      }, 280);
    }
  };
  requestAnimationFrame(tick);
}

function retryGame() {
  resultToken++;
  dom.result.classList.remove('show');
  startGame();
}

function alignPads(ahead = new Set()) {
  // Long touch strips follow the projected lane direction. Tapping anywhere
  // along the lane hits that lane, and a lane with an incoming note is made
  // live before its section actually starts.
  const active = new Set(currentSection ? activeLanesFor(currentSection.keys) : []);
  for (const lane of ahead) active.add(lane);
  for (let i = 0; i < 8; i++) {
    const g = scene.laneScreenGeometry(i);
    const left = i > 0 ? g.x - scene.laneScreenGeometry(i - 1).x : g.x - scene.laneScreenGeometry(1).x;
    const right = i < 7 ? scene.laneScreenGeometry(i + 1).x - g.x : g.x - scene.laneScreenGeometry(6).x;
    const gap = Math.max(24, Math.min(Math.abs(left), Math.abs(right)));
    const width = Math.max(40, Math.min(176, gap * 0.94));
    // The strip is anchored at the hit circle and runs straight up the lane;
    // a small tail below the ring gives thumbs somewhere to land naturally.
    const bottom = g.y + 26;
    const top = Math.max(6, Math.min(bottom - 110, g.topY));
    const height = Math.max(110, bottom - top);
    const p = dom.pads[i];
    const transform = `translate(-50%,-100%) rotate(${g.angle.toFixed(4)}rad)`;
    p.style.left = g.x.toFixed(1) + 'px';
    p.style.top = bottom.toFixed(1) + 'px';
    p.style.width = width.toFixed(1) + 'px';
    p.style.height = height.toFixed(1) + 'px';
    p.style.transform = transform;
    const live = active.has(i);
    if (p.classList.contains('sleep') === live) p.classList.toggle('sleep', !live);
    p.setAttribute('aria-hidden', String(!live));
  }
}

function refreshSection(t) {
  const found = findSection(t);
  if (found.index !== sectionIndex || currentSection === null) {
    sectionIndex = found.index;
    updateSection(found.sec);
  }
}

function updateGhostEvents(t) {
  const list = chart.ghosts || [];
  while (ghostCursor < list.length && list[ghostCursor].t <= t) {
    const g = list[ghostCursor++];
    scene.ghostFx(g.lane, g.type);
  }
}

function updateChartEvents(t) {
  const list = chart.events || [];
  while (eventCursor < list.length && list[eventCursor].t <= t) {
    const ev = list[eventCursor++];
    switch (ev.type) {
      case 'echo': scene.echoFx(ev.lane, ev.dir ?? (ev.lane < 3.5 ? -1 : 1), ev.power ?? 1); break;
      case 'pulse': scene.pulseFx(ev.power ?? 1); break;
      case 'burst': scene.burstFx(ev.lane, ev.power ?? 1); break;
      case 'vibe':
        scene.vibeFx(ev.power ?? 1);
        flashScreen(ev.power ?? 1);
        break;
      case 'motion': scene.motionEvent(ev.style, ev.amp, ev.speed, ev.pitch); break;
      default: break;
    }
  }
}

// ---------------------------------------------------------------- input
function keyDown(e) {
  if (e.code === 'Escape') {
    if (gameState === 'playing') { e.preventDefault(); pauseGame(); }
    else if (gameState === 'paused') { e.preventDefault(); resumeGame(); }
    return;
  }
  if (e.repeat) return;
  const lane = KEYMAP[e.code];
  if (lane === undefined) return;
  e.preventDefault();
  if (gameState !== 'playing') return;
  if (held[lane]) return;
  held[lane] = true;
  dom.pads[lane].classList.add('pressed');
  pressLane(lane);
}

function keyUp(e) {
  const lane = KEYMAP[e.code];
  if (lane === undefined) return;
  if (!held[lane]) return;
  held[lane] = false;
  dom.pads[lane].classList.remove('pressed');
  releaseLane(lane);
}

document.addEventListener('keydown', keyDown, { passive: false });
document.addEventListener('keyup', keyUp);

for (const pad of dom.pads) {
  const lane = Number(pad.dataset.lane);
  const down = (e) => {
    e.preventDefault();
    if (gameState !== 'playing') return;
    touchPoints.add(e.pointerId);
    try { pad.setPointerCapture(e.pointerId); } catch { /* noop */ }
    if (held[lane]) return;
    held[lane] = true;
    pad.classList.add('pressed');
    pressLane(lane);
  };
  const up = (e) => {
    e.preventDefault();
    touchPoints.delete(e.pointerId);
    if (!held[lane]) return;
    held[lane] = false;
    pad.classList.remove('pressed');
    releaseLane(lane);
  };
  pad.addEventListener('pointerdown', down, { passive: false });
  pad.addEventListener('pointerup', up, { passive: false });
  pad.addEventListener('pointercancel', up, { passive: false });
  pad.addEventListener('lostpointercapture', up, { passive: false });
  pad.addEventListener('contextmenu', (e) => e.preventDefault());
}

// Count fingers pressed anywhere on the page, not just on a lane strip.
document.addEventListener('pointerdown', (e) => {
  if (gameState === 'playing') touchPoints.add(e.pointerId);
}, { passive: true });
const dropPointer = (e) => { touchPoints.delete(e.pointerId); };
document.addEventListener('pointerup', dropPointer, { passive: true });
document.addEventListener('pointercancel', dropPointer, { passive: true });
document.addEventListener('pointerleave', dropPointer, { passive: true });

dom.startBtn.addEventListener('click', () => {
  if (gameState === 'boot' || gameState === 'menu') startGame();
});
for (const card of dom.trackCards) {
  card.addEventListener('click', () => {
    if (gameState !== 'boot' && gameState !== 'menu') return;
    if (card.dataset.track === selectedTrack.id) return;
    selectTrack(card.dataset.track);
  });
}
dom.pauseBtn.addEventListener('click', pauseGame);
$('resumeBtn').addEventListener('click', resumeGame);
$('restartBtn').addEventListener('click', () => { dom.pause.classList.remove('show'); startGame(); });
$('quitBtn').addEventListener('click', quitToMenu);
$('retryBtn').addEventListener('click', retryGame);
$('menuBtn').addEventListener('click', quitToMenu);

document.addEventListener('visibilitychange', () => {
  if (document.hidden && gameState === 'playing') pauseGame();
});
addEventListener('blur', () => {
  if (gameState === 'playing') pauseGame();
});
dom.canvas.addEventListener('contextmenu', (e) => e.preventDefault());

// ---------------------------------------------------------------- track select
function applyTrackUI() {
  const t = selectedTrack;
  if (dom.startTrack) dom.startTrack.textContent = t.shortTitle;
  if (dom.startLength) dom.startLength.textContent = fmtTime(t.duration);
  if (dom.startLevel) dom.startLevel.textContent = t.difficulty;
  if (dom.startLanes) dom.startLanes.textContent = t.laneLabel;
  if (dom.hudTrack) dom.hudTrack.textContent = t.shortTitle;
  if (dom.hudBpm) dom.hudBpm.textContent = `${t.bpm} BPM`;
  if (dom.loadTrack) dom.loadTrack.textContent = `${t.shortTitle} // ${t.difficulty}`;
  for (const card of dom.trackCards) {
    const on = card.dataset.track === t.id;
    card.classList.toggle('active', on);
    card.setAttribute('aria-selected', String(on));
  }
  document.documentElement.style.setProperty('--track-accent', t.accent);
  renderBest();
}

async function selectTrack(id, { autoLoad = true } = {}) {
  const next = TRACK_BY_ID[id];
  if (!next) return;
  selectedTrack = next;
  chart = next.chart;
  chartEnd = chart.song.chartEnd;
  trackDuration = next.duration;
  applyTrackUI();
  scene.setSection(chart.sections[0]);
  scene.setTempo(chart.song.bpm, chart.song.beatOffset);
  scene.setCity(chart.sections[0].city || 0);
  scene.setPreviewLanes(new Set());
  buildNotes();
  resetGame();
  if (!autoLoad) return;
  gameState = 'boot';
  dom.startBtn.disabled = true;
  await loadAudio(next);
}

async function loadAudio(track = selectedTrack) {
  const token = ++loadToken;
  dom.startLabel.textContent = 'DECODING AUDIO';
  dom.loadFill.style.width = '0%';
  try {
    await audio.load(track.audio, (p) => {
      if (token !== loadToken) return;
      dom.loadFill.style.width = Math.round(p * 100) + '%';
    });
    if (token !== loadToken) return;
    dom.loadFill.style.width = '100%';
    dom.startLabel.textContent = 'START SESSION';
    dom.startBtn.disabled = false;
    gameState = 'menu';
  } catch (err) {
    if (token !== loadToken) return;
    console.error(err);
    dom.startLabel.textContent = 'AUDIO UNAVAILABLE';
    toast('COULD NOT LOAD AUDIO', 4000);
    gameState = 'menu';
  }
}

buildNotes();
resetGame();
gameState = 'boot';
applyTrackUI();
loadAudio(selectedTrack);

// ---------------------------------------------------------------- loop
let last = performance.now();
let menuT = 0;

function frame(now) {
  const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
  last = now;
  menuT += dt;

  if (gameState === 'playing') {
    const t = audio.time;
    refreshSection(t);
    const ahead = lanesAhead(t);
    scene.setPreviewLanes(ahead);
    updateGhostEvents(t);
    updateChartEvents(t);
    updateNotes(t);
    updateHUD(t);
    scene.animate(dt, t, true);
    alignPads(ahead);
    if (t >= chartEnd) finishGame();
  } else if (gameState === 'paused') {
    const t = audio.time;
    scene.animate(dt, t, true);
  } else if (gameState === 'results') {
    scene.animate(dt, menuT, false);
  } else {
    scene.animate(dt, menuT, false);
  }

  scene.render();
  requestAnimationFrame(frame);
}

// exposed for automated smoke tests / tinkering
window.__cryout = {
  audio, stats, scene, pressLane, releaseLane, selectTrack,
  get chart() { return chart; },
  get notes() { return noteObjects; },
  get state() { return gameState; },
  get best() { return personalBest; },
};

requestAnimationFrame(frame);
