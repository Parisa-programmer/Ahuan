<template class="">
  <div class="">
    hiiii{{ dayName }}
    <v-row justify="center" class="">
      <div class="indexDiv">
        <v-row class="justify-center">
          <h3 v-if="loadeingTickets" class="green--text text--darken-2 my-12">درحال بارگزاری بلیط ها ...</h3>
          <h3 v-if="!loadeingTickets && sortedTickets.length == 0 && faildTickets.length == 0"
            class="grey--text text--darken-2 my-12">
            متاسفانه هیچ بلیط فعالی وجود ندارد!</h3>
        </v-row>
        <ticket-card :rezervStepParent="rezervStepParent" :chooseStep="rezervStep" @firstChoosed="firstChoosed($event)"
          @nextChoosed="nextChoosed($event)" :Passenger="Passenger" @showDetailes="showDetailes($event)"
          :isMainPage="true" :tickets="sortedTickets" />
        <ticket-card v-show="loadeingTickets == false && !hideFeild" :isMainPage="true" :tickets="faildTickets"
          :isFaild="true" />
      </div>
    </v-row>
    <ticket-dialog-component :Passenger="Passenger" :choosedTicket="allChoosedTickets" :tickets="allChoosedTickets"
      v-if="nextPage" @changeTicket="changeTicket($event); nextPage = false" />
  </div>
</template>
<script>
import '@/assets/css/main.css'
import axios from 'axios'
import TicketCard from '@/components/TicketCard.vue'
import TicketDialogComponent from './TicketDialogComponent.vue'
axios.defaults.headers.common['Client-Token'] = 'Ahuan-Wapi?123'

export default {
  data() {
    return {
      ticket: [],
      step: 0,
      nextPage: false,
      faildTickets: [],
      sortedTickets: [],
      ticketChoosed: [],
      rezervStep: 1,
      allChoosedTickets: [],
      rt: true
    }
  },
  name: 'ticket-component',
  components: {
    TicketCard,
    TicketDialogComponent
  },
  props: ['originCity', 'destinationInternal', 'dayName', 'date1', 'sortTab', 'tickets', 'hideFeild', 'Passenger', 'loadeingTickets', 'rezervStepParent', 'setFirstDate'],
  watch: {
    async rezervStepParent() {
      this.rezervStep = 1
      this.allChoosedTickets[0] = undefined
      this.allChoosedTickets[1] = undefined
    },
    async sortTab() {
      await this.sortTickets(this.sortTab)
    },
    tickets() {
      this.sortedTickets = this.tickets
    },
    '$route'(to, from) {
      this.ticket = []
      this.faildTickets = []
      this.sortedTickets = []
      if (this.$route.query.path) {
        this.checkAsync()
      }
    },
    rezervStep() {
      this.ticket = []
      this.faildTickets = []
      this.sortedTickets = []
    },
    dayName() {
      if (this.dayName.day1 != undefined) {
        // this.checkAsync()
      }
      // 
    }
  },
  computed: {},
  methods: {
    async getFlights(proxy, AirLine, OfficeUser, OfficePass, stepFunction) {
      return new Promise(resolve => {
        let self = this
        let params = {
          AirLine: AirLine,
          cbSource: this.rezervStep == 2 ? self.$route.query.to : self.$route.query.from,
          cbTarget: this.rezervStep == 2 ? self.$route.query.from : self.$route.query.to,
          DepartureDate: this.rezervStep == 2 ? self.$route.query.end : self.$route.query.start,
          cbAdultQty: self.$route.query.adl,
          cbChildQty: self.$route.query.chd,
          cbInfantQty: self.$route.query.inf,
          OfficeUser: OfficeUser,
          OfficePass: OfficePass
        }

        axios.get('http://localhost:8080/' + proxy + '/AvailabilityJS.jsp', { params }).then(function (response) {
          let data = response.data.AvailableFlights
          if (data) {

            for (let i = 0; i < data.length; i++) {
              data[i].AirlinePersianId =
                data[i].Airline == 'I3' ? 'آتا' :
                  data[i].Airline == 'Y9' ? 'کیش‌ایر' :
                    data[i].Airline == 'QB' ? 'قشم‌ایر' :
                      data[i].Airline == 'HH' ? 'تابان' :
                        data[i].Airline == 'EP' ? 'آسمان' :
                          data[i].Airline == 'ZV' ? 'زاگرس' :
                            data[i].Airline == 'NV' ? 'نفت' :
                              data[i].Airline == 'JI' ? 'معراج' :
                                data[i].Airline == 'FP' ? 'فلای‌پرشیا' :
                                  data[i].Airline == 'VR' ? 'وارش' :
                                    data[i].Airline == 'IV' ? 'کاسپین' :
                                      data[i].Airline == 'IRZ' ? 'ساها' : ''
              let DepartureDateTime = data[i].DepartureDateTime.split(' ')
              let DepartureTime = DepartureDateTime[1].split(':')
              data[i].DepartureDateTime = DepartureDateTime[0]
              data[i].OfficeUser = OfficeUser
              data[i].DepartureTime = DepartureTime[0] + ':' + DepartureTime[1]
              data[i].proxy = proxy
              //
              let ArrivalDateTime = data[i].ArrivalDateTime.split(' ')
              let ArrivalTime = ArrivalDateTime[1].split(':')
              data[i].ArrivalDate = ArrivalDateTime[0]
              data[i].ArrivalTime = ArrivalTime[0] + ':' + ArrivalTime[1]
              //
              data[i].originCity =
                'UGT'
              // self.originCity.text
              data[i].airport1 =
                'UGT'
              // self.originCity.airport
              data[i].destinationInternal =
                'TTQ'
              // self.destinationInternal.text
              data[i].airport2 =
                'TTQ'
              // self.destinationInternal.airport
              data[i].dayName = self.dayName
              let options = { day: 'numeric', month: 'long' };
              data[i].fromDate = new Date(self.date1.length == 2 ? self.date1[0] : self.date1).toLocaleDateString('fa-IR', options);
              data[i].endDate = new Date(self.date1.length == 2 ? self.date1[1] : self.date1).toLocaleDateString('fa-IR', options);
            }
            let resultObjec = {
              data: data,
              OfficeUser: OfficeUser,
              OfficePass: OfficePass,
              proxy: proxy
            }
            resolve(resultObjec)
          }
          else {
            self.checkAsync(proxy, AirLine, OfficeUser, OfficePass, stepFunction)
          }
        })
          .catch(function (error) {
            // handle error
            console.log(error);
            console.log('وب سرویس "' + proxy + '" کار نمیکند');
            resolve()
          })
      });
    },
    async getPrice(data, proxy, OfficeUser, OfficePass, sort) {
      let self = this
      let classes = data.ClassesStatus.split(' ')
      let isClassC = false
      let isClassX = false
      for (let m = 0; m < classes.length; m++) {
        let type = classes[m].slice(-1)
        // data.type = type;
        if (type == 'X' || type == 'C') {
          if (type == 'X' && isClassX == false) {
            data.type = type
            isClassX = true
            self.pushToTicket(data, type);
          }
          if (type == 'C' && isClassC == false) {
            data.type = type
            isClassC = true
            self.pushToTicket(data, type);
          }
        }
        else {
          isClassC = true
          isClassX = true
          let newType = (classes[m].slice(0, 1) == '/') ? classes[m].slice(1, classes[m].length - 1) : classes[m].slice(0, classes[m].length - 1)
          let params = {
            AirLine: data.Airline,
            Route: self.rezervStep == 2 ?
              'TTQ'
              // self.destinationInternal.id
              + '-' +
              'UGT'
              // self.originCity.id
              :
              'UGT'
              // self.originCity.id
              + '-' +
              'TTQ'
            // self.destinationInternal.id
            ,
            RBD: newType,
            DepartureDate: self.rezervStep == 2 ? self.$route.query.end : self.$route.query.start,
            OfficeUser: OfficeUser,
            OfficePass: OfficePass,
            FlightNo: data.FlightNo,
          }
          let data2 = data
          await axios.get('http://localhost:8080/' + proxy + '/FareJS.jsp', { params })
            .then(function (response) {
              if ((response.data) && response.data.AdultTotalPrice != 0) {

                data2.ticketType = 's';
                data2.className = newType;
                data2.OfficeUser = OfficeUser;
                data2.OfficePass = OfficePass;
                data2.price = Number(response.data.AdultTotalPrice);
                data2.fare = response.data;
                data2.capacity = Number(classes[m].slice(-1)) ? classes[m].slice(-1) : type;
                data2.longDate1 = new Date(data.DepartureDateTime).toLocaleDateString('fa-IR', { day: 'numeric', month: 'long', year: 'numeric' });
                data2.longDateTime1 = new Date(data.DepartureDateTime).toLocaleDateString('fa-IR');
                data2.longDate2 = new Date(data.ArrivalDate).toLocaleDateString('fa-IR', { day: 'numeric', month: 'long', year: 'numeric' });
                data2.enLongDate1 = new Date(data.DepartureDateTime).toLocaleDateString('en', { day: 'numeric', month: 'long' });
                data2.enLongDate2 = new Date(data.ArrivalDate).toLocaleDateString('en', { day: 'numeric', month: 'long' });
                self.pushToTicket(data2, type, sort);
                // console.log('data:', data, type);
              } else if (!sort) {
                self.getPrice(data2, proxy, OfficeUser, OfficePass, 'sort')
              }
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
        }
      }
    },
    fareAxios() {

    },
    pushToTicket(object, type, sort) {
      return new Promise(resolve => {
        if (type == 'C' || type == 'X') {
          this.faildTickets.push(object)
          resolve()
        } else if (type != 'C' && type != 'X') {
          let indexNumber = this.faildTickets.findIndex((x) => x.FlightNo == object.FlightNo)
          if (indexNumber != (-1)) {
            this.faildTickets.splice(indexNumber, 1)
          }
          let object2 = { type: type }
          console.log(Object.assign(object, object2));
          this.ticket.push(Object.assign(object, object2))
          resolve()
        }
      });
    },
    async sortTickets(tab) {
      if (this.ticket.length > 0) {
        if (tab == 0) {
          this.ticket = this.ticket.sort((a, b) => {
            return a.price - b.price;
          })
          let info = {
            minPrice: Math.floor(this.ticket[0].price / 1000000) * 1000000,
            maxPrice: Math.ceil((this.ticket[this.ticket.length - 1].price) / 1000000) * 1000000
          }
          this.$emit('minMaxPrice', info)
        }
        // let sortFromTime = this.ticket.sort((a, b) => {
        //   if (a.DepartureTime < b.DepartureTime)
        //     return -1;
        //   if (a.DepartureTime > b.DepartureTime)
        //     return 1;
        //   return 0;
        // })
        // let sortFromAirline = this.ticket.sort((a, b) => {
        //   if (a.AirlinePersianId < b.AirlinePersianId)
        //     return -1;
        //   if (a.AirlinePersianId > b.AirlinePersianId)
        //     return 1;
        //   return 0;
        // })
        let self = this
        switch (tab) {
          case 0:
            self.sortedTickets = await self.ticket.sort((a, b) => {
              return a.price - b.price;
            })
            break;
          case 1:
            self.sortedTickets = await self.ticket.sort((a, b) => {
              if (a.DepartureTime < b.DepartureTime)
                return -1;
              if (a.DepartureTime > b.DepartureTime)
                return 1;
              return 0;
            })
            break;
          case 2:
            self.sortedTickets = await self.ticket.sort((a, b) => {
              if (a.AirlinePersianId < b.AirlinePersianId)
                return -1;
              if (a.AirlinePersianId > b.AirlinePersianId)
                return 1;
              return 0;
            })
            break;
          default:
            break;
        }
        // this.$emit('sendSortedTickets', sortedTickets)
      }
    },
    async checkAsync(proxy, AirLine, OfficeUser, OfficePass, step) {
      this.$emit('changeTicket')
      let self = this
      let stepFunction = step ? step : 0
      async function asyncCall(airline, airlineCode, user, pass) {
        let result = await self.getFlights(airline, airlineCode, user, pass, stepFunction)
        if (result && result.data) {
          for (let i = 0; i < result.data.length; i++) {
            if (result.data[i].ClassesStatus.length) {
              await self.getPrice(result.data[i], result.proxy, result.OfficeUser, result.OfficePass)
            }
          }
        }
        stepFunction = !proxy && stepFunction + 1
        if (stepFunction == 10 || proxy) {
          await self.sortTickets(self.sortTab)
          self.$emit('allTickets', self.ticket)
        }
      }
      if (proxy) {
        asyncCall(proxy, AirLine, OfficeUser, OfficePass);
      } else {
        asyncCall('ata', 'PA', 'THR155.WS', 'Ahuan1348');
        asyncCall('kishair', 'Y9', 'THR100.WS', 'Ahuan1348');
        asyncCall('qeshmair', 'QB', 'THR166.WS', 'Ahuan1348');
        asyncCall('taban', 'HH', 'THR168.WS', 'Ahuan1348');
        asyncCall('aseman', 'EP', 'THR100.WS', 'Ahuan1348');
        asyncCall('zagros', 'ZV', 'THR197.WS', 'Ahuan1348');
        asyncCall('naft', 'NV', 'THR100.WS', 'Ahuan1348');
        asyncCall('meraj', 'JI', 'THR158.WS', 'THR158AH');
        asyncCall('varesh', 'VR', 'THR215.WS', 'A2930');
        asyncCall('saha', 'IRZ', 'THR140.WS', '123456789');
        // asyncCall('flyPersia', 'FP', '', '123456789');

      }

      // await asyncCall('caspian', 'IV', 'THR100.WS', 'Ahuan1348');
    },
    showDetailes(event) {
      this.ticketChoosed = []
      this.ticketChoosed.push(event)
      this.allChoosedTickets = this.ticketChoosed
      this.nextPage = true
    },
    firstChoosed(event) {
      this.allChoosedTickets[0] = event
      if (this.allChoosedTickets[1] != undefined) {
        this.$emit('nextChoosed', event)
        this.nextPage = true
      } else {
        this.rezervStep = 2
        // 
        this.$emit('firstChoosed', event)
        let query = this.$route.query
        this.$router.push({ path: this.$route.path, query: { ...query, rt: !this.rt } })
      }
    },
    nextChoosed(event) {
      this.$emit('nextChoosed', event)
      this.allChoosedTickets[1] = event
      this.nextPage = true
    },
    changeTicket(event) {
      if (this.rezervStep != (event + 1)) {
        this.rezervStep = event + 1
        this.checkAsync()
      }
      this.$emit('changeTicket', this.rezervStep)
    }
  },
  mounted() {
    this.rt = this.$route.query.rt && this.$route.query.rt
    let self = this
    setTimeout(() => {
      if (self.$route.query.path) {
        // self.checkAsync()
      }
    }, 1000);

    // this.getAllFlights()
    // if (this.dayNumber) {

    // }


    // setInterval(() => {
    // }, 1000);
  },
}

</script>