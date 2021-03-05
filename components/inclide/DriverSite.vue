<template>
  <div class="driver">
    <div class="wordpress">
      <img class="driver__img" :src="url_img + '/uploads/images/site/driver-cms/'+ driver + '.jpg'" alt="">
      <p>{{$t('portfolio.site_working')}}
        <span v-if="driver === 'HTML+CSS'" class="block">{{$t('portfolio.clean_code')}}</span>
        <span v-else class="block">{{$t('portfolio.popular')}}</span>
        <span v-if="driver != 'WordPress+Woocommerse'">{{type_driver}}</span>

        <span class="driver__name">{{driver}}</span>
      </p>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'DriverSite',
    props: {
      driver: {
        type: String,
        request: true
      }
    },
    data() {
      return {
        url_img: process.env.baseUrl
      }
    },
    computed: {
      type_driver() {
        if (this.driver === 'Laravel' || this.driver === 'Vue' || this.driver === 'Nuxt') {
          return this.$t('portfolio.a_reliable_framework')
        } else if (this.driver === 'html') {
          return 'CSS + '
        } else {
          return this.$t('portfolio.driver')
        }
      }
    }
  }
</script>

<style scoped>

</style>
