import { Meta, StoryObj } from '@storybook/angular';
import { Navigation } from './navigation';

const meta: Meta<Navigation> = {
  title: 'Design System/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  argTypes: {
    expanded: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<Navigation>;

export const Expanded: Story = {
  args: {
    expanded: true
  }
};

export const Collapsed: Story = {
  args: {
    expanded: false
  }
};
