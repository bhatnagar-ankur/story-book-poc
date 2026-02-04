import { Meta, StoryObj } from '@storybook/angular';
import { PieChartWrapper } from './pie-chart-wrapper';

const meta: Meta<PieChartWrapper> = {
  title: 'Design System/PieChart',
  component: PieChartWrapper,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<PieChartWrapper>;
export const Gradient: Story = {
  args: {
    variant: 'gradient',
    percentage: 55,
    size: 360
  }
};
export const Donut: Story = {
  args: {
    variant: 'donut',
    size: 350,

    segments: [
      { value: 25, color: '#6B5BFF' },
      { value: 25, color: '#FFB703' },
      { value: 25, color: '#7CFF9B' },
      { value: 25, color: '#FF8C5A' },
    ]
  }
};
export const MultiRing: Story = {
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
export const CircularSlider: Story = {

  args: {
    variant: 'circular-slider',
    size: 260,
    min: 0,
    max: 100
  }
};
export const Temperature: Story = {
  args: {
    variant: 'temperature',
    size: 280,
    minTemp: 10,
    maxTemp: 30
  }
};