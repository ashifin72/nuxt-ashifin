<template>
  <div class="contacts">
    <h1>{{ fetchedData.title }} test</h1>
    <div>
      {{ fetchedData.body }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contacts',
    asyncData(context) {
      return context.$axios
        .get('http://jsonplaceholder.typicode.com/posts/1')
        .then((res) => {
          return { fetchedData: res.data }
        })
    }
  }
</script>

<style scoped>

</style>
