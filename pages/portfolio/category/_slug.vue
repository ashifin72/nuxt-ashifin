<template>
  <div>
    <div class="portfolio">
      <div class="container-fluid">
        <portfolio-header/>
      </div>
      <div class="container portfolio__container">

        <div class="row">
          <div class="portfolio__quote col-12" id="filter_id">
            <h1>{{this.cat_data[`title_${$i18n.locale}`]}}</h1>
            <div v-html="this.cat_data[`content_${$i18n.locale}`]"></div>
          </div>
          <portfolio-card
            v-for="item in this.p_data"
            :key="item.slug"
            :item_portfolio="item"

          />
        </div>

        <h3 class="portfolio__title-offers">
          {{$t('portfolio.interesting_offers')}}
        </h3>
      </div>
    </div>

    <div class="container-fluid portfolio__footer">
      <div class="portfolio__slider">
        <slider-item
          v-for="(slider_items, i) in sliders"
          :key="i"
          :slider_items="slider_items"
        >
        </slider-item>
      </div>

      <nuxt-link class="btn btn-danger" to="/calculator">{{$t('portfolio.calculate_site')}}</nuxt-link>
    </div>
  </div>
</template>

<script>
  // import Pagination from "~/components/inclide/Pagination"
  import PortfolioCard from '~/components/portfolio/PortfolioCard'
  import PortfolioHeader from '~/components/header/PortfolioHeader'
  import SliderItem from '~/components/portfolio/SliderItem'

  export default {
    name: 'category',
    validate({params}) {
      return Boolean(params.slug)
    },
    layout: 'portfolioArchive',
    async asyncData(context) {
      return context.$axios
        .get(context.$axios.defaults.baseURL + '/portfolio/categories/' + context.params.slug)
        .then((res) => {
          console.log(context.$axios.defaults.baseURL + '/portfolio/categories/' + context.params.slug)
          return {
            p_data: res.data.items.data,
            cat_data: res.data.category
          }
        })
    },
    data() {
      return {
        sliders: [
          {
            title: 'Бюджетный вариант',
            img: 'offers_blog.jpg',
            descript: 'Описание бюджетного предложения по созданию сайта,Описание бюджетного предложения',
            path: 'url'
          }
        ]

      }
    },

    components: {
      PortfolioHeader,
      PortfolioCard,
      SliderItem
      // Pagination
    }

  }
</script>

<style scoped>

</style>
