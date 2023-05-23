<template>
  <div class="mt-6 mt-sm-12 pt-12">
    <v-row justify="center" align="center" class="">
      <div class="">
        <v-row class="parent">
          <img src="@/assets/image/test/اسلایدر.jpg" class="widthAll cursorPointer" alt=""
            style="box-shadow: 0 0 28px #a5a5a5;">
        </v-row>
        <!-- <div class="widthAll relative">
          <img class="widthAll" src="@/assets/image/test/football background.jpg" alt="">
          <div class="widthAll heightAll absolute red" style="top:0">hii</div>
        </div> -->

        <!-- <v-parallax class="mt-12" src="@/assets/image/test/football background.jpg">

        </v-parallax> -->
        <v-row justify="center" class="parent py-6 py-sm-12 white">
          <h2 class="relative widthAll text-center font-small-title-xs">
            جایگاه و دسته‌بندی تماشاچیان در ورزشگاه المپیک آتاتورک
          </h2>
          <div class="title-child mt-4" style="height:3px;background-color: #bf0000 !important;width:300px">
          </div>
        </v-row>

        <!-- <v-row justify="center" class="parent py-6 py-sm-12 white">
          <p>
            درباره بلیط استادیومالمپیک آتاتورک 
            نام ورزشگاه : ورزشگاه المپیک آتاتورکتیم میزبان : استانبول
          </p>
        </v-row> -->
        <v-row justify="center" class="parent pb-12 white">
          <div class="indexDiv">
            <v-row justify="center">
              <v-col cols="6" sm="6" md="3" data-aos="fade-right" data-aos-duration="2000">
                <v-row justify="center" class="px-1 px-sm-4">
                  <img src="@/assets/image/test/کتکگوری 1.jpg" class="hoverSize" alt="">
                  <div class="pr-3 pr-sm-12 pl-3 pl-sm-6 categoryBox mt-6 py-1 py-sm-3 body-1 text-sm-h6"
                    style="border-left: 15px solid #ea9f00;">
                    Category
                    1
                    <v-row align="center" class="" style="white-space: nowrap;">از
                      <span class=" body-1 text-sm-h6 mx-1 ">3500</span>
                      <v-icon size="18" color="black">mdi-currency-eur</v-icon>
                    </v-row>
                  </div>
                </v-row>
              </v-col>
              <v-col cols="6" sm="6" md="3" data-aos="fade-right" data-aos-duration="2000">
                <v-row justify="center" class="px-1 px-sm-4">
                  <img src="@/assets/image/test/کتگوری 2.jpg" class="hoverSize" alt="">
                  <div class="pr-3 pr-sm-12 pl-3 pl-sm-6 categoryBox mt-6 py-1 py-sm-3 body-1 text-sm-h6 "
                    style="border-left: 15px solid #3fd9ae;">
                    Category
                    2
                    <v-row align="center" class="" style="white-space: nowrap;">از
                      <span class="body-1 text-sm-h6 mx-1 ">2500</span>
                      <v-icon size="18" color="black">mdi-currency-eur</v-icon>
                    </v-row>
                  </div>
                </v-row>
              </v-col>
              <v-col cols="6" sm="6" md="3" data-aos="fade-left" data-aos-duration="2000">
                <v-row justify="center" class="px-1 px-sm-4">
                  <img src="@/assets/image/test/کتگوری 3.jpg" class="hoverSize" alt="">
                  <div class="pr-3 pr-sm-12 pl-3 pl-sm-6 categoryBox mt-6 py-1 py-sm-3 body-1 text-sm-h6"
                    style="border-left: 15px solid #00727f;">
                    Category
                    3
                    <v-row align="center" justify="center" class="" style="white-space: nowrap;">از
                      <span class="body-1 text-sm-h6 mx-1 ">2000</span>
                      <v-icon size="18" color="black">mdi-currency-eur</v-icon>
                    </v-row>
                  </div>
                </v-row>
              </v-col>
              <v-col cols="6" sm="6" md="3" data-aos="fade-left" data-aos-duration="2000">
                <v-row justify="center" class="px-1 px-sm-4">
                  <img src="@/assets/image/test/کتگوری 4.jpg" class="hoverSize" alt="">
                  <div class="pr-3 pr-sm-12 pl-3 pl-sm-6 categoryBox mt-6 py-1 py-sm-3 body-1 text-sm-h6"
                    style="border-left: 15px solid #00f6ff;">
                    Category
                    4
                    <v-row align="center" class="" style="white-space: nowrap;">از
                      <span class="body-1 text-sm-h6 mx-1 ">1800</span>
                      <v-icon size="18" color="black">mdi-currency-eur</v-icon>
                    </v-row>
                  </div>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-row>
        <v-row justify="center" class="parent py-6 py-sm-12 grey lighten-2" style="background:#150035">
          <h2 class="relative widthAll text-center font-small-title-xs">
            درباره بلیط استادیوم المپیک آتاتورک
          </h2>
          <div class="title-child mt-4" style="height:3px;background-color: #bf0000 !important;width:150px">
          </div>
        </v-row>
        <v-row justify="center" class="parent py-6 grey lighten-2" style="background:#150035">
          <div class="indexDiv">
            <v-row class="mb-4">
              <span class="bold ml-2">نام ورزشگاه:</span>
              <span>ورزشگاه المپیک آتاتورک</span>
            </v-row>
            <v-row class="mb-4">
              <span class="bold ml-2">تیم میزبان:</span>
              <span>استانبول بویوكشهير بلدیه اسپور</span>
            </v-row>
            <v-row class="mb-4">
              <span class="bold ml-2">تاریخ افتتاح:</span>
              <span>2002</span>
            </v-row>
            <v-row class="mb-4">
              <span class="bold ml-2">ظرفیت:</span>
              <span>80500</span>
            </v-row>
            <v-row class="mb-4">
              <span class="bold ml-2">آدرس استادیوم المپیک آتاتورک:</span>
              <span>Ziyagökalp Mh., 34306 Istanbul, Turkey</span>
            </v-row>
            <v-row class="mb-4">
              <span class="bold ml-2">مسیرهای ورزشگاه المپیک آتاتورک:</span>
              <br>
              <ul class="widthAll mt-6 mr-6">
                <li>
                  اگر با ماشین سفر کنید، این استادیوم در کنار بزرگراه 3-O قرار دارد. اگرچه
                  سیستم حمل و نقل عمومی استادیوم به خوبی خدمات رسانی نمی کند.
                </li>
                <li class="mt-2">
                  خط اتوبوس 146 T در فاصله کوتاهی با پای پیاده توقف می کند.
                </li>
                <li class="mt-2">
                  خط اتوبوس 146 T در فاصله کوتاهی با پای پیاده توقف می کند.
                </li>
              </ul>
            </v-row>
            <v-row class="mb-4">
              <p class="answerText">
                <span class="bold ml-2">توضیحات استادیوم:</span>
                بزرگترین ورزشگاه ترکیه با ظرفیت استانبول Büyüksehir Belediyespor است و به نام اولین رئیس جمهور
                نامگذاری شده است. این استادیوم برای پیشنهاد ناموفق ترکیه برای بازی های المپیک 2008 ساخته شد. ظرفیت عظیم
                امکانات مدرن آن باعث شد تا یوفا از عنوان "مجموعه ورزشی 5 ستاره" مطلع شود.
              </p>

            </v-row>
            <!-- تیم میزبان استانبول بویوكشهير بلدیه
            اسپور تاریخ افتتاح: 2002 ظرفیت 80500
            آدرس استادیوم المپیک آتاتورک
            Ziyagökalp Mh., 34306 Istanbul, Turkey
            مسیرهای ورزشگاه المپیک آتاتورک با ماشین سفر کنید، این استادیوم در کنار بزرگراه 3-0 قرار دارد. اگرچه
            سیستم حمل و نقل عمومی است دیو دیوم به خوبی خدمات رسانی نمی کند؟ خط اتوبوس 146 T در فاصله کوتاهی با پای پیاده
            توقف می کند. توضیحات استادیوم: بزرگترین ورزشگاه ترکیه با ظرفیت استانبول Büyüksehir Belediyespor است و به نام
            اولین رئیس جمهور نامگذاری شده است. این استادیوم برای پیشنهاد ناموفق ترکیه برای بازی های المپیک 2008 ساخته شد.
            ظرفیت عظیم امکانات مدرن آن باعث شد تا یوفا از عنوان "مجموعه ورزشی 5 ستاره" مطلع شود. -->
          </div>
        </v-row>
        <!-- <v-row justify="center" class="parent py-2 py-sm py-sm-6" style="background:#150035">
          <h2 class="relative widthAll text-center font-small-title-xs white--text">
            نرخ حدودی بلیط بازی فینال
          </h2>
          <div class="title-child mt-4 ml-1 ml-sm-4"
            style="height:3px;background-color: #bf0000 !important;width:150px;transition: all 2s;">
          </div>
        </v-row>
        <v-row justify="center" class="parent py-6 " style="background:#150035">
          <div class="indexDiv">
            <v-row justify="center">
              <v-col cols="6" sm="3">
                <v-row justify="center">
                  <h3 class="red--text text-h6 px-3 py-1" style="border:1px solid red">CAT1</h3>
                </v-row>
                <v-row justify="center" class="bold">
                  <img src="@/assets/image/test/ایکن یورو.png" class="ml-2 ml-sm-1 ml-md-2 ml-lg-3 euroIcon" alt="">
                  <span class="textNormal white--text" style="white-space: nowrap;">شروع نرخ :
                    <span class="text-h6 ml-2 mt-2 white--text">3500</span>
                    <v-icon color="#fff" style="margin-top:-5px">mdi-currency-eur</v-icon>
                  </span>
                </v-row>
              </v-col>
              <v-col cols="6" sm="3">
                <v-row justify="center">
                  <h3 class="red--text text-h6 px-3 py-1" style="border:1px solid red">CAT2</h3>
                </v-row>
                <v-row justify="center" class="bold">
                  <img src="@/assets/image/test/ایکن یورو.png" class="ml-2 ml-sm-1 ml-md-2 ml-lg-3 euroIcon" alt="">
                  <span class="textNormal white--text" style="white-space: nowrap;">شروع نرخ :
                    <span class="text-h6 ml-2 mt-2 white--text">2500</span>
                    <v-icon color="#fff" style="margin-top:-5px">mdi-currency-eur</v-icon>
                  </span>
                </v-row>
              </v-col>
              <v-col cols="6" sm="3">
                <v-row justify="center">
                  <h3 class="red--text text-h6">CAT3</h3>
                </v-row>
                <v-row justify="center" class="bold">
                  <img src="@/assets/image/test/ایکن یورو.png" class="ml-2 ml-sm-1 ml-md-2 ml-lg-3 euroIcon" alt="">
                  <span class="textNormal white--text" style="white-space: nowrap;">شروع نرخ :
                    <span class="text-h6 ml-2 mt-2 white--text">2000</span>
                    <v-icon color="#fff" style="margin-top:-5px">mdi-currency-eur</v-icon>
                  </span>
                </v-row>
              </v-col>
              <v-col cols="6" sm="3">
                <v-row justify="center">
                  <h3 class="red--text text-h6">CAT4</h3>
                </v-row>
                <v-row justify="center" class="bold">
                  <img src="@/assets/image/test/ایکن یورو.png" class="ml-2 ml-sm-1 ml-md-2 ml-lg-3 euroIcon" alt="">
                  <span class="textNormal white--text" style="white-space: nowrap;">شروع نرخ :
                    <span class="text-h6 ml-2 mt-2 white--text">1800</span>
                    <v-icon color="#fff" style="margin-top:-5px">mdi-currency-eur</v-icon>
                  </span>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-row> -->
        <v-row justify="center" class="parent py-4 py-sm-6 py-md-12 white">
          <h2 class="relative widthAll text-center font-small-title-xs">
            هتل‌های پیشنهادی ما در لیگ قهرمانی اروپا
          </h2>
          <div class="title-child mt-4 ml-1 ml-sm-4"
            style="height:3px;background-color: #bf0000 !important;width:200px;transition: all 2s;">
          </div>
        </v-row>
        <v-row justify="center" class="parent pb-12 white">
          <div class="indexDiv">
            <v-row justify="center">
              <v-col cols="12" sm="6" md="3" data-aos="fade-right" data-aos-duration="2000">
                <v-row justify="center" class="px-3 px-sm-1 px-md-2 px-lg-3">
                  <img src="@/assets/image/test/هتل 4 ستاره.png" class="widthAll cursorPointer hoverShaddow rounded-xl"
                    alt="">
                </v-row>
              </v-col>
              <v-col cols="12" sm="6" md="3" data-aos="fade-right" data-aos-duration="2000">
                <v-row justify="center" class="px-3 px-sm-1 px-md-2 px-lg-3">
                  <img src="@/assets/image/test/4 ستاره تاپ.png" class="widthAll cursorPointer hoverShaddow rounded-xl"
                    alt="">
                </v-row>
              </v-col>
              <v-col cols="12" sm="6" md="3" data-aos="fade-left" data-aos-duration="2000">
                <v-row justify="center" class="px-3 px-sm-1 px-md-2 px-lg-3">
                  <img src="@/assets/image/test/4 ستاره لوکس .png" class="widthAll cursorPointer hoverShaddow rounded-xl"
                    alt="">
                </v-row>
              </v-col>
              <v-col cols="12" sm="6" md="3" data-aos="fade-left" data-aos-duration="2000">
                <v-row justify="center" class="px-3 px-sm-1 px-md-2 px-lg-3">
                  <img src="@/assets/image/test/5 ستاره.png" class="widthAll cursorPointer hoverShaddow rounded-xl"
                    alt="">
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-row>
        <v-row justify="center" class="py-6 py-sm-12 darken-4 mb-6" style="background:#150035">
          <div class="indexDiv">
            <v-row justify="center">
              <v-col cols="12" md="6" class="order-2 order-md-1">
                <div class="parent widthAll">
                  <h2 class="mr-3 white--text font-small-title-xs">
                    تاریخچه لیگ قهرمانان اروپا
                  </h2>
                  <div class="title-child mr-3 mt-3"
                    style="bottom:-15px;height:3px;background-color: #fff !important;width:200px">
                  </div>
                </div>
                <p class=" pl-6 mt-4 mt-sm-6 white--text text-justify" style="line-height:26px">
                  مانند بسیاری از رقابت‌های مهم جهان فوتبال،شکل گیری لیگ قهرمانان اروپا نیز ایده یک فرانسوی بود.
                  گابریل هانو،سردبیر نشریه اکیپ با الهام از مسابقات جام باشگاه‌های آمریکای جنوبی،توانست به کمک ژان
                  فران،یوفا را متقاعد کند تا مسابقات جدیدی شکل دهد که متشکل از بهترین تیم های قاره اروپا است.
                  ایده شکل گیری این مسابقات همواره وجود داشت اما اقدام های جدی هانو و فران باعث شد تا سرانجام در سال 1995
                  ، مسابقات جدیدی با نام جام باشگاه های اروپا(European Champion Clubs' Cup) که به اختصار Euroean Cup
                  نامیده می‌شد،شروه به کار کند.
                  فرمت فعلی این رقابت ها به این شکل است که 32 تیم به 8 گروه 4 تیمی تقسیم می‌شوند و از هر گروه 2 تیم راهی
                  مرحله حذفی می‌گردد و در این مرحله بعد از قرعه کشی، 16 تیم صعود کننده به صورت 2 به 2 با یکدیگر بای
                  می‌کنند و سپس 8 تیم برنده و بعد از آن 4 تیم حاضر در نیمه نهایی نیز مجددا قرعه کشی می‌شوند تا در هایت 2
                  تیم به مسابقات فینال راه پیدا کنند.
                </p>
                <v-btn color="#fff" class="rounded-xl px-9 ml-6 bold float-left">دانلود پکیج</v-btn>
                <v-row>
                </v-row>
              </v-col>
              <v-col cols="12" md="6" class="order-1 order-md-2">
                <img class="widthAll" src="@/assets/image/test/عکس بازیکنان.png" alt="">
              </v-col>
            </v-row>
          </div>
        </v-row>
      </div>
    </v-row>

  </div>
</template>

<style scoped>
.categoryBox {
  background-color: #eeeeee;
  border-top: 1px solid rgb(207, 207, 207);
  border-bottom: 1px solid rgb(207, 207, 207);
}

.title-child {
  /* max-width: 80px !important; */
  transition: all 2s;
}

.parent:hover .title-child {
  max-width: unset !important;
}

.hoverSize {
  width: 90%;
  margin: 5% 0
}

.hoverSize:hover {
  width: 100%;
  margin: 0 0
}

@media (min-width:960px) and (max-width:1263px) {
  .textNormal {
    font-size: 14px;
  }

  .euroIcon {
    width: 30px;
  }
}

@media (min-width:775px) and (max-width:959px) {
  .textNormal {
    font-size: 14px;
  }

  .euroIcon {
    width: 25px;
  }
}

@media (min-width:600px) and (max-width:774px) {
  .textNormal {
    font-size: 12px;
  }

  .euroIcon {
    width: 25px;
  }
}

@media (min-width:400px) and (max-width:499px) {
  .textNormal {
    font-size: 13px;
  }

  .euroIcon {
    width: 25px;
  }
}

@media (min-width:350px) and (max-width:399px) {
  .textNormal {
    font-size: 13px;
  }

  .euroIcon {
    width: 25px;
  }
}

@media (min-width:300px) and (max-width:349px) {
  .textNormal {
    font-size: 12px;
  }

  .euroIcon {
    display: none;
  }
}
</style>

<script>

export default {
  name: 'final-tour',
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
  }
}
</script>