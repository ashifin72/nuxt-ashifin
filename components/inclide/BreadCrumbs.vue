<template>
  <ul class="breadcrumbs">
    <li>
      <nuxt-link to="/">{{$t('home_page')}}</nuxt-link>
    </li>
    <li>
      <nuxt-link v-if="cat_name" :to="cat_url">{{cat_name}}</nuxt-link>
    </li>
    <li>
      {{title}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'BreadCrumbs',
    props:{
      title:{
        type: String,
        required: true
      },
      cat_url:{
        type: String,
        required: true
      },
      cat_name:{
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
