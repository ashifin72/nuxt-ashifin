<template>
  <div>
    <div class="portfolio">
      <div class="container-fluid">
        <portfolio-header/>
      </div>
      <div class="container portfolio__container">

        <div class="row">
          <div class="portfolio__quote col-12">
            {{$t('portfolio.descript1')}} <br>
            {{$t('portfolio.descript2')}} <br>
            {{$t('portfolio.descript3')}}
          </div>
          <div id="key-paginate" class="col-12">
            <pagination
              :url_api="url_api"
              :num_page="num_page"
              @sendNumber="updateNumberPagination"
            />
          </div>

          <portfolio-card
            v-for="item in this.PORTFOLIOS_DATA"
            :key="item.slug"
            :item_portfolio="item"

          />
          <div class="col-12 mt-5">
            <pagination
              :url_api="url_api"
              :num_page="num_page"
              @sendNumber="updateNumberPagination"
            />
          </div>

        </div>

        <h3 class="portfolio__title-offers">
          {{$t('portfolio.interesting_offers')}}
        </h3>
      </div>
    </div>

    <div class="container-fluid portfolio__footer">
      <div class="portfolio__slider">
        <slider-item
        :sliders="sliders"
        />
      </div>
      <nuxt-link class="btn btn-danger" to="/calculator">{{$t('portfolio.calculate_site')}}</nuxt-link>
    </div>
  </div>
</template>

<script>
  import PortfolioHeader from '~/components/header/PortfolioHeader'
  import Pagination from "~/components/inclide/Pagination"
  import PortfolioCard from '~/components/portfolio/PortfolioCard'
  import FilterCategory from '~/components/portfolio/FilterCategory'
  import SliderItem from '~/components/portfolio/SliderItem'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'PortfolioPage',
    validate({params}) {
      return /^\d+$/.test(params.id)
    },
    layout: 'portfolioArchive',
    data() {
      return {
        num_page: +(this.$route.params.id),
        url_api: '/portfolio/all-paginate?page=',

        sliders: [
          {
            title: 'Бюджетный вариант 1',
            img: 'offers_blog.jpg',
            descript: 'Описание бюджетного предложения по созданию сайта,Описание бюджетного предложения',
            path: 'url'
          },
          {
            title: 'Бюджетный вариант 2',
            img: 'offers_blog.jpg',
            descript: 'Описание бюджетного предложения по созданию сайта,Описание бюджетного предложения',
            path: 'url'
          },
          {
            title: 'Бюджетный вариант 3',
            img: 'offers_blog.jpg',
            descript: 'Описание бюджетного предложения по созданию сайта,Описание бюджетного предложения',
            path: 'url'
          }
        ]

      }
    },
    methods: {
      ...mapActions({
        GET_P_FILTER_CATEGORIES_FROM_API: 'portfolio_categories/GET_P_FILTER_CATEGORIES_FROM_API',
        GET_PORTFOLIOS_FROM_API: 'portfolios/GET_PORTFOLIOS_FROM_API'
      }),
      updateNumberPagination(data) {
        console.log(this.num_page)
        this.$router.push(`/portfolio/page/${data}#key-paginate`)
      }

    },
    computed: {
      ...mapGetters({
        P_FILTER_CATEGORIES: 'portfolio_categories/P_FILTER_CATEGORIES',
        PORTFOLIOS_DATA: 'portfolios/PORTFOLIOS_DATA'

      })
    },
    components: {
      PortfolioCard,
      SliderItem,
      FilterCategory,
      Pagination,
      PortfolioHeader

    },
    mounted() {
      this.GET_P_FILTER_CATEGORIES_FROM_API()
      this.data_URL = {
        url: this.url_api,
        num: this.num_page
      }
      this.GET_PORTFOLIOS_FROM_API(this.data_URL)
    }
  }
</script>

<style scoped>

</style>
