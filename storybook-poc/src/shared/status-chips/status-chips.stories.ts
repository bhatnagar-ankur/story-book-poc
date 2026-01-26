import type { Meta, StoryObj } from '@storybook/angular';
import { StatusChips } from './status-chips';

const meta: Meta<StatusChips> = {
    title: 'Design System/Status Chips',
    component: StatusChips,
    tags: ['autodocs'],

    argTypes: {

        styleType: {
            control: 'select',
            options: ['style1', 'style2', 'style3'],
        },

        activeStatus: {
            control: 'select',
            options: ['all', 'good', 'bad', 'progress', 'neutral'],
        },

        goodLabelsText: { control: 'text' },
        badLabelsText: { control: 'text' },
        progressLabelsText: { control: 'text' },
        neutralLabelsText: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<StatusChips>;

export const Style1: Story = {
    args: {
        styleType: 'style1',
        activeStatus: 'all',

        goodLabelsText: 'Good 1,Good 2,Good 3',
        badLabelsText: 'Bad 1,Bad 2,Bad 3',
        progressLabelsText: 'Progress 1,Progress 2,Progress 3',
        neutralLabelsText: 'Neutral 1,Neutral 2,Neutral 3',
    },
};

export const Style2: Story = {
    args: {
        styleType: 'style2',
        activeStatus: 'all',
        goodLabelsText: 'Good 1,Good 2,Good 3',
        badLabelsText: 'Bad 1,Bad 2,Bad 3',
        progressLabelsText: 'Progress 1,Progress 2,Progress 3',
        neutralLabelsText: 'Neutral 1,Neutral 2,Neutral 3',
    },
};

export const Style3: Story = {
    args: {
        styleType: 'style3',
        activeStatus: 'all',
        goodLabelsText: 'Good 1,Good 2,Good 3',
        badLabelsText: 'Bad 1,Bad 2,Bad 3',
        progressLabelsText: 'Progress 1,Progress 2,Progress 3',
        neutralLabelsText: 'Neutral 1,Neutral 2,Neutral 3',
    },
};
