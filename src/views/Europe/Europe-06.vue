<template>
  <div class="mt-9 mt-sm-12 pt-12">
    <v-row justify="center">
      <div class="widthAll relative">
        <img class="widthAll backgroundImageTour" src="@/assets/image/tour/tour-background14.jpg" alt="">
        <div class="tourImageBackground"></div>
      </div>
      <div class="mb-12 indexDiv main-div" style="z-index: 3">
        <h1 class="white--text countryNmae px-12 d-inline-block">سوئیس - ایتالیا - امارات</h1>
        <br>
        <b class="white--text px-12 tour-date">تاریخ حرکت : 11 خرداد</b>
        <!-- <v-row style="overflow-x: scroll;">
                <div>
                  <v-row class="tourPageTitle mt-12 mt-sm-0 mt-lg-12 pt-sm-6 pt-md-12">
                    <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles " :class="tab == 0 && 'active'" @click="tab = 0">خدمات تور</h3>
                    <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles" :class="tab == 1 && 'active'" @click="tab = 1">برنامه سفر</h3>
                    <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles" :class="tab == 2 && 'active'" @click="tab = 2">مدارک مورد نیاز</h3>
                    <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles" :class="tab == 3 && 'active'" @click="tab = 3">مسیر تور</h3>
                    <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles" :class="tab == 4 && 'active'" @click="tab = 4">گالری تصاویر</h3>
                  </v-row>
                </div>
              </v-row> -->
        <v-row class='mt-9 mt-sm-0 mt-lg-12 pt-6 pt-md-12' style="">
          <v-slide-group ltr v-model="tab" class="ltr" hide-arrows center-active>
            <v-slide-item>
              <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative" :class="tab == 0 && 'active'"
                @click="tab = 0">خدمات تور</h3>
            </v-slide-item>
            <v-slide-item>
              <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative" :class="tab == 1 && 'active'"
                @click="tab = 1">برنامه سفر</h3>
            </v-slide-item>
            <v-slide-item>
              <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative" :class="tab == 2 && 'active'"
                @click="tab = 2">مدارک مورد نیاز</h3>
            </v-slide-item>
            <v-slide-item>
              <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative" :class="tab == 3 && 'active'"
                @click="tab = 3">نکات ضروری</h3>
            </v-slide-item>
            <v-slide-item>
              <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative" :class="tab == 4 && 'active'"
                @click="tab = 4">مسیر تور</h3>
            </v-slide-item>
            <v-slide-item>
              <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative" :class="tab == 5 && 'active'"
                @click="tab = 5">گالری تصاویر</h3>
            </v-slide-item>
          </v-slide-group>
        </v-row>

        <v-row class="white py-md-9 px-6">
          <div class="widthAll" v-if="tab == 0">
            <v-row>
              <v-col cols="12" md="6">
                <ul class="mt-md-9 mr-md-6">
                  <li class="my-3 grey--text text--darken-3 bold text-tour">اخذ ويزاي دبی</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour">اخذ ويزاي شنگن</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour">بيمه ي مسافرتي</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour">ترانسفر فرودگاهی با اتوبوس هاي توريستي</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour">اقامت در هتل هاي چهار و پنج ستاره همراه با
                    صبحانه</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour">بلیط رفت و برگشت هواپیمادر مسیرهای بین المللی
                    و داخلی</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour">گشت شهری با اتوبوس‌های توریستی به همراه
                    تورلیدرفارسی زبان</li>
                </ul>
              </v-col>
              <div class="d-md-none widthAll my-sm-4 px-12">
                <hr class=" mx-12 my-4">
              </div>
              <v-col cols="12" md="6" class="mb-6 mb-md-0">
                <!-- <v-row class="" justify="center">
                        هتل های 5 ستاره
                      </v-row> -->
                <v-row class="mb-2" justify="center">
                  <h2 class="tabel-tour-title">اقامت در هتل های<span class="red--text"> 4 و 5 ستاره</span></h2>
                  <!-- <img src="@/assets/image/tour/Turkish_Airlines_logo.png" height="35" class="mr-3" alt=""> -->
                </v-row>
                <v-row class="mt-3" justify="center">
                  <v-data-table hide-default-footer hide-default-header style="box-shadow: 0 0 21px #dbdbdb !important;"
                    :headers="priceHeaders" :items="prices" class="even-odd-tabel rounded-lg hideOver tabelTour">
                    <template v-slot:footer>
                      <div>
                        <v-row class="py-4 body-2 text-center" justify="center"
                          style="font-family: Byekan !important;border-top:1px solid rgb(212, 212, 212)">

                          نرخ INF (زیر 2 سال) 10% ریالی + 10% ارزی نرخ بزرگسال
                        </v-row>
                      </div>
                    </template>
                  </v-data-table>
                </v-row>
              </v-col>
            </v-row>
          </div>
          <div class="widthAll" v-else-if="tab == 1">
            <v-row>
              <v-col cols="12" lg="6">
                <p class="mt-4 mt-lg-0 mb-3 grey--text text--darken-3 bold text-tour"
                  style="font-family:Byekan !important"><b class="grey--text text--darken-3">روز اول :</b>
                  ﺣﻀﻮﺭ ﺩﺭ ﻓﺮﻭﺩﮔﺎﻩ ﺍﻣﺎﻡ ﺧﻤﯿﻨﯽ ﺟﻬﺖ ﭘﺮﻭﺍﺯ ﺑﻪ زوریخ ، ﺍﻧﺘﻘﺎﻝ ﺑﻪ ﻫﺘﻞ
                </p>
                <p class="my-3 grey--text text--darken-3 bold text-tour" style="font-family:Byekan !important"><b
                    class="grey--text text--darken-3">روز دوم :</b>
                  ﮔﺸﺖ ﺷﻬﺮﯼ زوریخ به‌همراه قایق سواری و بازدید از آبشار راین
                </p>
                <p class="my-3 grey--text text--darken-3 bold text-tour" style="font-family:Byekan !important"><b
                    class="grey--text text--darken-3">روز سوم :</b>
                  ﮔﺸﺖ ﺷﻬﺮﯼ لوسرن و ﺑﺎﺯﺩﯾﺪ ﺍﺯ کوه ریگی
                </p>
                <p class="my-3 grey--text text--darken-3 bold text-tour" style="font-family:Byekan !important"><b
                    class="grey--text text--darken-3">روز چهارم :</b>
                  ترانسفر زمینی به لوگانو،انتقال به هتل
                </p>
                <p class="my-3 grey--text text--darken-3 bold text-tour" style="font-family:Byekan !important"><b
                    class="grey--text text--darken-3">روز پنجم :</b>
                  گشت شهری لوگانو
                </p>
                <p class="my-3 grey--text text--darken-3 bold text-tour" style="font-family:Byekan !important"><b
                    class="grey--text text--darken-3">روز ششم :</b>
                  ترانسفر زمینی به میلان،در مسیر بازدید از شهر کومو گشت شهری میلان ، انتقال به هتل
                </p>
                <p class="my-3 grey--text text--darken-3 bold text-tour" style="font-family:Byekan !important"><b
                    class="grey--text text--darken-3">روز هفتم :</b>
                  گشت شهری ونیز
                </p>
                <p class="my-3 grey--text text--darken-3 bold text-tour" style="font-family:Byekan !important"><b
                    class="grey--text text--darken-3">روز هشتم :</b>
                  ﺍﻧﺘﻘﺎﻝ ﺑﻪ ﻓﺮﻭﺩﮔﺎﻩ ﺟﻬﺖ ﭘﺮﻭﺍﺯ ﺑﻪ دبی،انتقال به هتل
                </p>
                <p class="mt-3 grey--text text--darken-3 bold text-tour" style="font-family:Byekan !important"><b
                    class="grey--text text--darken-3">روز نهم :</b>
                  وقت آزاد همراه با صرف شام
                </p>
                <p class="mt-3 grey--text text--darken-3 bold text-tour" style="font-family:Byekan !important"><b
                    class="grey--text text--darken-3">روز دهم :</b>
                  ﺍﻧﺘﻘﺎﻝ ﺑﻪ ﻓﺮﻭﺩﮔﺎﻩ ﺟﻬﺖ ﭘﺮﻭﺍﺯ ﺑﻪ تهران
                </p>
              </v-col>
              <div class="d-lg-none widthAll my-sm-4 px-12">
                <hr class=" mx-12 my-4">
              </div>
              <v-col cols="12" lg="6">
                <v-row class="mb-7" justify="center">
                  <h2 class="tabel-tour-title"> حرکت 11 خرداد هواپیمایی</h2>
                  <img src="@/assets/image/tour/emarat_logo.png" class="mr-3 logo-tour-title" alt="">
                </v-row>
                <v-row justify="center">
                  <v-data-table style="box-shadow: 0 0px 21px #dbdbdb !important;" hide-default-footer hide-default-header
                    :headers="flightHeaders" :items="flights"
                    class="even-odd-tabel rounded-lg hideOver tabelTour tourPlan">
                  </v-data-table>
                </v-row>
              </v-col>
            </v-row>
          </div>
          <div class="widthAll" v-else-if="tab == 2">
            <v-row>
              <v-col cols="12" md="12">
                <h3 class="tabel-tour-title red--text mt-6 mt-sm-3 mt-md-0">مدارک مورد نیاز سفارت سوئیس</h3>
                <ul class="my-6">
                  <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">وقت سفارت اعلام شده از جانب شرکت
                    آهوان غیر قابل تغییر می باشد.</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">برای متقاضیان بالای 12 سال انگشت
                    نگاری الزامی
                    <span v-if="!showMore1"> ...</span>
                    <span v-if="!showMore1" class=" mx-3 cursorPointer see-more" @click="showMore1 = true">مشاهده
                      بیشتر</span>
                    <span v-if="showMore1">است.</span>
                  </li>
                  <li v-if="showMore1" class="my-3 grey--text text--darken-3 bold text-tour text-justify">مسافرینی که در
                    24 ماه اخیر ویزای شنگن دریافت نموده اند، پرونده ایشان
                    بدون انگشت نگاری و به صورت غیرحضوری پذیرفته می شود (بجز شنگن صادره از سفارت یونان)
                  </li>
                  <li v-if="showMore1" class="my-3 grey--text text--darken-3 bold text-tour text-justify">تمام مدارک فارسی
                    جهت ارائه به سفارت فرانسه باید به زبان انگلیسی ترجمه شوند. (مدارک صادر شده به انگلیسی پذیرفته می
                    شوند.)</li>
                  <li v-if="showMore1" class="my-3 grey--text text--darken-3 bold text-tour text-justify">تمام کپی ها در
                    سایز A4 و یک رو گرفته شوند.</li>
                  <li v-if="showMore1" class="my-3 grey--text text--darken-3 bold text-tour text-justify">اصل پاسپورت امضا
                    شده با حداقل 6 ماه اعتبار از تاریخ سفر و 2 صفحه خالی رو به روی هم + کپی از تمام صفحات ویزاهای لیبل دار
                    موجود در پاسپورت</li>
                  <li v-if="showMore1" class="my-3 grey--text text--darken-3 bold text-tour text-justify">اصل پاسپورت های
                    قدیمی + کپی از تمام صفحات ویزاهای لیبل دار موجود در آنها</li>
                  <li v-if="showMore1" class="my-3 grey--text text--darken-3 bold text-tour text-justify">اصل شناسنامه ها
                    + اصل کارت ملی</li>
                  <li v-if="showMore1" class="my-3 grey--text text--darken-3 bold text-tour text-justify"> قطعه عکس جدید
                    5/4*5/3 (3 ماه اخیر) رنگی با زمینه سفید، مستقیم رو به دوربین، 80 درصد عکس صورت باشد و در هیچ پاسپورت
                    یا ویزای قبلی استفاده نشده باشد.</li>
                </ul>
                <h3 class="tabel-tour-title red--text">مدارک شغلی</h3>
                <ul class="my-6">
                  <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">پزشکان، مهندسین، وکلا: پروانه
                    مطب، نظام مهندسی، وکالت+ کارتهای صنفی مربوطه
                  </li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">کارمندان دولتی: حکم کارگزینی با
                    مهر + آخرین فیش حقوقی آخر با مهر
                    <span v-if="!showMore2"> ...</span>
                    <span v-if="!showMore2" class="see-more mx-3 cursorPointer" @click="showMore2 = true">مشاهده
                      بیشتر</span>
                    <span v-if="showMore2">+ گواهی اشتغال به کار</span>
                  </li>
                  <li v-if="showMore2" class="my-3 grey--text text--darken-3 bold text-tour text-justify">کارمندان شرکت
                    های خصوصی: گواهی اشتغال به کار + لیست سوابق بیمه با مهر سازمان تامین اجتماعی + قرارداد کارو آخرین فیش
                    حقوقی (در صورت وجود)
                  </li>
                  <li v-if="showMore2" class="my-3 grey--text text--darken-3 bold text-tour text-justify">کسبه: جواز کسب
                    یا کارت مباشرت(در صورت داشتن کارت مباشرت اصل جواز کسب الزامی است)
                  </li>
                  <li v-if="showMore2" class="my-3 grey--text text--darken-3 bold text-tour text-justify">اعضای هیئت مدیره
                    شرکت ها: گواهی اشتغال به کار + روزنامه رسمی (آگهی تاسیس و آخرین تغییرات)</li>
                  <li v-if="showMore2" class="my-3 grey--text text--darken-3 bold text-tour text-justify">سازندگان
                    ساختمان: پروانه ساختمان یا پایان کار
                  </li>
                  <li v-if="showMore2" class="my-3 grey--text text--darken-3 bold text-tour text-justify">موجر: اجاره نامه
                    معتبر با کد رهگیری + سند املاک مربوطه
                  </li>
                  <li v-if="showMore2" class="my-3 grey--text text--darken-3 bold text-tour text-justify">بازنشستگان: حکم
                    بازنشستگی یا آخرین حکم افزایش حقوق + آخرین فیش حقوقی</li>
                  <li v-if="showMore2" class="my-3 grey--text text--darken-3 bold text-tour text-justify">اساتید و اعضا
                    هیات علمی دانشگاه: گواهی اشتغال به کار + حکم کارگزینی با مهر + 3 فیش حقوقی آخر با مهر
                  </li>
                  <li v-if="showMore2" class="my-3 grey--text text--darken-3 bold text-tour text-justify">سند ملک (در صورت
                    عدم وجود سند ملک، جهت دریافت اطلاعات برای شرایط گرفتن ویزا با کارشناسان فروش تماس حاصل فرمایید.)
                  </li>
                  <li v-if="showMore2" class="my-3 grey--text text--darken-3 bold text-tour text-justify">تمام گواهی ها
                    باید حتما خطاب به سفارت مربوطه و در یکماه اخیر صادر شده باشند و در خصوص اشتغال، باید نام و مشخصات و
                    شماره پاسپورت و سمت و تاریخ شروع به کار و میزان حقوق و تاریخ مرخصی بر اساس زمان سفر ذکر شود.
                  </li>
                  <li v-if="showMore2" class="my-3 grey--text text--darken-3 bold text-tour text-justify">دانشجویان و دانش
                    آموزان: گواهی اشتغال به تحصیل در سال تحصیلی جاری یا ثبت نام سال آینده
                  </li>
                </ul>
                <h3 class="tabel-tour-title red--text">مدارک مالی</h3>
                <ul class="my-6">
                  <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">نامه تمکن به انگلیسی + گردش 3 ماه
                    آخر همان حساب به انگلیسی با مهر و امضاء بانک صادر شده در کمتر از 10 روز قبل از تاریخ انگشت نگاری (به
                    ازای هر نفرحداقل 100 میلیون تومان)
                  </li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">در صورتیکه فرزند زیر 18 سال بدون
                    یکی از والدین سفر می کند، رضایت نامه
                    <span v-if="!showMore3"> ...</span>
                    <span v-if="!showMore3" class="see-more mx-3 cursorPointer" @click="showMore3 = true">مشاهده
                      بیشتر</span>
                    <span v-if="showMore3">محضری از هر کدام از والدین که در سفر نیستند، الزامی است .(ترجمه رضایت نامه با
                      تاییدیه دادگستری و امور خارجه مورد قبول است.)</span>
                  </li>
                  <li v-if="showMore3" class="my-3 grey--text text--darken-3 bold text-tour text-justify">برای تایید رضایت
                    نامه، علاوه بر اصل رضایت نامه، اصل شناسنامه کسانی که اسامی آنها در رضایت نامه ذکر شده، الزامی است.
                  </li>
                  <li v-if="showMore3" class="my-3 grey--text text--darken-3 bold text-tour text-justify">واکسن های مورد
                    تایید سوئیس: فایزر، مدرنا، آسترازنکا، جانسون اند جانسون،سینوفارم،سینواک
                  </li>
                  <li v-if="showMore3" class="my-3 grey--text text--darken-3 bold text-tour text-justify">ارائه اصل تمامی
                    مدارک به شرکت آهوان الزامیست، تمام مدارک ارائه شده تا پایان سفر نزد شرکت رزآبی باقی می ماند.
                  </li>
                  <li v-if="showMore3" class="my-3 grey--text text--darken-3 bold text-tour text-justify">در صورت صلاحدید
                    کارشناسان و یا سفارت مربوطه، مسافر موظف به ارائه مدارک تکمیلی می باشد.</li>
                  <li v-if="showMore3" class="my-3 grey--text text--darken-3 bold text-tour text-justify">لزوم ارائه ضمانت
                    نامه بانکی جهت بازگشت از سفر و مبلغ آن به ازای هر نفر پس از بررسی مدارک متقاضی به ایشان اعلام می گردد.
                  </li>
                  <!-- <li class="my-3 grey--text text--darken-3 bold text-tour"></li> -->
                </ul>
              </v-col>
              <v-col cols="12" md="12">
                <v-row justify="center" class="heightAll mb-9 align-center">
                  <a :href="require('@/assets/image/tour/Documents-the-Swiss-Embassy.jpg')" download class="text-decoration-none">
                    <v-btn color="red " outlined dark>دانلود مدارک مورد نیاز سفارت سوئیس</v-btn>
                  </a>
                </v-row>
              </v-col>
            </v-row>
          </div>
          <div class="widthAll" v-else-if="tab == 3">
            <v-row>
              <ul class="my-6 mr-6">
                <li class="my-3 grey--text text--darken-3 bold text-tour">
                  هزینه تست PCR (رفت و برگشت) بر عهده خود مسافر می‌باشد.
                </li>
                <li class="my-3 grey--text text--darken-3 bold text-tour">
                  شرایط سفر و اجرای تور با توجه به قوانین کشور مقصد در خصوص کرونا امکان تغییر دارد.
                </li>
                <li class="my-3 grey--text text--darken-3 bold text-tour">
                  هزینه عوارض خروج از کشور و همچنین سفارت هایی که نیاز به ترجمه مدارک می‌باشد،هزینه دارالترجمه برعهده
                  مسافرین محترم می‌باشد.
                </li>
                <li class="my-3 grey--text text--darken-3 bold text-tour">
                  مسافرین محترمی کهدر 4 سال گذشته از سفارت فرانسه دارای ویزای شنگن بوده‌اند،کلیه ی مراحل اخذ ویزای ایشان
                  در سفارت فراسه به صورت غیر حضوری انجام خواهد شد.
                </li>
              </ul>
            </v-row>
          </div>
          <div class="widthAll" v-else-if="tab == 4">
            <v-row justify="center">

              <!-- <div class="d-inline-block galeryImageParent" v-for="(item,i) in urope005Images" :keys="i">
                      <v-img class="galeryImage cursorPointer rounded-lg ma-1" @click="imageNumber = i;imageDialog = true" :src="item.src" :alt="item.title"></v-img>
                    </div> -->
            </v-row>

            <v-dialog v-model="imageDialog" width="1000">
              <div class="relative">

                <v-carousel v-model="imageNumber">
                  <!-- <v-carousel-item
                          v-for="(item,i) in urope005Images" 
                          :key="i"
                        >
                          <img :src="item.src" :alt="item.title" alt="">
                        </v-carousel-item> -->
                </v-carousel>
                <v-icon class="absolute cursorPointer" color="white" @click="imageDialog = false"
                  style="top:5px;right:5px">mdi-close</v-icon>
              </div>
            </v-dialog>
          </div>
        </v-row>
        <router-link to="/Visline/" class="">
          <img class="widthAll rounded-xl d-none d-md-block mt-6" src="@/assets/image/ویزلاین2.jpg" alt="">
          <img class="widthAll rounded-xl d-block d-md-none mt-6" src="@/assets/image/ویزلاین2 موبایل.jpg" alt="">
        </router-link>
        <v-row class="white px-3 px-sm-9 py-5 mb-2 mb-sm-12 mt-2 mt-sm-6 rounded-xl justify-center d-none d-sm-flex">
          <b class="d-inline-block grey--text text-center text--darken-3 text-tour-call-us"
            style="font-family: Byekan !important;">
            جهت اخذ اطلاعات بیشتر با کارشناسان ما تماس حاصل فرمایید.
          </b>
          <b class="d-inline-block  grey--text text-center text--darken-3 text-tour-call-us"
            style="font-family: Byekan !important;"><a class="widthAll red--text mx-2" href="tel:02141889"
              style="text-decoration:none">تلفن: 41889-021</a></b>
        </v-row>
        <v-row class="px-3 px-sm-9 py-5 justify-center d-sm-none"
          style="background: #c1c1c1;position: fixed;bottom: 0;width: 100%;right: 0;">
          <b class="d-inline-block text-center text-tour-call-us"
            style="font-family: Byekan !important;text-decoration: underline;letter-spacing: 0px !important;">
            <a href="tel:02141889" class="bold" style="color:#0a30ff">تماس با کارشناسان ما </a>
          </b>
        </v-row>
      </div>
    </v-row>
  </div>
</template>

<style>
* {
  letter-spacing: -0.7px !important;
}

.tourImageBackground {
  position: absolute;
  width: 100%;
  height: 98.5%;
  top: 0;
  left: 0;
  opacity: 1;
  background: linear-gradient(to top,
      rgba(0, 0, 0, 0.55) 0,
      rgba(0, 0, 0, 0.55) 1%,
      transparent 56%,
      transparent 74%);
}

.tourPageTitle h3,
.tourPageTitle span {
  color: #fff;
  position: relative;
  z-index: 1;
}

.tourPageTitle h3:hover {
  color: rgb(44, 44, 44);
  background: #fff;
}

.tourPageTitle h3:hover .lighter {
  /* content: ""; */
  /* position: absolute; */
  /* height: 15px;
      width: 67%; */
  background: #ffeb3b !important;
  /* top: 47%;
      right: 16%;
      z-index: -1; */
}

.tourPageTitle span {
  color: rgb(44, 44, 44);
}

.v-slide-group__wrapper .v-slide-group__content {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.tabTitles {
  color: #fff;
}

.active {
  color: rgb(44, 44, 44) !important;
  background: #fff;
  z-index: 1;
}

.active::before {
  content: "";
  position: absolute;
  height: 15px;
  width: 67%;
  background: #4973c03a;
  top: 47%;
  right: 16%;
  z-index: -1;
}

.countryNmae {
  margin-right: -52px;
  background: linear-gradient(94deg, rgba(255, 255, 255, 0) 0%, rgb(89 89 89 / 76%) 14%, rgb(89 89 89 / 67%) 87%, rgba(255, 255, 255, 0) 100%);
  font-size: 62px;
  font-weight: bold;
}

.tour-date {
  margin-right: -52px;
  background: linear-gradient(94deg, rgba(255, 255, 255, 0) 0%, rgb(89 89 89 / 76%) 14%, rgb(89 89 89 / 67%) 87%, rgba(255, 255, 255, 0) 100%);
}

.main-div {
  margin-top: -300px;
}

.logo-tour-title {
  height: 35px;
}

.see-more {
  font-weight: normal;
  font-size: small;
  text-decoration: underline;
}

.galeryImageParent {
  width: 24%;
}

.galeryImage {
  position: relative;
}

.galeryImage::after {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  /* background-color: #0000006e; */
  z-index: 2222;
  top: 0;
  opacity: 1;
}

.galeryImage:hover.galeryImage::after {
  opacity: 0;
}

.galeryImage:hover {
  box-shadow: 0 0 5px rgb(59, 59, 59);
}

.even-odd-tabel tbody tr:nth-child(even) {
  /* background-color: #4972c017 !important; */
}

.active::before {
  background: #faf2e8;
}

@media (min-width:960px) and (max-width:1263px) {
  .main-div {
    margin-top: -265px;
  }

  .countryNmae {
    font-size: 46px;
  }

  .tourImageBackground {
    height: 97.5%;
  }
}

@media (min-width:600px) and (max-width:959px) {
  .main-div {
    margin-top: -210px;
  }

  .tourImageBackground {
    height: 96.5%;
  }

  .countryNmae {
    font-size: 40px;
  }

  .tour-date {
    font-size: 16px;
  }

  .tabTitles {
    font-size: 15px !important;
  }

  .tabelTour {
    width: 80% !important
  }

  .text-tour {
    font-size: 14px;
  }

  .tabel-tour-title {
    font-size: 18px !important;
  }

  .text-tour-call-us {
    font-size: 16px;
  }

  .galeryImageParent {
    width: 45%;
  }

  @media (max-width:774px) {
    .main-div {
      margin-top: -164px;
    }

    .tourImageBackground {
      height: 96.5%;
    }

    .countryNmae {
      font-size: 24px;
      margin-right: -35px;
      padding-right: 35px !important;
    }

    .tour-date {
      font-size: 12px;
      margin-right: -35px;
      padding-right: 35px !important;
    }

    .tabTitles {
      font-size: 13px !important;
    }
  }
}

@media (max-width:599px) {
  .indexDiv {
    width: 95% !important;
  }

  .main-div {
    margin-top: -200px;
  }

  .backgroundImageTour {
    width: 200%;
  }

  .countryNmae {
    font-size: 26px;
    margin-right: -35px;
    padding-right: 35px !important;
  }

  .tour-date {
    font-size: 14px;
    margin-right: -35px;
    padding-right: 35px !important;
  }

  .tabTitles {
    font-size: 14px;
    /* background: #fff; */
    /* border: 1px solid #b37b63; */
  }

  .tabelTour {
    width: 100% !important
  }

  .tabelTour>.v-data-table__wrapper .v-data-table__mobile-row {
    min-height: 35px !important;
    justify-content: center;
  }

  .tourPlan>.v-data-table__wrapper .v-data-table__mobile-row {
    display: inline-block;
    width: 50%;
    position: relative;
  }

  .v-application--is-ltr .v-data-table__mobile-row__cell {
    text-align: center;
  }

  .tourPlan>.v-data-table__wrapper .v-data-table__mobile-row:nth-child(1) {
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    font-weight: bold;
  }

  .tourPlan>.v-data-table__wrapper .v-data-table__mobile-row:nth-child(2)::before {
    content: '<-----------------------------------------------';
    position: absolute;
    width: 46%;
    right: 80%;
    text-align: right;
    overflow: hidden;
    white-space: nowrap;
    direction: ltr;
    display: flex;
    justify-content: start;
  }

  .tabelTour * {
    font-size: 13px;
  }

  .text-tour {
    font-size: 14px;
  }

  .tabel-tour-title {
    font-size: 16px !important;
  }

  .text-tour-call-us {
    font-size: 14px;
  }

  .tourPageTitle h3,
  .tourPageTitle span {
    /* color:black !important */
  }

  .tourImageBackground {
    height: 97.5%;
  }

  .logo-tour-title {
    height: 30px;
  }

  .tourPageTitle {
    /* background-color: #fff; */
  }

  .tourPageTitle {
    width: 500px;
  }

  .galeryImageParent {
    width: 95%;
  }

  @media (max-width:400px) {
    .main-div {
      margin-top: -185px;
    }
  }
}
</style>


<script>
export default {
  name: 'Europe-06',
  metaInfo: {
    meta: [
      { name: 'description', content: "تور ترکیبی سوئیس - ایتالیا - امارات شرکت آهوان یک تور خاص برای افراد خاص است. جهت خرید این تور می‌توانید با شماره تلفن 021-41889 تماس بگیرید." }  
    ]
  },
  components: {

  },
  data: () => ({
    tab: 0,
    priceHeaders: [
      {
        text: 'درجه هتل ها',
        align: 'center',
        sortable: false,
        value: 'name',
      },
      { text: '5 ستاره', sortable: false, value: 'calories', align: 'center', },

    ],
    prices: [
      {
        name: 'هرنفر در اتاق 2 تخته',
        calories: '2,190 یورو + 34,990,000 تومان',
      },
      {
        name: 'هرنفر در اتاق 1 تخته',
        calories: '3,290 یورو + 34,990,000 تومان',
      },
      {
        name: 'کودک 4-11 ساله با تخت',
        calories: '1,690 یورو + 31,990,000 تومان',
      },
      {
        name: 'کودک 4-2 ساله بدون تخت',
        calories: '790 یورو + 31,990,000 تومان',
      },
    ],
    flightHeaders: [
      // { text: '', sortable: false, value: 'image', align: 'center', },
      { text: '', align: 'center', sortable: false, value: 'from' },
      { text: '', sortable: false, value: 'time1', align: 'center', },
      { text: '', sortable: false, value: 'time2', align: 'center', },
      { text: '', sortable: false, value: 'text1', align: 'center', },
      { text: '', sortable: false, value: 'text2', align: 'center', },

    ],
    flights: [
      {
        from: 'پرواز از تهران به دبی',
        time1: '05:30',
        time2: '07:20',
        text1: 'EK978',
        text2: 'IKADXB'
      },
      {
        from: 'پرواز از دبی به زوری',
        time1: '08:40',
        time2: '13:20',
        text1: 'EK087',
        text2: 'DXBZRH'
      },
      {
        from: 'پرواز از میلان به دبی',
        time1: '15:05',
        time2: '22:10',
        text1: 'EK206',
        text2: 'MXPDXB'
      },
      {
        from: 'پرواز از دبی به تهران',
        time1: '15:00',
        time2: '17:40',
        text1: 'EK979',
        text2: 'DXBIKA'
      },
    ],
    showMore1: false,
    showMore2: false,
    showMore3: false,
    europeImages: [
      {
        src: require('@/assets/image/tour/اروپا005-1.jpg'),
        title: 'جزایر پرنس'
      },
      {
        src: require('@/assets/image/tour/اروپا005-2.jpg'),
        title: 'کاخ دلماباغچه استانبول'
      },
      {
        src: require('@/assets/image/tour/اروپا005-3.jpg'),
        title: 'قصر توپ کتپی'
      },
      {
        src: require('@/assets/image/tour/اروپا005-4.jpg'),
        title: 'موزه گوگنهایم بیلبائو'
      },
      {
        src: require('@/assets/image/tour/اروپا005-5.jpg'),
        title: 'موزه پیکاسو'
      },
      {
        src: require('@/assets/image/tour/اروپا005-6.jpg'),
        title: 'شهر قدیمی خیرونا اسپانیا'
      },
    ],
    imageNumber: 0,
    imageDialog: false,
  }),
  methods: {

  },
  created() {
    window.scrollTo(0, 0);
    // console.log(store);
    document.title = 'تور ترکیبی سوئیس-ایتالیا-امارات'
    let newObjectDate = [
      {
        نام: 'Fideh hotel',
        درجه: '3',
        موقعیت: 'Taksim',
        دوتخته: '5.550.000',
        تکنفره: '7.200.000',
        کودک: '5.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Oriella taksim',
        درجه: '3',
        موقعیت: 'Taksim',
        دوتخته: '5.970.000',
        تکنفره: '7.900.000',
        کودک: '5.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'All in ',
        درجه: '3',
        موقعیت: 'Dolapedere',
        دوتخته: '6.700.000',
        تکنفره: '8.950.000',
        کودک: '5.900.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'White monarch',
        درجه: '4',
        موقعیت: 'Sisli',
        دوتخته: '6.700.000',
        تکنفره: '8.950.000',
        کودک: '5.900.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Cuento hotel',
        درجه: '3',
        موقعیت: 'Taksim',
        دوتخته: '7.200.000',
        تکنفره: '9.900.000',
        کودک: '6.100.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Atro hotel',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '7.200.000',
        تکنفره: '9.900.000',
        کودک: '6.100.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Dora hotel',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '7.200.000',
        تکنفره: '10.600.000',
        کودک: '6.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Taksim town',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '8.200.000',
        تکنفره: '11.600.000',
        کودک: '7.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Inntel',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '8.200.000',
        تکنفره: '11.600.000',
        کودک: '7.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Actual life',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '8.200.000',
        تکنفره: '11.600.000',
        کودک: '7.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Euro plaza',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '8.200.000',
        تکنفره: '11.600.000',
        کودک: '7.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Tango sisli',
        درجه: '4',
        موقعیت: 'Dolapdere',
        دوتخته: '8.200.000',
        تکنفره: '11.600.000',
        کودک: '7.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Nova plaza park',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '8.500.000',
        تکنفره: '12.500.000',
        کودک: '7.400.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'City center',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '8.500.000',
        تکنفره: '12.500.000',
        کودک: '7.400.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Cartoon',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '9.200.000',
        تکنفره: '14.300.000',
        کودک: '7.200.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Buke hotel',
        درجه: '4',
        موقعیت: 'Sisli',
        دوتخته: '9.200.000',
        تکنفره: '14.300.000',
        کودک: '7.200.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Riva hotel',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '9.200.000',
        تکنفره: '14.300.000',
        کودک: '7.200.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Tango taksim',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '9.200.000',
        تکنفره: '14.300.000',
        کودک: '7.200.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Metropolitan',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '9.900.000',
        تکنفره: '16.100.000',
        کودک: '7.700.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Mercure bomonti',
        درجه: '4',
        موقعیت: 'Sisli',
        دوتخته: '9.900.000',
        تکنفره: '16.100.000',
        کودک: '7.700.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'The peak hotel',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '10.200.000',
        تکنفره: '15.200.000',
        کودک: '6.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Palazzo Donizetti',
        درجه: '5',
        موقعیت: 'Pera',
        دوتخته: '10.200.000',
        تکنفره: '15.200.000',
        کودک: '6.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Cher hotel',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '10.500.000',
        تکنفره: '16.500.000',
        کودک: '7.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Surmeli',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '10.500.000',
        تکنفره: '16.500.000',
        کودک: '7.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Grand cevahir',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '11.200.000',
        تکنفره: '17.500.000',
        کودک: '6.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'The craton',
        درجه: '5',
        موقعیت: 'mecidiyekoy',
        دوتخته: '11.200.000',
        تکنفره: '17.500.000',
        کودک: '6.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Avantgard taksim',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '11.400.000',
        تکنفره: '17.500.000',
        کودک: '7.800.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Golden age',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '11.400.000',
        تکنفره: '17.500.000',
        کودک: '7.800.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Taksim gonen',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '11.400.000',
        تکنفره: '17.500.000',
        کودک: '7.800.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Holiday inn',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '11.900.000',
        تکنفره: '18.500.000',
        کودک: '7.900.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Titanic city',
        درجه: '4',
        موقعیت: 'Taksim',
        دوتخته: '12.500.000',
        تکنفره: '20.000.000',
        کودک: '7.200.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Crowne plaza  ',
        درجه: '5',
        موقعیت: 'Harbiye',
        دوتخته: '12.500.000',
        تکنفره: '20.000.000',
        کودک: '7.200.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Point taksim',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '13.100.000',
        تکنفره: '20.500.000',
        کودک: '7.300.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Wish more',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '14.500.000',
        تکنفره: '21.500.000',
        کودک: '6.500.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Radison blu',
        درجه: '5',
        موقعیت: 'Sisli',
        دوتخته: '15.500.000',
        تکنفره: '26.200.000',
        کودک: '6.990.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Hilton bosphoros',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '19.200.000',
        تکنفره: '32.200.000',
        کودک: '7.990.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Divan',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '19.200.000',
        تکنفره: '32.200.000',
        کودک: '7.990.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Conrad',
        درجه: '5',
        موقعیت: 'Besiktas',
        دوتخته: '19.200.000',
        تکنفره: '32.200.000',
        کودک: '7.990.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Park hotel (CVK)',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '19.200.000',
        تکنفره: '32.200.000',
        کودک: '7.990.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'Rixos pera ',
        درجه: '5',
        موقعیت: 'Tarlabasi',
        دوتخته: '21.000.000',
        تکنفره: '35.000.000',
        کودک: '9.900.000',
        کودک2: '4.100.000',
      },
      {
        نام: 'The marmara',
        درجه: '5',
        موقعیت: 'Taksim',
        دوتخته: '28.000.000',
        تکنفره: '47.500.000',
        کودک: '8.400.000',
        کودک2: '4.100.000',
      },
    ]
    var pricesItemsIstanbul = []
    for (let i = 0; i < newObjectDate.length; i++) {
      pricesItemsIstanbul.push({
        id: i + 1,
        name: newObjectDate[i].نام,
        star: newObjectDate[i].درجه,
        place: newObjectDate[i].موقعیت,
        duble: newObjectDate[i].دوتخته,
        single: newObjectDate[i].تکنفره,
        baby: newObjectDate[i].کودک,
        baby2: newObjectDate[i].کودک2,
      })
    }
    this.pricesItemsIstanbul = pricesItemsIstanbul;

  }
}
</script>
