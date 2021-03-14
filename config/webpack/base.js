const { webpackConfig } = require('@rails/webpacker')
const customConfig = {
  resolve: {
    extensions: ['.css']
  }
}
module.exports = webpackConfig
