import type { Meta, StoryObj } from '@storybook/angular';
import { Badge } from './badge';

/* -----STATIC DATA ----- */
const COLORS = ['gray', 'green', 'red', 'orange', 'purple', 'teal'] as const;

//#region Story Metadata
/* ----- Story Metadata ----- */
const meta: Meta<Badge> = {
  title: 'Example/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: COLORS },
    appearance: { control: 'select', options: ['solid', 'subtle', 'outline'] },
  },
  args: {
    color: 'gray',
    appearance: 'solid',
  },
};
//#endregion

/* ----- Story Type ----- */
export default meta;
type Story = StoryObj<Badge>;

//#region Reusable Renderer
/* ----- Reusable Renderer ----- */
const renderBadges = (args: any) => ({
  props: {
    ...args,
    colors: COLORS,
  },
  template: `
    <div style="display:flex; gap:10px; flex-wrap:wrap;">
      @for (color of colors; track color) {
        <app-badge
          [color]="color"
          [appearance]="appearance"
        >
          {{ color.toUpperCase() }}
        </app-badge>
      }
    </div>
  `,
});
//#endregion

//#region Story Definitions
/* ----- Default Story ----- */
export const Default: Story = {
  args: {
    color: 'green',
    appearance: 'solid',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-badge [color]="color" [appearance]="appearance">
        {{ color.toUpperCase() }}
      </app-badge>
    `,
  }),
};

/* ----- Solid Badges Story ----- */
export const SolidBadges: Story = {
  args: { appearance: 'solid' },
  render: (args) => renderBadges(args),
};

/* ----- Subtle Badges Story ----- */
export const SubtleBadges: Story = {
  args: { appearance: 'subtle' },
  render: (args) => renderBadges(args),
};

/* ----- Outline Badges Story ----- */
export const OutlineBadges: Story = {
  args: { appearance: 'outline' },
  render: (args) => renderBadges(args),
};
//#endregion