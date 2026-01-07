import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DialogBox } from './dialog-box';
import { fn } from 'storybook/test';


//#region Story Metadata
/* ----- Story Metadata ----- */
const meta: Meta<DialogBox> = {
  title: 'Example/Dialog Box',
  component: DialogBox,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [DialogBox],
    }),
  ],
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    confirm: { action: 'confirmed' },
    cancel: { action: 'cancelled' },
  },
  args: {
    isOpen: false,
    title: 'Delete Record?',
    message: 'Are you sure you want to delete this item? This action cannot be undone.',
    confirm: fn(),
    cancel: fn(),
  },
};
//#endregion

//# Story Type ----- */
export default meta;
type Story = StoryObj<DialogBox>;

//#region Story Definitions
/* ----- Default Story ----- */
export const Default: Story = {};
//#endregion