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

A browser rhythm game built around a flat, bold hit-circle language placed inside a moving 3D field. Five fully charted tracks are included, each with its own section map, lane motion, effects, and difficulty curve.

### Tracks

| Track | BPM | Difficulty | Lanes | Notes |
| --- | --- | --- | --- | --- |
| **CRYOUT** | 100 | Advanced | 4 · 6 · 8 | 328 notes · 6 holds |
| **WORLD YEARNING FOR AN END** | 120 | Hard | 4 · 6 | 448 notes · 5 holds |
| **CHRONOSTASIS** | 99.4 | Expert | 4 · 6 | 432 notes · 1 hold · 8 pendulum taps |
| **THE UNTOUCHABLE OF f RA IA'S LAND** | 111.1 / 96 | Boss | 4 · 6 · 8 | 407 notes · 4 holds · 243 events |
| **INTENTION** | 180 / 195 | Boss | 1 · 2 · 4 · 6 | 596 notes · 26 holds · 239 events |

Charts are generated offline from beat/onset analysis, then committed as static data in `src/charts/`. Each track has its own event recipe: CRYOUT keeps its authored 4/6/8-lane chart and signal accents, WORLD uses city/atmospheric accents, CHRONOSTASIS derives its ticks, bursts, clock windows, and pendulum taps from its analysed motif peaks, and THE UNTOUCHABLE is built from a dedicated onset analysis with an explicit tempo map. INTENTION uses a dedicated onset/tempo analysis and an event score for its ocean, libra, guilt and dawn movements. Track metadata lives in `src/tracks.js`.

### Gameplay

- **Track selection:** pick any of the five tracks from the start screen. Audio decodes per track and is cached, and personal bests are stored per track in `localStorage`. A run that clears a track (50% accuracy or better) marks its card, and the picker header tracks how many of the five have been cleared.
- **Dynamic lane count:** charts move through 4, 6, and 8-lane sections; the field spacing, ring scale, note scale, camera and hit zones re-frame themselves around the playable lanes.
- **Tap the whole lane:** invisible tap strips start at the hit circle, run straight up the lane along its projected angle, extend below the ring for thumbs, and widen to fill the gap between neighbouring lanes. Pressing never draws an overlay — all feedback is in the 3D field.
- **Incoming lanes unlock early:** a lane with a note on the way becomes tappable before its section officially starts, so notes never arrive on a hidden lane.
- **Holds:** keep at least one finger anywhere on the screen to sustain every active hold. Releasing one thumb won't break another lane's hold.
- **Moving lanes:** lanes fan, wave, slope, zigzag, and orbit with each section; notes and hold bodies are parented to the lane frame so they follow the same diagonal.
- **Unused-lane echoes:** dormant lanes emit directional beat echoes that drift sideways, slow down, and fade.
- **City intro:** the second track layers a two-plane parallax skyline behind the field during its intro, break, and outro.
- **Clockwork background:** CHRONOSTASIS turns the two unused outer lanes into a background clock. The slow hand sweeps while the fast hand ticks on the beat; the chart starts the clock at motif boundaries, freezes it during the breakdown, and speeds it up for the final section.
- **Frozen pendulum:** during the STASIS breakdown the clock stops and one lane becomes an antique pendulum. It swings left and right over a centre target while music-note glyphs float around it; tap the centre (click/tap the target or press `Space`) each time the bob crosses the middle. The gimmick runs until the next clock event and then hands the screen back to the lane chart.
- **Cathedral overture:** THE UNTOUCHABLE opens with 28.5 lane-less seconds inside a procedural gothic nave. The camera cuts down the aisle on the beat, stained glass and title cards carry the story, and the playfield stays hidden until the clock chamber arrives.
- **Wind instead of idle lanes:** in the boss stage any lane that is not playable becomes a stream of 3D wind ribbons that sweep through X, Y and Z while spinning, so the unused field is part of the scene instead of empty tracks.
- **Free-flight clock stage:** after the overture the nave becomes the playfield and notes travel on curved X/Z paths before converging on their lane rings at the hit line. The boss chart follows a 111.1 → 96 → 111.1 BPM map, and every camera, glitch, caption and clock tick event is keyed to the analysed song. A framing guard measures the live rings and the clock crown after each authored camera move, then only adjusts pitch, lens or distance when the hit line or the crown would leave the frame, so the cinematic direction survives on desktop and phone aspect ratios.
- **INTENTION's four memories:** a black-particle overture with white lanes opens onto an ocean under dark clouds, a golden libra, four cardinal pillars, and a spinning halo star. A one-lane corkscrew snaps back to the field, the camera leans toward the lane that just answered, and the top-down libra shot carries a glitching INTENTIONS title. The chart then distorts into a heartbeat, hands the screen to a red GUILT bar that only stays full on consistent perfects, fractures into the reference two-lane fourth-beat gimmick, and returns to a fast one-lane run. The memory rises through static, determination opens six lanes, a whiteout cuts to black four-lane false guilt with a decorative bar that cannot refill, and the dawn returns the ocean, adds flowers, hides the notes, and turns the sync bar into a full rainbow.
- **Guilt engine:** during INTENTION's guilt movements the red bar drains with note density and receives a small refill for every perfect/great/good, so sparse phrases are forgiving and dense phrases demand accuracy. The later fake bar is decorative: it drains slowly toward a crack, never refills, and does not affect scoring.
- **Feedback:** perfect/great/good/bad/miss windows, combo, score, accuracy, sync meter, hit bursts, shockwaves, screen flashes, and rank screen.
- **Results:** animated “COMPILING RESULTS” transition followed by a full results layout with score, accuracy ring, judgement bars, combo trace, rank, and new-best delta.
- **Pause safely:** `Esc` or the pause button freezes both the transport and the chart; switching tabs/windows pauses automatically.
- **Responsive:** landscape and portrait layouts, safe-area padding, multi-touch pointer capture, no page scrolling during play.

### Controls

`A S D F J K L ;`, numpad `1–8`, or tap/click anywhere along a lane. During CHRONOSTASIS's STASIS breakdown, `Space` or a tap on the centre target hits the pendulum. `Esc` pauses.

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
node tools/build-charts.mjs cryout-analysis.json world-analysis.json chronostasis-analysis.json
node tools/build-boss-chart.mjs   # reads tools/source/untouchable-onsets.json
node tools/build-intention-chart.mjs   # reads tools/source/intention-onsets.json
```

The original Cryout chart is preserved in `tools/source/cryout-legacy.json`. The analyser reads mono 16-bit WAV; the repository MP3s can be decoded to that format offline before analysis. The chart builder derives clock windows and accents from detected motif peaks, so adding another song does not reuse the same event layout. The boss chart builder maps the overture, clock chamber and finale onto the analysed onset grid and writes the full event score used by the cathedral stage.

