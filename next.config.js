/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  sassOptions: {
    loadPaths: [path.join(__dirname, 'app')],
    additionalData: '@import "_scss/styles.global.scss";',
    // The SCSS still uses @import and global functions like map-get, which
    // Dart Sass now warns about on every file. Hide those warnings until the
    // styles move to @use.
    silenceDeprecations: ['import', 'global-builtin'],
  },
  serverExternalPackages: ['puppeteer-core', '@sparticuz/chromium-min'],
  experimental: {
    externalDir: true,
  },
}

module.exports = nextConfig
