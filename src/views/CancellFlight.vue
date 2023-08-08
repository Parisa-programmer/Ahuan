<template>
  <div class="mt-12 pt-12 heightAll relative">
    <v-img class="backImage " height="800" src="@/assets/image/cancell-flight.jpg" alt="" />
    <v-row align="center" class="absolute heightAll widthAll pr-12 mr-12" style="top:-50px">
      <div class="mr-12 pt-6 px-6 rounded-lg white" style="background-color: rgba(255, 255, 255, 0.548);">
        <v-row class="mt-6">
          <v-col>
            <v-text-field label="نام مسافر" v-model="name" outlined :rules="nameRules" class="rounded-xl"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field label="نام خانوادگی مسافر" v-model="family" :rules="nameRules" outlined
              class="mr-4 rounded-xl"></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mt-6">
          <v-col class="pb-4 pt-0 pl-6">
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
          <v-col>
            <v-text-field label="PNR" v-model="PNR" outlined :rules="emptyRules" class="mr-4 rounded-xl"></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mt-6">
          <v-col>
            <v-text-field label="شماره پرواز" v-model="flightNo" outlined :rules="emptyRules"
              class="rounded-xl"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field label="شماره بلیط" v-model="ticketNo" outlined :rules="emptyRules"
              class="rounded-xl"></v-text-field>
          </v-col>
          <v-col>
            <v-select v-model="airline" :items="airlines" outlined :rules="emptyRules" class="mr-4 rounded-xl"
              append-icon="mdi-semantic-web" label="شرکت هواپیمایی"></v-select>
          </v-col>
        </v-row>
        <v-row class="mt-6" justify="center">
          <v-btn color="red" dark @click="checkPenalty()">checkPenalty</v-btn>
        </v-row>
        <v-row class="mt-6" justify="center">
          <v-btn color="red" dark @click="checkPenaltyNow()">checkPenaltyNow</v-btn>
        </v-row>
        <v-row class="mt-6" justify="center">
          <v-btn color="red" dark @click="cancelSeat()">cancelSeat</v-btn>
        </v-row>
        <v-row class="mt-6" justify="center">
          <v-btn color="red" dark @click="ETR()">ETR</v-btn>
        </v-row>
        <v-row class="mt-6" justify="center">
          <v-btn color="red" dark @click="ETRefund()">ETRefund</v-btn>
        </v-row>
        <v-row class="mt-6" justify="center">
          <v-btn color="green" dark @click="printTicket()">printTicket</v-btn>
        </v-row>
        <v-row class="mt-6" justify="center">
          <v-btn color="green" dark @click="cancellPnr()">cancellPnr</v-btn>
        </v-row>
        <v-row justify="center">
          <span class="caption mt-4 mb-2 red--text" style="font-family: Byekan !important;">توجه داشته باشید برای کنسل
            کردن هر
            بلیط باید جداگانه فرم را اجرا کنید.</span>
        </v-row>
      </div>
    </v-row>
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
      show: false,
      localeConfig: {
        fa: {
          // displayFormat: 'jYYYY/jMM/jDD',
          lang: { label: 'شمسی' }
        },
      },
      minDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
      name: 'GHJGHJ',
      family: 'FHJFHJGHJ',
      date: '',
      PNR: 'U5PPF',
      flightNo: '1000',
      ticketNo: '0002448352492',
      airline: {
        text: 'زاگرس',
        value: 'ZV',
        url: 'zagros',
        oc: 'THR197',
        user: 'THR197.WS',
        pass: 'Ahuan1348'
      },
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
        Penalty: ''
      }
    }
  },
  components: {
  },
  computed: {

  },
  methods: {
    checkPenalty() {
      let airline = this.airlines.find(x => x.value == this.airline)
      let params = {
        Airline: airline.value,
        ticketNo: this.ticketNo,
        OfficeUser: airline.user,
        OfficePass: airline.pass,
      }

      axios.get('http://localhost:8080/' + airline.url + '/NRSPenalty.jsp?AirLine=' + airline.value + '&TicketNo==' + this.ticketNo + '&OfficeUser=' + airline.user + '&OfficePass=' + airline.pass).then(function (response) {
        console.log(response);
      })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },
    checkPenaltyNow() {
      let self = this
      let airline = this.airlines.find(x => x.value == this.airline)
      let params = {
        Airline: airline.value,
        ticketNo: this.ticketNo,
        OfficeUser: airline.user,
        OfficePass: airline.pass,
      }

      axios.get('http://localhost:8080/' + airline.url + '/NRSPenaltyNow.jsp?', { params }).then(function (response) {
        console.log(response);
        //  get self.newInformations.Penalty == ???
      })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },
    cancelSeat() {
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
      console.log(params);

      axios.get('http://localhost:8080/' + airline.url + '2' + '/CancelSeatJS', { params }).then(function (response) {
        console.log(response);
      })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },
    printTicket() {
      let airline = this.airlines.find(x => x.value == this.airline)
      let params = {
        PNR: this.PNR,
        TicketNo: this.ticketNo,
        OC: airline.oc,
      }

      axios.get('http://localhost:8080/' + airline.url + '3' + '/TicketPrint.aspx?', { params }).then(function (res) {
        console.log(res);
        // get self.newInformations.KU == ???   TaxAmount
        // get self.newInformations.LP == ???   TaxCode
      })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },
    ETR() {
      let self = this
      let airline = this.airlines.find(x => x.value == this.airline)
      let firstParams = {
        Airline: airline.value,
        ticketNo: this.ticketNo,
        OfficeUser: airline.user,
        OfficePass: airline.pass,
      }

      axios.get('http://localhost:8080/' + airline.url + '/NRSETR.jsp?', { firstParams }).then(function (res) {
        console.log(res);
        // get self.newInformations.KU == ???   TaxAmount
        // get self.newInformations.LP == ???   TaxCode
      })
        .catch(function (error) {
          // handle error
          console.log(error);
        })


      // let testText2 = 'Airline=' + airline.value + '&PNR=' + this.PNR + '&PassengerName=' + this.name + '&PassengerLastName=' + this.family + '&DepartureDate=' + this.date + '&FlightNo=' + this.flightNo + '&OfficeUser=' +airline.user+'&OfficePass='+airline.pass

      // axios.get('http://localhost:8080/' + airline.url + '/CancelSeatJS?' + testText2).then(function (response) {
      // console.log(response);
      // })
      //  .catch(function (error) {
      //    // handle error
      // console.log(error);
      //  })

    },
    ETRefund() {
      console.log('ETRefund not availabel now');
      // let self = this
      // let params = {
      //   Airline: airline.value,
      //   ticketNo: this.ticketNo,
      //   Fare: '',
      //   KU: '',
      //   LP: '',
      //   Penalty: '',
      //   OfficeUser: airline.user,
      //   OfficePass: airline.pass,
      // }

      // axios.get('http://localhost:8080/' + airline.url + '/CancelSeatJS', { params }).then(function (response) {
      //   console.log(response);
      // })
      //   .catch(function (error) {
      //     // handle error
      //     console.log(error);
      //   })



      // let testText2 = 'Airline=' + airline.value + '&PNR=' + this.PNR + '&PassengerName=' + this.name + '&PassengerLastName=' + this.family + '&DepartureDate=' + this.date + '&FlightNo=' + this.flightNo + '&OfficeUser=' +airline.user+'&OfficePass='+airline.pass

      // axios.get('http://localhost:8080/' + airline.url + '/CancelSeatJS?' + testText2).then(function (response) {
      // console.log(response);
      // })
      //  .catch(function (error) {
      //    // handle error
      // console.log(error);
      //  })

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
    }
  },
  created() {
    window.scrollTo(0, 0);
  }
}
</script>