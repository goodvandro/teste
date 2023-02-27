<template>
  <div
    :class="
      'w-full float-left grid  gap-10 items-center' +
        ($device.isMobileOrTablet ? ' grid-cols-1 ' : ' grid-cols-2 ')
    "
  >
    <div class="w-full float-left text-component" v-html="texto1"></div>

    <div class="w-full float-left text-component" v-html="texto2"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'content-2-columns'
})
export default class Content2Columns extends Vue {
  @Prop() readonly texto1!: string
  @Prop() readonly texto2!: string
}
</script>
