import { CHART } from './chart.js';
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
const END_TIME = CHART.song.chartEnd;

// ---------------------------------------------------------------- dom
const $ = (id) => document.getElementById(id);
const dom = {
  canvas: $('scene'), hud: $('hud'), pads: [...document.querySelectorAll('.pad')],
  start: $('startScreen'), startBtn: $('startBtn'), startLabel: $('startBtnLabel'),
  loadFill: $('loadFill'), startLanes: $('startLanes'),
  score: $('score'), acc: $('acc'), maxCombo: $('maxCombo'), progress: $('progressFill'),
  progressGlow: $('progressGlow'), section: $('sectionName'), time: $('timeLabel'),
  keys: $('keysCount'), energy: $('energyFill'), comboHud: $('comboHud'), comboNum: $('comboNum'),
  judge: $('judge'), pauseBtn: $('pauseBtn'), pause: $('pauseScreen'), result: $('resultScreen'),
  toast: $('toast'), rank: $('rank'), finalScore: $('finalScore'), finalAcc: $('finalAcc'),
  cPerfect: $('cPerfect'), cGreat: $('cGreat'), cGood: $('cGood'), cBad: $('cBad'),
  cMiss: $('cMiss'), fMaxCombo: $('fMaxCombo'), fcBadge: $('fcBadge'), resultTag: $('resultTag'),
};

// ---------------------------------------------------------------- state
const scene = createScene(dom.canvas);
const audio = new AudioEngine();
let noteObjects = [];
let gameState = 'boot'; // boot | menu | playing | paused | results
let currentSection = null;
let sectionIndex = 0;

const stats = {
  score: 0, combo: 0, maxCombo: 0, judged: 0, weight: 0,
  perfect: 0, great: 0, good: 0, bad: 0, miss: 0, dropped: 0,
  health: 100,
};
const held = new Array(8).fill(false);
const holdNote = new Array(8).fill(null);
let toastTimer = 0;

// ---------------------------------------------------------------- build
scene.setSection(CHART.sections[0]);

function buildNotes() {
  noteObjects = CHART.notes.map((data, index) => {
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
  sectionIndex = 0;
  currentSection = null;
  updateSection(CHART.sections[0], true);
  updateHUD(0);
  setCombo(0, false);
  dom.judge.className = '';
  for (const p of dom.pads) p.classList.remove('pressed');
}

function activeLanesFor(keys) {
  return ACTIVE[keys] || ACTIVE[8];
}

// ---------------------------------------------------------------- ui helpers
function pad2(n) { return String(n).padStart(2, '0'); }

function updateHUD(t) {
  dom.score.textContent = String(stats.score).padStart(7, '0');
  const acc = stats.judged ? (stats.weight / stats.judged) * 100 : 100;
  dom.acc.textContent = acc.toFixed(2) + '%';
  dom.maxCombo.textContent = stats.maxCombo;
  const p = Math.max(0, Math.min(1, t / END_TIME));
  dom.progress.style.width = (p * 100).toFixed(2) + '%';
  dom.progressGlow.style.left = (p * 100).toFixed(2) + '%';
  const secs = Math.max(0, Math.min(CHART.song.duration, t));
  const mm = Math.floor(secs / 60);
  const ss = Math.floor(secs % 60);
  dom.time.textContent = `${mm}:${pad2(ss)} / 2:18`;
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
    pad.classList.toggle('active', active.has(lane));
    pad.classList.toggle('sleep', !active.has(lane));
  }
  document.documentElement.style.setProperty('--cyan', sec.color);
  document.documentElement.style.setProperty('--magenta', sec.accent);
  if (!force) {
    toast(`${sec.name} // ${sec.keys} LANES`, 1100);
    scene.state.shake = Math.min(0.12, scene.state.shake + 0.035);
  }
}

function findSection(t) {
  const ss = CHART.sections;
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
  holdNote[lane] = null;
  if (audio.time < n.endTime - 0.12) dropHold(n);
  else completeHold(n);
}

// ---------------------------------------------------------------- note render
const SPEED = 8.4;

function updateNotes(t) {
  for (const n of noteObjects) {
    if (n.state === 'pending') {
      const y = (n.data.t - t) * SPEED;
      const x = scene.laneX(n.lane);
      const z = scene.laneZ(n.lane) + 0.24;
      n.group.position.set(x, y, z);
      n.group.visible = y < 14.5 && y > -1.3;
      if (n.body) {
        const len = n.data.dur * SPEED;
        n.body.visible = n.group.visible;
        n.tail.visible = n.group.visible;
        n.body.scale.set(0.52, len, 1);
        n.body.position.y = len / 2;
        n.tail.position.y = len;
      }
      if (t > n.data.t + HIT_WINDOW) missNote(n);
    } else if (n.state === 'holding') {
      if (!held[n.lane]) { dropHold(n); continue; }
      if (t >= n.endTime - 0.02) {
        completeHold(n);
        continue;
      }
      const remain = Math.max(0, (n.endTime - t) * SPEED);
      n.group.visible = true;
      n.group.position.set(scene.laneX(n.lane), 0.02, scene.laneZ(n.lane) + 0.24);
      n.head.visible = false;
      if (n.body) {
        n.body.visible = remain > 0.03;
        n.body.scale.set(0.52, remain, 1);
        n.body.position.y = remain / 2;
        n.tail.visible = remain > 0.4;
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
  dom.start.classList.remove('show');
  dom.result.classList.remove('show');
  dom.pause.classList.remove('show');
  dom.hud.classList.remove('hidden');
  dom.hud.setAttribute('aria-hidden', 'false');
  document.body.classList.add('playing');
  resetGame();
  gameState = 'starting';
  try {
    await audio.start(0);
    gameState = 'playing';
    toast('LISTEN // 4 LANES', 1500);
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
  gameState = 'menu';
  audio.stop();
  audio.resume();
  dom.pause.classList.remove('show');
  dom.result.classList.remove('show');
  dom.hud.classList.add('hidden');
  dom.hud.setAttribute('aria-hidden', 'true');
  dom.start.classList.add('show');
  document.body.classList.remove('playing');
  scene.setSection(CHART.sections[0]);
  for (const n of noteObjects) n.group.visible = false;
  held.fill(false);
  holdNote.fill(null);
  for (const p of dom.pads) p.classList.remove('pressed', 'active', 'sleep');
  document.documentElement.style.setProperty('--cyan', '#5ee7ff');
  document.documentElement.style.setProperty('--magenta', '#ff5fd2');
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
  let rank = 'D';
  if (acc >= 99.5) rank = 'S+';
  else if (acc >= 98) rank = 'S';
  else if (acc >= 93) rank = 'A';
  else if (acc >= 86) rank = 'B';
  else if (acc >= 76) rank = 'C';
  if (acc < 50) rank = 'F';
  if (stats.judged === 0) rank = 'F';

  const full = stats.miss === 0 && stats.bad === 0 && stats.judged > 0;
  dom.rank.textContent = rank;
  dom.finalScore.textContent = String(stats.score).padStart(7, '0');
  dom.finalAcc.textContent = acc.toFixed(2) + '%';
  dom.cPerfect.textContent = stats.perfect;
  dom.cGreat.textContent = stats.great;
  dom.cGood.textContent = stats.good;
  dom.cBad.textContent = stats.bad;
  dom.cMiss.textContent = stats.miss;
  dom.fMaxCombo.textContent = stats.maxCombo;
  dom.fcBadge.classList.toggle('on', full);
  dom.resultTag.textContent = full ? 'FULL COMBO // FIELD MASTERED'
    : acc < 50 ? 'SIGNAL LOST // TRY AGAIN'
    : 'CLEARED // SIGNAL COMPLETE';
  dom.result.classList.add('show');
}

function retryGame() {
  dom.result.classList.remove('show');
  startGame();
}

function alignPads() {
  const xs = scene.laneScreenXs();
  for (let i = 0; i < 8; i++) {
    const left = i > 0 ? xs[i] - xs[i - 1] : xs[1] - xs[0];
    const right = i < 7 ? xs[i + 1] - xs[i] : xs[7] - xs[6];
    const gap = Math.min(left, right);
    const w = Math.max(34, Math.min(96, gap * 0.9));
    const p = dom.pads[i];
    p.style.left = xs[i].toFixed(1) + 'px';
    p.style.width = w.toFixed(1) + 'px';
  }
}

function refreshSection(t) {
  const found = findSection(t);
  if (found.index !== sectionIndex || currentSection === null) {
    sectionIndex = found.index;
    updateSection(found.sec);
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
    try { pad.setPointerCapture(e.pointerId); } catch { /* noop */ }
    if (held[lane]) return;
    held[lane] = true;
    pad.classList.add('pressed');
    pressLane(lane);
  };
  const up = (e) => {
    e.preventDefault();
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

dom.startBtn.addEventListener('click', () => {
  if (gameState === 'boot' || gameState === 'menu') startGame();
});
dom.pauseBtn.addEventListener('click', pauseGame);
$('resumeBtn').addEventListener('click', resumeGame);
$('restartBtn').addEventListener('click', () => { dom.pause.classList.remove('show'); startGame(); });
$('quitBtn').addEventListener('click', quitToMenu);
$('retryBtn').addEventListener('click', retryGame);
$('menuBtn').addEventListener('click', quitToMenu);

document.addEventListener('visibilitychange', () => {
  if (document.hidden && gameState === 'playing') pauseGame();
});

// ---------------------------------------------------------------- boot/load
async function loadAudio() {
  dom.startLabel.textContent = 'DECODING AUDIO';
  try {
    await audio.load('./audio/cryout.mp3', (p) => {
      dom.loadFill.style.width = Math.round(p * 100) + '%';
      if (p > 0.2) dom.startLabel.textContent = 'DECODING AUDIO';
    });
    dom.loadFill.style.width = '100%';
    dom.startLabel.textContent = 'START SESSION';
    dom.startBtn.disabled = false;
    dom.startLanes.textContent = '4 → 8';
    gameState = 'menu';
  } catch (err) {
    console.error(err);
    dom.startLabel.textContent = 'AUDIO UNAVAILABLE';
    toast('COULD NOT LOAD AUDIO', 4000);
    gameState = 'menu';
  }
}

buildNotes();
resetGame();
gameState = 'boot';
loadAudio();

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
    updateNotes(t);
    updateHUD(t);
    scene.animate(dt, t, true);
    alignPads();
    if (t >= END_TIME) finishGame();
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
  audio, stats, scene, chart: CHART, pressLane, releaseLane,
  get notes() { return noteObjects; },
  get state() { return gameState; },
};

requestAnimationFrame(frame);
