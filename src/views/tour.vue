<template>
  <div class="mt-sm-12 pt-sm-12">
    <div class="widthAll relative">
      <v-skeleton-loader :loading="loadingBackground" type="image">
        <v-img class="widthAll backgroundImageTour" height="250" :src="backgroundImage" alt="برج ایفل فرانسه"></v-img>
        <div class="tourImageBackground"></div>
      </v-skeleton-loader>
    </div>
    <v-row justify="center">
      <div class="mt-6 indexDiv">
        <v-skeleton-loader class="px-2 px-md-12" :loading="loadingMainTour" type="chip">
          <h1 v-if="descriptions.length > 0" class="">{{ descriptions[0].object.title }}</h1>
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
          <main-tour-card :cards="cards" />
        </v-skeleton-loader>
      </div>
      <div class="indexDiv" :class="loadingMainTour == true ? 'mt-6' : ''">
        <v-skeleton-loader class="px-2 px-md-12" :loading="loadingMainTour" type="chip">{{ loadingMainTour == true ? '.' :
          '' }}</v-skeleton-loader>
        <v-skeleton-loader class="px-2 px-md-12 mt-8" :loading="loadingMainTour" type="sentences">
          <div v-for="(item, i) in descriptions" :key="i">
            <h2 v-if="i != 0" class="">{{ item.object.title }}</h2>
            <p v-if="i != 0 && descriptions[i].type == 'text'" class="text-justify answerText mt-4 ">
              {{ item.object.description }}
            </p>
            <ul v-else-if="i != 0 && descriptions[i].type != 'text'" class="text-justify answerText mt-4 mr-6">
              <li v-for="(split, j) in item.splitText" :key="j">{{ split }}</li>
            </ul>
          </div>
        </v-skeleton-loader>
      </div>
    </v-row>
  </div>
</template>

<style scoped>
.tourImageBackground {
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
import MainTourCard from '@/components/MainTourCard.vue'
axios.defaults.headers.common['Client-Token'] = 'Ahuan-Wapi?123'

export default {
  name: 'tour-slug',
  components: {
    MainTourCard
  },
  data() {
    return {
      id: this.$route.params.id,
      cards: [],
      descriptions: [],
      backgroundImage: '',
      loadingMainTour: true,
      loadingBackground: true,
    }
  },
  methods: {
    getTours(id) {
      let self = this
      axios.get('https://panel.ahuantours.com/api/package/group/notes/' + this.$route.params.id)
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
            // ___________________
            return {
              id: x.id,
              image: require('@/assets/image/tour/europ-001.jpg'),
              title: x.name,
              airline: x.airlines,
              date: x.date,
              date2: x.date,
              hotelStar: x.hotel,
              nights: x.description,
              // route: '/tour' + '/Istanbul' + '/' + name,
              route: '/tour' + '/Istanbul' + '/' + x.id,
              download: '',
            };
          });
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
          self.loadingBackground = false
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          self.loadingBackground = false
        })

    }
  },
  created() {
    window.scrollTo(0, 0);
    this.getTours(this.$route.params.id)
    this.getCards(this.$route.params.id)
    this.getImage(this.$route.params.id)
  }
}
</script>
