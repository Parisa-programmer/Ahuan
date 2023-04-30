<template>
  <div class="mt-sm-12 pt-sm-12">
    <div class="widthAll relative">
      <v-img class="widthAll backgroundImageTour" height="250" src="@/assets/image/tour/مسکو 2000-250 (1).jpg"
        alt="برج ایفل فرانسه"></v-img>
      <div class="tourImageBackground"></div>
    </div>
    <v-row justify="center">
      <div class="my-6 indexDiv">
        
        <main-tour-card :cards="cards" />
        
      </div>
    </v-row>
  </div>
</template>


<script>
import MainTourCard from '@/components/MainTourCard.vue'
export default {
  name: 'MoscowTour',
  components: {
    MainTourCard

  },
  data: () => ({
    cards: [
      {
        image: require('@/assets/image/tour/rus-1.jpg'),
        title: 'مسکو (5 روز)',
        airline: 'ماهان',
        hotelStar: '4  و 5 ',
        nights: 'شروع قیمت از 22.700.000 تومان',
        route: '/Moscow-5days',
        download: '@/assets/image/پکیج مسکو.jpg',
        date:'روز‌های پرواز: همه‌روزه'
      },
      {
        image: require('@/assets/image/tour/rus-1.jpg'),
        title: 'مسکو+سنت پترزبورگ (9 روز)',
        airline: 'ماهان',
        hotelStar: '4',
        nights: 'شروع قیمت از 48.900.000 تومان',
        route: '/Moscow-St.Petersburg-9days',
        download: '@/assets/image/پکیج مسکو.jpg',
        date:'تاریخ حرکت: 11 خرداد (تور گروهی)'
      },
    ]
  }),
  methods: {

  },
  created() {
    document.title = 'تورهای 1402 مسکو'

  }
}
</script>
