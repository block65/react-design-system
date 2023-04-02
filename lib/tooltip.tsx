import type { Side } from '@floating-ui/react';
import {
  cloneElement,
  type FC,
  isValidElement,
  type PropsWithChildren,
  type ReactNode,
} from 'react';
import { useTooltipState } from './hooks/use-tooltip-state.js';
import {
  arrowOffsetVar,
  tooltipArrowStyle,
  tooltipClass,
} from './tooltip.css.js';

export type TooltipState = ReturnType<typeof useTooltipState>;

export const Tooltip: FC<
  PropsWithChildren<{ content: ReactNode; initialOpen?: boolean }>
> = ({ content, children, initialOpen = false }) => {
  const {
    placement,
    reference,
    floating,
    strategy,
    x,
    y,
    open,
    arrowRef,
    getReferenceProps,
    getFloatingProps,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
  } = useTooltipState({ initialOpen });

  const validChildren = isValidElement(children) ? (
    children
  ) : (
    <span>{children}</span>
  );

  const staticSide: Record<Side, Side> = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  };

  const arrowPlacement = placement.split('-')[0] as Side;

  return (
    <>
      {cloneElement(
        validChildren,
        getReferenceProps({ ref: reference, ...validChildren.props }),
      )}
      {open && (
        <span
          ref={floating}
          {...getFloatingProps({
            className: tooltipClass,
            style: {
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              visibility: x == null ? 'hidden' : 'visible',
            },
          })}
        >
          <span
            ref={arrowRef}
            className={tooltipArrowStyle}
            style={{
              left: arrowX != null ? `${arrowX}px` : '',
              top: arrowY != null ? `${arrowY}px` : '',
              [staticSide[arrowPlacement]]: arrowOffsetVar,
            }}
          />
          {content}
        </span>
      )}
    </>
  );
};

export default Tooltip;
