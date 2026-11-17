import * as THREE from 'three';

// ─────────────────────────────────────────────────────────────
// Static occlusion + frustum culler
//
// The school is a set of closed volumes joined by doorways. A room
// can only be seen if the camera is inside it, or if its door is open
// and that doorway is inside the view frustum. We use that "portal"
// rule to hide every prop in rooms the camera cannot possibly see —
// the mid-range win Three.js cannot do by itself, because a mesh
// behind a wall is still inside the camera frustum.
//
// Corridors are split into short chunks so a camera facing one way
// does not keep the whole hall (and every room hanging off it) alive.
//
// The pass is deliberately conservative:
//   • whole props are toggled, never individual faces
//   • the camera's own area is never hidden
//   • gameplay objects (items, characters, bodies, doors) are in
//     separate groups and are never touched
//   • a prop is only hidden after two consecutive sweeps
// ─────────────────────────────────────────────────────────────
const CHUNK = 13;

export class VisibilityCuller {
  constructor(game) {
    this.game = game;
    this.camera = game.camera;
    this.now = () => (typeof performance !== 'undefined' ? performance.now() : Date.now()) * 0.001;
    this.lastSweep = -1;
    this.lastCamArea = null;
    this.frustum = new THREE.Frustum();
    this.proj = new THREE.Matrix4();
    this.testSphere = new THREE.Sphere();

    this.entries = [];
    this.areas = [];
    this.conns = [];
    this.areaByRoom = new Map();
    this.allProps = [];

    this.timer = 0;
    this.interval = 0.12;
    this.enabled = true;
    this.ready = false;
    this.stats = { props: 0, visible: 0, hiddenArea: 0, hiddenFrustum: 0, areas: 0, areasVisible: 0 };
  }

  // ── world → area graph ───────────────────────────────────────
  collect() {
    const w = this.game.world;
    const A = [];
    const conns = [];
    const area = (id, x1, z1, x2, z2, kind) => {
      const a = {
        id, kind,
        x1: Math.min(x1, x2), x2: Math.max(x1, x2),
        z1: Math.min(z1, z2), z2: Math.max(z1, z2),
        neighbors: [],
        visible: true
      };
      a.cx = (a.x1 + a.x2) / 2;
      a.cz = (a.z1 + a.z2) / 2;
      a.r = Math.hypot(a.x2 - a.x1, a.z2 - a.z1) / 2 + 0.6;
      A.push(a);
      return a;
    };
    const connect = (a, b, px, pz, kind, radius, isOpen) => {
      const c = { a, b, px, pz, kind, open: isOpen || (() => true) };
      c.sphere = new THREE.Sphere(new THREE.Vector3(px, 1.6, pz), radius);
      a.neighbors.push({ other: b, conn: c });
      b.neighbors.push({ other: a, conn: c });
      conns.push(c);
      return c;
    };

    // rooms
    for (const room of w.rooms) {
      const a = area('room:' + room.id, room.x1, room.z1, room.x2, room.z2, 'room');
      a.room = room;
      this.areaByRoom.set(room.id, a);
    }

    // central + back corridor, cut into chunks
    const central = [];
    const back = [];
    for (let x = -52; x < 52; x += CHUNK) {
      central.push(area(`corr:${x}`, x, -3, Math.min(52, x + CHUNK), 3, 'corridor'));
      back.push(area(`back:${x}`, x, -30, Math.min(52, x + CHUNK), -24, 'corridor'));
    }
    const pass = area('pass', -10, -24, -7, -3, 'corridor');
    const wingW = area('wingW', -58, -30, -52, 3, 'corridor');
    const wingE = area('wingE', 52, -30, 58, 3, 'corridor');
    const outdoor = area('outdoor', 58, -14, 142, 14, 'outdoor');

    const chunkAt = (list, x) => list.find(a => x >= a.x1 && x <= a.x2) || list[list.length - 1];

    // chunk seams are open arches
    for (const list of [central, back]) {
      for (let i = 0; i < list.length - 1; i++) {
        const a = list[i], b = list[i + 1];
        connect(a, b, a.x2, 0, 'arch', 4.2);
      }
    }

    // passage joins both corridors
    connect(pass, chunkAt(central, -8.5), -8.5, -3, 'arch', 3.4);
    connect(pass, chunkAt(back, -8.5), -8.5, -24, 'arch', 3.4);

    // open-ended wings
    connect(wingW, central[0], -52, 0, 'arch', 3.4);
    connect(wingW, back[0], -52, -27, 'arch', 3.4);
    connect(wingE, central[central.length - 1], 52, 0, 'arch', 3.4);
    connect(wingE, back[back.length - 1], 52, -27, 'arch', 3.4);

    // the fenced yard is only reachable through the exit gate
    connect(outdoor, wingE, 58, 0, 'exit', 3.6, () => !!(w.exit && w.exit.open));

    // room doors
    for (const room of w.rooms) {
      const a = this.areaByRoom.get(room.id);
      const d = room.doorObj;
      if (!d) continue;
      const doorX = (room.door[0] + room.door[1]) / 2;
      const corridor = room.side === 'back'
        ? chunkAt(back, doorX)
        : chunkAt(central, doorX);
      const c = connect(a, corridor, doorX, d.wallZ, 'door', 1.5, () => d.open === true);
      // point a little way inside the room: if the wall beside the door
      // blocks the line to it, the doorway is edge-on and the room can
      // stay culled even though the door leaf is on screen
      c.inside = {
        x: doorX,
        z: d.wallZ + (room.side === 'south' ? 1.9 : -1.9)
      };
    }

    this.areas = A;
    this.conns = conns;

    // ── bucket every static prop into an area ──
    this.entries.length = 0;
    this.allProps.length = 0;
    const roots = [w.propGroup, w.hideGroup];
    for (const root of roots) {
      for (const obj of root.children) {
        if (!obj || obj.isLight) continue;
        if (!obj.visible && obj.userData.cullIgnore) continue;
        obj.updateWorldMatrix(true, true);
        const box = new THREE.Box3().setFromObject(obj);
        if (box.isEmpty()) continue;
        const sphere = box.getBoundingSphere(new THREE.Sphere());
        if (sphere.radius < 0.05) continue;
        let owner = this.areaAt(sphere.center.x, sphere.center.z);
        if (!owner) owner = this.nearestArea(sphere.center.x, sphere.center.z);
        const e = {
          obj, box, sphere,
          area: owner,
          hidden: !obj.visible,
          blocked: 0
        };
        this.entries.push(e);
        this.allProps.push(obj);
      }
    }

    // ── static architecture (walls, doors, windows, fixtures) ──
    // These are direct scene children, so they are bucketed the same
    // way. A mesh is kept whenever its bounds touch any *visible*
    // area, which protects shared walls between a seen room and a
    // hidden one.
    this.arch = [];
    const skip = new Set([w.hideGroup, w.itemGroup, w.bodyGroup, w.propGroup]);
    for (const obj of w.scene.children) {
      if (skip.has(obj) || obj.isLight || obj.isCamera) continue;
      if (obj.userData && obj.userData.cullSkip) continue;
      obj.updateWorldMatrix(true, true);
      const box = new THREE.Box3().setFromObject(obj);
      if (box.isEmpty()) continue;
      let owner = this.areaAt((box.min.x + box.max.x) / 2, (box.min.z + box.max.z) / 2);
      if (!owner) owner = this.nearestArea((box.min.x + box.max.x) / 2, (box.min.z + box.max.z) / 2);
      this.arch.push({
        obj, box, area: owner, hidden: !obj.visible,
        internal: false, cullSkip: false
      });
    }

    this.walls = w.colliders.filter(c =>
      c.type === 'wall' && c.enabled !== false && c.sight !== false
    );

    this.stats.props = this.entries.length;
    this.stats.areas = A.length;
    this.stats.arch = this.arch.length;
    this.ready = this.entries.length > 0;
    this.timer = 0;
  }

  nearestArea(x, z) {
    let best = null, bestD = Infinity;
    for (const a of this.areas) {
      const dx = Math.max(a.x1 - x, 0, x - a.x2);
      const dz = Math.max(a.z1 - z, 0, z - a.z2);
      const d = dx * dx + dz * dz;
      if (d < bestD) { bestD = d; best = a; }
    }
    return best;
  }

  areaAt(x, z) {
    let best = null, bestD = Infinity;
    for (const a of this.areas) {
      if (x >= a.x1 - 0.4 && x <= a.x2 + 0.4 && z >= a.z1 - 0.4 && z <= a.z2 + 0.4) {
        // rooms win over corridors when they touch
        const d = (x - a.cx) ** 2 + (z - a.cz) ** 2;
        if (a.kind === 'room') return a;
        if (d < bestD) { bestD = d; best = a; }
      }
    }
    return best;
  }

  losBlocked(ax, az, bx, bz) {
    for (const c of this.walls) {
      if (this.segmentAABB(ax, az, bx, bz, c)) return true;
    }
    return false;
  }

  segmentAABB(ax, az, bx, bz, c) {
    let t0 = 0, t1 = 1;
    const dx = bx - ax, dz = bz - az;
    const p = [-dx, dx, -dz, dz];
    const q = [ax - c.x1, c.x2 - ax, az - c.z1, c.z2 - az];
    for (let i = 0; i < 4; i++) {
      if (p[i] === 0) {
        if (q[i] < 0) return false;
      } else {
        const r = q[i] / p[i];
        if (p[i] < 0) {
          if (r > t1) return false;
          if (r > t0) t0 = r;
        } else {
          if (r < t0) return false;
          if (r < t1) t1 = r;
        }
      }
    }
    return true;
  }

  reset() {
    for (const e of this.entries) {
      e.blocked = 0;
      e.hidden = false;
      e.obj.visible = true;
    }
    for (const a of this.areas) a.visible = true;
  }

  // ── per-frame sweep ─────────────────────────────────────────
  update(dt) {
    if (!this.ready || !this.enabled) return;
    // wall-clock, not simulation time: a slow frame must not starve
    // the culler (otherwise stale interiors linger for seconds)
    const now = this.now();
    const cam = this.camera;
    const camAreaNow = this.areaAt(cam.position.x, cam.position.z);
    const areaChanged = camAreaNow !== this.lastCamArea;
    if (!areaChanged && now - this.lastSweep < this.interval) return;
    this.lastSweep = now;
    this.lastCamArea = camAreaNow;

    cam.updateMatrixWorld();
    // The renderer refreshes matrixWorldInverse, but this pass runs
    // before it — and after a POV switch or camera cut that matrix is
    // still from the old view, which would cull the wrong geometry.
    cam.matrixWorldInverse.copy(cam.matrixWorld).invert();
    this.proj.multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse);
    this.frustum.setFromProjectionMatrix(this.proj);

    const camArea = camAreaNow;
    for (const a of this.areas) a.visible = false;

    let areaCount = 0;
    if (!camArea) {
      // outside the graph (rooftop / cutscene off-map): stay safe, show all
      for (const a of this.areas) a.visible = true;
    } else {
      camArea.visible = true;
      // standing in the lot, the glass vestibule is always in view
      if (camArea.kind === 'outdoor') {
        const w = this.game.world;
        const wing = this.areas.find(a => a.id === 'wingE');
        if (wing) wing.visible = true;
      }
      const queue = [camArea];
      let guard = 0;
      while (queue.length && guard++ < 80) {
        const a = queue.pop();
        areaCount++;
        for (const n of a.neighbors) {
          if (n.other.visible) continue;
          if (!n.conn.open()) continue;
          // Only the doorway / seam itself has to be on screen. A room
          // whose door is off-camera cannot be seen even though its
          // bounding sphere may reach into the corridor.
          if (!this.frustum.intersectsSphere(n.conn.sphere)) continue;
          // Sight line to the doorway itself. Oblique doorways and
          // connections reached around a corner are dropped here.
          const tx = n.conn.inside ? n.conn.inside.x : n.conn.px;
          const tz = n.conn.inside ? n.conn.inside.z : n.conn.pz;
          if (this.losBlocked(cam.position.x, cam.position.z, tx, tz)) continue;
          n.other.visible = true;
          queue.push(n.other);
        }
      }
    }

    let visible = 0, hiddenArea = 0, hiddenFrustum = 0;
    for (const e of this.entries) {
      const areaSeen = !e.area || e.area.visible;
      if (!areaSeen) {
        e.blocked = 2;
        if (!e.hidden) { e.obj.visible = false; e.hidden = true; }
        hiddenArea++;
        continue;
      }
      if (!this.frustum.intersectsSphere(e.sphere)) {
        if (!e.hidden) { e.obj.visible = false; e.hidden = true; }
        e.blocked = 0;
        hiddenFrustum++;
        continue;
      }
      // debounce only the "became visible again" direction so that
      // doorways at the edge of the frustum do not strobe
      e.blocked = 0;
      if (e.hidden) { e.obj.visible = true; e.hidden = false; }
      visible++;
    }

    // ── architecture pass ──
    const seen = [];
    for (const a of this.areas) {
      if (a.visible) seen.push(a);
    }
    let archHidden = 0;
    for (const e of this.arch) {
      if (e.cullSkip) continue;
      let keep = !e.area || e.area.visible;
      if (!keep) {
        const b = e.box;
        for (const a of seen) {
          if (b.max.x >= a.x1 - 0.45 && b.min.x <= a.x2 + 0.45 &&
              b.max.z >= a.z1 - 0.45 && b.min.z <= a.z2 + 0.45) { keep = true; break; }
        }
      }
      if (keep) {
        if (e.hidden) { e.obj.visible = true; e.hidden = false; }
      } else if (!e.hidden) {
        e.obj.visible = false;
        e.hidden = true;
      }
    }

    this.stats.visible = visible;
    this.stats.hiddenArea = hiddenArea;
    this.stats.hiddenFrustum = hiddenFrustum;
    this.stats.archHidden = this.arch.reduce((n, e) => n + (e.hidden ? 1 : 0), 0);
    this.stats.areasVisible = seen.length;
    this.stats.areaCount = areaCount;

    // The whole forecourt lives in one scene child, so the per-child
    // architecture pass cannot cull it. Drive it from the area graph
    // instead: indoors with the exit shut, the street does not exist.
    const outdoorGroup = this.game.world.outdoorGroup;
    if (outdoorGroup) {
      const outdoorArea = this.areas.find(a => a.id === 'outdoor');
      const outside = !camArea || camArea.kind === 'outdoor' ||
        (outdoorArea && outdoorArea.visible);
      outdoorGroup.visible = !!outside;
    }
  }
}
