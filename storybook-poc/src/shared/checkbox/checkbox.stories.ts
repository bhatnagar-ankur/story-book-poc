import { Meta, StoryObj } from '@storybook/angular';
import { Checkbox } from './checkbox';

const meta: Meta<Checkbox> = {
  title: 'Design System/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checkedChange: { action: 'checkedChange' },
  },
};

export default meta;

type Story = StoryObj<Checkbox>;

/* With Label */
export const WithLabel: Story = {
  args: {
    checked: false,
    label: 'Label',
  },
};

/* Checked + Label */
export const CheckedWithLabel: Story = {
  args: {
    checked: true,
    label: 'Label',
  },
};

/* Indeterminate + Label */
export const IndeterminateWithLabel: Story = {
  args: {
    indeterminate: true,
    label: 'Label',
  },
};
