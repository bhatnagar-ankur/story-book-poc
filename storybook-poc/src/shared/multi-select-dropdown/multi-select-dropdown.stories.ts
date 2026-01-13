import { Meta, StoryObj } from '@storybook/angular';
import { MultiSelectDropdown } from './multi-select-dropdown';

const meta: Meta<MultiSelectDropdown> = {
  title: 'Design System/Multi Select',
  component: MultiSelectDropdown,
  tags: ['autodocs']
};
/* META DATA */
export default meta;
type Story = StoryObj<MultiSelectDropdown>;
/* OPTIONS DATA */
const options = ['Item name0', 'Item name1', 'Item name2', 'Item name3', 'Item name4'];
/* DEFAULT STORY */
export const Default: Story = {
  args: { label: 'Country', options }
};
/* WITH VALUE STORY */
export const WithValue: Story = {
  args: { label: 'Country', options, selected: ['Item name0', 'Item name1', 'Item name2'] }
};
/* DISABLED STORY */
export const Disabled: Story = {
  args: { label: 'Country', options, selected: ['Item name0', 'Item name1', 'Item name2'], disabled: true }
};
/* READ-ONLY STORY */
export const ReadOnly: Story = {
  args: { label: 'Country', options, selected: ['Item name0', 'Item name1', 'Item name2'], readonly: true }
};
/* ERROR STORY */
export const ErrorState: Story = {
  args: { label: 'Country', options, selected: ['Item name0'], error: 'Error message goes here' }
};
/* FOCUSED STORY */
export const Focused: Story = {
  args: { label: 'Country', options }
};
/* FOCUSED WITH VALUE STORY */
export const FocusedWithValue: Story = {
  args: { label: 'Country', options }
};
