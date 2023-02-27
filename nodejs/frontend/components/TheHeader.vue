<template>
  <div>
    <Navigation v-if="$device.isDesktop && this.$store.state.menu.menuPrincipal"
      :menu="this.$store.state.menu.menuPrincipal.menuTopItem" />
    <NavigationMobile v-if="$device.isMobileOrTablet && this.$store.state.menu.menuPrincipal"
      :menu="this.$store.state.menu.menuPrincipal.menuTopItem" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'TheHeader'
})
export default class TheHeader extends Vue {
  data() {
    return {
      isOpen: false
    }
  }
}
</script>
