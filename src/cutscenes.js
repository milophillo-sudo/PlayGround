import * as THREE from 'three';
import {
  buildTruckInteriorScene, buildCityBlock, buildStoreInteriorScene, buildHighwayScene,
  buildFurnitureCompound,
} from './world.js';
import { createTruck, createCrate, box, cyl, MAT, blobShadow } from './models.js';
import { TimCharacter } from './characters.js';
import { audio } from './audio.js';

/* ------------------------------------------------------------------ *
 *  helpers
 * ------------------------------------------------------------------ */
const EASE = t => t * t * (3 - 2 * t);
const V = (x, y, z) => new THREE.Vector3(x, y, z);

function cameraAt(camera, t, keys, shake = 0) {
  let a = keys[0], b = keys[keys.length - 1];
  for (let i = 0; i < keys.length - 1; i++) {
    if (t <= keys[i + 1].t) { a = keys[i]; b = keys[i + 1]; break; }
  }
  const span = Math.max(0.0001, b.t - a.t);
  const u = EASE(Math.min(1, Math.max(0, (t - a.t) / span)));
  const pa = a.pos, pb = b.pos, la = a.look, lb = b.look;
  camera.position.set(
    pa[0] + (pb[0] - pa[0]) * u,
    pa[1] + (pb[1] - pa[1]) * u,
    pa[2] + (pb[2] - pa[2]) * u
  );
  const look = V(
    la[0] + (lb[0] - la[0]) * u,
    la[1] + (lb[1] - la[1]) * u,
    la[2] + (lb[2] - la[2]) * u
  );
  const fov = (a.fov ?? 46) + ((b.fov ?? 46) - (a.fov ?? 46)) * u;
  camera.fov = fov;
  camera.updateProjectionMatrix();
  if (shake) {
    const s = shake;
    camera.position.x += (Math.random() - 0.5) * s;
    camera.position.y += (Math.random() - 0.5) * s;
    camera.position.z += (Math.random() - 0.5) * s;
    look.x += (Math.random() - 0.5) * s * 0.7;
    look.y += (Math.random() - 0.5) * s * 0.7;
  }
  camera.lookAt(look);
}

function addTim(scene, position, rotationY = Math.PI) {
  const tim = new TimCharacter();
  tim.group.position.copy(position);
  tim.group.rotation.y = rotationY;
  scene.add(tim.group);
  return tim;
}

function walkTim(tim, dt, speed = 1.2, direction = -1, distance = 1) {
  tim.moveSpeed = speed;
  tim.update(dt);
  tim.group.position.z += direction * speed * dt * distance;
}

/* ------------------------------------------------------------------ *
 *  Director
 * ------------------------------------------------------------------ */
export class CutsceneDirector {
  constructor({ onFade, onSubtitle, onCard, onProgress, onScene, onComplete, onLetterbox, onSkipUI }) {
    this.onFade = onFade;
    this.onSubtitle = onSubtitle;
    this.onCard = onCard;
    this.onProgress = onProgress;
    this.onScene = onScene;
    this.onComplete = onComplete;
    this.onLetterbox = onLetterbox;
    this.onSkipUI = onSkipUI;
    this.scene = null;
    this.camera = null;
    this.current = null;
    this.elapsed = 0;
    this.running = false;
    this.paused = false;
    this.aborted = false;
    this.resolveScene = null;
    this.activeSub = null;
    this.phase = 'idle';
    this.fadeTimer = 0;
    this.onlyScene = null;
    this.scenes = makeScenes();
  }

  async play({ from = 0, only = null, skipCard = false } = {}) {
    this.running = true;
    this.aborted = false;
    this.paused = false;
    this.onlyScene = only;
    this.onLetterbox?.(true);
    this.onSkipUI?.(true);
    this.onFade?.(1);
    await new Promise(r => setTimeout(r, 80));
    this.onFade?.(0);
    const list = only !== null ? this.scenes.filter((s, i) => i === only) : this.scenes.slice(from);
    for (let i = 0; i < list.length; i++) {
      if (this.aborted) break;
      const index = only !== null ? only : from + i;
      await this.playScene(list[i], index, skipCard);
      if (this.aborted) break;
      if (only !== null) break;
    }
    this.running = false;
    this.current = null;
    this.onSubtitle?.(null);
    this.onCard?.(null);
    this.onSkipUI?.(false);
    this.onLetterbox?.(false);
    this.onProgress?.(0);
    this.onFade?.(0);
    this.onComplete?.({ skipped: this.aborted, only: this.onlyScene });
  }

  skip() {
    if (!this.running) return;
    this.aborted = true;
    this.onSkipUI?.(false);
    if (this.current) {
      this.phase = 'playing';
      this.finishScene();
    }
  }

  pause(v) { this.paused = v; }

  playScene(def, index, skipCard = false) {
    return new Promise(resolve => {
      this.resolveScene = resolve;
      this.elapsed = index;
      const scene = new THREE.Scene();
      const resources = def.build(scene) || {};
      this.scene = scene;
      this.camera = resources.camera ?? new THREE.PerspectiveCamera(46, 16 / 9, 0.1, 700);
      if (!resources.camera) {
        this.camera.position.set(0, 2, 8);
        this.camera.lookAt(0, 1, 0);
        scene.add(this.camera);
      }
      this.current = { scene, camera: this.camera, def, resources, t: 0, events: new Set(), index };
      this.onScene?.(scene, this.camera);
      this.onProgress?.(index / this.scenes.length);
      if (!skipCard) this.onCard?.(def.kicker, def.title);
      else this.onCard?.(null);
      this.activeSub = null;
      this.onSubtitle?.(null);
      this.phase = 'playing';
      this.t = 0;
      audio.setAmbientScene(def.ambient ?? 'menu');
      if (def.onStart) def.onStart(resources);
      this.onFade?.(1);
      requestAnimationFrame(() => this.onFade?.(0));
      // safety timer for cards
      this.cardTimer = 4.2;
    });
  }

  finishScene() {
    if (this.phase !== 'playing') return;
    this.phase = 'outro';
    this.fadeTimer = 0.72;
    this.onFade?.(1);
    this.onSubtitle?.(null);
    this.onCard?.(null);
  }

  update(dt) {
    if (!this.current || this.paused) return;
    if (this.phase === 'outro') {
      this.fadeTimer -= dt;
      if (this.fadeTimer <= 0) {
        const resolve = this.resolveScene;
        this.resolveScene = null;
        this.phase = 'idle';
        this.current = null;
        this.onFade?.(0);
        resolve?.();
      }
      return;
    }
    if (this.phase !== 'playing') return;
    const cur = this.current;
    cur.t += dt;
    this.t = cur.t;
    const def = cur.def;
    const t = cur.t;

    if (this.cardTimer > 0) {
      this.cardTimer -= dt;
      if (this.cardTimer <= 0) this.onCard?.(null);
    }

    // camera
    if (typeof def.camera === 'function') def.camera(this.camera, t, cur.resources, cur);
    else if (def.cameraKeys) cameraAt(this.camera, t, def.cameraKeys, cur.resources.shake || 0);

    // world / scene animation
    cur.resources.update?.(dt, t, cur);
    def.update?.(dt, t, cur.resources, cur);

    // events
    if (def.events) {
      for (let i = 0; i < def.events.length; i++) {
        if (!cur.events.has(i) && t >= def.events[i].t) {
          cur.events.add(i);
          try { def.events[i].fn?.(cur.resources, cur); } catch (e) { console.warn(e); }
        }
      }
    }

    // subtitles
    let active = null;
    if (def.subtitles) {
      for (const s of def.subtitles) {
        if (t >= s.t && t < s.t + (s.dur ?? 3.4)) { active = s; break; }
      }
    }
    const key = active ? active.text + (active.speaker ?? '') : null;
    if (key !== this.activeSub) {
      this.activeSub = key;
      this.onSubtitle?.(active);
    }

    this.onProgress?.((cur.index + Math.min(1, t / def.duration)) / this.scenes.length);

    if (t >= def.duration) this.finishScene();
  }
}

/* ------------------------------------------------------------------ *
 *  scene definitions
 * ------------------------------------------------------------------ */
function makeScenes() {
  return [
    {
      id: 'truck', duration: 15.5, ambient: 'truck',
      kicker: 'DAY 47  ·  06:12 AM', title: 'THE LAST CAN',
      build: (scene) => {
        const res = buildTruckInteriorScene(scene);
        res.camera = new THREE.PerspectiveCamera(42, 16 / 9, 0.05, 400);
        res.shake = 0;
        return res;
      },
      cameraKeys: [
        { t: 0, pos: [0.58, 1.3, 0.18], look: [-0.48, 1.2, 0.05], fov: 34 },
        { t: 3.4, pos: [0.74, 1.35, 0.08], look: [-0.45, 1.27, -0.05], fov: 36 },
        { t: 5.6, pos: [1.02, 1.5, -0.35], look: [-0.5, 1.5, -0.35], fov: 48 },
        { t: 9.2, pos: [0.92, 1.52, -0.62], look: [-0.55, 1.56, -0.55], fov: 44 },
        { t: 12.2, pos: [0.48, 1.55, -0.9], look: [-0.4, 1.42, 0.2], fov: 46 },
        { t: 15.5, pos: [0.32, 1.35, -0.35], look: [-0.5, 1.34, 0.6], fov: 40 },
      ],
      subtitles: [
        { t: 0.7, dur: 3.2, speaker: 'TIM', text: 'Day forty-seven. The rain is still winning.' },
        { t: 4.7, dur: 3.5, speaker: 'TIM', text: 'Two cans left. Then the cabinets are just... cabinets.' },
        { t: 9.0, dur: 3.1, speaker: '', text: 'He ate slowly. Hunger was easier to ignore with a plan.' },
        { t: 12.4, dur: 2.9, speaker: 'TIM', text: 'There has to be a town left somewhere.' },
      ],
      events: [
        { t: 0.5, fn: () => audio.canOpen() },
        { t: 3.0, fn: () => audio.swallow() },
        { t: 10.4, fn: () => audio.heartbeat() },
      ],
      onStart: (res) => { res.tim.time = 0; },
    },

    {
      id: 'city', duration: 10.5, ambient: 'city',
      kicker: 'DAY 51  ·  THE OUTSKIRTS', title: 'NOBODY LEFT TO ASK',
      build: (scene) => {
        const res = buildCityBlock(scene);
        res.camera = new THREE.PerspectiveCamera(46, 16 / 9, 0.1, 400);
        res.tim = addTim(scene, V(0.4, 0, 8.5), Math.PI);
        res.stepT = 0;
        res.speed = 1.0;
        res.update = (dt, t) => {
          res.tim.moveSpeed = t > 0.6 && t < 8.2 ? 1.15 : 0;
          res.tim.update(dt);
          if (t > 0.6 && t < 8.0) res.tim.group.position.z -= 1.15 * dt;
          // drizzle-ish sway
          if (t > 0.6 && t < 8.0) {
            res.stepT -= dt;
            if (res.stepT <= 0) { res.stepT = 0.52; audio.step(); }
          }
          res.tim.parts.head.rotation.x = Math.sin(t * 0.5) * 0.04;
        };
        return res;
      },
      cameraKeys: [
        { t: 0, pos: [5.6, 3.1, 15.5], look: [0.2, 1.9, -6], fov: 50 },
        { t: 3.5, pos: [4.4, 2.2, 11.8], look: [0.1, 1.35, -3], fov: 46 },
        { t: 7.0, pos: [2.1, 1.55, 4.2], look: [0.2, 1.45, -8], fov: 44 },
        { t: 10.5, pos: [1.4, 1.8, -2.0], look: [0.2, 1.7, -10], fov: 42 },
      ],
      subtitles: [
        { t: 0.8, dur: 3.3, speaker: '', text: 'The city had been picked clean. Mostly.' },
        { t: 4.5, dur: 3.2, speaker: 'TIM', text: 'A store. A roof. Maybe a can that rolled under a shelf.' },
      ],
      events: [
        { t: 5.4, fn: () => audio.birds(1.4) },
        { t: 8.9, fn: () => audio.woodKnock() },
      ],
    },

    {
      id: 'store', duration: 10.8, ambient: 'store',
      kicker: 'MART  ·  AISLE 4', title: 'CANNED GOODS',
      build: (scene) => {
        const res = buildStoreInteriorScene(scene);
        res.camera = new THREE.PerspectiveCamera(44, 16 / 9, 0.05, 300);
        res.tim = addTim(scene, V(-1.35, 0, 1.4), Math.PI);
        res.held = cyl(0.085, 0.085, 0.2, new THREE.MeshStandardMaterial({ color: 0xb64127, roughness: 0.6, metalness: 0.25 }), 10);
        res.held.rotation.x = Math.PI / 2;
        res.held.position.set(0, -0.34, -0.02);
        res.held.visible = false;
        res.tim.parts.armR.elbow.add(res.held);
        res.shelfCan = res.heroCan;
        res.update = (dt, t) => {
          res.tim.moveSpeed = 0;
          res.tim.update(dt);
          // reach for the can
          const reach = Math.max(0, Math.min(1, (t - 3.4) / 1.6)) * Math.max(0, Math.min(1, (7.4 - t) / 1.2));
          res.tim.parts.armR.shoulder.rotation.x = -1.25 * reach;
          res.tim.parts.armR.shoulder.rotation.z = 0.25 * reach;
          res.tim.parts.armR.elbow.rotation.x = -1.2 * reach;
          res.tim.parts.head.rotation.y = -0.25 * reach;
          res.tim.parts.head.rotation.x = -0.2 * reach;
          if (t > 5.3) { res.shelfCan.visible = false; res.held.visible = true; }
          if (t > 7.2) {
            res.tim.parts.armR.shoulder.rotation.x = -0.4;
            res.tim.parts.armR.elbow.rotation.x = -0.6;
            res.tim.parts.head.rotation.y = 0;
          }
        };
        return res;
      },
      cameraKeys: [
        { t: 0, pos: [2.9, 1.65, 4.9], look: [-1.4, 1.25, -1.4], fov: 48 },
        { t: 3.2, pos: [1.9, 1.55, 2.9], look: [-2.4, 1.2, -1.4], fov: 44 },
        { t: 5.4, pos: [0.35, 1.38, 0.6], look: [-2.8, 1.24, -1.45], fov: 38 },
        { t: 7.4, pos: [1.2, 1.5, 1.8], look: [-2.3, 1.25, -1.4], fov: 42 },
        { t: 10.8, pos: [3.3, 1.85, 4.0], look: [-1.2, 1.45, 0.4], fov: 48 },
      ],
      subtitles: [
        { t: 0.7, dur: 3.2, speaker: '', text: 'Aisles of nothing. Dust where the food used to be.' },
        { t: 4.4, dur: 2.7, speaker: 'TIM', text: 'Peaches.' },
        { t: 7.4, dur: 3.2, speaker: '', text: 'One can. He held it like it was made of gold.' },
      ],
      events: [
        { t: 0.4, fn: () => audio.cloth() },
        { t: 5.3, fn: () => audio.canOpen() },
        { t: 6.2, fn: () => audio.heartbeat() },
      ],
    },

    {
      id: 'sidewalk', duration: 11.2, ambient: 'city',
      kicker: 'DAY 51  ·  4:40 PM', title: 'THE SIDEWALK',
      build: (scene) => {
        const res = buildCityBlock(scene);
        res.camera = new THREE.PerspectiveCamera(48, 16 / 9, 0.05, 300);
        res.tim = addTim(scene, V(-1.3, 0, -5.8), Math.PI + 0.15);
        res.tim.parts.head.rotation.x = 0.38;
        res.update = (dt, t) => {
          res.tim.moveSpeed = t < 3.8 ? 0.85 : 0;
          res.tim.update(dt);
          if (t < 3.5) res.tim.group.position.z -= 0.65 * dt;
          // recoil
          if (t > 5.2 && t < 8.0) {
            const u = Math.min(1, (t - 5.2) / 0.9);
            res.tim.group.position.z += 0.55 * dt * (1 - u * 0.4);
            res.tim.group.rotation.y = Math.PI + 0.15 - 0.35 * u;
            res.tim.parts.armR.shoulder.rotation.x = -1.9 * u;
            res.tim.parts.armR.elbow.rotation.x = -1.9 * u;
            res.tim.parts.head.rotation.x = 0.5 * u;
            res.tim.parts.torso.rotation.x = 0.15 * u;
          }
          if (t > 8.0) {
            res.tim.parts.armR.shoulder.rotation.x = -0.7;
            res.tim.parts.armR.elbow.rotation.x = -0.8;
            res.tim.parts.head.rotation.x = 0.2;
          }
        };
        return res;
      },
      cameraKeys: [
        { t: 0, pos: [3.8, 2.0, -0.5], look: [-1.4, 1.2, -8.4], fov: 48 },
        { t: 3.9, pos: [1.8, 1.35, -3.4], look: [-1.8, 1.1, -8.8], fov: 46 },
        { t: 5.0, pos: [-0.2, 0.72, -6.1], look: [-2.7, 0.35, -9.2], fov: 52 },
        { t: 7.0, pos: [0.1, 0.62, -7.2], look: [-2.6, 0.3, -9.4], fov: 46 },
        { t: 9.0, pos: [1.9, 1.5, -2.2], look: [-2.1, 1.35, -7.6], fov: 44 },
        { t: 11.2, pos: [3.4, 1.9, 1.4], look: [-1.8, 1.35, -7.5], fov: 48 },
      ],
      subtitles: [
        { t: 0.5, dur: 3.0, speaker: '', text: 'Outside, the street was quiet enough to hear the grass growing.' },
        { t: 4.1, dur: 2.5, speaker: '', text: 'Then his boot caught something that was not concrete.' },
        { t: 6.8, dur: 3.3, speaker: 'TIM', text: 'Sorry. Sorry — I didn\'t—' },
        { t: 9.2, dur: 2.0, speaker: '', text: 'He had seen a hundred of them. It never got easier.' },
      ],
      events: [
        { t: 0.4, fn: () => audio.step() },
        { t: 2.2, fn: () => audio.step(true) },
        { t: 4.0, fn: () => audio.sting() },
        { t: 6.6, fn: () => audio.heartbeat() },
        { t: 8.9, fn: () => audio.cloth() },
      ],
    },

    {
      id: 'highway', duration: 12.5, ambient: 'highway',
      kicker: 'DAY 54  ·  ROUTE 9', title: 'THE FIELD',
      build: (scene) => {
        const res = buildHighwayScene(scene);
        res.camera = new THREE.PerspectiveCamera(50, 16 / 9, 0.1, 500);
        const base = res.update;
        res.update = (dt, t) => {
          base?.(dt, t);
          res.truck.position.z = 22 - t * 2.35;
          res.truck.position.x = -0.3;
          res.truck.rotation.y = Math.PI + 0.015 * Math.sin(t);
          audio.setWind(0.85 + Math.sin(t * 0.3) * 0.1);
        };
        return res;
      },
      cameraKeys: [
        { t: 0, pos: [12.5, 7.0, 32], look: [0, 2.2, -8], fov: 52 },
        { t: 3.2, pos: [10.6, 3.1, 15], look: [0, 1.6, -14], fov: 48 },
        { t: 5.8, pos: [7.2, 2.2, 6], look: [1, 1.6, -18], fov: 44 },
        { t: 8.4, pos: [11.0, 5.2, -2], look: [28, 5.8, -16], fov: 54 },
        { t: 10.8, pos: [14.5, 6.5, 10], look: [26, 4.8, -16], fov: 50 },
        { t: 12.5, pos: [16.0, 7.5, 22], look: [22, 4.2, -14], fov: 48 },
      ],
      subtitles: [
        { t: 0.8, dur: 3.2, speaker: 'TIM', text: 'Route nine. Nothing but dead trees and the same four songs.' },
        { t: 4.3, dur: 3.3, speaker: '', text: 'Then the trees opened up — and the field was full of airplane.' },
        { t: 8.2, dur: 3.4, speaker: 'TIM', text: 'They never even finished boarding.' },
      ],
      events: [
        { t: 0.6, fn: () => audio.setMood('calm') },
        { t: 4.0, fn: () => audio.sting() },
      ],
    },

    {
      id: 'car', duration: 12.8, ambient: 'highway',
      kicker: 'DAY 54  ·  6:58 PM', title: 'THE FOGGED WINDOW',
      build: (scene) => {
        const res = buildHighwayScene(scene, { withCar: true });
        res.camera = new THREE.PerspectiveCamera(42, 16 / 9, 0.03, 300);
        res.shake = 0;
        const car = res.car;
        res.skeletonVisible = true;
        const base = res.update;
        res.update = (dt, t) => {
          base?.(dt, t);
          if (t > 3.1 && t < 5.4) {
            const u = Math.min(1, (t - 3.1) / 2.0);
            car.fogMat.uniforms.wipe.value.set(-1.0 + u * 2.0, 0.48 + Math.sin(u * 7) * 0.03);
            car.fogMat.uniforms.radius.value = Math.min(0.19, u * 0.24);
            car.sleeve.visible = true;
            car.sleeve.position.z = 0.55 - u * 0.8;
          } else if (t >= 5.4) {
            car.fogMat.uniforms.opacity.value = Math.max(0.16, 0.92 - (t - 5.4) * 0.22);
            car.sleeve.visible = false;
          }
          if (t > 4.75) res.shake = Math.max(0, 0.08 - (t - 4.75) * 0.08);
        };
        return res;
      },
      cameraKeys: [
        { t: 0, pos: [-9.0, 2.0, 4.3], look: [-5.6, 1.35, 1.7], fov: 44 },
        { t: 2.7, pos: [-7.4, 1.6, 3.3], look: [-5.45, 1.34, 1.8], fov: 38 },
        { t: 4.5, pos: [-6.65, 1.43, 2.55], look: [-5.4, 1.34, 1.82], fov: 34 },
        { t: 5.1, pos: [-6.2, 1.42, 2.2], look: [-5.4, 1.36, 1.84], fov: 32 },
        { t: 6.2, pos: [-6.9, 1.55, 3.2], look: [-5.5, 1.3, 1.8], fov: 42 },
        { t: 8.8, pos: [-8.4, 1.9, 4.6], look: [-5.6, 1.2, 1.5], fov: 46 },
        { t: 12.8, pos: [-10.5, 2.6, 6.2], look: [-4.8, 1.0, 0.2], fov: 48 },
      ],
      subtitles: [
        { t: 0.8, dur: 2.8, speaker: 'TIM', text: 'A car. Doors shut. Maybe a map.' },
        { t: 3.2, dur: 2.6, speaker: '', text: 'The glass was warm with fog. Someone had breathed in there.' },
        { t: 5.9, dur: 1.1, speaker: 'TIM', text: '...' },
        { t: 7.0, dur: 2.4, speaker: 'TIM', text: 'Nope.' },
        { t: 9.4, dur: 3.0, speaker: '', text: 'He stopped checking cars after that.' },
      ],
      events: [
        { t: 3.0, fn: () => audio.cloth() },
        { t: 4.7, fn: () => { audio.sting(); audio.heartbeat(); } },
        { t: 7.0, fn: () => audio.roar() },
      ],
    },

    {
      id: 'homestead', duration: 14.5, ambient: 'gameplay',
      kicker: 'DAY 57  ·  HOMEWOOD COUNTY', title: 'TRESPASSER',
      build: (scene) => {
        const res = buildFurnitureCompound(scene, { cutscene: true });
        res.camera = new THREE.PerspectiveCamera(46, 16 / 9, 0.1, 500);
        const truck = createTruck({ headlights: false });
        truck.position.set(8.2, 0, 25.5);
        truck.rotation.y = Math.PI + 0.08;
        scene.add(truck);
        res.tim = addTim(scene, V(0.2, 0, 23.5), Math.PI);
        res.tim.parts.head.rotation.x = 0.03;
        res.stepT = 0;
        res.update = (dt, t) => {
          if (t > 0.8) {
            res.tim.moveSpeed = t < 8.2 ? 0.95 : 0;
            res.tim.update(dt);
            if (t < 8.2) res.tim.group.position.z -= 0.95 * dt;
            res.stepT -= dt;
            if (res.stepT <= 0 && t < 8.2) { res.stepT = 0.56; audio.step(); }
          }
          res.animate?.(dt, t);
          if (t > 8.2) {
            res.tim.parts.head.rotation.x = 0.06 + Math.sin(t * 0.7) * 0.02;
            res.tim.parts.head.rotation.y = 0.06;
          }
        };
        const base = res.animate;
        res.animate = (dt, t) => base?.(dt, t);
        return res;
      },
      cameraKeys: [
        { t: 0, pos: [18.0, 6.0, 38], look: [2, 4.4, -8], fov: 52 },
        { t: 3.5, pos: [10.2, 3.0, 30], look: [2, 2.8, -4], fov: 50 },
        { t: 6.5, pos: [4.6, 2.2, 22], look: [0.5, 1.7, 8], fov: 48 },
        { t: 9.0, pos: [1.6, 1.55, 17.4], look: [0, 1.5, 10.8], fov: 44 },
        { t: 11.6, pos: [2.8, 3.8, 18.8], look: [0, 2.3, 5], fov: 50 },
        { t: 14.5, pos: [5.4, 7.0, 20], look: [0, 4.0, -4], fov: 54 },
      ],
      subtitles: [
        { t: 1.3, dur: 3.2, speaker: 'TIM', text: 'Homewood Furniture. Closed for the end of the world.' },
        { t: 5.1, dur: 3.1, speaker: '', text: 'No lights. No movement. Just a gate with a warning.' },
        { t: 9.2, dur: 3.0, speaker: 'TIM', text: 'Trespassers will be shot.' },
        { t: 12.2, dur: 2.2, speaker: '', text: 'He was tired enough to take the risk.' },
      ],
      events: [
        { t: 0.8, fn: () => audio.doorCreak() },
        { t: 5.2, fn: () => audio.setMood('tense') },
        { t: 11.9, fn: () => audio.heartbeat() },
      ],
      onStart: (res) => res.tim?.parts.head && (res.tim.parts.head.rotation.x = 0.02),
    },
  ];
}
