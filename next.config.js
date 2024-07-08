/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'app')],
    additionalData: '@import "_scss/styles.global.scss";',
  },
  experimental: {
    serverComponentsExternalPackages: ['playwright-core', 'chrome-aws-lambda'],
    externalDir: true
  }
}

module.exports = nextConfig
