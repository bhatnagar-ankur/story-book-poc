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
        position: {
      control: 'select',
      options: [
        'left-top',
        'left-bottom',
        'right-top',
        'right-bottom',
        'center-top',
        'center-bottom',
      ],
    },
    },
    args: {
        size: 'default',
    },
};
export default meta;

type Story = StoryObj<DialogBox>;

/* ---- ONE STORY PER VARIANT ---- */
export const Default: Story = {
    args: {
        title: 'Modal Title',
        message:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the',
        variant: 'default',
    },
};

export const Error: Story = {
    args: {
        title: 'Error',
        message:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the',
        variant: 'error',
    },
};

export const Information: Story = {
    args: {
        title: 'Information',
        message:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the',
        variant: 'information',
    },
};

export const Warning: Story = {
    args: {
        title: 'Warning',
        message:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the',
        variant: 'warning',
    },
};
