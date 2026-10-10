import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { StorybookConfig } from '@storybook/nextjs-vite'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(dirname, '../')

// Storybook configuration
const config: StorybookConfig = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  staticDirs: ['../public'],
  stories: ['../stories/**/*.mdx', '../app/**/*.(stories|story).@(ts|tsx)'],
  viteFinal: async (config) => {
    config.resolve ??= {}
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': root,
    }
    // Mirror the sassOptions in next.config.js, which the Vite builder doesn't read
    config.css ??= {}
    config.css.preprocessorOptions = {
      ...config.css.preprocessorOptions,
      scss: {
        loadPaths: [path.join(root, 'app')],
        additionalData: '@import "_scss/styles.global.scss";',
        silenceDeprecations: ['import', 'global-builtin'],
      },
    }
    return config
  },
}

export default config
