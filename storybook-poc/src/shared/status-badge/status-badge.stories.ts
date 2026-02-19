import type { Meta, StoryObj } from '@storybook/angular';
import { StatusBadge } from './status-badge';

const meta: Meta<StatusBadge> = {
    title: 'Design System/Badge Card',
    component: StatusBadge,
    tags: ['autodocs'],
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

        customIcon: {
            control: 'text',
            description: 'Path to custom icon',
        },
    },

};
export default meta;
type Story = StoryObj<StatusBadge>;
/* ----- Counter story ----- */
export const Counter: Story = {
    args: {
        variant: 'counter',
        count: 1,
        size: 'small',
        color: 'blue',
        customColor: '#1f7db8',
    },
};
/* ----- Status story ----- */
export const Status: Story = {
    args: {
        variant: 'status',
        customIcon: '/assets/icons/tick-icon.svg',
        size: "medium",
        color: "green",
        customColor: "#000000"
    },
};