import type { FC } from 'react';
import {
  Block,
  Button,
  Form,
  FormInput,
  FormInputCheckbox,
  FormInputCheckboxGroup,
  FormInputRadio,
  FormInputRadioGroup,
  FormSelect,
  Grid,
  Heading,
  Inline,
  Panel,
  Strong,
  Text,
  TextLink,
} from '../../lib/main.js';

export const FormsPage: FC = () => (
  <Panel variant="ghost">
    <Form>
      <Heading level="1">Best form eva</Heading>
      <FormInput
        type="text"
        label={<blockquote>Pronoun</blockquote>}
        name="pronoun"
        defaultValue="Attack Helicopter"
        readOnly
        secondaryLabel="(readonly)"
        message="You are not allowed to change this field"
      />
      <FormInput
        type="text"
        label="First name"
        name="first"
        defaultValue="Queen"
        message="Don't write Queen in this field please"
        messageTone="warn"
      />
      <FormInput
        type="text"
        label="Middle name"
        name="middle"
        placeholder='Optional, e.g. "Elizabeth"'
        message="No need to be embarrassed"
      />
      <Grid>
        <FormInput type="time" label="Inconsistent" message="Heights" />
        <FormInput type="text" label="Heights" message="Inconsistent" />
      </Grid>
      <FormInput
        type="text"
        label="Last name"
        name="last"
        secondaryLabel="(optional)"
        tertiaryLabel={
          <TextLink href="#">{/* <IconHelp /> */}Read more</TextLink>
        }
        defaultValue="Royale"
      />
      <FormSelect
        label="Birth Month"
        defaultValue="Feb"
        message={
          <>
            Feb is the <Strong>best</Strong> month btw
          </>
        }
      >
        <option />
        <option value="Jan">Jan</option>
        <option value="Feb">Feb</option>
        <option value="Mar">Mar</option>
        <option value="Apr">Apr</option>
      </FormSelect>
      <FormSelect
        multiple
        label="Other months you might like"
        description={<Text>Choose 2 only please</Text>}
        onChange={() => {
          // console.log(e);
        }}
        value={['Feb', 'Mar']}
      >
        <option value="Jan">Jan</option>
        <option value="Feb">Feb</option>
        <option value="Mar">Mar</option>
        <option value="Apr">Apr</option>
      </FormSelect>
      <FormInputRadioGroup label="Your age" name="age">
        <FormInputRadio label="Under 18" message="Wah so young" />
        <FormInputRadio label="18-25" defaultChecked />
        <FormInputRadio label="35+" />
        <FormInputRadio
          label={
            <Block>
              <Inline>If you are older than 35, choose this option.</Inline>
              {/* <Inline>Ooh it wraps over multiple lines.</Inline> */}
            </Block>
          }
        />
      </FormInputRadioGroup>
      <FormInputCheckboxGroup label="Partners age" name="age2">
        <FormInputCheckbox
          label="Under 18"
          defaultChecked
          message="If you choose this option you are not allowed to use this site"
        />
        <FormInputCheckbox label="18-25" />
        <FormInputCheckbox label="35+" />
        <FormInputCheckbox disabled label="Dead" />
        <FormInputCheckbox disabled checked label="Dead last" />
        <FormInputCheckbox label={<h1>Heading Label</h1>} />
      </FormInputCheckboxGroup>
      <Block space="medium">
        <Button>Save</Button>
        <Button variant="subtle">Subtle</Button>
        <Button variant="ghost">Ghost</Button>
      </Block>
    </Form>
  </Panel>
);
