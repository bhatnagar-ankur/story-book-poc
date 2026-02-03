import { Meta, StoryObj } from '@storybook/angular';
import { SingleDropdown } from './single-dropdown';

const meta: Meta<SingleDropdown> = {
  title: 'Design System/Single Select Dropdown',
  component: SingleDropdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SingleDropdown>;

const options = ['Item name0', 'Item name1', 'Item name2', 'Item name3'];
/* ----- Default story ----- */
export const Default: Story = {
  args: { label: 'Country', options, required: true },
};
/* ----- With value story ----- */
export const WithValue: Story = {
  args: { label: 'Country', options, selected: 'Item name1', required: true},
};
/* ----- Disabled story ----- */
export const Disabled: Story = {
  args: { label: 'Country', options, selected: 'Item name1', disabled: true , required: true},
};
/* ----- Read only story ----- */
export const ReadOnly: Story = {
  args: { label: 'Country', options, selected: 'Item name1', readonly: true, required: true },
};
/* ----- Error state story ----- */
export const ErrorState: Story = {
  args: { label: 'Country', options, selected: 'Item name1', error: 'Error message goes here',required: true },
};
/* ----- Focused Story ----- */
export const Focused: Story = {
  args: { label: 'Country', options, isOpen:true, required: true },
};
