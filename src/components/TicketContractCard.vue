<template>
  <div class="widthAll">
    <v-row
      v-for="(item, i) in documents"
      :key="i"
      justify="center"
      class="rounded-lg px-3 py-3 mb-4"
      style="
        box-shadow: 0 0 15px #ebebeb;
        border: 1px solid #ebebeb;
        background: #fff;
      "
    >
      <v-col cols="6" sm="2" class="py-3">
        <v-row justify="center">
          <b class="grey--text text--darken-1">شماره‌سفارش</b>
        </v-row>
        <v-row class="mt-4 grey--text text--darken-1" justify="center">
          {{ item.id }}
        </v-row>
      </v-col>
      <v-col cols="6" sm="3" class="py-3">
        <v-row justify="center">
          <b class="grey--text text--darken-1">نوع سفارش</b>
        </v-row>
        <v-row class="mt-4 grey--text text--darken-1" justify="center">
          پرواز داخلی
        </v-row>
      </v-col>
      <v-col cols="6" sm="2" class="py-3">
        <v-row justify="center">
          <b class="grey--text text--darken-1"
            >مبلغ
            <b
              class="grey--text text--darken-1 d-inline-block d-sm-none d-lg-inline-block"
              >(تومان)</b
            >
          </b>
        </v-row>
        <v-row class="mt-4 grey--text text--darken-1" justify="center">
          {{ separatePrice(item.allFarePrice / 10) }}
        </v-row>
      </v-col>
      <v-col cols="6" sm="2" md="3" class="py-3">
        <v-row justify="center">
          <b class="grey--text text--darken-1"
            >تاریخ‌
            <b
              class="grey--text text--darken-1 d-inline-block d-sm-none d-lg-inline-block"
              >و‌ساعت</b
            >
          </b>
        </v-row>
        <v-row class="mt-4 grey--text text--darken-1" justify="center">
          <span
            class="d-inline-block d-sm-none d-lg-inline-block grey--text text--darken-1"
          >
            {{ item.issueTime }} - </span
          >{{ new Date(item.issueDate).toLocaleDateString("fa") }}
        </v-row>
      </v-col>
      <v-col cols="12" sm="3" md="2" class="py-3">
        <v-row justify="center" class="heightAll" align="center">
          <v-btn
            class="widthAll rounded-xl"
            color="#14179E"
            dark
            @click="
              choosedTicket = item;
              ticketDetailsModal = true;
            "
            >اطلاعات بیشتر</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
    <v-dialog
      width="1400"
      v-if="ticketDetailsModal"
      v-model="ticketDetailsModal"
      style="z-index: 999999"
    >
      <v-sheet class="relative pa-5" style="min-height: 500px">
        <v-icon
          class="fixed white rounded-circle"
          @click="ticketDetailsModal = false"
        >
          mdi-close
        </v-icon>
        <v-row
          class="px-3 px-sm-6 px-md-12 blue lighten-5 rounded-xl py-4 mt-9"
        >
          <v-col cols="12" sm="6" md="4" lg="3" class="my-1 my-md-2">
            <v-row>
              <b>شماره‌سفارش:</b>
              <span class="mr-3">{{ choosedTicket.id }}</span>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" class="my-1 my-md-2">
            <v-row>
              <b>تاریخ رزرو:</b>
              <span class="mr-3">
                {{
                  new Date(choosedTicket.issueDate).toLocaleDateString("fa", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                }}
              </span>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" class="my-1 my-md-2">
            <v-row>
              <b>ساعت رزرو:</b>
              <span class="mr-3">
                {{ choosedTicket.issueTime }}
              </span>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" class="my-1 my-md-2">
            <v-row>
              <b>روز رزرو:</b>
              <span class="mr-3">
                {{
                  choosedTicket.dayname == 6
                    ? "شنبه"
                    : choosedTicket.dayname == 0
                    ? "یکشنبه"
                    : choosedTicket.dayname == 1
                    ? "دوشنبه"
                    : choosedTicket.dayname == 2
                    ? "سه‌شنبه"
                    : choosedTicket.dayname == 3
                    ? "چهارشنبه"
                    : choosedTicket.dayname == 4
                    ? "پنجشنبه"
                    : choosedTicket.dayname == 5
                    ? "جمعه"
                    : ""
                }}
              </span>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" class="my-1 my-md-2">
            <v-row>
              <b>تعدادمسیر:</b>
              <span class="mr-3">{{
                choosedTicket.contractFlights.length == 1
                  ? "تک مسیر"
                  : choosedTicket.contractFlights.length == 2
                  ? "رفت و برگشت"
                  : "چندمسیره"
              }}</span>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" class="my-1 my-md-2">
            <v-row>
              <b>تعدادمسافر:</b>
              <span class="mr-3"
                >{{ choosedTicket.contractPassengers.length }} نفر</span
              >
            </v-row>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" class="my-1 my-md-2">
            <v-row>
              <b>وضعیت:</b>
              <span class="mr-3">{{
                choosedTicket.ticketStatus == "confirm" ? "صادر شده" : ""
              }}</span>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" class="my-1 my-md-2">
            <v-row>
              <b>نوع‌سفارش:</b>
              <span class="mr-3">پرواز داخلی</span>
            </v-row>
          </v-col>
        </v-row>
        <h4 class="mt-6">لیست بلیط‌ها</h4>
        <v-row class="mt-6">
          <v-data-table
            style="box-shadow: 0 0px 21px #dbdbdb !important"
            hide-default-footer
            :headers="flightHeaders"
            :items="choosedTicket.passengers"
            class="tabelHeader widthAll even-odd-blue-tabel rounded-lg hideOver c"
          >
            <template v-slot:[`item.origin`]="{ item }">
              <v-row justify="center" align="center">
                <span>{{
                  AllpersianCityes.find((x) => x.id == item.origin).text
                }}</span>
              </v-row>
            </template>
            <template v-slot:[`item.price`]="{ item }">
              <v-row justify="center" align="center">
                <span>
                  {{ separatePrice(item.price / 10) }}
                </span>
              </v-row>
            </template>
            <template v-slot:[`item.destination`]="{ item }">
              <v-row justify="center" align="center">
                <span>{{
                  AllpersianCityes.find((x) => x.id == item.destination).text
                }}</span>
              </v-row>
            </template>
            <template v-slot:[`item.airline`]="{ item }">
              <v-row justify="center" align="center">
                <span>{{ item.airline }}</span>
                <img
                  v-if="item.airlineLogo"
                  width="40"
                  :src="item.airlineLogo"
                  alt=""
                />
              </v-row>
            </template>
            <template v-slot:[`item.action`]="{ item }">
              <v-row justify="center">
                
                <v-btn
                  :loading="item.loadingCancellButton"
                  :disabled="!item.ticketNumber || (item.dateTime && new Date(item.dateTime).getTime() < new Date().getTime())"
                  @click="cancellticket(item)"
                  outlined
                  color="#DEB788"
                  class="mt-3"
                  >کنسل کردن بلیط‌</v-btn
                >
              </v-row>
              <v-row justify="center">
                <v-btn
                  :disabled="!item.ticketNumber"
                  @click="downloadticket(item)"
                  outlined
                  color="rgb(20, 23, 158)"
                  class="my-3 px-8"
                  >دانلود بلیط‌</v-btn
                >
              </v-row>
            </template>
          </v-data-table>
        </v-row>
        <v-dialog width="500" v-if="cancellModal" v-model="cancellModal">
          <v-sheet
            v-if="isCancellType"
            class="pa-6 text-center"
            style="line-height: 44px"
          >
            آیا از کنسل کردن بلیط پرواز
            <b>{{ choosedTicketRow.name }}</b>

            <br />
            از مبداء
            <b>{{
              AllpersianCityes.find((x) => x.id == choosedTicketRow.origin).text
            }}</b>

            به
            <b>{{
              AllpersianCityes.find((x) => x.id == choosedTicketRow.destination)
                .text
            }}</b>

            <br />
            در تاریخ
            <b>{{ choosedTicketRow.date }}</b>
            ساعت
            <b>{{ choosedTicketRow.time }}</b>

            <br />
            به شماره بلیط
            <b>{{ choosedTicketRow.ticketNumber }}</b>
            <br />
            و مبلغ جریمه
            <b class="red--text"
              >{{ separatePrice(choosedTicketRow.PENALTY) }}
              {{ choosedTicketRow.description == "nira" ? "تومان" : "%" }}</b
            >

            اطمینان دارید؟
            <v-row justify="center" class="mt-6">
              <v-btn
                class="px-9 ml-3"
                color="red"
                dark
                :loading="loadingButton"
                @click="confirmCancell()"
                >بله</v-btn
              >
              <v-btn
                class="px-9"
                color="rgb(20, 23, 158)"
                dark
                @click="cancellModal = false"
                >خیر</v-btn
              >
            </v-row>
          </v-sheet>
          <v-sheet v-else class="pa-6 text-center" style="line-height: 44px">
            <v-row>
              <v-icon @click="cancellModal = false">mdi-close</v-icon>
            </v-row>
            <h3
              class="my-4"
              :class="alertType == 'error' ? 'red--text' : 'green--text'"
            >
              {{ alertText }}
            </h3>
          </v-sheet>
        </v-dialog>
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
.even-odd-blue-tabel th,
.even-odd-blue-tabel tbody tr:nth-child(even) {
  background-color: #dff2fd !important;
}

@media (max-width: 599px) {
}
</style>

<script>
import axios from "axios";
export default {
  name: "ticket-contract-card",
  components: {},
  watch: {},
  props: ["documents"],
  computed: {},
  data: () => ({
    newInformations: {},
    loadingButton: false,
    cancellModal: false,
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
        airport: "Ahwaz Arpt",
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
        airport: "Bahregan Arpt",
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
        airport: "Parsabad Arpt",
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
    ticketDetailsModal: false,
    showAlert: false,
    alertType: "error",
    alertText: "",
    choosedTicket: {},
    flightHeaders: [
      // { text: '', sortable: false, value: 'image', align: 'center', },
      {
        text: "نام مسافر",
        align: "center",
        value: "name",
      },
      {
        text: "بازه سنی",
        align: "center",
        value: "age",
      },
      {
        text: "مبداء",
        align: "center",
        sortable: false,
        value: "origin",
      },
      {
        text: "مقصد",
        align: "center",
        sortable: false,
        value: "destination",
      },
      {
        text: "مبلغ",
        align: "center",
        sortable: false,
        value: "price",
      },
      {
        text: "شماره‌بلیط",
        align: "center",
        sortable: false,
        value: "ticketNumber",
      },
      {
        text: "تاریخ پرواز",
        align: "center",
        sortable: false,
        value: "date",
      },
      {
        text: "ساعت پرواز",
        sortable: false,
        value: "time",
        align: "center",
      },
      {
        text: "شماره پرواز",
        sortable: false,
        value: "flightNumber",
        align: "center",
      },
      {
        text: "نوع پرواز",
        sortable: false,
        value: "flightType",
        align: "center",
      },
      {
        text: "هواپیمایی",
        sortable: false,
        value: "airline",
        align: "center",
      },
      {
        text: "عملیات",
        sortable: false,
        value: "action",
        align: "center",
      },
    ],
    choosedTicketRow: {},
    isCancellType: true,
  }),
  methods: {
    getToken() {
      return new Promise((resolve) => {
        let self = this;
        axios
          .get("https://panel.ahuantours.com/api/Login")
          .then(function (response) {
            // handle success
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + response.data.token;
            localStorage.setItem("charterToken", response.data.token);
            resolve();
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      });
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
    cancellticket(item) {
      this.choosedTicket.passengers[item.index].loadingCancellButton = true;
      // console.log();
      let self = this;
      this.choosedTicketRow = item;
      if (item.description == "chr724") {
        let factor = {
          id_faktor: item.pnr,
        };
        axios
          .post("https://panel.ahuantours.com/api/Ch724/CheckPenalti", factor)
          .then(function (res) {
            if (res.data.data.success == "true") {
              if (res.data.data.penalti == "-1") {
                self.cancellModal = true;
                self.alertType = "success";
                self.alertText = "این بلیط قبلا کنسل شده!";
                self.isCancellType = false;
                self.updateDatabase();
              } else {
                self.choosedTicketRow.PENALTY = res.data.data.penalti;
                self.cancellModal = true;
                self.isCancellType = true;
              }
            } else {
              self.alertType = "error";
              self.alertText =
                "برای کنسل کردن این بلیط چند دقیقه دیگر تلاش کنید یا با پشتیبانی تماس بگیرید";
              self.cancellModal = true;
              self.isCancellType = false;
            }
            self.choosedTicket.passengers[
              item.index
            ].loadingCancellButton = false;
          })
          .catch(function (error) {
            // handle error
            self.choosedTicket.passengers[
              item.index
            ].loadingCancellButton = false;
            console.log(error);
          });
      } else if (item.description == "nira") {
        let params = {
          Airline: self.choosedTicketRow.airlineCode,
          TicketNo: self.choosedTicketRow.ticketNumber,
        };
        axios
          .get("https://panel.ahuantours.com/api/Nira/PenaltyNow", {
            params,
          })
          .then(function (response) {
            if (response.data.NRSPenalty) {
              self.choosedTicketRow.PENALTY =
                response.data.NRSPenalty.PENALTY.split(".")[0] / 10;
              self.choosedTicketRow.RefundedAmount =
                response.data.NRSPenalty.RefundedAmount.split(".")[0];
              self.isCancellType = true;
              self.cancellModal = true;
            } else {
              self.alertText =
                response.data ==
                "NO COUPON EXISTS FOR REFUND!!!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
                  ? "این بلیط قبلا کنسل شده!"
                  : response.data;
              self.alertType = "success";
              self.isCancellType = false;
              self.cancellModal = true;
              self.updateDatabase();
            }
            self.choosedTicket.passengers[
              item.index
            ].loadingCancellButton = true;
          })
          .catch(function (error) {
            // handle error
            let errorText = "";
            if (error.response.status == 403) {
              errorText = "سطح دسترسی این وب سرویس برای شما محدودیت دارد.";
            } else if (error.response.status == 400) {
              errorText = "bad quest";
            } else if (error.response.status == 401) {
              self.getToken();
            }
            self.alertText = errorText;
            self.alertType = "error";
            self.showAlert = true;
            setTimeout(() => {
              self.showAlert = false;
            }, 3000);
            self.choosedTicket.passengers[
              item.index
            ].loadingCancellButton = true;
          });
      } else {
        this.alertType = "error";
        this.alertText = "متاسفانه نوع بلیط ثبت نشده";
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
        this.choosedTicket.passengers[item.index].loadingCancellButton = false;
      }
    },
    downloadticket(item) {
      if (item.ticketUrl) {
        window.open(item.ticketUrl, "_blank");
      } else {
        this.alertType = "error";
        this.alertText = "متاسفانه تصویر بلیط ثبت نشده";
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }
    },
    confirmCancell() {
      let self = this;
      self.loadingButton = true;
      if (this.choosedTicketRow.description == "chr724") {
        let penaltiObject = {
          id_faktor: self.choosedTicketRow.pnr,
          penalti: self.choosedTicketRow.PENALTY,
          listticketID: [self.choosedTicketRow.ticketNumber],
        };
        axios
          .post(
            "https://panel.ahuantours.com/api/Ch724/CancelTicket",
            penaltiObject
          )
          .then(function (response) {
            self.loadingButton = false;
            if (response.data.data.success == "true") {
              self.alertType = "success";
              self.choosedTicketRow.RefundedAmount =
                response.data.data.passengers[0].refunde_price;
              self.alertText =
                "بلیط با موفقیت کنسل شد.مبلغ بازگشتی به شما" +
                self.separatePrice(
                  response.data.data.passengers[0].refunde_price
                ) +
                "ریال میباشد.";
              self.isCancellType = false;
              self.loadingButton = false;
              self.updateDatabase(self.choosedTicket);
            } else {
              self.alertType = "error";
              self.alertText =
                "برای کنسل کردن این بلیط چند دقیقه دیگر تلاش کنید یا با پشتیبانی تماس بگیرید";
              self.isCancellType = false;
              self.loadingButton = false;
            }
          })
          .catch(function (error) {
            // handle error
            self.loadingButton = false;
            console.log(error);
          });
      } else if (this.choosedTicketRow.description == "nira") {
        let self = this;
        let params = {
          Airline: self.choosedTicketRow.airlineCode,
          PNR: self.choosedTicketRow.pnr,
          PassengerName: self.choosedTicketRow.fName,
          PassengerLastName: self.choosedTicketRow.lName,
          DepartureDate: self.choosedTicketRow.georgianDate.split("T")[0],
          FlightNo: self.choosedTicketRow.flightNumber,
        };
        axios
          .get("https://panel.ahuantours.com/api/Nira/CancelSeat", {
            params,
          })
          .then(function (response) {
            // if (response.data.AirCancelSeat[0].Done == "true") {
              axios
                .get(
                  "https://panel.ahuantours.com/api/Nira/ETR?AirLine=" +
                    self.choosedTicketRow.airlineCode +
                    "&TicketNo=" +
                    self.choosedTicketRow.ticketNumber
                )
                .then(function (res) {
                  if (res.data.Fare) {
                    self.newInformations.Fare = res.data.Fare;
                    let KU = res.data.TAXES.find((x) => x.TaxCode == "KU");
                    
                    self.newInformations.KU = KU ? KU.TaxAmount : 0;
                    let LP = res.data.TAXES.find((x) => x.TaxCode == "LP");
                    
                    self.newInformations.LP = LP ? LP.TaxAmount : 0;
                    self.ETRefund();
                    // get self.newInformations.KU == ???   TaxAmount
                    // get self.newInformations.LP == ???   TaxCode
                  }
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                });
            // } else {
            //   self.loadingButton = false;
            //   self.alertText =
            //     "عملیات با خطا مواجه شد.لطفا دوباره سعی کنید،یا باپشتیبانی تماس حاصل فرمائید.";
            //   self.alertType = "error";
            //   self.isCancellType = false;
            //   self.loadingButton = false;
            //   self.cancellModal = true;
            // }
          })
          .catch(function (error) {
            // handle error
            self.loadingButton = false;
            let errorText = "";
            if (error.response.status == 403) {
              errorText = "سطح دسترسی این وب سرویس برای شما محدودیت دارد.";
            } else if (error.response.status == 400) {
              errorText = "bad quest";
            } else if (error.response.status == 401) {
              self.getToken();
            } else {
              errorText = "عملیات با خطا مواجه شد.";
            }
            self.alertText = errorText;
            self.alertType = "error";
            self.showAlert = true;
            setTimeout(() => {
              self.showAlert = false;
            }, 3000);
          });
      }
    },
    ETRefund() {
      let self = this;
      let params = {
        Airline: self.choosedTicketRow.airlineCode,
        TicketNo: self.choosedTicketRow.ticketNumber,
        Fare: self.newInformations.Fare,
        KU: self.newInformations.KU ? self.newInformations.KU : 0, //عوارض
        LP: self.newInformations.LP, //عوارض فرودگاهی
        Penalty: self.choosedTicketRow.PENALTY * 10,
      };
      axios
        .get("https://panel.ahuantours.com/api/Nira/ETRefund", {
          params,
        })
        .then(function (response) {
          self.alertType = "success";
          self.alertText =
            "بلیط با موفقیت کنسل شد.مبلغ بازگشتی به شما " +
            self.separatePrice(self.choosedTicketRow.RefundedAmount) +
            " ریال میباشد.";
          self.isCancellType = false;
          self.loadingButton = false;

          self.updateDatabase();
          self.cancellModal = true;
        })
        .catch(function (error) {
          // handle error
          self.loadingButton = false;
          console.log(error);
        });
    },
    updateDatabase(object) {
      let self = this;
      axios
        .get(
          "https://panel.ahuantours.com/api/Contract/" +
            Number(self.choosedTicket.id)
        )
        .then(function (res) {
          let resObject = res.data;
          let findObject = resObject.contractPassengers;
          let findObjectIndex = findObject.findIndex(
            (x) =>
              x.fName + " " + x.lName == self.choosedTicketRow.name &&
              (x.retTicketNumber == self.choosedTicketRow.ticketNumber ||
                x.goTicketNumber == self.choosedTicketRow.ticketNumber)
          );
          resObject.contractPassengers[findObjectIndex].description =
            "cancelled";
          self.choosedTicketRow.descriptionSeat = "cancelled";
          axios
            .put("https://panel.ahuantours.com/api/Contract/update", resObject)
            .then(function (response) {})
            .catch(function (error) {
              // handle error
              self.alertText =
                "پرواز با موفقیت کنسل شد اما ذخیره اطلاعات  در پایگاه داده ناموفق بود.لطفا به پشتیبانی اطلاع دهید.";
              self.alertType = "error";
              self.showAlert = true;
              console.log(error);
            });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },
  async created() {
    await this.getToken();
  },
};
</script>
