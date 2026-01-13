import { Meta, StoryObj } from '@storybook/angular';
import { DialogBox } from './dialog-box';

const meta: Meta<DialogBox> = {
    title: 'Design System/Dialog',
    component: DialogBox,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'radio' },
            options: ['default', 'medium', 'large'],
        },
        variant: {
            control: { type: 'radio' },
            options: ['default', 'error', 'information', 'warning'],
        },
    },
    args: {
        size: 'default',
    },
};
export default meta;

type Story = StoryObj<DialogBox>;

const baseArgs = {
    title: 'Modal Title',
    message:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the',
};

/* ---- ONE STORY PER VARIANT ---- */
export const Default: Story = {
    args: {
        ...baseArgs,
        variant: 'default',
    },
};

export const Error: Story = {
    args: {
        ...baseArgs,
        variant: 'error',
    },
};

export const Information: Story = {
    args: {
        ...baseArgs,
        variant: 'information',
    },
};

export const Warning: Story = {
    args: {
        ...baseArgs,
        variant: 'warning',
    },
};
