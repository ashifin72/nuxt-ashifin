<template>
  <li>
    <a type="button"
       @click="oneCategory(item_filter.slug)">

      {{item_filter[`title_${$i18n.locale}`]}}
    </a>
  </li>
</template>

<script>

  export default {
    name: 'FilterCategory',
    props:{
      item_filter: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods:{
      oneCategory(slug){
        this.$router.push(`/portfolio/category/${slug}`)
      }
    }
  }
</script>

<style scoped>

</style>
