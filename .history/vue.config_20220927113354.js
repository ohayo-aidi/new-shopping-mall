const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/JingDongMock', // 打包到根域名下 JingDongMock的文件夹nie
  transpileDependencies: true,
  lintOnSave: true // eslint检查
})
