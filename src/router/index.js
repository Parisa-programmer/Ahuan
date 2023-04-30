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
    path: '/SrilankaTour',
    name: 'srilanka-tour',
    component: () => import('../views/Srilanka/SrilankaTour.vue')
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
    path: '/ThailandTour',
    name: 'thailand-tour',
    component: () => import('../views/Thailand/ThailandTour.vue')
  },
  {
    path: '/Thailand-Malaysia',
    name: 'thailand-Malaysia',
    component: () => import('../views/Thailand-Malaysia/Thailand-Malaysia.vue')
  },
  {
    path: '/Thailand-Malaysia-10nights',
    name: 'Thailand-Malaysia-10nights',
    component: () => import('../views/Thailand-Malaysia/Thailand-Malaysia-10nights.vue')
  },
  {
    path: '/dubai-3night',
    name: 'dubai-3night',
    component: () => import('../views/Dubai/Dubai-3-night.vue')
  },
  {
    path: '/dubai-4night',
    name: 'dubai-4night',
    component: () => import('../views/Dubai/Dubai-4-night.vue')
  },
  {
    path: '/dubai-5night',
    name: 'dubai-5night',
    component: () => import('../views/Dubai/Dubai-5-night.vue')
  },
  {
    path: '/istanbul-3night',
    name: 'istanbul-3night',
    component: () => import('../views/Istanbul/Istanbul-3-night.vue')
  },
  {
    path: '/istanbul-4night',
    name: 'istanbul-4night',
    component: () => import('../views/Istanbul/Istanbul-4-night.vue')
  },
  {
    path: '/istanbul-5night',
    name: 'istanbul-5night',
    component: () => import('../views/Istanbul/Istanbul-5-night.vue')
  },
  {
    path: '/France-UAE-9days',
    name: 'Europe-01',
    component: () => import('../views/Europe/Europe-01.vue')
  },
  {
    path: '/France-Spain-UAE-11days',
    name: 'Europe-02',
    component: () => import('../views/Europe/Europe-02.vue')
  },
  {
    path: '/Switzerland-France-UAE-11days',
    name: 'Europe-03',
    component: () => import('../views/Europe/Europe-03.vue')
  },
  {
    path: '/France-Belgium-Netherlands-UAE-12days',
    name: 'Europe-04',
    component: () => import('../views/Europe/Europe-04.vue')
  },
  {
    path: '/France-Italy-Spain-UAE-14days',
    name: 'Europe-05',
    component: () => import('../views/Europe/Europe-05.vue')
  },
  {
    path: '/Switzerland-Italy-UAE-10days',
    name: 'Europe-06',
    component: () => import('../views/Europe/Europe-06.vue')
  },
  {
    path: '/Spain-Turkiye-11days',
    name: 'Europe-07',
    component: () => import('../views/Europe/Europe-07.vue')
  },
  {
    path: '/Spain-Italy-Turkey-13days',
    name: 'Europe-08',
    component: () => import('../views/Europe/Europe-08.vue')
  },
  {
    path: '/Swiss-grandtour-10days',
    name: 'Europe-09',
    component: () => import('../views/Europe/Europe-09.vue')
  },
  {
    path: '/Switzerland-Turkiye-8days',
    name: 'Europe-10',
    component: () => import('../views/Europe/Europe-10.vue')
  },
  {
    path: '/Moscow-5days',
    name: 'moscow-5days',
    component: () => import('../views/Moscow/Moscow-5days.vue')
  },
  {
    path: '/Moscow-St.Petersburg-9days',
    name: 'Moscow-St-Petersburg',
    component: () => import('../views/Moscow/Moscow-St-Petersburg.vue')
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import('../views/contact-us.vue')
  },
  {
    path: '/Visa',
    name: 'Visa-page',
    component: () => import('../views/Visa-page/Visa-page.vue')
  },
  {
    path: '/visa-america',
    name: 'visa-america',
    component: () => import('../views/Visa-page/VisaAmerica.vue')
  },
  {
    path: '/visa-europe',
    name: 'visa-europe',
    component: () => import('../views/Visa-page/VisaEurope.vue')
  },
  {
    path: '/visa-canada',
    name: 'visa-canada',
    component: () => import('../views/Visa-page/VisaCanada.vue')
  },
  {
    path: '/visa-england',
    name: 'visa-england',
    component: () => import('../views/Visa-page/VisaEngland.vue')
  },
  {
    path: '/Visline',
    name: 'Visline',
    component: () => import('../views/Visa-page/Visline.vue')
  },
  {
    path: '/visline/economy',
    name: 'visline-economy',
    component: () => import('../views/Visa-page/VislineEconomy.vue')
  },
  {
    path: '/visline/vip',
    name: 'visline-vip',
    component: () => import('../views/Visa-page/VislineVip.vue')
  },
  {
    path: '/visline/permium',
    name: 'visline-permium',
    component: () => import('../views/Visa-page/VislinePermium.vue')
  },
  {
    path: '/office-protector-customer-interests',
    name: 'office-protector',
    component: () => import('../views/OfficeProtector.vue')
  },
  {
    path: '/tour/:id',
    name: 'tour-slug',
    component: () => import('../views/tour.vue')
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
