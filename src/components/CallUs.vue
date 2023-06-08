<template>
  <div v-cloak class="widthAll">
    <v-row class="white px-3 px-sm-9 py-5 mb-2 mb-sm-12 mt-2 mt-sm-6 rounded-xl justify-center d-none d-sm-flex">
      <b class="d-inline-block grey--text text-center text--darken-3 text-tour-call-us"
        style="font-family: Byekan !important;">
        جهت اخذ اطلاعات بیشتر با کارشناسان ما تماس حاصل فرمایید.
      </b>
      <b class="d-inline-block  grey--text text-center text--darken-3 text-tour-call-us"
        style="font-family: Byekan !important;"><a class="widthAll red--text mx-2" href="tel:02141889"
          style="text-decoration:none">تلفن: 41889-021</a></b>
    </v-row>
    <v-row class="px-3 px-sm-9 py-5 justify-center d-sm-none rounded-lg"
      style="background: #fff;position: fixed;bottom: 0;width: 100%;right: 0; z-index:99999999;border: 3px solid red;">
      <v-icon color="red" inverse class="ml-1">mdi-phone</v-icon>
      <b class="d-inline-block text-center text-tour-call-us"
        style="font-family: Byekan !important;letter-spacing: 0px !important;">
        <a href="tel:02141889" class="bold" style="color:red">تماس با کارشناسان ما </a>
      </b>
    </v-row>
  </div>
</template>

<script>
import '@/assets/css/main.css'
import axios from 'axios'
axios.defaults.headers.common['Client-Token'] = 'Ahuan-Wapi?123'

// import style from '../css/main.css'
export default {
  name: 'CallUs',


}
</script>
