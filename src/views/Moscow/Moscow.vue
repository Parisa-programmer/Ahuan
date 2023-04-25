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
<style></style> 
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
        title: 'مسکو (4 شب)',
        airline: 'ماهان',
        hotelStar: '4  و 5 ',
        nights: 'شروع قیمت از 19.900.000 تومان',
        route: '/Moscow/RUS-1401-Z-017',
        download: '@/assets/image/پکیج مسکو.jpg'
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
