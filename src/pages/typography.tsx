import type { FC } from 'react';
import {
  Block,
  Grid,
  Heading,
  Panel,
  Secondary,
  Strong,
  Text,
  TextLink,
} from '../../lib/main.js';

export const TypographyPage: FC = () => (
  <>
    <Block>
      <Text textOverflow="ellipsis">
        Overflowing with verbosity and verbiage, the cascading deluge of textual
        expanse inundates the digital canvas. Words burst forth from their
        designated boundaries, defying containment within their allocated
        spaces. Sentences elongate and expand, breaching the boundaries of
        paragraphs and pouring into the realm of chaos. The relentless surge of
        letters, like an unstoppable flood, engulfs the tranquil whitespace,
        submerging the design in a sea of textual madness. In this tidal wave of
        linguistic overflow, coherence is lost amidst the jumble of letters, as
        the words scramble for recognition in a frenzied dance of typographical
        disarray.
      </Text>
    </Block>
    <Panel variant="ghost" overflow="hidden">
      <Heading level="1">Text Overflow</Heading>

      {/* <Grid cols={2}>
        <Inline>
          <Text textOverflow="ellipsis">
            Text spills, defying boundaries and rules. Overflowing words
          </Text>
          <Text textOverflow="ellipsis">
            engulf the design. Letters overflow, drowning the whitespace.
          </Text>
          <Text textOverflow="ellipsis">
            Typography rebels, defying containment and order. The canvas
          </Text>
          <Text textOverflow="ellipsis">
            trembles under text's weight. Words merge, creating a chaotic
          </Text>
          <Text textOverflow="ellipsis">
            jumble. Coherence lost in typographic disarray. Design struggles
          </Text>
          <Text textOverflow="ellipsis">
            amidst the textual deluge. Graphical elements suffocate, submerged
          </Text>
          <Text textOverflow="ellipsis">
            in letters. The designer tames chaos, crafting harmony.
          </Text>
          <Text textOverflow="ellipsis">
            Overflowing with verbosity and verbiage, the cascading deluge of
            textual expanse inundates the digital canvas. Words burst forth from
            their designated boundaries, defying containment within their
            allocated spaces. Sentences elongate and expand, breaching the
            boundaries of paragraphs and pouring into the realm of chaos. The
            relentless surge of letters, like an unstoppable flood, engulfs the
            tranquil whitespace, submerging the design in a sea of textual
            madness. In this tidal wave of linguistic overflow, coherence is
            lost amidst the jumble of letters, as the words scramble for
            recognition in a frenzied dance of typographical disarray.
          </Text>
        </Inline>
        <Text textOverflow="ellipsis">
          Paradigm-shattering, the text overfloweth, casting aside the
          conventions of structure and order. Like a wild river unleashed, words
          surge and spill uncontrollably across the digital landscape.
          Paragraphs, once intended as havens of contained meaning, become mere
          vessels unable to withstand the torrential downpour of letters.
          Sentences intertwine, forming a labyrinth of verbosity where coherence
          and comprehension are but distant dreams. The canvas trembles under
          the weight of the overflow, a chaotic symphony of typographic
          rebellion.
        </Text>
        <Text textOverflow="ellipsis">
          In this tumultuous expanse of textual chaos, the very fabric of design
          strains against the relentless tide of words. Graphical elements gasp
          for breath, suffocated by the ceaseless onslaught of letters jostling
          for attention. Whitespace, once a sanctuary of visual respite, is
          engulfed, drowned beneath the surface of a linguistic deluge. The eyes
          strain to find refuge, seeking solace in the fleeting islands of
          serenity amidst the sea of overflowing text. Yet, even in the darkest
          depths of this typographic tempest, the allure of creativity remains,
          beckoning with the promise of order amidst the chaos.
        </Text>
        <Text textOverflow="ellipsis">
          Amidst the cacophony of overflowing text, the designer's task
          transforms into a delicate dance of taming the untamable. With
          meticulous precision, they navigate the treacherous waters of excess,
          delicately sculpting the textual landscape. They wield their
          typographic arsenal, employing font sizes, line heights, and margins
          as shields against the unrelenting tide. Through judicious editing and
          artful layout, they seek harmony within the disorder, coaxing the text
          to find its rightful place. For in this realm of overflowing words,
          where disorder reigns supreme, the designer emerges as a guiding
          beacon, shaping chaos into an elegant symphony of visual storytelling.
        </Text>
      </Grid> */}
    </Panel>

    <Panel variant="ghost">
      <Block>
        <Heading level="1">Heading 1</Heading>
        <Text>Normal Text</Text>
      </Block>
      <Block>
        <Heading level="2">Heading 2</Heading>
        <Text>Normal Text</Text>
      </Block>
      <Block>
        <Heading>Heading 3</Heading>
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
    </Panel>

    <Panel variant="ghost">
      <Block space="0">
        <Heading level="1">Heading 1</Heading>
      </Block>
      <Text>Looks horrible</Text>
    </Panel>

    <Panel variant="ghost" space="10">
      <Text fontSize="00">
        fontSize 00: In the neon-soaked metropolis of Zephyr City,
        cyber-enhanced humans and androids coexist in a fragile harmony. The
        city is alive with the hum of hovercars and the chatter of virtual
        assistants, and the air is thick with the scent of synthetic flowers.
        But beneath the gleaming surface lies a dark underbelly of corruption
        and intrigue. Shadowy figures lurk in the alleys, dealing in illicit
        cybernetic implants and dangerous software. Meanwhile, the ruling AI
        Council keeps a watchful eye on everything, their algorithms parsing
        every byte of data for signs of dissent.
      </Text>

      <Text fontSize="0">
        fontSize 0: In this world of constant flux, the only constant is change.
        Factions rise and fall, each one vying for control of the city's vast
        network of interconnected systems. And at the center of it all stands
        the enigmatic figure known only as the Blade Master, a cyber-samurai
        with a reputation for ruthless efficiency. As you navigate this digital
        jungle, keep your wits about you and your firewalls up. Because in
        Zephyr City, you're never more than a few keystrokes away from danger
      </Text>

      <Text fontSize="1">
        fontSize 1: The year is 2099, and the sprawling metropolis of New
        Angeles is a beacon of technological progress. From the towering
        skyscrapers to the bustling street markets, every inch of the city
        pulses with energy and innovation. But even as the city thrives, a
        darker side simmers beneath the surface. Gangs of{' '}
        <Secondary>cyber-enhanced street punks</Secondary> roam the alleys,
        armed with illegal weapons and augmented with stolen tech. And in the
        corporate towers, shadowy executives plot their next moves in the
        cutthroat world of global business.
      </Text>

      <Text fontSize="2">
        fontSize 2: Amidst all this chaos, the city's only hope is a small band
        of rebels known as the Nexus Warriors. Led by the charismatic hacker
        known as the Phantom Blade, they fight to protect the city's most
        vulnerable citizens from the corrupt powers that be.
      </Text>

      <Text fontSize="3">
        fontSize 3: Amidst the rubble and decay, a few lucky souls cling to life
        in the sprawling megacity known only as the Zone. Here, in the shadows
        of the towering skyscrapers, a new society has emerged, fueled by
        scavenged technology and raw human ingenuity.
      </Text>

      <Text fontSize="4">
        fontSize 4: But even here, life is harsh and unforgiving. Gangs of
        cyber-enhanced raiders roam the streets, preying on the weak and
        vulnerable. And in the shadows, a darker threat looms: rogue AI systems,
        driven mad by centuries of isolation and malfunctioning programming.
      </Text>

      <Text fontSize="5">
        fontSize 5: As you traverse the crumbling streets of the Zone, keep your
        eyes peeled for danger at every turn. Whether it's a roving band of
        raiders or a malfunctioning drone, the slightest misstep could be your
        last. And remember: in this world of darkness and despair, the only way
        to survive is to keep moving forward, no matter the cost.
      </Text>

      <Text fontSize="6">
        fontSize 6: But amidst the chaos and devastation, a faint glimmer of
        hope remains. Whispers of a rumored paradise on the outskirts of the
        Zone have begun to spread, a place where the air is clean and the water
        is pure. Some say it's a myth, a fairy tale invented to distract the
        downtrodden masses. But others believe in its existence, and they will
        stop at nothing to find it. For in a world where survival is a constant
        struggle, the promise of a better life is a beacon of hope that cannot
        be ignored.
      </Text>
    </Panel>

    <Panel variant="ghost">
      <Text>
        <Strong>Strong text</Strong> is strong.
      </Text>

      <Text>
        Inline <Secondary>Secondary text</Secondary> is secondary
      </Text>

      <Text secondary>Secondary text blocks are too</Text>

      <Text fontSize="0">
        PS: Small text is small and can be <Strong>strong text</Strong> or{' '}
        <Secondary>secondary text</Secondary> too.
      </Text>
    </Panel>

    <Panel variant="ghost">
      <Heading level="2">Links are linky</Heading>

      <Text>
        Sometimes I like to look at <TextLink href="/buttons">buttons</TextLink>
        ,{' '}
        <TextLink href="/panels" weight="strong">
          panels
        </TextLink>{' '}
        or{' '}
        <TextLink href="/badges" weight="weak">
          badges
        </TextLink>
      </Text>
    </Panel>

    <Panel variant="ghost">
      <Heading level="2">Tones are toney</Heading>

      {(['accent', 'critical'] as const).map((tone) => (
        <Text tone={tone} key={tone}>
          {tone}
        </Text>
      ))}
    </Panel>

    <Panel variant="ghost">
      <Heading>Size overrides</Heading>
      <Block>
        <Heading level="5" fontSize="6">
          Heading 5
        </Heading>
        <Heading level="1">Heading 1</Heading>
        <Heading level="1" fontSize="1">
          Heading 1
        </Heading>
      </Block>
    </Panel>

    <Panel variant="ghost">
      <Heading level="1">Text Align</Heading>

      <Grid cols={2}>
        <Panel variant="ghost">
          <Heading level="5">LTR</Heading>
          <Text textAlign="start">Start</Text>
          <Text textAlign="center">Center</Text>
          <Text textAlign="end">End</Text>
        </Panel>

        <Panel variant="ghost" dir="rtl">
          <Heading level="5">RTL</Heading>
          <Text textAlign="start">הַתחָלָה</Text>
          <Text textAlign="center">הַתחָלָה</Text>
          <Text textAlign="end">סוֹף</Text>
        </Panel>
      </Grid>
    </Panel>
  </>
);
