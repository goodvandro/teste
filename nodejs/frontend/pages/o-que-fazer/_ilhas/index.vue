<template>
  <main>
    <Banner
      :titulo="pagina.nome"
      :imagem="pagina.banner ? base_url(pagina.banner.url) : ''"
    ></Banner>
    <section class="bg-grey-200">
      <ContentText :texto="pagina.texto"></ContentText>
    </section>
    <ListCategorias
      :categorias="categorias"
      :baseSlug="'/o-que-fazer/' + $route.params.ilhas"
      :items="categorias"
    />
  </main>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import { query } from '~/graphql/queries/o_que_fazer'

export default Vue.extend({
  data() {
    return {
      pagina: [],
      categorias: [],
      selected: null
    }
  },
  async asyncData(ctx) {
    if (ctx.app.apolloProvider) {
      const { data } = await ctx.app.apolloProvider.defaultClient.query({
        fetchPolicy: 'no-cache',
        query: query(''),
        variables: {
          slug: ctx.params.ilhas
        }
      })
      return {
        pagina: data.ilhas[0],
        categorias: data.categorias
      }
    }
  },

  methods: {
    mobileGoTo() {
      window.location.href = this.selected
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
