const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  // build: {
  //   assetsPublicPath: '',
  // },
  publicPath: './',
  configureWebpack: {
    plugins: [
      // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  },
})
