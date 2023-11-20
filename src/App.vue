<template>
  <v-app id="app">
    <!-- header -->
    <header-site
      :isLogout="isLogout"
      :isOpenLogin="isOpenLogin"
      style="z-index: 100"
    />
    <!-- main -->
    <v-main class="mt-2" style="min-height: 80vh">
      <router-view @openLogin="openLogin()" @logOut="logOut()" />
    </v-main>
    <!-- footer -->
    <footer-site />
  </v-app>
</template>
<script setup>
import { RouterView } from "vue-router";
</script>

<script>
// import HelloWorld from './components/HelloWorld';
import HeaderSite from "./components/HeaderSite.vue";
import FooterSite from "./components/FooterSite.vue";

export default {
  name: "App",

  components: {
    // HelloWorld,
    HeaderSite,
    FooterSite,
  },

  data: () => ({
    isLogout: false,
    isOpenLogin: false,
  }),
  methods: {
    openLogin() {
      if (!localStorage.getItem("lName")) {
        this.isOpenLogin = !this.isOpenLogin;
      }
    },
    logOut() {
      this.isLogout = true;
      console.log(localStorage);
      console.log("logOut...");
    },
  },
};
</script>
