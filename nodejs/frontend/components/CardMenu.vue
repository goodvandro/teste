<template>
  <div class=" w-full float-left rounded-xl shadow-md h-115">
    <div
      :class="
        'pcm w-full  relative   hover:z-10  rounded-xl overflow-hidden h-115  ' +
          ($device.isMobileOrTablet ? '  ' : '  ')
      "
      :style="
        'background-image :url(' +
          imagem +
          '); background-size:cover; background-position:center; background-repeat:no-repeat;'
      "
    >
      <nuxt-link :to="link" class="absolute w-full h-full z-50 top-0 left-0 ">
        <span class="relative w-full h-full block text-blue">
          <svg
            width="23"
            height="16"
            class="fill-current mr-3 mb-3 absolute right-0 bottom-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.7071 8.70711c.3905-.39053.3905-1.02369 0-1.41422L16.3431.92893c-.3905-.39052-1.0236-.39052-1.4142 0-.3905.39053-.3905 1.02369 0 1.41422L20.5858 8l-5.6569 5.6569c-.3905.3905-.3905 1.0236 0 1.4142.3906.3905 1.0237.3905 1.4142 0l6.364-6.36399zM0 9h22V7H0v2z"
              fill="currentColor"
            />
          </svg>
        </span>
      </nuxt-link>
      <div class="overlay-shadow bottom-0 left-0"></div>
      <div class="z-40 items-center  p-2 absolute inset-x-0 bottom-0">
        <div class="w-3/4 text-left">
          <p
            class="text-white text-left text-xsm  leading-thight uppercase m-0 font-bold"
          >
            {{ titulo }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'CardMenu'
})
export default class CardMenu extends Vue {
  @Prop() readonly titulo!: string
  @Prop() readonly imagem!: string
  @Prop() readonly link!: string
}
</script>
