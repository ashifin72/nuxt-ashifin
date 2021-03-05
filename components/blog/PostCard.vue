<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="card">
      <div class="card__img"
           :style="'background:'+ item_blog.img"
      >
        <img :src="url_img + item_blog.img" :alt="item_blog[`title_${$i18n.locale}`]">
      </div>
      <div class="card__content">
        <h3 class="card__title">{{item_blog[`title_${$i18n.locale}`]}}</h3>

        <div class="card__customer"><span>Тип:</span>{{item_blog[`category_${$i18n.locale}`]}}</div>
        <hr class="card__hr">
        <p>
          {{item_blog[`description_${$i18n.locale}`].substring(0,70)}} ...
        </p>
        <div class="catd__line"></div>

        <a
          class="card__order"
          @click="openItem(item_blog.slug)"
          type="button"
        >{{$t('more')}}</a>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    props: {
      item_blog: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    name: 'Post',
    data(){
      return{
        url_img: process.env.baseImgUrl
      }
    },
    methods:{
      openItem(slug){
        this.$router.push(`/blog/${slug}`)
      }
    }
  }
</script>

<style scoped lang="sass">
.post__items
  width: 100%
  height: 150px
  border: 1px solid #333333
</style>
