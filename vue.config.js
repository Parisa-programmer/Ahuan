const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: './',
  configureWebpack: {
    plugins: [
      // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  },
  devServer: {
    proxy: {
      '/ata/': {
        target: 'http://api.ataair.ir/ws1/',
        pathRewrite: { '^/ata': '' },
        secure: false
      },
      '/kishair/': {
        target: 'http://api.kishair.aero/ws1',
        pathRewrite: { '^/kishair': '' },
        secure: false
      },
      '/qeshmair/': {
        target: 'http://api.qeshm-air.com/ws1',
        pathRewrite: { '^/qeshmair': '' },
        secure: false
      },
      '/caspian/': {
        target: 'http://iv.nirasoft.ir:882',
        pathRewrite: { '^/caspian': '' },
        secure: false
      },
      '/taban/': {
        target: 'http://HH.nirasoft.ir:882',
        pathRewrite: { '^/taban': '' },
        secure: false
      },
      '/saha/': {
        target: 'http://IRZ.nirasoft.ir:880',
        pathRewrite: { '^/saha': '' },
        secure: false
      },
      '/aseman/': {
        target: 'http://restapi.iaa.ir/ws1',
        pathRewrite: { '^/aseman': '' },
        secure: false
      },
      '/zagros/': {
        target: 'http://Zv.nirasoft.ir:882',
        pathRewrite: { '^/zagros': '' },
        secure: false
      },
      '/naft/': {
        target: 'http://api.karunair.ir/ws1',
        pathRewrite: { '^/naft': '' },
        secure: false
      },
      '/meraj/': {
        target: 'http://restapi.meraj.aero/ws1',
        pathRewrite: { '^/meraj': '' },
        secure: false
      },
      '/varesh/': {
        target: 'http://VR.nirasoft.ir:882',
        pathRewrite: { '^/varesh': '' },
        secure: false
      },
    }
  },
})
