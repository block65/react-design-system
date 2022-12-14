import type { FC } from 'react';
import {
  Block,
  Divider,
  Grid,
  Heading,
  Panel,
  Secondary,
  Strong,
  Text,
  TextLink,
} from '../../lib/main.js';

export const TypographyPage: FC = () => (
  <Panel variant="ghost" space="huge">
    <Block>
      <Heading level="2">Text is texty</Heading>

      <Text>Normal text is normal.</Text>

      <Text>
        <Strong>Strong text</Strong> is strong.
      </Text>

      <Text>
        <Secondary>Secondary text</Secondary> looks like that
      </Text>

      <Text size="small">
        PS: Small text is small and can be <Strong>strong text</Strong> or{' '}
        <Secondary>secondary text</Secondary> too.
      </Text>
    </Block>

    <Block>
      <Heading level="2">Links are linky</Heading>

      <Text>
        Sometimes I like to look at{' '}
        <TextLink href="/buttons">normal buttons</TextLink>,{' '}
        <TextLink href="/panels" weight="strong">
          strong panels
        </TextLink>{' '}
        or{' '}
        <TextLink href="/badges" weight="weak">
          weak badges
        </TextLink>
      </Text>
    </Block>

    <Block>
      <Heading level="2">Headings are heady</Heading>

      <Block>
        <Block space="none">
          <Heading level="1">Heading 1</Heading>
          <Divider />
        </Block>
        <Text>With fake underline</Text>
      </Block>
      <Block>
        <Heading level="1">Heading 1</Heading>
        <Text>Normal Text</Text>
      </Block>
      <Block>
        <Heading level="2">Heading 2</Heading>
        <Text>Normal Text</Text>
      </Block>
      <Block>
        <Heading level="3">Heading 3</Heading>
        <Text>Normal Text</Text>
      </Block>
      <Block>
        <Heading level="4">Heading 4</Heading>
        <Text>Normal Text</Text>
      </Block>
      <Block>
        <Heading level="5">Heading 5</Heading>
        <Text>Normal Text</Text>
      </Block>
    </Block>

    <Block>
      <Heading level="1">Text Align</Heading>

      <Grid>
        <Panel>
          <Heading level="5">LTR</Heading>
          <Text textAlign="start">Start</Text>
          <Text textAlign="center">Center</Text>
          <Text textAlign="end">End</Text>
        </Panel>

        <Panel dir="rtl">
          <Heading level="5">RTL</Heading>
          <Text textAlign="start">????????????????</Text>
          <Text textAlign="center">????????????????</Text>
          <Text textAlign="end">????????</Text>
        </Panel>
      </Grid>
    </Block>
  </Panel>
);
