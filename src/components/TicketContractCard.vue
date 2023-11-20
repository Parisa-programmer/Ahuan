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
      <v-col md="2" class="py-3">
        <v-row justify="center">
          <b class="grey--text text--darken-1">شماره‌سفارش</b>
        </v-row>
        <v-row class="mt-4 grey--text text--darken-1" justify="center">
          {{ item.id }}
        </v-row>
      </v-col>
      <v-col md="3" class="py-3">
        <v-row justify="center">
          <b class="grey--text text--darken-1">نوع سفارش</b>
        </v-row>
        <v-row class="mt-4 grey--text text--darken-1" justify="center">
          پرواز داخلی
        </v-row>
      </v-col>
      <v-col md="2" class="py-3">
        <v-row justify="center">
          <b class="grey--text text--darken-1">مبلغ(تومان)</b>
        </v-row>
        <v-row class="mt-4 grey--text text--darken-1" justify="center">
          {{ separatePrice(item.allFarePrice / 10) }}
        </v-row>
      </v-col>
      <v-col md="3" class="py-3">
        <v-row justify="center">
          <b class="grey--text text--darken-1">تاریخ‌و‌ساعت</b>
        </v-row>
        <v-row class="mt-4 grey--text text--darken-1" justify="center">
          {{ item.issueTime }} -
          {{ new Date(item.issueDate).toLocaleDateString("fa") }}
        </v-row>
      </v-col>
      <v-col md="2" class="py-3">
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
      <v-sheet class="relative pa-12" style="min-height: 500px">
        <v-icon class="ma-1" @click="ticketDetailsModal = false"
          >mdi-close</v-icon
        >
        <v-row class="mt-6 px-12 blue lighten-5 rounded-xl py-4">
          <v-col cols="3" class="my-2">
            <v-row>
              <b>شماره‌سفارش:</b>
              <span class="mr-3">{{ choosedTicket.id }}</span>
            </v-row>
          </v-col>
          <v-col cols="3" class="my-2">
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
          <v-col cols="3" class="my-2">
            <v-row>
              <b>ساعت رزرو:</b>
              <span class="mr-3">
                {{ choosedTicket.issueTime }}
              </span>
            </v-row>
          </v-col>
          <v-col cols="3" class="my-2">
            <v-row>
              <b>روز رزرو:</b>
              <span class="mr-3">
                {{ choosedTicket.dayname }}
              </span>
            </v-row>
          </v-col>
          <v-col cols="3" class="my-2">
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
          <v-col cols="3" class="my-2">
            <v-row>
              <b>تعدادمسافر:</b>
              <span class="mr-3"
                >{{ choosedTicket.contractPassengers.length }} نفر</span
              >
            </v-row>
          </v-col>
          <v-col cols="3" class="my-2">
            <v-row>
              <b>وضعیت:</b>
              <span class="mr-3">{{
                choosedTicket.ticketStatus == "confirm" ? "صادر شده" : ""
              }}</span>
            </v-row>
          </v-col>
          <v-col cols="3" class="my-2">
            <v-row>
              <b>نوع‌سفارش:</b>
              <span class="mr-3"
                >پرواز داخلی
                {{ choosedTicket.systemOrCharter ? "چارتری" : "سیستمی" }}</span
              >
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
                <img width="40" :src="item.airlineLogo" alt="" />
              </v-row>
            </template>
            <template v-slot:[`item.action`]="{ item }">
              <v-btn
                @click="cancellticket(item)"
                dark
                color="rgb(20, 23, 158)"
                :class="item"
                >کنسل کردن بلیط‌</v-btn
              >
            </template>
          </v-data-table>
        </v-row>
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
export default {
  name: "ticket-contract-card",
  components: {},
  watch: {},
  props: ["documents"],
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
    choosedTicket: true,
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
    cancellticket(item) {
      console.log(item);
    },
  },
  created() {},
};
</script>
