import { clsx, type ClassValue } from 'clsx';
import {
  Suspense,
  createElement,
  forwardRef,
  type ForwardedRef,
  type ReactNode,
} from 'react';
import { matchViewportVariants } from './component-utils.js';
import {
  borderWeightVariants,
  roundedVariants,
  textAlignVariants,
  textOverflowVariants,
  viewportMarginBlockVariants,
  viewportMarginInlineVariants,
  viewportMarginVariants,
  viewportPaddingBlockVariants,
  viewportPaddingInlineVariants,
  viewportPaddingVariants,
  type BorderWeight,
  type Falsy,
  type OrResponsive,
  type Rounded,
  type Space,
  type TextAlign,
  type TextOverflow,
  type Shadow,
  boxShadowVariants,
} from './core.css.js';
import { toneVariants, type Tone } from './tone.css.js';
import { TooltipLazy } from './tooltip-lazy.js';
import type {
  Merge,
  ReactHTMLAttributesHacked,
  ReactHTMLElementsHacked,
} from './types.js';

export type BoxBasedComponentProps<
  T extends keyof ReactHTMLAttributesHacked = 'div',
> = Merge<
  ReactHTMLAttributesHacked[T],
  {
    className?: ClassValue;
    component?: T | undefined;

    margin?: OrResponsive<Space> | Falsy;
    marginBlock?: OrResponsive<Space> | Falsy;
    marginInline?: OrResponsive<Space> | Falsy;

    padding?: OrResponsive<Space> | Falsy;
    paddingBlock?: OrResponsive<Space> | Falsy;
    paddingInline?: OrResponsive<Space> | Falsy;

    tooltip?: ReactNode;
    textAlign?: TextAlign | Falsy;
    textOverflow?: TextOverflow | Falsy;
    rounded?: Rounded | Falsy;
    borderWeight?: BorderWeight | Falsy;
    tone?: Tone | Falsy;
    boxShadow?: Shadow | Falsy;
  }
>;

const BoxInner = <T extends keyof ReactHTMLAttributesHacked = 'div'>(
  {
    children,
    component,
    className,

    margin,
    marginBlock,
    marginInline,
    padding,
    paddingBlock,
    paddingInline,
    textAlign,
    textOverflow,
    tooltip,
    rounded,
    boxShadow,
    borderWeight,
    tone,
    ...props
  }: BoxBasedComponentProps<T>,
  ref: ForwardedRef<ReactHTMLElementsHacked[T]>,
) => {
  const el = createElement(
    component || 'div',
    {
      ...props,
      className:
        clsx(
          margin &&
            marginBlock !== margin &&
            matchViewportVariants(
              typeof margin === 'string' ? { all: margin } : margin,
              viewportMarginVariants,
            ),
          marginBlock &&
            marginBlock !== margin &&
            matchViewportVariants(
              typeof marginBlock === 'string'
                ? { all: marginBlock }
                : marginBlock,
              viewportMarginBlockVariants,
            ),

          marginInline &&
            marginInline !== margin &&
            matchViewportVariants(
              typeof marginInline === 'string'
                ? { all: marginInline }
                : marginInline,
              viewportMarginInlineVariants,
            ),

          padding &&
            paddingBlock !== padding &&
            matchViewportVariants(
              typeof padding === 'string' ? { all: padding } : padding,
              viewportPaddingVariants,
            ),

          paddingBlock &&
            paddingBlock !== padding &&
            matchViewportVariants(
              typeof paddingBlock === 'string'
                ? { all: paddingBlock }
                : paddingBlock,
              viewportPaddingBlockVariants,
            ),

          paddingInline &&
            paddingInline !== padding &&
            matchViewportVariants(
              typeof paddingInline === 'string'
                ? { all: paddingInline }
                : paddingInline,
              viewportPaddingInlineVariants,
            ),

          textAlign && textAlignVariants[textAlign],
          rounded && roundedVariants[rounded],
          boxShadow && boxShadowVariants[boxShadow],
          borderWeight && borderWeightVariants[borderWeight],
          tone && toneVariants[tone],

          className,
        ) || undefined,
      ref,
    },
    textOverflow && children ? (
      <span className={textOverflow && textOverflowVariants[textOverflow]}>
        {children}
      </span>
    ) : (
      children
    ),
  );

  if (tooltip) {
    return (
      <Suspense fallback={el}>
        <TooltipLazy content={tooltip}>{el}</TooltipLazy>
      </Suspense>
    );
  }

  return el;
};

export const Box = forwardRef(BoxInner);
