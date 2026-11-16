import * as THREE from 'three';
import { buildFurnitureCompound } from './world.js';
import { buildStoreInterior } from './interior.js';
import { buildTruckScene } from './escape.js';
import {
  createTruck, createAsh, box, plane, MAT, bloodDecal
} from './models.js';
import { glowTexture } from './textures.js';
import { TimCharacter, createMace, createJake } from './characters.js';
import { audio } from './audio.js';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const damp = (a, b, lambda, dt) => a + (b - a) * (1 - Math.exp(-lambda * dt));

function lerpAngle(a, b, t) {
  let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}

function markerMesh() {
  const g = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color: 0xffb168, transparent: true, opacity: 0.85, depthWrite: false, blending: THREE.AdditiveBlending });
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.28, 0.36, 24), new THREE.MeshBasicMaterial({ color: 0xffb168, transparent: true, opacity: 0.5, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending }));
  ring.rotation.x = -Math.PI / 2; g.add(ring);
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 2.6, 6, 1, true), new THREE.MeshBasicMaterial({ color: 0xffb168, transparent: true, opacity: 0.18, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
  beam.position.y = 1.3; g.add(beam);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,190,120,1)', 'rgba(255,130,60,0)'), color: 0xffc28a, transparent: true, opacity: 0.65, depthWrite: false, blending: THREE.AdditiveBlending }));
  glow.position.y = 2.7; glow.scale.set(1.1, 1.1, 1); g.add(glow);
  g.userData = { ring, beam, glow };
  return g;
}

export class Game {
  constructor({ onEnd, onStory, showChoice, hideChoice, setChoiceTimer, onCaption, onChapterCard, onFade, onFlash, onPrompt, onTutorial, onObjective, onCrouchHint }) {
    this.callbacks = { onEnd, onStory, showChoice, hideChoice, setChoiceTimer, onCaption, onChapterCard, onFade, onFlash, onPrompt, onTutorial, onObjective, onCrouchHint };
    this.scene = null;
    this.camera = null;
    this.paused = false;
    this.disposed = false;
    this.sensitivity = Number(localStorage.getItem('lastcan_sens') || 1);
    this.state = 'active'; // active | choice | sequence | done
    this.keys = {};
    this.crouch = false;
    this.crouchAmt = 0;
    this.running = false;
    this.yaw = 0;
    this.pitch = 0.12;
    this.move = new THREE.Vector2(0, 0);
    this.touchMove = new THREE.Vector2(0, 0);
    this.joystickId = null;
    this.lookId = null;
    this.lastLook = { x: 0, y: 0 };
    this.tasks = [];
    this.shards = [];
    this.shardsGroup = null;
    this.branch = null;
    this.choiceTime = 24;
    this.choiceMax = 24;
    this.inside = false;
    this.tutorialShown = false;
    this.tutorialTimer = 0;
    this.captionTimer = 0;
    this.stepTimer = 0;
    this.doorTriggered = false;
    this.startTime = performance.now();
    this.time = 0;
    this.lookHintDismissed = false;
    this.cameraLook = new THREE.Vector3();
    this.tmpV = new THREE.Vector3();
    this.objects = [];
    this.isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;

    /* chapter state */
    this.phase = 'lot';            // lot | store | chase | truck
    this.choiceKind = null;        // doors | standoff | gate
    this.interior = null;
    this.mace = null;
    this.jake = null;
    this.truck = null;
    this.cansFound = 0;
    this.totalCans = 10;
    this.fuelTaken = false;
    this.timHasGun = false;
    this.readNote = false;
    this.sawBlood = false;
    this.standoffStarted = false;
    this.keypadUnlocked = false;
    this.keypadEntry = '';
    this.keypadOpen = false;
    this.escape = null;
    this.qte = null;
    this.dead = false;
    this.escapeAttempts = 0;
    this.branchLabel = '';
    this.chaseChoice = '';
    this.truckCam = { pos: new THREE.Vector3(0.32, 1.42, 0.02), look: new THREE.Vector3(-0.28, 1.32, 1.72) };
    this.bindEvents();
    this.initKeypad();
  }

  build() {
    const scene = new THREE.Scene();
    this.scene = scene;
    const compound = this.compound = buildFurnitureCompound(scene, { cutscene: false });
    this.camera = new THREE.PerspectiveCamera(52, window.innerWidth / Math.max(1, window.innerHeight), 0.08, 500);

    // player
    this.tim = new TimCharacter();
    this.tim.group.position.copy(compound.spawn);
    this.tim.group.rotation.y = Math.PI;
    scene.add(this.tim.group);
    this.player = this.tim.group;

    // the truck he arrived in
    const truck = createTruck({ headlights: false });
    truck.position.set(8.2, 0, 24.8);
    truck.rotation.y = Math.PI + 0.08;
    scene.add(truck);
    // a couple of extra bits outside the gate
    const extra = createAsh({ count: 200, area: 60, height: 14, color: 0xbcb29a, size: 0.03, seed: 33 });
    scene.add(extra.points);
    this.extraAsh = extra;

    // objective markers
    this.holeMarker = markerMesh();
    this.holeMarker.position.set(compound.holeX, 0.1, 11.4);
    this.holeMarker.scale.setScalar(0.8);
    scene.add(this.holeMarker);
    this.doorMarker = markerMesh();
    this.doorMarker.position.set(0, 0.1, -14.2);
    this.doorMarker.visible = false;
    scene.add(this.doorMarker);
    compound.ventMarker.visible = false;

    // door glass panes
    this.doorPanes = [];
    compound.doors.traverse(o => {
      if (o.isMesh && o.material && o.material.transparent && o.material.opacity < 0.5) this.doorPanes.push(o);
    });

    // starting camera
    this.camera.position.set(0, 2.6, 27.4);
    this.cameraLook.set(0, 1.5, 12);
    this.camera.lookAt(this.cameraLook);
    this.inside = false;

    this.callbacks.onObjective?.('FIND A WAY PAST THE GATE', 'The store looks sealed. Look for a weakness.');
    this.callbacks.onCrouchHint?.(false);
    this.callbacks.onChapterCard?.(true);
    setTimeout(() => { if (!this.disposed) this.callbacks.onChapterCard?.(false); }, 4600);
    audio.setAmbientScene('gameplay');
    audio.setMood('tense');
    this.callbacks.onFade?.(0);
    this.updateHudState();

    // initial look hint
    if (this.isTouch) {
      document.getElementById('mobileUI')?.classList.remove('hidden');
      document.getElementById('controlsHint')?.classList.add('hidden');
    } else {
      document.getElementById('lookHint')?.classList.remove('hide');
    }
    this.running = true;
  }

  /* ------------------------------ input ------------------------------ */
  bindEvents() {
    this.onKeyDown = (e) => {
      if (e.repeat) return;
      const k = e.key.toLowerCase();
      if (['w', 'a', 's', 'd', 'c', 'shift', 'e', '1', '2', 'enter', 'arrowup', 'arrowdown', ' ', 'arrowright'].includes(k)) e.preventDefault();
      if (this.keypadOpen) { this.handleKeypadKey(k, e); return; }
      if (this.noteOpen) { if (k === 'e' || k === 'enter' || k === ' ') this.closeNote(); return; }
      if (this.qte) { if (k === ' ' || k === 'enter' || k === 'arrowright' || k === 'd' || k === 'arrowdown' || k === 's') this.qteInput(k); return; }
      this.keys[k] = true;
      if (k === 'c' && this.state === 'active') {
        this.setCrouch(true);
        if (!this.tutorialShown) this.dismissTutorial();
      }
      if (k === 'e' && this.state === 'active') this.interact();
      if ((k === '1' || k === '2') && this.state === 'choice') this.choose(k === '1' ? 0 : 1);
      if (k === 'arrowup' || k === 'w') { /* no-op */ }
      if (k === 'enter' && this.state === 'choice') this.choose(1);
    };
    this.onKeyUp = (e) => {
      const k = e.key.toLowerCase();
      this.keys[k] = false;
      if (k === 'c') this.setCrouch(false);
    };
    this.onBlur = () => { this.keys = {}; this.setCrouch(false); };
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('blur', this.onBlur);

    const canvas = document.getElementById('scene');
    this.onCanvasDown = (e) => {
      if (this.state !== 'active') return;
      if (e.pointerType === 'touch') {
        this.lookId = e.pointerId;
        this.lastLook = { x: e.clientX, y: e.clientY };
        canvas.setPointerCapture(e.pointerId);
        this.dismissLookHint();
        return;
      }
      if (document.pointerLockElement !== canvas) {
        canvas.requestPointerLock?.();
      }
    };
    this.onCanvasMove = (e) => {
      if (this.state !== 'active') return;
      if (e.pointerType === 'touch' && this.lookId === e.pointerId) {
        const dx = e.clientX - this.lastLook.x;
        const dy = e.clientY - this.lastLook.y;
        this.lastLook = { x: e.clientX, y: e.clientY };
        this.yaw -= dx * 0.005 * this.sensitivity;
        this.pitch = clamp(this.pitch + dy * 0.0035 * this.sensitivity, -0.18, 0.72);
      }
    };
    this.onCanvasUp = (e) => {
      if (this.lookId === e.pointerId) this.lookId = null;
    };
    this.onMouseMove = (e) => {
      if (this.state !== 'active') return;
      if (document.pointerLockElement === canvas) {
        this.yaw -= e.movementX * 0.0022 * this.sensitivity;
        this.pitch = clamp(this.pitch + e.movementY * 0.0017 * this.sensitivity, -0.18, 0.72);
        this.dismissLookHint();
      }
    };
    this.onPointerLock = () => {
      if (document.pointerLockElement === canvas) this.dismissLookHint();
    };
    canvas.addEventListener('pointerdown', this.onCanvasDown);
    canvas.addEventListener('pointermove', this.onCanvasMove);
    canvas.addEventListener('pointerup', this.onCanvasUp);
    canvas.addEventListener('pointercancel', this.onCanvasUp);
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('pointerlockchange', this.onPointerLock);

    // joystick
    const joy = document.getElementById('joystick');
    const stick = joy?.querySelector('.stick');
    if (joy && stick) {
      this.onJoyDown = (e) => {
        e.stopPropagation(); e.preventDefault();
        this.joystickId = e.pointerId;
        joy.setPointerCapture(e.pointerId);
        this.updateJoystick(e, joy, stick);
      };
      this.onJoyMove = (e) => {
        if (this.joystickId !== e.pointerId) return;
        e.stopPropagation(); e.preventDefault();
        this.updateJoystick(e, joy, stick);
      };
      this.onJoyUp = (e) => {
        if (this.joystickId !== e.pointerId) return;
        this.joystickId = null;
        this.touchMove.set(0, 0);
        stick.style.transform = 'translate(0px, 0px)';
      };
      joy.addEventListener('pointerdown', this.onJoyDown);
      joy.addEventListener('pointermove', this.onJoyMove);
      joy.addEventListener('pointerup', this.onJoyUp);
      joy.addEventListener('pointercancel', this.onJoyUp);
    }
    const crouchBtn = document.getElementById('crouchBtn');
    if (crouchBtn) {
      this.onCrouchDown = (e) => { e.preventDefault(); this.setCrouch(true); if (!this.tutorialShown) this.dismissTutorial(); };
      this.onCrouchUp = (e) => { e.preventDefault(); this.setCrouch(false); };
      crouchBtn.addEventListener('pointerdown', this.onCrouchDown);
      crouchBtn.addEventListener('pointerup', this.onCrouchUp);
      crouchBtn.addEventListener('pointercancel', this.onCrouchUp);
      crouchBtn.addEventListener('pointerleave', (e) => { if (this.crouch) this.setCrouch(false); });
    }
    const interactBtn = document.getElementById('interactBtn');
    if (interactBtn) {
      this.onInteractBtn = (e) => { e.preventDefault(); this.interact(); };
      interactBtn.addEventListener('pointerdown', this.onInteractBtn);
    }

    // quick action dial
    const dial = document.getElementById('qteTap');
    if (dial) {
      this.onDialDown = (e) => {
        e.preventDefault();
        if (!this.qte) return;
        this.qteSwipeStart = { x: e.clientX, y: e.clientY, t: performance.now() };
        if (this.qte.mode === 'tap') this.qteInput('tap');
      };
      this.onDialUp = (e) => {
        if (!this.qte || !this.qteSwipeStart) return;
        const dx = e.clientX - this.qteSwipeStart.x;
        const dy = e.clientY - this.qteSwipeStart.y;
        this.qteSwipeStart = null;
        if (this.qte.mode === 'swipeRight' && dx > 55) this.qteInput('swipe');
        if (this.qte.mode === 'swipeDown' && dy > 55) this.qteInput('swipe');
      };
      dial.addEventListener('pointerdown', this.onDialDown);
      dial.addEventListener('pointerup', this.onDialUp);
      dial.addEventListener('pointercancel', () => { this.qteSwipeStart = null; });
    }
    document.getElementById('keypadClose')?.addEventListener('click', () => this.closeKeypad());
    document.getElementById('noteClose')?.addEventListener('click', () => this.closeNote());
  }

  /* ------------------------------ keypad ------------------------------ */
  initKeypad() {
    const grid = document.getElementById('keypadGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const keys = ['1','2','3','4','5','6','7','8','9','CLR','0','OK'];
    for (const key of keys) {
      const b = document.createElement('button');
      b.className = 'keypad-key' + (key === 'CLR' ? ' clr' : key === 'OK' ? ' ok' : '');
      b.textContent = key;
      b.addEventListener('click', () => this.pressKeypad(key));
      grid.appendChild(b);
    }
  }

  openKeypad() {
    if (this.keypadOpen) return;
    this.keypadOpen = true;
    this.keypadEntry = '';
    this.state = 'sequence';
    this.callbacks.onPrompt?.(null);
    document.getElementById('keypad')?.classList.remove('hidden');
    document.getElementById('keypadDisplay')?.classList.remove('denied');
    this.updateKeypadDisplay();
    const msg = document.getElementById('keypadMsg');
    if (msg) msg.textContent = 'ENTER 6 DIGITS';
    audio.ui();
  }

  closeKeypad() {
    if (!this.keypadOpen) return;
    this.keypadOpen = false;
    document.getElementById('keypad')?.classList.add('hidden');
    if (this.state === 'sequence') this.state = 'active';
  }

  updateKeypadDisplay() {
    const el = document.getElementById('keypadDisplay');
    if (el) el.textContent = (this.keypadEntry + '------').slice(0, 6);
  }

  pressKeypad(key) {
    if (!this.keypadOpen) return;
    if (key === 'CLR') { this.keypadEntry = ''; this.updateKeypadDisplay(); audio.hover(); return; }
    if (key === 'OK') { this.submitKeypad(); return; }
    if (this.keypadEntry.length >= 6) return;
    this.keypadEntry += key;
    this.updateKeypadDisplay();
    audio.hover();
    if (this.keypadEntry.length === 6) setTimeout(() => this.submitKeypad(), 240);
  }

  handleKeypadKey(k, e) {
    if (k === 'escape') { this.closeKeypad(); return; }
    if (k === 'backspace') { this.keypadEntry = this.keypadEntry.slice(0, -1); this.updateKeypadDisplay(); return; }
    if (k === 'enter') { this.submitKeypad(); return; }
    if (/^[0-9]$/.test(k)) this.pressKeypad(k);
  }

  submitKeypad() {
    if (!this.keypadOpen || this.keypadEntry.length < 6) return;
    if (this.keypadEntry === '261212') {
      this.keypadUnlocked = true;
      this.keypadOpen = false;
      document.getElementById('keypad')?.classList.add('hidden');
      document.getElementById('keypadMsg').textContent = 'ACCESS GRANTED';
      this.interior?.openKeypadDoor();
      this.interior?.showKeyMarker(false);
      audio.doorCreak();
      audio.tone({ freq: 180, dur: 0.5, gain: 0.1, type: 'square', slide: 0.4, delay: 0.15 });
      this.state = 'active';
      this.callbacks.onObjective?.('GET THE FUEL', 'The fuel room is open. Take the red can.');
      this.caption('TIM', 'Twenty-six. Twelve. Twelve.', 3.0);
      this.caption('', 'The lock gave a tired click.', 2.8);
    } else {
      const disp = document.getElementById('keypadDisplay');
      disp?.classList.add('denied');
      const msg = document.getElementById('keypadMsg');
      if (msg) msg.textContent = 'DENIED';
      audio.sting();
      this.keypadEntry = '';
      setTimeout(() => {
        disp?.classList.remove('denied');
        this.updateKeypadDisplay();
        if (msg) msg.textContent = 'ENTER 6 DIGITS';
      }, 750);
    }
  }

  /* ------------------------------ note ------------------------------ */
  showNote() {
    this.noteOpen = true;
    this.state = 'sequence';
    this.readNote = true;
    this.callbacks.onPrompt?.(null);
    document.getElementById('noteOverlay')?.classList.remove('hidden');
    audio.paper?.();
    audio.ui();
  }

  closeNote() {
    if (!this.noteOpen) return;
    this.noteOpen = false;
    document.getElementById('noteOverlay')?.classList.add('hidden');
    if (this.state === 'sequence') this.state = 'active';
  }

  updateJoystick(e, joy, stick) {
    const rect = joy.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    let dx = e.clientX - cx, dy = e.clientY - cy;
    const max = rect.width * 0.36;
    const len = Math.hypot(dx, dy);
    if (len > max) { dx = dx / len * max; dy = dy / len * max; }
    stick.style.transform = `translate(${dx}px, ${dy}px)`;
    this.touchMove.set(dx / max, dy / max);
  }

  setCrouch(v) {
    this.crouch = v;
    document.getElementById('crouchHint')?.classList.toggle('glow', v);
    document.getElementById('crouchBtn')?.classList.toggle('active', v);
    if (v) audio.cloth();
  }

  dismissTutorial() {
    if (!this.tutorialShown) return;
    this.tutorialTimer = 0;
    this.callbacks.onTutorial?.(false);
    this.callbacks.onCrouchHint?.(false);
    document.getElementById('crouchBtn')?.classList.remove('pulse');
    document.getElementById('crouchHint')?.classList.remove('glow');
  }

  dismissLookHint() {
    if (this.lookHintDismissed) return;
    this.lookHintDismissed = true;
    document.getElementById('lookHint')?.classList.add('hide');
  }

  /* ------------------------------ update ------------------------------ */
  update(dt) {
    if (!this.running || this.disposed) return;
    if (this.paused) return;
    dt = Math.min(dt, 0.05);
    this.time += dt;
    this.updateTasks(dt);

    if (this.phase === 'truck') {
      this.truck?.update(dt, this.time);
      this.tim?.updateFace(dt);
    } else if (this.phase === 'store') {
      if (this.state === 'active') this.updateStorePlayer(dt);
      else if (this.state === 'choice') this.updateChoice(dt);
      else { this.tim?.update(dt); this.mace?.update(dt); }
      this.interior?.animate(dt, this.time);
      this.interior?.updateDoorAnimation(dt);
      this.updateStorePrompt();
    } else if (this.phase === 'chase') {
      if (this.state === 'active') this.updateChasePlayer(dt);
      else if (this.state === 'choice') this.updateChoice(dt);
      else { this.tim?.update(dt); this.jake?.update(dt); this.mace?.update(dt); }
      this.compound?.animate?.(dt, this.time);
    } else {
      if (this.state === 'active') this.updatePlayer(dt);
      else if (this.state === 'choice') this.updateChoice(dt);
      else { this.tim?.update(dt); }
      this.compound?.animate?.(dt, this.time);
      this.extraAsh?.update(dt, this.time);
    }

    this.updateQTE(dt);
    this.updateEscapeTimer(dt);
    this.updateShards(dt);
    this.updateMarkers(dt);
    this.updateCamera(dt);
    this.updateCaption(dt);
    audio.update(dt);

    // hide tutorial after time
    if (this.tutorialShown && this.tutorialTimer > 0) {
      this.tutorialTimer -= dt;
      if (this.tutorialTimer <= 0) this.dismissTutorial();
    }
    // close pointer lock when not active
    if (this.state !== 'active' && document.pointerLockElement) document.exitPointerLock?.();
  }

  updateTasks(dt) {
    if (!this.tasks.length) return;
    const remaining = [];
    for (const task of this.tasks) {
      task.t += dt;
      let u = Math.min(1, task.t / task.duration);
      const e = task.ease === false ? u : u * u * (3 - 2 * u);
      try { task.fn?.(e, dt); } catch (err) { console.warn(err); }
      if (u >= 1) task.resolve?.(); else remaining.push(task);
    }
    this.tasks = remaining;
  }

  wait(duration) { return new Promise(resolve => this.tasks.push({ t: 0, duration, fn: null, resolve })); }
  tween(duration, fn, ease = true) { return new Promise(resolve => this.tasks.push({ t: 0, duration, fn, resolve, ease })); }

  updatePlayer(dt) {
    // input
    let ix = 0, iz = 0;
    if (this.keys['w'] || this.keys['arrowup']) iz -= 1;
    if (this.keys['s'] || this.keys['arrowdown']) iz += 1;
    if (this.keys['a']) ix -= 1;
    if (this.keys['d']) ix += 1;
    ix += this.touchMove.x;
    iz += this.touchMove.y;
    const len = Math.hypot(ix, iz);
    if (len > 1) { ix /= len; iz /= len; }
    const moving = len > 0.12;
    const running = !!this.keys['shift'];
    const targetCrouch = this.crouch ? 1 : 0;
    this.crouchAmt = damp(this.crouchAmt, targetCrouch, 9, dt);
    this.tim.setCrouch(this.crouchAmt);
    this.tim.setGun(false);

    if (moving) {
      // camera-relative movement
      const fwdX = -Math.sin(this.yaw), fwdZ = -Math.cos(this.yaw);
      const rightX = Math.cos(this.yaw), rightZ = -Math.sin(this.yaw);
      let vx = fwdX * -iz + rightX * ix;
      let vz = fwdZ * -iz + rightZ * ix;
      const vlen = Math.hypot(vx, vz) || 1;
      vx /= vlen; vz /= vlen;
      const speed = this.crouch ? 1.45 : (running ? 4.5 : 2.85);
      this.move.set(vx, vz);
      this.tryMove(vx * speed * dt, vz * speed * dt);
      const targetRot = Math.atan2(vx, vz);
      this.player.rotation.y = lerpAngle(this.player.rotation.y, targetRot, 1 - Math.exp(-12 * dt));
      this.stepTimer -= dt;
      if (this.stepTimer <= 0) {
        this.stepTimer = this.crouch ? 0.62 : (running ? 0.3 : 0.44);
        audio.step(running);
      }
      this.tim.setLocomotion(speed, dt);
    } else {
      this.tim.setLocomotion(0, dt);
    }
    this.tim.update(dt);

    // fence crossing rules
    const z = this.player.position.z;
    this.inside = z < 12;
    this.checkTriggers();
    this.updateHudState();
  }

  updateStorePlayer(dt) {
    let ix = 0, iz = 0;
    if (this.keys['w'] || this.keys['arrowup']) iz -= 1;
    if (this.keys['s'] || this.keys['arrowdown']) iz += 1;
    if (this.keys['a']) ix -= 1;
    if (this.keys['d']) ix += 1;
    ix += this.touchMove.x;
    iz += this.touchMove.y;
    const len = Math.hypot(ix, iz);
    if (len > 1) { ix /= len; iz /= len; }
    const moving = len > 0.12;
    const running = !!this.keys['shift'];
    const targetCrouch = this.crouch ? 1 : 0;
    this.crouchAmt = damp(this.crouchAmt, targetCrouch, 9, dt);
    this.tim.setCrouch(this.crouchAmt);
    this.tim.setGun(false);
    if (moving) {
      const fwdX = -Math.sin(this.yaw), fwdZ = -Math.cos(this.yaw);
      const rightX = Math.cos(this.yaw), rightZ = -Math.sin(this.yaw);
      let vx = fwdX * -iz + rightX * ix;
      let vz = fwdZ * -iz + rightZ * ix;
      const vlen = Math.hypot(vx, vz) || 1;
      vx /= vlen; vz /= vlen;
      const speed = this.crouch ? 1.3 : (running ? 3.8 : 2.5);
      this.move.set(vx, vz);
      this.tryMoveFree(vx * speed * dt, vz * speed * dt);
      const targetRot = Math.atan2(vx, vz);
      this.player.rotation.y = lerpAngle(this.player.rotation.y, targetRot, 1 - Math.exp(-12 * dt));
      this.stepTimer -= dt;
      if (this.stepTimer <= 0) { this.stepTimer = this.crouch ? 0.62 : (running ? 0.32 : 0.46); audio.step(running); }
      this.tim.setLocomotion(speed, dt);
    } else {
      this.tim.setLocomotion(0, dt);
    }
    this.tim.update(dt);
    this.updateHudState();
  }

  updateChasePlayer(dt) {
    let ix = 0, iz = 0;
    if (this.keys['w'] || this.keys['arrowup']) iz -= 1;
    if (this.keys['s'] || this.keys['arrowdown']) iz += 1;
    if (this.keys['a']) ix -= 1;
    if (this.keys['d']) ix += 1;
    ix += this.touchMove.x;
    iz += this.touchMove.y;
    const len = Math.hypot(ix, iz);
    if (len > 1) { ix /= len; iz /= len; }
    const moving = len > 0.12;
    const running = !!this.keys['shift'];
    if (moving) {
      const fwdX = -Math.sin(this.yaw), fwdZ = -Math.cos(this.yaw);
      const rightX = Math.cos(this.yaw), rightZ = -Math.sin(this.yaw);
      let vx = fwdX * -iz + rightX * ix;
      let vz = fwdZ * -iz + rightZ * ix;
      const vlen = Math.hypot(vx, vz) || 1;
      vx /= vlen; vz /= vlen;
      const speed = running ? 4.8 : 3.2;
      this.tryMoveFree(vx * speed * dt, vz * speed * dt);
      this.player.rotation.y = lerpAngle(this.player.rotation.y, Math.atan2(vx, vz), 1 - Math.exp(-12 * dt));
      this.tim.setLocomotion(speed, dt);
      this.stepTimer -= dt;
      if (this.stepTimer <= 0) { this.stepTimer = 0.3; audio.step(true); }
    } else this.tim.setLocomotion(0, dt);
    this.tim.update(dt);
  }

  tryMoveFree(dx, dz) {
    const p = this.player.position;
    const r = 0.32;
    const nx = p.x + dx;
    if (!this.collidesFree(nx, p.z, r)) p.x = nx;
    const nz = p.z + dz;
    if (!this.collidesFree(p.x, nz, r)) p.z = nz;
    const b = this.bounds;
    p.x = clamp(p.x, b.minX + r, b.maxX - r);
    p.z = clamp(p.z, b.minZ + r, b.maxZ - r);
  }

  collidesFree(x, z, r) {
    for (const c of this.colliders || []) {
      if (x > c.minX - r && x < c.maxX + r && z > c.minZ - r && z < c.maxZ + r) return true;
    }
    return false;
  }

  updateStorePrompt() {
    if (this.phase !== 'store' || this.state !== 'active') {
      if (this.phase === 'store' && this.state !== 'active') this.callbacks.onPrompt?.(null);
      return;
    }
    const p = this.player.position;
    let best = null, bestD = 1e9;
    const consider = (dist, text, kind, target = null) => {
      if (dist < bestD) { bestD = dist; best = { text, kind, target }; }
    };
    if (this.interior) {
      const spots = this.interior.interactables || {};
      for (const can of this.interior.cans) {
        if (can.userData.taken) continue;
        const d = Math.hypot(p.x - can.position.x, p.z - can.position.z);
        if (d < 1.55) consider(d, 'TAKE ' + can.userData.name, 'can', can);
      }
      const near = (v, max, pad = 0) => {
        if (!v) return 1e9;
        const d = Math.hypot(p.x - v.x, p.z - v.z);
        return d < max ? d + pad : 1e9;
      };
      const dNote = near(spots.note, 2.0, 0.15);
      if (dNote < 1e8) consider(dNote, 'READ THE MEMO', 'note');
      const dB = near(spots.blood, 2.5, 0.3);
      if (dB < 1e8) consider(dB, 'INSPECT THE WALL', 'blood');
      if (!this.keypadUnlocked) {
        const dK = near(spots.keypad, 2.2, 0.1);
        if (dK < 1e8) consider(dK, 'ENTER THE CODE', 'keypad');
      }
      if (this.keypadUnlocked && !this.fuelTaken) {
        const dF = near(spots.fuel, 2.1, 0.2);
        if (dF < 1e8) consider(dF, 'TAKE THE FUEL', 'fuel');
      }
      if (!this.standoffStarted) {
        const dL = near(spots.locker, 1.9, 0.4);
        if (dL < 1e8) consider(dL, 'INSPECT THE LOCKER', 'locker');
      }
    }
    this.storeFocus = best;
    this.callbacks.onPrompt?.(best?.text ?? null);
  }

  tryMove(dx, dz) {
    const p = this.player.position;
    const r = 0.32;
    const prevZ = p.z;
    // X
    let nx = p.x + dx;
    if (!this.collides(nx, p.z, r)) p.x = nx;
    // Z with fence crossing
    let nz = p.z + dz;
    const fenceCross = (prevZ - 12) * (nz - 12) <= 0 && Math.abs(nz - 12) < 0.9;
    if (fenceCross) {
      const atHole = Math.abs(p.x - this.compound.holeX) < this.compound.holeHalf;
      if (!(atHole && this.crouchAmt > 0.5)) {
        nz = prevZ > 12 ? 12.35 : 11.65;
      } else {
        this.inside = prevZ > 12;
        if (this.inside) this.onEnteredLot();
      }
    }
    if (!this.collides(p.x, nz, r)) p.z = nz;
    // world bounds
    const b = this.compound.bounds;
    p.x = clamp(p.x, b.minX + r, b.maxX - r);
    p.z = clamp(p.z, b.minZ + r, b.maxZ - r);
  }

  collides(x, z, r) {
    // building
    if (x > -22.5 - r && x < 22.5 + r && z < -16.9 + r && z > -42) return true;
    for (const c of this.compound.colliders) {
      if (c.name === 'store') continue;
      if (x > c.minX - r && x < c.maxX + r && z > c.minZ - r && z < c.maxZ + r) return true;
    }
    // gate posts
    if (Math.abs(z - 12) < 0.45 && (Math.abs(x - 5.1) < 0.3 || Math.abs(x + 5.1) < 0.3)) return true;
    // extra circles for cars/carts
    for (const c of this.circles || []) {
      if (Math.hypot(x - c.x, z - c.z) < c.r + r) return true;
    }
    return false;
  }

  onEnteredLot() {
    if (this.doorTriggered || this.branch) return;
    this.callbacks.onObjective?.('REACH THE GLASS DOORS', 'Something inside is moving. Or the building is settling.');
    this.holeMarker.visible = false;
    this.doorMarker.visible = true;
    this.callbacks.onTutorial?.(false);
    this.tutorialShown = true;
    this.callbacks.onCrouchHint?.(false);
    document.getElementById('crouchBtn')?.classList.remove('pulse');
    this.caption('', 'He stayed low until the fence was behind him.', 3.2);
    audio.heartbeat();
  }

  checkTriggers() {
    const p = this.player.position;
    // tutorial at the hole
    if (!this.tutorialShown && p.z > 12 && Math.hypot(p.x - this.compound.holeX, p.z - 14.0) < 4.4) {
      this.tutorialShown = true;
      this.tutorialTimer = 8;
      this.callbacks.onTutorial?.(true);
      this.callbacks.onCrouchHint?.(true);
      document.getElementById('crouchBtn')?.classList.add('pulse');
      this.callbacks.onObjective?.('FIND A WAY THROUGH THE FENCE', 'The gap is too low to walk through. Hold C to crouch.');
      audio.cloth();
    }
    // doors
    if (!this.doorTriggered && !this.branch && p.z < 1 && Math.hypot(p.x - 0, p.z - (-13.4)) < 4.1) {
      this.enterChoice();
      return;
    }
    // vent route
    if (this.branch === 'side' && this.state === 'active') {
      const d = Math.hypot(p.x - this.compound.ventTrigger.x, p.z - this.compound.ventTrigger.z);
      if (d < 3.6) {
        this.callbacks.onPrompt?.(this.isTouch ? 'CLIMB THE BOXES' : 'CLIMB THE BOXES');
      } else {
        this.callbacks.onPrompt?.(null);
      }
    } else {
      this.callbacks.onPrompt?.(null);
    }
  }

  enterChoice() {
    this.state = 'choice';
    this.choiceKind = 'doors';
    this.choiceAuto = 1;
    this.doorTriggered = true;
    this.choiceTime = this.choiceMax;
    this.choiceAuto = 1;
    this.callbacks.onPrompt?.(null);
    this.dismissLookHint();
    this.callbacks.onObjective?.('THE GLASS DOORS', 'Make a choice. There is no wrong answer. There are only consequences.');
    this.callbacks.onCrouchHint?.(false);
    document.exitPointerLock?.();
    audio.heartbeat();
    this.callbacks.onCaption?.(null);
    this.callbacks.showChoice?.([
      { title: 'SHOOT THE DOORS', desc: 'A gunshot will be loud. But loud is faster than dead.', key: '1' },
      { title: 'FIND ANOTHER WAY IN', desc: 'No noise. Check the west side of the building.', key: '2' },
    ], { kicker: 'THE DOOR', title: 'What do you do?', copy: 'The glass is cracked. Something moves inside.' });
    this.callbacks.setChoiceTimer?.(1);
  }

  updateChoice(dt) {
    this.choiceTime -= dt;
    const ratio = Math.max(0, this.choiceTime / this.choiceMax);
    this.callbacks.setChoiceTimer?.(ratio, ratio < 0.28);
    this.tim.setLocomotion(0, dt);
    this.tim.setCrouch(this.crouchAmt);
    this.tim.update(dt);
    this.mace?.update(dt);
    this.jake?.update(dt);
    if (this.choiceTime <= 0) this.choose(this.choiceAuto ?? 1);
  }

  choose(index) {
    if (this.state !== 'choice') return;
    this.callbacks.hideChoice?.();
    audio.woodKnock();
    if (this.choiceKind === 'standoff') { this.resolveStandoff(index); return; }
    if (this.choiceKind === 'gate') { this.resolveGate(index); return; }
    this.choiceKind = null;
    if (index === 0) this.shootSequence();
    else this.sideSequence();
  }

  /* ------------------------ branch: shoot doors ------------------------ */
  async shootSequence() {
    this.state = 'sequence';
    this.branch = 'shoot';
    this.callbacks.onObjective?.('INSIDE AT LAST', '');
    this.callbacks.onCrouchHint?.(false);
    document.exitPointerLock?.();
    const p = this.player.position;
    // place Tim in front of doors
    this.tween(1.0, (u) => {
      p.x = damp(p.x, 0, 8, 1 / 60);
      p.z = damp(p.z, -13.5, 5, 1 / 60);
      this.player.rotation.y = lerpAngle(this.player.rotation.y, Math.PI, 8 * u);
      const cam = new THREE.Vector3(2.8, 1.85, -11.0);
      const look = new THREE.Vector3(0, 1.55, -16.4);
      this.camera.position.lerp(cam, 0.06);
      this.cameraLook.lerp(look, 0.08);
      this.camera.lookAt(this.cameraLook);
    });
    this.camera.position.set(2.8, 1.85, -11.0);
    this.cameraLook.set(0, 1.55, -16.4);
    audio.heartbeat();
    await this.wait(0.25);
    this.caption('TIM', 'Please be empty.', 2.0);

    // raise the gun
    this.tim.setGun(true);
    this.tim.parts.armR.shoulder.rotation.x = -1.45;
    this.tim.parts.armR.elbow.rotation.x = -0.12;
    this.tim.parts.armR.shoulder.rotation.z = 0.12;
    this.tim.parts.head.rotation.x = 0.04;
    await this.wait(0.75);

    audio.shot();
    this.callbacks.onFlash?.();
    this.spawnMuzzleFlash();
    this.spawnShards();
    audio.glass();
    this.doorPanes.forEach(pane => { pane.visible = false; });
    this.compound.doors.children.forEach((h, i) => { h.rotation.y = (i === 0 ? 1 : -1) * 1.05; });
    await this.wait(0.35);
    audio.alarm();
    this.compound.monster.visible = true;
    audio.roar();
    this.caption('', 'The alarm split the parking lot in half.', 2.6);
    this.cameraShake = 0.09;
    await this.wait(1.1);

    this.tim.setGun(false);
    this.tim.parts.armR.shoulder.rotation.x = 0;
    this.tim.parts.armR.shoulder.rotation.z = 0;
    this.tim.parts.armR.elbow.rotation.x = 0;

    // walk through the broken doorway
    const start = p.clone();
    const end = new THREE.Vector3(0, 0, -20.2);
    await this.tween(3.6, (u) => {
      p.x = start.x + (end.x - start.x) * u;
      p.z = start.z + (end.z - start.z) * u;
      this.player.rotation.y = Math.PI;
      this.tim.setLocomotion(1.2, 1 / 60);
      this.tim.update(1 / 60);
      this.camera.position.lerp(new THREE.Vector3(1.2, 1.95, -11.4 + (start.z - p.z) * 0.55), 0.06);
      this.cameraLook.lerp(new THREE.Vector3(0, 1.55, -19.5), 0.06);
      this.camera.lookAt(this.cameraLook);
    });
    this.caption('TIM', 'Inside. Finally.', 2.5);
    await this.wait(1.4);
    this.branchLabel = 'SHOT THE DOORS';
    await this.enterStore('shoot');
  }

  spawnMuzzleFlash() {
    const pos = new THREE.Vector3();
    this.tim.parts.armR.elbow.localToWorld(pos.set(0, -0.31, 0.24));
    const light = new THREE.PointLight(0xffd7a0, 30, 10, 2);
    light.position.copy(pos); this.scene.add(light);
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,220,160,1)', 'rgba(255,130,50,0)'), transparent: true, opacity: 0.95, depthWrite: false, blending: THREE.AdditiveBlending }));
    sprite.position.copy(pos); sprite.scale.set(1.5, 1.5, 1); this.scene.add(sprite);
    setTimeout(() => { light.intensity = 0; sprite.material.opacity = 0; setTimeout(() => { this.scene.remove(light, sprite); }, 300); }, 70);
  }

  spawnShards() {
    const group = new THREE.Group(); this.scene.add(group);
    const glassMat = new THREE.MeshPhysicalMaterial({ color: 0xbfd7cf, transparent: true, opacity: 0.5, roughness: 0.08, metalness: 0.1, side: THREE.DoubleSide });
    for (let i = 0; i < 34; i++) {
      const s = new THREE.Mesh(new THREE.PlaneGeometry(0.06 + Math.random() * 0.2, 0.06 + Math.random() * 0.28), glassMat);
      s.position.set((Math.random() - 0.5) * 3.4, 0.4 + Math.random() * 3.0, -16.4 + (Math.random() - 0.5) * 0.3);
      s.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
      group.add(s);
      this.shards.push({ mesh: s, vx: (Math.random() - 0.5) * 2.8, vy: Math.random() * 3.2, vz: 1.2 + Math.random() * 2.5, rx: (Math.random() - 0.5) * 8, life: 2.6 });
    }
    this.shardsGroup = group;
  }

  updateShards(dt) {
    if (!this.shards.length) return;
    for (let i = this.shards.length - 1; i >= 0; i--) {
      const s = this.shards[i];
      s.life -= dt;
      s.vy -= 9.8 * dt;
      s.mesh.position.x += s.vx * dt; s.mesh.position.y += s.vy * dt; s.mesh.position.z += s.vz * dt;
      s.mesh.rotation.x += s.rx * dt; s.mesh.rotation.z += s.rx * 0.7 * dt;
      if (s.mesh.position.y < 0.05) { s.mesh.position.y = 0.05; s.vy *= -0.2; s.vx *= 0.6; s.vz *= 0.5; }
      if (s.life <= 0) { s.mesh.visible = false; this.shards.splice(i, 1); }
    }
  }

  /* ---------------------- branch: find another way ---------------------- */
  async sideSequence() {
    this.state = 'sequence';
    this.branch = 'side';
    this.callbacks.onObjective?.('FIND ANOTHER WAY IN', 'Check the west side of the building. Look for a service entrance.');
    this.callbacks.onCrouchHint?.(false);
    this.doorMarker.visible = false;
    this.compound.ventMarker.visible = true;
    this.callbacks.onPrompt?.(null);
    this.callbacks.onCaption?.(null);
    this.callbacks.onChapterCard?.(false);
    audio.doorCreak();
    this.caption('', 'No gunshot. No alarm. Just a long walk around the building.', 3.2);
    // camera eases back to over-the-shoulder
    await this.wait(1.0);
    this.state = 'active';
    this.callbacks.onFade?.(0);
  }

  async startVentSequence() {
    if (this.state !== 'active' || this.branch !== 'side') return;
    this.state = 'sequence';
    this.callbacks.onPrompt?.(null);
    this.callbacks.onCrouchHint?.(false);
    document.exitPointerLock?.();
    audio.climb();
    const p = this.player.position;
    // move Tim to the boxes
    const from = p.clone();
    const to = new THREE.Vector3(-24.2, 0, -25.2);
    await this.tween(1.5, (u) => {
      p.x = from.x + (to.x - from.x) * u;
      p.z = from.z + (to.z - from.z) * u;
      this.player.rotation.y = lerpAngle(this.player.rotation.y, Math.PI, 6 * u);
      this.tim.setLocomotion(1.0, 1 / 60);
      this.tim.update(1 / 60);
      this.camera.position.lerp(new THREE.Vector3(-22.4, 2.2, -22.4), 0.05);
      this.cameraLook.lerp(new THREE.Vector3(-24.3, 1.7, -27), 0.06);
      this.camera.lookAt(this.cameraLook);
    });
    this.caption('TIM', 'Boxes. A vent. Great.', 1.8);
    await this.wait(0.5);

    // climb
    const baseY = p.y;
    await this.tween(3.4, (u) => {
      p.y = baseY + u * 2.65;
      p.z = -25.2 - u * 1.5;
      p.x = -24.2 + u * 0.1;
      this.tim.setLocomotion(0.7, 1 / 60);
      this.tim.update(1 / 60);
      this.tim.parts.armL.shoulder.rotation.x = -1.5 - Math.sin(u * 10) * 0.35;
      this.tim.parts.armR.shoulder.rotation.x = -1.5 + Math.sin(u * 10) * 0.35;
      this.camera.position.lerp(new THREE.Vector3(-22.9, 1.4 + u * 2.0, -23.6), 0.05);
      this.cameraLook.lerp(new THREE.Vector3(-23.6, 1.7 + u * 1.6, -27), 0.06);
      this.camera.lookAt(this.cameraLook);
    });
    audio.vent();
    this.tim.parts.armL.shoulder.rotation.x = 0;
    this.tim.parts.armR.shoulder.rotation.x = 0;
    this.caption('', 'The grate came away with a sound like a cough.', 2.2);
    await this.wait(0.7);

    // crawl into the vent
    await this.tween(2.0, (u) => {
      p.y = 2.8 - u * 0.4;
      p.x = -24.1 + u * 2.2;
      p.z = -26.7;
      this.player.rotation.y = Math.PI / 2;
      this.tim.setCrouch(1);
      this.tim.setLocomotion(0.5, 1 / 60);
      this.tim.update(1 / 60);
      this.camera.position.lerp(new THREE.Vector3(-23.4 + u * 2.4, 2.9, -25.6), 0.05);
      this.cameraLook.lerp(new THREE.Vector3(-22, 2.6, -26.7), 0.06);
      this.camera.lookAt(this.cameraLook);
    });
    audio.vent();
    this.callbacks.onFade?.(1);
    await this.wait(1.1);
    this.callbacks.onCaption?.(null);
    // story information card
    await new Promise(resolve => {
      this.storyResolve = resolve;
      this.callbacks.onStory?.(() => { if (this.storyResolve) { const r = this.storyResolve; this.storyResolve = null; r(); } });
    });
    this.branchLabel = 'FOUND ANOTHER WAY';
    await this.enterStore('vent');
  }

  /* ================================================================== *
   *  ACT II — the furniture store
   * ================================================================== */
  async enterStore(route = 'shoot') {
    this.state = 'sequence';
    this.callbacks.onPrompt?.(null);
    this.callbacks.onFade?.(1);
    await this.wait(1.0);
    if (this.disposed) return;

    const scene = new THREE.Scene();
    this.scene = scene;
    scene.background = new THREE.Color(0x090b09);
    scene.fog = new THREE.FogExp2(0x0b0d0a, 0.026);
    scene.add(new THREE.HemisphereLight(0x8a8f78, 0x14150f, 0.5));
    const fill = new THREE.DirectionalLight(0xa9b7a6, 0.3);
    fill.position.set(-10, 14, 8);
    scene.add(fill);

    this.interior = buildStoreInterior(scene, { evening: true });
    this.bounds = this.interior.bounds;
    this.colliders = this.interior.colliders;
    this.compound = null;
    this.extraAsh = null;

    this.tim = new TimCharacter();
    this.tim.group.position.copy(this.interior.spawn);
    this.tim.group.rotation.y = Math.PI;
    this.tim.setExpression('tired');
    scene.add(this.tim.group);
    this.player = this.tim.group;
    this.mace = null;
    this.jake = null;

    this.camera.position.set(0, 2.2, 14.8);
    this.cameraLook.set(0, 1.35, 2.0);
    this.camera.lookAt(this.cameraLook);
    this.yaw = 0;
    this.pitch = 0.1;

    this.phase = 'store';
    this.state = 'active';
    this.cansFound = 0;
    this.fuelTaken = false;
    this.standoffStarted = false;
    this.keypadUnlocked = false;
    this.updateCanHud();
    document.getElementById('canHud')?.classList.remove('hidden');
    document.getElementById('escapeTimer')?.classList.add('hidden');
    this.callbacks.onChapterCard?.(false);
    this.callbacks.onCrouchHint?.(false);
    this.callbacks.onObjective?.('SEARCH THE STORE', 'Ten cans. Then the fuel room.');
    this.callbacks.onPrompt?.(null);
    this.callbacks.onCaption?.(null);
    audio.setAmbientScene('store');
    audio.setMood('dark');
    audio.setWind(0.22);
    this.callbacks.onFade?.(0);
    this.updateHudState();

    if (route === 'vent') {
      this.caption('', 'The vent dropped him into the showroom. The store was darker than the parking lot.', 4.0);
    } else {
      this.caption('', 'The broken doors sighed shut behind him.', 3.4);
    }
    await this.wait(2.4);
    if (!this.disposed) this.caption('TIM', 'Ten cans. Then the fuel room. Then the road.', 3.4);
  }

  /* ------------------------- standoff ------------------------- */
  async startStandoff() {
    if (this.standoffStarted || this.fuelTaken) return;
    this.standoffStarted = true;
    this.state = 'sequence';
    this.fuelTaken = true;
    this.interior.takeFuel();
    this.updateCanHud();
    this.callbacks.onPrompt?.(null);
    this.callbacks.onObjective?.('THE FUEL ROOM', 'Someone else wants it.');
    document.exitPointerLock?.();

    const from = this.tim.group.position.clone();
    const to = new THREE.Vector3(8.2, 0, -16.4);
    await this.tween(0.9, (u) => {
      this.tim.group.position.lerpVectors(from, to, u);
      this.tim.group.rotation.y = lerpAngle(this.tim.group.rotation.y, 0, 0.15);
      this.camera.position.lerp(new THREE.Vector3(8.3, 2.0, -18.4), 0.08);
      this.cameraLook.lerp(new THREE.Vector3(8.3, 1.45, -13.2), 0.1);
      this.camera.lookAt(this.cameraLook);
    });

    this.mace = createMace();
    this.mace.group.position.set(8.4, 0, -11.9);
    this.mace.group.rotation.y = Math.PI;
    this.mace.setGunRaised(true);
    this.mace.setExpression('angry');
    this.scene.add(this.mace.group);
    this.mace.update(0.016);

    audio.heartbeat();
    audio.sting();
    this.caption('', 'The red can came up easy. So did the shotgun.', 3.0);
    await this.wait(2.0);
    this.caption('MACE', 'That is my fuel, kid.', 2.2);
    await this.wait(1.5);
    this.caption('TIM', 'I just need enough to get out of here.', 2.4);
    await this.wait(1.7);
    this.caption('MACE', 'Then give me the truck key. Nice and slow.', 2.8);
    await this.wait(1.8);

    this.choiceKind = 'standoff';
    this.choiceTime = 15;
    this.choiceMax = 15;
    this.choiceAuto = 1;
    this.state = 'choice';
    this.callbacks.showChoice?.([
      { title: 'THREATEN HIM', desc: 'Raise the pistol. Make him hesitate.', key: '1' },
      { title: 'GIVE HIM THE KEY', desc: 'He only wants the truck. Let him have it.', key: '2' },
    ], { kicker: 'THE FUEL ROOM', title: 'He wants the key.', copy: 'The shotgun does not move. Neither does Tim.' });
    this.callbacks.setChoiceTimer?.(1);
  }

  async resolveStandoff(index) {
    this.state = 'sequence';
    this.callbacks.hideChoice?.();
    this.callbacks.onPrompt?.(null);
    if (index === 0) {
      this.timHasGun = true;
      this.tim.setGun(true);
      this.tim.setExpression('determined');
      this.tim.parts.armR.shoulder.rotation.x = -1.5;
      this.tim.parts.armR.elbow.rotation.x = -0.2;
      this.tim.parts.armR.shoulder.rotation.z = 0.08;
      this.tim.parts.armL.shoulder.rotation.x = -1.25;
      this.tim.parts.armL.elbow.rotation.x = -1.1;
      audio.cloth();
      this.caption('TIM', 'Back off. I will use it.', 2.6);
      await this.wait(1.5);
      this.mace.setExpression('shock');
      this.caption('MACE', 'You had better be sure, kid.', 2.6);
    } else {
      this.timHasGun = false;
      audio.woodKnock();
      this.caption('TIM', 'Take it. Just let me go.', 2.4);
      await this.wait(1.4);
      this.mace.setExpression('smirk');
      this.caption('MACE', 'Smart kid.', 1.8);
    }
    await this.wait(1.5);
    this.escapeSequence();
  }

  /* ------------------------- escape ------------------------- */
  showEscapeTimer(show) {
    const el = document.getElementById('escapeTimer');
    if (!el) return;
    el.classList.toggle('hidden', !show);
    if (show) el.classList.remove('danger', 'late');
  }

  updateEscapeTimer(dt) {
    if (!this.escape?.active) return;
    this.escape.time -= dt;
    const left = Math.max(0, this.escape.time);
    const el = document.getElementById('escapeSeconds');
    if (el) el.textContent = String(Math.ceil(left));
    const wrap = document.getElementById('escapeTimer');
    if (wrap) wrap.classList.toggle('danger', left < 6);
    if (left <= 0) this.escapeFailed();
  }

  async escapeSequence() {
    if (this.disposed) return;
    this.state = 'sequence';
    this.escapeAttempts++;
    this.dead = false;
    this.callbacks.onPrompt?.(null);
    this.callbacks.hideChoice?.();
    document.getElementById('deathFx')?.classList.remove('show');
    if (this.escapeAttempts > 1) {
      this.interior.resetEscape();
      this.tim.group.position.set(8.2, 0, -16.4);
      this.tim.group.rotation.y = 0;
      this.tim.setCrouch(0);
      this.mace.group.position.set(8.4, 0, -11.9);
      this.camera.position.set(8.3, 2.0, -18.4);
      this.cameraLook.set(8.3, 1.45, -13.2);
    }
    this.escape = { time: 20, active: true };
    this.showEscapeTimer(true);
    this.updateEscapeTimer(0.0001);
    this.callbacks.onObjective?.('GET OUT', 'The iron door at the back. Move.');
    audio.setMood('tense');
    audio.heartbeat();

    this.interior.closeKeypadDoor();
    audio.doorCreak();
    this.caption('', 'The locker hit the frame. The door buckled — but it held.', 3.2);
    const locker = this.interior.locker;
    const lFrom = locker.position.clone();
    const lTo = new THREE.Vector3(7.6, 0, -13.2);
    const tFrom = this.tim.group.position.clone();
    const tTo = new THREE.Vector3(6.5, 0, -15.1);
    await this.tween(0.9, (u) => {
      locker.position.lerpVectors(lFrom, lTo, u);
      locker.rotation.y = 0.08 + u * 0.24;
      this.tim.group.position.lerpVectors(tFrom, tTo, u);
      this.tim.group.rotation.y = lerpAngle(this.tim.group.rotation.y, Math.PI, 0.1);
      this.tim.setLocomotion(1.2, 1 / 60);
      this.camera.position.lerp(new THREE.Vector3(8.4, 1.85, -17.6), 0.07);
      this.cameraLook.lerp(new THREE.Vector3(8.0, 1.35, -13.2), 0.08);
      this.camera.lookAt(this.cameraLook);
    });
    this.interior.blockFuelDoor();
    audio.woodKnock();
    this.cameraShake = 0.09;
    this.caption('MACE', 'Twenty seconds, kid! Twenty!', 2.6);
    await this.wait(1.2);

    // run to the table and the scissor jack
    const runFrom = this.tim.group.position.clone();
    const runTo = new THREE.Vector3(9.0, 0, -16.6);
    await this.tween(0.8, (u) => {
      this.tim.group.position.lerpVectors(runFrom, runTo, u);
      this.tim.group.rotation.y = lerpAngle(this.tim.group.rotation.y, Math.PI, 0.12);
      this.tim.setLocomotion(2.2, 1 / 60);
      this.camera.position.lerp(new THREE.Vector3(9.4, 1.65, -17.8), 0.08);
      this.cameraLook.lerp(new THREE.Vector3(10.6, 1.05, -19.2), 0.09);
      this.camera.lookAt(this.cameraLook);
    });
    this.tim.setLocomotion(0, 1 / 60);
    this.caption('', 'The scissor jack was still on the work table.', 2.4);
    await this.wait(0.7);

    const ok = await this.runQTE({
      mode: 'tap',
      kicker: 'THE IRON DOOR',
      title: 'CRANK THE JACK',
      hint: 'Tap the handle — or press SPACE — to lift the door.',
      target: 14,
      duration: 12,
      glyph: '↻',
    });
    if (!ok) { this.escapeFailed(); return; }

    this.escape.active = false;
    this.showEscapeTimer(false);
    audio.doorCreak();
    this.caption('', 'The jack bit. The door rose an inch at a time.', 2.8);
    await this.tween(1.1, (u) => {
      this.interior.setIronLift(u * 0.92);
      this.camera.position.lerp(new THREE.Vector3(11.0, 1.1, -17.4), 0.08);
      this.cameraLook.lerp(new THREE.Vector3(11.2, 0.8, -19.6), 0.09);
      this.camera.lookAt(this.cameraLook);
    });
    this.caption('MACE', 'No. No — NO!', 2.2);
    await this.wait(0.6);

    // crawl under
    this.tim.poseLock = true;
    this.tim.setCrouch(1);
    const cFrom = this.tim.group.position.clone();
    const cTo = new THREE.Vector3(11.2, 0, -20.7);
    await this.tween(2.4, (u) => {
      this.tim.group.position.lerpVectors(cFrom, cTo, u);
      this.tim.group.rotation.y = Math.PI;
      this.tim.parts.torso.rotation.x = 0.9;
      this.tim.parts.head.rotation.x = -0.4;
      this.tim.parts.armL.shoulder.rotation.x = -1.2;
      this.tim.parts.armR.shoulder.rotation.x = -1.2;
      this.tim.parts.legL.hip.rotation.x = -0.5;
      this.tim.parts.legR.hip.rotation.x = -0.5;
      this.tim.parts.legL.knee.rotation.x = 0.8;
      this.tim.parts.legR.knee.rotation.x = 0.8;
      this.tim.updateFace(1 / 60);
      this.camera.position.lerp(new THREE.Vector3(10.6, 0.95, -18.0), 0.06);
      this.cameraLook.lerp(new THREE.Vector3(11.2, 0.55, -20.8), 0.08);
      this.camera.lookAt(this.cameraLook);
    });
    this.tim.poseLock = false;
    this.interior.setIronLift(0);
    audio.woodKnock();
    audio.sting();
    this.cameraShake = 0.16;
    this.caption('', 'He kicked the jack away. The door came down like a guillotine.', 3.4);
    await this.wait(1.1);
    this.callbacks.onFade?.(1);
    await this.wait(1.1);
    this.chaseSequence();
  }

  escapeFailed() {
    if (this.dead || this.disposed) return;
    this.dead = true;
    this.state = 'sequence';
    if (this.escape) this.escape.active = false;
    this.showEscapeTimer(false);
    this.abortQTE(false);
    document.getElementById('deathFx')?.classList.add('show');
    audio.roar();
    audio.sting();
    this.callbacks.onCaption?.(null);
    setTimeout(() => {
      if (this.disposed) return;
      document.getElementById('deathFx')?.classList.remove('show');
      this.dead = false;
      this.escapeAttempts++;
      this.escapeSequence();
    }, 2600);
  }

  /* ------------------------- quick actions ------------------------- */
  runQTE({ mode = 'tap', kicker = 'QUICK ACTION', title = '', hint = '', target = 1, duration = 6, glyph = '↻' }) {
    return new Promise((resolve) => {
      const wrap = document.getElementById('qte');
      if (!wrap) { resolve(true); return; }
      document.getElementById('qteKicker').textContent = kicker;
      document.getElementById('qteTitle').textContent = title;
      document.getElementById('qteHint').textContent = hint;
      const dial = document.getElementById('qteDial');
      if (dial) dial.textContent = glyph;
      const fill = document.getElementById('qteFill');
      if (fill) fill.style.width = '0%';
      const bar = document.getElementById('qteTimeBar');
      if (bar) bar.style.transform = 'scaleX(1)';
      wrap.classList.remove('hidden', 'hit', 'fail');
      wrap.classList.toggle('swipe', mode !== 'tap');
      this.qte = { mode, target, duration, time: duration, progress: 0, resolve };
      audio.ui();
    });
  }

  qteInput(kind) {
    if (!this.qte) return;
    const q = this.qte;
    let add = 0;
    if (q.mode === 'tap' && (kind === 'tap' || kind === ' ' || kind === 'enter')) add = 1;
    if (q.mode === 'swipeRight' && (kind === 'swipe' || kind === 'arrowright' || kind === 'd')) add = q.target;
    if (q.mode === 'swipeDown' && (kind === 'swipe' || kind === 'arrowdown' || kind === 's')) add = q.target;
    if (!add) return;
    q.progress = Math.min(q.target, q.progress + add);
    const fill = document.getElementById('qteFill');
    if (fill) fill.style.width = (q.progress / q.target * 100) + '%';
    const wrap = document.getElementById('qte');
    if (wrap) { wrap.classList.remove('hit'); void wrap.offsetWidth; wrap.classList.add('hit'); }
    const dial = document.getElementById('qteDial');
    if (dial && q.mode === 'tap') {
      dial.style.transform = `rotate(${q.progress * 26}deg)`;
      setTimeout(() => { if (dial) dial.style.transform = ''; }, 90);
    }
    audio.hover();
  }

  updateQTE(dt) {
    const q = this.qte;
    if (!q) return;
    q.time -= dt;
    const bar = document.getElementById('qteTimeBar');
    if (bar) bar.style.transform = `scaleX(${Math.max(0, q.time / q.duration)})`;
    if (q.progress >= q.target) { this.completeQTE(true); return; }
    if (q.time <= 0) this.completeQTE(false);
  }

  completeQTE(ok) {
    const q = this.qte;
    if (!q) return;
    this.qte = null;
    const wrap = document.getElementById('qte');
    if (wrap) {
      if (!ok) { wrap.classList.add('fail'); }
      setTimeout(() => wrap.classList.add('hidden'), ok ? 120 : 420);
    }
    if (ok) { audio.woodKnock(); audio.tone({ freq: 240, dur: 0.2, gain: 0.06, type: 'triangle' }); }
    else audio.sting();
    q.resolve(ok);
  }

  abortQTE(ok = false) {
    if (!this.qte) return;
    const resolve = this.qte.resolve;
    this.qte = null;
    document.getElementById('qte')?.classList.add('hidden');
    resolve?.(ok);
  }

  /* ================================================================== *
   *  ACT III — the chase
   * ================================================================== */
  async chaseSequence() {
    if (this.disposed) return;
    this.callbacks.onFade?.(1);
    await this.wait(1.0);
    const scene = new THREE.Scene();
    this.scene = scene;
    const compound = this.compound = buildFurnitureCompound(scene, { cutscene: false });
    this.bounds = compound.bounds;
    this.colliders = compound.colliders;
    this.interior = null;
    this.extraAsh = null;

    this.tim = new TimCharacter();
    this.tim.group.position.set(0, 0, -15.1);
    this.tim.group.rotation.y = 0;
    this.tim.setExpression('scared');
    this.tim.setCrouch(0);
    scene.add(this.tim.group);
    this.player = this.tim.group;

    this.jake = createJake();
    this.jake.group.position.set(0, 0, -14.0);
    this.jake.group.rotation.y = Math.PI;
    this.jake.setExpression('snarl');
    this.jake.parts.armR.shoulder.rotation.x = -1.25;
    this.jake.parts.armR.elbow.rotation.x = -0.95;
    this.jake.parts.armL.shoulder.rotation.x = -1.0;
    this.jake.parts.armL.elbow.rotation.x = -0.8;
    scene.add(this.jake.group);

    this.mace = createMace();
    this.mace.group.position.set(2.1, 0, -12.9);
    this.mace.group.rotation.y = Math.PI;
    this.mace.setGunRaised(true);
    this.mace.setExpression('angry');
    scene.add(this.mace.group);

    const truck = createTruck({ headlights: false });
    truck.position.set(8.2, 0, 24.8);
    truck.rotation.y = Math.PI + 0.08;
    scene.add(truck);
    this.chaseTruck = truck;

    this.phase = 'chase';
    this.state = 'sequence';
    this.yaw = 0;
    this.pitch = 0.08;
    this.camera.position.set(2.5, 1.65, -11.8);
    this.cameraLook.set(0, 1.5, -15.0);
    this.camera.lookAt(this.cameraLook);
    document.getElementById('canHud')?.classList.add('hidden');
    document.getElementById('escapeTimer')?.classList.add('hidden');
    this.callbacks.onPrompt?.(null);
    this.callbacks.onCrouchHint?.(false);
    this.callbacks.onObjective?.('GET OUT', 'Run for the truck.');
    this.callbacks.onChapterCard?.(false);
    audio.setAmbientScene('gameplay');
    audio.setMood('tense');
    audio.setWind(0.7);
    this.callbacks.onFade?.(0);
    this.updateHudState();

    this.caption('JAKE', 'Going somewhere, little man?', 2.8);
    await this.wait(2.4);
    this.caption('', 'The knife pressed flat against his throat.', 2.6);
    await this.wait(1.9);

    const ok = await this.runQTE({
      mode: 'swipeRight',
      kicker: 'PINNED TO THE WALL',
      title: 'KICK HIM OFF',
      hint: 'Swipe right — or press → — to drive your boot into his knee.',
      target: 1,
      duration: 6,
      glyph: '→',
    });
    if (!ok) {
      document.getElementById('app')?.classList.add('hurt');
      setTimeout(() => document.getElementById('app')?.classList.remove('hurt'), 600);
      this.cameraShake = 0.14;
      this.caption('', 'The blade caught his arm. He kicked anyway.', 2.6);
    } else {
      this.caption('TIM', 'Get off me!', 1.8);
    }
    this.tim.poseLock = true;
    this.tim.parts.legR.hip.rotation.x = -1.5;
    this.tim.parts.legR.knee.rotation.x = 0.2;
    this.tim.parts.legL.hip.rotation.x = 0.5;
    this.tim.parts.torso.rotation.x = 0.3;
    const jFrom = this.jake.group.position.clone();
    await this.tween(0.7, (u) => {
      this.jake.group.position.z = jFrom.z + u * 1.4;
      this.jake.group.position.y = Math.sin(u * Math.PI) * 0.12;
      this.jake.group.rotation.y = Math.PI - u * 0.7;
      this.jake.setExpression('shock');
      this.cameraShake = 0.1;
      this.camera.position.lerp(new THREE.Vector3(2.2, 1.55, -11.4), 0.1);
      this.camera.lookAt(this.cameraLook);
    });
    this.tim.poseLock = false;
    audio.step(true);
    audio.cloth();
    this.jake.group.position.set(1.6, 0, -12.4);
    this.jake.parts.armR.shoulder.rotation.x = 0;
    this.caption('TIM', 'Move!', 1.2);
    await this.wait(0.7);

    // run to the gate
    this.state = 'sequence';
    const from = this.tim.group.position.clone();
    const to = new THREE.Vector3(-10, 0, 8.8);
    await this.tween(3.2, (u) => {
      this.tim.group.position.lerpVectors(from, to, u);
      this.tim.group.rotation.y = 0;
      this.tim.setLocomotion(4.6, 1 / 60);
      this.stepTimer -= 1 / 60;
      if (this.stepTimer <= 0) { this.stepTimer = 0.3; audio.step(true); }
      this.camera.position.lerp(new THREE.Vector3(-8.8, 2.1, 4.6), 0.05);
      this.cameraLook.lerp(new THREE.Vector3(-10, 1.45, 9.2), 0.06);
      this.camera.lookAt(this.cameraLook);
      this.jake.group.position.z += 4.8 * (1 / 60);
      this.mace.group.position.z += 4.6 * (1 / 60);
    });
    this.tim.setLocomotion(0, 1 / 60);
    this.gateChoice();
  }

  gateChoice() {
    this.state = 'choice';
    this.choiceKind = 'gate';
    this.choiceTime = 12;
    this.choiceMax = 12;
    this.choiceAuto = 1;
    this.callbacks.onPrompt?.(null);
    document.exitPointerLock?.();
    audio.heartbeat();
    this.camera.position.set(-7.4, 1.8, 7.2);
    this.cameraLook.set(-10.2, 1.35, 12.2);
    this.camera.lookAt(this.cameraLook);
    this.callbacks.showChoice?.([
      { title: 'SHOOT AT THEM', desc: 'You still have the pistol. Make them duck.', key: '1' },
      { title: 'KICK THROUGH THE HOLE', desc: 'No noise. No hesitation. Just run.', key: '2' },
    ], { kicker: 'THE GATE', title: 'They are right behind you.', copy: 'The hole in the fence is narrow. The truck is past it.' });
    this.callbacks.setChoiceTimer?.(1);
  }

  async resolveGate(index) {
    this.state = 'sequence';
    this.callbacks.hideChoice?.();
    this.callbacks.onPrompt?.(null);
    if (index === 0) {
      this.chaseChoice = 'SHOT AT THEM';
      this.timHasGun = true;
      this.tim.setGun(true);
      this.tim.poseLock = true;
      this.tim.parts.armR.shoulder.rotation.x = -1.5;
      this.tim.parts.armR.elbow.rotation.x = -0.15;
      this.tim.parts.torso.rotation.y = -0.4;
      this.caption('TIM', 'Hey — Jake.', 1.6);
      await this.wait(0.9);
      audio.shot();
      this.callbacks.onFlash?.();
      this.cameraShake = 0.22;
      this.tim.setGun(false);
      this.tim.poseLock = false;
      this.jake.group.rotation.x = -1.3;
      this.jake.group.position.y = 0.1;
      this.caption('MACE', 'JAAKE!', 2.2);
      await this.wait(1.6);
    } else {
      this.chaseChoice = 'KICKED THROUGH';
      audio.cloth();
      audio.step(true);
      this.cameraShake = 0.12;
      this.tim.poseLock = true;
      this.tim.parts.legR.hip.rotation.x = -1.3;
      this.tim.parts.legR.knee.rotation.x = 0.2;
      this.caption('', 'Tim kicked the torn fence and dove through the hole.', 2.8);
      await this.wait(1.4);
      this.tim.poseLock = false;
    }
    this.caption('TIM', 'The truck. Come on.', 2.0);
    const from = this.tim.group.position.clone();
    const to = new THREE.Vector3(7.4, 0, 23.0);
    await this.tween(2.4, (u) => {
      this.tim.group.position.lerpVectors(from, to, u);
      this.tim.group.rotation.y = 0;
      this.tim.setLocomotion(4.8, 1 / 60);
      this.camera.position.lerp(new THREE.Vector3(6.0, 2.2, 19.0), 0.06);
      this.cameraLook.lerp(new THREE.Vector3(8.2, 1.4, 24.8), 0.07);
      this.camera.lookAt(this.cameraLook);
    });
    this.callbacks.onFade?.(1);
    await this.wait(1.0);
    this.truckSequence();
  }

  /* ================================================================== *
   *  ACT IV — the truck
   * ================================================================== */
  async truckSequence() {
    if (this.disposed) return;
    const scene = new THREE.Scene();
    this.scene = scene;
    this.compound = null;
    this.interior = null;
    this.extraAsh = null;
    this.jake = null;
    this.mace = null;
    this.truck = buildTruckScene(scene, { mode: 'start' });
    this.tim = this.truck.tim;
    this.mace = this.truck.mace;
    this.jake = this.truck.jake;
    this.phase = 'truck';
    this.state = 'sequence';
    this.camera.fov = 42;
    this.camera.updateProjectionMatrix();
    this.truckCam.pos.set(0.34, 1.42, 0.02);
    this.truckCam.look.set(-0.3, 1.32, 1.72);
    this.camera.position.copy(this.truckCam.pos);
    this.camera.lookAt(this.truckCam.look);
    document.getElementById('canHud')?.classList.add('hidden');
    document.getElementById('escapeTimer')?.classList.add('hidden');
    this.callbacks.onPrompt?.(null);
    this.callbacks.onCrouchHint?.(false);
    this.callbacks.onChapterCard?.(false);
    this.callbacks.onObjective?.('START THE TRUCK', 'Swipe down on the ignition.');
    audio.setAmbientScene('truck');
    audio.setMood('tense');
    this.callbacks.onFade?.(0);
    this.updateHudState();

    this.caption('MACE', 'The key, kid. Last time.', 2.4);
    await this.wait(2.2);
    this.caption('TIM', 'Come and get it.', 1.8);
    await this.wait(1.4);

    // first attempt always floods
    await this.runQTE({
      mode: 'swipeDown',
      kicker: 'THE IGNITION',
      title: 'TURN IT OVER',
      hint: 'Swipe down — or press ↓ — to crank the engine.',
      target: 1,
      duration: 5,
      glyph: '↓',
    });
    audio.tone({ freq: 82, dur: 0.7, gain: 0.12, type: 'sawtooth', slide: 0.6 });
    this.caption('TIM', 'Come on, come on—', 1.8);
    await this.wait(1.0);
    this.caption('', 'The engine coughed. Died.', 2.2);
    await this.wait(1.5);

    let started = false;
    for (let attempt = 0; attempt < 3 && !started; attempt++) {
      const ok = await this.runQTE({
        mode: 'swipeDown',
        kicker: 'THE IGNITION',
        title: 'AGAIN — TURN IT',
        hint: 'Swipe down — or press ↓ — hard.',
        target: 1,
        duration: 5,
        glyph: '↓',
      });
      if (ok) {
        started = true;
        this.truck.startEngine();
        audio.tone({ freq: 58, dur: 2.0, gain: 0.16, type: 'sawtooth', slide: 0.4 });
        this.callbacks.onFlash?.();
        this.caption('TIM', 'Yes! YES!', 1.8);
        this.cameraShake = 0.12;
      } else {
        this.caption('TIM', 'Not now. Not now!', 1.6);
      }
    }
    if (!started) {
      this.truck.startEngine();
      this.caption('TIM', 'GO!', 1.2);
    }
    await this.wait(1.4);

    this.truck.attack(-1);
    this.callbacks.onFlash?.();
    this.cameraShake = 0.24;
    this.caption('', 'A shotgun blast took the mirror off.', 2.4);
    await this.wait(1.2);
    this.truck.breakSideGlass();
    this.cameraShake = 0.26;
    this.caption('', 'Glass sprayed across the cab.', 2.2);
    await this.wait(1.2);
    this.truck.attack(1);
    this.truck.hitWindshield(0.5);
    this.caption('MACE', 'JAAKE! STOP HIM!', 2.2);
    await this.wait(1.3);
    this.caption('', 'A tire blew. The wheel went light in his hands.', 2.6);
    this.truck.setShake(0.34);
    audio.shot();
    await this.wait(1.4);

    this.truck.crash();
    audio.roar();
    audio.sting();
    this.callbacks.onFlash?.();
    this.cameraShake = 0.5;
    this.caption('', 'The road turned sideways.', 2.4);
    await this.wait(2.4);
    this.callbacks.onFade?.(1);
    await this.wait(1.2);
    this.finish({
      choice: this.branch,
      statChoice: this.chaseChoice || this.branchLabel || 'RAN',
      title: 'THE LAST CAN',
      copy: 'The truck left the road and the dark came through the windshield. Chapter One ends here — but something in Homewood heard the crash.',
      remembered: 'THE DEAD WILL REMEMBER THAT',
      cans: `${this.cansFound} CAN${this.cansFound === 1 ? '' : 'S'} FOUND`,
    });
  }

  /* ------------------------------ helpers ------------------------------ */
  interact() {
    if (this.phase === 'store' && this.state === 'active') { this.interactStore(); return; }
    if (this.phase !== 'lot') return;
    if (this.branch === 'side' && this.state === 'active') {
      const p = this.player.position;
      if (Math.hypot(p.x - this.compound.ventTrigger.x, p.z - this.compound.ventTrigger.z) < 3.6) {
        this.startVentSequence();
      }
    }
  }

  interactStore() {
    const f = this.storeFocus;
    if (!f) return;
    if (f.kind === 'can') {
      if (!this.interior.takeCan(f.target)) return;
      this.cansFound++;
      audio.canOpen();
      this.updateCanHud(true);
      this.caption('TIM', f.target.userData.name.charAt(0) + f.target.userData.name.slice(1).toLowerCase() + '. Still good. Probably.', 2.4);
      if (this.cansFound >= this.totalCans) {
        this.callbacks.onObjective?.('THE FUEL ROOM', 'The code is written on the wall. Find it.');
        this.interior.showKeyMarker(true);
        this.caption('TIM', 'That\'s ten. Now the fuel.', 3.0);
        audio.heartbeat();
      } else {
        this.callbacks.onObjective?.('SEARCH THE STORE', `${this.cansFound} of ${this.totalCans} cans found.`);
      }
      return;
    }
    if (f.kind === 'note') { this.showNote(); return; }
    if (f.kind === 'blood') {
      this.sawBlood = true;
      this.callbacks.onObjective?.('THE FUEL ROOM', 'Enter the build date: last two digits of year, day, month.');
      this.caption('', 'BUILD IN 12/12/1926. The paint had run like it was crying.', 3.6);
      this.interior.showKeyMarker(true);
      audio.heartbeat();
      return;
    }
    if (f.kind === 'keypad') { this.openKeypad(); return; }
    if (f.kind === 'fuel') { this.startStandoff(); return; }
    if (f.kind === 'locker') {
      this.caption('TIM', 'A locker. Heavy. Probably empty.', 2.4);
      return;
    }
  }

  updateCanHud(pulse = false) {
    const hud = document.getElementById('canHud');
    const count = document.getElementById('canCount');
    if (hud) hud.classList.remove('hidden');
    if (count) count.textContent = String(this.cansFound);
    if (pulse && hud) {
      hud.classList.remove('pulse');
      void hud.offsetWidth;
      hud.classList.add('pulse');
    }
  }

  updateCamera(dt) {
    if (this.phase === 'truck') { this.updateTruckCamera(dt); return; }
    if (this.phase === 'store') {
      if (this.state !== 'active') {
        if (this.cameraShake > 0) {
          this.camera.position.x += (Math.random() - 0.5) * this.cameraShake;
          this.camera.position.y += (Math.random() - 0.5) * this.cameraShake;
          this.cameraShake = Math.max(0, this.cameraShake - dt * 0.35);
        }
        return;
      }
      const p = this.player.position;
      const targetY = 1.45 - this.crouchAmt * 0.35;
      const dist = 3.55;
      const hd = Math.cos(this.pitch) * dist;
      const desired = new THREE.Vector3(
        p.x + Math.sin(this.yaw) * hd,
        p.y + targetY + 0.55 + Math.sin(this.pitch) * 2.2,
        p.z + Math.cos(this.yaw) * hd
      );
      const b = this.bounds;
      desired.x = clamp(desired.x, b.minX + 0.5, b.maxX - 0.5);
      desired.z = clamp(desired.z, b.minZ + 0.5, b.maxZ - 0.5);
      desired.y = clamp(desired.y, 0.75, 4.55);
      this.camera.position.lerp(desired, 1 - Math.exp(-9 * dt));
      const lookTarget = new THREE.Vector3(p.x, p.y + targetY + 0.1, p.z);
      this.cameraLook.lerp(lookTarget, 1 - Math.exp(-12 * dt));
      this.camera.lookAt(this.cameraLook);
      return;
    }
    if (this.phase === 'chase') {
      if (this.state !== 'active') {
        if (this.cameraShake > 0) {
          this.camera.position.x += (Math.random() - 0.5) * this.cameraShake;
          this.camera.position.y += (Math.random() - 0.5) * this.cameraShake;
          this.cameraShake = Math.max(0, this.cameraShake - dt * 0.4);
        }
        return;
      }
      const p = this.player.position;
      const targetY = 1.55;
      const dist = 4.4;
      const hd = Math.cos(this.pitch) * dist;
      const desired = new THREE.Vector3(
        p.x + Math.sin(this.yaw) * hd,
        p.y + targetY + 0.6 + Math.sin(this.pitch) * 2.4,
        p.z + Math.cos(this.yaw) * hd
      );
      const b = this.bounds;
      desired.x = clamp(desired.x, b.minX + 1, b.maxX - 1);
      desired.z = clamp(desired.z, b.minZ + 1, b.maxZ - 1);
      desired.y = clamp(desired.y, 0.8, 9);
      this.camera.position.lerp(desired, 1 - Math.exp(-9 * dt));
      const lookTarget = new THREE.Vector3(p.x, p.y + targetY + 0.1, p.z);
      this.cameraLook.lerp(lookTarget, 1 - Math.exp(-12 * dt));
      this.camera.lookAt(this.cameraLook);
      if (this.cameraShake > 0) {
        this.camera.position.x += (Math.random() - 0.5) * this.cameraShake;
        this.camera.position.y += (Math.random() - 0.5) * this.cameraShake;
        this.cameraShake = Math.max(0, this.cameraShake - dt * 0.45);
      }
      return;
    }
    if (this.state === 'choice') {
      const pos = new THREE.Vector3(3.4, 1.9, -11.7);
      const look = new THREE.Vector3(0, 1.6, -16.5);
      this.camera.position.lerp(pos, 1 - Math.exp(-3.5 * dt));
      this.cameraLook.lerp(look, 1 - Math.exp(-4 * dt));
      this.camera.lookAt(this.cameraLook);
      return;
    }
    if (this.state === 'sequence') {
      if (this.cameraShake > 0) {
        this.camera.position.x += (Math.random() - 0.5) * this.cameraShake;
        this.camera.position.y += (Math.random() - 0.5) * this.cameraShake;
        this.cameraShake = Math.max(0, this.cameraShake - dt * 0.35);
      }
      return;
    }
    const p = this.player.position;
    const targetY = 1.52 - this.crouchAmt * 0.42;
    const pitch = this.pitch;
    const dist = 4.25 - this.crouchAmt * 0.35;
    const hd = Math.cos(pitch) * dist;
    const desired = new THREE.Vector3(
      p.x + Math.sin(this.yaw) * hd,
      p.y + targetY + 0.65 + Math.sin(pitch) * 3.0,
      p.z + Math.cos(this.yaw) * hd
    );
    if (desired.x > -22.5 && desired.x < 22.5 && desired.z < -16.4) {
      desired.z = -16.2;
      desired.y = Math.max(desired.y, 2.2);
    }
    const b = this.bounds || this.compound.bounds;
    desired.x = clamp(desired.x, b.minX - 3, b.maxX + 3);
    desired.z = clamp(desired.z, b.minZ, b.maxZ + 4);
    desired.y = Math.max(0.65, desired.y);
    const k = 1 - Math.exp(-8 * dt);
    this.camera.position.lerp(desired, k);
    const lookTarget = new THREE.Vector3(p.x, p.y + targetY + 0.18, p.z);
    this.cameraLook.lerp(lookTarget, 1 - Math.exp(-11 * dt));
    this.camera.lookAt(this.cameraLook);
    if (this.cameraShake > 0) {
      this.camera.position.x += (Math.random() - 0.5) * this.cameraShake;
      this.camera.position.y += (Math.random() - 0.5) * this.cameraShake;
      this.cameraShake = Math.max(0, this.cameraShake - dt * 0.45);
    }
  }

  updateTruckCamera(dt) {
    const base = this.truckCam.pos;
    const look = this.truckCam.look;
    const shake = this.truck?.shake || 0;
    const jitter = 0.012 + shake * 0.45;
    this.camera.position.set(
      base.x + (Math.random() - 0.5) * jitter,
      base.y + (Math.random() - 0.5) * jitter,
      base.z + (Math.random() - 0.5) * jitter * 0.5
    );
    this.camera.lookAt(
      look.x + (Math.random() - 0.5) * jitter * 0.5,
      look.y + (Math.random() - 0.5) * jitter * 0.5,
      look.z
    );
    this.camera.rotation.z += shake * 0.06;
  }

  updateMarkers(dt) {
    if (this.phase !== 'lot') return;
    const pulse = 0.75 + Math.sin(this.time * 2.4) * 0.2;
    for (const m of [this.holeMarker, this.doorMarker, this.compound?.ventMarker]) {
      if (!m || !m.visible) continue;
      if (m.userData?.glow) { m.userData.glow.material.opacity = 0.45 + Math.sin(this.time * 2.4) * 0.2; m.userData.glow.position.y = 2.7 + Math.sin(this.time * 1.8) * 0.1; }
      if (m.userData?.ring) m.userData.ring.scale.setScalar(pulse);
      if (m.position) m.position.y = 0.1 + Math.sin(this.time * 1.8) * 0.02;
    }
    if (this.compound?.ventMarker?.material) this.compound.ventMarker.material.opacity = 0.11 + Math.sin(this.time * 2.2) * 0.04;
    this.holeMarker.visible = this.holeMarker.visible && !this.inside && !this.doorTriggered;
    this.doorMarker.visible = this.doorMarker.visible && !this.doorTriggered && this.branch !== 'side';
    if (this.branch === 'side') this.compound.ventMarker.visible = true;
  }
  updateHudState() {
    const label = document.getElementById('threatLabel');
    if (!label) return;
    if (this.phase === 'store') label.textContent = this.standoffStarted ? 'SOMETHING IS BEHIND YOU' : 'THE AIR IS TOO STILL';
    else if (this.phase === 'chase') label.textContent = 'THEY ARE RIGHT BEHIND YOU';
    else if (this.phase === 'truck') label.textContent = 'GO';
    else if (this.branch === 'side') label.textContent = 'SOMETHING IS MOVING INSIDE';
    else if (this.inside) label.textContent = 'THE AIR IS TOO STILL';
    else label.textContent = 'THE AIR IS QUIET';
  }

  caption(speaker, text, dur = 3, who = null) {
    this.callbacks.onCaption?.({ speaker, text });
    this.captionTimer = dur;
    const key = (who || speaker || '').toUpperCase();
    const actor = key === 'TIM' ? this.tim : key === 'MACE' ? this.mace : key === 'JAKE' ? this.jake : null;
    actor?.setTalking?.(Math.max(0.8, dur * 0.75), 1);
  }

  updateCaption(dt) {
    if (this.captionTimer > 0) {
      this.captionTimer -= dt;
      if (this.captionTimer <= 0) this.callbacks.onCaption?.(null);
    }
  }

  finish(result) {
    if (this.state === 'done') return;
    this.state = 'done';
    this.running = false;
    this.callbacks.onPrompt?.(null);
    this.callbacks.onCaption?.(null);
    this.callbacks.hideChoice?.();
    document.getElementById('canHud')?.classList.add('hidden');
    document.getElementById('escapeTimer')?.classList.add('hidden');
    document.getElementById('qte')?.classList.add('hidden');
    document.getElementById('keypad')?.classList.add('hidden');
    document.getElementById('noteOverlay')?.classList.add('hidden');
    document.getElementById('deathFx')?.classList.remove('show');
    audio.setAmbientScene('end');
    audio.setMood('sad');
    const elapsed = (performance.now() - this.startTime) / 1000;
    const mm = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const ss = String(Math.floor(elapsed % 60)).padStart(2, '0');
    this.callbacks.onEnd?.({ ...result, time: `${mm}:${ss}` });
  }

  setPaused(v) {
    this.paused = v;
    if (v) {
      document.exitPointerLock?.();
      audio.setWind(0.15);
    } else if (this.running) {
      audio.setWind(0.7);
    }
  }

  teleport(x, z) {
    if (!this.player) return;
    this.player.position.set(x, 0, z);
    this.camera.position.set(x, 2.5, z + 4.2);
    this.cameraLook.set(x, 1.5, z - 3);
    this.inside = z < 12;
    if (this.inside) {
      this.holeMarker.visible = false;
      this.doorMarker.visible = true;
    }
  }

  dispose() {
    this.disposed = true;
    this.running = false;
    this.tasks = [];
    document.exitPointerLock?.();
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('blur', this.onBlur);
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('pointerlockchange', this.onPointerLock);
    const canvas = document.getElementById('scene');
    canvas?.removeEventListener('pointerdown', this.onCanvasDown);
    canvas?.removeEventListener('pointermove', this.onCanvasMove);
    canvas?.removeEventListener('pointerup', this.onCanvasUp);
    canvas?.removeEventListener('pointercancel', this.onCanvasUp);
    const dial = document.getElementById('qteTap');
    if (dial) {
      dial.removeEventListener('pointerdown', this.onDialDown);
      dial.removeEventListener('pointerup', this.onDialUp);
    }
    const joy = document.getElementById('joystick');
    if (joy) {
      joy.removeEventListener('pointerdown', this.onJoyDown);
      joy.removeEventListener('pointermove', this.onJoyMove);
      joy.removeEventListener('pointerup', this.onJoyUp);
      joy.removeEventListener('pointercancel', this.onJoyUp);
    }
    document.getElementById('storyInfo')?.classList.remove('visible');
    document.getElementById('storyInfo')?.classList.add('hidden');
    document.getElementById('qte')?.classList.add('hidden');
    document.getElementById('keypad')?.classList.add('hidden');
    document.getElementById('noteOverlay')?.classList.add('hidden');
    document.getElementById('canHud')?.classList.add('hidden');
    document.getElementById('escapeTimer')?.classList.add('hidden');
    document.getElementById('deathFx')?.classList.remove('show');
  }
}
