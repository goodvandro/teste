<template>
  <div class="container">
    <div class="mt-2.5 mb-5 text-center" id="breadcrumbs">
      <div
        :key="index"
        v-for="(url, index) in urls"
        class="mr-1 text-xs tracking-wide inline-block float-none"
      >
        <nuxt-link
          :to="url.url"
          :class="
            index + 1 == urls.length ? 'mr-1 text-red' : 'mr-1 text-grey-600'
          "
          >{{ url.texto }}</nuxt-link
        >
        <span
          class="text-xs text-grey-600"
          v-html="index + 1 == urls.length ? '' : '/'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'BreadCrumbs'
})
export default class BreadCrumbs extends Vue {
  @Prop() readonly urls!: []
}
</script>
