<template>
  <div class="widthAll">
    <v-row justify="center">
      <div class="px-2 px-md-12 mt-4 pa-2 widthAll d-inline-block" v-for="(item, i) in cards" :key="i">
        <v-row class="white rounded-lg hoverCard">
          <v-col cols="12" sm="6" lg="3">
            <v-row justify="center" class="rounded-lg hideOver">
              <div style="height:100px;width:250px">
                <img class="rounded-lg tourImage" :src="'https://panel.ahuantours.com/uploads/' + item.image"
                  height="100%" :alt="item.title" width="100%">
              </div>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6" lg="3">
            <v-row justify="center" :class="!item.title2 ? 'mt-3' : ''">
              <h4 class="widthAll text-center" style="font-family:Byekan !important">{{ item.title }} </h4>
              <h4 v-if="item.title2" class="widthAll text-center" style="font-family:Byekan !important">{{ item.title2 }}
              </h4>
            </v-row>
            <v-row :class="!item.date ? 'mt-4' : ''" justify="center" align="center">
              <img class="mx-1" v-for="(airline, k) in item.airline" :key="k" height="40"
                :src="airline == 'IranAir' ? require('@/assets/image/airlines/iranair.png') : airline == 'Mahan Air' ? require('@/assets/image/airlines/mahan.png') : airline == 'Turkish Airlines' ? require('@/assets/image/airlines/turkish.png') : airline == 'Emirates Airlines' ? require('@/assets/image/airlines/emirates.png') : ''"
                alt="">
            </v-row>
            <v-row v-if="item.date" justify="center">
              <span :class="!item.title2 ? ' mt-2 mt-sm-3' : ''" class="body-2 widthAll text-center"
                style="font-family:Byekan !important">{{ item.date
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
              <span class="caption grey--text text--darken-3 text-center " style="font-family:Byekan !important"> {{
                item.nights
              }} </span>
            </v-row>
            <v-row v-if="item.nights2" justify="center" class="">
              <span class="caption grey--text text--darken-3 text-center" style="font-family:Byekan !important"> {{
                item.nights2 }} </span>
            </v-row>
          </v-col>
          <div class="d-block d-sm-none widthAll px-12 mx-1">
            <v-divider class="d-block d-sm-none mx-12 my-1"></v-divider>
          </div>
          <v-divider class="d-none d-sm-block my-6" vertical></v-divider>
          <v-col cols="12" sm="6" lg="3">
            <v-row justify='center'>
              <router-link :to="item.route" class="text-decoration-none">
                <v-btn color="red" class="pr-5 mt-2" :outlined="!item.AllDayFlight" dark>مشاهده جزئیات</v-btn>
              </router-link>
            </v-row>
            <v-row justify='center'>
              <a :href="item.download && 'https://panel.ahuantours.com/uploads/' + item.download" download
                class="text-decoration-none">
                <v-btn class="px-8 mt-2" color="red" :disabled="item.download == null ? true : false" dark>دانلود
                  پکیج</v-btn>
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
  name: 'MainTourCard2',
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
    window.scrollTo(0, 0);
  },
}
</script>
