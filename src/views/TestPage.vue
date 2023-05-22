<template>
  <div class="mt-12 pt-12">
    hiii
  </div>
</template>
 
<script>
import axios from 'axios'
// axios.defaults.headers.common['Client-Token'] = 'Ahuan-Wapi?123'
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
  data() {
    return {

    }
  },
  components: {},
  computed: {},
  methods: {
    getTest() {
      // // 'http://api.ataair.ir/ws1/AvailabilityFareJS.jsp?AirLine=PA&cbSource=UGT&cbTarget=TTQ&cbDay1=30&cbMonth1=03&cbAdultQty=1&cbChildQty=0&cbInfantQty=0&OfficeUser=THR155.WS&OfficePass=Ahuan1348
      axios.get('http://localhost:8080/ata/AvailabilityFareJS.jsp?AirLine=PA&cbSource=UGT&cbTarget=TTQ&cbDay1=30&cbMonth1=03&cbAdultQty=1&cbChildQty=0&cbInfantQty=0&OfficeUser=THR155.WS&OfficePass=Ahuan1348')
        .then(function (response) {
          // handle success
         console.log(response.data.AvailableFlights);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })


     

    }
  },
  created() {
    console.log();
    this.getTest();
  }
}
</script>