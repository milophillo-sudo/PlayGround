import * as THREE from 'three';
import { buildMenuWorld } from './world.js';
import { CutsceneDirector } from './cutscenes.js';
import { Game } from './game.js';
import { audio } from './audio.js';

/* ------------------------------------------------------------------ *
 *  DOM
 * ------------------------------------------------------------------ */
const $ = (id) => document.getElementById(id);
const app = $('app');
const canvas = $('scene');
const fadeEl = $('fade');
const flashEl = $('flash');
const loading = $('loading');
const menu = $('menu');
const hud = $('hud');
const cutsceneUI = $('cutsceneUI');
const choiceUI = $('choiceUI');
const storyInfo = $('storyInfo');
const endScreen = $('endScreen');
const pause = $('pause');
const modal = $('modal');
const chapterCard = $('chapterCard');
const gameCaption = $('gameCaption');
const promptEl = $('interactPrompt');
const tutorialEl = $('tutorial');

/* ------------------------------------------------------------------ *
 *  renderer / menu world
 * ------------------------------------------------------------------ */
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.06;

const menuScene = new THREE.Scene();
const menuWorld = buildMenuWorld(menuScene);
menuWorld.camera.aspect = window.innerWidth / Math.max(1, window.innerHeight);
menuWorld.camera.updateProjectionMatrix();

let mode = 'loading'; // loading | menu | cutscene | game | end
let game = null;
let director = null;
let menuTime = 0;
let lastTime = performance.now();
let pausedByUser = false;
let storyResolve = null;
let currentChoiceCount = 2;

/* ------------------------------------------------------------------ *
 *  small UI helpers
 * ------------------------------------------------------------------ */
function setFade(v) {
  if (!fadeEl) return;
  fadeEl.style.opacity = String(v);
}

function doFlash() {
  if (!flashEl) return;
  flashEl.classList.remove('go');
  void flashEl.offsetWidth;
  flashEl.classList.add('go');
  setTimeout(() => flashEl.classList.remove('go'), 520);
}

function setCaption(data) {
  if (!gameCaption) return;
  if (!data || !data.text) {
    gameCaption.classList.remove('show');
    return;
  }
  const speaker = $('gcSpeaker');
  const text = $('gcText');
  if (speaker) {
    speaker.textContent = data.speaker || '';
    speaker.className = (data.speaker || '').toLowerCase();
  }
  if (text) text.textContent = data.text;
  gameCaption.classList.add('show');
}

function setObjective(title, sub) {
  if (title) $('objectiveText').textContent = title;
  if (sub !== undefined) $('objectiveSub').textContent = sub;
}

function setPrompt(text) {
  if (!promptEl) return;
  if (text) {
    $('interactText').textContent = text;
    promptEl.classList.remove('hidden');
  } else {
    promptEl.classList.add('hidden');
  }
  $('interactBtn')?.classList.toggle('hidden', !text);
}

function showChoice(options, head = {}) {
  if (!choiceUI) return;
  const list = $('choiceList');
  list.innerHTML = '';
  currentChoiceCount = options.length;
  options.forEach((opt, i) => {
    const b = document.createElement('button');
    b.className = 'choice-option';
    b.type = 'button';
    b.innerHTML = `<span class="choice-num">${opt.key || i + 1}</span>
      <span class="choice-copy"><strong>${opt.title}</strong><small>${opt.desc || ''}</small></span>
      <span class="choice-arrow">›</span>`;
    b.addEventListener('click', () => {
      if (game) game.choose(i);
    });
    b.addEventListener('pointerenter', () => audio.hover());
    list.appendChild(b);
  });
  if (head) {
    const kicker = choiceUI.querySelector('.choice-kicker');
    const title = choiceUI.querySelector('.choice-head h2');
    const copy = choiceUI.querySelector('.choice-head p');
    if (kicker && head.kicker) kicker.textContent = head.kicker;
    if (title && head.title) title.textContent = head.title;
    if (copy && head.copy) copy.textContent = head.copy;
  }
  choiceUI.classList.remove('hidden');
  requestAnimationFrame(() => choiceUI.classList.add('on'));
  audio.heartbeat();
}

function hideChoice() {
  if (!choiceUI) return;
  choiceUI.classList.remove('on');
  setTimeout(() => choiceUI.classList.add('hidden'), 380);
}

function setChoiceTimer(ratio, danger = false) {
  const bar = $('choiceTimerBar');
  if (bar) bar.style.transform = `scaleX(${Math.max(0, Math.min(1, ratio))})`;
  const timer = choiceUI?.querySelector('.choice-timer');
  if (timer) timer.classList.toggle('danger', !!danger);
}

function showStory(content = {}, onContinue) {
  if (!storyInfo) { onContinue?.(); return; }
  storyResolve = onContinue || null;
  if (content.kicker) $('storyKicker').textContent = content.kicker;
  if (content.title) $('storyTitle').innerHTML = content.title;
  if (content.copy) $('storyCopy').textContent = content.copy;
  storyInfo.classList.remove('hidden');
  requestAnimationFrame(() => storyInfo.classList.add('visible'));
  audio.heartbeat();
}

function closeStory() {
  if (!storyInfo) return;
  storyInfo.classList.remove('visible');
  setTimeout(() => storyInfo.classList.add('hidden'), 500);
  const r = storyResolve;
  storyResolve = null;
  r?.();
}

/* ------------------------------------------------------------------ *
 *  cutscene director
 * ------------------------------------------------------------------ */
director = new CutsceneDirector({
  onFade: (v) => setFade(v),
  onSubtitle: (sub) => {
    const wrap = $('subtitleWrap');
    if (!wrap) return;
    if (!sub) { wrap.classList.remove('show'); return; }
    $('speakerTag').textContent = sub.speaker || '';
    $('subtitle').textContent = sub.text || '';
    wrap.classList.add('show');
  },
  onCard: (kicker, title) => {
    const card = $('sceneCard');
    if (!card) return;
    if (!kicker && !title) { card.classList.remove('show'); return; }
    $('sceneCardKicker').textContent = kicker || '';
    $('sceneCardTitle').textContent = title || '';
    card.classList.add('show');
  },
  onProgress: (p) => {
    const bar = $('cutProgress')?.querySelector('i');
    if (bar) bar.style.width = `${Math.round(p * 100)}%`;
  },
  onScene: (scene, camera) => {
    camera.aspect = window.innerWidth / Math.max(1, window.innerHeight);
    camera.updateProjectionMatrix();
  },
  onComplete: () => {
    if (mode === 'cutscene') startGame();
  },
  onLetterbox: (on) => $('letterbox')?.classList.toggle('on', on),
  onSkipUI: (show) => $('skipBtn')?.classList.toggle('hidden', !show),
});

/* ------------------------------------------------------------------ *
 *  game
 * ------------------------------------------------------------------ */
function makeGame() {
  return new Game({
    onEnd: (result) => showEnd(result),
    onStory: (resolve) => showStory({
      kicker: 'THE STORY',
      title: 'YOU FOLLOW,<br><em>AS YOUR CHARACTER\'S STORY.</em>',
      copy: 'Every choice turns the page. Tim slipped through the vent — and into whatever waited inside.',
    }, resolve),
    showChoice,
    hideChoice,
    setChoiceTimer,
    onCaption: setCaption,
    onChapterCard: (show) => chapterCard?.classList.toggle('show', !!show),
    onFade: setFade,
    onFlash: doFlash,
    onPrompt: setPrompt,
    onTutorial: (show) => tutorialEl?.classList.toggle('hidden', !show),
    onObjective: setObjective,
    onCrouchHint: (show) => $('crouchHint')?.classList.toggle('glow', !!show),
  });
}

function startGame() {
  if (game) { game.dispose(); game = null; }
  mode = 'game';
  menu.classList.remove('visible');
  endScreen.classList.remove('visible');
  cutsceneUI.classList.add('hidden');
  choiceUI.classList.add('hidden');
  choiceUI.classList.remove('on');
  storyInfo.classList.remove('visible');
  storyInfo.classList.add('hidden');
  pause.classList.remove('visible');
  hud.classList.remove('hidden');
  $('canHud')?.classList.add('hidden');
  $('escapeTimer')?.classList.add('hidden');
  $('qte')?.classList.add('hidden');
  $('keypad')?.classList.add('hidden');
  $('noteOverlay')?.classList.add('hidden');
  $('deathFx')?.classList.remove('show');
  setCaption(null);
  setPrompt(null);
  game = makeGame();
  game.build();
  game.camera.aspect = window.innerWidth / Math.max(1, window.innerHeight);
  game.camera.updateProjectionMatrix();
  setFade(0);
  $('letterbox')?.classList.remove('on');
  audio.ensure();
}

function showEnd(result) {
  mode = 'end';
  game && (game.running = false);
  hud.classList.add('hidden');
  setPrompt(null);
  setCaption(null);
  $('canHud')?.classList.add('hidden');
  $('escapeTimer')?.classList.add('hidden');
  $('qte')?.classList.add('hidden');
  $('keypad')?.classList.add('hidden');
  $('noteOverlay')?.classList.add('hidden');
  $('endTitle').textContent = result.title || 'THE LAST CAN';
  $('endCopy').textContent = result.copy || '';
  $('remembered').textContent = result.remembered || 'THE DEAD WILL REMEMBER THAT';
  $('statTime').textContent = result.time || '00:00';
  $('statChoice').textContent = result.statChoice || 'RAN';
  $('statCans').textContent = result.cans || '0 CANS FOUND';
  endScreen.classList.add('visible');
  setFade(0);
  audio.setAmbientScene('end');
  audio.setMood('sad');
}

function showMenu() {
  if (game) { game.dispose(); game = null; }
  mode = 'menu';
  hud.classList.add('hidden');
  endScreen.classList.remove('visible');
  pause.classList.remove('visible');
  cutsceneUI.classList.add('hidden');
  storyInfo.classList.remove('visible');
  storyInfo.classList.add('hidden');
  choiceUI.classList.add('hidden');
  choiceUI.classList.remove('on');
  $('qte')?.classList.add('hidden');
  $('keypad')?.classList.add('hidden');
  $('noteOverlay')?.classList.add('hidden');
  $('canHud')?.classList.add('hidden');
  $('escapeTimer')?.classList.add('hidden');
  $('deathFx')?.classList.remove('show');
  setPrompt(null);
  setCaption(null);
  menu.classList.add('visible');
  setFade(0);
  audio.setAmbientScene('menu');
  audio.setMood('menu');
}

/* ------------------------------------------------------------------ *
 *  modal content
 * ------------------------------------------------------------------ */
function openModal(kind) {
  const kicker = $('modalKicker');
  const body = $('modalBody');
  if (!body || !modal) return;
  modal.classList.remove('hidden');
  audio.ui();
  if (kind === 'options') {
    kicker.textContent = 'OPTIONS';
    body.innerHTML = `
      <div class="opt-row"><label>MASTER VOLUME</label><input id="optVol" type="range" min="0" max="100" value="${Math.round(audio.volume * 100)}"><span class="val" id="optVolVal">${Math.round(audio.volume * 100)}</span></div>
      <div class="opt-row"><label>LOOK SENSITIVITY</label><input id="optSens" type="range" min="30" max="220" value="${Math.round((game?.sensitivity || Number(localStorage.getItem('lastcan_sens') || 1)) * 100)}"><span class="val" id="optSensVal">${Math.round((game?.sensitivity || Number(localStorage.getItem('lastcan_sens') || 1)) * 100)}</span></div>
      <div class="opt-row"><label>SOUND</label><button id="optMute" class="switch ${audio.muted ? '' : 'on'}" aria-label="Toggle sound"></button></div>
      <p style="margin-top:18px">The game saves these settings on this device.</p>`;
    $('optVol')?.addEventListener('input', (e) => {
      const v = Number(e.target.value);
      audio.setVolume(v / 100);
      $('optVolVal').textContent = String(v);
    });
    $('optSens')?.addEventListener('input', (e) => {
      const v = Number(e.target.value) / 100;
      localStorage.setItem('lastcan_sens', String(v));
      if (game) game.sensitivity = v;
      $('optSensVal').textContent = String(Math.round(v * 100));
    });
    $('optMute')?.addEventListener('click', (e) => {
      audio.setMuted(!audio.muted);
      e.currentTarget.classList.toggle('on', !audio.muted);
      syncMuteButton();
    });
  } else if (kind === 'credits') {
    kicker.textContent = 'CREDITS';
    body.innerHTML = `
      <h3>THE LAST CAN</h3>
      <p>Chapter One — Trespasser</p>
      <div class="credit-line"><span>STORY &amp; WORLD</span><b>HOMEWOOD PICTURES</b></div>
      <div class="credit-line"><span>ENGINE</span><b>THREE.JS</b></div>
      <div class="credit-line"><span>PROCEDURAL ART</span><b>GENERATED IN-ENGINE</b></div>
      <div class="credit-line"><span>SOUND</span><b>SYNTHESIZED WEBAUDIO</b></div>
      <div class="credit-line"><span>TYPE</span><b>BEBAS NEUE · MANROPE · SPECIAL ELITE</b></div>
      <p style="margin-top:20px">For everyone who kept walking when the road ran out.</p>`;
  } else {
    kicker.textContent = 'HOW TO PLAY';
    body.innerHTML = `
      <h3>MOVE</h3>
      <div class="key-table"><span>W A S D</span><small>Walk. Camera-relative.</small><span>SHIFT</span><small>Run.</small><span>C</span><small>Crouch. Needed for the fence hole.</small><span>MOUSE</span><small>Look around. Click to lock the pointer.</small><span>E</span><small>Interact. Pick up cans, read notes, use the keypad.</small><span>1 / 2</span><small>Choose during a decision.</small><span>SPACE / → / ↓</span><small>Quick actions. Or tap the dial and swipe.</small></div>
      <h3>THE STORE</h3>
      <p>Find ten cans. Read the memo, read the wall, and work out the fuel-room code. Then get out alive.</p>
      <h3>ON TOUCH</h3>
      <p>Use the joystick to move. Tap the round buttons to crouch or interact. Swipe on the dial for swipe actions.</p>`;
  }
}

function closeModal() {
  modal?.classList.add('hidden');
  audio.ui();
}

function syncMuteButton() {
  const btn = $('muteBtn');
  if (!btn) return;
  btn.classList.toggle('muted', audio.muted);
  btn.querySelector('.sound-on').style.display = audio.muted ? 'none' : '';
  btn.querySelector('.sound-off').style.display = audio.muted ? '' : 'none';
}

/* ------------------------------------------------------------------ *
 *  pause
 * ------------------------------------------------------------------ */
function setPaused(v) {
  if (mode !== 'game' || !game) return;
  game.setPaused(v);
  pause.classList.toggle('visible', v);
  pausedByUser = v;
  if (v) document.exitPointerLock?.();
}

/* ------------------------------------------------------------------ *
 *  wiring
 * ------------------------------------------------------------------ */
$('playBtn')?.addEventListener('click', () => {
  audio.ensure();
  audio.ui();
  mode = 'cutscene';
  menu.classList.remove('visible');
  cutsceneUI.classList.remove('hidden');
  $('letterbox')?.classList.add('on');
  setFade(1);
  director.play();
});

$('skipBtn')?.addEventListener('click', () => { audio.ui(); director.skip(); });
$('storyContinue')?.addEventListener('click', () => { audio.ui(); closeStory(); });

$('optionsBtn')?.addEventListener('click', () => openModal('options'));
$('creditsBtn')?.addEventListener('click', () => openModal('credits'));
$('howBtn')?.addEventListener('click', () => openModal('how'));
$('modalClose')?.addEventListener('click', closeModal);
modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

$('muteBtn')?.addEventListener('click', () => {
  audio.ensure();
  audio.setMuted(!audio.muted);
  syncMuteButton();
  audio.ui();
});

$('resumeBtn')?.addEventListener('click', () => { audio.ui(); setPaused(false); });
$('pauseOptionsBtn')?.addEventListener('click', () => openModal('options'));
$('pauseMenuBtn')?.addEventListener('click', () => { audio.ui(); setPaused(false); showMenu(); });

$('replayBtn')?.addEventListener('click', () => {
  audio.ui();
  endScreen.classList.remove('visible');
  startGame();
});
$('menuBtn')?.addEventListener('click', () => { audio.ui(); showMenu(); });

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!modal?.classList.contains('hidden')) { closeModal(); return; }
    if (mode === 'game') { e.preventDefault(); setPaused(!game?.paused); }
  }
});

/* ------------------------------------------------------------------ *
 *  resize
 * ------------------------------------------------------------------ */
function onResize() {
  const w = window.innerWidth;
  const h = Math.max(1, window.innerHeight);
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  menuWorld.camera.aspect = w / h;
  menuWorld.camera.updateProjectionMatrix();
  if (director?.camera) {
    director.camera.aspect = w / h;
    director.camera.updateProjectionMatrix();
  }
  if (game?.camera) {
    game.camera.aspect = w / h;
    game.camera.updateProjectionMatrix();
  }
}
window.addEventListener('resize', onResize);
window.addEventListener('orientationchange', () => setTimeout(onResize, 120));

/* ------------------------------------------------------------------ *
 *  main loop
 * ------------------------------------------------------------------ */
function frame(now) {
  const dt = Math.min(0.05, Math.max(0.0001, (now - lastTime) / 1000));
  lastTime = now;

  if (mode === 'cutscene') {
    director.update(dt);
    const scene = director.current?.scene;
    const camera = director.current?.camera;
    if (scene && camera) renderer.render(scene, camera);
  } else if (mode === 'game' && game?.scene && game?.camera) {
    game.update(dt);
    renderer.render(game.scene, game.camera);
  } else if (mode === 'menu' || mode === 'loading') {
    menuTime += dt;
    menuWorld.update(dt, menuTime);
    renderer.render(menuScene, menuWorld.camera);
  } else if (mode === 'end' && game?.scene && game?.camera) {
    // keep the last frozen frame behind the end card
    renderer.render(game.scene, game.camera);
  }
  requestAnimationFrame(frame);
}

/* ------------------------------------------------------------------ *
 *  boot
 * ------------------------------------------------------------------ */
syncMuteButton();
setFade(1);
requestAnimationFrame(frame);

setTimeout(() => {
  if (mode !== 'loading') return;
  loading.classList.remove('visible');
  menu.classList.add('visible');
  mode = 'menu';
  audio.setAmbientScene('menu');
  audio.setMood('menu');
  setTimeout(() => setFade(0), 80);
}, 1250);

// expose for debugging / automated checks
window.__lastCan = {
  get game() { return game; },
  get mode() { return mode; },
  director,
  renderer,
  startGame,
  showMenu,
  // fast-forward game logic (used by automated playthroughs)
  async advance(seconds = 1) {
    if (!game) return;
    const steps = Math.min(1800, Math.max(1, Math.round(seconds * 60)));
    for (let i = 0; i < steps; i++) {
      game.update(1 / 60);
      if (i % 8 === 7) await new Promise(r => setTimeout(r, 0));
    }
    if (game.scene && game.camera) renderer.render(game.scene, game.camera);
  },
};
