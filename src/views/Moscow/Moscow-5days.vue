<template>
  <div class="mt-9 mt-sm-12 pt-12">
    <v-row justify="center">
      <div class="widthAll relative">
        <img class="widthAll backgroundImageTour" src="@/assets/image/tour/tour-background20.jpg" alt="">
        <div class="tourImageBackground"></div>
      </div>
      <div class="mb-12 indexDiv main-div" style="z-index: 3">
        <div>
          <span class="white--text countryNmae px-12">مسکو _ 4 شب </span>
        </div>
        <div>
          <b class="white--text px-12 tour-date">
            تاریخ پرواز : همه‌روزه (بجز روزهای شنبه) با پرواز ماهان
          </b>
        </div>
        <v-row class='mt-9 mt-sm-0 mt-lg-12 pt-6 pt-md-12' style="">
          <v-slide-group ltr v-model="tab" class="ltr" hide-arrows center-activeTab>
            <v-slide-item>
              <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative"
                :class="tab == 0 && 'activeTab'" @click="tab = 0">لیست قیمت</h3>
            </v-slide-item>
            <v-slide-item>
              <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative"
                :class="tab == 1 && 'activeTab'" @click="tab = 1">خدمات تور</h3>
            </v-slide-item>
            <v-slide-item>
              <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative"
                :class="tab == 2 && 'activeTab'" @click="tab = 2">مدارک مورد نیاز</h3>
            </v-slide-item>
            <v-slide-item>
              <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative"
                :class="tab == 3 && 'activeTab'" @click="tab = 3">نکات ضروری</h3>
            </v-slide-item>
            <v-slide-item>
              <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative"
                :class="tab == 4 && 'activeTab'" @click="tab = 4">جزئیات پرواز</h3>
            </v-slide-item>
            <v-slide-item>
              <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative"
                :class="tab == 5 && 'activeTab'" @click="tab = 5">گالری تصاویر</h3>
            </v-slide-item>
            <v-slide-item>
              <a href="@/assets/image/پکیج مسکو.jpg" class="text-decoration-none " download>
                <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative">دانلود پکیج</h3>
              </a>
            </v-slide-item>
          </v-slide-group>
        </v-row>
        <v-row class="white py-md-9 px-6">
          <div class="widthAll" v-if="tab == 0">
            <h4 class="mb-4 mt-4 mt-md-0">
              <v-icon size="5" color="red" class="ml-2">mdi-circle</v-icon>
              قیمت های اعلام شده بر حسب تومان می باشد.
            </h4>
            <h4 class="mb-4 mt-4 mt-md-0">
              <v-icon size="5" color="red" class="ml-2">mdi-circle</v-icon>
              مدت اقامت بیشتر به انتخاب مسافر قابل رزرو میباشد.
            </h4>
            <h4 class="mb-4 mt-4 mt-md-0">
              <v-icon size="5" color="red" class="ml-2">mdi-circle</v-icon>
              نرخ کودک زیر 2 سال (INF) 1.600.000 تومان می‌باشد.
            </h4>

            <h4 class="mb-4 mt-4 mt-md-0">
              <v-icon size="5" color="red" class="ml-2">mdi-circle</v-icon>
              به کلیه سنین حتی کودکان زیر 2 سال مبلغ 120$ بابت ویزای توریستی اضافه خواهد شد.
            </h4>
            <v-row>
              <v-col cols="12" lg="12">
                <v-row class="mb-2" justify="center">
                  <v-data-table :headers="pricesHeaderMoskow" hide-default-footer :items="pricesItemsMoskow"
                    :items-per-page="50" class=" rounded-lg even-odd-tabel tabelTourId"
                    style="box-shadow: 0 0px 21px #dbdbdb !important;border: 2px solid #9d9d9b !important;">
                    <!-- <template #item="{ item }">
                            div
                            <tr>      
                              <td class="bold text-center" v-for="(col,key) in item" :key="key">
                                  {{ col }}
                              </td>
                            </tr>
                        </template> -->
                    <template v-slot:[`item.name`]="{ item }">
                      <div class="bold" style="letter-spacing: 1px !important;">{{ item.name }}</div>
                    </template>
                  </v-data-table>
                </v-row>
              </v-col>
            </v-row>
          </div>
          <div class="widthAll" v-else-if="tab == 1">
            <v-row>
              <v-col cols="12" md="12">
                <ul class=" mr-md-6">
                  <li class="my-3 grey--text text--darken-3 bold text-tour d-inline-block halfLi">بیمه مسافرتی</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour d-inline-block halfLi">4‌ شب اقامت در هتل با
                    صبحانه</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour d-inline-block halfLi">ترانسفر دو طرفه فرودگاهی
                    به هتل</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour d-inline-block halfLi">بلیت رفت و برگشت پرواز
                    ماهان ایر</li>
                </ul>
              </v-col>
            </v-row>
          </div>
          <div class="widthAll" v-else-if="tab == 2">
            <v-row>
              <v-col cols="12" md="12">
                <h3 class="tabel-tour-title red--text mt-6 mt-sm-3 mt-md-0">مدارک مورد نیاز تورهای روسیه</h3>
                <ul class="my-6 mr-9">
                  <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">اصل گذرنامه با حداقل 7 ماه اعتبار
                    از زمان خروج مسافر</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">2 قطعه عکس 4 * 3 جدید زمینه سفید
                    متفاوت از عکس پاسپورت</li>
                </ul>
              </v-col>
            </v-row>
          </div>
          <div class="widthAll" v-else-if="tab == 3">
            <ul class="my-3 mr-9">
              <h3 class="tabel-tour-title red--text mb-6 mt-12 mt-sm-0">نکات ضروری تورهای روسیه</h3>
              <li class="my-3 grey--text text--darken-3 bold text-tour text-justify ">
                نرخ ها به تومان محاسبه شده است.
              </li>
              <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">هتل و پرواز گارانتی و غیر قابل
                استرداد می باشد.</li>
              <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">
                کمیسیون کودک زیر 12 سال نصف بزرگسالان است.
              </li>
              <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">مسئولیت کنترل پاسپورت به عهده آژانس
                همکار می باشد.</li>
              <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">
                پرداخت 70% کل مبلغ تور در ابتدای ثبت نام ضروری است.
              </li>

              <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">
                بیمه افراد بالای 60 سال الزامی است و هزینه مازاد خواهد داشت.
              </li>
              <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">پروازهای ماهان ایر در روزهای یکشنبه ،
                دوشنبه ، چهارشنبه و جمعه از از فرودگاه
                <span class="red--text">SHERMITOVA</span>
                <!--  -->
                مسکو انجام می‌شود.پروازهای ماهان ایر در روزهای سه‌شنبه و پنجشنبه از از فرودگاه
                <span class="red--text">VENOCOVA</span>
                مسکو انجام می‌شود.
              </li>
              <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">در صورت درخواست مسافر با مدت اقامت
                طولانی تر قابل محاسبه و توسط مشاوران اجرا خواهد شد.</li>
              <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">
                قیمت‌های موجود در پکیج با نرخ دلار 45.000 تومان

                محاسبه شده است در صورت هرگونه افزایش
                نرخ مابه التفاوت محاسبه خواهد شد.
              </li>
              <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">حداقل زمان لازم جهت اخذ ویزای عادی 8
                روز کاری و ما به تفاوت ویزای فوری 150$ می‌باشد.</li>
            </ul>
          </div>
          <div class="widthAll" v-else-if="tab == 4">
            <v-row class="mb-7 mt-7 mt-sm-0" justify="center">
              <h2 class="tabel-tour-title">تنها پرواز مستقیم مسکو</h2>
              <img src="@/assets/image/tour/mahan-logo2.jpg" width="150" class="mr-3 logo-tour-title" alt="">
            </v-row>
            <v-row justify="center">
              <v-data-table style="box-shadow: 0 0px 21px #dbdbdb !important;" hide-default-footer
                :headers="moscowFlightHeaders" :items="moscowFlights"
                class="even-odd-tabel rounded-lg hideOver tabelTour tourPlan tabelTourId">
              </v-data-table>
            </v-row>
          </div>
          <div class="widthAll" v-else-if="tab == 5">
            <v-row justify="center">
              <div class="d-inline-block galeryImageParent" v-for="(item, i) in moscowImages" :key="i">
                <v-img class="galeryImage cursorPointer rounded-lg ma-1" height="134"
                  @click="imageNumber = i; imageDialog = true" :src="item.src" :alt='item.title'></v-img>
              </div>
            </v-row>

            <v-dialog v-model="imageDialog" max-width="1000">
              <div class="relative">
                <v-carousel v-model="imageNumber" height="100%">
                  <v-carousel-item v-for="(item, i) in moscowImages" :key="i">
                    <v-img class="widthAll" :src="item.src" :alt='item.title' />
                  </v-carousel-item>

                  <v-icon class="absolute cursorPointer" color="white" @click="imageDialog = false"
                    style="top:5px;right:5px">mdi-close</v-icon>
                </v-carousel>
              </div>
            </v-dialog>
          </div>
        </v-row>
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

<style scoped>
*{
  letter-spacing: -0.7px !important;
} 

.tourImageBackground {
  position: absolute;
  width: 100%;
  height: 98.5%;
  top: 0;
  left: 0;
  opacity: 1;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.55) 0,
    rgba(0, 0, 0, 0.55) 1%,
    transparent 56%,
    transparent 74%
  );
}

.tourPageTitle h3, .tourPageTitle span{
  color: #fff;
  position: relative;
  z-index: 1;
}

.tourPageTitle h3:hover {
  color: rgb(44, 44, 44);
  background: #fff;
}

.tourPageTitle h3:hover .lighter{
  /* content: ""; */
  /* position: absolute; */
  /* height: 15px;
  width: 67%; */
  background:#ffeb3b !important;
  /* top: 47%;
  right: 16%;
  z-index: -1; */
}

.tourPageTitle span{
  color: rgb(44, 44, 44);
}

.v-slide-group__wrapper .v-slide-group__content {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.tabTitles{
  color: #fff;
}

.activeTab {
  color: rgb(44, 44, 44) !important;
  background: #fff;
  z-index: 1;
}

.activeTab::before {
  content: "";
  position: absolute;
  height: 15px;
  width: 67%;
  background:#0083bb29;
  top: 47%;
  right: 16%;
  z-index: -1;
}

.countryNmae{
  margin-right:-52px;
  background: linear-gradient(94deg, rgba(255, 255, 255, 0) 0%, rgb(89 89 89 / 76%) 14%, rgb(89 89 89 / 67%) 87%, rgba(255, 255, 255, 0) 100%);
  font-size: 62px;
  font-weight: bold;
}

.tour-date {
  margin-right:-52px;
  background: linear-gradient(94deg, rgba(255, 255, 255, 0) 0%, rgb(89 89 89 / 76%) 14%, rgb(89 89 89 / 67%) 87%, rgba(255, 255, 255, 0) 100%);
}

.main-div{
  margin-top:-300px;
}

.logo-tour-title{
  height: 35px;
}

.see-more{
  font-weight: normal;
  font-size: small;
  text-decoration: underline;
}

.even-odd-tabel tbody tr:nth-child(even) {
  background-color: #0083bb29 !important;
}

.even-odd-tabel th {
  background-color: #0083bb56 !important;
}

.theme--light.v-data-table .v-data-footer,.v-application--is-ltr .v-data-footer__pagination{
  direction: ltr !important;
}

.v-application--is-ltr .v-data-footer__select {
  margin-left: 14px;
  margin-right: auto;
}

.even-odd-tabel{
  width: 100% !important;
}

.v-data-table,.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child, .theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row), .theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child, .theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row), .theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th {
  border: 1px solid #9d9d9d;
  font-weight: bold;
}

.galeryImageParent{
  width: 24%;
}

.galeryImage{
  position: relative;
}

.galeryImage::after{
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  /* background-color: #0000006e; */
  z-index: 2222;
  top: 0;
  opacity: 1;
}

.galeryImage:hover.galeryImage::after{
  opacity: 0;
}

.galeryImage:hover{
  box-shadow: 0 0 5px rgb(59, 59, 59);
}

.halfLi{
  width:49%
}

.even-odd-tabel td:nth-child(2) .bold{
  font-size: 15px;
  /* color: #ff6062 !important;
  text-shadow: 0 0 3px #ff7765; */
}



@media (min-width:960px) and (max-width:1263px){
  .main-div{
    margin-top:-245px;
  }
  
  .countryNmae{
    font-size: 46px;
  }

  .tourImageBackground {
    height: 97.5%;
  }
}

@media (min-width:600px) and (max-width:959px) {
  .main-div{
    margin-top:-205px;
  }      
  
  .tourImageBackground {
    height: 96.5%;
  }

  .countryNmae{
    font-size: 40px;
  }

  .tour-date{
    font-size: 16px;
  }

  .tabTitles {
    font-size: 15px !important;
  }

  .tabelTour{
    width:80% !important
  }
  
  .text-tour{
    font-size: 14px;
  }

  .tabel-tour-title {
    font-size: 18px !important;
  }

  .text-tour-call-us{
    font-size: 16px ;
  }

  .galeryImageParent{
    width: 45%;
  }

  .halfLi{
    width:100%
  }
  
  @media (max-width:774px) {
    .main-div{
      margin-top:-155px;
    }

    .tourImageBackground {
      height: 96.5%;
    }

    .countryNmae{
      font-size: 24px;
      margin-right: -35px;
      padding-right: 35px!important;
    }

    .tour-date{
      font-size: 12px;
      margin-right: -35px;
      padding-right: 35px!important;
    }

    .tabTitles {
      font-size: 13px !important;
    }

    .tabelParentFloat{
      float: unset !important;
      width: 100%;
    }
  }
}

@media (max-width:599px) {
  .indexDiv{
    width: 95% !important;
  }

  .main-div{
    margin-top:-170px;
  }

  .backgroundImageTour{
    width: 200%;
  }

  .countryNmae{
    font-size: 26px;
    margin-right: -35px;
    padding-right: 35px!important;
  }

  .tour-date{
    font-size: 14px;
    margin-right: -35px;
    padding-right: 35px!important;
  }

  .tabTitles{
    font-size: 14px;
    /* background: #fff; */
    /* border: 1px solid #b37b63; */
  }
  
  .tabelTour{
    width:100% !important
  }
  
  .tabelTour>.v-data-table__wrapper .v-data-table__mobile-row{
    min-height: 35px !important;
    /* justify-content: center; */
  }

  .tourPlan>.v-data-table__wrapper .v-data-table__mobile-row{
    /* display: inline-block;
    width: 50%;
    position: relative; */
  }

  .v-application--is-ltr .v-data-table__mobile-row__cell{
    text-align: center;
  }
  
  .tourPlan>.v-data-table__wrapper .v-data-table__mobile-row:nth-child(1){
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    font-weight: bold;
  }

  /* .tourPlan>.v-data-table__wrapper .v-data-table__mobile-row:nth-child(2)::before{
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
  } */
  
  .tabelTour *{
    font-size: 13px;
  }

  .text-tour{
    font-size: 14px;
  }

  .tabel-tour-title {
    font-size: 16px !important;
  }
  
  .text-tour-call-us{
    font-size: 14px ;
  }

  .tourPageTitle h3, .tourPageTitle span{
    /* color:black !important */
  }

  .tourImageBackground {
    height: 97.5%;
  }

  .logo-tour-title{
    height: 30px;
  }

  .tourPageTitle{
    /* background-color: #fff; */
  }

  .tourPageTitle {
    width: 500px;
  }
  
  .v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child, .theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row), .theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child, .theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row), .theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th {
    border: unset;
  }

  .galeryImageParent{
    width: 95%;
  }

  .halfLi{
    width:100%
  }

  .tabelParentFloat{
    float: unset !important;
    width: 100%;
  }
}
</style>

<script>
export default {
  name: 'Moscow-5days',
  components: {

  },
  data: () => ({
    tab: 0,
    pricesHeaderMoskow: [
      { text: 'ردیف', align: 'center', sortable: true, value: 'id', width: '90px' },
      { text: 'هتل', filterable: true, align: 'center', sortable: true, value: 'name' },
      { text: 'درجه', sortable: true, value: 'star', align: 'center', width: '100px', },
      { text: 'دو تخته', sortable: true, value: 'duble', align: 'center', },
      { text: 'یک تخته', sortable: true, value: 'single', align: 'center', },
      { text: 'کودک با تخت', sortable: true, value: 'baby', align: 'center', },
      { text: 'کودک بدون تخت', sortable: false, value: 'baby2', align: 'center', },
      { text: 'کمیسیون', sortable: true, value: 'coosion', align: 'center', },

    ],
    pricesItemsMoskow: [],
    moscowFlightHeaders: [
      { text: 'ردیف', sortable: true, value: 'id', align: 'center', width: 10 },
      { text: 'مسیر', align: 'center', sortable: false, value: 'from' },
      { text: 'شنبه', sortable: false, value: 'time1', align: 'center', },
      { text: 'یکشنبه', sortable: false, value: 'time2', align: 'center', },
      { text: 'دوشنبه', sortable: false, value: 'time3', align: 'center', },
      { text: 'سه‌شنبه', sortable: false, value: 'time4', align: 'center', },
      { text: 'چهارشنبه', sortable: false, value: 'time5', align: 'center', },
      { text: 'پنجشنبه', sortable: false, value: 'time6', align: 'center', },
      { text: 'جمعه', sortable: false, value: 'time7', align: 'center', },
    ],
    moscowFlights: [
      {
        id: 1,
        from: 'پرواز از تهران به ونوکوا',
        time1: '--',
        time2: '--',
        time3: '--',
        time4: '5:30',
        time5: '--',
        time6: '5:30',
        time7: '--',
      },
      {
        id: 2,
        from: 'پرواز از ونوکوا به تهران ',
        time1: '--',
        time2: '--',
        time3: '--',
        time4: '11:45',
        time5: '--',
        time6: '11:45',
        time7: '--',
      },
      {
        id: 3,
        from: 'پرواز از تهران به شرمیتوا',
        time1: '--',
        time2: '5:30',
        time3: '17:00',
        time4: '--',
        time5: '5:30',
        time6: '--',
        time7: '5:30',
      },
      {
        id: 4,
        from: 'پرواز از شرمیتوا به تهران',
        time1: '--',
        time2: '11:15',
        time3: '22:45',
        time4: '--',
        time5: '11:00',
        time6: '--',
        time7: '11:15',
      },
    ],
    imageNumber: 0,
    moscowImages: [
      {
        src: require('@/assets/image/tour/moscow-001.jpg'),
        title: 'کاخ کرملین مسکو'
      },
      {
        src: require('@/assets/image/tour/moscow-002.jpg'),
        title: 'کلیسای معراج کولومنسکویه'
      },
      {
        src: require('@/assets/image/tour/moscow-003.jpg'),
        title: 'مرکز خرید ماننایا پلوشاد'
      },
      {
        src: require('@/assets/image/tour/moscow-004.jpg'),
        title: 'میدان سرخ'
      },
      {
        src: require('@/assets/image/tour/moscow-005.jpg'),
        title: 'آسمن خراش های هفت خواهران مسکو'
      },
      {
        src: require('@/assets/image/پکیج مسکو.jpg'),
        title: 'پکیج مسکو'
      },
    ],
    imageDialog: false,
  }),
  methods: {

  },
  created() {
    // console.log(store);
    document.title = 'تور 5 روز مسکو|تور لحظه آخری مسکو'
    let newObjectDate = [
      {
        نام: 'HOLIDAY INN SELIGERSKAYA',
        درجه: 4,
        دوتخته: '22.700.000',
        تکنفره: '27.990.000',
        کودک: '18.000.000',
        کودک2: '12.000.000',
        کمیسیون: 800000
      },
      {
        نام: 'HOLIDAY INN SOKOLNIKI',
        درجه: 4,
        دوتخته: '24.850.000',
        تکنفره: '32.400.000',
        کودک: '20.200.000',
        کودک2: '12.000.000',
        کمیسیون: 1200000
      },
      {
        نام: 'GOLDEN RING HOTEL MOSCOW',
        درجه: 5,
        دوتخته: '34.000.000',
        تکنفره: '50.800.000',
        کودک: '23.500.000',
        کودک2: 12000000,
        کمیسیون: 1500000
      },
    ]
    var pricesItemsMoskow = []
    for (let i = 0; i < newObjectDate.length; i++) {
      pricesItemsMoskow.push({
        id: i + 1,
        name: newObjectDate[i].نام,
        star: newObjectDate[i].درجه,
        coosion: newObjectDate[i].کمیسیون,
        duble: newObjectDate[i].دوتخته,
        single: newObjectDate[i].تکنفره,
        baby: newObjectDate[i].کودک,
        baby2: newObjectDate[i].کودک2,
      })
      this.pricesItemsMoskow = pricesItemsMoskow;
    }

  }
}
</script>
