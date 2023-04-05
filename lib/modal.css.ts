import { style, type StyleRule } from '@vanilla-extract/css';
import { precomputedViewportRules, type Viewport } from './core.css.js';
import { genericVars } from './design-system.css.js';
import { typedObjectEntries, typedObjectFromEntries } from './utils.js';

// WARN: ordering is important here as it affects the generated CSS
// it should be the opposite order of viewportSizes (I think)
const commonViewportRules: Record<Viewport, StyleRule> = {
  tablet: {
    width: '60vw',
    border: '1px solid red',
    padding: genericVars.space[5],
    marginInline: 'auto',
  },

  mobile: {
    minWidth: '100vw',
    minHeight: '100vh',
    marginBlock: 'unset', // unset inheritance from tablet
  },

  desktop: {
    width: '35rem',
    marginBlock: genericVars.space[7],
    marginInline: 'auto',
  },

  wide: {},
  all: {},
};

const commonBackdropProps: StyleRule = {
  backdropFilter: 'blur(0.5rem)',
};

export const titleClass = style({
  flexWrap: 'nowrap',
});

export const dialogClass = style({
  // these are annoyingly not part of the reset
  border: 0,
  background: 'unset',
  padding: 0,
  margin: 0,

  selectors: {
    '&:not([open])': {
      visibility: 'hidden',
    },
    '&::backdrop': {
      background: 'unset',
      ...commonBackdropProps,
    },
  },
});

export const modalClass = style({
  display: 'flex',
  position: 'fixed',
  top: 0,
  left: 0,
  maxWidth: '100%',
  width: '100vw',
  height: '100vh',
  zIndex: 100,
  justifyContent: 'center',
  selectors: {
    // '&:not([open])': {
    //   visibility: 'hidden',
    // },
    '&::before': {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: -1,
      ...commonBackdropProps,
    },
  },
});

export const commonPanelClass = style({
  boxShadow: genericVars.boxShadow[3],
});

export const commonDimensionsClass = style({
  '@media': typedObjectFromEntries(
    typedObjectEntries(commonViewportRules).map(([viewport, rule]) => [
      precomputedViewportRules[viewport],
      rule,
    ]),
  ),
});

export const iconClass = style({
  aspectRatio: '1/1',
});

export const buttonClass = style({
  // aspectRatio: '1/1',
});
