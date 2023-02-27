<template>
  <div
    :class="
      'w-full float-left grid  gap-10 items-center' +
        ($device.isMobileOrTablet ? ' grid-cols-1 ' : ' grid-cols-2 ')
    "
  >
    <div class="w-full float-left" v-if="!_image_right && $device.isDesktop">
      <img :src="imagem" alt="" class="mx-auto block" />
    </div>

    <div class="w-full float-left text-component">
      <slot></slot>
    </div>

    <div
      class="w-full float-left"
      v-if="_image_right || $device.isMobileOrTablet"
    >
      <img :src="imagem" alt="" class="mx-auto block" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'content-with-image'
})
export default class ContentWithImage extends Vue {
  @Prop() readonly imagem!: string
  @Prop() readonly image_right!: boolean

  get _imagem(): string {
    if (
      this.imagem === undefined ||
      this.imagem === null ||
      this.imagem == ''
    ) {
      return ''
    } else {
      return this.imagem
    }
  }

  get _image_right(): boolean {
    if (this.image_right) {
      return this.image_right
    } else {
      return false
    }
  }
}
</script>
