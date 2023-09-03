<template>
  <div v-cloak class="widthAll">
    <!-- footer -->
    <v-row justify="center" class="grey lighten-3">
      <div class=" indexDiv px-sm-6 pb-sm-0 pt-2 pt-sm-0  rounded-lg">
        <v-row>
          <v-col cols="12" md="6" class="pa-0 pa-sm-3">
            <v-row class=" mt-2">
              <v-col cols="5" md="6" class="pa-0 pa-sm-3 pb-sm-0">
                <h4>درباره آهوان</h4>
                <ul class="mr-4 mr-md-2 my-2">

                  <li class=" my-2 my-sm-4 caption" style="font-family: Byekan !important;">
                    <router-link to="/contact-us" class="text-decoration-none black--text">
                      تماس با ما
                    </router-link>
                  </li>
                  <li class=" my-2 my-sm-4 caption" style="font-family: Byekan !important;">درباره ما</li>
                  <li class=" my-2 my-sm-4 caption" style="font-family: Byekan !important;">سوالات متداول</li>
                  <li class=" my-2 my-sm-4 caption" style="font-family: Byekan !important;">فرصت‌های شغلی</li>
                  <li class=" my-2 my-sm-4 caption" style="font-family: Byekan !important;">
                    <router-link to="/office-protector-customer-interests" class="text-decoration-none black--text">دفتر
                      حافظ منافع مشتری</router-link>
                  </li>

                </ul>
              </v-col>
              <v-col cols="7" md="6" class="pa-0 pa-sm-3">
                <h4>پیشنهادات آهوان</h4>
                <ul class="mr-4 mr-md-2 my-2">
                  <router-link to="visa" class="text-decoration-none">
                    <li class=" my-2 my-sm-4 caption" style="font-family: Byekan !important;">خدمات ویزا آهوان</li>
                  </router-link>
                  <router-link to="/tour-page" class="text-decoration-none">
                    <li class=" my-2 my-sm-4 caption" style="font-family: Byekan !important;">تورهای ویژه آهوان</li>
                  </router-link>
                  <!-- <li class=" my-2 my-sm-4 caption" style="font-family: Byekan !important;">هتل‌های ویژه آهوان</li> -->
                  <li class=" my-2 my-sm-4 caption" style="font-family: Byekan !important;">پروازهای ویژه آهوان</li>
                  <li class=" my-2 my-sm-4 caption" style="font-family: Byekan !important;">پرفروشترین تورهای داخلی</li>
                  <li class=" my-2 my-sm-4 caption" style="font-family: Byekan !important;">پرفروشترین تورهای خارجی</li>
                  <li class=" my-2 my-sm-4 caption" style="font-family: Byekan !important;">پرفروشترین هتل‌های داخلی</li>
                  <li class=" my-2 my-sm-4 caption" style="font-family: Byekan !important;">پرفروشترین هتل‌های خارجی</li>
                </ul>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6" class=" ">
            <v-row>
              <p class="body-2 text-justify grey--text text--darken-3 my-6"
                style="font-family: Byekan !important;line-height:25px">
                آهوان با ارائه بهترین و با کیفیت ترین خدمات گردشگری به صورت آنلاین
                میکوشد تا بعنوان معتبرترین شرکت گردشگری در ایران تجربه لذت بخش یک رزرو
                اینترنتی را برایتان تداعی کند.
              </p>
            </v-row>
            <v-row class="footerImagesParent mt-2 justify-center justify-md-space-between">
              <a referrerpolicy="origin" target="_blank" rel="nofollow"
                href="https://trustseal.enamad.ir/?id=73832&Code=v3MxZxRYBX3uIkiwT158">
                <img class="ml-2 mx-md-1" src="../assets/image/logo (1).png">
              </a>
              <a referrerpolicy="origin" target="_blank" rel="nofollow"
                href="https://logo.samandehi.ir/Verify.aspx?id=104501&p=rfthobpdaodsdshwobpdrfth">
                <img class="mx-2 mx-md-1" src="../assets/image/logo.png">
              </a>
              <a target="_blank" rel="nofollow" href="https://www.cao.ir/">
                <img class="mx-2 mx-md-1" src="../assets/image/cao.png">
              </a>
              <a target="_blank" rel="nofollow" href="http://www.aira.ir/">
                <img class="mx-2 mx-md-1" src="../assets/image/lohoaira.png">
              </a>
              <a target="_blank" rel="nofollow" href="https://www.cao.ir/paxrights">
                <img class="mx-2 mr-md-1" src="../assets/image/Passenger.png">
              </a>
            </v-row>
            <v-row class="grey--text text--darken-3 mt-4 font-small-xs" style="font-family: Byekan !important;">آدرس:ضلع
              شمال غربی میدان آرژانتین، ساختمان بانک تجارت، شماره 18</v-row>
            <v-row class="grey--text text--darken-3 mt-3" align="center" style="font-family: Byekan !important;">
              <v-col class="grey--text text--darken-3 font-small-xs">شماره تماس:41889-021</v-col>
              <v-col>
                <a href="http://wa.me/+989106859006">
                  <v-icon class="mx-1 cursorPointer whatsup-footer">mdi-whatsapp</v-icon>
                </a>
                <a href="mailto: info@ahuan.ir">
                  <v-icon class="mx-1 cursorPointer email-footer">mdi-email-outline</v-icon>
                </a>
                <a href="https://instagram.com/ahuan.ir?igshid=YmMyMTA2M2Y=">
                  <v-icon class="mx-1 cursorPointer instagram-footer">mdi-instagram</v-icon>
                </a>
                <a href="https://t.me/ahuanchannel">
                  <v-icon class="mx-1 cursorPointer send-footer" style="transform: rotate(-36deg);">mdi-send</v-icon>
                </a>
              </v-col>
            </v-row>
            <v-row class="body-2 justify-center justify-sm-start grey--text text--darken-3 mt-4"
              style="font-family: Byekan !important;">
              کلیه حقوق این وب سایت متعلق به شرکت خدمات مسافرتی آهوان می‌باشد.
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-row>
  </div>
</template>

<script>
import '@/assets/css/main.css'
import axios from 'axios'
axios.defaults.headers.common['Client-Token'] = 'Ahuan-Wapi?123'

// import style from '../css/main.css'
export default {
  name: 'FooterSite',


}
</script>
