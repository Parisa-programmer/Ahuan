import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// router

// axios
import axios from 'axios'

import router from './router'
Vue.use(axios)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')