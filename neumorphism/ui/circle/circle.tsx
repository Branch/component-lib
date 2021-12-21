import React from 'react';

import classNames from 'classnames/bind';

import { neuStyles } from '@branch/neumorphism.styles.neustyles';
import circleStyles from './circle.module.scss';

export type CircleProps = {
  /**
   * Width of circle in rem.
   */
  width: number

  /**
   * Type of neu element
   */
  type: string

  /**
   * Border radius size
   */
  size: string

  /**
   * Image element to embed in circle
   */
  img?: string
};

export function Circle({ size, type, width, img }: CircleProps) {

  const cx = classNames.bind(neuStyles);
  const className = cx({
    neuelement: true,
    flat: type === 'flat',
    convex: type === 'convex',
    concave: type === 'concave',
    pressed: type === 'pressed',
    sm: size === 'sm',
    md: size === 'md',
    lg: size === 'lg'
  });

  const inlineStyles = {
    width: width + "rem",
    height: width + "rem"
  }

  return (
    <div className={cx(circleStyles.circle, className)} style={inlineStyles}>
      {img.length > 0 &&
        <img src={img} />
      }
    </div>
  );
}

