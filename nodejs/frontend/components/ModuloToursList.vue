<template>
  <section class="bg-grey-200">
    <div
      :class="
        'grid grid-cols-1 md:grid-cols-2 gap-5 mb-10  lg:grid-cols-' +
          tours.length
      "
    >
      <CardMini
        v-for="(card, index) in tours"
        :titulo="card.nome"
        :imagem="
          card.thumbnail
            ? base_url(card.thumbnail.url)
            : '/logotipo-sao-tome.svg'
        "
        :link="'/' + $i18n.locale + '/tours-e-transportes/' + card.slug"
        :key="index"
      />
    </div>
    <div
      class="grid grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5"
    ></div>
  </section>
</template>

<script>
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { query } from '~/graphql/queries/toursCards'

export default Vue.extend({
  props: {
    slug: String
  },
  data() {
    return {
      tours: []
    }
  },
  created() {
    this.$apollo.addSmartQuery('tours', {
      query: query(this.$root.context.app.$lingua()),
      prefetch: true,
      variables: {
        slug: this.slug
      }
    })
  }
})
</script>
