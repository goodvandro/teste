<template>
  <section>
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <Card
          v-for="(item, indexDownloads) in items"
          :key="item.titulo + indexDownloads"
          :titulo="item.nome"
          :download="$t('cta.download.titulo')"
          :link="$config.adminUrl + item.ficheiro.url"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'ContentText'
})
export default class ContentText extends Vue {
  @Prop() readonly items!: []
  @Prop() readonly tipo!: string
}
</script>
