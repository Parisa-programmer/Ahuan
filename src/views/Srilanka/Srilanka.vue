<template>
  <div class="mt-sm-12 pt-sm-12">
    <div class="widthAll relative">
      <v-img class="widthAll backgroundImageTour" height="250" src="@/assets/image/tour/سریلانکا 2000-250 (1).jpg"
        alt="دبی"></v-img>
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
  name: 'SrilankaTour',
  components: {
    MainTourCard

  },
  data: () => ({
    cards: [
      {
        image: require('@/assets/image/tour/srilanka-1.jpg'),
        title: 'تنها پرواز مستقیم به سریلانکا',
        date: '27 و 29 اسفند- 5 و 7 فروردین',
        hotelStar: ' 3 و 4 و 5 ',
        nights: 'مراسم سال نو + 15 دقیقه spa رایگان',
        route: '/SrilankaTour',
        download: require('@/assets/image/tour/Srilanka-tour.jpg')
      },
    ]
  }),
  methods: {

  },
  created() {
    window.scrollTo(0, 0);
    document.title = 'تورهای 1402 سریلانکا'

  }
}
</script>
