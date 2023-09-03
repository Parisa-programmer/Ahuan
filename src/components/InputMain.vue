<template>
  <div v-cloak class="widthAll">
    <v-row justify="center" v-if="page == 'main'">
      <div class="indexDiv">
        <v-card elevation="1" class=" white relative pt-2 pt-sm-2 pt-md-4 pt-lg-6 pb-1 rounded-lg sections-card">
          <v-row class="justify-center justify-md-space-between">
            <div v-for="(item, i) in allSections" :key="i" class="px-1 px-md-2 px-lg-3 px-xl-4 sections"
              @click="changeActiveSection(i)">
              <v-skeleton-loader class="inputLoader mb-1 mb-sm-1 mb-md-4" type="card-heading">
                <v-row class="rounded-lg py-2 py-sm-2 py-md-3 py-lg-4 py-xl-5 cursorPointer" justify="center"
                  :class="item.active ? 'lighten-5 red' : 'lighten-4 grey'">
                  <v-icon class="ml-2 widthAll text-center"
                    :class="item.active ? 'text--darken-1 red--text' : 'text--darken-1 grey--text'">{{ item.icon
                    }}</v-icon>
                  <span class="widthAll text-center mt-2 mt-sm-0"
                    :class="item.active ? 'text--darken-1 red--text' : 'text--darken-1 grey--text'">{{ item.title
                    }}</span>
                </v-row>
                <v-row v-if="item.active" class="d-none d-sm-flex" justify="center">
                  <div class="triangleHeader"></div>
                </v-row>
              </v-skeleton-loader>
            </div>
          </v-row>
        </v-card>
      </div>
    </v-row>
    <!-- input box -->
    <v-row class="mb-12" justify="center" v-show="(showSection && windowWidth < 600) || windowWidth >= 600">
      <div class="indexDiv">
        <v-form ref="headerInputForm" lazy-validation>
          <v-card v-show="selectedSection.title != 'بیمه'" elevation="1" class=" rounded-lg px-sm-4 py-2 py-sm-4 py-md-6">
            <v-row>
              <v-col cols="12" sm="5" md="4" lg="3"
                v-if="selectedSection.title != 'آهوان' && selectedSection.title != 'تور' && selectedSection.title != 'اتوبوس' && selectedSection.title != 'قطار'">
                <v-skeleton-loader class="inputLoader mx-0 mx-sm-4"
                  :class="selectedSection.title == 'هتل' || selectedSection.title == 'تور' ? 'mb-sm-2' : 'mb-sm-4'"
                  type="card-heading">
                  <v-row class="red lighten-4 rounded-lg pa-1">
                    <v-col class="mx-1 pa-1 text-center caption cursorPointer rounded-lg changeExternal"
                      style="font-family:Byekan !important" @click="external = false; tourDate = {}; tourDates = []"
                      :class="!external && 'white'">داخلی</v-col>
                    <v-col class="mx-1 pa-1 text-center caption cursorPointer rounded-lg changeExternal"
                      style="font-family:Byekan !important" @click="external = true; tourDate = {}; tourDates = []"
                      :class="external && 'white'">خارجی</v-col>
                  </v-row>
                </v-skeleton-loader>
              </v-col>
              <v-col class="d-none d-md-inline-block" cols="1" sm="0" md="1"
                v-if="selectedSection.title != 'آهوان' && selectedSection.title != 'تور' && selectedSection.title != 'اتوبوس' && selectedSection.title != 'قطار'"></v-col>
              <v-col cols="12" sm="7" md="7" lg="8" class="py-0 py-sm-3"
                v-if="selectedSection.title != 'هتل' && selectedSection.title != 'آهوان' && selectedSection.title != 'تور' && selectedSection.title != 'قطار' && selectedSection.title != 'اتوبوس'">
                <v-skeleton-loader class="inputLoader" type="card-heading">
                  <v-radio-group :disabled="loading" v-if="windowWidth >= 600 || external"
                    class="mt-0 mx-sm-2 byReturnRadio" v-model="byReturn" :row="windowWidth < 600 ? true : true">
                    <v-radio label="یک طرفه" color="red" :value="1" class="byReturn ml-sm-4 ml-sm-0"></v-radio>
                    <v-radio label="رفت و برگشت" color="red" :value="2" class="byReturn ml-sm-4 ml-sm-0"></v-radio>
                    <v-radio v-if="external == true" label="چند مسیره" color="red" :value="3"
                      class="byReturn addFlightButton"></v-radio>
                  </v-radio-group>
                  <v-row v-else class="red lighten-4 rounded-lg mx-md-4 pa-1 mb-4">
                    <v-col class="mx-1 pa-1 text-center caption cursorPointer rounded-lg byReturn"
                      style="font-family:Byekan !important" @click="byReturn = 1" :class="byReturn == 1 && 'white'">یک
                      طرفه</v-col>
                    <v-col class="mx-1 pa-1 text-center caption cursorPointer rounded-lg byReturn"
                      style="font-family:Byekan !important" @click="byReturn = 2" :class="byReturn == 2 && 'white'">رفت و
                      برگشت</v-col>
                  </v-row>
                </v-skeleton-loader>
              </v-col>
              <v-col cols="12" sm="7" md="4" lg="3"
                v-if="selectedSection.title == 'قطار' || selectedSection.title == 'اتوبوس'" class="py-2">
                <v-row class="red lighten-4 rounded-lg mx-md-4 pa-1">
                  <v-col class="mx-1 pa-1 text-center caption cursorPointer rounded-lg byReturn"
                    style="font-family:Byekan !important" @click="byReturn = 1" :class="byReturn == 1 && 'white'">یک
                    طرفه</v-col>
                  <v-col class="mx-1 pa-1 text-center caption cursorPointer rounded-lg byReturn"
                    style="font-family:Byekan !important" @click="byReturn = 2" :class="byReturn == 2 && 'white'">رفت و
                    برگشت</v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row align="center" class="justify-center justify-lg-start"
              :class="byReturn == 3 && 'borderFlight rounded-lg'">
              <v-col cols="12" sm="6" md="4"
                :lg="selectedSection.title == 'هتل' ? 3 : selectedSection.title == 'تور' ? 3 : selectedSection.title == 'آهوان' ? 3 : 4"
                class="px-2 py-1">
                <v-skeleton-loader class="inputLoader" type="card-heading">
                  <v-row class="grey lighten-4 rounded-lg relative" style="height: 45px;" justify="center" align="center">
                    <v-col cols="5"
                      v-if="selectedSection.title != 'هتل' && selectedSection.title != 'تور' && selectedSection.title != 'آهوان'"
                      class="originCityParent relative">
                      <v-autocomplete :disabled="loading"
                        :menu-props="{ closeOnClick: true, bottom: false, offsetY: true }" location="end"
                        v-model="originCity" id="originCity" ref="originCity" :rules="emptyRules2"
                        :items="external ? otherCityesOrigin : persianCityes" :search-input.sync="originSearchInput"
                        :label="byReturn != 3 ? 'مبدا' : 'مبدا اول'" class="font-small-xs hideArrow headerCityes"
                        :class="originCity && originCity.length ? 'pt-2' : 'pt-0'" prepend-inner-icon="mdi-map-marker"
                        @click="viiblePeaple = false" @change="changeHeaderInput('originCity')">
                        <template v-slot:no-data>
                          <span class="body-2 d-block px-4" style="font-family:Byekan !important">شهر مورد نظر یافت
                            نشد!</span>
                        </template>
                      </v-autocomplete>
                    </v-col>
                    <v-col cols="2"
                      v-if="selectedSection.title != 'هتل' && selectedSection.title != 'تور' && selectedSection.title != 'آهوان'">
                      <v-icon class="rounded-circle grey lighten-2 pa-1" @click="exchangeCity"> mdi-swap-horizontal
                      </v-icon>
                    </v-col>
                    <v-col
                      :cols="(selectedSection.title == 'هتل' || selectedSection.title == 'تور' || selectedSection.title == 'آهوان') ? 12 : 5"
                      class="destinationInternalParent relative">
                      <v-autocomplete :disabled="loading" v-model="destinationInternal" ref="destinationInternal"
                        id="destinationInternal" :menu-props="{ closeOnClick: true, }" :rules="emptyRules2"
                        class="font-small-xs hideArrow" :search-input.sync="destinationSearchInput"
                        :class="destinationInternal && destinationInternal.length ? 'pt-2' : 'pt-0'"
                        :items="selectedSection.title == 'هتل' ? persianCityes2 : selectedSection.title == 'تور' ? toursList : selectedSection.title == 'آهوان' ? hotels : (external ? otherCityesOrigin2 : persianCityes2)"
                        :label="selectedSection.title == 'هتل' ? 'نام شهر' : selectedSection.title == 'آهوان' ? 'نام هتل' : selectedSection.title == 'تور' ? 'نام تور' : byReturn == 3 ? 'مقصد اول' : 'مقصد'"
                        prepend-inner-icon="mdi-map-marker" append-inner-icon="mdi-map-marker"
                        @click="viiblePeaple = false" @change="changeHeaderInput('destinationInternal')">
                        <template v-slot:no-data>
                          <span class="body-2 d-block px-4" style="font-family:Byekan !important">
                            {{ selectedSection.title == 'هتل' ? 'شهر' : selectedSection.title == 'آهوان' ? 'هتل' :
                              byReturn
                                == 3 ? 'شهر' : 'شهر' }}
                            مورد نظر یافت نشد!
                          </span>
                        </template></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-skeleton-loader>
              </v-col>
              <v-col cols="12" sm="6" md="4"
                :lg="(selectedSection.title == 'هتل' || selectedSection.title == 'آهوان') ? 3 : selectedSection.title == 'پرواز' || selectedSection.title == 'تور' || selectedSection.title == 'قطار' || selectedSection.title == 'اتوبوس' ? 3 : 2"
                class="px-2 py-1">
                <v-skeleton-loader class="inputLoader" type="card-heading">
                  <div v-if="selectedSection.title != 'تور'"
                    class="mt-1 input-group relative font-small-xs form-control headerBoxFields grey lighten-4 rounded-lg"
                    style="background-color: #f5f5f5;border-radius: 5px;">
                    <date-picker :show="show" ref="date1" color="#bf0000" format="YYYY-MM-DD" clearable: true
                      v-model="date1" locale="fa,en" :locale-config="localeConfig" popover="right" auto-submit
                      :min="minDate"
                      :range="(byReturn == 2 || selectedSection.title == 'هتل' || selectedSection.title == 'آهوان' || selectedSection.title == 'تور') ? true : false"
                      style="" @close="show = false; viiblePeaple = true; changeDate1()" @open=" viiblePeaple = false">
                      <template #header-date="{ formattedDate }">
                        {{ date1.length ? formattedDate : 'انتخاب تاریخ' }}
                      </template>
                    </date-picker>
                    <div @click="!loading && (show = show == true ? false : true)"
                      class="cursorPointer heightAll d-inline-block font-small-xs widthAll showPopup absolute"
                      style="z-index:22;padding: 10px 4px;color:#424242;top:0">
                      <v-icon class="showPopup" style="color:#424242;">
                        mdi-calendar-month
                      </v-icon>
                      {{ (date1 && date1.length) ? selectedDate : 'انتخاب تاریخ' }}
                    </div>
                  </div>
                  <div v-else class="" style="">
                    <v-autocomplete ref="tourDate" :loading="loadingTourDates" readOnly
                      :disabled="!destinationInternal || loadingTourDates" v-model="tourDate"
                      :menu-props="{ closeOnClick: true, }" :rules="emptyRules2"
                      class="grey lighten-4 rounded-lg pt-2 mb-0 font-small-xs hideArrow px-2" :items="tourDates"
                      label="تاریخ" prepend-inner-icon="mdi-calendar-month" @click="viiblePeaple = false"
                      @change="tourDate ? viiblePeaple = true : ''">
                      <template v-slot:no-data>
                        <span class="body-2 d-block px-4" style="font-family:Byekan !important">
                          تاریخی یافت نشد!
                        </span>
                      </template>
                      <template v-slot:item="{ item }">
                        <span class="pt-2 pb-5 widthAll relative">
                          {{ item.text }}
                          <span class="absolute"
                            style="bottom:0px;left:-10px;font-size:12px;color:#ff8686;font-family: 'Roboto', sans-serif !important;">
                            ({{ item.subtitle }})
                          </span>
                        </span>

                        <!-- <v-list-item style="font-size:13px">
                          {{ item.text }} -->
                        <!--  -->
                        <!-- </v-list-item> -->
                      </template>
                    </v-autocomplete>
                  </div>
                </v-skeleton-loader>
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="px-2 py-1">
                <v-skeleton-loader class="inputLoader" type="card-heading">
                  <div class="relative">
                    <v-text-field :readOnly="true" :disabled="loading" v-model="allPeaples"
                      prepend-inner-icon="mdi-account" @click=" viiblePeaple = !viiblePeaple"
                      class="font-small-xs form-control headerBoxFields hideEventPeaple darkInput"></v-text-field>
                    <div v-if="viiblePeaple" class="allPeaplesAfter rounded-lg hideOver widthAll absolute white"
                      style="z-index: 3;top: 40px;">
                      <div v-for="(      room, i      ) in        headerRooms       " :key="i" class="my-3">
                        <v-row align="center"
                          v-if="selectedSection.title != 'پرواز' && selectedSection.title != 'اتوبوس' && selectedSection.title != 'قطار' && selectedSection.title != 'بیمه'">
                          <v-col>
                            <h3 class="pa-3 float-right">اتاق {{ i == 0 ? 'اول' : i == 1 ? 'دوم' : i == 2 ? 'سوم' :
                              'چهارم'
                            }}</h3>
                          </v-col>
                          <v-col>
                            <v-icon class="pt-2 pl-3 float-left red--text cursorPointer"
                              @click=" headerRooms.length > 1 ? headerRooms.splice(i, 1) : ''; selectedRooms.length > 1 ? selectedRooms = [] : ''; roomTab = null; changeRoomValue()">mdi-delete</v-icon>
                            <span class="mt-3 float-left caption red--text cursorPointer"
                              style="font-family:Byekan !important;"
                              @click=" headerRooms.length > 1 ? headerRooms.splice(i, 1) : ''; selectedRooms.length > 1 ? selectedRooms = [] : ''; roomTab = null; changeRoomValue()">حذف</span>
                          </v-col>
                        </v-row>
                        <v-row class="my-4 my-sm-6 body-2 px-2" style="font-family: Byekan !important;">
                          <v-col>
                            <span>بزرگسال</span>
                            <span class="caption grey--text " style="font-family: Byekan !important;">
                              (12 سال به بالا)
                            </span>
                          </v-col>
                          <v-col>
                            <v-icon @click=" room.peaple > 1 ? room.peaple-- : ''; changeRoomValue()"
                              class="green--text float-left" light>
                              mdi-minus-circle
                            </v-icon>
                            <h4 class="float-left mx-3 ">{{ room.peaple }}</h4>
                            <v-icon @click=" room.peaple++; changeRoomValue()" class="green--text float-left" light>
                              mdi-plus-circle
                            </v-icon>
                          </v-col>
                        </v-row>
                        <v-row class="my-4 my-sm-6 body-2 px-2" style="font-family: Byekan !important;">
                          <v-col>
                            کودک
                            <span class="caption grey--text " style="font-family: Byekan !important;">(2-12 سال)</span>
                          </v-col>
                          <v-col>
                            <v-icon @click=" room.child > 0 ? room.child-- : ''; changeRoomValue()"
                              class="green--text float-left" light>
                              mdi-minus-circle
                            </v-icon>
                            <h4 class="float-left mx-3">{{ room.child }}</h4>
                            <v-icon
                              @click=" (((room.peaple * 2) - (room.child) - (room.baby)) > 0) && room.child++; changeRoomValue()"
                              class="green--text float-left" light>
                              mdi-plus-circle
                            </v-icon>
                          </v-col>
                        </v-row>
                        <v-row class="my-4 my-sm-6 body-2 px-2" style="font-family: Byekan !important;">
                          <v-col>
                            <span>
                              نوزاد
                            </span>
                            <span class="caption grey--text " style="font-family: Byekan !important;">(کمتر از 2
                              سال)</span>
                          </v-col>
                          <v-col>
                            <v-icon @click=" room.baby > 0 ? room.baby-- : ''; changeRoomValue()"
                              class="green--text float-left" light>
                              mdi-minus-circle
                            </v-icon>
                            <h4 class="float-left mx-3">{{ room.baby }}</h4>
                            <v-icon
                              @click=" (((room.peaple * 2) - (room.child) - (room.baby)) > 0) && room.baby++; changeRoomValue()"
                              class="green--text float-left" light>
                              mdi-plus-circle
                            </v-icon>
                          </v-col>
                        </v-row>
                        <v-divider v-if="i < headerRooms.length - 1"></v-divider>
                      </div>
                      <div class="my-2"
                        v-if="selectedSection.title != 'پرواز' && selectedSection.title != 'اتوبوس' && selectedSection.title != 'قطار' && selectedSection.title != 'بیمه'">
                        <span v-if="headerRooms.length < 4" class="mr-4 caption cursorPointer red--text"
                          @click=" headerRooms.push({ peaple: 1, child: 0, baby: 0 }); changeRoomValue()"
                          style="font-family:Byekan !important;">+افزودن اتاق</span>
                      </div>
                      <v-divider></v-divider>
                      <div class="pa-3">
                        <v-btn @click=" viiblePeaple = false" class="widthAll" color="red" dark>تایید - {{ allPeaples
                        }}</v-btn>
                      </div>
                    </div>
                  </div>
                </v-skeleton-loader>
              </v-col>
              <v-col cols="12" sm="6" md="4"
                :lg="selectedSection.title == 'پرواز' || selectedSection.title == 'قطار' || selectedSection.title == 'اتوبوس' ? 2 : 3"
                :xl="selectedSection.title == 'پرواز' || selectedSection.title == 'قطار' || selectedSection.title == 'اتوبوس' ? 2 : 3"
                class="px-2 py-1" :class="byReturn == 3 && 'd-none d-lg-block'">
                <v-skeleton-loader class="inputLoader" type="card-heading">
                  <v-btn dark :disabled="loading" color="red"
                    class="widthAll mt-md-4 mt-lg-0 pt-6 pb-5 ronded-xl searchInHeaderBox" @click="searchInHeaderBox"
                    style="border-radius: 7px;" :class="byReturn == 3 && 'd-none d-lg-flex'">جستجو</v-btn>
                </v-skeleton-loader>
              </v-col>
            </v-row>
            <v-row align="center" v-if="byReturn == 3" class="justify-center justify-lg-start borderFlight rounded-lg'">
              <v-col cols="12" sm="6" md="4" lg="4" class="px-2 py-1">
                <v-skeleton-loader class="inputLoader" type="card-heading">
                  <v-row class="grey lighten-4 rounded-lg relative" style="height: 45px;" justify="center" align="center">
                    <v-col cols="5" class="originCityParent2 relative">
                      <v-autocomplete v-model="allFlights[0].originCity" id="originCity2" :items="otherCityesOrigin3"
                        ref="originCity2" :rules="byReturn == 3 ? emptyRules2 : []"
                        :search-input.sync="originSearchInput2" label="مبدا دوم"
                        class="font-small-xs hideArrow headerCityes"
                        :class="allFlights[0].originCity && allFlights[0].originCity.length ? 'pt-2' : 'pt-0'"
                        prepend-inner-icon="mdi-map-marker" @click=" viiblePeaple = false"
                        @change=" changeHeaderInput('originCity0')">
                        <template v-slot:no-data>
                          <span class="body-2 d-block px-4" style="font-family:Byekan !important">شهر مورد نظر یافت
                            نشد!</span>
                        </template>
                      </v-autocomplete>
                    </v-col>
                    <v-col cols="2">
                      <v-icon class="rounded-circle grey lighten-2 pa-1" @click=" exchangeCity(0)"> mdi-swap-horizontal
                      </v-icon>
                    </v-col>
                    <v-col cols="5" class="destinationInternalParent2 relative">
                      <v-autocomplete v-model="allFlights[0].destinationInternal" ref="destinationInternal2"
                        id="destinationInternal2" class="font-small-xs hideArrow"
                        :search-input.sync="destinationSearchInput2"
                        :class="allFlights[0].destinationInternal && allFlights[0].destinationInternal.length ? 'pt-2' : 'pt-0'"
                        :items="otherCityesOrigin4" :rules="byReturn == 3 ? emptyRules2 : []" label="مقصد دوم"
                        prepend-inner-icon="mdi-map-marker" @click=" viiblePeaple = false"
                        @change=" changeHeaderInput('destinationInternal0')">
                        <template v-slot:no-data>
                          <span class="body-2 d-block px-4" style="font-family:Byekan !important">شهر مورد نظر یافت
                            نشد!</span>
                        </template>
                      </v-autocomplete>
                    </v-col>
                  </v-row>
                </v-skeleton-loader>
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="px-2 py-1">
                <v-skeleton-loader class="inputLoader" type="card-heading">
                  <v-skeleton-loader class="inputLoader" type="card-heading">
                    <div class="input-group relative font-small-xs form-control headerBoxFields grey lighten-4 rounded-lg"
                      style="background-color: #f5f5f5;border-radius: 5px;">
                      <date-picker :show="showDate2" ref="date2" color="#bf0000" format="YYYY-MM-DD" clearable: true
                        v-model="allFlights[0].date" locale="fa,en" :locale-config="localeConfig" popover="right"
                        auto-submit :min="minDate" :range="false" style="" @close="showDate2 = false; changeDate2()"
                        @open=" viiblePeaple = false">
                        <template #header-date="{ formattedDate }">
                          {{ allFlights[0].date && allFlights[0].date.length ? formattedDate : 'انتخاب تاریخ' }}
                        </template>
                      </date-picker>
                      <div @click=" showDate2 = showDate2 == true ? false : true"
                        class="cursorPointer heightAll d-inline-block font-small-xs widthAll showPopup2 absolute"
                        style="z-index:22;padding: 10px 4px;color:#424242;top:0">
                        <v-icon class="showPopup2" style="color:#424242;">
                          mdi-calendar-month
                        </v-icon>
                        {{ (allFlights[0].date && allFlights[0].date.length) ? selectedDate2 : 'انتخاب تاریخ' }}
                      </div>
                    </div>
                  </v-skeleton-loader>
                </v-skeleton-loader>
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="px-2 py-1">
                <v-skeleton-loader class="inputLoader" type="card-heading">
                  <v-btn color="white" outlined
                    class="widthAll mt-sm-4 mt-md-0 pt-6 pb-5 ronded-xl red--text addFlightButton"
                    @click=" addFlight(0, flightCityes.length > 1 ? 'delete' : 'add')" style="border-radius: 7px;">
                    <v-icon right color="red">
                      mdi-plus
                    </v-icon>
                    {{ flightCityes.length > 1 ? 'حذف مسیر' : 'افزودن پرواز' }}
                  </v-btn>
                </v-skeleton-loader>
              </v-col>
            </v-row>
            <v-row align="center" v-if="byReturn == 3 && flightCityes.length > 1"
              class="justify-center justify-lg-start borderFlight rounded-lg'">
              <v-col cols="12" sm="6" md="4" lg="4" class="px-2 py-1">
                <v-skeleton-loader class="inputLoader" type="card-heading">
                  <v-row class="grey lighten-4 rounded-lg relative" style="height: 45px;" justify="center" align="center">
                    <v-col cols="5" class="originCityParent3 relative">
                      <v-autocomplete v-model="allFlights[1].originCity" id="originCity3" ref="originCity3"
                        :items="otherCityesOrigin5" :rules="(byReturn == 3 && flightCityes.length > 1) ? emptyRules2 : []"
                        :search-input.sync="originSearchInput3" label="مبدا سوم"
                        class="font-small-xs hideArrow headerCityes"
                        :class="allFlights[1].originCity && allFlights[1].originCity.length ? 'pt-2' : 'pt-0'"
                        prepend-inner-icon="mdi-map-marker" @click=" viiblePeaple = false"
                        @change=" changeHeaderInput('originCity1')">
                        <template v-slot:no-data>
                          <span class="body-2 d-block px-4" style="font-family:Byekan !important">شهر مورد نظر یافت
                            نشد!</span>
                        </template>
                      </v-autocomplete>
                    </v-col>
                    <v-col cols="2">
                      <v-icon class="rounded-circle grey lighten-2 pa-1" @click=" exchangeCity(1)"> mdi-swap-horizontal
                      </v-icon>
                    </v-col>
                    <v-col cols="5" class="destinationInternalParent3 relative">
                      <v-autocomplete v-model="allFlights[1].destinationInternal" ref="destinationInternal3"
                        id="destinationInternal3" class="font-small-xs hideArrow"
                        :search-input.sync="destinationSearchInput3"
                        :class="allFlights[1].destinationInternal && allFlights[1].destinationInternal.length ? 'pt-2' : 'pt-0'"
                        :items="otherCityesOrigin6" :rules="(byReturn == 3 && flightCityes.length > 1) ? emptyRules2 : []"
                        label="مقصد سوم" prepend-inner-icon="mdi-map-marker" @click=" viiblePeaple = false"
                        @change=" changeHeaderInput('destinationInternal1')">
                        <template v-slot:no-data>
                          <span class="body-2 d-block px-4" style="font-family:Byekan !important">شهر مورد نظر یافت
                            نشد!</span>
                        </template>
                      </v-autocomplete>
                    </v-col>
                  </v-row>
                </v-skeleton-loader>
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="px-2 py-1">
                <!-- <v-skeleton-loader class="inputLoader" type="card-heading">
                  <div class="input-group relative font-small-xs form-control headerBoxFields grey rounded-xl"
                    style="background-color: #f5f5f5;border-radius: 10px;">
                    <input type="text" ref="dtp3" value="" data-name="dtp3-text"
                      class="cursorPointer heightAll widthAll absolute dtp " readOnly
                      style="top:0;left:50%;opacity: 0;width:0;z-index:1;width:100%" id="dtp3">
                    <input class="d-none" data-name="dtp3-date">
                    <div class="cursorPointer heightAll d-inline-block font-small-xs widthAll showPopup3"
                      style="z-index:22;padding: 10px 4px;color:#424242">
                      <v-icon class="showPopup3" style="color:#424242">
                        mdi-calendar-month
                      </v-icon>
                      {{ allFlights[1].date ? allFlights[1].date : 'انتخاب تاریخ' }}
                    </div>
                  </div>
                </v-skeleton-loader> -->
                <v-skeleton-loader class="inputLoader" type="card-heading">
                  <div class="input-group relative font-small-xs form-control headerBoxFields grey lighten-4 rounded-lg"
                    style="background-color: #f5f5f5;border-radius: 5px;">
                    <date-picker :show="showDate3" ref="date3" color="#bf0000" format="YYYY-MM-DD" clearable: true
                      v-model="allFlights[1].date" locale="fa,en" :locale-config="localeConfig" popover="right"
                      auto-submit :min="minDate" :range="false" style="" @close="showDate3 = false; changeDate3()"
                      @open=" viiblePeaple = false">
                      <template #header-date="{ formattedDate }">
                        {{ allFlights[1].date && allFlights[1].date.length ? formattedDate : 'انتخاب تاریخ' }}
                      </template>
                    </date-picker>
                    <div @click=" showDate3 = showDate3 == true ? false : true"
                      class="cursorPointer heightAll d-inline-block font-small-xs widthAll showPopup3 absolute"
                      style="z-index:22;padding: 10px 4px;color:#424242;top:0">
                      <v-icon class="showPopup3" style="color:#424242;">
                        mdi-calendar-month
                      </v-icon>
                      {{ (allFlights[1].date && allFlights[1].date.length) ? selectedDate3 : 'انتخاب تاریخ' }}
                    </div>
                  </div>
                </v-skeleton-loader>
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="px-2 py-1">
                <v-skeleton-loader class="inputLoader" type="card-heading">
                  <v-btn color="white" outlined
                    class="widthAll mt-sm-4 mt-md-0 pt-6 pb-5 ronded-xl red--text addFlightButton"
                    @click=" addFlight(1, flightCityes.length > 2 ? 'delete' : 'add')" style="border-radius: 7px;">
                    <v-icon right color="red">
                      mdi-plus
                    </v-icon>
                    {{ flightCityes.length > 2 ? 'حذف مسیر' : 'افزودن پرواز' }}
                  </v-btn>
                </v-skeleton-loader>
              </v-col>
            </v-row>
            <v-row align="center" v-if="byReturn == 3 && flightCityes.length > 2"
              class="justify-center justify-lg-start borderFlight rounded-lg'">
              <v-col cols="12" sm="6" md="4" lg="4" class="px-2 py-1">
                <v-skeleton-loader class="inputLoader" type="card-heading">
                  <v-row class="grey lighten-4 rounded-lg relative" style="height: 45px;" justify="center" align="center">
                    <v-col cols="5" class="originCityParent4 relative">
                      <v-autocomplete v-model="allFlights[2].originCity" id="originCity4" ref="originCity4"
                        :items="otherCityesOrigin7" :rules="(byReturn == 3 && flightCityes.length > 2) ? emptyRules2 : []"
                        :search-input.sync="originSearchInput4" label="مبدا چهارم"
                        class="font-small-xs hideArrow headerCityes"
                        :class="allFlights[2].originCity && allFlights[2].originCity.length ? 'pt-2' : 'pt-0'"
                        prepend-inner-icon="mdi-map-marker" @click=" viiblePeaple = false"
                        @change=" changeHeaderInput('originCity2')">
                        <template v-slot:no-data>
                          <span class="body-2 d-block px-4" style="font-family:Byekan !important">شهر مورد نظر یافت
                            نشد!</span>
                        </template>
                      </v-autocomplete>
                    </v-col>
                    <v-col cols="2">
                      <v-icon class="rounded-circle grey lighten-2 pa-1" @click=" exchangeCity(2)"> mdi-swap-horizontal
                      </v-icon>
                    </v-col>
                    <v-col cols="5" class="destinationInternalParent4 relative">
                      <v-autocomplete v-model="allFlights[2].destinationInternal" ref="destinationInternal4"
                        id="destinationInternal4" class="font-small-xs hideArrow"
                        :search-input.sync="destinationSearchInput4"
                        :class="allFlights[2].destinationInternal && allFlights[2].destinationInternal.length ? 'pt-2' : 'pt-0'"
                        :items="otherCityesOrigin8" :rules="(byReturn == 3 && flightCityes.length > 2) ? emptyRules2 : []"
                        label="مقصد چهارم" prepend-inner-icon="mdi-map-marker" @click=" viiblePeaple = false"
                        @change=" changeHeaderInput('destinationInternal2')">
                        <template v-slot:no-data>
                          <span class="body-2 d-block px-4" style="font-family:Byekan !important">شهر مورد نظر یافت
                            نشد!</span>
                        </template>
                      </v-autocomplete>
                    </v-col>
                  </v-row>
                </v-skeleton-loader>
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="px-2 py-1">
                <!-- <v-skeleton-loader class="inputLoader" type="card-heading">
                  <div class="input-group relative font-small-xs form-control headerBoxFields grey rounded-xl"
                    style="background-color: #f5f5f5;border-radius: 10px;">
                    <input type="text" ref="dtp4" value="" data-name="dtp4-text"
                      class="cursorPointer heightAll widthAll absolute dtp " readOnly
                      style="top:0;left:50%;opacity: 0;width:0;z-index:1;width:100%" id="dtp4">
                    <input class="d-none" data-name="dtp4-date">
                    <div class="cursorPointer heightAll d-inline-block font-small-xs widthAll showPopup4"
                      style="z-index:22;padding: 10px 4px;color:#424242">
                      <v-icon class="showPopup4" style="color:#424242">
                        mdi-calendar-month
                      </v-icon>
                      {{ allFlights[2].date ? allFlights[2].date : 'انتخاب تاریخ' }}
                    </div>
                  </div>
                </v-skeleton-loader> -->
                <v-skeleton-loader class="inputLoader" type="card-heading">
                  <div class="input-group relative font-small-xs form-control headerBoxFields grey lighten-4 rounded-lg"
                    style="background-color: #f5f5f5;border-radius: 5px;">
                    <date-picker :show="showDate4" ref="date4" color="#bf0000" format="YYYY-MM-DD" clearable: true
                      v-model="allFlights[2].date" locale="fa,en" :locale-config="localeConfig" popover="right"
                      auto-submit :min="minDate" :range="false" style="" @close="showDate4 = false; changeDate4()"
                      @open=" viiblePeaple = false">
                      <template #header-date="{ formattedDate }">
                        {{ allFlights[2].date && allFlights[2].date.length ? formattedDate : 'انتخاب تاریخ' }}
                      </template>
                    </date-picker>
                    <div @click=" showDate4 = showDate4 == true ? false : true"
                      class="cursorPointer heightAll d-inline-block font-small-xs widthAll showPopup4 absolute"
                      style="z-index:22;padding: 10px 4px;color:#424242;top:0">
                      <v-icon class="showPopup4" style="color:#424242;">
                        mdi-calendar-month
                      </v-icon>
                      {{ (allFlights[2].date && allFlights[2].date.length) ? selectedDate4 : 'انتخاب تاریخ' }}
                    </div>
                  </div>
                </v-skeleton-loader>
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="px-2 py-1">
                <v-skeleton-loader class="inputLoader" type="card-heading">
                  <v-btn color="white" outlined
                    class="widthAll mt-sm-4 mt-md-0 pt-6 pb-5 ronded-xl red--text addFlightButton"
                    @click=" addFlight(2, 'delete')" style="border-radius: 7px;">
                    <v-icon right color="red">
                      mdi-plus
                    </v-icon>
                    حذف مسیر
                  </v-btn>
                </v-skeleton-loader>
              </v-col>
            </v-row>
            <!-- <v-row justify="center">
              <v-col cols="12" sm="6" md="4" lg="3" class="px-2 py-1"
                :class="byReturn == 3 ? 'd-block d-lg-none' : 'd-none'">
                <v-btn v-if="byReturn == 3" dark color="#bf0000" class="mt-4 pt-6 pb-5 ronded-xl widthAll"
                  @click="searchInHeaderBox">جستجو</v-btn>
              </v-col>
            </v-row> -->
          </v-card>
          <v-card v-show="selectedSection.title == 'بیمه'" class=" rounded-lg px-4 py-4 py-ms-8 py-md-12 text-center">
            <h3 class="grey--text text--darken-2 font-small-xs">این قسمت از سایت در حال توسعه میباشد...</h3>
          </v-card>
        </v-form>
      </div>
    </v-row>
    <!-- alert -->
    <v-alert v-if="showAlert" dark class="white--text fixed" :type="alertType"
      style="bottom: 0;right: 10px;min-width: 200px;z-index: 4444444444444;">{{ alertText }}</v-alert>
  </div>
</template>


<script>
import VuePersianDatetimePicker from 'vue-persian-datetime-picker'

import axios from 'axios'
axios.defaults.headers.common['Client-Token'] = 'Ahuan-Wapi?123'

const $ = require('jquery');

export default {
  name: 'InputMain',
  props: ['page', 'datePickerValue', 'loading'],
  components: {
    datePicker: VuePersianDatetimePicker
  },
  watch: {
    async datePickerValue() {
      this.date1 = this.datePickerValue
      // this.$route.query.start = this.datePickerValue.length == 2 ? this.datePickerValue[0] : this.datePickerValue
      // this.$route.query.end = this.datePickerValue.length == 2 ? this.datePickerValue[1] : this.datePickerValue
      await this.changeDate1(this.datePickerValue)
      // this.searchInHeaderBox()
      // console.log(this.datePickerValue);
    },
    showAlert() {
      if (this.showAlert) {
        setTimeout(() => {
          this.showAlert = false
        }, 5000);
      }
    },
    external() {
      this.originCity = ''
      this.destinationInternal = '';
      // this.byReturn = 1
      this.date1 = ''

    },
    selectedDate() {
      if (this.date1 && this.date1.length) {
        $('.showPopup').css("color", "#424242");
      } else {
        $('.showPopup').css("color", "red");
      }
    },
    selectedDate2() {
      if (this.allFlights[0].date && this.allFlights[0].date.length) {
        $('.showPopup2').css("color", "#424242");
      } else {
        $('.showPopup2').css("color", "red");
      }
    },
    selectedDate3() {
      if (this.allFlights[1].date && this.allFlights[1].date.length) {
        $('.showPopup3').css("color", "#424242");

      } else {
        $('.showPopup3').css("color", "red");
      }
    },
    selectedDate4() {
      if (this.allFlights[2].date && this.allFlights[2].date.length) {
        $('.showPopup4').css("color", "#424242");

      } else {
        $('.showPopup4').css("color", "red");
      }
    },
    byReturn() {
      this.flightCityes = [
        {
          originCity: '',
          destinationInternal: '',
          date: ''
        },
      ]
      this.date1 = ''
      // .value = ''
    },
    originCity() {
      this.$emit('changeOriginCity', this.originCity)
      // this.otherCityes = this.AllotherCityes
    },
    originSearchInput() {
      var self = this
      if (self.originSearchInput && (self.selectedSection.title != 'هتل' || self.selectedSection.title != 'آهوان')) {
        if (self.external) {
          axios.get('https://ahuan.ir/api/IntAirport?airportCode=' + self.originSearchInput)
            .then(function (response) {
              // handle success
              var otherCityes = response.data.map((x) => {
                return {
                  text: x.city,
                  IATA: x.city_code,
                  Id: x.Id,
                  country_code: x.country_code,
                  city_code: x.city_code,
                  airport: x.airport,
                  is_city: x.is_city,
                  unic_air: x.unic_air,
                  airport_fa: x.airport_fa,
                  city_fa: x.city_fa,
                  country_fa: x.country_fa,
                  latitude: x.latitude,
                  longitude: x.longitude,
                  CountryName: x.CountryName,
                  CountryNameFa: x.CountryNameFa,
                  OrderId: x.OrderId,
                };
              });
              if (otherCityes.length) {
                self.otherCityesOrigin = otherCityes
              }
            })
            .catch(function (error) {
              // handle error
            })

        } else {
          self.persianCityes = self.AllpersianCityes
        }
        $('.v-select-list').removeClass("sugestCity")
      } else {
        if (self.selectedSection.title != 'هتل' && self.selectedSection.title != 'آهوان' && self.selectedSection.title != 'تور') {
          $('.v-select-list').addClass("sugestCity")
          self.persianCityes = [
            { label: "Tehran, THR - تهران", code: "Tehran, THR", text: "تهران", id: "THR", airport: 'Mehrabad Arpt' },
            { label: "Mashhad, MHD - مشهد", code: "Mashhad, MHD", text: "مشهد", id: "MHD", airport: 'Mashad Arpt' },
            { label: "Shiraz, SYZ - شیراز", code: "Shiraz, SYZ", text: "شیراز", id: "SYZ", airport: 'Shiraz Arpt' },
            { label: "Ahwaz, AWZ - اهواز", code: "Ahwaz, AWZ", text: "اهواز", id: "AWZ", airport: 'Ahwaz Airport' },
            { label: "Isfahan, IFN - اصفهان", code: "Isfahan, IFN", text: "اصفهان", id: "IFN", airport: 'Isfahan Arpt' },
            { label: "Kish, KIH - کیش", code: "Kish, KIH", text: "کیش", id: "KIH", airport: 'Kish Island Arpt' },
            { label: "Bandar abbas, BND - بندر عباس", code: "Bandar abbas, BND", text: "بندر عباس", id: "BND", airport: 'Bandar Abbas Arpt' },
          ]
          self.otherCityesOrigin = self.AllotherCityes
        }
        else {
          $('.v-select-list').removeClass("sugestCity")
        }
      }
    },
    originSearchInput2() {
      var self = this
      if (self.originSearchInput2) {
        axios.get('https://ahuan.ir/api/IntAirport?airportCode=' + self.originSearchInput2)
          .then(function (response) {
            // handle success
            var otherCityes = response.data.map((x) => {
              return {
                text: x.city,
                IATA: x.city_code,
                Id: x.Id,
                country_code: x.country_code,
                city_code: x.city_code,
                airport: x.airport,
                is_city: x.is_city,
                unic_air: x.unic_air,
                airport_fa: x.airport_fa,
                city_fa: x.city_fa,
                country_fa: x.country_fa,
                latitude: x.latitude,
                longitude: x.longitude,
                CountryName: x.CountryName,
                CountryNameFa: x.CountryNameFa,
                OrderId: x.OrderId,
              };
            });
            if (otherCityes.length) {
              self.otherCityesOrigin3 = otherCityes
            }
          })
          .catch(function (error) {
            // handle error
          })
        $('.v-select-list').removeClass("sugestCity")
      } else if (self.selectedSection.title != 'هتل' && self.selectedSection.title != 'آهوان' && self.selectedSection.title != 'تور') {
        $('.v-select-list').addClass("sugestCity")
        self.otherCityesOrigin3 = self.AllotherCityes
      }
    },
    originSearchInput3() {
      var self = this
      if (self.originSearchInput3) {
        axios.get('https://ahuan.ir/api/IntAirport?airportCode=' + self.originSearchInput3)
          .then(function (response) {
            // handle success
            var otherCityes = response.data.map((x) => {
              return {
                text: x.city,
                IATA: x.city_code,
                Id: x.Id,
                country_code: x.country_code,
                city_code: x.city_code,
                airport: x.airport,
                is_city: x.is_city,
                unic_air: x.unic_air,
                airport_fa: x.airport_fa,
                city_fa: x.city_fa,
                country_fa: x.country_fa,
                latitude: x.latitude,
                longitude: x.longitude,
                CountryName: x.CountryName,
                CountryNameFa: x.CountryNameFa,
                OrderId: x.OrderId,
              };
            });
            if (otherCityes.length) {
              $('.v-select-list').removeClass("sugestCity")
              self.otherCityesOrigin5 = otherCityes
            }
          })
          .catch(function (error) {
            // handle error
          })

      } else {
        $('.v-select-list').addClass("sugestCity")
        self.otherCityesOrigin3 = self.AllotherCityes
      }
    },
    originSearchInput4() {
      var self = this
      if (self.originSearchInput4) {
        axios.get('https://ahuan.ir/api/IntAirport?airportCode=' + self.originSearchInput4)
          .then(function (response) {
            // handle success
            var otherCityes = response.data.map((x) => {
              return {
                text: x.city,
                IATA: x.city_code,
                Id: x.Id,
                country_code: x.country_code,
                city_code: x.city_code,
                airport: x.airport,
                is_city: x.is_city,
                unic_air: x.unic_air,
                airport_fa: x.airport_fa,
                city_fa: x.city_fa,
                country_fa: x.country_fa,
                latitude: x.latitude,
                longitude: x.longitude,
                CountryName: x.CountryName,
                CountryNameFa: x.CountryNameFa,
                OrderId: x.OrderId,
              };
            });
            if (otherCityes.length) {
              $('.v-select-list').removeClass("sugestCity")
              self.otherCityesOrigin7 = otherCityes
            }
          })
          .catch(function (error) {
            // handle error
          })

      } else {
        $('.v-select-list').addClass("sugestCity")
        self.otherCityesOrigin7 = self.AllotherCityes
      }
    },
    destinationInternal() {
      this.$emit('changeDestinationInternal', this.destinationInternal)

    },
    destinationSearchInput() {
      var self = this
      if (self.destinationSearchInput && (self.selectedSection.title != 'آهوان')) {
        $('.v-select-list').removeClass("sugestCity")
        if (self.external) {
          axios.get('https://ahuan.ir/api/IntAirport?airportCode=' + self.destinationSearchInput)
            .then(function (response) {
              // handle success
              var otherCityes = response.data.map((x) => {
                return {
                  text: x.city,
                  IATA: x.city_code,
                  Id: x.Id,
                  country_code: x.country_code,
                  city_code: x.city_code,
                  airport: x.airport,
                  is_city: x.is_city,
                  unic_air: x.unic_air,
                  airport_fa: x.airport_fa,
                  city_fa: x.city_fa,
                  country_fa: x.country_fa,
                  latitude: x.latitude,
                  longitude: x.longitude,
                  CountryName: x.CountryName,
                  CountryNameFa: x.CountryNameFa,
                  OrderId: x.OrderId,
                };
              });
              if (otherCityes.length) {
                self.otherCityesOrigin2 = otherCityes
              }
            })
            .catch(function (error) {
              // handle error
            })
        } else {
          this.persianCityes2 = this.AllpersianCityes
        }
      } else if (self.selectedSection.title != 'آهوان' && self.selectedSection.title != 'تور') {
        $('.v-select-list').addClass("sugestCity")
        self.persianCityes2 = [
          { label: "Tehran, THR - تهران", code: "Tehran, THR", text: "تهران", id: "THR", airport: 'Mehrabad Arpt' },
          { label: "Mashhad, MHD - مشهد", code: "Mashhad, MHD", text: "مشهد", id: "MHD", airport: 'Mashad Arpt' },
          { label: "Shiraz, SYZ - شیراز", code: "Shiraz, SYZ", text: "شیراز", id: "SYZ", airport: 'Shiraz Arpt' },
          { label: "Ahwaz, AWZ - اهواز", code: "Ahwaz, AWZ", text: "اهواز", id: "AWZ", airport: 'Ahwaz Airport' },
          { label: "Isfahan, IFN - اصفهان", code: "Isfahan, IFN", text: "اصفهان", id: "IFN", airport: 'Isfahan Arpt' },
          { label: "Kish, KIH - کیش", code: "Kish, KIH", text: "کیش", id: "KIH", airport: 'Kish Island Arpt' },
          { label: "Bandar abbas, BND - بندر عباس", code: "Bandar abbas, BND", text: "بندر عباس", id: "BND", airport: 'Bandar Abbas Arpt' },
        ]
        self.otherCityesOrigin2 = self.AllotherCityes

      }
    },
    destinationSearchInput2() {
      var self = this
      if (self.destinationSearchInput2) {
        $('.v-select-list').removeClass("sugestCity")
        axios.get('https://ahuan.ir/api/IntAirport?airportCode=' + self.destinationSearchInput2)
          .then(function (response) {
            // handle success
            var otherCityes = response.data.map((x) => {
              return {
                text: x.city,
                IATA: x.city_code,
                Id: x.Id,
                country_code: x.country_code,
                city_code: x.city_code,
                airport: x.airport,
                is_city: x.is_city,
                unic_air: x.unic_air,
                airport_fa: x.airport_fa,
                city_fa: x.city_fa,
                country_fa: x.country_fa,
                latitude: x.latitude,
                longitude: x.longitude,
                CountryName: x.CountryName,
                CountryNameFa: x.CountryNameFa,
                OrderId: x.OrderId,
              };
            });
            if (otherCityes.length) {
              $('.v-select-list').removeClass("sugestCity")
              self.otherCityesOrigin4 = otherCityes
            }
          })
          .catch(function (error) {
            // handle error
          })
      } else {
        $('.v-select-list').addClass("sugestCity")
        self.otherCityesOrigin4 = self.AllotherCityes
      }
    },
    destinationSearchInput3() {
      var self = this
      if (self.destinationSearchInput3) {
        axios.get('https://ahuan.ir/api/IntAirport?airportCode=' + self.destinationSearchInput3)
          .then(function (response) {
            // handle success
            var otherCityes = response.data.map((x) => {
              return {
                text: x.city,
                IATA: x.city_code,
                Id: x.Id,
                country_code: x.country_code,
                city_code: x.city_code,
                airport: x.airport,
                is_city: x.is_city,
                unic_air: x.unic_air,
                airport_fa: x.airport_fa,
                city_fa: x.city_fa,
                country_fa: x.country_fa,
                latitude: x.latitude,
                longitude: x.longitude,
                CountryName: x.CountryName,
                CountryNameFa: x.CountryNameFa,
                OrderId: x.OrderId,
              };
            });
            if (otherCityes.length) {
              $('.v-select-list').removeClass("sugestCity")
              self.otherCityesOrigin6 = otherCityes
            }
          })
          .catch(function (error) {
            // handle error
          })
      } else {
        $('.v-select-list').addClass("sugestCity")
        self.otherCityesOrigin6 = self.AllotherCityes
      }
    },
    destinationSearchInput4() {
      var self = this
      if (self.destinationSearchInput4) {
        axios.get('https://ahuan.ir/api/IntAirport?airportCode=' + self.destinationSearchInput4)
          .then(function (response) {
            // handle success
            var otherCityes = response.data.map((x) => {
              return {
                text: x.city,
                IATA: x.city_code,
                Id: x.Id,
                country_code: x.country_code,
                city_code: x.city_code,
                airport: x.airport,
                is_city: x.is_city,
                unic_air: x.unic_air,
                airport_fa: x.airport_fa,
                city_fa: x.city_fa,
                country_fa: x.country_fa,
                latitude: x.latitude,
                longitude: x.longitude,
                CountryName: x.CountryName,
                CountryNameFa: x.CountryNameFa,
                OrderId: x.OrderId,
              };
            });
            if (otherCityes.length) {
              $('.v-select-list').removeClass("sugestCity")
              self.otherCityesOrigin8 = otherCityes
            }
          })
          .catch(function (error) {
            // handle error
          })
      } else {
        // $('.v-select-list').addClass("sugestCity")
        self.otherCityesOrigin8 = self.AllotherCityes
      }
    },
    async date1() {
      let dateVariabel = await this.getDayName(this.date1)
      this.$emit('changeDayName1', dateVariabel)
      this.$emit('changeDate1', this.date1)
      // 
    },
  },
  data: () => ({
    loadingTourDates: false,
    emptyRules: [
      v => !!v || 'پر کردن این فیلد اجباریست.'
    ],
    tourDate: '',
    tourDates: [],
    NiraTicketStep: 0,
    viiblePeaple: false,
    selectedRooms: 1,
    showAlert: false,
    alertType: 'error',
    alertText: '',
    date1: null,
    show: false,
    showDate2: false,
    showDate3: false,
    showDate1: false,
    showDate4: false,
    allSections: [
      {
        icon: 'mdi-airplane',
        title: 'پرواز',
        active: true,
      },
      {
        icon: 'mdi-sofa-single',
        title: 'هتل',
        active: false,
      },
      {
        icon: 'mdi-account-group',
        title: 'تور',
        active: false,
      },
      {
        icon: 'mdi-hospital-building',
        title: 'آهوان',
        active: false,
      },
      {
        icon: 'mdi-bus',
        title: 'اتوبوس',
        active: false,
      },
      {
        icon: 'mdi-train-variant',
        title: 'قطار',
        active: false,
      },
      {
        icon: 'mdi-checkbook',
        title: 'بیمه',
        active: false,
      },
    ],
    selectedSection: {
      icon: 'mdi-airplane',
      title: 'هتل',
      active: true,
    },
    showSection: true,
    windowWidth: 0,
    external: false,
    byReturn: 1,
    emptyRules2: [
      v => !!v || ''
    ],
    originCity: '',
    destinationInternal: '',
    originSearchInput: '',
    originSearchInput2: '',
    originSearchInput3: '',
    originSearchInput4: '',
    destinationSearchInput: '',
    destinationSearchInput2: '',
    toursList: [],
    persianCityes: [
      { label: "Tehran, THR - تهران", code: "Tehran, THR", text: "تهران", id: "THR", airport: 'Mehrabad Arpt' },
      { label: "Mashhad, MHD - مشهد", code: "Mashhad, MHD", text: "مشهد", id: "MHD", airport: 'Mashad Arpt' },
      { label: "Shiraz, SYZ - شیراز", code: "Shiraz, SYZ", text: "شیراز", id: "SYZ", airport: 'Shiraz Arpt' },
      { label: "Ahwaz, AWZ - اهواز", code: "Ahwaz, AWZ", text: "اهواز", id: "AWZ", airport: 'Ahwaz Airport' },
      { label: "Isfahan, IFN - اصفهان", code: "Isfahan, IFN", text: "اصفهان", id: "IFN", airport: 'Isfahan Arpt' },
      { label: "Kish, KIH - کیش", code: "Kish, KIH", text: "کیش", id: "KIH", airport: 'Kish Island Arpt' },
      { label: "Bandar abbas, BND - بندر عباس", code: "Bandar abbas, BND", text: "بندر عباس", id: "BND", airport: 'Bandar Abbas Arpt' },
    ],
    persianCityes2: [
      { label: "Tehran, THR - تهران", code: "Tehran, THR", text: "تهران", id: "THR", airport: 'Mehrabad Arpt' },
      { label: "Mashhad, MHD - مشهد", code: "Mashhad, MHD", text: "مشهد", id: "MHD", airport: 'Mashad Arpt' },
      { label: "Shiraz, SYZ - شیراز", code: "Shiraz, SYZ", text: "شیراز", id: "SYZ", airport: 'Shiraz Arpt' },
      { label: "Ahwaz, AWZ - اهواز", code: "Ahwaz, AWZ", text: "اهواز", id: "AWZ", airport: 'Ahwaz Airport' },
      { label: "Isfahan, IFN - اصفهان", code: "Isfahan, IFN", text: "اصفهان", id: "IFN", airport: 'Isfahan Arpt' },
      { label: "Kish, KIH - کیش", code: "Kish, KIH", text: "کیش", id: "KIH", airport: 'Kish Island Arpt' },
      { label: "Bandar abbas, BND - بندر عباس", code: "Bandar abbas, BND", text: "بندر عباس", id: "BND", airport: 'Bandar Abbas Arpt' },
    ],
    AllpersianCityes: [
      { label: "Tehran, THR - تهران", code: "Tehran, THR", text: "تهران", id: "THR", airport: 'Mehrabad Arpt' },
      { label: "Mashhad, MHD - مشهد", code: "Mashhad, MHD", text: "مشهد", id: "MHD", airport: 'Mashad Arpt' },
      { label: "Shiraz, SYZ - شیراز", code: "Shiraz, SYZ", text: "شیراز", id: "SYZ", airport: 'Shiraz Arpt' },
      { label: "Ahwaz, AWZ - اهواز", code: "Ahwaz, AWZ", text: "اهواز", id: "AWZ", airport: '' },
      { label: "Isfahan, IFN - اصفهان", code: "Isfahan, IFN", text: "اصفهان", id: "IFN", airport: 'Isfahan Arpt' },
      { label: "Tabriz, TBZ - تبریز", code: "Tabriz, TBZ", text: "تبریز", id: "TBZ", airport: 'Tabriz International Arpt' },
      { label: "Kish, KIH - کیش", code: "Kish, KIH", text: "کیش", id: "KIH", airport: 'Kish Island Arpt' },
      { label: "Bandar abbas, BND - بندر عباس", code: "Bandar abbas, BND", text: "بندر عباس", id: "BND", airport: 'Bandar Abbas Arpt' },
      { label: "Qeshm, GSM - قشم", code: "Qeshm, GSM", text: "قشم", id: "GSM", airport: 'Dayrestan Airport' },
      { label: "Gorgan, GBT - گرگان", code: "Gorgan, GBT", text: "گرگان", id: "GBT", airport: 'Gorgon Airport' },
      { label: "Ramsar, RZR - رامسر", code: "Ramsar, RZR", text: "رامسر", id: "RZR", airport: 'Ramsar Airport' },
      { label: "Bushehr, BUZ - بوشهر", code: "Bushehr, BUZ", text: "بوشهر", id: "BUZ", airport: 'Bushehr Arpt' },
      { label: "Lar, LRR - لار", code: "Lar, LRR", text: "لار", id: "لار", airport: 'Lar Airport' },
      { label: "Zanjan, JWN - زنجان", code: "Zanjan, JWN", text: "زنجان", id: "JWN", airport: 'Zanjan Arpt' },
      { label: "Bahregan, IAQ - بهرگان", code: "Bahregan, IAQ", text: "بهرگان", id: "IAQ", airport: '' },
      { label: "Lamard, LFM - لامرد", code: "Lamard, LFM", text: "لامرد", id: "LFM", airport: 'Lamerd Airport' },
      { label: "Sari, SRY - ساری", code: "Sari, SRY", text: "ساری", id: "SRY", airport: 'Dasht-e Naz Airport' },
      { label: "Birjand, XBJ - بیرجند", code: "Birjand, XBJ", text: "بیرجند", id: "XBJ", airport: 'Birjand Airport' },
      { label: "Lavan, LVP - لاوان", code: "Lavan, LVP", text: "لاوان", id: "LVP", airport: 'Lavan Island Airport' },
      { label: "Sabzevar, AFZ - سبزوار", code: "Sabzevar, AFZ", text: "سبزوار", id: "AFZ", airport: 'Sabzevar Airport' },
      { label: "Abu Musa, AEU - جزیره ابوموسی", code: "Abu Musa, AEU", text: "جزیره ابوموسی", id: "AEU", airport: 'Abu Musa Airport' },
      { label: "Mahshahr, MRX - ماهشهر", code: "Mahshahr, MRX", text: "ماهشهر", id: "MRX", airport: 'Mahshahr Airport' },
      { label: "Sanandaj, SDG - سنندج", code: "Sanandaj, SDG", text: "سنندج", id: "SDG", airport: 'Sanandaj Airport' },
      { label: "Siri, SXI - جزیره سیری", code: "Siri, SXI", text: "جزیره سیری", id: "SXI", airport: 'Sirri Island Airport' },
      { label: "Nowshahr, NSH - نوشهر", code: "Nowshahr, NSH", text: "نوشهر", id: "NSH", airport: 'Now Shahr Airport' },
      { label: "Sirjan, SYJ - سیرجان", code: "Sirjan, SYJ", text: "سیرجان", id: "SYJ", airport: 'Sirjan' },
      { label: "Jiroft, JYR - جیرفت", code: "Jiroft, JYR", text: "جیرفت", id: "JYR", airport: 'Jiroft Airport' },
      { label: "Hamedan, HDM - همدان", code: "Hamedan, HDM", text: "همدان", id: "HDM", airport: 'Hamadan Airport' },
      { label: "Shahrod, RUD - شاهرود", code: "Shahrod, RUD", text: "شاهرود", id: "RUD", airport: 'Shahroud Airport' },
      { label: "Chabahar, ZBR - چابهار", code: "Chabahar, ZBR", text: "چابهار", id: "ZBR", airport: 'Chah-Bahar Airport' },
      { label: "Yazd, AZD - یزد", code: "Yazd, AZD", text: "یزد", id: "AZD", airport: 'Yazd Arpt' },
      { label: "Sharekord, CQD - شهر کرد", code: "Sharekord, CQD", text: "شهر کرد", id: "CQD", airport: 'Shahre Kord Arpt' },
      { label: "Khark, KHK - خارک", code: "Khark, KHK", text: "خارک", id: "KHK", airport: 'Khark Airport' },
      { label: "Arak, AJK - اراک", code: "Arak, AJK", text: "اراک", id: "AJK", airport: 'Araak Airport' },
      { label: "Abadan, ABD - آبادان", code: "Abadan, ABD", text: "آبادان", id: "ABD", airport: 'Abadan Arpt' },
      { label: "Tabas, TCX - طبس", code: "Tabas, TCX", text: "طبس", id: "TCX", airport: 'Tabas Airport' },
      { label: "Khoramabad, KHD - خرم آباد", code: "Khoramabad, KHD", text: "خرم آباد", id: "KHD", airport: 'Khorramabad Arpt' },
      { label: "Maragheh, ACP - مراغه", code: "Maragheh, ACP", text: "مراغه", id: "ACP", airport: 'Sahand Airport' },
      { label: "Ardabil, ADU - اردبیل", code: "Ardabil, ADU", text: "اردبیل", id: "ADU", airport: 'Ardabil Arpt' },
      { label: "Asaluyeh, PGU - عسلویه", code: "Asaluyeh, PGU", text: "عسلویه", id: "PGU", airport: "Ala'Marvdasht Arpt" },
      { label: "Khoy, KHY - خوی", code: "Khoy, KHY", text: "خوی", id: "KHY", airport: 'Khoy Airport' },
      { label: "Yasuj, YES - یاسوج", code: "Yasuj, YES", text: "یاسوج", id: "YES", airport: 'Yasouj Airport' },
      { label: "Urmia, OMH - ارومیه", code: "Urmia, OMH", text: "ارومیه", id: "OMH", airport: 'URUMIYEH' },
      { label: "Dezful, DEF - دزفول", code: "Dezful, DEF", text: "دزفول", id: "DEF", airport: 'Dezful Airport' },
      { label: "Jahrom, JAR - جهرم", code: "Jahrom, JAR", text: "جهرم", id: "JAR", airport: 'Jahrom Airport' },
      { label: "Kashan, KSN - کاشان", code: "Kashan, KSN", text: "کاشان", id: "KSN", airport: 'Kashan Airport' },
      { label: "Kangan, KNR - کانگان", code: "Kangan, KNR", text: "کانگان", id: "KNR", airport: 'Jam Airport' },
      { label: "Parsabad, PFQ - پارس آباد", code: "Parsabad, PFQ", text: "پارس آباد", id: "PFQ", airport: '' },
      { label: "Iranshahr, IHR - ایران شهر", code: "Iranshahr, IHR", text: "ایران شهر", id: "IHR", airport: 'Iran Shahr Airport' },
      { label: "Kerman, KER - کرمان", code: "Kerman, KER", text: "کرمان", id: "KER", airport: 'Kerman Arpt' },
      { label: "Rasht, RAS - رشت", code: "Rasht, RAS", text: "رشت", id: "RAS", airport: 'Rasht Airport' },
      { label: "Ilam, IIL - ایلام", code: "Ilam, IIL", text: "ایلام", id: "IIL", airport: 'Ilaam Airport' },
      { label: "Kermanshah, KSH - کرمانشاه", code: "Kermanshah, KSH", text: "کرمانشاه", id: "KSH", airport: 'Kermanshah Arpt' },
      { label: "Rafsanjan, RJN - رفسنجان", code: "Rafsanjan, RJN", text: "رفسنجان", id: "RJN", airport: 'Rafsanjan Airport' },
      { label: "Bojnord, BJB - بجنورد", code: "Bojnord, BJB", text: "بجنورد", id: "BJB", airport: 'Bojnord Airport' },
      { label: "Gachsaran, GCH - گچساران", code: "Gachsaran, GCH", text: "گچساران", id: "GCH", airport: 'Gachsaran Airport' },
      { label: "zabol, ACZ - زابل", code: "zabol, ACZ", text: "زابل", id: "ACZ", airport: 'Zabol A/P Airport' },
      { label: "Bam, BXR - بم", code: "Bam, BXR", text: "بم", id: "BXR", airport: 'Bam Airport' },
      { label: "Bandar lengeh, BDH - بندر لنگه", code: "Bandar lengeh, BDH", text: "بندر لنگه", id: "BDH", airport: 'Bandar Lengeh Airport' },
      { label: "Zahedan, ZAH - زاهدان", code: "Zahedan, ZAH", text: "زاهدان", id: "ZAH", airport: 'Zahedan Airport' },
      { label: "Sarakhs, CKT - سرخس", code: "Sarakhs, CKT", text: "سرخس", id: "CKT", airport: 'Sarakhs Airport' }
    ],
    selectedDate: '',
    selectedDate2: '',
    selectedDate3: '',
    selectedDate4: '',
    headerRooms: [
      {
        peaple: 1,
        child: 0,
        baby: 0
      }
    ],
    allPeaples: '1 مسافر ',
    hotels: ['هتل آهوان چابکسر', 'شکوه ایمان مشهد'],
    otherCityesOrigin: [],
    otherCityesOrigin2: [],
    otherCityesOrigin3: [],
    otherCityesOrigin4: [],
    otherCityesOrigin5: [],
    otherCityesOrigin6: [],
    otherCityesOrigin7: [],
    otherCityesOrigin8: [],
    allFlights: [
      {
        originCity: '',
        destinationInternal: '',
        date: '',
        timestamp: 0
      },

    ],
    flightCityes: [
      {
        originCity: '',
        destinationInternal: '',
        date: ''
      },
    ],
    destinationSearchInput3: '',
    destinationSearchInput4: '',
    localeConfig: {
      fa: {
        // displayFormat: 'jYYYY/jMM/jDD',
        lang: { label: 'شمسی' }
      },
    },
    minDate: '',
    airlines: []
  }),
  methods: {

    changeActiveSection(index) {
      this.viiblePeaple = false
      this.$refs.headerInputForm.resetValidation()
      $('.showPopup , .showPopup2 , .showPopup3 , .showPopup4').css("color", '#424242')
      this.showSection = this.allSections[index].active && this.showSection ? false : true
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
      this.selectedSection = this.allSections.find(element => element.active == true);
      this.$emit('changeActiveSection', this.selectedSection)
      this.byReturn = 1
      this.date1 = ''
      this.external = false
      this.tourDate = {}
      this.tourDates = []
      this.changeRoomValue()

    },
    changeDate1(value) {
      let date = value ? value : this.$refs.date1.value

      let variabel = ''
      let options = { day: 'numeric', month: 'long' };
      if (date.length == 2) {
        variabel = (new Date(date[0]).toLocaleDateString('fa-IR', options) + ' الی ' + new Date(date[1]).toLocaleDateString('fa-IR', options));
      } else {
        variabel = new Date(date).toLocaleDateString('fa-IR', options);
      }
      this.selectedDate = variabel
      if (value) {
        this.viiblePeaple = false
      }
    },
    changeDate2() {
      let date = this.$refs.date2.value
      let variabel = ''
      let options = { day: 'numeric', month: 'long' };
      if (date && date.length == 2) {
        variabel = (new Date(date[0]).toLocaleDateString('fa-IR', options) + ' الی ' + new Date(date[1]).toLocaleDateString('fa-IR', options));

      } else if (date) {
        variabel = new Date(date).toLocaleDateString('fa-IR', options);
      } else {
        $('.showPopup2').css("color", "red");
      }

      this.selectedDate2 = variabel
    },
    changeDate3() {
      let date = this.$refs.date3.value
      let variabel = ''
      let options = { day: 'numeric', month: 'long' };
      if (date && date.length == 2) {
        variabel = (new Date(date[0]).toLocaleDateString('fa-IR', options) + ' الی ' + new Date(date[1]).toLocaleDateString('fa-IR', options));

      } else if (date) {
        variabel = new Date(date).toLocaleDateString('fa-IR', options);
      } else {
        $('.showPopup3').css("color", "red");
      }

      this.selectedDate3 = variabel
    },
    changeDate4() {
      let date = this.$refs.date4.value
      let variabel = ''
      let options = { day: 'numeric', month: 'long' };
      if (date && date.length == 2) {
        variabel = (new Date(date[0]).toLocaleDateString('fa-IR', options) + ' الی ' + new Date(date[1]).toLocaleDateString('fa-IR', options));

      } else if (date) {
        variabel = new Date(date).toLocaleDateString('fa-IR', options);
      } else {
        $('.showPopup4').css("color", "red");
      }

      this.selectedDate4 = variabel
    },
    changeRoomValue(title) {
      var rooms = this.headerRooms
      var all = 0
      for (let i = 0; i < rooms.length; i++) {
        all = all + rooms[i].baby + rooms[i].child + rooms[i].peaple

      }
      this.allPeaples = all + ' مسافر '
      if (title != 'flight' && (this.selectedSection.title == 'هتل' || this.selectedSection.title == 'تور' || this.selectedSection.title == 'آهوان')) {
        this.allPeaples = this.allPeaples + '+ ' + this.headerRooms.length + ' اتاق'
      }
    },
    getWidth() {
      this.windowWidth = window.innerWidth
      if (window.innerWidth < 600) {
        // this.allSections = [
        //   {
        //     icon: 'mdi-airplane',
        //     title: 'پرواز',
        //     active: false,
        //   },
        //   {
        //     icon: 'mdi-sofa-single',
        //     title: 'هتل',
        //     active: false,
        //   },
        //   {
        //     icon: 'mdi-account-group',
        //     title: 'تور',
        //     active: false,
        //   },
        //   {
        //     icon: 'mdi-hospital-building',
        //     title: 'آهوان',
        //     active: false,
        //   },
        //   {
        //     icon: 'mdi-bus',
        //     title: 'اتوبوس',
        //     active: false,
        //   },
        //   {
        //     icon: 'mdi-train-variant',
        //     title: 'قطار',
        //     active: false,
        //   },
        //   {
        //     icon: 'mdi-checkbook',
        //     title: 'بیمه',
        //     active: false,
        //   },
        // ]
      }
      this.date1 = ''
    },
    exchangeCity(index) {
      this.viiblePeaple = false
      if (isNaN(index)) {
        if (this.external) {
          let cityes = this.AllotherCityes
          let cityes2 = this.AllotherCityes
          let firstCity = this.destinationInternal
          if (firstCity) {
            cityes2.push(this.destinationInternal)
          }
          // origin
          if (this.originCity) {
            cityes.push(this.originCity)
          }
          this.otherCityesOrigin2 = cityes
          this.destinationInternal = this.originCity
          // distination
          this.otherCityesOrigin = cityes2
          this.originCity = firstCity
        } else {
          let variable = this.originCity
          this.originCity = this.destinationInternal
          this.destinationInternal = variable
        }
      } else {
        if (index == 0) {
          let cityes = this.AllotherCityes
          let cityes2 = this.AllotherCityes
          let firstCity = this.allFlights[0].destinationInternal
          if (firstCity) {
            cityes2.push(firstCity)
          }
          // origin
          if (this.allFlights[0].originCity) {
            cityes.push(this.allFlights[0].originCity)
          }
          this.otherCityesOrigin4 = cityes
          this.allFlights[0].destinationInternal = this.allFlights[0].originCity
          // distination
          this.otherCityesOrigin3 = cityes2
          this.allFlights[0].originCity = firstCity
        }
        if (index == 1) {
          let cityes = this.AllotherCityes
          let cityes2 = this.AllotherCityes
          let firstCity = this.allFlights[1].destinationInternal
          if (firstCity) {
            cityes2.push(firstCity)
          }
          // origin
          if (this.allFlights[1].originCity) {
            cityes.push(this.allFlights[1].originCity)
          }
          this.otherCityesOrigin6 = cityes
          this.allFlights[1].destinationInternal = this.allFlights[1].originCity
          // distination
          this.otherCityesOrigin5 = cityes2
          this.allFlights[1].originCity = firstCity
        }
        if (index == 2) {
          let cityes = this.AllotherCityes
          let cityes2 = this.AllotherCityes
          let firstCity = this.allFlights[2].destinationInternal
          if (firstCity) {
            cityes2.push(firstCity)
          }
          // origin
          if (this.allFlights[2].originCity) {
            cityes.push(this.allFlights[2].originCity)
          }
          this.otherCityesOrigin8 = cityes
          this.allFlights[2].destinationInternal = this.allFlights[2].originCity
          // distination
          this.otherCityesOrigin7 = cityes2
          this.allFlights[2].originCity = firstCity
        }
      }
    },
    getCityesExternal() {
      let self = this
      axios.get('https://ahuan.ir/api/IntAirport?airportCode=0')
        .then(function (response) {
          // handle success
          let otherCityes = response.data.map((x) => {
            return {
              text: x.city,
              IATA: x.IATA
            };
          });
          self.mostUseCityes = otherCityes
          self.AllotherCityes = otherCityes
          self.otherCityesOrigin = otherCityes
          self.otherCityesOrigin2 = otherCityes
          self.otherCityesOrigin3 = otherCityes
          self.otherCityesOrigin4 = otherCityes
          self.otherCityesOrigin5 = otherCityes
          self.otherCityesOrigin6 = otherCityes
          self.otherCityesOrigin7 = otherCityes
          self.otherCityesOrigin8 = otherCityes
          if (self.page == 'flight' || self.page == 'main') {
            setTimeout(() => {
              self.selectedSection = {
                icon: 'mdi-airplane',
                title: 'پرواز',
                active: true,
              }
              self.setCreated()
            }, 500);
          }

        })
        .catch(function (error) {
          // handle error
        })
    },
    getToursList() {
      let self = this
      axios.get('https://panel.ahuantours.com/api/tour/all')
        .then(function (response) {
          self.toursList = response.data.map((x) => {
            return {
              label: x.name,
              id: x.id,
              text: x.name,
              airport: 'Mehrabad Arpt'
            }
          })
          // { label: "Tehran, THR - تهران", code: "Tehran, THR", text: "تهران", id: "THR", airport: 'Mehrabad Arpt' }
          console.log();
          // // handle success
          // let otherCityes = response.data.map((x) => {
          //   return {
          //     text: x.city,
          //     IATA: x.IATA
          //   };
          // });
          // self.mostUseCityes = otherCityes
          // self.AllotherCityes = otherCityes
          // self.otherCityesOrigin = otherCityes
          // self.otherCityesOrigin2 = otherCityes
          // self.otherCityesOrigin3 = otherCityes
          // self.otherCityesOrigin4 = otherCityes
          // self.otherCityesOrigin5 = otherCityes
          // self.otherCityesOrigin6 = otherCityes
          // self.otherCityesOrigin7 = otherCityes
          // self.otherCityesOrigin8 = otherCityes
          // if (self.page == 'flight' || self.page == 'main') {
          //   setTimeout(() => {
          //     self.selectedSection = {
          //       icon: 'mdi-airplane',
          //       title: 'پرواز',
          //       active: true,
          //     }
          //     self.setCreated()
          //   }, 500);
          // }
        })
        .catch(function (error) {
          // handle error
        })
    },
    searchInHeaderBox() {
      var self = this
      this.viiblePeaple = false
      if (!this.$refs.headerInputForm.validate()
        || (this.selectedSection.title == 'تور' && !this.tourDate.length)
        || (this.selectedSection.title != 'تور' && !this.selectedDate.length)
        || (self.byReturn == 3 && (!self.allFlights[0].date || self.flightCityes.length > 1 && !self.allFlights[1].date || self.flightCityes.length > 2 && !self.allFlights[2].date))
      ) {
        // validate is false_____________________________________________________________________
        if (!this.selectedDate.length) {
          $('.showPopup').css("color", "red");
        }
        if (self.byReturn == 3) {
          if (!self.allFlights[0].date) {
            $('.showPopup2').css("color", "red");
          }
          if (self.flightCityes.length > 1 && !self.allFlights[1].date) {
            $('.showPopup3').css("color", "red");
          }
          if (self.flightCityes.length > 2 && !self.allFlights[2].date) {
            $('.showPopup4').css("color", "red");
          }
        }
        self.alertText = 'فیلد های درخواستی را بدرستی تکمیل کنید.';
        self.alertType = 'error';
        self.showAlert = true;
      } else if (self.originCity == self.destinationInternal) {
        self.alertText = 'مبداء و مقصد نباید یکسان باشد.';
        self.alertType = 'error';
        self.showAlert = true;
      } else if (
        (self.byReturn == 3) &&
        (
          (self.allFlights[0].destinationInternal == self.allFlights[0].originCity)
          || (self.flightCityes.length > 1 && self.allFlights[1].destinationInternal == self.allFlights[1].originCity)
          || (self.flightCityes.length > 2 && self.allFlights[2].destinationInternal == self.allFlights[2].originCity)
        )
      ) {
        self.alertText = 'مبداء و مقصد نباید یکسان باشد.';
        self.alertType = 'error';
        self.showAlert = true;
      } else if (
        (self.byReturn == 3) &&
        (
          (self.timestampDate < self.allFlights[0].timestamp)
          || (self.flightCityes.length > 1 && self.allFlights[0].timestamp < self.allFlights[1].timestamp)
          || (self.flightCityes.length > 2 && self.allFlights[1].timestamp < self.allFlights[2].timestamp)
        )
      ) {
        self.alertText = 'تاریخ های انتخابی صحیح نیست.';
        self.alertType = 'error';
        self.showAlert = true;
      } else {
        self.isLoadingAxios = true
        // validate is true _____________________________________________________________________
        // get date 1 ___________________________________________________________________________
        var selectedDate = this.date1
        if (selectedDate.length != 2) {
          let convertToArray = []
          convertToArray.push(selectedDate)
          selectedDate = convertToArray
        }
        let options = { day: 'numeric', month: 'long', year: 'numeric' };
        let variabel = new Date(selectedDate[0]).toLocaleDateString('fa-IR', options);
        let variabel2 = new Date(selectedDate[1]).toLocaleDateString('fa-IR', options);
        variabel = variabel.split(' ')
        variabel2 = variabel2.split(' ')

        // // get rooms and peaple number __________________________________________________________
        let rooms = this.headerRooms
        let childs = 0;
        let adl = 0
        let inf = 0
        for (let i = 0; i < rooms.length; i++) {
          childs = childs + rooms[i].child
          adl = adl + rooms[i].peaple
          inf = inf + rooms[i].baby
        }
        // get origin and destination ____________________________________________________________
        let originIATA = ''
        let destinationIATA = ''
        let originID = ''
        let destinationID = ''
        if (self.external) {
          // if is not multi flight_______________________________________________________________
          if (self.byReturn != 3) {
            originIATA = (self.page == 'flight' && self.originCity.text) ? self.AllpersianCityes.find(x => x.text == self.originCity.text) : self.otherCityesOrigin.find(x => x.text == self.originCity)
            originID = originIATA.IATA
            // originIATA = originIATA.IATA
            destinationIATA = (self.page == 'flight' && self.destinationInternal.text) ? self.AllpersianCityes.find(x => x.text == self.destinationInternal.text) : self.otherCityesOrigin2.find(x => x.text == self.destinationInternal)
            destinationID = destinationIATA.IATA
            // destinationIATA = destinationIATA.IATA
          }
        } else if (this.selectedSection.title != 'آهوان' && this.selectedSection.title != 'تور' && this.selectedSection.title != 'هتل') {
          originIATA = (self.page == 'flight' && self.originCity.text) ? self.AllpersianCityes.find(x => x.text == self.originCity.text) : self.AllpersianCityes.find(x => x.text == self.originCity)
          originID = originIATA.id
          originIATA = originIATA.label
          destinationIATA = (self.page == 'flight' && self.destinationInternal.text) ? self.AllpersianCityes.find(x => x.text == self.destinationInternal.text) : self.AllpersianCityes.find(x => x.text == self.destinationInternal)
          destinationID = destinationIATA.id
          destinationIATA = destinationIATA.label
        }
        switch (this.selectedSection.title) {
          case 'آهوان':
            self.searchLink = '/iranhotels?hotel=' +
              self.destinationInternal +
              '&checkin=' + variabel[0] + '+' + variabel[1] + '+' + variabel[2] +
              '&checkout=' + variabel2[0] + '+' + variabel2[1] + '+' + variabel2[2] +
              '&room=' + rooms.length +
              '&adl=' + adl +
              '&chd=' + childs +
              '&id=' + (self.destinationInternal == 'هتل آهوان چابکسر' ? '3' : '1005')
            window.location.href = self.searchLink
            break;
          case 'پرواز':
            {
              self.searchLink = self.byReturn == 2 ?
                '/flight?' +
                'path=' + (self.byReturn == 1 ? 'ow' : self.byReturn == 2 ? 'rt' : 'mp') +
                '&from=' + originIATA +
                '&to=' + destinationIATA +
                '&start=' + variabel[0] + '+' + variabel[1] + '+' + variabel[2] +
                '&end=' + variabel2[0] + '+' + variabel2[1] + '+' + variabel2[2] +
                '&adl=' + adl +
                '&chd=' + childs +
                '&inf=' + inf
                :
                '/flight?' +
                'path=' + (self.byReturn == 1 ? 'ow' : self.byReturn == 2 ? 'rt' : 'mp') +
                '&from=' + originIATA +
                '&to=' + destinationIATA +
                '&start=' + variabel[0] + '+' + variabel[1] + '+' + variabel[2] +
                '&end=' + variabel[0] + '+' + variabel[1] + '+' + variabel[2] +
                '&adl=' + adl +
                '&chd=' + childs +
                '&inf=' + inf
              if (self.byReturn != 3) {
                window.location.href = self.searchLink;
              } else {
                self.alertText = 'این قسمت از سایت در حال توسعه میباشد!';
                self.alertType = 'success';
                self.showAlert = true;
              }

              break;
            }
          case 'تور': {
            let findTourId = self.toursList.find(x => x.label == self.destinationInternal)
            let findTourDateId = self.tourDates.find(x => x.text == self.tourDate)
            let roomText = ''
            for (let i = 0; i < self.headerRooms.length; i++) {
              roomText = roomText + self.headerRooms[i].peaple + '-' + self.headerRooms[i].child + '-' + self.headerRooms[i].baby + (i == self.headerRooms.length - 1 ? '' : ',')
            }
            window.location.href = 'https://panel.ahuantours.com/reserve/tour/' + findTourId.id + '/' + findTourDateId.id + '/' + roomText
            break;
          }
          default: {
            break;
          }
        }
        self.isLoadingAxios = false
      }
    },
    async changeHeaderInput(item) {
      var self = this
      switch (item) {
        case 'originCity':
          if (self.external) {
            // 
          } else {
            await $('.destinationInternalParent').click()

          }
          if (self.originCity) {
            self.$refs.destinationInternal.$refs.menu.isActive = true;
          }

          break;
        case 'destinationInternal':
          self.tourDate = {};
          self.tourDates = []
          if (self.destinationInternal) {
            if (self.selectedSection.title == 'تور') {
              let findId = self.toursList.find(x => x.label == self.destinationInternal)
              self.loadingTourDates = true
              axios.get('https://panel.ahuantours.com/api/tour/' + findId.id + '/dates2')
                .then(function (response) {
                  // handle success
                  self.tourDates = response.data.map((x) => {
                    return {
                      label: x.goDateShamsi + ' الی ' + x.retDateShamsi,
                      id: x.id,
                      text: x.goDateShamsi + ' الی ' + x.retDateShamsi,
                      subtitle: x.goDateMiladi + ' to ' + x.retDateMiladi,
                    }
                  })
                  self.loadingTourDates = false
                  self.$refs.tourDate.$refs.menu.isActive = true;

                })
                .catch(function (error) {
                  // handle error
                })
            } else {
              self.$refs.date1.focus()
            }
          }
          break;
        case 'originCity0':
          if (self.allFlights[0].originCity) {
            self.$refs.destinationInternal2.$refs.menu.isActive = true;
          }

          break;
        case 'destinationInternal0':
          if (self.allFlights[0].destinationInternal) {
            this.showDate2 = true
          }
          break;
        case 'originCity1':
          if (self.allFlights[1].originCity) {
            self.$refs.destinationInternal3.$refs.menu.isActive = true;
          }

          break;
        case 'destinationInternal1':
          if (self.allFlights[1].destinationInternal) {
            this.showDate3 = true
          }
          break;
        case 'originCity2':
          if (self.allFlights[2].originCity) {
            self.$refs.destinationInternal4.$refs.menu.isActive = true;
          }
          break;
        case 'destinationInternal2':
          if (self.allFlights[2].destinationInternal) {
            this.showDate4 = true
          }
          break;
        default:
          break;
      }
    },
    addFlight(index, type) {
      if (this.flightCityes.length < 3 && type == 'add') {
        this.flightCityes.push({
          originCity: '',
          destinationInternal: '',
          date: '',
          timestamp: 0
        })
        this.allFlights.push({
          originCity: '',
          destinationInternal: '',
          date: '',
          timestamp: 0
        })
        this.$refs.headerInputForm.resetValidation()
        $('.showPopup , .showPopup2 , .showPopup3 , .showPopup4').css("color", '#424242')
      }
      else {
        this.flightCityes.splice(index, 1)
        this.allFlights.splice(index, 1)
      }
    },
    disabelDate(formatted, dateMoment, checkingFor) {
      return (
        formatted === new Date() ||
        dateMoment.jMonth() === 4 ||  // means "mordad"
        dateMoment.locale('en').format('dddd') === 'Friday'
      )
    },
    showPeaple() {
      this.viiblePeaple = !this.viiblePeaple
    },
    getDayName(dateSelected) {
      var date1 = new Date(dateSelected.length == 2 ? dateSelected[0] : dateSelected).getDay()
      var date2 = new Date(dateSelected.length == 2 ? dateSelected[1] : dateSelected).getDay()

      // // let months = new Array("فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دي", "بهمن", "اسفند");
      let days = new Array("یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه", "شنبه");
      let allDays = {
        day1: days[date1],
        day2: days[date2]
      }
      return allDays
    },
    toggleDate() {
      // if (this.showDate1) {
      //   this.showDate1 = false
      // } else {
      //   this.showDate1 = true
      this.$refs.date1.focus()
      // }
    },
    setCreated() {
      let self = this
      if (self.page == 'flight' && self.$route.query.start) {
        switch (self.$route.query.path) {
          case 'ow':
            self.byReturn = 1
            break;
          case 'rt':
            self.byReturn = 2
            break;
          case 'mp':
            self.byReturn = 3
            break;
          default:
            break;
        }
        self.external = self.$route.query.ex == 'true' ? true : false
        if (self.$route.query.path == 'ow') {
          self.date1 = self.$route.query.start
          self.headerRooms = [{
            peaple: Number(self.$route.query.adl),
            child: Number(self.$route.query.chd),
            baby: Number(self.$route.query.inf),
          }]
          self.$emit('getPasanger', self.headerRooms)
          self.changeRoomValue('flight')
          setTimeout(() => {
            self.date1 = self.$route.query.start
            setTimeout(() => {
              self.changeDate1()
              self.viiblePeaple = false
            }, 500);
          }, 500);

          if (self.external == true) {
            setTimeout(() => {
              self.originCity = self.otherCityesOrigin.find(x => x.IATA == self.$route.query.from)
              self.destinationInternal = self.otherCityesOrigin.find(x => x.IATA == self.$route.query.to)
            }, 1000);
          }
          else {

            if (!self.persianCityes.find(x => x.id == self.$route.query.from)) {
              self.persianCityes = self.AllpersianCityes
            }
            self.originCity = self.persianCityes.find(x => x.id == self.$route.query.from)
            if (!self.persianCityes2.find(x => x.id == self.$route.query.to)) {
              self.persianCityes2 = self.AllpersianCityes
            }
            self.destinationInternal = self.persianCityes2.find(x => x.id == self.$route.query.to)
          }

          self.$emit('reRoute')
        }
        else if (self.$route.query.path == 'rt') {
          self.external = self.$route.query.ex == 'false' ? false : true
          if (!self.persianCityes.find(x => x.id == self.$route.query.from)) {
            self.persianCityes = self.AllpersianCityes
          }
          self.originCity = self.persianCityes.find(x => x.id == self.$route.query.from)
          if (!self.persianCityes2.find(x => x.id == self.$route.query.to)) {
            self.persianCityes2 = self.AllpersianCityes
          }
          self.destinationInternal = self.persianCityes2.find(x => x.id == self.$route.query.to)
          self.date1 = []
          self.date1.push(self.$route.query.start)
          self.date1.push(self.$route.query.end)
          self.changeDate1(self.date1)
          self.headerRooms = [{
            peaple: Number(self.$route.query.adl),
            child: Number(self.$route.query.chd),
            baby: Number(self.$route.query.inf),
          }]
          self.$emit('getPasanger', self.headerRooms)
          self.changeRoomValue('flight')
          // // console.log([self.$route.query.start, self.$route.query.end]);
          // // self.date1 = [self.$route.query.start, self.$route.query.end]
          // // self.changeDate1(self.date1)

        }
      }
    },
  },
  created() {
    let self = this
    window.scrollTo(0, 0);
    self.getWidth();
    self.getCityesExternal();
    self.getToursList();
    self.minDate = (
      new Date().getFullYear() + '-' +
      (new Date().getMonth() + 1) + '-' +
      new Date().getDate()
    )
    this.setCreated()
  },
}
</script>
