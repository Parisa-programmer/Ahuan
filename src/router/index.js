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
    path: '/tour-page',
    name: 'tour-page',
    component: () => import('../views/TourPage.vue')
  },
  {
    path: '/tour/Istanbul',
    name: 'istanbul',
    component: () => import('../views/Istanbul/Istanbul.vue')
  },
  {
    path: '/tour/Europe',
    name: 'europe',
    component: () => import('../views/Europe/Europe.vue')
  },
  {
    path: '/tour/Dubai',
    name: 'dubai',
    component: () => import('../views/Dubai/Dubai.vue')
  },
  {
    path: '/tour/Srilanka',
    name: 'srilanka',
    component: () => import('../views/Srilanka/Srilanka.vue')
  },
  {
    path: '/tour/srilanka/SrilankaTour',
    name: 'srilanka-tour',
    component: () => import('../views/Srilanka/SrilankaTour.vue')
  },
  {
    path: '/tour/Moscow',
    name: 'moscow',
    component: () => import('../views/Moscow/Moscow.vue')
  },
  {
    path: '/tour/Thailand',
    name: 'thailand',
    component: () => import('../views/Thailand/Thailand.vue')
  },
  {
    path: '/tour/thailand/ThailandTour',
    name: 'thailand-tour',
    component: () => import('../views/Thailand/ThailandTour.vue')
  },
  {
    path: '/tour/Thailand-Malaysia',
    name: 'thailand-Malaysia',
    component: () => import('../views/Thailand-Malaysia/Thailand-Malaysia.vue')
  },
  {
    path: '/tour/thailand/Thailand-Malaysia-10nights',
    name: 'Thailand-Malaysia-10nights',
    component: () => import('../views/Thailand-Malaysia/Thailand-Malaysia-10nights.vue')
  },
  {
    path: '/tour/dubai/dubai-3night',
    name: 'dubai-3night',
    component: () => import('../views/Dubai/Dubai-3-night.vue')
  },
  {
    path: '/tour/dubai/dubai-4night',
    name: 'dubai-4night',
    component: () => import('../views/Dubai/Dubai-4-night.vue')
  },
  {
    path: '/tour/dubai/dubai-5night',
    name: 'dubai-5night',
    component: () => import('../views/Dubai/Dubai-5-night.vue')
  },
  {
    path: '/tour/istanbul/istanbul-3night',
    name: 'istanbul-3night',
    component: () => import('../views/Istanbul/Istanbul-3-night.vue')
  },
  {
    path: '/tour/istanbul/istanbul-4night',
    name: 'istanbul-4night',
    component: () => import('../views/Istanbul/Istanbul-4-night.vue')
  },
  {
    path: '/tour/istanbul/istanbul-5night',
    name: 'istanbul-5night',
    component: () => import('../views/Istanbul/Istanbul-5-night.vue')
  },
  {
    path: '/tour/europe/France-UAE-9days',
    name: 'Europe-01',
    component: () => import('../views/Europe/Europe-01.vue')
  },
  {
    path: '/tour/europe/France-Italy-UAE-9days',
    name: 'Europe-01-01',
    component: () => import('../views/Europe/Europe-11.vue')
  },
  {
    path: '/tour/europe/France-Switzerland-Italy-UAE-14days',
    name: 'Europe-12',
    component: () => import('../views/Europe/Europe-12.vue')
  },
  {
    path: '/tour/europe/Switzerland-Austria-Slovakia-Hungary-Emirates-13days',
    name: 'Europe-13',
    component: () => import('../views/Europe/Europe-13.vue')
  },
  {
    path: '/tour/europe/France-Spain-UAE-11days',
    name: 'Europe-02',
    component: () => import('../views/Europe/Europe-02.vue')
  },
  {
    path: '/tour/europe/Switzerland-France-UAE-11-days',
    name: 'Europe-03-03',
    component: () => import('../views/Europe/Europe-03-2.vue')
  },
  {
    path: '/tour/europe/Switzerland-France-UAE-11days',
    name: 'Europe-03',
    component: () => import('../views/Europe/Europe-03.vue')
  },
  {
    path: '/tour/europe/France-Belgium-Netherlands-UAE-12days',
    name: 'Europe-04',
    component: () => import('../views/Europe/Europe-04.vue')
  },
  {
    path: '/tour/europe/France-Italy-Spain-UAE-14-days',
    name: 'Europe-05-05',
    component: () => import('../views/Europe/Europe-05-2.vue')
  },
  {
    path: '/tour/europe/France-Italy-Spain-UAE-14days',
    name: 'Europe-05',
    component: () => import('../views/Europe/Europe-05.vue')
  },
  {
    path: '/tour/europe/Switzerland-Italy-UAE-10days',
    name: 'Europe-06',
    component: () => import('../views/Europe/Europe-06.vue')
  },
  {
    path: '/tour/europe/Spain-Turkiye-11days',
    name: 'Europe-07',
    component: () => import('../views/Europe/Europe-07.vue')
  },
  {
    path: '/tour/europe/Spain-Italy-Turkey-13days',
    name: 'Europe-08',
    component: () => import('../views/Europe/Europe-08.vue')
  },
  {
    path: '/tour/europe/Swiss-grandtour-10days',
    name: 'Europe-09',
    component: () => import('../views/Europe/Europe-09.vue')
  },
  {
    path: '/tour/europe/Switzerland-Turkiye-8days',
    name: 'Europe-10',
    component: () => import('../views/Europe/Europe-10.vue')
  },
  {
    path: '/tour/moscow/Moscow-5days',
    name: 'moscow-5days',
    component: () => import('../views/Moscow/Moscow-5days.vue')
  },
  {
    path: '/tour/moscow/Moscow-St.Petersburg-9days',
    name: 'Moscow-St-Petersburg',
    component: () => import('../views/Moscow/Moscow-St-Petersburg.vue')
  },
  {
    path: '/tour/moscow/Moscow-St.Petersburg-7days',
    name: 'Moscow-St-Petersburg-7',
    component: () => import('../views/Moscow/Moscow-St-Petersburg-7days.vue')
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import('../views/contact-us.vue')
  },
  {
    path: '/customer-club',
    name: 'customer-club',
    component: () => import('../views/CustomerClub.vue')
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
    path: '/flight',
    name: 'flight-page',
    component: () => import('../views/FlightPage.vue')
  },
  {
    path: '/visline/vip',
    name: 'visline-vip',
    component: () => import('../views/Visa-page/VislineVip.vue')
  },
  {
    path: '/visline/vip/FIT',
    name: 'visline-vip-fit',
    component: () => import('../views/Visa-page/VislineFit')
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
    path: '/final-tour',
    name: 'final-tour',
    component: () => import('../views/FinalTour.vue')
  },
  {
    path: '/tour/:id',
    name: 'tour-slug',
    component: () => import('../views/tour.vue')
  },
  {
    path: '/tour/:id/:name',
    name: 'tour-package',
    component: () => import('../views/TourPackage.vue')
  },
  {
    path: '/test-page',
    name: 'test-page',
    component: () => import('../views/TestPage.vue')
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
