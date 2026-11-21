// Authored chart recipes. The builder turns these into note charts from the
// stored onset analysis: tdps is the target time-density (note events per
// second, before mirrored chords), style selects a lane pattern family, and
// holds are placed in the breathing parts of each arrangement.
//
// A hold spec is measured from the section's first playable note:
//   { bar, beat, pos, beats }
// bar/beat are offsets, pos is an index inside the active lane set, and beats
// is the hold length. Positions wrap, so a recipe works for any lane count.

const hold = (bar, beat, pos, beats) => ({ bar, beat, pos, beats });

export const RECIPES = {
  cryout: {
    chordRate: 0.07,
    sections: {
      SIGNAL: { tdps: 1.45, style: 'stair', endPad: 0.18 },
      ASCENT: { tdps: 2.2, style: 'wave' },
      CURRENT: { tdps: 2.6, style: 'zig' },
      SURGE: { tdps: 3.35, style: 'mirror', chordRate: 0.09 },
      DRIFT: {
        tdps: 1.15, style: 'wave',
        holds: [hold(1, 0, 0, 4), hold(3, 0, 3, 4), hold(5, 0, 1, 4), hold(7, 0, 2, 4)],
      },
      PRESSURE: { tdps: 2.75, style: 'zig' },
      BREAK: { tdps: 0.55, style: 'stair', chords: false },
      CRYOUT: { tdps: 3.85, style: 'boss', chordRate: 0.1 },
      AFTERGLOW: {
        tdps: 1.25, style: 'stair',
        holds: [hold(1, 0, 0, 3), hold(3, 0, 2, 3)],
      },
      OUTRO: { skip: true },
    },
  },

  world: {
    chordRate: 0.06,
    thumbFriendly: true,
    sections: {
      INTRO: {
        tdps: 0.85, style: 'wave',
        holds: [hold(2, 2, 0, 2)],
      },
      VERSE: {
        tdps: 2.05, style: 'diagonal',
        holds: [hold(2, 0, 1, 2), hold(6, 2, 4, 3)],
      },
      BUILD: { tdps: 2.8, style: 'wave', chordRate: 0.07 },
      LIFT: { tdps: 3.45, style: 'zig', chordRate: 0.08 },
      CHORUS: { tdps: 4.15, style: 'mirror', chordRate: 0.1 },
      DRIVE: { tdps: 4.15, style: 'zig', chordRate: 0.1 },
      BREAK: {
        tdps: 1.55, style: 'stair',
        holds: [hold(2, 0, 1, 3), hold(7, 0, 3, 3)],
      },
      RETURN: {
        tdps: 3.45, style: 'wave', chordRate: 0.08,
        holds: [hold(8, 0, 2, 3)],
      },
      FINAL: {
        tdps: 4.2, style: 'mirror', chordRate: 0.1,
        holds: [hold(10, 0, 4, 2)],
      },
      OUTRO: { skip: true },
    },
  },

  chronostasis: {
    chordRate: 0.06,
    thumbFriendly: true,
    sections: {
      INTRO: {
        tdps: 0.9, style: 'clock',
        holds: [hold(3, 0, 1, 3), hold(7, 0, 2, 3)],
      },
      GEARS: { tdps: 2.0, style: 'clock' },
      VERSE: { tdps: 2.45, style: 'clock', holds: [hold(8, 0, 0, 3)] },
      PENDULUM: { tdps: 3.35, style: 'clock', holds: [hold(6, 2, 5, 2)] },
      STASIS: { swing: true, skip: true },
      RETURN: {
        tdps: 3.25, style: 'clock',
        holds: [hold(4, 0, 3, 3)],
      },
      TICK: { tdps: 3.85, style: 'clock', holds: [hold(8, 0, 1, 2)] },
      FINAL: { tdps: 4.25, style: 'clock', chordRate: 0.08, holds: [hold(10, 0, 4, 2)] },
      OUTRO: {
        tdps: 1.15, style: 'clock',
        holds: [hold(1, 0, 0, 3), hold(4, 0, 3, 2)],
      },
    },
  },

  untouchable: {
    chordRate: 0.13,
    sections: {
      OVERTURE: { skip: true },
      RELIQUARY: { skip: true },
      HUSH: { skip: true },
      PROCESSION: { skip: true },
      CHAMBER: {
        tdps: 1.25, style: 'stair',
        holds: [hold(2, 0, 1, 3), hold(5, 0, 2, 3), hold(8, 0, 0, 3)],
      },
      MECHANISM: {
        tdps: 2.45, style: 'clock',
        holds: [hold(4, 0, 4, 2)],
      },
      DESCENT: { tdps: 3.2, style: 'zig' },
      GALLERY: { tdps: 4.0, style: 'mirror' },
      HUNT: { tdps: 4.3, style: 'zig', chordRate: 0.14 },
      FROZEN: {
        tdps: 1.85, style: 'stair',
        holds: [hold(1, 0, 1, 3), hold(5, 0, 2, 3)],
      },
      ASCENT: { tdps: 4.5, style: 'boss' },
      APOTHEOSIS: {
        tdps: 4.75, style: 'boss', chordRate: 0.16,
        holds: [hold(5, 0, 3, 2)],
      },
      FINALE: {
        tdps: 5.1, style: 'boss', chordRate: 0.16,
        holds: [hold(9, 0, 4, 2)],
      },
      OUTRO: { skip: true },
    },
  },

  intention: {
    chordRate: 0.1,
    sections: {
      VOID: { skip: true },
      REVELATION: {
        tdps: 2.25, style: 'stair',
        holds: [hold(2, 0, 1, 4)],
      },
      DESCENT: { tdps: 3.4, style: 'one', oneLane: 3 },
      ASSAIL: { tdps: 3.15, style: 'zig' },
      LIBRA: {
        tdps: 3.05, style: 'mirror',
        holds: [hold(1.5, 0, 2, 4), hold(5, 0, 0, 4), hold(8.5, 0, 3, 4)],
      },
      HALO: {
        tdps: 3.45, style: 'mirror', chordRate: 0.14,
        holds: [hold(2, 0, 3, 5)],
      },
      DISTORTION: { skip: true },
      GUILT: { tdps: 2.45, style: 'one', oneLane: 3, div: 2 },
      'GUILT II': { tdps: 3.45, style: 'one', oneLane: 3, div: 2 },
      OFFBEAT: { offbeat: true },
      FASTBEAT: { tdps: 5.7, style: 'one', oneLane: 3, div: 2 },
      TIDE: {
        tdps: 2.7, style: 'wave',
        holds: [hold(1, 0, 0, 5), hold(3.5, 0, 2, 5), hold(6, 0, 3, 5), hold(9, 0, 1, 4)],
      },
      MEMORY: {
        tdps: 2.05, style: 'stair',
        holds: [hold(0.5, 0, 1, 5), hold(3, 0, 3, 5), hold(5.5, 0, 0, 5), hold(8, 0, 2, 5), hold(10.5, 0, 1, 5), hold(13, 0, 3, 4)],
      },
      STATIC: {
        tdps: 2.95, style: 'zig',
        holds: [hold(1, 0, 2, 5), hold(4, 0, 3, 5), hold(7, 0, 1, 5)],
      },
      DETERMINATION: {
        tdps: 4.15, style: 'boss', chordRate: 0.14,
        holds: [hold(1, 0, 1, 4), hold(3.5, 0, 4, 4), hold(6, 0, 2, 4), hold(8.5, 0, 5, 4), hold(11, 0, 0, 4), hold(13.5, 0, 3, 4)],
      },
      WHITEOUT: { skip: true },
      'FAKE GUILT': {
        tdps: 3.95, style: 'mirror', chordRate: 0.1,
        holds: [hold(1, 0, 0, 4), hold(4, 0, 3, 4), hold(7, 0, 1, 4)],
      },
      DAWN: { skip: true },
    },
  },
};
