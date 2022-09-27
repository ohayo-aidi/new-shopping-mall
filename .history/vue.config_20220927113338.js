const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/JingDongMock', // 打包到gen'yu
  transpileDependencies: true,
  lintOnSave: true // eslint检查
})
