<template>
  <div class="contacts">
    <h1>Блог</h1>
    <div class="row blog mb-5 mt-4">
      <post-card
        v-for="(post, i) in  this.DATA_POSTS"
        :key="i"
        :item_blog="post"
      ></post-card>
      <div class="col-12 mt-5">
        <pagination
          :url_api="url_api"
          :num_page="num_page"
          @sendNumber="updateNumberPagination"
        />
      </div>
    </div>
  </div>
</template>
<script>
  // import Pagination from "~/components/inclide/Pagination"
  import PostCard from "~/components/blog/PostCard"
  import {mapActions, mapGetters} from 'vuex'

  export default {
    validate({params}) {
      return /^\d+$/.test(params.id)
    },
    name: 'BlogPage',
    data(){
      return{
        num_page: +(this.$route.params.id),
        url_api: '/blog/all-paginate?page='
      }
    },
    methods: {
      ...mapActions({
        GET_ALL_POSTS: 'blog/GET_ALL_POSTS'
      }),
      updateNumberPagination(data) {
        console.log(this.num_page)
        this.$router.push(`/blog/page/${data}`)
      }
    },
    computed: {
      ...mapGetters({
        DATA_POSTS: 'blog/DATA_POSTS'
      })

    },
    components: {
      PostCard,
      // Pagination
    },
    mounted() {
      this.data_URL = {
        url: this.url_api,
        num: this.num_page
      }
      this.GET_ALL_POSTS(this.data_URL)
    }
  }
</script>

<style scoped>

</style>
