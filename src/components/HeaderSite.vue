<template>
  <div
    id="header"
    v-cloak
    class="widthAll fixed"
    style="top: 0; right: 0; z-index: 2"
  >
    <v-row class="header grey lighten-3" justify="center">
      <div class="indexDiv py-1 py-sm-3">
        <v-row>
          <router-link to="/">
            <img
              src="@/assets/image/logo-header.png"
              alt="صفحه اصلی"
              style="height: 20px"
            />
          </router-link>
          <span class="headerSpan d-none d-sm-inline-block mt-2"
            >رزرو آنلاین خدمات گردشگری</span
          >
          <v-spacer></v-spacer>
          <!-- <router-link to="/cancell-flight" class="text-decoration-none ml-9">
            <span class="headerSpan d-none d-sm-inline-block">کنسل کردن پرواز</span>
          </router-link> -->
          <span class="ml-3 ml-sm-0 headerText grey--text text--darken-3">
            <a
              href="tel:02141889"
              class="grey--text text--darken-3 text-decoration-none"
              >021-41889</a
            >
          </span>
          <v-icon color="grey darken-2" class="mr-2 d-none d-sm-inline-block">
            mdi-phone-in-talk
          </v-icon>
        </v-row>
      </div>
    </v-row>
    <v-row class="white top-bar" justify="center" align="center">
      <div class="indexDiv headerButtons">
        <v-row
          align="center"
          justify="space-between"
          class="d-none d-md-flex px-2"
        >
          <!-- <router-link to="/cancell-flight" class="text-decoration-none ml-9">
            <span class="headerSpan d-none d-sm-inline-block">کنسل کردن پرواز</span>
          </router-link> -->
          <!-- <v-skeleton-loader class="textLoader d-inline-block" type="chip" :loading="isLoading">
            <a href="/flight" class="text-decoration-none"
              @click="activeLinkMenuHeader != 'پرواز' ? activeLinkMenuHeader = 'پرواز' : activeLinkMenuHeader = ''">
              <span class="ml-2 ml-md-3 ml-lg-5 mb-2 mb-0 ">پرواز</span>
            </a>
          </v-skeleton-loader> -->
          <v-skeleton-loader
            class="textLoader d-inline-block relative"
            type="chip"
            :loading="isLoading"
          >
            <v-skeleton-loader
              class="textLoader d-inline-block show-sub-menu-parent"
              type="chip"
              :loading="isLoading"
            >
              <router-link to="/flight" class="text-decoration-none">
                <span
                  class="ml-2 ml-md-3 ml-lg-5 mb-2 mb-0"
                  @click="
                    activeLinkMenuHeader != 'پرواز'
                      ? (activeLinkMenuHeader = 'پرواز')
                      : (activeLinkMenuHeader = '')
                  "
                  >پرواز
                </span>
              </router-link>
            </v-skeleton-loader>
          </v-skeleton-loader>
          <v-skeleton-loader
            class="textLoader d-inline-block relative"
            type="chip"
            :loading="isLoading"
          >
            <v-skeleton-loader
              class="textLoader d-inline-block show-sub-menu-parent"
              type="chip"
              :loading="isLoading"
            >
              <router-link to="/tour-page" class="text-decoration-none">
                <span
                  class="ml-2 ml-md-3 ml-lg-5 mb-2 mb-0"
                  @click="
                    activeLinkMenuHeader != 'تور'
                      ? (activeLinkMenuHeader = 'تور')
                      : (activeLinkMenuHeader = '')
                  "
                  >تور
                </span>
              </router-link>
              <div class="absolute show-sub-menu" style="right: -100%">
                <v-list nav dense style="">
                  <div class="">
                    <v-list-item
                      v-for="(group, i) in tours"
                      :key="i"
                      class="cursorPointer titleHeader py-0"
                    >
                      <router-link
                        :to="'/tour/' + group.id"
                        style="text-decoration: none"
                        class="topMenu"
                      >
                        <v-list-item-title
                          @click="group.active = !group.active"
                          class="topMenu pr-2"
                          style="font-weight: bold; width: 100px"
                          >{{ group.name }}</v-list-item-title
                        >
                      </router-link>
                      <div
                        class="absolute submenu rounded-lg"
                        style="
                          right: 90px;
                          white-space: nowrap;
                          top: 0;
                          border: 1px solid rgb(172, 172, 172);
                          background: #fff;
                        "
                      >
                        <v-row
                          v-for="(sub2, k) in group.packages"
                          :key="k"
                          class="caption pa-2 submenu2"
                          style="
                            font-family: Byekan !important;
                            font-weight: bold;
                          "
                        >
                          <!-- <router-link class="relative pl-2" :to="'/tour' + '/' + sub2.id + '/' + group.name"
                            style="text-decoration:none;color:rgb(39, 39, 39)"> -->
                          <router-link
                            class="relative pl-2"
                            :to="'/tour-page' + '/' + sub2.id"
                            style="
                              text-decoration: none;
                              color: rgb(39, 39, 39);
                            "
                          >
                            <v-icon size="9" color="red" class="mx-2"
                              >mdi-circle</v-icon
                            >
                            {{ sub2.package }}
                          </router-link>
                        </v-row>
                      </div>
                    </v-list-item>
                  </div>
                </v-list>
              </div>
            </v-skeleton-loader>
          </v-skeleton-loader>
          <v-skeleton-loader
            class="textLoader d-inline-block"
            type="chip"
            :loading="isLoading"
          >
            <a href="/iranhotels" class="text-decoration-none">
              <span
                class="ml-2 ml-md-3 ml-lg-5 mb-2 mb-0"
                @click="activeLinkMenuHeader = 'آهوان'"
                >هتل آهوان</span
              >
            </a>
          </v-skeleton-loader>
          <!-- <v-skeleton-loader class="textLoader d-inline-block" type="chip" :loading="isLoading">
            <router-link to="/final-tour" class="text-decoration-none">
              <span class="ml-2 ml-md-3 ml-lg-5 mb-2 mb-0 red--text bold" @click="activeLinkMenuHeader = 'لیگ'">
                لیگ قهرمانان اروپا
              </span>
            </router-link>
          </v-skeleton-loader> -->
          <v-skeleton-loader
            class="textLoader d-inline-block relative"
            type="chip"
            :loading="isLoading"
          >
            <v-skeleton-loader
              class="textLoader d-inline-block show-sub-menu-parent"
              type="chip"
              :loading="isLoading"
            >
              <router-link to="/Visa" class="text-decoration-none">
                <span
                  class="ml-2 ml-md-3 ml-lg-5 mb-2 mb-0"
                  @click="
                    activeLinkMenuHeader != 'ویزا'
                      ? (activeLinkMenuHeader = 'ویزا')
                      : (activeLinkMenuHeader = '')
                  "
                  >خدمات ویزا
                </span>
              </router-link>
              <div class="absolute show-sub-menu" style="right: -22%">
                <v-list nav dense style="">
                  <div class="">
                    <v-list-item class="cursorPointer titleHeader py-0">
                      <router-link
                        to="/visa-england"
                        style="text-decoration: none"
                        class="topMenu"
                      >
                        <v-list-item-title
                          @click="group.active = !group.active"
                          class="topMenu pl-2 pl-2 d-flex"
                          style="font-weight: bold"
                        >
                          <!-- <img width="30" src="@/assets/image/سفارت انگلیس (4).jpg" alt="سفارت انگلیس" class="ml-1"> -->
                          ویزای انگلیس
                        </v-list-item-title>
                      </router-link>
                    </v-list-item>
                    <v-list-item class="cursorPointer titleHeader py-0">
                      <router-link
                        to="/visa-america"
                        style="text-decoration: none"
                        class="topMenu"
                      >
                        <v-list-item-title
                          @click="group.active = !group.active"
                          class="topMenu pl-2 pl-2 d-flex"
                          style="font-weight: bold"
                        >
                          <!-- <img width="30" src="@/assets/image/سفارت آمریکا (4).jpg" alt="سفارت آمریکا" class="ml-1"> -->
                          ویزای آمریکا
                        </v-list-item-title>
                      </router-link>
                    </v-list-item>

                    <v-list-item class="cursorPointer titleHeader py-0">
                      <router-link
                        to="/visa-canada"
                        style="text-decoration: none"
                        class="topMenu"
                      >
                        <v-list-item-title
                          @click="group.active = !group.active"
                          class="topMenu pl-2 d-flex"
                          style="font-weight: bold"
                        >
                          <!-- <img width="30" src="@/assets/image/سفارت  کانادا(4).jpg" alt="سفارت کانادا" class="ml-1"> -->
                          ویزای کانادا
                        </v-list-item-title>
                      </router-link>
                    </v-list-item>
                    <v-list-item class="cursorPointer titleHeader py-0">
                      <router-link
                        to="/visa-europe"
                        style="text-decoration: none"
                        class="topMenu"
                      >
                        <v-list-item-title
                          @click="group.active = !group.active"
                          class="topMenu pl-2 pl-2 d-flex"
                          style="font-weight: bold"
                        >
                          <!-- <img width="30" src="@/assets/image/سفارت  اروپا(4).jpg" alt="سفارت اروپا" class="ml-1"> -->
                          ویزای اروپا
                        </v-list-item-title>
                      </router-link>
                    </v-list-item>
                  </div>
                </v-list>
              </div>
            </v-skeleton-loader>
          </v-skeleton-loader>
          <v-skeleton-loader
            class="textLoader d-inline-block"
            type="chip"
            :loading="isLoading"
          >
            <router-link
              to="/office-protector-customer-interests/"
              class="text-decoration-none"
            >
              <span
                class="ml-2 ml-md-3 ml-lg-5 mb-2 mb-0"
                @click="activeLinkMenuHeader = 'دفتر'"
                >دفتر حافظ منافع مشتری</span
              >
            </router-link>
          </v-skeleton-loader>
          <v-skeleton-loader
            class="textLoader d-inline-block"
            type="chip"
            :loading="isLoading"
          >
            <router-link to="/contact-us" class="text-decoration-none">
              <span
                class="ml-2 ml-md-3 ml-lg-5 mb-2 mb-0"
                @click="activeLinkMenuHeader = 'اخبار'"
                >تماس با ما</span
              >
            </router-link>
          </v-skeleton-loader>
          <span></span>
          <v-skeleton-loader
            class="textLoader d-inline-block"
            :class="isLoading && 'mt-2'"
            type="chip"
            :loading="isLoading"
          >
            <div v-if="isLogin" class="cursorPointer" @click="logOut">
              <router-link to="/profile" class="text-decoration-none">
                <span
                  class="font-14 grey--text d-inline-block ml-4"
                  style="white-space: nowrap"
                >
                  {{ userName }}
                </span></router-link
              >
            </div>
            <div
              v-else
              class="cursorPointer"
              @click="
                loginType = 'login';
                loginDialog = true;
                loginStep = 1;
                resetLoginForm();
              "
            >
              <v-icon
                color="grey darken-2"
                large
                class="icon-small-xs ml-3 ml-sm-0"
              >
                mdi-account-outline
              </v-icon>
              <span class="font-14 grey--text d-none d-sm-inline-block">
                ورود - ثبت نام
              </span>
            </div>
          </v-skeleton-loader>
        </v-row>
        <v-row class="d-flex d-md-none humberger-header-menue">
          <v-app-bar-nav-icon
            @click.stop="showMenuSmall = !showMenuSmall"
            style="z-index: 1"
          ></v-app-bar-nav-icon>
          <v-navigation-drawer
            v-model="showMenuSmall"
            fixed
            right
            class="menue-list"
            temporary
            style="z-index: 2"
          >
            <v-list nav dense>
              <v-list-item-group
                v-model="activePage"
                active-class="red--text text--accent-4 "
              >
                <router-link to="/flight" class="text-decoration-none">
                  <v-list-item
                    @click="
                      showMenuSmall = false;
                      activeLinkMenuHeader = '';
                    "
                  >
                    <v-icon class="ml-2">mdi-airplane</v-icon>
                    <v-list-item-title> پرواز </v-list-item-title>
                  </v-list-item>
                </router-link>
                <v-list-item
                  @click="
                    activeLinkMenuHeader != 'تور'
                      ? (activeLinkMenuHeader = 'تور')
                      : (activeLinkMenuHeader = '')
                  "
                  :style="{
                    background: activeLinkMenuHeader == 'تور' ? '#f6d2cb' : '',
                  }"
                  class="rounded-lg"
                >
                  <v-icon class="ml-2">mdi-account-group</v-icon>
                  <v-list-item-title>تور</v-list-item-title>
                </v-list-item>
                <div v-if="activeLinkMenuHeader == 'تور'">
                  <div v-for="(link, i) in tours" :key="i" class="my-2">
                    <v-list-group :key="link.name" no-action :value="false">
                      <template v-slot:activator>
                        <v-list-item-title>
                          <span>{{ link.name }}</span>
                        </v-list-item-title>
                      </template>
                      <v-list-item
                        v-for="sublink in link.packages"
                        :key="sublink.text"
                        class="cursorPointer titleHeader"
                      >
                        <!-- <router-link class="relative widthAll d-flex" :to="'/tour' + '/' + sublink.id + '/' + link.name"
                          style="text-decoration:none;color:rgb(39, 39, 39);height: 38px;"> -->
                        <router-link
                          class="relative widthAll d-flex"
                          :to="'/tour-page' + '/' + sublink.id"
                          style="
                            text-decoration: none;
                            color: rgb(39, 39, 39);
                            height: 38px;
                          "
                        >
                          <v-list-item-title
                            class="topMenu"
                            style="font-weight: bold"
                          >
                            <v-icon size="9" color="red" class="ml-2"
                              >mdi-circle</v-icon
                            >
                            {{ sublink.package }}
                          </v-list-item-title>
                        </router-link>
                      </v-list-item>
                    </v-list-group>
                  </div>
                </div>
                <a href="/iranhotels" class="text-decoration-none">
                  <v-list-item
                    @click="
                      showMenuSmall = false;
                      activeLinkMenuHeader = '';
                    "
                  >
                    <v-icon class="ml-2">mdi-hospital-building</v-icon>
                    <v-list-item-title>هتل آهوان</v-list-item-title>
                  </v-list-item>
                </a>
                <!-- <router-link to="/final-tour" class="text-decoration-none">
                  <v-list-item @click=" showMenuSmall = false; activeLinkMenuHeader = ''">
                    <v-icon class="ml-2" color="red">mdi-soccer</v-icon>
                    <v-list-item-title>
                      <h4 class="red--text">لیگ قهرمانان اروپا</h4>
                    </v-list-item-title>
                  </v-list-item>
                </router-link> -->

                <v-list-item
                  @click="
                    activeLinkMenuHeader != 'ویزا'
                      ? (activeLinkMenuHeader = 'ویزا')
                      : (activeLinkMenuHeader = '')
                  "
                  :style="{
                    background: activeLinkMenuHeader == 'ویزا' ? '#f6d2cb' : '',
                  }"
                  class="rounded-lg"
                >
                  <v-icon class="ml-2">mdi-checkbook</v-icon>
                  <v-list-item-title>خدمات ویزا</v-list-item-title>
                </v-list-item>
                <div v-if="activeLinkMenuHeader == 'ویزا'">
                  <div class="my-2">
                    <v-list-item class="cursorPointer titleHeader">
                      <router-link
                        class="relative widthAll d-flex"
                        to="/visa-england"
                        style="
                          text-decoration: none;
                          color: rgb(39, 39, 39);
                          height: 38px;
                        "
                      >
                        <v-list-item-title
                          class="topMenu d-flex"
                          style="font-weight: bold"
                        >
                          <!-- <img width="30" src="@/assets/image/سفارت انگلیس (4).jpg" alt="سفارت انگلیس" class="ml-1"> -->
                          ویزای انگلیس
                        </v-list-item-title>
                      </router-link>
                    </v-list-item>
                    <v-list-item class="cursorPointer titleHeader">
                      <router-link
                        class="relative widthAll d-flex"
                        to="/visa-america"
                        style="
                          text-decoration: none;
                          color: rgb(39, 39, 39);
                          height: 38px;
                        "
                      >
                        <v-list-item-title
                          class="topMenu d-flex"
                          style="font-weight: bold"
                        >
                          <!-- <img width="30" src="@/assets/image/سفارت آمریکا (4).jpg" alt="سفارت آمریکا" class="ml-1"> -->
                          ویزای آمریکا
                        </v-list-item-title>
                      </router-link>
                    </v-list-item>
                    <v-list-item class="cursorPointer titleHeader">
                      <router-link
                        class="relative widthAll d-flex"
                        to="/visa-canada"
                        style="
                          text-decoration: none;
                          color: rgb(39, 39, 39);
                          height: 38px;
                        "
                      >
                        <v-list-item-title
                          class="topMenu"
                          style="font-weight: bold"
                        >
                          <!-- <img width="30" src="@/assets/image/سفارت  کانادا(4).jpg" alt="سفارت کانادا" class="ml-1"> -->
                          ویزای کانادا
                        </v-list-item-title>
                      </router-link>
                    </v-list-item>
                    <v-list-item class="cursorPointer titleHeader">
                      <router-link
                        class="relative widthAll d-flex"
                        to="/visa-europe"
                        style="
                          text-decoration: none;
                          color: rgb(39, 39, 39);
                          height: 38px;
                        "
                      >
                        <v-list-item-title
                          class="topMenu"
                          style="font-weight: bold"
                        >
                          <!-- <img width="30" src="@/assets/image/سفارت  اروپا(4).jpg" alt="سفارت اروپا" class="ml-1"> -->
                          ویزای اروپا
                        </v-list-item-title>
                      </router-link>
                    </v-list-item>
                  </div>
                </div>
                <router-link
                  to="/office-protector-customer-interests/"
                  class="text-decoration-none"
                >
                  <v-list-item
                    @click="
                      showMenuSmall = false;
                      activeLinkMenuHeader = '';
                    "
                  >
                    <v-icon class="ml-2">mdi-book-open-page-variant</v-icon>
                    <v-list-item-title>دفتر حافظ منافع مشتری</v-list-item-title>
                  </v-list-item>
                </router-link>
                <router-link to="/contact-us" class="text-decoration-none">
                  <v-list-item
                    @click="
                      showMenuSmall = false;
                      activeLinkMenuHeader = '';
                    "
                  >
                    <v-icon class="ml-2">mdi-newspaper-variant-outline</v-icon>
                    <v-list-item-title>تماس با ما</v-list-item-title>
                  </v-list-item>
                </router-link>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
          <v-spacer></v-spacer>
          <v-skeleton-loader
            class="textLoader d-inline-block"
            :class="isLoading && 'mt-2'"
            type="chip"
            :loading="isLoading"
          >
            <div v-if="isLogin" class="cursorPointer" @click="logOut">
              <router-link to="/profile" class="text-decoration-none">
                <span
                  class="font-14 grey--text d-inline-block ml-4"
                  style="white-space: nowrap"
                >
                  {{ userName }}
                </span>
              </router-link>
            </div>
            <div
              v-else
              class="cursorPointer"
              @click="
                loginType = 'login';
                loginDialog = true;
                loginStep = 1;
                resetLoginForm();
              "
            >
              <v-icon
                color="grey darken-2"
                large
                class="icon-small-xs ml-3 ml-sm-0"
              >
                mdi-account-outline
              </v-icon>
              <span
                class="font-14 grey--text d-none d-sm-inline-block"
                style="white-space: nowrap"
              >
                ورود - ثبت نام
              </span>
            </div>
          </v-skeleton-loader>
        </v-row>
      </div>
    </v-row>
    <!-- alert -->
    <v-alert
      v-if="showAlert"
      dark
      class="white--text fixed"
      :type="alertType"
      style="bottom: 0; right: 10px; min-width: 200px; z-index: 4444444444444"
      >{{ alertText }}</v-alert
    >
    <v-dialog
      v-if="loginDialog"
      class="rounded-lg loginDialog"
      v-model="loginDialog"
      style="z-index: 2"
      width="450"
    >
      <v-card class="pa-2 hideOver relative" style="border-radius: 10px">
        <div
          class="rounded-xl absolute grey lighten-4"
          style="height: 50px; width: 50px; bottom: 20px; right: -20px"
        ></div>
        <div
          class="rounded-circle absolute red lighten-5"
          style="height: 50px; width: 50px; top: -20px; left: -20px"
        ></div>
        <div
          class="rounded-xl absolute grey lighten-4"
          style="height: 45px; width: 106px; bottom: -38px; right: 50%"
        ></div>
        <v-icon
          class="absolute black--text"
          @click="loginDialog = false"
          style="top: 5px; right: 5px"
          >mdi-close</v-icon
        >
        <div class="my-6">
          <h3 v-if="loginStep == 2 && UserType == 1" class="text-center">
            تایید شماره موبایل
          </h3>
          <h3
            v-else-if="
              (loginType == 'login' &&
                loginStep != 3 &&
                UserType == 1 &&
                loginStep == 1 &&
                loginType == 'login') ||
              (UserType == 2 && loginStep == 1 && loginType == 'login')
            "
            class="text-center mt-6"
          >
            ثبت نام / ورود به حساب کاربری
          </h3>
          <h4
            v-else-if="
              (loginStep != 3 && UserType == 1) ||
              (UserType == 2 && loginStep == 1 && loginType == 'register')
            "
            class="text-center mt-6"
          >
            ثبت نام در سایت گردشگری آهوان
          </h4>
          <span
            v-if="showAlert"
            class="widthAll text-center d-block caption mt-2"
            :class="alertType == 'error' ? 'red--text' : 'green--text'"
            style="font-family: Byekan !important"
            >{{ alertText }}</span
          >
        </div>
        <v-row v-if="loginStep == 1" justify="center">
          <div
            class="grey lighten-4 my-6 rounded-lg hideOver body-2"
            style="width: 240px; font-family: Byekan !important"
          >
            <v-row>
              <v-col
                class="py-3 text-center cursorPointer text-center"
                @click="UserType = 1"
                :class="UserType == 1 && 'red lighten-5'"
              >
                <h4
                  :class="
                    UserType == 1 ? 'red--text' : 'grey--text text--darken-1'
                  "
                >
                  مسافر
                </h4>
              </v-col>
              <v-col
                class="py-3 text-center cursorPointer"
                @click="UserType = 2"
                :class="UserType == 2 && 'red lighten-5'"
              >
                <h4
                  :class="
                    UserType == 2 ? 'red--text' : 'grey--text text--darken-1'
                  "
                >
                  شرکت
                </h4>
              </v-col>
            </v-row>
          </div>
        </v-row>
        <v-row v-show="loginStep == 1" justify="center">
          <v-form ref="loginForm" lazy-validation name="headerformname">
            <div v-if="UserType == 1">
              <v-text-field
                v-if="loginType == 'register'"
                outlined
                class="mt-2 rounded-xl"
                append-icon="mdi-account-outline"
                v-model="loginForm.name"
                label="نام"
                :rules="nameRules"
              ></v-text-field>
              <v-text-field
                v-if="loginType == 'register'"
                outlined
                class="mt-1 rounded-xl"
                append-icon="mdi-account-outline"
                v-model="loginForm.family"
                label="نام خانوادگی"
                :rules="familyRules"
              ></v-text-field>
              <v-text-field
                outlined
                class="mt-1 rounded-xl"
                label="موبایل"
                pattern="\d*"
                type="number"
                append-icon="mdi-phone"
                v-model="loginForm.phone"
                :rules="phoneRules"
              ></v-text-field>
            </div>
            <div
              v-if="UserType == 2 && loginType == 'login'"
              style="width: 240px"
            >
              <v-row>
                <v-text-field
                  outlined
                  class="mt-2 rounded-xl"
                  append-icon="mdi-mail"
                  v-model="loginForm.mail"
                  label="ایمیل"
                  :rules="emailRules"
                ></v-text-field>
                <v-text-field
                  outlined
                  class="mt-1 rounded-xl"
                  type="number"
                  append-icon="mdi-phone"
                  pattern="\d*"
                  v-model="loginForm.phone"
                  label="موبایل"
                  :rules="phoneRules"
                ></v-text-field>
                <v-text-field
                  outlined
                  class="mt-1 rounded-xl"
                  type="password"
                  append-icon="mdi-star"
                  v-model="loginForm.password"
                  label="رمزعبور"
                  :rules="emptyRules"
                ></v-text-field>
              </v-row>
            </div>
            <div
              v-if="UserType == 2 && loginType == 'register'"
              style="width: 240px"
            >
              <v-row>
                <v-text-field
                  outlined
                  class="mt-2 rounded-xl"
                  append-icon="mdi-account-outline"
                  v-model="loginForm.name"
                  label="نام نماینده"
                  :rules="nameRules"
                ></v-text-field>
                <v-text-field
                  outlined
                  class="mt-1 rounded-xl"
                  append-icon="mdi-account-outline"
                  v-model="loginForm.family"
                  label="نام خانوادگی نماینده"
                  :rules="familyRules"
                ></v-text-field>
                <v-text-field
                  outlined
                  class="mt-1 rounded-xl"
                  append-icon="mdi-account-group"
                  v-model="loginForm.companeyName"
                  label="نام شرکت یا آژانس"
                  :rules="emptyRules"
                ></v-text-field>
                <v-select
                  v-model="loginForm.companeyWork"
                  :items="companeyWorkItems"
                  :rules="emptyRules"
                  outlined
                  class="mt-2 rounded-xl"
                  append-icon="mdi-semantic-web"
                  label="حوضه فعالیت شرکت"
                ></v-select>
                <v-text-field
                  outlined
                  class="mt-1 rounded-xl"
                  type="number"
                  append-icon="mdi-numeric"
                  v-model="loginForm.code"
                  pattern="\d*"
                  label="کد ثبت شرکت"
                  :rules="emptyRules"
                ></v-text-field>
                <v-text-field
                  outlined
                  class="mt-1 rounded-xl"
                  type="number"
                  append-icon="mdi-phone"
                  v-model="loginForm.phone"
                  pattern="\d*"
                  label="شماره موبایل نماینده"
                  :rules="phoneRules"
                ></v-text-field>
                <v-text-field
                  outlined
                  class="mt-1 rounded-xl"
                  append-icon="mdi-mail"
                  v-model="loginForm.mail"
                  label="آدرس ایمیل شرکت"
                  :rules="emailRules"
                ></v-text-field>
                <v-text-field
                  outlined
                  class="mt-1 rounded-xl"
                  type="password"
                  append-icon="mdi-star"
                  v-model="loginForm.password"
                  label="رمزعبور"
                  :rules="emptyRules"
                ></v-text-field>
              </v-row>
            </div>
          </v-form>
        </v-row>
        <v-row v-if="loginStep == 2 && UserType != 2" justify="center">
          <v-form ref="loginOtpForm" lazy-validation name="loginOtpForm">
            <span
              class="body-2 text-center d-block"
              style="font-family: Byekan !important"
              >کد 4 رقمی ارسال شده بر روی شماره موبایل را لطفا وارد
              نمایید.</span
            >
            <div class="mb-2 mt-4 px-12">
              <v-otp-input
                pattern="\d*"
                v-model="loginForm.otp"
                class="mx-6 mx-md-12"
                length="4"
              ></v-otp-input>
            </div>
          </v-form>
        </v-row>
        <v-row
          v-if="
            loginStep == 3 ||
            (UserType == 2 && loginType == 'register' && loginStep == 2) ||
            (UserType == 2 && loginStep == 2)
          "
          justify="center"
        >
          <img
            class="my-6"
            src="@/assets/image/success.png"
            alt=""
            width="130px"
          />
          <h5
            v-if="UserType == 2 && loginType == 'register'"
            class="green--text text--darken-2 my-3 text-center d-block"
          >
            اطلاعات شما با موفقیت دریافت شد.لطفا منتظر تایید باشید.
          </h5>
          <h4
            v-else
            class="green--text text--darken-2 my-3 widthAll text-center"
          >
            عملیات ورود با موفقیت انجام شد.
          </h4>
        </v-row>
        <v-row justify="center">
          <span
            v-if="resendSeconds != 0 && loginStep == 2 && UserType == 1"
            class="body-2 text-center mb-2 widthAll text-center"
            style="font-family: Byekan !important"
            >امکان ارسال مجدد تا {{ resendSeconds }} ثانیه دیگر</span
          >
          <div class="widthAll">
            <v-row justify="center">
              <div
                v-if="resendSeconds == 0 && loginStep == 2 && UserType == 1"
                @click="resendSeconds = 60"
                class="body-2 blue--text text--darken-2 text-decoration-underline mb-3 cursorPointer d-inline-block mx-auto"
                style="font-family: Byekan !important"
              >
                ارسال مجدد کد
              </div>
            </v-row>
          </div>

          <span
            v-if="loginStep == 2 && UserType != 2"
            class="body text-center widthAll grey--text text--darken-1"
            style="font-family: Byekan !important"
          >
            {{ loginForm.phone }}
            <span
              @click="loginStep = 1"
              v-if="UserType == 1"
              class="blue--text text--darken-2 cursorPointer"
              style="text-decoration: underline"
              >تغییر شماره</span
            >
          </span>
          <span
            v-else-if="loginType != 'login' && loginStep == 1"
            class="body-2 text-center widthAll my-4"
            style="font-family: Byekan !important"
          >
            قبلا ثبت نام کرده اید؟
            <span
              @click="loginType = 'login'"
              class="blue--text text--darken-2 cursorPointer"
              style="text-decoration: underline"
              >وارد شوید</span
            >
          </span>
          <v-btn
            v-if="loginStep == 1 || (loginStep == 2 && UserType == 1)"
            :disabled="loginStep == 2 && loginForm.otp.length < 4"
            :loading="loadingApi"
            @click="loginOrRegisterValidate()"
            dark
            class="widthAll red my-4 rounded-xl py-7 mt-1"
            style="width: 55%"
            :class="UserType == 1 && loginStep == 1 ? 'mt-6' : ''"
          >
            {{
              (UserType == 2 && loginType == "login") ||
              (loginStep == 2 && UserType == 1)
                ? "ورود"
                : "مرحله بعدی"
            }}
          </v-btn>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import "@/assets/css/main.css";
import axios from "axios";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("Client-Token");
// const vuetify = new Vuetify({DDDDD
//   theme: {
//     themes: {
//       light: {
//         primary: '#d1d1d1',
//         secondary: '#b0bec5',
//         anchor: '#8c9eff',
//       },
//     },
//   },
// })

var codeSend = null;
// import style from '../css/main.css'
export default {
  name: "HeaderSite",
  components: {
    // style
  },
  props: ["isLogout", "isOpenLogin"],
  watch: {
    showAlert() {
      if (this.showAlert) {
        setTimeout(() => {
          this.showAlert = false;
        }, 5000);
      }
    },
    loginStep() {
      if (this.loginStep == 3 || (this.loginStep == 2 && this.UserType == 2)) {
        setTimeout(() => {
          if (this.loginType == "login") {
            localStorage.setItem("isLoginAhuan", true);
            this.isLogin = true;
          }
          this.loginDialog = false;
        }, 2000);
      }
      this.$refs.loginForm.resetValidation();
    },
    isLogout() {
      if (this.isLogout == true) {
        this.isLogin = false;
        this.userName = "";
      }
    },
    isOpenLogin() {
      this.loginType = "login";
      this.loginDialog = true;
    },
  },
  data: () => ({
    loadingApi: false,
    tours: [],
    links: [
      {
        text: "تور",
        subLinks: [
          {
            text: "اروپا",
            active: false,
            url: "/tour/Europe",
            sub2: [
              {
                text: "فرانسه و امارات(9روز)",
                link: "/tour/europe/France-UAE-9days",
              },
              {
                text: "فرانسه - اسپانیا و امارات(11روز)",
                link: "/tour/europe/France-Spain-UAE-11days",
              },
              {
                text: "سوئیس - فرانسه و امارات(11روز)",
                link: "/tour/europe/Switzerland-France-UAE-11days",
              },
              {
                text: "سوئیس - فرانسه و امارات(11روز)",
                link: "/tour/europe/Switzerland-France-UAE-11-days",
              },
              {
                text: "فرانسه-بلژیک-هلند و امارات(12روز)",
                link: "/tour/europe/France-Belgium-Netherlands-UAE-12days",
              },
              {
                text: "فرانسه-ایتالیا-اسپانیا و امارات(14روز)",
                link: "/tour/europe/France-Italy-Spain-UAE-14days",
              },
              {
                text: "فرانسه-ایتالیا-اسپانیا و امارات(14روز)",
                link: "/tour/europe/France-Italy-Spain-UAE-14-days",
              },
              {
                text: "سوئیس - ایتالیا و امارات(10روز)",
                link: "/tour/europe/Switzerland-Italy-UAE-10days",
              },
              {
                text: "اسپانیا - ترکیه(11روز)",
                link: "/tour/europe/Spain-Turkiye-11days",
              },
              {
                text: "اسپانیا - ایتالیا - ترکیه(13روز)",
                link: "/tour/europe/Spain-Italy-Turkey-13days",
              },
              {
                text: "گرندتور سوئیس(10روز)",
                link: "/tour/europe/Swiss-grandtour-10days",
              },
              {
                text: "سوئیس - ترکیه(8روز)",
                link: "/tour/europe/Switzerland-Turkiye-8days",
              },
              {
                text: "فرانسه - ایتالیا - امارات(13روز)",
                link: "/tour/europe/France-Italy-UAE-9days",
              },
              {
                text: "فرانسه - سوئیس - ایتالیا - امارات(14روز)",
                link: "/tour/europe/France-Switzerland-Italy-UAE-14days",
              },
              {
                text: "سوئیس - اتریش - اسلواکی - مجارستان - امارات(13روز)",
                link: "/tour/europe/Switzerland-Austria-Slovakia-Hungary-Emirates-13days",
              },
            ],
          },
          {
            text: "سریلانکا",
            active: false,
            url: "/tour/Srilanka",
            sub2: [
              {
                text: "14 شب و 15 روز",
                link: "/tour/srilanka/SrilankaTour",
              },
            ],
          },
          {
            text: "روسیه",
            active: false,
            url: "/tour/Moscow",
            sub2: [
              {
                text: "مسکو",
                link: "/tour/moscow/Moscow-5days",
              },
              {
                text: "سنت پترزبورگ+مسکو",
                link: "/tour/moscow/Moscow-St.Petersburg-7days",
              },
              {
                text: "مسکو+سنت پترزبورگ",
                link: "/tour/moscow/Moscow-St.Petersburg-9days",
              },
            ],
          },
          {
            text: "تایلند",
            active: false,
            url: "/tour/Thailand",
            sub2: [
              {
                text: "بانکوک - پاتایا - پوکت",
                link: "/tour/thailand/ThailandTour",
              },
            ],
          },
          {
            text: "تایلند-مالزی",
            active: false,
            url: "/tour/Thailand-Malaysia",
            sub2: [
              {
                text: "کوالالامپور - پوکت - بانکوک",
                link: "/tour/thailand/Thailand-Malaysia-10nights",
              },
            ],
          },
          {
            text: "استانبول",
            active: false,
            url: "/tour/Istanbul",
            sub2: [
              {
                text: "3 شب و 4 روز",
                link: "/tour/istanbul/istanbul-3night",
              },
              {
                text: "4 شب و 5 روز",
                link: "/tour/istanbul/istanbul-4night",
              },
              {
                text: "5 شب و 6 روز",
                link: "/tour/istanbul/istanbul-5night",
              },
            ],
          },
          {
            text: "دبی",
            active: false,
            url: "/tour/Dubai",
            sub2: [
              {
                text: "3 شب و 4 روز",
                link: "/tour/dubai/dubai-3night",
              },
              {
                text: "4 شب و 5 روز",
                link: "/tour/dubai/dubai-4night",
              },
              {
                text: "5 شب و 6 روز",
                link: "/tour/dubai/dubai-5night",
              },
            ],
          },
        ],
      },
    ],
    activeLinkMenuHeader: "",
    activePage: null,
    isLoading: false,
    loginForm: {
      name: "",
      family: "",
      companeyName: "",
      companeyWork: "",
      code: "",
      phone: "",
      mail: "",
      password: "",
      otp: "",
    },
    isLogin: false,
    showMenuSmall: false,
    userName: "",
    loginDialog: false,
    loginStep: 1,
    UserType: 1,
    resendSeconds: 0,
    loginSecondsInterval: "",
    loginType: "login",
    emailRules: [(v) => /.+@.+\..+/.test(v) || "ایمیل نادرست میباشد."],
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
    ],
    emptyRules: [(v) => !!v || "پر کردن این فیلد اجباریست."],
    companeyWorkItems: [
      "آژانس مسافرتی",
      "علمی و دانشگاهی",
      "بانکی",
      "صنعتی",
      "تولیدی",
      "سایر",
    ],
    showAlert: false,
  }),
  methods: {
    resetLoginForm() {
      this.loginForm = {
        name: "",
        family: "",
        companeyName: "",
        companeyWork: "",
        code: "",
        phone: "",
        mail: "",
        password: "",
        otp: "",
      };
    },
    loginOrRegisterValidate() {
      var self = this;

      if (self.loginStep == 1) {
        localStorage.removeItem("Client-Token");
        localStorage.removeItem("fName");
        localStorage.removeItem("ipAddress");
        localStorage.removeItem("isLoginAhuan");
        localStorage.removeItem("lName");
        localStorage.removeItem("user-name");
        localStorage.removeItem("phone-number-ahuan");
        localStorage.removeItem("credit");
        if (self.$refs.loginForm.validate()) {
          // login section_________________________________________________
          if (self.loginType == "login") {
            // user login__________________________________________________
            if (self.UserType == 1) {
              self.loadingApi = true;
              axios
                .get(
                  "https://panel.ahuantours.com/api/login/sendsms/" +
                    self.loginForm.phone
                )
                .then(function (response) {
                  // handle success
                  localStorage.setItem(
                    "phone-number-ahuan",
                    self.loginForm.phone
                  );
                  if (response.data) {
                    self.resendSeconds = 60;
                    self.alertText = "کد تایید برای شما ارسال شد.";
                    self.alertType = "success";
                    self.showAlert = true;
                    self.loginStep = 2;
                  } else {
                    self.alertText = response.data.error;
                    self.alertType = "error";
                    self.showAlert = true;
                  }
                  self.loadingApi = false;
                })
                .catch(function (error) {
                  // handle error
                  self.alertText =
                    error.response.data + "!ابتدا در سایت ثبت‌نام کنید.";
                  self.showAlert = true;
                  self.alertType = "error";
                  self.loginType = "register";
                  self.loadingApi = false;
                });
            }
            // companey login______________________________________________
            else {
              let userInfo = {
                email: self.loginForm.mail,
                mobile: self.loginForm.phone,
                password: self.loginForm.password,
                rememberMe: true,
              };
              self.loadingApi = true;
              axios
                .post("https://ahuan.ir/api/login", userInfo)
                .then(function (response) {
                  // handle success
                  if (response.data.sussecc) {
                    localStorage.setItem("user-name", response.data.result);
                    localStorage.setItem("isLoginAhuan", true);
                    self.userName = response.data.result;
                    self.alertText = "عملیات ورود با موفقیت انجام شد.";
                    self.alertType = "success";
                    self.showAlert = true;
                    self.loginStep = 2;
                  } else {
                    self.alertText = response.data.error;
                    self.alertType = "error";
                    self.showAlert = true;
                  }
                  self.loadingApi = false;
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                  self.loadingApi = false;
                });
            }
          }
          // register section_________________________________________________
          else {
            // user register__________________________________________________
            if (self.UserType == 1) {
              self.loadingApi = true;
              var registerOptions = {
                // displayname: self.loginForm.name + " " + self.loginForm.family,
                // email: self.loginForm.mail,
                phoneNumber: self.loginForm.phone,
                fName: self.loginForm.name,
                lName: self.loginForm.family,
                // address:
                // cardNo:
                // companyId:
                // codeMelli:
                // passportNo:
                // accountNo:
                // gender:
                // shebaNo:
                // birthDate:
                // password:
                // isConfirmed:
              };
              axios
                .post(
                  "https://panel.ahuantours.com/api/Accounts/Register",
                  registerOptions
                )
                .then(function (res) {
                  // handle success
                  axios
                    .get(
                      "https://panel.ahuantours.com/api/login/sendsms/" +
                        self.loginForm.phone
                    )
                    .then(function (response) {
                      // handle success
                      localStorage.setItem(
                        "phone-number-ahuan",
                        self.loginForm.phone
                      );
                      codeSend = response.data;
                      self.resendSeconds = 60;
                      self.alertText = "کد تایید برای شما ارسال شد.";
                      self.alertType = "success";
                      self.showAlert = true;
                      self.loginStep = 2;
                      self.loadingApi = false;
                    })
                    .catch(function (error) {
                      // handle error
                      console.log(error);
                      self.alertText =
                        error.response.data + "!ابتدا در سایت ثبت‌نام کنید.";
                      self.showAlert = true;
                      self.alertType = "error";
                      self.loginType = "register";
                      self.loadingApi = false;
                    });
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                  self.alertText = error;
                  self.showAlert = true;
                  self.alertType = "error";
                  self.loginType = "register";
                  self.loadingApi = false;
                });

              // axios.post('https://ahuan.ir/api/register' , options)
              //         .then(function (response) {
              //           // handle success
              //           // codeSend = response.data
              //           // self.resendSeconds = 60
              //           self.alertText = 'ثبت نام با موفقیت انجام شد.'
              //           self.alertType = 'success'
              //           self.showAlert = true
              //           // self.loginStep = 2
              //         })
              //         .catch(function (error) {
              //           // handle error
              //           console.log(error);
              //         })
            }
            // companey register______________________________________________
            else {
              //
            }
          }
          //     if ((self.loginForm.phone == '09054791374' && self.loginType == 'login') || self.loginType == 'register') {
          //       if (self.UserType == 1) {
          //         self.resendSeconds = 60
          //         self.showAlert = true
          //         self.alertText = 'کد تایید برای شما ارسال شد.'
          //         self.alertType = 'success'
          //         self.loginStep = 2
          //       }
          //       self.loginStep = 2
          // }
          //     else {

          //       self.loginType = 'register'
          //       self.showAlert = true
          //       self.alertText = 'برای ورود به سایت باید ابتدا ثبت نام کنید.'
          //       self.alertType = 'error'
          //       self.loginForm.password = ''
          //     }
          //     this.$refs.loginForm.resetValidation()
        } else {
          self.showAlert = true;
          self.alertText = "لطفا فیلدها را بدرستی تکمیل کنید.";
          self.alertType = "error";
        }
      } else if (self.loginStep == 2) {
        self.loadingApi = true;
        axios
          .get(
            "https://panel.ahuantours.com/api/Login/Checksms/" +
              self.loginForm.phone +
              "/" +
              self.loginForm.otp
          )
          .then(function (response) {
            // handle success
            self.isLogin = true;
            localStorage.setItem(
              "user-name",
              response.data.fName + " " + response.data.lName
            );
            localStorage.setItem("fName", response.data.fName);
            localStorage.setItem(
              "credit",
              response.data.noLimit == true
                ? "noLimit"
                : response.data.credit != null
                ? response.data.credit
                : 0
            );
            localStorage.setItem("lName", response.data.lName);
            localStorage.setItem("Client-Token", response.data.token);
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + response.data.token;
            self.userName = response.data.fName + " " + response.data.lName;
            console.log(response.data);
            self.loginStep = 3;
            self.loadingApi = false;
            self.showAlert = true;
            self.alertText = "عملیات ورود با موفقیت انجام شد.";
            self.alertType = "success";
          })
          .catch(function (error) {
            self.loadingApi = false;
            self.loginForm.otp == "";
            self.showAlert = true;
            self.alertText = "کد وارد شده صحیح نیست.";
            self.alertType = "error";
          });
      }
    },
    logOut() {
      // var self = this
      // axios.put('https://ahuan.ir/api/login')
      //   .then(function (response) {
      //     // handle success
      //     self.alertText = 'عملیات خروج از سایت انجام شد.'
      //     self.alertType = 'success'
      //     self.showAlert = true
      //     localStorage.setItem('isLoginAhuan', false)
      //     localStorage.removeItem('user-name')
      //     self.isLogin = false
      //   })
      //   .catch(function (error) {
      //     // handle error
      //     console.log(error);
      //   })
    },
    getTours() {
      let self = this;
      axios
        .get("https://panel.ahuantours.com/api/package/menu")
        .then(function (response) {
          let res = response.data.map((x) => {
            return {
              id: x.id,
              name: x.group,
              packages: x.packages,
              route: "/tour/" + x.group.replace(/\s/g, "-"),
            };
          });
          self.$emit("getGroups", res);
          self.tours = res;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    checkIsLoggedIn() {
      let self = this;
      self.loadingApi = true;
      axios
        .get("https://panel.ahuantours.com/api/Login/isLoggedIn")
        .then(function (response) {
          // handle success
          localStorage.setItem("isLoginAhuan", true);
          self.isLogin = true;
          if (localStorage.getItem("user-name")) {
            self.userName = localStorage.getItem("user-name");
          }
          self.loadingApi = false;
        })
        .catch(function (error) {
          // handle error
          localStorage.removeItem("Client-Token");
          localStorage.removeItem("fName");
          localStorage.removeItem("ipAddress");
          localStorage.removeItem("isLoginAhuan");
          localStorage.removeItem("lName");
          localStorage.removeItem("user-name");
          localStorage.removeItem("phone-number-ahuan");
          localStorage.removeItem("credit");
          self.isLogin = false;
          console.log(error);
          self.loadingApi = false;
        });
    },
  },
  mounted() {
    // if (localStorage.getItem("Client-Token")) {
    this.checkIsLoggedIn();
    // }
    this.getTours();
    window.scrollTo(0, 0);
    this.loginSecondsInterval = setInterval(() => {
      this.resendSeconds > 0 && this.resendSeconds--;
    }, 1000);
  },
};
</script>
