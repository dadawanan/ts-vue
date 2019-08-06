const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  lintOnSave: true,
  publicPath: process.env.NODE_ENV === 'procution' ? './' : '/',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包不生成.map文件
  // procutionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        // 目标 API 地址
        target: 'http://47.110.72.91:8080',
        // 如果要代理 websockets
        ws: false,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
