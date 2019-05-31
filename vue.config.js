/*
* vue.config.js 是一个可选的配置文件，如果项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载
* 更多配置查看：https://cli.vuejs.org/zh/config/#vue-config-js
*/

'use static'
const path = require('path')
const port = 9000  //dev port

module.exports = {
  devServer: {
    port,
  },


  // 这里的配置会通过 webpack-merge 合并到最终的配置中
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    }
  }
}
