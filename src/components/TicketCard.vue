<template>
  <div class="widthAll">
    <div class="hideOver my-4" v-for="(item, i) in tickets" :key="i">
      <v-skeleton-loader class="textLoader widthAll" type="image">
        <div class="widthAll white relative " style="border: 1px solid ;border-color: #efefef !important;">
          <div class="absolute rounded-circle ticketCircle" style="right: -25px;top:50%;margin-top: -25px;">
          </div>
          <div class="absolute rounded-circle ticketCircle" style="left: -25px;top:50%;margin-top: -25px;">
          </div>
          <div class="absolute rounded-circle ticketCircle d-none d-sm-inline-block"
            style="left: 30%;bottom:-25px;margin-left: -25px;"></div>
          <div class="absolute rounded-circle ticketCircle d-none d-sm-inline-block"
            style="left: 30%;top:-25px;margin-left: -25px;"></div>
          <v-row class="heightAll">
            <div class="pt-2 rightSectionTicket">
              <v-row class="mt-1 mt-sm-8 mr-2 mr-sm-6" align="center">
                <img
                  :src="item.Airline == 'I3' ? require('@/assets/image/لوگوی_آتا.png') : item.Airline == 'Y9' ? require('@/assets/image/لوگوی_کیش ایر.png') : item.Airline == 'JI' ? require('@/assets/image/لوگوی_معراج.png') : item.Airline == 'QB' ? require('@/assets/image/لوگوی_قشم ایر.png') : item.Airline == 'IV' ? require('@/assets/image/لوگوی_کاسپین.png') : item.Airline == 'HH' ? require('@/assets/image/لوگوی_تابان.png') : item.Airline == 'EP' ? require('@/assets/image/لوگوآسمان2.jpg') : item.Airline == 'ZV' ? require('@/assets/image/zagros.png') : item.Airline == 'VR' ? require('@/assets/image/لوگوی_وارش.png') : item.Airline == 'NV' ? require('@/assets/image/لوگوی_نفت.png') : item.Airline == 'IRZ' ? require('@/assets/image/لوگوی_ساها.png') : ''"
                  alt="" class="rounded-circle pa-1" width="50" height="50" style="box-shadow: 1px 1px 4px #b3b3b3">
                <div class="d-block relative">
                  <span class="mx-2 mx-sm-2 body-2 absolute white px-4 mt-2 mt-sm-0"
                    style="font-family: Byekan !important;">{{ item.originCity }}</span>
                  <span class="absolute body-2 grey--text text--darken-1 dateTicket"
                    style="font-family: Byekan !important;bottom: 25px;">{{ item.dayName }} {{ item.fromDate }}</span>
                  <span class="absolute caption typeFlightTicket" style="font-family: Byekan !important;">سیستمی</span>
                  <span class="mx-2 mx-sm-6 body-2 absolute white pr-4 pl-2 mt-2 mt-sm-0"
                    style="font-family: Byekan !important;left:0">{{ item.destinationInternal }}</span>
                  <img src="@/assets/image/flight-go-flesh.png" class="flight-go-flesh mt-4 mt-sm-0 mx-6" alt=""
                    height="12">
                </div>
              </v-row>
              <v-row class=" my-4 mr-4 mr-sm-7">
                <span class="body-2" style="font-family: Byekan !important;">{{ item.Airline == 'I3' ? 'آتا' :
                  item.Airline == 'Y9' ? 'کیش‌ایر' : item.Airline == 'QB' ? 'قشم‌ایر' : item.Airline == 'IV' ? 'کاسپین' :
                    item.Airline == 'EP' ? 'آسمان' : item.Airline == 'VR' ? 'وارش' :
                      item.Airline == 'HH' ? 'تابان' : item.Airline == 'ZV' ? 'زاگرس' : item.Airline == 'NV' ? 'نفت' :
                        item.Airline == 'JI' ? 'معراج' : item.Airline == 'IRZ' ? 'ساها' :
                          'نامعلوم' }}</span>
                <span class="mr-8 mr-sm-7 pr-1 body-2" style="font-family: Byekan !important;">{{
                  item.DepartureTime }}</span>
                <v-spacer></v-spacer>
                <span class="ml-5 ml-sm-7 ml-md-10 pl-2 body-2" style="font-family: Byekan !important;">{{
                  item.ArrivalTime }}</span>
              </v-row>
            </div>
            <div class="leftSectionTicket">
              <v-row class="heightAll" justify="center">
                <div class="widthAll text-center my-3">
                  <div v-if="item.type == 'C' || item.type == 'X'" class="ticketPrice mt-3 mt-sm-12">
                    <span v-if="item.type == 'C'" class="red--text bold">تکمیل ظرفیت</span>
                    <span v-if="item.type == 'X'" class="red--text bold">کنسل شده</span>
                  </div>
                  <div v-else class="ticketPrice mt-3 mt-sm-0">
                    <span class="">
                      قیمت
                    </span>
                    <br>
                    <h3 class="mb-3 d-inline-block">
                      {{ separatePrice(item.price / 10) }}
                    </h3>
                    <h3 class="mb-3 d-inline-block mr-2" style="font-family: Byekan !important;">تومان</h3>
                  </div>
                  <div v-if="item.type != 'C' && item.type != 'X'" class="ticketButtons">
                    <v-btn v-if="isMainPage" class="pl-6 pr-6 pl-lg-12 pr-lg-12" color="red" outlined
                      @click="choosedTicket = item; showNextPage()">
                      رزرو بلیط
                    </v-btn>
                    <v-btn v-else-if="isNextPage" class="pl-6 pr-6" color="red" outlined @click="reserveTicket(item)">
                      تغییر پرواز انتخابی
                    </v-btn>
                    <br>
                    <v-btn class="px-1 px-lg-7 mt-2" color="blue darken-2" outlined
                      @click="activeTab = 0; ticketDetailsModal = true; choosedTicket = item; returnCRCNRules(choosedTicket.fare.CRCNRules)">مشاهده
                      جزییات</v-btn>
                  </div>
                </div>
              </v-row>
            </div>

          </v-row>
        </div>
      </v-skeleton-loader>
    </div>
    <v-dialog width="1400" v-model="ticketDetailsModal" style="z-index: 999999;">
      <v-sheet class="relative pa-2" style="min-height:500px">
        <v-row align="start">
          <v-icon class="ma-1" @click="ticketDetailsModal = false">mdi-close</v-icon>
          <v-spacer></v-spacer>
          <v-btn v-if="isMainPage" dark class="px-sm-6 py-sm-6 ma-3 absolute"
            style="position: absolute;left: 0;z-index: 2;top: 0;" outlined color="red arken-2"
            @click="scrollTop(); ticketDetailsModal = false; showNextPage()">
            انتخاب بلیط
          </v-btn>
          <v-btn v-else-if="isNextPage" dark class="px-sm-6 py-sm-6 ma-3 absolute"
            style="position: absolute;left: 0;z-index: 2;top: 0;" outlined color="red arken-2"
            @click="scrollTop(); ticketDetailsModal = false; reserveTicket(choosedTicket)">
            تغییر پرواز انتخابی
          </v-btn>
        </v-row>
        <v-tabs width="300" v-model="activeTab" class="mt-2" flat>
          <v-tabs-slider color="red"></v-tabs-slider>
          <v-tab style="width:fit-content" v-for="item in ticketDetailsTabs" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
        <v-tabs-items ltr v-model="activeTab" reverse style="direction:ltr !important">
          <v-tab-item>
            <v-card class="mt-sm-4 py-4" flat>
              <v-row>
                <v-col cols="12" md="9" class="pl-0">
                  <v-card flat class="grey lighten-3 ml-3 pa-4 rounded-lg ticketDetailsTabs">
                    <v-expansion-panels color="red" v-model="panelDetails">
                      <v-expansion-panel>
                        <v-expansion-panel-header color="grey lighten-3">
                          <v-row align="center">
                            <span class=" blue--text text--darken-3">0 0 0</span>
                            <v-icon large class="blue--text text--darken-1"
                              style="transform: rotate(225deg);">mdi-airplane</v-icon>
                            <h4 class="blue--text text--darken-1 mr-3">پرواز رفت ({{ choosedTicket.originCity }} -
                              {{ choosedTicket.destinationInternal }})</h4>
                            <v-divider vertical class="mx-4"></v-divider>
                            <div class="text-right">
                              <span class="grey--text caption widthAll mb-2 d-block"
                                style="font-family: Byekan !important;">مدت زمان پرواز</span>
                              <span class="font-weight-bold mt-4">
                                {{ getFlightHours(choosedTicket.DepartureTime, choosedTicket.ArrivalTime) }}
                              </span>
                            </div>
                          </v-row>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content class="white py-4">
                          <v-row align="center">
                            <v-col cols="12" sm="5" md="5" lg="3">
                              <v-row class="justify-center justify-sm-start">
                                <span class="body-2 ml-2" style="font-family: Byekan !important;">
                                  ({{ choosedTicket.enLongDate1 }})
                                </span>
                                <span class="body-2" style="font-family: Byekan !important;">
                                  {{ choosedTicket.longDate1 }}
                                </span>
                              </v-row>
                              <v-row class="mt-2 mt-sm-12 justify-center justify-sm-start">
                                <span class="body-2 ml-2" style="font-family: Byekan !important;">
                                  ({{ choosedTicket.enLongDate2 }})
                                </span>
                                <span class="body-2" style="font-family: Byekan !important;">
                                  {{ choosedTicket.longDate2 }}
                                </span>
                              </v-row>
                            </v-col>
                            <div class="d-block d-sm-none widthAll mx-12 px-12">
                              <v-divider class="my-2"></v-divider>
                            </div>
                            <v-col cols="12" sm="7" md="7" lg="4">
                              <v-row class="justify-center justify-sm-start">
                                <span class="body-2 grey--text text--darken-1" style="font-family: Byekan !important;">{{
                                  choosedTicket.DepartureTime }}</span>
                                <v-icon x-small class="mx-1 grey--text text--lighten-1">mdi-circle</v-icon>
                                <span class="body-2 grey--text text--darken-1" style="font-family: Byekan !important;">{{
                                  choosedTicket.originCity }}
                                  ،(Shahid Hashemi)</span>
                              </v-row>
                              <v-row
                                class="mt-2 mt-sm-4 mr-sm-1 caption grey--text text--darken-1 font-weight-bold justify-center justify-sm-start"
                                style="font-family: Byekan !important;">
                                مدت پرواز: {{ getFlightHours(choosedTicket.DepartureTime,
                                  choosedTicket.ArrivalTime) }}
                              </v-row>
                              <v-row class="mt-3 justify-center justify-sm-start">
                                <span class="body-2 grey--text text--darken-1" style="font-family: Byekan !important;">{{
                                  choosedTicket.ArrivalTime }}</span>
                                <v-icon x-small class="mx-1 grey--text text--lighten-1">mdi-circle</v-icon>
                                <span class="body-2 grey--text text--darken-1" style="font-family: Byekan !important;">{{
                                  choosedTicket.destinationInternal }}
                                  ،(Kish Island)</span>
                              </v-row>
                            </v-col>
                            <v-divider vertical class="my-2 d-none d-lg-block"></v-divider>
                            <div class="d-block d-lg-none widthAll mx-12 px-12">
                              <v-divider class="my-2"></v-divider>
                            </div>

                            <v-col cols="12" lg="5">
                              <v-row align="center" class="justify-center justify-sm-start">
                                <div class="d-inline-block">
                                  <v-row align="center">
                                    <img
                                      :src="choosedTicket.Airline == 'I3' ? require('@/assets/image/لوگوی_آتا.png') : choosedTicket.Airline == 'Y9' ? require('@/assets/image/لوگوی_کیش ایر.png') : choosedTicket.Airline == 'JI' ? require('@/assets/image/لوگوی_معراج.png') : choosedTicket.Airline == 'QB' ? require('@/assets/image/لوگوی_قشم ایر.png') : choosedTicket.Airline == 'IV' ? require('@/assets/image/لوگوی_کاسپین.png') : choosedTicket.Airline == 'HH' ? require('@/assets/image/لوگوی_تابان.png') : choosedTicket.Airline == 'EP' ? require('@/assets/image/لوگوآسمان2.jpg') : choosedTicket.Airline == 'ZV' ? require('@/assets/image/zagros.png') : choosedTicket.Airline == 'VR' ? require('@/assets/image/لوگوی_وارش.png') : choosedTicket.Airline == 'NV' ? require('@/assets/image/لوگوی_نفت.png') : choosedTicket.Airline == 'IRZ' ? require('@/assets/image/لوگوی_ساها.png') : ''"
                                      class="mr-sm-2" width="40" alt="">
                                    <span class="mr-2 body-2" style="font-family: Byekan !important;">
                                      {{ choosedTicket.Airline == 'I3' ? 'آتا' :
                                        choosedTicket.Airline == 'Y9' ? 'کیش‌ایر' : choosedTicket.Airline == 'QB' ?
                                          'قشم‌ایر' : choosedTicket.Airline == 'IV' ? 'کاسپین' :
                                            choosedTicket.Airline == 'EP' ? 'آسمان' : choosedTicket.Airline == 'VR' ?
                                              'وارش' :
                                              choosedTicket.Airline == 'HH' ? 'تابان' : choosedTicket.Airline == 'ZV' ?
                                                'زاگرس' : choosedTicket.Airline == 'NV' ? 'نفت' :
                                                  choosedTicket.Airline == 'JI' ? 'معراج' : choosedTicket.Airline == 'IRZ' ?
                                                    'ساها' :
                                                    'نامعلوم' }}
                                    </span>
                                  </v-row>
                                </div>
                                <v-divider vertical class="my-2 mx-3"></v-divider>
                                <div class="d-inline-block">
                                  <v-row class="caption grey--text " justify="center"
                                    style="font-family: Byekan !important;">شماره پرواز</v-row>
                                  <v-row class="caption font-weight-bold" justify="center"
                                    style="font-family: Byekan !important;">{{ choosedTicket.FlightNo }}</v-row>
                                </div>
                                <v-divider vertical class="my-2 mx-3"></v-divider>
                                <div class="d-inline-block">
                                  <v-row class="caption grey--text " justify="center"
                                    style="font-family: Byekan !important;">کلاس</v-row>
                                  <v-row class="caption font-weight-bold" justify="center"
                                    style="font-family: Byekan !important;">Economy</v-row>
                                </div>
                                <v-divider vertical class="my-2 mx-3"></v-divider>
                                <div class="d-inline-block">
                                  <v-row class="caption grey--text " justify="center"
                                    style="font-family: Byekan !important;">مدل هواپیما</v-row>
                                  <v-row class="caption font-weight-bold" justify="center"
                                    style="font-family: Byekan !important;">{{
                                      choosedTicket.AircraftTypeName ? choosedTicket.AircraftTypeName : '-'
                                    }}</v-row>
                                </div>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-card>
                </v-col>
                <v-col cols="12" md="3" class="">
                  <v-card flat class="grey lighten-3 py-4 rounded-lg ticketDetailsTabs px-sm-12 px-md-4 px-lg-12">
                    <div class="blue--text text--darken-1 text-center">
                      جزییات قیمت (تومان)
                    </div>
                    <div class="mt-6 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs">
                      <v-row align="center">
                        <v-col cols="5">{{ Passenger.peaple }} بزرگسال</v-col>
                        <v-col cols="2" class="">
                          <v-row justify="center">
                            <v-icon small>mdi-close</v-icon>
                          </v-row>
                        </v-col>
                        <v-col v-if="choosedTicket.fare" cols="5" class="ltr">
                          {{ separatePrice(choosedTicket.fare.AdultTotalPrice / 10) }}
                        </v-col>
                      </v-row>
                    </div>
                    <div v-if="Passenger.child > 0" class="mt-4 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs">
                      <v-row>
                        <v-col cols="5">{{ Passenger.child }} کودک</v-col>
                        <v-col cols="2">
                          <v-row justify="center">
                            <v-icon small>mdi-close</v-icon>
                          </v-row>
                        </v-col>
                        <v-col v-if="choosedTicket.fare" cols="5" class="ltr">
                          <span>
                            {{ separatePrice(choosedTicket.fare.ChildTotalPrice / 10) }}
                          </span>
                        </v-col>
                      </v-row>
                    </div>
                    <div v-if="Passenger.inf > 0" class="mt-4 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs">
                      <v-row>
                        <v-col cols="5">{{ Passenger.inf }} نوزاد</v-col>
                        <v-col cols="2">
                          <v-row justify="center">
                            <v-icon small>mdi-close</v-icon>
                          </v-row>
                        </v-col>
                        <v-col v-if="choosedTicket.fare" cols="5" class="ltr">
                          {{ separatePrice(choosedTicket.fare.InfantTotalPrice / 10) }}
                        </v-col>
                      </v-row>
                    </div>
                    <h3 v-if="choosedTicket.fare" class="text-center mt-6 red--text ">
                      مجموع {{ setAllPrice(choosedTicket.fare) }} تومان
                    </h3>
                    <span class="d-block widthAll text-center green--text caption font-weight-bold mt-2"
                      style="font-family: Byekan !important;">ظرفیت {{ choosedTicket.capacity == 'A' ? '+9' :
                        choosedTicket.capacity
                      }}
                      نفر</span>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card class="mt-sm-8 py-4" flat>
              <v-row>
                <v-col cols="12" md="9" class="">
                  <v-row>
                    <v-col v-for="(item, i) in CRCNRules" :key="'item' + i" cols="12" sm="6" class="px-2 mb-2">
                      <v-row v-if="item.text" align="center" class="grey lighten-3 rounded-lg pa-2 ">
                        <v-col class="d-sm-none">
                          <span class="body-2 font-weight-bold" style="font-family: Byekan !important;">تا ساعت
                            {{ item.text }}
                          </span>
                        </v-col>
                        <v-col class="d-sm-none">
                          <div
                            class="white rounded-lg hideOver d-inline-block body-2 relative py-2 text-center float-left"
                            style="font-family: Byekan !important;width: 100px;height:40px">
                            <div class="red absolute red--text heightAll" style="width: 10px;top: 0;right:0">
                            </div>
                            <div class="d-inline-block caption font-weight-bold"
                              style="font-family: Byekan !important;width:70%">{{ item.Percent }}% جریمه</div>
                          </div>
                        </v-col>
                        <span class="body-2 font-weight-bold d-none d-sm-block" style="font-family: Byekan !important;">
                          {{ item.text }}
                        </span>
                        <v-spacer class="d-none d-sm-inline-block"></v-spacer>
                        <div class="white rounded-lg hideOver body-2 relative py-2 text-center d-none d-sm-inline-block"
                          style="font-family: Byekan !important;width: 100px;height:40px">
                          <div class="red absolute red--text heightAll d-none d-sm-block"
                            style="width: 10px;top: 0;right:0">
                          </div>
                          <div class=" caption font-weight-bold d-none d-sm-inline-block"
                            style="font-family: Byekan !important;width:70%">{{ item.Percent }}% جریمه</div>
                        </div>
                      </v-row>
                    </v-col>
                  </v-row>

                </v-col>
                <v-col cols="12" md="3" class="">
                  <v-card flat class="grey lighten-3 py-4 rounded-lg ticketDetailsTabs px-sm-12 px-md-4 px-lg-12">
                    <div class="blue--text text--darken-1 text-center">
                      جزییات قیمت (تومان)
                    </div>
                    <div class="mt-6 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs">
                      <v-row align="center">
                        <v-col cols="5">{{ Passenger.peaple }} بزرگسال</v-col>
                        <v-col cols="2" class="">
                          <v-row justify="center">
                            <v-icon small>mdi-close</v-icon>
                          </v-row>
                        </v-col>
                        <v-col v-if="choosedTicket.fare" cols="5" class="ltr">
                          {{ separatePrice(choosedTicket.fare.AdultTotalPrice / 10) }}
                        </v-col>
                      </v-row>
                    </div>
                    <div v-if="Passenger.child > 0" class="mt-4 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs">
                      <v-row>
                        <v-col cols="5">{{ Passenger.child }} کودک</v-col>
                        <v-col cols="2">
                          <v-row justify="center">
                            <v-icon small>mdi-close</v-icon>
                          </v-row>
                        </v-col>
                        <v-col v-if="choosedTicket.fare" cols="5" class="ltr">
                          <span>
                            {{ separatePrice(choosedTicket.fare.ChildTotalPrice / 10) }}
                          </span>
                        </v-col>
                      </v-row>
                    </div>
                    <div v-if="Passenger.inf > 0" class="mt-4 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs">
                      <v-row>
                        <v-col cols="5">{{ Passenger.inf }} نوزاد</v-col>
                        <v-col cols="2">
                          <v-row justify="center">
                            <v-icon small>mdi-close</v-icon>
                          </v-row>
                        </v-col>
                        <v-col v-if="choosedTicket.fare" cols="5" class="ltr">
                          {{ separatePrice(choosedTicket.fare.InfantTotalPrice / 10) }}
                        </v-col>
                      </v-row>
                    </div>
                    <h3 v-if="choosedTicket.fare" class="text-center mt-6 red--text ">
                      مجموع {{ setAllPrice(choosedTicket.fare) }} تومان
                    </h3>
                    <span class="d-block widthAll text-center green--text caption font-weight-bold mt-2"
                      style="font-family: Byekan !important;">ظرفیت {{ choosedTicket.capacity == 'A' ? '+9' : ''
                      }}
                      نفر</span>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <!-- <v-card class="mt-sm-8 py-4" flat>
                      <v-row>
                        <v-col cols="12" md="9" class="">
                          <v-row>
                            <v-col cols="12" sm="6" md="4" lg="3" class="mb-sm-2">
                              <div class="grey lighten-3 rounded-lg ma-sm-4 pa-4">
                                <v-row class="">
                                  <span class="caption font-weight-bold blue--text d-block"
                                    style="font-family: Byekan !important;">Mashhad به KishIsland</span>
                                </v-row>
                                <v-row class="">
                                  <span class="caption font-weight-bold blue--text d-block"
                                    style="font-family: Byekan !important;">شماره پرواز ZV4107</span>
                                </v-row>
                                <h3 class="mt-2">بزرگسال : 20 KG</h3>
                              </div>
                            </v-col>
                            <v-col cols="12" sm="6" md="4" lg="3" class="mb-sm-2">
                              <div class="grey lighten-3 rounded-lg ma-sm-4 pa-4">
                                <v-row class="">
                                  <span class="caption font-weight-bold blue--text d-block"
                                    style="font-family: Byekan !important;">Mashhad به KishIsland</span>
                                </v-row>
                                <v-row class="">
                                  <span class="caption font-weight-bold blue--text d-block"
                                    style="font-family: Byekan !important;">شماره پرواز ZV4107</span>
                                </v-row>
                                <h3 class="mt-2">کودک : 20 KG</h3>
                              </div>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="12" md="3" class="px-6 px-sm-10 px-md-3">
                          <v-card flat class="grey lighten-3 py-4 rounded-lg ticketDetailsTabs px-sm-12 px-md-4 px-lg-12">
                            <div class="blue--text text--darken-1 text-center">
                              جزییات قیمت (تومان)
                            </div>
                            <div class="mt-6 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs">
                              <v-row align="center">
                                <v-col cols="5">{{ Passenger.peaple }} بزرگسال</v-col>
                                <v-col cols="2" class="">
                                  <v-row justify="center">
                                    <v-icon small>mdi-close</v-icon>
                                  </v-row>
                                </v-col>
                                <v-col cols="5" class="ltr">1,800,000</v-col>
                              </v-row>
                            </div>
                            <div v-if="Passenger.child" class="mt-4 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs">
                              <v-row>
                                <v-col cols="5">{{ Passenger.child }} کودک</v-col>
                                <v-col cols="2">
                                  <v-row justify="center">
                                    <v-icon small>mdi-close</v-icon>
                                  </v-row>
                                </v-col>
                                <v-col cols="5" class="ltr"><span>1,200,000</span></v-col>
                              </v-row>
                            </div>
                            <div v-if="Passenger.inf" class="mt-4 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs">
                              <v-row>
                                <v-col cols="5">{{ Passenger.inf }} نوزاد</v-col>
                                <v-col cols="2">
                                  <v-row justify="center">
                                    <v-icon small>mdi-close</v-icon>
                                  </v-row>
                                </v-col>
                                <v-col cols="5" class="ltr">200,000</v-col>
                              </v-row>
                            </div>
                            <h3 class="text-center mt-6 red--text ">
                              مجموع 3,200,000 تومان
                            </h3>
                            <span class="d-block widthAll text-center green--text caption font-weight-bold mt-2"
                              style="font-family: Byekan !important;">ظرفیت 24 نفر</span>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card> -->
          </v-tab-item>
        </v-tabs-items>
      </v-sheet>
    </v-dialog>
  </div>
</template>



<script>


export default {
  name: 'ticket-card',
  components: {
  },
  watch: {
    nextPage() {
      this.$emit('changeNextPage', this.nextPage)
    },
    async choosedTicket() {
      this.choosedTicket.allprice = this.setAllPrice(this.choosedTicket.fare)
      this.$emit('changeChoosedTicket', this.choosedTicket)
    },
  },
  props: {
    tickets: {
      type: Array,
      require: true
    },
    Passenger: {
      type: Object,
      require: true
    },
    isNextPage: {
      type: Boolean
    },
    isMainPage: {
      type: Boolean
    }
  },
  computed: {

  },
  data: () => ({
    ticketDetailsModal: false,
    activeTab: 0,
    ticketDetailsTabs: [
      'جزییات پرواز', 'قوانین استرداد', 'بار مجاز',
    ],
    nextPage: false,
    panelDetails: 0,
    choosedTicket: {},
    allPrice: 0,
    CRCNRules: [],
    editFlightMood: false
  }),
  methods: {
    reserveTicket(ticket) {
      this.$emit('reserveTicket', ticket)
    },
    separatePrice(number) {
      let value1 = number.toString().replace(/,/g, "")
      let value2 = value1
      if (value1.length == 0 || value1 < 0) {
        value2 = 0
      } else if (value1.length > 1 && value1[0] == 0) {
        value2 = value1.replace(0, '')
      } else {
        value2 = value1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
      return value2
      // self.filter.price = [Number(self.fromPrice.toString().replace(/,/g, "")), Number(value1)]
    },
    getFlightHours(flight1, flight2) {
      let minutes = 0
      let hours = 0
      let time1 = ''
      let hour1 = ''
      let minute1 = ''
      let time2 = ''
      let hour2 = ''
      let minute2 = ''
      let minesHour = false
      if (flight1) {
        time1 = flight1.split(':')
        hour1 = time1[0]
        minute1 = time1[1]
      }
      if (flight2) {
        time2 = flight2.split(':')
        hour2 = time2[0]
        minute2 = time2[1]
      }
      for (let i = 0; i < 60; i++) {
        if (minute2 == minute1) {
          // set minutes
          minutes = i
          break
        } else {
          if (minute1 < 59) {
            minute1++
          } else {
            minesHour = true
            minute1 = 0
          }
        }
      }
      for (let i = 0; i < 24; i++) {
        if (hour1 == hour2) {
          // set hour1s
          hours = minesHour ? i - 1 : i
          break
        } else {
          if (hour1 < 23) {
            hour1++
          } else {
            hour1 = 0
          }
        }
      }
      let text = hours + ' ساعت و ' + minutes + ' دقیقه'

      return text


    },
    scrollTop() {
      window.scrollTo(0, 0)
    },
    setAllPrice(object) {
      let adl = this.Passenger.peaple
      let chd = this.Passenger.child
      let inf = this.Passenger.inf
      let allPrice = adl * object.AdultTotalPrice
      if (chd > 0) {
        allPrice = allPrice + (chd * object.ChildTotalPrice)
      }
      if (inf > 0) {
        allPrice = allPrice + (inf * object.InfantTotalPrice)
      }
      allPrice = this.separatePrice(allPrice / 10)
      return allPrice
    },
    returnCRCNRules(stringText) {
      this.CRCNRules = []
      let CRCNRules = stringText.split('/')
      for (let i = 0; i < CRCNRules.length; i++) {
        let testArray = CRCNRules[i].split(',')
        let testObject = {
          text: testArray[0],
          Percent: testArray[1]
        }
        this.CRCNRules.push(testObject)
      }
    },
    showNextPage() {
      this.$emit('showNextPage')
    }
  },
  created() {
    window.scrollTo(0, 0);
  },
}
</script>
