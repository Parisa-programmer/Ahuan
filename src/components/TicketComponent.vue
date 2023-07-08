<template class="">
  <div class="">
    <v-row justify="center" class="">
      <div class="indexDiv">
        <ticket-card :isMainPage="true" :tickets="ticket" />
        <ticket-card :isMainPage="true" :tickets="faildTickets" :isFaild="true" />
      </div>
    </v-row>
    <!-- <ticket-dialog-component :tickets="ticket" v-if="nextPage" /> -->
  </div>
</template>


<script>
import '@/assets/css/main.css'
import axios from 'axios'
import TicketCard from '@/components/TicketCard.vue'
// import TicketDialogComponent from './TicketDialogComponent.vue'
axios.defaults.headers.common['Client-Token'] = 'Ahuan-Wapi?123'

export default {
  data() {
    return {
      ticket: [],
      step: 0,
      nextPage: true,
      faildTickets: []
    }
  },
  name: 'ticket-component',
  components: {
    TicketCard,
    // TicketDialogComponent
  },
  props: {
    originCity: {
      type: Object,
      require: true
    },
    destinationInternal: {
      type: Object,
      require: true
    },
    dayName: {
      type: String,
      require: true
    },
    date1: {
      type: String,
      require: true
    },
    sortTab: {
      type: Number,
      require: true
    },
  },
  watch: {
    async sortTab() {
      await this.sortTickets(this.sortTab)
    }
  },
  computed: {},
  methods: {
    async getFlights(proxy, AirLine, OfficeUser, OfficePass) {
      return new Promise(resolve => {
        let self = this
        let params = {
          AirLine: AirLine,
          cbSource: self.$route.query.from,
          cbTarget: self.$route.query.to,
          DepartureDate: self.$route.query.start,
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
                data[i].Airline == 'PA' ? 'آتا' :
                  data[i].Airline == 'Y9' ? 'کیش‌ایر' :
                    data[i].Airline == 'QB' ? 'قشم‌ایر' :
                      data[i].Airline == 'HH' ? 'تابان' :
                        data[i].Airline == 'EP' ? 'آسمان' :
                          data[i].Airline == 'ZV' ? 'زاگرس' :
                            data[i].Airline == 'NV' ? 'نفت' :
                              data[i].Airline == 'JI' ? 'معراج' :
                                data[i].Airline == 'VR' ? 'وارش' :
                                  data[i].Airline == 'IV' ? 'کاسپین' :
                                    data[i].Airline == 'IRZ' ? 'ساها' : ''
              let DepartureDateTime = data[i].DepartureDateTime.split(' ')
              let DepartureTime = DepartureDateTime[1].split(':')
              data[i].DepartureDateTime = DepartureDateTime[0]
              data[i].DepartureTime = DepartureTime[0] + ':' + DepartureTime[1]
              // 
              let ArrivalDateTime = data[i].ArrivalDateTime.split(' ')
              let ArrivalTime = ArrivalDateTime[1].split(':')
              data[i].ArrivalDate = ArrivalDateTime[0]
              data[i].ArrivalTime = ArrivalTime[0] + ':' + ArrivalTime[1]
              // 
              data[i].originCity = self.originCity.text
              data[i].destinationInternal = self.destinationInternal.text
              data[i].dayName = self.dayName
              let options = { day: 'numeric', month: 'long' };
              data[i].fromDate = new Date(self.date1).toLocaleDateString('fa-IR', options);
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
            resolve()
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
    async getPrice(data, proxy, OfficeUser, OfficePass) {
      let self = this
      let classes = data.ClassesStatus.split(' ')
      let isClassC = false
      let isClassX = false
      for (let m = 0; m < classes.length; m++) {
        let type = classes[m].slice(-1)
        if (type == 'X' || type == 'C') {
          if (type == 'X' && isClassX == false) {
            data.type = type
            isClassX = true
            self.pushToTicket(data);
          }
          if (type == 'C' && isClassC == false) {
            isClassC = true
            self.pushToTicket(data);
            data.type = type
          }
        }
        else {
          isClassC = true
          isClassX = true
          let newType = (classes[m].slice(0, 1) == '/') ? classes[m].slice(1, classes[m].length - 1) : classes[m].slice(1, classes[m].length - 1)
          let params = {
            AirLine: data.Airline,
            Route: self.originCity.id + '-' + self.destinationInternal.id,
            RBD: newType,
            DepartureDate: self.$route.query.start,
            OfficeUser: OfficeUser,
            OfficePass: OfficePass,
            FlightNo: data.FlightNo,
          }
          await axios.get('http://localhost:8080/' + proxy + '/FareJS.jsp', { params })
            .then(function (response) {
              if ((response.data) && response.data.AdultTotalPrice != 0) {
                data.type = type;
                data.price = Number(response.data.AdultTotalPrice);
                data.fare = response.data;
                data.capacity = Number(classes[m].slice(-1)) ? classes[m].slice(-1) : type;
                data.longDate1 = new Date(data.DepartureDateTime).toLocaleDateString('fa-IR', { day: 'numeric', month: 'long', year: 'numeric' });
                data.longDate2 = new Date(data.ArrivalDate).toLocaleDateString('fa-IR', { day: 'numeric', month: 'long', year: 'numeric' });
                data.enLongDate1 = new Date(data.DepartureDateTime).toLocaleDateString('en', { day: 'numeric', month: 'long' });
                data.enLongDate2 = new Date(data.ArrivalDate).toLocaleDateString('en', { day: 'numeric', month: 'long' });
                self.pushToTicket(data);
              }
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
        }
      }
    },
    pushToTicket(object) {
      if (object.type == 'C' || object.type == 'X') {
        this.faildTickets.push(object)
      } else if (object.type != 'C' && object.type != 'X') {
        let indexNumber = this.faildTickets.findIndex((x) => x.FlightNo == object.FlightNo)
        if (indexNumber != (-1)) {
          this.faildTickets.splice(indexNumber, 1)
        }
        this.ticket.push(object)
      }
    },
    async sortTickets(tab) {
      if (this.ticket.length > 0) {
        let sortFromPrice = this.ticket.sort((a, b) => {
          return a.price - b.price;
        })

        let info = {
          minPrice: this.ticket[0].price,
          maxPrice: this.ticket[this.ticket.length - 1].price
        }
        this.$emit('minMaxPrice', info)

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

        switch (tab) {
          case 0:
            this.ticket =
              await this.ticket.sort((a, b) => {
                return a.price - b.price;
              })
            break;
          case 1:
            this.ticket = await this.ticket.sort((a, b) => {
              if (a.DepartureTime < b.DepartureTime)
                return -1;
              if (a.DepartureTime > b.DepartureTime)
                return 1;
              return 0;
            })
            break;
          case 2:
            this.ticket = await this.ticket.sort((a, b) => {
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
      }
    },
    async checkAsync() {
      let self = this
      
      async function asyncCall(airline, airlineCode, user, pass) {
        let result = await self.getFlights(airline, airlineCode, user, pass)
        if (result && result.data) {
          for (let i = 0; i < result.data.length; i++) {
            await self.getPrice(result.data[i], result.proxy, result.OfficeUser, result.OfficePass)
          }
        }
      }
      await asyncCall('ata', 'PA', 'THR155.WS', 'Ahuan1348');
      await asyncCall('kishair', 'Y9', 'THR100.WS', 'Ahuan1348');
      await asyncCall('qeshmair', 'QB', 'THR166.WS', 'Ahuan1348');
      await asyncCall('taban', 'HH', 'THR168.WS', 'Ahuan1348');
      await asyncCall('aseman', 'EP', 'THR100.WS', 'Ahuan1348');
      await asyncCall('zagros', 'ZV', 'THR197.WS', 'Ahuan1348');
      await asyncCall('naft', 'NV', 'THR100.WS', 'Ahuan1348');
      await asyncCall('naft', 'NV', 'THR100.WS', 'Ahuan1348');
      await asyncCall('meraj', 'JI', 'THR158.WS', 'THR158AH');
      await asyncCall('varesh', 'VR', 'THR215.WS', 'A2930');
      // await asyncCall('caspian', 'IV', 'THR100.WS', 'Ahuan1348');
      // await asyncCall('saha', 'IRZ', 'THR162.WS', 'Ahuan1348');
      // setTimeout(() => {
      self.sortTickets(self.sortTab)
      self.$emit('allTickets', self.ticket)
      // }, 2000);
    },
  },
  mounted() {
    // this.getAllFlights()
    this.checkAsync()
  },
}

</script>