import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { ButtonComponent } from './button.component';

//#region Story Metadata
/* ----- Story Metadata ----- */
const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    shape: { control:'inline-radio',options:['rounded','pill','square'] },
    backgroundColor: { control:'color' },
    textColor: { control:'color' },
    borderColor: { control:'color' },
    disabled: { control:'boolean' },
    onClick: { action: 'clicked' },
  },

  args: {
    variant: 'primary',
    size: 'medium',
    shape: 'rounded',
    onClick: fn(),
  },

  render: (args) => ({
    props: args,
    template: `
      <storybook-button
        [variant]="variant"
        [size]="size"
        [shape]="shape"
        [backgroundColor]="backgroundColor"
        [textColor]="textColor"
        [borderColor]="borderColor"
        [disabled]="disabled"
        (onClick)="onClick($event)"
      >
        Button
      </storybook-button>
    `,
  }),
};
//#endregion

/* ----- Story Type ----- */
export default meta;
type Story = StoryObj<ButtonComponent>;

//#region Story Definitions
/* ----- Primary Story ----- */
export const Primary: Story = {
  args: { variant: 'primary' },
};

/* ----- Secondary Story ----- */
export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

/* ----- Danger Story ----- */
export const Danger: Story = {
  args: { variant: 'danger' },
};

/* ----- Small Story ----- */
export const Small: Story = {
  args: { size: 'small' },
};

/* ----- Large Story ----- */
export const Large: Story = {
  args: { size: 'large' },
};
//#endregion