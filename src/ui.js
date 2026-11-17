import * as THREE from 'three';

const $ = (id) => document.getElementById(id);
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const screens = ['title-screen', 'controls-screen', 'pause-screen', 'caught-screen', 'win-screen', 'loading'];

export const UI = {
  el: {},
  _subTimer: 0,
  _toastTimer: 0,
  _promptTimer: 0,

  init() {
    for (const id of [
      'app', 'hud', 'scene', 'objective-text', 'objective-sub', 'note-count', 'minimap',
      'bot-roster', 'health-fill', 'noise-fill', 'stamina-fill', 'battery-fill', 'torch-state',
      'prompt', 'prompt-text', 'prompt-hold', 'pov-banner', 'pov-name', 'subtitle-wrap', 'speaker',
      'subtitle', 'toast', 'detection', 'title-screen', 'controls-screen', 'pause-screen',
      'caught-screen', 'caught-line', 'caught-tip', 'win-screen', 'win-grade', 'win-stats', 'win-line',
      'report-card', 'card-name', 'card-rows', 'card-foot', 'card-stamp', 'note-popup', 'note-title',
      'note-body', 'letterbox', 'fade', 'chapter-card', 'down-fx', 'down-secs', 'jumpscare-fx',
      'cine-ui', 'cine-subtitle-wrap', 'cine-speaker', 'cine-subtitle', 'cine-card', 'cine-grade',
      'cine-flash', 'cine-flare', 'cine-speedlines', 'cine-skip', 'touch-ui', 'btn-play'
    ]) this.el[id] = $(id);
    this.el.chapterKicker = document.querySelector('#chapter-card .chapter-kicker');
    this.el.chapterTitle = document.querySelector('#chapter-card .chapter-title');
    this.el.cineKicker = document.querySelector('#cine-card .cine-kicker');
    this.el.cineTitle = document.querySelector('#cine-card .cine-title');
    this.el.cgRows = document.querySelector('#cine-grade .cg-rows');
    this.el.cgStamp = document.querySelector('#cine-grade .cg-stamp');
    this.el.cgName = document.querySelector('#cine-grade .cg-name');
    this.el.cineCardEl = $('cine-card');
    this.el.gradeEl = $('cine-grade');
  },

  showScreen(id) {
    for (const s of screens) {
      const el = $(s);
      if (el) el.classList.toggle('hidden', s !== id);
    }
  },
  hideScreens() {
    for (const s of screens) {
      const el = $(s);
      if (el) el.classList.add('hidden');
    }
  },

  showHud(v) { this.el.hud.classList.toggle('hidden', !v); },
  setTouch(v) { this.el['touch-ui'].classList.toggle('hidden', !v); },

  setObjective(text, sub = '') {
    this.el['objective-text'].textContent = text;
    this.el['objective-sub'].textContent = sub;
  },
  setNotes(n, total = 7) { this.el['note-count'].textContent = `${n} / ${total} JOKE NOTES`; },

  toast(msg, ms = 2600) {
    const t = this.el.toast;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => t.classList.remove('show'), ms);
  },

  subtitle(speaker, text, dur = 3.4) {
    const wrap = this.el['subtitle-wrap'];
    this.el.speaker.textContent = speaker || '';
    this.el.subtitle.innerHTML = text;
    wrap.classList.add('show');
    clearTimeout(this._subTimer);
    if (dur > 0) this._subTimer = setTimeout(() => this.clearSubtitle(), dur * 1000);
  },
  clearSubtitle() {
    this.el['subtitle-wrap'].classList.remove('show');
  },

  prompt(text, hold = 0, key = 'E') {
    const p = this.el.prompt;
    if (!text) { p.classList.remove('show'); this.el['prompt-hold'].style.width = '0%'; return; }
    this.el['prompt-text'].innerHTML = `<span class="key">${key}</span>${text}`;
    p.classList.add('show');
    this.el['prompt-hold'].style.width = `${Math.max(0, Math.min(1, hold)) * 100}%`;
  },
  setPromptHold(v) { this.el['prompt-hold'].style.width = `${Math.max(0, Math.min(1, v)) * 100}%`; },

  setMeters({ hp, noise, stamina, battery }) {
    if (hp !== undefined) this.el['health-fill'].style.width = `${Math.max(0, Math.min(100, hp))}%`;
    if (noise !== undefined) this.el['noise-fill'].style.width = `${Math.max(0, Math.min(100, noise))}%`;
    if (stamina !== undefined) this.el['stamina-fill'].style.width = `${Math.max(0, Math.min(100, stamina))}%`;
    if (battery !== undefined) this.el['battery-fill'].style.width = `${Math.max(0, Math.min(100, battery))}%`;
  },
  setTorch(on, battery) {
    this.el['torch-state'].textContent = on ? `TORCH ON [F] · ${Math.round(battery)}%` : `TORCH OFF [F] · ${Math.round(battery)}%`;
    this.el['torch-state'].classList.toggle('on', on);
  },
  setDetection(v) { this.el.detection.classList.toggle('show', !!v); },

  showPov(name, ms = 2600) {
    const b = this.el['pov-banner'];
    this.el['pov-name'].textContent = name;
    b.classList.add('show');
    clearTimeout(this._povTimer);
    this._povTimer = setTimeout(() => b.classList.remove('show'), ms);
  },

  updateBots(game) {
    const roster = this.el['bot-roster'];
    let html = '';
    for (const b of game.bots) {
      const cls = b.dead ? 'dead' : b.downed ? 'downed' : b.escaped ? 'escaped' : '';
      const tag = b.dead ? '✕' : b.downed ? Math.ceil(b.downTimer) + 's' : b.escaped ? '✓' : '';
      const label = b.controlled ? `${b.name} · YOU` : b.name;
      html += `<div class="bot-row ${cls}"><span class="bot-dot"></span><span style="width:46px">${label}</span><span class="bot-hp"><i style="width:${Math.max(0, b.hp)}%"></i></span><span class="bot-tag">${tag}</span></div>`;
    }
    if (game.player.escaped) {
      html += `<div class="bot-row escaped"><span class="bot-dot"></span><span style="width:46px">YOU · OUT</span><span class="bot-hp"><i style="width:100%"></i></span><span class="bot-tag">✓</span></div>`;
    }
    roster.innerHTML = html;
  },

  drawMinimap(game) {
    const c = this.el.minimap;
    const g = c.getContext('2d');
    const w = c.width, h = c.height;
    g.clearRect(0, 0, w, h);
    g.fillStyle = 'rgba(2,8,6,.72)';
    g.fillRect(0, 0, w, h);
    const X = x => (x + 60) / 122 * w;
    const Z = z => (z + 47) / 70 * h;
    // corridors
    g.fillStyle = 'rgba(120,180,145,.13)';
    g.fillRect(X(-52), Z(-3), X(52) - X(-52), Z(3) - Z(-3));
    g.fillRect(X(-52), Z(-30), X(52) - X(-52), Z(-24) - Z(-30));
    g.fillRect(X(-58), Z(-30), X(-52) - X(-58), Z(3) - Z(-30));
    g.fillRect(X(52), Z(-30), X(58) - X(52), Z(3) - Z(-30));
    g.fillRect(X(-10), Z(-24), X(-7) - X(-10), Z(-3) - Z(-24));
    // rooms
    for (const r of game.world.rooms) {
      const locked = r.doorObj && r.doorObj.locked;
      g.fillStyle = locked ? 'rgba(255,88,100,.17)' : 'rgba(141,255,178,.13)';
      g.strokeStyle = locked ? 'rgba(255,88,100,.75)' : 'rgba(141,255,178,.4)';
      g.lineWidth = 1;
      g.fillRect(X(r.x1), Z(r.z1), X(r.x2) - X(r.x1), Z(r.z2) - Z(r.z1));
      g.strokeRect(X(r.x1), Z(r.z1), X(r.x2) - X(r.x1), Z(r.z2) - Z(r.z1));
      if (!game.player.escaped) {
        g.fillStyle = 'rgba(200,230,210,.42)';
        g.font = '5px Courier New';
        g.textAlign = 'center';
        g.fillText(r.short, X((r.x1 + r.x2) / 2), Z((r.z1 + r.z2) / 2) + 2);
      }
    }
    // items (only keys/crowbar not found)
    for (const it of game.world.items) {
      if (it.picked) continue;
      if (it.kind === 'key') {
        const has = game.player.keys.has(it.data.keyId);
        if (has) continue;
        g.fillStyle = '#ffd166';
        g.beginPath(); g.arc(X(it.x), Z(it.z), 1.7, 0, 7); g.fill();
      } else if (it.kind === 'crowbar' && !game.player.crowbar) {
        g.fillStyle = '#ff9f43';
        g.fillRect(X(it.x) - 2, Z(it.z) - 1.5, 4, 3);
      }
    }
    // exit
    g.fillStyle = game.world.exit.open ? '#8dffb2' : game.world.exit.unlocked ? '#ffcf6b' : '#ff5566';
    g.fillRect(X(57), Z(-2.4), 4, 5);
    // bots
    for (const b of game.bots) {
      if (b.dead || b.escaped) continue;
      g.fillStyle = b.downed ? '#ff3448' : b.controlled ? '#8dffb2' : '#6fa8ff';
      g.beginPath(); g.arc(X(b.pos.x), Z(b.pos.z), b.controlled ? 3 : 2.2, 0, 7); g.fill();
    }
    // killer
    if (game.killer && game.killer.active) {
      g.fillStyle = '#ff2637';
      g.beginPath(); g.arc(X(game.killer.pos.x), Z(game.killer.pos.z), 3.1, 0, 7); g.fill();
      g.strokeStyle = 'rgba(255,38,55,.5)';
      g.beginPath(); g.arc(X(game.killer.pos.x), Z(game.killer.pos.z), 6 + Math.sin(game.time * 5) * 2, 0, 7); g.stroke();
    }
    // player
    if (!game.player.escaped) {
      const p = game.player.pos;
      g.save();
      g.translate(X(p.x), Z(p.z));
      g.rotate(-game.player.yaw);
      g.fillStyle = '#eafff1';
      g.beginPath(); g.moveTo(0, -5); g.lineTo(3.5, 4); g.lineTo(0, 2); g.lineTo(-3.5, 4); g.closePath(); g.fill();
      g.restore();
    }
  },

  fade(on, ms = 750) {
    const f = this.el.fade;
    f.style.transition = `opacity ${ms}ms`;
    f.classList.toggle('on', on);
  },
  letterbox(on) { this.el.letterbox.classList.toggle('on', on); },
  chapter(kicker, title, dur = 3200) {
    this.el.chapterKicker.textContent = kicker;
    this.el.chapterTitle.textContent = title;
    this.el['chapter-card'].classList.add('show');
    clearTimeout(this._chapterTimer);
    this._chapterTimer = setTimeout(() => this.el['chapter-card'].classList.remove('show'), dur);
  },

  async reportCard(student, rows, opts = {}) {
    const card = this.el['report-card'];
    this.el['card-name'].textContent = `STUDENT: ${student}`;
    this.el['card-rows'].innerHTML = rows.map(r => `<div class="row"><span class="subject">${r[0]}</span><span class="grade ${r[3] || ''}">${r[1]}</span></div>`).join('');
    this.el['card-stamp'].textContent = opts.stamp || 'Q';
    this.el['card-foot'].textContent = opts.foot || 'PARENT SIGNATURE: ____________________';
    card.classList.remove('hidden');
    if (opts.wrong) { card.classList.remove('wrong'); void card.offsetWidth; card.classList.add('wrong'); }
    if (opts.quick) { card.querySelectorAll('.row').forEach(r => r.classList.add('on')); return; }
    const rowEls = [...card.querySelectorAll('.row')];
    for (const r of rowEls) {
      await sleep(opts.rowDelay || 240);
      r.classList.add('on');
    }
  },
  hideReportCard() { this.el['report-card'].classList.add('hidden'); },

  note(title, body) {
    this.el['note-title'].textContent = title;
    this.el['note-body'].textContent = body;
    this.el['note-popup'].classList.remove('hidden');
  },
  hideNote() { this.el['note-popup'].classList.add('hidden'); },

  setDown(on) {
    this.el['down-fx'].classList.toggle('on', on);
    this.el.app.classList.toggle('downed', on);
  },
  setDownSecs(s) { this.el['down-secs'].textContent = Math.max(0, Math.ceil(s)); },

  jumpscare(on) {
    this.el['jumpscare-fx'].classList.toggle('on', on);
    if (on) {
      this.el.app.classList.remove('shake'); void this.el.app.offsetWidth; this.el.app.classList.add('shake');
    }
  },

  showCine(on) {
    this.el['cine-ui'].classList.toggle('hidden', !on);
    this.el.app.classList.toggle('cinema', on);
    if (!on) {
      this.el['cine-subtitle-wrap'].classList.remove('show');
      this.el['cine-card'].classList.remove('show');
      this.el['cine-grade'].classList.remove('show');
    }
  },
  cineSubtitle(speaker, text, dur = 3.4) {
    this.el['cine-speaker'].textContent = speaker || '';
    this.el['cine-subtitle'].innerHTML = text;
    this.el['cine-subtitle-wrap'].classList.add('show');
    clearTimeout(this._cineSubTimer);
    this._cineSubTimer = setTimeout(() => this.el['cine-subtitle-wrap'].classList.remove('show'), dur * 1000);
  },
  cineClearSub() { this.el['cine-subtitle-wrap'].classList.remove('show'); },
  cineCard(kicker, title, align = 'left') {
    const c = this.el['cine-card'];
    c.classList.remove('center', 'left');
    c.classList.add(align === 'center' ? 'center' : 'left');
    this.el.cineKicker.textContent = kicker;
    this.el.cineTitle.textContent = title;
    c.classList.remove('show'); void c.offsetWidth; c.classList.add('show');
  },
  cineHideCard() { this.el['cine-card'].classList.remove('show'); },
  cineFlash() { const f = this.el['cine-flash']; f.classList.remove('fire'); void f.offsetWidth; f.classList.add('fire'); },
  cineFlare(on) { this.el['cine-flare'].classList.toggle('on', on); },
  cineLines(on) { this.el['cine-speedlines'].classList.toggle('on', on); },
  cineSkip(on) { this.el['cine-skip'].classList.toggle('show', on); },

  cineGrade(rows, opts = {}) {
    clearTimeout(this._cgHide);
    this.el.cgName.innerHTML = `STUDENT: <b>${opts.name || 'JAKE'}</b>`;
    this.el.cgRows.innerHTML = rows.map(r => `<div class="cg-row"><span class="subject">${r[0]}</span>${r[4] ? `<span class="note">${r[4]}</span>` : ''}<span class="grade ${r[3] || ''}">${r[1]}</span></div>`).join('');
    this.el.cgStamp.textContent = opts.stamp || 'Z+';
    this.el.gradeEl.classList.remove('hidden', 'wrong');
    this.el.gradeEl.classList.add('show');
    if (opts.wrong) { void this.el.gradeEl.offsetWidth; this.el.gradeEl.classList.add('wrong'); }
  },
  cineGradeRow(i) {
    const rows = this.el.cgRows.querySelectorAll('.cg-row');
    if (rows[i]) rows[i].classList.add('on');
  },
  cineStamp() { this.el.cgStamp.classList.add('on'); },
  cineGradeHide() {
    this.el.gradeEl.classList.remove('show');
    clearTimeout(this._cgHide);
    this._cgHide = setTimeout(() => this.el.gradeEl.classList.add('hidden'), 420);
  },

  win(grade, stats, line) {
    this.el['win-grade'].textContent = grade;
    this.el['win-stats'].innerHTML = stats;
    this.el['win-line'].textContent = line;
    this.showScreen('win-screen');
  },
  caught(line, tip) {
    if (line) this.el['caught-line'].textContent = line;
    if (tip) this.el['caught-tip'].textContent = tip;
    this.showScreen('caught-screen');
  }
};

export { sleep };
