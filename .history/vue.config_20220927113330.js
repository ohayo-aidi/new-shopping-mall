const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/JingDongMock', // 打包到
  transpileDependencies: true,
  lintOnSave: true // eslint检查
})
