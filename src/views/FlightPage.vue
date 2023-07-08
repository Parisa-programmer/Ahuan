<template>
  <div class="mt-12 pt-12">
    <div class="mt-6">
      <input-main @changeOriginCity="changeOriginCity($event)"
        @changeDestinationInternal="changeDestinationInternal($event)" @changeDayName1="changeDayName1($event)"
        @changeDate1="changeDate1($event)" :datePickerValue=datePickerValue page="flight"
        @dateChanged="dateChanged($event)" />
    </div>
    <v-row class="" justify="center" style="margin-top:-25px !important">
      <div class="indexDiv">
        <v-row :class="(windowWidth < 960 && !editFlightMood) && 'mt-4 '">
          <v-col cols="3" class="pl-md-3 d-none d-md-inline-block">
            <ticket-filter-component :from="fromPrice" :to="toPrice" :tickets="tickets" />
          </v-col>
          <v-col cols="12" md="9" class="pa-0 pr-md-3 " :class="(windowWidth < 960 && !editFlightMood) && 'mt-12 pt-12'">
            <v-card flat class="rounded-lg mt-2 mt-lg-0 pa-2 pa-sm-2 mb-4"
              :class="(windowWidth < 960 && !editFlightMood) && 'mt-sm-6'" v-if="!(external && byReturn != 1)">
              <v-slide-group ltr v-model="slideGroup" class="py-1 ltr" hide-arrows center-active>
                <v-slide-item v-for="(date, i) in dates" :key="i"
                  :style="{ border: i == slideGroup ? '1px solid red !important' : 'unset !important' }">
                  <!-- <v-skeleton-loader class="textLoader d-inline-block mr-2"
                                          type="chip"
                                          :loading="isLoading"
                                        >-->
                  <v-card elevation="2" :disabled="new Date().getTime() - 86400000 > date.timestamp ? true : false"
                    outlined class="py-2 px-3 px-sm-6 grey lighten-5 mr-4"
                    @click="slideGroup = i; datePickerValue = date.datePickerValue">
                    <span class="text-center body d-block"
                      :class="new Date().getTime() - 86400000 > date.timestamp ? 'grey--text text--lighten-1' : date.weekDay == 6 ? 'red--text' : ''"
                      style="font-family: Byekan !important;">{{ date.day }} {{ date.month }}</span>
                    <span class="text-center body-2 d-block mt-1"
                      :class="new Date().getTime() - 86400000 > date.timestamp ? 'grey--text text--lighten-1' : date.weekDay == 6 ? 'red--text' : ' grey--text text--darken-2'"
                      style="font-family: Byekan !important;">
                      1,980
                    </span>
                  </v-card>
                  <!-- </v-skeleton-loader> -->
                </v-slide-item>
              </v-slide-group>

            </v-card>

            <v-card v-if="windowWidth > 960" flat class="rounded-lg ">
              <v-row align="center" class="pr-2">
                <v-skeleton-loader class="textLoader d-inline-block mr-2" type="chip" :loading="isLoading">
                  <span class="body-2" style="font-family:Byekan !important">تعداد {{ tickets.length }} پرواز یافت
                    شد</span>
                </v-skeleton-loader>
                <v-spacer></v-spacer>
                <div>
                  <v-row align="center">
                    <span class="body-2" style="font-family:Byekan !important;">
                      مرتب سازی براساس:
                    </span>
                    <v-tabs v-if="!isLoading" v-model="sortTab" class="d-inline-block" style="width: fit-content ;">
                      <v-tabs-slider color="red darken-2"></v-tabs-slider>

                      <v-tab>
                        قیمت
                      </v-tab>
                      <v-tab>ساعت</v-tab>
                      <v-tab>ایرلاین</v-tab>

                    </v-tabs>
                    <v-skeleton-loader class="textLoader d-inline-block ma-2" type="chip" v-if="isLoading">
                    </v-skeleton-loader>
                    <v-skeleton-loader class="textLoader d-inline-block ma-2" type="chip"
                      v-if="isLoading"></v-skeleton-loader>
                    <v-skeleton-loader class="textLoader d-inline-block mr-2" type="chip"
                      v-if="isLoading"></v-skeleton-loader>
                  </v-row>
                </div>
              </v-row>
              <v-progress-linear class=" mb-4" color="#1abc9c" v-if="ticketValue" indeterminate
                reverse></v-progress-linear>
            </v-card>

            <!-- <v-progress-linear color="red" v-if="ticketValue" indeterminate reverse></v-progress-linear> -->
            <div v-if="external == true && byReturn == 3">
              <div class="hideOver my-4" v-for="(item, i) in tickets" :key="i">
                <v-skeleton-loader class="textLoader widthAll" type="image" :loading="isLoading">
                  <div class="widthAll white relative " style="border: 1px solid ;border-color: #efefef !important;">
                    <div class="absolute rounded-circle ticketCircle" style="right: -25px;top:50%;margin-top: -25px;">
                    </div>
                    <div class="absolute rounded-circle ticketCircle" style="left: -25px;top:50%;margin-top: -25px;">
                    </div>
                    <div class="absolute rounded-circle ticketCircle d-none d-sm-inline-block"
                      style="left: 30%;bottom:-25px;margin-left: -25px;"></div>
                    <div class="absolute rounded-circle ticketCircle d-none d-sm-inline-block"
                      style="left: 30%;top:-25px;margin-left: -25px;"></div>
                    <v-row class="heightAll multi-flight">
                      <div class="rightSectionTicket ">
                        <div class="" v-for="(flight, m) in flights" :key="m">
                          <v-row class="my-1 mt-sm-3 mb-1 mr-2 mr-sm-6" align="center">
                            <img src="@/assets/image/zagros.png" alt="" class="rounded-circle pa-1" width="50" height="50"
                              style="box-shadow: 1px 1px 4px #b3b3b3">
                            <div class="d-inline-block relative">
                              <span class="mx-2 mx-sm-2 body-2 absolute white px-4 mt-2 mt-sm-0"
                                style="font-family: Byekan !important;">{{ flight.originCity }}</span>
                              <span class="absolute body-2 grey--text text--darken-1 dateTicket text-center"
                                style="font-family: Byekan !important;bottom: 25px;margin-right: -18px;width: 120px;">{{
                                  flight.day }}
                                {{ flight.fromDate }}</span>
                              <span class="absolute caption typeFlightTicket text-center"
                                style="font-family: Byekan !important;top:25px;color: #706f6f;width: 120px;    margin-right: -43px;">بدون
                                توقف</span>
                              <span class="mx-2 mx-sm-2 body-2 absolute white pr-4 pl-2 pl-sm-4 pl-md-0 mt-2 mt-sm-0"
                                style="font-family: Byekan !important;left:0">{{ flight.destinationInternal }}</span>
                              <img src="@/assets/image/flight-go-flesh.png"
                                class="flight-go-flesh mt-4 mt-sm-0 mx-2 mx-md-2" alt="" height="12">
                            </div>
                          </v-row>
                          <v-row class=" mb-6 mr-4 mr-sm-7">
                            <span class="body-2" style="font-family: Byekan !important;">زاگرس</span>
                            <span class="mr-7 pr-1 body-2" style="font-family: Byekan !important;">{{
                              item.originTime }}</span>
                            <v-spacer></v-spacer>
                            <span class=" ml-4 ml-sm-12 pl-2 body-2" style="font-family: Byekan !important;">{{
                              item.destinationTime }}</span>
                          </v-row>
                        </div>
                      </div>
                      <div class="leftSectionTicket">
                        <v-row class="heightAll" justify="center" align="center">
                          <div class="widthAll text-center my-3">
                            <div class="ticketPrice mt-3 mt-sm-0">
                              <span class="">
                                قیمت
                              </span>
                              <br>
                              <h3 class="mb-3 d-inline-block">
                                12,563,000
                              </h3>
                              <h3 class="mb-3 d-inline-block" style="font-family: Byekan !important;">ریال</h3>
                            </div>
                            <div class="ticketButtons">
                              <v-btn class="px-lg-7 mt-2 mt-sm-2" color="blue darken-2" outlined
                                @click="activeTab = 0; ticketDetailsModal = true">مشاهده جزییات</v-btn>
                              <br class="d-block d-sm-none">
                              <v-btn class="px-lg-7 mt-2 mt-sm-2" color="red" outlined @click="nextPage = true">انتخاب
                                بلیط
                                ها</v-btn>
                            </div>
                          </div>
                        </v-row>
                      </div>
                      <v-dialog width="1400" v-model="ticketDetailsModal" style="z-index: 9990000;">
                        <v-sheet class="relative pa-2" style="min-height:500px">
                          <v-row align="start">
                            <v-icon class="ma-1" @click="ticketDetailsModal = false">mdi-close</v-icon>
                            <v-spacer></v-spacer>
                            <v-btn dark class="px-sm-6 py-sm-6 ma-3 absolute"
                              style="position: absolute;left: 0;z-index: 2;top: 0;" outlined color="red arken-2"
                              @click="ticketDetailsModal = false; nextPage = !nextPage; editFlightMood = true;">
                              {{ nextPage ? 'تغییر پرواز انتخابی' : 'انتخاب بلیط' }}
                            </v-btn>
                          </v-row>
                          <v-tabs width="300" v-model="activeTab" class="mt-2" flat>
                            <v-tabs-slider color="red"></v-tabs-slider>
                            <v-tab style="width:fit-content" v-for="item in ticketDetailsTabs" :key="item">
                              {{ item }}
                            </v-tab>
                          </v-tabs>
                          <v-tabs-items v-model="activeTab" reverse style="direction:ltr !important">
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
                                              <h4 class="blue--text text--darken-1 mr-3">پرواز رفت (مشهد - کیش)</h4>
                                              <v-divider vertical class="mx-4"></v-divider>
                                              <div class="text-right">
                                                <span class="grey--text caption widthAll mb-2 d-block"
                                                  style="font-family: Byekan !important;">مدت زمان پرواز</span>
                                                <span class="font-weight-bold mt-4">
                                                  1 ساعت و 30 دقیقه
                                                </span>
                                              </div>
                                            </v-row>
                                          </v-expansion-panel-header>
                                          <v-expansion-panel-content class="white py-4">
                                            <v-row align="center">
                                              <v-col cols="12" sm="5" md="5" lg="3">
                                                <v-row class="justify-center justify-sm-start">
                                                  <span class="body-2" style="font-family: Byekan !important;">(08
                                                    Nov)</span>
                                                  <span class="body-2" style="font-family: Byekan !important;">17 آبان
                                                    1401</span>
                                                </v-row>
                                                <v-row class="mt-2 mt-sm-12 justify-center justify-sm-start">
                                                  <span class="body-2" style="font-family: Byekan !important;">(08
                                                    Nov)</span>
                                                  <span class="body-2" style="font-family: Byekan !important;">17 آبان
                                                    1401</span>
                                                </v-row>
                                              </v-col>
                                              <div class="d-block d-sm-none widthAll mx-12 px-12">
                                                <v-divider class="my-2"></v-divider>
                                              </div>
                                              <v-col cols="12" sm="7" md="7" lg="4">
                                                <v-row class="justify-center justify-sm-start">
                                                  <span class="body-2 grey--text text--darken-1"
                                                    style="font-family: Byekan !important;">7:50</span>
                                                  <v-icon x-small
                                                    class="mx-1 grey--text text--lighten-1">mdi-circle</v-icon>
                                                  <span class="body-2 grey--text text--darken-1"
                                                    style="font-family: Byekan !important;">مشهد ،(Shahid Hashemi)</span>
                                                </v-row>
                                                <v-row
                                                  class="mt-2 mt-sm-4 mr-sm-11 caption grey--text text--darken-1 font-weight-bold justify-center justify-sm-start"
                                                  style="font-family: Byekan !important;">
                                                  مدت پرواز: 2 ساعت
                                                </v-row>
                                                <v-row class="mt-3 justify-center justify-sm-start">
                                                  <span class="body-2 grey--text text--darken-1"
                                                    style="font-family: Byekan !important;">9:50</span>
                                                  <v-icon x-small
                                                    class="mx-1 grey--text text--lighten-1">mdi-circle</v-icon>
                                                  <span class="body-2 grey--text text--darken-1"
                                                    style="font-family: Byekan !important;">کیش ،(Kish Island)</span>
                                                </v-row>
                                              </v-col>
                                              <v-divider vertical class="my-2 d-none d-lg-block"></v-divider>
                                              <div class="d-block d-lg-none widthAll mx-12 px-12">
                                                <v-divider class="my-2"></v-divider>
                                              </div>
                                              <!-- <div class="widthAll d-block d-lg-none">
                                                                                                  <v-divider class="mx-12 my-4"></v-divider>
                                                                                                </div> -->
                                              <v-col cols="12" lg="5">
                                                <v-row align="center" class="justify-center justify-sm-start">
                                                  <div class="d-inline-block">
                                                    <v-row align="center">
                                                      <img src="@/assets/image/zagros.png" class="mr-sm-2" width="40"
                                                        alt="">
                                                      <span class="mr-2 body-2" style="font-family: Byekan !important;">{{
                                                        item }}زاگgرس</span>
                                                    </v-row>
                                                  </div>
                                                  <v-divider vertical class="my-2 mx-3"></v-divider>
                                                  <div class="d-inline-block">
                                                    <v-row class="caption grey--text " justify="center"
                                                      style="font-family: Byekan !important;">شماره پرواز</v-row>
                                                    <v-row class="caption font-weight-bold" justify="center"
                                                      style="font-family: Byekan !important;">ZV4107</v-row>
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
                                                      style="font-family: Byekan !important;">Airbus A320</v-row>
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
                                    <v-card flat
                                      class="grey lighten-3 py-4 rounded-lg ticketDetailsTabs px-sm-12 px-md-4 px-lg-12">
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
                                      <div v-if="Passenger.child"
                                        class="mt-4 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs">
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
                                      <div v-if="Passenger.baby"
                                        class="mt-4 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs">
                                        <v-row>
                                          <v-col cols="5">{{ Passenger.baby }} نوزاد</v-col>
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
                              </v-card>
                            </v-tab-item>
                            <v-tab-item>
                              <v-card class="mt-sm-8 py-4" flat>
                                <v-row>
                                  <v-col cols="12" md="9" class="">
                                    <v-row>
                                      <v-col v-for="(item, i) in 4" :key="'item' + i" cols="12" md="6" lg="4"
                                        class="px-2 mb-2">
                                        <v-row align="center" class="grey lighten-3 rounded-lg pa-2 ">
                                          <v-col v-if="windowWidth < 600">
                                            <span class="body-2 font-weight-bold"
                                              style="font-family: Byekan !important;">تا
                                              ساعت 12:00، 5 روز مانده به
                                              پرواز</span>
                                          </v-col>
                                          <v-col v-if="windowWidth < 600">
                                            <div
                                              class="white rounded-lg hideOver d-inline-block body-2 relative py-2 text-center float-left"
                                              style="font-family: Byekan !important;width: 100px;height:40px">
                                              <div class="red absolute red--text heightAll"
                                                style="width: 10px;top: 0;right:0"></div>
                                              <div class="d-inline-block caption font-weight-bold"
                                                style="font-family: Byekan !important;width:70%">70% جریمه</div>
                                            </div>
                                          </v-col>
                                          <span v-if="windowWidth >= 600" class="body-2 font-weight-bold"
                                            style="font-family: Byekan !important;">تا ساعت 12:00، 5 روز مانده به
                                            پرواز</span>
                                          <v-spacer v-if="windowWidth >= 600"></v-spacer>
                                          <div v-if="windowWidth >= 600"
                                            class="white rounded-lg hideOver d-inline-block body-2 relative py-2 text-center"
                                            style="font-family: Byekan !important;width: 100px;height:40px">
                                            <div class="red absolute red--text heightAll"
                                              style="width: 10px;top: 0;right:0"></div>
                                            <div class="d-inline-block caption font-weight-bold"
                                              style="font-family: Byekan !important;width:70%">70% جریمه</div>
                                          </div>
                                        </v-row>
                                      </v-col>
                                    </v-row>
                                  </v-col>
                                  <v-col cols="12" md="3" class="">
                                    <v-card flat
                                      class="grey lighten-3 py-4 rounded-lg ticketDetailsTabs px-sm-12 px-md-4 px-lg-12">
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
                                      <div v-if="Passenger.child"
                                        class="mt-4 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs">
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
                                      <div v-if="Passenger.baby"
                                        class="mt-4 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs">
                                        <v-row>
                                          <v-col cols="5">{{ Passenger.baby }} نوزاد</v-col>
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
                              </v-card>
                            </v-tab-item>
                            <v-tab-item>
                              <v-card class="mt-sm-8 py-4" flat>
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
                                    <v-card flat
                                      class="grey lighten-3 py-4 rounded-lg ticketDetailsTabs px-sm-12 px-md-4 px-lg-12">
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
                                      <div v-if="Passenger.child"
                                        class="mt-4 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs">
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
                                      <div v-if="Passenger.baby"
                                        class="mt-4 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs">
                                        <v-row>
                                          <v-col cols="5">{{ Passenger.baby }} نوزاد</v-col>
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
                              </v-card>
                            </v-tab-item>
                          </v-tabs-items>
                        </v-sheet>
                      </v-dialog>
                    </v-row>
                  </div>
                </v-skeleton-loader>
              </div>
            </div>
            <div v-else>
              <ticket-component :originCity="originCity" :destinationInternal="destinationInternal" :dayName="dayName"
                :date1="date1" :sortTab="sortTab" @minMaxPrice="getminMaxPrice($event)"
                @allTickets="tickets = $event" />
              <!-- <ticket-card :tickets="tickets" :Passenger="Passenger" :isMainPage="true" @showNextPage="showNextPage()"
                 /> -->
            </div>
          </v-col>
        </v-row>
      </div>
    </v-row>
  </div>
</template>

<style>
.v-progress-circular__overlay {
  color: #c90000;
}

.v-slide-group__wrapper {
  justify-content: flex-end !important;
}

@media (max-width: 599px) {
  .ticketButtons button {
    width: 113px !important
  }
}
</style>

<script>
import InputMain from '@/components/InputMain.vue'
// import TicketCard from '@/components/TicketCard.vue'
import TicketComponent from '@/components/TicketComponent.vue'
import TicketFilterComponent from '@/components/TicketFilterComponent.vue'

export default {
  name: 'flight-page',
  data() {
    return {
      originCity: {},
      destinationInternal: {},
      dayName: '',
      date1: '',
      acceptRulls: false,
      offCodeIsTrue: undefined,
      offCodeDisabledButton: false,
      offCodeLoading: false,
      offCode: '',
      editTicketInfoDialog: false,
      editUser: {},
      editContact: {},
      ModalUserType: true,
      persianTebelHeaders: [
        { text: 'نام', value: 'name' },
        { text: 'نام خانوادگی', value: 'family' },
        { text: 'ملیت', value: 'nationality' },
        { text: 'کدملی', value: 'nationalityCode' },
        { text: 'جنسیت', value: 'gender' },
        { text: 'تاریخ تولد', value: 'birthday' },
        { text: 'عملیات', value: 'actions', sortable: false, align: 'center' },
      ],
      otherTebelHeaders: [
        { text: 'نام', value: 'name' },
        { text: 'نام خانوادگی', value: 'family' },
        { text: 'ملیت', value: 'nationality' },
        { text: 'جنسیت', value: 'gender' },
        { text: 'تاریخ تولد', value: 'birthday' },
        { text: 'شماره پاسپورت', value: 'passportNumber' },
        { text: 'انقضا پاسپورت', value: 'expiredate', align: 'center' },
        { text: 'عملیات', value: 'actions', sortable: false, align: 'center' },
      ],
      emailRules: [
        v => /.+@.+\..+/.test(v) || 'ایمیل نادرست میباشد.',
      ],
      contactInfo: [{
        phone: '',
        email: '',
      }],
      contactInfoHeaders: [
        { text: 'تلفن', value: 'phone', sortable: false, width: '40%' },
        { text: 'ایمیل', value: 'email', sortable: false, width: '40%' },
        { text: 'عملیات', value: 'actions', sortable: false, width: '20%', align: 'center' }
      ],
      phoneRules: [
        v => !!v || 'پر کردن فیلد تلفن اجباریست.',
        v => (v.length == 11) || 'شماره تلفن صحیح نیست.',
      ],
      nameRules: [
        v => !!v || 'پر کردن فیلد نام اجباریست.',
        v => (v || '').indexOf(0) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(1) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(2) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(3) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(4) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(5) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(6) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(7) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(8) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(9) < 0 || 'فرمت صحیح نیست',
        v => !(/^[\u0600-\u06FF\s]+$/.test(v)) || 'فرمت صحیح نیست',
      ],
      familyRules: [
        v => !!v || 'پر کردن فیلد نام خانوادگی اجباریست.',
        v => (v || '').indexOf(0) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(1) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(2) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(3) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(4) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(5) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(6) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(7) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(8) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(9) < 0 || 'فرمت صحیح نیست',
        v => !(/^[\u0600-\u06FF\s]+$/.test(v)) || 'فرمت صحیح نیست',
      ],
      nationalNumberRules: [
        v => !!v || 'پر کردن این فیلد اجباریست.',
        v => !!v && v.length == 10 || 'کد ملی صحیح نیست.',
      ],
      dateError: false,
      emptyRules: [
        v => !!v || 'پر کردن این فیلد اجباریست.'
      ],
      dateYears: [],
      dateYearsPass: [],
      nationalities: ['ایرانی', 'غیر ایرانی'],
      genders: ['خانم', 'آقا'],
      dateDays: [],
      dateMonthsPersian: [
        {
          text: 'فروردین',
          value: 1
        },
        {
          text: 'اردیبهشت',
          value: 2
        },
        {
          text: 'خرداد',
          value: 3
        },
        {
          text: 'تیر',
          value: 4
        },
        {
          text: 'مرداد',
          value: 5
        },
        {
          text: 'شهریور',
          value: 6
        },
        {
          text: 'مهر',
          value: 7
        },
        {
          text: 'آبان',
          value: 8
        },
        {
          text: 'آذر',
          value: 9
        },
        {
          text: 'دی',
          value: 10
        },
        {
          text: 'بهمن',
          value: 11
        },
        {
          text: 'اسفند',
          value: 12
        },
      ],
      dateMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      windowWidth: 0,
      choosedTicket: [],
      isLoading: false,
      fromPrice: null,
      toPrice: null,
      ticketValue: false,
      bookStep: 1,
      users: [],
      ticketDetailsModal: false,
      filter: {
        priceItems: [
          {
            label: 'صد تا سیصد هزار تومان',
            value: 1
          },
          {
            label: 'سیصد تا پانصد هزار تومان',
            value: 2
          },
          {
            label: 'پانصد تا هشتصد هزار تومان',
            value: 3
          },
          {
            label: 'هشتصد تا یک میلیون تومان',
            value: 4
          },
          {
            label: 'بیش از یک میلیون تومان',
            value: 5
          },
        ],
        price: [0, 5000000],
        timeItems: [
          'صبح',
          'ظهر',
          'عصر',
          'شب',
          'نیمه شب'
          // {
          //   label:' صبح (4 تا 11)',
          //   value: 1
          // },
          // {
          //   label:' ظهر (11 تا 14)',
          //   value: 2
          // },
          // {
          //   label:' عصر (14 تا 19)',
          //   value: 3
          // },
          // {
          //   label:'شب (19 تا 24)',
          //   value: 4
          // },
          // {
          //   label:'نیمه شب (24 تا 4)',
          //   value: 5
          // },
        ],
        time: [0, 4],
        classItems: [
          {
            label: 'اکونومی',
            value: 1
          },
          {
            label: 'بیزینس',
            value: 2
          },
        ],
        class: [],
        airlineItems: [
          {
            label: 'آتا',
            value: 'I3'
          },
          {
            label: 'کیش‌ایر',
            value: 'Y9'
          },
          {
            label: 'قشم‌ایر',
            value: 'QB'
          },
          {
            label: 'کاسپین',
            value: 'IV'
          },
          {
            label: 'تابان',
            value: 'HH'
          },
          {
            label: 'ساها',
            value: 'IRZ'
          },
          {
            label: 'آسمان',
            value: 'EP'
          },
          {
            label: 'زاگرس',
            value: 'ZV'
          },
          {
            label: 'نفت',
            value: 'NV'
          },
          {
            label: 'معراج',
            value: 'JI'
          },
          {
            label: 'وارش',
            value: 'VR'
          },
        ],
        airline: [],
        typeItems: [
          {
            label: 'چارتری',
            value: 1
          },
          {
            label: 'سیستمی',
            value: 2
          },
        ],
        type: [2],
        showTypeItems: [
          {
            label: 'نمایش پروازهای موجود',
            value: 1
          },
          {
            label: 'عدم نمایش پرواز تکراری',
            value: 2
          },
        ],
        showType: [],
      },
      editFlightMood: false,
      external: false,
      slideGroup: 10,
      dates: [],
      sortTab: 0,
      tickets: [],
      beforeTickets: [],
      flights: [],
      selectedTickets: [],
      ticketChooseStep: 0,
      packageTickets: [],
      datePickerValue: null,
      nextPage: true,
      activeTab: 0,
      ticketDetailsTabs: [
        'جزییات پرواز', 'قوانین استرداد', 'بار مجاز',
      ],
      Passenger: {
        peaple: 1,
        child: 0,
        baby: 0
      },
      panelDetails: 0,

    }
  },
  components: {
    InputMain,
    // TicketCard,
    TicketComponent,
    TicketFilterComponent,
  },
  watch: {


    slideGroup() {
      // var dateInput = this.selectedDate.split(' ')
      // var newDate = this.dates[this.slideGroup].day + ' ' + this.dates[this.slideGroup].month
      // if (dateInput.length > 2) {
      //   newDate = this.ticketChooseStep == 0 ? newDate + ' ' + dateInput[2] + ' ' + dateInput[3] + ' ' + dateInput[4]
      //     : dateInput[0] + ' ' + dateInput[1] + ' ' + dateInput[2] + ' ' + newDate
      // }
      // this.selectedDate = newDate
    },

  },
  computed: {

  },
  methods: {
    changeOriginCity(event) {
      this.originCity = event
    },
    changeDestinationInternal(event) {
      this.destinationInternal = event
    },
    changeDayName1(event) {
      this.dayName = event
    },
    changeDate1(event) {
      this.date1 = event
    },

    dayNumber(number) {
      var timestamp = (Math.floor(number / 1000) * 1000) - (86400000 * 10)
      let months = new Array("فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دي", "بهمن", "اسفند");
      this.dates = []
      let date = null
      for (let i = 0; i < 20; i++) {
        date = new Date(timestamp).toLocaleDateString('fa-IR-u-nu-latn')
        date = date.split('/')
        this.dates.push(
          {
            datePickerValue: (new Date(timestamp).getUTCFullYear()) + '-' + (new Date(timestamp).getMonth() + 1) + '-' + (new Date(timestamp).getDate()),
            day: date[2],
            month: months[date[1] - 1],
            timestamp: timestamp,
            weekDay: (new Date(timestamp).getDay()) + 1
          }
        )
        timestamp = timestamp + 86400000
      }
      this.slideGroup = 10
      return date
    },
    dateChanged(event) {
      let numberdate = Math.floor(new Date(event).getTime() / 1000) * 1000
      this.dayNumber(numberdate)
    },
    getminMaxPrice(event) {
      console.log(event);
      this.fromPrice = event.minPrice
      this.toPrice = event.maxPrice
      this.filter.price = [event.minPrice, event.maxPrice]
    }
    // setDates() {
    //   //   this.dateDays = []
    //   //   this.dateYears = []
    //   //   this.dateYearsPass = [new Date().getFullYear()]
    //   //   var nowYear = new Date().toLocaleDateString('fa-IR-u-nu-latn').slice(0, 4)
    //   //   for (let i = 0; i < 100; i++) {
    //   //     this.dateYears.push(nowYear - i)
    //   //     if (i > 0 && i < 32) {
    //   //       this.dateDays.push(i)
    //   //       if (i < 20) {
    //   //         this.dateYearsPass.push(new Date().getFullYear() + i)
    //   //       }
    //   //     }
    //   //   }
    // },
  },
  created() {
    this.windowWidth = window.innerWidth
    if (this.$route.query.start) {
      let numberdate = Math.floor(new Date(this.$route.query.start).getTime() / 1000) * 1000
      this.dayNumber(numberdate)
    } else {
      let numberdate = Math.floor(new Date().getTime() / 1000) * 1000
      this.dayNumber(numberdate)
    }
    window.scrollTo(0, 0)
    // this.setDates();
  },
}
</script>