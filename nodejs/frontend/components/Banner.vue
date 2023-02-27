<template>
  <div
    :class="
      ' flex relative items-stretch  bg-center bg-cover min-h-screen lg:min-h-screen xl:min-h-screen  ' +
        ($device.isDesktop && carrousel ? ' pb-400 pt-215  ' : ' py-23 ')
    "
    :style="'background-image: url(' + imagem + ')'"
  >
    <div
      class="absolute top-0 left-0 w-full h-56 bg-gradient-to-b from-white"
    ></div>
    <div class="self-center flex container mx-auto">
      <div class="text-white text-center w-full">
        <h1 v-if="titulo != ''" class="text-center text-white  leading-tight">
          {{ titulo }}
        </h1>
      </div>
    </div>
    <div
      v-if="$device.isDesktop && carrousel"
      class="absolute z-20 bottom-0 left-0  w-full"
    >
      <div class="container-slider">
        <slot></slot>
      </div>
    </div>
    <div
      class="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-grey-200"
    ></div>
  </div>
</template>

<style scoped>
h1 {
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'banner'
})
export default class banner extends Vue {
  @Prop() readonly titulo!: string
  @Prop() readonly imagem!: string
  @Prop() readonly carrousel!: boolean
}
</script>
