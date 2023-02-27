<template>
  <main>
    <Banner
      class=" mt-10"
      :carrousel="true"
      :imagem="base_url(pagina.banner.url)"
      :titulo="pagina.nome"
    >
      <CarrouselCard arrowColor="#fff">
        <CardMiniCarrousel
          v-for="(slide, index) in regioes"
          :key="index"
          :titulo="slide.nome"
          :link="localePath('/lugares/' + slide.slug)"
          :imagem="
            slide.thumbnail
              ? base_url(slide.thumbnail.url)
              : slide.banner
              ? base_url(slide.banner.url)
              : ''
          "
          class="swiper-slide"
        />
      </CarrouselCard>
    </Banner>
    <section class="bg-grey-200 lg:pt-8 lg:pb-0">
      <Breadcrumbs :urls="breadcrumbs" />
    </section>
    <TheBody :elements="pagina.body"></TheBody>

    <MapaLugares />
    <section class="bg-grey-200">
      <div class="container">
        <h3 class="mb-12">
          Relaxe numa praia deserta ou deixe-se envolver pela energia vibrante
          dos locais mais inesperados.
        </h3>
      </div>
      <div class="w-full float-left carroussel-lugares">
        <CarrouselContinuos>
          <CardMini
            v-for="(card, index) in regioes"
            :titulo="card.nome"
            :imagem="
              card.thumbnail
                ? base_url(card.thumbnail.url)
                : '/logotipo-sao-tome.svg'
            "
            :link="'/' + $i18n.locale + '/lugares/' + card.slug"
            :key="index"
            class="swiper-slide max-w-380 "
          />
        </CarrouselContinuos>
      </div>
    </section>
    <Razoes
      :items="razoes.razoes"
      :titulo="razoes.titulo"
      :texto="razoes.texto"
    />
  </main>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import { query } from '~/graphql/queries/content'
import { queryRegioes } from '~/graphql/queries/regioes'
import Carrousel from '../../components/Carrousel.vue'

export default Vue.extend({
  components: { Carrousel },
  data() {
    return {
      pagina: [],
      regioes: [],
      razoes: []
    }
  },
  async asyncData(ctx) {
    if (ctx.app.apolloProvider) {
      const { data } = await ctx.app.apolloProvider.defaultClient.query({
        fetchPolicy: 'no-cache',
        query: query(''),
        variables: {
          slug: 'lugares'
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
        ],
        razoes: data.razoes
      }
    }
  },
  created() {
    this.$apollo.addSmartQuery('regioes', {
      query: queryRegioes(this.$root.context.app.$lingua()),
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
