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
      // axios.get('http://api.ataair.ir/ws1/AvailabilityFareJS.jsp?AirLine=PA&cbSource=UGT&cbTarget=TTQ&cbDay1=30&cbMonth1=03&cbAdultQty=1&cbChildQty=0&cbInfantQty=0&OfficeUser=THR155.WS&OfficePass=Ahuan1348')
      //   .then(function (response) {
      //     // handle success
      //    console.log('response');
      //   })
      //   .catch(function (error) {
      //     // handle error
      //     console.log(error);
      //   })

      const headers = {
        'Content-Type': 'text/plain'
      };

      axios.get(
        'http://api.ataair.ir/ws1/AvailabilityFareJS.jsp?AirLine=PA&cbSource=UGT&cbTarget=TTQ&cbDay1=30&cbMonth1=03&cbAdultQty=1&cbChildQty=0&cbInfantQty=0&OfficeUser=THR155.WS&OfficePass=Ahuan1348',
        {
          user_name: 'THR155.WS',
          password: 'Ahuan1348',
        },
        { headers }
      ).then(response => {
        console.log("Success ========>", response);
      })
        .catch(error => {
          console.log("Error ========>", error);
        }
        )
    }
  },
  created() {
    console.log();
    this.getTest();
  }
}
</script>