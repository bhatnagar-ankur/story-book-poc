import { Meta, StoryObj } from '@storybook/angular';
import { DatePicker } from './date-picker';

const meta: Meta<DatePicker> = {
    title: 'Design System/Date Picker',
    component: DatePicker,
    argTypes: {
        type: {
            control: 'radio',
            options: ['single', 'range']
        },
        pastYearLimit: {
            control: 'number'
        },
        futureYearLimit: {
            control: 'number'
        },
        noPastYears: {
            control: 'boolean'
        },
        noFutureYears: {
            control: 'boolean'
        }
    }
};

export default meta;
type Story = StoryObj<DatePicker>;
export const Single: Story = {
    args: {
        type: 'single',
        icon: 'assets/icons/calendar-icon.svg',
        noPastYears: false,
        noFutureYears: false,
        futureYearLimit: 5,
        pastYearLimit: 5
    },
};

export const Range: Story = {
    args: {
        type: 'range',
        icon: 'assets/icons/calendar-icon.svg',
        noPastYears: false,
        noFutureYears: false,
        pastYearLimit: null,
        futureYearLimit: null,
    },
};
