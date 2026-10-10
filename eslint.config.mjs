import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import storybook from 'eslint-plugin-storybook'

export default defineConfig([
  ...nextVitals,
  ...storybook.configs['flat/recommended'],
  {
    rules: {
      semi: ['error', 'never'],
      'no-unexpected-multiline': 'error',
      'react/react-in-jsx-scope': 'off',
      'import/extensions': 'off',
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'coverage/**',
    'storybook-static/**',
    'next-env.d.ts',
  ]),
])
