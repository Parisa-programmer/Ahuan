<template class="">
  <div class="mt-12 pt-12">
    <circle-slider :cards="magazineItems" />
  </div>
</template>


<script>
import axios from 'axios'
import CircleSlider from '@/components/CircleSlider.vue'

// axios.defaults.headers.common['Client-Token'] = 'Ahuan-Wapi?123'
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
  data() {
    return {
      magazineItems: [
        {
          image: require('@/assets/image/magazine-turkiye.jpg'),
          title: 'جاذبه های استانبول',
          text: 'تور استانبول، به دلیل خدمات تفریحی‌ای که برای افراد به همراه داره، می‌تونه به شما در روند تجربه یک سفر متفاوت کمک کنه. تور استانبول از تمام شهرهای ایران، در میان تورهای پرطرفداری قرار می‌گیره که هزینه نسبتا مناسبی برای افراد...',
          link: '/tour/Istanbul'
        },
        {
          image: require('@/assets/image/magazine-urope.jpg'),
          title: 'اروپا و جذابیت‌های آن',
          text: 'سفر با تور اروپا بدون شک یکی از زیباترین و بهترین تجربیات زندگی هر فرد می‌باشد. این قاره یکی از مقاصد زیبا برای سفر است که در سالهای اخیر به یکی از محبوب‌ترین مقاصد توریستی جهان تبدیل‌شده‌است. در بین تمامی مردم جهان...',
          link: '/tour/Europe'
        },
        {
          image: require('@/assets/image/magazine-dubai.jpg'),
          title: 'جاذبه های دبی',
          text: 'دبی یکی از شهرهای بزرگ و پرطرفدار امارات متحده عربی است که درواقع یک شهر لاکچری و مدرن در بین تمام شهرهای دنیا می‌باشد.بدلیل کوتاه بودن مسافت پرواز و همسایگی با این کشور نه تنها منطقه خاورمیانه، بلکه در سراسر جهان...',
          link: '/tour/Dubai'
        },
        {
          image: require('@/assets/image/magazine-thailand.jpg'),
          title: 'تور تایلند',
          text: 'کشور تایلند نه تنها برای توریست های ایرانی بلکه برای توریست های سراسر جهان جذابیت دارد بلکه با خرید تور تایلند از پارک های طبیعی و زیبای این کشور از جمله: پارک ملی کائو یای، پارک پانک سیدا و پارک ملی تا پرایا و موارد دیگر...',
          link: '/tour/Thailand'
        },
        {
          image: require('@/assets/image/magazine-dubai.jpg'),
          title: 'جاذبه های دبی',
          text: 'دبی یکی از شهرهای بزرگ و پرطرفدار امارات متحده عربی است که درواقع یک شهر لاکچری و مدرن در بین تمام شهرهای دنیا می‌باشد.بدلیل کوتاه بودن مسافت پرواز و همسایگی با این کشور نه تنها منطقه خاورمیانه، بلکه در سراسر جهان...',
          link: '/tour/Dubai'
        },
      ],
    }
  },
  components: { CircleSlider },
  computed: {},
  methods: {

  },
  created() {

  }
  // 3975
  // 30475

}

</script>