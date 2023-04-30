<template>
  <div class="mt-9 mt-sm-12 pt-12">
    <v-row justify="center">
            <div class="widthAll relative">
              <img class="widthAll backgroundImageTour" src="@/assets/image/tour/tour-background10.jpg" alt="">
              <div class="tourImageBackground"></div>
            </div>
            <div class="mb-12 indexDiv main-div" style="z-index: 3">
              <div>
                <h1 class="white--text countryNmae px-12 d-inline-block">دبی _ 4 شب و 5 روز</h1>
              </div>
              <div>
                <b class="white--text px-12 tour-date">تاریخ پرواز : همه روزه</b>
              </div>
              <v-row class='mt-9 mt-sm-0 mt-lg-12 pt-6 pt-md-12'>
                <v-slide-group ltr v-model="tab" class="ltr" hide-arrows center-activeTab>
                  <v-slide-item>
                    <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative" :class="tab == 0 && 'activeTab'" @click="tab = 0">لیست قیمت</h3>
                  </v-slide-item>
                  <v-slide-item>
                    <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative" :class="tab == 1 && 'activeTab'" @click="tab = 1">خدمات تور</h3>
                  </v-slide-item>
                  <v-slide-item>
                    <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative" :class="tab == 2 && 'activeTab'" @click="tab = 2">مدارک مورد نیاز</h3>
                  </v-slide-item>
                  <v-slide-item >
                    <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative" :class="tab == 3 && 'activeTab'" @click="tab = 3">نکات ضروری</h3>
                  </v-slide-item>
                  <v-slide-item >
                    <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative" :class="tab == 4 && 'activeTab'" @click="tab = 4">گالری تصاویر</h3>
                  </v-slide-item>
                </v-slide-group>
              </v-row>
              <v-row class="white py-md-9 px-6">
                <div class="widthAll" v-if="tab == 0">
                  <v-row>
                    <v-col cols="12" lg="12">
                      <v-row class="mb-2" justify="center">
                        <v-data-table
                          :headers="pricesHeaderDubai"
                          hide-default-footer
                          :items="pricesItemsDubai"
                          :items-per-page="50"
                          class="tabelTourId rounded-lg even-odd-tabel"
                          style="box-shadow: 0 0px 21px #dbdbdb !important;border: 2px solid #9d9d9b !important;"
                        >
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
                        <li class="my-3 grey--text text--darken-3 bold text-tour d-inline-block halfLi">ترانسفر فرودگاهی</li>
                        <li class="my-3 grey--text text--darken-3 bold text-tour d-inline-block halfLi">اقامت به همراه صبحانه</li>
                        <li class="my-3 grey--text text--darken-3 bold text-tour d-inline-block halfLi">بلیت رفت و برگشت با باس 300 - 600</li>
                        <li class="my-3 grey--text text--darken-3 bold text-tour d-inline-block halfLi">ویزای توریستی 14 روزه دبی</li>
                        <li class="my-3 grey--text text--darken-3 bold text-tour d-inline-block halfLi">بیمه مسافرتی تا سقف 10.000 یورو برای زیر 60 سال</li>
                      </ul>
                    </v-col>
                  </v-row>
                </div>
                <div class="widthAll" v-else-if="tab == 2">
                  <v-row>
                    <v-col cols="12" md="12">
                      <h3 class="tabel-tour-title red--text mt-6 mt-sm-3 mt-md-0">مدارک مورد نیاز تورهای دبی</h3>
                      <ul class="my-6 mr-9">
                        <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">کارت واکسن یا تست پی سی آر منفی</li>
                        <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">اصل گذرنامه به همراه حداقل 7 ماه اعتبار</li>
                        <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">اسکن پاسپورت - شناسنامه - کارت ملی - یک قطعه عکس</li>
                      </ul>
                    </v-col>
                  </v-row>
                </div>
                <div class="widthAll" v-else-if="tab == 3">
                  <v-row>
                    <v-col cols="12" md="12">
                      <h3 class="tabel-tour-title red--text mt-6 mt-sm-3 mt-md-0">نکات ضروری تورهای دبی</h3>
                      <ul class="my-6 mr-9">
                        <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">
                          زمان لازم برای صدور ویزا 2 روز کاری میباشد.
                        </li>  
                        <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">
                          پرداخت حداقل 70% مبلغ تور هنگام رزرو الزامی است. 
                        </li>
                        <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">
                          کلیه پروازها و هتل ها چارتر و غیر قابل استرداد و تغییر تاریخ میباشد.
                        </li>
                        <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">
                          نرخ کودک بدون تخت 6500000 تومان میباشد که با توجه به تاریخ سفر متغیر میباشد.
                        </li>
                        <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">
                          مسافرین بالای 70 سال می بایست به همراه همسر یا یکی از فرزندان خود مسافرت نمایند.
                        </li>
                        <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">
                          نرخ های موجود در پکیج بر اساس بلیط با نرخ
                          <b class="red--text">5200000</b>
                           تومان محاسبه شده است و با توجه به تاریخ سفر باید مجددا چک شود
                        </li>
                        <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">
                          قیمت های موجود در پکیج با نرخ درهم 
                          <b class="red--text">12000</b>
                           تومان محاسبه شده است در صورت هرگونه افزایش نرخ مابه تفاوت محاسبه خواهد شد.
                        </li>
                        <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">
                          با توجه به محدودیت های موجود در ترانسفر فرودگاهی بعضی از هتل ها در مناطق دبی هزینه ترنسفر بطور مجزا محاسبه و اضافه میگردد.
                        </li>
                      </ul>
                    </v-col>
                  </v-row>
                </div>
                <div class="widthAll" v-else-if="tab == 4">
                  <v-row justify="center">
                    <div class="d-inline-block galeryImageParent" v-for="(item,i) in dubaiImages" :key="i">
                      <v-img class="galeryImage cursorPointer rounded-lg ma-1" @click="imageNumber = i;imageDialog = true" :src="item.src" :alt="item.title"></v-img>
                    </div>
                  </v-row>
                  
                  <v-dialog
                    v-model="imageDialog"
                    width="1000"
                  >
                    <div class="relative">
                      
                      <v-carousel v-model="imageNumber">
                        <v-carousel-item
                          v-for="(item,i) in dubaiImages" 
                          :key="i"
                        >
                          <img :src="item.src" :alt="item.title">
                        </v-carousel-item>
                      </v-carousel>
                      <v-icon class="absolute cursorPointer" color="white" @click="imageDialog=false" style="top:5px;right:5px">mdi-close</v-icon>
                    </div>
                  </v-dialog>
                </div>
              </v-row>
              <v-row class="white px-3 px-sm-9 py-5 mb-2 mb-sm-12 mt-2 mt-sm-6 rounded-xl justify-center d-none d-sm-flex">
                <b class="d-inline-block grey--text text-center text--darken-3 text-tour-call-us" style="font-family: Byekan !important;">
                  جهت اخذ اطلاعات بیشتر با کارشناسان ما تماس حاصل فرمایید.
                </b>
                <b class="d-inline-block  grey--text text-center text--darken-3 text-tour-call-us" style="font-family: Byekan !important;"><a class="widthAll red--text mx-2" href="tel:02141889" style="text-decoration:none">تلفن: 41889-021</a></b>
              </v-row>
              <v-row class="px-3 px-sm-9 py-5 justify-center d-sm-none" style="background: #c1c1c1;position: fixed;bottom: 0;width: 100%;right: 0;">
                <b class="d-inline-block text-center text-tour-call-us" style="font-family: Byekan !important;text-decoration: underline;letter-spacing: 0px !important;">
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
      background:#ffd0a170;
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
      background-color: #ffd0a130 !important;
    }

    .even-odd-tabel th {
      background-color: #ff832461 !important;
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
        /* color: #ff8252 !important;
        text-shadow: 0 0 3px #ffb99f; */
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
        justify-content: center;
      }

      .tourPlan>.v-data-table__wrapper .v-data-table__mobile-row{
        display: inline-block;
        width: 50%;
        position: relative;
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

      .tourPlan>.v-data-table__wrapper .v-data-table__mobile-row:nth-child(2)::before{
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
    }
  </style>

<script>
export default {
  name: 'Dubai-4night',
  metaInfo: {
    meta: [
      { name: 'description', content:  "شرکت آهوان با بیش از 50 سال سابقه مجری مستقیم انواع تورهای دبی است. تورهای ارزان تا لوکس دبی به همراه لیست قیمت هتل‌ها از تهران و سایر شهرها" }  
    ]
  },
  components: {

  },
  data: () => ({
    tab: 0,
    pricesHeaderDubai: [
      // { text: '', sortable: false, value: 'image', align: 'center', },
      { text: 'ردیف', align: 'center', sortable: true, value: 'id', width: '90px' },
      { text: 'هتل', filterable: true, align: 'center', sortable: true, value: 'name' },
      { text: 'درجه', sortable: true, value: 'star', align: 'center', width: '100px', },
      { text: 'موقعیت', sortable: true, value: 'place', align: 'center', },
      { text: 'دو تخته', sortable: true, value: 'duble', align: 'center', },
      { text: 'یک تخته', sortable: true, value: 'single', align: 'center', },
      { text: 'کودک با تخت', sortable: true, value: 'baby', align: 'center', },

    ],
    pricesItemsDubai: [],
    imageNumber: 0,
    dubaiImages: [
      {
        src: require('@/assets/image/tour/دبی-1.jpg'),
        title: 'اوت لت مال دبی'
      },
      {
        src: require('@/assets/image/tour/دبی-2.jpg'),
        title: 'برج خلیفه'
      },
      {
        src: require('@/assets/image/tour/دبی-3.jpg'),
        title: 'دهکده جهانی دبی'
      },
      {
        src: require('@/assets/image/tour/دبی-4.jpg'),
        title: 'مرکز خرید مرکاتو'
      },
    ],
    imageDialog: false,
  }),
  methods: {

  },
  created() {
    // console.log(store);
    document.title = 'تور 4 شب دبی|تور لحظه آخری دبی'
    let newObjectDate4 = [
      {
        نام: 'Sun & sand (downtown)',
        درجه: 3,
        موقعیت: 'دیره',
        دوتخته: '13900000',
        تکنفره: '18700000',
        کودک: '8900000',
      },
      {
        نام: 'Furtune pearl',
        درجه: 3,
        موقعیت: 'دیره',
        دوتخته: '14300000',
        تکنفره: '19300000',
        کودک: '9000000',
      },
      {
        نام: 'phoencia',
        درجه: 3,
        موقعیت: 'دیره',
        دوتخته: '14500000',
        تکنفره: '19700000',
        کودک: '9200000',
      },
      {
        نام: 'Golden tulip',
        درجه: 4,
        موقعیت: 'دیره',
        دوتخته: '15000000',
        تکنفره: '20900000',
        کودک: '9500000',
      },
      {
        نام: 'avenue',
        درجه: 4,
        موقعیت: 'دیره',
        دوتخته: '16300000',
        تکنفره: '23400000',
        کودک: '10000000',
      },
      {
        نام: 'City season',
        درجه: 4,
        موقعیت: 'دیره',
        دوتخته: '16500000',
        تکنفره: '23780000',
        کودک: '10200000',
      },
      {
        نام: 'Signature albarsha',
        درجه: 4,
        موقعیت: 'البرشا',
        دوتخته: '17300000',
        تکنفره: '25400000',
        کودک: '10500000',
      },
      {
        نام: 'Metropolitan',
        درجه: 4,
        موقعیت: 'شیخ زاید',
        دوتخته: '18900000',
        تکنفره: '28600000',
        کودک: '11400000',
      },
      {
        نام: 'Emirate grand',
        درجه: 4,
        موقعیت: 'شیخ زاید',
        دوتخته: '19200000',
        تکنفره: '28900000',
        کودک: '11500000',
      },
      {
        نام: 'Novotel deira',
        درجه: 4,
        موقعیت: 'دیره',
        دوتخته: '20100000',
        تکنفره: '31900000',
        کودک: '12200000',
      },
      {
        نام: 'Hyatt regency',
        درجه: 5,
        موقعیت: 'دیره',
        دوتخته: '21300000',
        تکنفره: '33400000',
        کودک: '12600000',
      },
      {
        نام: 'Crown plaza jumeirah',
        درجه: 5,
        موقعیت: 'جمیرا',
        دوتخته: '21600000',
        تکنفره: '33900000',
        کودک: '12700000',
        کودک2: '',
      },
      {
        نام: 'Sheraton grand',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: '24500000',
        تکنفره: '39600000',
        کودک: '14200000',
      },
      {
        نام: 'fairmont',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: '25800000',
        تکنفره: '42400000',
        کودک: '14300000',
      },
      {
        نام: 'Sheraton Dubai mall',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: '28900000',
        تکنفره: '49000000',
        کودک: '16400000',
      },
      {
        نام: 'Movenpick jumeirah',
        درجه: 5,
        موقعیت: 'جمیرا',
        دوتخته: '30000000',
        تکنفره: '50200000',
        کودک: '16900000',
      },
      {
        نام: 'Hilton al habtoor',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: '30300000',
        تکنفره: '51500000',
        کودک: '17000000',
        کودک2: '',
      },
      {
        نام: 'Grand hyatt',
        درجه: 5,
        موقعیت: 'بردبی',
        دوتخته: '33900000',
        تکنفره: '58500000',
        کودک: '21500000',
      },
      {
        نام: 'Hilton jumeirah',
        درجه: 5,
        موقعیت: 'جمیرا',
        دوتخته: '44700000',
        تکنفره: '80300000',
        کودک: '24400000',
      },
      {
        نام: 'conrad',
        درجه: 5,
        موقعیت: 'شیخ زاید',
        دوتخته: '45300000',
        تکنفره: '81500000',
        کودک: '24700000',
      },
    ]
    var pricesItemsDubai = []
    for (let i = 0; i < newObjectDate4.length; i++) {
      pricesItemsDubai.push({
        id: i + 1,
        name: newObjectDate4[i].نام,
        star: newObjectDate4[i].درجه,
        place: newObjectDate4[i].موقعیت,
        duble: newObjectDate4[i].دوتخته,
        single: newObjectDate4[i].تکنفره,
        baby: newObjectDate4[i].کودک,
        baby2: newObjectDate4[i].کودک2,
      })
      this.pricesItemsDubai = pricesItemsDubai;
    }

  }
}
</script>
