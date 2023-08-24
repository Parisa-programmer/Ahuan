<template>
  <div class="mt-6 mt-sm-12 pt-12">
    <v-row class="black" justify="center">
      <div class="indexDiv mt-6">
        <v-row class="mt-md-12 mb-md-12 d-flex d-sm-none">
          <v-col cols="12" md="6" class="order-2 order-md-1">
            <v-row class="heightAll" align="center">
              <div class="px-6 relative">
                <div class="absolute" style="top:-200px;right:-50px;z-index: 1;">
                  <img src="@/assets/image/inverted-commas.png" alt="">
                </div>
                <div style="z-index:222">
                  <h2 class="font-small-title-xs mb-3 white--text">همه چیز درباره‌ی سفر به انگلیس</h2>
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
                  <v-img class="firstImageParent" src="@/assets/image/test/souvenir-ukl.jpg" alt=""
                    style="z-index: 2;"></v-img>
                </div>
              </div>
            </v-row>
          </v-col>
        </v-row>
        <div class="mr-9 d-block d-sm-none pb-12">
          <ul class="mr-4 mr-sm-6 white--text">
            <li class=" my-2 cursorPointer" @click="tab = 0">
              <router-link class="white--text text-decoration-none" to="/england/souvenir">سوغات انگلیس</router-link>
            </li>
            <li class="white--text my-2 cursorPointer">
              <router-link class="white--text text-decoration-none" to="/england/sights">اماکن دیدنی
                انگلیس</router-link>
            </li>
            <li class="white--text my-2 cursorPointer">
              <router-link class="white--text text-decoration-none" to="/england/famous-cities">شهر های معروف
                انگلیس</router-link>
            </li>
            <li class="white--text my-2 cursorPointer" @click="tab = 2">
              <router-link class="white--text text-decoration-none" to="/england/best-cities">بهترین شهرهای
                انگلستان</router-link>
            </li>
            <li class="white--text my-2 cursorPointer" @click="tab = 3">
              <router-link class="white--text text-decoration-none" to="/england/student-cities">شهرهای دانشجویی
                انگلستان</router-link>
            </li>
            <li class="white--text my-2 cursorPointer" @click="tab = 4">
              <router-link class="white--text text-decoration-none" to="/england/restaurants">رستوران‌های معروف
                انگلستان</router-link>
            </li>
            <li class="white--text my-2 cursorPointer" @click="tab = 6">
              <router-link class="white--text text-decoration-none" to="/england/shops">بزرگترین مراکز خرید در
                انگلستان</router-link>
            </li>
            <li class="white--text my-2 cursorPointer" @click="tab = 4">
              <router-link class="white--text text-decoration-none" to="/england/checklist">چک لیست‌های سفر به
                انگلستان</router-link>
            </li>
          </ul>
          <img class="ml-2 ml-md-6 mt-3 d-none d-sm-block" src="@/assets/image/test/country-5.jpg" width="250" alt="">
        </div>
        <b class="travelTitle widthAll white--text d-none d-sm-block">همه چیز درباره‌ی سفر به انگلیس</b>
        <v-row class="mt-6 mt-sm-12 mb-12 mb-md-0 imagesParent relative d-none d-sm-flex" align="center">
          <div>
            <img class="ml-2 ml-md-6" src="@/assets/image/test/country-6.jpg" alt="انگلیس">
          </div>
          <div>
            <img class="d-block mb-2 mb-md-6" src="@/assets/image/test/country-4.jpg" alt="انگلیس" />
            <img class="d-block mb-2 mb-md-6" src="@/assets/image/test/country-3.jpg" alt="انگلیس" />
          </div>
          <div class="">
            <img class="d-block mb-2 mb-md-6 mx-2 mx-md-6" src="@/assets/image/test/country-2.jpg" alt="انگلیس" />
            <img class="d-block mb-2 mb-md-6 mx-2 mx-md-6" src="@/assets/image/test/country-1.jpg" alt="انگلیس" />
          </div>
          <div class="">
            <ul class="mr-4 mr-sm-6 white--text">
              <li class=" my-2 cursorPointer" @click="tab = 0">
                <router-link class="white--text text-decoration-none" to="/england/souvenir">سوغات انگلیس</router-link>
              </li>
              <li class="white--text my-2 cursorPointer">
                <router-link class="white--text text-decoration-none" to="/england/sights">اماکن دیدنی
                  انگلیس</router-link>
              </li>
              <li class="white--text my-2 cursorPointer">
                <router-link class="white--text text-decoration-none" to="/england/famous-cities">شهر های معروف
                  انگلیس</router-link>
              </li>
              <li class="white--text my-2 cursorPointer" @click="tab = 2">
                <router-link class="white--text text-decoration-none" to="/england/best-cities">بهترین شهرهای
                  انگلستان</router-link>
              </li>
              <li class="white--text my-2 cursorPointer" @click="tab = 3">
                <router-link class="white--text text-decoration-none" to="/england/student-cities">شهرهای دانشجویی
                  انگلستان</router-link>
              </li>
              <li class="white--text my-2 cursorPointer" @click="tab = 4">
                <router-link class="white--text text-decoration-none" to="/england/restaurants">رستوران‌های معروف
                  انگلستان</router-link>
              </li>
              <li class="white--text my-2 cursorPointer" @click="tab = 6">
                <router-link class="white--text text-decoration-none" to="/england/shops">بزرگترین مراکز خرید در
                  انگلستان</router-link>
              </li>
              <li class="white--text my-2 cursorPointer" @click="tab = 4">
                <router-link class="white--text text-decoration-none" to="/england/checklist">چک لیست‌های سفر به
                  انگلستان</router-link>
              </li>
            </ul>
            <img class="ml-2 ml-md-6 mt-3 d-none d-sm-block" src="@/assets/image/test/country-5.jpg" width="250" alt="">
          </div>
        </v-row>
      </div>
    </v-row>
    <!-- <div class="my-12" style="height:100px;width:100px;background-color: green;">
      <div style="height:80px;width:80px;background-color: red;"></div>
    </div> -->
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
.imagesParent {
  justify-content: end;
}

.imagesParent img {
  width: 250px
}

.travelTitle {
  font-size: 60px;
}

.textTitle {
  max-width: 650px !important
}

@media (min-width:1264px) and (max-width:1400px) {
  .imagesParent img {
    width: 200px
  }

  .travelTitle {
    font-size: 50px;
  }
}

@media (min-width:850px) and (max-width:1263px) {
  .imagesParent img {
    width: 150px
  }

  .imagesParent img:nth-child(2) {
    display: none;
  }

  .travelTitle {
    font-size: 40px;
  }
}

@media (min-width:600px) and (max-width:849px) {
  .imagesParent {
    justify-content: center;
  }

  .imagesParent>div>img {
    display: none !important;
  }

  .imagesParent>div:nth-child(1) img {
    display: block !important;
    width: 200px
  }

  .travelTitle {
    font-size: 30px;
  }
}

@media (max-width:599px) {
  .imagesParent {
    justify-content: start;
  }

  .imagesParent>div>img {
    display: none !important;
  }


  .imagesParent>div:nth-child(1) img {
    display: block !important;
    width: 100%
  }

  .imagesParent ul {
    position: absolute;
    right: 0;
    bottom: 0
  }

  li>a {
    /* background: linear-gradient(94deg, rgba(255, 255, 255, 0) 0%, rgb(89 89 89 / 76%) 14%, rgb(89 89 89) 100%); */
  }

  .travelTitle {
    font-size: 22px;
  }
}
</style>

<script>
export default {
  name: 'about-england',
  data() {
    return {
      tab: 6
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