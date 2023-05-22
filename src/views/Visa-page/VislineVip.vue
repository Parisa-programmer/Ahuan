<template>
  <div class="relative" style="">
    <div class="widthAll" style="z-index:1">
      <v-img class="absolute widthAll" src="@/assets/image/visline vip.jpg" height="70vh" style="top:300px;"></v-img>
    </div>
    <div class="widthAll" style="z-index:2;padding-top:150px">
      <v-row justify="center" class=" " style="">
        <div class=" indexDiv" style="z-index:2">
          <v-row justify="center" align="center" style="z-index:2">
            <v-col cols="12" md="6" lg="4" class=" px-3">
              <div class="widthAll cyan darken-3  vislineBox d-inline-block">
                <v-row align="center" justify="center" class="heightAll py-4">
                  <v-icon class="widthAll mt-6" size="55" color="#fff" style="">mdi-account-group-outline</v-icon>
                  <h2 class="vislineBoxText mt-6 white--text">تورهای گروهی</h2>
                  <div class="widthAll mt-12 px-6">
                    <p class="text-center answerText white--text">
                      سفر با تورهای گروهی بدون شک یکی از زیباترین و بهترین تجربیات زندگی هر فرد می‌باشد.
                      به همین منظور تصمیم گرفتیم تا با ارائه مقاله‌ای تحت عنوان تورهای گروهی شما را با جاذبه‌های طبیعی
                      گردشگری بسیار از کشورها آشنا کنیم.
                    </p>
                  </div>
                  <router-link to="/tour/Europe">
                    <v-btn class="my-2" dark text>مشاهده جزئیات</v-btn>
                  </router-link>
                </v-row>
              </div>
            </v-col>
            <v-col cols="12" md="6" lg="4" class=" px-3">
              <div class="widthAll teal darken-2  vislineBox d-inline-block">
                <v-row align="center" justify="center" class="heightAll py-4">
                  <v-icon class="widthAll mt-6" size="55" color="#fff" style="">mdi-airplane-settings</v-icon>
                  <h2 class="vislineBoxText mt-6 white--text">تورهای FIT</h2>
                  <div class="widthAll mt-12 px-6">
                    <p class="text-center answerText white--text">
                      تورهای FIT که اصطلاحا به آن تورهای انفرادی هم می گویند در واقع گردشگر بصورت آزاد ومستقل برای خود
                      برنامه سفر را درخواست می نماید و در تمام نکات سفر مثل نوع هواپیما ، ایرلاین ،هتل و گشت ها صاحب
                      اختیار
                      می باشد.
                    </p>
                  </div>
                  <router-link to="/visline/vip/FIT">
                    <v-btn class="my-2" dark text>مشاهده جزئیات</v-btn>
                  </router-link>
                </v-row>
              </div>
            </v-col>
            <v-col cols="12" md="6" lg="4" class=" px-3">
              <div class="widthAll blue-grey darken-3  vislineBox d-inline-block">
                <v-row align="center" justify="center" class="heightAll py-4">
                  <v-icon class="widthAll mt-6" size="75" color="#fff" style="">mdi-passport</v-icon>
                  <h2 class="vislineBoxText mt-6 white--text">ویزای تک کانادا</h2>
                  <div class="widthAll mt-12 px-6">
                    <p class="text-center answerText white--text" style="height:160px">

                    </p>
                  </div>
                  <router-link to="">
                    <v-btn class="my-2" dark text>مشاهده جزئیات</v-btn>
                  </router-link>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
.vislineBox {
  box-shadow: 0 0 2px rgb(160, 160, 160);

}

.vislineBox:hover {
  box-shadow: 0 0 5px rgb(129, 129, 129);

}

.vislineBoxText {
  color: #4d4d4d
}

.vislineBox:hover .vislineBoxText {
  color: #161616
}
</style>

<script>
export default {
  name: 'visline-vip',
  components: {},
  data: () => ({

  }),
  methods: {

  },
  created() {
    document.title = ' اخذ ویزا - FIT'
    window.scrollTo(0, 0);
    
  }
}
</script>
