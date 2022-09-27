const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/JingDongMock', // 打包dao
  transpileDependencies: true,
  lintOnSave: true // eslint检查
})
