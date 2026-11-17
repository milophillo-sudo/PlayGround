import * as THREE from 'three';
import {
  makePerson, animatePerson, animateKiller, makeKillerModel, makeLabel,
  makeDesk, makeChair, makeTeacherDesk, makeSignPlane, box
} from './props.js';
import { UI, sleep } from './ui.js';

// ─────────────────────────────────────────────────────────────
// small math helpers
// ─────────────────────────────────────────────────────────────
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const easeInOut = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeOut = t => 1 - Math.pow(1 - t, 3);
const easeIn = t => t * t * t;
const smooth = t => t * t * (3 - 2 * t);

function v(x, y, z) { return { x, y, z }; }
function mix(a, b, t) { return v(lerp(a.x, b.x, t), lerp(a.y, b.y, t), lerp(a.z, b.z, t)); }

function rand(a, b) { return a + Math.random() * (b - a); }

// ─────────────────────────────────────────────────────────────
// cinematic engine
// ─────────────────────────────────────────────────────────────
export class Cinematic {
  constructor(game) {
    this.game = game;
    this.active = false;
    this.shots = [];
    this.index = 0;
    this.shotT = 0;
    this.total = 0;
    this.flags = 0;
    this.resolve = null;
    this.name = '';
    this.group = new THREE.Group();
    this.group.name = 'cinematicActors';
    game.scene.add(this.group);
    this.actors = [];
    this.lights = [];
    this.extra = [];
    this._look = new THREE.Vector3();
    this._shakeSeed = Math.random() * 100;
    this._savedFov = 74;
    this._ended = false;
  }

  // ── actor helpers ──────────────────────────────────────────
  person(opts, x, z, yaw = 0) {
    const model = makePerson(opts);
    model.position.set(x, 0, z);
    model.rotation.y = yaw;
    this.group.add(model);
    const actor = {
      model, kind: 'person', x, z, yaw, mode: 'idle', speed: 0, talk: 0,
      talkT: 0, panic: 0, seated: false, gesture: 0, baseX: x, baseZ: z
    };
    this.actors.push(actor);
    return actor;
  }

  killer(x, z, yaw = 0) {
    const model = makeKillerModel();
    model.position.set(x, 0, z);
    model.rotation.y = yaw;
    this.group.add(model);
    const actor = { model, kind: 'killer', x, z, yaw, mode: 'walk', speed: 0 };
    this.actors.push(actor);
    return actor;
  }

  prop(mesh, x, y, z, ry = 0) {
    mesh.position.set(x, y, z);
    mesh.rotation.y = ry;
    this.group.add(mesh);
    return mesh;
  }

  light(color, intensity, dist, x, y, z) {
    const l = new THREE.PointLight(color, intensity, dist, 2);
    l.position.set(x, y, z);
    this.group.add(l);
    this.lights.push(l);
    return l;
  }

  say(actor, text, dur = 2.2) {
    if (!actor) return;
    actor.talk = 1;
    actor.talkT = dur;
  }

  makeAura(color = 0xb9a6ff, scale = 1) {
    const g = new THREE.Group();
    const rings = [];
    for (let i = 0; i < 4; i++) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.7 + i * 0.32, 0.014 + i * 0.004, 6, 48),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.55 - i * 0.09, blending: THREE.AdditiveBlending, depthWrite: false })
      );
      ring.rotation.x = Math.PI / 2 + rand(-0.2, 0.2);
      ring.rotation.z = rand(0, 6.28);
      g.add(ring);
      rings.push(ring);
    }
    const positions = new Float32Array(180 * 3);
    for (let i = 0; i < 180; i++) {
      const a = rand(0, Math.PI * 2), r = rand(0.25, 2.2);
      positions[i * 3] = Math.cos(a) * r;
      positions[i * 3 + 1] = rand(-0.1, 3.1);
      positions[i * 3 + 2] = Math.sin(a) * r;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({
      color, size: 0.055, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false
    }));
    g.add(pts);
    g.scale.setScalar(scale);
    g.userData.rings = rings;
    g.userData.pts = pts;
    return g;
  }

  // ── lifecycle ──────────────────────────────────────────────
  async play(name, buildShots, opts = {}) {
    if (this.active) return false;
    this.active = true;
    this._ended = false;
    this.name = name;
    this.shots = buildShots();
    this.index = 0;
    this.shotT = 0;
    this.total = 0;
    this.flags = 0;
    this.actors = [];
    this.lights = [];
    this.extra = [];
    while (this.group.children.length) this.group.remove(this.group.children[0]);
    this.group.visible = true;

    this.game.state = 'cutscene';
    this.game.setInputActive(false);
    this.game.hideGameplayEntities(true);
    this._savedFov = this.game.camera.fov;
    UI.hideScreens();
    UI.showHud(false);
    UI.showCine(true);
    UI.letterbox(true);
    UI.cineSkip(true);
    UI.setDown(false);
    UI.el.app.classList.add('cinema');
    try { document.exitPointerLock?.(); } catch {}

    const p = new Promise(res => { this.resolve = res; });
    opts.onStart?.(this);
    this.enterShot(0);
    return p;
  }

  enterShot(i) {
    const shot = this.shots[i];
    if (!shot) return;
    this.shotT = 0;
    this.flags = 0;
    UI.cineHideCard();
    UI.cineGradeHide();
    UI.cineClearSub();
    if (shot.lines) for (const l of shot.lines) l._shown = false;
    if (shot.cards) for (const c of shot.cards) c._shown = false;
    if (shot.flashes) for (const f of shot.flashes) f._shown = false;
    shot.onStart?.(this);
    if (shot.final) {
      // final shot is triggered by its own onStart / onUpdate
    }
  }

  finish(skipped = false) {
    if (!this.active || this._ended) return;
    this._ended = true;
    this.active = false;
    UI.showCine(false);
    UI.letterbox(false);
    UI.cineSkip(false);
    UI.cineLines(false);
    UI.cineFlare(false);
    UI.cineHideCard();
    UI.cineGradeHide();
    UI.cineClearSub();
    UI.el.app.classList.remove('cinema');
    this.game.camera.fov = this._savedFov;
    this.game.camera.updateProjectionMatrix();
    this.game.camera.rotation.z = 0;
    while (this.group.children.length) this.group.remove(this.group.children[0]);
    for (const l of this.lights) { try { l.parent?.remove(l); } catch {} }
    this.lights = [];
    this.actors = [];
    this.game.hideGameplayEntities(false);
    this.game.onCutsceneDone(this.name, skipped);
    const r = this.resolve;
    this.resolve = null;
    if (r) r({ skipped });
  }

  skip() {
    if (!this.active) return;
    this.finish(true);
  }

  update(dt) {
    if (!this.active) return;
    const shot = this.shots[this.index];
    if (!shot) { this.finish(); return; }
    const scale = shot.timeScale ?? 1;
    const sdt = dt * scale;
    this.shotT += sdt;
    this.total += dt;
    const t = clamp(this.shotT / shot.dur, 0, 1);

    // camera motion
    const e = (shot.ease || easeInOut)(t);
    if (shot.cam) shot.cam(this, this.shotT, sdt, t);
    else this.applyCamera(shot, e, t);

    // scheduled films
    if (shot.lines) {
      for (const l of shot.lines) {
        if (!l._shown && this.shotT >= l.at) {
          l._shown = true;
          UI.cineSubtitle(l.who, l.text, l.dur || 3.4);
          this.say(l.actor, l.dur || 2.2);
          if (l.sfx) l.sfx(this.game.audio);
        }
      }
    }
    if (shot.cards) {
      for (const c of shot.cards) {
        if (!c._shown && this.shotT >= c.at) {
          c._shown = true;
          UI.cineCard(c.kicker, c.title, c.align);
          if (c.dur) setTimeout(() => { if (this.active && this.index === this.shots.indexOf(shot)) UI.cineHideCard(); }, c.dur * 1000);
        }
      }
    }
    if (shot.flashes) {
      for (const f of shot.flashes) {
        if (!f._shown && this.shotT >= f.at) {
          f._shown = true;
          UI.cineFlash();
          this.game.audio?.stinger();
        }
      }
    }
    if (shot.onUpdate) shot.onUpdate(this, this.shotT, sdt, t);
    this.updateActors(sdt, shot);

    if (this.shotT >= shot.dur) {
      shot.onEnd?.(this);
      this.index++;
      if (this.index >= this.shots.length) this.finish();
      else this.enterShot(this.index);
    }
  }

  applyCamera(shot, e, t) {
    const cam = this.game.camera;
    const from = shot.from;
    const to = shot.to || shot.from;
    const pos = mix(from, to, e);
    const lookA = shot.lookFrom || from.look || { x: pos.x + Math.sin(pos.ry || 0), y: 1.4, z: pos.z };
    const lookB = shot.lookTo || to.look || lookA;
    const look = mix(lookA, lookB, shot.lookEase ? shot.lookEase(t) : e);
    // handheld drift
    const hand = shot.handheld ?? 0.012;
    const sx = Math.sin(this.total * 0.9 + this._shakeSeed) * hand;
    const sy = Math.cos(this.total * 0.71 + 2.1) * hand;
    const shake = (shot.shake || 0) * (shot.shakeEase ? shot.shakeEase(t) : 1);
    const shx = Math.sin(this.total * 39 + this._shakeSeed) * shake + Math.sin(this.total * 71) * shake * 0.4;
    const shy = Math.cos(this.total * 43 + 1.7) * shake;
    cam.position.set(pos.x + sx + shx, pos.y + sy + shy, pos.z + sx * 0.6 + shx * 0.5);
    this._look.set(look.x + shx * 0.5, look.y + shy * 0.5, look.z);
    cam.lookAt(this._look);
    cam.rotation.z += (shot.roll || 0) * e + Math.sin(this.total * 0.6) * (shot.rollDrift || 0);
    const fov = lerp(shot.fov ?? 55, shot.fovTo ?? shot.fov ?? 55, e);
    cam.fov = fov;
    cam.updateProjectionMatrix();
  }

  updateActors(dt, shot) {
    for (const a of this.actors) {
      if (a.kind === 'person') {
        if (a.talkT > 0) {
          a.talkT -= dt;
          a.talk = Math.max(0, a.talkT > 0 ? 1 : 0);
        } else a.talk = Math.max(0, a.talk - dt * 3);
        animatePerson(a.model, dt, {
          mode: a.mode, speed: a.speed, talk: a.talk, panic: a.panic,
          gesture: a.gesture, crouch: a.seated ? 0.32 : 0
        });
        if (a.seated) {
          const p = a.model.userData.parts;
          if (p) {
            p.hips.position.y = 0.61;
            p.hips.rotation.x = 0;
            p.legL.rotation.x = -1.35;
            p.legR.rotation.x = -1.35;
            p.kneeL.rotation.x = 1.45;
            p.kneeR.rotation.x = 1.45;
          }
        }
        if (a.pose) a.pose(a.model, this.total);
        if (a.talkT > 0) a.model.position.x = a.baseX + Math.sin(this.total * 2.5) * 0.008;
      } else if (a.kind === 'killer') {
        animateKiller(a.model, dt, a.mode, this.total);
        if (a.pose) a.pose(a.model, this.total);
      }
    }
  }
}

// ─────────────────────────────────────────────────────────────
// INTRO — school day, report cards, lockdown
// ─────────────────────────────────────────────────────────────
export function introShots(cine) {
  const game = cine.game;
  const world = game.world;
  world.setLighting('day');
  world.setBodiesVisible(false);

  const teacher = cine.person({
    shirt: 0x6a5a42, pants: 0x30343a, hair: 0x8a8478, hairStyle: 'short',
    skin: 0xd9b49b, height: 1.7, tie: 0x7a2c36, glasses: true, female: true
  }, -9.3, 16.1, Math.PI);

  const jake = cine.person({
    shirt: 0x2a3550, pants: 0x22252d, hair: 0x241a14, hairStyle: 'short',
    skin: 0xc79b7d, height: 1.82, backpack: 0x3d4f64
  }, -4.4, 10.9, 0);
  jake.seated = true;

  const maya = cine.person({
    shirt: 0x5b3d78, pants: 0x24242c, hair: 0x1f1713, hairStyle: 'pony',
    skin: 0xb98768, height: 1.66, female: true, backpack: 0x7a3b4a
  }, -11.6, 8.5, 0);
  maya.seated = true;

  const devon = cine.person({
    shirt: 0x3f6b4f, pants: 0x2c3340, hair: 0x402b1d, hairStyle: 'curly',
    skin: 0x8a5b3e, height: 1.72, backpack: 0x3e4f6b, cap: 0x2b3b55
  }, -11.6, 6.1, 0);
  devon.seated = true;

  const priya = cine.person({
    shirt: 0x7a343e, pants: 0x262b33, hair: 0x241a14, hairStyle: 'bun',
    skin: 0xa9724f, height: 1.6, female: true, glasses: true
  }, -9.0, 10.9, 0);
  priya.seated = true;

  const extras = [];
  for (let i = 0; i < 5; i++) {
    const a = cine.person({
      shirt: [0x445d46, 0x6b5a3a, 0x4d4660, 0x2f4f52, 0x7a6a58][i],
      pants: 0x2a3040, hair: [0x241a14, 0x3a2618, 0x151210][i % 3],
      skin: [0xe4c3a8, 0x8a5b3e, 0xd9b49b][i % 3], height: 1.58 + i * 0.04
    }, -10.5 + i * 1.65, 6.1 + (i % 3) * 2.4, 0);
    a.seated = true;
    extras.push(a);
  }

  const bellLine = (audio) => {
    if (!audio?.ctx) return;
    const t = audio.ctx.currentTime;
    for (let i = 0; i < 3; i++) {
      audio.tone(880, 0.35, 0.07, 'square', 820, t + i * 0.42);
      audio.tone(1320, 0.35, 0.03, 'sine', 1180, t + i * 0.42);
    }
  };
  const intercom = (audio) => {
    if (!audio?.ctx) return;
    audio.noise(0.22, 0.025, 1600, 'bandpass');
    audio.tone(740, 0.18, 0.03, 'sine', 620);
  };

  return [
    // 1 — establishing
    {
      dur: 7.2, fov: 39, fovTo: 47, handheld: 0.018,
      from: v(96, 3.3, 10.5), to: v(75, 2.7, 4.6),
      lookFrom: v(58.6, 3.9, 0), lookTo: v(58.5, 3.4, 0),
      roll: -0.012,
      onStart: (c) => {
        c.game.camera.far = 260; c.game.camera.updateProjectionMatrix();
        c.game.audio?.ui();
        UI.cineFlare(true);
      },
      lines: [
        { at: 0.8, who: 'NARRATOR', text: 'Millbrook High. Population: <span class="em">1,203</span>. Ambition: pending.', dur: 3.6 },
        { at: 4.5, who: 'NARRATOR', text: 'A normal Tuesday. Right up until fourth period.', dur: 2.8 }
      ],
      cards: [{ at: 0.5, kicker: 'SEVEN HOURS EARLIER', title: 'A NORMAL TUESDAY', align: 'left', dur: 4.6 }],
      onEnd: (c) => { UI.cineFlare(false); c.game.audio?.ui(); }
    },

    // 2 — classroom push-in
    {
      dur: 8.4, fov: 58, fovTo: 48, handheld: 0.02, rollDrift: 0.004,
      from: v(-8.0, 1.62, 4.15), to: v(-8.0, 1.5, 8.9),
      lookFrom: v(-8.7, 1.4, 18), lookTo: v(-6.0, 1.25, 14.2),
      onStart: (c) => {
        c.game.audio?.startAmbience?.();
        c.game.audio?.setTension(0.06);
        UI.cineCard('MILLBROOK HIGH — ROOM 101', 'POP QUIZ', 'left');
      },
      lines: [
        { at: 0.7, who: 'MS. VELLA', text: 'Pop quiz. No warning. That is how life works.', actor: teacher, dur: 3.2 },
        { at: 4.4, who: 'JAKE', text: 'I studied for this. I studied... the wrong subject.', actor: jake, dur: 2.6 },
        { at: 6.7, who: 'MAYA', text: 'You studied?', actor: maya, dur: 1.5 }
      ],
      onEnd: () => UI.cineHideCard()
    },

    // 3 — report card / Z+
    {
      dur: 8.6, fov: 32, fovTo: 27, handheld: 0.01,
      from: v(-2.6, 1.42, 9.7), to: v(-3.35, 1.3, 10.15),
      lookFrom: v(-4.4, 1.15, 10.9), lookTo: v(-4.55, 1.08, 10.9),
      roll: 0.016,
      onStart: (c) => {
        UI.cineGrade([
          ['MATH', 'Z', '', 'zed'], ['ENGLISH', 'Z', '', 'zed'], ['SCIENCE', 'Z', '', 'zed'],
          ['GYM', 'Z+', '', 'zed'], ['HALL CONDUCT', 'Q', '', 'bad']
        ], { name: 'JAKE', stamp: 'Z+' });
        c._gradeRows = 0;
        c._stamped = false;
        c._wrong = false;
        c.game.audio?.stinger();
      },
      lines: [
        { at: 0.5, who: 'MS. VELLA', text: 'Jake. Your grades came back.', actor: teacher, dur: 2.2 },
        { at: 3.0, who: 'JAKE', text: 'All Z.', actor: jake, dur: 1.4 },
        { at: 4.4, who: 'DEVON', text: 'Z!? <span class="em">Bro.</span> That is not even a grade.', actor: devon, dur: 2.2 },
        { at: 6.8, who: 'JAKE', text: 'It has a plus.', actor: jake, dur: 1.6 }
      ],
      onUpdate: (c, st) => {
        const marks = [1.0, 1.6, 2.2, 2.8, 3.4];
        while (c._gradeRows < marks.length && st >= marks[c._gradeRows]) {
          UI.cineGradeRow(c._gradeRows);
          c.game.audio?.typeBlip(1 + c._gradeRows * 0.12);
          c._gradeRows++;
        }
        if (!c._stamped && st >= 5.2) {
          c._stamped = true;
          UI.cineStamp();
          c.game.audio?.scare();
          c.game.camera.rotation.z += 0.03;
        }
        if (!c._wrong && st >= 5.25) {
          c._wrong = true;
          UI.el.gradeEl.classList.add('wrong');
          c.game.audio?.stinger();
        }
      },
      onEnd: () => UI.cineGradeHide()
    },

    // 4 — Q!?
    {
      dur: 6.3, fov: 34, fovTo: 46, handheld: 0.014, shake: 0.02, shakeEase: t => t > 0.2 ? 1 : 0,
      from: v(-7.4, 1.58, 14.9), to: v(-8.3, 1.5, 15.7),
      lookFrom: v(-9.3, 1.55, 16.2), lookTo: v(-9.2, 1.35, 16.4),
      onStart: (c) => {
        teacher.yaw = 0; teacher.model.rotation.y = 0;
        c.game.audio?.scare();
      },
      lines: [
        { at: 0.5, who: 'MS. VELLA', text: 'And you. <span class="scare">Q!? WHAT IS Q!?</span>', actor: teacher, dur: 2.2 },
        { at: 3.1, who: 'MS. VELLA', text: 'A Q is not a grade. A Q is a <span class="em">question</span>. Like: why are you like this?', actor: teacher, dur: 3.2 }
      ],
      cards: [{ at: 1.1, kicker: 'SEMESTER GRADE', title: 'Q!?', align: 'center', dur: 2.1 }],
      flashes: [{ at: 1.05 }, { at: 2.5 }],
      onEnd: (c) => { teacher.yaw = Math.PI; teacher.model.rotation.y = Math.PI; UI.cineHideCard(); }
    },

    // 5 — bell / lockdown
    {
      dur: 7.0, fov: 52, fovTo: 42, handheld: 0.025, shake: 0.006,
      from: v(-24, 2.9, 1.5), to: v(-10, 2.2, 0.4),
      lookFrom: v(-8, 1.8, 0), lookTo: v(6, 1.6, -0.2),
      onStart: (c) => {
        world.setLighting('lockdown');
        bellLine(c.game.audio);
        intercom(c.game.audio);
        // students pour into the corridor
        for (let i = 0; i < 7; i++) {
          const a = cine.person({
            shirt: [0x445d46, 0x6b5a3a, 0x4d4660, 0x7a343e][i % 4],
            pants: 0x2a3040, hair: 0x241a14, skin: [0xd9b49b, 0x8a5b3e, 0xa9724f][i % 3],
            height: 1.55 + (i % 4) * 0.05
          }, -34 + i * 2.6, -1.0 + (i % 3) * 0.9, Math.PI / 2);
          a.mode = 'run'; a.speed = 4.2; a.panic = 0.7;
          a.runTo = -5 + i * 3.4;
        }
        c._siren = true;
        c.game.audio?.alarmStart();
      },
      lines: [
        { at: 0.5, who: 'INTERCOM', text: 'Attention students. Millbrook High is now in <span class="scare">lockdown</span>. This is not a drill.', dur: 3.1 },
        { at: 4.0, who: 'INTERCOM', text: 'Also, the cafeteria is out of pizza. Please remain calm.', dur: 2.8 }
      ],
      cards: [{ at: 0.25, kicker: '12:04 PM', title: 'LOCKDOWN', align: 'left', dur: 3.4 }],
      onUpdate: (c, st, dt) => {
        for (const a of c.actors) {
          if (a.runTo === undefined) continue;
          a.model.position.x += dt * 3.2;
          a.model.position.z += Math.sin(c.total * 2 + a.baseZ) * dt * 0.4;
          if (a.model.position.x > a.runTo) a.model.visible = false;
        }
      },
      onEnd: (c) => {
        UI.cineHideCard();
        c.game.audio?.alarmStop();
        for (const a of c.actors) if (a.runTo !== undefined) a.model.visible = false;
      }
    },

    // 6 — the hall monitor
    {
      dur: 10.2, fov: 44, fovTo: 33, handheld: 0.018, shake: 0.01, shakeEase: t => t > 0.72 ? (t - 0.72) * 8 : 0,
      from: v(-6, 1.35, 1.7), to: v(-1.2, 0.95, 1.15),
      lookFrom: v(14, 1.5, -0.2), lookTo: v(9.5, 1.75, 0.1),
      onStart: (c) => {
        world.setLighting('lockdown');
        const k = cine.killer(20, 0, -Math.PI / 2);
        k.mode = 'walk';
        k.actor = k;
        c._killer = k;
        cine.light(0xff2233, 1.4, 12, 8, 2.8, 0);
        cine.light(0xa9c8ff, 0.8, 10, -2, 2.6, 1.5);
        // axe sparks on the floor
        const sparkMat = new THREE.MeshBasicMaterial({ color: 0xffb066 });
        c._sparks = [];
        for (let i = 0; i < 12; i++) {
          const s = new THREE.Mesh(new THREE.SphereGeometry(0.025, 4, 4), sparkMat);
          c.group.add(s); c._sparks.push(s);
        }
        c._sparkT = 0;
      },
      lines: [
        { at: 0.8, who: 'INTERCOM', text: 'The hall monitor will now... <span class="scare">see you.</span>', dur: 3.0 },
        { at: 4.6, who: 'HALL MONITOR', text: '<span class="scare">NO RUNNING IN THE HALLS.</span>', dur: 2.4 },
        { at: 7.3, who: 'JAKE', text: '...okay. New plan. Do not be seen.', dur: 2.4 }
      ],
      cards: [{ at: 8.35, kicker: 'CHAPTER ONE', title: 'DETENTION', align: 'center', dur: 2.5 }],
      flashes: [{ at: 8.25 }],
      onUpdate: (c, st, dt) => {
        const k = c._killer;
        if (!k) return;
        const targetX = st > 6.8 ? 3.2 : 20 - st * 1.05;
        k.model.position.x += (targetX - k.model.position.x) * Math.min(1, dt * 1.8);
        k.yaw = -Math.PI / 2;
        k.model.rotation.y = k.yaw;
        if (st > 6.8) k.mode = 'chase';
        else if (st > 2) k.mode = 'walk';
        // sparks track the axe
        c._sparkT += dt;
        for (let i = 0; i < c._sparks.length; i++) {
          const s = c._sparks[i];
          const age = ((c._sparkT * 2.4 + i * 0.37) % 1);
          s.position.set(k.model.position.x - 0.35, 0.08 + age * 0.35, 0.35 + Math.sin(i * 4.2 + c.total * 9) * 0.25);
          s.material.opacity = 1 - age;
          s.material.transparent = true;
          s.scale.setScalar(1 - age * 0.7);
        }
      },
      onEnd: (c) => {
        UI.cineHideCard();
        c.game.audio?.stinger();
        c.game.fadeToBlack();
      }
    }
  ];
}

// ─────────────────────────────────────────────────────────────
// jump scare — first person, in your face
// ─────────────────────────────────────────────────────────────
export function jumpscareShots(cine) {
  const game = cine.game;
  const world = game.world;
  world.setLighting('lockdown');
  const active = game.avatar || game.player;
  const k = cine.killer(active.pos.x + 0.2, active.pos.z + 0.2, 0);
  k.mode = 'attack';
  const headLight = cine.light(0xff3044, 3.2, 5, active.pos.x, 2.2, active.pos.z);
  const faceGlow = cine.light(0xffa0a0, 1.3, 2.5, active.pos.x, 1.9, active.pos.z + 1.2);
  const startPos = {
    x: game.camera.position.x, y: game.camera.position.y, z: game.camera.position.z
  };
  const p = active.pos;
  return [
    {
      dur: 2.8, fov: 60, fovTo: 96, handheld: 0.01, shake: 0.055,
      onStart: (c) => {
        c.game.audio?.scare();
        c.game.audio?.chaseStart();
        UI.cineFlash();
        UI.cineLines(true);
      },
      cam: (c, st, dt, t) => {
        const cam = c.game.camera;
        // camera is dragged around to face the killer
        const yaw = (game.camYaw ?? (game.player.yaw + Math.PI)) + Math.PI;
        const radius = lerp(0.65, 0.28, Math.min(1, st / 1.1));
        cam.position.set(
          p.x + Math.sin(yaw) * radius + Math.sin(st * 49) * 0.025,
          lerp(1.62, 1.48, Math.min(1, st)) + Math.sin(st * 37) * 0.025,
          p.z + Math.cos(yaw) * radius + Math.cos(st * 53) * 0.025
        );
        cam.lookAt(p.x, lerp(1.5, 1.22, Math.min(1, st)), p.z);
        cam.rotation.z = Math.sin(st * 24) * 0.06;
        cam.fov = lerp(60, 104, Math.min(1, st / 1.6));
        cam.updateProjectionMatrix();
        k.model.position.set(p.x + Math.sin(yaw) * 0.74, 0, p.z + Math.cos(yaw) * 0.74);
        k.model.rotation.y = yaw + Math.PI;
        faceGlow.position.set(p.x + Math.sin(yaw) * 0.4, 1.9, p.z + Math.cos(yaw) * 0.4);
        headLight.position.set(p.x, 2.4, p.z);
        // axe slam
        const axe = k.model.userData.parts?.axe;
        if (axe) axe.rotation.x = Math.sin(st * 8) * 0.2;
      },
      onUpdate: (c, st) => {
        if (st > 1.25 && !c._flashed) {
          c._flashed = true;
          UI.cineFlash();
          UI.jumpscare(true);
          c.game.audio?.scare();
          c.game.audio?.growl();
        }
      },
      onEnd: (c) => {
        UI.jumpscare(false);
        UI.cineLines(false);
        c.game.audio?.chaseStop();
      }
    }
  ];
}

// ─────────────────────────────────────────────────────────────
// JAKE REVEAL — “RYŌIKI TENKAI”
// ─────────────────────────────────────────────────────────────
export function jakeRevealShots(cine) {
  const game = cine.game;
  const world = game.world;
  world.setLighting('lockdown');
  world.setBodiesVisible(false);

  // scene is staged near the east exit
  const baseX = 48, baseZ = 0;
  const killer = cine.killer(43.5, 0.2, Math.PI / 2);
  killer.mode = 'idle';

  const jake = cine.person({
    shirt: 0x1e2740, pants: 0x1b1d25, hair: 0x17110d, hairStyle: 'short',
    skin: 0xc79b7d, height: 1.86, backpack: null, cap: null
  }, 53.5, 0, -Math.PI / 2);

  const aura = cine.makeAura(0xb9a6ff, 1.0);
  aura.position.set(jake.x, 0.2, jake.z);
  cine.group.add(aura);
  aura.visible = false;
  const aura2 = cine.makeAura(0xffd7a0, 1.3);
  aura2.position.set(jake.x, 0.15, jake.z);
  cine.group.add(aura2);
  aura2.visible = false;

  const keyLight = cine.light(0x9fd8ff, 4.5, 18, 56, 3.2, 1.5);
  const rim = cine.light(0xb296ff, 0.2, 10, 50, 2, -1.5);
  const lightning = cine.light(0xeaf5ff, 0, 40, 48, 9, 3);

  const rainGeo = new THREE.BufferGeometry();
  const N = 420;
  const rp = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    rp[i * 3] = rand(42, 62); rp[i * 3 + 1] = rand(0, 10); rp[i * 3 + 2] = rand(-8, 8);
  }
  rainGeo.setAttribute('position', new THREE.BufferAttribute(rp, 3));
  const rain = new THREE.Points(rainGeo, new THREE.PointsMaterial({ color: 0x9ec4e8, size: 0.035, transparent: true, opacity: 0.45, depthWrite: false }));
  cine.group.add(rain);

  const sparkMat = new THREE.MeshBasicMaterial({ color: 0xcbb8ff });
  const sparks = [];
  for (let i = 0; i < 26; i++) {
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.022, 4, 4), sparkMat);
    cine.group.add(s); sparks.push(s);
  }

  const setJakePose = (model, t) => {
    const p = model.userData.parts;
    if (!p) return;
    p.armR.rotation.x = -1.35 + Math.sin(t * 1.3) * 0.04;
    p.armR.rotation.z = -0.45;
    p.elbowR.rotation.x = -0.65;
    p.headPivot.rotation.x = -0.08;
    p.headPivot.rotation.y = Math.sin(t * 0.9) * 0.05;
    p.torso.rotation.z = Math.sin(t * 1.1) * 0.01;
  };
  jake.pose = setJakePose;

  return [
    // 1 — dread, killer at the exit
    {
      dur: 6.2, fov: 48, fovTo: 38, handheld: 0.016, roll: -0.015,
      from: v(52.2, 1.34, 3.3), to: v(49.4, 1.08, 2.4),
      lookFrom: v(44, 1.7, 0), lookTo: v(43.8, 1.45, 0.1),
      onStart: (c) => {
        c.game.audio?.alarmStart();
        c.game.audio?.setTension(0.9);
        c.game.audio?.heartbeat(0.55);
        UI.cineCard('2:14 AM — EAST HALL', 'NO WAY OUT', 'left');
      },
      lines: [
        { at: 0.6, who: 'HALL MONITOR', text: 'No hall pass. No exit. <span class="scare">No witnesses.</span>', dur: 3.0 },
        { at: 4.1, who: 'YOU', text: '...this is going to be a Q.', dur: 1.8 }
      ],
      onUpdate: (c, st) => {
        killer.model.rotation.y = Math.PI / 2 + Math.sin(st * 0.8) * 0.06;
        if (st > 3.4) killer.mode = 'walk';
      },
      onEnd: (c) => { UI.cineHideCard(); c.game.audio?.growl(); }
    },

    // 2 — Jake arrives
    {
      dur: 7.4, fov: 44, fovTo: 31, handheld: 0.012, shake: 0.006,
      from: v(54.6, 1.42, 5.2), to: v(52.2, 1.28, 2.8),
      lookFrom: v(53.2, 1.4, 0), lookTo: v(52.4, 1.6, 0),
      onStart: (c) => {
        keyLight.intensity = 5.5;
        c.game.audio?.ui();
        c.game.audio?.stinger();
        UI.cineCard('SOMEONE IS STILL HERE', 'JAKE', 'left');
      },
      lines: [
        { at: 0.5, who: 'JAKE', text: 'Sorry I am late. I was doing my hair.', actor: jake, dur: 2.7 },
        { at: 3.7, who: 'HALL MONITOR', text: '...new student?', dur: 1.5 },
        { at: 5.2, who: 'JAKE', text: 'No. <span class="em">Unfinished business.</span>', actor: jake, dur: 2.1 }
      ],
      onUpdate: (c, st, dt) => {
        const target = 51.2;
        if (jake.model.position.x > target) jake.model.position.x -= dt * (st > 4 ? 1.3 : 0.65);
        jake.mode = st > 5 ? 'walk' : 'idle';
        killer.mode = 'idle';
      },
      onEnd: (c) => { UI.cineHideCard(); c.game.audio?.heartbeat(0.8); }
    },

    // 3 — domain expansion
    {
      dur: 9.2, fov: 38, fovTo: 66, handheld: 0.006, shake: 0.024, shakeEase: t => t > 0.4 ? 1 : 0.3,
      from: v(48.2, 0.52, 1.7), to: v(53.8, 2.8, 3.4),
      lookFrom: v(52.4, 1.45, 0), lookTo: v(52.4, 1.7, 0),
      timeScale: 0.72,
      onStart: (c) => {
        aura.visible = true;
        aura2.visible = true;
        rim.intensity = 12;
        lightning.intensity = 10;
        c.game.audio?.alarmStop();
        c.game.audio?.scare();
        c.game.audio?.chaseStart();
        UI.cineLines(true);
        UI.cineFlare(true);
        UI.cineCard('DOMAIN EXPANSION', 'RYŌIKI TENKAI', 'center');
      },
      lines: [
        { at: 0.7, who: 'JAKE', text: '<span class="scare">RYŌIKI TENKAI.</span>', actor: jake, dur: 2.8 },
        { at: 3.9, who: 'JAKE', text: 'Student council. Vice president. <span class="em">Professional ghost.</span>', actor: jake, dur: 3.1 },
        { at: 7.3, who: 'HALL MONITOR', text: '...that is not on the attendance sheet.', dur: 1.7 }
      ],
      flashes: [{ at: 0.65 }, { at: 3.8 }],
      onUpdate: (c, st, dt) => {
        const a = clamp(st / 1.2, 0, 1);
        aura.scale.setScalar(0.3 + a * 1.25 + Math.sin(st * 3) * 0.04);
        aura2.scale.setScalar(0.2 + a * 1.9 + Math.sin(st * 2 + 1) * 0.06);
        aura.position.set(jake.model.position.x, 0.15, 0);
        aura2.position.set(jake.model.position.x, 0.1, 0);
        for (let i = 0; i < aura.userData.rings.length; i++) {
          const r = aura.userData.rings[i];
          r.rotation.z += dt * (0.5 + i * 0.2);
          r.scale.setScalar(1 + Math.sin(c.total * 2 + i) * 0.05);
        }
        aura.userData.pts.rotation.y += dt * 0.7;
        // sparks orbit Jake
        for (let i = 0; i < sparks.length; i++) {
          const ang = c.total * (1.2 + (i % 5) * 0.2) + i * 0.7;
          const rad = 0.4 + (i % 7) * 0.12;
          sparks[i].position.set(jake.model.position.x + Math.cos(ang) * rad, 0.2 + ((i * 0.17 + c.total * 0.9) % 2.4), Math.sin(ang) * rad);
          sparks[i].material.opacity = 0.5 + Math.sin(c.total * 4 + i) * 0.5;
        }
        // killer is forced back, slowly
        if (st > 2.5) {
          killer.model.position.x -= dt * 0.38;
          killer.model.rotation.z = Math.sin(st * 6) * 0.03;
        }
        jake.mode = 'idle';
        const p = jake.model.userData.parts;
        if (p) {
          p.armR.rotation.x = -2.15 + Math.sin(c.total * 2) * 0.06;
          p.armR.rotation.z = -0.65;
          p.elbowR.rotation.x = -0.3;
          p.headPivot.rotation.x = -0.18;
        }
        // rain falls
        const arr = rainGeo.attributes.position.array;
        for (let i = 0; i < N; i++) {
          arr[i * 3 + 1] -= dt * 11;
          if (arr[i * 3 + 1] < 0) arr[i * 3 + 1] = 10;
        }
        rainGeo.attributes.position.needsUpdate = true;
      },
      onEnd: (c) => {
        UI.cineLines(false);
        UI.cineFlare(false);
        UI.cineHideCard();
        c.game.audio?.chaseStop();
        c.game.audio?.stinger();
      }
    },

    // 4 — impact / axe goes flying
    {
      dur: 4.8, fov: 48, fovTo: 34, handheld: 0.02, shake: 0.04,
      from: v(50.8, 1.15, 1.8), to: v(49.2, 1.55, 1.2),
      lookFrom: v(42.8, 1.5, 0), lookTo: v(40.8, 0.65, 0.4),
      timeScale: 0.6,
      onStart: (c) => {
        c.game.audio?.scare();
        c.game.audio?.alarmStop();
        UI.cineFlash();
        killer.mode = 'scream';
        c._flying = [];
        for (let i = 0; i < 12; i++) {
          const shard = box(rand(0.04, 0.12), rand(0.02, 0.05), rand(0.03, 0.1),
            new THREE.MeshBasicMaterial({ color: i % 3 ? 0xcbd2d6 : 0x7e222c }));
          cine.group.add(shard);
          c._flying.push({ mesh: shard, vx: rand(2, 8), vy: rand(2, 7), vz: rand(-4, 4), rx: rand(-8, 8) });
        }
      },
      lines: [
        { at: 0.4, who: 'JAKE', text: 'Class dismissed.', actor: jake, dur: 2.0 }
      ],
      onUpdate: (c, st, dt) => {
        const p = killer.model.userData.parts;
        if (p) {
          p.body.rotation.z = Math.min(1.35, st * 0.9);
          p.body.position.x = -st * 0.8;
        }
        for (const s of c._flying) {
          s.mesh.position.set(44 + s.vx * st, 1.3 + s.vy * st - 4.9 * st * st, s.vz * st);
          s.mesh.rotation.x += s.rx * dt;
          s.mesh.rotation.z += s.rx * dt * 0.7;
          if (s.mesh.position.y < 0.03) s.mesh.position.y = 0.03;
        }
        jake.model.rotation.y = -Math.PI / 2 + Math.sin(st * 1.4) * 0.04;
      },
      cards: [{ at: 2.4, kicker: 'SEMESTER GRADE', title: 'Z+', align: 'left', dur: 2.0 }],
      onEnd: (c) => {
        UI.cineHideCard();
        c.game.fadeToBlack();
      }
    }
  ];
}

// ─────────────────────────────────────────────────────────────
// POLICE STATION — the walk home
// ─────────────────────────────────────────────────────────────
export function policeShots(cine, opts = {}) {
  const game = cine.game;
  const world = game.world;
  world.setLighting('outside');

  const jake = cine.person({
    shirt: 0x1e2740, pants: 0x1b1d25, hair: 0x17110d, hairStyle: 'short',
    skin: 0xc79b7d, height: 1.86
  }, 96, 0, Math.PI / 2);

  const maya = cine.person({
    shirt: 0x5b3d78, pants: 0x24242c, hair: 0x1f1713, hairStyle: 'pony',
    skin: 0xb98768, height: 1.66, female: true
  }, 91, 1.6, Math.PI / 2);
  const devon = cine.person({
    shirt: 0x3f6b4f, pants: 0x2c3340, hair: 0x402b1d, hairStyle: 'curly',
    skin: 0x8a5b3e, height: 1.72, cap: 0x2b3b55
  }, 88, -1.7, Math.PI / 2);
  const priya = cine.person({
    shirt: 0x7a343e, pants: 0x262b33, hair: 0x241a14, hairStyle: 'bun',
    skin: 0xa9724f, height: 1.6, female: true, glasses: true
  }, 86, 0.2, Math.PI / 2);

  const group = [jake, maya, devon, priya];
  for (const a of group) { a.mode = 'run'; a.speed = 4.2; }

  // rain in the lot
  const rainGeo = new THREE.BufferGeometry();
  const N = 700;
  const rp = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    rp[i * 3] = rand(58, 134); rp[i * 3 + 1] = rand(0, 12); rp[i * 3 + 2] = rand(-12, 12);
  }
  rainGeo.setAttribute('position', new THREE.BufferAttribute(rp, 3));
  const rain = new THREE.Points(rainGeo, new THREE.PointsMaterial({ color: 0x9ec4e8, size: 0.045, transparent: true, opacity: 0.35, depthWrite: false }));
  cine.group.add(rain);

  const blue = cine.light(0x4f79ff, 8, 28, 130, 5, 3);
  const red = cine.light(0xff3344, 4, 18, 128, 4, 6);

  const police = game.world.outdoorGroup;
  return [
    {
      dur: 8.6, fov: 46, fovTo: 38, handheld: 0.02, roll: 0.012,
      from: v(105, 7.4, 11.5), to: v(111, 3.1, 4.5),
      lookFrom: v(134, 4.2, 0), lookTo: v(132, 2.3, 0),
      onStart: (c) => {
        c.game.audio?.alarmStop();
        c.game.audio?.startAmbience?.();
        c.game.audio?.setUnderwater?.(false);
        c.game.audio?.setTension(0.1);
        c.game.audio?.win?.();
        UI.cineCard('2:41 AM', 'MILLBROOK POLICE STATION', 'left');
      },
      lines: [
        { at: 0.6, who: 'JAKE', text: 'We made it. Nobody died. <span class="em">Permanently.</span>', actor: jake, dur: 3.4 },
        { at: 4.5, who: 'MAYA', text: 'I am never doing group work again.', actor: maya, dur: 2.3 },
        { at: 7.0, who: 'DEVON', text: 'I got the crowbar. I want that on the record.', actor: devon, dur: 2.0 }
      ],
      onUpdate: (c, st, dt) => {
        for (const a of group) {
          a.model.position.x += dt * 1.25;
          a.model.position.z += Math.sin(c.total * 3 + a.baseZ) * dt * 0.03;
          a.model.rotation.y = Math.PI / 2;
          a.speed = st > 5 ? 2.4 : 4.2;
          a.mode = st > 5 ? 'walk' : 'run';
        }
        const arr = rainGeo.attributes.position.array;
        for (let i = 0; i < N; i++) {
          arr[i * 3 + 1] -= dt * 13;
          if (arr[i * 3 + 1] < 0) arr[i * 3 + 1] = 12;
        }
        rainGeo.attributes.position.needsUpdate = true;
        blue.intensity = 7 + Math.sin(c.total * 7) * 4;
        red.intensity = 3 + Math.cos(c.total * 6.4) * 2.5;
      },
      onEnd: (c) => {
        UI.cineHideCard();
        c.game.fadeToBlack();
      }
    },
    {
      dur: 5.0, fov: 38, fovTo: 30, handheld: 0.008,
      from: v(131, 2.0, 5.2), to: v(130.4, 1.55, 3.6),
      lookFrom: v(133.6, 2.6, 0), lookTo: v(133, 2.2, 0),
      onStart: (c) => {
        UI.cineCard('FINAL GRADE', 'SURVIVED', 'center');
        c.game.audio?.win();
      },
      lines: [
        { at: 0.7, who: 'JAKE', text: 'Tell them I want extra credit.', actor: jake, dur: 2.2 },
        { at: 3.1, who: 'NARRATOR', text: 'The school is closed indefinitely. The report cards are evidence.', dur: 3.0 }
      ],
      onEnd: (c) => {
        UI.cineHideCard();
        c.game.fadeToBlack();
      }
    }
  ];
}
