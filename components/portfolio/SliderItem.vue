<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(item, i) in sliders"
        :key="i"
      >
        <div class="item-slider">
          <div class="col-cont slider">
            <div class="slider__title">{{item.title}}</div>
            <div class="slider__content">
              {{item.descript}}
            </div>
            <nuxt-link to="" class="btn btn-order">{{$t('portfolio.order_consult')}}</nuxt-link>
            <div class="slider__signature"></div>
          </div>
          <div class="col-img slider__img-block">
            <img :src="require('~/assets/img/' + item.img)" :alt="item.title">
          </div>
        </div>

      </swiper-slide>
    </swiper>
    <div class="slider__paginate">
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>


</template>

<script>
  export default {
    props: {
      sliders: {
        type: Array,
        default() {
          return {}
        }
      }
    },
    name: 'SliderItem',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
