<template>
  <div class="widthAll">
    <div
      class="hideOver my-4"
      v-for="(item, i) in tickets"
      :key="i"
      :style="isFaild && 'cursor: context-menu;'"
    >
      <v-skeleton-loader class="textLoader widthAll" type="image">
        <div
          class="widthAll relative"
          :class="isFaild ? 'grey lighten-2' : 'white'"
          style="border: 1px solid; border-color: #efefef !important"
        >
          <div
            class="absolute rounded-circle ticketCircle"
            style="right: -25px; top: 50%; margin-top: -25px"
          ></div>
          <div
            class="absolute rounded-circle ticketCircle"
            style="left: -25px; top: 50%; margin-top: -25px"
          ></div>
          <div
            class="absolute rounded-circle ticketCircle d-none d-sm-inline-block"
            style="left: 30%; bottom: -25px; margin-left: -25px"
          ></div>
          <div
            class="absolute rounded-circle ticketCircle d-none d-sm-inline-block"
            style="left: 30%; top: -25px; margin-left: -25px"
          ></div>
          <v-row class="heightAll">
            <div class="pt-2 rightSectionTicket">
              <v-row
                class="mt-1 mt-sm-8 mr-2 mr-sm-6 relative"
                align="center"
                justify="center"
              >
                <img
                  :src="
                    item.Airline == 'I3'
                      ? require('@/assets/image/لوگوی_آتا.png')
                      : item.Airline == 'Y9'
                      ? require('@/assets/image/لوگوی_کیش ایر.png')
                      : item.Airline == 'JI'
                      ? require('@/assets/image/لوگوی_معراج.png')
                      : item.Airline == 'QB'
                      ? require('@/assets/image/لوگوی_قشم ایر.png')
                      : item.Airline == 'IV'
                      ? require('@/assets/image/لوگوی_کاسپین.png')
                      : item.Airline == 'HH'
                      ? require('@/assets/image/لوگوی_تابان.png')
                      : item.Airline == 'EP'
                      ? require('@/assets/image/لوگوآسمان2.jpg')
                      : item.Airline == 'ZV'
                      ? require('@/assets/image/zagros.png')
                      : item.Airline == 'VR'
                      ? require('@/assets/image/لوگوی_وارش.png')
                      : item.Airline == 'NV'
                      ? require('@/assets/image/لوگوی_نفت.png')
                      : item.Airline == 'IRZ'
                      ? require('@/assets/image/لوگوی_ساها.png')
                      : item.Airline == 'FP'
                      ? require('@/assets/image/لوگوی_فلای‌پرشی.png')
                      : ''
                  "
                  alt=""
                  class="rounded-circle pa-1 white"
                  width="50"
                  height="50"
                  style="box-shadow: 1px 1px 4px #b3b3b3; z-index: 2"
                />
                <span
                  class="px-2 px-sm-2 body-2 px-4 mt-2 mt-sm-0"
                  :class="isFaild ? 'grey lighten-2' : 'white'"
                  style="font-family: Byekan !important; z-index: 2"
                >
                  {{
                    (chooseStep == 1 && !isNextPage) || (isNextPage && i == 0)
                      ? AllpersianCityes.find((x) => x.id == item.Origin).text
                      : AllpersianCityes.find((x) => x.id == item.Destination)
                          .text
                  }}
                </span>
                <img
                  src="@/assets/image/flight-go-flesh.png"
                  class="absolute widthAll mt-4 mt-sm-0"
                  alt=""
                  height="12"
                />
                <v-spacer></v-spacer>
                <span
                  class="absolute body-2 grey--text text--darken-1 dateTicket"
                  style="font-family: Byekan !important; bottom: 35px"
                >
                  {{
                    (chooseStep == 1 && !isNextPage) || (isNextPage && i == 0)
                      ? item.dayName.day1
                      : item.dayName.day2
                  }}
                  {{
                    (chooseStep == 1 && !isNextPage) || (isNextPage && i == 0)
                      ? item.fromDate
                      : item.endDate
                  }}
                </span>
                <span
                  class="absolute grey--text text--darken-1 caption typeFlightTicket"
                  style="font-family: Byekan !important"
                  >سیستمی</span
                >
                <span
                  class="px-2 px-sm-6 body-2 pr-4 pl-7 pl-sm-5 mt-2 mt-sm-0"
                  :class="isFaild ? 'grey lighten-2' : 'white'"
                  style="font-family: Byekan !important; left: 0; z-index: 2"
                >
                  {{
                    (chooseStep == 1 && !isNextPage) || (isNextPage && i == 0)
                      ? AllpersianCityes.find((x) => x.id == item.Destination)
                          .text
                      : AllpersianCityes.find((x) => x.id == item.Origin).text
                  }}
                </span>
              </v-row>
              <v-row class="my-4 mr-4 mr-sm-7">
                <span class="body-2" style="font-family: Byekan !important">{{
                  item.AirlinePersianId
                }}</span>
                <span
                  class="mr-3 mr-sm-3 pr-1 body-2"
                  style="font-family: Byekan !important"
                  >{{ item.DepartureTime }}</span
                >
                <v-spacer></v-spacer>
                <span
                  class="ml-5 ml-sm-3 pl-2 body-2"
                  style="font-family: Byekan !important"
                  >{{ item.ArrivalTime }}</span
                >
              </v-row>
            </div>
            <div class="leftSectionTicket">
              <v-row class="heightAll" justify="center">
                <div class="widthAll text-center my-3">
                  <div
                    v-if="item.type == 'C' || item.type == 'X'"
                    class="ticketPrice mt-3 mt-sm-12"
                  >
                    <span v-if="item.type == 'C'" class="red--text bold"
                      >تکمیل ظرفیت</span
                    >
                    <span v-if="item.type == 'X'" class="red--text bold"
                      >کنسل شده</span
                    >
                  </div>
                  <div
                    v-else-if="item.type != 'C' && item.type != 'X'"
                    class="ticketPrice mt-3 mt-sm-0"
                  >
                    <span class=""> قیمت </span>
                    <br />
                    <h3 class="mb-3 d-inline-block">
                      {{ separatePrice(item.price / 10) }}
                    </h3>
                    <h3
                      class="mb-3 d-inline-block mr-2"
                      style="font-family: Byekan !important"
                    >
                      تومان
                    </h3>
                  </div>
                  <div
                    v-if="item.type != 'C' && item.type != 'X'"
                    class="ticketButtons"
                  >
                    <v-btn
                      v-if="isMainPage"
                      class="px-10 px-lg-10"
                      color="red"
                      outlined
                      @click="
                        choosedTicket = item;
                        reserve(item);
                      "
                    >
                      رزرو بلیط
                    </v-btn>
                    <v-btn
                      v-else-if="isNextPage"
                      class="px-2 px-md-6"
                      color="red"
                      outlined
                      @click="changeTicket(i)"
                    >
                      تغییر پرواز انتخابی
                    </v-btn>
                    <br />
                    <v-btn
                      class="px-3 mt-2"
                      color="blue darken-2"
                      outlined
                      :class="
                        (!!Number(item.type) && 'mb-2') || isMainPage
                          ? 'px-5'
                          : 'px-md-7'
                      "
                      @click="
                        choosedTicketNumber = i;
                        setAllPrice(item);
                        activeTab = 0;
                        ticketDetailsModal = true;
                        choosedTicket = item;
                        returnCRCNRules(choosedTicket.fare.CRCNRules);
                      "
                      >مشاهده جزییات</v-btn
                    >
                    <br v-if="!!Number(item.type)" />
                    <span
                      class="red--text caption"
                      v-if="!!Number(item.type)"
                      style="
                        font-family: Byekan !important;
                        text-shadow: 0 0 1px red;
                      "
                    >
                      ظرفیت {{ item.type }} نفر
                    </span>
                  </div>
                </div>
              </v-row>
            </div>
          </v-row>
        </div>
      </v-skeleton-loader>
    </div>
    <v-dialog width="1400" v-model="ticketDetailsModal" style="z-index: 999999">
      <v-sheet class="relative pa-2" style="min-height: 500px">
        <v-row align="start">
          <v-icon class="ma-1" @click="ticketDetailsModal = false"
            >mdi-close</v-icon
          >
          <v-spacer></v-spacer>
          <v-btn
            v-if="isMainPage"
            class="px-sm-6 py-sm-6 ma-3 absolute"
            color="red"
            outlined
            @click="reserve(choosedTicket)"
            style="left: 0; z-index: 2; top: 0"
          >
            رزرو بلیط
          </v-btn>
          <v-btn
            v-else
            dark
            class="px-sm-12 py-sm-6 ma-3 absolute"
            style="position: absolute; left: 10px; z-index: 2; top: 10px"
            outlined
            color="red arken-2"
            @click="changeTicket(choosedTicketNumber)"
          >
            تغییر پرواز انتخابی
          </v-btn>
        </v-row>
        <v-tabs width="300" v-model="activeTab" class="mt-12 mt-sm-2" flat>
          <v-tabs-slider color="red"></v-tabs-slider>
          <v-tab
            style="width: fit-content"
            v-for="item in ticketDetailsTabs"
            :key="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
        <v-tabs-items
          ltr
          v-model="activeTab"
          reverse
          style="direction: ltr !important"
        >
          <v-tab-item>
            <v-card class="mt-sm-4 py-4" flat>
              <v-row>
                <v-col cols="12" md="9" class="pl-0">
                  <v-card
                    flat
                    class="grey lighten-3 ml-3 pa-4 rounded-lg ticketDetailsTabs"
                  >
                    <v-expansion-panels color="red" v-model="panelDetails">
                      <v-expansion-panel>
                        <v-expansion-panel-header color="grey lighten-3">
                          <v-row align="center">
                            <span class="blue--text text--darken-3">0 0 0</span>
                            <v-icon
                              large
                              class="blue--text text--darken-1"
                              style="transform: rotate(225deg)"
                              >mdi-airplane</v-icon
                            >
                            <h4 class="blue--text text--darken-1 mr-3">
                              {{
                                (chooseStep == 1 && !isNextPage) ||
                                (isNextPage && choosedTicketNumber == 0)
                                  ? "پرواز رفت" +
                                    " (" +
                                    choosedTicket.originCity +
                                    " - " +
                                    choosedTicket.destinationInternal +
                                    ")"
                                  : "پرواز برگشت (" +
                                    choosedTicket.destinationInternal +
                                    " - " +
                                    choosedTicket.originCity +
                                    " )"
                              }}
                            </h4>
                            <v-divider vertical class="mx-4"></v-divider>
                            <div class="text-right">
                              <span
                                class="grey--text caption widthAll mb-2 d-block"
                                style="font-family: Byekan !important"
                              >
                                مدت زمان پرواز
                              </span>
                              <span class="font-weight-bold mt-4">
                                {{
                                  getFlightHours(
                                    choosedTicket.DepartureTime,
                                    choosedTicket.ArrivalTime
                                  )
                                }}
                              </span>
                              <span
                                class="grey--text caption mb-2"
                                style="font-family: Byekan !important"
                              >
                                ({{
                                  choosedTicket.Transit
                                    ? "توقف در مسیر دارد"
                                    : "بدون توقف"
                                }})
                              </span>
                              <span class="font-weight-bold mt-4"> </span>
                            </div>
                          </v-row>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content class="white py-4">
                          <v-row align="center">
                            <v-col cols="12" sm="5" md="5" lg="3">
                              <v-row class="justify-center justify-sm-start">
                                <span
                                  class="body-2 ml-2"
                                  style="font-family: Byekan !important"
                                >
                                  ({{ choosedTicket.enLongDate1 }})
                                </span>
                                <span
                                  class="body-2"
                                  style="font-family: Byekan !important"
                                >
                                  {{ choosedTicket.longDate1 }}
                                </span>
                              </v-row>
                              <v-row
                                class="mt-2 mt-sm-12 justify-center justify-sm-start"
                              >
                                <span
                                  class="body-2 ml-2"
                                  style="font-family: Byekan !important"
                                >
                                  ({{ choosedTicket.enLongDate2 }})
                                </span>
                                <span
                                  class="body-2"
                                  style="font-family: Byekan !important"
                                >
                                  {{ choosedTicket.longDate2 }}
                                </span>
                              </v-row>
                            </v-col>
                            <div class="d-block d-sm-none widthAll mx-12 px-12">
                              <v-divider class="my-2"></v-divider>
                            </div>
                            <v-col cols="12" sm="7" md="7" lg="4">
                              <v-row class="justify-center justify-sm-start">
                                <span
                                  class="body-2 grey--text text--darken-1"
                                  style="font-family: Byekan !important"
                                  >{{ choosedTicket.DepartureTime }}</span
                                >
                                <v-icon
                                  x-small
                                  class="mx-1 grey--text text--lighten-1"
                                  >mdi-circle</v-icon
                                >
                                <span
                                  class="body-2 grey--text text--darken-1"
                                  style="font-family: Byekan !important"
                                  >{{ choosedTicket.originCity }} ،({{
                                    choosedTicket.airport1
                                  }})</span
                                >
                              </v-row>
                              <v-row
                                class="mt-2 mt-sm-4 mr-sm-1 caption grey--text text--darken-1 font-weight-bold justify-center justify-sm-start"
                                style="font-family: Byekan !important"
                              >
                                مدت پرواز:
                                {{
                                  getFlightHours(
                                    choosedTicket.DepartureTime,
                                    choosedTicket.ArrivalTime
                                  )
                                }}
                              </v-row>
                              <v-row
                                class="mt-3 justify-center justify-sm-start"
                              >
                                <span
                                  class="body-2 grey--text text--darken-1"
                                  style="font-family: Byekan !important"
                                  >{{ choosedTicket.ArrivalTime }}</span
                                >
                                <v-icon
                                  x-small
                                  class="mx-1 grey--text text--lighten-1"
                                  >mdi-circle</v-icon
                                >
                                <span
                                  class="body-2 grey--text text--darken-1"
                                  style="font-family: Byekan !important"
                                  >{{ choosedTicket.destinationInternal }} ،({{
                                    choosedTicket.airport2
                                  }})</span
                                >
                              </v-row>
                            </v-col>
                            <v-divider
                              vertical
                              class="my-2 d-none d-lg-block"
                            ></v-divider>
                            <div class="d-block d-lg-none widthAll mx-12 px-12">
                              <v-divider class="my-2"></v-divider>
                            </div>
                            <v-col cols="12" lg="5">
                              <v-row
                                align="center"
                                class="justify-center justify-sm-start"
                              >
                                <div class="d-inline-block">
                                  <v-row align="center">
                                    <img
                                      :src="
                                        choosedTicket.Airline == 'I3'
                                          ? require('@/assets/image/لوگوی_آتا.png')
                                          : choosedTicket.Airline == 'Y9'
                                          ? require('@/assets/image/لوگوی_کیش ایر.png')
                                          : choosedTicket.Airline == 'JI'
                                          ? require('@/assets/image/لوگوی_معراج.png')
                                          : choosedTicket.Airline == 'QB'
                                          ? require('@/assets/image/لوگوی_قشم ایر.png')
                                          : choosedTicket.Airline == 'IV'
                                          ? require('@/assets/image/لوگوی_کاسپین.png')
                                          : choosedTicket.Airline == 'HH'
                                          ? require('@/assets/image/لوگوی_تابان.png')
                                          : choosedTicket.Airline == 'EP'
                                          ? require('@/assets/image/لوگوآسمان2.jpg')
                                          : choosedTicket.Airline == 'ZV'
                                          ? require('@/assets/image/zagros.png')
                                          : choosedTicket.Airline == 'VR'
                                          ? require('@/assets/image/لوگوی_وارش.png')
                                          : choosedTicket.Airline == 'NV'
                                          ? require('@/assets/image/لوگوی_نفت.png')
                                          : choosedTicket.Airline == 'IRZ'
                                          ? require('@/assets/image/لوگوی_ساها.png')
                                          : choosedTicket.Airline == 'FP'
                                          ? require('@/assets/image/لوگوی_فلای‌پرشی.png')
                                          : ''
                                      "
                                      class="mr-sm-2 white"
                                      width="40"
                                      alt=""
                                    />
                                    <span
                                      class="mr-2 body-2"
                                      style="font-family: Byekan !important"
                                    >
                                      {{
                                        choosedTicket.AirlinePersianId
                                          ? choosedTicket.AirlinePersianId
                                          : "نامعلوم"
                                      }}
                                    </span>
                                  </v-row>
                                </div>
                                <v-divider
                                  vertical
                                  class="my-2 mx-3"
                                ></v-divider>
                                <div class="d-inline-block">
                                  <v-row
                                    class="caption grey--text"
                                    justify="center"
                                    style="font-family: Byekan !important"
                                    >شماره پرواز</v-row
                                  >
                                  <v-row
                                    class="caption font-weight-bold"
                                    justify="center"
                                    style="font-family: Byekan !important"
                                    >{{ choosedTicket.FlightNo }}</v-row
                                  >
                                </div>
                                <v-divider
                                  vertical
                                  class="my-2 mx-3"
                                ></v-divider>
                                <div class="d-inline-block">
                                  <v-row
                                    class="caption grey--text"
                                    justify="center"
                                    style="font-family: Byekan !important"
                                    >کلاس</v-row
                                  >
                                  <v-row
                                    class="caption font-weight-bold"
                                    justify="center"
                                    style="font-family: Byekan !important"
                                    >{{ choosedTicket.className }}</v-row
                                  >
                                </div>
                                <v-divider
                                  vertical
                                  class="my-2 mx-3"
                                ></v-divider>
                                <div class="d-inline-block">
                                  <v-row
                                    class="caption grey--text"
                                    justify="center"
                                    style="font-family: Byekan !important"
                                    >مدل هواپیما</v-row
                                  >
                                  <v-row
                                    class="caption font-weight-bold"
                                    justify="center"
                                    style="font-family: Byekan !important"
                                  >
                                    {{
                                      choosedTicket.AircraftTypeName
                                        ? choosedTicket.AircraftTypeName
                                        : "-"
                                    }}
                                  </v-row>
                                </div>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-card>
                </v-col>
                <v-col
                  v-if="Passenger && Passenger[0]"
                  cols="12"
                  md="3"
                  class=""
                >
                  <v-card
                    flat
                    class="grey lighten-3 py-4 rounded-lg ticketDetailsTabs px-sm-12 px-md-4 px-lg-12"
                  >
                    <div class="blue--text text--darken-1 text-center">
                      جزییات قیمت (تومان)
                    </div>
                    <div
                      class="mt-6 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs"
                    >
                      <v-row align="center">
                        <v-col cols="5"
                          >{{ Passenger[0].peaple }} بزرگسال</v-col
                        >
                        <v-col cols="2" class="">
                          <v-row justify="center">
                            <v-icon small>mdi-close</v-icon>
                          </v-row>
                        </v-col>
                        <v-col v-if="choosedTicket.fare" cols="5" class="ltr">
                          {{
                            separatePrice(
                              choosedTicket.fare.AdultTotalPrice / 10
                            )
                          }}
                        </v-col>
                      </v-row>
                    </div>
                    <div
                      v-if="Passenger[0].child > 0"
                      class="mt-4 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs"
                    >
                      <v-row>
                        <v-col cols="5">{{ Passenger[0].child }} کودک</v-col>
                        <v-col cols="2">
                          <v-row justify="center">
                            <v-icon small>mdi-close</v-icon>
                          </v-row>
                        </v-col>
                        <v-col v-if="choosedTicket.fare" cols="5" class="ltr">
                          <span>
                            {{
                              separatePrice(
                                choosedTicket.fare.ChildTotalPrice / 10
                              )
                            }}
                          </span>
                        </v-col>
                      </v-row>
                    </div>
                    <div
                      v-if="Passenger[0].baby > 0"
                      class="mt-4 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs"
                    >
                      <v-row>
                        <v-col cols="5">{{ Passenger[0].baby }} نوزاد</v-col>
                        <v-col cols="2">
                          <v-row justify="center">
                            <v-icon small>mdi-close</v-icon>
                          </v-row>
                        </v-col>
                        <v-col v-if="choosedTicket.fare" cols="5" class="ltr">
                          {{
                            separatePrice(
                              choosedTicket.fare.InfantTotalPrice / 10
                            )
                          }}
                        </v-col>
                      </v-row>
                    </div>
                    <h3
                      v-if="choosedTicket.fare"
                      class="text-center mt-6 red--text"
                    >
                      مجموع {{ setAllPrice(choosedTicket.fare) }} تومان
                    </h3>
                    <span
                      class="d-block widthAll text-center green--text caption font-weight-bold mt-2"
                      style="font-family: Byekan !important"
                      >ظرفیت
                      {{
                        choosedTicket.capacity == "A"
                          ? "+9"
                          : choosedTicket.capacity
                      }}
                      نفر
                    </span>
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
                    <v-col
                      v-for="(item, i) in CRCNRules"
                      :key="'item' + i"
                      cols="12"
                      sm="6"
                      class="px-2 mb-2"
                    >
                      <v-row
                        v-if="item.text"
                        align="center"
                        class="grey lighten-3 rounded-lg pa-2"
                      >
                        <v-col class="d-sm-none">
                          <span
                            class="body-2 font-weight-bold"
                            style="font-family: Byekan !important"
                            >تا ساعت
                            {{ item.text }}
                          </span>
                        </v-col>
                        <v-col class="d-sm-none">
                          <div
                            class="white rounded-lg hideOver d-inline-block body-2 relative py-2 text-center float-left"
                            style="
                              font-family: Byekan !important;
                              width: 100px;
                              height: 40px;
                            "
                          >
                            <div
                              class="red absolute red--text heightAll"
                              style="width: 10px; top: 0; right: 0"
                            ></div>
                            <div
                              class="d-inline-block caption font-weight-bold"
                              style="font-family: Byekan !important; width: 70%"
                            >
                              {{ item.Percent }}% جریمه
                            </div>
                          </div>
                        </v-col>
                        <span
                          class="body-2 font-weight-bold d-none d-sm-block"
                          style="font-family: Byekan !important"
                        >
                          {{ item.text }}
                        </span>
                        <v-spacer class="d-none d-sm-inline-block"></v-spacer>
                        <div
                          class="white rounded-lg hideOver body-2 relative py-2 text-center d-none d-sm-inline-block"
                          style="
                            font-family: Byekan !important;
                            width: 100px;
                            height: 40px;
                          "
                        >
                          <div
                            class="red absolute red--text heightAll d-none d-sm-block"
                            style="width: 10px; top: 0; right: 0"
                          ></div>
                          <div
                            class="caption font-weight-bold d-none d-sm-inline-block"
                            style="font-family: Byekan !important; width: 70%"
                          >
                            {{ item.Percent }}% جریمه
                          </div>
                        </div>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col
                  v-if="Passenger && Passenger[0]"
                  cols="12"
                  md="3"
                  class=""
                >
                  <v-card
                    flat
                    class="grey lighten-3 py-4 rounded-lg ticketDetailsTabs px-sm-12 px-md-4 px-lg-12"
                  >
                    <div class="blue--text text--darken-1 text-center">
                      جزییات قیمت (تومان)
                    </div>
                    <div
                      class="mt-6 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs"
                    >
                      <v-row align="center">
                        <v-col cols="5"
                          >{{ Passenger[0].peaple }} بزرگسال</v-col
                        >
                        <v-col cols="2" class="">
                          <v-row justify="center">
                            <v-icon small>mdi-close</v-icon>
                          </v-row>
                        </v-col>
                        <v-col v-if="choosedTicket.fare" cols="5" class="ltr">
                          {{
                            separatePrice(
                              choosedTicket.fare.AdultTotalPrice / 10
                            )
                          }}
                        </v-col>
                      </v-row>
                    </div>
                    <div
                      v-if="Passenger[0].child > 0"
                      class="mt-4 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs"
                    >
                      <v-row>
                        <v-col cols="5">{{ Passenger[0].child }} کودک</v-col>
                        <v-col cols="2">
                          <v-row justify="center">
                            <v-icon small>mdi-close</v-icon>
                          </v-row>
                        </v-col>
                        <v-col v-if="choosedTicket.fare" cols="5" class="ltr">
                          <span>
                            {{
                              separatePrice(
                                choosedTicket.fare.ChildTotalPrice / 10
                              )
                            }}
                          </span>
                        </v-col>
                      </v-row>
                    </div>
                    <div
                      v-if="Passenger[0].baby > 0"
                      class="mt-4 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs"
                    >
                      <v-row>
                        <v-col cols="5">{{ Passenger[0].baby }} نوزاد</v-col>
                        <v-col cols="2">
                          <v-row justify="center">
                            <v-icon small>mdi-close</v-icon>
                          </v-row>
                        </v-col>
                        <v-col v-if="choosedTicket.fare" cols="5" class="ltr">
                          {{
                            separatePrice(
                              choosedTicket.fare.InfantTotalPrice / 10
                            )
                          }}
                        </v-col>
                      </v-row>
                    </div>
                    <h3
                      v-if="choosedTicket.fare"
                      class="text-center mt-6 red--text"
                    >
                      مجموع {{ setAllPrice(choosedTicket.fare) }} تومان
                    </h3>
                    <span
                      class="d-block widthAll text-center green--text caption font-weight-bold mt-2"
                      style="font-family: Byekan !important"
                      >ظرفیت
                      {{
                        choosedTicket.capacity == "A"
                          ? "+9"
                          : choosedTicket.capacity
                      }}
                      نفر
                    </span>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card class="mt-sm-8 py-4" flat>
              <v-row>
                <v-col cols="12" md="9" class="">
                  <v-row align="center" class="">
                    <v-col cols="12" sm="6" md="4" lg="3" class="mb-sm-2">
                      <div class="grey lighten-3 rounded-lg ma-sm-4 pa-4">
                        <v-row class="">
                          <span
                            class="caption font-weight-bold blue--text d-block"
                            style="font-family: Byekan !important"
                            >{{ choosedTicket.originCity }} به
                            {{ choosedTicket.destinationInternal }}</span
                          >
                        </v-row>
                        <v-row class="">
                          <span
                            class="caption font-weight-bold blue--text d-block"
                            style="font-family: Byekan !important"
                            >شماره پرواز {{ choosedTicket.FlightNo }}</span
                          >
                        </v-row>
                        <h3 class="mt-2">
                          بزرگسال :
                          {{
                            choosedTicket.fare
                              ? choosedTicket.fare.BaggageAllowanceWeight
                              : "20 Kg"
                          }}
                        </h3>
                      </div>
                    </v-col>
                    <!-- <h3 class="grey--text">اطلاعاتی برای نمایش یافت نشد!</h3> -->
                  </v-row>
                </v-col>
                <v-col
                  v-if="Passenger && Passenger[0]"
                  cols="12"
                  md="3"
                  class=""
                >
                  <v-card
                    flat
                    class="grey lighten-3 py-4 rounded-lg ticketDetailsTabs px-sm-12 px-md-4 px-lg-12"
                  >
                    <div class="blue--text text--darken-1 text-center">
                      جزییات قیمت (تومان)
                    </div>
                    <div
                      class="mt-6 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs"
                    >
                      <v-row align="center">
                        <v-col cols="5"
                          >{{ Passenger[0].peaple }} بزرگسال</v-col
                        >
                        <v-col cols="2" class="">
                          <v-row justify="center">
                            <v-icon small>mdi-close</v-icon>
                          </v-row>
                        </v-col>
                        <v-col v-if="choosedTicket.fare" cols="5" class="ltr">
                          {{
                            separatePrice(
                              choosedTicket.fare.AdultTotalPrice / 10
                            )
                          }}
                        </v-col>
                      </v-row>
                    </div>
                    <div
                      v-if="Passenger[0].child > 0"
                      class="mt-4 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs"
                    >
                      <v-row>
                        <v-col cols="5">{{ Passenger[0].child }} کودک</v-col>
                        <v-col cols="2">
                          <v-row justify="center">
                            <v-icon small>mdi-close</v-icon>
                          </v-row>
                        </v-col>
                        <v-col v-if="choosedTicket.fare" cols="5" class="ltr">
                          <span>
                            {{
                              separatePrice(
                                choosedTicket.fare.ChildTotalPrice / 10
                              )
                            }}
                          </span>
                        </v-col>
                      </v-row>
                    </div>
                    <div
                      v-if="Passenger[0].baby > 0"
                      class="mt-4 mx-6 mx-sm-12 mx-md-0 px-sm-12 px-md-0 font-small-xs"
                    >
                      <v-row>
                        <v-col cols="5">{{ Passenger[0].baby }} نوزاد</v-col>
                        <v-col cols="2">
                          <v-row justify="center">
                            <v-icon small>mdi-close</v-icon>
                          </v-row>
                        </v-col>
                        <v-col v-if="choosedTicket.fare" cols="5" class="ltr">
                          {{
                            separatePrice(
                              choosedTicket.fare.InfantTotalPrice / 10
                            )
                          }}
                        </v-col>
                      </v-row>
                    </div>
                    <h3
                      v-if="choosedTicket.fare"
                      class="text-center mt-6 red--text"
                    >
                      مجموع {{ setAllPrice(choosedTicket.fare) }} تومان
                    </h3>
                    <span
                      class="d-block widthAll text-center green--text caption font-weight-bold mt-2"
                      style="font-family: Byekan !important"
                      >ظرفیت
                      {{
                        choosedTicket.capacity == "A"
                          ? "+9"
                          : choosedTicket.capacity
                      }}
                      نفر
                    </span>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-sheet>
    </v-dialog>
    <v-alert
      v-if="showAlert"
      dark
      class="white--text fixed"
      :type="alertType"
      style="bottom: 0; right: 10px; min-width: 200px; z-index: 4444444444444"
      >{{ alertText }}</v-alert
    >
  </div>
</template>

<style>
.ticketDetailsTabs .v-expansion-panel-header__icon i {
  bottom: unset !important;
}
</style>

<script>
import { SupervisedUserCircleSharp } from "@material-ui/icons";

export default {
  name: "ticket-card",
  components: {},
  watch: {
    nextPage() {
      this.$emit("changeNextPage", this.nextPage);
    },
    async choosedTicket() {
      this.choosedTicket.allprice = this.setAllPrice(this.choosedTicket.fare);
      this.$emit("changeChoosedTicket", this.choosedTicket);
      this.$emit("getAllprice", this.choosedTicket.allprice);
    },
    showAlert() {
      setTimeout(() => {
        if (this.showAlert == true) {
          this.showAlert = false;
        }
      }, 4000);
    },
    rezervStepParent() {
      this.allChoosedTicket = [];
    },
    Passenger() {
      // console.log(this.choosedTicket);
    },
  },
  props: {
    isFaild: {
      type: Boolean,
    },
    tickets: {
      type: Array,
      require: true,
    },
    isNextPage: {
      type: Boolean,
    },
    isMainPage: {
      type: Boolean,
    },
    Passenger: {
      defult: {},
    },
    chooseStep: {
      defult: 1,
    },
    rezervStepParent: {
      type: Boolean,
    },
  },
  computed: {},
  data: () => ({
    AllpersianCityes: [
      {
        label: "Tehran, THR - تهران",
        code: "Tehran, THR",
        text: "تهران",
        id: "THR",
        airport: "Mehrabad Arpt",
      },
      // {
      //   label: "UGT, UGT - UGT",
      //   code: "UGT, UGT",
      //   text: "UGT",
      //   id: "UGT",
      //   airport: "UGT Arpt",
      // },
      // {
      //   label: "TTQ, TTQ - TTQ",
      //   code: "TTQ, TTQ",
      //   text: "TTQ",
      //   id: "TTQ",
      //   airport: "TTQ Arpt",
      // },
      {
        label: "Mashhad, MHD - مشهد",
        code: "Mashhad, MHD",
        text: "مشهد",
        id: "MHD",
        airport: "Mashad Arpt",
      },
      {
        label: "Shiraz, SYZ - شیراز",
        code: "Shiraz, SYZ",
        text: "شیراز",
        id: "SYZ",
        airport: "Shiraz Arpt",
      },
      {
        label: "Ahwaz, AWZ - اهواز",
        code: "Ahwaz, AWZ",
        text: "اهواز",
        id: "AWZ",
        airport: "",
      },
      {
        label: "Isfahan, IFN - اصفهان",
        code: "Isfahan, IFN",
        text: "اصفهان",
        id: "IFN",
        airport: "Isfahan Arpt",
      },
      {
        label: "Tabriz, TBZ - تبریز",
        code: "Tabriz, TBZ",
        text: "تبریز",
        id: "TBZ",
        airport: "Tabriz International Arpt",
      },
      {
        label: "Kish, KIH - کیش",
        code: "Kish, KIH",
        text: "کیش",
        id: "KIH",
        airport: "Kish Island Arpt",
      },
      {
        label: "Bandar abbas, BND - بندر عباس",
        code: "Bandar abbas, BND",
        text: "بندر عباس",
        id: "BND",
        airport: "Bandar Abbas Arpt",
      },
      {
        label: "Qeshm, GSM - قشم",
        code: "Qeshm, GSM",
        text: "قشم",
        id: "GSM",
        airport: "Dayrestan Airport",
      },
      {
        label: "Gorgan, GBT - گرگان",
        code: "Gorgan, GBT",
        text: "گرگان",
        id: "GBT",
        airport: "Gorgon Airport",
      },
      {
        label: "Ramsar, RZR - رامسر",
        code: "Ramsar, RZR",
        text: "رامسر",
        id: "RZR",
        airport: "Ramsar Airport",
      },
      {
        label: "Bushehr, BUZ - بوشهر",
        code: "Bushehr, BUZ",
        text: "بوشهر",
        id: "BUZ",
        airport: "Bushehr Arpt",
      },
      {
        label: "Lar, LRR - لار",
        code: "Lar, LRR",
        text: "لار",
        id: "لار",
        airport: "Lar Airport",
      },
      {
        label: "Zanjan, JWN - زنجان",
        code: "Zanjan, JWN",
        text: "زنجان",
        id: "JWN",
        airport: "Zanjan Arpt",
      },
      {
        label: "Bahregan, IAQ - بهرگان",
        code: "Bahregan, IAQ",
        text: "بهرگان",
        id: "IAQ",
        airport: "",
      },
      {
        label: "Lamard, LFM - لامرد",
        code: "Lamard, LFM",
        text: "لامرد",
        id: "LFM",
        airport: "Lamerd Airport",
      },
      {
        label: "Sari, SRY - ساری",
        code: "Sari, SRY",
        text: "ساری",
        id: "SRY",
        airport: "Dasht-e Naz Airport",
      },
      {
        label: "Birjand, XBJ - بیرجند",
        code: "Birjand, XBJ",
        text: "بیرجند",
        id: "XBJ",
        airport: "Birjand Airport",
      },
      {
        label: "Lavan, LVP - لاوان",
        code: "Lavan, LVP",
        text: "لاوان",
        id: "LVP",
        airport: "Lavan Island Airport",
      },
      {
        label: "Sabzevar, AFZ - سبزوار",
        code: "Sabzevar, AFZ",
        text: "سبزوار",
        id: "AFZ",
        airport: "Sabzevar Airport",
      },
      {
        label: "Abu Musa, AEU - جزیره ابوموسی",
        code: "Abu Musa, AEU",
        text: "جزیره ابوموسی",
        id: "AEU",
        airport: "Abu Musa Airport",
      },
      {
        label: "Mahshahr, MRX - ماهشهر",
        code: "Mahshahr, MRX",
        text: "ماهشهر",
        id: "MRX",
        airport: "Mahshahr Airport",
      },
      {
        label: "Sanandaj, SDG - سنندج",
        code: "Sanandaj, SDG",
        text: "سنندج",
        id: "SDG",
        airport: "Sanandaj Airport",
      },
      {
        label: "Siri, SXI - جزیره سیری",
        code: "Siri, SXI",
        text: "جزیره سیری",
        id: "SXI",
        airport: "Sirri Island Airport",
      },
      {
        label: "Nowshahr, NSH - نوشهر",
        code: "Nowshahr, NSH",
        text: "نوشهر",
        id: "NSH",
        airport: "Now Shahr Airport",
      },
      {
        label: "Sirjan, SYJ - سیرجان",
        code: "Sirjan, SYJ",
        text: "سیرجان",
        id: "SYJ",
        airport: "Sirjan",
      },
      {
        label: "Jiroft, JYR - جیرفت",
        code: "Jiroft, JYR",
        text: "جیرفت",
        id: "JYR",
        airport: "Jiroft Airport",
      },
      {
        label: "Hamedan, HDM - همدان",
        code: "Hamedan, HDM",
        text: "همدان",
        id: "HDM",
        airport: "Hamadan Airport",
      },
      {
        label: "Shahrod, RUD - شاهرود",
        code: "Shahrod, RUD",
        text: "شاهرود",
        id: "RUD",
        airport: "Shahroud Airport",
      },
      {
        label: "Chabahar, ZBR - چابهار",
        code: "Chabahar, ZBR",
        text: "چابهار",
        id: "ZBR",
        airport: "Chah-Bahar Airport",
      },
      {
        label: "Yazd, AZD - یزد",
        code: "Yazd, AZD",
        text: "یزد",
        id: "AZD",
        airport: "Yazd Arpt",
      },
      {
        label: "Sharekord, CQD - شهر کرد",
        code: "Sharekord, CQD",
        text: "شهر کرد",
        id: "CQD",
        airport: "Shahre Kord Arpt",
      },
      {
        label: "Khark, KHK - خارک",
        code: "Khark, KHK",
        text: "خارک",
        id: "KHK",
        airport: "Khark Airport",
      },
      {
        label: "Arak, AJK - اراک",
        code: "Arak, AJK",
        text: "اراک",
        id: "AJK",
        airport: "Araak Airport",
      },
      {
        label: "Abadan, ABD - آبادان",
        code: "Abadan, ABD",
        text: "آبادان",
        id: "ABD",
        airport: "Abadan Arpt",
      },
      {
        label: "Tabas, TCX - طبس",
        code: "Tabas, TCX",
        text: "طبس",
        id: "TCX",
        airport: "Tabas Airport",
      },
      {
        label: "Khoramabad, KHD - خرم آباد",
        code: "Khoramabad, KHD",
        text: "خرم آباد",
        id: "KHD",
        airport: "Khorramabad Arpt",
      },
      {
        label: "Maragheh, ACP - مراغه",
        code: "Maragheh, ACP",
        text: "مراغه",
        id: "ACP",
        airport: "Sahand Airport",
      },
      {
        label: "Ardabil, ADU - اردبیل",
        code: "Ardabil, ADU",
        text: "اردبیل",
        id: "ADU",
        airport: "Ardabil Arpt",
      },
      {
        label: "Asaluyeh, PGU - عسلویه",
        code: "Asaluyeh, PGU",
        text: "عسلویه",
        id: "PGU",
        airport: "Ala'Marvdasht Arpt",
      },
      {
        label: "Khoy, KHY - خوی",
        code: "Khoy, KHY",
        text: "خوی",
        id: "KHY",
        airport: "Khoy Airport",
      },
      {
        label: "Yasuj, YES - یاسوج",
        code: "Yasuj, YES",
        text: "یاسوج",
        id: "YES",
        airport: "Yasouj Airport",
      },
      {
        label: "Urmia, OMH - ارومیه",
        code: "Urmia, OMH",
        text: "ارومیه",
        id: "OMH",
        airport: "URUMIYEH",
      },
      {
        label: "Dezful, DEF - دزفول",
        code: "Dezful, DEF",
        text: "دزفول",
        id: "DEF",
        airport: "Dezful Airport",
      },
      {
        label: "Jahrom, JAR - جهرم",
        code: "Jahrom, JAR",
        text: "جهرم",
        id: "JAR",
        airport: "Jahrom Airport",
      },
      {
        label: "Kashan, KSN - کاشان",
        code: "Kashan, KSN",
        text: "کاشان",
        id: "KSN",
        airport: "Kashan Airport",
      },
      {
        label: "Kangan, KNR - کانگان",
        code: "Kangan, KNR",
        text: "کانگان",
        id: "KNR",
        airport: "Jam Airport",
      },
      {
        label: "Parsabad, PFQ - پارس آباد",
        code: "Parsabad, PFQ",
        text: "پارس آباد",
        id: "PFQ",
        airport: "",
      },
      {
        label: "Iranshahr, IHR - ایران شهر",
        code: "Iranshahr, IHR",
        text: "ایران شهر",
        id: "IHR",
        airport: "Iran Shahr Airport",
      },
      {
        label: "Kerman, KER - کرمان",
        code: "Kerman, KER",
        text: "کرمان",
        id: "KER",
        airport: "Kerman Arpt",
      },
      {
        label: "Rasht, RAS - رشت",
        code: "Rasht, RAS",
        text: "رشت",
        id: "RAS",
        airport: "Rasht Airport",
      },
      {
        label: "Ilam, IIL - ایلام",
        code: "Ilam, IIL",
        text: "ایلام",
        id: "IIL",
        airport: "Ilaam Airport",
      },
      {
        label: "Kermanshah, KSH - کرمانشاه",
        code: "Kermanshah, KSH",
        text: "کرمانشاه",
        id: "KSH",
        airport: "Kermanshah Arpt",
      },
      {
        label: "Rafsanjan, RJN - رفسنجان",
        code: "Rafsanjan, RJN",
        text: "رفسنجان",
        id: "RJN",
        airport: "Rafsanjan Airport",
      },
      {
        label: "Bojnord, BJB - بجنورد",
        code: "Bojnord, BJB",
        text: "بجنورد",
        id: "BJB",
        airport: "Bojnord Airport",
      },
      {
        label: "Gachsaran, GCH - گچساران",
        code: "Gachsaran, GCH",
        text: "گچساران",
        id: "GCH",
        airport: "Gachsaran Airport",
      },
      {
        label: "zabol, ACZ - زابل",
        code: "zabol, ACZ",
        text: "زابل",
        id: "ACZ",
        airport: "Zabol A/P Airport",
      },
      {
        label: "Bam, BXR - بم",
        code: "Bam, BXR",
        text: "بم",
        id: "BXR",
        airport: "Bam Airport",
      },
      {
        label: "Bandar lengeh, BDH - بندر لنگه",
        code: "Bandar lengeh, BDH",
        text: "بندر لنگه",
        id: "BDH",
        airport: "Bandar Lengeh Airport",
      },
      {
        label: "Zahedan, ZAH - زاهدان",
        code: "Zahedan, ZAH",
        text: "زاهدان",
        id: "ZAH",
        airport: "Zahedan Airport",
      },
      {
        label: "Sarakhs, CKT - سرخس",
        code: "Sarakhs, CKT",
        text: "سرخس",
        id: "CKT",
        airport: "Sarakhs Airport",
      },
    ],
    showAlert: false,
    alertType: "success",
    alertText: "",
    ticketDetailsModal: false,
    activeTab: 0,
    ticketDetailsTabs: ["جزییات پرواز", "قوانین استرداد", "بار مجاز"],
    nextPage: false,
    panelDetails: 0,
    choosedTicket: {},
    allPrice: 0,
    CRCNRules: [],
    editFlightMood: false,
    allChoosedTicket: [],
    choosedTicketNumber: 0,
  }),
  methods: {
    separatePrice(number) {
      let value1 = number.toString().replace(/,/g, "");
      let value2 = value1;
      if (value1.length == 0 || value1 < 0) {
        value2 = 0;
      } else if (value1.length > 1 && value1[0] == 0) {
        value2 = value1.replace(0, "");
      } else {
        value2 = value1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      return value2;
      // self.filter.price = [Number(self.fromPrice.toString().replace(/,/g, "")), Number(value1)]
    },
    getFlightHours(flight1, flight2) {
      let minutes = 0;
      let hours = 0;
      let time1 = "";
      let hour1 = "";
      let minute1 = "";
      let time2 = "";
      let hour2 = "";
      let minute2 = "";
      let minesHour = false;
      if (flight1) {
        time1 = flight1.split(":");
        hour1 = time1[0];
        minute1 = time1[1];
      }
      if (flight2) {
        time2 = flight2.split(":");
        hour2 = time2[0];
        minute2 = time2[1];
      }
      for (let i = 0; i < 60; i++) {
        if (minute2 == minute1) {
          // set minutes
          minutes = i;
          break;
        } else {
          if (minute1 < 59) {
            minute1++;
          } else {
            minesHour = true;
            minute1 = 0;
          }
        }
      }
      for (let i = 0; i < 24; i++) {
        if (hour1 == hour2) {
          // set hour1s
          hours = minesHour ? i - 1 : i;
          break;
        } else {
          if (hour1 < 23) {
            hour1++;
          } else {
            hour1 = 0;
          }
        }
      }
      let text = "";
      if (hours == 0) {
        text = minutes + " دقیقه";
      } else if (minutes == 0) {
        text = hours + " ساعت";
      } else {
        text = hours + " ساعت و " + minutes + " دقیقه";
      }

      return text;
    },
    scrollTop() {
      window.scrollTo(0, 0);
    },
    setAllPrice(object) {
      let adl = this.Passenger[0].peaple;
      let chd = this.Passenger[0].child;
      let inf = this.Passenger[0].baby;
      let allPrice = adl * object.AdultTotalPrice;
      if (chd > 0) {
        allPrice = allPrice + chd * object.ChildTotalPrice;
      }
      if (inf > 0) {
        allPrice = allPrice + inf * object.InfantTotalPrice;
      }
      allPrice = this.separatePrice(allPrice / 10);
      this.choosedTicket.allprice = allPrice;
      this.$emit("getAllprice", this.choosedTicket.allprice);
      return allPrice;
    },
    returnCRCNRules(stringText) {
      this.CRCNRules = [];
      let CRCNRules = stringText.split("/");
      for (let i = 0; i < CRCNRules.length; i++) {
        let testArray = CRCNRules[i].split(",");
        let testObject = {
          text: testArray[0],
          Percent: testArray[1],
        };
        this.CRCNRules.push(testObject);
      }
    },
    showNextPage() {
      this.$emit("showNextPage");
    },
    async reserve(item) {
      if (item.fromDate == item.endDate && this.$route.query.path == "ow") {
        await this.setAllPrice(item);
        this.$emit("showDetailes", item);
        this.ticketDetailsModal = false;
      } else {
        if (this.chooseStep == 1) {
          this.ticketDetailsModal = false;
          this.allChoosedTicket[0] = item;
          if (this.allChoosedTicket[1] == undefined) {
            this.showAlert = true;
            this.alertText = "لطفا بلیط برگشت را نیز اتنخاب کنید.";
          }
          this.$emit("firstChoosed", item);
        } else if (this.chooseStep == 2) {
          this.ticketDetailsModal = false;
          this.allChoosedTicket[1] = item;
          this.$emit("nextChoosed", item);
        }
      }
    },
    changeTicket(number) {
      this.$emit("changeTicket", number);
    },
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>
