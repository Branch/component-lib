import React from 'react';
import classNames from 'classnames/bind';
import styles from "./button.module.scss";


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
};

export function Button({ text, type, padding, size }: ButtonProps) {

  const cx = classNames.bind(styles);
  const className = cx({
    button: true,
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
    <div className={className} style={inlineStyles}>
      {text}
    </div>
  );
}
