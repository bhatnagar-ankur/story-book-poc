import { Meta, StoryObj } from '@storybook/angular';
import { Toggle } from './toggle';

const meta: Meta<Toggle> = {
  title: 'Design System/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    size: {control:'radio', options: ['sm','md']},
    onText: { control: 'text' },
    offText: { control: 'text' },
    showText: { control: 'boolean' },
    variant: {
      control: 'radio',
      options: ['default', 'iconic', 'text'],
    },
  },
};
export default meta;

type Story = StoryObj<Toggle>;

export const ToggleOff: Story = {
  args: { checked: false, disabled: false, showText: true, onText: 'Toggle on', offText: 'Toggle off', variant: 'default', }
};

export const ToggleOn: Story = {
  args: { checked: true, disabled: false, showText: true, onText: 'Toggle on', offText: 'Toggle off', variant: 'default', }
};
export const ToggleOffDisabled: Story = {
  args: { checked: false, disabled: true, showText: true, onText: 'Disabled on', offText: 'Disabled off', variant: 'default', }
};

export const ToggleOnDisabled: Story = {
  args: { checked: true, disabled: true, showText: true, onText: 'Disabled on', offText: 'Disabled off', variant: 'default', }
};

export const IconicToggleOn: Story = {
  args: { checked: true, disabled: false, variant: 'iconic', },
};

export const IconicToggleOff: Story = {
  args: { checked: false, disabled: false, variant: 'iconic', },
};

export const ToggleText: Story ={
  args: {checked: true, disabled:false, variant:'text'}
}
