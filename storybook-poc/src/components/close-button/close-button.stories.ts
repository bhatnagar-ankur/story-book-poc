import { Meta, StoryObj } from '@storybook/angular';
import { CloseButton } from './close-button';

//#region Story Metadata
/* ----- Story Metadata ----- */
const meta: Meta<CloseButton> = {
  title: 'Example/Close Button',
  component: CloseButton,
  tags: ['autodocs'],
  argTypes: {
    close: { action: 'close clicked' },
  },
};
//#endregion

/* ----- Story Type ----- */
export default meta;
type Story = StoryObj<CloseButton>;

//#region Story Definitions
/* ----- Default Story ----- */
export const Default: Story = {
  args: {
    size: 'medium',
  },
};

/* ----- Small Story ----- */
export const Small: Story = {
  args: {
    size: 'small',
  },
};

/* ----- Large Story ----- */
export const Large: Story = {
  args: {
    size: 'large',
  },
};
//#endregion