<template>
  <div
    :class="'w-full float-left bg-no-repeat bg-auto ' + _bg_position"
    :style="
      $device.isMobileOrTablet
        ? ' '
        : 'background-image:url(' + _bg_imagem + ');'
    "
  >
    <div
      :class="
        'relative ' +
          ($device.isMobileOrTablet ? ' float-left w-full ' : ' flex ')
      "
    >
      <div
        :class="
          '  z-10 top-0 left-0 absolute  bg-cover ' +
            _image_position +
            ' bg-no-repeat block' +
            ($device.isMobileOrTablet ? ' w-full h-230 ' : ' w-7/12 h-full  ')
        "
        :lazy-background="_imagem"
        v-if="!_image_right || $device.isMobileOrTablet"
      ></div>

      <div
        class="flex items-stretch pt-20 pb-10 md:pb-20 relative z-20 text-component container mx-auto"
      >
        <div
          class="w-6/14 block"
          v-if="!_image_right && $device.isDesktop"
        ></div>
        <div
          :class="
            'flex self-center bg-white rounded-md  shadow-lg text-left ' +
              ($device.isMobileOrTablet
                ? ' w-full mt-20 p-5 '
                : ' w-8/14 max-w-666 px-24 py-12 ')
          "
        >
          <div class="text-inlink-content">
            <slot />
          </div>
        </div>
      </div>

      <div
        :class="
          'w-8/14 h-full top-0 right-0 absolute bg-cover bg-no-repeat ' +
            _image_position +
            'block'
        "
        :lazy-background="_imagem"
        v-if="_image_right && $device.isDesktop"
      ></div>
    </div>
  </div>
</template>
<style scoped>
.text-component h2:after {
  @apply hidden;
}
.text-component h3 {
  @apply text-left -mt-4;
}

.text-component a {
  color: black !important;
}

.text-component h3:before {
  content: ' ';
  background-image: url('/icon.png');
  margin: 5px 0 0px;
  width: 45px;
  height: 24px;
  display: block;
  color: #8dbe22;
}
</style>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'content-split-with-image'
})
export default class ContentSplitWithImage extends Vue {
  @Prop() readonly imagem!: string
  @Prop() readonly bg_imagem!: string
  @Prop() readonly image_right!: boolean
  @Prop() readonly image_position!: string
  @Prop() readonly bg_position!: string

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

  get _bg_imagem(): string {
    if (
      this.bg_imagem === undefined ||
      this.bg_imagem === null ||
      this.bg_imagem == ''
    ) {
      return ''
    } else {
      return this.bg_imagem
    }
  }

  get _image_right(): boolean {
    if (this.image_right) {
      return this.image_right
    } else {
      return false
    }
  }

  get _image_position(): string {
    if (
      this.image_position === undefined ||
      this.image_position === null ||
      this.image_position == ''
    ) {
      return 'bg-center'
    } else {
      return this.image_position
    }
  }

  get _bg_position(): string {
    if (
      this.bg_position === undefined ||
      this.bg_position === null ||
      this.bg_position == ''
    ) {
      return 'bg-center'
    } else {
      return this.bg_position
    }
  }
}
</script>
