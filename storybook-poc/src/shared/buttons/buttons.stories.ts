import { Meta, StoryObj } from '@storybook/angular';
import { Buttons } from './buttons';

const meta: Meta<Buttons> = {
    title: 'Design System/Button',
    component: Buttons,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        disabled: { control: 'boolean' },
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
        disabled: false,
    }
};

/** SECONDARY */
export const Secondary: Story = {
    args: {
        label: 'Button Text',
        buttonType: 'secondary',
        disabled: false,
    }
};

/** TEXT */
export const Text: Story = {
    args: {
        label: 'Button Text',
        buttonType: 'text',
        disabled: false,
    }
};

/** ICONIC TEXT */
export const Iconic: Story = {
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
        buttonType: 'long',
        disabled: false,
    }
};
