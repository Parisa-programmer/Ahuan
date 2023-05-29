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

<style scoped>
.tourImageBackground {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 1;
  background: linear-gradient(to top,
      rgba(0, 0, 0, 0.55) 0,
      rgba(0, 0, 0, 0.55) 1%,
      transparent 56%,
      transparent 74%);
}
</style> 


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
        nights: 'شروع قیمت از 29.500.000 تومان',
        route: '/tour/moscow/Moscow-5days',
        download: require('@/assets/image/پکیج مسکو.jpg'),
        date: 'همه‌روزه بغیر از شنبه‌ها'
      },
      {
        image: require('@/assets/image/tour/rus-1.jpg'),
        title: 'سنت پترزبورگ + مسکو (7 روز)',
        airline: 'ماهان',
        hotelStar: '4',
        nights: 'شروع قیمت از 49.600.000 تومان',
        route: '/tour/moscow/Moscow-St.Petersburg-7days',
        download: require('@/assets/image/پکیج مسکو-سنت پترزبورگ.jpg'),
        date: 'جمعه‌ها (تور گروهی)'
      },
      {
        image: require('@/assets/image/tour/rus-1.jpg'),
        title: 'مسکو + سنت پترزبورگ (10 روز)',
        airline: 'ماهان',
        hotelStar: '4',
        nights: 'شروع قیمت از 53.900.000 تومان',
        route: '/tour/moscow/Moscow-St.Petersburg-9days',
        download: require('@/assets/image/پکیج مسکو-سنت پترزبورگ.jpg'),
        date: 'ویژه 10 خرداد (تور گروهی)'
      },

    ]
  }),
  methods: {

  },
  created() {
    window.scrollTo(0, 0);
    document.title = 'تورهای 1402 مسکو'

  }
}
</script>
