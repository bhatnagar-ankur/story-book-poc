import type { Meta, StoryObj } from '@storybook/angular';
import { Breadcrumb } from './breadcrumb';

//#region Story Metadata
/* ----- Story Metadata ----- */
const meta: Meta<Breadcrumb> = {
  title: 'Example/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
};
//#endregion

/* ----- Story Type ----- */
export default meta;
type Story = StoryObj<Breadcrumb>;

/* ----- Static Items Data ----- */
const ITEMS = ['Home', 'About', 'Current'];

//#region Story Definitions
/*-----Default Story -----*/
export const Default: Story = {
  name: 'default',
  args: {
    items: ITEMS,
    separator: '/',
  },
};

/*----- Custom Separator Story -----*/
export const Separator: Story = {
  name: 'separator',
  args: {
    items: ITEMS,
    separator: '>',
  },
};

/* ----- Separator V2 Story ----- */
export const SeparatorV2: Story = {
  name: 'separator v2',
  args: {
    items: ITEMS,
    separator: '>>',
  },
};

/* ----- Triangle Story ----- */
export const Triangle: Story = {
  name: 'triangle',
  args: {
    items: ITEMS,
    separator: 'triangle',
  },
};
//#endregion