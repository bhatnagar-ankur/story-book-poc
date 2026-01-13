import { Meta, StoryObj } from '@storybook/angular';
import { Toast } from './toast';

export default {
    title: 'Design System/Toast',
    component: Toast,
    tags: ['autodocs'],
} as Meta<Toast>;

type Story = StoryObj<Toast>;

export const Progress: Story = {
    args: {
        variant: 'progress',
        title: 'Progress!',
        subTitle: '3 out of 10',
        message: 'is in progress.',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        title: 'Success!',
        subTitle: 'S1738',
        message: 'is in hold because of this reason.',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        title: 'Warning!',
        subTitle: 'S1738',
        message: 'is in hold because of this reason.',
    },
};

export const Error: Story = {
    args: {
        variant: 'error',
        title: 'Error',
        subTitle: 'S1738',
        message: 'is in hold because of this reason.',
    },
};
