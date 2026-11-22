import * as THREE from 'three';
import { makePerson, animatePerson, makeDangerIcon, makeLabel } from './props.js';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// Principal Okafor does not chase. He does not need to.
// He walks the fourth-period corridor with a hall pass in one hand and an
// electric pizza in the other, and if he sees you his eyes do the rest.
export class Principal {
  constructor(game) {
    this.game = game;
    this.pos = new THREE.Vector3(4, 0, 0.2);
    this.yaw = -Math.PI / 2; // looking west, down the corridor
    this.active = false;
    this.state = 'patrol';
    this.detect = 0;
    this.speed = 0;
    this.wait = 0;
    this.talk = 0;
    this.talkTimer = 0;
    this.sayCd = 0;
    this.laserT = 0;
    this.laserTarget = null;
    this.spotted = false;
    this.waypoints = [
      { x: -22, z: 0.2 }, { x: -10, z: 0.5 }, { x: 2, z: 0.2 },
      { x: 14, z: 0.5 }, { x: 24, z: 0.2 }
    ];
    this.wp = 0;

    this.model = makePerson({
      shirt: 0x2b3340, pants: 0x1e222a, hair: 0x19191c, hairStyle: 'buzz',
      skin: 0x8a5b3e, height: 1.82, tie: 0x7a1f28, glasses: true,
      shoes: 0x101114, name: ''
    });
    this.model.position.set(this.pos.x, 0, this.pos.z);
    this.model.rotation.y = this.yaw;
    this.model.visible = false;
    game.scene.add(this.model);

    const tag = makeLabel('PRINCIPAL OKAFOR', {
      color: '#ffd7d7', bg: 'rgba(80,6,12,.9)', size: 512, h: 96,
      font: 'bold 34px Courier New'
    });
    tag.position.set(0, 2.22, 0);
    tag.scale.set(1.0, 0.19, 1);
    this.model.add(tag);

    this.parts = this.model.userData.parts;

    // The eyes. They are the weapon.
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff2233 });
    this.eyes = [];
    for (const sd of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.027, 10, 8), eyeMat);
      eye.position.set(sd * 0.05, 0.05, 0.135);
      eye.scale.set(1.0, 0.7, 0.45);
      this.parts.head.add(eye);
      this.eyes.push(eye);
    }
    this.eyeLight = new THREE.PointLight(0xff2233, 0, 4.2, 2);
    this.eyeLight.position.set(0, 0.06, 0.15);
    this.parts.head.add(this.eyeLight);

    // The electric pizza. Cafeteria special. Do not ask what is on it.
    const pizza = new THREE.Group();
    const carton = new THREE.MeshStandardMaterial({ color: 0xb98b52, roughness: 0.85 });
    pizza.add(new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.07, 0.36), carton));
    const arcMat = new THREE.MeshBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0.7 });
    this.arcs = [];
    for (let i = 0; i < 4; i++) {
      const arc = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.06, 0.13), arcMat);
      arc.position.set(-0.12 + i * 0.08, 0.07, -0.08 + (i % 2) * 0.16);
      arc.rotation.y = (i % 2 ? 0.5 : -0.5);
      pizza.add(arc);
      this.arcs.push(arc);
    }
    pizza.position.set(0, -0.1, 0.1);
    pizza.rotation.x = -0.35;
    this.parts.handL.add(pizza);

    this.danger = makeDangerIcon();
    this.danger.visible = false;
    game.scene.add(this.danger);

    // Laser beams are world objects so they can stretch from his eyes to
    // the camera without being parented to a scaled head.
    this.beamMat = new THREE.MeshBasicMaterial({
      color: 0xff2638, transparent: true, opacity: 0.85,
      blending: THREE.AdditiveBlending, depthWrite: false
    });
    this.beams = [];
    for (let i = 0; i < 2; i++) {
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.012, 1, 6), this.beamMat);
      beam.visible = false;
      game.scene.add(beam);
      this.beams.push(beam);
    }
    this._v0 = new THREE.Vector3();
    this._v1 = new THREE.Vector3();
    this._dir = new THREE.Vector3();
    this._up = new THREE.Vector3(0, 1, 0);
  }

  spawn(x = 4, z = 0.2, yaw = -Math.PI / 2) {
    this.pos.set(x, 0, z);
    this.yaw = yaw;
    this.model.position.set(x, 0, z);
    this.model.rotation.y = yaw;
    this.active = true;
    this.state = 'patrol';
    this.detect = 0;
    this.spotted = false;
    this.laserT = 0;
    this.laserTarget = null;
    this.wp = 0;
    this.wait = 0;
    this.model.visible = true;
    this.danger.visible = false;
    this.eyeLight.intensity = 0.15;
    for (const b of this.beams) b.visible = false;
  }

  setActive(v) {
    this.active = v;
    this.model.visible = v;
    if (!v) {
      this.danger.visible = false;
      this.eyeLight.intensity = 0;
      this.detect = 0;
      for (const b of this.beams) b.visible = false;
    }
  }

  say(lines) {
    if (this.sayCd > 0) return;
    this.sayCd = 5.5;
    const line = lines[(Math.random() * lines.length) | 0];
    this.talk = 1;
    this.talkTimer = 2.6;
    this.game.radio('PRINCIPAL OKAFOR', line);
    this.game.audio?.stinger();
  }

  canSee(entity) {
    if (!entity || entity.dead || entity.escaped || entity.hidden) return false;
    const dx = entity.pos.x - this.pos.x;
    const dz = entity.pos.z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    let range = 12.5;
    if (entity.crouch) range *= 0.68;
    if (entity.torchOn) range *= 1.12;
    if (dist > range) return false;
    const toTarget = Math.atan2(dx, dz);
    let diff = toTarget - this.yaw;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    if (Math.abs(diff) > 0.95 && dist > 3.2) return false;
    if (this.game.world.losBlocked(this.pos.x, this.pos.z, entity.pos.x, entity.pos.z)) return false;
    return true;
  }

  moveToward(x, z, dt) {
    const dx = x - this.pos.x, dz = z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    if (dist < 0.15) { this.speed = 0; return true; }
    const targetYaw = Math.atan2(dx, dz);
    let diff = targetYaw - this.yaw;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    this.yaw += clamp(diff, -1, 1) * dt * 3.2;
    const speed = 1.75;
    const step = Math.min(dist, speed * dt);
    this.pos.x += Math.sin(this.yaw) * step;
    this.pos.z += Math.cos(this.yaw) * step;
    this.game.world.resolveCircle(this.pos, 0.38);
    this.speed = speed;
    return dist < 0.3;
  }

  update(dt) {
    if (!this.active) {
      this.model.visible = false;
      this.danger.visible = false;
      return;
    }
    this.model.visible = true;
    this.sayCd = Math.max(0, this.sayCd - dt);
    this.talk = Math.max(0, this.talk - dt * 1.6);
    if (this.talkTimer > 0) this.talkTimer -= dt;

    const target = this.game.player;
    const seen = this.canSee(target);

    if (seen) {
      this.detect = Math.min(1, this.detect + dt * 1.45);
      if (!this.spotted) {
        this.spotted = true;
        this.game.audio?.stinger();
      }
      if (this.detect > 0.28 && this.detect < 1) {
        this.say([
          'Hall pass. Now.',
          'I can see your shoes.',
          'Whispering is a gateway drug.',
          'The pizza is electric. You are not.'
        ]);
      }
      // turn to face the student; he does not need to walk any closer
      const dx = target.pos.x - this.pos.x, dz = target.pos.z - this.pos.z;
      const ty = Math.atan2(dx, dz);
      let diff = ty - this.yaw;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      this.yaw += clamp(diff, -1, 1) * dt * 5.5;
      this.speed = 0;
      this.game.shakeScreen(0.12 + this.detect * 0.18, 0.2);
      if (this.detect >= 1) {
        this.detect = 1;
        this.game.onDetected?.(this);
      }
    } else {
      this.detect = Math.max(0, this.detect - dt * 0.85);
      if (this.detect < 0.12) this.spotted = false;
      if (this.detect <= 0.01) {
        // patrol between corridor checkpoints, pausing to scan
        if (this.wait > 0) {
          this.wait -= dt;
          this.speed = 0;
          this.yaw += Math.sin(this.game.time * 1.1) * dt * 0.22;
        } else {
          const wp = this.waypoints[this.wp];
          if (this.moveToward(wp.x, wp.z, dt)) {
            this.wp = (this.wp + 1) % this.waypoints.length;
            this.wait = 1.5 + Math.random() * 1.8;
          }
        }
      }
    }

    this.danger.visible = this.detect > 0.15;
    this.danger.position.set(this.pos.x, 0, this.pos.z);
    this.eyeLight.intensity = 0.15 + this.detect * 3.2;
    for (let i = 0; i < this.arcs.length; i++) {
      const a = this.arcs[i];
      a.material.opacity = 0.35 + this.detect * 0.5 + Math.sin(this.game.time * 20 + i) * 0.15;
      a.visible = this.detect > 0.05 || Math.sin(this.game.time * 9 + i) > 0.4;
    }

    this.model.position.set(this.pos.x, 0, this.pos.z);
    this.model.rotation.y = this.yaw;
    animatePerson(this.model, dt, {
      mode: this.speed > 0.3 ? 'walk' : 'idle',
      speed: this.speed,
      talk: this.talkTimer > 0 ? 1 : 0,
      lookAt: seen ? target.pos : null,
      gesture: this.detect > 0.3 ? 0.5 : 0.12
    });

    if (this.laserT > 0) this.updateLaser(dt);
  }

  fireLaser(target) {
    if (!target) return;
    this.laserT = 2.0;
    this.laserTarget = target;
    this.detect = 1;
    this.eyeLight.intensity = 9;
    this.model.updateMatrixWorld(true);
    for (const b of this.beams) b.visible = true;
    this.game.audio?.scare();
    this.game.audio?.growl();
    this.game.shakeScreen(1.1, 1.4);
  }

  updateLaser(dt) {
    this.laserT = Math.max(0, this.laserT - dt);
    if (this.laserT <= 0 || !this.laserTarget) {
      for (const b of this.beams) b.visible = false;
      return;
    }
    this.model.updateMatrixWorld(true);
    const tx = this.laserTarget.pos.x;
    const tz = this.laserTarget.pos.z;
    const ty = this.laserTarget.crouch ? 0.72 : 1.08;
    this._v1.set(tx, ty, tz);
    for (let i = 0; i < this.beams.length; i++) {
      const eye = this.eyes[i];
      eye.getWorldPosition(this._v0);
      this._dir.subVectors(this._v1, this._v0);
      const dist = this._dir.length();
      const beam = this.beams[i];
      beam.position.copy(this._v0).addScaledVector(this._dir, 0.5);
      beam.scale.set(1, dist, 1);
      beam.quaternion.setFromUnitVectors(this._up, this._dir.normalize());
      const flicker = 0.55 + Math.random() * 0.45;
      beam.material.opacity = this.laserT > 0.15 ? flicker : 0;
    }
    this.game.blood = Math.max(this.game.blood, 0.55 + Math.sin(this.game.time * 30) * 0.2);
    this.eyeLight.intensity = 5 + Math.sin(this.game.time * 40) * 4;
    this.game.shakeScreen(0.7, 0.3);
  }
}
