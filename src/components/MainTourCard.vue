<template>
  <div class="widthAll">
    <v-row justify="center">
      <div class="px-2 px-md-12 mt-4 pa-2 widthAll d-inline-block" v-for="(item, i) in cards" :key="i">
        <v-row class="white rounded-lg hoverCard">
          <v-col cols="12" sm="6" lg="3">
            <v-row justify="center" class="rounded-lg hideOver">
              <div style="height:100px;width:250px">
                <img class="rounded-lg tourImage" :src="item.image" height="100%" :alt="item.title" width="100%">
              </div>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6" lg="3">
            <v-row justify="center">
              <h4 class="" style="font-family:Byekan !important">{{ item.title }} </h4>
            </v-row>
            <v-row v-if="item.airline && item.airline == 'ترکیش-ماهان-ایران-ایر'" justify="center" class="mt-1 mt-sm-4">
              <img src="@/assets/image/tour/Turkish_Airlines_logo2.png" class="mx-2" width='70' alt="">
              <img src="@/assets/image/tour/airtour-logo.jpg" class="mx-2" width='40' alt="">
              <img src="@/assets/image/tour/mahan-logo.jpg" class="mx-2" width='60' alt="">
            </v-row>
            <v-row v-else-if="item.airline && item.airline == 'قشم-ایر-ماهان-ایران-ایر'" justify="center"
              class="mt-1 mt-sm-4">
              <img src="@/assets/image/iranairtour.png" width='40' alt="ایرتور">
              <img src="@/assets/image/tour/gheshm-logo.jpg" width='80' alt="قشم ایر">
              <img src="@/assets/image/tour/mahan-logo.jpg" width='60' alt="ماهان ایر">
            </v-row>
            <v-row v-else-if="item.airline == 'کویتی'" justify="center" class="mt-1 mt-sm-3">
              <img src="@/assets/image/tour/Kuwait_Airlines_logo2.png" width='100' alt="">
            </v-row>
            <v-row v-else-if="item.airline" justify="center" class="mt-2">
              <img v-if="item.airline == 'امارات'" src="@/assets/image/tour/emarat_logo.png" width='100' alt="">
              <img v-if="item.airline == 'ترکیش'" src="@/assets/image/tour/Turkish_Airlines_logo.png" width='150' alt="">
              <img v-if="item.airline == 'ماهان'" src="@/assets/image/tour/mahan-logo2.jpg" class="mt-2" width='130'
                alt="">
            </v-row>
            <v-row v-if="item.date" justify="center">
              <span class="body-2 mt-2 mt-sm-3 widthAll text-center" style="font-family:Byekan !important">{{ item.date
              }}</span>
              <br v-if="item.date2">
              <span v-if="item.date2" class="body-2 " style="font-family:Byekan !important">{{ item.date2
              }}</span>
            </v-row>

          </v-col>
          <div class="d-block d-sm-none widthAll px-12 mx-1">
            <v-divider class="d-block d-sm-none mx-12 my-1"></v-divider>
          </div>
          <v-divider class="d-none d-lg-block my-6" vertical></v-divider>
          <v-col v-if="!item.nights3" cols="12" sm="6" lg="3">
            <v-row justify="center" class="mt-sm-4">
              هتل {{ item.hotelStar }} ستاره
            </v-row>
            <v-row justify="center" class="mt-1 mt-sm-4">
              <span class="caption grey--text text--darken-3 " style="font-family:Byekan !important"> {{ item.nights
              }} </span>
            </v-row>
            <v-row v-if="item.nights2" justify="center" class="">
              <span class="caption grey--text text--darken-3 " style="font-family:Byekan !important"> {{
                item.nights2 }} </span>
            </v-row>
          </v-col>
          <v-col v-else cols="12" sm="6" lg="3">
            <v-row justify="center" class="mt-sm-1">
              هتل های 4 و 5 ستاره
            </v-row>
            <v-row justify="center" class="mt-1">
              <span class="caption grey--text text--darken-3 " style="font-family:Byekan !important">زوریخ + 1شب
                اینترلاکن+1شب مونتخو+</span>
            </v-row>
            <v-row justify="center" class="">
              <span class="caption grey--text text--darken-3 " style="font-family:Byekan !important"> 1شب زرمات + 1شب
                سن موریس + 1شب لوگانو + </span>
            </v-row>
            <v-row justify="center" class="">
              <span class="caption grey--text text--darken-3 " style="font-family:Byekan !important">1شب لوسرن + 1شب
                زوریخ + 2شب استانبول</span>
            </v-row>
          </v-col>
          <div class="d-block d-sm-none widthAll px-12 mx-1">
            <v-divider class="d-block d-sm-none mx-12 my-1"></v-divider>
          </div>
          <v-divider class="d-none d-sm-block my-6" vertical></v-divider>
          <v-col cols="12" sm="6" lg="3">
            <v-row v-if="item.AllDayFlight" justify="center">
              <h4 class="mt-2 mt-sm-3">روزهای پرواز: همه روزه</h4>
            </v-row>
            <v-row justify='center'>
              <a :href="item.route" class="text-decoration-none mt-5">
                <v-btn color="red" class="pr-5" :outlined="!item.AllDayFlight" dark>مشاهده جزئیات</v-btn>
              </a>
            </v-row>
            <v-row v-if="item.download" justify='center'>
              <a :href="download" class="text-decoration-none">
                <v-btn class="px-8 mt-2" color="red" dark>دانلود پکیج</v-btn>
              </a>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-row>
  </div>
</template>


<script>


export default {
  name: 'MainTourCard',
  components: {
  },
  watch: {

  },
  props: {
    cards: {
      type: Array,
      require: true
    }
  },
  data: () => ({

  }),
  methods: {

  },
  created() {

  },
}
</script>
