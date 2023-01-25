/** @type {import('next').NextConfig} */
const assetPrefix =  ''
const isProd = process.env.NODE_ENV === 'production'

const settings = {
  i18n: {
    locales: ['en_US'],
    defaultLocale: 'en_US'
  },
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  assetPrefix: isProd ? '' : undefined,
  webpack: (config, { dev }) => {
    config.output.publicPath = `${assetPrefix}${config.output.publicPath}`
    return config
  }
}

module.exports = settings