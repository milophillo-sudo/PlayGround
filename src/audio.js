// WebAudio engine: exact transport time, suspend-safe pause, tiny hit clicks.
export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.buffer = null;
    this.source = null;
    this.gain = null;
    this.startAt = 0;
    this.offset = 0;
    this.duration = 0;
    this.loaded = false;
    this.muted = false;
    this.hitGain = null;
    this.cache = new Map();
  }

  async load(url, onProgress) {
    let buffer = this.cache.get(url);
    if (!buffer) {
      const res = await fetch(url);
      if (!res.ok) throw new Error('audio fetch failed: ' + res.status);
      const total = Number(res.headers.get('content-length')) || 1150000;
      let data;
      if (res.body && res.body.getReader) {
        const reader = res.body.getReader();
        const chunks = [];
        let got = 0;
        onProgress?.(0);
        for (;;) {
          const { value, done } = await reader.read();
          if (done) break;
          chunks.push(value);
          got += value.length;
          onProgress?.(Math.min(0.94, got / total));
        }
        data = new Uint8Array(got);
        let off = 0;
        for (const c of chunks) { data.set(c, off); off += c.length; }
      } else {
        data = new Uint8Array(await res.arrayBuffer());
      }
      onProgress?.(0.95);
      this.ctx = this.ctx || new (window.AudioContext || window.webkitAudioContext)({ latencyHint: 'interactive' });
      buffer = await this.ctx.decodeAudioData(data.buffer);
      this.cache.set(url, buffer);
    }
    if (!this.gain) {
      this.gain = this.ctx.createGain();
      this.gain.gain.value = 0.92;
      this.gain.connect(this.ctx.destination);
    }
    if (!this.hitGain) {
      this.hitGain = this.ctx.createGain();
      this.hitGain.gain.value = 0.5;
      this.hitGain.connect(this.ctx.destination);
    }
    onProgress?.(1);
    return buffer;
  }

  // Decoding is async, so the caller decides when a decoded buffer becomes the
  // live transport. That keeps a slow load from a track the player already
  // abandoned from overwriting the one they are waiting on.
  setBuffer(buffer) {
    if (!buffer) return;
    this.buffer = buffer;
    this.duration = buffer.duration;
    this.loaded = true;
  }

  async start(at = 0, options = {}) {
    if (!this.loaded) return;
    if (!this.ctx) throw new Error('no audio context');
    if (this.ctx.state !== 'running') await this.ctx.resume();
    this.stop();
    this.source = this.ctx.createBufferSource();
    this.source.buffer = this.buffer;
    this.source.connect(this.gain);
    const when = this.ctx.currentTime + 0.12;
    this.startAt = when;
    this.offset = at;
    // fade the long tail so results arrive without dead air
    try {
      const fadeStart = Math.max(0, (options.fadeStart ?? this.duration - 6.7) - at);
      const fadeEnd = Math.max(0.05, (options.fadeEnd ?? this.duration - 4.7) - at);
      this.gain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.gain.gain.setValueAtTime(0.92, this.ctx.currentTime);
      this.gain.gain.setValueAtTime(0.92, when + fadeStart);
      this.gain.gain.linearRampToValueAtTime(0.0, when + fadeEnd);
    } catch { /* noop */ }
    this.source.start(when, at);
  }

  stop() {
    if (this.source) {
      try { this.source.stop(); } catch { /* noop */ }
      this.source.disconnect();
      this.source = null;
    }
  }

  // Tape-stop used by the game-over sequence. Lowering playbackRate drops the
  // pitch and tempo together, which reads as the song losing power.
  pitchDrop(target = 0.5, seconds = 2.4) {
    if (!this.ctx || !this.source) return;
    const now = this.ctx.currentTime;
    try {
      const rate = this.source.playbackRate;
      rate.cancelScheduledValues(now);
      rate.setValueAtTime(Math.max(0.05, rate.value || 1), now);
      rate.linearRampToValueAtTime(Math.max(0.05, target), now + seconds);
    } catch { /* noop */ }
    try {
      if (this.gain) {
        const g = this.gain.gain;
        g.cancelScheduledValues(now);
        g.setValueAtTime(Math.max(0.02, g.value || 0.92), now);
        g.linearRampToValueAtTime(0, now + seconds + 0.6);
      }
    } catch { /* noop */ }
  }

  pause() {
    if (this.ctx && this.ctx.state === 'running') this.ctx.suspend();
  }

  resume() {
    if (this.ctx && this.ctx.state !== 'running') this.ctx.resume();
  }

  get time() {
    if (!this.ctx) return 0;
    return this.ctx.currentTime - this.startAt + this.offset;
  }

  get paused() {
    return !!this.ctx && this.ctx.state === 'suspended';
  }

  click(lane = 3, power = 1) {
    if (!this.ctx || this.ctx.state !== 'running' || this.muted) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = 'triangle';
    const base = 360 * Math.pow(2, lane / 12);
    o.frequency.setValueAtTime(base * 1.5, t);
    o.frequency.exponentialRampToValueAtTime(base * 0.75, t + 0.035);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.035 * power, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.055);
    o.connect(g); g.connect(this.hitGain);
    o.start(t); o.stop(t + 0.07);
  }

  thud() {
    if (!this.ctx || this.ctx.state !== 'running' || this.muted) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(90, t);
    o.frequency.exponentialRampToValueAtTime(45, t + 0.12);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.05, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
    o.connect(g); g.connect(this.hitGain);
    o.start(t); o.stop(t + 0.2);
  }
}
