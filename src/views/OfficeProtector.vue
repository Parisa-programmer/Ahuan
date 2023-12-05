<template>
  <div class="mt-sm-12 pt-2 pt-sm-12">
    <v-row justify="center">
      <div class="indexDiv my-12 my-sm-0 my-md-12">
        <v-row justify="center" class="relative mt-5 mt-sm-0">
          <v-col cols="12" md="6" class="order-2 order-md-1">
            <h3 class="red--text">دفتر حافظ منافع مشتری</h3>
            <p class="mt-6 text-justify pl-4 font-small-xs" style="line-height:40px">
              برند رسمی آژانس مسافرتی آهوان به خوبی از جنس دغدغه‌های مسافرین آگاه است. نیاز ضروری کسب اعتماد به محصولات
              عرضه شده و اطمینان خاطر مسافرین از دریافت خدمات تورهایی در عالی ترین سطح منجر به تشکیل دفتر حافظ منافع
              مشتریان شد.

              این دپارتمان در حقیقت یک سیستم پیشرفته PTS (Passenger Tracking System) است که خدمات عرضه شده به مسافرین را
              از اولین نقطه تماس آنان با برند
              <b>آهوان</b>
              تا بازگشت از سفر و مرور خاطرات لذت‌بخش آن دنبال می‌کند. بازوی اجرایی مهم این سیستم مرکز تماس آنلاین مستقر در
              تهران است.
            </p>
          </v-col>
          <v-col cols="12" md="6" class="order-1 order-md-2">
            <img width="100%" src="@/assets/image/2حافظ-منافع-مشتری.png" alt="">
          </v-col>
          <v-col cols="12" class="order-3">
            <p class="mt-1 text-justify pa-4 grey lighten-2 font-small-xs" style="line-height:40px">
              <b class="red--text">دفتر حافظ منافع مشتریان</b>
              به مسافرین اطمینان خاطر می‌دهد که صدای آنان توسط برگزارکنندگان تور شنیده می‌شود و دغدغه‌های آنان در طراحی و
              اجرای پکیج‌ها لحاظ می‌گردد. شما در هر لحظه از شبانه ­روز می‌توانید نظرات، انتقادات و پیشنهادات خود را از
              طریق فرم ذیل به اطلاع تصمیم گیران پروژه برسانید و در حین لذت بردن از تورهای ویژه آهوان نیز نمایندگان تام
              الختیار این برند را همگام و همراه در کنار خود داشته باشید.
            </p>
          </v-col>
        </v-row>
      </div>
    </v-row>
    <v-row justify="center" class="grey lighten-2">
      <div class="indexDiv">
        <v-form ref="sendTextForm" lazy-validation name="sendTextForm">
          <v-card outlined class="my-6">
            <v-row align="center">
              <h4 class="ma-3">
                دفتر حافظ منافع مشتری
              </h4>
            </v-row>
            <v-divider></v-divider>
            <v-row class="">
              <v-col cols="12" sm="4" class="px-2 px-md-4 py-2 ticketForm">
                <label for="" class="mr-4">نام و نام خانوادگی
                  <span class="red--text">*</span>
                </label>
                <v-text-field filled clsss="grey" :rules="nameRules" v-model="theUser.name"></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" class="px-2 px-md-4 py-2 ticketForm">
                <label for="" class="mr-4">تلفن همراه
                  <span class="red--text">*</span>
                </label>
                <v-text-field filled clsss="grey" :rules="phoneRules" v-model="theUser.phone"></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" class="px-2 px-md-4 py-2 ticketForm">
                <label for="" class="mr-4">ایمیل</label>
                <v-text-field filled clsss="grey" :rules="emailRules2" v-model="theUser.mail"></v-text-field>
              </v-col>
              <v-col cols="12" class="px-4 my-4">
                <label for="" class="mr-4 d-block">پیشنهاد شما مربوط می شود به:
                  <span class="red--text">*</span>
                </label>
                <v-row>
                  <v-checkbox class="mx-3 checkboxFormOpinian" v-model="theUser.about.first" label="قبل سفر" color="red"
                    hide-details></v-checkbox>
                  <v-checkbox class="mx-3 checkboxFormOpinian" v-model="theUser.about.twice" label="هنگام ثبت نام"
                    color="red" hide-details></v-checkbox>
                  <v-checkbox class="mx-3 checkboxFormOpinian" v-model="theUser.about.Third" label="در حین سفر"
                    color="red" hide-details></v-checkbox>
                  <v-checkbox class="mx-3 checkboxFormOpinian" v-model="theUser.about.Fourth" label="هنگام برگشت"
                    color="red" hide-details></v-checkbox>
                </v-row>
              </v-col>
              <v-col cols="12" class="px-4 my-6">
                <label for="" class="mr-4 d-block">موضوع طرح شده توسط شما:
                  <span class="red--text">*</span>
                </label>
                <v-row class="">
                  <v-checkbox class="mx-3 checkboxFormOpinian" v-model="theUser.title.first" label="نحوه ثبت نام"
                    color="red" hide-details></v-checkbox>
                  <v-checkbox class="mx-3 checkboxFormOpinian" v-model="theUser.title.twice" label="خدمات پرواز"
                    color="red" hide-details></v-checkbox>
                  <v-checkbox class="mx-3 checkboxFormOpinian" v-model="theUser.title.Third" label="نحوه برخورد کانتر"
                    color="red" hide-details></v-checkbox>
                  <v-checkbox class="mx-3 checkboxFormOpinian" v-model="theUser.title.Fourth" label="ارتباط با تور لیدر"
                    color="red" hide-details></v-checkbox>
                  <v-checkbox class="mx-3 checkboxFormOpinian" v-model="theUser.title.fifth" label="نحوه اطلاع رسانی"
                    color="red" hide-details></v-checkbox>
                  <v-checkbox class="mx-3 checkboxFormOpinian" v-model="theUser.title.sixth" label="خدمات هتل" color="red"
                    hide-details></v-checkbox>
                  <v-checkbox class="mx-3 checkboxFormOpinian" v-model="theUser.title.seventh" label="خدمات بیمه"
                    color="red" hide-details></v-checkbox>
                  <v-checkbox class="mr-3" v-model="theUser.title.Eighth" label="سایر" color="red"
                    hide-details></v-checkbox>
                </v-row>
              </v-col>
              <v-col cols="12" class="px-4 py-2 ticketForm">
                <label for="" class="mr-4">در صورت عقد قرار داد
                  <span class="red--text">(شماره قرار داد وارد شود)</span></label>
                <v-text-field filled clsss="grey" v-model="theUser.contractNumber"></v-text-field>
              </v-col>
              <v-col cols="12" class="px-4 py-2 ticketForm">
                <label for="" class="mr-4">پیام شما:
                  <span class="red--text">( حداکثر دو خط )</span>
                </label>
                <v-textarea v-model="theUser.text" name="input-7-1" :rules="emptyRules" variant="filled" auto-grow
                  model-value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."></v-textarea>
              </v-col>
            </v-row>
            <v-row justify="end">
              <v-btn class="px-12 float-left ma-4" @click="sendFormOpinion" color="red" dark>ارسال</v-btn>
            </v-row>
          </v-card>
        </v-form>
        <v-dialog v-if="sendTextDialog" class="rounded-lg loginDialog" v-model="sendTextDialog"
          style="z-index: 9999999999998" width="450">
          <v-card class="pa-2 hideOver relative" style="border-radius: 10px;">
            <div class="rounded-xl absolute grey lighten-4" style="height: 50px;width:50px;bottom:20px;right: -20px;">
            </div>
            <div class="rounded-circle absolute red lighten-5" style="height: 50px;width:50px;top:-20px;left: -20px;">
            </div>
            <div class="rounded-xl absolute grey lighten-4" style="height: 45px;width: 106px;bottom: -38px;right: 50%;">
            </div>
            <v-icon class="absolute black--text" @click="sendTextDialog = false"
              style="top: 5px;right: 5px;">mdi-close</v-icon>
            <v-row justify="center">
              <img class="my-6" src="@/assets/image/success.png" alt="" width="130px">
              <h4 class="green--text text--darken-2 my-3 widthAll text-center">ارسال نظر با موفقیت انجام شد.</h4>
            </v-row>
          </v-card>
        </v-dialog>
      </div>
    </v-row>
  </div>
</template>
 
<script>
export default {
  name: 'office-protector',
  metaInfo: {
    title: 'دفتر حافظ منافع مشتری',
    meta: [
      { name: 'description', content: '' },
    ]
  },
  data() {
    return {
      nameRules: [
        v => !!v || 'پر کردن فیلد نام اجباریست.',
        v => (v || '').indexOf(0) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(1) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(2) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(3) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(4) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(5) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(6) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(7) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(8) < 0 || 'فرمت صحیح نیست',
        v => (v || '').indexOf(9) < 0 || 'فرمت صحیح نیست',
      ],
      theUser: {
        name: '',
        phone: '',
        mail: '',
        about: {
          first: false,
          twice: false,
          Third: false,
          Fourth: false,
        },
        title: {
          first: false,
          twice: false,
          Third: false,
          Fourth: false,
          fifth: false,
          sixth: false,
          seventh: false,
          Eighth: false,
        },
        contractNumber: '',
        text: ''
      },
      phoneRules: [
        v => !!v || 'پر کردن فیلد تلفن اجباریست.',
        v => (v.length == 11) || 'شماره تلفن صحیح نیست.',
      ],
      emailRules2: [
        v => !v || /.+@.+\..+/.test(v) || 'ایمیل نادرست میباشد.',
      ],
      emptyRules: [
        v => !!v || 'پر کردن این فیلد اجباریست.'
      ],
      sendTextDialog: false,
    }
  },
  components: {
  },
  computed: {
    destination() {
      return StorageEvent.destinations.find(
        destination => destination.slug === this.slug
      )
    }
  },
  methods: {
    disabelDate(formatted, dateMoment, checkingFor) {
      return (
        formatted === new Date() ||
        dateMoment.jMonth() === 4 ||  // means "mordad"
        dateMoment.locale('en').format('dddd') === 'Friday'
      )
    },
    sendFormOpinion() {
      this.showAlert = false
      let self = this
      this.$refs.sendTextForm.validate()
      if (
        (this.theUser.about.first == false && this.theUser.about.twice == false && this.theUser.about.Third == false && this.theUser.about.Fourth == false) ||
        (self.theUser.title.first == false && self.theUser.title.twice == false && self.theUser.title.Third == false && self.theUser.title.Fourth == false && self.theUser.title.fifth == false && self.theUser.title.sixth == false && self.theUser.title.seventh == false && self.theUser.title.Eighth == false) ||
        (!self.$refs.sendTextForm.validate())
      ) {
        self.alertType = 'error'
        self.alertText = 'لطفا فیلدهای اجباری را بدرستی تکمیل کنید.'
        self.showAlert = true
      } else {
        self.isLoadingAxios = true
        setTimeout(() => {
          self.isLoadingAxios = false
          self.theUser = {
            name: '',
            phone: '',
            mail: '',
            about: {
              first: false,
              twice: false,
              Third: false,
              Fourth: false,
            },
            title: {
              first: false,
              twice: false,
              Third: false,
              Fourth: false,
              fifth: false,
              sixth: false,
              seventh: false,
              Eighth: false,
            },
            contractNumber: '',
            text: ''
          }
          self.sendTextDialog = true
          self.$refs.sendTextForm.resetValidation()
          setTimeout(() => {
            self.sendTextDialog = false
          }, 3000);
        }, 500);
      }

    }
  },
  created() {
    window.scrollTo(0, 0);
  },
}
</script>