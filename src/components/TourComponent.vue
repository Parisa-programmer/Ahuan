<template>
  <div v-cloak class="widthAll">
    <!-- test -->
    <v-row justify="center" align="center" class="mb-6 mt-12">
      <div
        class="mt-1 ml-4"
        style="height: 3px; width: 60px; background-color: #bf0000 !important"
      ></div>
      <h3 class="font-small-title-xs">تور های ویژه آهوان</h3>
      <div
        class="mt-1 mr-4"
        style="height: 3px; width: 60px; background-color: #bf0000 !important"
      ></div>
    </v-row>
    <v-row justify="center" class="">
      <div class="indexDiv">
        <v-row>
          <v-col
            v-for="(tourItem, i) in tours"
            :key="i"
            cols="12"
            sm="6"
            :md="tourItem.cols * 4"
            class="pa-0"
            :class="(mainPage && i > 6) || i == 2 ? 'd-none' : ''"
          >
            <div
              class="relative cursorPointer my-2 ml-sm-2 rounded-lg hideOver"
              :data-aos="i % 2 == 0 ? 'fade-left' : 'fade-right'"
              data-aos-duration="2000"
            >
              <router-link :to="'/tour/' + tourItem.id">
                <v-img
                  height="220"
                  width="100%"
                  :src="
                    'https://panel.ahuantours.com/uploads/' + tourItem.col1Image
                  "
                  alt=""
                ></v-img>
                <v-row
                  align="end"
                  justify="start"
                  class="absolute heightAll widthAll maintourImages"
                  style="z-index: 2; top: 0; cursor: pointer"
                >
                  <div>
                    <v-row justify="center">
                      <h1
                        class="white--text"
                        style="text-shadow: 0 0 2px black"
                      >
                        تور {{ tourItem.name }}
                      </h1>
                    </v-row>
                    <v-row>
                      <span
                        class="white--text ma-2"
                        style="text-shadow: 0 0 2px black"
                        >شروع قیمت از {{ tourItem.price }}</span
                      >
                    </v-row>
                  </div>
                </v-row>
              </router-link>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" v-if="mainPage">
          <router-link to="/tour-page">
            <v-btn
              color="#bf0000"
              class="px-sm-9 mt-2 mt-sm-4 float-left font-small-xs"
              dark
              >مشاهده بیشتر</v-btn
            >
          </router-link>
        </v-row>
      </div>
    </v-row>
    <!-- main -->
    <!-- <v-row justify="center" align="center" class="mb-6 mt-12">
      <div class="mt-1 ml-4 " style="height:3px;width:60px;background-color: #bf0000 !important;"></div>
      <h3 class="font-small-title-xs">تور های ویژه آهوان</h3>
      <div class="mt-1 mr-4 " style="height:3px;width:60px;background-color: #bf0000 !important;"></div>
    </v-row>
    <v-row justify="center" class="">
      <div class="indexDiv">
        <v-row>
          <v-col cols="12" sm="6" md="4" class="pa-0">
            <div class="relative cursorPointer my-2 ml-sm-2 rounded-lg hideOver" data-aos="fade-right"
              data-aos-duration="2000">
              <router-link to="/tour/Istanbul">
                <v-img height="220" src="../assets/image/tourSlider/0001.jpg" alt=""></v-img>
                <v-row align="end" justify="start" class="absolute heightAll widthAll maintourImages"
                  style="z-index: 2;top: 0;cursor:pointer">
                  <div>
                    <v-row justify="center">
                      <h1 class="white--text" style="text-shadow: 0 0 2px black;">تور ترکیه</h1>
                    </v-row>
                    <v-row>
                      <span class="white--text ma-2" style="text-shadow: 0 0 2px black;">شروع قیمت از 5.550 میلیون</span>
                    </v-row>
                  </div>
                </v-row>
              </router-link>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="8" class="pa-0">
            <div class="relative cursorPointer my-2 mr-sm-2 rounded-lg hideOver" data-aos="fade-top"
              data-aos-duration="2000">
              <router-link to="/tour/Europe">
                <v-img height="220" src="../assets/image/tourSlider/0004.jpg" alt=""></v-img>
                <v-row align="end" justify="start" class="absolute heightAll widthAll maintourImages"
                  style="z-index: 2;top: 0;cursor:pointer">
                  <div>
                    <v-row justify="center">
                      <h1 class="white--text" style="text-shadow: 0 0 2px black;">تور اروپا</h1>
                    </v-row>
                    <v-row>
                      <span class="white--text ma-2" style="text-shadow: 0 0 2px black;">شروع قیمت از 1.490 یورو</span>
                    </v-row>
                  </div>
                </v-row>
              </router-link>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4" class="pa-0">
            <div class="relative cursorPointer my-2 ml-sm-2 rounded-lg hideOver" data-aos="fade-left"
              data-aos-duration="2000">
              <router-link to="/tour/Dubai">
                <v-img height="220" src="../assets/image/tourSlider/0003.jpg" alt=""></v-img>
                <v-row align="end" justify="start" class="absolute heightAll widthAll maintourImages"
                  style="z-index: 2;top: 0;cursor:pointer">
                  <div>
                    <v-row justify="center">
                      <h1 class="white--text" style="text-shadow: 0 0 2px black;">تور دبی</h1>
                    </v-row>
                    <v-row>
                      <span class="white--text ma-2" style="text-shadow: 0 0 2px black;">شروع قیمت از 12.200 میلیون</span>
                    </v-row>
                  </div>
                </v-row>
              </router-link>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4" class="pa-0">
            <div class="relative cursorPointer my-2 mr-sm-2 ml-md-2 rounded-lg hideOver" data-aos="fade-right"
              data-aos-duration="2000">
              <router-link to="/tour/Srilanka">
                <v-img height="220" src="../assets/image/tourSlider/0002.jpg" alt=""></v-img>
                <v-row align="end" justify="start" class="absolute heightAll widthAll maintourImages"
                  style="z-index: 2;top: 0;cursor:pointer">
                  <div>
                    <v-row justify="center">
                      <h1 class="white--text" style="text-shadow: 0 0 2px black;">تور سریلانکا</h1>
                    </v-row>
                    <v-row>
                      <span class="white--text ma-2" style="text-shadow: 0 0 2px black;">شروع قیمت از 39.900 میلیون</span>
                    </v-row>
                  </div>
                </v-row>
              </router-link>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="4" class="pa-0">
            <div class="relative cursorPointer my-2 mr-md-2 rounded-lg hideOver" data-aos="fade-right"
              data-aos-duration="2000">
              <router-link to="/tour/Moscow">
                <v-img height="220" src="../assets/image/tourSlider/0006.jpg" alt=""></v-img>
                <v-row align="end" justify="start" class="absolute heightAll widthAll maintourImages"
                  style="z-index: 2;top: 0;cursor:pointer">
                  <div>
                    <v-row justify="center">
                      <h1 class="white--text" style="text-shadow: 0 0 2px black;">تور روسیه</h1>
                    </v-row>
                    <v-row>
                      <span class="white--text ma-2" style="text-shadow: 0 0 2px black;">شروع قیمت از 29.500 میلیون</span>
                    </v-row>
                  </div>
                </v-row>
              </router-link>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="8" class="scroll-reveal box left pa-0">
            <div class="relative cursorPointer my-2 ml-sm-2 rounded-lg hideOver" data-aos="fade-top"
              data-aos-duration="2000">
              <router-link to="/tour/Thailand">
                <v-img height="220" src="../assets/image/tourSlider/0007.jpg" alt=""></v-img>
                <v-row align="end" justify="start" class="absolute heightAll widthAll maintourImages"
                  style="z-index: 2;top: 0;cursor:pointer">
                  <div>
                    <v-row justify="center">
                      <h1 class="white--text" style="text-shadow: 0 0 2px black;">تور تایلند</h1>
                    </v-row>
                    <v-row>
                      <span class="white--text ma-2" style="text-shadow: 0 0 2px black;">شروع قیمت از 96.000 میلیون</span>
                    </v-row>
                  </div>
                </v-row>
              </router-link>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4" class="pa-0">
            <div class="relative cursorPointer my-2 mr-sm-2 rounded-lg hideOver" data-aos="fade-left"
              data-aos-duration="2000">
              <router-link to="/tour/Thailand-Malaysia">
                <v-img height="220" src="../assets/image/tourSlider/0008.jpg" alt=""></v-img>
                <v-row align="end" justify="start" class="absolute heightAll widthAll maintourImages"
                  style="z-index: 2;top: 0;cursor:pointer">
                  <div>
                    <v-row justify="center">
                      <h1 class="white--text" style="text-shadow: 0 0 2px black;">تایلند-مالزی</h1>
                    </v-row>
                    <v-row>
                      <span class="white--text ma-2" style="text-shadow: 0 0 2px black;">شروع قیمت از 5.550 میلیون</span>
                    </v-row>
                  </div>
                </v-row>
              </router-link>

            </div>
          </v-col>
        </v-row>
      </div>
    </v-row> -->
  </div>
</template>

<style scoped>
.maintourImages {
  opacity: 0;
  transition: all 400ms;
}

.maintourImages:hover {
  opacity: 1;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7231267507002801) 0%,
    rgba(0, 0, 0, 0.08727240896358546) 100%
  );
}

.v-expansion-panel:before {
  box-shadow: 0 0 0;
}

@media (max-width: 960px) {
  .maintourImages {
    opacity: 1;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7231267507002801) 0%,
      rgba(0, 0, 0, 0.08727240896358546) 100%
    );
  }
}
</style>

<script>
import "@/assets/css/main.css";
import axios from "axios";
axios.defaults.headers.common["Client-Token"] = "Ahuan-Wapi?123";

// import style from '../css/main.css'
export default {
  name: "TourComponent",
  data: () => ({
    tours: [],
  }),
  props: {
    mainPage: {
      default: false,
    },
  },
  methods: {
    getTours() {
      let self = this;
      axios
        .get("https://panel.ahuantours.com/api/package/groups")
        .then(function (response) {
          let res = response.data.map((x) => {
            return {
              id: x.id,
              col1Image: x.col1Image,
              name: x.name,
              // route: '/tour' + '/Istanbul' + '/' + name,
              route: "/tour/" + x.name.replace(/\s/g, "-"),
              price: x.price,
              cols: x.cols,
            };
          });
          self.$emit("getGroups", res);
          self.tours = res;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },
  created() {
    this.getTours();
  },
};
</script>
