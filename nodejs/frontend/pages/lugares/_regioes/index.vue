<template>
  <main>
    <Banner
      :titulo="pagina.nome"
      :imagem="pagina.banner ? base_url(pagina.banner.url) : ''"
    ></Banner>
    <section class="bg-grey-200 lg:pt-8 lg:pb-0">
      <Breadcrumbs :urls="breadcrumbs" />
    </section>

    <section class="bg-grey-200">
      <ContentText :texto="pagina.onde_ir_texto"></ContentText>
    </section>
    <ListCategorias
      :categorias="categorias"
      :baseSlug="'/lugares/' + $route.params.regioes"
      :items="locais"
    />
  </main>
</template>

<script>
import { Vue } from 'nuxt-property-decorator'
import { query } from '~/graphql/queries/onde_ir'

export default Vue.extend({
  data() {
    return {
      pagina: [],
      categorias: [],
      locais: [],
      breadcrumbs: []
    }
  },
  async asyncData(ctx) {
    if (ctx.app.apolloProvider) {
      const { data } = await ctx.app.apolloProvider.defaultClient.query({
        fetchPolicy: 'no-cache',
        query: query(''),
        variables: {
          slug: ctx.params.regioes
        }
      })
      return {
        pagina: data.paginas[0],
        locais: data.locais,
        categorias: data.categorias,
        breadcrumbs: [
          { url: '/' + ctx.app.i18n.locale, texto: 'Home' },
          { url: '/' + ctx.app.i18n.locale + '/lugares', texto: 'Lugares' },
          {
            url: data.paginas[0].slug,
            texto: data.paginas[0].nome
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
