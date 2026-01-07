import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { HeaderComponent } from './header.component';

//#region Story Metadata
/* ----- Story Metadata ----- */
const meta: Meta<HeaderComponent> = {
  title: 'Example/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};
//#endregion

/* ----- Story Type ----- */
export default meta;
type Story = StoryObj<HeaderComponent>;

//#region Story Definitions
/* ----- Logged In Story ----- */
export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};
/* ----- Logged Out Story ----- */
export const LoggedOut: Story = {};
//#endregion