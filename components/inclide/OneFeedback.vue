<template>
  <div class="row feedback">
    <div class="feedback__title-block">
      <span class="data-project">{{$t('portfolio.feedback')}}:</span>
      <h4>{{data[`name_${$i18n.locale}`]}}</h4>
      <span class="data-cat" v-html="data[`title_${$i18n.locale}`]"></span>

    </div>
    <div class="row">
      <div class="col-sm-3 col-4 col-img">
        <img :src="url_img + data.img" :alt="data[`name_${$i18n.locale}`]">
      </div>
      <div class="col-sm-9 col-8 feedback__content">
        <div v-html="data[`description_${$i18n.locale}`]"></div>
        <img v-if="data.screen"
             class="screen"
             :src="url_img + data.screen"
             :alt="data[`name_${$i18n.locale}`]">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OneFeedback',
    props: {
      data: {
        type: Object,
        request: true
      },
      type_project: {
        type: String,
        request: true
      }
    },
    data() {
      return {
        url_img: process.env.baseUrl
      }
    }
  }
</script>

<style scoped>

</style>
