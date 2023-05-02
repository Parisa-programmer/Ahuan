<template>
  <div class="mt-12 pt-12">
    hiii
  </div>
</template>
 
<script>
import axios from 'axios'
axios.defaults.headers.common['Client-Token'] = 'Ahuan-Wapi?123'
axios.defaults.headers.get['Content-Type'] ='application/x-www-form-urlencoded';

export default {
  data() {
    return {

    }
  },
  components: {},
  computed: {},
  methods: {
    getTest() {
      
    }
  },
  created(){
    console.log();
    // this.getTest()
  }
}
</script>