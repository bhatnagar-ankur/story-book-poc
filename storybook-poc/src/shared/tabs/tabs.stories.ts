import { Meta, StoryObj } from '@storybook/angular';
import { Tabs } from './tabs';

const meta: Meta<Tabs> = {
    title: 'Design System/Tabs',
    component: Tabs,

    argTypes: {
        showIcon: {
            control: 'boolean',
            description: 'Show / hide tab icons',
        },

        variant: {
            control: 'select',
            options: [
                'style-1',
                'style-2',
                'style-3',
                'style-4',
                'style-5',
            ],
        },
    },
};

export default meta;

type Story = StoryObj<Tabs>;

export const Style1: Story = {
    args: {
        variant: 'style-1',
        showIcon: true,

        tabs: [
            {
                label: 'Ocean',
                icon: '/assets/icons/ship-ocean.svg',
            },
            {
                label: 'Road',
                icon: '/assets/icons/Truck-road.svg',
            },
            {
                label: 'Air',
                icon: '/assets/icons/Aeroplane-air.svg',
            },
        ],
    },
};

export const Style2: Story = {
    args: {
        variant: 'style-2',
        showIcon: true,

        tabs: [
            { label: 'Scores', icon: '/assets/icons/scores.svg', },
            { label: 'Consumer Details', icon: '/assets/icons/consumer-details.svg', },
            { label: 'Enquiries', icon: '/assets/icons/enquiries.svg', },
            { label: 'Summary', icon: '/assets/icons/summary.svg', },
            { label: 'Accounts', icon: '/assets/icons/accounts.svg', },
        ],
    },
};

export const Style3: Story = {
    args: {
        variant: 'style-3',

        tabs: [
            { label: 'Overview', icon: '/assets/icons/scores.svg' },
            { label: 'Contact', icon: '/assets/icons/scores.svg' },
            { label: 'Documents', icon: '/assets/icons/scores.svg' },
        ],
    },
};

export const Style4: Story = {
    args: {
        variant: 'style-4',
        showIcon: false,
        tabs: [
            { label: 'All', icon: '/assets/icons/scores.svg' },
            { label: 'Delivered', icon: '/assets/icons/scores.svg' },
            { label: 'Undelivered', icon: '/assets/icons/scores.svg' },
        ],
    },
};

export const Style5: Story = {
    args: {
        variant: 'style-5',
        showIcon: false,
        tabs: [
            { label: 'Personal Details', icon: '/assets/icons/scores.svg' },
            { label: 'Past', icon: '/assets/icons/scores.svg' },
        ],
    },
};
