<template>
  <div v-cloak class="widthAll">
    <v-row>
      <div class="widthAll  mb-2">
        <router-link to="/visline">
          <img class="rounded-xl widthAll d-md-block" src="@/assets/image/visline gif.gif" alt="">
        </router-link>

        <!-- <v-btn color="red" class="widthAll py-8 mt-12" dark>
                      <v-icon>mdi-text-box-edit-outline</v-icon>
                      سنجش شانس اخذ ویزا
                    </v-btn> -->
      </div>
      <v-card class="widthAll mt-lg-4 pa-3 relative hideOver">
        <div class="widthAll absolute"
          style="height:5px;right:127px;top:20px;border-bottom: 3px dotted #d8d8d8;z-index:1"></div>
        <h3 style="z-index:2">مطالب مرتبط</h3>
        <router-link to="/about-england" class="text-decoration-none">
          <v-row class="mt-6 cardItemsSide" align="center">
            <span>
              <img src="@/assets/image/englandChecklist.jpg" class="rounded-lg float-right" height="63" width="86" alt="">
              <v-row class="pr-2 mt-6">
                <b style="font-family: Byekan !important;    font-size: 11px;">
                  همه چیز درباره‌ی سفر به انگلیس
                </b>
              </v-row>
            </span>
          </v-row>
        </router-link>
        <v-divider class="mx-6 mt-5"></v-divider>
        <router-link to="/england/shops" class="text-decoration-none">
          <v-row class="mt-6 cardItemsSide" align="center">
            <span>
              <img src="@/assets/image/tour/moscow-003.jpg" class="rounded-lg float-right" height="63" width="86" alt="">
              <v-row class="pr-2 mt-6">
                <b style="font-family: Byekan !important;    font-size: 11px;">
                  برترین مرکز خریدهای انگلیس
                </b>
              </v-row>
            </span>
          </v-row>
        </router-link>
        <v-divider class="mx-6 mt-5"></v-divider>
        <router-link to="/england/souvenir" class="text-decoration-none">
          <v-row class="mt-6 cardItemsSide" align="center">
            <span>
              <img src="@/assets/image/england souvenir.jpg" class="rounded-lg float-right" height="63" width="86" alt="">
              <v-row class="pr-2 mt-6">
                <b style="font-family: Byekan !important;    font-size: 11px;">
                  لیست سوغاتی های انگلیس
                </b>
              </v-row>
            </span>
          </v-row>
        </router-link>
        <v-divider class="mx-6 mt-5"></v-divider>
        <router-link to="/england/restaurants" class="text-decoration-none">
          <v-row class="mt-6 cardItemsSide" align="center">
            <span>
              <img src="@/assets/image/tour/moscow-003.jpg" class="rounded-lg float-right" height="63" width="86" alt="">
              <v-row class="pr-2 mt-4">
                <b style="font-family: Byekan !important;    font-size: 11px;">
                  حرفه ای ترین رستوران های انگلیس
                </b>
              </v-row>
            </span>
          </v-row>
        </router-link>
        <v-divider class="mx-6 mt-5"></v-divider>
        <router-link to="/england/sights" class="text-decoration-none">
          <v-row class="mt-6 cardItemsSide" align="center">
            <span>
              <img src="@/assets/image/englad Must see places.jpg" class="rounded-lg float-right" height="63" width="86"
                alt="">
              <v-row class="pr-2 mt-4">
                <b style="font-family: Byekan !important;    font-size: 11px;">
                  اماکن دیدنی انگلیس
                </b>
              </v-row>
            </span>
          </v-row>
        </router-link>
        <v-divider class="mx-6 mt-5"></v-divider>
        <router-link to="/england/famous-cities" class="text-decoration-none">
          <v-row class="mt-6 cardItemsSide" align="center">
            <span>
              <img src="@/assets/image/tour/moscow-003.jpg" class="rounded-lg float-right" height="63" width="86" alt="">
              <v-row class="pr-2 mt-4">
                <b style="font-family: Byekan !important;    font-size: 11px;">
                  شهر های معروف انگلیس
                </b>
              </v-row>
            </span>
          </v-row>
        </router-link>
        <router-link to="/england/best-cities" class="text-decoration-none">
          <v-row class="mt-6 cardItemsSide" align="center">
            <span>
              <img src="@/assets/image/test/england_homework_gnome.jpg" class="rounded-lg float-right" height="63"
                width="86" alt="">
              <v-row class="pr-2 mt-4">
                <b style="font-family: Byekan !important;    font-size: 11px;">
                  بهترین شهر های انگلیس
                </b>
              </v-row>
            </span>
          </v-row>
        </router-link>
        <v-divider class="mx-6 mt-5"></v-divider>
        <router-link to="/england/student-cities" class="text-decoration-none">
          <v-row class="mt-6 cardItemsSide" align="center">
            <span>
              <img src="@/assets/image/test/country-10.jpg" class="rounded-lg float-right" height="63" width="86" alt="">
              <v-row class="pr-2 mt-4">
                <b style="font-family: Byekan !important;    font-size: 11px;">
                  شهر های دانشجویی انگلیس
                </b>
              </v-row>
            </span>
          </v-row>
        </router-link>
      </v-card>
    </v-row>
  </div>
</template>

<style scoped>
label {
  font-weight: bold;
}

.cards:hover {
  box-shadow: 0 0 5px rgb(150, 150, 150);
}

.cardItemsSide b {
  color: #757575
}

.cardItemsSide:hover b {
  color: #ff0000
}
</style>
  


<script>


export default {
  name: 'AboutEnglandComponent',
  components: {
  },
  watch: {

  },
  props: {

  },
  data: () => ({
  }),
  methods: {

  },
  created() {
  },
}
</script>
