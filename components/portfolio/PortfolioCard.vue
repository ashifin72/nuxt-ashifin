<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="card">
      <img :src="url_img + '/uploads/images/site/icons/' + item_portfolio.cms_site + '.png'"
           class="card__icons"
           :alt="item_portfolio[`title_${$i18n.locale}`]">
      <div class="card__img"
           :style="'background:'+ item_portfolio.img"
      >

        <img :src="url_img + item_portfolio.img" :alt="item_portfolio[`title_${$i18n.locale}`]">
      </div>
      <div class="card__content">
        <h3>{{item_portfolio[`title_${$i18n.locale}`]}}</h3>
        <div class="card__customer"><span>{{$t('portfolio.customer')}}: </span>
          {{item_portfolio[`customer_${$i18n.locale}`]}}</div>
        <div class="card__customer"><span>{{$t('portfolio.project_type')}}: </span>
          {{item_portfolio[`category_${$i18n.locale}`]}}
        </div>
        <hr class="card__hr">
        <p>
          {{item_portfolio[`description_${$i18n.locale}`].substring(0,75)}} ...
        </p>
        <div class="catd__line"></div>
        <div class="card__button">
          <a
            class="card__view"
            @click="openItem(item_portfolio.slug)"
            type="button"
          >{{$t('portfolio.show_project')}}</a>
          <order-btn
            :name="item_portfolio[`title_${$i18n.locale}`]"
            />
        </div>

      </div>

    </div>

  </div>
</template>

<script>
  import OrderBtn from '~/components/inclide/OrderBtn'
  export default {
    props: {
      item_portfolio: {
        type: Object,
        default() {
          return {}
        }
      },
      cat_name: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    name: 'PortfolioCard',
    data() {
      return {
        url_img: process.env.baseUrl
      }
    },
    methods: {
      openItem(slug) {
        // if ($i18n.locale === 'ru'){
        //   this.$router.push(`/ru/portfolio/${slug}`)
        // }
        this.$router.push(`/portfolio/${slug}`)
      }
    },
    components:{
      OrderBtn
    }
  }
</script>

<style scoped>

</style>
