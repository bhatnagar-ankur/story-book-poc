import type { Meta, StoryObj } from '@storybook/angular';
import { Alert } from './alert.component';

//#region Story Metadata
/** @type {Meta<Alert>} */
const meta: Meta<Alert> = {
  title: 'Example/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
    },
    variant: {
      control: 'select',
      options: ['default', 'subtle', 'warning', 'error'],
    },
  },
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
    variant: 'default',
  },
};

/** Subtle Alert Story */
export const Subtle: Story = {
  args: {
    title: 'Success',
    message: 'This is a success alert',
    type: 'success',
    variant: 'subtle',
  },
};

/** Warning Alert Story */
export const Warning: Story = {
  args: {
    title: 'This is Warning alert!',
    message: 'This will issue warning for your browser.',
    type: 'warning',
    variant: 'warning',
  },
};

/** Error Alert Story */
export const Error: Story = {
  args: {
    title: 'This is a Error alert!',
    message: 'This may cause drawback for your browser.',
    type: 'error',
    variant: 'error',
  },
};
//#endregion