<template>
  <div class="row portfolio__header">
    <div class="col-md-5 portfolio__titleblock">
      <h3><span>{{$t('portfolio.which_ones')}}</span> {{$t('portfolio.projects')}}</h3>
      <h2>{{$t('portfolio.we_do')}}</h2>
    </div>
    <div class="col-md-7">
      <img class="portfolio__img_header" src="~/assets/img/header-portfolio.jpg" :alt="$t('portfolio.portfolio')">
    </div>
    <nuxt-link class="btn  btn-danger portfolio__button" to="/calculator">{{$t('portfolio.calculate_site')}}
    </nuxt-link>
    <div class="portfolio__filter portfolio__filter-fon">
      <ul>
        <li>
          <span>{{$t('portfolio.filter')}}:</span>
        </li>
        <li>
          <nuxt-link to="/portfolio">
            {{$t('portfolio.all') + ' ' + $t('portfolio.projects')}}
          </nuxt-link>
        </li>
        <filter-category
          v-for="(item_filter, i) in this.P_FILTER_CATEGORIES"
          :key="i"
          :item_filter="item_filter"
        />
      </ul>
    </div>

  </div>
</template>

<script>
  import FilterCategory from '~/components/portfolio/FilterCategory'
  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: 'PortfolioHeader',
    computed: {
      ...mapGetters({
        P_FILTER_CATEGORIES: 'portfolio_categories/P_FILTER_CATEGORIES'
      })
    },
    methods: {
      ...mapActions({
        GET_P_FILTER_CATEGORIES_FROM_API: 'portfolio_categories/GET_P_FILTER_CATEGORIES_FROM_API',

      })
    },
    components:{
      FilterCategory
    },
    mounted() {
      this.GET_P_FILTER_CATEGORIES_FROM_API()
    }
  }
</script>

<style scoped>

</style>
