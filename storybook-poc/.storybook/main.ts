import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    '@storybook/addon-essentials',
    'storybook-addon-pseudo-states',
  ],
  "framework": "@storybook/angular",
  staticDirs: ["../src/assets"],
};
export default config;