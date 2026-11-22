import * as THREE from 'three';
import { World } from './world.js';
import { audio } from './audio.js';
import { UI, sleep } from './ui.js';
import { Bot, BOT_DEFS, DOWN_TIME, JakeNPC } from './bots.js';
import { Killer } from './killer.js';
import { Principal } from './principal.js';
import { makePerson, animatePerson } from './props.js';
import { TownTitle } from './title.js';
import { VisibilityCuller } from './culling.js';
import {
  Cinematic, introShots, lockdownShots, forgotJakeShots, jumpscareShots,
  jakeRevealShots, policeShots
} from './cinematics.js';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const norm = (a) => {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
};

const JOKE_NOTES = [
  ['THE PLAN', '1. Find keys.\n2. Unlock doors.\n3. Do NOT get an axe to the report card.\n\n(Step 2 is optional. Step 3 is not.)'],
  ['A NOTE FROM JAKE', 'I hid a key somewhere clever.\n\nBy "clever" I mean I forgot where.\n\nGood luck. — J'],
  ['MATH DEPARTMENT', 'Q!?\n\nWHAT IS Q?\n\nIs it a letter? A grade? A cry for help?\n\nAll three.'],
  ['CAFETERIA NOTICE', 'TODAY\'S MENU:\nMystery Meat\nMystery Meat (vegetarian)\nMystery Meat (with a hat)\n\nPlease do not ask questions.'],
  ['HALL MONITOR RULES', 'Rule 1: No running.\nRule 2: No shouting.\nRule 3: No surviving.\n\nRule 3 has been recently updated.'],
  ['PRINCIPAL\'S MEMO', 'To all staff:\nThe lockdown drill is cancelled.\nThe lockdown is not a drill.\nPlease remain calm and file your grades.'],
  ['CUSTODIAN\'S ADVICE', 'The crowbar is not in the janitor\'s closet.\n\nI know. I checked. I hid it somewhere worse.\n\nYou are welcome.'],
  ['REPORT CARD', 'Name: JAKE\nMath: Z\nEnglish: Z\nScience: Z\nGym: Z+\n\nTeacher comment: "A plus for effort? No. A plus for being Z."'],
  ['POLICE STATEMENT', 'I saw nothing.\nI heard nothing.\nI definitely did not see a student use a domain expansion on the hall monitor.\n\nSign here: ________']
];

const CAUGHT_LINES = [
  '"No running in the halls."',
  '"That is not a hall pass."',
  '"Late again. Permanently."',
  '"Detention has been extended."'
];

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.state = 'title';
    this.time = 0;
    this.inputActive = false;
    this.noteOpen = false;
    this.paused = false;
    this.blood = 0;
    this.shakeLevel = 0;
    this.shakeTimer = 0;
    this.noiseLevel = 0;
    this.proximity = 0;
    this.downEntity = null;
    this.afterCutscene = null;
    this.touch = matchMedia('(pointer: coarse)').matches;
    this.camYaw = Math.PI;
    this.pitch = 0;
    this.joystick = { x: 0, y: 0 };
    this.sprintHeld = false;
    this.crouchHeld = false;
    this.torchHeld = false;
    this.rescueHold = 0;
    this.rescueTarget = null;
    this._uiTimer = 0;
    this._heartTimer = 0;
    this._objectiveTimer = 0;
    this._titleAngle = 0;
    this.keysPressed = {};
    this.pendingSwitch = 0;
    this.phase = 'title';
    this._detected = false;
    this._forgotStarted = false;
    this._jakeStarted = false;
    this._policeStarted = false;
    this.stats = { notes: 0, started: 0, escaped: 0, finished: false };
    // adaptive resolution: keep the graphics, spend fewer pixels on weak GPUs
    this.baseDpr = 1;
    this.renderDpr = 1;
    this._perfAcc = 0;
    this._perfN = 0;
  }

  init() {
    UI.init();
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance' });
    this.baseDpr = this.renderDpr = Math.min(window.devicePixelRatio || 1, 1.5);
    this.renderer.setPixelRatio(this.baseDpr);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.enabled = false;

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x05070b, 0.035);
    this.camera = new THREE.PerspectiveCamera(74, window.innerWidth / window.innerHeight, 0.05, 280);
    this.camera.rotation.order = 'YXZ';
    this.camera.position.set(68, 5.2, 14);
    this.scene.add(this.camera);

    this.clock = new THREE.Clock();
    this.world = new World(this.scene, audio, this.renderer);
    this.world.viewCamera = this.camera;
    this.world.updateLightPool(true);
    this.world.setupLights();

    this.title = new TownTitle();
    this.title.resize(window.innerWidth, window.innerHeight);

    // static world occlusion + frustum culling pass
    this.culler = new VisibilityCuller(this);
    this.culler.collect();

    // flashlight
    this.flash = new THREE.SpotLight(0xfff0cc, 0, 26, Math.PI / 6.5, 0.45, 1.4);
    this.flash.position.set(0.18, -0.1, 0);
    this.flash.castShadow = false;
    const flashTarget = new THREE.Object3D();
    flashTarget.position.set(0, -0.03, -1);
    this.camera.add(this.flash);
    this.camera.add(flashTarget);
    this.flash.target = flashTarget;
    this.flashGlow = new THREE.PointLight(0xffe9c4, 0, 3.2, 2);
    this.flashGlow.position.set(0, -0.1, -0.4);
    this.camera.add(this.flashGlow);

    this.player = {
      isPlayer: true, name: 'YOU', pos: new THREE.Vector3(-8.0, 0, 4.9), yaw: Math.PI,
      hp: 100, stamina: 100, battery: 100, crouch: false, sprint: false,
      torchOn: false, downed: false, dead: false, escaped: false, hidden: false,
      hideSpot: null, downTimer: 0, keys: new Set(), crowbar: false, notes: 0,
      speed: 0, stepPhase: 0, noise: 0, attackTimer: 0, _jump: false
    };
    this.avatar = this.player;
    this.controlledBot = null;

    this.killer = new Killer(this, 34, 0);
    this.bots = [];
    const spots = [[-12.8, 5.3, 0.8], [-3.4, 5.3, -0.6], [-12.8, 9.3, 0.3]];
    BOT_DEFS.forEach((def, i) => {
      const [x, z, yaw] = spots[i % spots.length];
      const b = new Bot(this, def, x, z, yaw);
      this.bots.push(b);
    });

    this.principal = new Principal(this);
    this.jake = new JakeNPC(this);
    this.classTeacher = null;
    this.cinematic = new Cinematic(this);
    this.bindEvents();
    this.world.setLighting('day');

    UI.setObjective('Find Key 1 outside Room 101.', 'Keys open doors. Doors hold keys. This is a school.');
    UI.setNotes(0);
    UI.setTorch(false, 100);
    UI.setMeters({ hp: 100, noise: 0, stamina: 100, battery: 100 });

    setTimeout(() => {
      document.getElementById('loading')?.classList.add('out');
      setTimeout(() => {
        const l = document.getElementById('loading');
        if (l) l.classList.add('hidden');
      }, 700);
      UI.showScreen('title-screen');
    }, 700);

    window.addEventListener('resize', () => this.onResize());
    this.animate();
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.title?.resize(window.innerWidth, window.innerHeight);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // ── input ───────────────────────────────────────────────────
  bindEvents() {
    const down = (e) => {
      const k = e.key.toLowerCase();
      this.keysPressed[k] = true;
      if (k === 'shift') this.sprintHeld = true;
      if (k === 'control' || k === 'c') this.crouchHeld = true;
      if (k === 'f' && !e.repeat) this.toggleTorch();
      if (k === 'e' && !e.repeat) this.onInteractPress();
      if (k === 'm' && !e.repeat) {
        const m = audio.toggleMute();
        UI.toast(m ? 'Audio muted' : 'Audio on');
      }
      if (k === 'escape' && !e.repeat) {
        if (this.noteOpen) this.closeNote();
        else if (this.state === 'play' || this.state === 'down') this.togglePause();
      }
      if (k === ' ' && this.state === 'cutscene') {
        e.preventDefault();
        this.cinematic.skip();
      }
      if (['w', 'a', 's', 'd', ' ', 'shift', 'control', 'c', 'e', 'f'].includes(k)) e.preventDefault?.();
    };
    const up = (e) => {
      const k = e.key.toLowerCase();
      this.keysPressed[k] = false;
      if (k === 'shift') this.sprintHeld = false;
      if (k === 'control' || k === 'c') this.crouchHeld = false;
      if (k === 'e') { this.rescueHold = 0; this.rescueTarget = null; }
    };
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);

    this.canvas.addEventListener('click', () => {
      if ((this.state === 'play' || this.state === 'down') && !this.noteOpen && !this.paused) {
        if (document.pointerLockElement !== this.canvas) this.canvas.requestPointerLock?.();
      }
    });
    document.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement !== this.canvas) return;
      if (this.state !== 'play' || this.noteOpen || this.paused) return;
      // Browsers deliver one bogus mousemove (often hundreds of pixels) the
      // moment pointer lock engages. Swallow it, or the camera snaps to the
      // ceiling as soon as the cutscene hands over control.
      if (this._plockFresh) { this._plockFresh = false; return; }
      const s = 0.00215;
      const mx = Math.max(-180, Math.min(180, e.movementX || 0));
      const my = Math.max(-180, Math.min(180, e.movementY || 0));
      this.camYaw -= mx * s;
      this.pitch -= my * s * 0.92;
      this.pitch = clamp(this.pitch, -1.35, 1.35);
    });
    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement === this.canvas) {
        this._plockFresh = true;
        if (this.state === 'play') UI.prompt(null);
      }
    });

    // UI buttons
    document.getElementById('btn-play').addEventListener('click', () => this.startGame());
    document.getElementById('btn-controls').addEventListener('click', () => UI.showScreen('controls-screen'));
    document.getElementById('btn-controls-back').addEventListener('click', () => UI.showScreen('title-screen'));
    document.getElementById('btn-resume').addEventListener('click', () => this.togglePause(false));
    document.getElementById('btn-restart').addEventListener('click', () => location.reload());
    document.getElementById('btn-quit').addEventListener('click', () => location.reload());
    document.getElementById('btn-retry').addEventListener('click', () => location.reload());
    document.getElementById('btn-again').addEventListener('click', () => location.reload());
    document.getElementById('volume').addEventListener('input', (e) => {
      audio.init();
      audio.setVolume(Number(e.target.value) / 100);
    });
    document.getElementById('note-popup').addEventListener('click', () => this.closeNote());

    this.bindTouch();
  }

  bindTouch() {
    if (!this.touch) return;
    UI.setTouch(true);
    const zone = document.getElementById('stick-zone');
    const knob = document.getElementById('stick-knob');
    let stickId = null, cx = 0, cy = 0;
    const setStick = (e) => {
      const dx = e.clientX - cx, dy = e.clientY - cy;
      const d = Math.hypot(dx, dy), max = 52;
      const k = Math.min(1, d / max);
      this.joystick.x = d ? dx / d * k : 0;
      this.joystick.y = d ? dy / d * k : 0;
      knob.style.transform = `translate(${this.joystick.x * 36}px,${this.joystick.y * 36}px)`;
    };
    zone.addEventListener('pointerdown', (e) => {
      stickId = e.pointerId;
      const r = zone.getBoundingClientRect();
      cx = r.left + r.width / 2; cy = r.top + r.height / 2;
      zone.setPointerCapture(e.pointerId);
      setStick(e);
    });
    zone.addEventListener('pointermove', (e) => { if (e.pointerId === stickId) setStick(e); });
    const endStick = (e) => {
      if (e.pointerId !== stickId) return;
      stickId = null; this.joystick.x = 0; this.joystick.y = 0;
      knob.style.transform = 'translate(0,0)';
    };
    zone.addEventListener('pointerup', endStick);
    zone.addEventListener('pointercancel', endStick);

    const look = { id: null, x: 0, y: 0 };
    this.canvas.addEventListener('pointerdown', (e) => {
      if (this.state !== 'play' || this.noteOpen) return;
      look.id = e.pointerId; look.x = e.clientX; look.y = e.clientY;
    });
    this.canvas.addEventListener('pointermove', (e) => {
      if (look.id !== e.pointerId) return;
      const dx = e.clientX - look.x, dy = e.clientY - look.y;
      look.x = e.clientX; look.y = e.clientY;
      this.camYaw -= dx * 0.005;
      this.pitch = clamp(this.pitch - dy * 0.004, -1.35, 1.35);
    });
    this.canvas.addEventListener('pointerup', (e) => { if (look.id === e.pointerId) look.id = null; });
    document.getElementById('tb-interact').addEventListener('pointerdown', (e) => { e.preventDefault(); this.onInteractPress(); });
    const bindHold = (id, on, off) => {
      const el = document.getElementById(id);
      el.addEventListener('pointerdown', (e) => { e.preventDefault(); on(); });
      el.addEventListener('pointerup', (e) => { e.preventDefault(); off(); });
      el.addEventListener('pointercancel', off);
    };
    bindHold('tb-sprint', () => { this.sprintHeld = true; }, () => { this.sprintHeld = false; });
    bindHold('tb-crouch', () => { this.crouchHeld = !this.crouchHeld; }, () => {});
    document.getElementById('tb-flash').addEventListener('pointerdown', (e) => { e.preventDefault(); this.toggleTorch(); });
  }

  startGame() {
    if (this.state !== 'title') return;
    audio.init();
    audio.resume();
    audio.setVolume(Number(document.getElementById('volume')?.value || 70) / 100);
    UI.hideScreens();
    UI.fade(true, 300);
    this.stats.started = performance.now();
    this.state = 'cutscene';
    setTimeout(() => {
      UI.fade(false, 900);
      this.runCutscene('intro', () => introShots(this.cinematic), () => this.beginSkip());
    }, 420);
  }

  // ── chapter zero: sneak to the toilets with Jake ─────────────
  beginSkip() {
    this.phase = 'skip';
    this.state = 'play';
    this.setInputActive(true);
    this.world.setLighting('day');
    this.world.setBodiesVisible(false);
    this.killer.reset(34, 0);
    this.killer.active = false;
    // Okafor starts at the far east end walking west. That buys the player
    // a few seconds to get out of Room 101 before he reaches the doorway,
    // and makes his first pass feel like a patrol instead of a spawn kill.
    this.principal.spawn(22, 0.2, -Math.PI / 2);
    this._detected = false;

    // Jake needs the toilet door open to path through it, and the player
    // needs somewhere to hide while Okafor walks past.
    const toiletDoor = this.world.doors.find(d => d.room && d.room.id === 'toilets');
    if (toiletDoor) {
      toiletDoor.locked = false;
      toiletDoor.setOpen(true, false);
    }

    // Start just inside Room 101, facing the open door. Jake is already
    // out in the hall, waving you through; the rest of the class is still
    // seated behind you, so the room does not feel abandoned.
    this.player.pos.set(-8.0, 0, 4.15);
    this.player.yaw = 0;
    this.camYaw = 0;
    this.pitch = -0.02;
    this.player.hp = 100;
    this.player.stamina = 100;
    this.player.battery = 100;
    this.player.crowbar = false;
    this.player.torchOn = false;
    this.player.downed = false;
    this.player.hidden = false;
    this.avatar = this.player;
    this.controlledBot = null;
    this.downEntity = null;

    this.jake.spawn(-8.6, 2.35, 0);

    const seats = [[-11.6, 8.5], [-11.6, 6.1], [-9.0, 10.9]];
    this.bots.forEach((b, i) => {
      b.dormant = false;
      b.classroom = true;
      b.model.visible = true;
      b.pos.set(seats[i % seats.length][0], 0, seats[i % seats.length][1]);
      b.yaw = 0; // face the blackboard
      b.model.position.set(b.pos.x, 0, b.pos.z);
      b.model.rotation.y = 0;
      b.model.rotation.z = 0;
      b.model.position.y = 0;
      b.hp = 100;
      b.stamina = 100;
      b.downed = false;
      b.dead = false;
      b.escaped = false;
      b.state = 'follow';
      b.danger.visible = false;
      b.talk = 0;
      b.talkTimer = 0;
      const spr = b.model.userData.nameSprite;
      if (spr) spr.visible = false;
    });

    // Ms. Vella is still teaching. She is scenery, not a threat.
    if (!this.classTeacher) {
      this.classTeacher = makePerson({
        shirt: 0x6a5a42, pants: 0x30343a, hair: 0x8a8478, hairStyle: 'short',
        skin: 0xd9b49b, height: 1.7, tie: 0x7a2c36, glasses: true, female: true
      });
      this.scene.add(this.classTeacher);
    }
    this.classTeacher.position.set(-10.7, 0, 15.1);
    this.classTeacher.rotation.y = Math.PI;
    this.classTeacher.visible = true;

    // A few background students so the room still reads as fourth period
    // and not a green-screen set. They are scenery, not survivors.
    if (!this.classExtras) {
      const extraSpots = [
        [-9.0, 6.1, 0x445d46, 0x241a14, 0xd9b49b],
        [-4.4, 6.1, 0x4d4660, 0x3a2618, 0x8a5b3e],
        [-4.4, 8.5, 0x7a6a58, 0x151210, 0xa9724f]
      ];
      this.classExtras = extraSpots.map(([x, z, shirt, hair, skin], i) => {
        const model = makePerson({
          shirt, pants: 0x2a3040, hair, skin, height: 1.56 + i * 0.05,
          backpack: i === 1 ? 0x3e4f6b : null
        });
        model.position.set(x, 0, z);
        model.rotation.y = 0;
        this.scene.add(model);
        return { model, x, z };
      });
    }
    for (const e of this.classExtras) {
      e.model.visible = true;
      e.model.position.set(e.x, 0, e.z);
      e.model.rotation.y = 0;
    }

    UI.hideScreens();
    UI.showHud(true);
    UI.setTouch(this.touch);
    UI.fade(false, 900);
    UI.letterbox(false);
    UI.showCine(false);
    UI.chapter('CHAPTER ZERO', 'SKIP CLASS', 3400);
    UI.toast('Reach the toilets with Jake. Do not let Okafor see you.');
    audio.startAmbience();
    audio.alarmStop();
    audio.chaseStop();
    audio.setTension(0.16);
    this.updateObjective(true);
    this.canvas.requestPointerLock?.();
  }

  beginLockdown() {
    if (this.phase !== 'skip' || this.state !== 'play') return;
    this.phase = 'lockdown';
    this.setInputActive(false);
    this.principal.setActive(false);
    this.jake.setActive(false);
    if (this.classTeacher) this.classTeacher.visible = false;
    if (this.classExtras) for (const e of this.classExtras) e.model.visible = false;
    for (const b of this.bots) {
      b.classroom = false;
      b.model.visible = false;
      b.danger.visible = false;
    }
    this.player.speed = 0;
    UI.showHud(false);
    UI.setDetection(false);
    UI.fade(true, 650);
    this.state = 'cutscene';
    setTimeout(() => {
      UI.fade(false, 900);
      this.runCutscene('lockdown', () => lockdownShots(this.cinematic), () => this.beginPlay(true));
    }, 700);
  }

  beginPlay(fromLockdown = false) {
    this.phase = 'play';
    this.state = 'play';
    this.setInputActive(true);
    this.world.setLighting('lockdown');
    this.world.setBodiesVisible(false);
    this.principal.setActive(false);
    this.jake.setActive(false);
    if (this.classTeacher) this.classTeacher.visible = false;
    if (this.classExtras) for (const e of this.classExtras) e.model.visible = false;
    this.killer.spawn(34, 0);

    // Chapter one starts just outside the toilets, where the lockdown
    // caught the group. Face west down the corridor so the first frame
    // shows the hall, the key glow, and the three survivors — not the
    // inside of a door frame.
    this.player.pos.set(-2.2, 0, -2.4);
    this.player.yaw = Math.PI / 2;
    this.camYaw = Math.PI / 2;
    this.pitch = -0.02;
    this.player.hp = 100;
    this.player.stamina = 100;
    this.player.battery = 100;
    this.player.crowbar = false;
    this.player.torchOn = true;
    this.player.downed = false;
    this.player.dead = false;
    this.player.escaped = false;
    this.player.hidden = false;
    this.avatar = this.player;
    this.controlledBot = null;
    this.downEntity = null;

    // The other three heard the alarm and hid outside the toilets. Keep
    // them flanking the doorway, not standing in the middle of it and
    // blocking the first view of the hall.
    const spots = [[-4.6, -0.9], [-0.2, -1.0], [-6.4, -1.4]];
    this.bots.forEach((b, i) => {
      b.dormant = false;
      b.classroom = false;
      b.controlled = false;
      b.model.visible = true;
      b.pos.set(spots[i % 3][0], 0, spots[i % 3][1]);
      b.yaw = 0;
      b.hp = 100;
      b.stamina = 100;
      b.downed = false;
      b.dead = false;
      b.escaped = false;
      b.state = 'follow';
      b.model.rotation.z = 0;
      b.model.position.y = 0;
      b.danger.visible = false;
      if (b.model.userData.nameSprite) b.model.userData.nameSprite.visible = true;
    });

    UI.hideScreens();
    UI.showHud(true);
    UI.setTouch(this.touch);
    UI.fade(false, 1100);
    UI.letterbox(false);
    UI.showCine(false);
    UI.chapter('CHAPTER ONE', 'DON\'T BE SEEN', 3400);
    UI.toast('Click to lock the mouse · SPACE skips cutscenes');
    audio.startAmbience();
    audio.alarmStart();
    audio.setTension(0.35);
    this.updateObjective(true);
    this.canvas.requestPointerLock?.();

    // Seed the ending: Jake stayed behind in the toilets.
    setTimeout(() => {
      if (this.phase === 'play' && !this.player.dead && !this.player.escaped) {
        this.radio('JAKE (FROM THE TOILET)', 'I am guarding the toilets. ...You are coming back, right?');
      }
    }, 5600);
  }

  onDetected(principal) {
    if (this.phase !== 'skip' || this._detected) return;
    this._detected = true;
    this.phase = 'detected';
    this.state = 'cutscene';
    this.setInputActive(false);
    this.player.speed = 0;
    this.jake.speed = 0;
    UI.showHud(false);
    UI.setDetection(false);
    UI.jumpscare(true);
    UI.cineFlash();
    principal.fireLaser(this.player);
    this.shakeScreen(1.2, 1.6);
    audio.alarmStop();
    audio.chaseStop();
    audio.setTension(1);
    setTimeout(() => {
      UI.jumpscare(false);
      UI.caught(
        '"No hall pass. No witnesses."',
        'Tip: Okafor patrols the whole corridor. Wait until he walks past, crouch behind the lockers, then move.',
        {
          kicker: 'PRINCIPAL OKAFOR — ELECTRIC PIZZA PROTOCOL',
          title: 'DETECTED',
          button: 'TRY AGAIN'
        }
      );
      this.state = 'caught';
    }, 1650);
  }

  setInputActive(v) { this.inputActive = v; }

  runCutscene(name, shotsFn, done) {
    this.afterCutscene = done;
    this.state = 'cutscene';
    UI.showHud(false);
    this.cinematic.play(name, shotsFn);
  }

  onCutsceneDone(name, skipped) {
    const done = this.afterCutscene;
    this.afterCutscene = null;
    if (done) done(skipped);
    else {
      this.state = 'play';
      UI.showHud(true);
      this.setInputActive(true);
    }
  }

  fadeToBlack() { UI.fade(true, 900); }

  // ── entity helpers ───────────────────────────────────────────
  getControl() { return this.controlledBot || this.player; }
  getActivePos() { return this.avatar ? this.avatar.pos : this.player.pos; }
  getActiveYaw() { return this.controlledBot ? this.controlledBot.yaw : this.player.yaw; }

  hasKey(id) { return this.player.keys.has(id); }

  radio(name, line) { UI.subtitle(name, line, 3.2); }
  toast(msg) { UI.toast(msg); }
  bloodFlash(amount = 0.3) { this.blood = Math.max(this.blood, amount); }

  shakeScreen(level = 0.4, dur = 0.4) {
    this.shakeLevel = Math.max(this.shakeLevel, level);
    this.shakeTimer = Math.max(this.shakeTimer, dur);
  }

  noise(x, z, radius = 6, silent = false) {
    if (!silent) this.noiseLevel = Math.min(100, radius * 6.5);
    this.killer.hear(x, z, radius);
  }

  broadcastPanic(source, radius = 16) {
    for (const b of this.bots) {
      if (b.dead || b.escaped || b.controlled) continue;
      if (Math.hypot(b.pos.x - source.pos.x, b.pos.z - source.pos.z) < radius) {
        b.state = 'flee';
        b.fleeTimer = 7 + Math.random() * 4;
        b.killerSeen = true;
        b.pickFleeTarget();
      }
    }
  }

  onKillerSpot(entity) {
    if (entity === this.avatar) {
      UI.setDetection(true);
      audio.stinger();
    }
  }

  hideGameplayEntities(v) {
    for (const b of this.bots) {
      b.model.visible = v ? false : !b.escaped;
      if (b.model.userData.nameSprite) b.model.userData.nameSprite.visible = v ? false : (!b.escaped && !b.downed && !b.controlled);
      b.danger.visible = v ? false : b.downed;
    }
    this.killer.model.visible = v ? false : this.killer.active;
    if (this.principal) this.principal.model.visible = v ? false : this.principal.active;
    if (this.jake) this.jake.model.visible = v ? false : this.jake.active;
    if (this.classTeacher) this.classTeacher.visible = !v && this.phase === 'skip';
    if (this.classExtras) {
      for (const e of this.classExtras) e.model.visible = !v && this.phase === 'skip';
    }
    this.world.itemGroup.visible = !v;
    this.world.bodyGroup.visible = !v && this.world.bodiesVisible;
    UI.setDetection(false);
  }
}

// continued in main.part2.js
export { Game };

Object.assign(Game.prototype, {
  // ── main loop ───────────────────────────────────────────────
  trackPerf(rawDt) {
    if (!rawDt || rawDt < 0.0001) return;
    this._perfAcc += rawDt;
    this._perfN++;
    if (this._perfAcc < 1.6) return;
    const fps = this._perfN / this._perfAcc;
    this._perfAcc = 0;
    this._perfN = 0;
    const base = this.baseDpr || 1;
    if (fps < 44 && this.renderDpr > 0.86) {
      this.renderDpr = Math.max(0.85, this.renderDpr - 0.15);
      this.renderer.setPixelRatio(this.renderDpr);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    } else if (fps > 57 && this.renderDpr < base) {
      this.renderDpr = Math.min(base, this.renderDpr + 0.1);
      this.renderer.setPixelRatio(this.renderDpr);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  },

  animate() {
    requestAnimationFrame(() => this.animate());
    const raw = this.clock.getDelta();
    const dt = Math.min(0.05, raw);
    this.time += dt;
    this.trackPerf(raw);

    if (this.state === 'title') {
      this.title.update(dt);
      this.title.render(this.renderer);
      return;
    }
    if (this.state === 'cutscene') {
      this.cinematic.update(dt);
      this.world.update(dt);
      this.culler.update(dt);
      this.updateEffects(dt);
      if (this.principal && this.principal.laserT > 0) this.principal.updateLaser(dt);
    } else if (this.state === 'paused' || this.state === 'win' || this.state === 'caught') {
      this.world.update(dt * 0.15);
    } else if (this.noteOpen) {
      this.updateEffects(dt);
    } else {
      this.world.update(dt);
      this.updateGame(dt);
      this.culler.update(dt);
    }
    this.renderer.render(this.scene, this.camera);
  },

  updateGame(dt) {
    if (this.noteOpen) return;
    this.updateActive(dt);
    for (const b of this.bots) b.update(dt);
    if (this.phase === 'skip') {
      this.jake.update(dt);
      this.principal.update(dt);
      if (this.classTeacher?.visible) {
        animatePerson(this.classTeacher, dt, { mode: 'idle', speed: 0 });
      }
      if (this.classExtras) {
        for (const e of this.classExtras) {
          if (!e.model.visible) continue;
          animatePerson(e.model, dt, { mode: 'idle', speed: 0 });
          const p = e.model.userData.parts;
          if (p) {
            p.legL.rotation.x = -1.28;
            p.legR.rotation.x = -1.28;
            p.kneeL.rotation.x = 1.08;
            p.kneeR.rotation.x = 1.08;
            p.hips.position.y = 0.58;
          }
        }
      }
      if (this.state !== 'play') return;
      // The toilets are the finish line for chapter zero.
      const p = this.player.pos;
      if (p.x > -7 && p.x < 1 && p.z < -3.15) {
        this.beginLockdown();
        return;
      }
    } else {
      this.killer.update(dt);
    }
    if (this.state === 'down') this.updateDown(dt);
    // auto-open unlocked doors for anyone walking through
    this.world.autoOpenDoors(this.getControl().pos.x, this.getControl().pos.z, 1.7);
    for (const b of this.bots) if (!b.dead && !b.escaped && !b.dormant && !b.classroom) this.world.autoOpenDoors(b.pos.x, b.pos.z, 1.5);
    this.updateCamera(dt);
    this.updatePrompt(dt);
    this.updateEffects(dt);
    this.updateUI(dt);
    if (this.state === 'play' && this.getControl().escaped) {
      // handled by escapeActive
    }
    if (this.pendingSwitch > 0) {
      this.pendingSwitch -= dt;
      if (this.pendingSwitch <= 0) {
        const next = this.chooseNextBot();
        if (next) this.switchToBot(next, this._switchReason || 'SURVIVOR');
        else this.finishRun();
      }
    }
  },

  // ── player / active survivor movement ───────────────────────
  updateActive(dt) {
    const e = this.getControl();
    if (!e || e.downed || e.dead || e.escaped) {
      if (e) e.speed = 0;
      return;
    }
    if (e.hidden) {
      e.speed = 0;
      this.player.torchOn = false;
      return;
    }
    let f = 0, s = 0;
    if (this.inputActive) {
      if (this.keysPressed['w'] || this.keysPressed['arrowup']) f += 1;
      if (this.keysPressed['s'] || this.keysPressed['arrowdown']) f -= 1;
      if (this.keysPressed['d'] || this.keysPressed['arrowright']) s += 1;
      if (this.keysPressed['a'] || this.keysPressed['arrowleft']) s -= 1;
      f -= this.joystick.y;
      s += this.joystick.x;
    }
    const len = Math.hypot(f, s);
    if (len > 1) { f /= len; s /= len; }
    const moving = len > 0.06;
    const crouch = this.crouchHeld;
    const wantSprint = this.sprintHeld && moving && !crouch && e.stamina > 1;
    const sprint = wantSprint;
    e.crouch = crouch;
    e.sprint = sprint;
    // 25% faster than the Hall Monitor's chase speed (4.6), so a clean
    // sprint can actually break line of sight instead of losing ground.
    let speed = crouch ? 1.22 : sprint ? 5.75 : 2.52;
    if (sprint) {
      e.stamina = Math.max(0, e.stamina - dt * 19);
      if (e.stamina <= 0.5) speed = 2.15;
    } else {
      e.stamina = Math.min(100, e.stamina + dt * (moving ? 8.5 : 16));
    }
    if (e.hp < 30) speed *= 0.88;

    const fx = -Math.sin(this.camYaw) * f + Math.cos(this.camYaw) * s;
    const fz = -Math.cos(this.camYaw) * f - Math.sin(this.camYaw) * s;
    if (moving) {
      const ml = Math.hypot(fx, fz) || 1;
      e.pos.x += fx / ml * speed * dt;
      e.pos.z += fz / ml * speed * dt;
      this.world.resolveCircle(e.pos, 0.32);
      e.yaw = norm(Math.atan2(fx, fz));
      e.stepPhase += dt * speed * 2.1;
      if (e.stepPhase > Math.PI) {
        e.stepPhase = 0;
        audio.footstep(sprint, crouch);
        this._stepDip = 1;
        this.noise(e.pos.x, e.pos.z, sprint ? 13 : crouch ? 3.5 : 6.5);
      }
    } else {
      e.yaw = norm(this.camYaw - Math.PI);
    }
    e.speed = moving ? speed : 0;
    e.torchOn = this.player.torchOn;
    if (e.torchOn) {
      this.player.battery = Math.max(0, this.player.battery - dt * 1.35);
      if (this.player.battery <= 0) {
        this.player.torchOn = false;
        UI.toast('Flashlight died. Great.');
      }
    }
    // exit threshold
    if (this.world.exit.open && e.pos.x > 59.4) {
      this.escapeActive(e);
    }
  },

  updateCamera(dt) {
    const e = this.getControl() || this.player;
    const down = this.state === 'down' || e.downed;
    let targetEye = e.crouch ? 1.08 : 1.64;
    if (e.hidden) targetEye = 1.35;
    if (down) targetEye = 0.46;
    // Smooth the crouch/stand transition instead of snapping the camera.
    this._eye = this._eye == null ? targetEye : this._eye + (targetEye - this._eye) * Math.min(1, dt * 9);
    const eye = this._eye;

    const speedBob = e.speed || 0;
    this._bob = (this._bob || 0) + dt * (speedBob * 3.1 + 0.5);
    const moving = speedBob > 0.2;
    const amp = moving ? (e.sprint ? 0.05 : 0.032) * (e.crouch ? 0.55 : 1) : 0.006;
    const bob = moving
      ? Math.sin(this._bob) * amp
      : Math.sin(this.time * 1.6) * 0.006;
    // small lateral weight shift, plus a recoil dip on each footfall
    const sway = moving ? Math.sin(this._bob * 0.5) * 0.018 * (e.sprint ? 1.4 : 1) : 0;
    this._stepDip = Math.max(0, (this._stepDip || 0) - dt * 3.5);
    const dip = -Math.sin(this._stepDip * Math.PI) * 0.018;

    let sx = sway, sy = bob + dip;
    if (this.shakeTimer > 0) {
      this.shakeTimer -= dt;
      sx += Math.sin(this.time * 53) * this.shakeLevel * 0.12;
      sy += Math.cos(this.time * 61) * this.shakeLevel * 0.12;
      this.shakeLevel = Math.max(0, this.shakeLevel - dt * 1.4);
    }
    const p = e.pos;
    this.camera.position.set(p.x + sx, eye + sy + (down ? 0 : 0), p.z + sx * 0.7);

    // lean into turns and strafes, but keep the horizon readable
    let dyaw = this.camYaw - (this._prevCamYaw == null ? this.camYaw : this._prevCamYaw);
    while (dyaw > Math.PI) dyaw -= Math.PI * 2;
    while (dyaw < -Math.PI) dyaw += Math.PI * 2;
    this._prevCamYaw = this.camYaw;
    const rollTarget = Math.max(-1, Math.min(1, dyaw / Math.max(dt, 0.001) * 0.05)) * -0.05;
    this._roll = (this._roll || 0) + (rollTarget - (this._roll || 0)) * Math.min(1, dt * 7);

    this.camera.rotation.order = 'YXZ';
    if (down) {
      this.camera.rotation.x = -0.22 + this.pitch * 0.25;
      this.camera.rotation.y = this.camYaw + Math.sin(this.time * 0.35) * 0.12;
      this.camera.rotation.z = 0.63 + Math.sin(this.time * 0.6) * 0.02;
    } else {
      this.camera.rotation.x = this.pitch + sy * 0.14 + (e.sprint ? -0.02 : 0);
      this.camera.rotation.y = this.camYaw + sx * 0.12;
      this.camera.rotation.z = sx * 0.35 + this._roll + (e.hidden ? 0.02 : 0);
    }

    const targetFov = down ? 70 : e.sprint ? 79 : e.crouch ? 72 : 74;
    this._fov = this._fov == null ? targetFov : this._fov + (targetFov - this._fov) * Math.min(1, dt * 6);
    this.camera.fov = this._fov;
    this.camera.updateProjectionMatrix();
    this.flash.intensity = (e.torchOn || this.player.torchOn) && this.player.battery > 0 ? 7.2 : 0;
    this.flashGlow.intensity = this.flash.intensity > 0 ? 0.35 : 0;
  },

  updateEffects(dt) {
    this.noiseLevel = Math.max(0, this.noiseLevel - dt * 28);
    this.blood = Math.max(0, this.blood - dt * 1.1);
    const bloodEl = document.getElementById('fx-blood');
    if (bloodEl) bloodEl.style.opacity = String(Math.min(0.82, this.blood));
    const active = this.getControl();
    if (this.phase === 'skip' && this.principal && this.principal.active) {
      UI.setDetection(this.principal.detect > 0.18);
      if (this.principal.detect > 0.18) audio.setTension(0.55 + this.principal.detect * 0.45);
    } else if (active && this.killer.active) {
      const vis = this.killer.state === 'chase' && (this.killer.target === active) && this.killer.canSee(active);
      UI.setDetection(vis);
    } else UI.setDetection(false);
    // heartbeat under pressure / down
    const prox = this.proximity || 0;
    const down = this.state === 'down';
    this._heartTimer -= dt;
    if ((down || prox > 0.62) && this._heartTimer <= 0) {
      this._heartTimer = down ? 1.05 : 1.5 - prox * 0.55;
      audio.heartbeat(down ? 1 : prox);
    }
    if (!down && prox > 0.15) audio.setTension(0.22 + prox * 0.72);
  },

  updateUI(dt) {
    this._uiTimer -= dt;
    if (this._uiTimer > 0) return;
    this._uiTimer = 0.12;
    const e = this.getControl();
    UI.setMeters({
      hp: e ? e.hp : 0,
      noise: this.noiseLevel,
      stamina: e ? e.stamina : 0,
      battery: this.player.battery
    });
    UI.setTorch(this.player.torchOn, this.player.battery);
    UI.setNotes(this.player.notes);
    UI.updateBots(this);
    UI.drawMinimap(this);
    if (this.state === 'down' && this.downEntity) UI.setDownSecs(this.downEntity.downTimer);
    this.updateObjective(true);
  },

  // ── interactions ────────────────────────────────────────────
  onInteractPress() {
    if (this.noteOpen) { this.closeNote(); return; }
    if (this.state !== 'play' || !this.inputActive) return;
    const e = this.getControl();
    if (!e || e.downed || e.dead || e.escaped) return;
    if (e.hidden) {
      this.leaveHide();
      return;
    }
    // rescue a downed classmate (hold E)
    const mate = this.nearestDownedBot(2.15);
    if (mate) {
      this.rescueTarget = mate;
      this.rescueHold = 0;
      return;
    }
    const item = this.world.nearestItem(e.pos.x, e.pos.z, true);
    if (item) { this.collectItem(item, e); return; }
    if (this.nearExit(e)) { this.handleExit(e); return; }
    const door = this.world.nearestDoor(e.pos.x, e.pos.z, 2.5);
    if (door) { this.handleDoor(door); return; }
    const hide = this.world.nearestHide(e.pos.x, e.pos.z, 2.2);
    if (hide) { this.enterHide(hide); return; }
  },

  nearestDownedBot(max) {
    const e = this.getControl();
    let best = null, bd = max;
    for (const b of this.bots) {
      if (!b.downed || b.dead || b.escaped || b === e) continue;
      const d = Math.hypot(b.pos.x - e.pos.x, b.pos.z - e.pos.z);
      if (d < bd) { bd = d; best = b; }
    }
    return best;
  },

  updatePrompt(dt) {
    if (this.state !== 'play') { UI.prompt(null); return; }
    const e = this.getControl();
    if (!e || e.downed || e.escaped) { UI.prompt(null); return; }
    if (e.hidden) { UI.prompt('LEAVE HIDING', 0, 'E'); return; }
    const mate = this.nearestDownedBot(2.15);
    if (mate) {
      if (this.keysPressed['e']) {
        this.rescueTarget = mate;
        this.rescueHold += dt;
        UI.prompt(`RESCUING ${mate.name}`, this.rescueHold / 2.6, 'HOLD');
        if (this.rescueHold >= 2.6) {
          mate.revive(e);
          this.rescueHold = 0; this.rescueTarget = null;
          this.updateObjective();
        }
      } else {
        this.rescueHold = 0;
        UI.prompt(`RESCUE ${mate.name}`, 0, 'HOLD E');
      }
      return;
    }
    this.rescueHold = 0;
    const item = this.world.nearestItem(e.pos.x, e.pos.z, true);
    if (item) {
      const txt = item.kind === 'key' ? `TAKE KEY ${item.data.keyId}`
        : item.kind === 'crowbar' ? 'TAKE CROWBAR'
          : item.kind === 'battery' ? 'TAKE BATTERY'
            : item.kind === 'medkit' ? 'TAKE MEDKIT' : 'READ JOKE NOTE';
      UI.prompt(txt);
      return;
    }
    if (this.nearExit(e)) {
      if (!this.world.exit.unlocked) UI.prompt(this.hasKey(8) ? 'UNLOCK EXIT' : 'EXIT LOCKED — FIND KEY 8', 0, this.hasKey(8) ? 'E' : '!');
      else if (this.world.exit.barricaded) UI.prompt(this.player.crowbar ? 'PRY THE BARRICADE' : 'BARRICADED — NEED CROWBAR', 0, this.player.crowbar ? 'E' : '!');
      else UI.prompt('ESCAPE');
      return;
    }
    const door = this.world.nearestDoor(e.pos.x, e.pos.z, 2.5);
    if (door) {
      if (door.locked) UI.prompt(`DOOR ${door.label} — KEY ${door.label}`, 0, this.hasKey(door.label) ? 'E' : '!');
      else UI.prompt(door.open ? 'CLOSE DOOR' : 'OPEN DOOR');
      return;
    }
    const hide = this.world.nearestHide(e.pos.x, e.pos.z, 2.2);
    if (hide) { UI.prompt(hide.name === 'locker' ? 'HIDE IN LOCKER' : 'HIDE IN STALL'); return; }
    UI.prompt(null);
  },

  collectItem(item, by) {
    if (!item || item.picked) return;
    item.picked = true;
    item.mesh.visible = false;
    const bot = by && by !== this.player;
    if (item.kind === 'key') {
      const id = item.data.keyId;
      if (!this.player.keys.has(id)) {
        this.player.keys.add(id);
        if (id === 8) {
          this.world.unlockExit();
          this.toast('KEY 8 — exit lock released. Now find the crowbar.');
          this.radio('INTERCOM', 'Thank you for choosing the exit. Please hold for an axe.');
        } else {
          this.toast(`KEY ${id} acquired · ${this.player.keys.size}/8`);
        }
        audio.pickup();
        if (bot) by.directSay(`Found Key ${id}. Try to keep up.`);
      }
    } else if (item.kind === 'crowbar') {
      if (!this.player.crowbar) {
        this.player.crowbar = true;
        this.toast('CROWBAR acquired. Pry the east exit barricade.');
        audio.pickup();
        if (bot) by.directSay('I found the crowbar. It was in a weird place.');
      }
    } else if (item.kind === 'note') {
      this.player.notes++;
      this.stats.notes = this.player.notes;
      UI.setNotes(this.player.notes);
      audio.pickup();
      if (!bot) {
        const [title, body] = JOKE_NOTES[(this.player.notes - 1) % JOKE_NOTES.length];
        UI.note(title, body);
        this.noteOpen = true;
        this.setInputActive(false);
        try { document.exitPointerLock(); } catch {}
      } else by.directSay('I found a note. It says we are all going to die. Helpful.');
    } else if (item.kind === 'battery') {
      this.player.battery = Math.min(100, this.player.battery + 42);
      audio.pickup();
      this.toast('Battery +42%');
    } else if (item.kind === 'medkit') {
      const e = this.getControl();
      e.hp = Math.min(100, e.hp + 55);
      audio.pickup();
      this.toast('Medkit +55 HP');
    }
    this.updateObjective();
  },

  closeNote() {
    if (!this.noteOpen) return;
    this.noteOpen = false;
    UI.hideNote();
    if (this.state === 'play') this.setInputActive(true);
    this.canvas.requestPointerLock?.();
  },

  handleDoor(door) {
    if (door.locked) {
      if (this.hasKey(door.label)) {
        door.unlock();
        this.onDoorOpened(door, this.getControl());
        audio.unlock();
        this.toast(`Door ${door.label} unlocked.`);
        this.updateObjective();
      } else {
        audio.ui();
        this.toast(`Door ${door.label} is locked. Find Key ${door.label}.`);
      }
    } else if (!door.open) {
      door.setOpen(true);
      audio.door();
    }
  },

  onDoorOpened(door, by) {
    audio.unlock();
    if (by && by !== this.player && by.directSay) by.directSay(`Door ${door.label} is open.`);
    this.updateObjective();
  },

  nearExit(e) {
    return Math.hypot(e.pos.x - 58, e.pos.z) < 3.4;
  },

  handleExit(e) {
    if (!this.world.exit.unlocked) {
      if (this.hasKey(8)) {
        this.world.unlockExit();
        audio.unlock();
        this.toast('Exit unlocked. The barricade is still nailed shut.');
        this.updateObjective();
      } else {
        audio.ui();
        this.toast('The exit has an 8 lock. Find Key 8.');
      }
      return;
    }
    if (this.world.exit.barricaded) {
      if (this.player.crowbar) {
        this.world.pryExit();
        audio.unlock();
        audio.door();
        this.shakeScreen(0.4, 0.5);
        this.toast('Barricade torn open. GO.');
        this.updateObjective();
      } else {
        audio.ui();
        this.toast('The exit is barricaded with wood. You need a crowbar.');
      }
      return;
    }
    this.escapeActive(e);
  },

  enterHide(spot) {
    const e = this.getControl();
    if (!spot || spot.occupied) return;
    e.hidden = true;
    e.hideSpot = spot;
    e.pos.set(spot.enterX, 0, spot.enterZ);
    e.torchOn = false;
    this.player.torchOn = false;
    spot.occupied = true;
    this.camYaw = spot.yaw;
    audio.hide();
    this.toast(spot.type === 'locker' ? 'Hidden in a locker. Hold your breath.' : 'Hidden in a stall. Very dignified.');
  },

  leaveHide() {
    const e = this.getControl();
    if (!e || !e.hidden) return;
    if (e.hideSpot) e.hideSpot.occupied = false;
    e.hidden = false;
    e.hideSpot = null;
    audio.hide();
    this.toast('You step out. The hall is still awful.');
  },

  // ── damage / down / rescue ──────────────────────────────────
  damagePlayer(amount, source) {
    const e = this.getControl();
    if (!e || e.downed || e.dead || e.escaped || this.state === 'cutscene') return;
    e.hp = Math.max(0, e.hp - amount);
    this.bloodFlash(0.42);
    this.shakeScreen(0.75, 0.55);
    audio.breath();
    if (e === this.player) UI.setMeters({ hp: e.hp });
    if (e.hp <= 0) {
      if (this.state === 'play' && !e._jump) {
        e._jump = true;
        this.triggerJumpscare(e);
      } else if (this.state !== 'cutscene') {
        this.enterDown(e);
      }
    } else {
      UI.toast(`HIT — ${Math.ceil(e.hp)} HP`);
    }
  },

  triggerJumpscare(e) {
    this.state = 'cutscene';
    UI.showHud(false);
    UI.cinematic = true;
    this.afterCutscene = () => this.enterDown(e);
    this.cinematic.play('jumpscare', () => jumpscareShots(this.cinematic));
  },

  enterDown(e) {
    if (!e || e.dead || e.escaped || e.downed) return;
    e.downed = true;
    e.downTimer = DOWN_TIME;
    e.hp = 0;
    e.hidden = false;
    e.torchOn = false;
    this.player.torchOn = false;
    e.crouch = false;
    this.downEntity = e;
    if (e !== this.player) {
      if (e.goDown) e.goDown();
      else e.state = 'down';
    } else {
      this.player.downed = true;
    }
    this.state = 'down';
    this.setInputActive(false);
    UI.showHud(true);
    UI.setDown(true);
    UI.setDownSecs(DOWN_TIME);
    UI.prompt(null);
    audio.setUnderwater(true);
    audio.chaseStop();
    audio.alarmStop();
    this._heartTimer = 0;
    this.shakeScreen(0.9, 0.7);
    const hasHelp = this.bots.some(b => !b.dead && !b.escaped && !b.downed);
    if (e === this.player) UI.toast(hasHelp ? 'You are down. A classmate is trying to reach you.' : 'You are down. Nobody is coming.');
    this.updateObjective();
  },

  updateDown(dt) {
    const e = this.downEntity;
    if (!e || !e.downed) {
      if (this.state === 'down') this.reviveActive();
      return;
    }
    e.downTimer = Math.max(0, e.downTimer - dt);
    UI.setDownSecs(e.downTimer);
    if (e !== this.player) { e.downTimer = e.downTimer; }
    this.proximity = 0;
    this._heartTimer -= dt;
    if (this._heartTimer <= 0) {
      this._heartTimer = 1.05;
      audio.heartbeat(1);
    }
    if (e.downTimer <= 0) {
      this.dieActive();
    }
  },

  reviveActive() {
    if (!this.downEntity) return;
    const e = this.downEntity;
    e.downed = false;
    e.hp = Math.max(45, e.hp);
    e.downTimer = 0;
    if (e !== this.player && e.revive) e.revive(e);
    this.downEntity = null;
    this.state = 'play';
    this.setInputActive(true);
    UI.setDown(false);
    audio.setUnderwater(false);
    this.camYaw = (e.yaw || 0) + Math.PI;
    this.pitch = 0;
    this._heartTimer = 0;
    this.updateObjective();
  },

  revivePlayerBy(bot) {
    if (!this.downEntity) return;
    const e = this.downEntity;
    if (e === this.player) {
      this.player.downed = false;
      this.player.hp = 55;
      this.player.downTimer = 0;
      this.downEntity = null;
      this.state = 'play';
      this.setInputActive(true);
      UI.setDown(false);
      audio.setUnderwater(false);
      audio.door();
      UI.toast(`${bot.name} pulled you up. You have 55 HP.`);
      UI.subtitle(bot.name, 'Up you get. You are not dying in a school.', 2.8);
      this.updateObjective();
    } else if (e === this.controlledBot || this.bots.includes(e)) {
      e.revive?.(bot);
      this.downEntity = null;
      this.state = 'play';
      this.setInputActive(true);
      UI.setDown(false);
      audio.setUnderwater(false);
      this.camYaw = (e.yaw || 0) + Math.PI;
      this.updateObjective();
    }
  },

  dieActive() {
    const e = this.downEntity;
    if (!e) return;
    e.downed = false;
    e.dead = true;
    UI.setDown(false);
    audio.setUnderwater(false);
    audio.alarmStop();
    if (e === this.player) {
      this.player.dead = true;
      this.downEntity = null;
      this.state = 'limbo';
      UI.chapter('YOU DID NOT SURVIVE', 'CONTROL A CLASSMATE', 3000);
      const next = this.chooseNextBot();
      if (next) setTimeout(() => this.switchToBot(next, 'YOU DID NOT MAKE IT'), 1800);
      else this.startJakeReveal();
    } else {
      if (e === this.controlledBot) {
        this.controlledBot = null;
        this.avatar = this.player;
        e.controlled = false;
      }
      e.die?.();
      this.downEntity = null;
      const next = this.chooseNextBot();
      if (next) setTimeout(() => this.switchToBot(next, `${e.name} DID NOT MAKE IT`), 1200);
      else this.startJakeReveal();
    }
  },

  chooseNextBot() {
    return this.bots.find(b => !b.dead && !b.escaped && !b.downed) || null;
  },

  switchToBot(bot, reason = 'SURVIVOR') {
    if (!bot || bot.dead || bot.escaped || bot.downed) { this.finishRun(); return; }
    if (this.controlledBot && this.controlledBot !== bot) {
      this.controlledBot.controlled = false;
      this.controlledBot.model.visible = !this.controlledBot.escaped;
      if (this.controlledBot.model.userData.nameSprite) this.controlledBot.model.userData.nameSprite.visible = true;
    }
    this.controlledBot = bot;
    this.avatar = bot;
    bot.controlled = true;
    bot.model.visible = false;
    bot.state = 'follow';
    bot.downed = false;
    bot.hp = Math.max(45, bot.hp);
    this.player.downed = false;
    this.player.hidden = false;
    this.player.torchOn = false;
    this.downEntity = null;
    this.state = 'play';
    this.pendingSwitch = 0;
    this.setInputActive(true);
    this.camYaw = (bot.yaw || 0) + Math.PI;
    this.pitch = 0;
    this.culler?.entries.forEach(e => { e.blocked = 0; });
    UI.setDown(false);
    UI.showHud(true);
    UI.showPov(`${bot.name} · ${reason}`);
    UI.chapter('POV SWITCH', `NOW CONTROLLING ${bot.name}`, 2600);
    this.toast(`You are ${bot.name}. Get to the exit.`);
    bot.directSay('Okay. Okay okay okay. I can do this.');
    audio.setUnderwater(false);
    audio.startAmbience();
    this.updateObjective();
    this.canvas.requestPointerLock?.();
  },

  // ── escape & endings ────────────────────────────────────────
  escapeActive(e) {
    if (!e || e.escaped || e.dead) return;
    e.escaped = true;
    e.downed = false;
    e.speed = 0;
    e.torchOn = false;
    playerTorchOff(this);
    audio.win();
    audio.alarmStop();
    audio.chaseStop();
    UI.showHud(false);
    UI.setDown(false);
    if (e === this.player) {
      this.player.escaped = true;
      this.downEntity = null;
      this.state = 'limbo';
      this.setInputActive(false);
      UI.chapter('YOU MADE IT OUTSIDE', 'THE OTHERS ARE STILL INSIDE', 3000);
      this.updateObjective();
      const next = this.chooseNextBot();
      if (next) {
        this._switchReason = 'STILL INSIDE';
        this.pendingSwitch = 2.0;
      } else {
        setTimeout(() => this.finishRun(), 900);
      }
    } else {
      if (e === this.controlledBot) {
        this.controlledBot = null;
        this.avatar = this.player;
        e.controlled = false;
      }
      e.escape?.();
      this.state = 'limbo';
      UI.showHud(false);
      const next = this.chooseNextBot();
      if (next) { this._switchReason = 'STILL INSIDE'; this.pendingSwitch = 1.2; }
      else setTimeout(() => this.finishRun(), 1000);
    }
  },

  onBotDead(bot) {
    this.toast(`${bot.name} is gone.`);
    if (this.controlledBot === bot) {
      this.controlledBot = null;
      this.avatar = this.player;
      this.state = 'limbo';
      const next = this.chooseNextBot();
      if (next) setTimeout(() => this.switchToBot(next, `${bot.name} DID NOT MAKE IT`), 1200);
      else this.startJakeReveal();
    } else if (this.bots.every(b => b.dead)) {
      if (this.player.escaped || this.player.dead || !this.playerInPlay()) this.startJakeReveal();
    }
  },

  onBotEscaped(bot) {
    this.toast(`${bot.name} made it outside.`);
    if (this.controlledBot === bot) {
      this.controlledBot = null;
      this.avatar = this.player;
      this.state = 'limbo';
      const next = this.chooseNextBot();
      if (next) { this._switchReason = 'STILL INSIDE'; this.pendingSwitch = 1.2; }
      else setTimeout(() => this.finishRun(), 1000);
    }
  },

  playerInPlay() {
    return !this.player.dead && !this.player.escaped;
  },

  finishRun() {
    if (this.stats.finished) return;
    this.stats.finished = true;
    const survivors = this.bots.filter(b => b.escaped).length + (this.player.escaped ? 1 : 0);
    const anyDead = this.bots.every(b => b.dead) && !this.player.escaped;
    this.state = 'cutscene';
    UI.showHud(false);
    audio.setUnderwater(false);
    audio.alarmStop();
    audio.chaseStop();
    UI.fade(true, 700);
    setTimeout(() => {
      if (anyDead || survivors === 0) {
        UI.fade(false, 900);
        this.startJakeReveal(true);
      } else {
        // Everyone got out... except the one who was guarding the toilets.
        this.startForgotJake();
      }
    }, 800);
  },

  startForgotJake() {
    if (this._forgotStarted) return;
    this._forgotStarted = true;
    this.state = 'cutscene';
    UI.showHud(false);
    UI.setDown(false);
    audio.setUnderwater(false);
    audio.alarmStop();
    audio.chaseStop();
    this.afterCutscene = () => this.startJakeReveal();
    setTimeout(() => {
      UI.fade(false, 900);
      this.cinematic.play('forgot', () => forgotJakeShots(this.cinematic));
    }, 500);
  },

  startJakeReveal(fromEnding = false) {
    if (this._jakeStarted) return;
    this._jakeStarted = true;
    this.state = 'cutscene';
    UI.showHud(false);
    UI.setDown(false);
    audio.setUnderwater(false);
    audio.alarmStop();
    audio.chaseStop();
    this.afterCutscene = () => this.startPoliceEnding();
    setTimeout(() => {
      UI.fade(false, 700);
      this.cinematic.play('jake', () => jakeRevealShots(this.cinematic));
    }, 650);
  },

  startPoliceEnding() {
    if (this._policeStarted) return;
    this._policeStarted = true;
    UI.fade(false, 700);
    this.state = 'cutscene';
    this.afterCutscene = () => this.showWin();
    setTimeout(() => {
      this.cinematic.play('police', () => policeShots(this.cinematic));
    }, 300);
  },

  showWin() {
    if (this.state === 'win') return;
    this.state = 'win';
    UI.showHud(false);
    UI.showCine(false);
    UI.letterbox(false);
    UI.setDown(false);
    audio.setUnderwater(false);
    audio.stopAmbience();
    audio.alarmStop();
    audio.chaseStop();
    audio.win();
    this.pendingSwitch = 0;
    UI.fade(false, 800);
    const minutes = Math.floor((performance.now() - this.stats.started) / 60000);
    const secs = Math.floor(((performance.now() - this.stats.started) % 60000) / 1000);
    const survivors = this.bots.filter(b => b.escaped).length + (this.player.escaped ? 1 : 0);
    const stats = `KEYS RECOVERED: ${this.player.keys.size} / 8<br>CROWBAR: ${this.player.crowbar ? 'YES' : 'NO'}<br>JOKE NOTES: ${this.player.notes} / 7<br>SURVIVORS: ${survivors}<br>TIME: ${minutes}m ${String(secs).padStart(2, '0')}s`;
    UI.win('FINAL GRADE: Q+', stats, survivors >= 2 ? 'You reached the police station with people. The report cards did not survive.' : 'You reached the police station. The group chat will never recover.');
  },

  // ── pause / objective / misc ────────────────────────────────
  togglePause(force) {
    if (this.state === 'cutscene' || this.state === 'win' || this.state === 'caught' || this.noteOpen) return;
    const pause = force !== undefined ? force : this.state !== 'paused';
    this.paused = pause;
    if (pause) {
      this._prevState = this.state;
      this.state = 'paused';
      this.setInputActive(false);
      UI.showScreen('pause-screen');
      UI.showHud(false);
      try { document.exitPointerLock(); } catch {}
    } else {
      this.state = this._prevState || 'play';
      UI.hideScreens();
      UI.showHud(true);
      this.setInputActive(true);
      this.canvas.requestPointerLock?.();
    }
  },

  toggleTorch() {
    if (this.state !== 'play' || this.noteOpen) return;
    const e = this.getControl();
    if (!e || e.downed || e.escaped) return;
    if (this.player.battery <= 0) { this.toast('Flashlight battery is dead.'); return; }
    this.player.torchOn = !this.player.torchOn;
    e.torchOn = this.player.torchOn;
    audio.ui();
    UI.setTorch(this.player.torchOn, this.player.battery);
  },

  updateObjective(force = false) {
    this._objectiveTimer -= 1;
    if (!force && this._objectiveTimer > 0) return;
    this._objectiveTimer = 10;
    const totalKeys = this.player.keys.size;
    const crowbar = this.player.crowbar ? 'found' : 'missing';
    const sub = `${totalKeys}/8 keys · crowbar ${crowbar}`;
    if (this.phase === 'skip') {
      UI.setObjective(
        'Skip class. Reach the toilets with Jake.',
        'Principal Okafor patrols the hall. Wait for him to pass, crouch (C), and do not get seen.'
      );
      return;
    }
    if (this.player.escaped || this.controlledBot) {
      if (this.controlledBot) {
        UI.setObjective(`${this.controlledBot.name}: escape through the east exit.`, sub);
      } else {
        UI.setObjective('The others are still inside.', sub);
      }
      return;
    }
    if (!this.player.keys.has(8)) {
      let missing = 1;
      while (missing <= 8 && this.player.keys.has(missing)) missing++;
      if (missing === 1) UI.setObjective('Find Key 1 outside Room 101.', 'It is in the hall. The hall with the axe.');
      else if (missing <= 8) UI.setObjective(`Find Key ${missing}. It is behind Door ${missing - 1}.`, sub);
      else UI.setObjective('All keys found. Pry the exit barricade.', sub);
      return;
    }
    if (!this.player.crowbar) {
      UI.setObjective('Find the crowbar. It is somewhere unlocked.', 'The exit needs wood removal. Wood removal needs crowbar.');
      return;
    }
    if (!this.world.exit.open) {
      UI.setObjective('Pry the barricade at the east exit.', 'Door 8 is unlocked. Wood is still a problem.');
      return;
    }
    UI.setObjective('Get to the police station. Do not look back.', sub);
  }
});

function playerTorchOff(game) { game.player.torchOn = false; }

// ─────────────────────────────────────────────────────────────
// boot
// ─────────────────────────────────────────────────────────────
const game = new Game(document.getElementById('scene'));
game.init();
window.__game = game;
