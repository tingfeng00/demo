// 发布路径
// const publicPath = process.env.VUE_APP_PATHNAME
const publicPath = '/repo/'
// 代理路径
const target = 'http://115.238.238.242:8099'

module.exports = {
  publicPath,

  // webpack-dev-server 配置
  devServer: {
    publicPath,
    proxy: {
      '/api': {
        target,
        changeOrigin: true
      },
      '/lessionnew': {
        target,
        changeOrigin: true
      },
      '/Content': {
        target,
        changeOrigin: true
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.devtool = '#source-map'
      // config.devtool = 'cheap-source-map'
    }
  }
}
