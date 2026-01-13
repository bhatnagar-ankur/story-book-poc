import { Meta, StoryObj } from '@storybook/angular';
import { SingleDropdown } from './single-dropdown';

const meta: Meta<SingleDropdown> = {
  title: 'Design System/Single Select',
  component: SingleDropdown,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<SingleDropdown>;

const options = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

export const Default: Story = {
  args: { label: 'Country', options, required: true }
};

export const WithValue: Story = {
  args: { label: 'Country', options, selected: 'Item 2', required: true }
};

export const Disabled: Story = {
  args: { label: 'Country', options, selected: 'Item 2', disabled: true, required: true }
};

export const ReadOnly: Story = {
  args: { label: 'Country', options, selected: 'Item 2', readonly: true, required: true }
};

export const ErrorState: Story = {
  args: { label: 'Country', options, selected: 'Item 2', error: 'Something went wrong', required: true }
};

export const Focused: Story = {
  args: { label: 'Country', options, required: true, selected: 'Item 2', isOpen: true }
};
