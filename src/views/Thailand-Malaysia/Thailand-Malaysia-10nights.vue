<template>
  <div class="mt-9 mt-sm-12 pt-12">
    <v-row justify="center">
      <div class="widthAll relative">
        <img class="widthAll backgroundImageTour" src="@/assets/image/tour/tour-background26.jpg" alt="">
        <div class="tourImageBackground"></div>
      </div>
      <div class="mb-12 indexDiv main-div" style="z-index: 3">
        <div>
          <span class="white--text countryNmae px-12">کوالالامپور - پوکت - بانکوک</span>
        </div>
        <div>
          <b class="white--text px-12 tour-date">
            تاریخ حرکت : 1 فروردین
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
                :class="tab == 4 && 'activeTab'" @click="tab = 4">گالری تصاویر</h3>
            </v-slide-item>
          </v-slide-group>
        </v-row>
        <v-row class="white py-md-9 px-6">
          <div class="widthAll" v-if="tab == 0">
            <ul class=" mr-md-6">
              <li class="my-3 grey--text text--darken-3 bold text-tour d-inline-block halfLi">
                قیمت های اعلام شده بر حسب تومان می‌باشد.
              </li>

            </ul>
            <v-row>
              <v-col cols="12" lg="12">
                <v-row class="mb-2" justify="center">
                  <v-data-table :headers="pricesHeader" hide-default-footer :items="pricesItems" :items-per-page="50"
                    class=" rounded-lg even-odd-tabel tabelTourId"
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
                  <li class="my-3 grey--text text--darken-3 bold text-tour d-inline-block halfLi">ویزای توریستی</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour d-inline-block halfLi">سیم کارت به هر خانواده
                  </li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour d-inline-block halfLi">پرواز های داخلی و خارجی
                  </li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour d-inline-block halfLi">بیمه سفر تا سقف 10.000
                    یورو</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour d-inline-block halfLi">ترانسفر فرودگاهی و بین
                    شهری</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour d-inline-block halfLi">10 شب اقامت به‌همراه
                    صبحانه</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour d-inline-block halfLi">گشت شهری 4 ساعته در
                    تمامی شهرها</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour d-inline-block halfLi">پرواز کویتی به‌همراه
                    اقامت در هتل 5 ستاره فرودگاه کویت در رفت و برگشت</li>
                </ul>
              </v-col>
            </v-row>
          </div>
          <div class="widthAll" v-else-if="tab == 2">
            <v-row>
              <v-col cols="12" md="12">
                <h3 class="tabel-tour-title red--text mt-6 mt-sm-3 mt-md-0">مدارک مورد نیاز تورهای تایلند</h3>
                <ul class="my-6 mr-9">
                  <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">یک قطعه عکس 4 * 6</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">اصل پاسپورت با 7 ماه اعتبار</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">انجام واکسیناسیون هر 2 دوز</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">کپی کارت ملی و تمام صفحات
                    شناسنامه</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">تمکن مالی 6 ماهه با موجودی حداقل
                    50.000.000 تومان مهر برجسته</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">همراه داشتن تست PCR تا 72 ساعت
                    قبل از پرواز(از واکسن مرحله 2 حداقل 15 روز گذشته باشد)</li>
                </ul>
              </v-col>
            </v-row>
          </div>
          <div class="widthAll" v-else-if="tab == 3">
            <v-row>
              <v-col cols="12" md="6">
                <h3 class="tabel-tour-title red--text mt-6 mt-sm-3 mt-md-0">نکات ضروری تورهای تایلند</h3>
                <ul class="my-6 mr-9">
                  <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">کلیه نرخ ها به تومان می‌باشد.
                  </li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">مسئول کنترل پاسپورت به‌عهده آژانس
                    همکار است.</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">تزریق هر دو نوبت واکسن الزامیست
                    یا تست PCR سه روز قبل از پرواز ضروری است.</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">نرخ کودک زیر 2 سال (INF)
                    14.000.000 تومان می‌باشد.</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">پرداخت 70% کل مبلغ تور الزامیست
                    در غیر این صورت چنانچه نوسانات دلار بالای 5% باشد شامل مسافرین محترم می‌شود.</li>
                  <li class="my-3 grey--text text--darken-3 bold text-tour text-justify">پکیج چارتر و غیر قابل استرداد
                    می‌باشد و با جایگزینی اسامی و پرداخت 20% مبلغ کل تور تا 10 روز قبل از پرواز امکان پذیر است.</li>
                </ul>
              </v-col>
              <v-col cols="12" md="6">
                <v-row justify="center">
                  <v-data-table style="box-shadow: 0 0px 21px #dbdbdb !important;" hide-default-footer hide-default-header
                    :headers="flightHeaders" :items="flights"
                    class="even-odd-tabel rounded-lg hideOver tabelTour tourPlan mt-md-12">
                  </v-data-table>
                </v-row>
              </v-col>
            </v-row>
          </div>
          <div class="widthAll" v-else-if="tab == 4">
            <v-row justify="center">

              <div class="d-inline-block galeryImageParent" v-for="(item, i) in images" :key="i">
                <v-img class="galeryImage cursorPointer rounded-lg ma-1" @click="imageNumber = i; imageDialog = true"
                  :src="item.src" :alt="item.title"></v-img>
              </div>
            </v-row>

            <v-dialog v-model="imageDialog" width="1000">
              <div class="relative">

                <v-carousel v-model="imageNumber">
                  <v-carousel-item v-for="(item, i) in images" :key="i">
                    <img :src="item.src" :alt="item.title">
                  </v-carousel-item>
                </v-carousel>
                <v-icon class="absolute cursorPointer" color="white" @click="imageDialog = false"
                  style="top:5px;right:5px">mdi-close</v-icon>
              </div>
            </v-dialog>
          </div>
        </v-row>
        <call-us />
      </div>
    </v-row>
  </div>
</template>

<style scoped>
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
  background: #ff9d7d54;
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

.even-odd-tabel tbody tr:nth-child(even) {
  background-color: #0083bb29 !important;
}

.even-odd-tabel th {
  background-color: #0083bb56 !important;
}

.theme--light.v-data-table .v-data-footer,
.v-application--is-ltr .v-data-footer__pagination {
  direction: ltr !important;
}

.v-application--is-ltr .v-data-footer__select {
  margin-left: 14px;
  margin-right: auto;
}

.even-odd-tabel {
  width: 100% !important;
}

.v-data-table,
.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,
.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,
.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),
.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,
.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),
.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th {
  border: 1px solid #9d9d9d;
  font-weight: bold;
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

.halfLi {
  width: 49%
}

.even-odd-tabel td:nth-child(2) .bold {
  font-size: 15px;
  /* color: #ff6062 !important;
  text-shadow: 0 0 3px #ff7765; */
}



@media (min-width:960px) and (max-width:1263px) {
  .main-div {
    margin-top: -245px;
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
    margin-top: -205px;
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

  .halfLi {
    width: 100%
  }

  @media (max-width:774px) {
    .main-div {
      margin-top: -155px;
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

    .tabelParentFloat {
      float: unset !important;
      width: 100%;
    }
  }
}

@media (max-width:599px) {
  .indexDiv {
    width: 95% !important;
  }

  .main-div {
    margin-top: -170px;
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
    /* justify-content: center; */
  }

  .tourPlan>.v-data-table__wrapper .v-data-table__mobile-row {
    /* display: inline-block;
    width: 50%;
    position: relative; */
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

  .v-data-table>.v-data-table__wrapper>table>tbody>tr>td,
  .theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,
  .theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),
  .theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,
  .theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),
  .theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th {
    border: unset;
  }

  .galeryImageParent {
    width: 95%;
  }

  .halfLi {
    width: 100%
  }

  .tabelParentFloat {
    float: unset !important;
    width: 100%;
  }
}
</style>

<script>
import CallUs from '@/components/CallUs.vue';
export default {
  name: 'thailand-tour',
  components: {
    CallUs

  },
  data: () => ({
    tab: 0,
    pricesHeader: [
      { text: 'ردیف', align: 'center', sortable: true, value: 'id', width: '90px' },
      { text: 'هتل', filterable: true, align: 'center', sortable: true, value: 'name' },
      { text: 'درجه', sortable: true, value: 'star', align: 'center', width: '100px', },
      { text: 'دو‌تخته', filterable: true, align: 'center', sortable: true, value: 'duble' },
      { text: 'یک تخته', filterable: true, align: 'center', sortable: true, value: 'single' },
      { text: 'کودک با تخت', sortable: true, value: 'baby', align: 'center', },
      { text: 'کودک بدون تخت', sortable: false, value: 'baby2', align: 'center', },
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
        from: 'پرواز از تهران به کویت',
        time1: '03:30',
        time2: '02:00',
        text1: 'IKA-KU',
        text2: 'KU 516'
      },
      {
        from: 'پرواز از کویت به کوالالامپور',
        time1: '22:40',
        time2: '09:25',
        text1: 'KU-KUL',
        text2: 'KU 409'
      },
      {
        from: 'پرواز از بانکوک به کویت',
        time1: '07:10',
        time2: '04:10',
        text1: 'BKK-KU',
        text2: 'KU 414'
      },
      {
        from: 'پرواز از کویت به تهران',
        time1: '02:15',
        time2: '22:50',
        text1: 'KU-IKA',
        text2: 'KU 515'
      },
    ],
    images: [
      {
        src: require('@/assets/image/tour/تایلند-مالزی000-1.jpg'),
        title: 'Phra Nang Beach'
      },
      {
        src: require('@/assets/image/tour/تایلند-مالزی000-2.jpg'),
        title: 'Wiang kum kam'
      },
      {
        src: require('@/assets/image/tour/تایلند-مالزی000-3.jpg'),
        title: 'Khao Sok National Park'
      },
      {
        src: require('@/assets/image/tour/تایلند-مالزی000-4.jpg'),
        title: 'Cameron Highlands'
      },
      {
        src: require('@/assets/image/tour/تایلند-مالزی000-5.jpg'),
        title: 'Kuala lampur'
      },
      {
        src: require('@/assets/image/tour/تایلند-مالزی000-6.jpg'),
        title: 'Kuala lampur'
      },
    ],
    imageNumber: 0,
    pricesItems: [
      {
        id: 1,
        name: 'SHANGRILA',
        star: 'TOP 5',
        duble: '109.000.000',
        single: '129.000.000',
        baby: '99.000.000',
        baby2: '89.000.000'
      },
      {
        id: 2,
        name: 'MOVENPICK SUKHUMVIT',
        star: '5',
        duble: '109.000.000',
        single: '129.000.000',
        baby: '99.000.000',
        baby2: '89.000.000'
      },
      {
        id: 3,
        name: 'KALIMA RESOIT',
        star: '5',
        duble: '109.000.000',
        single: '129.000.000',
        baby: '99.000.000',
        baby2: '89.000.000'
      },
    ],
    imageDialog: false,
  }),
  methods: {

  },
  created() {
    window.scrollTo(0, 0);
  }
}
</script>
