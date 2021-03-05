<template>
  <div class="portfolioArchive">
    <div class="portfolio__name">
      {{$t('portfolio.portfolio')}}
    </div>
      <div>
        <app-navigation/>
        <div class="headline__archiveportdolio"></div>
        <div class="content">
          <Nuxt/>
        </div>
      </div>
      <app-footer/>
  </div>
</template>

<script>
  import AppNavigation from '../components/header/Navigation'
  import AppFooter from '../components/footer/Footer'

  export default {
    name: 'portfolioArchive',
    components: {
      AppNavigation,
      AppFooter
    }
  }
</script>

<style scoped>

</style>
