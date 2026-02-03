import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { InputField } from './input-field';

const meta: Meta<InputField> = {
  title: 'Design System/Text Fields',
  component: InputField,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<InputField>;
/* ----- Default Story ----- */
export const Default: Story = {
  args: {
    label: 'Country',
    required: true,
  },
};
/* ----- With value Story ----- */
export const WithValue: Story = {
  args: {
    label: 'Country',
    value: 'India',
    required: true,
  },
};
/* -----  Disabled Story ----- */
export const Disabled: Story = {
  args: {
    label: 'Country',
    value: 'India',
    disabled: true,
    required: true,
  },
};
/* ------ Readonly Story ----- */
export const ReadOnly: Story = {
  args: {
    label: 'Country',
    value: 'India',
    required: true,
    readonly: true,
  },
};
/* ----- Error state Story ----- */
export const ErrorState: Story = {
  args: {
    label: 'Country',
    value: 'India',
    error: 'Error message goes here',
    required: true,
  },
};