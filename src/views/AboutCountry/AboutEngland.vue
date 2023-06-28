<template>
  <div class="mt-6 mt-sm-12 pt-12">
    <v-row class="black" justify="center">
      <div class="indexDiv mt-6">
        <b class="travelTitle widthAll d-block white--text ">همه چیز درباره‌ی سفر به انگلیس</b>
        <v-row class="mt-6 mt-sm-12 mb-12 mb-md-0 imagesParent relative" align="center">
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
            </ul>
            <img class="ml-2 ml-md-6 mt-3" src="@/assets/image/test/country-5.jpg" width="250" alt="">
          </div>
        </v-row>
      </div>
    </v-row>
    <!-- <div class="my-12" style="height:100px;width:100px;background-color: green;">
      <div style="height:80px;width:80px;background-color: red;"></div>
    </div> -->
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
    background: linear-gradient(94deg, rgba(255, 255, 255, 0) 0%, rgb(89 89 89 / 76%) 14%, rgb(89 89 89) 100%);
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