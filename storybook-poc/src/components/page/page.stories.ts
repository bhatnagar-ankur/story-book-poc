import type { Meta, StoryObj } from '@storybook/angular';
import { expect, userEvent, within } from 'storybook/test';
import { PageComponent } from './page.component';

//#region Story Metadata
/* ----- Story Metadata ----- */
const meta: Meta<PageComponent> = {
  title: 'Example/Page',
  component: PageComponent,
  parameters: {
    layout: 'fullscreen',
  },
};
//#endregion

/* ----- Story Type ----- */
export default meta;
type Story = StoryObj<PageComponent>;

//#region Story Definitions
/* ----- Logged Out Story ----- */
export const LoggedOut: Story = {};
/* ----- Logged In Story ----- */
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};
//#endregion