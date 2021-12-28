import React from 'react';
import { Card } from './card';

export const BasicCard = () => (
  <Card
    heading="Self Host"
    text="lean how to self host these components"
    type="flat"
    size=""
    padding={[10,10,10,10]}
    image={"https://gpresults.info/static/media/fabio-tinted.c64f6f24.png"}
    tags={['React', 'Express']}
  />
);
