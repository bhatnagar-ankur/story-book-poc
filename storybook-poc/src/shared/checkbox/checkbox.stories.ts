import { Meta, StoryObj } from '@storybook/angular';
import { Checkbox } from './checkbox';

const meta: Meta<Checkbox> = {
    title: 'Design System/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        checked: { control: 'boolean' },
        indeterminate: { control: 'boolean' },
        label: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<Checkbox>;

/* Unchecked without label */
export const Unchecked_NoLabel: Story = {
    args: {
        checked: false,
        indeterminate: false,
        label: ''
    },
};

/* Checked without label */
export const Checked_NoLabel: Story = {
    args: {
        checked: true,
        indeterminate: false,
        label: ''
    },
};

/* Unchecked with label */
export const Unchecked_WithLabel: Story = {
    args: {
        checked: false,
        indeterminate: false,
        label: 'Label'
    },
};

/* Checked with  label */
export const Checked_WithLabel: Story = {
    args: {
        checked: true,
        indeterminate: false,
        label: 'Label'
    },
};

/* Partial with no label */
export const Partial_NoLabel: Story = {
    args: {
        checked: false,
        indeterminate: true,
        label: ''
    },
};

/* Partial with label */
export const Partial_WithLabel: Story = {
    args: {
        checked: false,
        indeterminate: true,
        label: 'Label'
    },
};
