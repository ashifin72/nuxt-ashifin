const imageminMozjpeg = require('imagemin-mozjpeg')
const ImageminPlugin = require('imagemin-webpack-plugin').default

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-ashifin',
    htmlAttrs: {
      lang: 'uk'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'img/x-icon', href: 'favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/sass/main.sass'
  ],
  env: {
    baseUrl: process.env.BASE_URL || 'http://root-ashifin.test',
    baseImgUrl: process.env.BASE_URL || 'http://root-ashifin.test/uploads/'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/swiper', ssr: false },
    { src: '~plugins/fontawesome', ssr: true}
    // '@/plugins/globals',
    // '~plugins/axios',
    // '~plugins/fontawesome',


  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-i18n', {
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        alwaysRedirect: false,
        fallbackLocale: 'uk'
      },
      locales: [
        {
          name: 'RU',
          code: 'ru',
          iso: 'ru-RU',
          file: 'ru.js'
        },
        {
          name: 'UK',
          code: 'uk',
          iso: 'uk-UA',
          file: 'uk.js'
        },
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'uk',
    }],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://root-ashifin.test/api'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
