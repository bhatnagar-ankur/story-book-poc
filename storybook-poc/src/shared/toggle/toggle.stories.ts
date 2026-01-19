import { Meta, StoryObj } from '@storybook/angular';
import { Toggle } from './toggle';

const meta: Meta<Toggle> = {
  title: 'Design System/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    showText: { control: 'boolean' },
    variant: {
      control: 'radio',
      options: ['default', 'iconic'],
    },
  },
};
export default meta;

type Story = StoryObj<Toggle>;

export const ToggleOff: Story = {
  args: { checked: false, disabled: false, showText: true, text: 'Toggle off', variant: 'default', }
};

export const ToggleOn: Story = {
  args: { checked: true, disabled: false, showText: true, text: 'Toggle on', variant: 'default', }
};

export const ToggleOffDisabled: Story = {
  args: { checked: false, disabled: true, showText: true, text: 'Disabled', variant: 'default', }
};

export const ToggleOnDisabled: Story = {
  args: { checked: true, disabled: true, showText: true, text: 'Disabled on', variant: 'default', }
};

export const IconicToggleEnabled: Story = {
  args: { checked: true, disabled: false, variant: 'iconic', },
};

export const IconicToggleDisabled: Story = {
  args: { checked: false, disabled: true, variant: 'iconic', },
};
