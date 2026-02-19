import { Meta, StoryObj } from '@storybook/angular';
import { Navigation } from './navigation';

const meta: Meta<Navigation> = {
  title: 'Design System/Navigation',
  component: Navigation,
  argTypes: {
    expanded: {
      control: 'boolean',
      description: 'Expand / Collapse sidebar',
    },
    showParentIcons: {
      control: 'boolean',
      description: 'Show / Hide parent menu icons',
    },

    showChildIcons: {
      control: 'boolean',
      description: 'Show / Hide child menu icons',
    },


    showLogo: {
      control: 'boolean',
      description: 'Show / Hide logo',
    },

    activeIndex: {
      control: {
        type: 'number',
        min: 0,
        max: 10,
        step: 1,
      },
      description: 'Selected menu index',
    },

    navItems: {
      control: 'object',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Navigation>;

export const SideNavigation: Story = {
  args: {
    expanded: true,
    showParentIcons: true,
    showChildIcons: true,
    showLogo: true,
    navItems: [
      {
        icon: './assets/icons/home-icon.svg',
        label: 'Home',
      },
      {
        icon: './assets/icons/analytics-icon.svg',
        label: 'Analytics Dashboard',
      },
      {
        icon: './assets/icons/home-icon.svg',
        label: 'Shipment',
        children: [
          { label: 'Create Shipments', icon: './assets/icons/home-icon.svg' },
          { label: 'Shipments', icon: './assets/icons/reports-icon.svg' }
        ],
      },
      {
        icon: './assets/icons/miller-coors-icon.svg',
        label: 'Miller Coors',
      },
      {
        icon: './assets/icons/marketplace-icon.svg',
        label: 'Marketplace',
      },
      {
        icon: './assets/icons/booking-icon.svg',
        label: 'Booking',
      },
      {
        icon: './assets/icons/rates-icon.svg',
        label: 'Rates',
      },
      {
        icon: './assets/icons/reports-icon.svg',
        label: 'Reports',
      },
      {
        icon: './assets/icons/rail-car-schedular-icon.svg',
        label: 'Rail Car Schedular',
      },
      {
        icon: './assets/icons/accounts-icon.svg',
        label: 'Account',
      },
      {
        icon: './assets/icons/resources-icon.svg',
        label: 'Resources',
      },
      {
        icon: './assets/icons/help-icon.svg',
        label: 'Help',
      },
      {
        icon: './assets/icons/load-icon.svg',
        label: 'Load',
      },
      {
        icon: './assets/icons/load-icon.svg',
        label: 'History',
      },
      {
        icon: './assets/icons/load-icon.svg',
        label: 'Service Center',
      },
      {
        icon: './assets/icons/load-icon.svg',
        label: 'Admin',
      },
    ],
  },
};
export const SideNavigation2: Story = {
  args: {
    expanded: true,
    useSlider: true,

    showParentIcons: true,
    showChildIcons: true,
    showLogo: true,

    navItems: [
      {
        icon: './assets/icons/home-icon.svg',
        label: 'Home',
      },
      {
        icon: './assets/icons/analytics-icon.svg',
        label: 'Analytics Dashboard',
      },
      {
        icon: './assets/icons/home-icon.svg',
        label: 'Shipment',
        children: [
          { label: 'Create Shipments', icon: './assets/icons/home-icon.svg' },
          { label: 'Shipments', icon: './assets/icons/reports-icon.svg' }
        ],
      },
      {
        icon: './assets/icons/miller-coors-icon.svg',
        label: 'Miller Coors',
      },
      {
        icon: './assets/icons/marketplace-icon.svg',
        label: 'Marketplace',
      },
      {
        icon: './assets/icons/booking-icon.svg',
        label: 'Booking',
      },
      {
        icon: './assets/icons/rates-icon.svg',
        label: 'Rates',
      },
      {
        icon: './assets/icons/reports-icon.svg',
        label: 'Reports',
      },
      {
        icon: './assets/icons/rail-car-schedular-icon.svg',
        label: 'Rail Car Schedular',
      },
      {
        icon: './assets/icons/accounts-icon.svg',
        label: 'Account',
      },
      {
        icon: './assets/icons/resources-icon.svg',
        label: 'Resources',
      },
      {
        icon: './assets/icons/help-icon.svg',
        label: 'Help',
      },
      {
        icon: './assets/icons/load-icon.svg',
        label: 'Load',
      },
      {
        icon: './assets/icons/load-icon.svg',
        label: 'History',
      },
      {
        icon: './assets/icons/load-icon.svg',
        label: 'Service Center',
      },
      {
        icon: './assets/icons/load-icon.svg',
        label: 'Admin',
      },
    ],
  },
};
