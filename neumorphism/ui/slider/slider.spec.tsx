import React from 'react';
import { render } from '@testing-library/react';
import { BasicSlider } from './slider.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSlider />);
  const rendered = getByText('hello from Slider');
  expect(rendered).toBeTruthy();
});
