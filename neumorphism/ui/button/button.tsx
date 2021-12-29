import React from 'react';
import classNames from 'classnames/bind';
import { neuStyles } from '@branch/neumorphism.styles.neustyles';
import buttonStyles from './button.module.scss';


export type ButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
  /**
   * type of card
   */
  type?: string;
  /**
   * Padding
   */
  padding?: number[];
  /**
   * Border radius size
   */
  size?: string
  /**
   * Callback event
   */
  clickHandler?: () => void
};

export function Button({ text, type, padding, size, clickHandler }: ButtonProps) {

  const cx = classNames.bind(neuStyles);
  const className = cx({
    neuelement: true,
    hoverable: true,
    flat: type === 'flat',
    convex: type === 'convex',
    concave: type === 'concave',
    pressed: type === 'pressed',
    sm: size === 'sm',
    md: size === 'md',
    lg: size === 'lg'
  });

  const inlineStyles = {
    padding: padding.join("px ") + "px"
  }
  return (
    <div className={cx(buttonStyles.button, className)} style={inlineStyles} onClick={clickHandler}>
      {text}
    </div>
  );
}
