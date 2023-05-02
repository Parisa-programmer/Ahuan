<template>
  <div class="mt-12 pt-12 mr-12">
    <h1>{{ id }}</h1>
  </div>
</template>

<script>
export default{
  name:'tour-slug',
  data(){
    return{
      id:this.$route.params.id,
      blog:{

      }
    }
  },
  methods:{
   
  },
  created (){
    window.scrollTo(0, 0);
  }
}
</script>
