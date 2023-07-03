<template>
  <div class="mt-12 pt-12">
    <div class="mt-6">
      <input-main :datePickerValue=datePickerValue page="flight" @emptyTicket="emptyTicket"
        @getTickets="getTickets($event)" @addTickets="addTickets($event)" @dateChanged="dateChanged($event)"
        @changeTicketValue="changeTicketValue($event)" @reRoute="reRoute" @complateSearch="complateSearch" />
    </div>
    <v-row class="" justify="center" style="margin-top:-25px !important">
      <div class="indexDiv">
        <v-row :class="(windowWidth < 960 && !editFlightMood) && 'mt-4 '">
          <v-col cols="3" class="pl-md-3 d-none d-md-inline-block">
            <v-card class="rounded-lg filter-card pb-6 mb-6">
              <v-row align="center">
                <v-skeleton-loader class="textLoader d-inline-block ma-2" type="chip" :loading="isLoading">
                  <span class="body-2 mr-2" style="font-family: Byekan !important;">
                    فیلتر ها
                  </span>
                </v-skeleton-loader>
                <v-spacer></v-spacer>
                <v-skeleton-loader class="textLoader d-inline-block ma-2" type="chip" :loading="isLoading">
                  <v-btn text @click="removeFilters" class="body-2 red--text px-sm-1 px-md-3 d-block d-md-inline-block"
                    style="font-family: Byekan !important;">حذف فیلتر ها</v-btn>
                </v-skeleton-loader>
              </v-row>
              <v-divider class="mb-3"></v-divider>
              <h4 class="mx-2 mb-3">
                <v-skeleton-loader class="textLoader d-inline-block" type="chip" :loading="isLoading">
                  قیمت
                </v-skeleton-loader>
              </h4>
              <v-row class="px-2">
                <v-skeleton-loader class="textLoader d-inline-block widthAll" type="card-heading" :loading="isLoading">
                  <v-row align="center" class="px-3 mx-sm-1 mx-md-2 rounded-xl" style="border: 1px solid #bfbfbf;">
                    <span>از</span>
                    <v-text-field v-model="fromPrice" class="pt-0 d-inline-block priceInput" hide-details
                      single-line></v-text-field>
                    <span class="d-none d-md-inline-block">تومان</span>
                  </v-row>
                </v-skeleton-loader>
              </v-row>
              <v-row class="px-2">
                <v-skeleton-loader class="textLoader d-inline-block widthAll mt-4" type="card-heading"
                  :loading="isLoading">
                  <v-row align="center" class="mt-2 px-3 mx-sm-1 mx-md-2 rounded-xl" style="border: 1px solid #bfbfbf;">
                    <span>تا</span>
                    <v-text-field v-model="toPrice" class="pt-0 d-inline-block priceInput" hide-details
                      single-line></v-text-field>
                    <span class="d-none d-md-inline-block">تومان</span>
                  </v-row>
                </v-skeleton-loader>
              </v-row>
              <v-row class="px-2">
                <v-skeleton-loader class="textLoader d-inline-block widthAll mt-4" type="card-heading"
                  :loading="isLoading">
                  <v-range-slider color="#1abc9c" thumb-color="#fff" track-color="#cccccc" v-model="filter.price"
                    :max="5000000" :min="0" hide-details class="align-center ltr my-4 my-md-6 px-2"
                    @change="changeRangePrice">
                  </v-range-slider>
                </v-skeleton-loader>
              </v-row>
              <v-divider class="my-3"></v-divider>
              <v-skeleton-loader class="textLoader d-inline-block mr-2" type="chip" :loading="isLoading">
                <h4 class="mx-2 mb-3">ساعت پرواز</h4>
              </v-skeleton-loader>
              <v-row class="px-2">
                <v-skeleton-loader class="textLoader d-inline-block widthAll mt-4" type="card-heading"
                  :loading="isLoading">
                  <v-range-slider thumb-color="#fff" color="#1abc9c" track-color="#cccccc" :tick-labels="filter.timeItems"
                    v-model="filter.time" min="0" max="4" ticks="always" tick-size="4" class="mb-6 px-2">
                    <template v-slot:thumb-label="props">
                      <v-icon dark>
                        mdi--close
                        {{ filterTime(props.value) }}
                      </v-icon>
                    </template>
                  </v-range-slider>
                </v-skeleton-loader>
              </v-row>

              <v-divider class="my-3"></v-divider>
              <v-skeleton-loader class="textLoader d-inline-block mr-2" type="chip" :loading="isLoading">
                <h4 class="mx-2 mb-3">کلاس پرواز</h4>
                <v-checkbox v-for="(item, j) in filter.classItems" :key="'classItems' + j" v-model="filter.class"
                  color="red" off-icon="mdi-circle-outline" on-icon="mdi-check-circle-outline" :label="item.label"
                  :value="item.value" class="caption" hide-details></v-checkbox>
              </v-skeleton-loader>
              <v-divider class="my-3"></v-divider>
              <v-skeleton-loader class="textLoader d-inline-block mr-2" type="chip" :loading="isLoading">
                <h4 class="mr-2 d-inline-block">ایرلاین</h4>
                <span class="caption" style="font-family: Byekan !important;">(مجموع {{ tickets.length }} پرواز)</span>
                <v-row v-for="(item, j) in filter.airlineItems" :key="'airlineItems' + j">
                  <v-checkbox v-if="tickets.filter(e => e.Airline == item.value).length != 0" v-model="filter.airline"
                    color="red" off-icon="mdi-circle-outline" on-icon="mdi-check-circle-outline" :label="item.label"
                    :value="item.value" class="caption" hide-details></v-checkbox>
                </v-row>

              </v-skeleton-loader>
              <v-divider class="my-3"></v-divider>
              <v-skeleton-loader class="textLoader d-inline-block mr-2" type="chip" :loading="isLoading">
                <h4 class="mx-2 mb-3">نوع پرواز</h4>
                <v-checkbox v-for="(item, j) in filter.typeItems" :key="'typeItems' + j" v-model="filter.type" color="red"
                  off-icon="mdi-circle-outline" on-icon="mdi-check-circle-outline" :label="item.label" :value="item.value"
                  class="caption" hide-details></v-checkbox>
              </v-skeleton-loader>
              <v-divider class="my-3"></v-divider>
              <v-skeleton-loader class="textLoader d-inline-block mr-2" type="chip" :loading="isLoading">
                <h4 class="mx-2 mb-3">نمایش پرواز</h4>
                <v-checkbox v-for="(item, j) in filter.showTypeItems" :key="'showTypeItems' + j" v-model="filter.showType"
                  color="red" off-icon="mdi-circle-outline" on-icon="mdi-check-circle-outline" :label="item.label"
                  :value="item.value" class="caption" hide-details></v-checkbox>
              </v-skeleton-loader>
            </v-card>
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
                              @click="scrollTop(); ticketDetailsModal = false; nextPage = !nextPage; editFlightMood = true;">
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
              <ticket-card :tickets="tickets" :Passenger="Passenger" :isMainPage="true" @showNextPage="showNextPage()"
                @changeChoosedTicket="changeChoosedTicket($event)" @reserveTicket=reserveTicket($event) />
            </div>
          </v-col>
        </v-row>
      </div>
    </v-row>
    <v-row v-if="nextPage" ref="nextPage" class="widthAll heightAll d-flex fixed justify-center"
      style="top:0;right:0;background:#f8f8f8;overflow: scroll;z-index:999999">
      <v-form ref="nextPageForm" lazy-validation>
        <div class="indexDiv my-4">
          <v-row justify="center" align="center">
            <v-card class="pa-2" style="margin-top: 110px;" v-if="windowWidth >= 600">
              <div class="next-page-ticket">
                <v-row class="my-4">
                  <v-col cols="3" class="hideOver">
                    <v-row justify="center" align="center" class="heightAll">
                      <v-icon color="#1abc9c">mdi-check-circle-outline</v-icon>
                      <span class="body-2 d-md-inline-block text-center"
                        style="font-family: Byekan !important;color:#1abc9c"
                        :style="{ width: windowWidth < 600 ? '100%' : '' }">رزرو پرواز</span>
                    </v-row>
                  </v-col>
                  <v-col cols="3" class="hideOver">
                    <v-row justify="center" align="center" class="heightAll">
                      <v-icon color="#1abc9c" class="d-block d-md-inline-block">mdi-account</v-icon>
                      <span class="body-2 d-block d-md-inline-block text-center"
                        style="font-family: Byekan !important;color:#1abc9c"
                        :style="{ width: windowWidth < 600 ? '100%' : '' }">تکمیل اطلاعات</span>
                    </v-row>
                  </v-col>
                  <v-col cols="3" class="hideOver">
                    <v-row justify="center" align="center" class="heightAll">
                      <v-icon :color="bookStep <= 1 ? 'grey darken-1' : '#1abc9c'">mdi-account-check</v-icon>
                      <span class="body-2 d-md-inline-block text-center" style="font-family: Byekan !important;"
                        :style="{ color: bookStep <= 1 ? '#757575' : '#1abc9c', width: windowWidth < 600 && '100%' }">تائید
                        اطلاعات</span>
                    </v-row>
                  </v-col>
                  <v-col cols="3" class="hideOver">
                    <v-row justify="center" align="center" class="heightAll">
                      <v-icon :color="bookStep <= 2 ? 'grey darken-1' : '#1abc9c'">mdi-credit-card-outline</v-icon>
                      <span class="body-2 d-md-inline-block text-center" style="font-family: Byekan !important;"
                        :style="{ color: bookStep <= 2 ? '#757575' : '#1abc9c', width: windowWidth < 600 && '100%' }">پرداخت
                        و دریافت بلیط</span>
                    </v-row>
                  </v-col>
                </v-row>
                <v-row class="my-2 px-6">
                  <v-progress-linear reverse background-color="grey lighten-4" class="rounded-lg"
                    :value="bookStep == 1 ? 50 : bookStep == 2 ? 75 : bookStep == 3 ? 100 : 100"></v-progress-linear>
                </v-row>
              </div>
            </v-card>
          </v-row>
          <v-row justify="center" v-if="bookStep != 3" :style="{ marginTop: windowWidth < 600 && '60px !important' }">
            <h5 class="d-block text-right widthAll mt-6 mb-2" style="width: 875px;">
              {{ flights.length > 1 ? 'پروازهای انتخابی شما' : 'پرواز انتخابی شما' }}
            </h5>
            <div style="width: 875px;">
              <ticket-card :isNextPage="true" :Passenger="Passenger" :tickets="choosedTicket"
                @reserveTicket="reserveTicket" />
            </div>
          </v-row>
          <v-row justify="center" v-if="bookStep == 1">
            <v-card outlined class="mt-6" style="width: 875px;" v-for="(user, i) in users" :key="i">
              <v-row align="center">
                <h5 class="ma-3">
                  {{ users.length == 1 ? 'مشخصات مسافر' : 'مشخصات مسافر ' + (i + 1) }}
                </h5>
                <v-spacer></v-spacer>
                <v-btn text color="red" class="ml-3" @click="loginDialog = true">+ اضافه کردن مسافر از لیست
                  مسافران</v-btn>
              </v-row>
              <v-divider></v-divider>
              <v-row class="ticketForm">
                <v-col cols="12" sm="6" md="4" class="px-4 py-2">
                  <label for="" class="mr-4">نام(لاتین)</label>
                  <v-text-field filled clsss="grey" :rules="nameRules" v-model="user.name"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-4 py-2">
                  <label for="" class="mr-4">نام خانوادگی(لاتین)</label>
                  <v-text-field filled clsss="grey" :rules="familyRules" v-model="user.family"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-4 px-lg-4 px-md-6 py-2">
                  <label for="" class="mr-2">ملیت</label>
                  <v-select :rules="emptyRules" color="white" class="font-small-xs" :items="nationalities"
                    v-model="user.nationality"></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-3 px-lg-4 py-2" v-if="user.nationality == 'ایرانی'">
                  <label for="" class="mr-4">کد ملی</label>
                  <v-text-field filled clsss="grey" pattern="\d*" type="number" v-model="user.nationalityCode"
                    :rules="nationalNumberRules"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-4 py-2" v-else>
                  <label for="" class="mr-4">شماره پاسپورت</label>
                  <v-text-field filled clsss="grey" v-model="user.passportNumber" :rules="emptyRules"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-3 py-2">
                  <label for="" class="mr-2">جنسیت</label>
                  <v-select color="white" class="font-small-xs" :items="genders" v-model="user.gender"
                    :rules="emptyRules"></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-2 px-lg-3 py-2 ">
                  <label for="" class="mr-4">تاریخ تولد</label>
                  <v-row class="relative">
                    <v-col class="px-1 ">
                      <v-select color="white" placeholder="روز" class="font-small-xs user-date" :items="dateDays"
                        v-model="user.birthdayDay" :rules="emptyRules" hide-details></v-select>
                    </v-col>
                    <v-col class="px-1">
                      <v-select color="white" placeholder="ماه" class="font-small-xs" :items="dateMonthsPersian"
                        v-model="user.birthdayMonth" :rules="emptyRules" hide-details></v-select>
                    </v-col>
                    <v-col class="px-1">
                      <v-select color="white" placeholder="سال" class="font-small-xs" :items="dateYears"
                        v-model="user.birthdayYear" :rules="emptyRules" hide-details></v-select>
                    </v-col>
                    <span v-if="dateError && (!user.birthdayYear || !user.birthdayMonth || !user.birthdayDay)"
                      class="caption red--text widthAll" style="font-family:Byekan !important">تاریخ تولد را مشخص
                      کنید.</span>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-2 px-lg-3 py-2" v-if="user.nationality != 'ایرانی'">
                  <label for="" class="mr-4">تاریخ انقضا پاسپورت</label>
                  <v-row>
                    <v-col class="px-1">
                      <v-select color="white" placeholder="روز" class="font-small-xs" :items="dateDays"
                        v-model="user.expirePassDay" :rules="emptyRules" hide-details></v-select>
                    </v-col>
                    <v-col class="px-1">
                      <v-select color="white" placeholder="ماه" class="font-small-xs" :items="dateMonths"
                        v-model="user.expirePassMonth" :rules="emptyRules" hide-details></v-select>
                    </v-col>
                    <v-col class="px-1">
                      <v-select color="white" placeholder="سال" class="font-small-xs" :items="dateYearsPass"
                        v-model="user.expirePassYear" :rules="emptyRules" hide-details></v-select>
                    </v-col>
                    <span v-if="dateError && (!user.expirePassYear || !user.expirePassMonth || !user.expirePassDay)"
                      class=" caption red--text widthAll" style="font-family:Byekan !important">تاریخ انقضا را مشخص
                      کنید.</span>
                  </v-row>
                </v-col>
              </v-row>

            </v-card>
          </v-row>
          <v-row class="hide-header-data-tabel" justify="center" v-if="bookStep == 2">
            <div v-if="persianUsers.length" style="width: 875px;">
              <h5 class="widthAll mt-6">
                {{ persianUsers.length == 1 ? 'مشخصات مسافر' : 'مشخصات مسافران ' }}
                {{ otherUsers.length != 0 ? '(ایرانی)' : '' }}
              </h5>
            </div>
            <v-card outlined v-if="persianUsers.length" class="mt-2" style="width: 875px;">
              <v-data-table :headers="persianTebelHeaders" :items="persianUsers" hide-default-footer>
                <template v-slot:[`item.birthday`]="{ item }">
                  <span>{{ item.birthdayDay }} / {{ item.birthdayMonth }} / {{ item.birthdayYear }}</span>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                  <v-btn outlined color="red" dark @click="editUserInfo(item, 'user')">ویرایش</v-btn>
                </template>
              </v-data-table>
            </v-card>
            <div v-if="otherUsers.length" style="width: 875px;">
              <h5 class="widthAll mt-6">
                {{ otherUsers.length == 1 ? 'مشخصات مسافر' : 'مشخصات مسافران ' }}
                {{ persianUsers.length != 0 ? '(غیر ایرانی)' : '' }}
              </h5>
            </div>
            <v-card outlined v-if="otherUsers.length" class="mt-2" style="width: 875px;">
              <v-data-table hide-default-footer :headers="otherTebelHeaders" :items="otherUsers">
                <template v-slot:[`item.expiredate`]="{ item }">
                  <span>{{ item.expirePassYear }}/{{ item.expirePassMonth }}/{{ item.expirePassDay }}</span>
                </template>
                <template v-slot:[`item.birthday`]="{ item }">
                  <span>{{ item.birthdayYear }}/{{ item.birthdayMonth }}/{{ item.birthdayDay }}</span>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                  <v-btn outlined color="red" @click="editUserInfo(item, 'user')">ویرایش</v-btn>
                </template>
              </v-data-table>
            </v-card>
          </v-row>
          <v-row justify="center" v-if="bookStep == 2">
            <div style="width: 875px;">
              <h5 class="mt-6 widthAll">اطلاعات تماس</h5>
            </div>
            <v-card outlined class="mt-1" style="width: 875px;">
              <v-data-table hide-default-footer :headers="contactInfoHeaders" :items="contactInfo">
                <template v-slot:[`item.actions`]="{ item }">
                  <v-btn outlined color="red" @click="editUserInfo(item, 'contact')">ویرایش</v-btn>
                </template>
              </v-data-table>
            </v-card>
          </v-row>
          <v-row justify="center" v-if="bookStep == 1">
            <v-card outlined class="mt-6" style="width: 875px;">
              <v-row align="center">
                <h5 class="ma-3">اطلاعات تماس</h5>
              </v-row>
              <v-divider></v-divider>
              <v-row class="ticketForm">
                <v-col cols="12" sm="6" class="px-md-12 py-2">
                  <label for="" class="mr-1">شماره موبایل</label>
                  <v-text-field filled clsss="grey" type="number" pattern="\d*" v-model="contactInfo[0].phone"
                    :rules="phoneRules"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="px-md-12 py-2">
                  <label for="" class="mr-1">ایمیل</label>
                  <v-text-field filled clsss="grey" :rules="emailRules" v-model="contactInfo[0].email"></v-text-field>
                </v-col>
              </v-row>
            </v-card>
          </v-row>
          <v-row justify="center" v-if="bookStep == 1">
            <v-card outlined class="my-6 pa-2" style="width: 875px;">
              <v-row align="center">
                <span class="body-2 mr-1 text-justify" style="font-family: Byekan !important;">
                  <v-icon color="red">mdi-alert-circle-outline</v-icon>
                  در صورت عدم ثبت نام و ادامه فرایند خرید ،شما بصورت خودکار ثبت نام خواهید شد.نام کاربری و پسورد شماره
                  موبایل شما خواهد بود
                </span>
              </v-row>
              <v-row justify="end">
                <v-btn color="red" dark class="my-2 ml-4" @click="changeBookStep(2)">ادامه فرایند خرید</v-btn>
              </v-row>
            </v-card>
          </v-row>
          <v-row justify="center" v-if="bookStep == 3" class="mt-12 mt-sm-6">
            <div class="indexDiv rounded-xl mb-6 pa-4 mt-12 mt-sm-6" style="max-width:875px;border: 5px solid #9ee9da;">
              <v-row justify="center" class="px-12">
                <img src="@/assets/image/check-mark.png" class="done-icon" alt="">
              </v-row>
              <v-row justify="center" class="mt-12 mb-4">
                <h1 style="color:#00a182" class="font-small-xs ">عملیات رزرو با موفقیت انجام شد!</h1>
              </v-row>
              <v-row justify="center" class="mb-12">
                <v-btn outlined color="red">جهت دانلود بلیط ها کلیک کنید</v-btn>
              </v-row>
            </div>
          </v-row>
          <v-dialog v-model="editTicketInfoDialog" width="700px" style="z-index:999998">
            <v-card class="pa-4" v-if="ModalUserType">
              <v-row>
                <v-icon class="d-inline-block ml-1" color="red">mdi-pen</v-icon>
                <h4 class="d-inline-block red--text">ویرایش مسافر {{ editUser.name }} {{ editUser.family }}</h4>
                <v-spacer></v-spacer>
                <v-icon @click="editTicketInfoDialog = false" color="red">mdi-close</v-icon>
              </v-row>
              <v-divider class="my-2"></v-divider>
              <v-row class="ticketForm">
                <v-col cols="12" sm="6" md="4" class="px-4 py-2">
                  <label for="" class="mr-4">نام(لاتین)</label>
                  <v-text-field filled clsss="grey" :rules="nameRules" v-model="editUser.name"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-4 py-2">
                  <label for="" class="mr-4">نام خانوادگی(لاتین)</label>
                  <v-text-field filled clsss="grey" :rules="familyRules" v-model="editUser.family"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-6  px-md-2 py-2">
                  <label for="" class="mr-2">ملیت</label>
                  <v-select :rules="emptyRules" color="white" class="font-small-xs" v-model="editUser.nationality"
                    :items="nationalities"></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-4 py-2" v-if="editUser.nationality == 'ایرانی'">
                  <label for="" class="mr-4">کد ملی</label>
                  <v-text-field filled clsss="grey" pattern="\d*" type="number" :rules="nationalNumberRules"
                    v-model="editUser.nationalityCode"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-4 py-2" v-else>
                  <label for="" class="mr-4">شماره پاسپورت</label>
                  <v-text-field filled clsss="grey" v-model="editUser.passportNumber" :rules="emptyRules"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-3 py-2">
                  <label for="" class="mr-2">جنسیت</label>
                  <v-select color="white" class="font-small-xs" :items="genders" v-model="editUser.gender"
                    :rules="emptyRules"></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-2 px-md-0 py-2 ">
                  <label for="" class="mr-4">تاریخ تولد</label>
                  <v-row>
                    <v-col class="px-1">
                      <v-select color="white" placeholder="روز" class="font-small-xs user-date"
                        v-model="editUser.birthdayDay" :items="dateDays" :rules="emptyRules"></v-select>
                    </v-col>
                    <v-col class="px-1">
                      <v-select color="white" placeholder="ماه" class="font-small-xs" v-model="editUser.birthdayMonth"
                        :items="dateMonthsPersian" :rules="emptyRules"></v-select>
                    </v-col>
                    <v-col class="px-1">
                      <v-select color="white" placeholder="سال" class="font-small-xs" v-model="editUser.birthdayYear"
                        :items="dateYears" :rules="emptyRules"></v-select>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-2 px-md-3 py-2" v-if="editUser.nationality != 'ایرانی'">
                  <label for="" class="mr-4">تاریخ انقضا پاسپورت</label>
                  <v-row>
                    <v-col class="px-1">
                      <v-select color="white" placeholder="روز" class="font-small-xs" :items="dateDays"
                        v-model="editUser.expirePassDay" :rules="emptyRules" hide-details></v-select>
                    </v-col>
                    <v-col class="px-1">
                      <v-select color="white" placeholder="ماه" class="font-small-xs" :items="dateMonths"
                        v-model="editUser.expirePassMonth" :rules="emptyRules" hide-details></v-select>
                    </v-col>
                    <v-col class="px-1">
                      <v-select color="white" placeholder="سال" class="font-small-xs" :items="dateYearsPass"
                        v-model="editUser.expirePassYear" :rules="emptyRules" hide-details></v-select>
                    </v-col>
                    <span v-if="!editUser.expirePassYear || !editUser.expirePassMonth || !editUser.expirePassDay"
                      class=" caption red--text widthAll" style="font-family:Byekan !important">تاریخ انقضا را مشخص
                      کنید.</span>
                  </v-row>
                </v-col>

              </v-row>
              <v-row justify="end">
                <v-btn dark color="red darken-2" outlined class="px-12 py-4 my-2 ml-4"
                  @click="confirmEditUser('user')">اعمال تغییرات </v-btn>
              </v-row>
            </v-card>
            <v-card class="pa-4" v-else>
              <v-row>
                <v-icon class="d-inline-block ml-1" color="red">mdi-pen</v-icon>
                <h4 class="d-inline-block red--text">ویرایش اطلاعات تماس</h4>
                <v-spacer></v-spacer>
                <v-icon @click="editTicketInfoDialog = false" color="red">mdi-close</v-icon>
              </v-row>
              <v-divider class="my-2"></v-divider>
              <v-row class="ticketForm">
                <v-col cols="12" sm="6" class="px-4 px-md-12 py-2">
                  <label for="" class="mr-1">شماره موبایل</label>
                  <v-text-field filled clsss="grey" pattern="\d*" type="number" v-model="editContact.phone"
                    :rules="phoneRules"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="px-4 px-md-12 py-2">
                  <label for="" class="mr-1">ایمیل</label>
                  <v-text-field filled clsss="grey" :rules="emailRules" v-model="editContact.email"></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="end">
                <v-btn dark color="red darken-2" outlined class="px-12 py-4 my-2 ml-4"
                  @click="confirmEditUser('contact')">ذخیره</v-btn>
              </v-row>
            </v-card>
          </v-dialog>
          <div v-if="bookStep == 2">
            <v-row justify="center">
              <div class="indexDiv">
                <v-row justify="center">
                  <v-card outlined class="mt-6 pa-4" style="width: 875px;">
                    <v-row align="center">
                      <span class=" mt-sm-4 mt-md-0">
                        در صورت داشتن کد تخفیف آن را وارد نمایید
                      </span>
                      <v-spacer></v-spacer>
                      <div class="relative grey lighten-3 rounded-lg smallInputForm mt-6 mt-md-0">
                        <v-text-field placeholder="کد تخفیف" v-model="offCode" class="d-inline-block"
                          :loading="offCodeLoading"
                          :class="offCodeIsTrue == true ? 'codeCheckTrue' : offCodeIsTrue == false && 'codeCheckFalse'"></v-text-field>
                        <v-btn :disabled="offCodeDisabledButton" color="red darken-2" class="px-0 px-sm-9 py-6 heightAll"
                          dark @click="checkCode">اعمال کد</v-btn>
                        <span v-if="offCode.length != 0 && offCodeIsTrue != undefined" class="absolute caption"
                          :class="offCodeIsTrue == true ? 'green--text' : offCodeIsTrue == false && 'red--text'"
                          style="bottom:-22px;right:0;font-family:Byekan !important">
                          {{ offCodeIsTrue == true ? 'کد تخفیف اعمال شد!' : 'کد وارد شده صحیح نیست!' }}
                        </span>
                      </div>
                    </v-row>
                    <h5 class="red--text text--darken-2 mt-6 mt-md-0">لطفا توجه داشته باشید در صورت تائید اطلاعات،امکان
                      اصلاح وجود ندارد!</h5>
                    <v-row>
                      <v-form ref="acceptRulls">
                        <v-checkbox v-model="acceptRulls"
                          label="قوانین و مقررات خرید بلیط و سایت را مطالعه کرده و میپذیرم" color="red darken-2"
                          class="mt-2 " off-icon="mdi-circle-outline" on-icon="mdi-check-circle-outline" hide-details
                          :rules="emptyRules"></v-checkbox>
                      </v-form>
                    </v-row>
                  </v-card>
                </v-row>
              </div>
            </v-row>
            <v-row justify="center" class="mt-8 mb-12">
              <div class="indexDiv" style="max-width: 875px;">
                <v-row align="end">
                  <v-btn class="red--text red lighten-4 " @click="scrollTopNextPage(); bookStep = 1; dateError = false;">
                    بازگشت به مرحله قبلی</v-btn>
                  <v-spacer></v-spacer>
                  <div class="relative" :class="offCodeIsTrue && 'offCodeIsTrue'">
                    <v-row justify="center" class="mb-1" align="center">
                      <h3 :class="offCodeIsTrue && 'red--text'">{{ choosedTicket[0].allprisce }}</h3>
                      <span class="caption mr-2 font-weight-bold" :class="offCodeIsTrue && 'red--text'"
                        style="font-family: Byekan !important;">ریال</span>
                    </v-row>
                    <v-row v-if="offCodeIsTrue" class="mb-3" justify="center" align="center">
                      <h3>{{ choosedTicket[0] }}</h3>
                      <span class="caption mr-2 font-weight-bold" style="font-family: Byekan !important;">ریال</span>
                    </v-row>
                    <v-btn class="green darken-2 px-9" dark @click="changeBookStep(3)"> تائید و پرداخت</v-btn>
                  </div>
                </v-row>
              </div>
            </v-row>
          </div>
        </div>
      </v-form>
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
import TicketCard from '@/components/TicketCard.vue'

export default {
  name: 'flight-page',
  data() {
    return {
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
      fromPrice: 0,
      toPrice: '5,000,000',
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
      nextPage: false,
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
      icons: [
        'mdi-sun-wireless-outline',
        'mdi-white-balance-sunny',
        'mdi-theme-light-dark',
        'mdi-weather-night',
        'mdi-weather-night-partly-cloudy'
      ],

    }
  },
  components: {
    InputMain,
    TicketCard
  },
  watch: {
    fromPrice() {
      let self = this
      let value1 = self.fromPrice.toString().replace(/,/g, "")
      let value2 = value1
      if (value1.length == 0 || value1 < 0) {
        value2 = 0
      } else if (value1.length > 1 && value1[0] == 0) {
        value2 = value1.replace(0, '')
      } else {
        value2 = value1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
      self.fromPrice = value2
      self.filter.price = [Number(value1), Number(self.toPrice.toString().replace(/,/g, ""))]
    },
    toPrice() {
      let self = this
      let value1 = self.toPrice.toString().replace(/,/g, "")
      let value2 = value1
      if (value1.length == 0 || value1 < 0) {
        value2 = 0
      } else if (value1.length > 1 && value1[0] == 0) {
        value2 = value1.replace(0, '')
      } else {
        value2 = value1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
      self.toPrice = value2
      self.filter.price = [Number(self.fromPrice.toString().replace(/,/g, "")), Number(value1)]
    },
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
    showNextPage() {
      this.nextPage = true
    },
    checkCode() {
      this.offCodeLoading = true

      setTimeout(() => {
        this.offCodeLoading = false
        if (this.offCode == '1111') {
          this.offCodeIsTrue = true
          this.offCodeDisabledButton = true
        } else {
          this.offCodeIsTrue = false
          this.offCodeDisabledButton = false
        }
      }, 1000);
    },
    confirmEditUser(type) {
      if (this.validateBookStep()) {
        if (type == 'user') {
          var index = this.users.findIndex((x) => x.id == this.editUser.id)
          this.users[index] = this.editUser;
          this.changeBookStep(2)
        } else {
          this.contactInfo = []
          this.contactInfo.push(this.editContact)
        }
        this.editTicketInfoDialog = false
      } else {
        this.alertText = 'لطفا فیلدهای درخواستی را بدرستی تکمیل فرمایید.'
        this.alertType = 'error'
        this.showAlert = true
      }
    },
    scrollTop() {
      window.scrollTo(0, 0)
    },
    editUserInfo(item, type) {
      if (type == 'user') {
        this.editUser = Object.assign({}, item)
        this.ModalUserType = true
      } else {
        this.editContact = Object.assign({}, this.contactInfo[0])
        this.ModalUserType = false
      }
      this.editTicketInfoDialog = true
    },
    changeChoosedTicket(event) {
      this.choosedTicket = []
      this.choosedTicket.push(event)
    },
    removeFilters() {
      this.filter.time = [0, 4]
      this.filter.class = []
      this.filter.airline = []
      this.filter.type = []
      this.filter.showType = []
      this.toPrice = 5000000,
        this.fromPrice = 0
    },
    changeRangePrice() {
      this.fromPrice = this.filter.price[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      this.toPrice = this.filter.price[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    filterTime(val) {
      return this.icons[val]
    },
    changeBookStep(step) {
      if (step == 2 && this.validateBookStep()) {
        var users = this.users;
        this.persianUsers = []
        this.otherUsers = []
        this.persianUsers = users.filter((x) => x.nationality == 'ایرانی');
        this.otherUsers = users.filter((x) => x.nationality != 'ایرانی');
        this.bookStep = step;
        this.dateError = false
        this.scrollTopNextPage();
        this.scrollTop()
      } else if (step == 3 && this.$refs.acceptRulls.validate()) {
        this.bookStep = step;
        this.dateError = false
        this.scrollTopNextPage();
      } else {
        this.dateError = true
        this.alertText = 'لطفا فیلدهای درخواستی را بدرستی تکمیل فرمایید.'
        this.alertType = 'error'
        this.showAlert = true
      }

    },
    reserveTicket(ticket) {
      // if (this.ticketChooseStep != this.flights.length - 1) {
      //   this.ticketChooseStep = this.ticketChooseStep + 1
      //   this.dayNumber(this.flights[this.ticketChooseStep].timestamp)
      // } else {
      this.nextPage = false
      // }
    },
    chooseTicket(type) {
      this.ticketDetailsModal = false;
      // this.nextPage = false ;
      // this.nextPage = type == 'change' ? false : true;
    },
    changeActiveSection(index) {
      this.allSections = this.allSections.map((x) => {
        return {
          icon: x.icon,
          title: x.title,
          active: false,
        };
      });
      this.originCity = ''
      this.destinationInternal = ''
      this.allSections[index].active = true;
      this.headerRooms = [{
        peaple: 1,
        child: 0,
        baby: 0
      }]
    },
    validateBookStep() {
      if (this.$refs.nextPageForm.validate()) {
        return true
      } else {
        return false
      }
    },
    scrollTopNextPage() {
      this.$refs.nextPage.scrollTop = 0
    },
    changeRoomValue() {
      var rooms = this.Passenger
      var all = 0
      all = all + rooms.baby + rooms.child + rooms.peaple
      this.users = []
      for (let i = 0; i < all; i++) {
        this.users.push(
          {
            id: i,
            name: '',
            family: '',
            nationality: 'ایرانی',
            nationalityCode: '',
            gender: '',
            phone: '',
            email: '',
            birthdayDay: '0',
            birthdayMonth: '',
            birthdayYear: '0',
            passportNumber: '',
            expirePassDay: '',
            expirePassMonth: '',
            expirePassYear: '',
          }
        )
      }
      this.allPeaples = all + ' مسافر '
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
    getTickets(event) {
      this.beforeTickets = event
    },
    async addTickets(event) {

      if (!this.filter.airline.includes(event.Airline)) {
        this.filter.airline.push(event.Airline)
      }
      this.beforeTickets.push(event)
    },
    emptyTicket() {
      this.beforeTickets = []
    },
    dateChanged(event) {
      let numberdate = Math.floor(new Date(event).getTime() / 1000) * 1000
      this.dayNumber(numberdate)
    },
    changeTicketValue(event) {
      this.ticketValue = event
    },
    reRoute() {
      this.beforeTickets = []
      this.Passenger = {
        peaple: this.$route.query.adl,
        child: this.$route.query.chd,
        inf: this.$route.query.inf
      }
      let peapleNumber = Number(this.Passenger.peaple) + Number(this.Passenger.child) + Number(this.Passenger.inf)
      this.users = []
      for (let i = 0; i < peapleNumber; i++) {
        this.users.push(
          {
            id: i,
            name: '',
            family: '',
            nationality: 'ایرانی',
            nationalityCode: '',
            gender: '',
            phone: '',
            email: '',
            birthdayDay: '',
            birthdayMonth: 0,
            birthdayYear: '',
            passportNumber: '',
            expirePassDay: '',
            expirePassMonth: '',
            expirePassYear: '',
          }
        )
      }
      let numberdate = Math.floor(new Date(this.$route.query.start).getTime() / 1000) * 1000
      this.dayNumber(numberdate)

    },
    setDates() {
      this.dateDays = []
      this.dateYears = []
      this.dateYearsPass = [new Date().getFullYear()]
      var nowYear = new Date().toLocaleDateString('fa-IR-u-nu-latn').slice(0, 4)
      for (let i = 0; i < 100; i++) {
        this.dateYears.push(nowYear - i)
        if (i > 0 && i < 32) {
          this.dateDays.push(i)
          if (i < 20) {
            this.dateYearsPass.push(new Date().getFullYear() + i)
          }
        }
      }
    },
    dynamicSort(property) {
      var sortOrder = 1;
      if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
      }
      return function (a, b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
      }
    },
    complateSearch() {
      let beforeTickets = this.beforeTickets
      // let variabel1 = [
      //   {
      //     Origin: "THR",
      //     Destination: "KIH",
      //     AdultTotalPrices: "RR:13593000",
      //     OperatingFlightNo: "7125",
      //     Airline: "Y9",
      //     ClassesStatus: "/RRA AIC AJC",
      //     FlightNo: 7125,
      //     Transit: false,
      //     ClassRefundStatus: "RR:Refundable",
      //     CurrencyCode: "IRR",
      //     DepartureDateTime: "2023-06-11",
      //     ArrivalDateTime: "2023-06-11 17:45:00",
      //     OperatingAirline: "Y9",
      //     AircraftTypeName: "",
      //     AircraftTypeCode: "MD8",
      //     DepartureTime: "16:00",
      //     ArrivalDate: "2023-06-11",
      //     ArrivalTime: "17:45",
      //     originCity: "تهران",
      //     destinationInternal: "کیش",
      //     dayName: "یکشنبه",
      //     fromDate: "۲۱ خرداد",
      //     type: "A",
      //     price: 13593000,
      //     fare: {
      //       AdultTotalPrice: "13593000",
      //       InfantTotalPrice: "1890000",
      //       EligibilityText: " ",
      //       CRCNRules: "از لحظه صدور تا 24 ساعت قبل از پرواز ,20,P/از 24ساعت قبل پرواز به بعد ,40,P/",
      //       InfantFare: "1626000",
      //       AdultTaxes: "I6:30000.0,EN_Desc:PASSENGER SAFETY OVERSIGHT SERVICE,FA_Desc:PASSENGER SAFETY OVERSIGHT SERVICE$V0:1104000.0,EN_Desc:VAT,FA_Desc:ماليات بر ارزش افزوده$HL:123000.0,EN_Desc:HELAL AHMAR TAX,FA_Desc:عوارض هلال احمر$LP:70000.0,EN_Desc:AIRPORT TAX,FA_Desc:فرودگاهي$",
      //       ChildFare: "6133000",
      //       AdultFare: "12266000",
      //       ChildTaxes: "I6:30000.0,EN_Desc:PASSENGER SAFETY OVERSIGHT SERVICE,FA_Desc:PASSENGER SAFETY OVERSIGHT SERVICE$V0:552000.0,EN_Desc:VAT,FA_Desc:ماليات بر ارزش افزوده$HL:62000.0,EN_Desc:HELAL AHMAR TAX,FA_Desc:عوارض هلال احمر$LP:70000.0,EN_Desc:AIRPORT TAX,FA_Desc:فرودگاهي$",
      //       InfantTaxes: "I6:30000.0,EN_Desc:PASSENGER SAFETY OVERSIGHT SERVICE,FA_Desc:PASSENGER SAFETY OVERSIGHT SERVICE$V0:147000.0,EN_Desc:VAT,FA_Desc:ماليات بر ارزش افزوده$HL:17000.0,EN_Desc:HELAL AHMAR TAX,FA_Desc:عوارض هلال احمر$LP:70000.0,EN_Desc:AIRPORT TAX,FA_Desc:فرودگاهي$",
      //       ChildTotalPrice: "6847000"
      //     },
      //     capacity: "A",
      //     longDate1: "۲۱ خرداد ۱۴۰۲",
      //     longDate2: "۲۱ خرداد ۱۴۰۲",
      //     enLongDate1: "June 11",
      //     enLongDate2: "June 11"
      //   },
      //   {
      //     Origin: "THR",
      //     Destination: "KIH",
      //     AdultTotalPrices: "A:19869000 T:100000 P:-",
      //     OperatingFlightNo: "1224",
      //     Airline: "QB",
      //     ClassesStatus: "/AA TC PC",
      //     FlightNo: 1224,
      //     Transit: false,
      //     ClassRefundStatus: "A:Refundable T:Refundable P:Not refundable",
      //     CurrencyCode: "IRR",
      //     DepartureDateTime: "2023-06-11",
      //     ArrivalDateTime: "2023-06-11 09:45:00",
      //     OperatingAirline: "QB",
      //     AircraftTypeName: "",
      //     AircraftTypeCode: "100",
      //     DepartureTime: "08:00",
      //     ArrivalDate: "2023-06-11",
      //     ArrivalTime: "09:45",
      //     originCity: "تهران",
      //     destinationInternal: "کیش",
      //     dayName: "یکشنبه",
      //     fromDate: "۲۱ خرداد",
      //     type: "A",
      //     price: 19869000,
      //     fare: {
      //       AdultTotalPrice: "19869000",
      //       InfantTotalPrice: "2048000",
      //       EligibilityText: "",
      //       CRCNRules: "ازلحظه صدورتا12ظهر3روزقبل ازپرواز,30,P/از12ظهر3روزقبل پروازتا12ظهريک روزقبل از پرواز,40,P/از12ظهريک روزقبل ازپروازتا2ساعت به پرواز,60,P/از 2ساعت به پرواز و پس از آن,70,P/",
      //       InfantFare: "1798000",
      //       AdultTaxes: "I6:30000.0,EN_Desc:PASSENGER SAFETY OVERSIGHT SERVICE,FA_Desc:PASSENGER SAFETY OVERSIGHT SERVICE$V0:1618000.0,EN_Desc:VAT,FA_Desc:ماليات بر ارزش افزوده$HL:180000.0,EN_Desc:HL Tax,FA_Desc:$LP:70000.0,EN_Desc:AIRPORT TAX,FA_Desc:$",
      //       ChildFare: "13479000",
      //       AdultFare: "17971000",
      //       ChildTaxes: "I6:30000.0,EN_Desc:PASSENGER SAFETY OVERSIGHT SERVICE,FA_Desc:PASSENGER SAFETY OVERSIGHT SERVICE$V0:1214000.0,EN_Desc:VAT,FA_Desc:ماليات بر ارزش افزوده$HL:135000.0,EN_Desc:HL Tax,FA_Desc:$LP:70000.0,EN_Desc:AIRPORT TAX,FA_Desc:$",
      //       InfantTaxes: "V0:162000.0,EN_Desc:VAT,FA_Desc:ماليات بر ارزش افزوده$HL:18000.0,EN_Desc:HL Tax,FA_Desc:$LP:70000.0,EN_Desc:AIRPORT TAX,FA_Desc:$",
      //       ChildTotalPrice: "14928000"
      //     },
      //     capacity: "A",
      //     longDate1: "۲۱ خرداد ۱۴۰۲",
      //     longDate2: "۲۱ خرداد ۱۴۰۲",
      //     enLongDate1: "June 11",
      //     enLongDate2: "June 11"
      //   },
      //   {
      //     Origin: "THR",
      //     Destination: "KIH",
      //     AdultTotalPrices: "YS:23002000 YU:21507000 YM:16028000 VO:19869000 LB:17367000 T:13592000 G:-",
      //     OperatingFlightNo: "4051",
      //     Airline: "ZV",
      //     ClassesStatus: "/YSC YUC YMC VOA LBA TC GC",
      //     FlightNo: 4051,
      //     Transit: false,
      //     ClassRefundStatus: "YS:Refundable YU:Refundable YM:Refundable VO:Refundable LB:Refundable T:Refundable G:-",
      //     CurrencyCode: "IRR",
      //     DepartureDateTime: "2023-06-11",
      //     ArrivalDateTime: "2023-06-11 13:15:00",
      //     OperatingAirline: "ZV",
      //     AircraftTypeName: "",
      //     AircraftTypeCode: "MD8",
      //     DepartureTime: "11:20",
      //     ArrivalDate: "2023-06-11",
      //     ArrivalTime: "13:15",
      //     originCity: "تهران",
      //     destinationInternal: "کیش",
      //     dayName: "یکشنبه",
      //     fromDate: "۲۱ خرداد",
      //     type: "A",
      //     price: 6011000,
      //     fare: {
      //       AdultTotalPrice: "6011000",
      //       InfantTotalPrice: "1495000",
      //       EligibilityText: " ",
      //       CRCNRules: "ازلحظه صدورتا15دقيقه بعدازصدور,0,P/از سه ساعت قبل از پرواز,90,P/تا سه ساعت قبل از پرواز ,80,P/تا12 ?ک روز قبل از پرواز,60,P/از 15 دقيقه بعد از صدور تا 12ظهر 3روز قبل از پرواز,50,P/",
      //       InfantFare: "1267000",
      //       AdultTaxes: "I6:30000.0,EN_Desc:PASSENGER SAFETY OVERSIGHT SERVICE,FA_Desc:PASSENGER SAFETY OVERSIGHT SERVICE$V0:484000.0,EN_Desc:VAT,FA_Desc:ماليات بر ارزش افزوده$HL:54000.0,EN_Desc:HELAL AHMAR TAX,FA_Desc:عوارض هلال احمر$LP:70000.0,EN_Desc:AIRPORT TAX,FA_Desc:فرودگاهي$",
      //       ChildFare: "4836000",
      //       AdultFare: "5373000",
      //       ChildTaxes: "I6:30000.0,EN_Desc:PASSENGER SAFETY OVERSIGHT SERVICE,FA_Desc:PASSENGER SAFETY OVERSIGHT SERVICE$V0:436000.0,EN_Desc:VAT,FA_Desc:ماليات بر ارزش افزوده$HL:49000.0,EN_Desc:HELAL AHMAR TAX,FA_Desc:عوارض هلال احمر$LP:70000.0,EN_Desc:AIRPORT TAX,FA_Desc:فرودگاهي$",
      //       InfantTaxes: "I6:30000.0,EN_Desc:PASSENGER SAFETY OVERSIGHT SERVICE,FA_Desc:PASSENGER SAFETY OVERSIGHT SERVICE$V0:115000.0,EN_Desc:VAT,FA_Desc:ماليات بر ارزش افزوده$HL:13000.0,EN_Desc:HELAL AHMAR TAX,FA_Desc:عوارض هلال احمر$LP:70000.0,EN_Desc:AIRPORT TAX,FA_Desc:فرودگاهي$",
      //       ChildTotalPrice: "5421000"
      //     },
      //     capacity: "A",
      //     longDate1: "۲۱ خرداد ۱۴۰۲",
      //     longDate2: "۲۱ خرداد ۱۴۰۲",
      //     enLongDate1: "June 11",
      //     enLongDate2: "June 11"
      //   },
      //   {
      //     Origin: "THR",
      //     Destination: "KIH",
      //     AdultTotalPrices: "YS:23002000 YU:21507000 YM:16028000 VO:19869000 LB:17367000 T:13592000 G:-",
      //     OperatingFlightNo: "4051",
      //     Airline: "ZV",
      //     ClassesStatus: "/YSC YUC YMC VOA LBA TC GC",
      //     FlightNo: 4051,
      //     Transit: false,
      //     ClassRefundStatus: "YS:Refundable YU:Refundable YM:Refundable VO:Refundable LB:Refundable T:Refundable G:-",
      //     CurrencyCode: "IRR",
      //     DepartureDateTime: "2023-06-11",
      //     ArrivalDateTime: "2023-06-11 13:15:00",
      //     OperatingAirline: "ZV",
      //     AircraftTypeName: "",
      //     AircraftTypeCode: "MD8",
      //     DepartureTime: "11:20",
      //     ArrivalDate: "2023-06-11",
      //     ArrivalTime: "13:15",
      //     originCity: "تهران",
      //     destinationInternal: "کیش",
      //     dayName: "یکشنبه",
      //     fromDate: "۲۱ خرداد",
      //     type: "A",
      //     price: 9597000,
      //     fare: {
      //       AdultTotalPrice: "9597000",
      //       InfantTotalPrice: "1495000",
      //       EligibilityText: " ",
      //       CRCNRules: "ازلحظه صدورتا15دقيقه بعدازصدور,0,P/از 15 دقيقه بعد از صدور تا 12ظهر 3روز قبل از پرواز,40,P/تا12 ?ک روز قبل از پرواز,50,P/تا سه ساعت قبل از پرواز ,60,P/از سه ساعت قبل از پرواز,70,P/",
      //       InfantFare: "1267000",
      //       AdultTaxes: "I6:30000.0,EN_Desc:PASSENGER SAFETY OVERSIGHT SERVICE,FA_Desc:PASSENGER SAFETY OVERSIGHT SERVICE$V0:777000.0,EN_Desc:VAT,FA_Desc:ماليات بر ارزش افزوده$HL:87000.0,EN_Desc:HELAL AHMAR TAX,FA_Desc:عوارض هلال احمر$LP:70000.0,EN_Desc:AIRPORT TAX,FA_Desc:فرودگاهي$",
      //       ChildFare: "7339000",
      //       AdultFare: "8633000",
      //       ChildTaxes: "I6:30000.0,EN_Desc:PASSENGER SAFETY OVERSIGHT SERVICE,FA_Desc:PASSENGER SAFETY OVERSIGHT SERVICE$V0:661000.0,EN_Desc:VAT,FA_Desc:ماليات بر ارزش افزوده$HL:74000.0,EN_Desc:HELAL AHMAR TAX,FA_Desc:عوارض هلال احمر$LP:70000.0,EN_Desc:AIRPORT TAX,FA_Desc:فرودگاهي$",
      //       InfantTaxes: "I6:30000.0,EN_Desc:PASSENGER SAFETY OVERSIGHT SERVICE,FA_Desc:PASSENGER SAFETY OVERSIGHT SERVICE$V0:115000.0,EN_Desc:VAT,FA_Desc:ماليات بر ارزش افزوده$HL:13000.0,EN_Desc:HELAL AHMAR TAX,FA_Desc:عوارض هلال احمر$LP:70000.0,EN_Desc:AIRPORT TAX,FA_Desc:فرودگاهي$",
      //       ChildTotalPrice: "8174000"
      //     },
      //     capacity: "A",
      //     longDate1: "۲۱ خرداد ۱۴۰۲",
      //     longDate2: "۲۱ خرداد ۱۴۰۲",
      //     enLongDate1: "June 11",
      //     enLongDate2: "June 11"
      //   }
      // ]
      let variabel1 = []
      let variabel2 = []
      for (let i = 0; i < beforeTickets.length; i++) {
        if (((beforeTickets[i].type != 'X') && (beforeTickets[i].type != 'C'))) {

          variabel1.push(beforeTickets[i])
        } else {
          variabel2.push(beforeTickets[i])
        }
      }
      variabel1 = variabel1.sort(this.dynamicSort("price"));
      if (variabel1.length != 0) {
        this.tickets = variabel1
      }

    }
  },
  created() {
    this.windowWidth = window.innerWidth
    if (this.$route.query.start) {
      let numberdate = Math.floor(new Date(this.$route.query.start).getTime() / 1000) * 1000
      this.dayNumber(numberdate)
      this.reRoute()
    } else {
      let numberdate = Math.floor(new Date().getTime() / 1000) * 1000
      this.dayNumber(numberdate)
    }
    this.setDates();

  },
}
</script>