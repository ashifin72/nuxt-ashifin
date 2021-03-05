<template>
  <div class="row blogpost">
    <div class="col-md-9">
      <bread-crumbs
        :title="p_data[`title_${$i18n.locale}`]"
        :cat_name="cat_data[`title_${$i18n.locale}`]"
        :cat_url="cat_data.slug"
      />
      <app-post
        :post="p_data"
      />

      <app-comments
        :comments="com_data"
      />

    </div>
    <div class="col-md-3">
      <side-bar/>
    </div>

  </div>
</template>

<script>
  import AppComments from '~/components/blog/Comments'
  import AppPost from '~/components/blog/Post'
  import BreadCrumbs from '~/components/inclide/BreadCrumbs'
  import SideBar from '~/components/blog/SideBar'

  export default {
    validate({ params }) {
      return Boolean(params.slug)
    },
    name: 'BlogPostPage',
    async asyncData(context) {
      return context.$axios
        .get(context.$axios.defaults.baseURL + '/blog/post/' + context.params.slug)
        .then((res) => {
          console.log(context.$axios.defaults.baseURL + '/blog/post/' + context.params.slug)
          return {
            p_data: res.data.item,
            cat_data: res.data.category,
            com_data: res.data.comments,
            tags_data: res.data.tags,
          }
        })
    },
    data() {
      return {
        url_img: process.env.baseUrl
      }
    },
    components: {
      SideBar, BreadCrumbs, AppPost, AppComments
    }
  }
</script>

<style scoped>

</style>
