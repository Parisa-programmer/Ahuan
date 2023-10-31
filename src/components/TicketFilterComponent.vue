<template class="">
  <div class="">
    <v-row justify="center" class="">
      <v-card class="rounded-lg widthAll filter-card pb-6 mb-6">
        <v-row align="center">
          <v-skeleton-loader class="textLoader d-inline-block ma-2" type="chip">
            <span class="body-2 mr-2" style="font-family: Byekan !important">
              فیلتر ها
            </span>
          </v-skeleton-loader>
          <v-spacer></v-spacer>
          <v-skeleton-loader class="textLoader d-inline-block ma-2" type="chip">
            <v-btn
              text
              :disabled="loadeingTickets"
              @click="removeFilters"
              class="body-2 red--text px-sm-1 px-md-3 d-block d-md-inline-block"
              style="font-family: Byekan !important"
              >حذف فیلتر ها</v-btn
            >
          </v-skeleton-loader>
        </v-row>
        <v-divider class="mb-3"></v-divider>
        <h4 class="mx-2 mb-3">
          <v-skeleton-loader class="textLoader d-inline-block" type="chip">
            قیمت
          </v-skeleton-loader>
        </h4>
        <v-row class="px-2">
          <v-skeleton-loader
            class="textLoader d-inline-block widthAll"
            type="card-heading"
          >
            <v-row
              align="center"
              class="px-3 mx-sm-1 mx-md-2 rounded-xl"
              style="border: 1px solid #bfbfbf"
            >
              <span>از</span>
              <v-text-field
                :disabled="loadeingTickets"
                v-model="fromPrice"
                class="pt-0 d-inline-block priceInput"
                hide-details
                single-line
              ></v-text-field>
              <span class="d-none d-md-inline-block">تومان</span>
            </v-row>
          </v-skeleton-loader>
        </v-row>
        <v-row class="px-2">
          <v-skeleton-loader
            class="textLoader d-inline-block widthAll mt-4"
            type="card-heading"
          >
            <v-row
              align="center"
              class="mt-2 px-3 mx-sm-1 mx-md-2 rounded-xl"
              style="border: 1px solid #bfbfbf"
            >
              <span>تا</span>
              <v-text-field
                :disabled="loadeingTickets"
                v-model="toPrice"
                class="pt-0 d-inline-block priceInput"
                hide-details
                single-line
              ></v-text-field>
              <span class="d-none d-md-inline-block">تومان</span>
            </v-row>
          </v-skeleton-loader>
        </v-row>
        <v-row class="px-2 filterPriceRangRow">
          <v-skeleton-loader
            class="textLoader d-inline-block widthAll mt-4"
            type="card-heading"
            :loading="filter.minPrice == null ? true : false"
          >
            <v-range-slider
              :disabled="loadeingTickets"
              color="#1abc9c"
              thumb-color="#fff"
              :min="filter.minPrice"
              :max="filter.maxPrice"
              track-color="#cccccc"
              v-model="filter.price"
              hide-details
              @change="changeRangePrice()"
              class="align-center ltr my-4 my-md-6 px-2"
            >
            </v-range-slider>
          </v-skeleton-loader>
        </v-row>
        <v-divider class="my-3"></v-divider>
        <v-skeleton-loader class="textLoader d-inline-block mr-2" type="chip">
          <h4 class="mx-2 mb-3">ساعت پرواز</h4>
        </v-skeleton-loader>
        <v-row class="px-2">
          <v-skeleton-loader
            class="textLoader d-inline-block widthAll mt-4"
            type="card-heading"
          >
            <v-range-slider
              :disabled="loadeingTickets"
              thumb-color="#fff"
              color="#1abc9c"
              track-color="#cccccc"
              :tick-labels="filter.timeItems"
              v-model="filter.time"
              min="0"
              max="4"
              ticks="always"
              tick-size="4"
              class="mb-6 px-2"
              @change="changeFilterTime()"
            >
              <template v-slot:thumb-label="props">
                <v-icon dark>
                  mdi--close
                  {{ filterTime(props.value) }}
                </v-icon>
              </template>
            </v-range-slider>
          </v-skeleton-loader>
        </v-row>
        <v-divider class="my-3"></v-divider>
        <v-skeleton-loader class="textLoader d-inline-block mr-2" type="chip">
          <h4 class="mx-2 mb-3">کلاس پرواز</h4>
          <v-checkbox
            :disabled="loadeingTickets"
            v-for="(item, j) in filter.classItems"
            :key="'classItems' + j"
            v-model="filter.class"
            color="red"
            off-icon="mdi-circle-outline"
            on-icon="mdi-check-circle-outline"
            :label="item.label"
            :value="item.value"
            class="caption"
            hide-details
          ></v-checkbox>
        </v-skeleton-loader>
        <v-divider class="my-3"></v-divider>
        <v-skeleton-loader class="textLoader d-inline-block mr-2" type="chip">
          <h4 class="mr-2 d-inline-block">ایرلاین</h4>
          <span class="caption" style="font-family: Byekan !important"
            >(مجموع {{ tickets.length }} پرواز)</span
          >
          <v-row
            v-for="(item, j) in filter.airlineItems"
            :key="'airlineItems' + j"
          >
            <v-checkbox
              :disabled="loadeingTickets"
              v-if="tickets.filter((e) => e.Airline == item.value).length != 0"
              v-model="filter.airline"
              color="red"
              off-icon="mdi-circle-outline"
              on-icon="mdi-check-circle-outline"
              :label="item.label"
              :value="item.value"
              class="caption"
              hide-details
              @click="changeFilterAirline()"
            ></v-checkbox>
          </v-row>
        </v-skeleton-loader>
        <v-divider class="my-3"></v-divider>
        <v-skeleton-loader class="textLoader d-inline-block mr-2" type="chip">
          <h4 class="mx-2 mb-3">نوع پرواز</h4>
          <v-checkbox
            :disabled="loadeingTickets"
            v-for="(item, j) in filter.typeItems"
            :key="'typeItems' + j"
            v-model="filter.type"
            color="red"
            off-icon="mdi-circle-outline"
            on-icon="mdi-check-circle-outline"
            :label="item.label"
            :value="item.value"
            class="caption"
            hide-details
          ></v-checkbox>
        </v-skeleton-loader>
        <v-divider class="my-3"></v-divider>
        <v-skeleton-loader class="textLoader d-inline-block mr-2" type="chip">
          <h4 class="mx-2 mb-3">نمایش پرواز</h4>
          <v-checkbox
            :disabled="loadeingTickets"
            v-for="(item, j) in filter.showTypeItems"
            :key="'showTypeItems' + j"
            v-model="filter.showType"
            color="red"
            off-icon="mdi-circle-outline"
            on-icon="mdi-check-circle-outline"
            :label="item.label"
            :value="item.value"
            class="caption"
            hide-details
            @click="emitFilter()"
          ></v-checkbox>
        </v-skeleton-loader>
      </v-card>
    </v-row>
  </div>
</template>

<style>
.filterPriceRangRow .v-skeleton-loader__heading {
  width: 85%;
}
</style>

<script>
import "@/assets/css/main.css";
import axios from "axios";
axios.defaults.headers.common["Client-Token"] = "Ahuan-Wapi?123";

export default {
  data() {
    return {
      filter: {
        minPrice: null,
        maxPrice: null,
        priceItems: [
          {
            label: "صد تا سیصد هزار تومان",
            value: 1,
          },
          {
            label: "سیصد تا پانصد هزار تومان",
            value: 2,
          },
          {
            label: "پانصد تا هشتصد هزار تومان",
            value: 3,
          },
          {
            label: "هشتصد تا یک میلیون تومان",
            value: 4,
          },
          {
            label: "بیش از یک میلیون تومان",
            value: 5,
          },
        ],
        price: [null, null],
        timeItems: [
          "صبح",
          "ظهر",
          "عصر",
          "شب",
          "نیمه شب",
          // {
          //   label:' صبح (4 تا 11)',
          //   value: 1
          // },
          // {
          //   label:' ظهر (11 تا 14)',
          //   value: 2
          // },
          // {
          //   label:' عصر (14 تا 19)',
          //   value: 3
          // },
          // {
          //   label:'شب (19 تا 24)',
          //   value: 4
          // },
          // {
          //   label:'نیمه شب (24 تا 4)',
          //   value: 5
          // },
        ],
        time: [0, 4],
        classItems: [
          {
            label: "اکونومی",
            value: 1,
          },
          {
            label: "بیزینس",
            value: 2,
          },
        ],
        class: [],
        airlineItems: [
          {
            label: "آتا",
            value: "I3",
          },
          {
            label: "کیش‌ایر",
            value: "Y9",
          },
          {
            label: "قشم‌ایر",
            value: "QB",
          },
          {
            label: "کاسپین",
            value: "IV",
          },
          {
            label: "تابان",
            value: "HH",
          },
          {
            label: "ساها",
            value: "IRZ",
          },
          {
            label: "آسمان",
            value: "EP",
          },
          {
            label: "فلای‌پرشیا",
            value: "FP",
          },
          {
            label: "زاگرس",
            value: "ZV",
          },
          {
            label: "نفت",
            value: "NV",
          },
          {
            label: "معراج",
            value: "JI",
          },
          {
            label: "وارش",
            value: "VR",
          },
        ],
        airline: [],
        typeItems: [
          {
            label: "چارتری",
            value: 1,
          },
          {
            label: "سیستمی",
            value: 2,
          },
        ],
        type: [2],
        showTypeItems: [
          {
            label: "نمایش پروازهای موجود",
            value: 1,
          },
          // {
          //   label: 'عدم نمایش پرواز تکراری',
          //   value: 2
          // },
        ],
        showType: [],
      },
      fromPrice: null,
      toPrice: null,
      icons: [
        "mdi-sun-wireless-outline",
        "mdi-white-balance-sunny",
        "mdi-theme-light-dark",
        "mdi-weather-night",
        "mdi-weather-night-partly-cloudy",
      ],
    };
  },
  name: "ticket-filter-component",
  components: {},
  props: ["from", "to", "tickets", "loadeingTickets"],
  watch: {
    from() {
      this.filter.minPrice = Number(this.from / 10);
      this.fromPrice = Number(this.from / 10);
    },
    to() {
      this.filter.maxPrice = Number(this.to / 10);
      this.toPrice = Number(this.to / 10);
    },
    fromPrice() {
      if (this.fromPrice != null) {
        let self = this;
        let value1 = self.fromPrice.toString().replace(/,/g, "");
        let value2 = value1;
        // if (value1.length == 0 || value1 < 0) {
        //   value2 = 0
        // } else if (value1.length > 1 && value1[0] == 0) {
        //   value2 = value1.replace(0, '')
        // } else {
        value2 = value1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // }
        // self.fromPrice = value2
        self.fromPrice = value2;
        self.changeFilterPrice([
          Number(self.fromPrice.toString().replace(/,/g, "")),
          Number(self.toPrice.toString().replace(/,/g, "")),
        ]);
      }
    },
    toPrice() {
      if (this.toPrice != null) {
        let self = this;
        let value1 = self.toPrice.toString().replace(/,/g, "");
        // value2 = value1
        // if (value1.length == 0 || value1 < 0) {
        //   value2 = 0
        // } else if (value1.length > 1 && value1[0] == 0) {
        //   value2 = value1.replace(0, '')
        // } else {
        let value2 = value1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // }
        self.toPrice = value2;
        self.changeFilterPrice([
          Number(self.fromPrice.toString().replace(/,/g, "")),
          Number(self.toPrice.toString().replace(/,/g, "")),
        ]);
      }
    },
    async tickets() {
      this.filter.airline = [];
      for (let i = 0; i < this.tickets.length; i++) {
        await this.filter.airline.push(this.tickets[i].Airline);
      }
      this.emitFilter();
    },
    loadeingTickets() {
      if (this.loadeingTickets == true) {
        // this.fromPrice = null
        // this.toPrice = null
      }
    },
  },
  computed: {},
  methods: {
    removeFilters() {
      let self = this;
      for (let i = 0; i < self.tickets.length; i++) {
        self.filter.airline.push(self.tickets[i].Airline);
      }
      self.filter.time = [0, 4];
      // self.filter.class = []
      //   self.filter.type = []
      self.filter.showType = [];
      self.toPrice = self.filter.maxPrice;
      self.fromPrice = self.filter.minPrice;
    },
    changeRangePrice() {
      this.fromPrice = this.filter.price[0];
      this.toPrice = this.filter.price[1];
      // this.fromPrice = Number(this.filter.price[1])
      // .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      // this.toPrice = this.filter.price[1]
      // .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    filterTime(val) {
      return this.icons[val];
    },
    changeFilterPrice(event) {
      this.filter.price = event;
      this.emitFilter();
    },
    changeFilterTime() {
      this.emitFilter();
    },
    changeFilterAirline() {
      this.emitFilter();
    },
    async emitFilter() {
      let startHour = 0;
      let endHour = 0;
      switch (this.filter.time[0]) {
        case 0:
          startHour = 7;
          break;
        case 1:
          startHour = 12;
          break;
        case 2:
          startHour = 18;
          break;
        case 3:
          startHour = 24;
          break;
        case 4:
          startHour = 7;
          break;
        default:
          break;
      }
      switch (this.filter.time[1]) {
        case 0:
          endHour = 7;
          break;
        case 1:
          endHour = 12;
          break;
        case 2:
          endHour = 18;
          break;
        case 3:
          endHour = 24;
          break;
        case 4:
          endHour = 6;
          break;
        default:
          break;
      }
      let filterByTime = {
        start: startHour,
        end: endHour,
      };
      let object = {
        price: this.filter.price,
        time: filterByTime,
        airline: this.filter.airline,
        hideFeild: this.filter.showType.includes(1),
      };
      this.$emit("startFilter", object);
    },
  },
  mounted() {},
};
</script>