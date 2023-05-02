<template>
  <div class="home mt-sm-12 pt-sm-10">
    <v-row justify="center" class="d-none d-sm-flex relative grey lighten-3">
      <img src="../assets/image/main-page-image1.jpg" :style="{ opacity: selectedSection.title == 'پرواز' ? '1' : '0' }"
        class="mt-1" width="100%" alt="" style="transition: all 500ms;">
      <img src="../assets/image/main-page-image2.jpg" :style="{ opacity: selectedSection.title == 'هتل' ? '1' : '0' }"
        class="mt-1 absolute" width="100%" alt="" style="transition: all 500ms;">
      <img src="../assets/image/main-page-image3.jpg" :style="{ opacity: selectedSection.title == 'تور' ? '1' : '0' }"
        class="mt-1 absolute" width="100%" alt="" style="transition: all 500ms;">
      <img src="../assets/image/main-page-image4.jpg" :style="{ opacity: selectedSection.title == 'آهوان' ? '1' : '0' }"
        class="mt-1 absolute" width="100%" alt="" style="transition: all 500ms;">
      <img src="../assets/image/main-page-image5.jpg" :style="{ opacity: selectedSection.title == 'اتوبوس' ? '1' : '0' }"
        class="mt-1 absolute" width="100%" alt="" style="transition: all 500ms;">
      <img src="../assets/image/main-page-image6.jpg" :style="{ opacity: selectedSection.title == 'قطار' ? '1' : '0' }"
        class="mt-1 absolute" width="100%" alt="" style="transition: all 500ms;">
      <img src="../assets/image/main-page-image7.jpg" :style="{ opacity: selectedSection.title == 'بیمه' ? '1' : '0' }"
        class="mt-1 absolute" width="100%" alt="" style="transition: all 500ms;">
    </v-row>
    <input-main @changeActiveSection="changeSection($event)" />
    <!-- visline -->
    <v-row justify="center">
      <div class="indexDiv">
        <router-link to="/visa">
          <img class="widthAll rounded-xl d-none d-md-block" src="../assets/image/ویزلاین.jpg" alt="">
          <img class="widthAll rounded-xl d-block d-md-none" src="../assets/image/ویزلاین موبایل.jpg" alt="">
        </router-link>
      </div>
    </v-row>
    <!-- tours -->
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
              <router-link to="/Istanbul">
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
              <router-link to="/Europe">
                <v-img height="220" src="../assets/image/tourSlider/0004.jpg" alt=""></v-img>
                <v-row align="end" justify="start" class="absolute heightAll widthAll maintourImages"
                  style="z-index: 2;top: 0;cursor:pointer">
                  <div>
                    <v-row justify="center">
                      <h1 class="white--text" style="text-shadow: 0 0 2px black;">تور اروپا</h1>
                    </v-row>
                    <v-row>
                      <span class="white--text ma-2" style="text-shadow: 0 0 2px black;">شروع قیمت از 1.890 یورو</span>
                    </v-row>
                  </div>
                </v-row>
              </router-link>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4" class="pa-0">
            <div class="relative cursorPointer my-2 ml-sm-2 rounded-lg hideOver" data-aos="fade-left"
              data-aos-duration="2000">
              <router-link to="/Dubai">
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
              <router-link to="/Srilanka">
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
              <router-link to="/Moscow">
                <v-img height="220" src="../assets/image/tourSlider/0006.jpg" alt=""></v-img>
                <v-row align="end" justify="start" class="absolute heightAll widthAll maintourImages"
                  style="z-index: 2;top: 0;cursor:pointer">
                  <div>
                    <v-row justify="center">
                      <h1 class="white--text" style="text-shadow: 0 0 2px black;">تور روسیه</h1>
                    </v-row>
                    <v-row>
                      <span class="white--text ma-2" style="text-shadow: 0 0 2px black;">شروع قیمت از 19.900 میلیون</span>
                    </v-row>
                  </div>
                </v-row>
              </router-link>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="8" class="scroll-reveal box left pa-0">
            <div class="relative cursorPointer my-2 ml-sm-2 rounded-lg hideOver" data-aos="fade-top"
              data-aos-duration="2000">
              <router-link to="/Thailand">
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
              <router-link to="/Thailand-Malaysia">
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
    <!-- about us -->
    <v-row justify="center" align="center" class="my-2 my-sm-6">
      <div class="indexDiv">
        <v-row>
          <v-col cols="12" md="6" class="">
            <div class="d-inline-block red mt-1 ml-1 ml-sm-4 " style="height:3px;width:10%"></div>
            <h3 class="d-inline-block font-small-title-xs">درباره ما</h3>
            <div class="d-inline-block red mt-1 mr-1 mr-sm-4 " style="height:3px;width:10%"></div>
            <div paragraph>
              <p class="text-justify mt-3 mt-sm-6 font-small-xs paragraph">
                شرکت خدمات مسافرتی آهوان در سال 1348 با هدف ترویج فرهنگ گردشگری و ایجاد تسهیلات برای مسافران افتتاح گردید
                و طی 5 دهه حضور فعال در این عرصه همواره سعی بر افزایش کیفیت و بهبود خدمات خود داشته است.
              </p>
              <p class="text-justify font-small-xs paragraph">
                خدمات متمایز شرکت خدمات مسافرتی آهوان هتل چهار ستاره تفریحی واقامتی آهوان چابکسر است که به موازات ساحل
                زیبای دریای خزر و امتداد جنگل های بی نظیر و ...
                <!-- سرسبز شمالی ایران و در مرز استان های خوش آب و هوای گیلان و مازندران واقع است.هتل چهار ستاره آهوان با بیش از 18 هکتار مساحت از وسیع ترین مناطق اقامتی ایران است که دارای 212 واحد اقامتی شامل 18 واحد ویلایی 2 خوابه،32 واحد واحد ویلایی یک خوابه و 162 واحد آپارتمانی 2 تخته تا 6 تخته است.همواره از زمان محول شدن مسئولیت این مجموعه به شرکت آهوان سعی بر این شده است که خدمات هتل به روز و در حد استانداردهای بین المللی ارائه شود. -->
              </p>
            </div>
            <v-btn color="#bf0000" class="px-sm-9 mt-2 mt-sm-4 float-left font-small-xs" dark>مشاهده بیشتر</v-btn>
          </v-col>
          <v-col cols="12" md="6" class="">
            <v-row justify="center">
              <img class="main-page-sectionImage" src="../assets/image/درباره-ما.png" alt="">
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
              <img class="main-page-sectionImage" src="../assets/image/باشگاه-مشتریان.png" alt="">
            </v-row>
          </v-col>
          <v-col cols="12" md="6" class="order-1 order-md-2">
            <div class="d-inline-block mt-1 ml-1 ml-sm-4 "
              style="height:3px;width:10%;background-color: #bf0000 !important;"></div>
            <h3 class="d-inline-block font-small-title-xs">باشگاه مشتریان آهوان</h3>
            <div class="d-inline-block mt-1 mr-1 mr-sm-4 "
              style="height:3px;width:10%;background-color: #bf0000 !important;"></div>
            <div paragraph>
              <p class="text-justify mt-3 mt-sm-6 font-small-xs paragraph">
                ما به خرید شما احترام می‌گذاریم و آن را ارج می‌نهیم.
                جایگاه ویژه خریداران و مشتریان وفادار ما اینجاست.
                تمامی اعضای این باشگاه با توجه به خریدشان، امتیازات نقره‌ای/ برنز و طلایی را اخذ می‌کنند و به خدمات بیشتر
                با نرخ ویژه‌تر و جایگاه بهتر دست می‌یابند.
              </p>
              <p class="text-justify font-small-xs paragraph">
                به محض ثبت نام شما در سایت آهوان به مرحله نقره‌ای دست پیدا خواهید کرد و هرچه پروفایل خود را تکمیل‌تر
                نمایید به درجات بیشتری دسترسی پیدا خواهید کرد و دست یافتن به سایر درجات برنز و طلایی راحت‌تر می‌شود.
                <!-- سرسبز شمالی ایران و در مرز استان های خوش آب و هوای گیلان و مازندران واقع است.هتل چهار ستاره آهوان با بیش از 18 هکتار مساحت از وسیع ترین مناطق اقامتی ایران است که دارای 212 واحد اقامتی شامل 18 واحد ویلایی 2 خوابه،32 واحد واحد ویلایی یک خوابه و 162 واحد آپارتمانی 2 تخته تا 6 تخته است.همواره از زمان محول شدن مسئولیت این مجموعه به شرکت آهوان سعی بر این شده است که خدمات هتل به روز و در حد استانداردهای بین المللی ارائه شود. -->
              </p>
            </div>
            <v-btn color="#bf0000" to="/customer-club" class="px-sm-9 mt-2 mt-sm-4 float-left font-small-xs" dark>مشاهده
              بیشتر</v-btn>
          </v-col>
        </v-row>
      </div>
    </v-row>
    <v-row justify="center" align="center" class="my-2 my-sm-6">
      <div class="indexDiv">
        <v-row>
          <v-col cols="12" md="6">
            <div class="d-inline-block mt-1 ml-1 ml-sm-4 "
              style="height:3px;width:10%;background-color: #bf0000 !important;"></div>
            <h3 class="d-inline-block font-small-title-xs">دفتر حافظ منافع مشتری</h3>
            <div class="d-inline-block mt-1 mr-1 mr-sm-4 "
              style="height:3px;width:10%;background-color: #bf0000 !important;"></div>
            <div paragraph>
              <p class="text-justify mt-3 mt-sm-6 font-small-xs paragraph">
                دفتر حافظ منافع مشتریان به مسافرین اطمینان خاطر می‌دهد که صدای آنان توسط برگزارکنندگان تور شنیده می‌شود و
                دغدغه‌های آنان در طراحی و اجرای پکیج‌ها لحاظ می‌گردد. </p>
              <p class="text-justify font-small-xs paragraph">
                شما در هر لحظه از شبانه ­روز می‌توانید نظرات، انتقادات و پیشنهادات خود را از طریق فرم ذیل به اطلاع تصمیم
                گیران پروژه برسانید و در حین لذت بردن از تورهای ویژه آهوان نیز نمایندگان تام الختیار این برند را همگام و
                همراه در کنار خود داشته باشید.
                <!-- سرسبز شمالی ایران و در مرز استان های خوش آب و هوای گیلان و مازندران واقع است.هتل چهار ستاره آهوان با بیش از 18 هکتار مساحت از وسیع ترین مناطق اقامتی ایران است که دارای 212 واحد اقامتی شامل 18 واحد ویلایی 2 خوابه،32 واحد واحد ویلایی یک خوابه و 162 واحد آپارتمانی 2 تخته تا 6 تخته است.همواره از زمان محول شدن مسئولیت این مجموعه به شرکت آهوان سعی بر این شده است که خدمات هتل به روز و در حد استانداردهای بین المللی ارائه شود. -->
              </p>
            </div>
            <router-link to="/office-protector-customer-interests">
              <v-btn color="#bf0000" class="px-sm-9 mt-2 mt-sm-4 float-left font-small-xs" dark>مشاهده بیشتر</v-btn>
            </router-link>
          </v-col>
          <v-col cols="12" md="6">
            <v-row justify="center">
              <img class="main-page-sectionImage" src="../assets/image/حافظ-منافع-مشتری.png" alt="">
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-row>
    <!-- magazine -->
    <v-row class="my-6 pb-6" justify="center" style="background: #150035;">
      <v-sheet max-width="100%" class="indexDiv transparent">
        <v-skeleton-loader class=" mt-4" type="image">
          <h2 class="d-inline-block font-small-title-xs white--text mt-6">مجله گردشگری</h2>
          <div class="widthAll slick-title slick-parent relative mt-8 mb-12">
            <slick :options="slickOptions">
              <div class="px-3 px-md-0" v-for="(item, i) in magazineItems" :key="i">
                <v-card outlined class="newesCardSlider rounded-xl ">
                  <div class="widthAll px-3 pt-3">
                    <img class="rounded-xl" width="100%" :src="item.image">
                    <h4 class="my-2 font-small-title-xs mt-3">{{ item.title }}</h4>
                    <p class="text-justify grey--text text--darken-1 body-2 text-magazine"
                      style="font-family:Byekan !important">
                      {{ item.text }}
                    </p>
                    <v-row justify="end">
                      <router-link :to="item.link" class="text-decoration-none">
                        <v-btn dark color="#bf0000" class="py-0 mb-6 rounded-xl caption">مشاهده بیشتر</v-btn>
                      </router-link>
                    </v-row>
                  </div>
                </v-card>
              </div>
            </slick>

          </div>
        </v-skeleton-loader>
      </v-sheet>
    </v-row>
    <!--  -->
    <v-row class="pb-6 pt-12 white" justify="center">
      <v-sheet max-width="100%" class="indexDiv transparent">
        <v-skeleton-loader class=" mt-4" type="image">
          <div class="widthAll slick-logo slick-parent relative my-6">
            <slick :options="slickOptions2">
              <div>
                <v-row justify="center">
                  <a href="https://www.holidayvillahotels.com/">
                    <img src="../assets/image/header logo 1.jpg" alt="">
                  </a>
                </v-row>
              </div>
              <div>
                <v-row justify="center">
                  <a href="https://all.accor.com">
                    <img src="../assets/image/header logo 2.jpg" alt="">
                  </a>
                </v-row>
              </div>
              <div>
                <v-row justify="center">
                  <a href="https://www.tejaratbank.ir/">
                    <img src="../assets/image/header logo 3.jpg" alt="">
                  </a>
                </v-row>
              </div>
              <div>
                <v-row justify="center">
                  <a href="https://alemadi.com.qa/">
                    <img src="../assets/image/header logo 4.jpg" alt="">
                  </a>
                </v-row>
              </div>
              <div>
                <v-row justify="center">
                  <a href="https://www.mcth.ir/">
                    <img src="../assets/image/header logo 5.jpg" alt="">
                  </a>
                </v-row>
              </div>
              <div>
                <v-row justify="center">
                  <a href="/">
                    <img src="../assets/image/header logo 6.jpg" alt="">
                  </a>
                </v-row>
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
  opacity: .25;
}

.slick-prev:before,
.slick-next:before {
  font-family: 'slick';
  font-size: 20px;
  line-height: 1;

  opacity: .75;
  color: rgb(0, 0, 0);
  font-size: 25px;
    font-weight: bolder;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slick-prev {
  right: -42px;
}

[dir='rtl'] .slick-prev {
  left: -25px;
  right: auto;
}

.slick-prev:before {
  content: '→';
}

[dir='rtl'] .slick-prev:before {
  content: '←';
  color:red
}

.slick-next {
  left: -25px;
}

[dir='rtl'] .slick-next {
  left: auto;
  right: -25px;
}

.slick-next:before {
  content: '←';
}

[dir='rtl'] .slick-next:before {
  content: '→';
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
  font-family: 'slick';
  font-size: 6px;
  line-height: 20px;

  position: absolute;
  top: 0;
  right: 0;

  width: 20px;
  height: 20px;

  content: '•';
  text-align: center;

  opacity: .25;
  color: black;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slick-dots li.slick-active button:before {
  opacity: .75;
  color: black;
}

.slick-arrow {
  z-index: 9;
}
</style>
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
import InputMain from '@/components/InputMain.vue'
// import QuestionAnswer from '@/components/QuestionAnswer.vue'
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';
const $ = require('jquery');


export default {
  name: 'HomeView',
  metaInfo: {
    title: 'خدمات گردشگری آهوان',
    meta: [
      { name: 'description', content: '' },
    ]
  },
  components: {
    InputMain,
    // QuestionAnswer,
    Slick
  },
  watch: {
    showAlert() {
      if (this.showAlert) {
        setTimeout(() => {
          this.showAlert = false
        }, 5000);
      }
    },
  },
  data: () => ({
    selectedSection: {
      icon: 'mdi-airplane',
      title: 'پرواز',
      active: true,
    },
    // questions: [
    //   {
    //     question: 'چند روز قبل از پرواز، بلیط هواپیما را بخریم؟',
    //     answer: 'امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات را دارید، باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید.'
    //   },
    //   {
    //     question: 'در هر پرواز، میزان بار مجاز چقدر است؟',
    //     answer: 'میزان مجاز بار به کلاس پرواز و کلاس نرخی بلیط بستگی دارد. هنگام خرید آنلاین بلیط هواپیما می‌توانید میزان بار مجاز را در اطلاعات بلیط ببینید. طبیعی است که اگر میزان بارتان بیش از حد مجاز باشد، باید جریمه پرداخت کنید.'
    //   },
    //   {
    //     question: 'نرخ بلیط هواپیما برای نوزادان و کودکان زیر ۱۲ سال چگونه است؟',
    //     answer: 'نرخ بلیط کودکان و نوزادان به کلاس پرواز و کلاس نرخی بستگی دارد. به صورت کلی، قیمت بلیط مسافر کودک (2 الی 12 سال) معادل 50 الی 100 درصد بلیط بزرگسال، و قیمت بلیط مسافر نوزاد (تا دو سال) 10 درصد بلیط بزرگسال است. هنگام تهیه بلیط هواپیما به این نکته توجه داشته باشید.'
    //   },
    //   {
    //     question: 'رزرو آنلاین بلیط هواپیما هزینه بیشتری از خرید حضوری دارد؟',
    //     answer: 'خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید.'
    //   },
    //   {
    //     question: 'آیا پس از خرید اینترنتی بلیط هواپیما امکان استرداد آن وجود دارد؟',
    //     answer: 'وقتی از آهوان یعنی بهترین سایت خرید بلیط هواپیما ، بلیطتان را رزرو می‌کنید، خیالتان آسوده است که امکان استرداد وجه در صورت کنسل کردن بلیط وجود دارد. میزان جریمه را هم هنگام رزرو آنلاین بلیط هواپیما در قسمت قوانین استرداد بخوانید. میزان جریمه به نوع بلیط، کلاس پروازی، کلاس نرخی و... بستگی دارد.'
    //   },
    //   {
    //     question: 'آیا پس از خرید بلیط هواپیما، امکان تغییر نام یا نام خانوادگی وجود دارد؟',
    //     answer: 'در پرواز داخلی یا خارجی، امکان تغییر نام و نام خانوادگی در بلیط سیستمی وجود ندارد. اما در بلیط چارتر، برخی از چارترکننده‌ها این تغییر را می‌پذیرند.'
    //   },
    // ],
    magazineItems: [
      {
        image: require('../assets/image/magazine-turkiye.jpg'),
        title: 'جاذبه های استانبول',
        text: 'تور استانبول، به دلیل خدمات تفریحی‌ای که برای افراد به همراه داره، می‌تونه به شما در روند تجربه یک سفر متفاوت کمک کنه. تور استانبول از تمام شهرهای ایران، در میان تورهای پرطرفداری قرار می‌گیره که هزینه نسبتا مناسبی برای افراد...',
        link: '/Istanbul'
      },
      {
        image: require('../assets/image/magazine-urope.jpg'),
        title: 'اروپا و جذابیت‌های آن',
        text: 'سفر با تور اروپا بدون شک یکی از زیباترین و بهترین تجربیات زندگی هر فرد می‌باشد. این قاره یکی از مقاصد زیبا برای سفر است که در سالهای اخیر به یکی از محبوب‌ترین مقاصد توریستی جهان تبدیل‌شده‌است. در بین تمامی مردم جهان...',
        link: '/Europe'
      },
      {
        image: require('../assets/image/magazine-dubai.jpg'),
        title: 'جاذبه های دبی',
        text: 'دبی یکی از شهرهای بزرگ و پرطرفدار امارات متحده عربی است که درواقع یک شهر لاکچری و مدرن در بین تمام شهرهای دنیا می‌باشد.بدلیل کوتاه بودن مسافت پرواز و همسایگی با این کشور نه تنها منطقه خاورمیانه، بلکه در سراسر جهان...',
        link: '/Dubai'
      },
      {
        image: require('../assets/image/magazine-thailand.jpg'),
        title: 'تور تایلند',
        text: 'کشور تایلند نه تنها برای توریست های ایرانی بلکه برای توریست های سراسر جهان جذابیت دارد بلکه با خرید تور تایلند از پارک های طبیعی و زیبای این کشور از جمله: پارک ملی کائو یای، پارک پانک سیدا و پارک ملی تا پرایا و موارد دیگر...',
        link: '/Thailand'
      },
      {
        image: require('../assets/image/magazine-dubai.jpg'),
        title: 'جاذبه های دبی',
        text: 'دبی یکی از شهرهای بزرگ و پرطرفدار امارات متحده عربی است که درواقع یک شهر لاکچری و مدرن در بین تمام شهرهای دنیا می‌باشد.بدلیل کوتاه بودن مسافت پرواز و همسایگی با این کشور نه تنها منطقه خاورمیانه، بلکه در سراسر جهان...',
        link: '/Dubai'
      },
      {
        image: require('../assets/image/magazine-thailand.jpg'),
        title: 'تور تایلند',
        text: 'کشور تایلند نه تنها برای توریست های ایرانی بلکه برای توریست های سراسر جهان جذابیت دارد بلکه با خرید تور تایلند از پارک های طبیعی و زیبای این کشور از جمله: پارک ملی کائو یای، پارک پانک سیدا و پارک ملی تا پرایا و موارد دیگر...',
        link: '/Thailand'
      },
      // {
      //   image: '/tour/Srilanka/',
      //   title: 'جاذبه های سریلانکا',
      //   text: ''
      // },
    ],
    windowWidth: 0,
    slickOptions: {},
    slickOptions2: {}
  }),
  methods: {
    changeSection(event) {
      this.selectedSection = event
    },
    getWidth() {
      this.windowWidth = window.innerWidth
    },


  },
  created() {
  window.scrollTo(0, 0);
    this.getWidth();
    this.slickOptions = {
      slidesToShow: this.windowWidth > 1400 ? 3 : (this.windowWidth <= 1400 && this.windowWidth > 960) ? 3 : (this.windowWidth <= 960 && this.windowWidth > 599) ? 2 : 1,
      slidesToScroll: 1,
      rtl: true,
      autoplay: true,
      autoplaySpeed: 2500,
    }
    this.slickOptions2 = {
      slidesToShow: this.windowWidth > 1400 ? 4 : (this.windowWidth <= 1400 && this.windowWidth > 960) ? 3 : (this.windowWidth <= 960 && this.windowWidth > 599) ? 2 : 1,
      slidesToScroll: 1,
      rtl: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2500,
      accessibility: true
    }
  }
}
</script>
