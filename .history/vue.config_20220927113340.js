const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/JingDongMock', // 打包到根域名下
  transpileDependencies: true,
  lintOnSave: true // eslint检查
})
