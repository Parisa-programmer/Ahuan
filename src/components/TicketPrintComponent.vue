<template>
  <div class="relative" style="opacity: 0; display: none; align-items: center">
    <div class="" id="theFile" style="">
      <v-row
        justify="center"
        v-for="(item, i) in params"
        :key="i"
        class="heightAll"
        style="height: 1114px; position: relative"
      >
        <div
          v-if="item.ETStatus == 'R'"
          style="
            width: 100%;
            position: absolute;
            z-index: 9999999999;
            top: 400px;
          "
        >
          <b
            style="
              transform: rotate(-45deg);
              padding: 10px 5px;
              font-size: 100px;
              color: red;
              margin-right: 200px;
              margin-top: 200px;
              border-radius: 20px;
              border: 2px solid red;
            "
            >کنسل شد</b
          >
        </div>
        <table
          width="750"
          height="550"
          class="main-tbl b2"
          align="center"
          style="margin-top: 50px"
        >
          <tr>
            <td height="410">
              <table
                width="730"
                height="390"
                class="nested-table b2"
                align="center"
                style="margin: auto"
              >
                <tr>
                  <td width="22%" class="b2 bb1 bln">نوع بلیط</td>
                  <td width="22%" class="b2 bb1 brn">Kind of Ticket</td>
                  <td width="28%" colspan="2" class="b2 bb1 bln">رده سنی</td>
                  <td width="28%" colspan="2" class="b2 bb1 brn">Age</td>
                </tr>
                <tr>
                  <td width="22%" class="b2 btnl bt1 bln">
                    {{ item.ticketType == "s" ? "سیستمی" : "چارتری" }}
                  </td>
                  <td width="22%" class="b2 btnl bt1 brn">
                    {{ item.ticketType == "s" ? "system" : "charter" }}
                  </td>
                  <td width="28%" colspan="2" class="b2 btnl bt1 bln">
                    {{
                      item.PassenferAgeType == "{Adult}"
                        ? "بزرگسال"
                        : item.PassenferAgeType == "{Child}"
                        ? "کودک"
                        : "نوزاد"
                    }}
                  </td>
                  <td width="28%" colspan="2" class="b2 btnl bt1 brn">
                    {{
                      item.PassenferAgeType == "{Adult}"
                        ? "ADL"
                        : item.PassenferAgeType == "{Child}"
                        ? "CHD"
                        : "INF"
                    }}
                  </td>
                </tr>

                <tr>
                  <td width="22%" class="b2 bb1 bln">تاریخ و زمان صدور بلیط</td>
                  <td width="22%" class="b2 bb1 brn">Date & Time of Issue</td>
                  <td width="12%" class="b2 bb1 bln">نوع سفر</td>
                  <td width="12%" class="b2 bb1 brn">JourneyT type</td>
                  <td width="17%" class="b2 bb1 bln">شماره بلیط</td>
                  <td width="17%" class="b2 bb1 brn">Ticket Number</td>
                </tr>
                <tr>
                  <td width="22%" class="b2 btnl bt1 bln">
                    {{ item.bookTime }}
                  </td>
                  <td width="22%" class="b2 btnl bt1 brn">
                    {{ item.bookDate }}
                  </td>
                  <td width="29%" colspan="2" class="b2 btnl bt1 bln">
                    {{ item.JourneyType == "Domestic" ? "داخلی" : "خارجی" }}
                  </td>
                  <td width="29%" colspan="2" class="b2 btnl bt1 bln">
                    {{ item.Ticket[1] }}
                  </td>
                </tr>

                <tr>
                  <td colspan="2" width="44%" class="b2 p0" height="75">
                    <table width="100%" height="100%" class="bc">
                      <tr>
                        <td height="25" class="bb2 bl1">بار مجاز</td>
                        <td height="25" class="bb2 bl1">زمان پرواز</td>
                        <td height="25" class="bb2">تاریخ پرواز (میلادی)</td>
                      </tr>
                      <tr>
                        <td
                          height="25"
                          style="
                            border-bottom: solid 2px black;
                            border-left: solid 1px black;
                          "
                        >
                          Baggage Allowance
                        </td>
                        <td
                          height="25"
                          style="
                            border-bottom: solid 2px black;
                            border-left: solid 1px black;
                          "
                        >
                          Flight Time
                        </td>
                        <td
                          height="25"
                          style="
                            border-bottom: solid 2px black;
                            direction: ltr !important;
                          "
                        >
                          Flight Date(AD)
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="25"
                          class="bl1"
                          style="direction: ltr !important"
                        >
                          {{
                            item.fare
                              ? "item.fare.BaggageAllowanceWeight"
                              : "20 Kg"
                          }}
                        </td>
                        <td height="25" class="bl1">
                          {{ item.DepartureDT[1] }}
                        </td>
                        <td height="25">
                          <!-- .replace(/-/g, "/") -->
                          {{ item.DepartureDT[0] }}
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" class="p0" height="75">
                          <table width="100%" height="100%" class="bc">
                            <tr>
                              <td height="25" class="bt2 bb1">
                                نام مسافر | Passenger Name
                              </td>
                            </tr>
                            <tr>
                              <!-- <td height="52" class="" style="display:none">محمد حسین هدایت آراللوی کوچک</td> -->
                              <td height="52" style="text-align: center">
                                {{
                                  item.PassenferFirstName +
                                  " " +
                                  item.PassenferLastName
                                }}
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" class="p0" height="110">
                          <table width="100%" height="100%" class="bc">
                            <tr>
                              <td height="25" class="bt2 bb1">PNR</td>
                            </tr>
                            <tr>
                              <td height="75" class="">{{ item.PNR }}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td colspan="4" width="56%" class="b2 p0" height="75">
                    <table width="100%" height="100%" class="bc">
                      <tr>
                        <td height="25" class="bb2 bl1">تاریخ پرواز (شمسی)</td>
                        <td height="25" class="bb2 bl1">کلاس پروازی</td>
                        <td height="25" class="bb2 bl2">شماره پرواز</td>
                        <td class="bb2">ایرلاین</td>
                        <td class="bb2">Airline</td>
                      </tr>
                      <tr>
                        <td
                          height="25"
                          class="bb2 bl1"
                          style="direction: ltr !important"
                        >
                          Flight Date(HD)
                        </td>
                        <td height="25" class="bb2 bl1">Flight Class</td>
                        <td height="25" class="bb2 bl2">Flight No</td>
                        <td rowspan="2">
                          {{
                            item.airline == "I3"
                              ? "آتا"
                              : item.airline == "Y9"
                              ? "کیش ایر"
                              : item.airline == "JI"
                              ? "معراج"
                              : item.airline == "QB"
                              ? "قشم‌ایر"
                              : item.airline == "IV"
                              ? "کاسپین"
                              : item.airline == "HH"
                              ? "تابان"
                              : item.airline == "EP"
                              ? "آسمان"
                              : item.airline == "ZV"
                              ? "زاگرس"
                              : item.airline == "VR"
                              ? "وارش"
                              : item.airline == "NV"
                              ? "نفت"
                              : item.airline == "FP"
                              ? "فلای‌پرشیا"
                              : item.airline == "IRZ"
                              ? "ساها"
                              : item.airline == "IS"
                              ? "سپهران"
                              : item.airline == "A1"
                              ? "اروان"
                              : item.airline == "RI"
                              ? "چابهار"
                              : item.airline == "W5"
                              ? "ماهان"
                              : item.airline == "IR"
                              ? "ایران‌ایر"
                              : item.airline == "PA"
                              ? "پارس‌ایر"
                              : item.airline == "PY"
                              ? "پویاایر"
                              : item.airline == "B9"
                              ? "ایرتور"
                              : item.airline == "A7"
                              ? "آساجت"
                              : ""
                          }}
                        </td>
                        <td rowspan="2">
                          <img
                            :src="
                              item.airline == 'I3'
                                ? require('@/assets/image/لوگوی_آتا.png')
                                : item.airline == 'Y9'
                                ? require('@/assets/image/لوگوی_کیش ایر.png')
                                : item.airline == 'JI'
                                ? require('@/assets/image/لوگوی_معراج.png')
                                : item.airline == 'QB'
                                ? require('@/assets/image/لوگوی_قشم ایر.png')
                                : item.airline == 'IV'
                                ? require('@/assets/image/لوگوی_کاسپین.png')
                                : item.airline == 'HH'
                                ? require('@/assets/image/لوگوی_تابان.png')
                                : item.airline == 'EP'
                                ? require('@/assets/image/لوگوآسمان2.jpg')
                                : item.airline == 'ZV'
                                ? require('@/assets/image/zagros.png')
                                : item.airline == 'VR'
                                ? require('@/assets/image/لوگوی_وارش.png')
                                : item.airline == 'NV'
                                ? require('@/assets/image/لوگوی_نفت.png')
                                : item.airline == 'IRZ'
                                ? require('@/assets/image/لوگوی_ساها.png')
                                : item.airline == 'FP'
                                ? require('@/assets/image/لوگوی_فلای‌پرشی.png')
                                : item.airline == 'IS'
                                ? require('@/assets/image/لوگوی_سپهران.png')
                                : item.airline == 'A1'
                                ? require('@/assets/image/لوگوی_ایر1.png')
                                : item.airline == 'RI'
                                ? require('@/assets/image/لوگوی_چابهار.png')
                                : item.airline == 'W5'
                                ? require('@/assets/image/لوگوماهان.jpg')
                                : item.airline == 'IR'
                                ? require('@/assets/image/لوگوایران‌ایر.jpg')
                                : item.airline == 'PA'
                                ? require('@/assets/image/لوگوی_پارس ایر.png')
                                : item.airline == 'PY'
                                ? require('@/assets/image/لوگوی_پویاایر.png')
                                : item.airline == 'B9'
                                ? require('@/assets/image/لوگوی_ایرتور.png')
                                : item.airline == 'A7'
                                ? require('@/assets/image/لوگوی_آساجت.png')
                                : ''
                            "
                            alt=""
                            class="rounded-circle"
                            width="40"
                            height="40"
                            style=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <td height="25" class="bl1">
                          {{ item.longDateTime1 }}
                        </td>
                        <td height="25" class="bl1">
                          <!-- Economy ( -->
                          {{ item.FlightClass }}
                          <!-- ) -->
                        </td>
                        <td height="25" class="bl2">{{ item.FlightNo }}</td>
                      </tr>
                      <tr>
                        <td colspan="3" class="bl2 p0" height="75">
                          <table width="100%" height="100%" class="bc">
                            <tr>
                              <td height="25" class="bt2 bb1">مبداء</td>
                              <td height="25" class="bt2 bb1 bl2">Origion</td>
                              <td height="25" class="bt2 bb1">مقصد</td>
                              <td height="25" class="bt2 bb1">Destination</td>
                            </tr>
                            <tr>
                              <td height="24" colspan="2" class="bl2 bb1">
                                {{ item.OriginAprt }}
                              </td>
                              <td height="24" colspan="2" class="bb1">
                                {{ item.DestinationAprt }}
                              </td>
                            </tr>
                            <tr>
                              <td height="25" colspan="2" class="bl2">
                                {{ item.Origin }}
                              </td>
                              <td height="25" colspan="2">
                                {{ item.Destination }}
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td colspan="2" class="p0" height="75">
                          <table width="100%" height="100%" class="bc">
                            <tr>
                              <td height="25" class="bt2 bb1">قیمت بلیط</td>
                              <td height="25" class="bt2 bb1">Ticket Price</td>
                            </tr>
                            <tr>
                              <td height="52" colspan="2">
                                {{ separatePrice(item.price) }} ریال
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" class="bl2 p0" height="110">
                          <table width="100%" height="100%" class="bc">
                            <tr>
                              <td height="25" class="bt2 bb1">صادر کننده</td>
                              <td height="25" class="bt2 bb1">Agent</td>
                            </tr>
                            <tr>
                              <td height="45" colspan="2">
                                <img
                                  src="@/assets/image/ticket-logo.png"
                                  style="
                                    height: 45px;
                                    padding: 0;
                                    margin-top: 15px;
                                  "
                                />
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td colspan="2" class="p0" height="110">
                          <table width="100%" height="100%" class="bc">
                            <tr>
                              <td
                                height="110"
                                colspan="2"
                                class="bt2"
                                style="
                                  display: flex;
                                  justify-content: center;
                                  align-items: center;
                                "
                              >
                                <VueQRCodeComponent
                                  :size="120"
                                  :text="
                                    (item.airline == 'I3'
                                      ? 'http://ra.ataair.ir'
                                      : item.airline == 'Y9'
                                      ? 'https://crs.kishairlines.ir'
                                      : item.airline == 'QB'
                                      ? 'http://pra.qeshmairline.com'
                                      : item.airline == 'HH'
                                      ? 'http://epay.taban.aero'
                                      : item.airline == 'EP'
                                      ? 'http://ra.iaa.ir'
                                      : item.airline == 'ZV'
                                      ? 'http://ra.zagrosairlines.com'
                                      : item.airline == 'NV'
                                      ? 'http://pra.karunair.ir'
                                      : item.airline == 'JI'
                                      ? 'http://ra.meraj.aero'
                                      : item.airline == 'VR'
                                      ? 'http://vr.nirasoft.ir'
                                      : item.airline == 'IRZ'
                                      ? 'http://ra.sahaair.com/'
                                      : item.airline == 'FP'
                                      ? 'http://fp.nirasoft.ir'
                                      : item.airline == 'IV'
                                      ? 'http://ra.caspianairlines.com'
                                      : item.airline == 'IS'
                                      ? ''
                                      : item.airline == 'A1'
                                      ? ''
                                      : item.airline == 'RI'
                                      ? ''
                                      : item.airline == 'W5'
                                      ? ''
                                      : item.airline == 'IR'
                                      ? ''
                                      : item.airline == 'PA'
                                      ? ''
                                      : item.airline == 'PY'
                                      ? ''
                                      : item.airline == 'B9'
                                      ? ''
                                      : item.airline == 'A7'
                                      ? ''
                                      : '') +
                                    '/TicketPrint.aspx?PNR=' +
                                    item.PNR +
                                    '&TicketNo=' +
                                    item.Ticket[1] +
                                    '&OC=' +
                                    item.OfficeUser +
                                    '&lang=FA'
                                  "
                                >
                                </VueQRCodeComponent>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td height="80" class="b2">
              <!-- توضیحات -->
              لطفا در صورت هرگونه مغایرت در اطلاعات درج شده در بلیط با پشتیبانی
              تماس حاصل فرمائید.
            </td>
          </tr>
          <tr>
            <td height="30" class="b2">
              آدرس: تهران ، ضلع شمال غربی میدان آرژانتین ، ساختمان بانک تجارت ،
              پلاک 18 - طبقه اول - شرکت آهوان
            </td>
          </tr>
          <tr>
            <td height="30" class="b2">
              تلفن تماس: 02141889
              <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; تلفن پشتیبانی: 09018880317 -->
            </td>
          </tr>
        </table>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
.main-tbl {
  border-collapse: collapse;
  text-align: center;
  font-size: x-small;
  font-weight: 600;
}

.nested-table {
  border: solid 2px black;
  border-collapse: collapse;
  text-align: center;
}

.b2 {
  border: solid 2px black;
}

.bt2 {
  border-top: solid 2px black;
}

.bt1 {
  border-bottom: solid 1px black;
}

.bln {
  border-left: none;
}

.bl1 {
  border-left: solid 1px black;
}

.bl2 {
  border-left: solid 2px black;
}

.bb1 {
  border-bottom: solid 1px black;
}

.bb2 {
  border-bottom: solid 2px black;
}

.brn {
  border-right: none;
}

.btnl {
  border-top: none;
}

.p0 {
  padding: 0;
}

.bc {
  border-collapse: collapse;
}
</style>

<script>
import html2pdf from "html2pdf.js";
import axios from "axios";
import VueQRCodeComponent from "vue-qrcode-component";
axios.defaults.headers.common["Client-Token"] = "Ahuan-Wapi?123";

// import style from '../css/main.css'
export default {
  name: "TicketPrintComponent",
  data: () => ({
    editTicketInfoDialog: true,
  }),
  props: ["params", "clickedDownload"],
  watch: {
    clickedDownload() {
      this.exportToPDF();
    },
  },
  components: {
    VueQRCodeComponent,
  },
  methods: {
    exportToPDF() {
      html2pdf(document.getElementById("theFile"), {
        margin: 1,
        filename: "Ahuan-flight-tickets.pdf",
      });
    },
    separatePrice(number) {
      let value1 = number.toString().replace(/,/g, "");
      let value2 = value1;
      if (value1.length == 0 || value1 < 0) {
        value2 = 0;
      } else if (value1.length > 1 && value1[0] == 0) {
        value2 = value1.replace(0, "");
      } else {
        value2 = value1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      return value2;
      // self.filter.price = [Number(self.fromPrice.toString().replace(/,/g, "")), Number(value1)]
    },
  },
  created() {},
};
</script>
