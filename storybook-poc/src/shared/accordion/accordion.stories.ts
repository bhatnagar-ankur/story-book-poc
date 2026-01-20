import { Meta, StoryObj } from '@storybook/angular';
import { Accordion } from './accordion';

const meta: Meta<Accordion> = {
  title: 'Design System/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['primary', 'secondary']
    }
  }
};

export default meta;
type Story = StoryObj<Accordion>;

export const Primary: Story = {
  args: {
    title: 'Primary Accordion',
    type: 'primary',
    expanded: false,
    content: 'This is the primary accordion content.'
  }
};

export const Secondary: Story = {
  args: {
    title: 'Secondary Accordion',
    type: 'secondary',
    expanded: false,
    content: 'This is the secondary accordion content.'
  }
};
