<template>
  <main>
    <Banner :titulo="pagina.nome" :imagem="base_url(pagina.banner.url)" />
    <TheBody :elements="pagina.body"></TheBody>
    <Downloads v-if="items" :items="items" />
  </main>
</template>

<script>
import { Vue } from 'nuxt-property-decorator'
import { query } from '~/graphql/queries/content'
import { queryDownloads } from '~/graphql/queries/downloads'

export default Vue.extend({
  data() {
    return {
      pagina: [],
      items: []
    }
  },
  async asyncData(ctx) {
    if (ctx.app.apolloProvider) {
      const { data } = await ctx.app.apolloProvider.defaultClient.query({
        fetchPolicy: 'no-cache',
        query: query(''),
        variables: {
          slug: 'brochuras-e-mapas'
        }
      })
      const downloads = await ctx.app.apolloProvider.defaultClient.query({
        query: queryDownloads(''),
        variables: {
          tipo: 'brochura'
        }
      })
      return {
        pagina: data.paginas[0],
        breadcrumbs: [
          { url: '/' + ctx.app.i18n.locale, texto: 'Home' },
          {
            url: '/institucional' + ctx.app.i18n.locale,
            texto: 'Institucional'
          },
          {
            url: data.paginas[0].slug,
            texto: data.paginas[0].nome
          }
        ],
        items: downloads.data.downloads
      }
    }
  },

  head() {
    return {
      title: 'Turismo São Tomé e Príncipe',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'Turismo São Tomé e Príncipe'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Turismo São Tomé e Príncipe'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Turismo São Tomé e Príncipe',
          vmid: 'og:title'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Turismo São Tomé e Príncipe',
          vmid: 'og:description'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '',
          vmid: 'og:image'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: '',
          vmid: 'og:url'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
          vmid: 'og:type'
        }
      ]
    }
  }
})
</script>
