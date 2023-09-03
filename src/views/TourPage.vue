<template>
  <div class="mt-sm-6 pt-12">
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
    document.title = 'تورهای ویژه آهوان'
    window.scrollTo(0, 0);
  }
}
</script>