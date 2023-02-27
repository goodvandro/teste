export default {
  server: {
    port: 3011,
    host: '127.0.0.1',
  },
  head: {
    title: process.env.npm_package_name || 'LOREM IPSUM',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || 'LOREM IPSUM',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap',
        defer: true,
        async: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap',
        defer: true,
        async: true,
      },
    ],
  },

  css: [],
  components: true,
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/device',
    'nuxt-lazy-load',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'pt',
            iso: 'pt-PT',
          },
          {
            code: 'en',
            iso: 'en-US',
          },
        ],
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          onlyOnRoot: true,
        },
        seo: false, //é mesmo para estar a falso. seo é feito no layout,
        parsePages: false,
        pages: {
          contactos: {
            en: '/contactos',
          },
          'sobre-nos/index': {
            pt: '/sobre-nos',
          },
          'sobre-nos/_slug': {
            pt: '/sobre-nos/:slug',
          },
          'politica-de-cookies': {
            en: '/cookies-policy',
            pt: '/politica-de-cookies',
          },
          'politica-de-privacidade': {
            en: '/privacy-policy',
            pt: '/politica-de-privacidade',
          },
        },
      },
    ],
    '@nuxtjs/markdownit',
    '@nuxtjs/axios',
  ],
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
  },
  plugins: [
    { src: '@/plugins/swiper-plugin.js' },
    { src: '~/plugins/i18n.js', ssr: false },
    '~/plugins/utils' /*, '~/plugins/i18n.js' */,
  ],

  i18n: {
    strategy: 'prefix',
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    vueI18n: {
      fallbackLocale: 'pt',
      messages: {
        pt: require('./locales/pt.json'),
        en: require('./locales/en.json'),
      },
    },
  },

  apollo: {
    includeNodeModules: true,
    clientConfigs: {
      default: '@/graphql/config/config.js',
    },
  },
  publicRuntimeConfig: {
    adminUrl: process.env.ADMIN_URL,
    baseUrl: process.env.BASE_URL,
  },
}
