<template>
  <nav class="container-fluid navbar row">
    <div class="col-md-3 col-sm-6 col-12">
      <nuxt-link class="navbar-brand" to="/">
        <img src="~/assets/svg/ashifin-logo.svg" :alt="title">
      </nuxt-link>

    </div>

    <ul class="navbar__menu col-md-6 justify-content-end">
      <li
        class="navbar__item"
        v-for="(item, i) in this.TOP_MENU"
        :key="i"
      >
        <nuxt-link
          no-prefetch
          v-if="$i18n.locale === 'ru'"
          :to="'/ru'+item.menu_item_path"
        >
          {{item[`menu_item_title_${$i18n.locale}`]}}
        </nuxt-link>
        <nuxt-link
          no-prefetch
          v-else
          :to="item.menu_item_path"
        >
          {{item[`menu_item_title_${$i18n.locale}`]}}
        </nuxt-link>
      </li>
    </ul>
    <div class="header-phone col-md-3 col-sm-6 col-12">

      <a :href="'tel:' + phone">
        <fa :icon="fas.faPhoneVolume"  />
        {{phone}}
      </a>

    </div>
    <span class="navbar__lang">
<!--      <nuxt-link :to="switchLocalePath('ru')">RU</nuxt-link>-->
<!--      <nuxt-link :to="switchLocalePath('uk')">UK</nuxt-link>-->
        <nuxt-link
          v-for="locale in $i18n.locales"
          v-if="locale.code !== $i18n.locale"
          :key="locale.code"
          :to="switchLocalePath(locale.code)">{{ locale.name }}
        </nuxt-link>
      </span>
    <a class="navbar__toggler"
       @click.prevent="togleMenu=!togleMenu"
       type="button">
      <span></span>
    </a>
    <div class="drawer"
         :class="{'drawer__show': togleMenu}"
    >
      <ul class="drawer__menu justify-content-end">
                <li
                  class="navbar__item"
                  v-for="(item, i) in this.TOP_MENU"
                  :key="i"
                >
                  <nuxt-link
                    no-prefetch
                    v-if="$i18n.locale === 'ru'"
                    :to="'/ru'+item.menu_item_path"
                  >
                    {{item[`menu_item_title_${$i18n.locale}`]}}
                  </nuxt-link>
                  <nuxt-link
                    no-prefetch
                    v-else
                    :to="item.menu_item_path"
                  >
                    {{item[`menu_item_title_${$i18n.locale}`]}}
                  </nuxt-link>
                </li>
      </ul>
    </div>

  </nav>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { fas } from '@fortawesome/free-solid-svg-icons'
  import { faGithub } from '@fortawesome/free-brands-svg-icons'
  export default {
    name: 'Navigation',
    data() {
      return {
        title: 'Ashifin.com',
        phone: '+38 050 3613708',
        menus: [],
        togleMenu: false,
      }
    },
    computed: {
      ...mapGetters({
          TOP_MENU: 'menus/TOP_MENU'
        }
      ),
      fas () {
        return fas
      },
      faGithub () {
        return faGithub
      }

    },
    methods: {
      ...
        mapActions({
          GET_MENU_FROM_API: 'menus/GET_MENU_FROM_API'
        }),

    },
    mounted() {
      this.GET_MENU_FROM_API()
    }
  }
</script>

<style scoped>

</style>
