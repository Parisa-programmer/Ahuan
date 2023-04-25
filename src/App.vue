<template>
  <v-app id="app">
    <!-- header -->
    <header-site />
    <!-- main -->
    <v-main class=" mt-12 pt-12 red" style="min-height:80vh">
      <router-link to="/Istanbul">hiiii</router-link>
      
      <router-view />
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
import HeaderSite from './components/HeaderSite.vue';
import FooterSite from './components/FooterSite.vue';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    HeaderSite,
    FooterSite
  },

  data: () => ({
    //
  }),
  
};
</script>
