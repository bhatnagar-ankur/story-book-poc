import { Meta, StoryObj } from '@storybook/angular';
import { MultiSelectDropdown } from './multi-select-dropdown';

const meta: Meta<MultiSelectDropdown> = {
  title: 'Design System/Multi Select',
  component: MultiSelectDropdown,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<MultiSelectDropdown>;

const options = ['Item name0', 'Item name1', 'Item name2', 'Item name3', 'Item name4'];

export const Default: Story = {
  args: { label: 'Country', options }
};

export const WithValue: Story = {
  args: { label: 'Country', options, selected:['Item name0', 'Item name1', 'Item name2'] }
};

export const Disabled: Story = {
  args: { label: 'Country', options, selected:['Item name0', 'Item name1', 'Item name2'], disabled: true }
};

export const ReadOnly: Story = {
  args: { label: 'Country', options, selected:['Item name0', 'Item name1', 'Item name2'], readonly: true }
};

export const ErrorState: Story = {
  args: { label: 'Country', options, selected:['Item name0'], error: 'Error message goes here' }
};

export const Focused: Story = {
  args: { label: 'Country', options }
};

export const FocusedWithValue: Story = {
  args: { label: 'Country', options }
};
