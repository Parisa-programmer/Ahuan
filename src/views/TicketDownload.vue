<template class="">
  <div class="mt-12 pt-12">
    <div v-if="isBuying">
      <h1 class="widthAll text-center green--text text--darken-3 mt-12">
        درحال تکمیل فرایند خرید...
      </h1>
    </div>
    <v-row justify="center" class="mt-md-12 mt-sm-6" v-else-if="isReturnUrl">
      <div
        v-if="successSell"
        class="indexDiv rounded-xl mb-6 pa-4 mt-12 mt-sm-6"
        style="max-width: 875px; border: 5px solid #9ee9da"
      >
        <v-row justify="center" class="px-12">
          <img src="@/assets/image/check-mark.png" class="done-icon" alt="" />
        </v-row>
        <v-row justify="center" class="mt-12 mb-4">
          <h1 style="color: #00a182" class="font-small-xs">
            عملیات رزرو با موفقیت انجام شد!
          </h1>
        </v-row>
        <v-row
          v-if="(PNR1 && PNR2) || (PNR1 && !PNR2 && !ticketUrl1 && !ticketUrl2)"
          justify="center"
          class="mb-12"
        >
          <v-btn
            outlined
            color="red"
            :loading="loadingDownload"
            @click="downloadTickets()"
            >جهت دانلود بلیط ها کلیک کنید</v-btn
          >
        </v-row>
        <v-row
          v-else-if="ticketUrl1 && !ticketUrl2 && !PNR1 && !PNR2"
          justify="center"
          class="mb-12"
        >
          <v-btn
            outlined
            color="red"
            :loading="loadingDownload"
            @click="downloadTickets1()"
            >جهت دانلود بلیط ها کلیک کنید</v-btn
          >
        </v-row>
        <v-row
          v-else-if="
            (ticketUrl1 && ticketUrl2) ||
            (ticketUrl1 && PNR2) ||
            (PNR1 && ticketUrl2)
          "
          justify="center"
          class="mb-12"
        >
          <v-btn
            outlined
            class="ml-2"
            color="red"
            :loading="loadingDownload"
            @click="downloadTickets2()"
            >دانلود بلیط رفت</v-btn
          >
          <v-btn
            outlined
            color="red"
            :loading="loadingDownload"
            @click="downloadTickets3()"
            >دانلود بلیط برگشت</v-btn
          >
        </v-row>
      </div>
      <div
        v-else
        class="indexDiv rounded-xl mb-6 pa-4 mt-12 mt-sm-6"
        style="max-width: 875px; border: 5px solid red"
      >
        <v-row justify="center" class="px-12">
          <v-icon>mdi-addHome</v-icon>
          <img src="@/assets/image/check-mark.png" class="done-icon" alt="" />
        </v-row>
        <v-row justify="center" class="mt-12 mb-4">
          <h1 style="color: red" class="font-small-xs">
            عملیات پرداخت با خطا مواجه شد!
          </h1>
        </v-row>
      </div>
      <ticket-print-component
        v-if="successSell"
        :clickedDownload="clickedDownload"
        :params="Passengers"
      />
    </v-row>
    <div v-else>
      <h1 class="widthAll text-center green--text text--darken-3 mt-12">
        درحال انتقال به درگاه بانکی...
      </h1>
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
  </div>
</template>

<script>
import "@/assets/css/main.css";
import axios from "axios";
axios.defaults.headers.common["Client-Token"] = "Ahuan-Wapi?123";
import TicketPrintComponent from "@/components/TicketPrintComponent.vue";

const $ = require("jquery");

export default {
  data() {
    return {
      PNR1: this.$route.query.PNR1,
      PNR2: this.$route.query.PNR2,
      isBuying: false,
      ticketUrl1: null,
      ticketUrl2: null,
      successSell: true,
      formshaparak: {
        bankToken: "",
      },
      Passengers: [],
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
      loadingDownload: true,
      clickedDownload: false,
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
      isReturnUrl: false,
    };
  },
  name: "ticket-download",
  components: {
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
  },
  watch: {
    choosedTicket() {
      //
    },
  },
  computed: {},
  methods: {
    async addPnr() {
      let next = await this.addPnr2();
      this.setTicketInfo2("pnr", next);
    },
    addPnr2() {
      return new Promise((resolve) => {
        let next = this.ETIssueJS(
          this.$route.query.AirLine2,
          this.$route.query.PNR2
        );
        resolve(next);
      });
    },
    downloadTickets() {
      this.clickedDownload = !this.clickedDownload;
    },
    downloadTickets1() {
      if (this.ticketUrl1) {
        window.open(this.ticketUrl1, "_blank");
      }
    },
    downloadTickets2() {
      if (this.$route.query.PNR1) {
        // if go and return tickets are reserved from Nira
        this.clickedDownload = !this.clickedDownload;
      }
      if (this.ticketUrl1) {
        window.open(this.ticketUrl1, "_blank");
      }
    },
    downloadTickets3() {
      if (this.$route.query.PNR2) {
        // if go and return tickets are reserved from Nira
        this.clickedDownload = !this.clickedDownload;
      }
      if (this.ticketUrl2) {
        window.open(this.ticketUrl2, "_blank");
      }
    },
    async issueTickets() {
      let self = this;
      if (self.$route.query.id_request1) {
        axios
          .post("https://panel.ahuantours.com/api/Ch724/BuyTicket", {
            id_request: self.$route.query.id_request1,
            id_faktor: self.$route.query.id_faktor1,
          })
          .then(function (response) {
            // handle success
            self.ticketUrl1 = response.data.data.linkticket;
            if (self.$route.query.id_request2) {
              self.setTicketInfo1("id_request", response.data.data);
              axios
                .post("https://panel.ahuantours.com/api/Ch724/BuyTicket", {
                  id_request: self.$route.query.id_request2,
                  id_faktor: self.$route.query.id_faktor2,
                })
                .then(function (res) {
                  // handle success
                  self.setTicketInfo2("id_request", res.data.data);
                  self.ticketUrl2 = res.data.data.linkticket;
                  // self.loadingDownload = false;
                  // console.log(res);
                })
                .catch(function (error) {
                  // self.loadingDownload = false;
                  self.alertText =
                    "پرداخت کامل انجام شده  و رزرو پرواز رفت  انجام شده اما رزرو پرواز برگشت با شماره فاکتور  " +
                    self.$route.query.id_faktor2 +
                    " موفقیت آمیز نبود.لطفا به پشتیبانی اطلاع دهید.";
                  self.alertType = "error";
                  self.showAlert = true;
                  // handle error
                  console.log(error);
                });
              // self.addToDatabase();
            } else if (self.$route.query.PNR2) {
              self.setTicketInfo1("id_request", response.data.data);
              self.addPnr();
            } else {
              self.setTicketInfo1("id_request", response.data.data, "end");
              // self.addToDatabase();
              // self.loadingDownload = false;
            }
            // console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
            self.alertText =
              "پرداخت انجام شده اما رزرو پرواز ها موفقیت آمیز نبود.لطفا به پشتیبانی اطلاع دهید.";
            self.alertType = "error";
            self.showAlert = true;
          });
      } else if (self.$route.query.PNR1) {
        let first = await self.ETIssueJS(
          self.$route.query.AirLine1,
          self.$route.query.PNR1
        );

        if (first) {
          if (self.$route.query.id_request2) {
            self.setTicketInfo1("pnr", first);
            axios
              .post("https://panel.ahuantours.com/api/Ch724/BuyTicket", {
                id_request: self.$route.query.id_request2,
                id_faktor: self.$route.query.id_faktor2,
              })
              .then(function (response) {
                // self.loadingDownload = false;
                self.ticketUrl2 = response.data.data.linkticket;
                self.setTicketInfo2("id_request", response.data.data);
                // handle success
              })
              .catch(function (error) {
                // handle error
                // self.loadingDownload = false;
                self.alertText =
                  "پرداخت کامل انجام شده  و  پرواز رفت رزرو شده اما رزرو پرواز برگشت با شماره فاکتور  " +
                  self.$route.query.id_faktor2 +
                  " موفقیت آمیز نبود.لطفا به پشتیبانی اطلاع دهید.";
                self.alertType = "error";
                self.showAlert = true;
                console.log(error);
              });
            // self.addToDatabase(first);
          } else if (self.$route.query.PNR2) {
            self.setTicketInfo1("pnr", first);
            let next = await self.ETIssueJS(
              self.$route.query.AirLine2,
              self.$route.query.PNR2
            );
            self.setTicketInfo2("pnr", next);
            // self.addToDatabase(first, next);
          } else {
            self.setTicketInfo1("pnr", first, "end");
          }
        } else {
          self.alertText =
            "پرداخت انجام شده اما رزرو پرواز ها موفقیت آمیز نبود.لطفا به پشتیبانی اطلاع دهید.";
          self.alertType = "error";
          self.showAlert = true;
        }
      }
    },
    setTicketInfo1(type, info, isend) {
      if (type == "pnr") {
        this.informationObject.contractFlights[0].charterFlight = false;
        this.informationObject.contractFlights[0].description = "nira";
        for (let i = 0; i < info.Tickets.length; i++) {
          let name = info.Tickets[i].PassengerET.split(":");
          let ticketNo = name[1];
          name = name[0].split("/");
          let family = name[0];
          name = name[1];
          let indexPassenger =
            this.informationObject.contractPassengers.findIndex(
              (x) =>
                x.fName.toLocaleUpperCase() == name &&
                x.lName.toLocaleUpperCase() == family
            );
          if (indexPassenger != "-1") {
            this.informationObject.contractPassengers[
              indexPassenger
            ].goTicketNumber = ticketNo;
            this.informationObject.contractPassengers[
              indexPassenger
            ].goTicketPNR = this.$route.query.PNR1;
            this.informationObject.contractPassengers[indexPassenger].price =
              this.informationObject.contractPassengers[indexPassenger].age ==
              "ADL"
                ? info.AdultTP
                : this.informationObject.contractPassengers[indexPassenger]
                    .age == "CHD"
                ? info.ChildTP
                : info.InfantTP;
            let findairline = this.$route.query.AirLine1;
            this.informationObject.contractPassengers[
              indexPassenger
            ].goTicketUrl =
              (findairline == "I3"
                ? "http://ra.ataair.ir"
                : findairline == "Y9"
                ? "https://crs.kishairlines.ir"
                : findairline == "QB"
                ? "http://pra.qeshmairline.com"
                : findairline == "HH"
                ? "http://epay.taban.aero"
                : findairline == "EP"
                ? "http://ra.iaa.ir"
                : findairline == "ZV"
                ? "http://ra.zagrosairlines.com"
                : findairline == "NV"
                ? "http://pra.karunair.ir"
                : findairline == "JI"
                ? "http://ra.meraj.aero"
                : findairline == "VR"
                ? "http://vr.nirasoft.ir"
                : findairline == "IRZ"
                ? "http://ra.sahaair.com/"
                : findairline == "FP"
                ? "http://fp.nirasoft.ir"
                : findairline == "IV"
                ? "http://ra.caspianairlines.com"
                : findairline == "IS"
                ? ""
                : findairline == "A1"
                ? ""
                : findairline == "RI"
                ? ""
                : findairline == "W5"
                ? ""
                : findairline == "IR"
                ? ""
                : findairline == "PA"
                ? ""
                : findairline == "PY"
                ? ""
                : findairline == "B9"
                ? ""
                : findairline == "A7"
                ? ""
                : "") +
              "/TicketPrint.aspx?PNR=" +
              this.$route.query.PNR1 +
              "&TicketNo=" +
              ticketNo +
              "&OC=" +
              (findairline == "I3"
                ? "THR155"
                : findairline == "Y9"
                ? "THR100"
                : findairline == "QB"
                ? "THR166"
                : findairline == "HH"
                ? "THR168"
                : findairline == "EP"
                ? "THR100"
                : findairline == "ZV"
                ? "THR197"
                : findairline == "NV"
                ? "THR100"
                : findairline == "JI"
                ? "THR158"
                : findairline == "VR"
                ? "THR215"
                : findairline == "IRZ"
                ? "THR140"
                : findairline == "FP"
                ? "THR106"
                : findairline == "IV"
                ? "THR100"
                : findairline == "IS"
                ? ""
                : findairline == "A1"
                ? ""
                : findairline == "RI"
                ? ""
                : findairline == "W5"
                ? ""
                : findairline == "IR"
                ? ""
                : findairline == "PA"
                ? ""
                : findairline == "PY"
                ? ""
                : findairline == "B9"
                ? ""
                : findairline == "A7"
                ? ""
                : "") +
              "&lang=FA";

            console.log();
          }
        }
        if (isend) {
          this.addToDatabase();
        }
      } else if (type == "id_request") {
        this.informationObject.contractFlights[0].charterFlight = true;
        this.informationObject.contractFlights[0].description = "chr724";
        for (let i = 0; i < info.passenger_info.length; i++) {
          let name = info.passenger_info[i].fname;
          let ticketNo = info.passenger_info[i].ticket_number;
          let family = info.passenger_info[i].lname;
          let indexPassenger =
            this.informationObject.contractPassengers.findIndex(
              (x) =>
                x.fName.toLocaleUpperCase() == name.toLocaleUpperCase() &&
                x.lName.toLocaleUpperCase() == family.toLocaleUpperCase()
            );
          if (indexPassenger != "-1") {
            this.informationObject.contractPassengers[
              indexPassenger
            ].goTicketNumber = ticketNo;
            this.informationObject.contractPassengers[
              indexPassenger
            ].goTicketUrl = info.linkticket;
            this.informationObject.contractPassengers[
              indexPassenger
            ].goTicketPNR = this.$route.query.id_faktor1;
            this.informationObject.contractPassengers[indexPassenger].price =
              info.passenger_info[i].real_price;
            //   console.log();
          }
        }
        if (isend) {
          this.addToDatabase();
        }
      }
    },
    setTicketInfo2(type, info) {
      if (type == "pnr") {
        this.informationObject.contractFlights[1].charterFlight = false;
        this.informationObject.contractFlights[1].description = "nira";
        for (let i = 0; i < info.Tickets.length; i++) {
          let name = info.Tickets[i].PassengerET.split(":");
          let ticketNo = name[1];
          name = name[0].split("/");
          let family = name[0];
          name = name[1];
          let indexPassenger =
            this.informationObject.contractPassengers.findIndex(
              (x) =>
                x.fName.toLocaleUpperCase() == name &&
                x.lName.toLocaleUpperCase() == family
            );
          if (indexPassenger != "-1") {
            this.informationObject.contractPassengers[
              indexPassenger
            ].retTicketNumber = ticketNo;

            this.informationObject.contractPassengers[
              indexPassenger
            ].retTicketPNR = this.$route.query.PNR2;

            this.informationObject.contractPassengers[indexPassenger].price2 =
              this.informationObject.contractPassengers[indexPassenger].age ==
              "ADL"
                ? info.AdultTP
                : this.informationObject.contractPassengers[indexPassenger]
                    .age == "CHD"
                ? info.ChildTP
                : info.InfantTP;
            let findairline = this.$route.query.AirLine2;
            this.informationObject.contractPassengers[
              indexPassenger
            ].reTicketUrl =
              (findairline == "I3"
                ? "http://ra.ataair.ir"
                : findairline == "Y9"
                ? "https://crs.kishairlines.ir"
                : findairline == "QB"
                ? "http://pra.qeshmairline.com"
                : findairline == "HH"
                ? "http://epay.taban.aero"
                : findairline == "EP"
                ? "http://ra.iaa.ir"
                : findairline == "ZV"
                ? "http://ra.zagrosairlines.com"
                : findairline == "NV"
                ? "http://pra.karunair.ir"
                : findairline == "JI"
                ? "http://ra.meraj.aero"
                : findairline == "VR"
                ? "http://vr.nirasoft.ir"
                : findairline == "IRZ"
                ? "http://ra.sahaair.com/"
                : findairline == "FP"
                ? "http://fp.nirasoft.ir"
                : findairline == "IV"
                ? "http://ra.caspianairlines.com"
                : findairline == "IS"
                ? ""
                : findairline == "A1"
                ? ""
                : findairline == "RI"
                ? ""
                : findairline == "W5"
                ? ""
                : findairline == "IR"
                ? ""
                : findairline == "PA"
                ? ""
                : findairline == "PY"
                ? ""
                : findairline == "B9"
                ? ""
                : findairline == "A7"
                ? ""
                : "") +
              "/TicketPrint.aspx?PNR=" +
              this.$route.query.PNR2 +
              "&TicketNo=" +
              ticketNo +
              "&OC=" +
              (findairline == "I3"
                ? "THR155"
                : findairline == "Y9"
                ? "THR100"
                : findairline == "QB"
                ? "THR166"
                : findairline == "HH"
                ? "THR168"
                : findairline == "EP"
                ? "THR100"
                : findairline == "ZV"
                ? "THR197"
                : findairline == "NV"
                ? "THR100"
                : findairline == "JI"
                ? "THR158"
                : findairline == "VR"
                ? "THR215"
                : findairline == "IRZ"
                ? "THR140"
                : findairline == "FP"
                ? "THR106"
                : findairline == "IV"
                ? "THR100"
                : findairline == "IS"
                ? ""
                : findairline == "A1"
                ? ""
                : findairline == "RI"
                ? ""
                : findairline == "W5"
                ? ""
                : findairline == "IR"
                ? ""
                : findairline == "PA"
                ? ""
                : findairline == "PY"
                ? ""
                : findairline == "B9"
                ? ""
                : findairline == "A7"
                ? ""
                : "") +
              "&lang=FA";
          }
        }
        this.addToDatabase();
      } else if (type == "id_request") {
        this.informationObject.contractFlights[1].charterFlight = true;
        this.informationObject.contractFlights[1].description = "chr724";
        for (let i = 0; i < info.passenger_info.length; i++) {
          let name = info.passenger_info[i].fname;
          let ticketNo = info.passenger_info[i].ticket_number;
          let family = info.passenger_info[i].lname;
          let indexPassenger =
            this.informationObject.contractPassengers.findIndex(
              (x) =>
                x.fName.toLocaleUpperCase() == name.toLocaleUpperCase() &&
                x.lName.toLocaleUpperCase() == family.toLocaleUpperCase()
            );
          if (indexPassenger != "-1") {
            this.informationObject.contractPassengers[
              indexPassenger
            ].retTicketNumber = ticketNo;
            this.informationObject.contractPassengers[
              indexPassenger
            ].retTicketPNR = this.$route.query.id_faktor2;
            this.informationObject.contractPassengers[
              indexPassenger
            ].retTicketUrl = info.linkticket;
            this.informationObject.contractPassengers[indexPassenger].price2 =
              info.passenger_info[i].real_price;
            //   console.log();
          }
        }
        this.addToDatabase();
      }
    },
    verifyBank() {
      this.successSell = true;
      let self = this;
      let returnedCode = this.$route.query.code;
      let returnedsystemTraceAuditNumber = this.$route.query.traceNo;
      let returnedretrievalReferenceNumber = this.$route.query.rrn;
      let returnedtoken = this.$route.query.token;

      axios
        .post("https://panel.ahuantours.com/api/Tejarat/Verify", {
          systemTraceAuditNumber: returnedsystemTraceAuditNumber,
          retrievalReferenceNumber: returnedretrievalReferenceNumber,
          token: returnedtoken,
        })
        .then(function (res) {
          if (returnedCode == "00" && res.data == true) {
            self.successSell = true;
            // if success
            self.issueTickets();
          } else {
            self.successSell = false;
            if (self.$route.query.PNR2) {
              self.cancellPnr(
                self.$route.query.PNR1,
                self.$route.query.AirLine1,
                self.$route.query.PNR2,
                self.$route.query.AirLine2
              );
            } else if (self.$route.query.PNR1) {
              self.cancellPnr(
                self.$route.query.PNR1,
                self.$route.query.AirLine1
              );
            }
            // if cancelled
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          self.alertText = self.$route.query.PNR2
            ? "عملیات چاپ بلیط با کد " +
              self.$route.query.PNR2 +
              "و" +
              self.$route.query.PNR1 +
              " با خطا مواجه شد.لطفا با پشتیبانی تماس حاصل فرمایید"
            : "عملیات چاپ بلیط با کد " +
              self.$route.query.PNR1 +
              " با خطا مواجه شد.لطفا با پشتیبانی تماس حاصل فرمایید";
          self.alertType = "error";
          self.showAlert = true;
        });
    },
    setIpAddress() {},
    ETIssueJS(airline, PNR) {
      return new Promise((resolve) => {
        let testText =
          "AirLine=" +
          airline +
          "&PNR=" +
          PNR +
          "&Email=" +
          this.$route.query.Email;
        let self = this;
        axios
          .get("https://panel.ahuantours.com/api/Nira/ETIssue?" + testText)
          .then(function (response) {
            console.log(response);
            let rtData = self.RT(airline, PNR);
            // this.addToDatabase(rtData);
            resolve(rtData);
          })
          .catch(function (error) {
            let errorText = "";
            if (error.response.status == 403) {
              errorText = "سطح دسترسی این وب سرویس برای شما محدودیت دارد.";
            } else if (error.response.status == 400) {
              errorText = "عمیات رزرو ناموفق بود.";
            } else if (error.response.status == 401) {
              self.getToken();
              setTimeout(() => {
                self.ETIssueJS(airline, PNR);
              }, 3000);
              errorText = "لطفا صفحه را refresh کنید.";
            }
            self.alertText = errorText;
            self.alertType = "error";
            self.showAlert = true;
            // handle error
            console.log(error);
            console.log("عملیات رزرو ناموفق بود!");
          });
      });
    },
    RT(airline, PNR) {
      return new Promise((resolve) => {
        let self = this;

        axios
          .get(
            "https://panel.ahuantours.com/api/Nira/RT?AirLine=" +
              airline +
              "&PNR=" +
              PNR +
              "&Complete=y"
          )
          .then(function (res) {
            for (let i = 0; i < res.data.Tickets.length; i++) {
              // let findTicketnumber =
              // res.data.Tickets.find(x => x.)
              let findBabyName = "";
              let findBabyFamily = "";
              if (!res.data.Passengers[i]) {
                findBabyName = res.data.Tickets[i].PassengerET.split(":");
                findBabyName = findBabyName[0].split(" ");
                findBabyName = findBabyName[1].split("/");
                findBabyFamily = findBabyName[1];
                findBabyName = findBabyName[0];
              }
              self.Passengers.push({
                Destination: res.data.Segments[0].Destination,
                Origin: res.data.Segments[0].Origin,
                OriginAprt: self.AllpersianCityes.find(
                  (x) => x.id == res.data.Segments[0].Origin
                ).airport,
                DestinationAprt: self.AllpersianCityes.find(
                  (x) => x.id == res.data.Segments[0].Destination
                ).airport,
                FlightClass: res.data.Segments[0].FlightClass,
                FlightNo: res.data.Segments[0].FlightNo,
                JourneyType: res.data.Segments[0].JourneyType,
                AirCraftType: res.data.Segments[0].AirCraftType,
                DepartureDT: res.data.Segments[0].DepartureDT.split(" "),
                PassenferAgeType: res.data.Passengers[i]
                  ? res.data.Passengers[i].PassenferAgeType
                  : "{INF}",
                PassenferFirstName: res.data.Passengers[i]
                  ? res.data.Passengers[i].PassenferFirstName
                  : findBabyName,
                PassenferLastName: res.data.Passengers[i]
                  ? res.data.Passengers[i].PassenferLastName
                  : findBabyFamily,
                ETStatus: res.data.Tickets[i].ETStatus,

                Ticket: res.data.Tickets[i].PassengerET.split(":"),

                PNR: PNR,
                ticketType: "s",
                airline: airline,
                bookTime: new Date().getHours() + ":" + new Date().getMinutes(),
                bookDate: new Date().toLocaleDateString("fa"),
                longDateTime1: new Date(
                  res.data.Segments[0].DepartureDT
                ).toLocaleDateString("fa"),
                price: !res.data.Passengers[i]
                  ? res.data.InfantTP
                  : res.data.Passengers[i].PassenferAgeType == "{Adult}"
                  ? res.data.AdultTP
                  : res.data.Passengers[i].PassenferAgeType == "{Child}"
                  ? res.data.ChildTP
                  : res.data.InfantTP,
              });
              // self.loadingDownload = findFinish;
            }
            resolve(res.data);
            //     let findObject = res.data.Tickets.find(
            //       (x) =>
            //         x.PassengerET.toLowerCase() ==
            //         self.family.toLowerCase() +
            //           "/" +
            //           self.name.toLowerCase() +
            //           ":" +
            //           self.ticketNo
            //     );
            //     if (findObject) {
            //       self.alertType =
            //         findObject.ETStatus == "O"
            //           ? "success"
            //           : findObject.ETStatus == "R"
            //           ? "error"
            //           : "warning";
            //       self.alertText =
            //         findObject.ETStatus == "O"
            //           ? "بلیط اکتیو می‌باشد"
            //           : findObject.ETStatus == "R"
            //           ? "بلیط کنسل شده."
            //           : "ETStatus = " + findObject.ETStatus;
            //     } else {
            //       self.alertType = "warning";
            //       self.alertText = "اطلاعات وارد شده صحیح نمی‌باشد.";
            //     }
            //     self.showAlert = true;
            //     self.disabelRT = false;
            //     setTimeout(() => {
            //       self.showAlert = false;
            //     }, 3000);
            //     // get self.newInformations.KU == ???   TaxAmount
            //     // get self.newInformations.LP == ???   TaxCode
          })
          .catch(function (error) {
            // handle error
            console.log(error);
            self.alertText = self.$route.query.PNR2
              ? "عملیات چاپ بلیط با کد " +
                self.$route.query.PNR2 +
                "و" +
                self.$route.query.PNR1 +
                " با خطا مواجه شد.لطفا با پشتیبانی تماس حاصل فرمایید"
              : "عملیات چاپ بلیط با کد " +
                self.$route.query.PNR1 +
                " با خطا مواجه شد.لطفا با پشتیبانی تماس حاصل فرمایید";
            self.alertType = "error";
            self.showAlert = true;
            resolve();
          });
      });
    },
    addToDatabase() {
      this.loadingDownload = false;
      this.informationObject.ticketStatus = "confirm";
      this.informationObject.confirmStatus = "confirm";
      this.informationObject.ipAddress = localStorage.getItem("ipAddress");
      this.informationObject.issueDate =
        String(new Date().getFullYear()) +
        "-" +
        (String(new Date().getMonth() + 1).length == 2
          ? String(new Date().getMonth() + 1)
          : "0" + String(new Date().getMonth() + 1)) +
        "-" +
        (String(new Date().getDate()).length == 2
          ? String(new Date().getDate())
          : "0" + String(new Date().getDate()));

      let self = this;
      axios
        .put(
          "https://panel.ahuantours.com/api/Contract/update",
          this.informationObject
        )
        .then(function (response) {})
        .catch(function (error) {
          // handle error
          self.alertText =
            "رزرو با موفقیت انجام شد اما ذخیره اطلاعات  در پایگاه داده ناموفق بود.لطفا به پشتیبانی اطلاع دهید.";
          self.alertType = "error";
          self.showAlert = true;
          console.log(error);
        });
      //   let allPassengers = [];
      //   for (let i = 0; i < theObject.Passengers.length; i++) {
      //     let findGender = Object.values(theObject.DOCS[i])[0].split("/");
      //     let findFirstTicketNumber = theObject.Tickets[i].PassengerET.split(":");
      //     let findFirstTicketNumber2 = theObject2
      //       ? theObject2.Tickets[i].PassengerET.split(":")
      //       : "";
      //     let theObjectForPush = {
      //       id: 0,
      //       contractId: 0,
      //       fName: findFirstTicketNumber[0].split("/")[1],
      //       lName: findFirstTicketNumber[0].split("/")[0],
      //       age:
      //         theObject.Passengers[i].PassenferAgeType == "{Adult}"
      //           ? "ADL"
      //           : theObject.Passengers[i].PassenferAgeType == "{Child}"
      //           ? "CHD"
      //           : "INF",
      //       gender: findGender[5] == "F" ? false : true,
      //       birthDate: new Date(findGender[4]),
      //       price:
      //         theObject.Passengers[i].PassenferAgeType == "{Adult}"
      //           ? theObject.AdultTP
      //           : theObject.Passengers[i].PassenferAgeType == "{Child}"
      //           ? theObject.ChildTP
      //           : theObject.InfantTP,
      //       price2: theObject2
      //         ? theObject2.Passengers[i].PassenferAgeType == "{Adult}"
      //           ? theObject2.AdultTP
      //           : theObject2.Passengers[i].PassenferAgeType == "{Child}"
      //           ? theObject2.ChildTP
      //           : theObject2.InfantTP
      //         : null,
      //       goTicketPNR: this.$route.query.PNR1,
      //       goTicketNumber: findFirstTicketNumber[1],
      //       retTicketPNR: theObject2 ? this.$route.query.PNR2 : "",
      //       retTicketNumber: theObject2 ? findFirstTicketNumber2[1] : "",
      //       description: "",
      //       passportNo: findGender[2], //چک شود که دیتا درست به نیرا فرستاده میشود یا نه
      //       codeMelli: findGender[2],
      //       nationality: findGender[0] == "I" ? "ایرانی" : "غیرایرانی",
      //       // farePrice: 0,//اینو بپرسم بعدا از مهندس
      //       // comPrice: 0,//اینو بپرسم بعدا از مهندس    // فقط برای چارتری
      //       // taxPrice: 0,//اینو بپرسم بعدا از مهندس// فقط برای چارتری
      //       // sharePrice: 0,//اینو بپرسم بعدا از مهندس
      //       // taxDesc: "string",
      //     };
      //     if (findGender[0] != "I") {
      //       theObjectForPush.passportExpDate = new Date(findGender[6]);
      //     }
      //     allPassengers.push(theObjectForPush);
      //   }
      //   let allObjects = [theObject];
      //   let allFlights = [];
      //   if (theObject2) {
      //     allObjects.push(theObject2);
      //   }
      //   for (let i = 0; i < allObjects.length; i++) {
      //     let stepfindip =
      //       i == 0 ? this.$route.query.AirLine1 : this.$route.query.AirLine2;
      //     let findAirlineId =
      //       stepfindip == "I3"
      //         ? 489
      //         : stepfindip == "Y9"
      //         ? 1016
      //         : stepfindip == "QB"
      //         ? 761
      //         : stepfindip == "HH"
      //         ? 470
      //         : stepfindip == "EP"
      //         ? 376
      //         : stepfindip == "ZV"
      //         ? 1064
      //         : stepfindip == "NV"
      //         ? 683
      //         : stepfindip == "JI"
      //         ? 535
      //         : stepfindip == "VR"
      //         ? 943
      //         : stepfindip == "IRZ"
      //         ? "IRZ"
      //         : stepfindip == "FP"
      //         ? 410
      //         : stepfindip == "IV"
      //         ? 515
      //         : stepfindip == "IS"
      //         ? 7
      //         : stepfindip == "A1"
      //         ? 212
      //         : stepfindip == "RI"
      //         ? 802
      //         : stepfindip == "W5"
      //         ? 956
      //         : stepfindip == "IR"
      //         ? 512
      //         : stepfindip == "PA"
      //         ? "PA"
      //         : stepfindip == "PY"
      //         ? "PY"
      //         : stepfindip == "B9"
      //         ? 256
      //         : stepfindip == "A7"
      //         ? 218
      //         : "000";
      //     allFlights.push({
      //       contractId: 0,
      //       pnr: i == 0 ? this.$route.query.PNR1 : this.$route.query.PNR2,
      //       origin: allObjects[i].Segments[0].Origin,
      //       destination: allObjects[i].Segments[0].Destination,
      //       flightClass: allObjects[i].Segments[0].FlightClass,
      //       airlineId: findAirlineId,
      //       date: allObjects[i].Segments[0].DepartureDT.split(" ")[0],
      //       time: allObjects[i].Segments[0].DepartureDT.split(" ")[1].substring(
      //         0,
      //         5
      //       ),
      //       flightNumber: allObjects[i].Segments[0].FlightNo,
      //       airplaneType: allObjects[i].Segments[0].AirCraftType,
      //       description: "",
      //     });
      //   }
      //   let theIssueDate =
      //     String(new Date().getFullYear()) +
      //     "-" +
      //     (String(new Date().getMonth() + 1).length == 2
      //       ? String(new Date().getMonth() + 1)
      //       : "0" + String(new Date().getMonth() + 1)) +
      //     "-" +
      //     (String(new Date().getDate()).length == 2
      //       ? String(new Date().getDate())
      //       : "0" + String(new Date().getDate()));
      //   let variabelobject = {
      //     id: Number(this.$route.query.responseData),
      //     userName: localStorage.getItem("phone-number-ahuan"),
      //     issueDate: theIssueDate,
      //     issueTime:
      //       (String(new Date().getHours()).length == 2
      //         ? new Date().getHours()
      //         : "0" + new Date().getHours()) +
      //       ":" +
      //       (String(new Date().getMinutes()).length == 2
      //         ? new Date().getMinutes()
      //         : "0" + new Date().getMinutes()),
      //     ipAddress: localStorage.getItem("ipAddress"),
      //     // paymentId: "string",
      //     contractType: 0, //داخلی
      //     contractingPartyType: 0, //0 یعنی حضوری____2 یعنی شرکتی
      //     // customerId: 0,
      //     // companyId: 0,
      //     // companyEmployeeId: 0,
      //     // paymentType: 0 //نقدی,
      //     travelVehicle: "هواپیما",
      //     tour: false,
      //     ticket: true,
      //     hotel: false,
      //     visa: false,
      //     insurance: false,
      //     cruise: false,
      //     other: false,
      //     // charterFlight: true // اگر چارتری بود باید true باشد درغیر این صورت false,
      //     // contractDesc: "string"//توضیحاتی است برای تیکت رزرو شده,
      //     // ticketType: 0, //داخلی,
      //     systemOrCharter: false, // اگر چارتری بود باید true باشد درغیر این صورت false,,
      //     manualOrAutomatic: true,
      //     taxType: 0, //مالیات,
      //     confirmStatus: "confirm",
      //     ticketStatus: "confirm",
      //     showDetail: false,
      //     // company: {
      //     //   id: 0,
      //     //   name: "string",
      //     //   code: "string",
      //     //   category: "string",
      //     //   email: "string",
      //     //   fax: "string",
      //     //   phone: ["string"],
      //     //   address: "string",
      //     //   credit: 0,
      //     //   isApproved: true,
      //     //   noLimit: true,
      //     //   contracts: ["string"],
      //     //   employees: [
      //     //     {
      //     //       id: 0,
      //     //       companyId: 0,
      //     //       gender: true,
      //     //       fName: "string",
      //     //       lName: "string",
      //     //       mobile: "string",
      //     //       phone: "string",
      //     //       address: "string",
      //     //       codeMelli: "string",
      //     //       birthDate: "2023-10-30T11:22:05.123Z",
      //     //       email: "string",
      //     //       position: "string",
      //     //       isAgent: true,
      //     //       company: "string",
      //     //       contracts: ["string"],
      //     //     },
      //     //   ],
      //     // },
      //     // companyEmployee: {
      //     //   id: 0,
      //     //   companyId: 0,
      //     //   gender: true,
      //     //   fName: "string",
      //     //   lName: "string",
      //     //   mobile: "string",
      //     //   phone: "string",
      //     //   address: "string",
      //     //   codeMelli: "string",
      //     //   birthDate: "2023-10-30T11:22:05.123Z",
      //     //   email: "string",
      //     //   position: "string",
      //     //   isAgent: true,
      //     //   company: "string",
      //     //   contracts: ["string"],
      //     // },
      //     contractPassengers: allPassengers,
      //     contractFlights: allFlights,
      //     // contractReceives: [
      //     //   {
      //     //     id: 0,
      //     //     contractId: 0,
      //     //     receiveType: 0,
      //     //     receiveDate: "2023-10-30T11:22:05.125Z",
      //     //     amount: 0,
      //     //     currency: "string",
      //     //     receiveFor: 0,
      //     //     payer: "string",
      //     //     chequeDate: "2023-10-30T11:22:05.125Z",
      //     //     chequeBank: "string",
      //     //     chequeNumber: "string",
      //     //     cartDate: "2023-10-30T11:22:05.125Z",
      //     //     cart4Digits: "string",
      //     //     cartNumber: "string",
      //     //     depositDate: "2023-10-30T11:22:05.125Z",
      //     //     depositType: "string",
      //     //     depositAccount: "string",
      //     //     description: "string",
      //     //     exchange: true,
      //     //     exchangeAmount: 0,
      //     //     exchangeRate: 0,
      //     //     exchangeCurrency: "string",
      //     //     contract: "string",
      //     //   },
      //     // ],
      //   };
      //   axios
      //     .post(
      //       "https://panel.ahuantours.com/api/Contract/update",
      //       variabelobject
      //     )
      //     .then(function (response) {})
      //     .catch(function (error) {
      //       // handle error
      //       console.log(error);
      //     });
    },
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
    async cancellPnr(pnr1, AirLine1, pnr2, AirLine2) {
      // this.successSell = false;
      // let arrayPnr = [pnr1];
      // if (pnr2) {
      //   arrayPnr.push(pnr2);
      // }
      // for (let i = 0; i < arrayPnr.length; i++) {
      //   let self = this;
      //   let finedurlcancelPNR =
      //     "https://panel.ahuantours.com/api/Nira/CancelPNR?AirLine=" +
      //     (i == 0 ? AirLine1 : AirLine2) +
      //     "&PNR=" +
      //     (i == 0 ? pnr1 : pnr2);
      //   axios
      //     .get(finedurlcancelPNR)
      //     .then(function (response) {
      //       //
      //     })
      //     .catch(function (error) {
      //       if (error.response.status == 401) {
      //         this.getToken();
      //         setTimeout(() => {
      //           self.cancellPnr(pnr1, AirLine1, pnr2, AirLine2);
      //         }, 3000);
      //       }
      //     });
      // }
      // // console.log(arrayPnr);
    },
    getInformations() {
      let self = this;
      axios
        .get(
          "https://panel.ahuantours.com/api/Contract/" +
            Number(this.$route.query.responseData)
        )
        .then(function (response) {
          self.informationObject = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },
  async mounted() {
    fetch("https://api.ipify.org?format=json")
      .then((x) => x.json())
      .then(({ ip }) => {
        localStorage.setItem("ipAddress", ip);
      });
    let self = this;
    if (localStorage.getItem("charterToken")) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("charterToken");
    } else {
      await self.getToken();
      localStorage.removeItem("credit");
    }
    await this.getInformations();
    if (
      (localStorage.getItem("credit") &&
        localStorage.getItem("credit") == "noLimit") ||
      (localStorage.getItem("credit") &&
        localStorage.getItem("credit") >= self.$route.query.price)
    ) {
      if (localStorage.getItem("credit") != "noLimit") {
        localStorage.setItem(
          "credit",
          localStorage.getItem("credit") - self.$route.query.price
        );
      }
      self.isReturnUrl = true;
      await self.issueTickets();
    } else {
      if (self.$route.query.id_request1) {
        self.isReturnUrl = true;
        if (self.$route.query.code == "00") {
          if (self.$route.query.amount == localStorage.getItem("bankprice")) {
            self.successSell = true;
            self.verifyBank();
          }
        } else {
          self.successSell = false;
        }
      } else {
        if (self.$route.query.PNR1 && !self.$route.query.bankpnr1) {
          self.isReturnUrl = true;
          if (self.$route.query.amount == localStorage.getItem("bankprice")) {
            self.successSell = true;
            self.verifyBank();
          } else {
            if (self.$route.query.PNR2) {
              self.cancellPnr(
                self.$route.query.PNR1,
                self.$route.query.AirLine1,
                self.$route.query.PNR2,
                self.$route.query.AirLine2
              );
            } else {
              self.cancellPnr(
                self.$route.query.PNR1,
                self.$route.query.AirLine1
              );
            }
          }
        } else if (self.$route.query.bankpnr1) {
          let bankprice = localStorage.getItem("bankprice");
          self.isReturnUrl = false;
          let self = this;
          let urlSendBank = self.$route.query.bankpnr2
            ? "https://ahuan.ir/#/ticket-download?AirLine1=" +
              self.$route.query.AirLine1 +
              "&PNR1=" +
              self.$route.query.bankpnr1 +
              "&PNR2=" +
              self.$route.query.bankpnr2 +
              "&AirLine2=" +
              self.$route.query.AirLine2 +
              "&Email=" +
              self.$route.query.Email
            : "https://ahuan.ir/#/ticket-download?AirLine1=" +
              self.$route.query.AirLine1 +
              "&PNR1=" +
              self.$route.query.bankpnr1 +
              "&Email=" +
              self.$route.query.Email;
          axios
            .post("https://panel.ahuantours.com/api/Tejarat/BankToken", {
              amount: bankprice,
              revertUrl: urlSendBank,
            })
            .then(function (response) {
              self.formshaparak.bankToken = response.data;
              setTimeout(() => {
                self.$refs.formshaparak.submit();
              }, 1000);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });
        }
      }
    }
  },
};
</script>