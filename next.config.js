const path = require('path')
const withCSS = require('@zeit/next-css')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const withReactSvg = require('next-react-svg')

module.exports = withReactSvg(
  withCSS({
    include: path.resolve('src/assets/svg'),
    webpack: config => {
      config.resolve.plugins.push(new TsconfigPathsPlugin())
      return config
    },
  }),
)
