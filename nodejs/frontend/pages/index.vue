<template>
  <main id="home">
    <BannerHome
      class=""
      titulo="São Tomé e Príncipe"
      ctatexto="Explorar são tomé e príncipe"
      :ctalink="localePath('/sobre-nos')"
      :imagem="
        pagina.banner ? base_url(pagina.banner.url) : '/banner-topo1.jpg'
      "
      :slides="bannerSlider"
    />
    <TheBody :elements="pagina.body"></TheBody>
    <ModuloInformacoes />
    <Razoes
      :items="razoes.razoes"
      :titulo="razoes.titulo"
      :texto="razoes.texto"
    />
    <MapaIlhas />
    <Newsletter />
    <Instagram />
  </main>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import { query } from '~/graphql/queries/home'

import ContentIntro from '~/components/ContentIntro'

export default Vue.extend({
  async asyncData(ctx) {
    if (ctx.app.apolloProvider) {
      const { data } = await ctx.app.apolloProvider.defaultClient.query({
        fetchPolicy: 'no-cache',
        query: query(''),
        variables: {
          slug: 'home'
        }
      })
      return {
        bannerSlider: data.bannerSlider,
        pagina: data.pagina[0],
        razoes: data.razoes
      }
    }
  },
  components: {
    ContentIntro
  },
  data() {
    return {
      pagina: [], //query result
      escapar: [
        {
          titulo: 'Chegar',
          texto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imagem: '/uploads/banner_tour_cba83988dd.jpg'
        },
        {
          titulo: 'Caminhar',
          texto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imagem: '/uploads/banner_caminhadas_153acfc511.jpg'
        },
        {
          titulo: 'Descubrir',
          texto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imagem: '/uploads/descubrir_fcd98b9642.jpg'
        },
        {
          titulo: 'Interagir',
          texto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imagem: '/uploads/interagir_2a1017e4f7.jpg'
        },
        {
          titulo: 'Relaxar',
          texto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imagem: '/uploads/relaxar_6f45e3cad5.jpg'
        },
        {
          titulo: 'Mergulhar',
          texto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imagem: '/uploads/banner_o_que_fazer_79e1dd5e9c.jpg'
        }
      ],
      bannerSlider: []
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
