import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
Vue.component('date-picker', VuePersianDatetimePicker);

// import Vuex from 'Vuex'
// const store = createStore({
//   state () {
//     return {
//       count: 0
//     }
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })
// 
// Vue.use(store)

// axios
import axios from 'axios'
import VueAxios from 'vue-axios' 

Vue.use(VueAxios, axios)

import router from './router'

// Aos
import AOS from 'aos'
import 'aos/dist/aos.css'

// vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// meta tags
import VueMeta from 'vue-meta'
Vue.use(VueMeta)


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App),
  mounted() {
    AOS.init()
  },
}).$mount('#app')



