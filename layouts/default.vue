<template>
  <div>
    <div class="wraper">

      <app-navigation/>
      <div class="headline__default"></div>
      <div class="container content">
        <Nuxt/>
      </div>
    </div>
<!--    <app-footer/>-->
  </div>
</template>
<script>
  import AppNavigation from '../components/header/Navigation'
  import AppFooter from '../components/footer/Footer'

  export default {
    components: {
      AppNavigation,
      AppFooter
    },
    // computed: {
    //   meta() {
    //     return [
    //       { charset: 'utf-8' },
    //       {
    //         name: 'viewport',
    //         content: 'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no'
    //       },
    //       { hid: 'description', name: 'description', content: 'Главная' }
    //     ]
    //   }
    // },
    // head() {
    //   const canonical = `https://ashifin.com${this.$route.path
    //     .toLowerCase()
    //     .replace(/\/$/, '')}`
    //   return {
    //     meta: [
    //       ...this.meta
    //
    //     ],
    //     script: [
    //       // { src: 'https://markknol.github.io/console-log-viewer/console-log-viewer.js' }
    //     ],
    //     link: [{ rel: 'canonical', href: canonical }]
    //   }
    // }
  }
</script>
<style lang="sass">



</style>
