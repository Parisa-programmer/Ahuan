<template>
  <div class="mt-6 mt-md-12 pt-12 heightAll relative">
    <v-img class="backImage " src="@/assets/image/cancell-flight.jpg" alt="" />
    <v-form ref="flightForm" lazy-validation>
      <v-row align="center" class="absolute heightAll widthAll" style="top:-50px">
        <div class=" pt-6 px-6 rounded-lg white" style="width:80%;max-width:700px ;margin: 0 10% ">
          <v-row>
            <v-col cols="12" md="6" class="pa-0">
              <v-text-field label="نام مسافر" v-model="name" outlined :rules="nameRules"
                class="rounded-xl"></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="pa-0 mt-4 mt-md-0">
              <v-text-field label="نام خانوادگی مسافر" v-model="family" :rules="nameRules" outlined
                class="mr-md-4 rounded-xl"></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="px-0 pl-1">
              <div class="input-group relative font-small-xs form-control headerBoxFields"
                style="border-radius: 5px;height:56px;background: #fff;">
                <date-picker :show="show" ref="date" color="red" format="YYYY-MM-DD" clearable: true v-model="date"
                  locale="fa,en" :locale-config="localeConfig" popover="right" auto-submit  :range="false"
                  @close="show = false; changeDate1()" outlined class="heightAll red">
                  <!-- <template #header-date="{ selectedDate }">
                  {{ date.length ? selectedDate : 'انتخاب تاریخ' }}
                </template> -->
                </date-picker>
                <div @click="show = !show"
                  class="cursorPointer mt-2 heightAll d-inline-block font-small-xs widthAll showPopup absolute rounded-xl"
                  style="z-index:22;padding: 10px 4px;color:#424242;top:0;background: #fff;border: 1px solid #a6a6a4;">
                  {{ (date && date.length) ? selectedDate : 'انتخاب تاریخ' }}
                </div>
              </div>
              <!-- <v-text-field label="تاریخ حرکت" v-model="date" outlined :rules="emptyRules"
              class="rounded-xl"></v-text-field> -->
            </v-col>
            <v-col cols="12" md="6" class="px-0 pr-md-4 mt-2">
              <v-text-field label="PNR" v-model="PNR" outlined :rules="emptyRules"
                class="widthAll rounded-xl"></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="px-0">
              <v-text-field label="شماره پرواز" v-model="flightNo" outlined :rules="emptyRules"
                class="rounded-xl"></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="px-0">
              <v-text-field label="شماره بلیط" v-model="ticketNo" outlined :rules="emptyRules"
                class="rounded-xl mx-md-2"></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="px-0">
              <v-select v-model="airline" :items="airlines" outlined :rules="emptyRules" class=" rounded-xl"
                append-icon="mdi-semantic-web" label="شرکت هواپیمایی"></v-select>
            </v-col>
          </v-row>
          <v-row class="mt-4" justify="center">
            <v-btn class="checkBtn " color="green" outlined @click="printTicket()">چاپ مجدد بلیط</v-btn>
            <v-btn class="checkBtn mt-2 mt-sm-0  mx-3" color="purple lighten-1" outlined :loading="disabelRT" @click="RT()">بررسی وضعیت بلیط</v-btn>
            <v-btn class="checkBtn mt-2 mt-sm-0 " color="red" outlined :loading="loadingPenulty" @click="checkPenalty()">کنسل کردن پرواز</v-btn>
            <v-btn class="checkBtn  d-none" color="green" dark @click="cancellPnr()">cancell PNR</v-btn>
          </v-row>
          <v-row justify="center">
            <span class="caption mt-4 mb-2 red--text text-center" style="font-family: Byekan !important;">توجه داشته باشید برای کنسل
              کردن هر
              بلیط باید جداگانه فرم را اجرا کنید.</span>
          </v-row>
        </div>
      </v-row>
    </v-form>
    <v-dialog v-if="penultyDialog" width="500" v-model="penultyDialog">
      <v-card class="pa-4">
        <!-- <v-row>
          <v-icon @click="penultyDialog = false">mdi-close</v-icon>
        </v-row> -->
        <v-row class=" ma-6">
          <p class="answerText">
            با توجه به زمان صدور بلیط شما میزان جریمه بلیط <b class="red--text mx-1">{{
              separatePrice(newInformations.Penalty[0]) }}
              ریال</b> و مبلغ بازگشتی به شما
            <b class="red--text mx-2">{{ separatePrice(newInformations.RefundedAmount[0]) }} ریال</b> می‌باشد.
          </p>
        </v-row>
        <v-row>
          <v-btn class="green ml-2 px-6" outlined dark :loading="loadingConfirmPenulty" @click="checkPenaltyNow()">تائید و
            ادامه</v-btn>
          <v-btn class="red px-8" outlined dark :loading="loadingConfirmPenulty"
            @click="penultyDialog = false">انصراف</v-btn>
        </v-row>
      </v-card>
    </v-dialog>
    <v-alert v-if="showAlert" dark class="white--text fixed" :type="alertType"
      style="bottom: 0;right: 10px;min-width: 200px;z-index: 4444444444444;">
      {{ alertText }}
    </v-alert>
  </div>
</template>

<style scoped>
.backImage {
  height: 850px;
}
@media (max-width: 959px) {
  .backImage {
    height: 900px;
  }
}

@media (max-width: 599px) {
  .backImage {
    height: 900px;
  }
  .checkBtn {
    width: 80%;
  }
}
</style>

<script>
import axios from "axios";
axios.defaults.headers.common["Client-Token"] = "Ahuan-Wapi?123";

export default {
  name: "cancell-flight",
  data() {
    return {
      disabelRT: false,
      qrcodeValue: "https://example.com",
      penultyDialog: false,
      showAlert: false,
      alertType: "error",
      alertText: "",
      show: false,
      localeConfig: {
        fa: {
          // displayFormat: 'jYYYY/jMM/jDD',
          lang: { label: "شمسی" },
        },
      },
      minDate:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),
      name: "",
      family: "",
      date: "",
      PNR: "",
      flightNo: "",
      ticketNo: "",
      airline: {},
      selectedDate: "",
      airlines: [
        {
          text: "آتا",
          value: "I3",
          url: "ata",
          oc: "THR155",
          user: "THR155.WS",
          pass: "Ahuan1348",
        },
        {
          text: "کیش ایر",
          value: "Y9",
          url: "kishair",
          oc: "THR100",
          user: "THR100.WS",
          pass: "Ahuan1348",
        },
        {
          text: "قشم ایر",
          value: "QB",
          url: "qeshmair",
          oc: "THR166",
          user: "THR166.WS",
          pass: "Ahuan1348",
        },
        {
          text: "کاسپین",
          value: "IV",
          url: "caspian",
          oc: "THR100",
          user: "THR100.WS",
          pass: "Ahuan1348",
        },
        {
          text: "تابان",
          value: "HH",
          url: "taban",
          oc: "THR168",
          user: "THR168.WS",
          pass: "Ahuan1348",
        },
        {
          text: "ساها",
          value: "IRZ",
          url: "saha",
          oc: "THR140",
          user: "THR140.WS",
          pass: "123456789",
        },
        {
          text: "آسمان",
          value: "EP",
          url: "aseman",
          oc: "THR100",
          user: "THR100.WS",
          pass: "Ahuan1348",
        },
        {
          text: "زاگرس",
          value: "ZV",
          url: "zagros",
          oc: "THR197",
          user: "THR197.WS",
          pass: "Ahuan1348",
        },
        {
          text: "نفت",
          value: "NV",
          url: "naft",
          oc: "THR100",
          user: "THR100.WS",
          pass: "Ahuan1348",
        },
        {
          text: "معراج",
          value: "JI",
          url: "meraj",
          oc: "THR158",
          user: "THR158.WS",
          pass: "THR158AH",
        },
        {
          text: "وارش",
          value: "VR",
          url: "varesh",
          oc: "THR215",
          user: "THR215.WS",
          pass: "A2930",
        },
        {
          text: "فلای‌پرشیا",
          value: "FP",
          url: "flyPersia",
          oc: "THR106",
          user: "THR106.WS",
          pass: "123456789",
        },
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
      emptyRules: [(v) => !!v || "پر کردن این فیلد اجباریست."],
      newInformations: {
        Fare: "",
        KU: "",
        LP: "",
        Penalty: [],
        RefundedAmount: [],
      },
      loadingPenulty: false,
      loadingConfirmPenulty: false,
    };
  },
  components: {},
  computed: {},
  methods: {
    checkPenalty() {
      if (this.$refs.flightForm.validate()) {
        let self = this;
        self.loadingPenulty = true;
        let airline = this.airlines.find((x) => x.value == this.airline);
        axios
          .get(
            "https://panel.ahuantours.com/api/Nira/Penalty?AirLine=" +
              airline.value +
              "&TicketNo=" +
              this.ticketNo
          )
          .then(function (response) {
            if (response.data.NRSPenalty) {
              self.newInformations.Penalty =
                response.data.NRSPenalty.PENALTY.split(".");
              self.newInformations.RefundedAmount =
                response.data.NRSPenalty.RefundedAmount.split(".");
              self.penultyDialog = true;
            } else {
              self.alertText =
                response.data ==
                "NO COUPON EXISTS FOR REFUND!!!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
                  ? "این بلیط قبلا کنسل شده!"
                  : response.data;
              self.alertType = "warning";
              self.showAlert = true;
              setTimeout(() => {
                self.showAlert = false;
              }, 5000);
            }
            self.loadingPenulty = false;
          })
          .catch(function (error) {
            // handle error
            self.loadingPenulty = false;
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
            console.log(error);
          });
      } else {
        this.alertText = "لطفا فیلدهای درخواستی را بدرستی تکمیل فرمائید.";
        this.alertType = "error";
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }
    },
    checkPenaltyNow() {
      if (this.$refs.flightForm.validate()) {
        let self = this;
        self.loadingConfirmPenulty = true;
        let airline = this.airlines.find((x) => x.value == this.airline);
        let params = {
          Airline: airline.value,
          TicketNo: this.ticketNo,
        };
        axios
          .get("https://panel.ahuantours.com/api/Nira/PenaltyNow", {
            params,
          })
          .then(function (response) {
            self.newInformations.Penalty = response.data.NRSPenalty.PENALTY;
            let findLp = response.data.NRSPenalty.RefundedTaxes.findIndex(
              (x) => x.TaxType == "LP"
            );
            self.newInformations.LP =
              findLp == -1
                ? "0"
                : response.data.NRSPenalty.RefundedTaxes[findLp].TaxAmount;
            self.newInformations.Penalty =
              response.data.NRSPenalty.PENALTY.split(".");
            self.newInformations.RefundedAmount =
              response.data.NRSPenalty.RefundedAmount.split(".");
            self.cancelSeat();
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
            console.log(error);
            self.loadingConfirmPenulty = false;
          });
      } else {
        this.alertText = "لطفا فیلدهای درخواستی را بدرستی تکمیل فرمائید.";
        this.alertType = "error";
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }
    },
    cancelSeat() {
      if (this.$refs.flightForm.validate()) {
        let self = this;
        let airline = this.airlines.find((x) => x.value == this.airline);
        let params = {
          Airline: airline.value,
          PNR: this.PNR,
          PassengerName: this.name,
          PassengerLastName: this.family,
          DepartureDate: this.date,
          FlightNo: this.flightNo,
        };
        axios
          .get("https://panel.ahuantours.com/api/Nira/CancelSeat", {
            params,
          })
          .then(function (response) {
            // if (response.data.AirCancelSeat[0].Done == "true") {
            self.ETR();
            // } else {
            //   self.alertType = "error";
            //   self.alertText =
            //     "عملیات با خطا مواجه شد.پس از اطمینان از درست بودن فیلدها، باپشتیبانی تماس حاصل فرمائید.";
            //   self.showAlert = true;
            //   setTimeout(() => {
            //     self.showAlert = false;
            //   }, 3000);
            // }
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
            } else {
              errorText = "عملیات با خطا مواجه شد.";
            }
            self.alertText = errorText;
            self.alertType = "error";
            self.showAlert = true;
            setTimeout(() => {
              self.showAlert = false;
            }, 3000);
            self.loadingConfirmPenulty = false;
          });
      } else {
        this.alertText = "لطفا فیلدهای درخواستی را بدرستی تکمیل فرمائید.";
        this.alertType = "error";
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }
    },
    printTicket(event) {
      if (this.$refs.flightForm.validate()) {
        let airline = this.airlines.find((x) => x.value == this.airline);
        console.log(airline);
        let url =
          airline.value == "I3"
            ? "http://ra.ataair.ir"
            : airline.value == "Y9"
            ? "http://crs.kishair.aero"
            : airline.value == "QB"
            ? "http://pra.qeshmairline.com"
            : airline.value == "HH"
            ? "http://epay.taban.aero"
            : airline.value == "EP"
            ? "http://ra.iaa.ir"
            : airline.value == "ZV"
            ? "http://ra.zagrosairlines.com"
            : airline.value == "NV"
            ? "http://pra.karunair.ir"
            : airline.value == "JI"
            ? "http://ra.meraj.aero"
            : airline.value == "VR"
            ? "http://vr.nirasoft.ir"
            : airline.value == "IRZ"
            ? "http://ra.sahaair.com"
            : airline.value == "FP"
            ? "http://fp.nirasoft.ir"
            : airline.value == "IV"
            ? "http://ra.caspianairlines.com"
            : "";

        window.open(
          url +
            "/TicketPrint.aspx?PNR=" +
            this.PNR +
            "&TicketNo=" +
            this.ticketNo +
            "&OC=" +
            airline.oc,
          "_blank"
        );
      } else {
        this.alertText = "لطفا فیلدهای درخواستی را بدرستی تکمیل فرمائید.";
        this.alertType = "error";
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }
    },
    ETR() {
      if (this.$refs.flightForm.validate()) {
        let self = this;
        let airline = this.airlines.find((x) => x.value == this.airline);
        axios
          .get(
            "https://panel.ahuantours.com/api/Nira/ETR?AirLine=" +
              airline.value +
              "&TicketNo=" +
              this.ticketNo
          )
          .then(function (res) {
            if (self.newInformations.Fare) {
              self.newInformations.Fare = res.data.Fare;
              let KU = res.data.TAXES.find((x) => x.TaxCode == "KU");
              self.newInformations.KU == KU ? KU.TaxAmount : 0;
              let LP = res.data.TAXES.find((x) => x.TaxCode == "LP");
              self.newInformations.LP == LP ? LP.TaxAmount : 0;
              self.ETRefund();
              // get self.newInformations.KU == ???   TaxAmount
              // get self.newInformations.LP == ???   TaxCode
            } else {
              self.ETR();
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      } else {
        this.alertText = "لطفا فیلدهای درخواستی را بدرستی تکمیل فرمائید.";
        this.alertType = "error";
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }
    },
    RT() {
      if (this.$refs.flightForm.validate()) {
        let self = this;
        self.disabelRT = true;
        let airline = this.airlines.find((x) => x.value == this.airline);

        axios
          .get(
            "https://panel.ahuantours.com/api/Nira/RT?Airline=" +
              airline.value +
              "&PNR=" +
              this.PNR +
              "&Complete=y"
          )
          .then(function (res) {
            let findObjectArray = [];
            let findObject0 = {};
            for (let i = 0; i < res.data.Tickets.length; i++) {
              findObject0 = res.data.Tickets[i].PassengerET.split(" ");
              findObject0 = findObject0[findObject0.length - 1];
              findObjectArray.push({
                ETStatus: res.data.Tickets[i].ETStatus,
                PassengerET: findObject0,
              });
            }
            let findObject = findObjectArray.find(
              (x) =>
                x.PassengerET.toLowerCase() ==
                self.family.toLowerCase() +
                  "/" +
                  self.name.toLowerCase() +
                  ":" +
                  self.ticketNo
            );

            if (findObject) {
              self.alertType =
                findObject.ETStatus == "O"
                  ? "success"
                  : findObject.ETStatus == "R"
                  ? "error"
                  : "warning";
              self.alertText =
                findObject.ETStatus == "O"
                  ? "بلیط اکتیو می‌باشد"
                  : findObject.ETStatus == "R"
                  ? "بلیط کنسل شده."
                  : "ETStatus = " + findObject.ETStatus;
            } else {
              self.alertType = "warning";
              self.alertText = "اطلاعات وارد شده صحیح نمی‌باشد.";
            }

            self.showAlert = true;
            self.disabelRT = false;
            setTimeout(() => {
              self.showAlert = false;
            }, 3000);
            // get self.newInformations.KU == ???   TaxAmount
            // get self.newInformations.LP == ???   TaxCode
          })
          .catch(function (error) {
            // handle error
            console.log(error);
            self.disabelRT = false;
          });
      } else {
        this.alertText = "لطفا فیلدهای درخواستی را بدرستی تکمیل فرمائید.";
        this.alertType = "error";
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }
    },
    ETRefund() {
      if (this.$refs.flightForm.validate()) {
        let self = this;
        let airline = this.airlines.find((x) => x.value == this.airline);
        let params = {
          Airline: airline.value,
          TicketNo: this.ticketNo,
          Fare: self.newInformations.Fare,
          KU: self.newInformations.KU ? self.newInformations.KU : 0, //عوارض
          LP: self.newInformations.LP, //عوارض فرودگاهی
          Penalty: self.newInformations.Penalty[0],
        };
        axios
          .get("https://panel.ahuantours.com/api/Nira/ETRefund", {
            params,
          })
          .then(function (response) {
            self.alertType = "success";
            self.alertText = "پرواز انتخابی با موفقیت کنسل شد.";
            self.showAlert = true;
            self.penultyDialog = false;
            self.loadingConfirmPenulty = false;
            setTimeout(() => {
              self.showAlert = false;
            }, 3000);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      } else {
        this.alertText = "لطفا فیلدهای درخواستی را بدرستی تکمیل فرمائید.";
        this.alertType = "error";
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }
    },
    changeDate1(value) {
      let date = value ? value : this.$refs.date.value;
      let variabel = "";
      let options = { day: "numeric", month: "long" };
      if (date.length == 2) {
        variabel =
          new Date(date[0]).toLocaleDateString("fa-IR", options) +
          " الی " +
          new Date(date[1]).toLocaleDateString("fa-IR", options);
      } else {
        variabel = new Date(date).toLocaleDateString("fa-IR", options);
      }
      this.selectedDate = variabel;
      // if (value) {
      //   this.viiblePeaple = false
      // }
    },
    cancellPnr() {
      if (this.$refs.flightForm.validate()) {
        let self = this;
        let airline = this.airlines.find((x) => x.value == this.airline);
        let params = {
          Airline: airline.value,
          PNR: this.PNR,
        };

        axios
          .get("https://panel.ahuantours.com/api/Nira/CancelPNR", {
            params,
          })
          .then(function (response) {
            if (response.data.AirCancelPNR) {
              if (response.data.AirCancelPNR[0].Error == "Already Cancelled") {
                console.log("قبلا کنسل شده این PNR");
              } else {
                //  if (response.data.AirCancelPNR[0].Error == 'No Error COMMAND PNR CANCELLED')
              }
            } else {
              if (
                JSON.parse(response.data.replace(/[\r\n]/gm, "-"))
                  .AirCancelPNR[0].Error ==
                "No Error COMMAND--CANCELLATION DENIED AFTER FLIGHT STOP BOOK.--"
              ) {
                console.log("امکان کنسل کردن بعد از پرواز وجود ندارد.");
              } else if (
                JSON.parse(response.data.replace(/[\r\n]/gm, "-"))
                  .AirCancelPNR[0].Error == "No Error COMMAND--NO PNR--"
              ) {
                console.log("PNR وارد شده صحیح نیست.");
              } else if (
                JSON.parse(response.data.replace(/[\r\n]/gm, "-"))
                  .AirCancelPNR[0].Error == "No Error COMMAND--PNR CANCELLED--"
              ) {
                console.log("PNR با موفقیت کنسل شد.");
              }
            }
            let resData = response.dat;
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
            } else {
              errorText = "عملیات با خطا مواجه شد.";
            }
            self.alertText = errorText;
            self.alertType = "error";
            self.showAlert = true;
            setTimeout(() => {
              self.showAlert = false;
            }, 3000);
            console.log(error);
          });
      } else {
        this.alertText = "لطفا فیلدهای درخواستی را بدرستی تکمیل فرمائید.";
        this.alertType = "error";
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }
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
    getToken() {
      return new Promise((resolve) => {
        if (this.stepunahutorize == 1) {
          this.stepunahutorize = 2;
          let self = this;
          let params = {
            phoneNumber: "09054791374",
            password: "Parisa@123",
            rememberMe: true,
          };
          axios
            .get("https://panel.ahuantours.com/api/Login")
            .then(function (response) {
              // handle success
              axios.defaults.headers.common["Authorization"] =
                "Bearer " + response.data.token;
              localStorage.setItem("Client-Token", response.data.token);
              setTimeout(() => {
                if (self.$route.query.path) {
                  self.checkAsync();
                }
                setTimeout(() => {
                  this.stepunahutorize = 1;
                }, 10000);
              }, 1000);
              resolve();
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });
        }
      });
    },
  },
  created() {
    if (localStorage.getItem("Client-Token")) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("Client-Token");
    } else {
      this.getToken();
    }
    window.scrollTo(0, 0);
  },
};
</script>

