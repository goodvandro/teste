<template>
  <div class="relative flex">
    dsadsa
    <h1 class="text-black">{{ titulo }}</h1>
    <div>{{ texto }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'ContentIntro'
})
export default class ContentIntro extends Vue {
  @Prop() readonly titulo!: string
  @Prop() readonly texto!: string
}
</script>
 