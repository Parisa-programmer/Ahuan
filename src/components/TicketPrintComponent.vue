<template>
  <div class="relative" style="opacity: 0;display:none;align-items: center;">
    <div class="" id="theFile">
      <v-row justify="center" v-for="(item, i) in params" :key="i" class="heightAll" style="height:1114px">
        <table width="750" height="550" class="main-tbl b2" align="center" style="margin-top:50px">
          <tr>
            <td height="410">
              <table width="730" height="390" class="nested-table b2" align="center" style="margin:auto">
                <tr>
                  <td width="22%" class="b2 bb1 bln">نوع بلیط</td>
                  <td width="22%" class="b2 bb1 brn">Kind of Ticket</td>
                  <td width="28%" colspan="2" class="b2 bb1 bln">رده سنی</td>
                  <td width="28%" colspan="2" class="b2 bb1 brn">Age</td>
                </tr>
                <tr>
                  <td width="22%" class="b2 btnl bt1 bln">
                    {{ item.ticketType == 's' ? 'سیستمی' : 'چارتری' }}
                  </td>
                  <td width="22%" class="b2 btnl bt1 brn">{{ item.ticketType == 's' ? 'system' : 'charter' }}</td>
                  <td width="28%" colspan="2" class="b2 btnl bt1 bln">
                    {{ item.ageType == 'old' ? 'بزرگسال' : item.ageType == 'child' ? 'کودک' : 'نوزاد' }}
                  </td>
                  <td width="28%" colspan="2" class="b2 btnl bt1 brn">
                    {{ item.ageType == 'old' ? 'ADL' : item.ageType == 'child' ? 'CHD' : 'INF' }}
                  </td>
                </tr>

                <tr>
                  <td width="22%" class="b2 bb1 bln">تاریخ و زمان صدور بلیط</td>
                  <td width="22%" class="b2 bb1 brn">Date & Time of Issue</td>
                  <td width="12%" class="b2 bb1 bln">تعداد مسیر</td>
                  <td width="12%" class="b2 bb1 brn">Routes</td>
                  <td width="17%" class="b2 bb1 bln">شماره بلیط</td>
                  <td width="17%" class="b2 bb1 brn">Ticket Number</td>
                </tr>
                <tr>
                  <td width="22%" class="b2 btnl bt1 bln ">{{ item.bookTime }}</td>
                  <td width="22%" class="b2 btnl bt1 brn ">{{ item.bookDate }}</td>
                  <td width="29%" colspan="2" class="b2 btnl bt1 bln">1</td>
                  <td width="29%" colspan="2" class="b2 btnl bt1 bln ">{{ item.ticketNumber }}</td>
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
                        <td height="25" style="border-bottom:solid 2px black; border-left:solid 1px black;">Baggage
                          Allowance
                        </td>
                        <td height="25" style="border-bottom:solid 2px black; border-left:solid 1px black;">Flight Time
                        </td>
                        <td height="25" style="border-bottom:solid 2px black;direction:ltr !important">Flight Date(AD)
                        </td>
                      </tr>
                      <tr>
                        <td height="25" class="bl1 " style="direction:ltr !important">{{ item.fare ?
                          'item.fare.BaggageAllowanceWeight' : '20 Kg' }}</td>
                        <td height="25" class="bl1">{{ item.DepartureTime }}</td>
                        <td height="25">{{ item.DepartureDateTime.replace(/-/g, "/") }}</td>
                      </tr>
                      <tr>
                        <td colspan="3" class="p0" height="75">
                          <table width="100%" height="100%" class="bc">
                            <tr>
                              <td height="25" class="bt2 bb1">نام مسافر | Passenger Name</td>
                            </tr>
                            <tr>
                              <!-- <td height="52" class="" style="display:none">محمد حسین هدایت آراللوی کوچک</td> -->
                              <td height="52" style="text-align:center">{{ item.name }}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" class="p0" height="75">
                          <table width="100%" height="100%" class="bc">
                            <tr>
                              <td height="25" class="bt2 bb1">PNR</td>
                            </tr>
                            <tr>
                              <td height="52" class="">{{ item.PNR }}</td>
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
                        <td height="25" class="bb2 bl1" style="direction:ltr !important">Flight Date(HD)</td>
                        <td height="25" class="bb2 bl1">Flight Class</td>
                        <td height="25" class="bb2 bl2">Flight No</td>
                        <td rowspan="2">{{ item.AirlinePersianId }}</td>
                        <td rowspan="2">
                          <img
                            :src="item.Airline == 'I3' ? require('@/assets/image/لوگوی_آتا.png') : item.Airline == 'Y9' ? require('@/assets/image/لوگوی_کیش ایر.png') : item.Airline == 'JI' ? require('@/assets/image/لوگوی_معراج.png') : item.Airline == 'QB' ? require('@/assets/image/لوگوی_قشم ایر.png') : item.Airline == 'IV' ? require('@/assets/image/لوگوی_کاسپین.png') : item.Airline == 'HH' ? require('@/assets/image/لوگوی_تابان.png') : item.Airline == 'EP' ? require('@/assets/image/لوگوآسمان2.jpg') : item.Airline == 'ZV' ? require('@/assets/image/zagros.png') : item.Airline == 'VR' ? require('@/assets/image/لوگوی_وارش.png') : item.Airline == 'NV' ? require('@/assets/image/لوگوی_نفت.png') : item.Airline == 'IRZ' ? require('@/assets/image/لوگوی_ساها.png') : ''"
                            alt="" class="rounded-circle" width="40" height="40" style="">
                        </td>
                      </tr>
                      <tr>
                        <td height="25" class="bl1">{{ item.longDateTime1 }}</td>
                        <td height="25" class="bl1">
                          <!-- Economy ( -->
                          {{ item.className }}
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
                              <td height="24" colspan="2" class="bl2 bb1">{{ item.originCity }}</td>
                              <td height="24" colspan="2" class="bb1">{{ item.destinationInternal }}</td>
                            </tr>
                            <tr>
                              <td height="25" colspan="2" class="bl2">{{ item.Origin }}</td>
                              <td height="25" colspan="2">{{ item.Destination }}</td>
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
                              <td height="52" colspan="2">{{ separatePrice(item.price) }} ریال</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <!---aaaaaaaa--->
                        <td colspan="3" class="bl2 p0" height="76">
                          <table width="100%" height="100%" class="bc">
                            <tr>
                              <td height="25" class="bt2 bb1">صادر کننده</td>
                              <td height="25" class="bt2 bb1">Agent</td>
                            </tr>
                            <tr>
                              <td height="52" colspan="2">
                                <img src="@/assets/image/ticket-logo.png" style="height:42px; padding:0" />
                              </td>
                            </tr>
                            <!--<tr>
                                              <td height="25"  style="padding-left:1px; border-left:solid 2px black">ccc</td>
                                              <td height="25" >cccccc</td>
                                          </tr>-->
                          </table>
                        </td>
                        <td colspan="2" class="p0" height="75">
                          <table width="100%" height="100%" class="bc">
                            <tr>
                              <td height="75" colspan="2" class="bt2">
                                <img src="@/assets/image/ticket-barcode.png" style="height:73px; padding:0" />
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
            <td height="80" class="b2">توضیحات</td>
          </tr>
          <tr>
            <td height="30" class="b2">آدرس: تهران ، ضلع شمال غربی میدان آرژانتین ، ساختمان بانک تجارت ، پلاک 18 - طبقه
              اول
              - شرکت آهوان</td>
          </tr>
          <tr>
            <td height="30" class="b2">
              تلفن تماس: 02141889 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; تلفن پشتیبانی: 09018880317
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
  font-weight: 600
}

.nested-table {
  border: solid 2px black;
  border-collapse: collapse;
  text-align: center;
}

.b2 {
  border: solid 2px black
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
import axios from 'axios'
axios.defaults.headers.common['Client-Token'] = 'Ahuan-Wapi?123'

// import style from '../css/main.css'
export default {
  name: 'TicketPrintComponent',
  data: () => ({
    editTicketInfoDialog: true
  }),
  props: ['params', 'clickedDownload'],
  watch: {
    clickedDownload() {
      this.exportToPDF()
    }
  },
  methods: {
    exportToPDF() {
      html2pdf(document.getElementById("theFile"), {
        margin: 1,
        filename: "Ahuan-flight-tickets.pdf",
      });
    },
    separatePrice(number) {
      let value1 = number.toString().replace(/,/g, "")
      let value2 = value1
      if (value1.length == 0 || value1 < 0) {
        value2 = 0
      } else if (value1.length > 1 && value1[0] == 0) {
        value2 = value1.replace(0, '')
      } else {
        value2 = value1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
      return value2
      // self.filter.price = [Number(self.fromPrice.toString().replace(/,/g, "")), Number(value1)]
    },
  },
  created() {
    console.log(this.params);
  }

}
</script>
