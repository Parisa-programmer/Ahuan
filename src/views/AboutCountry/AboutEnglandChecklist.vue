<template>
  <div class="mt-6 mt-sm-12 pt-12">
    <div class="widthAll relative">
      <div class="absolute" id="about-england" style="top: -100px;"></div>
      <v-row justify="center" align="center" class="">
        <div class="indexDiv">
          <v-row class="mt-md-12 mb-md-12">
            <v-col cols="12" md="6" class="order-2 order-md-1">
              <v-row class="heightAll" align="center">
                <div class="px-sm-6 relative widthAll">
                  <div class="absolute" style="top:-200px;right:-50px;z-index: 1;">
                    <img src="@/assets/image/inverted-commas.png" alt="">
                  </div>
                  <div style="z-index:222">
                    <h2 class="font-small-title-xs mb-12">چک لیست‌های سفر به انگلستان</h2>
                    <v-row justify="start" class="mt-6 mt-sm-12">
                      <a :href="require('@/assets/image/نکات-قبل-از-سفر.jpg')" download>
                        <v-btn outlined class="px-12" color="red" dark>نکات قبل از سفر</v-btn>
                      </a>
                    </v-row>
                    <v-row justify="center" class="mt-2">
                      <a :href="require('@/assets/image/نکات-حین-سفر.jpg')" download>
                        <v-btn outlined class="px-12" color="red" dark>نکات حین سفر</v-btn>
                      </a>
                    </v-row>
                    <v-row justify="end" class="mt-3">
                      <a :href="require('@/assets/image/نکات-پایان-سفر.jpg')" download>
                        <v-btn outlined class="px-12" color="red" dark>نکات بعد از سفر</v-btn>
                      </a>
                    </v-row>
                  </div>
                </div>
              </v-row>
            </v-col>
            <v-col cols="12" md="6" class="order-1 order-md-2">
              <v-row justify="center" class="mt-12">
                <div class="widthAll relative">
                  <div class="absolute" style="width:90%;height:80%;left:-50px;top:-50px;z-index:1;background:#bf0000">
                  </div>
                  <div class="widthAll " style="box-shadow: 0 0px 12px #c2c2c2;">
                    <v-img class="firstImageParent" src="@/assets/image/test/england_homework_gnome.jpg" alt=""
                      style="z-index: 2;"></v-img>
                  </div>
                </div>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </v-row>
    </div>
    <v-row justify="center">
      <div class="indexDiv mt-6 mt-lg-12 mb-12">
        <router-link to="/visline/need">
          <img class="widthAll rounded-xl d-none d-md-block" src="@/assets/image/ویزلاین2.jpg" alt="">
          <img class="widthAll rounded-xl d-block d-md-none" src="@/assets/image/ویزلاین2 موبایل.jpg" alt="">
        </router-link>
      </div>
    </v-row>
  </div>
</template>

<style scoped>
.firstImageParent {
  height: 650px
}

.travelTitle {
  font-size: 60px;
}

.textTitle {
  max-width: 650px !important
}

@media (min-width:960px) and (max-width:1400px) {
  .firstImageParent {
    height: 500px
  }
}

@media (max-width:959px) {
  .firstImageParent {
    height: 300px
  }
}

@media (max-width:599px) {
  p {
    font-size: 16px !important;
    line-height: 36px;
  }
}
</style>

<script>
export default {
  name: 'about-england-best-cities',
  data() {
    return {
    }
  },
  components: {
  },
  computed: {

  },
  methods: {

  },
  created() {
    window.scrollTo(0, 0);
  },
}
</script>