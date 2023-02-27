<template>
  <main>
    <section>
      <div class="container mx-auto">
        <h1 class="text-center pt-14 pb-15">{{ $t('resultados.titulo') }}</h1>
        <p v-if="this.$route.query.term != undefined" class="font-bold">
          {{ $t('resultados.texto') }} {{ this.$route.query.term }}
        </p>
        <div v-if="resultados.length" ass>
          <div
            v-for="(data, index) in resultados"
            :key="index"
            class="shadow rounded p-6 my-6"
          >
            <nuxt-link :to="localePath(data.slug)">
              {{ data.nome }}
            </nuxt-link>
            <div
              v-if="data.texto"
              class="text-component"
              v-html="
                $md.render(
                  getDescriptionPreview(
                    data.texto.replace(/(<([^>]+)>)/gi, ''),
                    150
                  )
                )
              "
            />
          </div>
        </div>
        <div v-else>
          <p>
            {{ $t('resultados.semResultados') }}
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { Vue } from 'nuxt-property-decorator'
import { queryPesquisa } from '~/graphql/queries/pesquisa'

export default Vue.extend({
  async asyncData(ctx) {
    if (ctx.app.apolloProvider) {
      const { data } = await ctx.app.apolloProvider.defaultClient.query({
        fetchPolicy: 'no-cache',
        query: queryPesquisa(''),
        variables: {
          term: ctx.route.query.term
        }
      })
      const resultados = []
      if (data.alojamentos.length) {
        data.alojamentos.forEach(function(alojamento) {
          alojamento.slug = '/onde-dormir/' + alojamento.slug
          resultados.push(alojamento)
        })
      }
      if (data.categorias.length) {
        data.categorias.forEach(function(categoria) {
          if (categoria.locais_e_actividades[0]) {
            categoria.slug =
              '/o-que-fazer/' +
              categoria.locais_e_actividades[0].regiao.slug +
              '/' +
              categoria.slug
            resultados.push(categoria)
          }
          // (ELSE) SEM LOCAL_E_ACTIVIDADES ESCOLHIDO
        })
      }
      if (data.paginas.length) {
        data.paginas.forEach(function(pagina) {
          pagina.slug = '/' + pagina.slug
          resultados.push(pagina)
        })
      }
      if (data.ilhas.length) {
        data.ilhas.forEach(function(ilha) {
          ilha.slug = '/o-que-fazer/' + ilha.slug
          resultados.push(ilha)
        })
      }
      if (data.informacoes.length) {
        data.informacoes.forEach(function(informacao) {
          informacao.slug = '/informacoes-uteis/' + informacao.slug
          resultados.push(informacao)
        })
      }
      if (data.locaisEActividades.length) {
        data.locaisEActividades.forEach(function(localEActividade) {
          localEActividade.slug = '/lugares/' + localEActividade.regiao.slug
          resultados.push(localEActividade)
        })
      }
      if (data.regioes.length) {
        data.regioes.forEach(function(regiao) {
          regiao.slug = '/lugares/' + regiao.slug
          resultados.push(regiao)
        })
      }
      if (data.restaurantes.length) {
        data.restaurantes.forEach(function(restaurante) {
          restaurante.slug = '/onde-comer/' + restaurante.slug
          resultados.push(restaurante)
        })
      }
      if (data.sobreNos.length) {
        data.sobreNos.forEach(function(sobre) {
          sobre.slug = '/sobre-nos/' + sobre.slug
          resultados.push(sobre)
        })
      }
      if (data.toursTransportes.length) {
        data.toursTransportes.forEach(function(toursTransporte) {
          resultados.push(toursTransporte)
        })
      }
      return {
        resultados,
        termo: ctx.route.query.term
      }
    }
  },

  data() {
    return {
      resultados: [],
      termo: ''
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
