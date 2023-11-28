<template class="mt-12 pt-12">
  <div
    class="mt-12 pt-12 white"
    v-if="isLogin && !loadingApi"
    style="background: url('/pattern site-gray.png')"
  >
    <v-row class="pb-12 py-md-12" justify="center" style="z-index: 2">
      <div class="indexDiv">
        <v-row class="d-none d-md-flex">
          <v-col cols="1" class="py-0">
            <v-row justify="end">
              <div
                class="white rounded-lg py-6 widthAll"
                style="box-shadow: 0 0 15px #ebebeb"
              >
                <v-row
                  justify="center"
                  class="pt-3 cursorPointer"
                  style="background: #14179e"
                >
                  <v-icon size="30" color="white"
                    >mdi-view-dashboard-outline</v-icon
                  >
                </v-row>
                <v-row
                  justify="center"
                  class="pb-3 cursorPointer"
                  style="background: #14179e"
                >
                  <span class="white--text">داشبورد</span>
                </v-row>
                <v-row justify="center" class="py-4">
                  <v-icon size="30" color="grey darken-1"
                    >mdi-account-circle-outline</v-icon
                  >
                </v-row>
                <v-row justify="center" class="py-4">
                  <v-icon size="30" color="grey darken-1"
                    >mdi-text-box-outline</v-icon
                  >
                </v-row>
                <v-row justify="center" class="py-4">
                  <v-icon size="30" color="grey darken-1"
                    >mdi-book-open-outline</v-icon
                  >
                </v-row>
                <v-row justify="center" class="py-4">
                  <v-icon size="30" color="grey darken-1"
                    >mdi-bag-carry-on</v-icon
                  >
                </v-row>
                <v-row justify="center" class="py-4">
                  <v-icon size="30" color="grey darken-1"
                    >mdi-credit-card-outline</v-icon
                  >
                </v-row>
                <v-row justify="center" class="py-4">
                  <v-icon size="30" color="grey darken-1"
                    >mdi-account-multiple</v-icon
                  >
                </v-row>
                <v-row justify="center" class="py-4">
                  <v-icon size="30" color="grey darken-1"
                    >mdi-recycle-variant</v-icon
                  >
                </v-row>
                <v-row justify="center" class="py-4">
                  <v-icon size="30" color="grey darken-1"
                    >mdi-cog-outline</v-icon
                  >
                </v-row>
                <v-row justify="center" class="py-4">
                  <v-icon
                    size="30"
                    class="cursorPointer"
                    @click="exit()"
                    color="grey darken-1"
                    >mdi-exit-to-app</v-icon
                  >
                </v-row>
              </div>
            </v-row>
          </v-col>
          <v-col cols="8" class="px-4">
            <v-row>
              <div class="widthAll">
                <v-row>
                  <v-col cols="12" sm="7" md="8" class="py-0">
                    <v-row
                      class="py-3 rounded-lg white pr-1 pr-lg-4"
                      style="box-shadow: 0 0 15px #ebebeb"
                    >
                      <v-col cols="12" md="5">
                        <v-row class="" style="flex-wrap: nowrap">
                          <b
                            class="grey--text text--darken-2"
                            style="width: 90px"
                            >نام</b
                          >
                          <span
                            class="grey--text text--darken-2 textButtonsTitle"
                            style="white-space: nowrap"
                            >{{ fName }}</span
                          >
                        </v-row>
                        <v-row class="mt-3" style="flex-wrap: nowrap">
                          <b
                            class="grey--text text--darken-2"
                            style="width: 90px"
                            >نام‌خانوادگی</b
                          >
                          <span
                            class="grey--text text--darken-2 textButtonsTitle"
                            style="white-space: nowrap"
                            >{{ lName }}</span
                          >
                        </v-row>
                        <v-row class="mt-3" style="flex-wrap: nowrap">
                          <b
                            class="grey--text text--darken-2"
                            style="width: 90px"
                            >کدملی</b
                          >
                          <span
                            class="grey--text text--darken-2 textButtonsTitle"
                            style="white-space: nowrap"
                            >-</span
                          >
                        </v-row>
                      </v-col>
                      <v-col cols="12" md="7" class="mt-3 mt-md-0">
                        <v-row class="" style="flex-wrap: nowrap">
                          <b
                            class="grey--text text--darken-2"
                            style="width: 90px"
                            >شماره‌موبایل</b
                          >
                          <span
                            class="grey--text text--darken-2 textButtonsTitle"
                            style="white-space: nowrap"
                            >{{ phone }}</span
                          >
                        </v-row>
                        <v-row class="mt-3" style="flex-wrap: nowrap">
                          <b
                            class="grey--text text--darken-2"
                            style="width: 90px"
                            >ایمیل</b
                          >
                          <span
                            class="grey--text text--darken-2 textButtonsTitle"
                            style="flex-wrap: nowrap"
                            >-</span
                          >
                        </v-row>
                        <v-row class="mt-3" style="flex-wrap: nowrap">
                          <b
                            class="grey--text text--darken-2"
                            style="width: 90px"
                            >پاسپورت</b
                          >
                          <span
                            class="grey--text text--darken-2 textButtonsTitle"
                            style="flex-wrap: nowrap"
                            >-</span
                          >
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12" sm="5" md="4" class="pr-4 py-0">
                    <div
                      class="py-4 rounded-lg white"
                      style="box-shadow: 0 0 15px #ebebeb"
                    >
                      <v-row justify="center">
                        <b class="grey--text text--darken-2">
                          {{
                            new Date().getDay() == 6
                              ? "شنبه"
                              : new Date().getDay() == 0
                              ? "یکشنبه"
                              : new Date().getDay() == 1
                              ? "دوشنبه"
                              : new Date().getDay() == 2
                              ? "سه‌شنبه"
                              : new Date().getDay() == 3
                              ? "چهارشنبه"
                              : new Date().getDay() == 4
                              ? "پنجشنبه"
                              : new Date().getDay() == 5
                              ? "جمعه"
                              : ""
                          }}،
                          {{
                            new Date().toLocaleDateString("fa-IR", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })
                          }}
                        </b>
                      </v-row>
                      <v-row justify="center" class="mt-3" align="center">
                        <span
                          class="ml-1 grey--text text--darken-1"
                          style="margin-top: -20px"
                          >C°</span
                        >
                        <span
                          class="grey--text text--darken-1"
                          style="font-size: 32px"
                          >{{
                            weather ? Math.floor(weather - 273) : "--"
                          }}</span
                        >
                        <img
                          src="@/assets/image/new design/آب و هوا.png"
                          alt=""
                        />
                      </v-row>
                      <v-row
                        justify="center"
                        class="mt-1 grey--text text--darken-1"
                        >منطقه:تهران،ایران</v-row
                      >
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-row>
            <h3 class="mt mt-9 mb-6 grey--text text--darken-2">
              آخرین سفارشات ثبت شده
            </h3>
            <ticket-contract-card :documents="documents" />
          </v-col>
          <v-col cols="3" class="">
            <v-row>
              <div
                class="white rounded-lg py-6 widthAll"
                style="box-shadow: 0 0 15px #ebebeb"
              >
                <v-row justify="space-around" align="center">
                  <img
                    class="rounded-lg"
                    src="@/assets/image/personal-image17.jpg"
                    width="40"
                    alt="profile photo"
                  />
                  <div class="text-left">
                    <span class="bold grey--text text--darken-2">{{
                      userName
                    }}</span>
                    <br />
                    <span class="grey--text text--darken-1">{{ phone }}</span>
                  </div>
                </v-row>
                <hr class="mx-6 my-6" />
                <v-row
                  justify="space-between"
                  class="px-2 px-sm-4 px-md-7 px-lg-9 mt-3"
                >
                  <span class="grey--text text--darken-1"
                    >بلیط‌های خریداری شده</span
                  >
                  <span class="grey--text text--darken-1">{{
                    documents.length
                  }}</span>
                </v-row>
                <v-row
                  justify="space-between"
                  class="px-2 px-sm-4 px-md-7 px-lg-9 mt-3"
                >
                  <span class="grey--text text--darken-1"
                    >هتل‌های رزرو شده</span
                  >
                  <span class="grey--text text--darken-1">0</span>
                </v-row>
                <v-row
                  justify="space-between"
                  class="px-2 px-sm-4 px-md-7 px-lg-9 mt-3"
                >
                  <span class="grey--text text--darken-1">امتیاز</span>
                  <span class="grey--text text--darken-1">0</span>
                </v-row>
                <v-row justify="space-between" class="pr-9 pl-1 mt-3">
                  <span class="grey--text text--darken-1">موجودی کیف پول</span>
                  <span class="grey--text text--darken-1">
                    {{
                      !credit ? "0 " : credit == "noLimit" ? "نامحدود" : credit
                    }}
                    <span
                      v-if="!credit"
                      class="caption grey--text"
                      style="font-family: Byekan !important"
                      >تومان</span
                    >
                  </span>
                </v-row>
              </div>
              <div
                class="white rounded-lg py-6 widthAll mt-4"
                style="box-shadow: 0 0 15px #ebebeb"
              >
                <v-row
                  justify="space-around"
                  align="center"
                  style="height: 300px"
                >
                  بنر تبلیغاتی
                </v-row>
              </div>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="d-md-none">
          <v-col cols="12" sm="6" class="order-1 order-sm-1 px-2 px-sm-0">
            <v-row>
              <div
                class="white rounded-lg py-3 widthAll"
                style="box-shadow: 0 0 15px #ebebeb"
              >
                <v-row justify="space-around" align="center">
                  <img
                    class="rounded-lg"
                    src="@/assets/image/personal-image17.jpg"
                    width="40"
                    alt="profile photo"
                  />
                  <div class="text-left">
                    <span class="bold grey--text text--darken-2">{{
                      userName
                    }}</span>
                    <br />
                    <span class="grey--text text--darken-1">{{ phone }}</span>
                  </div>
                </v-row>
                <hr class="mx-6 my-5" />
                <v-row
                  justify="space-between"
                  class="px-2 px-sm-4 px-md-7 px-lg-9 mt-3"
                >
                  <span class="grey--text text--darken-1"
                    >بلیط‌های خریداری شده</span
                  >
                  <span class="grey--text text--darken-1">{{
                    documents.length
                  }}</span>
                </v-row>
                <v-row
                  justify="space-between"
                  class="px-2 px-sm-4 px-md-7 px-lg-9 mt-3"
                >
                  <span class="grey--text text--darken-1"
                    >هتل‌های رزرو شده</span
                  >
                  <span class="grey--text text--darken-1">0</span>
                </v-row>
                <v-row
                  justify="space-between"
                  class="px-2 px-sm-4 px-md-7 px-lg-9 mt-3"
                >
                  <span class="grey--text text--darken-1">امتیاز</span>
                  <span class="grey--text text--darken-1">0</span>
                </v-row>
                <v-row justify="space-between" class="px-2 px-sm-4 mt-3">
                  <span class="grey--text text--darken-1">موجودی کیف پول</span>
                  <span class="grey--text text--darken-1"
                    >0
                    <span
                      class="caption grey--text"
                      style="font-family: Byekan !important"
                      >تومان</span
                    ></span
                  >
                </v-row>
              </div>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6" class="px-0 order-sm-2 px-sm-4 order-3">
            <h3
              class="d-sm-none mt-9 mb-6 text-center grey--text text--darken-2"
            >
              مشخصات فردی
            </h3>
            <v-row>
              <div class="widthAll">
                <v-row>
                  <v-col cols="12">
                    <v-row
                      class="py-6 rounded-lg white pr-4"
                      style="box-shadow: 0 0 15px #ebebeb"
                    >
                      <v-col cols="12">
                        <v-row class="">
                          <b
                            class="grey--text text--darken-2"
                            style="width: 100px"
                            >نام</b
                          >
                          <span
                            class="grey--text text--darken-2 textButtonsTitle"
                            >{{ fName }}</span
                          >
                        </v-row>
                        <v-row class="mt-3">
                          <b
                            class="grey--text text--darken-2"
                            style="width: 100px"
                            >نام‌خانوادگی</b
                          >
                          <span
                            class="grey--text text--darken-2 textButtonsTitle"
                            >{{ lName }}</span
                          >
                        </v-row>
                        <v-row class="mt-3">
                          <b
                            class="grey--text text--darken-2"
                            style="width: 100px"
                            >کدملی</b
                          >
                          <span
                            class="grey--text text--darken-2 textButtonsTitle"
                            >-</span
                          >
                        </v-row>
                      </v-col>
                      <v-col cols="12" class="mt-3 mt-md-0">
                        <v-row class="">
                          <b
                            class="grey--text text--darken-2"
                            style="width: 100px"
                            >شماره‌موبایل</b
                          >
                          <span
                            class="grey--text text--darken-2 textButtonsTitle"
                            >{{ phone }}</span
                          >
                        </v-row>
                        <v-row class="mt-3">
                          <b
                            class="grey--text text--darken-2"
                            style="width: 100px"
                            >ایمیل</b
                          >
                          <span
                            class="grey--text text--darken-2 textButtonsTitle"
                            >-</span
                          >
                        </v-row>
                        <v-row class="mt-3">
                          <b
                            class="grey--text text--darken-2"
                            style="width: 100px"
                            >پاسپورت</b
                          >
                          <span
                            class="grey--text text--darken-2 textButtonsTitle"
                            >-</span
                          >
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </div>
            </v-row>
          </v-col>
          <v-col cols="12" class="mt-9 order-2 order-sm-3">
            <v-row justify="center">
              <v-col cols="4" sm="3" class="pa-1 pa-sm-2">
                <v-row
                  class="rounded-lg py-0 py-sm-2"
                  justify="center"
                  style="box-shadow: 0 0 15px #ebebeb; background: #14179e"
                >
                  <v-col>
                    <v-row justify="center" class="pt-3 cursorPointer">
                      <v-icon size="30" color="white"
                        >mdi-view-dashboard-outline</v-icon
                      >
                    </v-row>
                    <v-row justify="center" class="pb-3 cursorPointer">
                      <span class="white--text">داشبورد</span>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4" sm="3" class="pa-1 pa-sm-2">
                <v-row
                  class="white rounded-lg py-0 py-sm-2"
                  justify="center"
                  style="box-shadow: 0 0 15px #ebebeb"
                >
                  <v-col>
                    <v-row justify="center" class="pt-3">
                      <v-icon size="30" color="grey darken-2"
                        >mdi-account-circle-outline</v-icon
                      >
                    </v-row>
                    <v-row justify="center" class="pb-3">
                      <span class="grey--text text--darken-2 textButtonsTitle"
                        >حساب کاربری</span
                      >
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4" sm="3" class="pa-1 pa-sm-2">
                <v-row
                  class="white rounded-lg py-0 py-sm-2"
                  justify="center"
                  style="box-shadow: 0 0 15px #ebebeb"
                >
                  <v-col>
                    <v-row justify="center" class="pt-3">
                      <v-icon size="30" color="grey darken-2"
                        >mdi-text-box-outline</v-icon
                      >
                    </v-row>
                    <v-row justify="center" class="pb-3">
                      <span class="grey--text text--darken-2 textButtonsTitle"
                        >قرارداد الکترونیک</span
                      >
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4" sm="3" class="pa-1 pa-sm-2">
                <v-row
                  class="white rounded-lg py-0 py-sm-2"
                  justify="center"
                  style="box-shadow: 0 0 15px #ebebeb"
                >
                  <v-col>
                    <v-row justify="center" class="pt-3">
                      <v-icon size="30" color="grey darken-2"
                        >mdi-bag-carry-on</v-icon
                      >
                    </v-row>
                    <v-row justify="center" class="pb-3">
                      <span class="grey--text text--darken-2 textButtonsTitle"
                        >مسافران</span
                      >
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4" sm="3" class="pa-1 pa-sm-2">
                <v-row
                  class="white rounded-lg py-0 py-sm-2"
                  justify="center"
                  style="box-shadow: 0 0 15px #ebebeb"
                >
                  <v-col>
                    <v-row justify="center" class="pt-3">
                      <v-icon size="30" color="grey darken-2"
                        >mdi-credit-card-outline</v-icon
                      >
                    </v-row>
                    <v-row justify="center" class="pb-3">
                      <span class="grey--text text--darken-2 textButtonsTitle"
                        >اعتبار</span
                      >
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4" sm="3" class="pa-1 pa-sm-2">
                <v-row
                  class="white rounded-lg py-0 py-sm-2"
                  justify="center"
                  style="box-shadow: 0 0 15px #ebebeb"
                >
                  <v-col>
                    <v-row justify="center" class="pt-3">
                      <v-icon size="30" color="grey darken-2"
                        >mdi-account-multiple</v-icon
                      >
                    </v-row>
                    <v-row justify="center" class="pb-3">
                      <span class="grey--text text--darken-2 textButtonsTitle"
                        >مدیریت کاربران</span
                      >
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4" sm="3" class="pa-1 pa-sm-2">
                <v-row
                  class="white rounded-lg py-0 py-sm-2"
                  justify="center"
                  style="box-shadow: 0 0 15px #ebebeb"
                >
                  <v-col>
                    <v-row justify="center" class="pt-3">
                      <v-icon size="30" color="grey darken-2"
                        >mdi-book-open-outline</v-icon
                      >
                    </v-row>
                    <v-row justify="center" class="pb-3">
                      <span class="grey--text text--darken-2 textButtonsTitle"
                        >رزروها</span
                      >
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4" sm="3" class="pa-1 pa-sm-2">
                <v-row
                  class="white rounded-lg py-0 py-sm-2"
                  justify="center"
                  style="box-shadow: 0 0 15px #ebebeb"
                >
                  <v-col>
                    <v-row justify="center" class="pt-3">
                      <v-icon size="30" color="grey darken-2"
                        >mdi-recycle-variant</v-icon
                      >
                    </v-row>
                    <v-row justify="center" class="pb-3">
                      <span class="grey--text text--darken-2 textButtonsTitle"
                        >تراکنش</span
                      >
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4" sm="3" class="pa-1 pa-sm-2">
                <v-row
                  class="white rounded-lg py-0 py-sm-2"
                  justify="center"
                  style="box-shadow: 0 0 15px #ebebeb"
                >
                  <v-col>
                    <v-row justify="center" class="pt-3">
                      <v-icon size="30" color="grey darken-2"
                        >mdi-cog-outline</v-icon
                      >
                    </v-row>
                    <v-row justify="center" class="pb-3">
                      <span class="grey--text text--darken-2 textButtonsTitle"
                        >تنظیمات</span
                      >
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4" sm="3" class="pa-1 pa-sm-2">
                <v-row
                  class="white rounded-lg py-0 py-sm-2"
                  justify="center"
                  style="box-shadow: 0 0 15px #ebebeb"
                >
                  <v-col class="cursorPointer" @click="exit()">
                    <v-row justify="center" class="pt-3">
                      <v-icon size="30" color="grey darken-2"
                        >mdi-exit-to-app</v-icon
                      >
                    </v-row>
                    <v-row justify="center" class="pb-3">
                      <span class="grey--text text--darken-2 textButtonsTitle"
                        >خروج</span
                      >
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="order-4 order-sm-4">
            <h3
              class="mt-9 mb-6 grey--text text--darken-2 text-center text-sm-right"
            >
              آخرین سفارشات ثبت شده
            </h3>
            <ticket-contract-card :documents="documents" />
            <!-- <v-row
              justify="center"
              class="rounded-lg py-3"
              style="
                box-shadow: 0 0 15px #ebebeb;
                border: 1px solid #ebebeb;
                background: #fff;
              "
            >
              این قسمت از سایت در حال توسعه میباشد!
            </v-row> -->
          </v-col>
          <v-col cols="12" md="5" class="px-0 mt-9 order-5 order-sm-5">
            <div
              class="py-4 rounded-lg white"
              style="box-shadow: 0 0 15px #ebebeb"
            >
              <v-row justify="center">
                <b class="grey--text text--darken-2">
                  {{
                    new Date().getDay() == 6
                      ? "شنبه"
                      : new Date().getDay() == 0
                      ? "یکشنبه"
                      : new Date().getDay() == 1
                      ? "دوشنبه"
                      : new Date().getDay() == 2
                      ? "سه‌شنبه"
                      : new Date().getDay() == 3
                      ? "چهارشنبه"
                      : new Date().getDay() == 4
                      ? "پنجشنبه"
                      : new Date().getDay() == 5
                      ? "جمعه"
                      : ""
                  }}،
                  {{
                    new Date().toLocaleDateString("fa-IR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  }}
                </b>
              </v-row>
              <v-row justify="center" class="mt-3" align="center">
                <span
                  class="ml-1 grey--text text--darken-1"
                  style="margin-top: -20px"
                  >C°</span
                >
                <span
                  class="grey--text text--darken-1"
                  style="font-size: 32px"
                  >{{ weather ? Math.floor(weather - 273) : "--" }}</span
                >
                <img src="@/assets/image/new design/آب و هوا.png" alt="" />
              </v-row>
              <v-row justify="center" class="mt-1 grey--text text--darken-1"
                >منطقه:تهران،ایران</v-row
              >
            </div>
          </v-col>
          <div
            class="white rounded-lg py-6 widthAll mt-4 order-6 order-sm-6"
            style="box-shadow: 0 0 15px #ebebeb"
          >
            <v-row justify="space-around" align="center" style="height: 300px">
              بنر تبلیغاتی
            </v-row>
          </div>
        </v-row>
      </div>
    </v-row>
  </div>
  <div class="my-12 py-12" v-else-if="!loadingApi">
    <v-row class="my-12" justify="center">
      <div class="indexDiv">
        <v-row class="my-12 py-12" justify="center">
          <h1>لطفا به اکانت کاربری خود وارد شده و صفحه را refresh کنید.</h1>
        </v-row>
      </div>
    </v-row>
  </div>
</template>

<style scoped>
@media (max-width: 599px) {
  .textButtonsTitle {
    font-size: 14px;
  }
}
</style>

<script>
// import '@/assets/css/main.css'
import axios from "axios";
import TicketContractCard from "@/components/TicketContractCard.vue";
axios.defaults.headers.common["Client-Token"] = "Ahuan-Wapi?123";
// import CircleSlider from '@/components/CircleSlider.vue'
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("Client-Token");
export default {
  data() {
    return {
      credit: localStorage.getItem("credit"),
      isLogin: false,
      userName: "",
      phone: "",
      weather: "",
      fName: "",
      lName: "",
      loadingApi: true,
      documents: [],
    };
  },
  components: {
    TicketContractCard,
    // CircleSlider
  },
  computed: {},
  methods: {
    checkIsLoggedIn() {
      let self = this;
      self.loadingApi = true;
      axios
        .get("https://panel.ahuantours.com/api/Login/isLoggedIn")
        .then(function (response) {
          // handle success
          self.isLogin = true;
          if (localStorage.getItem("user-name")) {
            self.userName = localStorage.getItem("user-name");
          }
          if (localStorage.getItem("phone-number-ahuan")) {
            self.phone = localStorage.getItem("phone-number-ahuan");
          }
          if (localStorage.getItem("fName")) {
            self.fName = localStorage.getItem("fName");
          }
          if (localStorage.getItem("lName")) {
            self.lName = localStorage.getItem("lName");
          }
          self.getWeather();
          self.getContracts(localStorage.getItem("phone-number-ahuan"));
          self.loadingApi = false;
        })
        .catch(function (error) {
          // handle error
          localStorage.setItem("isLoginAhuan", false);
          self.isLogin = false;
          console.log(error);
          self.loadingApi = false;
          self.exit();
        });
    },
    getWeather() {
      let self = this;
      axios
        .get("https://panel.ahuantours.com/WeatherForecast")
        .then(function (res) {
          self.weather = res.data.main.temp;
        });
    },
    getContracts(username) {
      let self = this;
      axios
        .get(
          "https://panel.ahuantours.com/api/Contract/search-user/" + username
        )
        .then(function (res) {
          let documents = res.data;
          let documentsArray = [];

          for (let i = 0; i < documents.length; i++) {
            let duc = documents[i];
            let day = new Date(documents[i].issueDate).getDay();
            let price = 0;
            let passengers = [];
            if (duc.confirmStatus != "temp") {
              let index = 0;
              for (let j = 0; j < duc.contractPassengers.length; j++) {
                price = price + duc.contractPassengers[j].price;
                if (duc.contractPassengers[j].price2) {
                  price = price + duc.contractPassengers[j].price2;
                }
                for (let k = 0; k < duc.contractFlights.length; k++) {
                  passengers.push({
                    name:
                      duc.contractPassengers[j].fName +
                      " " +
                      duc.contractPassengers[j].lName,
                    fName: duc.contractPassengers[j].fName,
                    lName: duc.contractPassengers[j].lName,
                    RefundedAmount: 0,
                    descriptionSeat: duc.contractPassengers[j].description,
                    georgianDate: duc.contractFlights[k].date,
                    age:
                      duc.contractPassengers[j].age == "ADL"
                        ? "بزرگسال"
                        : duc.contractPassengers[j].age == "CHD"
                        ? "کودک"
                        : "نوزاد",
                    date: new Date(
                      duc.contractFlights[k].date
                    ).toLocaleDateString("fa", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }),
                    time: duc.contractFlights[k].time,
                    flightNumber: duc.contractFlights[k].flightNumber,
                    flightType:
                      duc.contractFlights[k].charterFlight == true
                        ? "چارتری"
                        : "سیستمی",
                    origin: duc.contractFlights[k].origin,

                    destination: duc.contractFlights[k].destination,
                    ticketNumber:
                      k == 0
                        ? duc.contractPassengers[j].goTicketNumber
                        : duc.contractPassengers[j].retTicketNumber,
                    PENALTY: "100%",
                    airlineCode:
                      duc.contractFlights[k].airlineId == 489
                        ? "I3"
                        : duc.contractFlights[k].airlineId == 1016
                        ? "Y9"
                        : duc.contractFlights[k].airlineId == 761
                        ? "QB"
                        : duc.contractFlights[k].airlineId == 470
                        ? "HH"
                        : duc.contractFlights[k].airlineId == 376
                        ? "EP"
                        : duc.contractFlights[k].airlineId == 1064
                        ? "ZV"
                        : duc.contractFlights[k].airlineId == 683
                        ? "NV"
                        : duc.contractFlights[k].airlineId == 535
                        ? "JI"
                        : duc.contractFlights[k].airlineId == 943
                        ? "VR"
                        : duc.contractFlights[k].airlineId == "IRZ"
                        ? "IRZ"
                        : duc.contractFlights[k].airlineId == 410
                        ? "FP"
                        : duc.contractFlights[k].airlineId == 515
                        ? "IV"
                        : duc.contractFlights[k].airlineId == 7
                        ? "IS"
                        : duc.contractFlights[k].airlineId == 212
                        ? "A1"
                        : duc.contractFlights[k].airlineId == 802
                        ? "RI"
                        : duc.contractFlights[k].airlineId == 956
                        ? "W5"
                        : duc.contractFlights[k].airlineId == 512
                        ? "IR"
                        : duc.contractFlights[k].airlineId == "PA"
                        ? "PA"
                        : duc.contractFlights[k].airlineId == "PY"
                        ? "PY"
                        : duc.contractFlights[k].airlineId == 256
                        ? "B9"
                        : duc.contractFlights[k].airlineId == 218
                        ? "A7"
                        : "000",
                    airline:
                      duc.contractFlights[k].airlineId == 489
                        ? "آتا"
                        : duc.contractFlights[k].airlineId == 1016
                        ? "کیش‌ایر"
                        : duc.contractFlights[k].airlineId == 761
                        ? "قشم‌ایر"
                        : duc.contractFlights[k].airlineId == 470
                        ? "تابان"
                        : duc.contractFlights[k].airlineId == 376
                        ? "آسمان"
                        : duc.contractFlights[k].airlineId == 1064
                        ? "زاگرس"
                        : duc.contractFlights[k].airlineId == 683
                        ? "نفت"
                        : duc.contractFlights[k].airlineId == 535
                        ? "معراج"
                        : duc.contractFlights[k].airlineId == 943
                        ? "وارش"
                        : duc.contractFlights[k].airlineId == "IRZ"
                        ? "ساها"
                        : duc.contractFlights[k].airlineId == 410
                        ? "فلای‌پرشیا"
                        : duc.contractFlights[k].airlineId == 515
                        ? "کاسپین"
                        : duc.contractFlights[k].airlineId == 7
                        ? "سپهران"
                        : duc.contractFlights[k].airlineId == 212
                        ? "ایر1"
                        : duc.contractFlights[k].airlineId == 802
                        ? "چابهار"
                        : duc.contractFlights[k].airlineId == 956
                        ? "ماهان"
                        : duc.contractFlights[k].airlineId == 512
                        ? "ایران‌ایر"
                        : duc.contractFlights[k].airlineId == "PA"
                        ? "پارس‌ایر"
                        : duc.contractFlights[k].airlineId == "PY"
                        ? "پویاایر"
                        : duc.contractFlights[k].airlineId == 256
                        ? "ایرتور"
                        : duc.contractFlights[k].airlineId == 218
                        ? "آساجت"
                        : "نامعلوم",
                    airlineLogo:
                      duc.contractFlights[k].airlineId == 489
                        ? require("@/assets/image/لوگوی_آتا.png")
                        : duc.contractFlights[k].airlineId == 1016
                        ? require("@/assets/image/لوگوی_کیش ایر.png")
                        : duc.contractFlights[k].airlineId == 761
                        ? require("@/assets/image/لوگوی_قشم ایر.png")
                        : duc.contractFlights[k].airlineId == 470
                        ? require("@/assets/image/لوگوی_تابان.png")
                        : duc.contractFlights[k].airlineId == 376
                        ? require("@/assets/image/لوگوآسمان2.jpg")
                        : duc.contractFlights[k].airlineId == 1064
                        ? require("@/assets/image/zagros.png")
                        : duc.contractFlights[k].airlineId == 683
                        ? require("@/assets/image/لوگوی_نفت.png")
                        : duc.contractFlights[k].airlineId == 535
                        ? require("@/assets/image/لوگوی_معراج.png")
                        : duc.contractFlights[k].airlineId == 943
                        ? require("@/assets/image/لوگوی_وارش.png")
                        : duc.contractFlights[k].airlineId == "IRZ"
                        ? require("@/assets/image/لوگوی_ساها.png")
                        : duc.contractFlights[k].airlineId == 410
                        ? require("@/assets/image/لوگوی_فلای‌پرشی.png")
                        : duc.contractFlights[k].airlineId == 515
                        ? require("@/assets/image/لوگوی_کاسپین.png")
                        : duc.contractFlights[k].airlineId == 7
                        ? require("@/assets/image/لوگوی_سپهران.png")
                        : duc.contractFlights[k].airlineId == 212
                        ? require("@/assets/image/لوگوی_ایر1.png")
                        : duc.contractFlights[k].airlineId == 802
                        ? require("@/assets/image/لوگوی_چابهار.png")
                        : duc.contractFlights[k].airlineId == 956
                        ? require("@/assets/image/لوگوماهان.jpg")
                        : duc.contractFlights[k].airlineId == 512
                        ? require("@/assets/image/لوگوایران‌ایر.jpg")
                        : duc.contractFlights[k].airlineId == "PA"
                        ? require("@/assets/image/لوگوی_پارس ایر.png")
                        : duc.contractFlights[k].airlineId == "PY"
                        ? require("@/assets/image/لوگوی_پویاایر.png")
                        : duc.contractFlights[k].airlineId == 256
                        ? require("@/assets/image/لوگوی_ایرتور.png")
                        : duc.contractFlights[k].airlineId == 218
                        ? require("@/assets/image/لوگوی_آساجت.png")
                        : "",
                    description: duc.contractFlights[k].description,
                    price:
                      k == 0
                        ? duc.contractPassengers[j].price
                        : duc.contractPassengers[j].price2,
                    pnr:
                      k == 0
                        ? duc.contractPassengers[j].goTicketPNR
                        : duc.contractPassengers[j].retTicketPNR,
                    ticketUrl:
                      k == 0
                        ? duc.contractPassengers[j].goTicketUrl
                        : duc.contractPassengers[j].retTicketUrl,
                    loadingCancellButton: false,
                    index: index,
                    typeGoing: k == 0 ? "go" : "return",
                  });
                  index = index + 1;
                }
              }
              documents[i].allFarePrice = price;
              documents[i].dayname = day;
              documents[i].passengers = passengers;
              documentsArray.push(documents[i]);
            }
          }
          self.documents = documentsArray;
        });
    },
    exit() {
      localStorage.removeItem("Client-Token");
      localStorage.removeItem("fName");
      localStorage.removeItem("ipAddress");
      localStorage.removeItem("isLoginAhuan");
      localStorage.removeItem("lName");
      localStorage.removeItem("user-name");
      localStorage.removeItem("phone-number-ahuan");
      localStorage.removeItem("credit");
      this.$router.push({
        path: "/",
      });
      this.$emit("logOut");
    },
  },
  mounted() {
    if (localStorage.getItem("Client-Token")) {
      this.checkIsLoggedIn();
    } else {
      this.exit();
    }
    // if (this.$route.query.return) {
    //   console.log("has query");
    // } else {
    //   console.log("has not query");
    // }
  },
  // "C:\Program Files (x86)\Google\Chrome\Application\Chrome.exe" --disable-web-security  --user-data-dir=~/chromeTempRepo
  // Db2@!3r5gf#2dc92d
};
</script>