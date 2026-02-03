import { Meta, StoryObj } from '@storybook/angular';
import { Toast } from './toast';

export default {
  title: 'Design System/Toast Messages',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['progress', 'success', 'warning', 'error'],
    },
    position: {
      control: 'select',
      options: [
        'left-top',
        'left-bottom',
        'right-top',
        'right-bottom',
        'center-top',
        'center-bottom',
      ],
    },
  },
} as Meta<Toast>;


type Story = StoryObj<Toast>;
/* ----- Progress Story ----- */
export const Progress: Story = {
    args: {
        variant: 'progress',
        title: 'Progress!',
        subTitle: '3 out of 10',
        message: 'is in progress.',
    },
};
/* ----- Success Story ----- */
export const Success: Story = {
    args: {
        variant: 'success',
        title: 'Success!',
        subTitle: 'S1738',
        message: 'is in hold because of this reason.',
    },
};
/* ----- Warning Story ----- */
export const Warning: Story = {
    args: {
        variant: 'warning',
        title: 'Warning!',
        subTitle: 'S1738',
        message: 'is in hold because of this reason.',
    },
};
/* ----- Error story ----- */
export const Error: Story = {
    args: {
        variant: 'error',
        title: 'Error',
        subTitle: 'S1738',
        message: 'is in hold because of this reason.',
    },
};