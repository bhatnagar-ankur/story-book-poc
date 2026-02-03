import { Meta, StoryObj } from '@storybook/angular';
import { Search } from './search';

const meta: Meta<Search> = {
  title: 'Design System/Search',
  component: Search,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<Search>;

const options = [
  'India',
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
];
/* ----- Default story ----- */
export const Default: Story = {
  args: {
    label: 'Country',
    options,
    required: true,
  },
};
/* ----- With value story ----- */
export const WithValue: Story = {
  args: {
    label: 'Country',
    options,
    selected: 'India',
    required: true,
  },
};
/* ----- Disabled story ----- */
export const Disabled: Story = {
  args: {
    label: 'Country',
    options,
    selected: 'India',
    disabled: true,
    required: true,
  },
};
/* ----- Readonly story ----- */
export const ReadOnly: Story = {
  args: {
    label: 'Country',
    options,
    selected: 'India',
    readonly: true,
    required: true,
  },
};
/* ----- Error state Story ----- */
export const ErrorState: Story = {
  args: {
    label: 'Country',
    options,
    selected: 'India',
    error: "Error message goes here",
    required: true,
  },
};