<template>
  <div class="mt-12 pt-12">
   hiii
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      date: '',
      slug: this.$route.params.id
    }
  },
  components: {
  },
  computed: {
    destination() {
      return StorageEvent.destinations.find(
        destination => destination.slug === this.slug
      )
    }
  },
  methods: {
    disabelDate(formatted, dateMoment, checkingFor) {
      return (
        formatted === new Date() ||
        dateMoment.jMonth() === 4 ||  // means "mordad"
        dateMoment.locale('en').format('dddd') === 'Friday'
      )
    }
  }
}
</script>