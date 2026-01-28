import { Meta, StoryObj } from '@storybook/angular';
import { DatePicker } from './date-picker';

const meta: Meta<DatePicker> = {
    title: 'Components/Date Picker',
    component: DatePicker,

    argTypes: {
        type: {
            control: 'radio',
            options: ['single', 'range']
        }
    }
};

export default meta;

type Story = StoryObj<DatePicker>;

export const SingleWithYear: Story = {
    args: {
        type: 'single',
        icon: 'assets/icons/calendar-icon.svg',

    },
    name: 'Single Date + Time + Year',
};

export const RangeWithYear: Story = {
    args: {
        type: 'range'
    },
    name: 'Range + Year Selector'
};
