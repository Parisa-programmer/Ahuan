<template>
  <div class="heightAll">
    <v-row justify="center" align="center" class="red mt-6 mt-sm-12 pt-12" style="min-height:90vh">
      <div class="heightAll widthAll absolute" style="bottom:0;">
        <v-img class="" width="100%" height="100%" src="@/assets/image/visa video backgroud.jpg" alt="" />
      </div>
      <div class="heightAll widthAll absolute" style="z-index: 2;background:#25252599;bottom:0">
      </div>
      <div class="indexDiv" style="z-index: 3;">
        <v-row class="heightAll" align="center">
          <v-col cols="12" md="6">
            <div class="relative" oncontextmenu="return false;">
              <video id="video1" :controls="play1 == true ? true : false" controlsList="nodownload" loop
                @pause="play1 = false">
                <source src="@/assets/video/visline3.mp4" type="video/mp4">
                Your browser does not support the video tag.

              </video>
              <v-row v-show="play1 == false" @click="play1 = true; videoplay1()" justify="center" align="center"
                class="heightAll widthAll absolute onVideo" style="z-index: 2222222;bottom:0;">
                <div class="rounded-circle cursorPointer" style="background:rgba(61, 61, 61, 0.527);">
                  <v-icon color="#fff" size="100">mdi-play</v-icon>
                </div>
              </v-row>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="">
            <v-row class="">
              <p class="mt-2 mt-sm-6 widthAll white--text text-justify">
                در نرم افزار ویزلاین اطلاعات دریافتی از شما به صورت کاملاً محرمانه اخذ می‌گردد و بلافاصله پس از پایان
                فرآیند پاسخگویی مناسب‌ترین راهکار ارائه خواهد شد.
              </p>
            </v-row>
            <v-row class="">
              <h3 class="white--text">همین حالا ویزاتو بگیر!</h3>
            </v-row>
            <v-row class="mt-4 mt-sm-6" justify="space-between">
              <h3 class="white--text">همین حالا ویزاتو بگیر!</h3>
              <router-link to="/visline/need" class="text-decoration-none">
                <v-btn class="px-12 rounded-lg bold" color="red" dark>شروع ویزلاین</v-btn>
              </router-link>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <!-- <div style="z-index: 3;" justify="center">
        <div clss="indexDiv hideOver">
          <v-row>
            <v-col cols="6">
              <video width="500" controls autoplay anonymous>
                <source src="@/assets/video/visline.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </v-col>
            <v-col cols="6" class="">
              <v-row class="red">g
                <h1 class="white--text">Food Preparation</h1>
              </v-row>
              <v-row class="blue">
                <p class="widthAll">
                  Professional free CSS templates. Stylesheet, HTML, responsive, fully customizable CSS
                  templates with
                  easy Drag-n-Drop Nicepage editor. Adjust colors, fonts, header and footer, layout, and other design
                  elements, as well as content and images..
                </p>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </div> -->
    </v-row>
  </div>
</template>
<style scoped>
#video1,
.onVideo {
  width: 90%
}

@media(max-width:959px) {

  #video1,
  .onVideo {
    width: 100%
  }
}
</style>
<script>
export default {
  name: 'visline-video3',
  data() {
    return {
      play1: false
    }
  },
  components: {
  },
  computed: {

  },
  methods: {
    videoplay1() {
      document.getElementById('video1').play()
    }
  },
  created() {
    window.scrollTo(0, 0);
  },
}
</script>