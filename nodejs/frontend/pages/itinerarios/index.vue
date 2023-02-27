<template>
  <main>
    <Banner
      v-if="pagina.banner"
      :titulo="pagina.nome"
      :imagem="base_url(pagina.banner.url)"
    />

    <section class="bg-grey-200 lg:pt-8 lg:pb-0">
      <Breadcrumbs :urls="breadcrumbs" />
    </section>
    <TheBody :elements="pagina.body"></TheBody>
    <!-- <ModuloInformacoes></ModuloInformacoes> -->
    <section class="md:px-4">
      <div
        class="grid grid-cols-1 gap-6 mb-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-6"
      >
        <CardMini
          v-for="(card, index3) in itinerarios"
          :titulo="card.nome"
          :imagem="
            card.banner ? base_url(card.banner.url) : '/logotipo-sao-tome.svg'
          "
          :link="localePath('/itinerarios/' + card.slug)"
          :key="card.nome + index3"
        />
      </div>
    </section>
  </main>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import { query } from '~/graphql/queries/content'
import { queryItinerarios } from '~/graphql/queries/itinerarios'

export default Vue.extend({
  data() {
    return {
      pagina: [], //query result
      itinerarios: []
    }
  },
  async asyncData(ctx) {
    if (ctx.app.apolloProvider) {
      const { data } = await ctx.app.apolloProvider.defaultClient.query({
        fetchPolicy: 'no-cache',
        query: query(''),
        variables: {
          slug: 'itinerarios'
        }
      })
      const itinerarios = await ctx.app.apolloProvider.defaultClient.query({
        fetchPolicy: 'no-cache',
        query: queryItinerarios('')
      })
      return {
        pagina: data.paginas[0],
        breadcrumbs: [
          { url: '/' + ctx.app.i18n.locale, texto: 'Home' },
          {
            url: data.paginas[0].slug,
            texto: data.paginas[0].nome
          }
        ],
        itinerarios: itinerarios.data.itinerarios
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
