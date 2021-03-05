<template>
  <div class="p-project">
    <div class="p-project__header-fon"></div>
    <div class="container-fluid p-project__header-content">
      <div class="row">
        <div class="col-md-6">
          <img class="img-header" :src="url_img + p_data.type_site" :alt="p_data[`title_${$i18n.locale}`]">
        </div>
        <div class="col-md-6">
          <div class="title-block">
            <span class="data-project">{{$t('portfolio.data_project')}}</span>
            <span class="data-cat">{{cat_data[`title_${$i18n.locale}`]}}</span>
            <h1 class="title-project"> {{p_data[`title_${$i18n.locale}`]}}</h1>
          </div>
          <div class="data-block">
            <p>
              <fa :icon="fas.faUserTie"/>
              {{$t('portfolio.customer')}}:
              <span>{{p_data[`customer_${$i18n.locale}`]}}</span>
            </p>
            <p>
              <fa :icon="fas.faAssistiveListeningSystems"/>
              {{$t('portfolio.project_type')}}:
              <span><a type="button"
                       @click="filterCategory(cat_data.slug)">{{cat_data[`title_${$i18n.locale}`]}}</a></span>
            </p>
            <p>
              <fa :icon="fas.faCogs"/>
              {{$t('portfolio.project_driver')}}:
              <span>{{p_data.cms_site}}</span>
            </p>
            <template v-if="p_data.url_site">
              <p>
                <fa :icon="fas.faSitemap"/>
                URL:
                <span><a :href="p_data.url_site" target="_blank">{{p_data.url_site}}</a></span>
              </p>
            </template>
            <p>
              <fa :icon="fas.faCalendarAlt"/>
              {{$t('portfolio.project_time')}}:
              <span>{{p_data.time_site}}</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="container p-project__body mt-3">
      <div class="row">
        <div class="col-lg-6">
          <div>
            <driver-site
              :driver="p_data.cms_site"
            />
          </div>
          <div v-if="f_data" class="mt-5">
            <div class="mt-5 mr-md-4">
              <one-feedback
                :data="f_data"
                :type_project="cat_data[`title_${$i18n.locale}`]"
              />
            </div>
          </div>
          <div class="mb-5"></div>
        </div>
        <div class="col-lg-6 p-project__content">

            <div class="alert alert-light mb-2">
              {{p_data[`description_${$i18n.locale}`]}}
            </div>
            <div v-html="p_data[`content_${$i18n.locale}`]">
            </div>
          <div class="mb-5"></div>
        </div>
        <div class="col-12 mb-5">
          <div class="p-project__btn">
            <order-btn
              :name="p_data[`title_${$i18n.locale}`]"
            />

          </div>
        </div>


      </div>

    </div>
  </div>
</template>
<script>
  import DriverSite from '~/components/inclide/DriverSite'
  import OrderBtn from '~/components/inclide/OrderBtn'
  import { fas } from '@fortawesome/free-solid-svg-icons'
  import OneFeedback from '../../components/inclide/OneFeedback'

  export default {
    name: 'portfolio-one',
    async validate({ params }) {
      return Boolean(params.slug)
    },
    async asyncData(context) {
      return context.$axios
        .get(context.$axios.defaults.baseURL + '/portfolio/one-portfolio/' + context.params.slug)
        .then((res) => {
          console.log(context.$axios.defaults.baseURL + '/portfolio/one-portfolio/' + context.params.slug)
          return {
            p_data: res.data.item,
            f_data: res.data.feedback,
            cat_data: res.data.category
          }
        })
    },
    data() {
      return {
        url_img: process.env.baseUrl
      }
    },
    computed: {
      fas() {
        return fas
      }
    },
    methods: {
      filterCategory(slug) {
        console.log(slug)
      }
    },
    components: {
      OrderBtn,
      DriverSite,
      OneFeedback
    }

  }
</script>

<style scoped>

</style>
