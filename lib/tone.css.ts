import { createVar, StyleRule, styleVariants } from '@vanilla-extract/css';
import { colorThemeVars } from './schemes/color.css.js';

export const toneH = createVar();
export const toneS = createVar();

export type Tone =
  | 'accent'
  | 'warn'
  | 'neutral'
  | 'critical'
  | 'promo'
  | 'positive'
  | 'info';

const toneRules: Record<Tone, StyleRule> = {
  accent: {
    vars: {
      [toneH]: colorThemeVars.tones.accent.h,
      [toneS]: colorThemeVars.tones.accent.s,
    },
  },
  neutral: {
    vars: {
      [toneH]: colorThemeVars.tones.accent.h,
      // a slight saturation can help differentiate between neutral and disabled/greyed out
      [toneS]: '10%',
    },
  },
  critical: {
    vars: {
      [toneH]: colorThemeVars.tones.critical.h,
      [toneS]: colorThemeVars.tones.critical.s,
    },
  },
  warn: {
    vars: {
      [toneH]: colorThemeVars.tones.warn.h,
      [toneS]: colorThemeVars.tones.warn.s,
    },
  },
  promo: {
    vars: {
      [toneH]: colorThemeVars.tones.promo.h,
      [toneS]: colorThemeVars.tones.promo.s,
    },
  },
  positive: {
    vars: {
      [toneH]: colorThemeVars.tones.positive.h,
      [toneS]: colorThemeVars.tones.positive.s,
    },
  },
  info: {
    vars: {
      [toneH]: colorThemeVars.tones.info.h,
      [toneS]: colorThemeVars.tones.info.s,
    },
  },
};

export const toneVariants = styleVariants(toneRules, (props) => props);
