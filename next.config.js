/** @type {import('next').NextConfig} */
const assetPrefix =  ''

const settings = {
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  api: {
    bodyParser: false,
  },
  assetPrefix,
  webpack: (config, { dev }) => {
    config.output.publicPath = `${assetPrefix}${config.output.publicPath}`

    return config
  }
}

module.exports = settings