<template>
  <div class="mt-6 mt-sm-12 pt-12">
    <v-row class="black" justify="center">
      <div class="indexDiv mt-6">
        <b class="travelTitle widthAll d-block white--text">همه چیز درباره‌ی سفر به انگلیس</b>
        <!-- <div class="textTitle mt-6">
          <b class="answerText white--text">
            در این بخش از مجله گردشگری آهوان قصد داریم شما رو با چندتا از شهر های معروف انگلیس آشنا کنیم و پیشنهاد ما برای
            شما اینه که هر وقت به انگلستان سفر کردید حتماً به این شهرها سر بزنید:
          </b>
        </div> -->
        <v-row class="mt-12" justify="end" align="center">
          <div>
            <img class="ml-6" src="@/assets/image/test/country-6.jpg" width="250px" alt="">
          </div>
          <div>
            <img class="d-block mb-6" src="@/assets/image/test/country-4.jpg" width="250px" alt="" />
            <img class="d-block mb-6" src="@/assets/image/test/country-3.jpg" width="250px" alt="" />
          </div>
          <div class="">
            <img class="d-block mb-6 mx-6" src="@/assets/image/test/country-2.jpg" width="250px" alt="" />
            <img class="d-block mb-6 mx-6" src="@/assets/image/test/country-1.jpg" width="250px" alt="" />
          </div>
          <div class="">
            <ul class="mr-6 white--text">
              <li class="white--text my-2">عنوان شماره 1</li>
              <li class="white--text my-2">عنوان شماره 2</li>
              <li class="white--text my-2">عنوان شماره 3</li>
              <li class="white--text my-2">عنوان شماره 4</li>
            </ul>
            <img class="ml-6 mt-3" src="@/assets/image/test/country-5.jpg" width="250" alt="">
          </div>
        </v-row>
      </div>
    </v-row>
    <v-row class="white" justify="center">
      <div class="indexDiv mt-6">
        <v-row class="mt-6" justify="end" align="center">
          <v-col>
            <h1 class="">درباره‌ی سفر به انگلستان</h1>
          </v-col>
          <v-col>
            bye
          </v-col>
        </v-row>
        <!-- 
        <v-row class="mt-6" justify="end" align="center">
          <div>
            <img class="ml-6" src="@/assets/image/test/country-6.jpg" width="250px" alt="">
          </div>
          <div>
            <img class="d-block mb-6" src="@/assets/image/test/country-4.jpg" width="250px" alt="" />
            <img class="d-block mb-6" src="@/assets/image/test/country-3.jpg" width="250px" alt="" />
          </div>
          <div class="">
            <img class="d-block mb-6 mx-6" src="@/assets/image/test/country-2.jpg" width="250px" alt="" />
            <img class="d-block mb-6 mx-6" src="@/assets/image/test/country-1.jpg" width="250px" alt="" />
          </div>
          <div class="">
            <ul class="mr-6 white--text">
              <li class="white--text my-2">عنوان شماره 1</li>
              <li class="white--text my-2">عنوان شماره 2</li>
              <li class="white--text my-2">عنوان شماره 3</li>
              <li class="white--text my-2">عنوان شماره 4</li>
            </ul>
            <img class="ml-6 mt-3" src="@/assets/image/test/country-5.jpg" width="250" alt="">
          </div>
        </v-row> -->
      </div>
    </v-row>
  </div>
</template>

<style scoped>
.travelTitle {
  font-size: 60px;
}

.textTitle {
  max-width: 650px !important
}
</style>

<script>
export default {
  name: 'about-enland',
  data() {
    return {

    }
  },
  components: {
  },
  computed: {

  },
  methods: {

  },
  created() {
    window.scrollTo(0, 0);
  },
}
</script>