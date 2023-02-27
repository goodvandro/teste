<template>
  <main>
    <Banner
      class=" mt-10"
      :carrousel="true"
      :titulo="pagina.nome"
      :imagem="pagina.banner ? base_url(pagina.banner.url) : '/image.jpg'"
    >
      <CarrouselCard arrowColor="#fff">
        <CardMiniCarrousel
          v-for="(slide, index) in categorias"
          :key="index"
          :titulo="slide.nome"
          :link="
            '/' +
              $i18n.locale +
              '/o-que-fazer/' +
              $route.params.ilhas +
              '/' +
              slide.slug
          "
          :imagem="slide.banner ? base_url(slide.banner.url) : '/image.jpg'"
          class="swiper-slide"
        />
      </CarrouselCard>
    </Banner>
    <section class="bg-grey-200">
      <ContentText :texto="pagina.descricao"></ContentText>
    </section>
    <section v-if="pagina.icon_pagina" class="bg-grey-200 py-0">
      <div class="container">
        <img class="mx-auto" :src="base_url(pagina.icon_pagina.url)" />
      </div>
    </section>
    <ListCategorias
      :categorias="categorias"
      :baseSlug="'/o-que-fazer/' + $route.params.ilhas"
      :items="filterLocais(locais)"
    />
    <ModuloInformacoes />
  </main>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import { query } from '~/graphql/queries/locais_e_actividades'

export default Vue.extend({
  data() {
    return {
      pagina: [],
      locais: [],
      categorias: [],
      slugIlha: '',
      slug: '',
      selected: null
    }
  },
  async asyncData(ctx) {
    if (ctx.app.apolloProvider) {
      const { data } = await ctx.app.apolloProvider.defaultClient.query({
        fetchPolicy: 'no-cache',
        query: query(''),
        variables: {
          slug: ctx.params.slug,
          slugIlha: ctx.params.ilhas
        }
      })
      return {
        pagina: data.categoria[0],
        locais: data.locais,
        categorias: data.categorias,
        slugIlha: ctx.params.ilhas,
        slug: ctx.params.slug
      }
    }
  },

  methods: {
    mobileGoTo() {
      window.location.href = this.selected
    },
    filterLocais(items) {
      let filteredLocais = []
      for (const key in items) {
        if (Object.hasOwnProperty.call(items, key)) {
          const element = items[key]
          if (element.regiao.ilha.slug === this.slugIlha) {
            //valida se pertence à ilha
            if (element.categorias.length) {
              for (const secondKey in element.categorias) {
                if (Object.hasOwnProperty.call(element.categorias, secondKey)) {
                  const secondElement = element.categorias[secondKey]
                  if (secondElement.slug == this.slug) {
                    //valida se pertence à categoria
                    filteredLocais.push(element)
                  }
                }
              }
            }
          }
        }
      }
      return filteredLocais
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
