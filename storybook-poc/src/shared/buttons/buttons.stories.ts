import { Meta, StoryObj } from '@storybook/angular';
import { Buttons } from './buttons';

const meta: Meta<Buttons> = {
    title: 'Design System/Buttons',
    component: Buttons,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        disabled: { control: 'boolean' },
        showIcon: { control: 'boolean' },
        icon: { control: 'text' },
        iconPosition: {
            control: { type: 'radio' },
            options: ['left', 'right'],
        },
    },
    parameters: {
        pseudo: { hover: false, focus: false, active: false },
    }
};

export default meta;
type Story = StoryObj<Buttons>;

/** PRIMARY */
export const Primary: Story = {
    args: {
        label: 'Button Text',
        buttonType: 'primary',
        icon: './assets/icons/close.svg',
        showIcon: false,
        disabled: false,
    }
};

/** SECONDARY */
export const Secondary: Story = {
    args: {
        label: 'Button Text',
        icon: './assets/icons/close.svg',
        showIcon: false,
        buttonType: 'secondary',
        disabled: false,
    }
};

/** ICONIC TEXT */
export const IconicText: Story = {
    args: {
        label: 'Reset',
        buttonType: 'iconic',
        icon: './assets/icons/resetIcon.svg',
        disabled: false,
    }
};

/** LONG */
export const Long: Story = {
    args: {
        label: 'Button Text',
        icon: './assets/icons/close.svg',
        showIcon: false,
        buttonType: 'long',
        disabled: false,
    }
};
/** DOWNLOAD */
export const Download: Story = {
    args: {
        label: 'Download',
        buttonType: 'download',
        icon: './assets/icons/download-icon.svg',
        showIcon: true,
        iconPosition: 'right',
        disabled: false,
    }
};
/** ORDER COMPLETE */
export const OrderComplete: Story = {
    args: {
        buttonType: 'order',
        disabled: false,
        orderSuccessIcon: '/assets/icons/tick-icon.svg',
        showIcon: true,
    }
};
/** SLIDE ANIMATION */
export const SlideAnimation: Story = {
    args: {
        label: 'Button',
        icon: './assets/icons/close.svg',
        showIcon: false,
        buttonType: 'stack-orange',
    },
};
/** CIRCULATION ANIMATION */
export const CircularAnimation: Story = {
    args: {
        label: 'Button',
        icon: './assets/icons/close.svg',
        showIcon: false,
        buttonType: 'stack-pink',
    },
};
/** ROTATION ANIMATION */
export const RotateAnimation: Story = {
    args: {
        label: 'Button',
        icon: './assets/icons/close.svg',
        showIcon: false,
        buttonType: 'stack-black',
    },
};
/** ADD TO CART */
export const AddToCart: Story = {
  args: {
    label: 'Add to Cart',
    buttonType: 'cart',   
    icon: './assets/icons/cart.svg',
    showIcon: true,
    iconPosition: 'left',
    disabled: false,
  }
};

