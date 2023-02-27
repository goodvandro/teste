<template>
  <section class="bg-white">
    <div class="container">
      <h5>10 RAZÕES</h5>
      <h2>{{ titulo }}</h2>
      <div class="text-component" v-html="$md.render(texto)" />
      <div class="container-slider">
        <CarrouselCard arrowColor="#8DBE22">
          <CardCarrousel
            v-for="(item, index) in items"
            :key="index + item.titulo"
            :titulo="item.titulo"
            icone=""
            :number="index + 1 < 10 ? '0' + (index + 1) : index + 1"
            :imagem="item.imagem ? base_url(item.imagem.url) : '/slide1.png'"
            class="swiper-slide"
          />
        </CarrouselCard>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'Razoes'
})
export default class Razoes extends Vue {
  @Prop() readonly items!: []
  @Prop() readonly titulo!: string
  @Prop() readonly texto!: string
}
</script>
