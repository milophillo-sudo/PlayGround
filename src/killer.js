import * as THREE from 'three';
import { makeKillerModel, animateKiller } from './props.js';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export class Killer {
  constructor(game, x = 30, z = 0) {
    this.game = game;
    this.pos = new THREE.Vector3(x, 0, z);
    this.yaw = -Math.PI / 2;
    this.active = false;
    this.state = 'idle';
    this.target = null;
    this.lastSeen = null;
    this.path = [];
    this.pathIndex = 0;
    this.pathTimer = 0;
    this.searchTimer = 0;
    this.attackCd = 0;
    this.attackWindup = 0;
    this.patrolTimer = 0;
    this.smashTimer = 0;
    this.smashDoor = null;
    this.speed = 0;
    this.step = 0;
    this.model = makeKillerModel();
    this.model.position.set(x, 0, z);
    this.model.visible = false;
    game.scene.add(this.model);
    this.detect = 0;
    this.footTimer = 0;
    this.roarTimer = 4;
    this._visited = new Map();
    this._avoid = null;
    this.axeLight = new THREE.PointLight(0xff3344, 0, 4, 2);
    this.axeLight.position.set(0, 1.2, 0);
    this.model.add(this.axeLight);
    this.domainTimer = 0;
    this.domainCast = 0;
    this.domainTiles = [];
    this.domainVisual = null;
    this.domainReady = 0;
  }

  spawn(x, z) {
    this.pos.set(x, 0, z);
    this.model.position.set(x, 0, z);
    this.model.visible = true;
    this.active = true;
    this.state = 'patrol';
    this.target = null;
    this.lastSeen = null;
    this.path = [];
    this.pathTimer = 0;
    this.patrolTimer = 0;
    this.attackCd = 1.5;
    this.axeLight.intensity = 0.8;
    this.roarTimer = 3;
    this._visited.clear();
    this._avoid = null;
    this.domainTimer = 0;
    this.domainCast = 0;
    this.domainTiles = [];
    this.removeDomainVisual();
    if (this.game.audio) this.game.audio.growl();
  }

  reset(x = 30, z = 0) {
    this.active = false;
    this.model.visible = false;
    this.pos.set(x, 0, z);
    this.model.position.set(x, 0, z);
    this.state = 'idle';
    this.target = null;
    this.lastSeen = null;
    this.path = [];
    this.attackCd = 0;
    this.axeLight.intensity = 0;
  }

  get chasing() { return this.state === 'chase'; }

  // ── awareness ───────────────────────────────────────────────
  hear(x, z, radius = 10) {
    if (!this.active) return;
    const d = Math.hypot(this.pos.x - x, this.pos.z - z);
    if (d > radius) return;
    if (this.state === 'chase') return;
    // louder noises outweigh quiet ones
    if (this.state === 'investigate' && this.lastSeen) {
      const ld = Math.hypot(this.lastSeen.x - x, this.lastSeen.z - z);
      if (ld < 2.5 && radius < 8) return;
    }
    this.lastSeen = { x, z };
    this.state = 'investigate';
    this.searchTimer = 7 + Math.random() * 4;
    this.path = [];
    this.pathTimer = 0;
    if (radius > 9.5) this.game.audio?.whistle();
  }

  canSee(entity) {
    if (!entity || entity.dead || entity.escaped) return false;
    if (entity.hidden) return false;
    const x = entity.pos.x, z = entity.pos.z;
    const dx = x - this.pos.x, dz = z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    if (dist > 18) return false;
    const toTarget = Math.atan2(dx, dz);
    let diff = toTarget - this.yaw;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    const fov = this.state === 'chase' ? 1.5 : 1.05;
    if (Math.abs(diff) > fov && dist > 4.5) return false;
    if (this.game.world.losBlocked(this.pos.x, this.pos.z, x, z)) return false;
    // dark + crouch reduces range
    let range = dist;
    if (entity.crouch) range *= 0.72;
    if (entity.torchOn) range *= 0.7;
    if (this.game.world.lightState !== 'day') range *= 1.05;
    return range < (this.state === 'chase' ? 20 : 13.5);
  }

  pickTarget() {
    const g = this.game;
    const candidates = [];
    const a = g.avatar;
    if (a && !a.dead && !a.escaped && !a.downed) candidates.push(a);
    for (const b of g.bots) {
      if (b.dead || b.escaped || b.downed || b.controlled) continue;
      candidates.push(b);
    }
    let best = null, bd = 1e9;
    for (const e of candidates) {
      if (!this.canSee(e)) continue;
      const d = Math.hypot(e.pos.x - this.pos.x, e.pos.z - this.pos.z);
      const bias = e === a ? -2.2 : 0;
      if (d + bias < bd) { bd = d + bias; best = e; }
    }
    return best;
  }

  // ── pathing ─────────────────────────────────────────────────
  pathTo(x, z, force = false) {
    if (!force && this._pathTarget && Math.hypot(this._pathTarget.x - x, this._pathTarget.z - z) < 1.5 && this.path.length) return;
    this._pathTarget = { x, z };
    this.path = this.game.world.findPath(this.pos.x, this.pos.z, x, z) || [];
    this.pathIndex = 0;
    this.pathTimer = 0.72 + Math.random() * 0.4;
    if (!this.path.length) this.path.push({ x, z });
  }

  moveToward(x, z, dt, speed) {
    const dx = x - this.pos.x, dz = z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    if (dist < 0.2) return true;
    const targetYaw = Math.atan2(dx, dz);
    let diff = targetYaw - this.yaw;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    this.yaw += Math.max(-1, Math.min(1, diff)) * dt * 5.2;
    const step = Math.min(dist, speed * dt);
    this.pos.x += Math.sin(this.yaw) * step;
    this.pos.z += Math.cos(this.yaw) * step;
    this.game.world.resolveCircle(this.pos, 0.46);
    this.speed = speed;
    this.step += dt * speed * 1.4;
    if (this.step > 2.4) {
      this.step = 0;
      this.game.audio?.footstep(false, false);
      this.game.noise(this.pos.x, this.pos.z, 4, true);
    }
    return dist < 0.35;
  }

  advance(dt, speed) {
    if (this.path.length) {
      const pt = this.path[this.pathIndex];
      if (pt) {
        if (this.moveToward(pt.x, pt.z, dt, speed)) {
          this.pathIndex++;
          if (this.pathIndex >= this.path.length) this.path = [];
        }
        return;
      }
    }
    this.speed = 0;
  }

  // ── domain, damage, attacks ─────────────────────────────────
  removeDomainVisual() {
    if (this.domainVisual) {
      this.game.scene.remove(this.domainVisual);
      this.domainVisual.traverse?.(o => { if (o.geometry) o.geometry.dispose?.(); if (o.material) o.material.dispose?.(); });
      this.domainVisual = null;
    }
  }

  startDomain() {
    if (!this.game.versus || this.domainCast > 0) return;
    this.state = 'domain';
    this.domainCast = 2.1;
    this.domainReady = 0;
    this.domainTiles = [];
    const origin = { x: this.pos.x, z: this.pos.z };
    for (let ix = -3; ix <= 3; ix++) for (let iz = -3; iz <= 3; iz++) {
      if (Math.abs(ix) + Math.abs(iz) <= 4) this.domainTiles.push({ x: origin.x + ix * 1.05, z: origin.z + iz * 1.05, hot: false });
    }
    const group = new THREE.Group();
    const mat = new THREE.MeshBasicMaterial({ color: 0xff2438, transparent: true, opacity: 0.18, depthWrite: false });
    for (const t of this.domainTiles) {
      const tile = new THREE.Mesh(new THREE.PlaneGeometry(0.88, 0.88), mat.clone());
      tile.rotation.x = -Math.PI / 2;
      tile.position.set(t.x, 0.035, t.z);
      group.add(tile);
      t.mesh = tile;
    }
    this.game.scene.add(group);
    this.domainVisual = group;
  }

  updateDomain(dt) {
    if (this.domainCast > 0) {
      this.domainCast -= dt;
      this.speed = 0;
      this.attackWindup = Math.max(this.attackWindup, this.domainCast);
      if (this.domainVisual) this.domainVisual.scale.setScalar(0.85 + Math.sin(this.game.time * 12) * 0.06);
      if (this.domainCast <= 0) this.domainReady = 1.25;
      return;
    }
    if (this.domainReady > 0) {
      this.domainReady -= dt;
      for (const t of this.domainTiles) {
        t.hot = true;
        if (t.mesh?.material) t.mesh.material.opacity = 0.55;
        if (t.mesh?.material?.color) t.mesh.material.color.setHex(0xff0a18);
      }
      for (const e of [this.game.player, ...this.game.bots]) {
        if (!e || e.dead || e.escaped || e.downed) continue;
        for (const t of this.domainTiles) {
          if (t.hot && Math.hypot(e.pos.x - t.x, e.pos.z - t.z) < 0.72) {
            const safe = this.game.world?.exit && e.pos.x > 57 && !this.game.world.exit.open;
            if (!safe) this.game.damagePlayer?.(18, this);
          }
        }
      }
      if (this.domainReady <= 0) {
        this.removeDomainVisual();
        this.domainTiles = [];
        this.state = 'patrol';
        this.attackCd = 4.5;
      }
    }
  }

  attack(entity) {
    if (!entity || entity.dead || entity.escaped) return;
    this.attackCd = 1.25;
    this.attackWindup = 0.22;
    this.game.audio?.growl();
    this.game.audio?.scare();
    this.game.shakeScreen(0.45, 0.6);
    if (entity === this.game.player || entity === this.game.controlledBot) {
      if (this.game.versus && this.game.tryCrowbarBlock?.(entity, this)) return;
      this.game.damagePlayer(52, this);
    } else if (entity.damage) {
      entity.damage(46, 'killer');
    }
    // knock back
    const dx = entity.pos.x - this.pos.x, dz = entity.pos.z - this.pos.z;
    const d = Math.max(0.01, Math.hypot(dx, dz));
    entity.pos.x += dx / d * 0.7;
    entity.pos.z += dz / d * 0.7;
  }

  // smash doors in the way while hunting
  handleDoors(dt) {
    for (const door of this.game.world.doors) {
      const cx = (door.collider.x1 + door.collider.x2) / 2;
      const cz = (door.collider.z1 + door.collider.z2) / 2;
      const d = Math.hypot(cx - this.pos.x, cz - this.pos.z);
      if (d > 1.7) continue;
      if (door.locked && this.state !== 'chase') continue;
      if (!door.locked && !door.open) door.setOpen(true);
      if (door.locked && this.chasing) {
        if (this.smashDoor !== door) { this.smashDoor = door; this.smashTimer = 0; this.game.audio?.growl(); }
        this.smashTimer += dt;
        this.attackWindup = 0.2;
        if (this.smashTimer > 1.15) {
          door.unlock();
          this.game.onDoorOpened(door, this);
          this.game.audio?.unlock();
          this.game.toast('The Hall Monitor smashed a door open.');
          this.smashDoor = null;
          this.smashTimer = 0;
        }
      }
    }
  }

  downedNear(x, z, radius = 10) {
    const people = [this.game.player, ...this.game.bots];
    for (const e of people) {
      if (!e || !e.downed || e.dead) continue;
      if (Math.hypot(e.pos.x - x, e.pos.z - z) < radius) return e;
    }
    return null;
  }

  // Patrol points are chosen by freshness, not by a fixed route. Repeating
  // the same four corners made the Hall Monitor look like he was on rails;
  // worse, once a student went down his "investigate" target was the body,
  // so he stood over it until a rescuer arrived. Now he scores nodes by how
  // long ago he visited them and vetoes anywhere near a downed student.
  pickPatrolTarget() {
    const w = this.game.world;
    // A node inside a locked room is a dead end: findPath would return
    // null and the patrol would grind against that door. Only consider
    // rooms he can actually walk into right now.
    const inOpenRoom = (n) => {
      const r = w.rooms.find(rr =>
        n.x > rr.x1 + 0.4 && n.x < rr.x2 - 0.4 &&
        n.z > rr.z1 + 0.4 && n.z < rr.z2 - 0.4);
      if (!r) return true; // corridor / passage / wing / outside
      const d = w.doors.find(dd => dd.room === r);
      return !d || !d.locked || d.open;
    };
    const nodes = w.navNodes.filter(n =>
      n.x > -52 && n.x < 52 && n.z < 2 && n.z > -42 && inOpenRoom(n));
    const a = this.game.avatar;
    const now = this.game.time;
    let best = null, bestScore = -1e9;
    for (const n of nodes) {
      const key = Math.round(n.x / 5) + ',' + Math.round(n.z / 5);
      const last = this._visited.has(key) ? this._visited.get(key) : -999;
      let score = Math.min(1, (now - last) / 50) * 3.4 + Math.random() * 1.5;
      const md = Math.hypot(n.x - this.pos.x, n.z - this.pos.z);
      if (md < 7) score -= 3.2;
      if (md > 42) score -= 1.4;
      if (a && !a.dead && !a.escaped) {
        const ad = Math.hypot(n.x - a.pos.x, n.z - a.pos.z);
        if (ad > 7 && ad < 24) score += 0.9;
        else if (ad <= 7) score -= 0.8;
      }
      // Bodies are not bait. Hard-veto every node near a downed student
      // (and near the spot where the last hit landed) so the Hall Monitor
      // actually leaves instead of orbiting the corpse for a rescuer.
      let banned = false;
      for (const e of [this.game.player, ...this.game.bots]) {
        if (!e || !e.downed || e.dead) continue;
        if (Math.hypot(n.x - e.pos.x, n.z - e.pos.z) < 13) { banned = true; break; }
      }
      if (!banned && this._avoid && now < this._avoid.until) {
        if (Math.hypot(n.x - this._avoid.x, n.z - this._avoid.z) < 12) banned = true;
      }
      if (banned) continue;
      if (score > bestScore) { bestScore = score; best = n; }
    }
    if (!best) best = { x: this.pos.x + 10, z: 0 };
    this._visited.set(Math.round(best.x / 5) + ',' + Math.round(best.z / 5), now);
    return {
      x: best.x + (Math.random() - 0.5) * 2.2,
      z: best.z + (Math.random() - 0.5) * 1.2
    };
  }

  update(dt) {
    if (!this.active) {
      this.model.visible = false;
      return;
    }
    this.model.visible = true;
    this.attackCd = Math.max(0, this.attackCd - dt);
    this.attackWindup = Math.max(0, this.attackWindup - dt);
    if (this.state === 'domain' || this.domainCast > 0 || this.domainReady > 0) {
      this.updateDomain(dt);
      if (this.domainCast <= 0 && this.domainReady <= 0) {
        // updateDomain restores patrol after the timed detonation
      }
    } else if (this.game.versus && this.attackCd <= 0.05 && this.state === 'chase' && Math.random() < dt * 0.055) {
      this.startDomain();
    }
    this.pathTimer -= dt;
    this.roarTimer -= dt;
    if (this.roarTimer <= 0) {
      this.roarTimer = 9 + Math.random() * 10;
      if (this.game.audio && Math.random() < 0.6) this.game.audio.growl();
    }
    // pick visible target
    const seen = this.pickTarget();
    if (seen) {
      if (this.target !== seen) {
        this.target = seen;
        this.game.onKillerSpot?.(seen);
      }
      this.lastSeen = { x: seen.pos.x, z: seen.pos.z };
      this.state = 'chase';
      this.searchTimer = 8;
      this.detect = Math.min(1, (this.detect || 0) + dt * 2.2);
    } else if (this.state === 'chase') {
      this.detect = Math.max(0, (this.detect || 0) - dt * 0.55);
      this.searchTimer -= dt;
      if (this.searchTimer <= 0) {
        this.state = 'investigate';
        this.searchTimer = 6;
      }
    }

    switch (this.state) {
      case 'chase': {
        const target = this.target;
        if (!target || target.dead || target.escaped || target.downed) {
          if (target && target.downed) {
            // The hit landed. Lose interest immediately instead of standing
            // over the body waiting for a rescuer to walk into the axe.
            this._avoid = { x: target.pos.x, z: target.pos.z, until: this.game.time + 20 };
            this.state = 'patrol';
            this.patrolTimer = 0;
            this.path = [];
            this.pathTimer = 0;
            this.lastSeen = null;
            this.target = null;
            this.yaw += Math.PI * 0.35;
          } else {
            this.state = 'investigate';
            this.searchTimer = 7;
            this.target = null;
          }
          break;
        }
        if (this.pathTimer <= 0) this.pathTo(target.pos.x, target.pos.z, true);
        const d = Math.hypot(target.pos.x - this.pos.x, target.pos.z - this.pos.z);
        if (d < 1.45) {
          this.speed = 0;
          if (this.attackCd <= 0) this.attack(target);
          const targetYaw = Math.atan2(target.pos.x - this.pos.x, target.pos.z - this.pos.z);
          this.yaw += (targetYaw - this.yaw) * Math.min(1, dt * 8);
        } else {
          // Player sprint is 5.75; chase at 4.6 keeps a clean run 25% faster.
          this.advance(dt, 4.6);
        }
        break;
      }
      case 'investigate': {
        this.searchTimer -= dt;
        if (this.lastSeen && this.downedNear(this.lastSeen.x, this.lastSeen.z, 9)) {
          // Do not investigate a body. Pick a fresh area instead.
          this.state = 'patrol';
          this.lastSeen = null;
          this.patrolTimer = 0;
          this.path = [];
          break;
        }
        if (this.pathTimer <= 0 && this.lastSeen) this.pathTo(this.lastSeen.x, this.lastSeen.z, true);
        this.advance(dt, 2.55);
        if (this.path.length === 0) {
          // look around
          this.yaw += dt * 0.7;
          this.speed = 0;
        }
        if (this.searchTimer <= 0) {
          this.state = 'patrol';
          this.lastSeen = null;
          this.patrolTimer = 0;
        }
        break;
      }
      default: {
        this.patrolTimer -= dt;
        if (this.patrolTimer <= 0 || !this.path.length) {
          const target = this.pickPatrolTarget();
          this.pathTo(target.x, target.z, true);
          this.patrolTimer = 7 + Math.random() * 5;
        }
        this.advance(dt, 1.95);
        break;
      }
    }

    this.handleDoors(dt);

    // animation / placement
    this.pos.x = clamp(this.pos.x, -57, 140);
    this.pos.z = clamp(this.pos.z, -43, 19);
    this.model.position.set(this.pos.x, 0, this.pos.z);
    this.model.rotation.y = this.yaw;
    const mode = this.attackWindup > 0 ? 'attack' : this.chasing ? 'chase' : this.speed > 0.3 ? 'walk' : 'idle';
    animateKiller(this.model, dt, mode, this.game.time);
    this.axeLight.intensity = this.chasing ? 1.4 + Math.sin(this.game.time * 8) * 0.4 : 0.5;
    this.axeLight.position.set(0, 1.0 + Math.sin(this.game.time * 3) * 0.05, 0.1);

    // footsteps & tension
    const a = this.game.avatar;
    if (a && !a.escaped && !a.dead) {
      const d = Math.hypot(a.pos.x - this.pos.x, a.pos.z - this.pos.z);
      this.game.proximity = Math.max(0, 1 - d / 22);
      if (d < 9 && this.game.audio) {
        this.footTimer -= dt;
        if (this.footTimer <= 0 && this.speed > 0.4) {
          this.footTimer = this.chasing ? 0.32 : 0.62;
          // nearby heavy steps
          this.game.audio.footstep(this.chasing, false);
        }
      }
    }
  }
}
