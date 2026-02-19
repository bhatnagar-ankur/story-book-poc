import { Meta, StoryObj } from '@storybook/angular';
import { CardsWrapper } from './cards-wrapper';

export default {
  title: 'Design System/Cards',
  component: CardsWrapper,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['promo', 'product', 'stats']
    }
  }
} as Meta<CardsWrapper>;

type Story = StoryObj<CardsWrapper>;
export const PromoCard: Story = {
  args: {
    type: 'promo',
    data: {
      title: 'Key Account Management',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: './assets/icons/promo.svg'
    }
  }
};
export const ProductCard: Story = {
  args: {
    type: 'product',
    data: {
      tag: 'Bestseller',
      title: 'TOMMY HILFIGER',
      description: 'Cropped Regular Blue Shirt in Myntra',
      price: 9375,
      strikePrice: 12500,
      offer: '20% OFF',
      image: './assets/icons/product.png',
      colors: [
        './assets/icons/product.png',
        './assets/icons/card2.webp',
        './assets/icons/card3.webp'
      ],
      moreOffers: 3
    }
  }
};
export const StatsCard: Story = {
  args: {
    type: 'stats',
    data: {
      title: 'Triple E',
      image: './assets/icons/stats.svg',
      completed: '60237 (90%)',
      incomplete: '1123 (10%)'
    }
  }
};
