<template>
  <div class="post">
    <div class="post__img">
      <img class="post__img" v-if="post.status_img === '0'" :src="url_img + post.img"
           :alt="post[`title_${$i18n.locale}`]">
    </div>

    <div class="post__info">
      <h1 class="post__title">{{post[`title_${$i18n.locale}`]}}</h1>
    </div>
    <div class="post__content">
      <div v-if="post[`description_${$i18n.locale}`] && !post.youtube" class="quote">
        {{post[`description_${$i18n.locale}`]}}
      </div>
      <div v-if="post.video || post.youtube" class="row video">
        <div v-if="post.video" v-html="post.video" class="col-sm-6"></div>
        <div v-if="post.youtube" class="col-sm-6">
          <iframe width="340" height="200" :src="'https://www.youtube.com/embed/' + post.youtube"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
          </iframe>
        </div>
        <div class="col-sm-6">
          <div class="quote-video" v-html="post[`description_${$i18n.locale}`]">
          </div>
        </div>
      </div>
      <div v-html="post[`content_${$i18n.locale}`]">
      </div>
<!--      <app-share/>-->
    </div>

  </div>
</template>

<script>
  // import AppShare from '~/components/inclide/Share'

  export default {
    name: 'Post',
    props: {
      post: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        url_img: process.env.baseImgUrl
      }
    },
    // components: {
    //   AppShare
    // }
  }
</script>

<style scoped lang="sass">
  .post__items
    width: 100%
    height: 150px
    border: 1px solid #333333
</style>
