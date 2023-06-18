<template>
  <div class="widthAll">
    <div class="pt-6 relative" style="background: #150035;">
      <v-row align="center" class="absolute heightAll" style="z-index: 2;">
        <div @click="disableArrow == false && changeChecknumber('plus'); disableArrow = true"
          class="py-6 cursorPointer mr-2 rounded-xl arrowSlider" style="background: #ffffff2a;">
          <v-icon class="" color="#fff">mdi-arrow-right</v-icon>
        </div>
      </v-row>
      <v-row align="center" class="absolute heightAll" style="z-index: 2;left:0">
        <div @click="disableArrow == false && changeChecknumber('minuse'); disableArrow = true"
          class="py-6 cursorPointer ml-2 rounded-xl arrowSlider" style="background: #ffffff2a;">
          <v-icon class="" color="#fff">mdi-arrow-left</v-icon>
        </div>
      </v-row>
      <v-row justify="center" align="center" class="mb-6">
        <h1 class="white--text font-small-title-xs">مجله گردشگری</h1>
      </v-row>
      <input type="radio" class="d-none" name="testimonial" id="t-1" :checked="checknumber == 1 ? true : false">
      <input type="radio" class="d-none" name="testimonial" id="t-2" :checked="checknumber == 2 ? true : false">
      <input type="radio" class="d-none" name="testimonial" id="t-3" :checked="checknumber == 3 ? true : false">
      <input type="radio" class="d-none" name="testimonial" id="t-4" :checked="checknumber == 4 ? true : false">
      <input type="radio" class="d-none" name="testimonial" id="t-5" :checked="checknumber == 5 ? true : false">
      <div class="testimonials hideOver">
        <div class="absolute curveRow"></div>
        <label class="item" :id="'fort-' + (i + 1)" v-for="(item, i) in cards" :key="i">
          <div class="relative">
            <img :src="item.image" class="rounded-xl widthAll" :alt="item.title" style=" border: 2px solid #fff;">
            <v-row class="absolute widthAll" justify="center" style="bottom:-20px">
              <b class="white rounded-xl red--text text--darken-2 px-12 cityName">
                {{ item.title }}
              </b>
            </v-row>
          </div>
          <p class="text-justify mt-6 mt-sm-12 answerText white--text">
            {{ item.text }}
          </p>
          <v-row justify="center">
            <router-link :to="item.link" class="text-decoration-none">
              <span class="cursorPointer red darken-5 px-3 white--text rounded-xl ">بیشتر
                بخوانید</span>
            </router-link>
          </v-row>
        </label>
        <img class="absolute sailor-command" src="@/assets/image/tourSlider/sailor command.png" alt="sailor command"
          style="height:60px;width:60px;bottom: 5px;">
      </div>
    </div>
  </div>
</template>

<style scoped>
.arrowSlider {
  transition: all 0.5s;
}

.arrowSlider:hover {
  background: #ffffff81 !important;
}

.curveRow {
  width: 390vw;
  height: 390vw;
  border: dashed 3px #ffffffbb;
  border-radius: 86%;
  right: -150vw;
  top: 150px;
  transform: rotate(0deg);
  animation: rotateCircle 130s infinite;
}

.sailor-command {
  animation: sailorCircle 6s infinite;
}

@keyframes sailorCircle {
  0% {
    transform: rotate(0deg);
  }


  50% {
    transform: rotate(-360deg);
  }

  60% {
    transform: rotate(-365deg);
  }

  70% {
    transform: rotate(-355deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}

@keyframes rotateCircle {
  0% {
    transform: rotate(0deg);
  }

  5% {
    transform: rotate(-5deg);
  }

  10% {
    transform: rotate(-10deg);
  }

  15% {
    transform: rotate(-15deg);
  }

  20% {
    transform: rotate(-20deg);
  }

  25% {
    transform: rotate(-25deg);
  }

  30% {
    transform: rotate(-30deg);
  }

  35% {
    transform: rotate(-35deg);
  }

  40% {
    transform: rotate(-40deg);
  }

  45% {
    transform: rotate(-45deg);
  }

  50% {
    transform: rotate(-50deg);
  }

  55% {
    transform: rotate(-55deg);
  }

  60% {
    transform: rotate(-60deg);
  }

  65% {
    transform: rotate(-65deg);
  }

  70% {
    transform: rotate(-70deg);
  }

  75% {
    transform: rotate(-75deg);
  }

  80% {
    transform: rotate(-80deg);
  }

  85% {
    transform: rotate(-85deg);
  }

  90% {
    transform: rotate(-90deg);
  }

  95% {
    transform: rotate(-95deg);
  }

  100% {
    transform: rotate(-100deg);
  }
}

.slider {
  width: 100%
}

.slider input {
  display: none;
}

.cityName {
  font-size: 36px
}

.testimonials {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 520px;
  /* perspective: 1000px; */
  /* overflow: hidden; */
}

.testimonials .item {
  width: 500px;
  position: absolute;
  box-sizing: border-box;
  text-align: center;
  transition: all 4s;
  user-select: none;
  /* top: 2000px; */
  /* left: 2000px; */
}

.testimonials .item h1 {
  font-size: 114px;
  color: white;
}

.dots {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dots label {
  height: 5px;
  width: 5px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #413B52;
  margin: 7px;
  transition-duration: 0.2s;
}

/* #t-1:checked~.dots label[for="t-1"],
#t-2:checked~.dots label[for="t-2"],
#t-3:checked~.dots label[for="t-3"],
#t-4:checked~.dots label[for="t-4"],
#t-5:checked~.dots label[for="t-5"] {
  transform: scale(2);
  background-color: #fff;
  box-shadow: 0px 0px 0px 3px #dddddd24;
}

#t-1:checked~.dots label[for="t-2"],
#t-2:checked~.dots label[for="t-1"],
#t-2:checked~.dots label[for="t-3"],
#t-3:checked~.dots label[for="t-2"],
#t-3:checked~.dots label[for="t-4"],
#t-4:checked~.dots label[for="t-3"],
#t-4:checked~.dots label[for="t-5"],
#t-5:checked~.dots label[for="t-4"] {
  transform: scale(1.5);
} */


#t-1:checked~.testimonials #fort-2,
#t-2:checked~.testimonials #fort-3,
#t-4:checked~.testimonials #fort-1,

#t-3:checked~.testimonials #fort-4,
#t-4:checked~.testimonials #fort-5,
#t-5:checked~.testimonials #fort-1 {
  transform: translate3d(430%, 0, -180px);
  top: 580px;
}

#t-1:checked~.testimonials #fort-3,
#t-3:checked~.testimonials #fort-5,
#t-4:checked~.testimonials #fort-1,
#t-5:checked~.testimonials #fort-2,
#t-5:checked~.testimonials #fort-5,
#t-2:checked~.testimonials #fort-4 {
  transform: translate3d(300px, 0, -90px);
  top: 750px;
}

#t-2:checked~.testimonials #fort-1,

#t-3:checked~.testimonials #fort-2,
#t-4:checked~.testimonials #fort-3,
#t-5:checked~.testimonials #fort-4,
#t-1:checked~.testimonials #fort-5 {
  transform: translate3d(-300px, 0, -90px);
  top: 0;
}

#t-3:checked~.testimonials #fort-1,
#t-4:checked~.testimonials #fort-2,
#t-5:checked~.testimonials #fort-3,
#t-2:checked~.testimonials #fort-5,
#t-1:checked~.testimonials #fort-4 {
  transform: translate3d(-430%, 0, -180px);
  top: 580px;
}

#t-1:checked~.testimonials #fort-1,
#t-2:checked~.testimonials #fort-2,
#t-3:checked~.testimonials #fort-3,
#t-4:checked~.testimonials #fort-4,
#t-5:checked~.testimonials #fort-5 {
  top: 0;
  transform: translate3d(350px, 0, -90px);
}

@media (min-width: 960px) and (max-width: 1263px) {

  .testimonials .item {
    width: 400px;
  }

  #t-2:checked~.testimonials #fort-1,
  #t-3:checked~.testimonials #fort-2,
  #t-4:checked~.testimonials #fort-3,
  #t-5:checked~.testimonials #fort-4,
  #t-1:checked~.testimonials #fort-5 {
    transform: translate3d(-228px, 0, -90px);
    top: 0;
  }

  #t-1:checked~.testimonials #fort-1,
  #t-2:checked~.testimonials #fort-2,
  #t-3:checked~.testimonials #fort-3,
  #t-4:checked~.testimonials #fort-4,
  #t-5:checked~.testimonials #fort-5 {
    top: 0;
    transform: translate3d(240px, 0, -90px);
  }

  .cityName {
    font-size: 24px;
  }
}

@media (min-width: 600px) and (max-width: 959px) {

  #t-2:checked~.testimonials #fort-1,
  #t-3:checked~.testimonials #fort-2,
  #t-4:checked~.testimonials #fort-3,
  #t-5:checked~.testimonials #fort-4,
  #t-1:checked~.testimonials #fort-5 {
    transform: translate3d(-430%, 0, -180px);
    top: 580px;
  }

  #t-1:checked~.testimonials #fort-1,
  #t-2:checked~.testimonials #fort-2,
  #t-3:checked~.testimonials #fort-3,
  #t-4:checked~.testimonials #fort-4,
  #t-5:checked~.testimonials #fort-5 {
    top: 0;
    transform: translate3d(0, 0, -90px);
  }
}

@media (max-width: 599px) {
  .testimonials .item {
    width: 450px;
  }

  #t-2:checked~.testimonials #fort-1,
  #t-3:checked~.testimonials #fort-2,
  #t-4:checked~.testimonials #fort-3,
  #t-5:checked~.testimonials #fort-4,
  #t-1:checked~.testimonials #fort-5 {
    transform: translate3d(-430%, 0, -180px);
    top: 580px;
  }

  #t-1:checked~.testimonials #fort-1,
  #t-2:checked~.testimonials #fort-2,
  #t-3:checked~.testimonials #fort-3,
  #t-4:checked~.testimonials #fort-4,
  #t-5:checked~.testimonials #fort-5 {
    top: 0;
    transform: translate3d(0, 0, -90px);
  }

  .cityName {
    font-size: 26px;
    margin-bottom: 13px;
  }

  .testimonials {
    min-height: 500px;
  }

  /* #t-2:checked~.testimonials #fort-1,
  #t-3:checked~.testimonials #fort-2,
  #t-4:checked~.testimonials #fort-3,
  #t-5:checked~.testimonials #fort-4,
  #t-1:checked~.testimonials #fort-5 {
    transform: translate3d(-200%, 0, -180px);
    top: 180px;
  }

  #t-1:checked~.testimonials #fort-2[data-v-1518ecfe],
  #t-2:checked~.testimonials #fort-3[data-v-1518ecfe],
  #t-4:checked~.testimonials #fort-1[data-v-1518ecfe],
  #t-3:checked~.testimonials #fort-4[data-v-1518ecfe],
  #t-4:checked~.testimonials #fort-5[data-v-1518ecfe],
  #t-5:checked~.testimonials #fort-1[data-v-1518ecfe] {
    transform: translate3d(200%, 0, 180px);
    top: 180px;
  } */



  @media (min-width: 400px) and (max-width: 499px) {
    .testimonials .item {
      width: 350px;
    }

    .cityName {
      font-size: 18px;
    }
  }

  @media (min-width: 400px) and (max-width: 499px) {
    .testimonials .item {
      width: 350px;
    }

    .cityName {
      font-size: 18px;
    }

    .testimonials {
      min-height: 450px;
    }
  }

  @media (min-width: 300px) and (max-width: 399px) {
    .testimonials .item {
      width: 300px;
    }

    .cityName {
      font-size: 14px;
      margin-bottom: 17px;
    }

    .testimonials {
      min-height: 450px;
    }

    @media (max-width: 350px) {
      .testimonials .item {
        width: 280px;
      }
    }
  }
}
</style>
 
<script>
const $ = require('jquery');

export default {
  name: 'circle-slider',
  components: {
  },
  watch: {

  },
  props: {
    cards: {
      type: Array,
      require: true
    }
  },
  computed: {

  },
  data: () => ({
    checknumber: 2,
    loopInterval: '',
    disableArrow: false
  }),
  methods: {
    changeChecknumber(type) {
      this.stoploop()
      this.checknumber = (type == 'plus') ? (this.checknumber + 1) : (this.checknumber - 1)
      setTimeout(() => {
        this.startloop()
        this.disableArrow = false
      }, 2000);
    },
    startloop() {
      this.loopInterval = setInterval(() => {
        this.checknumber = this.checknumber < 5 ? (this.checknumber + 1) : 1
      }, 6000);
    },
    stoploop() {
      clearInterval(this.loopInterval)
    }
  },
  created() {
    this.startloop()
  },
}
</script>
