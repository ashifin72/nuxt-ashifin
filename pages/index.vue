<template>
  <div>
    <div>
      <h1> {{$t('home_page')}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeIndex',
    head() {
      return {
        title: this.$t('home_page')
      }
    },
  }

</script>

<style>

</style>
