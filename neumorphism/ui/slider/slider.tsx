import React from 'react';

import classNames from 'classnames/bind';

import { neuStyles } from '@branch/neumorphism.styles.neustyles';
import slideStyles from './slider.module.scss';

export type SliderProps = {
  /**
   * Speed of slider in seconds
   */
  speed: number

  /**
   * Array of image sources
   */
  images: string[]

  /**
   * type of card
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
};

export function Slider({speed, images, type, size, padding }: SliderProps) {

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

  const slideBinding = classNames.bind(slideStyles);
  const slideTrackType = slideBinding({
    track: true
  })

  const trackInlineStyles = {
    width: 250 * images.length,
    animation: "scroll " + speed + "s linear infinite"
  }

  const sliderInlineStyles = {
    padding: padding.join("px ") + "px"
}

  return (
    <div className={cx(className, slideStyles.slider)} style={sliderInlineStyles}>
      <div className={slideTrackType} style={trackInlineStyles}>
        {images.map((image,i) => {
          return (
              <div key={i} className={slideStyles.slide}>
                <img src={image} alt="logo" />
              </div>
          )
        })
        }
      </div>

      <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(calc(0));
            }
            100% {
              transform: translateX(calc(-250px * ${images.length / 2}));
            }
          }
    `}</style>
    </div>
  );
}
