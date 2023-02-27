<template>
  <div
    class="w-full text-component container mx-auto"
    v-html="$md.render(texto)"
  ></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'ContentText'
})
export default class ContentText extends Vue {
  @Prop() readonly texto!: string
}
</script>
