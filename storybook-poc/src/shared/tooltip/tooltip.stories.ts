import { Meta, StoryObj } from '@storybook/angular';
import { Tooltip } from './tooltip';

export default {
  title: 'Design System/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
} as Meta<Tooltip>;

type Story = StoryObj<Tooltip>;

export const Default: Story = {
  args: {
    label: 'Hover me',
    text: 'Lorem ipsum dolor sit amet, consetetur',
    position: 'bottom',
  },
};