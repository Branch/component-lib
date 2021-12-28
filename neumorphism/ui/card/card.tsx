import React from 'react';
import { Heading } from '@branch/neumorphism.ui.heading';
import { Text } from '@branch/neumorphism.ui.text';
import classNames from 'classnames/bind';

import { neuStyles } from '@branch/neumorphism.styles.neustyles';
import cardStyles from './card.module.scss';

export type CardProps = {
  /**
   * heading for the card
   */
  heading?: string;
  /**
   * text for the card
   */
  text?: string;
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
   * Tags
   */
  tags?: string[];

  /**
   * Card image
   */
  image?: string;

  /**
   * Children components
   */
  children?: any
};

export function Card(
  {
    heading, text, type, size, padding, image, tags, children
  }: CardProps,
) {
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
    padding: padding.join("px ") + "px"
  }

  return (
    <div className={cx(cardStyles.card, className)} style={inlineStyles}>
        {image !== undefined &&
          <div className={cardStyles.bg} style={{backgroundImage: `url(${image})`}}></div>
        }
        <Heading element="h3">
          {heading}
        </Heading>
        <Text text={text} />
        {children}
        {tags !== undefined &&
          <div className={cardStyles.tags}>
            {tags.map((tag,i) => {
              return <div key={i}>{tag}</div>
            })}
          </div>
        }
    </div>
  );
}
