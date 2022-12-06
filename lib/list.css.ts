import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';

export const listColsVar = createVar();
const listColWidth = '1fr';

export const listClass = style({
  display: 'grid',
  gridTemplateColumns: `repeat(${listColsVar}, ${listColWidth})`,
  listStyleType: 'initial',
  listStylePosition: 'outside',
});

export const listItemClass = style({
  marginInlineStart: '1em',
});

export const listVariants = styleVariants(genericVars.space, (space) => [
  listClass,
  {
    gap: space,
  },
]);
