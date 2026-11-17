# PlayGround

<!-- omgithub:readme:start -->
## 🚀 Build, play, and remix with OMGithub

**Created using [OMGithub.com](https://go.ondev.store/).**

[![OMGithub](https://img.shields.io/badge/OMGithub-Open%20project-orange?style=for-the-badge)](https://go.ondev.store/milophillo-sudo/PlayGround)
[![GitHub](https://img.shields.io/badge/GitHub-Source-181717?logo=github&style=for-the-badge)](https://github.com/milophillo-sudo/PlayGround)

- 🎮 [Open the project](https://go.ondev.store/milophillo-sudo/PlayGround).
- ✨ [Remix this project](https://go.ondev.store/milophillo-sudo/PlayGround?remix=1).
- 💻 [Explore the source](https://github.com/milophillo-sudo/PlayGround).
- 🛠️ [Check build runs](https://github.com/milophillo-sudo/PlayGround/actions).
- 🐛 [Report an issue](https://github.com/milophillo-sudo/PlayGround/issues).
- 👤 [Explore the creator's projects](https://go.ondev.store/milophillo-sudo).
- 🌍 [Create with OMGithub](https://go.ondev.store/).
<!-- omgithub:readme:end -->

## CRYOUT — Dynamic 3D Rhythm

A browser rhythm game built around a flat, bold hit-circle language placed inside a moving 3D field. Two fully charted tracks are included, each with its own section map, lane motion, effects, and difficulty curve.

### Tracks

| Track | BPM | Difficulty | Lanes | Notes |
| --- | --- | --- | --- | --- |
| **CRYOUT** | 100 | Advanced | 4 · 6 · 8 | 328 notes · 6 holds |
| **WORLD YEARNING FOR AN END** | 120 | Hard | 4 · 6 | 448 notes · 5 holds |

Charts are generated offline from beat/onset analysis, then committed as static data in `src/charts/`. Track metadata lives in `src/tracks.js`.

### Gameplay

- **Track selection:** pick either song from the start screen. Audio decodes per track and is cached, and personal bests are stored per track in `localStorage`.
- **Dynamic lane count:** charts move through 4, 6, and 8-lane sections; the field spacing, ring scale, note scale, camera and hit zones re-frame themselves around the playable lanes.
- **Tap the whole lane:** invisible tap strips start at the hit circle, run straight up the lane along its projected angle, and extend slightly below the ring for thumbs. Pressing never draws an overlay — all feedback is in the 3D field.
- **Incoming lanes unlock early:** a lane with a note on the way becomes tappable before its section officially starts, so notes never arrive on a hidden lane.
- **Holds:** keep at least one finger anywhere on the screen to sustain every active hold. Releasing one thumb won't break another lane's hold.
- **Moving lanes:** lanes fan, wave, slope, zigzag, and orbit with each section; notes and hold bodies are parented to the lane frame so they follow the same diagonal.
- **Unused-lane echoes:** dormant lanes emit directional beat echoes that drift sideways, slow down, and fade.
- **City intro:** the second track layers a two-plane parallax skyline behind the field during its intro, break, and outro.
- **Feedback:** perfect/great/good/bad/miss windows, combo, score, accuracy, sync meter, hit bursts, shockwaves, screen flashes, and rank screen.
- **Results:** animated “COMPILING RESULTS” transition followed by a full results layout with score, accuracy ring, judgement bars, combo trace, rank, and new-best delta.
- **Pause safely:** `Esc` or the pause button freezes both the transport and the chart; switching tabs/windows pauses automatically.
- **Responsive:** landscape and portrait layouts, safe-area padding, multi-touch pointer capture, no page scrolling during play.

### Controls

`A S D F J K L ;`, numpad `1–8`, or tap/click anywhere along a lane. `Esc` pauses.

### Development

```bash
npm install
npm run dev     # http://localhost:3002
npm run build   # static bundle in dist/
```

The playfield is Three.js with an Unreal Bloom pass; audio transport is Web Audio so pause/resume freezes the chart and the music together.

### Chart tooling

```bash
node tools/analyze-audio.mjs input.wav analysis.json
node tools/build-charts.mjs cryout-analysis.json world-analysis.json
```

The original Cryout chart is preserved in `tools/source/cryout-legacy.json`.

