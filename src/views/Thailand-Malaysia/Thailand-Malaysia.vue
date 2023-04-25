<template>
  <div class="mt-sm-12 pt-sm-12">
    <div class="widthAll relative">
      <v-img class="widthAll backgroundImageTour" height="250" src="@/assets/image/tour/تایلند-مالزی 2000-250 (1).jpg"
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
        image: require('@/assets/image/tour/thai-mal-001.jpg'),
        title: 'مالزی + تایلند (10 شب)',
        airline: 'کویتی',
        date: 'تاریخ رفت: 1 فروردین',
        hotelStar: ' 5 ',
        nights: '3 شب کوالالامپور + 5شب پوکت +',
        nights2: '2 شب بانکوک',
        route: '/tour/Thailand-Malaysia/تور-ترکیبی-تایلند-مالزی',
        download: '@/assets/image/tour/تایلند-مالزی.jpeg'
      },
    ]
  }),
  methods: {

  },
  created() {
    document.title = 'تورهای 1402 تایلند-مالزی'
  }
}
</script>
 