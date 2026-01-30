import { Meta, StoryObj } from '@storybook/angular';
import { PieChart } from './pie-chart';

const meta: Meta<PieChart> = {
  title: 'Design System/PieChart',
  component: PieChart,
};

export default meta;

type Story = StoryObj<PieChart>;

export const Style1: Story = {
  args: {
    variant: 'gradient',
    percentage: 50,
    size: 408,
  },
};

export const Style2: Story = {
  args: {
    variant: 'default',
    size: 432,

    segments: [
      { value: 25, color: '#6B5BFF' },
      { value: 25, color: '#FFB703' },
      { value: 25, color: '#7CFF9B' },
      { value: 25, color: '#FF8C5A' },
    ],
  },
};

export const Style3: Story = {
  args: {
    variant: 'temperature',
    temperature: 70,
    size: 458
  }
};

export const Style4: Story = {

  args: {
    variant: 'multi-ring',
    size: 400,

    rings: [
      { label: 'Users', value: 75, color: '#4DB6FF' },
      { label: 'Visits', value: 60, color: '#7C5CFF' },
      { label: 'Registers', value: 45, color: '#FF5A5A' },
      { label: 'Leads', value: 35, color: '#FF9F43' },
      { label: 'Billing', value: 25, color: '#444444' },
    ]
  }
};

export const Style5: Story = {
  args: {
    variant: 'circular-temp',
    temperature: 65,
    size: 280
  }
};
export const Style6: Story = {

  args: {
    variant: 'circular-slider',
    size: 260,
    min: 0,
    max: 100
  }
};
export const Style7: Story = {
  args: {
    variant: 'segmented-temp',
    size: 280,
    minTemp: 10,
    maxTemp: 30
  }
};
export const Style8: Story = {
  args: {
    variant: 'radial-pie',
    size: 220,

    radialValues: [20, 20, 20, 20, 20, 20],

    radialColors: [
      '#0B1F66',
      '#003B8F',
      '#005FB8',
      '#0096C7',
      '#48CAE4',
      '#E0FBFC'
    ]
  }
};
