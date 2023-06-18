<template>
  <div class="mt-9 mt-sm-12 pt-12">
    <v-row justify="center">
      <div class="widthAll relative">
        <v-skeleton-loader :loading="loading" type="image">
          <img class="widthAll backgroundImageTour" :src="'https://panel.ahuantours.com/uploads/' + tour.backImage"
            alt="" />
          <div class="tourImageBackgroundPackage"></div>
        </v-skeleton-loader>
      </div>
      <div class="mb-12 indexDiv main-div" style="z-index: 3">
        <div :class="loading == true ? 'pt-4' : ''">
          <v-skeleton-loader :class="loading == true ? 'mt-md-12 pt-lg-12' : ''" :loading="loading" type="chip">
            <span class="white--text countryNmae px-12">{{ tour.name1 }}</span>
          </v-skeleton-loader>
        </div>
        <div>
          <v-skeleton-loader :class="loading == true ? 'mt-2' : ''" :loading="loading" type="heading">
            <b class="white--text px-12 tour-date">{{ tour.flightDays }}</b>
          </v-skeleton-loader>
        </div>
        <v-row class='pt-6 pt-md-12' :class="loading == true ? '' : 'mt-9 mt-sm-0 mt-lg-12 '" style="">
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
                :class="tab == 2 && 'activeTab'" @click="tab = 2">برنامه سفر</h3>
            </v-slide-item>
            <v-slide-item>
              <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative"
                :class="tab == 3 && 'activeTab'" @click="tab = 3">مدارک مورد نیاز</h3>
            </v-slide-item>
            <v-slide-item>
              <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative"
                :class="tab == 4 && 'activeTab'" @click="tab = 4">نکات ضروری</h3>
            </v-slide-item>
            <v-slide-item>
              <h3 class="py-2 py-md-4 px-2 px-sm-4 px-lg-8 cursorPointer tabTitles relative"
                :class="tab == 5 && 'activeTab'" @click="tab = 5">گالری تصاویر</h3>
            </v-slide-item>
          </v-slide-group>
        </v-row>
        <v-row class="white py-md-9 px-6">
          <div class="widthAll" v-if="tour.packageHotelPrices && tour.packageHotelPrices.length > 0 && tab == 0">
            <h4 class="mb-4 mt-4 mt-md-0">
              <v-icon size="5" color="red" class="ml-2">mdi-circle</v-icon>
              قیمت های اعلام شده بر حسب تومان می باشد.
            </h4>
            <v-row>
              <v-col cols="12" lg="12">
                <v-row class="mb-2" justify="center">
                  <v-data-table :loading="loading" loading-text="در حال پردازش اطلاعات..." :headers="pricesHeaderIstanbul"
                    hide-default-footer :items="pricesItemsIstanbul" :items-per-page="50"
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
          <div class="widthAll" v-if="tour.packagePersonPrices && tour.packagePersonPrices.length > 0 && tab == 0">
            <v-row justify="center">
              <v-col v-if="tour.packagePersonPrices.length > 0" cols="12" md="12" class="mb-6 mb-md-0">
                <v-row class="mb-2" justify="center">
                  <h2 class="tabel-tour-title">اقامت در هتل های<span class="red--text"> {{ tour.hotel }}
                      ستاره</span></h2>
                </v-row>
                <v-row class="mt-3" justify="center">
                  <v-data-table hide-default-footer hide-default-header style="box-shadow: 0 0 21px #dbdbdb !important;"
                    :headers="priceHeaders" :items="prices" class="even-odd-tabel rounded-lg hideOver tabelTour">
                    <!-- <template v-slot:footer>
                      <div>
                        <v-row class="py-4 body-2 text-center" justify="center"
                          style="font-family: Byekan !important;border-top:1px solid rgb(212, 212, 212)">

                          نرخ INF (زیر 2 سال) 10% ریالی + 10% ارزی نرخ بزرگسال
                        </v-row>
                      </div>
                    </template> -->
                  </v-data-table>
                </v-row>
              </v-col>
            </v-row>
          </div>
          <div class="widthAll" v-else-if="tab == 1">
            <v-row>
              <v-col cols="12">
                <v-skeleton-loader :loading="loading" type="list-item-three-line">
                  <ul class=" mr-md-6">
                    <li v-for="(item, i) in tour.packageServices" :key="i"
                      class="my-3 grey--text text--darken-3 bold text-tour d-inline-block halfLi">
                      {{ item.service }}
                    </li>
                  </ul>
                </v-skeleton-loader>
              </v-col>
            </v-row>
          </div>
          <div class="widthAll" v-else-if="tab == 2">
            <v-row>
              <v-col cols="12" lg="6">
                <p v-for="(program, l) in tour.packagePrograms" :key="l"
                  class="mt-4 mt-lg-0 mb-3 grey--text text--darken-3 bold text-tour"
                  style="font-family:Byekan !important">
                  {{ program.program }}
                </p>
              </v-col>
              <div class="d-lg-none widthAll my-sm-4 px-12">
                <hr class=" mx-12 my-4">
              </div>
              <v-col cols="12" lg="6">
                <v-row class="mb-7" justify="center" align="center">
                  <h2 class="tabel-tour-title"> هواپیمایی</h2>
                  <img class="mx-1" v-for="(airline, k) in tour.airlines" :key="k" height="40"
                    :src="airline == 'IranAir' ? require('@/assets/image/airlines/iranair.png') : airline == 'Mahan Air' ? require('@/assets/image/airlines/mahan.png') : airline == 'Turkish Airlines' ? require('@/assets/image/airlines/turkish.png') : airline == 'Emirates Airlines' ? require('@/assets/image/airlines/emirates.png') : ''"
                    :alt="airline">
                  <h2 class="tabel-tour-title" v-for="(airline, m) in tour.airlines" :key="'airline' + m">{{ airline }}
                  </h2>
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
          <div class="widthAll" v-else-if="tab == 3">
            <v-row>
              <v-col cols="12" md="12">
                <v-skeleton-loader :loading="loading" type="list-item-three-line">
                  <div class="widthAll" v-for="(pack, i) in packageDocs" :key="i">
                    <h3 class="tabel-tour-title red--text mt-6 mt-sm-3 mt-md-0">{{ pack.title }}</h3>
                    <ul class="my-6 mr-9">
                      <li v-for="(des, i) in pack.descriptions" :key="i"
                        class="my-3 grey--text text--darken-3 bold text-tour text-justify">{{ des }}</li>
                    </ul>
                  </div>
                </v-skeleton-loader>
              </v-col>
            </v-row>
          </div>
          <div class="widthAll" v-else-if="tab == 4">
            <v-row>
              <v-col cols="12" md="12">
                <v-skeleton-loader :loading="loading" type="list-item-three-line">
                  <h3 class="tabel-tour-title red--text mt-6 mt-sm-3 mt-md-0">نکات ضروری تورهای {{ (tour.packageGroup &&
                    tour.packageGroup.name)
                    && tour.packageGroup.name
                  }}
                  </h3>
                  <ul class="my-6 mr-9">
                    <li v-for="(Tip, l) in tour.packageEssentialTips" :key="l"
                      class="my-3 grey--text text--darken-3 bold text-tour text-justify">{{ Tip.essentialTip }}</li>
                  </ul>
                </v-skeleton-loader>
              </v-col>
            </v-row>
          </div>
          <div class="widthAll" v-else-if="tab == 5">
            <v-row justify="center">
              <v-skeleton-loader :loading="loading" type="date-picker-days">
                <div class="d-inline-block galeryImageParent white" v-for="(item, i) in tour.packagePhotoes" :key="i">
                  <v-img class="galeryImage cursorPointer rounded-lg ma-1" @click="imageNumber = i; imageDialog = true"
                    :src="'https://panel.ahuantours.com/uploads/' + item.photo" :alt="item.description"></v-img>
                </div>
              </v-skeleton-loader>
            </v-row>

            <v-dialog v-model="imageDialog" width="1000">
              <div class="relative white">

                <v-carousel v-model="imageNumber">
                  <v-carousel-item v-for="(item, i) in tour.packagePhotoes" :key="i">
                    <img :src="'https://panel.ahuantours.com/uploads/' + item.photo" :alt="item.description">
                  </v-carousel-item>
                </v-carousel>
                <v-icon class="absolute cursorPointer" color="white" @click="imageDialog = false"
                  style="top:5px;right:5px">mdi-close</v-icon>
              </div>
            </v-dialog>
          </div>
        </v-row>
        <router-link to="/tour/1020" class="">
          <img class="widthAll rounded-xl d-none d-md-block mt-6" :src="require('@/assets/image/tour/site -russia.jpg')"
            alt="">
          <img class="widthAll rounded-xl d-block d-md-none mt-6" :src="require('@/assets/image/tour/site -russia.jpg')"
            alt="">
        </router-link>
        <!-- <router-link to="/Visline/" class="">
          <img class="widthAll rounded-xl d-none d-md-block mt-6" src="@/assets/image/ویزلاین2.jpg" alt="">
          <img class="widthAll rounded-xl d-block d-md-none mt-6" src="@/assets/image/ویزلاین2 موبایل.jpg" alt="">
        </router-link> -->
        <call-us />
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
  background: #ffa69a66;
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
  background-color: #ff636d49 !important;
}

.even-odd-tabel th {
  background-color: #ff636e91 !important;
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

.backgroundImageTour {
  max-height: 383px
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
}
</style>

<script>
import CallUs from '@/components/CallUs.vue';
import axios from 'axios'
axios.defaults.headers.common['Client-Token'] = 'Ahuan-Wapi?123'
export default {
  name: 'Istanbul-3night',
  components: {
    CallUs

  },
  data: () => ({
    tour: {},
    tab: 0,
    pricesHeaderIstanbul: [
      // { text: '', sortable: false, value: 'image', align: 'center', },
      { text: 'ردیف', align: 'center', sortable: true, value: 'id', width: '90px' },
      { text: 'هتل', filterable: true, align: 'center', sortable: true, value: 'name' },
      { text: 'درجه', sortable: true, value: 'star', align: 'center', width: '100px', },
      { text: 'موقعیت', sortable: true, value: 'place', align: 'center', },
      { text: 'دو تخته', sortable: true, value: 'duble', align: 'center', },
      { text: 'یک تخته', sortable: true, value: 'single', align: 'center', },
      { text: 'کودک با تخت', sortable: true, value: 'baby', align: 'center', },
      { text: 'کودک بدون تخت', sortable: false, value: 'baby2', align: 'center', },

    ],
    pricesItemsIstanbul: [],
    imageNumber: 0,
    istanbulImages: [
      require('@/assets/image/tour/استانبول-1.jpg'),
      require('@/assets/image/tour/استانبول-2.jpg'),
      require('@/assets/image/tour/استانبول-3.jpg'),
      require('@/assets/image/tour/استانبول-4.jpg'),
      require('@/assets/image/tour/استانبول-5.jpg'),
      require('@/assets/image/tour/استانبول-6.jpg'),
      // '/folders/image/tour/استانبول-7.jpg',
    ],
    imageDialog: false,
    packageDocs: [],
    loading: true,
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
        time1: '04:30',
        time2: '07:20',
        text1: 'EK978',
        text2: 'IKADXB'
      },
      {
        from: 'پرواز از دبی به پاریس',
        time1: '08:20',
        time2: '13:30',
        text1: 'EK073',
        text2: 'DXBCDG'
      },
      {
        from: 'پرواز از پاریس به دبی',
        time1: '15:35',
        time2: '00:20',
        text1: 'EK074',
        text2: 'CDGDXB'
      },
      {
        from: 'پرواز از دبی به تهران',
        time1: '01:20',
        time2: '04:00',
        text1: 'EK977',
        text2: 'DXBIKA'
      },
    ],
    priceHeaders: [
      {
        text: 'درجه هتل ها',
        align: 'center',
        sortable: false,
        value: 'name',
      },
      { text: '5 ستاره', sortable: false, value: 'calories', align: 'center', },

    ],
    prices: [],
  }),
  methods: {
    getTour(id) {
      let self = this
      axios.get('https://panel.ahuantours.com/api/package/' + id)
        .then(function (response) {
          self.tour = response.data
          let names = response.data.name ? response.data.name.split('~') : ''
          self.tour.name1 = names[0].replace('/', '')
          self.tour.name2 = names[1]
          self.tour.airlines = response.data.airlines.split(', ')
          self.pricesItemsIstanbul = response.data.packageHotelPrices.map((x) => {
            return {
              name: x.hotel,
              star: x.star,
              place: x.location,
              duble: x.dbl,
              single: x.sgl,
              baby: x.extBed,
              baby2: x.noBed,
            };
          });
          for (let i = 0; i < self.pricesItemsIstanbul.length; i++) {
            self.pricesItemsIstanbul[i].id = i + 1
          }
          let test = response.data.packageDocs
          test = test.reduce((x, y) => {

            (x[y.title] = x[y.title] || []).push(y);

            return x;

          }, {});

          let keys = Object.keys(test)
          for (let i = 0; i < keys.length; i++) {
            let desArray = test[keys[i]]
            let des = []
            for (let i = 0; i < desArray.length; i++) {
              des.push(desArray[i].description)
            }
            self.packageDocs.push({
              title: keys[i],
              descriptions: des
            })
          }
          console.log(self.packageDocs);
          self.prices = response.data.packagePersonPrices.map((x) => {
            return {
              name: x.title,
              calories: x.price,
            };
          });
          self.loading = false
          document.title = 'تور ' + names[0].replace('/', '') + ' | تور لحظه آخری '
          self.flights = response.data.packageFlights.map((x) => {
            return {
              from: x.flightPath,
              time1: x.depTime,
              time2: x.arrTime,
              text1: x.flightNo,
              text2: x.airportsPath
            };
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          self.loading = false
        })
    }
  },
  created() {
    this.getTour(this.$route.params.id)
    console.log(this.$route.params.id);
    window.scrollTo(0, 0);
    document.title = 'تور لحظه آخری'

  }
}
</script>
