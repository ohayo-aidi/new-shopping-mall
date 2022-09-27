const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/JingDongMock', // css 打包到根域名下 JingDongMock的文件夹内
  transpileDependencies: true,
  lintOnSave: true // eslint检查
})
