import React from 'react';
import { Button } from './button';

export const BasicButton = () => (
  <Button text="hello from Button" type="convex" clickHandler={() => {alert('clicked')}} padding={[20, 10, 20, 10]} size={""} />
);
