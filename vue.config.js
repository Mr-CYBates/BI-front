// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  devServer: {
    // host:"localhost",//要设置当前访问的ip 否则失效
    port: 8011,
    proxy: {
      '/': {
        target: 'http://localhost:8100',
        changeOrigin: true,
        pathRewrite:{
          '^/':'/'
        }
      }
    }
  }
}
