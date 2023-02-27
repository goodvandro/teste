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
    <section v-if="filteredItinerarios.length > 0" class="bg-grey-200">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <CardMini
            v-for="(itinerario, index3) in filteredItinerarios"
            :titulo="itinerario.nome"
            :imagem="
              itinerario.banner
                ? base_url(itinerario.banner.url)
                : '/logotipo-sao-tome.svg'
            "
            :link="itinerario.slug"
            :key="itinerario.nome + index3"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { Vue } from 'nuxt-property-decorator'
import { queryItinerario } from '~/graphql/queries/itinerario'
import { queryItinerarios } from '~/graphql/queries/itinerarios'

export default Vue.extend({
  data() {
    return {
      pagina: [],
      itinerarios: [],
      filteredItinerarios: []
    }
  },
  async asyncData(ctx) {
    if (ctx.app.apolloProvider) {
      const { data } = await ctx.app.apolloProvider.defaultClient.query({
        fetchPolicy: 'no-cache',
        query: queryItinerario(''),
        variables: {
          slug: ctx.params.slug
        }
      })
      const itinerarios = await ctx.app.apolloProvider.defaultClient.query({
        fetchPolicy: 'no-cache',
        query: queryItinerarios('')
      })
      return {
        breadcrumbs: [
          { url: '/' + ctx.app.i18n.locale, texto: 'Home' },
          {
            url: '/itinerarios/',
            texto: 'Itinerários'
          },
          {
            url: data.itinerario[0].slug,
            texto: data.itinerario[0].nome
          }
        ],
        pagina: data.itinerario[0],
        itinerarios: itinerarios.data.itinerarios
      }
    }
  },

  methods: {
    filterData(items) {
      for (const key in items) {
        if (Object.hasOwnProperty.call(items, key)) {
          const element = items[key]
          if (items[key].slug !== this.pagina.slug) {
            this.filteredItinerarios.push(items[key])
          }
        }
      }
    }
  },

  mounted() {
    this.filterData(this.itinerarios)
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
