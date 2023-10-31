<template class="">
  <div>
    <form
      ref="formshaparak"
      @submit.prevent="submit"
      name="PostForm"
      method="POST"
      action="https://ikc.shaparak.ir/iuiv3/IPG/Index"
    >
      <input
        name="tokenIdentity"
        type="text"
        style="opacity: 0"
        :value="formshaparak.bankToken"
      />
    </form>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-image: linear-gradient(
    to left,
    rgba(0, 160, 230, 1),
    rgba(0, 160, 230, 0.5)
  );
}

div.container {
  width: 500px;
  height: 313px;
  background-color: white;
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  margin-top: 171px;
}

div.group {
  display: flex;
  justify-content: center;
}

input[type="text"] {
  border: none;
  border-bottom: 1px solid rgba(0, 160, 230, 0.5);
}

input[type="email"] {
  border: none;
  border-bottom: 1px solid rgba(0, 160, 230, 0.5);
}

input:focus {
  border: none;
  border-bottom: 3px solid rgba(0, 160, 230, 1);
}

button {
  background-image: linear-gradient(
    to left,
    rgba(0, 160, 230, 1),
    rgba(0, 160, 230, 0.5)
  );
  width: 172px;
  height: 24px;
  color: white;
}

button:hover {
  background-color: rgba(0, 160, 230, 1);
}

a.bass {
  color: black;
  text-decoration: none;
}

a {
  text-decoration: none;
}
</style>


<script>
// import '@/assets/css/main.css'
import axios from "axios";
axios.defaults.headers.common["Client-Token"] = "Ahuan-Wapi?123";
// import CircleSlider from '@/components/CircleSlider.vue'

export default {
  data() {
    return {
      formshaparak: {
        bankToken: "",
      },
    };
  },
  components: {
    // CircleSlider
  },
  computed: {},
  methods: {
    goToBank() {
      let bankprice = 10000;
      let self = this;
      axios
        .post("https://panel.ahuantours.com/api/Tejarat/BankToken", {
          amount: bankprice,
          revertUrl: "http://localhost:8080/#/test-page?return=true",
        })
        .then(function (response) {
          self.formshaparak.bankToken = response.data;
          setTimeout(() => {
            self.$refs.formshaparak.submit();
          }, 1000);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },
  mounted() {
    if (this.$route.query.return) {
      console.log("has query");
    } else {
      console.log("has not query");
      this.goToBank();
    }
    // axios.options["emulateJSON"] = true;
    // this.getFlights();

    // this.getFlights3();
  },
  // 3975
  // 30475

  // "C:\Program Files (x86)\Google\Chrome\Application\Chrome.exe" --disable-web-security  --user-data-dir=~/chromeTempRepo
};
</script>