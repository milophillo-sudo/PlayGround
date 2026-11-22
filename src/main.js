import { TRACKS, DEFAULT_TRACK_ID, TRACK_BY_ID, CHAOS_CHARTS } from './tracks.js';
import { PARTNERS, MISSING, BAND, getPartner, applyPartnerCss } from './partners.js';
import { createScene } from './scene.js';
import { AudioEngine } from './audio.js';

// ---------------------------------------------------------------- constants
const KEYMAP = {
  KeyA: 0, KeyS: 1, KeyD: 2, KeyF: 3, KeyJ: 4, KeyK: 5, KeyL: 6, Semicolon: 7,
  Numpad1: 0, Numpad2: 1, Numpad3: 2, Numpad4: 3, Numpad5: 4, Numpad6: 5, Numpad7: 6, Numpad8: 7,
};
const ACTIVE = { 1: [3], 2: [2, 4], 4: [2, 3, 4, 5], 6: [1, 2, 3, 4, 5, 6], 8: [0, 1, 2, 3, 4, 5, 6, 7] };
const HIT_WINDOW = 0.185;
const EARLY_WINDOW = 0.16;
const WIN = { perfect: 0.045, great: 0.09, good: 0.135, bad: 0.185 };
const SCORE = { perfect: 3000, great: 2000, good: 1000, bad: 300 };
const WEIGHT = { perfect: 1, great: 0.85, good: 0.55, bad: 0.25, miss: 0 };
const BEST_KEY = 'cryout-best-v2';
const LEGACY_BEST_KEY = 'cryout-best-v1';
const LANE_LEAD = 2.05; // notes become tappable before their section starts
const COMBO_CAP = 512; // enough samples to keep the whole trace for both tracks

// ---------------------------------------------------------------- dom
const $ = (id) => document.getElementById(id);
const dom = {
  canvas: $('scene'), hud: $('hud'), pads: [...document.querySelectorAll('.pad')],
  centerPad: $('centerPad'),
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
  bestLine: $('bestLine'), hudTrack: $('hudTrack'), hudBpm: $('hudBpm'), clearCount: $('clearCount'),
  resultTrack: $('resultTrack'), resultDiff: $('resultDiff'), resultBpm: $('resultBpm'),
  footTrack: $('footTrack'), footLanes: $('footLanes'),
  barPerfect: $('barPerfect'), barGreat: $('barGreat'), barGood: $('barGood'),
  barBad: $('barBad'), barMiss: $('barMiss'), peakCombo: $('peakCombo'),
  comboLine: $('comboLine'), comboFill: $('comboFill'), accRing: $('accRing'),
  scoreDelta: $('scoreDelta'), resultLoading: $('resultLoading'), loadTrack: $('loadTrack'),
  loadProgress: $('loadProgress'), loadPct: $('loadPct'), loadRank: $('loadRank'),
  flash: $('flash'), bossGlitch: $('bossGlitch'), bossCaption: $('bossCaption'),
  bcKicker: $('bcKicker'), bcTitle: $('bcTitle'), bcSub: $('bcSub'),
  guilt: $('guiltHud'), guiltFill: $('guiltFill'), guiltPct: $('guiltPct'),
  guiltCopy: $('guiltCopy'), heartbeat: $('heartbeat'),
  intentText: $('intentGlitchText'), intentTextSub: $('intentGlitchSub'),
  yellow: $('yellowVignette'), rainbow: $('rainbowWash'), whiteout: $('whiteout'),
  syncEl: document.querySelector('.sync'),
  partnerButtons: [...document.querySelectorAll('.partner-chip')],
  partnerStory: $('partnerStory'), partnerName: $('partnerName'), partnerRole: $('partnerRole'),
  partnerQuote: $('partnerQuote'), partnerPortrait: $('partnerPortrait'),
  partnerFile: $('partnerFile'), partnerAcc: $('partnerAccessories'),
  storyBtn: $('storyBtn'), storyScreen: $('storyScreen'), storyClose: $('storyClose'),
  storyCards: $('storyCards'), storyLore: $('storyLore'),
  modeRow: $('modeRow'), modeNormal: $('modeNormal'), modeChaos: $('modeChaos'),
  storyCard: $('storyCard'), scChapter: $('scChapter'), scTitle: $('scTitle'),
  scSub: $('scSub'), scName: $('scName'), scPortrait: $('scPortrait'),
  modBtn: $('modBtn'), modScreen: $('modScreen'), modClose: $('modClose'),
  modCount: $('modCount'), modItems: [...document.querySelectorAll('.mod-item')],
};

// ---------------------------------------------------------------- state
const scene = createScene(dom.canvas);
const audio = new AudioEngine();
const PARTNER_KEY = 'cryout-partner-v1';
let partner = getPartner((() => {
  try { return localStorage.getItem(PARTNER_KEY) || 'kai'; } catch { return 'kai'; }
})());
let chaosMode = false;
let selectedTrack = TRACK_BY_ID[DEFAULT_TRACK_ID] || TRACKS[0];
let chart = selectedTrack.chart;
let storyTimer = 0;
let storyGlideTimer = 0;
let noteObjects = [];
let swingNotes = [];
let swingMode = false;
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
let bossIntro = false;
let captionTimer = 0;
let glitchTimer = 0;
let intentTextTimer = 0;
let intentCinematic = false;

// INTENTION's HUD is event-driven: the chart raises the guilt bar, the
// heartbeat, the whiteouts and the dawn filters, and this state keeps them in
// sync with the song. The guilt meter only exists for that one track.
const intent = {
  phase: 'off',
  guiltOn: false,
  guilt: 100,
  fakeGuilt: false,
  fakeValue: 14,
  fakeBase: 14,
  fakeStart: 0,
  heartOn: false,
  heartBpm: 150,
  hbAcc: 0,
  hbBeat: -1,
  screenGlitch: false,
  glitchAcc: 0,
  forceSync: false,
  notesHidden: false,
};

// The game-over sequence slows the chart clock to a stop, drops the music's
// pitch, pulls the camera out and paints the red flatline before results.
const gameOver = {
  active: false,
  elapsed: 0,
  wallStart: 0,
  t0: 0,
  visualT: 0,
  finished: false,
};

// Menu modifiers. Persisted so a practice setup survives a reload, but never
// allowed to write personal bests.
const MODS_KEY = 'cryout-mods-v1';
const MOD_IDS = ['suddenFail', 'perfectPlay', 'noFail'];
const mods = (() => {
  const base = { suddenFail: false, perfectPlay: false, noFail: false };
  try {
    const raw = JSON.parse(localStorage.getItem(MODS_KEY) || '{}');
    for (const id of MOD_IDS) base[id] = !!raw[id];
  } catch { /* storage unavailable */ }
  if (base.suddenFail) base.noFail = false;
  return base;
})();
function modsActive() { return MOD_IDS.some((id) => mods[id]); }
function saveMods() {
  try { localStorage.setItem(MODS_KEY, JSON.stringify(mods)); } catch { /* storage unavailable */ }
}

const stats = {
  score: 0, combo: 0, maxCombo: 0, judged: 0, weight: 0,
  perfect: 0, great: 0, good: 0, bad: 0, miss: 0, dropped: 0,
  health: 100,
};
const held = new Array(8).fill(false);
const holdNote = new Array(8).fill(null);
// Taps are not tied to lanes. Every pointer or key press claims exactly one
// note: the pending note closest to the hit line. A second finger claims the
// next-closest note, which makes two-note chords a two-finger tap without ever
// letting a single tap clear a whole stack.
const touchPoints = new Set();
const keysHeld = new Set();
const padFlashTimers = new Array(8).fill(0);
function inputHeld() { return touchPoints.size > 0 || keysHeld.size > 0; }
function touching() { return inputHeld(); }
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
  // A run that never scored is not a personal best. Older builds could store
  // one from a seek/skip, so prune those entries when loading.
  for (const [id, best] of Object.entries(map)) {
    if (!best || typeof best !== 'object' || !(Number(best.score) > 0)) {
      delete map[id];
      continue;
    }
    best.score = Math.round(Number(best.score));
    best.acc = Number.isFinite(best.acc) ? best.acc : 0;
    best.maxCombo = Number.isFinite(best.maxCombo) ? best.maxCombo : 0;
  }
  return map;
}

let bestMap = readBestMap();
let personalBest = bestMap[selectedTrack.id] || null;

function bestIdFor() {
  return chaosMode && selectedTrack.id === 'intention' ? 'intention-chaos' : selectedTrack.id;
}
function isChaos() {
  return !!chaosMode && selectedTrack.id === 'intention';
}
function chartFor(track, chaos = false) {
  if (chaos && track.id === 'intention' && CHAOS_CHARTS.intention) return CHAOS_CHARTS.intention;
  return track.chart;
}

function parsePortrait(path) {
  return path || './art/kai.svg';
}

function renderPartner() {
  applyPartnerCss(partner);
  document.body.classList.toggle('partner-kai', partner.id === 'kai');
  document.body.classList.toggle('partner-rei', partner.id === 'rei');
  document.body.dataset.partner = partner.id;
  for (const btn of dom.partnerButtons) {
    const on = btn.dataset.partner === partner.id;
    btn.classList.toggle('active', on);
    btn.setAttribute('aria-pressed', String(on));
  }
  if (dom.partnerName) dom.partnerName.textContent = partner.name;
  if (dom.partnerRole) dom.partnerRole.textContent = partner.role;
  if (dom.partnerQuote) dom.partnerQuote.textContent = partner.quote;
  if (dom.partnerFile) dom.partnerFile.textContent = partner.file;
  if (dom.partnerAcc) dom.partnerAcc.textContent = partner.accessories;
  if (dom.partnerStory) {
    dom.partnerStory.innerHTML = partner.story.map((line) => `<p>${line}</p>`).join('');
  }
  if (dom.partnerPortrait) {
    dom.partnerPortrait.src = parsePortrait(partner.portrait);
    dom.partnerPortrait.alt = `${partner.name} — ${partner.role}`;
  }
  if (dom.startBtn && audio.loaded) {
    dom.startLabel.textContent = isChaos() ? 'ENTER CHAOS' : 'START SESSION';
  }
  scene.setPartner?.(partner.id);
}

function selectPartner(id) {
  const next = PARTNERS.find((p) => p.id === id);
  if (!next || next.id === partner.id) return;
  partner = next;
  try { localStorage.setItem(PARTNER_KEY, next.id); } catch { /* storage unavailable */ }
  renderPartner();
  toast(`${next.name} // ${next.role}`, 1200);
}

// ---------------------------------------------------------------- modifiers
function applyModsUI() {
  const count = MOD_IDS.filter((id) => mods[id]).length;
  for (const item of dom.modItems) {
    const on = !!mods[item.dataset.mod];
    item.classList.toggle('active', on);
    item.setAttribute('aria-checked', String(on));
  }
  document.body.classList.toggle('mods-active', count > 0);
  dom.modBtn?.classList.toggle('has-mods', count > 0);
  if (dom.modCount) {
    dom.modCount.textContent = String(count);
    dom.modCount.hidden = count === 0;
  }
}

function setMod(id, on) {
  if (!MOD_IDS.includes(id)) return;
  mods[id] = !!on;
  // SUDDEN FAIL and NO FAIL are contradictory, so choosing one clears the
  // other instead of leaving a run in an ambiguous state.
  if (mods[id] && id === 'suddenFail') mods.noFail = false;
  if (mods[id] && id === 'noFail') mods.suddenFail = false;
  saveMods();
  applyModsUI();
}

function openMods() {
  if (gameState !== 'menu' && gameState !== 'boot') return;
  dom.modScreen?.classList.add('show');
  dom.modScreen?.setAttribute('aria-hidden', 'false');
  dom.modBtn?.setAttribute('aria-expanded', 'true');
  setTimeout(() => {
    if (dom.modScreen?.classList.contains('show')) dom.modItems[0]?.focus({ preventScroll: true });
  }, 40);
}

function closeMods() {
  dom.modScreen?.classList.remove('show');
  dom.modScreen?.setAttribute('aria-hidden', 'true');
  dom.modBtn?.setAttribute('aria-expanded', 'false');
  dom.modBtn?.focus({ preventScroll: true });
}

function renderStoryScreen() {
  if (!dom.storyCards) return;
  const cards = PARTNERS.map((p) => `
    <article class="story-char" style="--char:${p.accent};--char2:${p.accent2}">
      <div class="story-char-art"><img src="${parsePortrait(p.portrait)}" alt="${p.name}"/></div>
      <div class="story-char-copy">
        <span>${p.num} / ${p.role}</span>
        <b>${p.name}</b>
        <em>${p.tagline}</em>
        <p>${p.story[0]}</p>
        <q>${p.quote}</q>
      </div>
    </article>`).join('');
  const missing = `
    <article class="story-char missing" style="--char:${MISSING.accent};--char2:#65e5ff">
      <div class="story-char-art glitch"><img src="${parsePortrait(MISSING.portrait)}" alt="Unknown missing member"/></div>
      <div class="story-char-copy">
        <span>${MISSING.num} / ${MISSING.role}</span>
        <b>${MISSING.name}</b>
        <em>SIGNAL NOT FOUND</em>
        <p>The third chair is still set. The jacket still smells like rain. REI will not move it, and KAI will not ask why.</p>
        <q>${MISSING.quote}</q>
      </div>
    </article>`;
  dom.storyCards.innerHTML = cards + missing;
  if (dom.storyLore) dom.storyLore.textContent = BAND.lore;
}

function openStory() {
  renderStoryScreen();
  dom.storyScreen?.classList.add('show');
  dom.storyScreen?.setAttribute('aria-hidden', 'false');
}
function closeStory() {
  dom.storyScreen?.classList.remove('show');
  dom.storyScreen?.setAttribute('aria-hidden', 'true');
}

function hideStoryCard() {
  clearTimeout(storyTimer);
  clearTimeout(storyGlideTimer);
  dom.storyCard?.classList.remove('on', 'nova', 'glide-left', 'glide-right', 'glide-up');
  dom.storyCard?.setAttribute('aria-hidden', 'true');
  scene.intentionCutscene?.(false);
}

function showStoryCard(ev) {
  if (!dom.storyCard) return;
  const char = ev.partner === 'nova' ? MISSING : getPartner(ev.partner || partner.id);
  clearTimeout(storyTimer);
  clearTimeout(storyGlideTimer);
  dom.scChapter.textContent = ev.chapter || char.file;
  dom.scTitle.textContent = ev.title || char.name;
  dom.scSub.textContent = ev.sub || char.quote;
  dom.scName.textContent = char.name;
  dom.scPortrait.src = parsePortrait(char.portrait);
  dom.scPortrait.alt = `${char.name} memory frame`;
  dom.storyCard.classList.toggle('nova', char.id === 'nova');
  dom.storyCard.classList.remove('glide-left', 'glide-right', 'glide-up');
  if (ev.glide === 'left') dom.storyCard.classList.add('glide-left');
  else if (ev.glide === 'right') dom.storyCard.classList.add('glide-right');
  else if (ev.glide === 'up') dom.storyCard.classList.add('glide-up');
  dom.storyCard.setAttribute('aria-hidden', 'false');
  void dom.storyCard.offsetWidth;
  dom.storyCard.classList.add('on');
  if (ev.glide) {
    scene.intentionCutscene?.(true, ev.glide, ev.glideDur || 2.2);
    storyGlideTimer = setTimeout(() => scene.intentionCutscene?.(false), (ev.glideDur || 2.2) * 1000);
  }
  storyTimer = setTimeout(() => {
    dom.storyCard.classList.remove('on');
    dom.storyCard.setAttribute('aria-hidden', 'true');
    scene.intentionCutscene?.(false);
  }, Math.max(1.2, ev.hold ?? 3) * 1000);
}

function applyChartSelection() {
  chart = chartFor(selectedTrack, chaosMode);
  chartEnd = chart.song.chartEnd;
  trackDuration = chart.song.duration || selectedTrack.duration;
  document.body.classList.toggle('chaos-mode', isChaos());
  scene.setBoss(selectedTrack.boss ? 'preview' : 'off', selectedTrack.theme || 'untouchable');
  scene.setTheme?.(selectedTrack.theme || 'untouchable');
  scene.setChaos?.(isChaos());
  if (isChaos()) scene.setIntentionPhase?.('chaos');
  scene.setSection(chart.sections[0]);
  scene.setTempo(chart.song.bpm, chart.song.beatOffset);
  scene.setCity(chart.sections[0].city || 0);
  scene.setPreviewLanes(new Set());
  buildNotes();
  resetGame();
  if (selectedTrack.id === 'chronostasis' && !chaosMode) scene.setClock('run', 0.4);
}

function setChaosMode(on) {
  if (gameState !== 'menu' && gameState !== 'boot') return;
  const next = !!on && selectedTrack.id === 'intention';
  if (next === chaosMode) return;
  chaosMode = next;
  applyChartSelection();
  applyTrackUI();
  renderBest();
  toast(chaosMode
    ? 'CHAOS // 1200 NOTES · 150 HOLDS · NO OVERTURE'
    : 'INTENTION // STANDARD FIELD', 2200);
}

function isCleared(best) {
  return !!best && (best.acc || 0) >= 50;
}

function renderBest() {
  personalBest = bestMap[bestIdFor()] || null;
  const text = personalBest
    ? `${String(personalBest.score).padStart(7, '0')} · ${personalBest.rank || '—'}`
    : '—';
  if (dom.bestScoreLabel) dom.bestScoreLabel.textContent = text;
  if (dom.bestLine) dom.bestLine.innerHTML = `PERSONAL BEST <b>${text}</b>`;
  for (const card of dom.trackCards) {
    const id = card.dataset.track;
    const best = bestMap[id]
      || (id === 'intention' && chaosMode ? bestMap['intention-chaos'] : null);
    const tag = card.querySelector('.tc-best');
    if (tag) {
      tag.textContent = best ? `PB ${best.rank || '—'}` : '';
      tag.title = best ? `Personal best ${best.score} · ${(best.acc || 0).toFixed(2)}%` : '';
    }
    card.classList.toggle('cleared', isCleared(best));
  }
  if (dom.clearCount) {
    const cleared = TRACKS.filter((t) => isCleared(bestMap[t.id])
      || (t.id === 'intention' && isCleared(bestMap['intention-chaos']))).length;
    dom.clearCount.textContent = `${cleared} / ${TRACKS.length} CLEARED`;
    dom.clearCount.classList.toggle('all', cleared === TRACKS.length);
  }
}

// ---------------------------------------------------------------- build
scene.setSection(chart.sections[0]);
scene.setTempo(chart.song.bpm, chart.song.beatOffset);
scene.setCity(chart.sections[0].city || 0);
scene.setBoss(selectedTrack.boss ? 'preview' : 'off', selectedTrack.theme || 'untouchable');
scene.setTheme?.(selectedTrack.theme || 'untouchable');

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
  swingNotes = (chart.swings || []).map((data, index) => ({
    t: data.t, index, state: 'pending',
  }));
  const freeNotes = !!chart.song.freeNotes;
  noteObjects = chart.notes.map((data, index) => {
    const created = scene.makeNote(data.lane, data.type, freeNotes);
    created.group.visible = false;
    return {
      data, index, lane: data.lane, type: data.type, free: freeNotes,
      state: 'pending', endTime: data.t + (data.dur || 0),
      group: created.group, head: created.head, body: created.body, tail: created.tail,
      color: created.color, tickAt: data.t,
    };
  });
}

function resetGame() {
  gameOver.active = false;
  gameOver.finished = false;
  gameOver.elapsed = 0;
  gameOver.visualT = 0;
  document.body.classList.remove('game-over');
  scene.resetGameOver();
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
  keysHeld.clear();
  ghostCursor = 0;
  eventCursor = 0;
  comboHistory = [];
  comboClock = 0;
  vibeTimer = 0;
  hideStoryCard();
  scene.clearGhosts();
  scene.clockReset();
  endPendulum();
  scene.pendulumReset();
  resetIntentHud();
  for (const n of swingNotes) n.state = 'pending';
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
    if (comboHistory.length > COMBO_CAP) comboHistory.shift();
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
  dom.energy.style.height = (intent.forceSync ? 100 : Math.max(0, Math.min(100, stats.health))).toFixed(1) + '%';
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

function setBossIntro(on) {
  bossIntro = on;
  document.body.classList.toggle('boss-intro', on);
  if (!on) hideCaption();
}

// INTENTION is played without HUD copy. Only the overture and dawn are
// cinematics, so only those may keep their title cards; every gameplay caption,
// score readout, judgement word and lane label stays out of the frame.
function setIntentPresentation(on, cinematic = false) {
  const active = on && selectedTrack.theme === 'intention';
  document.body.classList.toggle('intent-clean', active);
  setIntentCinematic(active && cinematic);
}

function setIntentCinematic(on) {
  intentCinematic = !!on && selectedTrack.theme === 'intention';
  document.body.classList.toggle('intent-cutscene', intentCinematic);
  if (!intentCinematic) hideCaption();
}

function hideCaption() {
  clearTimeout(captionTimer);
  if (!dom.bossCaption) return;
  dom.bossCaption.classList.remove('on');
  dom.bossCaption.setAttribute('aria-hidden', 'true');
}

function showCaption(ev) {
  if (!dom.bossCaption) return;
  // INTENTION keeps its title cards only inside the overture and dawn
  // cinematics. Every other big mid-song phrase (THE OCEAN REMEMBERS, READY,
  // STATIC...) would cover the field the player is reading, so it stays in the
  // timeline but is never painted.
  if (selectedTrack.theme === 'intention' && !intentCinematic) return;
  clearTimeout(captionTimer);
  dom.bcKicker.textContent = ev.kicker || '';
  dom.bcTitle.textContent = ev.title || '';
  dom.bcSub.textContent = ev.sub || '';
  dom.bossCaption.setAttribute('aria-hidden', 'false');
  dom.bossCaption.classList.remove('on');
  void dom.bossCaption.offsetWidth;
  dom.bossCaption.classList.add('on');
  const hold = ev.hold ?? 3.4;
  if (hold > 0) {
    captionTimer = setTimeout(() => {
      dom.bossCaption.classList.remove('on');
      dom.bossCaption.setAttribute('aria-hidden', 'true');
    }, hold * 1000);
  }
}

function glitchScreen(power = 1) {
  if (!dom.bossGlitch) return;
  dom.bossGlitch.classList.remove('on');
  void dom.bossGlitch.offsetWidth;
  dom.bossGlitch.classList.add('on');
  clearTimeout(glitchTimer);
  glitchTimer = setTimeout(() => dom.bossGlitch.classList.remove('on'), 340);
}

// ---------------------------------------------------------------- intention HUD
const HEARTBEAT_Y = ['70%', '50%', '30%'];
const HEARTBEAT_POS = ['bottom', 'middle', 'top'];
function setHeartbeatPosition(index) {
  if (!dom.heartbeat) return;
  const i = ((index % 3) + 3) % 3;
  dom.heartbeat.style.setProperty('--hb-y', HEARTBEAT_Y[i]);
  dom.heartbeat.dataset.beat = String(i);
  dom.heartbeat.dataset.position = HEARTBEAT_POS[i];
}

function paintGuilt() {
  const value = Math.max(0, Math.min(100, intent.fakeGuilt ? intent.fakeValue : intent.guilt));
  if (dom.guiltFill) dom.guiltFill.style.width = value.toFixed(1) + '%';
  if (dom.guiltPct) dom.guiltPct.textContent = String(Math.round(value));
}

function setIntentNotesHidden(on) {
  if (intent.notesHidden === on) return;
  intent.notesHidden = on;
  scene.setIntentNoteLayerHidden(on);
}

function showIntentText(text, sub = '', hold = 3.2) {
  if (!dom.intentText) return;
  clearTimeout(intentTextTimer);
  const span = dom.intentText.querySelector('span');
  if (span) {
    span.textContent = text || 'INTENTIONS';
    span.setAttribute('data-text', text || 'INTENTIONS');
  }
  if (dom.intentTextSub) dom.intentTextSub.textContent = sub || '';
  dom.intentText.classList.remove('on');
  void dom.intentText.offsetWidth;
  dom.intentText.classList.add('on');
  if (hold > 0) {
    intentTextTimer = setTimeout(() => dom.intentText.classList.remove('on'), hold * 1000);
  }
}

function clearIntentClasses() {
  for (const cls of ['guilt-on', 'guilt-fake', 'heartbeat-on', 'static-on', 'static-heavy',
    'distort-on', 'bright-on', 'intent-whiteout', 'intent-black', 'intent-yellow', 'intent-glitch']) {
    document.body.classList.remove(cls);
  }
  dom.heartbeat?.classList.remove('on', 'beat');
  dom.intentText?.classList.remove('on');
  dom.whiteout?.classList.remove('on');
  dom.yellow?.classList.remove('on');
  dom.rainbow?.classList.remove('on');
  dom.syncEl?.classList.remove('rainbow');
}

function resetIntentHud() {
  clearTimeout(intentTextTimer);
  clearIntentClasses();
  hideStoryCard();
  intent.phase = 'off';
  intent.guiltOn = false;
  intent.guilt = 100;
  intent.fakeGuilt = false;
  intent.fakeValue = 14;
  intent.fakeBase = 14;
  intent.fakeStart = 0;
  intent.heartOn = false;
  intent.heartBpm = 150;
  intent.hbAcc = 0;
  intent.hbBeat = -1;
  intent.screenGlitch = false;
  intent.glitchAcc = 0;
  intent.forceSync = false;
  if (dom.heartbeat) {
    dom.heartbeat.classList.remove('on', 'beat');
    dom.heartbeat.style.setProperty('--hb-y', '70%');
    dom.heartbeat.dataset.beat = '0';
    dom.heartbeat.dataset.position = 'bottom';
  }
  if (intent.notesHidden) {
    intent.notesHidden = false;
    document.body.classList.remove('intent-field-hidden');
    scene.setIntentNoteLayerHidden(false);
  }
  if (dom.guiltCopy) dom.guiltCopy.textContent = 'CONSISTENT PERFECTS KEEP IT FULL';
  paintGuilt();
}

function applyIntentHud(ev) {
  const on = ev.on !== false;
  switch (ev.hud) {
    case 'clear':
      clearIntentClasses();
      intent.guiltOn = false;
      intent.fakeGuilt = false;
      intent.heartOn = false;
      intent.screenGlitch = false;
      intent.forceSync = false;
      if (intent.notesHidden) setIntentNotesHidden(false);
      break;
    case 'black':
      // The 3D stage itself goes to black for the guilt sections; the class
      // only tints the HUD so the lanes stay readable on the pure void.
      document.body.classList.toggle('intent-black', on);
      break;
    case 'guilt':
      intent.guiltOn = on;
      intent.fakeGuilt = false;
      if (on) intent.guilt = ev.value ?? 100;
      document.body.classList.toggle('guilt-on', on);
      document.body.classList.remove('guilt-fake');
      if (dom.guiltCopy) dom.guiltCopy.textContent = 'CONSISTENT PERFECTS KEEP IT FULL';
      paintGuilt();
      break;
    case 'fakeGuilt':
      intent.fakeGuilt = on;
      intent.guiltOn = on;
      if (on) {
        intent.fakeBase = ev.value ?? 14;
        intent.fakeValue = intent.fakeBase;
        intent.fakeStart = audio.time;
      }
      document.body.classList.toggle('guilt-fake', on);
      document.body.classList.toggle('guilt-on', on);
      if (dom.guiltCopy) dom.guiltCopy.textContent = 'IT WILL NOT REFILL';
      paintGuilt();
      break;
    case 'heartbeat':
      intent.heartOn = on;
      if (ev.bpm) intent.heartBpm = ev.bpm;
      intent.hbAcc = 0;
      if (on) {
        intent.hbBeat = -1;
        setHeartbeatPosition(0);
      } else {
        intent.hbBeat = -1;
      }
      dom.heartbeat?.classList.toggle('on', on);
      document.body.classList.toggle('heartbeat-on', on);
      break;
    case 'glitch':
      intent.screenGlitch = on;
      document.body.classList.toggle('intent-glitch', on);
      break;
    case 'text':
      if (selectedTrack.theme === 'intention'
        && String(ev.text || '').trim().toUpperCase() !== 'INTENTION') break;
      if (on) showIntentText(ev.text, ev.sub, ev.hold ?? 3.2);
      else dom.intentText?.classList.remove('on');
      break;
    case 'static':
      document.body.classList.toggle('static-on', on);
      document.body.classList.toggle('static-heavy', on && (ev.power ?? 0) >= 0.9);
      // The memory movement keeps a thin, transparent veil; the later STATIC
      // section is the one that thickens into real interference.
      document.body.classList.toggle('static-soft', on && (ev.power ?? 0) < 0.9);
      break;
    case 'distort':
      document.body.classList.toggle('distort-on', on);
      break;
    case 'bright':
      document.body.classList.toggle('bright-on', on);
      break;
    case 'white':
      dom.whiteout?.classList.toggle('on', on);
      document.body.classList.toggle('intent-whiteout', on);
      break;
    case 'yellow':
      document.body.classList.toggle('intent-yellow', on);
      dom.yellow?.classList.toggle('on', on);
      break;
    case 'rainbow':
      intent.forceSync = on;
      dom.syncEl?.classList.toggle('rainbow', on);
      dom.rainbow?.classList.toggle('on', on);
      if (on) dom.energy.style.height = '100%';
      break;
    default:
      break;
  }
}

function applyIntentEvent(ev) {
  if (ev.mode === 'phase') {
    intent.phase = ev.phase;
    scene.setIntentionPhase(ev.phase);
    // The dawn is note-less; the lane field stays on so the ocean can breathe.
    setIntentNotesHidden(ev.phase === 'dawn');
    return;
  }
  if (ev.mode === 'hud') applyIntentHud(ev);
}

function intentJudged(kind) {
  if (!intent.guiltOn || intent.fakeGuilt) return;
  const gain = kind === 'perfect' ? 1.35
    : kind === 'great' ? 0.95
    : kind === 'good' ? 0.5
    : kind === 'bad' ? -2.2
    : -6;
  intent.guilt = Math.max(mods.noFail ? 1 : 0, Math.min(100, intent.guilt + gain));
  paintGuilt();
}

function updateIntent(dt, t) {
  if (intent.guiltOn && !intent.fakeGuilt) {
    // The bar drains faster while a stream is coming and slows down when the
    // chart thins out, so sparse phrases never punish the player for waiting.
    let ahead = 0;
    for (const n of noteObjects) {
      if (n.state === 'pending' && n.data.t >= t && n.data.t < t + 2.4) ahead++;
    }
    const density = ahead / 2.4;
    const drain = 0.5 + Math.min(1.5, density * 0.55);
    intent.guilt = Math.max(mods.noFail ? 1 : 0, Math.min(100, intent.guilt - drain * dt));
    paintGuilt();
  }
  if (intent.fakeGuilt) {
    // Tie the decorative drain to the song clock, not frame time, so it still
    // reaches the shatter point on slow devices.
    const age = Math.max(0, audio.time - intent.fakeStart);
    intent.fakeValue = Math.max(2.6, intent.fakeBase - age * 0.5);
    paintGuilt();
  }
  if (intent.heartOn) {
    intent.hbAcc += dt;
    const interval = 60 / Math.max(40, intent.heartBpm);
    if (intent.hbAcc >= interval) {
      intent.hbAcc %= interval;
      // bottom → middle → top on successive beats, then repeat. The CSS
      // transition carries the line between positions while the ripple and
      // ECG flash fire on the beat itself.
      intent.hbBeat = (intent.hbBeat + 1) % 3;
      setHeartbeatPosition(intent.hbBeat);
      const el = dom.heartbeat;
      if (el) {
        // Restart the beat animation without forcing a synchronous layout.
        // The CSS animations are transform/opacity driven; a one-frame gap is
        // enough to replay them and avoids the full-screen reflow that used to
        // hitch the game on every heartbeat.
        el.classList.remove('beat');
        setTimeout(() => { if (intent.heartOn) el.classList.add('beat'); }, 18);
      }
    }
  } else {
    intent.hbAcc = 0;
  }
  if (intent.screenGlitch) {
    intent.glitchAcc += dt;
    if (intent.glitchAcc > 0.52 + Math.random() * 0.4) {
      intent.glitchAcc = 0;
      scene.bossGlitch(0.32 + Math.random() * 0.3);
      glitchScreen(0.45);
    }
  }
}

function updateSection(sec, force = false) {
  if (!sec || (!force && sec === currentSection)) return;
  currentSection = sec;
  scene.setSection(sec);
  if (sec.bpm) scene.setTempo(sec.bpm, sec.beatOffset ?? 0);
  noteSpeed = SPEED * (sec.noteSpeed || 1);
  dom.section.textContent = sec.name;
  dom.keys.textContent = sec.keys;
  if (dom.hudBpm && sec.bpm) dom.hudBpm.textContent = `${Number(sec.bpm).toFixed(1).replace(/\.0$/, '')} BPM`;
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
    // The boss overture uses full-screen title cards instead of lane toasts.
    if (!(selectedTrack.boss && sec.intro)) toast(`${sec.name} // ${sec.keys} LANES`, 1100);
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
  if (mods.perfectPlay) kind = 'perfect';
  else if (a <= WIN.perfect) kind = 'perfect';
  else if (a <= WIN.great) kind = 'great';
  else if (a <= WIN.good) kind = 'good';
  else kind = 'bad';

  stats[kind]++;
  stats.judged++;
  stats.weight += WEIGHT[kind];
  stats.score += SCORE[kind];
  stats.health = Math.min(100, stats.health + (kind === 'perfect' ? 1.1 : kind === 'great' ? .8 : kind === 'good' ? .4 : -1.6));
  intentJudged(kind);

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
  // Full-combo means no BAD and no MISS. A BAD breaks the combo, so under
  // SUDDEN FAIL it is already game over.
  if (mods.suddenFail && kind === 'bad') startGameOver();
}

function missNote(note) {
  if (note.state !== 'pending') return;
  note.state = 'miss';
  note.group.visible = false;
  stats.miss++;
  stats.judged++;
  stats.health = Math.max(mods.noFail ? 1 : 0, stats.health - 5);
  setCombo(0, false);
  showJudge('miss', 'MISS');
  scene.missFx(note.lane);
  audio.thud();
  intentJudged('miss');
  if (mods.suddenFail) startGameOver();
}

function dropHold(note) {
  if (note.state !== 'holding') return;
  note.state = 'dropped';
  note.group.visible = false;
  holdNote[note.lane] = null;
  stats.dropped++;
  stats.miss++;
  stats.judged++;
  stats.health = Math.max(mods.noFail ? 1 : 0, stats.health - 4);
  setCombo(0, false);
  showJudge('miss', 'HOLD LOST');
  scene.missFx(note.lane);
  audio.thud();
  intentJudged('miss');
  if (mods.suddenFail) startGameOver();
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

function nearestNote(t, lane = null) {
  let best = null;
  let bestAbs = Infinity;
  for (const n of noteObjects) {
    if (n.state !== 'pending') continue;
    if (lane !== null && n.lane !== lane) continue;
    const d = t - n.data.t;
    if (d < -EARLY_WINDOW || d > HIT_WINDOW) continue;
    const a = Math.abs(d);
    // `<` (not `<=`) keeps the first note on a tied chord: the next finger
    // then claims the second one instead of stacking both on one tap.
    if (a < bestAbs - 1e-6) { bestAbs = a; best = n; }
  }
  return best;
}

function flashPad(lane) {
  const pad = dom.pads[lane];
  if (!pad) return;
  pad.classList.add('pressed');
  clearTimeout(padFlashTimers[lane]);
  padFlashTimers[lane] = setTimeout(() => pad.classList.remove('pressed'), 90);
}

function hitNote(note, t) {
  flashPad(note.lane);
  scene.pressFx(note.lane);
  judgeHit(note, t - note.data.t);
}

// Global tap: ignores the lane under the finger and always takes the single
// note closest to the timing line.
function pressGlobal() {
  if (gameState !== 'playing') return;
  const t = audio.time;
  if (t < 0) return;
  const best = nearestNote(t);
  if (!best) {
    audio.click(3, 0.07);
    return;
  }
  hitNote(best, t);
}

// Kept for automated tests and the keyboard fallback: a lane-scoped tap still
// takes only one note.
function pressLane(lane) {
  if (gameState !== 'playing') return;
  const t = audio.time;
  if (t < 0) return;
  const best = nearestNote(t, lane);
  if (!best) {
    scene.pressFx(lane);
    audio.click(lane, 0.1);
    return;
  }
  hitNote(best, t);
}

function releaseHolds() {
  if (gameState !== 'playing' || inputHeld()) return;
  const active = holdNote.filter((n) => n && n.state === 'holding');
  for (const n of active) {
    holdNote[n.lane] = null;
    if (audio.time < n.endTime - 0.12) dropHold(n);
    else completeHold(n);
  }
}

function releaseLane(lane) {
  if (gameState !== 'playing') return;
  const n = holdNote[lane];
  if (!n) return;
  // Another finger or key still held keeps every active hold alive.
  if (touching()) return;
  holdNote[lane] = null;
  if (audio.time < n.endTime - 0.12) dropHold(n);
  else completeHold(n);
}

// ---------------------------------------------------------------- pendulum
// The STASIS gimmick is judged separately from the lane notes: the bob crosses
// the centre on a fixed swing grid, and the player taps the centre target.
function startPendulum(ev) {
  if (!swingNotes.length) return;
  swingMode = true;
  scene.startPendulum({
    start: ev.t,
    period: ev.period ?? 2.4146,
    amplitude: ev.amplitude ?? 0.42,
    times: swingNotes.map((n) => n.t),
  });
  document.body.classList.add('pendulum');
  dom.centerPad.classList.add('show');
  dom.centerPad.setAttribute('aria-hidden', 'false');
  alignCenterPad();
  toast('STASIS // TAP THE CENTRE', 1800);
}

function endPendulum() {
  swingMode = false;
  scene.stopPendulum();
  document.body.classList.remove('pendulum');
  if (dom.centerPad) {
    dom.centerPad.classList.remove('show', 'pressed');
    dom.centerPad.setAttribute('aria-hidden', 'true');
  }
}

function alignCenterPad() {
  if (!swingMode || !dom.centerPad) return;
  const p = scene.pendulumTargetScreen();
  const size = Math.max(140, p.radius * 2);
  dom.centerPad.style.left = p.x.toFixed(1) + 'px';
  dom.centerPad.style.top = p.y.toFixed(1) + 'px';
  dom.centerPad.style.width = size.toFixed(1) + 'px';
  dom.centerPad.style.height = size.toFixed(1) + 'px';
}

function judgeSwing(note, offset) {
  const a = Math.abs(offset);
  let kind;
  if (mods.perfectPlay) kind = 'perfect';
  else if (a <= WIN.perfect) kind = 'perfect';
  else if (a <= WIN.great) kind = 'great';
  else if (a <= WIN.good) kind = 'good';
  else kind = 'bad';

  note.state = 'done';
  stats[kind]++;
  stats.judged++;
  stats.weight += WEIGHT[kind];
  stats.score += SCORE[kind];
  stats.health = Math.min(100, stats.health + (kind === 'perfect' ? 1.2 : kind === 'great' ? .9 : kind === 'good' ? .5 : -1.4));

  if (kind === 'bad') setCombo(0, false);
  else setCombo(stats.combo + 1);

  showJudge(kind, kind === 'perfect' ? 'PERFECT' : kind === 'great' ? 'GREAT' : kind === 'good' ? 'GOOD' : 'BAD');
  scene.swingResolve(note.index, 'hit');
  audio.click(3, kind === 'perfect' ? 0.56 : 0.4);
  if (mods.suddenFail && kind === 'bad') startGameOver();
}

function missSwing(note) {
  if (note.state !== 'pending') return;
  note.state = 'miss';
  stats.miss++;
  stats.judged++;
  stats.health = Math.max(mods.noFail ? 1 : 0, stats.health - 5);
  setCombo(0, false);
  showJudge('miss', 'MISS');
  scene.swingResolve(note.index, 'miss');
  audio.thud();
  if (mods.suddenFail) startGameOver();
}

function updateSwing(t) {
  if (!swingMode) return;
  for (const n of swingNotes) {
    if (n.state === 'pending' && t > n.t + HIT_WINDOW) missSwing(n);
  }
}

function swingTap() {
  if (gameState !== 'playing' || !swingMode) return;
  const t = audio.time;
  let best = null;
  let bestAbs = Infinity;
  for (const n of swingNotes) {
    if (n.state !== 'pending') continue;
    const d = t - n.t;
    if (d < -EARLY_WINDOW || d > HIT_WINDOW) continue;
    const a = Math.abs(d);
    if (a < bestAbs) { bestAbs = a; best = n; }
  }
  if (!best) {
    scene.swingWhiff();
    audio.click(3, 0.1);
    return;
  }
  judgeSwing(best, t - best.t);
}

// ---------------------------------------------------------------- note render
const SPEED = 8.4;
let noteSpeed = SPEED;

function updateNotes(t) {
  const ns = scene.noteScale;
  for (const n of noteObjects) {
    if (n.state === 'pending') {
      const y = (n.data.t - t) * noteSpeed;
      if (n.free) {
        // Boss notes fly along a curved stage-space path and converge on the
        // lane ring exactly at the hit line.
        const pose = scene.freeNotePose(n.lane, y, n.index);
        n.group.position.set(pose.x, pose.y, pose.z);
      } else {
        // local lane space: the lane frame supplies the diagonal world position
        n.group.position.set(0, y, 0.24);
      }
      n.group.visible = y < 14.5 && y > -1.3;
      n.head.scale.set(1.04 * ns, 1.04 * ns, 1);
      if (n.body) {
        const len = n.data.dur * noteSpeed;
        n.body.visible = n.group.visible;
        n.tail.visible = n.group.visible;
        n.body.scale.set(0.52 * ns, len, 1);
        n.body.position.y = len / 2;
        n.body.material.rotation = n.free ? 0 : -scene.laneScreenAngle(n.lane);
        n.tail.scale.set(0.68 * ns, 0.68 * ns, 1);
        n.tail.position.y = len;
      }
      if (t > n.data.t + HIT_WINDOW && gameState === 'playing') missNote(n);
    } else if (n.state === 'holding') {
      if (!held[n.lane] && !touching()) { dropHold(n); continue; }
      if (t >= n.endTime - 0.02) {
        completeHold(n);
        continue;
      }
      const remain = Math.max(0, (n.endTime - t) * noteSpeed);
      n.group.visible = true;
      if (n.free) {
        const pose = scene.freeNotePose(n.lane, 0, n.index);
        n.group.position.set(pose.x, 0.02, pose.z);
      } else {
        n.group.position.set(0, 0.02, 0.24);
      }
      n.head.visible = false;
      if (n.body) {
        n.body.visible = remain > 0.03;
        n.body.scale.set(0.52 * ns, remain, 1);
        n.body.position.y = remain / 2;
        n.body.material.rotation = n.free ? 0 : -scene.laneScreenAngle(n.lane);
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
  dom.modScreen?.classList.remove('show');
  dom.modScreen?.setAttribute('aria-hidden', 'true');
  dom.modBtn?.setAttribute('aria-expanded', 'false');
  dom.start.classList.remove('show');
  dom.result.classList.remove('show');
  dom.resultLoading.classList.remove('show');
  dom.pause.classList.remove('show');
  dom.hud.classList.remove('hidden');
  dom.hud.setAttribute('aria-hidden', 'false');
  document.body.classList.add('playing');
  document.body.classList.toggle('chaos-mode', isChaos());
  hideCaption();
  hideStoryCard();
  dom.bossGlitch?.classList.remove('on');
  if (selectedTrack.boss && !isChaos()) {
    scene.setBoss('intro', selectedTrack.theme || 'untouchable');
    setBossIntro(true);
  } else if (selectedTrack.boss) {
    // CHAOS has no overture: the chart opens on the playfield with notes and
    // the flying particle layer already live.
    scene.setBoss('play', 'intention');
    setBossIntro(false);
  } else {
    scene.setBoss('off', selectedTrack.theme || 'untouchable');
    setBossIntro(false);
  }
  setIntentPresentation(selectedTrack.theme === 'intention', !isChaos());
  resetGame();
  if (isChaos()) {
    scene.setBoss('play', 'intention');
    scene.setChaos?.(true);
    // CHAOS starts inside the storm: no void/overture field hide survives a
    // retry, and the stage is already in its chaos phase on the first frame.
    scene.setIntentFieldHidden(false);
    scene.setIntentNoteLayerHidden(false);
    scene.setIntentionPhase('chaos');
  } else {
    scene.setChaos?.(false);
  }
  gameState = 'starting';
  try {
    await audio.start(0, { fadeStart: selectedTrack.fadeStart, fadeEnd: selectedTrack.fadeEnd });
    gameState = 'playing';
    if (!selectedTrack.boss) toast(`LISTEN // ${chart.sections[0].keys} LANES`, 1500);
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
  gameOver.active = false;
  gameOver.finished = false;
  gameOver.elapsed = 0;
  document.body.classList.remove('game-over');
  scene.resetGameOver();
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
  scene.setBoss(selectedTrack.boss ? 'preview' : 'off', selectedTrack.theme || 'untouchable');
  scene.setPreviewLanes(new Set());
  setBossIntro(false);
  setIntentPresentation(false);
  hideCaption();
  hideStoryCard();
  dom.bossGlitch?.classList.remove('on');
  resetIntentHud();
  scene.setChaos?.(isChaos());
  for (const n of noteObjects) n.group.visible = false;
  held.fill(false);
  holdNote.fill(null);
  touchPoints.clear();
  keysHeld.clear();
  ghostCursor = 0;
  eventCursor = 0;
  scene.clearGhosts();
  scene.clockReset();
  endPendulum();
  scene.pendulumReset();
  if (selectedTrack.id === 'chronostasis') scene.setClock('run', 0.4);
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

  dom.resultTrack.textContent = `${selectedTrack.title}${isChaos() ? ' // CHAOS' : ''}`;
  dom.resultDiff.textContent = isChaos() ? 'CHAOS' : selectedTrack.difficulty;
  dom.resultBpm.textContent = isChaos() ? (chart.song.bpmLabel || 'CHAOS') : (selectedTrack.bpmLabel || `${selectedTrack.bpm} BPM`);
  dom.footTrack.textContent = selectedTrack.shortTitle;
  dom.footLanes.textContent = isChaos() ? '8 · 6 · 4' : selectedTrack.laneLabel;
  dom.resultTag.textContent = data.failed ? 'SIGNAL LOST // GAME OVER'
    : data.assisted ? (full ? 'ASSISTED // FULL COMBO · PB NOT SAVED' : 'ASSISTED RUN // PB NOT SAVED')
    : full ? 'FULL COMBO // FIELD MASTERED'
    : !data.cleared ? 'SIGNAL LOST // TRY AGAIN'
    : isChaos() ? 'CHAOS // OCEAN BROKEN OPEN'
    : selectedTrack.boss ? (selectedTrack.clearTag || 'THE UNTOUCHABLE // FELLED')
    : 'CLEARED // SIGNAL COMPLETE';
  dom.fcBadge.classList.toggle('on', full);
  dom.bestBadge.classList.toggle('on', isBest);

  const best = bestMap[bestIdFor()] || null;
  dom.bestNote.innerHTML = best
    ? `${String(best.score).padStart(7, '0')} · ${best.rank || '—'}`
    : 'FIRST RUN';
  const gap = Math.max(0, (best?.score || 0) - data.score);
  dom.scoreDelta.textContent = data.assisted
    ? (full ? 'ASSISTED // FULL COMBO' : 'ASSISTED // NOT RECORDED')
    : isBest
    ? (prevBest ? `NEW BEST +${String(Math.max(0, data.score - prevBest.score)).padStart(5, '0')}`
      : data.cleared ? 'FIRST CLEAR' : 'FIRST SCORE')
    : !data.scored ? 'NO SCORE RECORDED'
    : gap > 0 ? `PB GAP ${String(gap).padStart(5, '0')}` : 'PB MATCHED';

  dom.result.classList.remove('show');
  void dom.result.offsetWidth;
  dom.result.classList.add('show');
  setTimeout(() => { dom.resultLoading.classList.remove('show'); }, 60);
  dom.resultLoading.setAttribute('aria-hidden', 'true');
}

function startGameOver() {
  if (gameOver.active || (gameState !== 'playing' && gameState !== 'paused')) return;
  gameOver.active = true;
  gameOver.finished = false;
  gameOver.elapsed = 0;
  gameOver.wallStart = performance.now();
  gameOver.t0 = audio.time;
  gameOver.visualT = gameOver.t0;
  gameState = 'gameover';
  audio.pitchDrop(0.5, 2.4);
  scene.startGameOver();
  document.body.classList.add('game-over');
  clearTimeout(toastTimer);
  dom.toast.classList.remove('on');
  hideCaption();
  endPendulum();
  dom.pause.classList.remove('show');
}

function updateGameOver() {
  // Wall-clock, not frame time: the sequence still lasts 3.7s on a device
  // that drops frames instead of stretching the flatline for half a minute.
  gameOver.elapsed = (performance.now() - gameOver.wallStart) / 1000;
  // The chart clock keeps moving but decelerates to a full stop. Notes that
  // were approaching the line glide in and freeze instead of snapping away.
  const p = Math.min(1, gameOver.elapsed / 2.7);
  const eased = 1 - Math.pow(1 - p, 2.3);
  gameOver.visualT = gameOver.t0 + 1.3 * eased;
  if (!gameOver.finished && gameOver.elapsed >= 3.7) {
    gameOver.finished = true;
    finishGame(true);
  }
}

function finishGame(failed = false) {
  if (gameState !== 'playing' && gameState !== 'paused' && gameState !== 'gameover') return;
  gameState = 'results';
  audio.stop();
  audio.resume();
  gameOver.active = false;
  scene.resetGameOver();
  document.body.classList.remove('game-over');
  dom.hud.classList.add('hidden');
  dom.hud.setAttribute('aria-hidden', 'true');
  dom.pause.classList.remove('show');
  document.body.classList.remove('playing');
  document.body.classList.remove('chaos-mode');
  setIntentPresentation(false);
  setBossIntro(false);

  const acc = stats.judged ? (stats.weight / stats.judged) * 100 : 100;
  const rank = rankFor(acc, stats.judged);
  comboHistory.push(stats.combo);
  if (comboHistory.length > COMBO_CAP) comboHistory.shift();
  const full = !failed && stats.miss === 0 && stats.bad === 0 && stats.judged > 0;
  const runScore = stats.score;
  const scored = runScore > 0 && !failed;
  const cleared = scored && acc >= 50;
  const assisted = modsActive();
  const bestKey = bestIdFor();
  const prevBest = bestMap[bestKey] || null;
  // Skipping to the end (or never touching a lane) must not overwrite a real
  // personal best with a zero-score run. A failed run is not a clear either,
  // and an assisted run is practice, never a record.
  const isBest = !assisted && scored && (!prevBest
    || runScore > prevBest.score
    || (runScore === prevBest.score && acc > prevBest.acc));
  if (isBest) {
    bestMap[bestKey] = { score: runScore, acc, rank, maxCombo: stats.maxCombo, full, at: Date.now() };
    try { localStorage.setItem(BEST_KEY, JSON.stringify(bestMap)); } catch { /* storage unavailable */ }
  }
  renderBest();

  const data = {
    score: runScore, acc, rank, full, isBest, prevBest, scored, cleared, failed,
    assisted, maxCombo: stats.maxCombo, counts: { ...stats }, judgeTotals: stats.judged,
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
  // Pad strips are visual affordances for the live lanes; input is global, but
  // a lane with an incoming note is still surfaced before its section starts.
  const active = new Set(currentSection ? activeLanesFor(currentSection.keys) : []);
  for (const lane of ahead) active.add(lane);
  for (let i = 0; i < 8; i++) {
    const g = scene.laneScreenGeometry(i);
    const left = i > 0 ? g.x - scene.laneScreenGeometry(i - 1).x : g.x - scene.laneScreenGeometry(1).x;
    const right = i < 7 ? scene.laneScreenGeometry(i + 1).x - g.x : g.x - scene.laneScreenGeometry(6).x;
    // Fill the whole gap between neighbouring lanes. The strip boundaries meet
    // (and slightly overlap) at the midpoint, so a thumb landing between two
    // lanes still hits one of them instead of an invisible dead zone.
    const gap = Math.max(26, (Math.abs(left) + Math.abs(right)) * 0.5);
    const width = Math.max(48, Math.min(240, gap * 1.1));
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
  alignCenterPad();
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
      case 'clock':
        scene.setClock(ev.mode, ev.power ?? 1, ev.t);
        if (ev.mode !== 'freeze') endPendulum();
        break;
      case 'clockTick': scene.clockTick(ev.hand, ev.power ?? 1); break;
      case 'pendulum':
        if (ev.mode === 'start') startPendulum(ev);
        else endPendulum();
        break;
      case 'bossCamera':
        scene.bossCameraEvent(ev.pos, ev.look, ev.fov, ev.roll, ev.dur);
        break;
      case 'bossGlitch':
        scene.bossGlitch(ev.power ?? 1);
        glitchScreen(ev.power ?? 1);
        flashScreen((ev.power ?? 1) * 0.6);
        break;
      case 'bossTick':
        scene.bossTick(ev.hand, ev.power ?? 1);
        break;
      case 'bossPhase':
        scene.setBoss(ev.mode === 'play' ? 'play' : 'outro', selectedTrack.theme);
        if (ev.mode === 'play') {
          setBossIntro(false);
          if (selectedTrack.theme === 'intention') setIntentCinematic(false);
          else toast('CLOCK STAGE // FREE FIELD', 1700);
        } else {
          if (selectedTrack.theme === 'intention') setIntentCinematic(true);
          else hideCaption();
        }
        break;
      case 'intent':
        applyIntentEvent(ev);
        break;
      case 'wind':
        scene.windFx(ev.power ?? 1);
        break;
      case 'caption':
        showCaption(ev);
        break;
      case 'cutscene':
        showStoryCard(ev);
        break;
      default: break;
    }
  }
}

// ---------------------------------------------------------------- input
// Lane keys are accepted as a convenience, but the destination lane is chosen
// by the chart: the closest note to the hit line always answers first.
function keyDown(e) {
  if (e.code === 'Escape' && dom.modScreen?.classList.contains('show')) {
    e.preventDefault();
    closeMods();
    return;
  }
  if (dom.modScreen?.classList.contains('show')) return;
  if (e.code === 'Escape') {
    if (gameState === 'playing') { e.preventDefault(); pauseGame(); }
    else if (gameState === 'paused') { e.preventDefault(); resumeGame(); }
    return;
  }
  if ((gameState === 'menu' || gameState === 'boot') && e.code === 'KeyP') {
    e.preventDefault();
    const i = PARTNERS.findIndex((p) => p.id === partner.id);
    selectPartner(PARTNERS[(i + 1) % PARTNERS.length].id);
    return;
  }
  if ((gameState === 'menu' || gameState === 'boot') && e.code === 'KeyC' && selectedTrack.id === 'intention') {
    e.preventDefault();
    setChaosMode(!chaosMode);
    return;
  }
  if (e.code === 'Space') {
    if (gameState === 'playing' && swingMode) {
      e.preventDefault();
      if (!e.repeat) swingTap();
    }
    return;
  }
  if (e.repeat) return;
  if (KEYMAP[e.code] === undefined) return;
  e.preventDefault();
  if (gameState !== 'playing') return;
  if (keysHeld.has(e.code)) return;
  keysHeld.add(e.code);
  pressGlobal();
}

function keyUp(e) {
  if (KEYMAP[e.code] === undefined) return;
  keysHeld.delete(e.code);
  releaseHolds();
}

document.addEventListener('keydown', keyDown, { passive: false });
document.addEventListener('keyup', keyUp);

function overGameUi(target) {
  return !!(target?.closest?.('#pauseBtn, #centerPad, .overlay, #startScreen, #resultScreen, #pauseScreen'));
}

// One capture-phase listener owns every tap. Pads are visuals and accessible
// buttons now; the finger can land anywhere in the playfield.
function pointerDown(e) {
  if (gameState !== 'playing') return;
  if (overGameUi(e.target)) return;
  e.preventDefault();
  try { e.target.setPointerCapture?.(e.pointerId); } catch { /* noop */ }
  touchPoints.add(e.pointerId);
  if (swingMode) swingTap();
  else pressGlobal();
}

function pointerUp(e) {
  touchPoints.delete(e.pointerId);
  releaseHolds();
}

window.addEventListener('pointerdown', pointerDown, { capture: true, passive: false });
window.addEventListener('pointerup', pointerUp, { capture: true, passive: true });
window.addEventListener('pointercancel', pointerUp, { capture: true, passive: true });
window.addEventListener('blur', () => {
  touchPoints.clear();
  keysHeld.clear();
  releaseHolds();
});

for (const pad of dom.pads) {
  pad.addEventListener('contextmenu', (e) => e.preventDefault());
}

if (dom.centerPad) {
  const down = (e) => {
    e.preventDefault();
    if (gameState !== 'playing' || !swingMode) return;
    touchPoints.add(e.pointerId);
    dom.centerPad.classList.add('pressed');
    swingTap();
  };
  const up = (e) => {
    e.preventDefault();
    touchPoints.delete(e.pointerId);
    dom.centerPad.classList.remove('pressed');
    releaseHolds();
  };
  dom.centerPad.addEventListener('pointerdown', down, { passive: false });
  dom.centerPad.addEventListener('pointerup', up, { passive: false });
  dom.centerPad.addEventListener('pointercancel', up, { passive: false });
  dom.centerPad.addEventListener('lostpointercapture', up, { passive: false });
  dom.centerPad.addEventListener('contextmenu', (e) => e.preventDefault());
}

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
for (const btn of dom.partnerButtons) {
  btn.addEventListener('click', () => {
    if (gameState !== 'boot' && gameState !== 'menu') return;
    selectPartner(btn.dataset.partner);
  });
}
dom.modeNormal?.addEventListener('click', () => setChaosMode(false));
dom.modeChaos?.addEventListener('click', () => setChaosMode(true));
dom.storyBtn?.addEventListener('click', () => {
  if (gameState !== 'boot' && gameState !== 'menu') return;
  openStory();
});
dom.storyClose?.addEventListener('click', closeStory);
dom.storyScreen?.addEventListener('click', (e) => {
  if (e.target === dom.storyScreen) closeStory();
});
dom.modBtn?.addEventListener('click', openMods);
dom.modClose?.addEventListener('click', closeMods);
dom.modScreen?.addEventListener('click', (e) => {
  if (e.target === dom.modScreen) closeMods();
});
for (const item of dom.modItems) {
  item.addEventListener('click', () => setMod(item.dataset.mod, !mods[item.dataset.mod]));
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
  const chaos = isChaos();
  if (dom.startTrack) dom.startTrack.textContent = chaos ? 'INTENTION // CHAOS' : t.shortTitle;
  if (dom.startLength) dom.startLength.textContent = fmtTime(t.duration);
  if (dom.startLevel) dom.startLevel.textContent = chaos ? 'CHAOS' : t.difficulty;
  if (dom.startLanes) dom.startLanes.textContent = chaos ? '8 · 6 · 4' : t.laneLabel;
  if (dom.hudTrack) dom.hudTrack.textContent = chaos ? 'INTENTION // CHAOS' : t.shortTitle;
  if (dom.hudBpm) dom.hudBpm.textContent = chaos ? (chart.song.bpmLabel || 'CHAOS') : (t.bpmLabel || `${t.bpm} BPM`);
  if (dom.loadTrack) dom.loadTrack.textContent = `${chaos ? 'INTENTION CHAOS' : t.shortTitle} // ${chaos ? 'CHAOS' : t.difficulty}`;
  const count = $('trackCount');
  if (count) count.textContent = String(TRACKS.length).padStart(2, '0');
  document.body.classList.toggle('boss-track', !!t.boss);
  document.body.classList.toggle('chaos-mode', chaos);
  const canChaos = t.id === 'intention';
  if (dom.modeRow) dom.modeRow.classList.toggle('show', canChaos);
  if (dom.modeNormal) {
    dom.modeNormal.classList.toggle('active', canChaos && !chaos);
    dom.modeNormal.setAttribute('aria-pressed', String(canChaos && !chaos));
  }
  if (dom.modeChaos) {
    dom.modeChaos.classList.toggle('active', chaos);
    dom.modeChaos.setAttribute('aria-pressed', String(chaos));
    dom.modeChaos.disabled = !canChaos;
  }
  if (audio.loaded && dom.startLabel) dom.startLabel.textContent = chaos ? 'ENTER CHAOS' : 'START SESSION';
  for (const card of dom.trackCards) {
    const meta = TRACK_BY_ID[card.dataset.track];
    if (meta) card.style.setProperty('--card-accent', meta.accent);
    const on = card.dataset.track === t.id;
    card.classList.toggle('active', on);
    card.setAttribute('aria-selected', String(on));
  }
  document.documentElement.style.setProperty('--track-accent', chaos ? '#ff3b5c' : t.accent);
  renderBest();
}

async function selectTrack(id, { autoLoad = true } = {}) {
  const next = TRACK_BY_ID[id];
  if (!next) return;
  selectedTrack = next;
  chaosMode = false;
  chart = chartFor(next, false);
  chartEnd = chart.song.chartEnd;
  trackDuration = next.duration;
  applyTrackUI();
  setBossIntro(false);
  setIntentPresentation(false);
  hideCaption();
  hideStoryCard();
  scene.setChaos?.(false);
  dom.bossGlitch?.classList.remove('on');
  scene.setBoss(next.boss ? 'preview' : 'off', next.theme || 'untouchable');
  scene.setTheme?.(next.theme || 'untouchable');
  scene.setSection(chart.sections[0]);
  scene.setTempo(chart.song.bpm, chart.song.beatOffset);
  scene.setCity(chart.sections[0].city || 0);
  scene.setPreviewLanes(new Set());
  buildNotes();
  resetGame();
  // Show the clock as a menu preview for CHRONOSTASIS; every other track keeps
  // the background clean. Gameplay re-arms it from the chart's motif events.
  if (next.id === 'chronostasis') scene.setClock('run', 0.4);
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
    const buffer = await audio.load(track.audio, (p) => {
      if (token !== loadToken) return;
      dom.loadFill.style.width = Math.round(p * 100) + '%';
    });
    if (token !== loadToken) return;
    audio.setBuffer(buffer);
    dom.loadFill.style.width = '100%';
    dom.startLabel.textContent = isChaos() ? 'ENTER CHAOS' : 'START SESSION';
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
renderPartner();
applyTrackUI();
applyModsUI();
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
    updateIntent(dt, t);
    updateSwing(t);
    updateNotes(t);
    updateHUD(t);
    scene.animate(dt, t, true);
    alignPads(ahead);
    const failed = !mods.noFail && (stats.health <= 0.001
      || (intent.guiltOn && !intent.fakeGuilt && intent.guilt <= 0.001));
    if (t >= chartEnd) finishGame();
    else if (failed) startGameOver();
  } else if (gameState === 'gameover') {
    updateGameOver();
    updateNotes(gameOver.visualT);
    scene.animate(dt, gameOver.visualT, true);
    alignPads(new Set());
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
  audio, stats, scene, pressLane, pressGlobal, releaseLane, selectTrack,
  selectPartner, setChaosMode, showStoryCard,
  mods, setMod, modsActive, openMods, closeMods,
  get chart() { return chart; },
  get partner() { return partner; },
  get chaos() { return isChaos(); },
  get notes() { return noteObjects; },
  get swings() { return swingNotes; },
  get swingMode() { return swingMode; },
  swingTap,
  get state() { return gameState; },
  get best() { return personalBest; },
  get intent() { return intent; },
};

requestAnimationFrame(frame);
