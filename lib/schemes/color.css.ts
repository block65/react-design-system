// eslint-disable-next-line import/no-extraneous-dependencies
import {
  assignVars,
  type ComplexStyleRule,
  createTheme,
  createThemeContract,
  style,
} from '@vanilla-extract/css';
import type { Tone } from '../tone.css.js';
import { hsl } from '../utils.js';

export type ColorScheme = 'dark' | 'light' | 'auto';

export type ContrastScheme = 'more' | 'less' | 'auto';

export type Tokens = {
  [key: string]: string;
};

// all of these will be overridable by the user
export const [defaultColorThemeClass, colorThemeVars] = createTheme({
  tones: {
    accent: {
      h: '220',
      s: '50%',
      l: '0%',
    },
    info: {
      h: '210',
      s: '60%',
      l: '0%',
    },
    neutral: {
      h: '210',
      s: '20%',
      l: '0%',
    },
    promo: {
      h: '280',
      s: '60%',
      l: '0%',
    },
    warn: {
      h: '30',
      s: '60%',
      l: '0%',
    },
    positive: {
      h: '90',
      s: '40%',
      l: '0%',
    },
    critical: {
      h: '0',
      s: '50%',
      l: '0%',
    },
  } as /* satisfies */ Record<Tone, { h: string; s: string; l: string }>,
});

// this just sets up the contract shape, no need for values or a class
export const contrastSchemeVars = createThemeContract({
  // large surface backgrounds
  level0: {
    l: '',
  },

  // transparent button hovers and larger subtle backgrounds such as panels
  // a level1 lightness should be able to make a visible border around this
  level0point5: {
    l: '',
  },

  // subtle buttons, input borders and dividers
  level1: {
    l: '',
  },

  // borders
  level2: {
    l: '',
  },

  // secondary text and placeholders
  level3: {
    l: '',
  },

  // foreground text, heavy button backgrounds
  level4: {
    l: '',
  },

  // headings
  level5: {
    l: '',
  },
});

const darkStyleRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    level0: {
      l: '10%',
    },
    level0point5: {
      l: '12%',
    },
    level1: {
      l: '20%',
    },
    level2: {
      l: '30%',
    },
    level3: {
      l: '50%',
    },
    level4: {
      l: '50%',
    },
    level5: {
      l: '85%',
    },
  }),
};

const darkStyleMoreContrastRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    level0: {
      l: '0%',
    },
    level0point5: {
      l: '0%',
    },
    level1: {
      l: '20%',
    },
    level2: {
      l: '100%',
    },
    level3: {
      l: '100%',
    },
    level4: {
      l: '100%',
    },
    level5: {
      l: '100%',
    },
  }),
};

const darkStyleLessContrastRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    level0: {
      l: '0%',
    },
    level0point5: {
      l: '10%',
    },
    level1: {
      l: '10%',
    },
    level2: {
      l: '10%',
    },
    level4: {
      l: '50%',
    },
    level3: {
      l: '50%',
    },

    level5: {
      l: '50%',
    },
  }),
};

const lightStyleLessContrastRule: ComplexStyleRule = {
  colorScheme: 'dark',

  vars: assignVars(contrastSchemeVars, {
    level0: {
      l: '90%',
    },
    level0point5: {
      l: '85%',
    },
    level1: {
      l: '82%',
    },
    level2: {
      l: '75%',
    },
    level3: {
      l: '70%',
    },
    level4: {
      l: '50%',
    },
    level5: {
      l: '50%',
    },
  }),
};

const lightStyleMoreContrastRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    level0: {
      l: '100%',
    },
    level0point5: {
      l: '100%',
    },
    level1: {
      l: '90%',
    },
    level2: {
      l: '0%',
    },
    level3: {
      l: '0%',
    },
    level4: {
      l: '0%',
    },
    level5: {
      l: '0%',
    },
  }),
};

const lightStyleRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    level0: {
      l: '100%',
    },
    level0point5: {
      l: '98%',
    },
    level1: {
      l: '90%',
    },
    level2: {
      l: '70%',
    },
    level3: {
      l: '50%',
    },
    level4: {
      l: '45%',
    },
    level5: {
      l: '25%',
    },
  }),
};

export const mediaPrefersColorSchemeClass = style({
  '@media': {
    '(prefers-color-scheme: light)': lightStyleRule,
    '(prefers-color-scheme: dark)': darkStyleRule,
  },
});

export const mediaPrefersContrastSchemeClass = style({
  '@media': {
    '(prefers-color-scheme: light) and (prefers-contrast-scheme: less)':
      lightStyleLessContrastRule,
    '(prefers-color-scheme: light) and (prefers-contrast-scheme: more)':
      lightStyleMoreContrastRule,
    '(prefers-color-scheme: dark) and (prefers-contrast-scheme: less)':
      darkStyleLessContrastRule,
    '(prefers-color-scheme: dark) and (prefers-contrast-scheme: more)':
      darkStyleMoreContrastRule,
  },
});

// WARN: any styles here will apply to anything that use the design system.
// This is not always the app root - it could be modals, dialogs and portals
export const defaultBgFgClass = style({
  backgroundColor: hsl(
    colorThemeVars.tones.accent.h,
    0,
    contrastSchemeVars.level0point5.l,
  ),
  color: hsl(colorThemeVars.tones.accent.h, 0, contrastSchemeVars.level5.l),
});

export const forcedLightClass = style([
  lightStyleRule,
  {
    colorScheme: 'light',
  },
]);

export const forcedDarkClass = style([
  darkStyleRule,
  {
    colorScheme: 'dark',
  },
]);

export const forcedDarkMoreContrastClass = style([
  darkStyleMoreContrastRule,
  {
    colorScheme: 'dark',
  },
]);

export const forcedDarkLessContrastClass = style([
  darkStyleLessContrastRule,
  {
    colorScheme: 'dark',
  },
]);

export const forcedLightMoreContrastClass = style([
  lightStyleMoreContrastRule,
  {
    colorScheme: 'light',
  },
]);

export const forcedLightLessContrastClass = style([
  lightStyleLessContrastRule,
  {
    colorScheme: 'light',
  },
]);
