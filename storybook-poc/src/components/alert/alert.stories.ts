import type { Meta, StoryObj } from '@storybook/angular';
import { Alert } from './alert.component';

//#region Story Metadata
/** @type {Meta<Alert>} */
const meta: Meta<Alert> = {
  title: 'Example/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
  type: { control: 'inline-radio', options: ['success','info','warning','error'] },
  showIcon: { control: 'boolean' },
  isClosable: { control: 'boolean' },
  autoClose: { control: 'boolean' },
  autoCloseDelay: { control: 'number' },
  size: { control: 'inline-radio', options:['sm','md','lg'] },
  backgroundColor: { control: 'color' },
  textColor: { control: 'color' },
  rounded: { control: 'inline-radio', options:['none','md','lg','pill'] },
  elevation: { control: 'inline-radio', options: [0, 1, 2] },
  animation: { control: 'select', options:['fade','slide','scale'] },}
};
//#endregion

/** @type {StoryObj<Alert>} */
export default meta;
type Story = StoryObj<Alert>;

//#region Story Definitions
/** Default Alert Story */
export const Default: Story = {
  args: {
    title: 'Info',
    message: 'This is a default alert',
    type: 'info',
  },
};

/** Subtle Alert Story */
export const Subtle: Story = {
  args: {
    title: 'Success',
    message: 'This is a success alert',
    type: 'success',
  },
};

/** Warning Alert Story */
export const Warning: Story = {
  args: {
    title: 'This is Warning alert!',
    message: 'This will issue warning for your browser.',
    type: 'warning',
  },
};

/** Error Alert Story */
export const Error: Story = {
  args: {
    title: 'This is a Error alert!',
    message: 'This may cause drawback for your browser.',
    type: 'error',
  },
};

/** Auto Close Alert Story */
export const AutoClose: Story = {
  args: {
    message: 'This will disappear',
    autoClose: true,
    autoCloseDelay: 3000
  }
};
//#endregion