<template>
  <main>
    <Banner
      :titulo="pagina.nome"
      :imagem="base_url(pagina.banner.url)"
    ></Banner>

    <section class="bg-grey-200">
      <ContentText :texto="pagina.descricao"></ContentText>
    </section>

    <section class="bg-grey-200 py-0" v-if="pagina.icon">
      <div class="container">
        <img class="mx-auto" :src="base_url(pagina.icon.url)" />
      </div>
    </section>
    <TheBody :elements="pagina.body"></TheBody>
  </main>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import { query } from '~/graphql/queries/onde_dormir'

export default Vue.extend({
  data() {
    return {
      pagina: [] //query result
    }
  },
  async asyncData(ctx) {
    if (ctx.app.apolloProvider) {
      const { data } = await ctx.app.apolloProvider.defaultClient.query({
        fetchPolicy: 'no-cache',
        query: query(''),
        variables: {
          slug: ctx.params.slug
        }
      })
      return {
        pagina: data.paginas[0]
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
