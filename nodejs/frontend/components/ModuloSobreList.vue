<template>
  <section class="bg-grey-200">
    <div
      :class="
        'grid grid-cols-1 md:grid-cols-2 gap-5 mb-10  lg:grid-cols-' +
          sobreNosCards.length
      "
    >
      <CardMini
        v-for="(card, index) in sobreNosCards"
        :titulo="card.nome"
        :imagem="
          card.thumbnail
            ? base_url(card.thumbnail.url)
            : '/logotipo-sao-tome.svg'
        "
        :link="'/' + $i18n.locale + '/sobre-nos/' + card.slug"
        :key="index"
      />
    </div>
  </section>
</template>

<script>
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { query } from '~/graphql/queries/sobre_nos_cards'

export default Vue.extend({
  props: {
    slug: String
  },
  data() {
    return {
      sobreNosCards: []
    }
  },
  created() {
    this.$apollo.addSmartQuery('sobreNosCards', {
      query: query(this.$root.context.app.$lingua()),
      prefetch: true,
      variables: {
        slug: this.slug
      }
    })
  }
})
</script>
