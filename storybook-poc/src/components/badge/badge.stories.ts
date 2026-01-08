import type { Meta, StoryObj } from '@storybook/angular';
import { Badge, BadgeConfig } from './badge';

//#region Story Metadata
/* ----- Story Metadata ----- */
const meta: Meta<Badge> = {
  title: 'Example/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    appearance: { control:'select',options:['solid','subtle','outline'] },
    badges: { control: 'object' },   // 👈 now works like ITEMS
    size: { control:'select',options:['sm','md','lg'] },
    shape: { control:'inline-radio',options:['rounded','pill','square'] },
    icon: { control:'text' },
    iconPosition: { control:'select',options:['start','end'] },
    show: { control:'boolean' },
    isClickable: { control:'boolean' },
    disabled: { control:'boolean' },
    backgroundColor: { control:'color' },
    textColor: { control:'color' },
    borderColor: { control:'color' },
    animation: { control:'select',options:['none','pop','pulse','fade'] },
    onClick: { action:'clicked badge' },
  },
  args: {
    appearance:'solid',
    size:'md',
    shape:'rounded',
    show:true,
    isClickable:true,
    icon:'/icons/success.svg',
  },
};
//#endregion

/* ----- Story Type ----- */
export default meta;
type Story = StoryObj<Badge>;
//#region Story Definitions
/* ----- SINGLE BADGE ----- */
export const Default: Story = {
  args: {
    color:'green',
    label:'New',
  },
};

/* ----- MULTIPLE (just like Breadcrumb ITEMS) ----- */
export const SolidBadges: Story = {
  args: {
    badges: [
      { color:'green', label:'New' },
      { color:'red', label:'Hot' },
      { color:'teal', label:'Live' },
    ] satisfies BadgeConfig[]
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        @for (b of badges; track b) {
          <app-badge
            [color]="b.color"
            [label]="b.label"
            [icon]="b.icon"
            [show]="b.show ?? show"
            [appearance]="appearance"
            [size]="size"
            [shape]="shape"
            [iconPosition]="iconPosition"
            [isClickable]="isClickable"
            [disabled]="disabled"
            [backgroundColor]="backgroundColor"
            [textColor]="textColor"
            [borderColor]="borderColor"
            [animation]="animation"
          ></app-badge>
        }
      </div>
    `,
  }),
};
/* ----- Subtle Badges Story ----- */
export const SubtleBadges: Story = {
  args: {
    appearance:'subtle',
    badges: [
      { color:'purple', label:'Beta' },
      { color:'orange', label:'Try' },
      { color:'green', label:'Live' },
    ],
  },
  render: SolidBadges.render,
};
/* ----- Outline Badges Story ----- */
export const OutlineBadges: Story = {
  args: {
    appearance:'outline',
    badges: [
      { color:'gray', label:'Draft' },
      { color:'red', label:'Alert' },
      { color:'teal', label:'Sync' },
    ],
  },
  render: SolidBadges.render,
};
//#endregion