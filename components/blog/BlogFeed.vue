<template>
  <div class="blogfeed">
    <h1>Блог</h1>
    <div class="row blog mb-5 mt-4">

<!--      <app-post-->
<!--        v-for="(post, i) in 4"-->
<!--        :key="i"-->
<!--        :item_blog="post"-->
<!--      ></app-post>-->
      <pre>{{fetchedData}}</pre>
    </div>
  </div>

</template>

<script>
  // import AppPost from "./Post"

  export default {
    name: "BlogFid",
    // head: {
    //   title: 'Все посты блога'
    // },

    asyncData(context) {
      return context.$axios
        .get('http://root-ashifin.test/api/blog/posts')
        .then((res) => {
          return { fetchedData: res.data.data }
        })
    },
  }
</script>

<style scoped>

</style>
