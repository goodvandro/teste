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
    <section class="pt-0">
      <div class="container">
        <FormContacto />
      </div>
    </section>
    <section class="bg-white">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="md:pr-14">
            <h3>{{ $t('contactos.mapa.titulo') }}</h3>
            <p>{{ $t('contactos.mapa.texto') }}</p>
            <div>
              <p class="relative pl-10">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class=" absolute top-0 left-0"
                >
                  <path
                    d="M12.004 3c-3.443 0-7.043 2.66-7.043 7.043 0 4.148 6.26 10.487 6.496 10.722a.71.71 0 00.547.235.71.71 0 00.548-.235c.235-.235 6.496-6.574 6.496-10.722 0-4.382-3.6-7.043-7.044-7.043zm0 9.391c-1.33 0-2.347-1.017-2.347-2.348 0-1.33 1.017-2.347 2.347-2.347s2.348 1.017 2.348 2.348c0 1.33-1.017 2.347-2.348 2.347z"
                    fill="#8DBE22"
                  />
                </svg>
                <span class="w-full block"
                  >Av. Marginal 12 de Julho, C.P. no 40, <br />Cidade de São
                  Tomé <br />República Democrática de São Tomé e Príncipe</span
                >
              </p>
              <p class="relative pl-10">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class=" absolute top-0 left-0"
                >
                  <path
                    d="M16.117 15.68l-.619.928c-.123.185-.287.343-.502.4-.705.187-2.576.27-5.425-2.579-2.85-2.849-2.766-4.72-2.58-5.425.058-.215.216-.379.4-.502l.929-.619c.69-.46.877-1.394.417-2.085L6.984 3.17a1.503 1.503 0 00-1.843-.548l-.79.339c-.601.257-1.09.719-1.383 1.303-.244.488-.433 1.003-.46 1.548-.08 1.718.297 5.952 5.013 10.668 4.715 4.715 8.949 5.092 10.667 5.011.545-.026 1.06-.215 1.548-.459a2.763 2.763 0 001.303-1.383l.34-.79a1.503 1.503 0 00-.549-1.843l-2.628-1.753a1.503 1.503 0 00-2.085.417z"
                    fill="#8DBE22"
                  />
                </svg>
                <span class="w-full block"
                  >Tel.:
                  <a href="tel:002392221542" class="text-black hover:text-green"
                    >00239 2221542</a
                  ></span
                >
              </p>
              <p class="relative pl-10">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class=" absolute top-0 left-0"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.526 7.695A2.4 2.4 0 002.398 9.73v9.47a2.4 2.4 0 002.4 2.4h14.4a2.4 2.4 0 002.4-2.4V9.73a2.4 2.4 0 00-1.128-2.035l-7.2-4.5a2.4 2.4 0 00-2.544 0l-7.2 4.5zm3.138 2.907A1.199 1.199 0 105.332 12.6l6 4a1.2 1.2 0 001.332 0l6-4a1.2 1.2 0 10-1.332-1.997l-5.334 3.556-5.334-3.556z"
                    fill="#8DBE22"
                  />
                </svg>
                <span class="w-full block"
                  >E-mail:
                  <a
                    href="mailto:promocaostp@gmail.com"
                    class="text-black hover:text-green"
                    >promocaostp@gmail.com</a
                  ></span
                >
              </p>
              <p class="relative pl-10">
                <a
                  href="https://www.visitsaotomeprincipe.st"
                  class="text-black hover:text-green"
                  >www.visitsaotomeprincipe.st</a
                >
              </p>
            </div>
          </div>
          <div v-if="$device.isDesktop">
            <a
              target="_blank"
              href="https://www.google.pt/maps/@0.3366405,6.7372781,18.5z"
            >
              <img class="float-right" src="/mapa.jpg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { Vue } from 'nuxt-property-decorator'
import { query } from '~/graphql/queries/content'

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
          slug: 'contactos'
        }
      })
      return {
        pagina: data.paginas[0],
        breadcrumbs: [
          { url: '/' + ctx.app.i18n.locale, texto: 'Home' },
          {
            url: '/institucional' + ctx.app.i18n.locale,
            texto: 'Institucional'
          },
          {
            url: data.paginas[0].slug,
            texto: data.paginas[0].nome
          }
        ]
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
