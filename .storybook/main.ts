import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  stories: [
    '../stories/**/*.mdx',
    '../app/_components/**/*.stories.@(ts|tsx)',
  ],
}

export default config
