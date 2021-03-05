<template>
  <div>
    <porfolio-page/>
  </div>

</template>

<script>
  import PorfolioPage from '~/pages/portfolio/page/_id'
  export default {
    name: 'PortfolioIndex',
    layout: 'portfolioArchive',
    head() {
      return {
        title: this.$t('portfolio.portfolio')
      }
    },
    components:{
      PorfolioPage
    }

  }
</script>

<style scoped>


</style>
