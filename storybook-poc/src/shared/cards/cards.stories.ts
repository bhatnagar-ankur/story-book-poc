import { Meta, StoryObj } from '@storybook/angular';
import { Cards } from './cards';

export default {
  title: 'Design System/Card',
  component: Cards,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['promo', 'product', 'stats'] }
  }
} as Meta<Cards>;

type Story = StoryObj<Cards>;

export const Promo: Story = {
  args: {
    variant: 'promo',
    title: 'Key Account Management',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua.',
    image: '/assets/icons/promo.svg'
  }
};

export const Product: Story = {
  args: {
    variant: 'product',
    tag: 'Bestseller',
    title: 'TOMMY HILFIGER',
    description: 'Cropped Regular Blue...',
    price: 9375,
    strikePrice: 12500,
    offer: '20% OFF',
    image: '/assets/icons/product.png',
    colors: [
      '/assets/icons/product.png',
      '/assets/icons/product.png',
      '/assets/icons/product.png'
    ],
    moreOffers: 3
  }
};

export const Stats: Story = {
  args: {
    variant: 'stats',
    title: 'Triple E',
    image: '/assets/icons/stats.svg',
    completed: '60237 (90%)',
    incomplete: '1123 (10%)'
  }
};
