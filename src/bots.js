import * as THREE from 'three';
import { makePerson, animatePerson, makeDangerIcon, makeLabel } from './props.js';

const BOT_DEFS = [
  {
    id: 'maya', name: 'MAYA', role: 'follow',
    shirt: 0x5b3d78, pants: 0x24242c, hair: 0x1f1713, hairStyle: 'pony',
    female: true, backpack: 0x7a3b4a, skin: 0xb98768, voice: 0.95,
    barks: {
      found: ['I found something. Don\'t make it weird.', 'Got it. You\'re welcome.', 'This better be the right key.'],
      door: ['Door\'s open. Try not to scream.', 'Unlocked. I\'m basically a locksmith now.', 'I got it. You owe me a slushie.'],
      killer: ['KILLER! MOVE!', 'He\'s here — go, go, go!', 'Axe. Actual axe. Running now.'],
      calm: ['I think we lost him.', 'Okay. I\'m alive. Cool.', 'My report card was better than this.'],
      rescue: ['Up you get. You\'re not dying in a school.', 'I\'ve got you. Breathe.', 'Don\'t thank me. Just run.'],
      low: ['I\'m not feeling great...', 'If I go down, don\'t leave me.', 'I need a minute. Or a hospital.'],
      dead: ['...tell my math teacher she was right.', 'I never finished my essay...']
    }
  },
  {
    id: 'devon', name: 'DEVON', role: 'scout',
    shirt: 0x3f6b4f, pants: 0x2c3340, hair: 0x402b1d, hairStyle: 'curly', cap: 0x2b3b55,
    backpack: 0x3e4f6b, skin: 0x8a5b3e, voice: 1.1,
    barks: {
      found: ['Found a thing! Is this a key? It\'s a key.', 'Loot acquired. Very gamer of me.', 'YO. I found something shiny.'],
      door: ['I opened a door. That\'s my whole personality now.', 'Door unlocked. No JoJo pose required.', 'Got it open. Please don\'t die.'],
      killer: ['OH NO OH NO HE HAS AN AXE', 'KILLER! This is NOT a drill!', 'I\'m too young for this! I have a dog!'],
      calm: ['I think we\'re safe. Define safe.', 'My hands are shaking. That\'s normal, right?', 'I\'m alive. I\'m alive. Okay.'],
      rescue: ['Stay with me! I saw this in a game once!', 'You\'re okay! Probably!', 'Up, up! The axe guy is rude!'],
      low: ['I\'m not okay. I\'m not okay.', 'My HP is low. Real low.', 'This is the worst field trip.'],
      dead: ['...this is a terrible speedrun.', 'I blame the cafeteria.']
    }
  },
  {
    id: 'priya', name: 'PRIYA', role: 'follow',
    shirt: 0x7a343e, pants: 0x262b33, hair: 0x241a14, hairStyle: 'bun',
    female: true, glasses: true, backpack: 0x8a6a3a, skin: 0xa9724f, voice: 1.03,
    barks: {
      found: ['Found it. I read the evacuation plan. You\'re welcome.', 'I have the item. Please form a single file line.', 'Key secured. Try not to lose it.'],
      door: ['Door open. I\'ll add it to the list.', 'Unlocked. My parents wanted a doctor.', 'Open. Please don\'t make me regret this.'],
      killer: ['KILLER. RUN. Use your legs!', 'He\'s coming — do not heroically sacrifice yourself!', 'Axe! A big axe! Why is it big!'],
      calm: ['He\'s gone. I think.', 'Okay. Files. Keys. Exit. Easy.', 'I\'m never skipping class again. Probably.'],
      rescue: ['Come on. Up. You\'re heavy.', 'You\'re not allowed to die. I made a plan.', 'Breathe. Then run.'],
      low: ['I\'m bleeding. That\'s inconvenient.', 'Low HP. Not ideal. Extremely not ideal.', 'I need a bandage and a lawyer.'],
      dead: ['...I hate group projects.', 'The exit was literally right there.']
    }
  },
  {
    id: 'theo', name: 'THEO', role: 'scout',
    shirt: 0x4a5d7a, pants: 0x2a2e36, hair: 0x1b1510, hairStyle: 'short',
    backpack: 0x5b4a2e, skin: 0x6f4a33, voice: 0.9,
    barks: {
      found: ['Yoink. That\'s mine now. I mean ours.', 'Found something. It is not a hall pass.', 'Loot. Loot. Loot.'],
      door: ['Open sesame. That\'s the whole trick.', 'Unlocked it. Please clap.', 'Door\'s open. I accept gifts.'],
      killer: ['BIG MAN WITH AXE. MOVE.', 'He\'s right there. Why is he right there!', 'Nope nope nope nope!'],
      calm: ['I think we\'re good. I think.', 'My heart is doing a drum solo.', 'Alive. Somehow. Great.'],
      rescue: ['Get up. You can be sad later.', 'I got you. Don\'t make it weird.', 'On your feet. The axe guy is not patient.'],
      low: ['I\'m not doing great here.', 'Low health. Extremely low health.', 'Tell my dog I love him.'],
      dead: ['...worth a try.', 'I should have stayed in class.']
    }
  }
];

const DOWN_TIME = 40;

let _pid = 0;

export class Bot {
  constructor(game, def, x, z, yaw = 0) {
    this.game = game;
    this.id = def.id + (_pid++);
    this.def = def;
    this.name = def.name;
    this.role = def.role;
    this.pos = new THREE.Vector3(x, 0, z);
    this.yaw = yaw;
    this.hp = 100;
    this.stamina = 100;
    this.maxStamina = 100;
    this.crouch = false;
    this.state = 'follow';
    this.downed = false;
    this.downTimer = 0;
    this.dead = false;
    this.escaped = false;
    this.controlled = false;
    this.dormant = false;
    this.classroom = false;
    this.path = [];
    this.pathIndex = 0;
    this.pathTimer = 0;
    this.targetPos = null;
    this.searchTimer = 0;
    this.searchWait = 0;
    this.rescueTarget = null;
    this.rescueTimer = 0;
    this.fleeTimer = 0;
    this.safeTimer = 0;
    this.talk = 0;
    this.talkTimer = 0;
    this.sayCooldown = 0;
    this.searched = new Set();
    this.speed = 0;
    this.lastNoise = 0;
    this.stuckTimer = 0;
    this.lastPos = this.pos.clone();
    this.killerSeen = false;
    this.attackTimer = 0;
    this.footTimer = 0;
    this.model = makePerson({
      shirt: def.shirt, pants: def.pants, hair: def.hair, hairStyle: def.hairStyle,
      female: def.female, backpack: def.backpack, skin: def.skin, cap: def.cap, glasses: def.glasses,
      height: 1.66 + Math.random() * 0.12, name: def.name
    });
    this.model.position.set(x, 0, z);
    this.model.rotation.y = yaw;
    if (this.model.userData.nameSprite) this.model.userData.nameSprite.visible = !this.controlled;
    this.game.scene.add(this.model);
    this.danger = makeDangerIcon();
    this.danger.visible = false;
    this.game.scene.add(this.danger);
    this.dangerLabel = makeLabel('40', { color: '#ffd7d7', bg: 'rgba(80,6,12,.9)', size: 128, h: 64, font: 'bold 30px Courier New' });
    this.dangerLabel.scale.set(0.5, 0.25, 1);
    this.danger.add(this.dangerLabel);
    this.eyeHeight = 1.55;
    this.stepPhase = 0;
    this._nearCam = false;
  }

  get alive() { return !this.dead; }
  get inPlay() { return !this.dead && !this.escaped; }

  say(kind, force = false) {
    if (this.sayCooldown > 0 && !force) return;
    const lines = this.def.barks[kind];
    if (!lines) return;
    const line = lines[(Math.random() * lines.length) | 0];
    this.sayCooldown = 16;
    this.talk = 1;
    this.talkTimer = 1.8;
    this.game.radio(this.name, line);
  }

  directSay(text, dur = 2) {
    this.talk = 1;
    this.talkTimer = dur;
    this.game.radio(this.name, text);
  }

  pathTo(x, z, force = false) {
    if (!force && this.targetPos && Math.abs(this.targetPos.x - x) < 1.2 && Math.abs(this.targetPos.z - z) < 1.2 && this.path.length) return;
    this.targetPos = { x, z };
    let path = this.game.world.findPath(this.pos.x, this.pos.z, x, z);
    // If the goal is behind a door we have a key for, walk to that door
    // first instead of grinding against the wall forever. Clearing the
    // door re-runs normal pathing on the next tick.
    if (!path || !path.length) path = this.pathViaKeyDoor();
    this.path = path || [];
    this.pathIndex = 0;
    this.pathTimer = 1.6 + Math.random() * 0.8;
  }

  pathViaKeyDoor() {
    const w = this.game.world;
    let best = null, bd = Infinity;
    for (const d of w.doors) {
      if (!d.locked || !this.game.hasKey(d.keyId)) continue;
      const cx = (d.collider.x1 + d.collider.x2) / 2;
      const cz = (d.collider.z1 + d.collider.z2) / 2;
      const dist = (cx - this.pos.x) ** 2 + (cz - this.pos.z) ** 2;
      if (dist < bd) { bd = dist; best = d; }
    }
    if (!best) return null;
    const cx = (best.collider.x1 + best.collider.x2) / 2;
    const side = this.pos.z < best.wallZ ? -1 : 1;
    for (const s of [side, -side]) {
      const tz = best.wallZ + s * 1.45;
      const p = w.findPath(this.pos.x, this.pos.z, cx, tz);
      if (p && p.length) {
        this.doorTarget = best;
        return p;
      }
    }
    return null;
  }

  stop() {
    this.path = [];
    this.pathIndex = 0;
    this.targetPos = null;
    this.speed = 0;
  }

  nearCrouchRoute() {
    const w = this.game.world;
    if (!w.crouchZones || !w.crouchZones.length) return false;
    for (const z of w.crouchZones) {
      const dx = Math.max(z.x1 - this.pos.x, 0, this.pos.x - z.x2);
      const dz = Math.max(z.z1 - this.pos.z, 0, this.pos.z - z.z2);
      if (Math.hypot(dx, dz) < 2.0) return true;
    }
    return false;
  }

  moveToward(x, z, dt, run) {
    const dx = x - this.pos.x, dz = z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    if (dist < 0.12) { this.speed = 0; return true; }
    const targetYaw = Math.atan2(dx, dz);
    let diff = targetYaw - this.yaw;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    this.yaw += Math.max(-1, Math.min(1, diff)) * dt * 7;
    const w = this.game.world;
    this.crouch = w.inCrouchZone(this.pos.x, this.pos.z) ? true : this.nearCrouchRoute();
    let maxSpeed = run ? 5.05 : 2.55;
    if (this.crouch) maxSpeed = Math.min(maxSpeed, 1.22);
    if (this.downed || this.dead) maxSpeed = 0;
    if (run && !this.crouch && this.stamina <= 0.5) maxSpeed = 2.55;
    const step = Math.min(dist, maxSpeed * dt);
    this.pos.x += Math.sin(this.yaw) * step;
    this.pos.z += Math.cos(this.yaw) * step;
    const level = w.levelAt(this.pos.x, this.pos.z, this.pos.y || 0);
    w.resolveCircle(this.pos, 0.31, { crouch: this.crouch, level });
    this.pos.y = w.groundHeight(this.pos.x, this.pos.z, this.pos.y || 0);
    this.speed = maxSpeed;
    if (run && !this.crouch && maxSpeed > 3) this.stamina = Math.max(0, this.stamina - dt * 21);
    else this.stamina = Math.min(this.maxStamina || 100, this.stamina + dt * (this.speed > 0.2 ? 9 : 15));
    this.stepPhase += dt * maxSpeed * 1.9;
    if (this.stepPhase > Math.PI) {
      this.stepPhase = 0;
      if (this.game.audio && maxSpeed > 1) this.game.audio.footstep(run && !this.crouch, false);
      this.game.noise(this.pos.x, this.pos.z, this.crouch ? 3.5 : run ? 12 : 5);
    }
    return dist < 0.3;
  }

  followPoint() {
    const g = this.game;
    const p = g.getActivePos();
    const idx = g.bots.indexOf(this);
    const side = (idx % 2 ? 1 : -1) * (1.2 + Math.floor(idx / 2) * 0.6);
    const back = 1.8 + idx * 0.35;
    return {
      x: p.x - Math.sin(g.getActiveYaw()) * back + Math.cos(g.getActiveYaw()) * side,
      z: p.z - Math.cos(g.getActiveYaw()) * back - Math.sin(g.getActiveYaw()) * side
    };
  }

  chooseSearchTarget() {
    const w = this.game.world;
    const candidates = w.navNodes.filter(n => {
      if (n.x < -56 || n.x > 56 || n.z > 2 || n.z < -42) return false;
      const key = Math.round(n.x) + ',' + Math.round(n.z);
      if (this.searched.has(key)) return false;
      return (n.x - this.pos.x) ** 2 + (n.z - this.pos.z) ** 2 > 9;
    });
    if (!candidates.length) { this.searched.clear(); return this.chooseSearchTarget(); }
    // prefer nodes in rooms and moderate distance
    const weighted = candidates.filter(n => Math.abs(n.z) > 3 || Math.random() < 0.4);
    const pool = weighted.length ? weighted : candidates;
    const n = pool[(Math.random() * pool.length) | 0];
    return { x: n.x, z: n.z };
  }

  update(dt) {
    if (this.classroom) {
      // Fourth period is still going. Sit at the desk, keep quiet, and
      // do not follow the player out — these three only show up again
      // once the lockdown starts.
      this.model.visible = true;
      this.danger.visible = false;
      this.model.position.set(this.pos.x, 0, this.pos.z);
      this.model.rotation.y = this.yaw;
      this.talk = Math.max(0, this.talk - dt * 1.6);
      if (this.talkTimer > 0) this.talkTimer -= dt;
      animatePerson(this.model, dt, {
        mode: 'idle', speed: 0, talk: this.talk, crouch: 0.32
      });
      const p = this.model.userData.parts;
      if (p) {
        // seated: thighs forward, knees down, feet on the floor
        p.legL.rotation.x = -1.28;
        p.legR.rotation.x = -1.28;
        p.kneeL.rotation.x = 1.08;
        p.kneeR.rotation.x = 1.08;
        p.hips.position.y = 0.58;
      }
      const spr = this.model.userData.nameSprite;
      if (spr) spr.visible = false;
      return;
    }
    if (this.dormant) {
      this.model.visible = false;
      this.danger.visible = false;
      return;
    }
    if (this.dead) {
      if (this._nearCam) { this._nearCam = false; this.model.visible = true; }
      this.animate(dt);
      return;
    }
    this.sayCooldown = Math.max(0, this.sayCooldown - dt);
    this.talk = Math.max(0, this.talk - dt * 1.2);
    if (this.talkTimer > 0) this.talkTimer -= dt;
    if (this.controlled) {
      this._nearCam = false;
      this.animate(dt);
      this.updateDanger();
      return;
    }
    if (this.downed) {
      if (this._nearCam) { this._nearCam = false; this.model.visible = true; }
      if (!(this.game.state === 'down' && this.game.downEntity === this)) {
        this.downTimer -= dt;
      }
      if (this.downTimer <= 0) this.die();
      this.animate(dt);
      this.updateDanger();
      this.checkRescuers(dt);
      return;
    }
    if (this.escaped) { this._nearCam = false; this.model.visible = false; this.danger.visible = false; return; }

    // Once the barricade is down, companions run for the gate instead of
    // waiting to be individually micro-managed. They still stop to pick up
    // a downed classmate if one is nearby.
    if (this.game.world.exit?.open) {
      const rescue = this.findRescueTarget();
      if (!rescue && this.state !== 'exit') {
        this.state = 'exit';
        this.path = [];
        this.pathTimer = 0;
      }
    }

    const w = this.game.world;
    const killers = (this.game.killers || [this.game.killer]).filter(k => k && k.active);
    let killer = null, kd = 999;
    for (const k of killers) {
      const d = Math.hypot(k.pos.x - this.pos.x, k.pos.z - this.pos.z);
      if (d < kd) { kd = d; killer = k; }
    }
    const playerDowned = this.game.player.downed || (this.game.controlledBot && this.game.controlledBot.downed);
    const canSeeKiller = killer && kd < 14 && !w.losBlocked(this.pos.x, this.pos.z, killer.pos.x, killer.pos.z);
    const caster = killers.find(k => k.domainCast > 0);
    const domainClose = caster && Math.hypot(caster.pos.x - this.pos.x, caster.pos.z - this.pos.z) < 13;

    if ((canSeeKiller || domainClose) && !this.killerSeen) {
      this.killerSeen = true;
      this.say('killer', true);
      this.game.broadcastPanic(this, 16);
      this.state = 'flee';
      this.fleeTimer = 8 + Math.random() * 3;
      this.pickFleeTarget();
    }
    if (!canSeeKiller && kd > 18) this.killerSeen = false;
    this.dodgeDomain(dt);

    // rescue downed player/bot
    const rescueTarget = this.findRescueTarget();
    if (rescueTarget && kd > 9) {
      this.state = 'rescue';
      this.rescueTarget = rescueTarget;
    }

    switch (this.state) {
      case 'flee': {
        this.fleeTimer -= dt;
        if (canSeeKiller) this.fleeTimer = Math.max(this.fleeTimer, 3);
        if (!this.targetPos || this.pathTimer <= 0) this.pickFleeTarget();
        this.pathTimer -= dt;
        if (this.path.length) {
          const pt = this.path[this.pathIndex];
          if (pt) {
            const done = this.moveToward(pt.x, pt.z, dt, this.stamina > 18);
            if (done) { this.pathIndex++; if (this.pathIndex >= this.path.length) this.stop(); }
          }
        }
        if (this.fleeTimer <= 0 && (!canSeeKiller || kd > 19)) {
          this.state = playerDowned ? 'rescue' : (this.role === 'scout' ? 'scout' : 'follow');
          this.targetPos = null;
          this.say('calm');
        }
        break;
      }
      case 'rescue': {
        const t = this.rescueTarget;
        if (!t || !t.downed) { this.state = 'follow'; this.rescueTarget = null; break; }
        if (!this.path.length && this.pathTimer <= 0) this.pathTo(t.pos.x + 0.6, t.pos.z + 0.6);
        this.pathTimer -= dt;
        if (this.path.length) {
          const pt = this.path[this.pathIndex];
          if (pt) {
            const done = this.moveToward(pt.x, pt.z, dt, kd > 8);
            if (done) { this.pathIndex++; if (this.pathIndex >= this.path.length) this.stop(); }
          }
        }
        const d = Math.hypot(t.pos.x - this.pos.x, t.pos.z - this.pos.z);
        if (d < 1.7) {
          this.stop();
          this.rescueTimer += dt;
          this.talk = 0.7;
          if (this.rescueTimer > 2.6) {
            this.rescueTimer = 0;
            if (t === this.game.player || t === this.game.controlledBot) this.game.revivePlayerBy(this);
            else if (t.revive) t.revive(this);
            this.say('rescue');
            this.state = 'follow';
            this.rescueTarget = null;
          }
        } else this.rescueTimer = 0;
        break;
      }
      case 'scout': {
        if (!this.targetPos || (!this.path.length && this.searchWait <= 0)) {
          const target = this.chooseSearchTarget();
          this.searched.add(Math.round(target.x) + ',' + Math.round(target.z));
          this.pathTo(target.x, target.z, true);
          this.searchWait = 2.5 + Math.random() * 2;
        }
        this.pathTimer -= dt;
        if (this.path.length) {
          const pt = this.path[this.pathIndex];
          if (pt) {
            const done = this.moveToward(pt.x, pt.z, dt, false);
            if (done) { this.pathIndex++; if (this.pathIndex >= this.path.length) this.stop(); }
          } else this.stop();
        }
        if (!this.path.length) {
          this.searchWait -= dt;
          if (this.searchWait <= 0) { this.targetPos = null; }
          // scan
          this.pickUpNearbyItems();
        }
        if (kd < 11 && !canSeeKiller && Math.random() < dt * 0.4) {
          // nervous scout returns to player
          this.state = 'follow'; this.targetPos = null;
          this.directSay('I\'m coming back. This room is creepy.');
        }
        break;
      }
      case 'exit': {
        const target = { x: 64, z: 0 };
        if (!this.path.length && this.pathTimer <= 0) this.pathTo(target.x, target.z, true);
        this.pathTimer -= dt;
        if (this.path.length) {
          const pt = this.path[this.pathIndex];
          if (pt) {
            const done = this.moveToward(pt.x, pt.z, dt, this.stamina > 10 && kd < 20);
            if (done) { this.pathIndex++; if (this.pathIndex >= this.path.length) this.stop(); }
          }
        }
        if (this.pos.x > 60) this.escape();
        break;
      }
      case 'follow':
      default: {
        if (this.role === 'scout' && !playerDowned && this.game.state === 'play' && Math.random() < dt * 0.06 && kd > 15) {
          this.state = 'scout';
          this.targetPos = null;
          this.searchWait = 2.0;
          break;
        }
        const fp = this.followPoint();
        const d = Math.hypot(fp.x - this.pos.x, fp.z - this.pos.z);
        if (d > 2.2) {
          if (!this.path.length && this.pathTimer <= 0) this.pathTo(fp.x, fp.z);
          this.pathTimer -= dt;
          if (this.path.length) {
            const pt = this.path[this.pathIndex];
            if (pt) {
              const done = this.moveToward(pt.x, pt.z, dt, d > 7 && this.stamina > 25);
              if (done) { this.pathIndex++; if (this.pathIndex >= this.path.length) this.stop(); }
            }
          } else this.moveToward(fp.x, fp.z, dt, d > 6);
        } else {
          this.stop();
          if (Math.random() < dt * 1.5) this.pickUpNearbyItems();
        }
        break;
      }
    }

    if (this.state !== 'flee' && this.state !== 'exit') this.pickUpNearbyItems();
    this.tryUnlockNearbyDoor();
    this.updateDanger();
    // stuck detection
    if (this.path.length) {
      const moved = Math.hypot(this.pos.x - this.lastPos.x, this.pos.z - this.lastPos.z);
      if (moved < 0.01) this.stuckTimer += dt; else this.stuckTimer = 0;
      if (this.stuckTimer > 1.2) { this.path = []; this.pathTimer = 0; this.stuckTimer = 0; }
    }
    this.lastPos.set(this.pos.x, 0, this.pos.z);
    this.keepOutOfCamera(dt);
    this.animate(dt);
  }

  dodgeDomain(dt) {
    const killers = (this.game.killers || []).filter(k => k && (k.domainCast > 0 || k.domainReady > 0));
    if (!killers.length) return;
    for (const k of killers) {
      if (k.domainCast > 0 && this.state !== 'flee' && this.state !== 'rescue') {
        const dk = Math.hypot(k.pos.x - this.pos.x, k.pos.z - this.pos.z);
        if (dk < 12) {
          this.state = 'flee';
          this.fleeTimer = Math.max(this.fleeTimer, 3.2);
          this.pickFleeTarget();
        }
      }
      for (const t of k.domainTiles) {
        if (t.safe) continue;
        let dx = this.pos.x - t.x, dz = this.pos.z - t.z;
        let d = Math.hypot(dx, dz);
        if (d > 1.15) continue;
        if (d < 0.001) { dx = Math.sin(this.yaw); dz = Math.cos(this.yaw); d = 1; }
        const push = (1.15 - d) * dt * 5;
        this.pos.x += dx / d * push;
        this.pos.z += dz / d * push;
      }
    }
    this.game.world.resolveCircle(this.pos, 0.31, { crouch: this.crouch, level: this.game.world.levelAt(this.pos.x, this.pos.z, this.pos.y || 0) });
  }

  // A companion standing on the player's face fills the screen with
  // elbows. Shove them gently out of a small bubble and hide the model
  // for the instant they are actually clipping the near plane.
  keepOutOfCamera(dt) {
    const playing = this.game.state === 'play' &&
      !this.controlled && !this.downed && !this.dead && !this.escaped;
    if (!playing) {
      if (this._nearCam) { this._nearCam = false; this.model.visible = !this.escaped; }
      return;
    }
    const ap = this.game.getActivePos();
    let dx = this.pos.x - ap.x, dz = this.pos.z - ap.z;
    let d = Math.hypot(dx, dz);
    if (d < 1.35) {
      if (d < 0.001) { dx = Math.sin(this.yaw); dz = Math.cos(this.yaw); d = 1; }
      const push = Math.min(1.35 - d, dt * 2.6);
      this.pos.x += (dx / d) * push;
      this.pos.z += (dz / d) * push;
      this.game.world.resolveCircle(this.pos, 0.31);
      d += push;
    }
    const hide = d < 0.82;
    if (hide !== this._nearCam) {
      this._nearCam = hide;
      this.model.visible = !hide;
    }
  }

  updateDanger() {
    if (this.downed) {
      this.danger.visible = true;
      this.danger.position.set(this.pos.x, 0.75, this.pos.z);
      const secs = Math.max(0, Math.ceil(this.downTimer));
      this.dangerLabel.position.y = 1.25;
      if (this._lastSec !== secs) {
        this._lastSec = secs;
        this.dangerLabel.material.map.image.getContext('2d').clearRect(0, 0, 128, 64);
        const c = this.dangerLabel.material.map.image;
        const g = c.getContext('2d');
        g.fillStyle = 'rgba(90,6,12,.9)'; g.fillRect(0, 0, 128, 64);
        g.strokeStyle = '#ffd7d7'; g.lineWidth = 3; g.strokeRect(2, 2, 124, 60);
        g.fillStyle = '#fff'; g.font = 'bold 32px Courier New'; g.textAlign = 'center'; g.textBaseline = 'middle';
        g.fillText(String(secs), 64, 34);
        this.dangerLabel.material.map.needsUpdate = true;
      }
      const pulse = 1 + Math.sin(this.game.time * 6) * 0.08;
      this.danger.scale.setScalar(pulse * (this.game.controlledBot === this ? 1.4 : 1));
    } else {
      this.danger.visible = false;
    }
  }

  findRescueTarget() {
    const g = this.game;
    const p = g.avatar;
    if (p && p.downed && p !== this) return p;
    if (g.controlledBot && g.player !== this && g.player.downed && !g.player.dead && !g.player.escaped) return g.player;
    let best = null, bd = 14;
    for (const b of g.bots) {
      if (b === this || !b.downed || b.dead) continue;
      const d = Math.hypot(b.pos.x - this.pos.x, b.pos.z - this.pos.z);
      if (d < bd) { bd = d; best = b; }
    }
    return best;
  }

  checkRescuers(dt) {
    // bots only; player rescues via interaction
    this.rescueTimer = this.rescueTimer || 0;
  }

  pickFleeTarget() {
    const w = this.game.world;
    const killer = (this.game.killers || [this.game.killer]).filter(k => k && k.active)
      .sort((a, b) => Math.hypot(a.pos.x - this.pos.x, a.pos.z - this.pos.z) - Math.hypot(b.pos.x - this.pos.x, b.pos.z - this.pos.z))[0];
    if (!killer) return;
    let best = null, bd = -1;
    for (let i = 0; i < 12; i++) {
      const n = w.navNodes[(Math.random() * w.navNodes.length) | 0];
      if (!n || n.x > 56 || n.x < -56) continue;
      const dk = (n.x - killer.pos.x) ** 2 + (n.z - killer.pos.z) ** 2;
      const dp = (n.x - this.pos.x) ** 2 + (n.z - this.pos.z) ** 2;
      const score = dk - dp * 0.35;
      if (score > bd) { bd = score; best = n; }
    }
    if (best) this.pathTo(best.x, best.z, true);
    this.pathTimer = 1.4;
  }

  pickUpNearbyItems() {
    const w = this.game.world;
    for (const it of w.items) {
      if (it.picked) continue;
      const d = Math.hypot(it.x - this.pos.x, it.z - this.pos.z);
      if (d < 1.5) {
        this.game.collectItem(it, this);
        this.talk = 0.8; this.talkTimer = 1.6;
      }
    }
  }

  tryUnlockNearbyDoor() {
    const w = this.game.world;
    for (const door of w.doors) {
      if (!door.locked) continue;
      const cx = (door.collider.x1 + door.collider.x2) / 2;
      const cz = (door.collider.z1 + door.collider.z2) / 2;
      if (Math.hypot(cx - this.pos.x, cz - this.pos.z) < 2.9 && this.game.hasKey(door.keyId)) {
        door.unlock();
        this.doorTarget = null;
        this.path = [];
        this.pathTimer = 0;
        this.game.onDoorOpened(door, this);
        this.say('door', true);
        this.game.toast(`${this.name} unlocked Door ${door.label}`);
      }
    }
  }

  damage(amount, source = 'killer') {
    if (this.downed || this.dead || this.escaped) return;
    this.hp -= amount;
    this.attackTimer = 0.6;
    if (this.hp <= 0) {
      this.hp = 0;
      this.goDown();
    } else {
      if (this.hp < 35 && Math.random() < 0.6) this.say('low', true);
      this.game.bloodFlash(0.25);
    }
  }

  goDown() {
    if (this.downed || this.dead) return;
    this.downed = true;
    this.downTimer = DOWN_TIME;
    this.state = 'down';
    this.stop();
    this.game.radio(this.name, 'I\'M DOWN! I\'M DOWN!');
    this.game.audio?.scare();
    this.model.rotation.z = Math.PI / 2;
    this.model.position.y = 0.22;
    if (this.model.userData.nameSprite) this.model.userData.nameSprite.visible = false;
    this.danger.visible = true;
    this._lastSec = -1;
  }

  revive(by) {
    if (this.dead || !this.downed) return;
    this.downed = false;
    this.hp = 50;
    this.downTimer = 0;
    this.stamina = 40;
    this.state = 'follow';
    this.model.rotation.z = 0;
    this.model.position.y = 0;
    this.danger.visible = false;
    if (this.model.userData.nameSprite) this.model.userData.nameSprite.visible = !this.controlled;
    this.directSay('I\'m up. Let\'s never do that again.');
    this.game.toast(`${this.name} is back up`);
  }

  die() {
    if (this.dead) return;
    this.downed = false;
    this.dead = true;
    this.hp = 0;
    this.danger.visible = false;
    this.model.rotation.z = Math.PI / 2;
    this.model.position.y = 0.22;
    if (this.model.userData.nameSprite) this.model.userData.nameSprite.visible = false;
    this.say('dead', true);
    this.game.onBotDead(this);
  }

  escape() {
    if (this.escaped) return;
    this.escaped = true;
    this.model.visible = false;
    this.danger.visible = false;
    this.path = [];
    this.game.onBotEscaped(this);
  }

  animate(dt) {
    if (this.escaped) return;
    if (this.downed || this.dead) {
      this.model.position.set(this.pos.x, (this.pos.y || 0) + 0.22, this.pos.z);
      this.model.rotation.y = this.yaw;
      return;
    }
    this.model.position.set(this.pos.x, this.pos.y || 0, this.pos.z);
    this.model.rotation.y = this.yaw;
    let mode = 'idle';
    if (this.speed > 3.2) mode = 'run';
    else if (this.speed > 0.3) mode = 'walk';
    const panic = this.state === 'flee' ? 0.8 : 0;
    animatePerson(this.model, dt, {
      mode, speed: this.speed, talk: this.talk, panic, crouch: this.crouch ? 0.58 : 0,
      lookAt: this.game.getActivePos ? { x: this.game.getActivePos().x, z: this.game.getActivePos().z } : null
    });
    // Keep the name tags readable but never let them swallow the screen
    // when a classmate walks right into the flashlight.
    const spr = this.model.userData.nameSprite;
    if (spr) {
      const cam = this.game.camera.position;
      const d = Math.hypot(this.pos.x - cam.x, this.pos.z - cam.z);
      const show = !this.controlled && !this.dead && !this.downed && d > 1.9 && d < 17;
      spr.visible = show;
      if (show) {
        const k = Math.max(0.34, Math.min(0.72, d * 0.055));
        spr.scale.set(k, k * 0.25, 1);
      }
    }
  }
}

// Jake is a story NPC, not a survivor: he leads the skip-class run, then
// locks himself in the toilets when the lockdown starts. He keeps his own
// tiny follow loop so he never shows up in the survivor roster.
export class JakeNPC {
  constructor(game) {
    this.game = game;
    this.pos = new THREE.Vector3(-8.65, 0, 3.9);
    this.yaw = Math.PI / 2;
    this.active = false;
    this.speed = 0;
    this.path = [];
    this.pathIndex = 0;
    this.pathTimer = 0;
    this.talk = 0;
    this.talkTimer = 0;
    this.lineTimer = 4;
    this.goal = { x: -4.0, z: -8.4 };
    this.model = makePerson({
      shirt: 0x2a3550, pants: 0x22252d, hair: 0x241a14, hairStyle: 'short',
      skin: 0xc79b7d, height: 1.82, backpack: 0x3d4f64, name: 'JAKE'
    });
    this.model.position.set(this.pos.x, 0, this.pos.z);
    this.model.rotation.y = this.yaw;
    this.model.visible = false;
    game.scene.add(this.model);
  }

  spawn(x = -8.65, z = 3.9, yaw = Math.PI / 2) {
    this.pos.set(x, 0, z);
    this.yaw = yaw;
    this.model.position.set(x, 0, z);
    this.model.rotation.y = yaw;
    this.active = true;
    this.model.visible = true;
    this.path = [];
    this.pathIndex = 0;
    this.pathTimer = 0;
    this.lineTimer = 3.5;
    this.talk = 0;
    this.talkTimer = 0;
  }

  setActive(v) {
    this.active = v;
    this.model.visible = v;
  }

  say(text, dur = 2.4) {
    this.talk = 1;
    this.talkTimer = dur;
    this.game.radio('JAKE', text);
  }

  repath() {
    this.path = this.game.world.findPath(this.pos.x, this.pos.z, this.goal.x, this.goal.z) || [];
    this.pathIndex = 0;
    this.pathTimer = 1.3 + Math.random() * 0.5;
  }

  update(dt) {
    if (!this.active) { this.model.visible = false; return; }
    this.model.visible = true;
    this.lineTimer -= dt;
    this.talk = Math.max(0, this.talk - dt * 1.6);
    if (this.talkTimer > 0) this.talkTimer -= dt;

    const player = this.game.player;
    const pd = Math.hypot(player.pos.x - this.pos.x, player.pos.z - this.pos.z);
    const pr = this.game.principal;
    const bossD = pr && pr.active ? Math.hypot(pr.pos.x - this.pos.x, pr.pos.z - this.pos.z) : 999;

    if (this.lineTimer <= 0) {
      if (bossD < 9) {
        this.say([
          'Okafor. Do not make eye contact. Or any contact.',
          'Act natural. Natural for us is "about to be expelled".',
          'He is right there. Do not cough. Do not breathe. Do not exist.'
        ][(Math.random() * 3) | 0], 2.8);
        this.lineTimer = 7 + Math.random() * 4;
      } else if (pd > 5) {
        this.say('Keep up. If we get separated I am telling everyone you were the slow one.', 2.8);
        this.lineTimer = 8 + Math.random() * 4;
      } else {
        this.say([
          'Toilets. End of the hall. Try to look like you have a hall pass.',
          'If anyone asks, we are doing a science project. On toilets.',
          'This is the best idea I have had all period. Low bar.'
        ][(Math.random() * 3) | 0], 2.8);
        this.lineTimer = 9 + Math.random() * 5;
      }
    }

    // Wait in the hall until the player actually leaves Room 101, then
    // lead them to the toilets. Otherwise Jake starts the level already
    // three rooms ahead of the person he is supposed to be guiding.
    const playerInClass = player.pos.z > 3.05;
    let speed = 0;
    if (playerInClass) {
      this.speed = 0;
      // face the classroom door
      const targetYaw = Math.atan2(player.pos.x - this.pos.x, player.pos.z - this.pos.z);
      let diff = targetYaw - this.yaw;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      this.yaw += Math.max(-1, Math.min(1, diff)) * dt * 3.5;
    } else if (pd > 8.5) {
      // Do not freeze when the player sprints ahead. Hustle to catch up,
      // but stay a touch slower than the player's sprint so he only
      // closes the gap when they slow down.
      speed = 5.2;
    } else {
      speed = pd > 3.4 ? 2.2 : 1.15;
    }

    if (playerInClass) {
      // skip pathing while he waits
    } else if (this.pathTimer <= 0 || !this.path.length) this.repath();
    this.pathTimer -= dt;
    if (speed > 0 && this.path.length) {
      const pt = this.path[this.pathIndex];
      if (pt) {
        const dx = pt.x - this.pos.x, dz = pt.z - this.pos.z;
        const d = Math.hypot(dx, dz);
        if (d < 0.35) {
          this.pathIndex++;
          if (this.pathIndex >= this.path.length) this.path = [];
        } else {
          const ty = Math.atan2(dx, dz);
          let diff = ty - this.yaw;
          while (diff > Math.PI) diff -= Math.PI * 2;
          while (diff < -Math.PI) diff += Math.PI * 2;
          this.yaw += Math.max(-1, Math.min(1, diff)) * dt * 7;
          const step = Math.min(d, speed * dt);
          this.pos.x += Math.sin(this.yaw) * step;
          this.pos.z += Math.cos(this.yaw) * step;
          this.game.world.resolveCircle(this.pos, 0.31);
          this.game.world.autoOpenDoors(this.pos.x, this.pos.z, 1.5);
          this.speed = speed;
        }
      }
    } else {
      this.speed = 0;
    }

    this.model.position.set(this.pos.x, 0, this.pos.z);
    this.model.rotation.y = this.yaw;
    animatePerson(this.model, dt, {
      mode: this.speed > 2.05 ? 'walk' : this.speed > 0.3 ? 'walk' : 'idle',
      speed: this.speed,
      talk: this.talkTimer > 0 ? 1 : 0,
      lookAt: this.speed < 0.3 ? player.pos : null,
      panic: bossD < 8 ? 0.35 : 0
    });
  }
}

export { BOT_DEFS, DOWN_TIME };
