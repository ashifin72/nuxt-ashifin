<template>
    <ul class="portfolio__paginate">
      <li
        v-for="item in this.DATA_PAGINATION.links"
        :key="item.label"
      >
        <a v-if="item.label > 0 "
           :class="{active: item.label === num_page}"
           @click.prevent="clickPaginate(item.label)"
           type="button">
          {{item.label}}
        </a>
      </li>
    </ul>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: "Pagination",
    props: {
      url_api:{
        type: String,
        required: true
      },
      num_page:{
        type: Number,
        required: true
      }
    },
    data(){
      return{
        //
      }
    },
    computed:{
      ...mapGetters({
        DATA_PAGINATION: 'pagination/DATA_PAGINATION'
      })
    },
    methods:{
      ...mapActions({
        GET_ALL_PAGINATION: 'pagination/GET_ALL_PAGINATION'
      }),
      clickPaginate(num){
        this.$emit('sendNumber', num)
      }
    },
    mounted() {
      this.data_URL = {
        url: this.url_api,
        num: this.num_page
      }
      this.GET_ALL_PAGINATION(this.data_URL)
    }

  }
</script>

<style scoped>

</style>
