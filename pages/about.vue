<template>
  <div class="about">
    <preloader/>
    <h1>{{ fetchedData.title }} test</h1>
    <div>
      {{ fetchedData.body }}
    </div>

  </div>
</template>

<script>
  import Preloader from '../components/inclide/Preloader'
  export default {
    name: 'about',
    asyncData(context) {
      return context.$axios
        .get('http://jsonplaceholder.typicode.com/posts/1')
        .then((res) => {
          return { fetchedData: res.data }
        })
    },
    components:{
      Preloader
    }
  }
</script>

<style scoped>

</style>
