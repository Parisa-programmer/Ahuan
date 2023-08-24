<template>
  <div class="mt-12 pt-12 heightAll relative">
    <v-img class="backImage " height="800" src="@/assets/image/cancell-flight.jpg" alt="" />
    <v-form ref="flightForm" lazy-validation>
      <v-row align="center" class="absolute heightAll widthAll pr-12 mr-12" style="top:-50px">
        <div class="mr-12 pt-6 px-6 rounded-lg white" style="background-color: rgba(255, 255, 255, 0.548);">
          <v-row class="mt-6">
            <v-col>
              <v-text-field label="نام مسافر" v-model="name" outlined :rules="nameRules"
                class="rounded-xl"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field label="نام خانوادگی مسافر" v-model="family" :rules="nameRules" outlined
                class="mr-4 rounded-xl"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-6">
            <v-col class="pb-2 pt-0 pl-2">
              <div class="input-group relative font-small-xs form-control headerBoxFields"
                style="border-radius: 5px;height:100%;background: #fff;">
                <date-picker :show="show" ref="date" color="red" format="YYYY-MM-DD" clearable: true v-model="date"
                  locale="fa,en" :locale-config="localeConfig" popover="right" auto-submit :min="minDate" :range="false"
                  @close="show = false; changeDate1()" outlined class="heightAll red">
                  <!-- <template #header-date="{ selectedDate }">
                  {{ date.length ? selectedDate : 'انتخاب تاریخ' }}
                </template> -->
                </date-picker>
                <div @click="show = !show"
                  class="cursorPointer heightAll d-inline-block font-small-xs widthAll showPopup absolute rounded-xl"
                  style="z-index:22;padding: 10px 4px;color:#424242;top:0;background: #fff;border: 1px solid #a6a6a4;">
                  {{ (date && date.length) ? selectedDate : 'انتخاب تاریخ' }}
                </div>
              </div>
              <!-- <v-text-field label="تاریخ حرکت" v-model="date" outlined :rules="emptyRules"
              class="rounded-xl"></v-text-field> -->
            </v-col>
            <v-col class="pr-3">
              <v-text-field label="PNR" v-model="PNR" outlined :rules="emptyRules"
                class="widthAll rounded-xl"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-6">
            <v-col>
              <v-text-field label="شماره پرواز" v-model="flightNo" outlined :rules="emptyRules"
                class="rounded-xl"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field label="شماره بلیط" v-model="ticketNo" outlined :rules="emptyRules"
                class="rounded-xl mx-2"></v-text-field>
            </v-col>
            <v-col>
              <v-select v-model="airline" :items="airlines" outlined :rules="emptyRules" class=" rounded-xl"
                append-icon="mdi-semantic-web" label="شرکت هواپیمایی"></v-select>
            </v-col>
          </v-row>
          <v-row class="mt-6" justify="center">
            <v-btn color="green" outlined @click="printTicket()">چاپ مجدد بلیط</v-btn>
            <span class="mx-1"></span>
            <v-btn color="purple lighten-1" outlined :loading="disabelRT" @click="RT()">بررسی وضعیت بلیط</v-btn>
            <span class="mx-1"></span>

            <v-btn color="red" outlined :loading="loadingPenulty" @click="checkPenalty()">کنسل کردن پرواز</v-btn>
            <v-btn color="green d-none" dark @click="cancellPnr()">cancell PNR</v-btn>
          </v-row>
          <v-row justify="center">
            <span class="caption mt-4 mb-2 red--text" style="font-family: Byekan !important;">توجه داشته باشید برای کنسل
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
  /**/
}
</style>

<script>
import axios from 'axios'
axios.defaults.headers.common['Client-Token'] = 'Ahuan-Wapi?123'

export default {
  name: 'cancell-flight',
  data() {
    return {
      disabelRT: false,
      qrcodeValue: 'https://example.com',
      penultyDialog: false,
      showAlert: false,
      alertType: 'error',
      alertText: '',
      show: false,
      localeConfig: {
        fa: {
          // displayFormat: 'jYYYY/jMM/jDD',
          lang: { label: 'شمسی' }
        },
      },
      minDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
      name: '',
      family: '',
      date: '',
      PNR: '',
      flightNo: '',
      ticketNo: '',
      airline: {},
      selectedDate: '',
      airlines: [
        {
          text: 'آتا',
          value: 'PA',
          url: 'ata',
          oc: 'THR155',
          user: 'THR155.WS',
          pass: 'Ahuan1348'
        },
        {
          text: 'کیش ایر',
          value: 'Y9',
          url: 'kishair',
          oc: 'THR100',
          user: 'THR100.WS',
          pass: 'Ahuan1348'
        },
        {
          text: 'قشم ایر',
          value: 'QB',
          url: 'qeshmair',
          oc: 'THR166',
          user: 'THR166.WS',
          pass: 'Ahuan1348'
        },
        {
          text: 'کاسپین',
          value: 'IV',
          url: 'caspian',
          oc: 'THR100',
          user: 'THR100.WS',
          pass: 'Ahuan1348'
        },
        {
          text: 'تابان',
          value: 'HH',
          url: 'taban',
          oc: 'THR168',
          user: 'THR168.WS',
          pass: 'Ahuan1348'
        },
        {
          text: 'ساها',
          value: 'IRZ',
          url: 'saha',
          oc: 'THR140',
          user: 'THR140.WS',
          pass: '123456789'
        },
        {
          text: 'آسمان',
          value: 'EP',
          url: 'aseman',
          oc: 'THR100',
          user: 'THR100.WS',
          pass: 'Ahuan1348'
        },
        {
          text: 'زاگرس',
          value: 'ZV',
          url: 'zagros',
          oc: 'THR197',
          user: 'THR197.WS',
          pass: 'Ahuan1348'
        },
        {
          text: 'نفت',
          value: 'NV',
          url: 'naft',
          oc: 'THR100',
          user: 'THR100.WS',
          pass: 'Ahuan1348'
        },
        {
          text: 'معراج',
          value: 'JI',
          url: 'meraj',
          oc: 'THR158',
          user: 'THR158.WS',
          pass: 'THR158AH'
        },
        {
          text: 'وارش',
          value: 'VR',
          url: 'varesh',
          oc: 'THR215',
          user: 'THR215.WS',
          pass: 'A2930'
        },
      ],
      nameRules: [
        v => !!v || 'پر کردن فیلد نام اجباریست.',
        v => (v || '').indexOf(0) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(1) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(2) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(3) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(4) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(5) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(6) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(7) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(8) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(9) < 0 || 'فرمت صحیح نیست',
        v => !(/^[\u0600-\u06FF\s]+$/.test(v)) || 'فرمت صحیح نیست',
      ],
      familyRules: [
        v => !!v || 'پر کردن فیلد نام خانوادگی اجباریست.',
        v => (v || '').indexOf(0) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(1) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(2) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(3) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(4) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(5) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(6) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(7) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(8) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(9) < 0 || 'فرمت صحیح نیست',
        v => !(/^[\u0600-\u06FF\s]+$/.test(v)) || 'فرمت صحیح نیست',
      ],
      emptyRules: [
        v => !!v || 'پر کردن این فیلد اجباریست.'
      ],
      newInformations: {
        Fare: '',
        KU: '',
        LP: '',
        Penalty: [],
        RefundedAmount: []
      },
      loadingPenulty: false,
      loadingConfirmPenulty: false,
    }
  },
  components: {
  },
  computed: {

  },
  methods: {
    checkPenalty() {
      if (this.$refs.flightForm.validate()) {
        // let a = {
        //   RefundedTaxes: [
        //     {
        //       TaxType: "I6",
        //       TaxAmount: 0,
        //       Currency: "IRR"
        //     },
        //     {
        //       TaxType: "V0",
        //       TaxAmount: 189000,
        //       Currency: "IRR"
        //     },
        //     {
        //       TaxType: "HL",
        //       TaxAmount: 21000,
        //       Currency: "IRR"
        //     },
        //     {
        //       TaxType: "LP",
        //       TaxAmount: 70000,
        //       Currency: "IRR"
        //     }
        //   ],
        //   Legs: [
        //     {
        //       RefundedFare: 840000,
        //       Amount: "1260000",
        //       Mode: "P",
        //       Currency: "IRR",
        //       Cancellation: "LEG:UGTTTQ SEGMENT NOT CANCELLED RULE: 1096 AM:60- FLIGHT NOT CNACELLED LEG:1 NO PENALTY NOT SET FOR CPN:1\r\n FLIGHT NOT CNACELLED LEG:1 NO PENALTY NOTSET FOR CPN:1\r\n",
        //       Leg: "UGTTTQ"
        //     }
        //   ],
        //   PENALTY: "1260000",
        //   RefundedAmount: 1120000
        // }
        let self = this
        self.loadingPenulty = true
        let airline = this.airlines.find(x => x.value == this.airline)
        axios.get('http://localhost:8080/' + airline.url + '/NRSPenalty.jsp?AirLine=' + airline.value + '&TicketNo=' + this.ticketNo + '&OfficeUser=' + airline.user + '&OfficePass=' + airline.pass).then(function (response) {
          console.log(response);
          if (response.data.NRSPenalty) {
            self.newInformations.Penalty = response.data.NRSPenalty.PENALTY.split('.')
            self.newInformations.RefundedAmount = response.data.NRSPenalty.RefundedAmount.split('.')
            self.penultyDialog = true
          } else {
            self.alertText = response.data == 'NO COUPON EXISTS FOR REFUND!!!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' ? 'این بلیط قبلا کنسل شده!' : response.data
            self.alertType = 'warning'
            self.showAlert = true
            setTimeout(() => {
              self.showAlert = false
            }, 5000);
          }
          self.loadingPenulty = false
        })
          .catch(function (error) {
            // handle error
            self.loadingPenulty = false
            console.log(error);
          })
      } else {
        this.alertText = 'لطفا فیلدهای درخواستی را بدرستی تکمیل فرمائید.'
        this.alertType = 'error'
        this.showAlert = true
        setTimeout(() => {
          this.showAlert = false
        }, 3000);
      }
    },
    checkPenaltyNow() {
      if (this.$refs.flightForm.validate()) {
        let self = this
        self.loadingConfirmPenulty = true
        let airline = this.airlines.find(x => x.value == this.airline)
        let params = {
          Airline: airline.value,
          TicketNo: this.ticketNo,
          OfficeUser: airline.user,
          OfficePass: airline.pass,
        }
        axios.get('http://localhost:8080/' + airline.url + '/NRSPenaltyNow.jsp?', { params }).then(function (response) {
          self.newInformations.Penalty = response.data.NRSPenalty.PENALTY
          let findLp = response.data.NRSPenalty.RefundedTaxes.findIndex(x => x.TaxType == 'LP')
          self.newInformations.LP = findLp == (-1) ? '' : response.data.NRSPenalty.RefundedTaxes[findLp].TaxAmount
          self.newInformations.Penalty = response.data.NRSPenalty.PENALTY.split('.')
          self.newInformations.RefundedAmount = response.data.NRSPenalty.RefundedAmount.split('.')
          self.cancelSeat()
        })
          .catch(function (error) {
            // handle error
            console.log(error);
            self.loadingConfirmPenulty = false
          })
      } else {
        this.alertText = 'لطفا فیلدهای درخواستی را بدرستی تکمیل فرمائید.'
        this.alertType = 'error'
        this.showAlert = true
        setTimeout(() => {
          this.showAlert = false
        }, 3000);
      }
    },
    cancelSeat() {
      if (this.$refs.flightForm.validate()) {
        let self = this
        let airline = this.airlines.find(x => x.value == this.airline)
        let params = {
          Airline: airline.value,
          PNR: this.PNR,
          PassengerName: this.name,
          PassengerLastName: this.family,
          DepartureDate: this.date,
          FlightNo: this.flightNo,
          OfficeUser: airline.user,
          OfficePass: airline.pass,
        }
        axios.get('http://localhost:8080/' + airline.url + '2' + '/CancelSeatJS', { params }).then(function (response) {
          if (response.data.AirCancelSeat[0].Done == 'true') {
            self.ETR()
          } else {
            self.alertType = 'error'
            self.alertText = 'عملیات با خطا مواجه شد.پس از اطمینان از درست بودن فیلدها، باپشتیبانی (داخلی 161) تماس حاصل فرمائید.'
            self.showAlert = true
            setTimeout(() => {
              self.showAlert = false
            }, 3000);
          }

        })
          .catch(function (error) {
            // handle error
            console.log(error);
            self.loadingConfirmPenulty = false
            self.alertType = 'error'
            self.alertText = 'عملیات با خطا مواجه شد.'
            self.showAlert = true
            setTimeout(() => {
              self.showAlert = false
            }, 3000);
          })
      } else {
        this.alertText = 'لطفا فیلدهای درخواستی را بدرستی تکمیل فرمائید.'
        this.alertType = 'error'
        this.showAlert = true
        setTimeout(() => {
          this.showAlert = false
        }, 3000);
      }
    },
    printTicket(event) {
      if (this.$refs.flightForm.validate()) {
        let airline = this.airlines.find(x => x.value == this.airline)
        window.open('http://localhost:8080/' + airline.url + '3' + '/TicketPrint.aspx?PNR=' + this.PNR + '&TicketNo=' + this.ticketNo + '&OC=' + airline.oc, '_blank');
      } else {
        this.alertText = 'لطفا فیلدهای درخواستی را بدرستی تکمیل فرمائید.'
        this.alertType = 'error'
        this.showAlert = true
        setTimeout(() => {
          this.showAlert = false
        }, 3000);
      }
    },
    ETR() {
      if (this.$refs.flightForm.validate()) {
        let self = this
        let airline = this.airlines.find(x => x.value == this.airline)
        axios.get('http://localhost:8080/' + airline.url + '/NRSETR.jsp?Airline=' + airline.value + '&TicketNo=' + this.ticketNo + '&OfficeUser=' + airline.user + '&OfficePass=' + airline.pass).then(function (res) {
          self.newInformations.Fare = res.data.Fare
          let KU = res.data.TAXES.find(x => x.TaxCode == 'KU')
          self.newInformations.KU == KU ? KU.TaxAmount : 0
          let LP = res.data.TAXES.find(x => x.TaxCode == 'LP')
          self.newInformations.LP == LP ? LP.TaxAmount : 0
          self.ETRefund()
          // get self.newInformations.KU == ???   TaxAmount
          // get self.newInformations.LP == ???   TaxCode
        })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      } else {
        this.alertText = 'لطفا فیلدهای درخواستی را بدرستی تکمیل فرمائید.'
        this.alertType = 'error'
        this.showAlert = true
        setTimeout(() => {
          this.showAlert = false
        }, 3000);
      }
    },
    RT() {
      if (this.$refs.flightForm.validate()) {
        let self = this
        self.disabelRT = true
        let airline = this.airlines.find(x => x.value == this.airline)
        axios.get('http://localhost:8080/' + airline.url + '/NRSRT.jsp?Airline=' + airline.value + '&PNR=' + this.PNR + '&OfficeUser=' + airline.user + '&OfficePass=' + airline.pass + '&Complete=y').then(function (res) {
          let findObject = res.data.Tickets.find(x => x.PassengerET.toLowerCase() == (self.family.toLowerCase() + '/' + self.name.toLowerCase() + ':' + self.ticketNo))

          if (findObject) {
            self.alertType = findObject.ETStatus == 'O' ? 'success' : findObject.ETStatus == 'R' ? 'error' : 'warning'
            self.alertText = findObject.ETStatus == 'O' ? 'بلیط اکتیو می‌باشد' : findObject.ETStatus == 'R' ? 'بلیط کنسل شده.' : 'ETStatus = ' + findObject.ETStatus
          } else {
            self.alertType = 'warning'
            self.alertText = 'اطلاعات وارد شده صحیح نمی‌باشد.'
          }

          self.showAlert = true
          self.disabelRT = false
          setTimeout(() => {
            self.showAlert = false
          }, 3000);
          // get self.newInformations.KU == ???   TaxAmount
          // get self.newInformations.LP == ???   TaxCode
        })
          .catch(function (error) {
            // handle error
            console.log(error);

          })
      } else {
        this.alertText = 'لطفا فیلدهای درخواستی را بدرستی تکمیل فرمائید.'
        this.alertType = 'error'
        this.showAlert = true
        setTimeout(() => {
          this.showAlert = false
        }, 3000);
      }
    },
    ETRefund() {
      if (this.$refs.flightForm.validate()) {
        let self = this
        let airline = this.airlines.find(x => x.value == this.airline)
        let params = {
          Airline: airline.value,
          TicketNo: this.ticketNo,
          Fare: self.newInformations.Fare,
          KU: self.newInformations.KU,//عوارض
          LP: self.newInformations.LP,//عوارض فرودگاهی
          Penalty: self.newInformations.Penalty[0],
          OfficeUser: airline.user,
          OfficePass: airline.pass,
        }
        axios.get('http://localhost:8080/' + airline.url + '2' + '/ETRefundJS', { params }).then(function (response) {
          self.alertType = 'success'
          self.alertText = 'پرواز انتخابی با موفقیت کنسل شد.'
          self.showAlert = true
          self.penultyDialog = false
          self.loadingConfirmPenulty = false
          setTimeout(() => {
            self.showAlert = false
          }, 3000);
        })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      } else {
        this.alertText = 'لطفا فیلدهای درخواستی را بدرستی تکمیل فرمائید.'
        this.alertType = 'error'
        this.showAlert = true
        setTimeout(() => {
          this.showAlert = false
        }, 3000);
      }
    },
    changeDate1(value) {
      let date = value ? value : this.$refs.date.value
      let variabel = ''
      let options = { day: 'numeric', month: 'long' };
      if (date.length == 2) {
        variabel = (new Date(date[0]).toLocaleDateString('fa-IR', options) + ' الی ' + new Date(date[1]).toLocaleDateString('fa-IR', options));
      } else {
        variabel = new Date(date).toLocaleDateString('fa-IR', options);
      }
      this.selectedDate = variabel
      console.log(variabel);
      // if (value) {
      //   this.viiblePeaple = false
      // }
    },
    cancellPnr() {
      if (this.$refs.flightForm.validate()) {
        let self = this
        let airline = this.airlines.find(x => x.value == this.airline)
        let params = {
          Airline: airline.value,
          PNR: this.PNR,
          OfficeUser: airline.user,
          OfficePass: airline.pass,
        }

        axios.get('http://localhost:8080/' + airline.url + '2' + '/CancelPNRJS', { params }).then(function (response) {
          if (response.data.AirCancelPNR) {
            if (response.data.AirCancelPNR[0].Error == "Already Cancelled") {
              console.log('قبلا کنسل شده این PNR');
            } else {
              //  if (response.data.AirCancelPNR[0].Error == 'No Error COMMAND PNR CANCELLED')
              // console.log(response.data.AirCancelPNR[0].Error);
            }
          } else {
            if (JSON.parse((response.data).replace(/[\r\n]/gm, '-')).AirCancelPNR[0].Error == 'No Error COMMAND--CANCELLATION DENIED AFTER FLIGHT STOP BOOK.--') {
              console.log('امکان کنسل کردن بعد از پرواز وجود ندارد.');
            } else if (JSON.parse((response.data).replace(/[\r\n]/gm, '-')).AirCancelPNR[0].Error == 'No Error COMMAND--NO PNR--') {
              console.log('PNR وارد شده صحیح نیست.');
            } else if (JSON.parse((response.data).replace(/[\r\n]/gm, '-')).AirCancelPNR[0].Error == 'No Error COMMAND--PNR CANCELLED--') {
              console.log('PNR با موفقیت کنسل شد.');
            }
          }
          let resData = response.data
          // console.log(resData);
          // console.log(JSON.parse((response.data).replace(/[\r\n]/gm, '-')));
          // 

        })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      } else {
        this.alertText = 'لطفا فیلدهای درخواستی را بدرستی تکمیل فرمائید.'
        this.alertType = 'error'
        this.showAlert = true
        setTimeout(() => {
          this.showAlert = false
        }, 3000);
      }
    },
    separatePrice(number) {
      let value1 = number.toString().replace(/,/g, "")
      let value2 = value1
      if (value1.length == 0 || value1 < 0) {
        value2 = 0
      } else if (value1.length > 1 && value1[0] == 0) {
        value2 = value1.replace(0, '')
      } else {
        value2 = value1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
      return value2
      // self.filter.price = [Number(self.fromPrice.toString().replace(/,/g, "")), Number(value1)]
    },
  },
  created() {
    window.scrollTo(0, 0);
  }
}
</script>

