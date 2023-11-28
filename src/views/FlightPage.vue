<template>
  <div class="mt-12 pt-12">
    <div class="mt-sm-6">
      <input-main
        :loading="loadingTickets"
        @changeOriginCity="changeOriginCity($event)"
        @changeDestinationInternal="changeDestinationInternal($event)"
        @changeDayName1="changeDayName1($event)"
        @changeDate1="changeDate1($event)"
        :datePickerValue="datePickerValue"
        page="flight"
        @getPasanger="getPasanger($event)"
        @searchInHeaderBox="searchInHeaderBox()"
      />
    </div>
    <v-row class="" justify="center" style="margin-top: -25px !important">
      <div class="indexDiv">
        <v-row>
          <v-col cols="12" md="3" class="px-0 pt-0 pl-md-3">
            <v-row class="white rounded-lg pa-2 d-md-none">
              <div
                class="grey--text text--darken-2"
                @click="
                  showFilterBox = loadingTickets == false && !showFilterBox
                "
              >
                <v-icon class="ml-1">mdi-filter-plus-outline</v-icon>
                فیلتر
              </div>
              <v-spacer></v-spacer>
              <div
                class="grey--text text--darken-2 relative"
                style="z-index: 2"
                @click="showSortTab = !showSortTab"
              >
                مرتب‌سازی براساس
                <v-icon class="mr-1">mdi-sort-alphabetical-ascending</v-icon>
                <div
                  class="white widthAll rounded-lg absolute"
                  v-if="showSortTab"
                >
                  <v-row
                    class="px-1 py-2 grey--text text--darken-1"
                    :class="sortTab == 0 && 'grey lighten-2'"
                    justify="center"
                    @click="sortTab = 0"
                  >
                    قیمت
                  </v-row>
                  <v-row
                    class="px-1 py-2 grey--text text--darken-1"
                    :class="sortTab == 1 && 'grey lighten-2'"
                    justify="center"
                    @click="sortTab = 1"
                    >ساعت</v-row
                  >
                  <v-row
                    class="px-1 py-2 grey--text text--darken-1"
                    :class="sortTab == 2 && 'grey lighten-2'"
                    justify="center"
                    @click="sortTab = 2"
                    >ایرلاین</v-row
                  >
                </div>
                <!-- <v-tabs
                  v-if="!isLoading"
                  v-model="sortTab"
                  class="d-inline-block"
                  style="width: fit-content"
                >
                  <v-tabs-slider color="red darken-2"></v-tabs-slider>

                  <v-tab> قیمت </v-tab>
                  <v-tab>ساعت</v-tab>
                  <v-tab>ایرلاین</v-tab>
                </v-tabs> -->
              </div>
            </v-row>
            <v-row
              justify="center"
              v-show="showFilterBox"
              class="pa-3 fixed heightAll widthAll"
              style="
                background: #00000069;
                top: 0;
                right: 0;
                z-index: 22222;
                overflow-y: scroll;
              "
            >
              <v-card>
                <ticket-filter-component
                  @doneChanges="doneChanges()"
                  class="widthAll mt-sm-4"
                  :loadeingTickets="loadingTickets"
                  :from="fromPrice"
                  :to="toPrice"
                  :tickets="tickets"
                  @startFilter="startFilter($event)"
                />
              </v-card>
            </v-row>
            <ticket-filter-component
              v-if="windowWidth >= 960"
              :loadeingTickets="loadingTickets"
              :from="fromPrice"
              :to="toPrice"
              :tickets="tickets"
              @startFilter="startFilter($event)"
            />
          </v-col>
          <v-col
            cols="12"
            md="9"
            class="pa-0 pr-md-3"
            :class="windowWidth < 960 && !editFlightMood && 'mt-sm-12 pt-sm-12'"
          >
            <v-card
              flat
              class="rounded-lg mt-2 mt-lg-0 pa-2 pa-sm-2 mb-4"
              :class="windowWidth < 960 && !editFlightMood && 'mt-sm-6'"
              v-if="!(external && byReturn != 1)"
            >
              <v-slide-group
                ltr
                v-model="slideGroup"
                class="py-1 ltr"
                hide-arrows
                center-active
              >
                <v-slide-item
                  v-for="(date, i) in dates"
                  :key="i"
                  :style="{
                    border:
                      i == slideGroup
                        ? '1px solid red !important'
                        : 'unset !important',
                  }"
                >
                  <!-- <v-skeleton-loader class="textLoader d-inline-block mr-2"
                                          type="chip"
                                          :loading="isLoading"
                                        >-->
                  <v-card
                    elevation="2"
                    :disabled="
                      new Date().getTime() - 86400000 > date.timestamp ||
                      loadingTickets
                        ? true
                        : false
                    "
                    outlined
                    class="py-2 px-3 px-sm-6 grey lighten-5 mr-4"
                    @click="
                      slideGroup = i;
                      datePickerValue =
                        date1.length == 2
                          ? rezervStep == 1
                            ? [date.datePickerValue, date1[1]]
                            : [date1[0], date.datePickerValue]
                          : date.datePickerValue;
                    "
                  >
                    <span
                      class="text-center body d-block"
                      :class="
                        new Date().getTime() - 86400000 > date.timestamp
                          ? 'grey--text text--lighten-1'
                          : date.weekDay == 6
                          ? 'red--text'
                          : ''
                      "
                      style="font-family: Byekan !important"
                      >{{ date.day }} {{ date.month }}</span
                    >
                    <span
                      class="text-center body-2 d-block mt-1"
                      :class="
                        new Date().getTime() - 86400000 > date.timestamp
                          ? 'grey--text text--lighten-1'
                          : date.weekDay == 6
                          ? 'red--text'
                          : ' grey--text text--darken-2'
                      "
                      style="font-family: Byekan !important"
                    >
                      {{
                        new Date(date.timestamp).getDay() + 2 == 8
                          ? "شنبه"
                          : new Date(date.timestamp).getDay() + 2 == 2
                          ? "یکشنبه"
                          : new Date(date.timestamp).getDay() + 2 == 3
                          ? "دوشنبه"
                          : new Date(date.timestamp).getDay() + 2 == 4
                          ? "سه‌شنبه"
                          : new Date(date.timestamp).getDay() + 2 == 5
                          ? "چهارشنبه"
                          : new Date(date.timestamp).getDay() + 2 == 6
                          ? "پنجشنبه"
                          : new Date(date.timestamp).getDay() + 2 == 7
                          ? "جمعه"
                          : ""
                      }}
                    </span>
                  </v-card>
                  <!-- </v-skeleton-loader> -->
                </v-slide-item>
              </v-slide-group>
            </v-card>

            <v-card flat class="rounded-lg d-none d-md-block">
              <v-row align="center" class="pr-2">
                <v-skeleton-loader
                  class="textLoader d-inline-block mr-2"
                  type="chip"
                  :loading="isLoading"
                >
                  <span class="body-2" style="font-family: Byekan !important"
                    >تعداد {{ showTickets.length }} پرواز یافت شد</span
                  >
                </v-skeleton-loader>
                <v-spacer></v-spacer>
                <div>
                  <v-row align="center">
                    <span class="body-2" style="font-family: Byekan !important">
                      مرتب سازی براساس:
                    </span>
                    <v-tabs
                      v-if="!isLoading"
                      v-model="sortTab"
                      class="d-inline-block"
                      style="width: fit-content"
                    >
                      <v-tabs-slider color="red darken-2"></v-tabs-slider>

                      <v-tab> قیمت </v-tab>
                      <v-tab>ساعت</v-tab>
                      <v-tab>ایرلاین</v-tab>
                    </v-tabs>
                    <v-skeleton-loader
                      class="textLoader d-inline-block ma-2"
                      type="chip"
                      v-if="isLoading"
                    >
                    </v-skeleton-loader>
                    <v-skeleton-loader
                      class="textLoader d-inline-block ma-2"
                      type="chip"
                      v-if="isLoading"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                      class="textLoader d-inline-block mr-2"
                      type="chip"
                      v-if="isLoading"
                    ></v-skeleton-loader>
                  </v-row>
                </div>
              </v-row>
              <v-progress-linear
                class="mb-4"
                color="#1abc9c"
                v-if="loadingTickets"
                indeterminate
                reverse
              ></v-progress-linear>
            </v-card>
            <v-progress-linear
              class="mb-4 d-md-none"
              color="#1abc9c"
              v-if="loadingTickets"
              indeterminate
              reverse
            ></v-progress-linear>
            <!-- <v-progress-linear color="red" v-if="ticketValue" indeterminate reverse></v-progress-linear> -->
            <div v-if="external == true && byReturn == 3">
              <div class="hideOver my-4" v-for="(item, i) in tickets" :key="i">
                <v-skeleton-loader
                  class="textLoader widthAll"
                  type="image"
                  :loading="isLoading"
                >
                  <div
                    class="widthAll white relative"
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
                    <v-row class="heightAll multi-flight">
                      <div class="rightSectionTicket">
                        <div class="" v-for="(flight, m) in flights" :key="m">
                          <v-row
                            class="my-1 mt-sm-3 mb-1 mr-2 mr-sm-6"
                            align="center"
                          >
                            <img
                              src="@/assets/image/zagros.png"
                              alt=""
                              class="rounded-circle pa-1"
                              width="50"
                              height="50"
                              style="box-shadow: 1px 1px 4px #b3b3b3"
                            />
                            <div class="d-inline-block relative">
                              <span
                                class="mx-2 mx-sm-2 body-2 absolute white px-4 mt-2 mt-sm-0"
                                style="font-family: Byekan !important"
                                >{{ flight.originCity }}</span
                              >
                              <span
                                class="absolute body-2 grey--text text--darken-1 dateTicket text-center"
                                style="
                                  font-family: Byekan !important;
                                  bottom: 25px;
                                  margin-right: -18px;
                                  width: 120px;
                                "
                                >{{ flight.day }} {{ flight.fromDate }}</span
                              >
                              <span
                                class="absolute caption typeFlightTicket text-center"
                                style="
                                  font-family: Byekan !important;
                                  top: 25px;
                                  color: #706f6f;
                                  width: 120px;
                                  margin-right: -43px;
                                "
                                >بدون توقف</span
                              >
                              <span
                                class="mx-2 mx-sm-2 body-2 absolute white pr-4 pl-2 pl-sm-4 pl-md-0 mt-2 mt-sm-0"
                                style="font-family: Byekan !important; left: 0"
                                >{{ flight.destinationInternal }}</span
                              >
                              <img
                                src="@/assets/image/flight-go-flesh.png"
                                class="flight-go-flesh mt-4 mt-sm-0 mx-2 mx-md-2"
                                alt=""
                                height="12"
                              />
                            </div>
                          </v-row>
                          <v-row class="mb-6 mr-4 mr-sm-7">
                            <span
                              class="body-2"
                              style="font-family: Byekan !important"
                              >زاگرس</span
                            >
                            <span
                              class="mr-7 pr-1 body-2"
                              style="font-family: Byekan !important"
                              >{{ item.originTime }}</span
                            >
                            <v-spacer></v-spacer>
                            <span
                              class="ml-4 ml-sm-12 pl-2 body-2"
                              style="font-family: Byekan !important"
                              >{{ item.destinationTime }}</span
                            >
                          </v-row>
                        </div>
                      </div>
                      <div class="leftSectionTicket">
                        <v-row
                          class="heightAll"
                          justify="center"
                          align="center"
                        >
                          <div class="widthAll text-center my-3">
                            <div class="ticketPrice mt-3 mt-sm-0">
                              <span class=""> قیمت </span>
                              <br />
                              <h3 class="mb-3 d-inline-block">12,563,000</h3>
                              <h3
                                class="mb-3 d-inline-block"
                                style="font-family: Byekan !important"
                              >
                                ریال
                              </h3>
                            </div>
                            <div class="ticketButtons">
                              <v-btn
                                class="px-lg-7 mt-2 mt-sm-2"
                                color="blue darken-2"
                                outlined
                                @click="
                                  activeTab = 0;
                                  ticketDetailsModal = true;
                                "
                                >مشاهده جزییات</v-btn
                              >
                              <br class="d-block d-sm-none" />
                              <v-btn
                                class="px-lg-7 mt-2 mt-sm-2"
                                color="red"
                                outlined
                                @click="nextPage = true"
                                >انتخاب بلیط ها</v-btn
                              >
                            </div>
                          </div>
                        </v-row>
                      </div>
                    </v-row>
                  </div>
                </v-skeleton-loader>
              </div>
            </div>
            <div v-else>
              <ticket-component
                @openLogin="openLogin()"
                :setFirstDate="setFirstDate"
                :rezervStepParent="rezervStepParent"
                @changeTicket="changeTicket($event)"
                @firstChoosed="firstChoosed($event)"
                @nextChoosed="nextChoosed($event)"
                :loadeingTickets="loadingTickets"
                :Passenger="Passenger"
                :hideFeild="hideFeild"
                :tickets="showTickets"
                :originCity="originCity"
                :destinationInternal="destinationInternal"
                :dayName="dayName"
                :date1="date1"
                :sortTab="sortTab"
                @minMaxPrice="getminMaxPrice($event)"
                @allTickets="
                  allTickets = $event;
                  tickets = $event;
                  showTickets = $event;
                  loadingTickets = false;
                "
              />
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
    width: 113px !important;
  }
}
</style>

<script>
import InputMain from "@/components/InputMain.vue";
// import TicketCard from '@/components/TicketCard.vue'
import TicketComponent from "@/components/TicketComponent.vue";
import TicketFilterComponent from "@/components/TicketFilterComponent.vue";

export default {
  name: "flight-page",
  data() {
    return {
      showFilterBox: false,
      showSortTab: false,
      rezervStepParent: false,
      rezervStep: 1,
      hideFeild: false,
      loadingTickets: true,
      allTickets: [],
      showTickets: [],
      originCity: {},
      destinationInternal: {},
      dayName: "",
      date1: "",
      acceptRulls: false,
      offCodeIsTrue: undefined,
      offCodeDisabledButton: false,
      offCodeLoading: false,
      offCode: "",
      editTicketInfoDialog: false,
      editUser: {},
      editContact: {},
      ModalUserType: true,
      persianTebelHeaders: [
        { text: "نام", value: "name" },
        { text: "نام خانوادگی", value: "family" },
        { text: "ملیت", value: "nationality" },
        { text: "کدملی", value: "nationalityCode" },
        { text: "جنسیت", value: "gender" },
        { text: "تاریخ تولد", value: "birthday" },
        { text: "عملیات", value: "actions", sortable: false, align: "center" },
      ],
      otherTebelHeaders: [
        { text: "نام", value: "name" },
        { text: "نام خانوادگی", value: "family" },
        { text: "ملیت", value: "nationality" },
        { text: "جنسیت", value: "gender" },
        { text: "تاریخ تولد", value: "birthday" },
        { text: "شماره پاسپورت", value: "passportNumber" },
        { text: "انقضا پاسپورت", value: "expiredate", align: "center" },
        { text: "عملیات", value: "actions", sortable: false, align: "center" },
      ],
      emailRules: [(v) => /.+@.+\..+/.test(v) || "ایمیل نادرست میباشد."],
      contactInfo: [
        {
          phone: "",
          email: "",
        },
      ],
      contactInfoHeaders: [
        { text: "تلفن", value: "phone", sortable: false, width: "40%" },
        { text: "ایمیل", value: "email", sortable: false, width: "40%" },
        {
          text: "عملیات",
          value: "actions",
          sortable: false,
          width: "20%",
          align: "center",
        },
      ],
      phoneRules: [
        (v) => !!v || "پر کردن فیلد تلفن اجباریست.",
        (v) => v.length == 11 || "شماره تلفن صحیح نیست.",
      ],
      nameRules: [
        (v) => !!v || "پر کردن فیلد نام اجباریست.",
        (v) => (v || "").indexOf(0) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(1) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(2) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(3) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(4) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(5) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(6) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(7) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(8) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(9) < 0 || "فرمت صحیح نیست",
        (v) => !/^[\u0600-\u06FF\s]+$/.test(v) || "فرمت صحیح نیست",
      ],
      familyRules: [
        (v) => !!v || "پر کردن فیلد نام خانوادگی اجباریست.",
        (v) => (v || "").indexOf(0) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(1) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(2) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(3) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(4) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(5) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(6) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(7) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(8) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(9) < 0 || "فرمت صحیح نیست",
        (v) => !/^[\u0600-\u06FF\s]+$/.test(v) || "فرمت صحیح نیست",
      ],
      nationalNumberRules: [
        (v) => !!v || "پر کردن این فیلد اجباریست.",
        (v) => (!!v && v.length == 10) || "کد ملی صحیح نیست.",
      ],
      dateError: false,
      emptyRules: [(v) => !!v || "پر کردن این فیلد اجباریست."],
      dateYears: [],
      dateYearsPass: [],
      nationalities: ["ایرانی", "غیر ایرانی"],
      genders: ["خانم", "آقا"],
      dateDays: [],
      dateMonthsPersian: [
        {
          text: "فروردین",
          value: 1,
        },
        {
          text: "اردیبهشت",
          value: 2,
        },
        {
          text: "خرداد",
          value: 3,
        },
        {
          text: "تیر",
          value: 4,
        },
        {
          text: "مرداد",
          value: 5,
        },
        {
          text: "شهریور",
          value: 6,
        },
        {
          text: "مهر",
          value: 7,
        },
        {
          text: "آبان",
          value: 8,
        },
        {
          text: "آذر",
          value: 9,
        },
        {
          text: "دی",
          value: 10,
        },
        {
          text: "بهمن",
          value: 11,
        },
        {
          text: "اسفند",
          value: 12,
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
            label: "صد تا سیصد هزار تومان",
            value: 1,
          },
          {
            label: "سیصد تا پانصد هزار تومان",
            value: 2,
          },
          {
            label: "پانصد تا هشتصد هزار تومان",
            value: 3,
          },
          {
            label: "هشتصد تا یک میلیون تومان",
            value: 4,
          },
          {
            label: "بیش از یک میلیون تومان",
            value: 5,
          },
        ],
        price: [0, 5000000],
        timeItems: [
          "صبح",
          "ظهر",
          "عصر",
          "شب",
          "نیمه شب",
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
            label: "اکونومی",
            value: 1,
          },
          {
            label: "بیزینس",
            value: 2,
          },
        ],
        class: [],
        airlineItems: [
          {
            label: "ماهان",
            value: "W5",
          },
          {
            label: "آتا",
            value: "I3",
          },
          {
            label: "کیش‌ایر",
            value: "Y9",
          },
          {
            label: "قشم‌ایر",
            value: "QB",
          },
          {
            label: "کاسپین",
            value: "IV",
          },
          {
            label: "تابان",
            value: "HH",
          },
          {
            label: "ساها",
            value: "IRZ",
          },
          {
            label: "آسمان",
            value: "EP",
          },
          {
            label: "زاگرس",
            value: "ZV",
          },
          {
            label: "نفت",
            value: "NV",
          },
          {
            label: "معراج",
            value: "JI",
          },
          {
            label: "وارش",
            value: "VR",
          },
          {
            label: "سپهران",
            value: "IS",
          },
          {
            label: "اروان",
            value: "A1",
          },
          {
            label: "چابهار",
            value: "RI",
          },
          {
            label: "ایران‌ایر",
            value: "IR",
          },
          {
            label: "پارس‌ایر",
            value: "PA",
          },
          {
            label: "پویاایر",
            value: "PY",
          },
          {
            label: "ایرتور",
            value: "B9",
          },
          {
            label: "آساجت",
            value: "A7",
          },
        ],
        airline: [],
        typeItems: [
          {
            label: "چارتری",
            value: 1,
          },
          {
            label: "سیستمی",
            value: 2,
          },
        ],
        type: [2],
        showTypeItems: [
          {
            label: "نمایش پروازهای موجود",
            value: 1,
          },
          {
            label: "عدم نمایش پرواز تکراری",
            value: 2,
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
      ticketDetailsTabs: ["جزییات پرواز", "قوانین استرداد", "بار مجاز"],
      Passenger: {
        peaple: 1,
        child: 0,
        baby: 0,
      },
      panelDetails: 0,
      allChoosedTickets: [],
      setFirstDate: false,
    };
  },
  components: {
    InputMain,
    // TicketCard,
    TicketComponent,
    TicketFilterComponent,
  },
  watch: {
    datePickerValue() {
      // if (this.datePickerValue.length == 2) {
      this.changeQuery();
      // } else {
      //   this.$route.query.start = this.datePickerValue
      // }
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
    $route(to, from) {
      let self = this;
      this.tickets = [];
      this.allTickets = [];
      this.showTickets = [];
      if (self.$route.query.path) {
        self.loadingTickets = true;
      }
    },
    rezervStep() {},
  },
  computed: {},
  methods: {
    openLogin() {
      this.$emit("openLogin");
    },
    searchInHeaderBox() {
      this.allChoosedTickets = [];
      this.rezervStep = 1;
      this.dateChanged(this.date1.length == 2 ? this.date1[0] : this.date1);
      this.rezervStepParent = !this.rezervStepParent;
    },
    changeTicket(event) {
      if (event && this.rezervStep != event) {
        this.rezervStep = event;
        this.loadingTickets = true;
        this.dateChanged(this.date1[event - 1]);
      }
    },
    changeOriginCity(event) {
      this.originCity = event;
    },
    changeDestinationInternal(event) {
      this.destinationInternal = event;
    },
    changeDayName1(event) {
      this.dayName = event;
      this.setFirstDate = true;
    },
    changeDate1(event) {
      this.date1 = event;
    },
    dayNumber(number) {
      var timestamp = Math.floor(number / 1000) * 1000 - 86400000 * 10;
      let months = new Array(
        "فروردين",
        "ارديبهشت",
        "خرداد",
        "تير",
        "مرداد",
        "شهريور",
        "مهر",
        "آبان",
        "آذر",
        "دي",
        "بهمن",
        "اسفند"
      );
      this.dates = [];
      let date = null;
      for (let i = 0; i < 20; i++) {
        date = new Date(timestamp).toLocaleDateString("fa-IR-u-nu-latn");
        date = date.split("/");

        let theMonth = (new Date(timestamp).getMonth() + 1).toString();
        let theDate = new Date(timestamp).getDate();
        this.dates.push({
          datePickerValue:
            new Date(timestamp).getUTCFullYear() +
            "-" +
            (theMonth.length == 1 ? "0" + theMonth : theMonth) +
            "-" +
            (String(theDate).length == 1 ? "0" + theDate : theDate),
          day: date[2],
          month: months[date[1] - 1],
          timestamp: timestamp,
          weekDay: new Date(timestamp).getDay() + 1,
        });
        timestamp = timestamp + 86400000;
      }
      this.slideGroup = 10;
      return date;
    },
    dateChanged(event) {
      let numberdate = Math.floor(new Date(event).getTime() / 1000) * 1000;
      this.dayNumber(numberdate);
    },
    getminMaxPrice(event) {
      this.fromPrice = event.minPrice;
      this.toPrice = event.maxPrice;
      this.filter.price = [event.minPrice, event.maxPrice];
    },
    changeFilterTime(event) {
      return new Promise((resolve) => {
        for (let i = 0; i < this.allTickets.length; i++) {
          let time = this.allTickets[i].DepartureTime.split(":");
          this.allTickets[i].timeFirst = Number(time[0]);
        }
        if (event.end == 6) {
          if (event.start == 24) {
            this.showTickets = this.allTickets.filter((x) => {
              return x.timeFirst >= 0 && x.timeFirst <= 6;
            });
            resolve(this.showTickets);
          } else {
            this.showTickets = this.allTickets.filter((x) => {
              return (
                (x.timeFirst >= 0 && x.timeFirst <= 6) ||
                x.timeFirst >= event.start
              );
            });
            resolve(this.showTickets);
          }
        } else {
          this.showTickets = this.allTickets.filter((x) => {
            return x.timeFirst >= event.start && x.timeFirst <= event.end;
          });
          resolve(this.showTickets);
        }
      });
    },
    async startFilter(event) {
      this.hideFeild = event.hideFeild;
      let result = await this.changeFilterTime(event.time);
      this.showTickets = result.filter((x) => {
        return (
          event.class.includes(x.type_flight) &&
          event.airline.includes(x.Airline) &&
          event.type.includes(x.ticketType) &&
          x.price >= event.price[0] * 10 &&
          x.price <= event.price[1] * 10
        );
      });
    },
    getPasanger(event) {
      this.Passenger = event;
    },
    firstChoosed(event) {
      this.allChoosedTickets[0] = event;
      this.loadingTickets = true;
      this.dateChanged(this.$route.query.end);
      this.rezervStep = 2;
    },
    nextChoosed(event) {
      this.allChoosedTickets[1] = event;
    },
    changeQuery() {
      let query = this.$route.query;
      if (this.datePickerValue.length == 2) {
        if (this.rezervStep == 1) {
          query.start = this.datePickerValue[0];
          this.$router.push({
            path: this.$route.path,
            query: { ...query, foo: this.datePickerValue[0] },
          });
          let numberdate =
            Math.floor(new Date(this.$route.query.start).getTime() / 1000) *
            1000;
          this.dayNumber(numberdate);
        } else {
          query.end = this.datePickerValue[1];
          this.$router.push({
            path: this.$route.path,
            query: { ...query, foo: this.datePickerValue[1] },
          });
          let numberdate =
            Math.floor(new Date(this.$route.query.end).getTime() / 1000) * 1000;
          this.dayNumber(numberdate);
        }
      } else {
        query.start = this.datePickerValue;
        this.$router.push({
          path: this.$route.path,
          query: { ...query, foo: this.datePickerValue },
        });
        let numberdate =
          Math.floor(new Date(this.$route.query.start).getTime() / 1000) * 1000;
        this.dayNumber(numberdate);
      }
    },
    doneChanges() {
      this.showFilterBox = false;
    },
  },
  created() {
    this.windowWidth = window.innerWidth;
    if (this.$route.query.start) {
      let numberdate =
        Math.floor(new Date(this.$route.query.start).getTime() / 1000) * 1000;
      this.dayNumber(numberdate);
    } else {
      this.loadingTickets = false;
      let numberdate = Math.floor(new Date().getTime() / 1000) * 1000;
      this.dayNumber(numberdate);
    }
    window.scrollTo(0, 0);
    // this.setDates();
  },
};
</script>