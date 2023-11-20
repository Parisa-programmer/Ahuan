<template>
  <v-app>
    <v-container class="mt-12 pt-12">
      <v-row class="mt-12 pt-12">
        <v-col>
          <v-autocomplete
            v-model="selectedItem"
            :items="items"
            label="Select Item"
            @change="handleSelectionChange"
            ref="autocompleteRef"
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Focused After Selection"
            v-if="selectedItem"
            ref="inputRef"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selectedItem: null,
      items: ["Item 1", "Item 2", "Item 3"],
    };
  },
  methods: {
    handleSelectionChange() {
      // Focus on the input field after an item is selected
      this.$refs.inputRef.focus();
    },
    checkPenulty(id_faktor) {
      let self = this;
      axios
        .post("https://panel.ahuantours.com/api/Ch724/CheckPenalti", {
          id_faktor: id_faktor,
        })
        .then(function (res) {
          console.log(res);
          // data will be:
          // {
          //   result: "true",
          //   msg: "CheckPenalti",
          //   data: {
          //     success: "true",
          //     message: "",
          //     type: "System",
          //     note: "Percentage",
          //     penalti: 30,
          //     passengers: null,
          //   },
          // };
          // پاسخی از سمت chabahar دریافت نشد ولی بلیت شما قطعا کنسل گردیده (و دیگر قابل استفاده نیست !) لذا صرفا جهت برگشت پول مجددا تلاش نمایید یا با پشتیبانی تماس بگیرید.
          // کد خطا(-9)
          // a = {
          //   AirNRSRefund: [
          //     {
          //       Done: "-5000",
          //       Desc: "MANUAL PENALTY OVERRIDING DENIED Penalty:3558300 Calculated:8302700.00",
          //     },
          //   ],
          // };
          // self.cancellFlight(id_faktor, res.data.data.penalti);
        })
        .catch(function (error) {});
    },
    cancellFlight(id_faktor, penalti) {
      axios
        .post("https://panel.ahuantours.com/api/Ch724/CancelTicket", {
          id_faktor: id_faktor,
          penalti: penalti,
          listticketID: ["0441000104066"],
        })
        .then(function (res) {
          console.log(res);
          // data will be:
          // {
          //   result: "true",
          //   msg: "CheckPenalti",
          //   data: {
          //     success: "true",
          //     message: "",
          //     type: "System",
          //     note: "Percentage",
          //     penalti: 30,
          //     passengers: null,
          //   },
          // };
          self.cancellFlight(id_faktor);
        })
        .catch(function (error) {});
    },
    addToDatabase() {
      let variabelobject = {
        id: 12045,
        userName: "09054791374",
        issueDate: "2023-11-15",
        issueTime: "16:58",
        contractType: 0,
        contractingPartyType: 0,
        travelVehicle: "هواپیما",
        tour: false,
        ticket: true,
        hotel: false,
        visa: false,
        insurance: false,
        cruise: false,
        other: false,
        systemOrCharter: false,
        manualOrAutomatic: true,
        IpAddress: "0",
        taxType: 0,
        confirmStatus: "confirm",
        ticketStatus: "confirm",
        showDetail: false,
        contractPassengers: [
          {
            id: 0,
            contractId: 0,
            fName: "parisammmm",
            lName: "ghasemi",
            age: "ADL",
            gender: false,
            birthDate: "1995-09-20T19:30:00.000Z",
            retTicketPNR: "",
            description: "",
            passportNo: "0440518245",
            codeMelli: "0440518245",
            nationality: "ایرانی",
          },
        ],
        contractFlights: [
          {
            contractId: 0,
            pnr: "2564240",
            origin: "THR",
            destination: "MHD",
            flightClass: "-",
            airlineId: 489,
            date: "2023-11-20",
            time: "20:40",
            flightNumber: "ch5619",
            airplaneType: "Boeing MD",
            description: "",
          },
        ],
      };
      axios
        .put("https://panel.ahuantours.com/api/Contract/update", variabelobject)
        .then(function (response) {})
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    getInformations() {
      axios
        .get("https://panel.ahuantours.com/api/Contract/12048")
        .then(function (response) {})
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },
  created() {
    if (localStorage.getItem("Client-Token")) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("Client-Token");
      // this.checkPenulty("34072344");
      // this.addToDatabase();
      this.getInformations();
    }
  },
};
</script>