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

export const SmallToggleButton: Story = {
  args: { checked: false, disabled: false, showText: true, onText: 'Toggle on', offText: 'Toggle off', variant: 'default', }
};

export const MediumToggleButton: Story = {
  args: { checked: true, disabled: false, showText: true, onText: 'Toggle on', offText: 'Toggle off', variant: 'default', size: 'md' }
};

export const IconicToggle: Story = {
  args: { checked: true, disabled: false, variant: 'iconic', leftText: 'Table', rightText: 'Gallery' },
};

export const ToggleText: Story ={
  args: {checked: true, disabled:false, variant:'text'}
}
