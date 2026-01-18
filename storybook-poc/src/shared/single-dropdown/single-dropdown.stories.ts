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
  args: { label: 'Country', options },
};

export const WithValue: Story = {
  args: { label: 'Country', options, selected: 'Item name1' },
};

export const Disabled: Story = {
  args: { label: 'Country', options, selected: 'Item name1', disabled: true },
};

export const ReadOnly: Story = {
  args: { label: 'Country', options, selected: 'Item name1', readonly: true },
};

export const ErrorState: Story = {
  args: { label: 'Country', options, selected: 'Item name1', error: 'Error message goes here' },
};

export const Focused: Story = {
  args: { label: 'Country', options, isOpen:true },
};
