import { Meta, StoryObj } from '@storybook/angular';
import { Tabs } from './tabs';

const meta: Meta<Tabs> = {
    title: 'Design System/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    argTypes: {
        showIcon: {
            control: 'boolean',
            description: 'Show / hide tab icons',
        },

        variant: {
            control: 'select',
            options: [
                'ButtonTab',
                'IconNavigationTab',
                'UnderlineTab',
                'RoundedTab',
                'PillTab',
            ],
        },
    },
};

export default meta;
type Story = StoryObj<Tabs>;

export const ButtonTab: Story = {
    args: {
        variant: 'ButtonTab',
        showIcon: true,

        tabs: [
            {
                label: 'Ocean',
                icon: './assets/icons/ship-ocean.svg',
            },
            {
                label: 'Road',
                icon: './assets/icons/Truck-road.svg',
            },
            {
                label: 'Air',
                icon: './assets/icons/Aeroplane-air.svg',
            },
        ],
    },
};

export const IconNavigationTab: Story = {
    args: {
        variant: 'IconNavigationTab',
        showIcon: true,

        tabs: [
            { label: 'Scores', icon: './assets/icons/scores.svg', },
            { label: 'Consumer Details', icon: './assets/icons/consumer-details.svg', },
            { label: 'Enquiries', icon: './assets/icons/enquiries.svg', },
            { label: 'Summary', icon: './assets/icons/summary.svg', },
            { label: 'Accounts', icon: './assets/icons/accounts.svg', },
        ],
    },
};

export const UnderlineTab: Story = {
    args: {
        variant: 'UnderlineTab',

        tabs: [
            { label: 'Overview', icon: './assets/icons/scores.svg' },
            { label: 'Contact', icon: './assets/icons/scores.svg' },
            { label: 'Documents', icon: './assets/icons/scores.svg' },
        ],
    },
};

export const RoundedTab: Story = {
    args: {
        variant: 'RoundedTab',
        showIcon: false,
        tabs: [
            { label: 'All', icon: './assets/icons/scores.svg' },
            { label: 'Delivered', icon: './assets/icons/scores.svg' },
            { label: 'Undelivered', icon: './assets/icons/scores.svg' },
        ],
    },
};

export const PillTab: Story = {
    args: {
        variant: 'PillTab',
        showIcon: false,
        tabs: [
            { label: 'Personal Details', icon: './assets/icons/scores.svg' },
            { label: 'Past', icon: './assets/icons/scores.svg' },
        ],
    },
};
