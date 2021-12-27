import React from 'react';
import classNames from "classnames/bind";
import { neuStyles } from '@branch/neumorphism.styles.neustyles';
import linkStyles from './link.module.scss';

export type LinkProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
  /**
   * type of link
   */
  type?: string;

  /**
   * Border radius size
   */
  size?: string

  /**
   * Padding
   */
  padding?: number[];

  /**
   * Url
   */
  url: string

  /**
   * Open in new tab
   */
  newWindow?: boolean
};

export function Link({ text, type, size, padding, url, newWindow }: LinkProps) {

  const inlineStyles = {
    padding: padding.join("px ") + "px"
  }

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

  return (
    <a className={classNames(linkStyles.link, className)} href={url} style={inlineStyles} target={newWindow === true ? '_blank' : '_self'}>
      {text}
    </a>
  );
}
