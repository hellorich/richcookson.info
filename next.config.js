/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'app')],
    additionalData: '@import "_scss/styles.global.scss";',
  },
  experimental: {
    serverComponentsExternalPackages: ['puppeteer-core', '@sparticuz/chromium-min'],
    externalDir: true
  }
}

module.exports = nextConfig
