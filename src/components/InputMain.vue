<template>
  <div v-cloak class="widthAll">
    <v-row justify="center">
      <div class="indexDiv">
        <v-card elevation="1" class=" white relative pt-2 pt-sm-2 pt-md-4 pt-lg-6 pb-1 rounded-lg sections-card">
          <v-row class="justify-center justify-md-space-between">
            <div v-for="(item, i) in allSections" :key="i" class="px-1 px-md-2 px-lg-3 px-xl-4 sections"
              @click="changeActiveSection(i)">
              <v-skeleton-loader class="inputLoader mb-1 mb-sm-1 mb-md-4" type="card-heading">
                <v-row class="rounded-lg py-2 py-sm-2 py-md-3 py-lg-4 py-xl-5 cursorPointer" justify="center"
                  :class="item.active ? 'lighten-5 red' : 'lighten-4 grey'">
                  <v-icon class="ml-2 widthAll text-center"
                    :class="item.active ? 'text--darken-1 red--text' : 'text--darken-1 grey--text'">{{ item.icon }}</v-icon>
                  <span class="widthAll text-center mt-2 mt-sm-0"
                    :class="item.active ? 'text--darken-1 red--text' : 'text--darken-1 grey--text'">{{ item.title }}</span>
                </v-row>
                <v-row v-if="item.active" class="d-none d-sm-flex" justify="center">
                  <div class="triangleHeader"></div>
                </v-row>
              </v-skeleton-loader>
            </div>
          </v-row>
        </v-card>
      </div>
    </v-row>
  </div>
</template>

<script>
import '@/assets/css/main.css'
import axios from 'axios'
axios.defaults.headers.common['Client-Token'] = 'Ahuan-Wapi?123'
export default {
  name: 'InputMain',
  components: {
    // style
  },
  watch: {

  },
  data: () => ({
    allSections: [
      {
        icon: 'mdi-airplane',
        title: 'پرواز',
        active: true,
      },
      {
        icon: 'mdi-sofa-single',
        title: 'هتل',
        active: false,
      },
      {
        icon: 'mdi-account-group',
        title: 'تور',
        active: false,
      },
      {
        icon: 'mdi-hospital-building',
        title: 'آهوان',
        active: false,
      },
      {
        icon: 'mdi-bus',
        title: 'اتوبوس',
        active: false,
      },
      {
        icon: 'mdi-train-variant',
        title: 'قطار',
        active: false,
      },
      {
        icon: 'mdi-checkbook',
        title: 'بیمه',
        active: false,
      },
    ],
    selectedSection: {
      icon: 'mdi-airplane',
      title: 'پرواز',
      active: true,
    },
  }),
  methods: {
    changeActiveSection(index) {
      this.showSection = this.allSections[index].active && this.showSection ? false : true
      this.allSections = this.allSections.map((x) => {
        return {
          icon: x.icon,
          title: x.title,
          active: false,
        };
      });
      this.originCity = ''
      this.destinationInternal = ''
      this.allSections[index].active = true;
      this.headerRooms = [{
        peaple: 1,
        child: 0,
        baby: 0
      }]
      this.selectedSection = this.allSections.find(element => element.active == true);
      this.byReturn = 1
      this.selectedDate = ''
      this.external = false
      this.changeRoomValue()
      this.hidePeaple()
    },
    changeRoomValue() {
      var rooms = this.headerRooms
      var all = 0
      for (let i = 0; i < rooms.length; i++) {
        all = all + rooms[i].baby + rooms[i].child + rooms[i].peaple
      }
      this.allPeaples = all + ' مسافر '
      if (this.selectedSection.title == 'هتل' || this.selectedSection.title == 'تور' || this.selectedSection.title == 'آهوان') {
        this.allPeaples = this.allPeaples + '+ ' + this.headerRooms.length + ' اتاق'
      }
    },
    hidePeaple() {
      $('#showPeaple').hide()
    },
  },
  created() {

  },
}
</script>
