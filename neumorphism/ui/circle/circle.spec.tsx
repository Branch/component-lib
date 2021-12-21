import React from 'react';
import { render } from '@testing-library/react';
import { BasicCircle } from './circle.composition';

it('should render with the correct styles and width', () => {
  const { getByText } = render(<BasicCircle />);
  const rendered = getByText('hello from Circle');
  expect(rendered).toBeTruthy();
});
