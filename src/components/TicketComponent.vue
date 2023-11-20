<template class="">
  <div class="">
    <v-row justify="center" class="">
      <div class="indexDiv">
        <v-row class="justify-center">
          <h3 v-if="loadeingTickets" class="green--text text--darken-2 my-12">
            درحال بارگزاری بلیط ها ...
          </h3>
          <h3
            v-if="
              !loadeingTickets &&
              sortedTickets.length == 0 &&
              faildTickets.length == 0
            "
            class="grey--text text--darken-2 my-12"
          >
            متاسفانه هیچ بلیط فعالی وجود ندارد!
          </h3>
        </v-row>
        <ticket-card
          :rezervStepParent="rezervStepParent"
          :chooseStep="rezervStep"
          @firstChoosed="firstChoosed($event)"
          @nextChoosed="nextChoosed($event)"
          :Passenger="Passenger"
          @showDetailes="showDetailes($event)"
          :isMainPage="true"
          :tickets="sortedTickets"
        />
        <ticket-card
          :chooseStep="rezervStep"
          v-show="loadeingTickets == false && !hideFeild"
          :isMainPage="true"
          :tickets="faildTickets"
          :isFaild="true"
        />
      </div>
    </v-row>
    <ticket-dialog-component
      :charterToken="charterToken"
      @openLogin="openLogin()"
      :Passenger="Passenger"
      :choosedTicket="allChoosedTickets"
      :tickets="allChoosedTickets"
      @unahutorize="getToken()"
      v-if="nextPage"
      @changeTicket="
        changeTicket($event);
        nextPage = false;
      "
    />
  </div>
</template>

<script>
import "@/assets/css/main.css";
import axios from "axios";
import TicketCard from "@/components/TicketCard.vue";
import TicketDialogComponent from "./TicketDialogComponent.vue";
axios.defaults.headers.common["Client-Token"] = "Ahuan-Wapi?123";

export default {
  data() {
    return {
      charterToken: "",
      ticket: [],
      step: 0,
      nextPage: false,
      faildTickets: [],
      sortedTickets: [],
      ticketChoosed: [],
      rezervStep: 1,
      allChoosedTickets: [],
      rt: true,
      stepunahutorize: 1,
      thehourDuration: 0,
      theMinuteDuration: 0,
    };
  },
  name: "ticket-component",
  components: {
    TicketCard,
    TicketDialogComponent,
  },
  props: [
    "originCity",
    "destinationInternal",
    "dayName",
    "date1",
    "sortTab",
    "tickets",
    "hideFeild",
    "Passenger",
    "loadeingTickets",
    "rezervStepParent",
    "setFirstDate",
  ],
  watch: {
    async rezervStepParent() {
      this.rezervStep = 1;
      this.allChoosedTickets[0] = undefined;
      this.allChoosedTickets[1] = undefined;
    },
    async sortTab() {
      await this.sortTickets(this.sortTab);
    },
    tickets() {
      this.sortedTickets = this.tickets;
    },
    async $route(to, from) {
      this.ticket = [];
      this.faildTickets = [];
      this.sortedTickets = [];
      if (this.$route.query.path) {
        await this.setCharterToken();
        this.checkAsync();
      }
    },
    rezervStep() {
      this.ticket = [];
      this.faildTickets = [];
      this.sortedTickets = [];
    },
    dayName() {
      if (this.dayName.day1 != undefined) {
        // this.checkAsync()
      }
      //
    },
  },
  computed: {},
  methods: {
    setCharterToken() {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + this.charterToken;
    },
    async getFlightsCh724(proxy, AirLine) {
      return new Promise((resolve) => {
        let self = this;
        let params = {
          from_flight:
            this.rezervStep == 2
              ? self.$route.query.to
              : self.$route.query.from,
          to_flight:
            this.rezervStep == 2
              ? self.$route.query.from
              : self.$route.query.to,
          date_flight:
            this.rezervStep == 2
              ? self.$route.query.end
              : self.$route.query.start,
        };

        axios
          .post("https://panel.ahuantours.com/api/Ch724/Available", params)
          .then(function (response) {
            let result = response.data.data;
            let chrObjectpush = [];
            for (let i = 0; i < result.length; i++) {
              let findpersianname =
                result[i].iatA_code == "I3"
                  ? "آتا"
                  : result[i].iatA_code == "Y9"
                  ? "کیش‌ایر"
                  : result[i].iatA_code == "QB"
                  ? "قشم‌ایر"
                  : result[i].iatA_code == "HH"
                  ? "تابان"
                  : result[i].iatA_code == "EP"
                  ? "آسمان"
                  : result[i].iatA_code == "ZV"
                  ? "زاگرس"
                  : result[i].iatA_code == "NV"
                  ? "نفت"
                  : result[i].iatA_code == "JI"
                  ? "معراج"
                  : result[i].iatA_code == "FP"
                  ? "فلای‌پرشیا"
                  : result[i].iatA_code == "VR"
                  ? "وارش"
                  : result[i].iatA_code == "IV"
                  ? "کاسپین"
                  : result[i].iatA_code == "IRZ"
                  ? "ساها"
                  : result[i].iatA_code == "sa"
                  ? "ساها"
                  : result[i].iatA_code == "IS"
                  ? "سپهران"
                  : result[i].iatA_code == "A1"
                  ? "اروان"
                  : result[i].iatA_code == "RI"
                  ? "چابهار"
                  : result[i].iatA_code == "W5"
                  ? "ماهان"
                  : result[i].iatA_code == "IR"
                  ? "ایران‌ایر"
                  : result[i].iatA_code == "PA"
                  ? "پارس‌ایر"
                  : result[i].iatA_code == "PY"
                  ? "پویا‌ایر"
                  : result[i].iatA_code == "B9"
                  ? "ایرتور"
                  : result[i].iatA_code == "A7"
                  ? "آساجت"
                  : "";
              let finalPrice = result[i].price_final;
              let chrObject = {
                ticketType: result[i].type == "system" ? "s" : "ch",
                chrAirline: result[i].airline,
                className: result[i].cabinclass ? result[i].cabinclass : "-",
                price: finalPrice,
                ajency_online_ID: result[i].ajency_online_ID,
                fare: {
                  AdultTotalPrice: finalPrice,
                  InfantTotalPrice: Math.round((finalPrice / 100) * 15),
                  EligibilityText: "",
                  CRCNRules: "",
                  ChildTaxes: "",
                  InfantFare: Math.round((finalPrice / 100) * 15),
                  AdultTaxes: "",
                  BaggageAllowanceWeight: "20 KG",
                  ChildFare: Math.round((finalPrice / 100) * 70),
                  BaggageAllowancePieces: "1 PS",
                  AdultFare: finalPrice,
                  InfantTaxes: "",
                  ChildTotalPrice: Math.round((finalPrice / 100) * 70),
                },
                capacity:
                  result[i].capacity == 0
                    ? "C"
                    : result[i].capacity == 9
                    ? "A"
                    : result[i].capacity,
                longDate1: new Date(result[i].date_flight).toLocaleDateString(
                  "fa-IR",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                ),
                longDateTime1: new Date(
                  result[i].date_flight
                ).toLocaleDateString("fa-IR"),
                longDate2: new Date(result[i].date_flight).toLocaleDateString(
                  "fa-IR",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                ),
                enLongDate1: new Date(result[i].date_flight).toLocaleDateString(
                  "en",
                  {
                    day: "numeric",
                    month: "long",
                  }
                ),
                enLongDate2: new Date(result[i].date_flight).toLocaleDateString(
                  "en",
                  {
                    day: "numeric",
                    month: "long",
                  }
                ),
                reserveType: "Chr724",
                Origin: result[i].from,
                Destination: result[i].to,
                AdultTotalPrices: result[i].price_final,
                OperatingFlightNo: result[i].number_flight.replace(
                  result[i].iatA_code,
                  ""
                ),
                number_flight: result[i].number_flight,
                Airline:
                  result[i].iatA_code == "sa" ? "IRZ" : result[i].iatA_code,
                ClassesStatus: "",
                FlightNo: result[i].number_flight.replace(
                  result[i].iatA_code,
                  ""
                ),
                Transit: false,
                type_flight: result[i].type_flight,
                ClassRefundStatus: "",
                CurrencyCode: "IRR",
                DepartureDateTime: result[i].date_flight,
                ArrivalDateTime:
                  result[i].date_flight + " " + result[i].time_flight,
                OperatingAirline:
                  result[i].iatA_code == "sa" ? "IRZ" : result[i].iatA_code,
                AircraftTypeName: result[i].carrier,
                AircraftTypeCode: result[i].carrier,
                AirlinePersianId: findpersianname,
                DepartureTime: result[i].time_flight.substring(0, 5),
                proxy: result[i].airline,
                ArrivalDate: result[i].date_flight,
                ArrivalTime: self.setDuration(
                  result[i].time_flight.substring(0, 5)
                ),
                originCity: self.originCity.text,
                airport1: self.originCity.airport,
                destinationInternal: self.destinationInternal.text,
                airport2: self.destinationInternal.airport,
                dayName: self.dayName,
                fromDate: new Date(result[i].date_flight).toLocaleDateString(
                  "fa-IR",
                  { day: "numeric", month: "long" }
                ),
                endDate: new Date(result[i].date_flight).toLocaleDateString(
                  "fa-IR",
                  { day: "numeric", month: "long" }
                ),
                type:
                  result[i].capacity == 0
                    ? "C"
                    : result[i].capacity == 9
                    ? "A"
                    : result[i].capacity,
                timeFirst: 7,
              };
              chrObjectpush.push(chrObject);
              self.pushToTicket(
                chrObject,
                result[i].capacity == 0
                  ? "C"
                  : result[i].capacity == 9
                  ? "A"
                  : result[i].capacity
              );
            }
            resolve();
            // let getDataAvailabel = response.data.AvailableFlights;
            // if (getDataAvailabel) {
            //   for (let i = 0; i < getDataAvailabel.length; i++) {
            //     getDataAvailabel[i].Airline =
            //       getDataAvailabel[i].Airline == "J1"
            //         ? "JI"
            //         : getDataAvailabel[i].Airline;
            //     getDataAvailabel[i].AirlinePersianId =
            //       getDataAvailabel[i].Airline == "I3"
            //         ? "آتا"
            //         : getDataAvailabel[i].Airline == "Y9"
            //         ? "کیش‌ایر"
            //         : getDataAvailabel[i].Airline == "QB"
            //         ? "قشم‌ایر"
            //         : getDataAvailabel[i].Airline == "HH"
            //         ? "تابان"
            //         : getDataAvailabel[i].Airline == "EP"
            //         ? "آسمان"
            //         : getDataAvailabel[i].Airline == "ZV"
            //         ? "زاگرس"
            //         : getDataAvailabel[i].Airline == "NV"
            //         ? "نفت"
            //         : getDataAvailabel[i].Airline == "JI"
            //         ? "معراج"
            //         : getDataAvailabel[i].Airline == "FP"
            //         ? "فلای‌پرشیا"
            //         : getDataAvailabel[i].Airline == "VR"
            //         ? "وارش"
            //         : getDataAvailabel[i].Airline == "IV"
            //         ? "کاسپین"
            //         : getDataAvailabel[i].Airline == "IRZ"
            //         ? "ساها"
            //         : "";
            //     // getDataAvailabel[i].Airline =
            //     let DepartureDateTime =
            //       getDataAvailabel[i].DepartureDateTime.split(" ");
            //     let DepartureTime = DepartureDateTime[1].split(":");
            //     getDataAvailabel[i].DepartureDateTime = DepartureDateTime[0];
            //     getDataAvailabel[i].OfficeUser = OfficeUser;
            //     getDataAvailabel[i].DepartureTime =
            //       DepartureTime[0] + ":" + DepartureTime[1];
            //     getDataAvailabel[i].proxy = proxy;
            //     //
            //     let ArrivalDateTime =
            //       getDataAvailabel[i].ArrivalDateTime.split(" ");
            //     let ArrivalTime = ArrivalDateTime[1].split(":");
            //     getDataAvailabel[i].ArrivalDate = ArrivalDateTime[0];
            //     getDataAvailabel[i].ArrivalTime =
            //       ArrivalTime[0] + ":" + ArrivalTime[1];
            //     //
            //     getDataAvailabel[i].originCity =
            //       // "UGT";
            //       self.originCity.text;
            //     getDataAvailabel[i].airport1 =
            //       // "UGT";
            //       self.originCity.airport;
            //     getDataAvailabel[i].destinationInternal =
            //       // "TTQ";
            //       self.destinationInternal.text;
            //     getDataAvailabel[i].airport2 =
            //       // "TTQ";
            //       self.destinationInternal.airport;
            //     getDataAvailabel[i].dayName = self.dayName;
            //     let options = { day: "numeric", month: "long" };
            //     getDataAvailabel[i].fromDate = new Date(
            //       self.date1.length == 2 ? self.date1[0] : self.date1
            //     ).toLocaleDateString("fa-IR", options);
            //     getDataAvailabel[i].endDate = new Date(
            //       self.date1.length == 2 ? self.date1[1] : self.date1
            //     ).toLocaleDateString("fa-IR", options);
            //   }
            //   let resultObjec = {
            //     getDataAvailabel: getDataAvailabel,
            //     OfficeUser: OfficeUser,
            //     OfficePass: OfficePass,
            //     proxy: proxy,
            //   };
            //   resolve(resultObjec);
            // } else {
            //   self.checkAsync(
            //     proxy,
            //     AirLine,
            //     OfficeUser,
            //     OfficePass,
            //     stepFunction
            //   );
            // }
          })
          .catch(function (error) {
            // handle error
            let errorText = "error";
            if (error.response && error.response.status == 401) {
              // self.getToken();
              // self.stepunahutorize = 2;
            } else {
              resolve();
              if (error.response && error.response.status == 403) {
                errorText = "سطح دسترسی این وب سرویس برای شما محدودیت دارد.";
                self.getToken();
              } else if (error.response && error.response.status == 400) {
                errorText = "bad quest";
              } else {
                //
              }
            }

            self.alertText = errorText;
            self.alertType = "error";
            self.showAlert = true;
            setTimeout(() => {
              self.showAlert = false;
            }, 3000);
            console.log(error);
            console.log('وب سرویس "' + proxy + '" کار نمیکند');
          });
      });
    },
    async getFlights(proxy, AirLine, OfficeUser, OfficePass, stepFunction) {
      return new Promise((resolve) => {
        let self = this;
        let params = {
          AirLine: AirLine,
          cbSource:
            this.rezervStep == 2
              ? self.$route.query.to
              : self.$route.query.from,
          cbTarget:
            this.rezervStep == 2
              ? self.$route.query.from
              : self.$route.query.to,
          DepartureDate:
            this.rezervStep == 2
              ? self.$route.query.end
              : self.$route.query.start,
          cbAdultQty: self.$route.query.adl,
          cbChildQty: self.$route.query.chd,
          cbInfantQty: self.$route.query.inf,
          cbDay1: 0,
          cbMonth1: 0,

          // OfficeUser: OfficeUser,
          // OfficePass: OfficePass,
        };

        axios
          .get("https://panel.ahuantours.com/api/Nira/Availability", {
            params,
          })
          .then(function (response) {
            let getDataAvailabel = response.data.AvailableFlights;

            if (getDataAvailabel) {
              for (let i = 0; i < getDataAvailabel.length; i++) {
                getDataAvailabel[i].Airline =
                  getDataAvailabel[i].Airline == "J1"
                    ? "JI"
                    : getDataAvailabel[i].Airline;
                getDataAvailabel[i].AirlinePersianId =
                  getDataAvailabel[i].Airline == "I3"
                    ? "آتا"
                    : getDataAvailabel[i].Airline == "Y9"
                    ? "کیش‌ایر"
                    : getDataAvailabel[i].Airline == "QB"
                    ? "قشم‌ایر"
                    : getDataAvailabel[i].Airline == "HH"
                    ? "تابان"
                    : getDataAvailabel[i].Airline == "EP"
                    ? "آسمان"
                    : getDataAvailabel[i].Airline == "ZV"
                    ? "زاگرس"
                    : getDataAvailabel[i].Airline == "NV"
                    ? "نفت"
                    : getDataAvailabel[i].Airline == "JI"
                    ? "معراج"
                    : getDataAvailabel[i].Airline == "FP"
                    ? "فلای‌پرشیا"
                    : getDataAvailabel[i].Airline == "VR"
                    ? "وارش"
                    : getDataAvailabel[i].Airline == "IV"
                    ? "کاسپین"
                    : getDataAvailabel[i].Airline == "IRZ"
                    ? "ساها"
                    : getDataAvailabel[i].Airline == "sa"
                    ? "ساها"
                    : getDataAvailabel[i].Airline == "IS"
                    ? "سپهران"
                    : getDataAvailabel[i].Airline == "A1"
                    ? "اروان"
                    : getDataAvailabel[i].Airline == "RI"
                    ? "چابهار"
                    : getDataAvailabel[i].Airline == "W5"
                    ? "ماهان"
                    : getDataAvailabel[i].Airline == "IR"
                    ? "ایران‌ایر"
                    : getDataAvailabel[i].Airline == "PA"
                    ? "پارس‌ایر"
                    : getDataAvailabel[i].Airline == "PY"
                    ? "پویاایر"
                    : getDataAvailabel[i].Airline == "B9"
                    ? "ایرتور"
                    : getDataAvailabel[i].Airline == "A7"
                    ? "آساجت"
                    : "";
                // getDataAvailabel[i].Airline =
                let DepartureDateTime =
                  getDataAvailabel[i].DepartureDateTime.split(" ");
                let DepartureTime = DepartureDateTime[1].split(":");
                getDataAvailabel[i].DepartureDateTime = DepartureDateTime[0];
                getDataAvailabel[i].OfficeUser = OfficeUser;
                getDataAvailabel[i].DepartureTime =
                  DepartureTime[0] + ":" + DepartureTime[1];
                getDataAvailabel[i].proxy = proxy;
                //
                let ArrivalDateTime =
                  getDataAvailabel[i].ArrivalDateTime.split(" ");
                let ArrivalTime = ArrivalDateTime[1].split(":");
                getDataAvailabel[i].ArrivalDate = ArrivalDateTime[0];
                getDataAvailabel[i].ArrivalTime =
                  ArrivalTime[0] + ":" + ArrivalTime[1];
                getDataAvailabel[i].type_flight = "Economy";
                //
                getDataAvailabel[i].originCity =
                  // "UGT";
                  self.originCity.text;
                getDataAvailabel[i].airport1 =
                  // "UGT";
                  self.originCity.airport;
                getDataAvailabel[i].destinationInternal =
                  // "TTQ";
                  self.destinationInternal.text;
                getDataAvailabel[i].airport2 =
                  // "TTQ";
                  self.destinationInternal.airport;
                getDataAvailabel[i].dayName = self.dayName;
                let options = { day: "numeric", month: "long" };
                getDataAvailabel[i].fromDate = new Date(
                  self.date1.length == 2 ? self.date1[0] : self.date1
                ).toLocaleDateString("fa-IR", options);
                getDataAvailabel[i].endDate = new Date(
                  self.date1.length == 2 ? self.date1[1] : self.date1
                ).toLocaleDateString("fa-IR", options);
              }
              let resultObjec = {
                getDataAvailabel: getDataAvailabel,
                OfficeUser: OfficeUser,
                OfficePass: OfficePass,
                proxy: proxy,
              };
              resolve(resultObjec);
            } else {
              self.setCharterToken();
              self.checkAsync(
                proxy,
                AirLine,
                OfficeUser,
                OfficePass,
                stepFunction
              );
            }
          })
          .catch(function (error) {
            // handle error
            let errorText = "error";
            if (error.response && error.response.status == 401) {
              // self.getToken();
              // self.stepunahutorize = 2;
            } else {
              resolve();
              if (error.response && error.response.status == 403) {
                // errorText = "سطح دسترسی این وب سرویس برای شما محدودیت دارد.";
                self.getToken();
              } else if (error.response && error.response.status == 400) {
                errorText = "bad quest";
              } else if (error.response && error.response.status == 401) {
                // self.getToken();
                // self.stepunahutorize = 2;
              } else {
                //
              }
            }

            self.alertText = errorText;
            self.alertType = "error";
            self.showAlert = true;
            setTimeout(() => {
              self.showAlert = false;
            }, 3000);
            console.log(error);
            console.log('وب سرویس "' + proxy + '" کار نمیکند');
          });
      });
    },
    async getPrice(dataGetVariabel) {
      let classes = dataGetVariabel.ClassesStatus.split(" ");
      let finishArray = [];
      for (let i = 0; i < classes.length; i++) {
        finishArray.push({
          name: classes[i],
        });
      }
      await this.fareAxios(dataGetVariabel, classes, finishArray);
    },
    async fareAxios(dataGetVariabel, classes, finishArray, sort, arraytest) {
      let self = this;
      let isClassC = false;
      let isClassX = false;
      let testFinishArray = finishArray;
      let getRote = dataGetVariabel.Origin + "-" + dataGetVariabel.Destination;
      if (arraytest) {
        //   //   for (let m = 0; m < arraytest.length; m++) {
        //   //     let type = arraytest[m].slice(-1);
        //   //     let num = testFinishArray.findIndex((x) => x.name == arraytest[m]);
        //   //     // dataGetVariabel.type = type;
        //   //     if (type == "X" || type == "C") {
        //   //       if (type == "X" && isClassX == false) {
        //   //         dataGetVariabel.type = type;
        //   //         isClassX = true;
        //   //         self.pushToTicket(dataGetVariabel, type);
        //   //       }
        //   //       if (type == "C" && isClassC == false) {
        //   //         dataGetVariabel.type = type;
        //   //         isClassC = true;
        //   //         self.pushToTicket(dataGetVariabel, type);
        //   //       }
        //   //       self.testFinishArray2.push({
        //   //         name: testFinishArray[num].name,
        //   //         type: "Next - X or C",
        //   //         objectValue: dataGetVariabel,
        //   //         type2: type,
        //   //       });
        //   //     } else {
        //   //       isClassC = true;
        //   //       isClassX = true;
        //   //       let newType =
        //   //         arraytest[m].slice(0, 1) == "/"
        //   //           ? arraytest[m].slice(1, arraytest[m].length - 1)
        //   //           : arraytest[m].slice(0, arraytest[m].length - 1);
        //   //       let params = {
        //   //         AirLine: dataGetVariabel.Airline,
        //   //         Route:
        //   //           self.rezervStep == 1
        //   //             ? self.originCity.id + "-" + self.destinationInternal.id
        //   //             : self.destinationInternal.id + "-" + self.originCity.id,
        //   //         RBD: newType,
        //   //         DepartureDate:
        //   //           self.rezervStep == 2
        //   //             ? self.$route.query.end
        //   //             : self.$route.query.start,
        //   //         FlightNo: dataGetVariabel.FlightNo,
        //   //       };
        //   //       let dataGetVariabel2 = dataGetVariabel;
        //   //       axios
        //   //         .get("https://panel.ahuantours.com/api/Nira/Fare", { params })
        //   //         .then(function (response) {
        //   //           if (response.dataGetVariabel && response.dataGetVariabel.AdultTotalPrice != 0) {
        //   //             dataGetVariabel2.ticketType = "s";
        //   //             dataGetVariabel2.className = newType;
        //   //             dataGetVariabel2.price = Number(response.dataGetVariabel.AdultTotalPrice);
        //   //             dataGetVariabel2.fare = response.dataGetVariabel;
        //   //             dataGetVariabel2.capacity = Number(arraytest[m].slice(-1))
        //   //               ? arraytest[m].slice(-1)
        //   //               : type;
        //   //             dataGetVariabel2.longDate1 = new Date(
        //   //               dataGetVariabel.DepartureDateTime
        //   //             ).toLocaleDateString("fa-IR", {
        //   //               day: "numeric",
        //   //               month: "long",
        //   //               year: "numeric",
        //   //             });
        //   //             dataGetVariabel2.longDateTime1 = new Date(
        //   //               dataGetVariabel.DepartureDateTime
        //   //             ).toLocaleDateString("fa-IR");
        //   //             dataGetVariabel2.longDate2 = new Date(
        //   //               dataGetVariabel.ArrivalDate
        //   //             ).toLocaleDateString("fa-IR", {
        //   //               day: "numeric",
        //   //               month: "long",
        //   //               year: "numeric",
        //   //             });
        //   //             dataGetVariabel2.enLongDate1 = new Date(
        //   //               dataGetVariabel.DepartureDateTime
        //   //             ).toLocaleDateString("en", {
        //   //               day: "numeric",
        //   //               month: "long",
        //   //             });
        //   //             dataGetVariabel2.enLongDate2 = new Date(
        //   //               dataGetVariabel.ArrivalDate
        //   //             ).toLocaleDateString("en", {
        //   //               day: "numeric",
        //   //               month: "long",
        //   //             });
        //   //             self.pushToTicket(dataGetVariabel2, type, sort);
        //   //           }
        //   //           self.testFinishArray2.push({
        //   //             name: testFinishArray[num].name,
        //   //             type: "Next - success response",
        //   //             objectValue: dataGetVariabel,
        //   //             type2: type,
        //   //           });
        //   //         })
        //   //         .catch(function (error) {
        //   //           // handle error
        //   //           console.log(error);
        //   //           self.testFinishArray2.push({
        //   //             name: testFinishArray[num].name,
        //   //             type: "Next - error response",
        //   //             objectValue: dataGetVariabel,
        //   //             type2: type,
        //   //           });
        //   //           let errorText = "";
        //   //           if (error.response.status == 403) {
        //   //             errorText =
        //   //               "سطح دسترسی این وب سرویس برای شما محدودیت دارد.";
        //   //           } else if (error.response.status == 400) {
        //   //             errorText = "bad quest";
        //   //           } else if (error.response.status == 401) {
        //   //             self.getToken();
        //   //           }
        //   //           self.alertText = errorText;
        //   //           self.alertType = "error";
        //   //           self.showAlert = true;
        //   //           setTimeout(() => {
        //   //             self.showAlert = false;
        //   //           }, 3000);
        //   //         });
        //   //     }
        //   //   }
      } else {
        for (let m = 0; m < classes.length; m++) {
          let num = testFinishArray.findIndex((x) => x.name == classes[m]);
          let type = classes[m].slice(-1);
          if (type == "X" || type == "C") {
            if (type == "X" && isClassX == false) {
              dataGetVariabel.type = type;
              isClassX = true;
              self.pushToTicket(dataGetVariabel, type);
            }
            if (type == "C" && isClassC == false) {
              dataGetVariabel.type = type;
              isClassC = true;
              self.pushToTicket(dataGetVariabel, type);
            }
          } else {
            isClassC = true;
            isClassX = true;
            let newType =
              classes[m].slice(0, 1) == "/"
                ? classes[m].slice(1, classes[m].length - 1)
                : classes[m].slice(0, classes[m].length - 1);
            let params = {
              AirLine: dataGetVariabel.Airline,
              Route: getRote,
              RBD: newType,
              DepartureDate:
                self.rezervStep == 2
                  ? self.$route.query.end
                  : self.$route.query.start,
              FlightNo: dataGetVariabel.FlightNo,
            };
            await self.fareAxios2(
              params,
              classes[m],
              type,
              dataGetVariabel.DepartureDateTime,
              newType,
              dataGetVariabel.ArrivalDate,
              dataGetVariabel
            );
          }
        }
      }
    },
    async fareAxios2(
      params,
      className,
      type,
      DepartureDateTime,
      newType,
      ArrivalDate,
      dataGetVariabel
    ) {
      return new Promise((resolve) => {
        let self = this;
        let returnObject = {};
        let newDataGet = {};
        axios
          .get("https://panel.ahuantours.com/api/Nira/Fare", { params })
          .then(function (response) {
            if (response.data && response.data.AdultTotalPrice >= 0) {
              returnObject = {
                ticketType: "s",
                className: newType,
                price: Number(response.data.AdultTotalPrice),
                fare: response.data,
                capacity: Number(className.slice(-1))
                  ? className.slice(-1)
                  : type,
                longDate1: new Date(DepartureDateTime).toLocaleDateString(
                  "fa-IR",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                ),
                longDateTime1: new Date(DepartureDateTime).toLocaleDateString(
                  "fa-IR"
                ),
                longDate2: new Date(ArrivalDate).toLocaleDateString("fa-IR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }),
                enLongDate1: new Date(DepartureDateTime).toLocaleDateString(
                  "en",
                  {
                    day: "numeric",
                    month: "long",
                  }
                ),
                enLongDate2: new Date(ArrivalDate).toLocaleDateString("en", {
                  day: "numeric",
                  month: "long",
                }),
                reserveType: "Nira",
              };
              newDataGet = dataGetVariabel;
              returnObject = Object.assign(returnObject, newDataGet);
              self.pushToTicket(returnObject, type);
            } else {
              // let arraytest = [classes[m]];
              // self.fareAxios(
              //   dataGetVariabel,
              //   classes,
              //   finishArray,
              //   "sort",
              //   arraytest
              // );
            }
            resolve();
          })
          .catch(function (error) {
            // handle error
            console.log(error);
            let errorText = "";
            if (error.response.status == 403) {
              // errorText = "سطح دسترسی این وب سرویس برای شما محدودیت دارد.";
              self.getToken();
            } else if (error.response.status == 400) {
              errorText = "bad quest";
            } else if (error.response.status == 401) {
              // self.getToken();
              // self.stepunahutorize = 2;
            }
            self.alertText = errorText;
            self.alertType = "error";
            self.showAlert = true;
            setTimeout(() => {
              self.showAlert = false;
            }, 3000);
            resolve();
          });
      });
    },
    pushToTicket(object, type, sort) {
      return new Promise((resolve) => {
        let testobject = object;
        if (type == "C" || type == "X") {
          let wasBefore = false;
          for (let i = 0; i < this.faildTickets.length; i++) {
            if (this.faildTickets[i].FlightNo == object.FlightNo) {
              wasBefore = true;
            }
          }
          if (wasBefore == false) {
            this.faildTickets.push(testobject);
          }
          resolve();
        } else if (type != "C" && type != "X") {
          let indexNumber = this.faildTickets.findIndex(
            (x) => x.FlightNo == testobject.FlightNo
          );
          if (indexNumber != -1) {
            this.faildTickets.splice(indexNumber, 1);
          }
          let testobject2 = { type: type };

          let wasBefore = false;
          for (let i = 0; i < this.ticket.length; i++) {
            if (
              this.ticket[i].Airline == object.Airline &&
              this.ticket[i].FlightNo == object.FlightNo
            ) {
              // console.log(this.ticket[i].price, object.price);
            }

            if (
              this.ticket[i].Airline == object.Airline &&
              this.ticket[i].FlightNo == object.FlightNo &&
              this.ticket[i].price == object.price
            ) {
              wasBefore = true;
            }
          }
          if (wasBefore == false) {
            this.ticket.push(Object.assign(testobject, testobject2));
          }

          resolve();
        }
        // console.log(this.ticket);
        // for (let i = 0; i < this.faildTickets.length; i++) {
        //   console.log("faildTickets", this.faildTickets[i].className);
        // }
        // for (let i = 0; i < this.ticket.length; i++) {
        // }
      });
    },
    async sortTickets(tab) {
      if (this.ticket.length > 0) {
        if (tab == 0) {
          this.ticket = this.ticket.sort((a, b) => {
            return a.price - b.price;
          });
          let info = {
            minPrice: Math.floor(this.ticket[0].price / 1000000) * 1000000,
            maxPrice:
              Math.ceil(this.ticket[this.ticket.length - 1].price / 1000000) *
              1000000,
          };
          this.$emit("minMaxPrice", info);
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
        let self = this;
        switch (tab) {
          case 0:
            self.sortedTickets = await self.ticket.sort((a, b) => {
              return a.price - b.price;
            });
            break;
          case 1:
            self.sortedTickets = await self.ticket.sort((a, b) => {
              if (a.DepartureTime < b.DepartureTime) return -1;
              if (a.DepartureTime > b.DepartureTime) return 1;
              return 0;
            });
            break;
          case 2:
            self.sortedTickets = await self.ticket.sort((a, b) => {
              if (a.AirlinePersianId < b.AirlinePersianId) return -1;
              if (a.AirlinePersianId > b.AirlinePersianId) return 1;
              return 0;
            });
            break;
          default:
            break;
        }
        // this.$emit('sendSortedTickets', sortedTickets)
      }
    },
    getDurationTime(DepartureTime, ArrivalTime) {
      return new Promise((resolve) => {
        let firstMinutes = DepartureTime.split(":");
        let nextMinutes = ArrivalTime.split(":");
        let theMinute = 0;
        let thehour = 0;
        for (let i = 0; i < 60; i++) {
          if (parseInt(firstMinutes[1]) + i > parseInt(nextMinutes[1])) {
            nextMinutes[1] = parseInt(nextMinutes[1]) + 60;
          }
          if (parseInt(firstMinutes[1]) + i == parseInt(nextMinutes[1])) {
            theMinute = i;
          }
        }
        for (let i = 0; i < 24; i++) {
          if (parseInt(firstMinutes[0]) + i > parseInt(nextMinutes[0])) {
            nextMinutes[0] = parseInt(nextMinutes[0]) + 24;
          }
          if (parseInt(firstMinutes[0]) + i == parseInt(nextMinutes[0])) {
            thehour = i;
          }
        }
        this.thehourDuration = thehour;
        this.theMinuteDuration = theMinute;
        // console.log(thehour, theMinute);___________________________find!!!
        console.log(thehour, theMinute);
        resolve();
      });
    },
    setDuration(theTime) {
      let findTime = theTime.split(":");
      let findMinutes = parseInt(findTime[1]) + this.theMinuteDuration;
      let fidhours = parseInt(findTime[0]) + this.thehourDuration;
      if (findMinutes > 59) {
        findMinutes = findMinutes - 60;
        fidhours = fidhours + 1;
      }
      if (fidhours > 23) {
        fidhours = fidhours - 24;
      }
      if (String(fidhours).length == 1) {
        fidhours = "0" + fidhours;
      }
      if (String(findMinutes).length == 1) {
        findMinutes = "0" + findMinutes;
      }
      let hour = fidhours + ":" + findMinutes;
      return hour;
    },
    async checkAsync(proxy, AirLine, OfficeUser, OfficePass, step) {
      this.$emit("changeTicket");
      let self = this;
      self.stepFunction = step ? step : 0;
      async function asyncCall(airline, airlineCode, user, pass) {
        let result = await self.getFlights(
          airline,
          airlineCode,
          user,
          pass,
          self.stepFunction
        );
        if (result && result.getDataAvailabel) {
          for (let i = 0; i < result.getDataAvailabel.length; i++) {
            let theVariabelToSendData = result.getDataAvailabel[i];
            if (theVariabelToSendData.ClassesStatus.length) {
              await self.getPrice(theVariabelToSendData);
            }
          }
        }
        self.stepFunction = self.stepFunction + 1;
        if (self.stepFunction >= 11 || proxy) {
          asyncCallCh724();
        }
      }
      async function asyncCallCh724(airline, airlineCode) {
        if (self.ticket[0]) {
          await self.getDurationTime(
            self.ticket[0].DepartureTime,
            self.ticket[0].ArrivalTime
          );
        } else {
          self.thehourDuration = 0;
          self.theMinuteDuration = 0;
        }
        await self.getFlightsCh724(airline, airlineCode);
        await self.sortTickets(self.sortTab);
        self.$emit("allTickets", self.ticket);
        // if (result && result.getDataAvailabel) {
        //   for (let i = 0; i < result.getDataAvailabel.length; i++) {
        //     let theVariabelToSendData = result.getDataAvailabel[i];
        //     if (theVariabelToSendData.ClassesStatus.length) {
        //       await self.getPrice(theVariabelToSendData);
        //     }
        //   }
        // }
        // self.stepFunction = self.stepFunction + 1;
        // if (self.stepFunction >= 11 || proxy) {
        //   await self.sortTickets(self.sortTab);
        //   self.$emit("allTickets", self.ticket);
        // }
      }
      // I_IssuedBYCountry_NationalId_BirthDayCountry_BirthDay_Gender_Expiredate_LastName_FirstName
      // I_IRN_0890347451_IRN_28DEY73_F_٢٨DEY73_TEST_TEST
      // P__0440518245__21Sep95_F___
      // I__0890347451__28DEY73_F___

      if (proxy) {
        asyncCall(proxy, AirLine, OfficeUser, OfficePass);
      } else {
        asyncCall("ata", "I3", "THR155.WS", "Ahuan1348");
        asyncCall("kishair", "Y9", "THR100.WS", "Ahuan1348");
        asyncCall("qeshmair", "QB", "THR166.WS", "Ahuan1348");
        asyncCall("taban", "HH", "THR168.WS", "Ahuan1348");
        asyncCall("aseman", "EP", "THR100.WS", "Ahuan1348");
        asyncCall("zagros", "ZV", "THR197.WS", "Ahuan1348");
        asyncCall("naft", "NV", "THR100.WS", "Ahuan1348");
        // asyncCall("meraj", "JI", "THR158.WS", "THR158AH");
        asyncCall("varesh", "VR", "THR215.WS", "A2930");
        asyncCall("saha", "IRZ", "THR140.WS", "123456789");
        asyncCall("flyPersia", "FP", "THR106.WS", "123456789");
        asyncCall("caspian", "IV", "THR100.WS", "Ahuan1348");
      }
      // https://panel.ahuantours.com/api/Nira/GetReserve?
      // AirLine=IV&cbSource=UGT&cbTarget=TTQ&FlightClass=G&FlightNo=1000&Day=17&Month=10&DepartureDate=2023-10-17&No=2
      // &edtContact=09054791374%7Cparisaghasemi1402%40gmail.com
      // &PassengersInfo=%26edtName1%3Dparisa%26edtLast1%3Dghasemi%26edtAge1%3D28%26edtID1%3DP__0440518245__21Sep95_F___edtName2%3Dmahdi%26edtLast2%3Dghasemiyan%26edtAge2%3D0%26edtID2%3DP__0440518255__15Sep23_M___
      // &edtName1=parisa&edtLast1=ghasemi&edtAge1=28&edtID1=P__0440518245__21Sep95_F___edtName2=mahdi&edtLast2=ghasemiyan&edtAge2=0&edtID2=P__0440518255__15Sep23_M___
    },
    showDetailes(event) {
      this.ticketChoosed = [];
      this.ticketChoosed.push(event);
      this.allChoosedTickets = this.ticketChoosed;
      this.nextPage = true;
    },
    firstChoosed(event) {
      this.allChoosedTickets[0] = event;
      if (this.allChoosedTickets[1] != undefined) {
        this.$emit("nextChoosed", event);
        this.nextPage = true;
      } else {
        this.rezervStep = 2;
        //
        this.$emit("firstChoosed", event);
        let query = this.$route.query;
        this.$router.push({
          path: this.$route.path,
          query: { ...query, rt: !this.rt },
        });
      }
    },
    nextChoosed(event) {
      this.$emit("nextChoosed", event);
      this.allChoosedTickets[1] = event;
      this.nextPage = true;
    },
    changeTicket(event) {
      if (this.rezervStep != event + 1) {
        this.rezervStep = event + 1;
        self.setCharterToken();
        this.checkAsync();
      }
      this.$emit("changeTicket", this.rezervStep);
    },
    getToken() {
      return new Promise((resolve) => {
        if (this.stepunahutorize == 1) {
          self.stepunahutorize = 2;
          setTimeout(() => {
            let self = this;
            axios
              .get("https://panel.ahuantours.com/api/Login")
              .then(function (response) {
                // handle success
                resolve(response.data.token);
                localStorage.setItem("charterToken", response.data.token);
                // localStorage.setItem("Client-Token", response.data.token);
                setTimeout(() => {
                  if (self.$route.query.path) {
                    self.setCharterToken();
                    self.checkAsync();
                  }
                  setTimeout(() => {
                    self.stepunahutorize = 1;
                  }, 10000);
                }, 1000);
                resolve();
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              });
          }, 1000);
        }
      });
    },
    openLogin() {
      this.$emit("openLogin");
    },
  },
  async mounted() {
    this.charterToken = await this.getToken();
    localStorage.setItem("charterToken", this.charterToken);
    this.setCharterToken();
    setTimeout(() => {
      if (this.$route.query.path) {
        if (this.$route.query.rt != undefined) {
          this.$router.push({
            path: "/flight",
            query: {
              path: this.$route.query.path,
              from: this.$route.query.from,
              to: this.$route.query.to,
              start: this.$route.query.start,
              end: this.$route.query.end,
              adl: this.$route.query.adl,
              chd: this.$route.query.chd,
              inf: this.$route.query.inf,
              ex: this.$route.query.ex,
            },
          });
        } else {
          // this.checkAsync();
        }
      }
    }, 1000);

    this.rt = this.$route.query.rt && this.$route.query.rt;

    // this.getAllFlights()
    // if (this.dayNumber) {

    // }

    // setInterval(() => {
    // }, 1000);
  },
};
</script>
