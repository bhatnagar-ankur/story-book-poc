import type { Meta, StoryObj } from '@storybook/angular';
import { StatusBadge } from './status-badge';

const meta: Meta<StatusBadge> = {
    title: 'Design System/Badge Card',
    component: StatusBadge,

    argTypes: {

        variant: {
            control: 'select',
            options: ['counter', 'status'],
        },

        count: {
            control: { type: 'number', min: 0, max: 99 },
        },

        size: {
            control: 'select',
            options: ['small', 'medium'],
        },

        color: {
            control: 'select',
            options: ['blue', 'green', 'red', 'orange', 'gray', 'custom'],
        },

        customColor: {
            control: 'color',
        },

        status: {
            control: 'select',
            options: ['warning', 'success', 'both', 'none'],
        },
    },

};
export default meta;

type Story = StoryObj<StatusBadge>;
export const Counter: Story = {
    args: {
        variant: 'counter',
        count: 1,
        size: 'small',
        color: 'blue',
        customColor: '#1f7db8',
    },
};
export const Status: Story = {
    args: {
        variant: 'status',
        status: 'success',
        size: "medium",
        color: "green",
        customColor: "#000000"
    },
};