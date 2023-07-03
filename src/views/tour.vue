<template>
  <div class="mt-sm-12 pt-sm-12">
    <div class="widthAll relative">
      <v-skeleton-loader :loading="loadingBackground" type="image">
        <v-img class="widthAll backgroundImageTour" height="250" :src="backgroundImage" alt="برج ایفل فرانسه"></v-img>
        <div class="tourImageBackgroundTour"></div>
      </v-skeleton-loader>
    </div>
    <v-row justify="center">
      <div v-if="descriptions.length > 0" class="mt-6 indexDiv">
        <v-skeleton-loader class="px-2 px-md-12" :loading="loadingMainTour" type="chip">
          <h1 v-if="descriptions.length > 0" class="font-small-title-xs">{{ descriptions[0].object.title }}</h1>
        </v-skeleton-loader>
        <v-skeleton-loader class="px-2 px-md-12 mt-4" :loading="loadingMainTour" type="sentences">
          <p class="text-justify answerText">
            {{ descriptions[0].object.description }}
          </p>
        </v-skeleton-loader>
        <ul v-if="descriptions.length > 0 && descriptions[0].type != 'text'" class="text-justify answerText mr-6">
          <li v-for="(split, j) in descriptions[0].splitText" :key="j">{{ split }}</li>
        </ul>
      </div>
      <div class="indexDiv" :class="loadingMainTour == true ? 'mt-6' : ''">
        <v-skeleton-loader class="px-2 px-md-12" :loading="loadingMainTour" height="200" type="image">
          <main-tour-card2 :cards="cards" />
        </v-skeleton-loader>
      </div>
      <div class="indexDiv" :class="loadingMainTour == true ? 'mt-6' : ''">
        <v-skeleton-loader class="px-2 px-md-12" :loading="loadingMainTour" type="chip">{{ loadingMainTour == true ? '.' :
          '' }}</v-skeleton-loader>
        <v-skeleton-loader v-if="descriptions.length > 0" class="px-2 px-md-12 mt-8" :loading="loadingMainTour"
          type="sentences">
          <div v-for="(item, i) in descriptions" :key="i">
            <h2 v-if="i != 0" class="font-small-title-xs">{{ item.object.title }}</h2>
            <p v-if="i != 0 && descriptions[i].type == 'text'" class="text-justify answerText mt-4 ">
              {{ item.object.description }}
            </p>
            <ul v-else-if="i != 0 && descriptions[i].type != 'text'" class="text-justify answerText mt-4 mr-6">
              <li v-for="(split, j) in item.splitText" :key="j">{{ split }}</li>
            </ul>
          </div>
        </v-skeleton-loader>
        <call-us />
      </div>
    </v-row>
  </div>
</template>

<style scoped>
.tourImageBackgroundTour {
  position: absolute;
  width: 100%;
  height: 100% !important;
  top: 0;
  left: 0;
  opacity: 1;
  background: linear-gradient(to top,
      rgba(0, 0, 0, 0.55) 0,
      rgba(0, 0, 0, 0.55) 1%,
      transparent 56%,
      transparent 74%);
}
</style> 
<style>
.tourImageBackgroundTour {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 1;
  background: linear-gradient(to top,
      rgba(0, 0, 0, 0.55) 0,
      rgba(0, 0, 0, 0.55) 1%,
      transparent 56%,
      transparent 74%);
}
</style> 

<script>
import axios from 'axios'
import MainTourCard2 from '@/components/MainTourCard2.vue'
import CallUs from '@/components/CallUs.vue'
axios.defaults.headers.common['Client-Token'] = 'Ahuan-Wapi?123'

export default {
  name: 'tour-slug',
  metaInfo: function () {
    return {
      // title: this.testTitle,
      meta: [
        { name: 'description', content: this.descrptionMeta }
      ]
    }
  },
  components: {
    MainTourCard2, CallUs
  },
  data() {
    return {
      id: this.$route.params.id,
      cards: [],
      descriptions: [],
      backgroundImage: '',
      loadingMainTour: true,
      loadingBackground: true,
      nameRouter: '',
      descrptionMeta: ''
    }
  },
  methods: {
    getTours(id) {
      let self = this
      axios.get('https://panel.ahuantours.com/api/package/group/notes/' + id)
        .then(function (response) {
          let descriptionArray = []
          let description = response.data
          for (let i = 0; i < description.length; i++) {
            let splitText = description[i].description.split('/')
            descriptionArray.push({
              type: splitText.length == 1 ? 'text' : 'multiLine',
              object: description[i],
              splitText: splitText
            })
          }
          self.descriptions = descriptionArray
          if (descriptionArray.length > 0) {
            self.metaDescription = 'test des'
            self.descrptionMeta = descriptionArray[0].object.description.slice(0, 500)
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },
    getCards(id) {
      let self = this
      let group = self.$route.params.id
      let group2 = group == 'ترکیه' ? 'Istanbul' :
        group == 'اروپا' ? 'Europe' :
          group == 'دبی' ? 'Dubai' :
            group == 'سریلانکا' ? 'Srilanka' :
              group == 'روسیه' ? 'Moscow' :
                group == 'تایلند' ? 'Thailand' :
                  group == 'تایلند-مالزی' ? 'Thailand-Malaysia' : ''
      axios.get('https://panel.ahuantours.com/api/package/group-packages/' + id)
        .then(function (response) {
          self.cards = response.data.map((x) => {
            // for search by name
            let name = x.name.replace(/\s/g, '-')
            name = name.replace(/---/g, '-')
            let dates = x.date ? x.date.split('/') : ''
            let names = x.name ? x.name.split('~') : ''
            let title = names[0].split('/')
            let deses = x.description ? x.description.split('/') : ''
            let nameRouter = self.nameRouter.replace(/\s/g, '-')
            // ___________________
            return {
              id: x.id,
              image: x.image,
              title: title[0],
              title2: title[1],
              airline: x.airlines.split(', '),
              date: dates[0],
              date2: dates[1],
              hotelStar: x.hotel,
              nights: deses[0],
              nights2: deses[1],
              isActive: x.isActive,
              // route: '/tour' + '/Istanbul' + '/' + name,
              // route: '/tour' + '/' + x.id + '/' + nameRouter,
              route: '/tour-page' + '/' + x.id,
              download: x.pdf,
            };
          });
          // for (let i = 0; i < response.data.length; i++) {
          //   let dates = self.cards[i].date.split('/')
          //   self.cards[i].date = dates[0]
          //   self.cards[i].date2 = dates[1]
          // }
          // self.cards
          self.loadingMainTour = false
          // self.backgroundImage = 'https://panel.ahuantours.com/uploads/' + response.data.backImage
          // self.descriptions = response.data
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          self.loadingMainTour = false
        })
    },
    getImage(id) {
      let self = this
      axios.get('https://panel.ahuantours.com/api/package/group/' + id)
        .then(function (response) {
          self.backgroundImage = 'https://panel.ahuantours.com/uploads/' + response.data.backImage
          self.nameRouter = response.data.name
          self.loadingBackground = false
          document.title = 'تورهای ویژه آهوان'
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          self.loadingBackground = false
        })
    }
  },
  // beforeRouteUpdate() {
  //   console.log(this.$route.params.id);
  // },
  beforeRouteUpdate(to, from, next) {
    this.cards = []
    this.descriptions = []
    this.backgroundImage = ''
    this.loadingMainTour = true
    this.loadingBackground = true
    this.nameRouter = ''
    this.getTours(to.params.id);
    this.getImage(to.params.id);
    this.getCards(to.params.id);
    next()
  },
  created() {
    window.scrollTo(0, 0);
    this.getTours(this.$route.params.id)
    this.getImage(this.$route.params.id)
    this.getCards(this.$route.params.id)
  },
}
</script>
