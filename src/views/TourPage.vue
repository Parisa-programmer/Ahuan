<template>
  <div class="mt-12 pt-12">
    <tour-component />
  </div>
</template>


<script>
import axios from 'axios'
import TourComponent from '@/components/TourComponent.vue';
axios.defaults.headers.common['Client-Token'] = 'Ahuan-Wapi?123'
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';


export default {
  name: 'tour-page',
  data() {
    return {

    }
  },
  components: { TourComponent },
  computed: {},
  created() {
    window.scrollTo(0, 0);
  }
}
</script>