<template>
  <main>
    <Banner
      class=" mt-10"
      :imagem="base_url(pagina.banner.url)"
      :carrousel="true"
      :titulo="pagina.nome"
    >
      <CarrouselCard arrowColor="#fff">
        <CardMiniCarrousel
          v-for="(categoria, indexCategorias) in categorias"
          :key="categoria.nome + indexCategorias"
          :titulo="categoria.nome"
          :link="
            categoria.locais_e_actividades[0]
              ? localePath(
                  '/o-que-fazer/' +
                    categoria.locais_e_actividades[0].regiao.ilha.slug +
                    '/' +
                    categoria.slug
                )
              : '#'
          "
          :imagem="
            categoria.banner ? base_url(categoria.banner.url) : '/slide1.png'
          "
          class="swiper-slide"
        />
      </CarrouselCard>
    </Banner>
    <section class="bg-grey-200 lg:pt-8 lg:pb-0">
      <Breadcrumbs :urls="breadcrumbs" />
    </section>
    <TheBody :elements="pagina.body"></TheBody>
  </main>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import { query } from '~/graphql/queries/content'
import { queryCategorias } from '~/graphql/queries/categorias'

export default Vue.extend({
  data() {
    return {
      pagina: []
    }
  },
  async asyncData(ctx) {
    if (ctx.app.apolloProvider) {
      const { data } = await ctx.app.apolloProvider.defaultClient.query({
        fetchPolicy: 'no-cache',
        query: query(''),
        variables: {
          slug: 'o-que-fazer'
        }
      })
      const categorias = await ctx.app.apolloProvider.defaultClient.query({
        fetchPolicy: 'no-cache',
        query: queryCategorias('')
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
        categorias: categorias.data.categorias
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
