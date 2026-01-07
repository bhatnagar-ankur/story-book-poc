import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { InputComponent } from './input';

//#region Story Metadata
/* ----- Story Metadata ----- */
const meta: Meta<InputComponent> = {
  title: 'Example/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
  args: {
    valueChange: fn(),
  },
};
//#endregion

/* ----- Story Type ----- */
export default meta;
type Story = StoryObj<InputComponent>;

//#region Story Definitions
/* ----- Default Story ----- */
export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    value: '',
  },
};

/* ----- With Value Story ----- */
export const WithValue: Story = {
  args: {
    label: 'Username',
    value: 'Likitha',
  },
};

/* ----- Read Only Story ----- */
export const ReadOnly: Story = {
  args: {
    label: 'Username',
    placeholder: 'Likitha',
    disabled: true,
  },
};

/* ----- Error State Story ----- */
export const ErrorState: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    error: true,
    errorMessage: 'Username is required',
  },
};
//#endregion