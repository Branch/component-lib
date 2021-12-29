import React from 'react';
import { render } from '@testing-library/react';
import { WelcomePage } from './welcome.composition';

it('should render some cards', () => {
  const { getByText } = render(<WelcomePage />);
  const rendered = getByText('Big flat card');
  expect(rendered).toBeTruthy();
});

it('should render some more cards', () => {
  const { getByText } = render(<WelcomePage />);
  const rendered = getByText('MD convex card');
  expect(rendered).toBeTruthy();
});
