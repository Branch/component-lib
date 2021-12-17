import React from 'react';
import { Card } from '@branch/neumorphism.ui.card';
import { Heading } from '@branch/neumorphism.ui.heading';
import { Text } from '@branch/neumorphism.ui.text';
import styles from './welcome.module.scss';

export function Welcome() {
  return (
    <div className={styles.page}>
      <Heading className={styles.h1}>Welcome to Bit</Heading>
      <Text
        className={styles.texts}
        text="Edit this component and see it change in the UI or play with the commands below to learn more about how Bit works."
      />
      <div className={styles.grid}>
        <Card
            link="https://harmony-docs.bit.dev/reference/bit-oss-server"
            heading="Big flat card"
            text="lean how to self host these components"
            type="flat"
            size="lg"
            padding={[50,30,50,30]}
          />

        <Card
            link="https://harmony-docs.bit.dev/reference/bit-oss-server"
            heading="MD convex card"
            text="lean how to self host these components"
            type="convex"
            size="md"
            padding={[10,10,10,10]}
          />
        <Card
            link="https://harmony-docs.bit.dev/reference/bit-oss-server"
            heading="SM concave card"
            text="lean how to self host these components"
            type="concave"
            size="sm"
            padding={[10,10,10,10]}
          />
        <Card
            link="https://harmony-docs.bit.dev/reference/bit-oss-server"
            heading="tiny pressed card"
            text="lean how to self host these components"
            type="pressed"
            size=""
            padding={[10,10,10,10]}
          />
      </div>

      <Heading element="h2" className={styles.h2}>
        Bit CLI
      </Heading>
      <Text className={styles.texts} text="Understanding Bit's Commands" />
    </div>
  );
}
