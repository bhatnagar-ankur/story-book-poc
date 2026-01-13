import { Meta, StoryObj } from '@storybook/angular';
import { Toggle } from './toggle';

const meta: Meta<Toggle> = {
  title: 'Design System/Toggle',
  component: Toggle,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<Toggle>;

export const ToggleOff: Story = {
  args: { checked: false, disabled: false }
};

export const ToggleOn: Story = {
  args: { checked: true, disabled: false }
};

export const ToggleOffDisabled: Story = {
  args: { checked: false, disabled: true }
};

export const ToggleOnDisabled: Story = {
  args: { checked: true, disabled: true }
};
