<template class="mt-12 pt-12">
  <div class="mt-12 pt-12">
    <v-autocomplete
      :menu-props="{
        closeOnClick: true,
        bottom: false,
        offsetY: true,
        contained: true,
        location: 'bottom',
        locationStrategy: 'static',
      }"
      offset-y
      bottom
      locationStrategy="static"
      location="bottom"
      :items="persianCityes"
      label="مبدا"
      class="mt-12 font-small-xs hideArrow headerCityes"
      outlined
      prepend-inner-icon="mdi-map-marker"
    >
      <v-overlay :value="showOverlay" class="custom-overlay">
        <!-- Your overlay content goes here -->
      </v-overlay>
      <template v-slot:no-data>
        <span class="body-2 d-block px-4" style="font-family: Byekan !important"
          >شهر مورد نظر یافت نشد!</span
        >
      </template>
    </v-autocomplete>
    <v-menu offset-y bottom>
      <template v-slot:activator="{ on }">
        <v-btn @click="toggleMenu" v-on="on">Toggle Menu</v-btn>
      </template>
      <v-list>
        <v-list-item>Item 1</v-list-item>
        <v-list-item>Item 2</v-list-item>
        <v-list-item>Item 3</v-list-item>
      </v-list>
    </v-menu>
    <!-- <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn @click="toggleMenu" v-on="on">Toggle Menu</v-btn>
      </template>
      <v-list>
        <v-list-item>Item 1</v-list-item>
        <v-list-item>Item 2</v-list-item>
        <v-list-item>Item 3</v-list-item>
      </v-list>
    </v-menu> -->
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-image: linear-gradient(
    to left,
    rgba(0, 160, 230, 1),
    rgba(0, 160, 230, 0.5)
  );
}

div.container {
  width: 500px;
  height: 313px;
  background-color: white;
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  margin-top: 171px;
}

div.group {
  display: flex;
  justify-content: center;
}

input[type="text"] {
  border: none;
  border-bottom: 1px solid rgba(0, 160, 230, 0.5);
}

input[type="email"] {
  border: none;
  border-bottom: 1px solid rgba(0, 160, 230, 0.5);
}

input:focus {
  border: none;
  border-bottom: 3px solid rgba(0, 160, 230, 1);
}

button {
  background-image: linear-gradient(
    to left,
    rgba(0, 160, 230, 1),
    rgba(0, 160, 230, 0.5)
  );
  width: 172px;
  height: 24px;
  color: white;
}

button:hover {
  background-color: rgba(0, 160, 230, 1);
}

a.bass {
  color: black;
  text-decoration: none;
}

a {
  text-decoration: none;
}
</style>

<style>
</style>

<script>
// import '@/assets/css/main.css'
import axios from "axios";
axios.defaults.headers.common["Client-Token"] = "Ahuan-Wapi?123";
// import CircleSlider from '@/components/CircleSlider.vue'

export default {
  data() {
    return {
      persianCityes: [
        {
          label: "Tehran, THR - تهران",
          code: "Tehran, THR",
          text: "تهران",
          id: "THR",
          airport: "Mehrabad Arpt",
        },
        {
          label: "UGT, UGT - UGT",
          code: "UGT, UGT",
          text: "UGT",
          id: "UGT",
          airport: "UGT Arpt",
        },
        {
          label: "TTQ, TTQ - TTQ",
          code: "TTQ, TTQ",
          text: "TTQ",
          id: "TTQ",
          airport: "TTQ Arpt",
        },
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
          airport: "Ahwaz Airport",
        },
        {
          label: "Isfahan, IFN - اصفهان",
          code: "Isfahan, IFN",
          text: "اصفهان",
          id: "IFN",
          airport: "Isfahan Arpt",
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
      ],
      showOverlay: false,
    };
  },
  components: {
    // CircleSlider
  },
  computed: {},
  methods: {
    toggleOverlay() {
      this.showOverlay = !this.showOverlay;
    },
    // axios
    //   .get(
    //     "/weatherproxy/data/2.5/weather?lat=35.737315&lon=51.414907&appid=b28caa11e918f16f9e55d242f38ede77"
    //   )
    //   .then(function (response) {})
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });
  },
  mounted() {
    if (this.$route.query.return) {
      console.log("has query");
    } else {
      console.log("has not query");
    }
  },

  // "C:\Program Files (x86)\Google\Chrome\Application\Chrome.exe" --disable-web-security  --user-data-dir=~/chromeTempRepo
};
</script>