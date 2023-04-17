<template>
  <div class="home mt-12 pt-10">
    <v-row justify="center" class="d-none d-sm-flex relative grey lighten-3">
      <img src="../assets/image/main-page-image1.jpg" :style="{ opacity: selectedSection.title == 'پرواز' ? '1' : '0' }"
        class="mt-1" width="100%" alt="" style="transition: all 500ms;">
      <img src="../assets/image/main-page-image2.jpg" :style="{ opacity: selectedSection.title == 'هتل' ? '1' : '0' }"
        class="mt-1 absolute" width="100%" alt="" style="transition: all 500ms;">
      <img src="../assets/image/main-page-image3.jpg" :style="{ opacity: selectedSection.title == 'تور' ? '1' : '0' }"
        class="mt-1 absolute" width="100%" alt="" style="transition: all 500ms;">
      <img src="../assets/image/main-page-image4.jpg" :style="{ opacity: selectedSection.title == 'آهوان' ? '1' : '0' }"
        class="mt-1 absolute" width="100%" alt="" style="transition: all 500ms;">
      <img src="../assets/image/main-page-image5.jpg" :style="{ opacity: selectedSection.title == 'اتوبوس' ? '1' : '0' }"
        class="mt-1 absolute" width="100%" alt="" style="transition: all 500ms;">
      <img src="../assets/image/main-page-image6.jpg" :style="{ opacity: selectedSection.title == 'قطار' ? '1' : '0' }"
        class="mt-1 absolute" width="100%" alt="" style="transition: all 500ms;">
      <img src="../assets/image/main-page-image7.jpg" :style="{ opacity: selectedSection.title == 'بیمه' ? '1' : '0' }"
        class="mt-1 absolute" width="100%" alt="" style="transition: all 500ms;">
    </v-row>
    <input-main />
  </div>
</template>

<script>
import InputMain from '@/components/InputMain.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    InputMain
    // HelloWorld
  },
  data: () => ({
    selectedSection: {
      title: 'پرواز'
    }
  }),
  created(){
    document.title = 'خدمات گردشگری آهوان'
  }
}
</script>
