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
      :baseSlug="'/lugares/' + $route.params.regioes"
      :items="locais"
    />
  </main>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import { query } from '~/graphql/queries/onde_ir_regiao'

export default Vue.extend({
  data() {
    return {
      pagina: [],
      locais: [],
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
          slug: ctx.params.slug,
          slugRegiao: ctx.params.regioes
        }
      })
      return {
        pagina: data.categoria[0],
        locais: data.locais,
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
