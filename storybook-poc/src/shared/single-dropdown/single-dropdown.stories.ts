import { Meta, StoryObj } from '@storybook/angular';
import { SingleDropdown } from './single-dropdown';

const meta: Meta<SingleDropdown> = {
  title: 'Design System/Single Select',
  component: SingleDropdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SingleDropdown>;

const options = ['Item name0', 'Item name1', 'Item name2', 'Item name3'];

export const Default: Story = {
  args: { label: 'Country', options, required: true },
};

export const WithValue: Story = {
  args: { label: 'Country', options, selected: 'Item name1', required: true},
};

export const Disabled: Story = {
  args: { label: 'Country', options, selected: 'Item name1', disabled: true , required: true},
};

export const ReadOnly: Story = {
  args: { label: 'Country', options, selected: 'Item name1', readonly: true, required: true },
};

export const ErrorState: Story = {
  args: { label: 'Country', options, selected: 'Item name1', error: 'Error message goes here',required: true },
};

export const Focused: Story = {
  args: { label: 'Country', options, isOpen:true, required: true },
};
