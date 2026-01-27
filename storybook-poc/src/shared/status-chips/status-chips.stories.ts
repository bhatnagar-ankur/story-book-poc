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
        selectedChip: {
            control: 'select',
            options: [
                '',
                'good-0', 'good-1', 'good-2',
                'bad-0', 'bad-1', 'bad-2',
                'progress-0', 'progress-1', 'progress-2',
                'neutral-0', 'neutral-1', 'neutral-2',
            ],
            description: 'Show only selected chip',
        },
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
        progressLabelsText: 'Inprogress Blue 1,Inprogress Blue 2,Inprogress Blue 3',
        neutralLabelsText: 'Neutral Gray 1,Neutral Gray 2,Neutral Gray 3',
    },
};

export const Style2: Story = {
    args: {
        styleType: 'style2',
        activeStatus: 'all',
        goodLabelsText: 'Good 1,Good 2,Good 3',
        badLabelsText: 'Bad 1,Bad 2,Bad 3',
        progressLabelsText: 'In progress 1,In progress 2,In progress 3',
        neutralLabelsText: 'Neutral 1,Neutral 2,Neutral 3',
    },
};

export const Style3: Story = {
    args: {
        styleType: 'style3',
        activeStatus: 'all',
        goodLabelsText: 'Good 1,Good 2,Good 3',
        badLabelsText: 'Bad 1,Bad 2,Bad 3',
        progressLabelsText: 'In progress 1,In progress 2,In progress 3',
        neutralLabelsText: 'Neutral 1,Neutral 2,Neutral 3',
    },
};
