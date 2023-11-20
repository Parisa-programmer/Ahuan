<template>
  <div>
    <v-row class="mt-6 mt-sm-12 pt-12">
      <img
        src="@/assets/image/support-background-contact-us.jpg"
        class=""
        style="min-width: 100%"
        alt=""
      />
    </v-row>
    <v-row justify="center">
      <div class="mainParent" style="">
        <v-row justify="center" class="relative">
          <v-col cols="12" lg="6">
            <v-row justify="end" class="justify-center justify-lg-end">
              <v-card class="white pa-6 pb-4 ml-lg-2 contact-card">
                <v-row justify="center">
                  <v-icon size="50" color="black">mdi-map-marker-radius</v-icon>
                </v-row>
                <v-row justify="center" class="mt-4"> آدرس </v-row>
                <v-row justify="center" class="mt-8">
                  ضلع شمال غربی میدان آرژانتین، ساختمان بانک تجارت، شماره 18
                </v-row>
                <v-row justify="center" class="mt-3">
                  کدپستی :
                  <b class="mr-3">1513934413</b>
                </v-row>
                <div class="my-4">
                  <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.6383489215717!2d51.41478231502182!3d35.73720065493098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e06b497b0fd4b%3A0xf7e742edc99c4379!2z2LTYsdqp2Kog2K7Yr9mF2KfYqiDZhdiz2KfZgdix2KrbjCDYotmH2YjYp9mG!5e0!3m2!1sfa!2snl!4v1675151376304!5m2!1sfa!2snl" width="100%" height="200" style="border:1;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
                  <!-- <div id="map"></div> -->
                  <v-img
                    src="@/assets/image/ahuan-map.png"
                    style="
                      width: 100%;
                      height: 200px;
                      background: #eee;
                      border: 2px solid rgb(233, 233, 233);
                    "
                  ></v-img>
                </div>
              </v-card>
            </v-row>
          </v-col>
          <v-col cols="12" lg="6">
            <v-row class="justify-center justify-lg-start">
              <v-card class="white pa-6 mr-lg-2 contact-card">
                <v-row justify="center">
                  <v-icon size="50" color="black">mdi-phone</v-icon>
                </v-row>
                <v-row justify="center" class="mt-4"> تماس با ما </v-row>
                <div class="widthAll relative mt-8">
                  <v-row>
                    <span
                      class="mb-2 font-small-xs"
                      style="font-family: Byekan !important; background: #fff"
                      >شماره تماس شرکت آهوان:</span
                    >
                    <b
                      class="font-small-xs font-waight-bold white pr-sm-3"
                      style="font-family: Byekan !important"
                      >021-41889</b
                    >
                  </v-row>
                </div>
                <div class="widthAll relative mt-3">
                  <v-row>
                    <span
                      class="mb-2 font-small-xs"
                      style="font-family: Byekan !important; background: #fff"
                      >شماره تماس هتل آهوان چابکسر:</span
                    >
                    <b
                      class="font-small-xs font-waight-bold white pr-sm-3"
                      style="font-family: Byekan !important"
                      >013-4205</b
                    >
                  </v-row>
                </div>
                <div class="widthAll relative mt-3">
                  <v-row>
                    <span
                      class="mb-2 font-small-xs"
                      style="font-family: Byekan !important; background: #fff"
                      >جهت ارتباط با مشاوران تورهای داخلی:</span
                    >
                    <b
                      class="font-small-xs font-waight-bold white pr-sm-3"
                      style="font-family: Byekan !important"
                      >داخلی‌های 114 - 116 - 117 - 121 - 129</b
                    >
                  </v-row>
                </div>
                <div class="widthAll relative mt-3">
                  <v-row>
                    <span
                      class="mb-2 font-small-xs"
                      style="font-family: Byekan !important; background: #fff"
                      >جهت ارتباط با مشاوران تورهای خارجی:</span
                    >
                    <b
                      class="font-small-xs font-waight-bold white pr-sm-3"
                      style="font-family: Byekan !important"
                    >
                      116 - 117 - 118 - 138 - 139 - 140 - 141</b
                    >
                  </v-row>
                </div>
                <div class="widthAll relative mt-3">
                  <v-row>
                    <span
                      class="mb-2 font-small-xs"
                      style="font-family: Byekan !important; background: #fff"
                      >جهت ارتباط با مشاوران صدور بلیط:</span
                    >
                    <b
                      class="font-small-xs font-waight-bold white pr-sm-3"
                      style="font-family: Byekan !important"
                      >داخلی های 127 - 125 - 123 - 122</b
                    >
                  </v-row>
                </div>
                <div class="widthAll relative mt-3">
                  <v-row>
                    <span
                      class="mb-2 font-small-xs"
                      style="font-family: Byekan !important; background: #fff"
                      >جهت رزرو هتل آهوان چابکسر(دفتر تهران):</span
                    >
                    <b
                      class="font-small-xs font-waight-bold white pr-sm-3"
                      style="font-family: Byekan !important"
                      >داخلی های 132 - 332</b
                    >
                  </v-row>
                </div>
                <div class="widthAll relative">
                  <v-row justify="center">
                    <a
                      rel="nofollow"
                      href="mailto:info@ahuan.ir"
                      class="text-decoration-none"
                    >
                      <v-icon size="28" class="mx-1 cursorPointer mt-1"
                        >mdi-email-outline</v-icon
                      >
                    </a>
                    <a
                      rel="nofollow"
                      href="https://www.instagram.com/ahuan.tour/"
                      class="text-decoration-none"
                    >
                      <v-icon size="26" class="mx-1 cursorPointer mt-1"
                        >mdi-instagram</v-icon
                      >
                    </a>
                    <a rel="nofollow" href="" class="text-decoration-none">
                      <v-icon
                        class="mx-1 mt-1 cursorPointer"
                        style="transform: rotate(-40deg)"
                        >mdi-send</v-icon
                      >
                    </a>
                    <!-- <span class="mb-2 font-small-xs" style="font-family: Byekan !important; background: #fff;">ایمیل:</span>
                        <b class="font-small-xs font-waight-bold white pr-sm-3" style="font-family: Byekan !important;">info@ahuan.ir</b> -->
                  </v-row>
                </div>
                <!-- <v-row justify="center" class="mt-2">
                      <span class="caption" style="font-family: Byekan !important;">تور‌های خارجی</span>
                      <v-spacer></v-spacer>
                      <span>1430</span>
                    </v-row> -->
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-row>
  </div>
</template>
<style>
.contact-card {
  width: 600px;
}

.mainParent {
  min-height: 500px;
  margin-top: -50px;
}

@media (max-width: 599px) {
  .contact-card {
    width: 500px;
  }

  .mainParent {
    margin-top: -25px;
  }
}

@media (max-width: 499px) {
  .contact-card {
    width: 400px;
  }
}

@media (max-width: 399px) {
  .contact-card {
    width: 350px;
  }
}
</style>
<script>
export default {
  name: "contact-us",
  data() {
    return {
      nameRules: [
        (v) => !!v || "پر کردن فیلد نام اجباریست.",
        (v) => (v || "").indexOf(0) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(1) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(2) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(3) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(4) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(5) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(6) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(7) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(8) < 0 || "فرمت صحیح نیست",
        (v) => (v || "").indexOf(9) < 0 || "فرمت صحیح نیست",
      ],
      theUser: {
        name: "",
        phone: "",
        mail: "",
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
        contractNumber: "",
        text: "",
      },
      phoneRules: [
        (v) => !!v || "پر کردن فیلد تلفن اجباریست.",
        (v) => v.length == 11 || "شماره تلفن صحیح نیست.",
      ],
      emailRules2: [(v) => !v || /.+@.+\..+/.test(v) || "ایمیل نادرست میباشد."],
      emptyRules: [(v) => !!v || "پر کردن این فیلد اجباریست."],
      sendTextDialog: false,
    };
  },
  components: {},
  computed: {
    destination() {
      return StorageEvent.destinations.find(
        (destination) => destination.slug === this.slug
      );
    },
  },
  methods: {
    disabelDate(formatted, dateMoment, checkingFor) {
      return (
        formatted === new Date() ||
        dateMoment.jMonth() === 4 || // means "mordad"
        dateMoment.locale("en").format("dddd") === "Friday"
      );
    },
    sendFormOpinion() {
      this.showAlert = false;
      let self = this;
      this.$refs.sendTextForm.validate();
      if (
        (this.theUser.about.first == false &&
          this.theUser.about.twice == false &&
          this.theUser.about.Third == false &&
          this.theUser.about.Fourth == false) ||
        (self.theUser.title.first == false &&
          self.theUser.title.twice == false &&
          self.theUser.title.Third == false &&
          self.theUser.title.Fourth == false &&
          self.theUser.title.fifth == false &&
          self.theUser.title.sixth == false &&
          self.theUser.title.seventh == false &&
          self.theUser.title.Eighth == false) ||
        !self.$refs.sendTextForm.validate()
      ) {
        self.alertType = "error";
        self.alertText = "لطفا فیلدهای اجباری را بدرستی تکمیل کنید.";
        self.showAlert = true;
      } else {
        self.isLoadingAxios = true;
        setTimeout(() => {
          self.isLoadingAxios = false;
          self.theUser = {
            name: "",
            phone: "",
            mail: "",
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
            contractNumber: "",
            text: "",
          };
          self.sendTextDialog = true;
          self.$refs.sendTextForm.resetValidation();
          setTimeout(() => {
            self.sendTextDialog = false;
          }, 3000);
        }, 500);
      }
    },
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>