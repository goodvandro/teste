<template>
  <main>
    <Banner
      :titulo="pagina.nome"
      :imagem="pagina.banner ? base_url(pagina.banner.url) : '/banner-topo.jpg'"
    ></Banner>
    <section class="bg-grey-200 lg:pt-8 lg:pb-0">
      <Breadcrumbs :urls="breadcrumbs" />
    </section>
    <TheBody :elements="pagina.body" />
  </main>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import { queryToursTransportes } from '~/graphql/queries/tours_e_transportes'

export default Vue.extend({
  data() {
    return {
      pagina: [], //query result
      slug: String
    }
  },
  async asyncData(ctx) {
    if (ctx.app.apolloProvider) {
      const { data } = await ctx.app.apolloProvider.defaultClient.query({
        fetchPolicy: 'no-cache',
        query: queryToursTransportes(''),
        variables: {
          slug: ctx.params.slug
        }
      })
      return {
        pagina: data.pagina[0],
        slug: ctx.params.slug,
        breadcrumbs: [
          { url: '/' + ctx.app.i18n.locale, texto: 'Home' },
          {
            url: '/' + ctx.app.i18n.locale + '/tours-e-transportes',
            texto: 'Tours e Transportes'
          },
          {
            url: data.pagina[0].slug,
            texto: data.pagina[0].nome
          }
        ]
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
