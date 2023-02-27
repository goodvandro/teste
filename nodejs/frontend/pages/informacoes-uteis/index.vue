<template>
  <main>
    <Banner
      :titulo="pagina.nome"
      :imagem="base_url(pagina.banner.url)"
    ></Banner>

    <section class="bg-grey-200 lg:pt-8 lg:pb-0">
      <Breadcrumbs :urls="breadcrumbs" />
    </section>

    <TheBody :elements="pagina.body"></TheBody>

    <section>
      <div
        class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
      >
        <Card
          v-for="(info, index) in informacoes"
          :imagem="base_url(info.icon.url)"
          :titulo="info.nome"
          :texto="info.descricao_curta"
          :cta="info.descricao == '' ? false : 'Saber Mais'"
          :link="localePath('/informacoes-uteis' + '/' + info.slug)"
          :imagem_bg="false"
          :icon="false"
          :key="index"
        ></Card>
      </div>
    </section>
  </main>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import { query } from '~/graphql/queries/content'
import { queryInfo } from '~/graphql/queries/informacoes_lista'

export default Vue.extend({
  data() {
    return {
      pagina: [], //query result
      informacoes: []
    }
  },
  async asyncData(ctx) {
    if (ctx.app.apolloProvider) {
      const { data } = await ctx.app.apolloProvider.defaultClient.query({
        fetchPolicy: 'no-cache',
        query: query(''),
        variables: {
          slug: 'informacoes-uteis'
        }
      })
      return {
        pagina: data.paginas[0],
        breadcrumbs: [
          { url: '/' + ctx.app.i18n.locale, texto: 'Home' },
          {
            url: data.paginas[0].slug,
            texto: data.paginas[0].nome
          }
        ]
      }
    }
  },

  created() {
    this.$apollo.addSmartQuery('informacoes', {
      query: queryInfo(this.$root.context.app.$lingua()),
      prefetch: true
    })
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
