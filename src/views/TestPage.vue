<template class="">
  <div class="mt-12 pt-12">
    <!-- <circle-slider :cards="magazineItems" /> -->
    <!--  test tours -->
    <v-row justify="center" align="center" class="mb-6 mt-12">
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
    </v-row>
  </div>
</template>

<style scoped>
.maintourImages {
  opacity: 0;
  transition: all 400ms;
}

.maintourImages:hover {
  opacity: 1;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7231267507002801) 0%, rgba(0, 0, 0, 0.08727240896358546) 100%);
}

.v-expansion-panel:before {
  box-shadow: 0 0 0;
}

@media (max-width: 960px) {
  .maintourImages {
    opacity: 1;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7231267507002801) 0%, rgba(0, 0, 0, 0.08727240896358546) 100%);
  }
}
</style>


<script>
import '@/assets/css/main.css'
import axios from 'axios'
axios.defaults.headers.common['Client-Token'] = 'Ahuan-Wapi?123'
// import CircleSlider from '@/components/CircleSlider.vue'

// axios.defaults.headers.common['Client-Token'] = 'Ahuan-Wapi?123'
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
  data() {
    return {
      // magazineItems: [
      //   {
      //     image: require('@/assets/image/magazine-turkiye.jpg'),
      //     title: 'جاذبه های استانبول',
      //     text: 'تور استانبول، به دلیل خدمات تفریحی‌ای که برای افراد به همراه داره، می‌تونه به شما در روند تجربه یک سفر متفاوت کمک کنه. تور استانبول از تمام شهرهای ایران، در میان تورهای پرطرفداری قرار می‌گیره که هزینه نسبتا مناسبی برای افراد...',
      //     link: '/tour/Istanbul'
      //   },
      //   {
      //     image: require('@/assets/image/magazine-urope.jpg'),
      //     title: 'اروپا و جذابیت‌های آن',
      //     text: 'سفر با تور اروپا بدون شک یکی از زیباترین و بهترین تجربیات زندگی هر فرد می‌باشد. این قاره یکی از مقاصد زیبا برای سفر است که در سالهای اخیر به یکی از محبوب‌ترین مقاصد توریستی جهان تبدیل‌شده‌است. در بین تمامی مردم جهان...',
      //     link: '/tour/Europe'
      //   },
      //   {
      //     image: require('@/assets/image/magazine-dubai.jpg'),
      //     title: 'جاذبه های دبی',
      //     text: 'دبی یکی از شهرهای بزرگ و پرطرفدار امارات متحده عربی است که درواقع یک شهر لاکچری و مدرن در بین تمام شهرهای دنیا می‌باشد.بدلیل کوتاه بودن مسافت پرواز و همسایگی با این کشور نه تنها منطقه خاورمیانه، بلکه در سراسر جهان...',
      //     link: '/tour/Dubai'
      //   },
      //   {
      //     image: require('@/assets/image/magazine-thailand.jpg'),
      //     title: 'تور تایلند',
      //     text: 'کشور تایلند نه تنها برای توریست های ایرانی بلکه برای توریست های سراسر جهان جذابیت دارد بلکه با خرید تور تایلند از پارک های طبیعی و زیبای این کشور از جمله: پارک ملی کائو یای، پارک پانک سیدا و پارک ملی تا پرایا و موارد دیگر...',
      //     link: '/tour/Thailand'
      //   },
      //   {
      //     image: require('@/assets/image/magazine-dubai.jpg'),
      //     title: 'جاذبه های دبی',
      //     text: 'دبی یکی از شهرهای بزرگ و پرطرفدار امارات متحده عربی است که درواقع یک شهر لاکچری و مدرن در بین تمام شهرهای دنیا می‌باشد.بدلیل کوتاه بودن مسافت پرواز و همسایگی با این کشور نه تنها منطقه خاورمیانه، بلکه در سراسر جهان...',
      //     link: '/tour/Dubai'
      //   },
      // ],
      tours: []
    }
  },
  components: {
    // CircleSlider
  },
  computed: {},
  methods: {
    getTours() {
      let self = this
      axios.get('https://panel.ahuantours.com/api/package/groups')
        .then(function (response) {
          let res = response.data.map((x) => {
            return {
              id: x.id,
              col1Image: x.col1Image,
              name: x.name,
              // route: '/tour' + '/Istanbul' + '/' + name,
              route: '/tour/' + x.name.replace(/\s/g, '-'),
              price: x.price,
              cols: x.cols
            };
          });
          self.tours = res
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
  },
  mounted() {
    // this.getTours()
  }
  // 3975
  // 30475
}

</script>