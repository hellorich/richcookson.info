import type { AddonOptionsBabel } from '@storybook/addon-coverage'
import type { StorybookConfig } from '@storybook/nextjs'

// Storybook test coverage configuration
const coverageConfig: AddonOptionsBabel = {
  include: ['**/stories/**'],
  exclude: ['**/_utilities/**'],
  excludeNodeModules: true,
};

// Storybook configuration
const config: StorybookConfig = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-links',
    '@storybook/addon-onboarding',
    '@storybook/addon-storyshots',
		{
			name: '@storybook/addon-coverage',
			options: {
				istanbul: {
					...coverageConfig,
				},
			},
		},
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
    '../app/**/*.(stories|story).@(ts|tsx)',
  ],
}

export default config
