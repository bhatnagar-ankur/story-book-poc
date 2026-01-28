import { Meta, StoryObj } from '@storybook/angular';
import { Tabs } from './tabs';

const meta: Meta<Tabs> = {
    title: 'Components/Tabs',
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
        showIcon: false,

        tabs: [
            { label: 'Scores', icon: '/assets/icons/scores.svg', },
            { label: 'Consumer Details', icon: '/assets/icons/consumer-details.svg', },
            { label: 'Enquiries', icon: '/assets/icons/enquiries.svg', },
            { label: 'Summary', icon: '/assets/icons/summary.svg', },
            { label: 'Accounts', icon: '/assets/icons/accounts.svg', },
        ],
    },
};

export const Style3_Card: Story = {
    args: {
        variant: 'style-3',

        tabs: [
            { label: 'Overview' },
            { label: 'Contact' },
            { label: 'Documents' },
        ],
    },
};

export const Style4_Filter: Story = {
    args: {
        variant: 'style-4',

        tabs: [
            { label: 'All' },
            { label: 'Delivered' },
            { label: 'Undelivered' },
        ],
    },
};

export const Style5_DualPill: Story = {
    args: {
        variant: 'style-5',

        tabs: [
            { label: 'Personal Details' },
            { label: 'Past' },
        ],
    },
};
