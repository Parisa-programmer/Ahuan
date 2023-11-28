<template class="">
  <div class="">
    <v-row
      ref="nextPage"
      class="widthAll heightAll d-flex fixed justify-center"
      style="
        top: 0;
        right: 0;
        background: #f8f8f8;
        overflow: scroll;
        z-index: 22;
      "
    >
      <v-form ref="nextPageForm" lazy-validation>
        <div class="indexDiv my-4">
          <v-row justify="center" align="center">
            <v-card class="pa-2" style="margin-top: 110px">
              <div class="next-page-ticket">
                <v-row class="my-4">
                  <v-col cols="3" class="hideOver">
                    <v-row justify="center" align="center" class="heightAll">
                      <v-icon color="#1abc9c">mdi-check-circle-outline</v-icon>
                      <span
                        class="body-2 d-none d-md-inline-block text-center"
                        style="font-family: Byekan !important; color: #1abc9c"
                        >رزرو پرواز</span
                      >
                    </v-row>
                  </v-col>
                  <v-col cols="3" class="hideOver">
                    <v-row justify="center" align="center" class="heightAll">
                      <v-icon color="#1abc9c" class="d-block d-md-inline-block"
                        >mdi-account</v-icon
                      >
                      <span
                        class="body-2 d-none d-md-inline-block text-center"
                        style="font-family: Byekan !important; color: #1abc9c"
                        >تکمیل اطلاعات</span
                      >
                    </v-row>
                  </v-col>
                  <v-col cols="3" class="hideOver">
                    <v-row justify="center" align="center" class="heightAll">
                      <v-icon
                        :color="bookStep <= 1 ? 'grey darken-1' : '#1abc9c'"
                        >mdi-account-check</v-icon
                      >
                      <span
                        class="body-2 d-none d-md-inline-block text-center"
                        style="font-family: Byekan !important"
                        :style="{
                          color: bookStep <= 1 ? '#757575' : '#1abc9c',
                        }"
                        >تائید اطلاعات</span
                      >
                    </v-row>
                  </v-col>
                  <v-col cols="3" class="hideOver">
                    <v-row justify="center" align="center" class="heightAll">
                      <v-icon
                        :color="bookStep <= 2 ? 'grey darken-1' : '#1abc9c'"
                        >mdi-credit-card-outline</v-icon
                      >
                      <span
                        class="body-2 d-none d-md-inline-block text-center"
                        style="font-family: Byekan !important"
                        :style="{
                          color: bookStep <= 2 ? '#757575' : '#1abc9c',
                        }"
                        >پرداخت و دریافت بلیط</span
                      >
                    </v-row>
                  </v-col>
                </v-row>
                <v-row class="my-2 px-6">
                  <v-progress-linear
                    reverse
                    background-color="grey lighten-4"
                    class="rounded-lg"
                    :value="
                      bookStep == 1
                        ? 50
                        : bookStep == 2
                        ? 75
                        : bookStep == 3
                        ? 100
                        : 100
                    "
                  ></v-progress-linear>
                </v-row>
              </div>
            </v-card>
          </v-row>
          <v-row
            justify="center"
            v-if="bookStep != 3 && bookStep != 6"
            class="mt-sm-6"
          >
            <h5
              class="d-block text-right widthAll mt-6 mb-2"
              style="width: 875px"
            >
              {{
                tickets.length > 1
                  ? "پروازهای انتخابی شما"
                  : "پرواز انتخابی شما"
              }}
            </h5>
            <div style="width: 875px">
              <ticket-card
                :Passenger="Passenger2 ? Passenger2 : Passenger"
                :isNextPage="true"
                :chooseStep="bookStep"
                :tickets="choosedTicket"
                @changeTicket="changeTicket($event)"
                @getAllprice="getAllprice($event)"
              />
            </div>
          </v-row>
          <v-row justify="center" v-if="bookStep == 1">
            <v-card
              outlined
              class="mt-6"
              style="width: 875px"
              v-for="(user, i) in users"
              :key="i"
            >
              <v-row align="center">
                <span class="d-none">{{ (user.id = i) }}</span>
                <h5 class="ma-3">
                  {{
                    users.length == 1
                      ? "مشخصات مسافر"
                      : "مشخصات مسافر " + (i + 1)
                  }}
                </h5>
                <v-spacer></v-spacer>
                <v-btn text color="red" class="ml-3" @click="loginDialog = true"
                  >+ اضافه کردن مسافر از لیست مسافران</v-btn
                >
              </v-row>
              <v-divider></v-divider>
              <v-row class="ticketForm">
                <v-col cols="12" sm="6" md="4" class="px-4 py-2">
                  <label for="" class="mr-4">نام(لاتین)</label>
                  <v-text-field
                    filled
                    clsss="grey"
                    :rules="nameRules"
                    v-model="user.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-4 py-2">
                  <label for="" class="mr-4">نام خانوادگی(لاتین)</label>
                  <v-text-field
                    filled
                    clsss="grey"
                    :rules="familyRules"
                    v-model="user.family"
                    @keydown.tab.prevent="focusAutocomplete('nationality')"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                  class="px-4 px-lg-4 px-md-6 py-2"
                >
                  <label for="" class="mr-2">ملیت</label>
                  <v-select
                    ref="nationality"
                    :rules="emptyRules"
                    color="white"
                    class="font-small-xs"
                    :items="nationalities"
                    v-model="user.nationality"
                  ></v-select>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                  class="px-3 px-lg-4 py-2"
                  v-if="user.nationality == 'ایرانی'"
                >
                  <label for="" class="mr-4">کد ملی</label>
                  <v-text-field
                    filled
                    clsss="grey"
                    pattern="\d*"
                    type="number"
                    v-model="user.nationalityCode"
                    :rules="nationalNumberRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-4 py-2" v-else>
                  <label for="" class="mr-4">شماره پاسپورت</label>
                  <v-text-field
                    filled
                    clsss="grey"
                    v-model="user.nationalityCode"
                    :rules="emptyRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-3 py-2">
                  <label for="" class="mr-2">جنسیت</label>
                  <v-select
                    color="white"
                    class="font-small-xs"
                    :items="genders"
                    v-model="user.gender"
                    :rules="emptyRules"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-2 px-lg-3 py-2">
                  <label for="" class="mr-4">تاریخ تولد</label>
                  <v-row class="relative">
                    <v-col class="px-1">
                      <v-select
                        color="white"
                        placeholder="روز"
                        @change="checkAges()"
                        class="font-small-xs user-date"
                        :items="dateDays"
                        v-model="user.birthdayDay"
                        :rules="emptyRules"
                        hide-details
                      ></v-select>
                    </v-col>
                    <v-col class="px-1">
                      <v-select
                        color="white"
                        placeholder="ماه"
                        class="font-small-xs"
                        @change="checkAges()"
                        :items="dateMonthsPersian"
                        v-model="user.birthdayMonth"
                        :rules="emptyRules"
                        hide-details
                      ></v-select>
                    </v-col>
                    <v-col class="px-1">
                      <v-select
                        color="white"
                        placeholder="سال"
                        @change="checkAges()"
                        class="font-small-xs"
                        :items="dateYears"
                        v-model="user.birthdayYear"
                        :rules="emptyRules"
                        hide-details
                      ></v-select>
                    </v-col>
                    <span
                      v-if="
                        dateError &&
                        (!user.birthdayYear ||
                          !user.birthdayMonth ||
                          !user.birthdayDay)
                      "
                      class="caption red--text widthAll"
                      style="font-family: Byekan !important"
                      >تاریخ تولد را مشخص کنید.</span
                    >
                  </v-row>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                  class="px-2 px-lg-3 py-2"
                  v-if="user.nationality && user.nationality != 'ایرانی'"
                >
                  <label for="" class="mr-4">تاریخ انقضا پاسپورت</label>
                  <v-row>
                    <v-col class="px-1">
                      <v-select
                        color="white"
                        placeholder="روز"
                        class="font-small-xs"
                        :items="dateDays"
                        v-model="user.expirePassDay"
                        :rules="emptyRules"
                        hide-details
                      ></v-select>
                    </v-col>
                    <v-col class="px-1">
                      <v-select
                        color="white"
                        placeholder="ماه"
                        class="font-small-xs"
                        :items="dateMonths"
                        v-model="user.expirePassMonth"
                        :rules="emptyRules"
                        hide-details
                      ></v-select>
                    </v-col>
                    <v-col class="px-1">
                      <v-select
                        color="white"
                        placeholder="سال"
                        class="font-small-xs"
                        :items="dateYearsPass"
                        v-model="user.expirePassYear"
                        :rules="emptyRules"
                        hide-details
                      ></v-select>
                    </v-col>
                    <span
                      v-if="
                        dateError &&
                        (!user.expirePassYear ||
                          !user.expirePassMonth ||
                          !user.expirePassDay)
                      "
                      class="caption red--text widthAll"
                      style="font-family: Byekan !important"
                      >تاریخ انقضا را مشخص کنید.</span
                    >
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-row>
          <v-row
            class="hide-header-data-tabel"
            justify="center"
            v-if="bookStep == 2"
          >
            <div v-if="persianUsers.length" style="width: 875px">
              <h5 class="widthAll mt-6">
                {{
                  persianUsers.length == 1 ? "مشخصات مسافر" : "مشخصات مسافران "
                }}
                {{ otherUsers.length != 0 ? "(ایرانی)" : "" }}
              </h5>
            </div>
            <v-card
              outlined
              v-if="persianUsers.length"
              class="mt-2"
              style="width: 875px"
            >
              <v-data-table
                :headers="persianTebelHeaders"
                :items="persianUsers"
                hide-default-footer
              >
                <template v-slot:[`item.birthday`]="{ item }">
                  <span
                    >{{ item.birthdayDay }} / {{ item.birthdayMonth }} /
                    {{ item.birthdayYear }}</span
                  >
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                  <v-btn
                    outlined
                    color="red"
                    dark
                    @click="editUserInfo(item, 'user')"
                    >ویرایش</v-btn
                  >
                </template>
              </v-data-table>
            </v-card>
            <div v-if="otherUsers.length" style="width: 875px">
              <h5 class="widthAll mt-6">
                {{
                  otherUsers.length == 1 ? "مشخصات مسافر" : "مشخصات مسافران "
                }}
                {{ persianUsers.length != 0 ? "(غیر ایرانی)" : "" }}
              </h5>
            </div>
            <v-card
              outlined
              v-if="otherUsers.length"
              class="mt-2"
              style="width: 875px"
            >
              <v-data-table
                hide-default-footer
                :headers="otherTebelHeaders"
                :items="otherUsers"
              >
                <template v-slot:[`item.expiredate`]="{ item }">
                  <span
                    >{{ item.expirePassYear }}/{{ item.expirePassMonth }}/{{
                      item.expirePassDay
                    }}</span
                  >
                </template>
                <template v-slot:[`item.birthday`]="{ item }">
                  <span
                    >{{ item.birthdayYear }}/{{ item.birthdayMonth }}/{{
                      item.birthdayDay
                    }}</span
                  >
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                  <v-btn
                    outlined
                    color="red"
                    @click="editUserInfo(item, 'user')"
                    >ویرایش</v-btn
                  >
                </template>
              </v-data-table>
            </v-card>
          </v-row>
          <v-row justify="center" v-if="bookStep == 2">
            <div style="width: 875px">
              <h5 class="mt-6 widthAll">اطلاعات تماس</h5>
            </div>
            <v-card outlined class="mt-1" style="width: 875px">
              <v-data-table
                hide-default-footer
                :headers="contactInfoHeaders"
                :items="contactInfo"
              >
                <template v-slot:[`item.actions`]="{ item }">
                  <v-btn
                    outlined
                    color="red"
                    @click="editUserInfo(item, 'contact')"
                    >ویرایش</v-btn
                  >
                </template>
              </v-data-table>
            </v-card>
          </v-row>
          <v-row justify="center" v-if="bookStep == 1">
            <v-card outlined class="mt-6" style="width: 875px">
              <v-row align="center">
                <h5 class="ma-3">اطلاعات تماس</h5>
              </v-row>
              <v-divider></v-divider>
              <v-row class="ticketForm">
                <v-col cols="12" sm="6" class="px-md-12 py-2">
                  <label for="" class="mr-1">شماره موبایل</label>
                  <v-text-field
                    filled
                    clsss="grey"
                    type="number"
                    pattern="\d*"
                    v-model="contactInfo[0].phone"
                    :rules="phoneRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="px-md-12 py-2">
                  <label for="" class="mr-1">ایمیل</label>
                  <v-text-field
                    filled
                    clsss="grey"
                    :rules="emailRules"
                    v-model="contactInfo[0].email"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card>
          </v-row>
          <v-row justify="center" v-if="bookStep == 1">
            <v-card outlined class="my-6 pa-2" style="width: 875px">
              <v-row align="center">
                <span
                  class="body-2 mr-1 text-justify"
                  style="font-family: Byekan !important"
                >
                  <v-icon color="red">mdi-alert-circle-outline</v-icon>
                  در صورت عدم ثبت نام و ادامه فرایند خرید ،شما بصورت خودکار ثبت
                  نام خواهید شد.نام کاربری و پسورد شماره موبایل شما خواهد بود
                </span>
              </v-row>
              <v-row justify="end">
                <v-btn
                  :loading="loadingReserve"
                  color="red"
                  dark
                  class="my-2 ml-4"
                  @click="changeBookStep(2)"
                  >ادامه فرایند خرید</v-btn
                >
              </v-row>
            </v-card>
          </v-row>
          <v-row justify="center" v-if="bookStep == 6">
            <div>
              <form
                ref="formshaparak"
                @submit.prevent="submit"
                name="PostForm"
                method="POST"
                action="https://ikc.shaparak.ir/iuiv3/IPG/Index"
              >
                <input
                  name="tokenIdentity"
                  type="text"
                  style="opacity: 0"
                  :value="formshaparak.bankToken"
                />
              </form>
            </div>
            <h1 class="mt-12 pt-12 widthAll text-center">
              در حال اتصال به درگاه پرداخت هستید . . .
            </h1>
          </v-row>
          <v-row justify="center" v-if="bookStep == 3" class="mt-12 mt-sm-6">
            <div
              class="indexDiv rounded-xl mb-6 pa-4 mt-12 mt-sm-6"
              style="max-width: 875px; border: 5px solid #9ee9da"
            >
              <v-row justify="center" class="px-12">
                <img
                  src="@/assets/image/check-mark.png"
                  class="done-icon"
                  alt=""
                />
              </v-row>
              <v-row justify="center" class="mt-12 mb-4">
                <h1 style="color: #00a182" class="font-small-xs">
                  عملیات رزرو با موفقیت انجام شد!
                </h1>
              </v-row>

              <v-row justify="center" class="mb-12">
                <v-btn
                  outlined
                  color="red"
                  @click="clickedDownload = !clickedDownload"
                  >جهت دانلود بلیط ها کلیک کنید</v-btn
                >
              </v-row>
            </div>
            <ticket-print-component
              :clickedDownload="clickedDownload"
              :params="params"
            />
          </v-row>
          <v-dialog
            v-model="editTicketInfoDialog"
            width="700px"
            style="z-index: 999998"
          >
            <v-card class="pa-4" v-if="ModalUserType">
              <v-row>
                <v-icon class="d-inline-block ml-1" color="red">mdi-pen</v-icon>
                <h4 class="d-inline-block red--text">
                  ویرایش مسافر {{ editUser.name }} {{ editUser.family }}
                </h4>
                <v-spacer></v-spacer>
                <v-icon @click="editTicketInfoDialog = false" color="red"
                  >mdi-close</v-icon
                >
              </v-row>
              <v-divider class="my-2"></v-divider>
              <v-row class="ticketForm">
                <v-col cols="12" sm="6" md="4" class="px-4 py-2">
                  <label for="" class="mr-4">نام(لاتین)</label>
                  <v-text-field
                    filled
                    clsss="grey"
                    :rules="nameRules"
                    v-model="editUser.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-4 py-2">
                  <label for="" class="mr-4">نام خانوادگی(لاتین)</label>
                  <v-text-field
                    filled
                    clsss="grey"
                    :rules="familyRules"
                    v-model="editUser.family"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-6 px-md-2 py-2">
                  <label for="" class="mr-2">ملیت</label>
                  <v-select
                    :rules="emptyRules"
                    color="white"
                    class="font-small-xs"
                    v-model="editUser.nationality"
                    :items="nationalities"
                  ></v-select>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                  class="px-4 py-2"
                  v-if="editUser.nationality == 'ایرانی'"
                >
                  <label for="" class="mr-4">کد ملی</label>
                  <v-text-field
                    filled
                    clsss="grey"
                    pattern="\d*"
                    type="number"
                    :rules="nationalNumberRules"
                    v-model="editUser.nationalityCode"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-4 py-2" v-else>
                  <label for="" class="mr-4">شماره پاسپورت</label>
                  <v-text-field
                    filled
                    clsss="grey"
                    v-model="editUser.nationalityCode"
                    :rules="emptyRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-3 py-2">
                  <label for="" class="mr-2">جنسیت</label>
                  <v-select
                    color="white"
                    class="font-small-xs"
                    :items="genders"
                    v-model="editUser.gender"
                    :rules="emptyRules"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="px-2 px-md-0 py-2">
                  <label for="" class="mr-4">تاریخ تولد</label>
                  <v-row>
                    <v-col class="px-1">
                      <v-select
                        color="white"
                        placeholder="روز"
                        class="font-small-xs user-date"
                        v-model="editUser.birthdayDay"
                        :items="dateDays"
                        :rules="emptyRules"
                      ></v-select>
                    </v-col>
                    <v-col class="px-1">
                      <v-select
                        color="white"
                        placeholder="ماه"
                        class="font-small-xs"
                        v-model="editUser.birthdayMonth"
                        :items="dateMonthsPersian"
                        :rules="emptyRules"
                      ></v-select>
                    </v-col>
                    <v-col class="px-1">
                      <v-select
                        color="white"
                        placeholder="سال"
                        class="font-small-xs"
                        v-model="editUser.birthdayYear"
                        :items="dateYears"
                        :rules="emptyRules"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                  class="px-2 px-md-3 py-2"
                  v-if="editUser.nationality != 'ایرانی'"
                >
                  <label for="" class="mr-4">تاریخ انقضا پاسپورت</label>
                  <v-row>
                    <v-col class="px-1">
                      <v-select
                        color="white"
                        placeholder="روز"
                        class="font-small-xs"
                        :items="dateDays"
                        v-model="editUser.expirePassDay"
                        :rules="emptyRules"
                        hide-details
                      ></v-select>
                    </v-col>
                    <v-col class="px-1">
                      <v-select
                        color="white"
                        placeholder="ماه"
                        class="font-small-xs"
                        :items="dateMonths"
                        v-model="editUser.expirePassMonth"
                        :rules="emptyRules"
                        hide-details
                      ></v-select>
                    </v-col>
                    <v-col class="px-1">
                      <v-select
                        color="white"
                        placeholder="سال"
                        class="font-small-xs"
                        :items="dateYearsPass"
                        v-model="editUser.expirePassYear"
                        :rules="emptyRules"
                        hide-details
                      ></v-select>
                    </v-col>
                    <span
                      v-if="
                        !editUser.expirePassYear ||
                        !editUser.expirePassMonth ||
                        !editUser.expirePassDay
                      "
                      class="caption red--text widthAll"
                      style="font-family: Byekan !important"
                      >تاریخ انقضا را مشخص کنید.</span
                    >
                  </v-row>
                </v-col>
              </v-row>
              <v-row justify="end">
                <v-btn
                  dark
                  color="red darken-2"
                  outlined
                  class="px-12 py-4 my-2 ml-4"
                  @click="confirmEditUser('user')"
                  >اعمال تغییرات
                </v-btn>
              </v-row>
            </v-card>
            <v-card class="pa-4" v-else>
              <v-row>
                <v-icon class="d-inline-block ml-1" color="red">mdi-pen</v-icon>
                <h4 class="d-inline-block red--text">ویرایش اطلاعات تماس</h4>
                <v-spacer></v-spacer>
                <v-icon @click="editTicketInfoDialog = false" color="red"
                  >mdi-close</v-icon
                >
              </v-row>
              <v-divider class="my-2"></v-divider>
              <v-row class="ticketForm">
                <v-col cols="12" sm="6" class="px-4 px-md-12 py-2">
                  <label for="" class="mr-1">شماره موبایل</label>
                  <v-text-field
                    filled
                    clsss="grey"
                    pattern="\d*"
                    type="number"
                    v-model="editContact.phone"
                    :rules="phoneRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="px-4 px-md-12 py-2">
                  <label for="" class="mr-1">ایمیل</label>
                  <v-text-field
                    filled
                    clsss="grey"
                    :rules="emailRules"
                    v-model="editContact.email"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="end">
                <v-btn
                  dark
                  color="red darken-2"
                  outlined
                  class="px-12 py-4 my-2 ml-4"
                  @click="confirmEditUser('contact')"
                  >ذخیره</v-btn
                >
              </v-row>
            </v-card>
          </v-dialog>
          <div v-if="bookStep == 2">
            <v-row justify="center">
              <div class="indexDiv">
                <v-row justify="center">
                  <v-card
                    outlined
                    class="mt-6 mt-md-9 pa-4"
                    style="width: 875px"
                  >
                    <v-row align="center">
                      <span class="mt-sm-4 mt-md-0">
                        در صورت داشتن کد تخفیف آن را وارد نمایید
                      </span>
                      <v-spacer></v-spacer>
                      <div
                        class="relative grey lighten-3 rounded-lg smallInputForm mt-6 mt-md-0"
                      >
                        <v-text-field
                          placeholder="کد تخفیف"
                          v-model="offCode"
                          class="d-inline-block"
                          :loading="offCodeLoading"
                          :class="
                            offCodeIsTrue == true
                              ? 'codeCheckTrue'
                              : offCodeIsTrue == false && 'codeCheckFalse'
                          "
                        ></v-text-field>
                        <v-btn
                          :disabled="offCodeDisabledButton"
                          color="red darken-2"
                          class="px-0 px-sm-9 py-6 heightAll"
                          dark
                          @click="checkCode"
                          >اعمال کد</v-btn
                        >
                        <span
                          v-if="
                            offCode.length != 0 && offCodeIsTrue != undefined
                          "
                          class="absolute caption"
                          :class="
                            offCodeIsTrue == true
                              ? 'green--text'
                              : offCodeIsTrue == false && 'red--text'
                          "
                          style="
                            bottom: -22px;
                            right: 0;
                            font-family: Byekan !important;
                          "
                        >
                          {{
                            offCodeIsTrue == true
                              ? "کد تخفیف اعمال شد!"
                              : "کد وارد شده صحیح نیست!"
                          }}
                        </span>
                      </div>
                    </v-row>
                    <h5 class="red--text text--darken-2 mt-6 mt-md-0">
                      لطفا توجه داشته باشید در صورت تائید اطلاعات،امکان اصلاح
                      وجود ندارد!
                    </h5>
                    <v-row justify="space-between">
                      <v-form ref="acceptRulls">
                        <v-checkbox
                          v-model="acceptRulls"
                          label="قوانین و مقررات خرید بلیط و سایت را مطالعه کرده و میپذیرم"
                          color="red darken-2"
                          class="mt-2"
                          off-icon="mdi-circle-outline"
                          on-icon="mdi-check-circle-outline"
                          hide-details
                          :rules="emptyRules"
                        ></v-checkbox>
                      </v-form>
                      <div
                        v-if="
                          choosedTicket[0].reserveType == 'Chr724' && !Captcha2
                        "
                        class="grey lighten-3 rounded-lg smallInputForm mt-6 mt-md-0"
                      >
                        <v-row align="center">
                          <div>
                            <v-text-field
                              placeholder="کد تائید هویت"
                              v-model="captchaCode1"
                              class="d-inline-block"
                              style="width: 200px"
                            ></v-text-field>
                          </div>

                          <div class="relative d-inline-block">
                            <v-icon
                              @click="reservchr724(2)"
                              size="32"
                              class="absolute"
                              style="right: -30px; top: 19px"
                              >mdi-refresh</v-icon
                            >
                            <img
                              class="heightAll mt-2"
                              :src="Captcha1"
                              alt=""
                            />
                          </div>
                        </v-row>
                      </div>
                      <div
                        v-if="
                          choosedTicket[1] &&
                          choosedTicket[1].reserveType == 'Chr724' &&
                          !Captcha1
                        "
                        class="grey lighten-3 rounded-lg smallInputForm mt-6 mt-md-0"
                      >
                        <v-row align="center">
                          <div>
                            <v-text-field
                              placeholder="کد تائید هویت"
                              v-model="captchaCode2"
                              class="d-inline-block"
                              style="width: 200px"
                            ></v-text-field>
                          </div>

                          <div class="relative d-inline-block">
                            <v-icon
                              @click="reservchr724(2, 1)"
                              size="32"
                              class="absolute"
                              style="right: -30px; top: 19px"
                              >mdi-refresh</v-icon
                            >
                            <img
                              class="heightAll mt-2"
                              :src="Captcha2"
                              alt=""
                            />
                          </div>
                        </v-row>
                      </div>
                      <div
                        v-if="
                          choosedTicket[0].reserveType == 'Chr724' &&
                          choosedTicket[1] &&
                          choosedTicket[1].reserveType == 'Chr724'
                        "
                        class="grey lighten-3 rounded-lg smallInputForm mt-6 mt-md-0"
                      >
                        <v-row align="center" justify="center">
                          <div>
                            <v-text-field
                              placeholder="کد تائید هویت"
                              v-model="captchaCode1"
                              class="d-inline-block"
                              style="width: 200px"
                            ></v-text-field>
                          </div>

                          <div class="relative d-inline-block">
                            <v-icon
                              @click="
                                reservchr724(2);
                                reservchr724(2, 1);
                              "
                              size="32"
                              class="absolute"
                              style="right: -30px; top: 19px"
                              >mdi-refresh</v-icon
                            >
                            <div
                              class="d-inline-block hideOver"
                              style="width: 130px; margin-left: -23px"
                            >
                              <img
                                class="heightAll mt-2"
                                :src="Captcha2"
                                alt=""
                              />
                            </div>
                            <div class="d-inline-block hideOver">
                              <img
                                class="heightAll mt-2"
                                :src="Captcha1"
                                alt=""
                              />
                            </div>
                          </div>
                        </v-row>
                      </div>
                    </v-row>
                  </v-card>
                </v-row>
              </div>
            </v-row>
            <v-row justify="center" class="mt-8 mb-12">
              <div class="indexDiv" style="max-width: 875px">
                <v-row align="end">
                  <v-btn
                    class="red--text red lighten-4"
                    @click="
                      scrollTopNextPage();
                      bookStep = 1;
                      dateError = false;
                    "
                  >
                    بازگشت به مرحله قبلی</v-btn
                  >
                  <v-spacer></v-spacer>
                  <div
                    class="relative"
                    :class="offCodeIsTrue && 'offCodeIsTrue'"
                  >
                    <v-row justify="center" class="mb-1" align="center">
                      <h3 :class="offCodeIsTrue && 'red--text'">
                        {{
                          choosedTicket[1]
                            ? separatePrice(
                                parseInt(
                                  choosedTicket[0].allprice.replace(/,/g, "")
                                ) +
                                  parseInt(
                                    choosedTicket[1].allprice.replace(/,/g, "")
                                  )
                              )
                            : choosedTicket[0].allprice
                        }}
                      </h3>
                      <span
                        class="caption mr-2 font-weight-bold"
                        :class="offCodeIsTrue && 'red--text'"
                        style="font-family: Byekan !important"
                        >تومان</span
                      >
                    </v-row>
                    <v-row
                      v-if="offCodeIsTrue"
                      class="mb-3"
                      justify="center"
                      align="center"
                    >
                      <h3>220.000.000</h3>
                      <span
                        class="caption mr-2 font-weight-bold"
                        style="font-family: Byekan !important"
                        >ریال</span
                      >
                    </v-row>
                    <v-btn
                      :loading="loadingReserve"
                      class="green darken-2 px-9"
                      dark
                      @click="changeBookStep(3)"
                    >
                      تائید و پرداخت</v-btn
                    >
                  </div>
                </v-row>
              </div>
            </v-row>
          </div>
        </div>
      </v-form>
    </v-row>
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

<script>
import "@/assets/css/main.css";
import axios from "axios";
axios.defaults.headers.common["Client-Token"] = "Ahuan-Wapi?123";
import TicketCard from "./TicketCard.vue";
import TicketPrintComponent from "./TicketPrintComponent.vue";

const $ = require("jquery");

export default {
  data() {
    return {
      captchaCode1: "",
      captchaIdReq1: "",
      captchaCode2: "",
      captchaIdReq2: "",
      id_faktor1: "",
      showCharterPassengers1: [],
      formshaparak: {
        bankToken: "",
      },
      successAge: false,
      loadingReserve: false,
      clickedDownload: false,
      PNR1: "",
      PNR2: "",
      showAlert: false,
      alertType: "",
      alertText: "",
      bookStep: 1,
      users: [],
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
      nationalities: ["ایرانی", "غیر ایرانی"],
      nationalNumberRules: [
        (v) => !!v || "پر کردن این فیلد اجباریست.",
        (v) => (!!v && v.length == 10) || "کد ملی صحیح نیست.",
      ],
      emptyRules: [(v) => !!v || "پر کردن این فیلد اجباریست."],
      genders: ["خانم", "آقا"],
      dateDays: [],
      dateYears: [],
      dateYearsPass: [],
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
      dateError: false,
      dateMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
      emailRules: [(v) => /.+@.+\..+/.test(v) || "ایمیل نادرست میباشد."],
      phoneRules: [
        (v) => !!v || "پر کردن فیلد تلفن اجباریست.",
        (v) => v.length == 11 || "شماره تلفن صحیح نیست.",
      ],
      persianUsers: [],
      otherUsers: [],
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
        { text: "شماره پاسپورت", value: "nationalityCode" },
        { text: "انقضا پاسپورت", value: "expiredate", align: "center" },
        { text: "عملیات", value: "actions", sortable: false, align: "center" },
      ],
      editTicketInfoDialog: false,
      editUser: {},
      ModalUserType: false,
      editContact: {},
      offCodeLoading: false,
      offCodeIsTrue: undefined,
      offCode: "",
      acceptRulls: false,
      offCodeDisabledButton: false,
      allPrice: 0,
      endUser: [],
      Passenger2: undefined,
      params: [],
      Captcha1: null,
      Captcha2: null,
    };
  },
  name: "ticket-dialog-component",
  components: {
    TicketCard,
    TicketPrintComponent,
  },
  props: {
    tickets: {
      type: Array,
      require: true,
    },
    choosedTicket: {
      type: Array,
    },
    Passenger: {
      defult: {},
    },
    charterToken: {
      type: String,
    },
  },
  watch: {
    choosedTicket() {
      //
    },
  },
  computed: {},
  methods: {
    focusAutocomplete(rftype) {
      let reftype = rftype;
      switch (reftype) {
        case "nationality":
          this.$refs.nationality.focus();
          break;
        default:
          break;
      }
    },
    validateBookStep() {
      if (this.$refs.nextPageForm.validate()) {
        return true;
      } else {
        return false;
      }
    },
    checkAges() {
      return new Promise((resolve) => {
        this.endUser = [];
        let findUndefined = false;
        let users = this.users;
        for (let i = 0; i < users.length; i++) {
          if (
            !users[i].birthdayYear ||
            !users[i].birthdayMonth ||
            !users[i].birthdayDay
          ) {
            findUndefined = true;
          }
          if (findUndefined == false) {
            let gregorianBirthdayDate = this.jalali_to_gregorian(
              users[i].birthdayYear,
              users[i].birthdayMonth,
              users[i].birthdayDay
            );
            gregorianBirthdayDate =
              (gregorianBirthdayDate[1].toString().length == 1
                ? "0" + gregorianBirthdayDate[1]
                : gregorianBirthdayDate[1]) +
              "/" +
              (gregorianBirthdayDate[2].toString().length == 1
                ? "0" + gregorianBirthdayDate[2]
                : gregorianBirthdayDate[2]) +
              "/" +
              gregorianBirthdayDate[0];
            let age = this.getAge(gregorianBirthdayDate);
            let ageType =
              age <= 2
                ? "baby"
                : age > 2 && age <= 12
                ? "child"
                : age > 12
                ? "old"
                : undefined;
            this.endUser.push({
              ageType: ageType,
            });
          }
        }
        if (findUndefined == false) {
          this.Passenger2 = [
            {
              peaple: this.endUser.filter((x) => x.ageType == "old").length,
              child: this.endUser.filter((x) => x.ageType == "child").length,
              baby: this.endUser.filter((x) => x.ageType == "baby").length,
            },
          ];
          let findOpacity = false;
          if (this.Passenger[0].peaple > 0) {
            if (this.Passenger2[0].peaple != this.Passenger[0].peaple) {
              findOpacity = true;
            }
          }

          if (this.Passenger[0].child > 0) {
            if (this.Passenger2[0].child != this.Passenger[0].child) {
              findOpacity = true;
            }
          }

          if (this.Passenger[0].baby > 0) {
            if (this.Passenger2[0].baby != this.Passenger[0].baby) {
              findOpacity = true;
            }
          }
          if (findOpacity == true) {
            this.successAge = false;
            this.alertType = "warning";
            this.alertText =
              "سن افراد انتخاب شده با اطلاعات وارد شده مغایرت داردلطفا اطلاعات سنی مسافر را تصحیح فرمائید.";
            this.showAlert = true;
            setTimeout(() => {
              this.showAlert = false;
            }, 10000);
            resolve(false);
          } else {
            this.c = true;
            resolve(true);
          }
          if (this.Passenger2[0].peaple <= 0) {
            //   resolve(true);
            // } else {
            this.alertType = "error";
            this.alertText = "وجود حداقل یک بزرگسال در پرواز الزامیست.";
            this.showAlert = true;
            setTimeout(() => {
              this.showAlert = false;
            }, 3000);
          }
        }
      });
    },
    async changeBookStep(step) {
      let self = this;
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + this.charterToken;
      if (step == 2 && self.validateBookStep()) {
        let successAges = await self.checkAges();
        if (successAges) {
          if (self.choosedTicket[0].reserveType == "Chr724") {
            self.loadingReserve = true;
            let bankprice = 2000000000;
            if (
              self.choosedTicket.length == 2 &&
              self.choosedTicket[1].reserveType == "Chr724"
            ) {
              bankprice =
                parseInt(
                  self.choosedTicket[0].allprice.replace(/,/g, "") * 10
                ) +
                parseInt(self.choosedTicket[1].allprice.replace(/,/g, "") * 10);
            } else {
              bankprice = parseInt(
                self.choosedTicket[0].allprice.replace(/,/g, "") * 10
              );
            }
            axios
              .get("https://panel.ahuantours.com/api/Ch724/GetCharge")
              .then(function (res) {
                if (res.data.data.parent_charge >= bankprice) {
                  self.reservchr724(step);
                } else if (res.data.data.parent_charge < bankprice) {
                  self.alertText = "خطا!لطفا چند دقیقه دیگر مجددا تلاش کنید.";
                  self.alertType = "error";
                  self.showAlert = true;
                  self.loadingReserve = false;
                  setTimeout(() => {
                    self.showAlert = false;
                  }, 5000);
                }
              })
              .catch(function (error) {});
          } else {
            if (
              this.choosedTicket.length == 2 &&
              this.choosedTicket[1].reserveType == "Chr724"
            ) {
              self.loadingReserve = true;
              let bankprice = parseInt(
                self.choosedTicket[1].allprice.replace(/,/g, "") * 10
              );

              axios
                .get("https://panel.ahuantours.com/api/Ch724/GetCharge")
                .then(function (res) {
                  if (res.data.data.parent_charge >= bankprice) {
                    self.reservchr724(step, 1);
                  } else {
                    self.alertText = "خطا!لطفا چند دقیقه دیگر مجددا تلاش کنید.";
                    self.alertType = "error";
                    self.showAlert = true;
                    self.loadingReserve = false;
                    setTimeout(() => {
                      self.showAlert = false;
                    }, 5000);
                  }
                })
                .catch(function (error) {});
            } else {
              var users = this.users;
              this.persianUsers = [];
              this.otherUsers = [];
              this.persianUsers = users.filter(
                (x) => x.nationality == "ایرانی"
              );
              this.otherUsers = users.filter((x) => x.nationality != "ایرانی");
              this.bookStep = step;
              this.dateError = false;
              this.scrollTopNextPage();
            }
          }
        }
      } else if (step == 3 && this.$refs.acceptRulls.validate()) {
        if (localStorage.getItem("lName")) {
          let successAges = await self.checkAges();
          if (successAges) {
            self.loadingReserve = true;
            this.reserveTicket(step);
            this.dateError = false;
          }
        } else {
          self.alertText = "برای رزرو پرواز ابتدا حتما باید وارد سایت شوید!";
          self.alertType = "error";
          self.showAlert = true;
          setTimeout(() => {
            self.showAlert = false;
          }, 5000);
          self.$emit("openLogin");
        }
      } else {
        this.dateError = true;
        this.alertText = "لطفا فیلدهای درخواستی را بدرستی تکمیل فرمایید.";
        this.alertType = "error";
        this.showAlert = true;
        this.scrollTopNextPage();
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }
    },
    scrollTopNextPage() {
      this.$refs.nextPage.scrollTop = 0;
    },
    editUserInfo(item, type) {
      if (type == "user") {
        this.editUser = Object.assign({}, item);
        this.ModalUserType = true;
      } else {
        this.editContact = Object.assign({}, this.contactInfo[0]);
        this.ModalUserType = false;
      }
      this.editTicketInfoDialog = true;
    },
    async confirmEditUser(type) {
      if (this.validateBookStep()) {
        if (type == "user") {
          var index = this.users.findIndex((x) => x.id == this.editUser.id);
          this.users[index] = this.editUser;
          this.changeBookStep(2);
        } else {
          this.contactInfo = [];
          this.contactInfo.push(this.editContact);
        }
        this.editTicketInfoDialog = false;
      } else {
        this.alertText = "لطفا فیلدهای درخواستی را بدرستی تکمیل فرمایید.";
        this.alertType = "error";
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }
    },
    checkCode() {
      this.offCodeLoading = true;
      setTimeout(() => {
        this.offCodeLoading = false;
        if (this.offCode == "1111") {
          this.offCodeIsTrue = true;
          this.offCodeDisabledButton = true;
        } else {
          this.offCodeIsTrue = false;
          this.offCodeDisabledButton = false;
        }
      }, 1000);
    },
    checkPenulty1(paramsReservation) {
      axios
        .post("https://panel.ahuantours.com/api/Ch724/CheckPenalti", {
          id_faktor: paramsReservation.id_faktor,
        })
        .then(function (res) {
          console.log(res);
        })
        .catch(function (error) {});
    },
    reservchr724(step, index) {
      let findNumber = index ? 1 : 0;
      let self = this;
      // self.loadingReserve = true;
      let params = {
        from_flight: self.choosedTicket[findNumber].Origin,
        to_flight: self.choosedTicket[findNumber].Destination,
        date_flight: self.choosedTicket[findNumber].DepartureDateTime,
        time_flight:
          self.choosedTicket[findNumber].ArrivalDateTime.split(" ")[1],
        number_flight: self.choosedTicket[findNumber].number_flight,
        ajency_online_ID: self.choosedTicket[findNumber].ajency_online_ID,
        cabinclass:
          self.choosedTicket[findNumber].className == "-"
            ? ""
            : self.choosedTicket[findNumber].className,
        airline: self.choosedTicket[findNumber].chrAirline,
      };

      axios
        .post("https://panel.ahuantours.com/api/Ch724/GetCaptcha", params)
        .then(function (res) {
          if (findNumber == 0) {
            self.Captcha1 = res.data.data.link_captcha;
            self.captchaIdReq1 = res.data.data.id_request;
            if (
              self.choosedTicket.length == 1 ||
              (self.choosedTicket[1] &&
                self.choosedTicket[1].reserveType != "Chr724")
            ) {
              let users = self.users;
              self.persianUsers = [];
              self.otherUsers = [];
              self.persianUsers = users.filter(
                (x) => x.nationality == "ایرانی"
              );
              self.otherUsers = users.filter((x) => x.nationality != "ایرانی");
              self.bookStep = step;
              self.dateError = false;
              // self.loadingReserve = false;
              self.scrollTopNextPage();
            } else if (
              self.choosedTicket[1] &&
              self.choosedTicket[1].reserveType == "Chr724"
            ) {
              self.reservchr724(step, 1);
            }
            // else if (
            //   self.choosedTicket[1] &&
            //   self.choosedTicket[1].reserveType != "Chr724"
            // ) {
            // self.reserveTicket2(step, "isFirstChrPrice");
            // }
          } else if (findNumber == 1) {
            self.Captcha2 = res.data.data.link_captcha;
            self.captchaIdReq2 = res.data.data.id_request;
            let users = self.users;
            self.persianUsers = [];
            self.otherUsers = [];
            self.persianUsers = users.filter((x) => x.nationality == "ایرانی");
            self.otherUsers = users.filter((x) => x.nationality != "ایرانی");
            self.bookStep = step;
            self.dateError = false;
            // self.loadingReserve = false;
            self.scrollTopNextPage();
          }
          self.loadingReserve = false;
        })
        .catch(function (error) {});
    },
    reserveTicket(step) {
      var self = this;
      if (this.choosedTicket[0].reserveType == "Chr724") {
        if (!this.captchaCode1) {
          self.alertText = "لطفا کد احراز هویت را وارد کنید";
          self.alertType = "error";
          self.showAlert = true;
          setTimeout(() => {
            self.showAlert = false;
          }, 3000);
        } else {
          let infoArray = {
            id_request: self.captchaIdReq1,
            captchcode: self.captchaCode1.substring(0, 4),
            mobile: self.contactInfo[0].phone,
            email: self.contactInfo[0].email,
            passengers: [],
          };
          for (let i = 0; i < this.users.length; i++) {
            let gregorianBirthdayDate = self.jalali_to_gregorian(
              self.users[i].birthdayYear,
              self.users[i].birthdayMonth,
              self.users[i].birthdayDay
            );
            let gregorianBirthdayDate2 =
              (gregorianBirthdayDate[1].toString().length == 1
                ? "0" + gregorianBirthdayDate[1]
                : gregorianBirthdayDate[1]) +
              "/" +
              (gregorianBirthdayDate[2].toString().length == 1
                ? "0" + gregorianBirthdayDate[2]
                : gregorianBirthdayDate[2]) +
              "/" +
              gregorianBirthdayDate[0];

            infoArray.passengers.push({
              passengerType:
                self.getAge(gregorianBirthdayDate2) < 2
                  ? "INF"
                  : self.getAge(gregorianBirthdayDate2) < 12
                  ? "CHD"
                  : "ADL",
              fnamefa:
                self.users[i].name.replace(/\s/g, "") +
                (self.users[i].gender == "خانم" ? "MS" : "MR"),
              lnamefa:
                self.users[i].family.replace(/\s/g, "") +
                (self.users[i].gender == "خانم" ? "MS" : "MR"),
              fnameen:
                self.users[i].name.replace(/\s/g, "") +
                (self.users[i].gender == "خانم" ? "MS" : "MR"),
              lnameen:
                self.users[i].family.replace(/\s/g, "") +
                (self.users[i].gender == "خانم" ? "MS" : "MR"),
              gender: self.users[i].gender == "خانم" ? 2 : 1,
              nationality: this.users[i].nationality == "ایرانی" ? 1 : 0,
              passengerCode: self.users[i].nationalityCode,
              nationalitycode:
                this.users[i].nationality == "ایرانی" ? "IRI" : "غیر ایرانی",
              expdate:
                this.users[i].nationality == "ایرانی"
                  ? ""
                  : this.users[i].expirePassYear +
                    "-" +
                    this.users[i].expirePassMonth +
                    "-" +
                    this.users[i].expirePassDay,
              birthday:
                gregorianBirthdayDate[0] +
                "-" +
                gregorianBirthdayDate[1] +
                "-" +
                gregorianBirthdayDate[2],
            });
          }
          axios
            .post(
              "https://panel.ahuantours.com/api/Ch724/Reservation",
              infoArray
            )
            .then(function (response) {
              if (response.data.result == "true") {
                self.captchaIdReq1 = response.data.data.id_request;
                self.id_faktor1 = response.data.data.id_faktor;
                self.choosedTicket[0].allprice =
                  response.data.data.totalprice_request;
                self.showCharterPassengers1 = response.data.data.passenger_info;
                let paramsReservation = {
                  id_faktor: self.id_faktor1,
                  id_request: self.captchaIdReq1,
                  penalti: undefined,
                  listticketID: [],
                  passengers: response.data.data.passengers,
                };
                if (self.choosedTicket.length == 2) {
                  if (self.choosedTicket[1].reserveType != "Chr724") {
                    self.reserveTicket2(
                      2,
                      response.data.data.totalprice_request
                    );
                  } else {
                    let infoArray2 = {
                      id_request: self.captchaIdReq2,
                      captchcode: self.captchaCode1.substring(4, 8),
                      mobile: self.contactInfo[0].phone,
                      email: self.contactInfo[0].email,
                      passengers: infoArray.passengers,
                    };
                    axios
                      .post(
                        "https://panel.ahuantours.com/api/Ch724/Reservation",
                        infoArray2
                      )
                      .then(function (res) {
                        if (res.data.result == "true") {
                          self.captchaIdReq2 = res.data.data.id_request;
                          self.id_faktor2 = res.data.data.id_faktor;
                          self.choosedTicket[1].allprice =
                            res.data.data.totalprice_request;
                          self.showCharterPassengers2 =
                            res.data.data.passenger_info;
                          let bankprice =
                            parseInt(response.data.data.totalprice_request) +
                            parseInt(res.data.data.totalprice_request);
                          let urlReturn =
                            "https://ahuan.ir/#/ticket-download?isReturnUrl=true&id_request1=" +
                            self.captchaIdReq1 +
                            "&id_faktor1=" +
                            self.id_faktor1 +
                            "&id_request2=" +
                            self.captchaIdReq2 +
                            "&id_faktor2=" +
                            self.id_faktor2 +
                            "&";
                          self.addToDatabase(bankprice, urlReturn);
                          // axios
                          //   .post(
                          //     "https://panel.ahuantours.com/api/Tejarat/BankToken",
                          //     {
                          //       amount: bankprice,
                          //       revertUrl:
                          //         "https://ahuan.ir/#/ticket-download?isReturnUrl=true&id_request1=" +
                          //         self.captchaIdReq1 +
                          //         "&id_faktor1=" +
                          //         self.id_faktor1 +
                          //         "&id_request2=" +
                          //         self.captchaIdReq2 +
                          //         "&id_faktor2=" +
                          //         self.id_faktor2 +
                          //         "&",
                          //     }
                          //   )
                          //   .then(function (resp) {
                          //     self.formshaparak.bankToken = resp.data;
                          //     self.bookStep = 6;
                          //     setTimeout(() => {
                          //       self.$refs.formshaparak.submit();
                          //     }, 1000);
                          //   })
                          //   .catch(function (error) {
                          //     // handle error
                          //     console.log(error);
                          //   });

                          // self.checkPenulty1(paramsReservation);
                        }
                      })
                      .catch(function (error) {
                        // handle error
                        console.log(error);
                      });
                  }
                } else {
                  let bankprice = response.data.data.totalprice_request;
                  let urlReturn =
                    "https://ahuan.ir/#/ticket-download?isReturnUrl=true&id_request1=" +
                    self.captchaIdReq1 +
                    "&id_faktor1=" +
                    self.id_faktor1 +
                    "&";
                  self.addToDatabase(bankprice, urlReturn);
                  // axios
                  //   .post(
                  //     "https://panel.ahuantours.com/api/Tejarat/BankToken",
                  //     {
                  //       amount: bankprice,
                  //       revertUrl:
                  //         "https://ahuan.ir/#/ticket-download?isReturnUrl=true&id_request1=" +
                  //         self.captchaIdReq1 +
                  //         "&id_faktor1=" +
                  //         self.id_faktor1 +
                  //         "&",
                  //     }
                  //   )
                  //   .then(function (resp) {
                  //     self.formshaparak.bankToken = resp.data;
                  //     self.bookStep = 6;
                  //     setTimeout(() => {
                  //       self.$refs.formshaparak.submit();
                  //     }, 1000);
                  //   })
                  //   .catch(function (error) {
                  //     // handle error
                  //     console.log(error);
                  //   });
                }
                // self.checkPenulty1(paramsReservation);
              }
              // response will be:
              // let response = {
              //   result: "true",
              //   msg: "Reservation",
              //   data: {
              //     id_request: 2545307,
              //     id_faktor: 206548079,
              //     msg: "Data Mode Test",
              //     duplicate: 0,
              //     totalprice_request: "23228000",
              //     passenger_info: [
              //       {
              //         fname: "jkkkjj",
              //         lname: "dfgdd",
              //         type: "ADL",
              //         real_price: 14517500,
              //         fare: 12990575,
              //       },
              //       {
              //         fname: "dfhfgh",
              //         lname: "hnjjhk",
              //         type: "CHD",
              //         real_price: 7258750,
              //         fare: 6495287,
              //       },
              //       {
              //         fname: "ljkjkljkl",
              //         lname: "llkkj",
              //         type: "INF",
              //         real_price: 1451750,
              //         fare: 1299057,
              //       },
              //     ],
              //     class_r: "",
              //     one_price: "14517500",
              //     own_com: "0",
              //   },
              // };
              // self.formshaparak.bankToken = response.data;
              // self.bookStep = 6;
              // setTimeout(() => {
              //   self.$refs.formshaparak.submit();
              // }, 1000);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });
        }
      } else {
        let testText =
          "AirLine=" +
          this.choosedTicket[0].Airline +
          "&cbSource=" +
          this.choosedTicket[0].Origin +
          "&cbTarget=" +
          this.choosedTicket[0].Destination +
          "&FlightClass=" +
          this.choosedTicket[0].className +
          "&FlightNo=" +
          this.choosedTicket[0].FlightNo +
          "&Day=" +
          this.choosedTicket[0].DepartureDateTime.substring(8, 10) +
          "&Month=" +
          this.choosedTicket[0].DepartureDateTime.substring(5, 7) +
          "&DepartureDate=" +
          this.choosedTicket[0].DepartureDateTime +
          "&No=" +
          this.users.length +
          "&edtContact=" +
          this.contactInfo[0].phone +
          "|" +
          self.contactInfo[0].email;
        // +
        // "&OfficeUser=" +
        // this.choosedTicket[0].OfficeUser +
        // "&OfficePass=" +
        // this.choosedTicket[0].OfficePass;
        var testTextNew = "";
        for (let i = 0; i < this.users.length; i++) {
          let gregorianBirthdayDate = self.jalali_to_gregorian(
            self.users[i].birthdayYear,
            self.users[i].birthdayMonth,
            self.users[i].birthdayDay
          );
          gregorianBirthdayDate =
            (gregorianBirthdayDate[1].toString().length == 1
              ? "0" + gregorianBirthdayDate[1]
              : gregorianBirthdayDate[1]) +
            "/" +
            (gregorianBirthdayDate[2].toString().length == 1
              ? "0" + gregorianBirthdayDate[2]
              : gregorianBirthdayDate[2]) +
            "/" +
            gregorianBirthdayDate[0];
          let options = { month: "short" };
          let monthExDateNameShort =
            this.users[i].expirePassYear +
            "/" +
            this.users[i].expirePassMonth +
            "/" +
            this.users[i].expirePassDay;
          monthExDateNameShort = new Date(
            monthExDateNameShort
          ).toLocaleDateString("en", options);
          testTextNew =
            testTextNew +
            (testTextNew.length ? "&" : "") +
            "edtName" +
            (i + 1) +
            "=" +
            self.users[i].name.replace(/\s/g, "") +
            (self.users[i].gender == "خانم" ? "MS" : "MR") +
            "&edtLast" +
            (i + 1) +
            "=" +
            self.users[i].family.replace(/\s/g, "") +
            "&edtAge" +
            (i + 1) +
            "=" +
            self.getAge(gregorianBirthdayDate);
          let numeriDate = self.jalali_to_gregorian(
            self.users[i].birthdayYear,
            self.users[i].birthdayMonth,
            self.users[i].birthdayDay
          );
          numeriDate =
            numeriDate[0] + "/" + numeriDate[1] + "/" + numeriDate[2];
          let monthDateNameShort = new Date(numeriDate).toLocaleDateString(
            "en",
            options
          );

          if (this.users[i].nationality == "ایرانی") {
            testTextNew =
              testTextNew +
              "&edtID" +
              (i + 1) +
              "=" +
              "I__" +
              self.users[i].nationalityCode +
              "__" +
              new Date(numeriDate).getDate() +
              monthDateNameShort +
              new Date(numeriDate).getFullYear().toString().slice(-2) +
              "_" +
              (self.users[i].gender == "خانم"
                ? self.users[i].ageType == "baby"
                  ? "FI"
                  : "F"
                : self.users[i].ageType == "baby"
                ? "MI"
                : "M") +
              "___";
          } else {
            testTextNew =
              testTextNew +
              "&edtID" +
              (i + 1) +
              "=" +
              "T__" +
              self.users[i].nationalityCode +
              "__" +
              new Date(numeriDate).getDate() +
              monthDateNameShort +
              new Date(numeriDate).getFullYear().toString().slice(-2) +
              "_" +
              (self.users[i].gender == "خانم"
                ? self.users[i].ageType == "baby"
                  ? "FI"
                  : "F"
                : self.users[i].ageType == "baby"
                ? "MI"
                : "M") +
              "_" +
              this.users[i].expirePassDay +
              monthExDateNameShort +
              this.users[i].expirePassYear.toString().slice(-2) +
              "__";
          }
        }

        let params = {
          AirLine: this.choosedTicket[0].Airline,
          cbSource: this.choosedTicket[0].Origin,
          cbTarget: this.choosedTicket[0].Destination,
          FlightClass: this.choosedTicket[0].className,
          FlightNo: this.choosedTicket[0].FlightNo,
          Day: this.choosedTicket[0].DepartureDateTime.substring(8, 10),
          Month: this.choosedTicket[0].DepartureDateTime.substring(5, 7),
          DepartureDate: this.choosedTicket[0].DepartureDateTime,
          No: this.users.length,
          edtContact:
            this.contactInfo[0].phone + "|" + self.contactInfo[0].email,
          PassengersInfo: testTextNew,
        };
        if (
          self.choosedTicket.length == 2 &&
          self.choosedTicket[1].reserveType == "Chr724" &&
          !self.captchaCode2
        ) {
          self.alertText = "لطفا کد احراز هویت را وارد کنید";
          self.alertType = "error";
          self.showAlert = true;
          setTimeout(() => {
            self.showAlert = false;
          }, 3000);
        } else {
          axios
            .get("https://panel.ahuantours.com/api/Nira/GetReserve", { params })
            .then(function (res) {
              self.PNR1 = res.data.AirReserve[0].PNR;
              if (res.data.AirReserve[0].Error == "No Err") {
                if (self.choosedTicket.length == 2) {
                  if (self.choosedTicket[1].reserveType == "Chr724") {
                    let infoArray4 = {
                      id_request: self.captchaIdReq2,
                      captchcode: self.captchaCode2,
                      mobile: self.contactInfo[0].phone,
                      email: self.contactInfo[0].email,
                      passengers: [],
                    };
                    for (let i = 0; i < self.users.length; i++) {
                      let gregorianBirthdayDate = self.jalali_to_gregorian(
                        self.users[i].birthdayYear,
                        self.users[i].birthdayMonth,
                        self.users[i].birthdayDay
                      );
                      let gregorianBirthdayDate2 =
                        (gregorianBirthdayDate[1].toString().length == 1
                          ? "0" + gregorianBirthdayDate[1]
                          : gregorianBirthdayDate[1]) +
                        "/" +
                        (gregorianBirthdayDate[2].toString().length == 1
                          ? "0" + gregorianBirthdayDate[2]
                          : gregorianBirthdayDate[2]) +
                        "/" +
                        gregorianBirthdayDate[0];

                      infoArray4.passengers.push({
                        passengerType:
                          self.getAge(gregorianBirthdayDate2) < 2
                            ? "INF"
                            : self.getAge(gregorianBirthdayDate2) < 12
                            ? "CHD"
                            : "ADL",
                        fnamefa:
                          self.users[i].name.replace(/\s/g, "") +
                          (self.users[i].gender == "خانم" ? "MS" : "MR"),
                        lnamefa:
                          self.users[i].family.replace(/\s/g, "") +
                          (self.users[i].gender == "خانم" ? "MS" : "MR"),
                        fnameen:
                          self.users[i].name.replace(/\s/g, "") +
                          (self.users[i].gender == "خانم" ? "MS" : "MR"),
                        lnameen:
                          self.users[i].family.replace(/\s/g, "") +
                          (self.users[i].gender == "خانم" ? "MS" : "MR"),
                        gender: self.users[i].gender == "خانم" ? 2 : 1,
                        nationality:
                          self.users[i].nationality == "ایرانی" ? 1 : 0,
                        passengerCode: self.users[i].nationalityCode,
                        nationalitycode:
                          self.users[i].nationality == "ایرانی"
                            ? "IRI"
                            : "غیر ایرانی",
                        expdate:
                          self.users[i].nationality == "ایرانی"
                            ? ""
                            : self.users[i].expirePassYear +
                              "-" +
                              self.users[i].expirePassMonth +
                              "-" +
                              self.users[i].expirePassDay,
                        birthday:
                          gregorianBirthdayDate[0] +
                          "-" +
                          gregorianBirthdayDate[1] +
                          "-" +
                          gregorianBirthdayDate[2],
                      });
                    }
                    axios
                      .post(
                        "https://panel.ahuantours.com/api/Ch724/Reservation",
                        infoArray4
                      )
                      .then(function (response) {
                        if (response.data.result == "true") {
                          self.captchaIdReq2 = response.data.data.id_request;
                          self.id_faktor2 = response.data.data.id_faktor;
                          self.choosedTicket[1].allprice =
                            response.data.data.totalprice_request;
                          self.showCharterPassengers2 =
                            response.data.data.passenger_info;
                          let bankprice =
                            parseInt(
                              self.choosedTicket[0].allprice.replace(/,/g, "") *
                                10
                            ) + parseInt(response.data.data.totalprice_request);
                          let revertUrl =
                            "https://ahuan.ir/#/ticket-download?isReturnUrl=true&id_request2=" +
                            self.captchaIdReq2 +
                            "&id_faktor2=" +
                            self.id_faktor2 +
                            "&AirLine1=" +
                            self.choosedTicket[0].Airline +
                            "&PNR1=" +
                            self.PNR1 +
                            "&Email=" +
                            self.contactInfo[0].email +
                            "&";

                          self.addToDatabase(bankprice, revertUrl);
                          // axios
                          //   .post(
                          //     "https://panel.ahuantours.com/api/Tejarat/BankToken",
                          //     {
                          //       amount: bankprice,
                          //       revertUrl: revertUrl,
                          //     }
                          //   )
                          //   .then(function (resp) {
                          //     self.formshaparak.bankToken = resp.data;
                          //     self.bookStep = 6;
                          //     setTimeout(() => {
                          //       self.$refs.formshaparak.submit();
                          //     }, 1000);
                          //   })
                          //   .catch(function (error) {
                          //     // handle error
                          //     console.log(error);
                          //   });

                          // self.checkPenulty1(paramsReservation);
                        }

                        // self.formshaparak.bankToken = response.data;
                        // self.bookStep = 6;
                        // setTimeout(() => {
                        //   self.$refs.formshaparak.submit();
                        // }, 1000);
                      })
                      .catch(function (error) {
                        // handle error
                        console.log(error);
                      });
                  } else {
                    self.reserveTicket2();
                  }
                } else {
                  // go to paymant _______________________
                  // self.params = [];
                  // for (let i = 0; i < self.users.length; i++) {
                  //   for (let j = 0; j < self.choosedTicket.length; j++) {
                  //     self.params.push({
                  //       ticketType: self.choosedTicket[j].ticketType,
                  //       DepartureTime: self.choosedTicket[j].DepartureTime,
                  //       DepartureDateTime: self.choosedTicket[j].DepartureDateTime,
                  //       Airline: self.choosedTicket[j].Airline,
                  //       longDateTime1: self.choosedTicket[j].longDateTime1,
                  //       OfficeUser: self.choosedTicket[j].OfficeUser,
                  //       proxy: self.choosedTicket[j].proxy,
                  //       className: self.choosedTicket[j].className,
                  //       FlightNo: self.choosedTicket[j].FlightNo,
                  //       AirlinePersianId: self.choosedTicket[j].AirlinePersianId,
                  //       Origin: self.choosedTicket[j].Origin,
                  //       Destination: self.choosedTicket[j].Destination,
                  //       originCity:
                  //         j == 0
                  //           ? self.choosedTicket[j].originCity +
                  //             " - " +
                  //             self.choosedTicket[j].airport1
                  //           : self.choosedTicket[j].destinationInternal +
                  //             " - " +
                  //             self.choosedTicket[j].airport2,
                  //       destinationInternal:
                  //         j == 0
                  //           ? self.choosedTicket[j].destinationInternal +
                  //             " - " +
                  //             self.choosedTicket[j].airport2
                  //           : self.choosedTicket[j].originCity +
                  //             " - " +
                  //             self.choosedTicket[j].airport1,
                  //       price:
                  //         self.endUser[i].ageType == "old"
                  //           ? self.choosedTicket[j].fare.AdultTotalPrice
                  //           : self.endUser[i].ageType == "child"
                  //           ? self.choosedTicket[j].fare.ChildTotalPrice
                  //           : self.choosedTicket[j].fare.InfantTotalPrice,
                  //       ageType: self.endUser[i].ageType,
                  //       name: self.users[i].name + " " + self.users[i].family,
                  //       PNR: j == 0 ? self.PNR1 : j == 1 ? self.PNR2 : "",
                  //       bookTime:
                  //         new Date().getHours() + ":" + new Date().getMinutes(),
                  //       bookDate: new Date().toLocaleDateString("fa"),
                  //     });
                  //   }
                  // }
                  // let sendAerray = [
                  //   {
                  //     Airline: self.choosedTicket[0].Airline,
                  //     PNR: self.PNR1,
                  //     OfficeUser: self.choosedTicket[0].OfficeUser,
                  //     OfficePAss: self.choosedTicket[0].OfficePass,
                  //     Complete: "Y",
                  //     proxy: self.choosedTicket[0].proxy,
                  //     FlightNo: self.choosedTicket[0].FlightNo,
                  //   },
                  // ];
                  let bankprice =
                    parseInt(self.choosedTicket[0].allprice.replace(/,/g, "")) *
                    10;
                  let goBankUrl =
                    "https://ahuan.ir/#/ticket-download?AirLine1=" +
                    self.choosedTicket[0].Airline +
                    "&bankpnr1=" +
                    self.PNR1 +
                    "&Email=" +
                    self.contactInfo[0].email;

                  // window.open(goBankUrl);
                  let urlReturn =
                    "https://ahuan.ir/#/ticket-download?AirLine1=" +
                    self.choosedTicket[0].Airline +
                    "&PNR1=" +
                    self.PNR1 +
                    "&Email=" +
                    self.contactInfo[0].email +
                    "&";
                  self.addToDatabase(bankprice, urlReturn);

                  // axios
                  //   .post(
                  //     "https://panel.ahuantours.com/api/Tejarat/BankToken",
                  //     {
                  //       amount: bankprice,
                  //       revertUrl:
                  //         "https://ahuan.ir/#/ticket-download?AirLine1=" +
                  //         self.choosedTicket[0].Airline +
                  //         "&PNR1=" +
                  //         self.PNR1 +
                  //         "&Email=" +
                  //         self.contactInfo[0].email +
                  //         "&",
                  //     }
                  //   )
                  //   .then(function (response) {
                  //     self.formshaparak.bankToken = response.data;
                  //     self.bookStep = 6;
                  //     setTimeout(() => {
                  //       self.$refs.formshaparak.submit();
                  //     }, 1000);
                  //   })
                  //   .catch(function (error) {
                  //     // handle error
                  //     console.log(error);
                  //   });
                  // self.getFlightNumber(sendAerray);
                }
              } else {
                self.alertText =
                  "عملیات رزرو با خطا مواجه شد لطفا پس از اطمینان از ظرفیت پرواز و صحیح بودن اطلاعاتparisa  ghasemi،دوباره سعی کنید.";
                self.alertType = "error";
                self.showAlert = true;
                self.loadingReserve = false;
                setTimeout(() => {
                  self.showAlert = false;
                }, 3000);
              }
            })
            .catch(function (error) {
              // handle error

              // console.log("عملیات رزرو ناموفق بود!");
              // self.loadingReserve = false;
              let errorText = "";
              console.log(error);
              if (error.response && error.response.status == 403) {
                errorText = "سطح دسترسی این وب سرویس برای شما محدودیت دارد.";
              } else if (error.response && error.response.status == 400) {
                errorText = "bad quest";
              } else if (error.response && error.response.status == 401) {
                self.$emit("unahutorize");
                errorText = "لطفا صفحه را refresh کنید.";
              }

              self.alertText = errorText;
              self.alertType = "error";
              self.showAlert = true;
              setTimeout(() => {
                self.showAlert = false;
              }, 3000);
            });
        }
      }
    },
    addToDatabase(price, url) {
      localStorage.setItem("bankprice", price);
      let self = this;
      let findPnrReturn =
        self.choosedTicket.length == 2 &&
        self.choosedTicket[1].reserveType == "Chr724"
          ? self.captchaIdReq2
          : self.choosedTicket.length == 2 &&
            self.choosedTicket[1].reserveType != "Chr724"
          ? self.PNR2
          : "";
      let allPassengers = [];
      for (let i = 0; i < this.users.length; i++) {
        let gregorianBirthdayDate = self.jalali_to_gregorian(
          self.users[i].birthdayYear,
          self.users[i].birthdayMonth,
          self.users[i].birthdayDay
        );
        gregorianBirthdayDate =
          gregorianBirthdayDate[1] +
          "/" +
          gregorianBirthdayDate[2] +
          "/" +
          gregorianBirthdayDate[0];
        gregorianBirthdayDate = new Date(gregorianBirthdayDate);
        let theObjectForPush = {
          id: 0,
          contractId: 0,
          fName: self.users[i].name.replace(/\s/g, ""),
          lName: self.users[i].family.replace(/\s/g, ""),
          age:
            self.users[i].ageType == "old"
              ? "ADL"
              : self.users[i].ageType == "child"
              ? "CHD"
              : "INF",
          gender: self.users[i].gender == "خانم" ? false : true,
          birthDate: gregorianBirthdayDate,
          //     price:
          //       theObject.Passengers[i].PassenferAgeType == "{Adult}"
          //         ? theObject.AdultTP
          //         : theObject.Passengers[i].PassenferAgeType == "{Child}"
          //         ? theObject.ChildTP
          //         : theObject.InfantTP,
          //     price2: theObject2
          //       ? theObject2.Passengers[i].PassenferAgeType == "{Adult}"
          //         ? theObject2.AdultTP
          //         : theObject2.Passengers[i].PassenferAgeType == "{Child}"
          //         ? theObject2.ChildTP
          //         : theObject2.InfantTP
          //       : null,
          goTicketPNR: self.PNR1 ? self.PNR1 : String(self.id_faktor1),
          //     goTicketNumber: findFirstTicketNumber[1],
          retTicketPNR: self.choosedTicket[1]
            ? self.PNR2
              ? self.PNR2
              : String(self.id_faktor2)
            : "",
          // retTicketNumber: '',
          description: "",
          passportNo: self.users[i].nationalityCode, //چک شود که دیتا درست به نیرا فرستاده میشود یا نه
          codeMelli: self.users[i].nationalityCode,
          nationality: self.users[i].nationality,
          //     // farePrice: 0,//اینو بپرسم بعدا از مهندس
          //     // comPrice: 0,//اینو بپرسم بعدا از مهندس    // فقط برای چارتری
          //     // taxPrice: 0,//اینو بپرسم بعدا از مهندس// فقط برای چارتری
          //     // sharePrice: 0,//اینو بپرسم بعدا از مهندس
          //     // taxDesc: "string",
        };
        if (self.users[i].nationality == "غیر ایرانی") {
          theObjectForPush.passportExpDate = new Date(
            self.users[i].expirePassYear +
              "/" +
              self.users[i].expirePassMonth +
              "/" +
              self.users[i].expirePassDay
          ).toLocaleString("en");
        }
        allPassengers.push(theObjectForPush);
      }
      let allObjects = [this.choosedTicket[0]];
      let allFlights = [];
      if (this.choosedTicket[1]) {
        allObjects.push(this.choosedTicket[1]);
      }
      for (let i = 0; i < allObjects.length; i++) {
        let stepfindip = self.choosedTicket[i].Airline;
        let findAirlineId =
          stepfindip == "I3"
            ? 489
            : stepfindip == "Y9"
            ? 1016
            : stepfindip == "QB"
            ? 761
            : stepfindip == "HH"
            ? 470
            : stepfindip == "EP"
            ? 376
            : stepfindip == "ZV"
            ? 1064
            : stepfindip == "NV"
            ? 683
            : stepfindip == "JI"
            ? 535
            : stepfindip == "VR"
            ? 943
            : stepfindip == "IRZ"
            ? "IRZ"
            : stepfindip == "FP"
            ? 410
            : stepfindip == "IV"
            ? 515
            : stepfindip == "IS"
            ? 7
            : stepfindip == "A1"
            ? 212
            : stepfindip == "RI"
            ? 802
            : stepfindip == "W5"
            ? 956
            : stepfindip == "IR"
            ? 512
            : stepfindip == "PA"
            ? "PA"
            : stepfindip == "PY"
            ? "PY"
            : stepfindip == "B9"
            ? 256
            : stepfindip == "A7"
            ? 218
            : "000";
        allFlights.push({
          contractId: 0,
          pnr:
            i == 0
              ? self.PNR1
                ? self.PNR1
                : String(self.captchaIdReq1)
              : self.PNR2
              ? self.PNR2
              : String(self.id_faktor2),
          origin: self.choosedTicket[i].Origin,
          destination: self.choosedTicket[i].Destination,
          flightClass: self.choosedTicket[i].className,
          airlineId: findAirlineId,
          charterFlight: self.choosedTicket[i].ticketType == "s" ? false : true,
          date: self.choosedTicket[i].DepartureDateTime,
          time: self.choosedTicket[i].DepartureTime,
          flightNumber: String(self.choosedTicket[i].FlightNo),
          airplaneType: self.choosedTicket[i].AirCraftType
            ? self.choosedTicket[i].AirCraftType
            : self.choosedTicket[i].AircraftTypeName,
          description: "",
        });
      }
      let theIssueDate =
        String(new Date().getFullYear()) +
        "-" +
        (String(new Date().getMonth() + 1).length == 2
          ? String(new Date().getMonth() + 1)
          : "0" + String(new Date().getMonth() + 1)) +
        "-" +
        (String(new Date().getDate()).length == 2
          ? String(new Date().getDate())
          : "0" + String(new Date().getDate()));

      let variabelobject = {
        id: 0,
        userName: localStorage.getItem("phone-number-ahuan"),
        IssueDate: theIssueDate,
        issueTime:
          (String(new Date().getHours()).length == 2
            ? new Date().getHours()
            : "0" + new Date().getHours()) +
          ":" +
          (String(new Date().getMinutes()).length == 2
            ? new Date().getMinutes()
            : "0" + new Date().getMinutes()),
        ipAddress: "0",
        //   // paymentId: "string",
        contractType: 0, //داخلی
        contractingPartyType: 0, //0 یعنی حضوری____2 یعنی شرکتی
        //   // customerId: 0,
        //   // companyId: 0,
        //   // companyEmployeeId: 0,
        //   // paymentType: 0 //نقدی,
        travelVehicle: "هواپیما",
        tour: false,
        ticket: true,
        hotel: false,
        visa: false,
        insurance: false,
        cruise: false,
        other: false,
        //   // charterFlight: true // اگر چارتری بود باید true باشد درغیر این صورت false,
        //   // contractDesc: "string"//توضیحاتی است برای تیکت رزرو شده,
        //   // ticketType: 0, //داخلی,
        systemOrCharter: false, // اگر چارتری بود باید true باشد درغیر این صورت false,,
        manualOrAutomatic: true,
        taxType: 0, //مالیات,
        confirmStatus: "temp",
        ticketStatus: "temp",
        showDetail: false,
        //   // company: {
        //   //   id: 0,
        //   //   name: "string",
        //   //   code: "string",
        //   //   category: "string",
        //   //   email: "string",
        //   //   fax: "string",
        //   //   phone: ["string"],
        //   //   address: "string",
        //   //   credit: 0,
        //   //   isApproved: true,
        //   //   noLimit: true,
        //   //   contracts: ["string"],
        //   //   employees: [
        //   //     {
        //   //       id: 0,
        //   //       companyId: 0,
        //   //       gender: true,
        //   //       fName: "string",
        //   //       lName: "string",
        //   //       mobile: "string",
        //   //       phone: "string",
        //   //       address: "string",
        //   //       codeMelli: "string",
        //   //       birthDate: "2023-10-30T11:22:05.123Z",
        //   //       email: "string",
        //   //       position: "string",
        //   //       isAgent: true,
        //   //       company: "string",
        //   //       contracts: ["string"],
        //   //     },
        //   //   ],
        //   // },
        //   // companyEmployee: {
        //   //   id: 0,
        //   //   companyId: 0,
        //   //   gender: true,
        //   //   fName: "string",
        //   //   lName: "string",
        //   //   mobile: "string",
        //   //   phone: "string",
        //   //   address: "string",
        //   //   codeMelli: "string",
        //   //   birthDate: "2023-10-30T11:22:05.123Z",
        //   //   email: "string",
        //   //   position: "string",
        //   //   isAgent: true,
        //   //   company: "string",
        //   //   contracts: ["string"],
        //   // },
        contractPassengers: allPassengers,
        contractFlights: allFlights,
        //   // contractReceives: [
        //   //   {
        //   //     id: 0,
        //   //     contractId: 0,
        //   //     receiveType: 0,
        //   //     receiveDate: "2023-10-30T11:22:05.125Z",
        //   //     amount: 0,
        //   //     currency: "string",
        //   //     receiveFor: 0,
        //   //     payer: "string",
        //   //     chequeDate: "2023-10-30T11:22:05.125Z",
        //   //     chequeBank: "string",
        //   //     chequeNumber: "string",
        //   //     cartDate: "2023-10-30T11:22:05.125Z",
        //   //     cart4Digits: "string",
        //   //     cartNumber: "string",
        //   //     depositDate: "2023-10-30T11:22:05.125Z",
        //   //     depositType: "string",
        //   //     depositAccount: "string",
        //   //     description: "string",
        //   //     exchange: true,
        //   //     exchangeAmount: 0,
        //   //     exchangeRate: 0,
        //   //     exchangeCurrency: "string",
        //   //     contract: "string",
        //   //   },
        //   // ],
      };
      // a = {
      //   id: 0,
      //   userName: "09054791374",
      //   issueDate: "2023-11-15",
      //   issueTime: "16:15",
      //   contractType: 0,
      //   contractingPartyType: 0,
      //   travelVehicle: "هواپیما",
      //   tour: false,
      //   ticket: true,
      //   hotel: false,
      //   visa: false,
      //   insurance: false,
      //   cruise: false,
      //   other: false,
      //   systemOrCharter: false,
      //   manualOrAutomatic: true,
      //   taxType: 0,
      //   confirmStatus: "temp",
      //   ticketStatus: "temp",
      //   showDetail: false,
      //   contractPassengers: [
      //     {
      //       id: 0,
      //       contractId: 0,
      //       fName: "parisa",
      //       lName: "ghasemi",
      //       age: "ADL",
      //       gender: false,
      //       birthDate: "9/21/1995, 12:00:00 AM",
      //       goTicketPNR: "R1ZQ2",
      //       retTicketPNR: 34062735,
      //       description: "",
      //       passportNo: "0440518245",
      //       codeMelli: "0440518245",
      //       nationality: "ایرانی",
      //     },
      //     {
      //       id: 0,
      //       contractId: 0,
      //       fName: "milad",
      //       lName: "mohammadpur",
      //       age: "ADL",
      //       gender: true,
      //       birthDate: "7/26/1996, 12:00:00 AM",
      //       goTicketPNR: "R1ZQ2",
      //       retTicketPNR: 34062735,
      //       description: "",
      //       passportNo: "3860357141",
      //       codeMelli: "3860357141",
      //       nationality: "ایرانی",
      //     },
      //   ],
      //   contractFlights: [
      //     {
      //       contractId: 0,
      //       pnr: "R1ZQ2",
      //       origin: "THR",
      //       destination: "MHD",
      //       flightClass: "BB",
      //       airlineId: 683,
      //       date: "11/27/2023, 3:30:00 AM",
      //       time: "16:00",
      //       flightNumber: 2638,
      //       airplaneType: "BOEING 733",
      //       description: "",
      //     },
      //     {
      //       contractId: 0,
      //       pnr: 34062735,
      //       origin: "MHD",
      //       destination: "THR",
      //       flightClass: "BH",
      //       airlineId: 956,
      //       date: "11/30/2023, 3:30:00 AM",
      //       time: "06:00",
      //       flightNumber: "1036",
      //       airplaneType: "Airbus 320",
      //       description: "",
      //     },
      //   ],
      // };
      // http://charter.ahuan.ir/GetTicket-34072344-1604123883.html
      axios
        .post("https://panel.ahuantours.com/api/Contract/add", variabelobject)
        .then(function (res) {
          if (
            localStorage.getItem("credit") != "null" &&
            (localStorage.getItem("credit") == "noLimit" ||
              localStorage.getItem("credit") >= price)
          ) {
            // window.location.href =
            //   url + "responseData=" + res.data.id + "&price=" + price + "&";
          } else {
            // axios
            //   .post("https://panel.ahuantours.com/api/Tejarat/BankToken", {
            //     amount: price,
            //     revertUrl: url + "responseData=" + res.data.id + "&",
            //   })
            //   .then(function (response) {
            //     self.formshaparak.bankToken = response.data;
            //     self.bookStep = 6;
            //     setTimeout(() => {
            //       self.$refs.formshaparak.submit();
            //     }, 1000);
            //   })
            //   .catch(function (error) {
            //     // handle error
            //     console.log(error);
            //   });
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    reserveTicket2(step, isFirstChrPrice) {
      var self = this;
      // let testText =
      //   "AirLine=" +
      //   this.choosedTicket[1].Airline +
      //   "&cbSource=" +
      //   this.choosedTicket[1].Origin +
      //   "&cbTarget=" +
      //   this.choosedTicket[1].Destination +
      //   "&FlightClass=" +
      //   this.choosedTicket[1].className +
      //   "&FlightNo=" +
      //   this.choosedTicket[1].FlightNo +
      //   "&Day=" +
      //   this.choosedTicket[1].DepartureDateTime.substring(8, 10) +
      //   "&Month=" +
      //   this.choosedTicket[1].DepartureDateTime.substring(5, 7) +
      //   "&DepartureDate=" +
      //   this.choosedTicket[1].DepartureDateTime +
      //   "&No=" +
      //   this.users.length +
      //   "&edtContact=" +
      //   this.contactInfo[0].phone +
      //   "|" +
      //   self.contactInfo[0].email;
      var testTextNew = "";
      for (let i = 0; i < this.users.length; i++) {
        let gregorianBirthdayDate = self.jalali_to_gregorian(
          self.users[i].birthdayYear,
          self.users[i].birthdayMonth,
          self.users[i].birthdayDay
        );
        gregorianBirthdayDate =
          (gregorianBirthdayDate[1].toString().length == 1
            ? "0" + gregorianBirthdayDate[1]
            : gregorianBirthdayDate[1]) +
          "/" +
          (gregorianBirthdayDate[2].toString().length == 1
            ? "0" + gregorianBirthdayDate[2]
            : gregorianBirthdayDate[2]) +
          "/" +
          gregorianBirthdayDate[0];
        let options = { month: "short" };
        let monthExDateNameShort =
          this.users[i].expirePassYear +
          "/" +
          this.users[i].expirePassMonth +
          "/" +
          this.users[i].expirePassDay;
        monthExDateNameShort = new Date(
          monthExDateNameShort
        ).toLocaleDateString("en", options);
        testTextNew =
          testTextNew +
          (testTextNew.length ? "&" : "") +
          "edtName" +
          (i + 1) +
          "=" +
          self.users[i].name.replace(/\s/g, "") +
          (self.users[i].gender == "خانم" ? "MS" : "MR") +
          "&edtLast" +
          (i + 1) +
          "=" +
          self.users[i].family.replace(/\s/g, "") +
          "&edtAge" +
          (i + 1) +
          "=" +
          self.getAge(gregorianBirthdayDate);
        let numeriDate = self.jalali_to_gregorian(
          self.users[i].birthdayYear,
          self.users[i].birthdayMonth,
          self.users[i].birthdayDay
        );
        numeriDate = numeriDate[0] + "/" + numeriDate[1] + "/" + numeriDate[2];
        let monthDateNameShort = new Date(numeriDate).toLocaleDateString(
          "en",
          options
        );

        if (this.users[i].nationality == "ایرانی") {
          testTextNew =
            testTextNew +
            "&edtID" +
            (i + 1) +
            "=" +
            "I__" +
            self.users[i].nationalityCode +
            "__" +
            new Date(numeriDate).getDate() +
            monthDateNameShort +
            new Date(numeriDate).getFullYear().toString().slice(-2) +
            "_" +
            (self.users[i].gender == "خانم"
              ? self.users[i].ageType == "baby"
                ? "FI"
                : "F"
              : self.users[i].ageType == "baby"
              ? "MI"
              : "M") +
            "___";
        } else {
          testTextNew =
            testTextNew +
            "&edtID" +
            (i + 1) +
            "=" +
            "I__" +
            self.users[i].nationalityCode +
            "__" +
            new Date(numeriDate).getDate() +
            monthDateNameShort +
            new Date(numeriDate).getFullYear().toString().slice(-2) +
            "_" +
            (self.users[i].gender == "خانم"
              ? self.users[i].ageType == "baby"
                ? "FI"
                : "F"
              : self.users[i].ageType == "baby"
              ? "MI"
              : "M") +
            "_" +
            this.users[i].expirePassDay +
            monthExDateNameShort +
            this.users[i].expirePassYear.toString().slice(-2) +
            "__";
        }
      }

      let params = {
        AirLine: this.choosedTicket[1].Airline,
        cbSource: this.choosedTicket[1].Origin,
        cbTarget: this.choosedTicket[1].Destination,
        FlightClass: this.choosedTicket[1].className,
        FlightNo: this.choosedTicket[1].FlightNo,
        Day: this.choosedTicket[1].DepartureDateTime.substring(8, 10),
        Month: this.choosedTicket[1].DepartureDateTime.substring(5, 7),
        DepartureDate: this.choosedTicket[1].DepartureDateTime,
        No: this.users.length,
        edtContact: this.contactInfo[0].phone + "|" + self.contactInfo[0].email,
        PassengersInfo: testTextNew,
      };

      axios
        .get("https://panel.ahuantours.com/api/Nira/GetReserve", { params })
        .then(function (res) {
          self.PNR2 = res.data.AirReserve[0].PNR;
          if (res.data.AirReserve[0].Error == "No Err") {
            // go to paymant _______________________

            if (isFirstChrPrice) {
              let bankprice =
                isFirstChrPrice +
                parseInt(self.choosedTicket[1].allprice.replace(/,/g, "") * 10);
              let urlReturn =
                "https://ahuan.ir/#/ticket-download?isReturnUrl=true&id_request1=" +
                self.captchaIdReq1 +
                "&id_faktor1=" +
                self.id_faktor1 +
                "&PNR2=" +
                self.PNR2 +
                "&AirLine2=" +
                self.choosedTicket[1].Airline +
                "&Email=" +
                self.contactInfo[0].email +
                "&";
              self.addToDatabase(bankprice, urlReturn);
              // axios
              //   .post("https://panel.ahuantours.com/api/Tejarat/BankToken", {
              //     amount: bankprice,
              //     revertUrl:
              //       "https://ahuan.ir/#/ticket-download?isReturnUrl=true&id_request1=" +
              //       self.captchaIdReq1 +
              //       "&id_faktor1=" +
              //       self.id_faktor1 +
              //       "&PNR2=" +
              //       self.PNR2 +
              //       "&AirLine2=" +
              //       self.choosedTicket[1].Airline +
              //       "&Email=" +
              //       self.contactInfo[0].email +
              //       "&",
              //   })
              //   .then(function (response) {
              //     self.formshaparak.bankToken = response.data;
              //     self.bookStep = 6;
              //     setTimeout(() => {
              //       self.$refs.formshaparak.submit();
              //     }, 1000);
              //   })
              //   .catch(function (error) {
              //     // handle error
              //     console.log(error);
              //   });
            } else {
              let bankprice =
                parseInt(
                  self.choosedTicket[0].allprice.replace(/,/g, "") * 10
                ) +
                parseInt(self.choosedTicket[1].allprice.replace(/,/g, "") * 10);
              // let goBankUrl =
              //   "https://ahuan.ir/#/ticket-download?AirLine1=" +
              //   self.choosedTicket[0].Airline +
              //   "&bankpnr1=" +
              //   self.PNR1 +
              //   "&bankpnr2=" +
              //   self.PNR2 +
              //   "&AirLine2=" +
              //   self.choosedTicket[1].Airline +
              //   "&Email=" +
              //   self.contactInfo[0].email;

              // window.open(goBankUrl);
              // milad  mohammadpour  3860357141 0440518245 0084508965 8/12/67
              // self.loadingReserve = false;
              // go to bank__________________________
              let urlReturn =
                "https://ahuan.ir/#/ticket-download?AirLine1=" +
                self.choosedTicket[0].Airline +
                "&PNR1=" +
                self.PNR1 +
                "&PNR2=" +
                self.PNR2 +
                "&AirLine2=" +
                self.choosedTicket[1].Airline +
                "&Email=" +
                self.contactInfo[0].email +
                "&Price=" +
                bankprice +
                "&";
              self.addToDatabase(bankprice, urlReturn);

              // axios
              //   .post("https://panel.ahuantours.com/api/Tejarat/BankToken", {
              //     amount: bankprice,
              //     revertUrl:
              //       "https://ahuan.ir/#/ticket-download?AirLine1=" +
              //       self.choosedTicket[0].Airline +
              //       "&PNR1=" +
              //       self.PNR1 +
              //       "&PNR2=" +
              //       self.PNR2 +
              //       "&AirLine2=" +
              //       self.choosedTicket[1].Airline +
              //       "&Email=" +
              //       self.contactInfo[0].email +
              //       "&Price=" +
              //       bankprice,
              //   })
              //   .then(function (response) {
              //     self.formshaparak.bankToken = response.data;
              //     self.bookStep = 6;
              //     setTimeout(() => {
              //       self.$refs.formshaparak.submit();
              //     }, 1000);
              //   })
              //   .catch(function (error) {
              //     // handle error
              //     console.log(error);
              //   });

              //  // self.getFlightNumber(sendAerray);
            }
          } else {
            self.alertText =
              "عملیات رزرو با خطا مواجه شد لطفا پس از اطمینان از ظرفیت پروازها،دوباره سعی کنید.";
            self.alertType = "error";
            self.showAlert = true;
            // self.loadingReserve = false;
            setTimeout(() => {
              self.showAlert = false;
            }, 3000);
          }
        })
        .catch(function (error) {
          // handle error

          // console.log("عملیات رزرو ناموفق بود!");
          let errorText = "";
          console.log(error);
          // if (error.response && error.response.status == 403) {
          //   errorText = "سطح دسترسی این وب سرویس برای شما محدودیت دارد.";
          // } else if (error.response && error.response.status == 400) {
          //   errorText = "bad quest";
          // } else if (error.response && error.response.status == 401) {
          //   self.$emit("unahutorize");
          //   errorText = "لطفا صفحه را refresh کنید.";
          // }

          self.alertText = errorText;
          self.alertType = "error";
          self.showAlert = true;
          setTimeout(() => {
            self.showAlert = false;
          }, 3000);
        });
    },
    jalali_to_gregorian(jy, jm, jd) {
      var sal_a, gy, gm, gd, days;
      jy += 1595;
      days =
        -355668 +
        365 * jy +
        ~~(jy / 33) * 8 +
        ~~(((jy % 33) + 3) / 4) +
        jd +
        (jm < 7 ? (jm - 1) * 31 : (jm - 7) * 30 + 186);
      gy = 400 * ~~(days / 146097);
      days %= 146097;
      if (days > 36524) {
        gy += 100 * ~~(--days / 36524);
        days %= 36524;
        if (days >= 365) days++;
      }
      gy += 4 * ~~(days / 1461);
      days %= 1461;
      if (days > 365) {
        gy += ~~((days - 1) / 365);
        days = (days - 1) % 365;
      }
      gd = days + 1;
      sal_a = [
        0,
        31,
        (gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0 ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
      ];
      for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
      return [gy, gm, gd];
    },
    getAge(dateString) {
      var now = new Date();
      var yearNow = now.getYear();
      var monthNow = now.getMonth();
      var dateNow = now.getDate();
      var dob = new Date(
        dateString.substring(6, 10),
        dateString.substring(0, 2) - 1,
        dateString.substring(3, 5)
      );
      var yearDob = dob.getYear();
      var monthDob = dob.getMonth();
      var dateDob = dob.getDate();
      let yearAge = yearNow - yearDob;
      var monthAge = "";
      if (monthNow >= monthDob) {
        monthAge = monthNow - monthDob;
      } else {
        yearAge--;
        monthAge = 12 + monthNow - monthDob;
      }
      if (dateNow < dateDob) {
        monthAge--;
        if (monthAge < 0) {
          monthAge = 11;
          yearAge--;
        }
      }
      return yearAge;
    },
    async getFlightNumber(object) {
      for (let i = 0; i < object.length; i++) {
        await this.getFlightNumber2(
          object[i].Airline,
          object[i].PNR,
          object[i].OfficeUser,
          object[i].OfficePAss,
          object[i].Complete,
          object[i].proxy,
          object[i].FlightNo,
          i + 1
        );
      }
      this.bookStep = 3;
      // this.loadingReserve = false;
      this.scrollTopNextPage();
    },
    getFlightNumber2(
      Airline,
      PNR,
      OfficeUser,
      OfficePAss,
      Complete,
      proxy,
      FlightNo,
      step
    ) {
      return new Promise((resolve) => {
        let self = this;
        // http://restapi.iaa.ir/ws2/cgi-bin/NRSWEB.cgi/ETIssueJS?AirLine=EP&PNR=VCKZS&Email=info@ahuan.ir&OfficeUser=THR100.WS&OfficePass=Ahuan1348

        let testText =
          "AirLine=" +
          Airline +
          "&PNR=" +
          PNR +
          "&Email=" +
          this.contactInfo[0].email;
        axios
          .get("https://panel.ahuantours.com/api/Nira/ETIssue?" + testText)
          .then(function (response) {
            let data = response.data.replace(/[\r\n]/gm, "-");
            data = JSON.parse(data);
            let newVariabel = data.AirNRSTICKETS[0].Tickets;
            newVariabel = newVariabel.split("--");
            for (let i = 0; i < newVariabel.length; i++) {
              let ticket = newVariabel[i].split("=");
              let name = ticket[0].split("/");
              if (name[1]) {
                let findParamsIndex = self.params.findIndex(
                  (x) =>
                    x.name.toLowerCase() ==
                      name[1].toLowerCase() + " " + name[0].toLowerCase() &&
                    x.FlightNo == FlightNo
                );
                // self.params.findIndex(x =>
                //   (x.name.toLowerCase() == (name[1].toLowerCase() + ' ' + name[0].toLowerCase())) && x.FlightNo == FlightNo)
                self.params[findParamsIndex].ticketNumber = ticket[1];
              }
            }
            resolve();
          })
          .catch(function (error) {
            self.alertText =
              step == 1
                ? "عمیات رزرو ناموفق بود."
                : step == 2
                ? "رزرو پرواز رفت با موفقیت آمیز بود اما پرواز برگشت با خطا مواجه شد."
                : "error";
            self.alertType = "error";
            self.showAlert = true;
            if (step == 1)
              // handle error
              console.log(error);
            console.log("عملیات رزرو ناموفق بود!");
          });
      });
    },
    setDates() {
      this.dateDays = [];
      this.dateYears = [];
      this.dateYearsPass = [new Date().getFullYear()];
      var nowYear = new Date()
        .toLocaleDateString("fa-IR-u-nu-latn")
        .slice(0, 4);
      for (let i = 0; i < 100; i++) {
        this.dateYears.push(nowYear - i);
        if (i > 0 && i < 32) {
          this.dateDays.push(i);
          if (i < 20) {
            this.dateYearsPass.push(new Date().getFullYear() + i);
          }
        }
      }
    },
    changeTicket(event) {
      this.$emit("changeTicket", event);
    },
    getAllprice(event) {
      this.allPrice = event;
    },
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
  },
  mounted() {
    let peapelesNumber =
      Number(this.$route.query.adl) +
      Number(this.$route.query.chd) +
      Number(this.$route.query.inf);
    this.users = [];

    for (let i = 0; i < this.Passenger[0].peaple; i++) {
      this.users.push({
        ageType: "old",
      });
    }
    for (let i = 0; i < this.Passenger[0].child; i++) {
      this.users.push({
        ageType: "child",
      });
    }
    for (let i = 0; i < this.Passenger[0].baby; i++) {
      this.users.push({
        ageType: "baby",
      });
    }

    this.setDates();
  },
};
</script>