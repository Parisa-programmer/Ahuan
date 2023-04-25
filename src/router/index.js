import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)



const routes = [
  
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/Istanbul',
    name: 'istanbul',
    component: () => import('../views/Istanbul/Istanbul.vue')
  },
  {
    path: '/Europe',
    name: 'europe',
    component: () => import('../views/Europe/Europe.vue')
  },
  {
    path: '/Dubai',
    name: 'dubai',
    component: () => import('../views/Dubai/Dubai.vue')
  },
  {
    path: '/Srilanka',
    name: 'srilanka',
    component: () => import('../views/Srilanka/Srilanka.vue')
  },
  {
    path: '/Moscow',
    name: 'moscow',
    component: () => import('../views/Moscow/Moscow.vue')
  },
  {
    path: '/Thailand',
    name: 'thailand',
    component: () => import('../views/Thailand/Thailand.vue')
  },
  {
    path: '/Thailand-Malaysia',
    name: 'thailand-Malaysia',
    component: () => import('../views/Thailand-Malaysia/Thailand-Malaysia.vue')
  },
  {
    path: '/dubai-3-night',
    name: 'dubai-3-night',
    component: () => import('../views/Dubai/Dubai-3-night.vue')
  },
  {
    path: '/test-page/:slug',
    name: 'test-page',
    component: () => import('../views/TestPage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
