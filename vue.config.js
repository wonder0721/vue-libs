'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
    // publicPath:process.env.NODE_ENV === 'production' ? '/vue_workspac/aihuhuproject/' : '/',

    //基本路径
    publicPath: './',//默认的'/'是绝对路径，如果不确定在根路径，改成相对路径'./'
    // 输出文件目录
    outputDir: 'dist',
    assetsDir: 'static',
    indexPath: 'index.html',
    lintOnSave: false,
    productionSourceMap: false,
    
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 8080,
        // hot: true,
        https: false,
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        resolve: {
          alias: {
            '@': resolve('src')
          }
        }
  },
    // css相关配置
    css: {
      sourceMap: false,
      loaderOptions: {
            scss: {
          prependData: `
                @import "@/styles/variables.scss";
                @import "@/styles/mixin.scss";
                `
            }
        }
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
};