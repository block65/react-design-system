// eslint-disable-next-line import/no-extraneous-dependencies
import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';

export const listColsVar = createVar();

export const listClass = style({
  display: 'grid',
  gridTemplateColumns: `repeat(${listColsVar}, minmax(0, 1fr))`,
  listStyleType: 'initial',
  listStylePosition: 'outside',
});

export const listItemClass = style({
  marginInlineStart: '1em',
  selectors: {
    '&::marker': {
      content: '• ',
    },
  },
});

export const listVariants = styleVariants(genericVars.space, (space) => [
  listClass,
  {
    gap: space,
  },
]);
