const Hello = { template: '<div>test</div>' }

const routes = [
  { path: '/hello', component: HelloWorld }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')