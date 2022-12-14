import type { FC } from 'react';
import { Grid, Heading, Panel, Text } from '../../lib/main.js';

const PanelGrid = () => (
  <Grid cols="2">
    <Panel variant="standard">
      <Heading>standard</Heading>
      <Text>standard</Text>
    </Panel>
    <Panel variant="ghost">
      <Heading>ghost</Heading>
      <Text>ghost</Text>
    </Panel>
    <Panel variant="subtle">
      <Heading>subtle</Heading>
      <Text>subtle</Text>
    </Panel>
    <Panel variant="neutral">
      <Heading>neutral</Heading>
      <Text>neutral</Text>
    </Panel>
    <Panel variant="transparent">
      <Heading>transparent</Heading>
      <Text>transparent</Text>
    </Panel>
  </Grid>
);

export const PanelsPage: FC = () => (
  <Panel variant="ghost">
    <Grid>
      <Panel variant="subtle">
        <PanelGrid />
      </Panel>
      <Panel>
        <PanelGrid />
      </Panel>
    </Grid>
  </Panel>
);
