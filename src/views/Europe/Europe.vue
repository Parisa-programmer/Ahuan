<template>
  <div class="mt-sm-12 pt-sm-12">
    <div class="widthAll relative">
      <v-img class="widthAll backgroundImageTour" height="250" src="@/assets/image/tour/اروپا 2000-250 (1).jpg"
        alt="برج ایفل فرانسه"></v-img>
      <div class="tourImageBackground"></div>
    </div>
    <v-row justify="center">
      <div class="my-6 indexDiv">
        <h1 class="px-2 px-md-12">تور اروپا و جذابیت‌های آن</h1>
        <p class="text-justify answerText mt-4 px-2 px-md-12">
          سفر با تور اروپا بدون شک یکی از زیباترین و بهترین تجربیات زندگی هر فرد می‌باشد. این قاره یکی از مقاصد زیبا برای
          سفر است که در سالهای اخیر به یکی از محبوب‌ترین مقاصد توریستی جهان تبدیل‌شده‌است. در بین تمامی مردم جهان، قاره
          اروپا دارای کشورهایی با آثار و معماری منحصر به فرد و سواحل زیبا نسبت به قاره‌های دیگر است.
          برای مثال کشور فرانسه هم مانند ایران دارای جاذبه‌های گردشگری متعددی می‌باشد که می‌تواند بهترین انتخاب برای
          مسافران باشد. به همین منظور تصمیم گرفتیم تا با ارائه مقاله‌ای تحت عنوان تور اروپا، شما را با جاذبه‌های طبیعی
          گردشگری بسیار از کشورهای اروپایی آشنا کنیم. همچنین به شما نشان دهیم که با سفر به این قاره زیبا می‌توانید به سفری
          بی‌نظیر و خاطره‌انگیز دست پیدا کنید.
          سفر به کشورهای اروپای شرقی و غربی بسیار جذاب است. با تور اروپا می‌توان به تمامی کشور‌های این قاره سفر کرد. برای
          کسانی که می‌خواهند سفری لوکس و عالی را به اروپا داشته باشند، تور اروپا بسیار شگفت انگیز است.
        </p>
        <main-tour-card :cards="cards" />
        <h2 class="px-2 px-md-12 mt-8">ویزای شینگن برای تور اروپا</h2>
        <p class="text-justify answerText mt-4 px-2 px-md-12">
          برای سفر به این قاره باید ویزای شینگن دریافت‌شود. ویزای شینگن چیست؟ اگر بخواهیم به صورت خلاصه به سؤال ویزای
          شینگن چیست پاسخ بدهیم باید بگوییم که ویزای‌شینگن، ویزا برای تردد بین کشور‌های اتحادیه اروپا می‌باشد. این نوع
          ویزا، برای افرادی صادر می‌شود که می‌خواهند به کشورهای عضو شینگن سفر کنند.
        </p>
        <h2 class="px-2 px-md-12 mt-8">بهترین زمان برای سفر با تور اروپا</h2>
        <p class="text-justify answerText mt-4 px-2 px-md-12">
          با توجه به‌اینکه سفر به کشور‌های اروپایی برای هر فردی جذابیت‌های خاص خود را دارد، ما نیز مقاصد مورد نظر خود را
          به عنوان یک مرجع معتبر به شما معرفی خواهیم کرد. ما سعی داریم کاری کنیم که سفر به این کشور‌ها برای شما مقرون به
          صرفه ‌باشد و همچنین از کیفیت مطلوب خدمات گردشگری نیز بهره‌مند شوید.
        </p>
        <h2 class="px-2 px-md-12 mt-8">تور لحظه آخری اروپا</h2>
        <p class="text-justify answerText mt-4 px-2 px-md-12">
          تور اروپا یکی از مقرون به صرفه‌ترین راه‌های سفر به اروپا است، چرا که هزینه‌های سفر به اروپا بسیار کمتر از سفرهای
          دیگر بوده و قیمت هتل‌ها به نسبت سایر قاره‌ها ارزان‌تر است. به علاوه به راحتی می‌توان برای اخذ ویزای‌شینگن و
          انجام سفرهای توریستی، از طریق ویزای طلایی اقدام کرد.
          ما در این مقاله سعی داریم یک تور اروپایی مناسب را معرفی کنیم تا شما بتوانید به آسانی این تور را خریداری کرده و
          با خیالی آسوده به ماجراجویی‌هایتان در قاره سبز بپردازید. در سال‌های اخیر توجه بسیاری از گردشگران، به مناطق زیبای
          شهری و روستایی در کشورهای اروپایی جلب‌شده‌است و آن‌ها اغلب به دنبال تجربه‌هایی منحصربه‌فرد و متفاوت در سفر به
          این قاره هستند. چرا که بسیاری از مکان‌های دیدنی این قاره در دل طبیعت این کشورها قرار دارد.
        </p>
        <h2 class="px-2 px-md-12 mt-8">تور اروپا برای ایرانیان</h2>
        <p class="text-justify answerText mt-4 px-2 px-md-12">
          حال شاید این سؤال مطرح شود که آیا کشور‌های اروپایی برای ایرانیان جذابیت دارند یا خیر؟ این سوالی است که در ادامه
          به آن پاسخ خواهیم داد.
          پاسخ به این سؤال ساده است. کشورهای اروپا از نظر اقتصادی و تجاری به ثبات رسیده‌اند و با توجه به پیشرفت‌های
          تکنولوژیکی و همچنین امکانات فراوان، مقصد فوق‌العاده‌ای برای سفر هستند. چرا که فرصت‌های طلایی بسیاری برای تجارت
          با کشور‌های پیشرفته اروپایی فراهم است و یکی از بهترین فرصت‌ها برای کسب درآمد می‌تواند همین صنعت گردشگری باشد.
          برخی از کشور‌ها برای جذب گردشگران بیشتر، به راحتی می‌توانند صنعت گردشگری خود را توسعه دهند و یک مقصد ایده‌آل
          محسوب می‌شوند. بنابراین به راحتی می‌توان تور ترکیبی اروپا را به کشورهای مختلف در اروپا یعنی کشور‌هایی مانند
          فرانسه، اسپانیا، آلمان و ایتالیا و ... پیوند داد.
        </p>
        <h2 class="px-2 px-md-12 mt-8">مدارک لازم برای تور اروپا:</h2>
        <ul class="text-justify answerText mt-4 px-2 px-md-12 mr-6">
          <li>ویزای شنگن</li>
          <li>مدارک لازم برای ویزای توریستی</li>
          <li> اصل پاسپورت با ماه اعتبار + حداقل ماه اعتبار به همراه کارت ملی</li>
        </ul>
        <h2 class="px-2 px-md-12 mt-8">مدارک مورد نیاز سفارت برای ویزای توریستی:</h2>
        <ul class="text-justify answerText mt-4 px-2 px-md-12 mr-6">
          <li>کپی کارت واکسن</li>
          <li>پرینت ثبت نام در فرودگاه</li>
          <li>کپی گذرنامه با تاریخ انقضا</li>
          <li>فرم درخواست ویزای توریستی</li>
          <li>گذرنامه با حداقل ماه اعتبار + کپی مدارک بانکی شما بعد از دریافت ویزای توریستی باید به همراه مدارک که ذکر شده
            است.</li>
        </ul>
        <p class="text-justify answerText px-2 px-md-12">
          در صورتی که هر کدام از مدارک ذکر‌شده ‌ناقص باشد، باید قبل از تحویل مدارک حتماً آن را کامل کرده باشید. در
          غیر‌اینصورت ویزای شما ریجکت ‌شده و باید برای ویزا مجدد درخواست بدهید. روز مراجعه به سفارت برای دریافت ویزای
          توریستی روز کاری می‌باشد. برای هر ساعت وقت بیشتر از این مدت باید از طریق ایمیل یا اس‌ام اس وقت بگیرید.
        </p>
        <h2 class="px-2 px-md-12 mt-8">مزایای تور اروپا</h2>
        <p class="text-justify answerText mt-4 px-2 px-md-12">
          تور اروپا دارای چه مزایایی است خدمات گردشگری آهوان به صورت آنلاین تمامی کارهای مربوط به تور اروپا را برایتان
          انجام می‌دهد. یکی از مزایای تور ترکیبی اروپا این است که بیشتر کشورهای اروپایی در این قاره بهاری خنک دارند. مزیت
          دیگر این قاره این است که نقاط گردشگری در کشورهایی مانند ایتالیا و فرانسه زیاد است و منحصر به فرد، به طور مثال
          برج ایفل یکی از نادرترین برج‌های کل جهان است که بلندی آن بسیار حیرت انگیز است. گردشگری آهوان رزرو آنلاین خدمات
          گردشگری را برای مسافران اروپا فراهم می‌کند.
        </p>
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
import MainTourCard from '@/components/MainTourCard.vue'
import axios from 'axios'
export default {
  name: 'EuropeTour',
  metaInfo: {
    meta: [
      { name: 'description', content: "در این مقاله به بررسی یکی از جذاب‌ترین تورهای جهان، تور اروپا می‌پردازیم. با ما همراه باشید تا زیبایی‌های این تور را برایتان به تصویر بکشیم." },
      { name: 'description', content: "شرکت آهوان مجری مستقیم تورهای ترکیبی و دور اروپا، تورهای فرانسه، اسپانیا، ترکیه، سوئیس و ایتالیا برای است." }  
    ]
  },
  components: {
    MainTourCard
  },
  data: () => ({
    publicPath: process.env.BASE_URL,
    cards: [
      {
        image: require('@/assets/image/tour/europ-001.jpg'),
        title: 'فرانسه و امارات(9روز)',
        airline: 'امارات',
        date: '2 شهریور - 9 شهریور',
        date2: '16 شهریور - 23 شهریور',
        hotelStar: '4 و 5',
        nights: '6 شب پاریس + 2 شب دبی',
        route: '/tour/europe/France-UAE-9days',
        download:'/pdf/فرانسه-امارات.jpeg',
      },
      {
        image: require('@/assets/image/tour/europ-002.jpg'),
        title: 'فرانسه - اسپانیا و امارات(11روز)',
        airline: 'امارات',
        date: '7 مرداد - 21 مرداد',
        date2: '18 شهریور',
        hotelStar: '4 و 5',
        nights: '4 شب پاریس + 4 شب بارسلون',
        nights2: '+ 2 شب دبی',
        route: '/tour/europe/France-Spain-UAE-11days',
        download:'/pdf/فرانسه - اسپانیا - امارات.jpeg'
      },
      {
        image: require('@/assets/image/tour/europ-003.jpg'),
        title: 'سوئیس - فرانسه و امارات(11روز)',
        airline: 'امارات',
        date: '14 تیر - 18 مرداد',
        date2: 'و 15 شهریور',
        hotelStar: '4 و 5',
        nights: '4 شب زوریخ-لوسرن + 4 شب پاریس',
        nights2: '+ 2 شب دبی',
        route: '/tour/europe/Switzerland-France-UAE-11-days',
        download:'/pdf/سوئیس - فرانسه - امارات.jpeg'
      },
      {
        image: require('@/assets/image/tour/europ-003.jpg'),
        title: 'سوئیس - فرانسه و امارات(11روز)',
        airline: 'امارات',
        date: 'تاریخ رفت: 10 خرداد',
        hotelStar: '4 و 5',
        nights: '4 شب زوریخ-لوسرن + 4 شب پاریس',
        nights2: '+ 2 شب دبی',
        route: '/tour/europe/Switzerland-France-UAE-11days',
        download:'/pdf/سوئیس - فرانسه - امارات.pdf'
      },
      {
        image: require('@/assets/image/tour/europ-004.jpg'),
        title: 'فرانسه-بلژیک-هلند و امارات(12روز)',
        airline: 'امارات',
        date: '13 مرداد و 17 شهریور',
        hotelStar: '4 و 5',
        nights: '4 شب پاریس + 2 شب بروکسل',
        nights2: '+ 3 شب آمستردام + 2 شب دبی',
        route: '/tour/europe/France-Belgium-Netherlands-UAE-12days',
        download: '/pdf/فرانسه - بلژیک - هلند - امارات.jpeg'
      },
      {
        image: require('@/assets/image/tour/europ-005.jpg'),
        title: 'فرانسه-ایتالیا-اسپانیا و امارات(14روز)',
        airline: 'امارات',
        date: '23 تیر و 18 شهریور',
        hotelStar: '4 و 5',
        nights: '4 شب پاریس + 2 شب ونیز',
        nights2: '2 شب رم+ 3 شب بارسلون + 2 شب دبی',
        route: '/tour/europe/France-Italy-Spain-UAE-14-days',
        download: '/pdf/فرانسه - ایتالیا - اسپانیا - امارات-2.jpeg'
      },
      {
        image: require('@/assets/image/tour/europ-005.jpg'),
        title: 'فرانسه-ایتالیا-اسپانیا و امارات(14روز)',
        airline: 'امارات',
        date: 'تاریخ رفت: 21 مرداد',
        hotelStar: '4 و 5',
        nights: '4 شب پاریس + 2 شب ونیز',
        nights2: '2 شب رم+ 3 شب بارسلون + 2 شب دبی',
        route: '/tour/europe/France-Italy-Spain-UAE-14days',
        download: '/pdf/فرانسه - ایتالیا - اسپانیا - امارات.jpeg'
      },
      {
        image: require('@/assets/image/tour/europ-007.jpg'),
        title: 'سوئیس - ایتالیا و امارات(10روز)',
        airline: 'امارات',
        date: 'تاریخ رفت: 11 خرداد',
        hotelStar: '4 و 5',
        nights: '3 شب زوریخ-لوسرن + 2 شب لوگانو',
        nights2: '+ 2 شب میلان-ونیز + 2 شب دبی',
        route: '/tour/europe/Switzerland-Italy-UAE-10days',
        download: '/pdf/سوئیس - ایتالیا - امارات.pdf'
      },
      {
        image: require('@/assets/image/tour/europ-006.jpg'),
        title: 'اسپانیا - ترکیه(11روز)',
        airline: 'ترکیش',
        date: 'تاریخ رفت: 9 خرداد',
        hotelStar: ' 5 ',
        nights: '2 شب مادرید + 2 شب والنسیا',
        nights2: '+ 4 شب بارسلون + 2 شب استانبول',
        route: '/tour/europe/Spain-Turkiye-11days',
        download: '/pdf/اسپانیا - ترکیه.pdf'
      },
      {
        image: require('@/assets/image/tour/europ-008.jpg'),
        title: 'اسپانیا - ایتالیا - ترکیه(13روز)',
        airline: 'ترکیش',
        date: 'تاریخ رفت: 10 خرداد',
        hotelStar: '4  و 5 ',
        nights: '5 شب بارسلون + 2 شب رم + 1 شب فلورانس',
        nights2: '+ 2 شب ونیز + 2 شب استانبول',
        route: '/tour/europe/Spain-Italy-Turkey-13days',
        download: '/pdf/اسپانیا - ایتالیا - ترکیه.pdf'
      },
      {
        image: require('@/assets/image/tour/europ-009.jpg'),
        title: 'گرندتور سوئیس(10روز)',
        airline: 'ترکیش',
        date: 'تاریخ رفت: 11 خرداد',
        hotelStar: '4  و 5 ',
        nights: 'زوریخ + 1شب اینترلاکن+1شب مونتخو+',
        nights2: '1شب زرمات + 1شب سن موریس + 1شب لوگانو +',
        nights3: '1شب لوسرن + 1شب زوریخ + 2شب استانبول',
        route: '/tour/europe/Swiss-grandtour-10days',
        download: '/pdf/گرندتور سوئیس.pdf'
      },
      {
        image: require('@/assets/image/tour/europ-002.jpg'),
        title: 'سوئیس - ترکیه(8روز)',
        airline: 'ترکیش',
        date: 'تاریخ رفت: 12 خرداد',
        hotelStar: '4  و 5 ',
        nights: '5 شب زوریخ-لوسرن + 2شب استانبول',
        route: '/tour/europe/Switzerland-Turkiye-8days',
        download: '/pdf/سوئیس - ترکیه.pdf'
      },
      {
        image: require('@/assets/image/tour/europ-001.jpg'),
        title: 'فرانسه + ایتالیا + امارات(13روز)',
        airline: 'امارات',
        date: '29 تیر - 26 مرداد',
        date2: '13 شهریور',
        hotelStar: '4 و 5',
        nights: '6 شب پاریس + 2 شب میلان-ونیز',
        nights2: '2 شب رم + 2 شب دبی',
        route: '/tour/europe/France-Italy-UAE-9days',
        download:'/pdf/فرانسه + ایتالیا + امارات.jpeg',
      },
      {
        image: require('@/assets/image/tour/europ-001.jpg'),
        title: 'فرانسه+سوئیس+ایتالیا',
        title2: '+امارات(14روز)',
        airline: 'امارات',
        date: 'تاریخ رفت: 20مرداد',
        hotelStar: '4 و 5',
        nights: '4شب پاریس،3شب زوریخ',
        nights2: '2شب میلان-ونیز،2شب رم،2شب دبی',
        route: '/tour/europe/France-Switzerland-Italy-UAE-14days',
        download:'/pdf/فرانسه+سوئیس+ایتالیا+امارات.jpeg',
      },
      {
        image: require('@/assets/image/tour/europ-007.jpg'),
        title: 'سوئیس+اتریش+اسلواکی+مجارستان',
        title2: '+امارات(13روز)',
        airline: 'امارات',
        date: 'تاریخ رفت: 27مرداد',
        hotelStar: '4 و 5',
        nights: '4 شب زوریخ+لوسرن + 3شب وین + براتیسلوا',
        nights2: '3 شب بوداپست + 2 شب دبی',
        route: '/tour/europe/Switzerland-Austria-Slovakia-Hungary-Emirates-13days',
        download:'/pdf/سوئیس+اتریش+اسلواکی+مجارستان+امارات.jpeg',
      },
    ]
  }),
  methods: {
  
  },
  created() {
    window.scrollTo(0, 0);
    document.title = 'تورهای 1402 اروپا'

  }
}
</script>
