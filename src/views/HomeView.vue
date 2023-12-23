<template>
  <div class="home mt-sm-12 pt-sm-10">
    <v-row justify="center" class="d-none d-sm-flex relative grey lighten-3">
      <img
        src="../assets/image/main-page-image1.jpg"
        :style="{ opacity: selectedSection.title == 'پرواز' ? '1' : '0' }"
        class="mt-1"
        width="100%"
        alt=""
        style="transition: all 500ms"
      />
      <img
        src="../assets/image/main-page-image2.jpg"
        :style="{ opacity: selectedSection.title == 'هتل' ? '1' : '0' }"
        class="mt-1 absolute"
        width="100%"
        alt=""
        style="transition: all 500ms"
      />
      <img
        src="../assets/image/main-page-image3.jpg"
        :style="{ opacity: selectedSection.title == 'تور' ? '1' : '0' }"
        class="mt-1 absolute"
        width="100%"
        alt=""
        style="transition: all 500ms"
      />
      <img
        src="../assets/image/main-page-image4.jpg"
        :style="{ opacity: selectedSection.title == 'آهوان' ? '1' : '0' }"
        class="mt-1 absolute"
        width="100%"
        alt=""
        style="transition: all 500ms"
      />
      <img
        src="../assets/image/main-page-image5.jpg"
        :style="{ opacity: selectedSection.title == 'اتوبوس' ? '1' : '0' }"
        class="mt-1 absolute"
        width="100%"
        alt=""
        style="transition: all 500ms"
      />
      <img
        src="../assets/image/main-page-image6.jpg"
        :style="{ opacity: selectedSection.title == 'قطار' ? '1' : '0' }"
        class="mt-1 absolute"
        width="100%"
        alt=""
        style="transition: all 500ms"
      />
      <img
        src="../assets/image/main-page-image7.jpg"
        :style="{ opacity: selectedSection.title == 'بیمه' ? '1' : '0' }"
        class="mt-1 absolute"
        width="100%"
        alt=""
        style="transition: all 500ms"
      />
    </v-row>
    <input-main @changeActiveSection="changeSection($event)" page="main" />
    <!-- visline -->
    <v-row justify="center">
      <div class="indexDiv d-none d-md-block">
        <!-- <router-link to="/visa">
          <img class="rounded-xl widthAll" :src="require('@/assets/image/ویزلاین.jpg')" alt="">
        </router-link> -->
        <v-carousel height="300" hide-delimiters class="rounded-xl" cycle>
          <router-link to="/visline/need">
            <v-carousel-item
              :src="require('@/assets/image/ویزلاین.jpg')"
            ></v-carousel-item>
          </router-link>
          <v-carousel-item
height="300"
            :src="require('@/assets/image/slider-whole-world.jpg')"
          ></v-carousel-item>
        </v-carousel>
      </div>
      <div class="indexDiv d-block d-md-none">
        <!-- <router-link to="/visa">
          <img class="rounded-xl widthAll" :src="require('@/assets/image/ویزلاین موبایل.jpg')" alt="">
        </router-link> -->
        <v-carousel
          height="unset"
          min-height="280"
          hide-delimiters
          class="rounded-xl"
          cycle
        >
          <router-link to="/visline/need">
            <v-carousel-item
              :src="require('@/assets/image/ویزلاین موبایل.jpg')"
            ></v-carousel-item>
          </router-link>
          <v-carousel-item
            :src="require('@/assets/image/slider-whole-world-mobile.jpg')"
          ></v-carousel-item>
        </v-carousel>
      </div>
    </v-row>
    <!-- tours -->
    <tour-component :mainPage="true" />
    <!-- about us -->
    <v-row justify="center" align="center" class="my-2 my-sm-6">
      <div class="indexDiv">
        <v-row>
          <v-col cols="12" md="6" class="">
            <div
              class="d-inline-block red mt-1 ml-1 ml-sm-4"
              style="height: 3px; width: 10%"
            ></div>
            <h3 class="d-inline-block font-small-title-xs">درباره ما</h3>
            <div
              class="d-inline-block red mt-1 mr-1 mr-sm-4"
              style="height: 3px; width: 10%"
            ></div>
            <div paragraph>
              <p class="text-justify mt-3 mt-sm-6 font-small-xs paragraph">
                شرکت خدمات مسافرتی آهوان در سال 1348 با هدف ترویج فرهنگ گردشگری
                و ایجاد تسهیلات برای مسافران افتتاح گردید و طی 5 دهه حضور فعال
                در این عرصه همواره سعی بر افزایش کیفیت و بهبود خدمات خود داشته
                است.
              </p>
              <p class="text-justify font-small-xs paragraph">
                خدمات متمایز شرکت خدمات مسافرتی آهوان هتل چهار ستاره تفریحی
                واقامتی آهوان چابکسر است که به موازات ساحل زیبای دریای خزر و
                امتداد جنگل های بی نظیر و ...
                <!-- سرسبز شمالی ایران و در مرز استان های خوش آب و هوای گیلان و مازندران واقع است.هتل چهار ستاره آهوان با بیش از 18 هکتار مساحت از وسیع ترین مناطق اقامتی ایران است که دارای 212 واحد اقامتی شامل 18 واحد ویلایی 2 خوابه،32 واحد واحد ویلایی یک خوابه و 162 واحد آپارتمانی 2 تخته تا 6 تخته است.همواره از زمان محول شدن مسئولیت این مجموعه به شرکت آهوان سعی بر این شده است که خدمات هتل به روز و در حد استانداردهای بین المللی ارائه شود. -->
              </p>
            </div>
            <v-btn
              color="#bf0000"
              class="px-sm-9 mt-2 mt-sm-4 float-left font-small-xs"
              dark
              >مشاهده بیشتر</v-btn
            >
          </v-col>
          <v-col cols="12" md="6" class="">
            <v-row justify="center">
              <img
                class="main-page-sectionImage"
                src="../assets/image/درباره-ما.png"
                alt=""
              />
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-row>
    <!-- question -->
    <!-- <question-answer :questions="questions" /> -->
    <v-row justify="center" align="center" class="my-2 my-sm-6">
      <div class="indexDiv">
        <v-row>
          <v-col cols="12" md="6" class="order-2 order-md-1">
            <v-row justify="center">
              <img
                class="main-page-sectionImage"
                src="../assets/image/باشگاه-مشتریان.png"
                alt=""
              />
            </v-row>
          </v-col>
          <v-col cols="12" md="6" class="order-1 order-md-2">
            <div
              class="d-inline-block mt-1 ml-1 ml-sm-4"
              style="
                height: 3px;
                width: 10%;
                background-color: #bf0000 !important;
              "
            ></div>
            <h3 class="d-inline-block font-small-title-xs">
              باشگاه مشتریان آهوان
            </h3>
            <div
              class="d-inline-block mt-1 mr-1 mr-sm-4"
              style="
                height: 3px;
                width: 10%;
                background-color: #bf0000 !important;
              "
            ></div>
            <div paragraph>
              <p class="text-justify mt-3 mt-sm-6 font-small-xs paragraph">
                ما به خرید شما احترام می‌گذاریم و آن را ارج می‌نهیم. جایگاه ویژه
                خریداران و مشتریان وفادار ما اینجاست. تمامی اعضای این باشگاه با
                توجه به خریدشان، امتیازات نقره‌ای/ برنز و طلایی را اخذ می‌کنند و
                به خدمات بیشتر با نرخ ویژه‌تر و جایگاه بهتر دست می‌یابند.
              </p>
              <p class="text-justify font-small-xs paragraph">
                به محض ثبت نام شما در سایت آهوان به مرحله نقره‌ای دست پیدا
                خواهید کرد و هرچه پروفایل خود را تکمیل‌تر نمایید به درجات بیشتری
                دسترسی پیدا خواهید کرد و دست یافتن به سایر درجات برنز و طلایی
                راحت‌تر می‌شود.
                <!-- سرسبز شمالی ایران و در مرز استان های خوش آب و هوای گیلان و مازندران واقع است.هتل چهار ستاره آهوان با بیش از 18 هکتار مساحت از وسیع ترین مناطق اقامتی ایران است که دارای 212 واحد اقامتی شامل 18 واحد ویلایی 2 خوابه،32 واحد واحد ویلایی یک خوابه و 162 واحد آپارتمانی 2 تخته تا 6 تخته است.همواره از زمان محول شدن مسئولیت این مجموعه به شرکت آهوان سعی بر این شده است که خدمات هتل به روز و در حد استانداردهای بین المللی ارائه شود. -->
              </p>
            </div>
            <v-btn
              color="#bf0000"
              to="/customer-club"
              class="px-sm-9 mt-2 mt-sm-4 float-left font-small-xs"
              dark
              >مشاهده بیشتر</v-btn
            >
          </v-col>
        </v-row>
      </div>
    </v-row>
    <v-row justify="center" align="center" class="my-2 my-sm-6">
      <div class="indexDiv">
        <v-row>
          <v-col cols="12" md="6">
            <div
              class="d-inline-block mt-1 ml-1 ml-sm-4"
              style="
                height: 3px;
                width: 10%;
                background-color: #bf0000 !important;
              "
            ></div>
            <h3 class="d-inline-block font-small-title-xs">
              دفتر حافظ منافع مشتری
            </h3>
            <div
              class="d-inline-block mt-1 mr-1 mr-sm-4"
              style="
                height: 3px;
                width: 10%;
                background-color: #bf0000 !important;
              "
            ></div>
            <div paragraph>
              <p class="text-justify mt-3 mt-sm-6 font-small-xs paragraph">
                دفتر حافظ منافع مشتریان به مسافرین اطمینان خاطر می‌دهد که صدای
                آنان توسط برگزارکنندگان تور شنیده می‌شود و دغدغه‌های آنان در
                طراحی و اجرای پکیج‌ها لحاظ می‌گردد.
              </p>
              <p class="text-justify font-small-xs paragraph">
                شما در هر لحظه از شبانه ­روز می‌توانید نظرات، انتقادات و
                پیشنهادات خود را از طریق فرم ذیل به اطلاع تصمیم گیران پروژه
                برسانید و در حین لذت بردن از تورهای ویژه آهوان نیز نمایندگان تام
                الختیار این برند را همگام و همراه در کنار خود داشته باشید.
                <!-- سرسبز شمالی ایران و در مرز استان های خوش آب و هوای گیلان و مازندران واقع است.هتل چهار ستاره آهوان با بیش از 18 هکتار مساحت از وسیع ترین مناطق اقامتی ایران است که دارای 212 واحد اقامتی شامل 18 واحد ویلایی 2 خوابه،32 واحد واحد ویلایی یک خوابه و 162 واحد آپارتمانی 2 تخته تا 6 تخته است.همواره از زمان محول شدن مسئولیت این مجموعه به شرکت آهوان سعی بر این شده است که خدمات هتل به روز و در حد استانداردهای بین المللی ارائه شود. -->
              </p>
            </div>
            <router-link to="/office-protector-customer-interests">
              <v-btn
                color="#bf0000"
                class="px-sm-9 mt-2 mt-sm-4 float-left font-small-xs"
                dark
                >مشاهده بیشتر</v-btn
              >
            </router-link>
          </v-col>
          <v-col cols="12" md="6">
            <v-row justify="center">
              <img
                class="main-page-sectionImage"
                src="../assets/image/حافظ-منافع-مشتری.png"
                alt=""
              />
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-row>
    <!-- magazine -->
    <circle-slider :cards="magazineItems" />
    <!--  -->
    <v-row class="pb-6 pt-12 white" justify="center">
      <v-sheet max-width="100%" class="indexDiv transparent">
        <v-row justify="center" align="center" class="mb-2 mb-sm-4 mb-md-12">
          <div
            class="d-inline-block red mt-1 ml-1 ml-sm-4"
            style="height: 3px; width: 50px"
          ></div>
          <h3 class="text-center d-inline-block font-small-title-xs">
            شرکت‌های همکار
          </h3>
          <div
            class="d-inline-block red mt-1 mr-1 mr-sm-4"
            style="height: 3px; width: 50px"
          ></div>
        </v-row>
        <v-skeleton-loader class="mt-4" type="image">
          <div class="widthAll slick-logo slick-parent relative my-6">
            <slick :options="slickOptions2" class="colleagueSlick hideArrowSm">
              <div>
                <a style="width: fit-content" href="https://www.okcs.com">
                  <v-row justify="center">
                    <img
                      height="90"
                      class="header-logo-1"
                      src="../assets/image/کوروش.png"
                      alt=""
                    />
                  </v-row>
                </a>
              </div>
              <div>
                <a
                  style="width: fit-content"
                  href="https://www.holidayvillahotels.com/"
                >
                  <v-row justify="center">
                    <img
                      class="header-logo-1"
                      src="../assets/image/header logo 1.jpg"
                      alt=""
                    />
                  </v-row>
                </a>
              </div>
              <div>
                <a style="width: fit-content" href="https://all.accor.com">
                  <v-row justify="center">
                    <img
                      class="header-logo-2"
                      src="../assets/image/header logo 2.jpg"
                      alt=""
                    />
                  </v-row>
                </a>
              </div>
              <div>
                <a
                  style="width: fit-content"
                  href="https://www.tejaratbank.ir/"
                >
                  <v-row justify="center">
                    <img
                      class="header-logo-3"
                      src="../assets/image/header logo 3.jpg"
                      alt=""
                    />
                  </v-row>
                </a>
              </div>
              <div>
                <a style="width: fit-content" href="https://alemadi.com.qa/">
                  <v-row justify="center">
                    <img
                      class="header-logo-4"
                      src="../assets/image/header logo 4.jpg"
                      alt=""
                    />
                  </v-row>
                </a>
              </div>
              <div>
                <a style="width: fit-content" href="https://www.mcth.ir/">
                  <v-row justify="center">
                    <img
                      class="header-logo-5"
                      src="../assets/image/header logo 5.jpg"
                      alt=""
                    />
                  </v-row>
                </a>
              </div>
              <div>
                <a style="width: fit-content" href="/">
                  <v-row justify="center">
                    <img
                      class="header-logo-6"
                      src="../assets/image/header logo 6.jpg"
                      alt=""
                    />
                  </v-row>
                </a>
              </div>
            </slick>
          </div>
        </v-skeleton-loader>
      </v-sheet>
    </v-row>
  </div>
</template>

<style>
/* Arrows */
.slick-prev,
.slick-next {
  font-size: 0;
  line-height: 0;

  position: absolute;
  top: 50%;

  display: block;

  width: 20px;
  height: 20px;
  padding: 0;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);

  cursor: pointer;

  color: transparent;
  border: none;
  outline: none;
  background: transparent;
}

.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus {
  color: transparent;
  outline: none;
  background: transparent;
}

.slick-prev:hover:before,
.slick-prev:focus:before,
.slick-next:hover:before,
.slick-next:focus:before {
  opacity: 1;
}

.slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before {
  opacity: 0.25;
}

.slick-prev:before,
.slick-next:before {
  font-family: "slick";
  font-size: 20px;
  line-height: 1;

  opacity: 0.75;
  color: rgb(0, 0, 0);
  font-size: 25px;
  font-weight: bolder;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slick-prev {
  right: -42px;
}

[dir="rtl"] .slick-prev {
  left: -25px;
  right: auto;
}

.slick-prev:before {
  content: "→";
}

[dir="rtl"] .slick-prev:before {
  content: "←";
  color: red;
}

.slick-next {
  left: -25px;
}

[dir="rtl"] .slick-next {
  left: auto;
  right: -25px;
}

.slick-next:before {
  content: "←";
}

[dir="rtl"] .slick-next:before {
  content: "→";
}

/* Dots */
.slick-dotted.slick-slider {
  margin-bottom: 30px;
}

.slick-dots {
  position: absolute;
  bottom: -25px;

  display: block;

  width: 100%;
  padding: 0;
  margin: 0;

  list-style: none;

  text-align: center;
}

.slick-dots li {
  position: relative;

  display: inline-block;

  width: 20px;
  height: 20px;
  margin: 0 5px;
  padding: 0;

  cursor: pointer;
}

.slick-dots li button {
  font-size: 0;
  line-height: 0;

  display: block;

  width: 20px;
  height: 20px;
  padding: 5px;

  cursor: pointer;

  color: transparent;
  border: 0;
  outline: none;
  background: transparent;
}

.slick-dots li button:hover,
.slick-dots li button:focus {
  outline: none;
}

.slick-dots li button:hover:before,
.slick-dots li button:focus:before {
  opacity: 1;
}

.slick-dots li button:before {
  font-family: "slick";
  font-size: 6px;
  line-height: 20px;

  position: absolute;
  top: 0;
  right: 0;

  width: 20px;
  height: 20px;

  content: "•";
  text-align: center;

  opacity: 0.25;
  color: black;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slick-dots li.slick-active button:before {
  opacity: 0.75;
  color: black;
}

.slick-arrow {
  z-index: 9;
}

@media (max-width: 599px) {
  .header-logo-5 {
    width: 75px;
    margin-top: 16px;
  }

  .header-logo-6 {
    width: 84px;
    margin-top: 17px;
  }

  .header-logo-1 {
    width: 156px;
    margin-top: 10px;
  }

  .header-logo-2 {
    width: 185px;
  }

  .header-logo-3 {
    width: 87px;
  }

  .header-logo-4 {
    width: 140px;
  }
}
</style>

<style scoped>
@media (max-width: 600px) {
  .main-page-sectionImage {
    width: 90%;
  }
}
</style>

<script>
import InputMain from "@/components/InputMain.vue";
// import QuestionAnswer from '@/components/QuestionAnswer.vue'
import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";
const $ = require("jquery");
import axios from "axios";
import TourComponent from "@/components/TourComponent.vue";
import CircleSlider from "@/components/CircleSlider.vue";
axios.defaults.headers.common["Client-Token"] = "Ahuan-Wapi?123";

export default {
  name: "HomeView",
  metaInfo: {
    title: "خدمات گردشگری آهوان",
    meta: [{ name: "description", content: "" }],
  },
  components: {
    InputMain,
    // QuestionAnswer,
    Slick,
    TourComponent,
    CircleSlider,
  },
  watch: {
    showAlert() {
      if (this.showAlert) {
        setTimeout(() => {
          this.showAlert = false;
        }, 5000);
      }
    },
  },
  data: () => ({
    groups: [],
    selectedSection: {
      icon: "mdi-airplane",
      title: "پرواز",
      active: true,
    },
    magazineItems: [
      {
        image: require("../assets/image/magazine-turkiye.jpg"),
        title: "جاذبه‌های استانبول",
        text: "تور استانبول، به دلیل خدمات تفریحی‌ای که برای افراد به همراه داره، می‌تونه به شما در روند تجربه یک سفر متفاوت کمک کنه. تور استانبول از تمام شهرهای ایران، در میان تورهای پرطرفداری قرار می‌گیره که هزینه نسبتا مناسبی برای افراد...",
        link: "/tour/1",
      },
      {
        image: require("../assets/image/magazine-urope.jpg"),
        title: "جاذبه‌های اروپا",
        text: "سفر با تور اروپا بدون شک یکی از زیباترین و بهترین تجربیات زندگی هر فرد می‌باشد. این قاره یکی از مقاصد زیبا برای سفر است که در سالهای اخیر به یکی از محبوب‌ترین مقاصد توریستی جهان تبدیل‌شده‌است. در بین تمامی مردم جهان...",
        link: "/tour/1017",
      },
      {
        image: require("../assets/image/magazine-maldives.jpg"),
        title: "جاذبه‌های مالدیو",
        text: "تور مالدیو برای آنهایی که عاشق سکوت و طبیعت آرام اقیانوس هستند، تفاوتی با رویا ندارد. زیرا با سفر به مالدیو و اقامت در جزایر بی‌نظیرش، هر روز با منظره اقیانوس می‌خوابید و بیدار می‌شوید و محو زیبایی طبیعت رویایی مالدیو...",
        link: "/tour/1027",
      },
      {
        image: require("../assets/image/magazine-thailand.jpg"),
        title: "تور تایلند",
        text: "کشور تایلند نه تنها برای توریست های ایرانی بلکه برای توریست های سراسر جهان جذابیت دارد بلکه با خرید تور تایلند از پارک های طبیعی و زیبای این کشور از جمله: پارک ملی کائو یای، پارک پانک سیدا و پارک ملی تا پرایا و موارد دیگر...",
        link: "/tour/1044",
      },
      {
        image: require("../assets/image/magazine-dubai.jpg"),
        title: "جاذبه های دبی",
        text: "دبی یکی از شهرهای بزرگ و پرطرفدار امارات متحده عربی است که درواقع یک شهر لاکچری و مدرن در بین تمام شهرهای دنیا می‌باشد.بدلیل کوتاه بودن مسافت پرواز و همسایگی با این کشور نه تنها منطقه خاورمیانه، بلکه در سراسر جهان...",
        link: "/tour/1026",
      },
    ],
    windowWidth: 0,
    slickOptions: {},
    slickOptions2: {},
  }),
  methods: {
    changeSection(event) {
      this.selectedSection = event;
    },
    getWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
  created() {
    window.scrollTo(0, 0);
    this.getWidth();
    this.slickOptions = {
      slidesToShow:
        this.windowWidth > 1400
          ? 3
          : this.windowWidth <= 1400 && this.windowWidth > 960
          ? 3
          : this.windowWidth <= 960 && this.windowWidth > 599
          ? 2
          : 1,
      slidesToScroll: 1,
      rtl: true,
      autoplay: true,
      autoplaySpeed: 2500,
    };
    this.slickOptions2 = {
      slidesToShow:
        this.windowWidth > 1400
          ? 4
          : this.windowWidth <= 1400 && this.windowWidth > 960
          ? 3
          : this.windowWidth <= 960 && this.windowWidth > 599
          ? 2
          : 2,
      slidesToScroll: 1,
      rtl: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2500,
      accessibility: true,
    };
  },
};
</script>
