<template class="">
  <div class="mt-12 pt-12">
    <form action="">
      <div class="container">
        <div class="group">
          <h3 style="color: blue;">Login</h3>
          <h3> your account</h3>
        </div>
        <input type="text" value="username">
        <input type="email" value="email">
        <input type="email" value="password"><br>
        <button>Login</button><br>
        <a href="#" class="bass">forgot password?</a><br>
        <a href="#">Create account</a>
      </div>
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
  background-image: linear-gradient(to left, rgba(0, 160, 230, 1), rgba(0, 160, 230, 0.5));
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

input[type=text] {
  border: none;
  border-bottom: 1px solid rgba(0, 160, 230, 0.5);
}

input[type=email] {
  border: none;
  border-bottom: 1px solid rgba(0, 160, 230, 0.5);
}

input:focus {
  border: none;
  border-bottom: 3px solid rgba(0, 160, 230, 1);
}

button {
  background-image: linear-gradient(to left, rgba(0, 160, 230, 1), rgba(0, 160, 230, 0.5));
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
import axios from 'axios'
axios.defaults.headers.common['Client-Token'] = 'Ahuan-Wapi?123'
// import CircleSlider from '@/components/CircleSlider.vue'

// axios.defaults.headers.common['Client-Token'] = 'Ahuan-Wapi?123'
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
  data() {
    return {
      // magazineItems: [
      //   {
      //     image: require('@/assets/image/magazine-turkiye.jpg'),
      //     title: 'جاذبه های استانبول',
      //     text: 'تور استانبول، به دلیل خدمات تفریحی‌ای که برای افراد به همراه داره، می‌تونه به شما در روند تجربه یک سفر متفاوت کمک کنه. تور استانبول از تمام شهرهای ایران، در میان تورهای پرطرفداری قرار می‌گیره که هزینه نسبتا مناسبی برای افراد...',
      //     link: '/tour/Istanbul'
      //   },
      //   {
      //     image: require('@/assets/image/magazine-urope.jpg'),
      //     title: 'اروپا و جذابیت‌های آن',
      //     text: 'سفر با تور اروپا بدون شک یکی از زیباترین و بهترین تجربیات زندگی هر فرد می‌باشد. این قاره یکی از مقاصد زیبا برای سفر است که در سالهای اخیر به یکی از محبوب‌ترین مقاصد توریستی جهان تبدیل‌شده‌است. در بین تمامی مردم جهان...',
      //     link: '/tour/Europe'
      //   },
      //   {
      //     image: require('@/assets/image/magazine-dubai.jpg'),
      //     title: 'جاذبه های دبی',
      //     text: 'دبی یکی از شهرهای بزرگ و پرطرفدار امارات متحده عربی است که درواقع یک شهر لاکچری و مدرن در بین تمام شهرهای دنیا می‌باشد.بدلیل کوتاه بودن مسافت پرواز و همسایگی با این کشور نه تنها منطقه خاورمیانه، بلکه در سراسر جهان...',
      //     link: '/tour/Dubai'
      //   },
      //   {
      //     image: require('@/assets/image/magazine-thailand.jpg'),
      //     title: 'تور تایلند',
      //     text: 'کشور تایلند نه تنها برای توریست های ایرانی بلکه برای توریست های سراسر جهان جذابیت دارد بلکه با خرید تور تایلند از پارک های طبیعی و زیبای این کشور از جمله: پارک ملی کائو یای، پارک پانک سیدا و پارک ملی تا پرایا و موارد دیگر...',
      //     link: '/tour/Thailand'
      //   },
      //   {
      //     image: require('@/assets/image/magazine-dubai.jpg'),
      //     title: 'جاذبه های دبی',
      //     text: 'دبی یکی از شهرهای بزرگ و پرطرفدار امارات متحده عربی است که درواقع یک شهر لاکچری و مدرن در بین تمام شهرهای دنیا می‌باشد.بدلیل کوتاه بودن مسافت پرواز و همسایگی با این کشور نه تنها منطقه خاورمیانه، بلکه در سراسر جهان...',
      //     link: '/tour/Dubai'
      //   },
      // ],
      tours: []
    }
  },
  components: {
    // CircleSlider
  },
  computed: {},
  methods: {
    getTours() {
      let self = this
      axios.get('https://panel.ahuantours.com/api/package/groups')
        .then(function (response) {
          let res = response.data.map((x) => {
            return {
              id: x.id,
              col1Image: x.col1Image,
              name: x.name,
              // route: '/tour' + '/Istanbul' + '/' + name,
              route: '/tour/' + x.name.replace(/\s/g, '-'),
              price: x.price,
              cols: x.cols
            };
          });
          self.tours = res
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
  },
  mounted() {
    // this.getTours()
  }
  // 3975
  // 30475
}

</script>