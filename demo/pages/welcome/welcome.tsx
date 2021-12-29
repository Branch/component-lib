import React from 'react';
import { Card } from '@branch/neumorphism.ui.card';
import { Circle } from '@branch/neumorphism.ui.circle';
import { Slider } from '@branch/neumorphism.ui.slider';
import { Link } from '@branch/neumorphism.ui.link';
import { Button } from '@branch/neumorphism.ui.button';
import { Heading } from '@branch/neumorphism.ui.heading';
import { Text } from '@branch/neumorphism.ui.text';
import styles from './welcome.module.scss';

export function Welcome() {
  return (
    <div className={styles.page}>
      <Heading className={styles.h1}>Welcome to Bit</Heading>
      <Text
        className={styles.texts}
        text="Take a closer look at the different components in the left side menu. They all depend on the neustyles component that holds the neumorphism scss"
      />
      <div className={styles.grid}>
        <Card
            heading="Big flat card"
            text="lean how to self host these components"
            type="flat"
            size="lg"
            padding={[50,30,50,30]}
          />

        <Card
            heading="MD convex card"
            text="lean how to self host these components"
            type="convex"
            size="md"
            padding={[10,10,10,10]}
          />
        <Card
            heading="SM concave card"
            text="lean how to self host these components"
            type="concave"
            size="sm"
            padding={[10,10,10,10]}
          />
        <Card
            heading="tiny pressed card"
            text="lean how to self host these components"
            type="pressed"
            size=""
            padding={[10,10,10,10]}
          />
          <Link text="hello from Link" url="https://bit.dev" type="flat" padding={[10, 20, 10, 20]} size={""} newWindow={true} />
          <Circle width={10} type="flat" size="sm" img="https://via.placeholder.com/150/0000FF/FFFFFF/?text=Placeholder" />
          <Button text="hello from Button" type="convex" clickHandler={() => {alert('clicked')}} padding={[20, 10, 20, 10]} size={""} />

      </div>
      <div>

          <Slider type="convex" padding={[20, 10, 20, 10]} size={""} speed={35} images={
              ['https://cdn.worldvectorlogo.com/logos/typescript.svg', 'https://cdn.worldvectorlogo.com/logos/typescript.svg', 'https://cdn.worldvectorlogo.com/logos/typescript.svg', 'https://cdn.worldvectorlogo.com/logos/typescript.svg', 'https://cdn.worldvectorlogo.com/logos/typescript.svg', 'https://cdn.worldvectorlogo.com/logos/typescript.svg', 'https://cdn.worldvectorlogo.com/logos/typescript.svg', 'https://cdn.worldvectorlogo.com/logos/typescript.svg']
          } />
      </div>
    </div>
  );
}
