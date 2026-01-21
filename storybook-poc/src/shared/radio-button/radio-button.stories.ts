import { Meta, StoryObj } from '@storybook/angular';
import { RadioButton } from './radio-button';

const meta: Meta<RadioButton> = {
  title: 'Design System/Radio Button',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    selected: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<RadioButton>;

/** Unselected — With Label */
export const Unselected_WithLabel: Story = {
  args: {
    selected: false,
    label: 'Radio Button',
  },
};

/** Selected — With Label */
export const Selected_WithLabel: Story = {
  args: {
    selected: true,
    label: 'Radio Button',
  },
};
