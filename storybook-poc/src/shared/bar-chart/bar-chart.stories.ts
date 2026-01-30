import type { Meta, StoryObj } from '@storybook/angular';
import { BarChart } from './bar-chart';

const meta: Meta<BarChart> = {
  title: 'Design System/Style1 Progress Chart',
  component: BarChart,

  argTypes: {
    max: {
      control: { type: 'number', min: 5, max: 20 },
    },

    values: {
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<BarChart>;

export const Default: Story = {
  args: {
    labels: ['1','2','3','4','5','6','7'],
    values: [2, 1, 4, 5, 2, 0, 0],
    max: 10,
  },
};

export const Style3Ranking: Story = {
  args: {
    variant: 'style3',
    title: 'List of countries',
    showCount: true,
    items: [
      { label: 'Noruega', value: 95 },
      { label: 'Australia', value: 85 },
      { label: 'Suiza', value: 78 },
      { label: 'Países Bajos', value: 72 },
      { label: 'Estados Unidos', value: 65 },
      { label: 'Alemania', value: 60 },
      { label: 'Nueva Zelanda', value: 55 },
      { label: 'Canadá', value: 40 },
    ],
  },
};
export const Style4Stacked: Story = {
  args: {
    variant: 'style4',
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    stackA: [30, 45, 25, 40, 50, 15, 35],
    stackB: [20, 35, 18, 30, 42, 10, 25],
    maxStack: 100,
  },
};
