<template>
<div>

  <div v-if="estilo === 'card'" class="container mt-9">
    <div class="grid grid-cols-3 gap-6" v-if="$device.isDesktop">
        <CardMiniHover
        v-for="(item, index) in items"
        :key="index"
        :titulo="item.nome"
        :texto="item.descricao_curta"
        :link="localePath('/o-que-fazer')"
        :imagem="item.imagem ? base_url(item.imagem.url) : '/image.jpg'"
        class=""
        />
    </div>
    <Slideshow2Cards v-else>
      <CardMiniHover
        v-for="(item, index) in items"
        :key="index"
        :titulo="item.nome"
        :texto="item.descricao_curta"
        :link="localePath('/o-que-fazer')"
        :imagem="item.imagem ? base_url(item.imagem.url) : '/image.jpg'"
        class="swiper-slide max-w-260"
        />
    </Slideshow2Cards>
  </div>
  <div v-else>
      {{items.imagem}}
      <content-split-with-image
      v-for="(item,index) in items"
      :key="index"
      :image_right=" (index+1) % 2 === 0 ? true : false "
      :imagem="item.imagem ? base_url(item.imagem.url) : '/image.jpg'"
      class="py-0 md:py-20"
      >
      <div class="text-component" v-html="$md.render(item.descricao)"></div>
    </content-split-with-image>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'Experiencias'
})
export default class Experiencias extends Vue {
  @Prop() readonly items!: []
  @Prop() readonly estilo!: string
}
</script>
