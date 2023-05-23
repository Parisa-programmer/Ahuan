<template>
  <div class="mt-6 mt-sm-12 pt-12">
    <v-row class="" justify="center">
      <div class="indexDiv relative">
        <v-row class=" widthAll" justify="center">
          <v-col cols="12" md="8" lg="9" class="pl-md-8">
            <img src="@/assets/image/اروپا اسلایدر.jpg" class="widthAll" alt="">
            <h1 class="d-inline-block font-small-title-xs mt-2 mt-sm-4 mt-lg-6">درباره اروپا</h1>
            <p class="text-justify answerText font-small-xs mt-2 mt-sm-4 mt-lg-6">
              اروپا قاره‌ای متنوع و جذابه که از تمام جهات جذاب و دوست داشتنیه و تاریخ غنی و طبیعت مسحور کنندش تلفیق
              بی‌نظیری برای هر بیننده‌ای به ارمغان میاره. این قاره 44 کشور مختلف رو تو خودش جا داده که گوناگونی زبانی
              فوق‌العاده‌ای هم دارن. از جمله شهرهای معروف اروپا از نظر تاریخی میشه به پاریس، رم و بارسلون اشاره کرد و اگر
              دوست دارید به شهرهای با طبیعت بی‌نظیر سفر کنید پیشنهاد ما توسکانی یا اسکاتلند هست. از نقاط قوت دیگه اروپا
              میشه به سیستم حمل و نقل بی نظیر و معماری دیدنی شهرهاش اشاره کرد.
            </p>
            <h2 class="d-inline-block font-small-title-xs mt-2 mt-sm-4 mt-lg-6">پاریس:</h2>
            <p class="text-justify answerText font-small-xs mt-2 mt-sm-4 mt-lg-6">
              به عنوان پایتخت کشور فرانسه، پاریس یکی از زیباترین و فرهنگی‌ترین شهرهای اروپا هست. حمل و نقل عالی، تاریخ
              غنی، غذاهای متنوع محلی، موزه‌ها و گالری‌های خاص و شب‌های رویایی این شهر رو تبدیل به خواستنی‌ترین شهر اروپا
              کرده. البته بدی‌هاییم داره مثل شلوغی و نرخ بالای خرید و اجاره خونه و در مجموع هزینه‌ بالای زندگی که مسائل
              حیاتی و مهمی قبل از تصمیم‌گیری برای مهاجرت و یا سفر هستند که باید مد نظر قرار بگیره.
            </p>
            <h2 class="d-inline-block font-small-title-xs mt-2 mt-sm-4 mt-lg-6">برلین:</h2>
            <p class="text-justify answerText font-small-xs mt-2 mt-sm-4 mt-lg-6">
              پایتخت آلمان یکی از شهرهای بی‌نظیر اروپاست و هزینه زندگی در اون نسبت به سایر شهرهای اروپا ارزانتر هست. یعنی
              از لحاظ حمل و نقل و اجاره خونه خیلی ارزانتر و معقول‌تر از جاهای دیگه اروپاست. از نکات بد این شهر هم باید
              اینو بدونید که این شهر در ماه‌های پیک سفر پر از توریسته و بازار کار رقابتی‌تری هم داره و همونطور که شاید
              بدونین سخت‌ترین قسمتش زبان آلمانیه که هم برای توریست‌ها و هم برای مهاجرها یه مشکل بزرگ حساب میشه.
            </p>
            <h2 class="d-inline-block font-small-title-xs mt-2 mt-sm-4 mt-lg-6">بارسلونا:</h2>
            <p class="text-justify answerText font-small-xs mt-2 mt-sm-4 mt-lg-6">
              بارسلونا معماری خیره‌کننده‌ای داره و آب و هواش خیلی خوب و دلنشینه. شب‌های خاطره انگیز و زنده و استایل زندگی
              مدیترانه‌ای این شهرو به یه شهر کاملاً متفاوت تو اروپا تبدیل کرده. از جمله بدی‌های این شهر میشه به هزینه
              زندگی بالا، حقوق کم و نرخ بیکاری بالا اشاره کرد.
            </p>
            <img src="@/assets/image/ویزای شنگن.jpg" class="rounded-xl widthAll" alt="">
            <v-row justify="center">
              <div class="indexDiv relative">
                <v-skeleton-loader class="mt-sm-2 mt-lg-4 textLoader" type="chip" :loading="isLoading">
                  <h2 class="d-inline-block font-small-title-xs">مراحل گرفتن وقت سفارت و ویزای کشورهای اروپایی:</h2>
                </v-skeleton-loader>
                <p class="text-justify answerText font-small-xs mt-2 mt-sm-3 mt-lg-4">
                  وقت سفارت کشورها به طور کلی به دو شکل تعیین میشه یا توسط کنسولگری یا سفارتخونه و یا توسط شرکت‌های
                  کارگزاری. که از جمله اون‌ها میشه به VFS. Global، VAC، Visametric، CKGSIR اشاره کرد.
                </p>
                <p class="text-justify answerText font-small-xs mt-1 mt-sm-2 mt-lg-3">
                  وقت سفارت کشورهایی مثل فرانسه، اتریش، بلژیک، قبرس، چک، دانمارک، فنلاند، نروژ، یونان، مجارستان، نیوزلند،
                  پرتغال، آفریقای جنوبی، سوییس، هلند، انگلیس و اوکراین توسط دفاتر کارگزاری VFS. Global تعیین میشه.
                </p>
                <p class="text-justify answerText font-small-xs mt-1 mt-sm-2 mt-lg-3">
                  وقت سفارت کشور آلمان توسط شرکت کارگزاری Visametric تعیین میشه و وقت سفارت ایتالیا رو هم شرکت کارگزاری
                  CKGSIR تعیین میکنه.
                </p>
                <p class="text-justify answerText font-small-xs mt-1 mt-sm-2 mt-lg-3">
                  شما قبل از سفر به هر کشوری باید با تحویل مدارک یا مصاحبه با نماینده کشور مقصد در سفارت برای دریافت ویزای
                  خودتون اقدام کنین و این شرایط برای کشورهای مختلف یکسان نیست.
                </p>
                <p class="text-justify answerText font-small-xs mt-1 mt-sm-2 mt-lg-3">
                  پیشنهاد ما به متقاضیان این است که با توجه به حساس بودن و لزوم توجه به جزئیات در زمان اخذ وقت سفارت حتماً
                  پیش از هر اقدامی با یک کارشناس با تجربه صحبت کنن و یا اقدامات لازم رو با هماهنگی و یا از طریق اون شخص
                  انجام بدن؛ ما در آهوان با بهره‌گیری از حضور کارشناسان و متخصصان این زمینه خوشحال میشیم که بتونیم افتخار
                  همراهیتون تو این مسیر رو داشته باشیم.
                </p>
              </div>
            </v-row>

          </v-col>
          <v-col cols="12" md="4" lg="3" class="pr-md-8" style="border-right:2px solid rgb(223, 223, 223)">
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
                <a class="text-decoration-none">
                  <v-row class="mt-6 cardItemsSide" align="center">
                    <span>
                      <img src="@/assets/image/englandChecklist.jpg" class="rounded-lg float-right" height="63" width="86"
                        alt="">
                      <v-row class="pr-2 mt-6">
                        <b style="font-family: Byekan !important;    font-size: 11px;">
                          چک لیست سفر به اروپا
                        </b>
                      </v-row>
                    </span>
                  </v-row>
                </a>
                <v-divider class="mx-6 mt-5"></v-divider>
                <a class="text-decoration-none">
                  <v-row class="mt-6 cardItemsSide" align="center">
                    <span>
                      <img src="@/assets/image/tour/moscow-003.jpg" class="rounded-lg float-right" height="63" width="86"
                        alt="">
                      <v-row class="pr-2 mt-6">
                        <b style="font-family: Byekan !important;    font-size: 11px;">
                          برترین مرکز خریدهای اروپا
                        </b>
                      </v-row>
                    </span>
                  </v-row>
                </a>
                <v-divider class="mx-6 mt-5"></v-divider>
                <a class="text-decoration-none">
                  <v-row class="mt-6 cardItemsSide" align="center">
                    <span>
                      <img src="@/assets/image/england souvenir.jpg" class="rounded-lg float-right" height="63" width="86"
                        alt="">
                      <v-row class="pr-2 mt-6">
                        <b style="font-family: Byekan !important;    font-size: 11px;">
                          لیست سوغاتی های اروپا
                        </b>
                      </v-row>
                    </span>
                  </v-row>
                </a>
                <v-divider class="mx-6 mt-5"></v-divider>
                <a class="text-decoration-none">
                  <v-row class="mt-6 cardItemsSide" align="center">
                    <span>
                      <img src="@/assets/image/tour/moscow-003.jpg" class="rounded-lg float-right" height="63" width="86"
                        alt="">
                      <v-row class="pr-2 mt-4">
                        <b style="font-family: Byekan !important;    font-size: 11px;">
                          حرفه ای ترین رستوران های اروپا
                        </b>
                      </v-row>
                    </span>
                  </v-row>
                </a>
                <v-divider class="mx-6 mt-5"></v-divider>
                <a class="text-decoration-none">
                  <v-row class="mt-6 cardItemsSide" align="center">
                    <span>
                      <img src="@/assets/image/englad Must see places.jpg" class="rounded-lg float-right" height="63"
                        width="86" alt="">
                      <v-row class="pr-2 mt-4">
                        <b style="font-family: Byekan !important;    font-size: 11px;">
                          اماکن دیدنی اروپا
                        </b>
                      </v-row>
                    </span>
                  </v-row>
                </a>
                <v-divider class="mx-6 mt-5"></v-divider>
                <a class="text-decoration-none">
                  <v-row class="mt-6 cardItemsSide" align="center">
                    <span>
                      <img src="@/assets/image/tour/moscow-003.jpg" class="rounded-lg float-right" height="63" width="86"
                        alt="">
                      <v-row class="pr-2 mt-4">
                        <b style="font-family: Byekan !important;    font-size: 11px;">
                          شهر های توریستی اروپا
                        </b>
                      </v-row>
                    </span>
                  </v-row>
                </a>
                <v-divider class="mx-6 mt-5"></v-divider>
                <a class="text-decoration-none">
                  <v-row class="mt-6 cardItemsSide" align="center">
                    <span>
                      <img src="@/assets/image/tour/moscow-003.jpg" class="rounded-lg float-right" height="63" width="86"
                        alt="">
                      <v-row class="pr-2 mt-4">
                        <b style="font-family: Byekan !important;    font-size: 11px;">
                          شهر های دانشجویی اروپا
                        </b>
                      </v-row>
                    </span>
                  </v-row>
                </a>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
        <v-row justify="center">
          <div class="indexDiv mt-6 mt-lg-12 mb-12">
            <router-link to="/visline">
              <img class="widthAll rounded-xl d-none d-md-block" src="@/assets/image/ویزلاین2.jpg" alt="">
              <img class="widthAll rounded-xl d-block d-md-none" src="@/assets/image/ویزلاین2 موبایل.jpg" alt="">
            </router-link>
          </div>
        </v-row>
      </div>
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
  name: 'visa-europe',
  components: {},
  data: () => ({

  }),
  methods: {

  },
  created() {
    document.title = 'وقت سفارت اروپا'
    window.scrollTo(0, 0);
  }
}
</script>
