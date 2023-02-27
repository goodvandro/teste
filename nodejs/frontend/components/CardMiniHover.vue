<template>
  <div
    :class="
      'bg-white p-2 w-full float-left rounded-xl shadow-md  ' +
        ($device.isMobileOrTablet ? '  ' : '  ')
    "
  >
    <div
      :class="
        'pcm w-full  relative   hover:z-10  rounded-xl overflow-hidden   ' +
          ($device.isMobileOrTablet ? ' h-360 ' : ' h-450 ')
      "
      :style="
        'background-image :url(' +
          imagem +
          '); background-size:cover; background-position:center; background-repeat:no-repeat;'
      "
    >
      <nuxt-link :to="link" class="absolute w-full h-full z-45 top-0 left-0 ">
        <span class="relative w-full h-full block text-blue">
          <svg
            width="23"
            height="16"
            class="fill-current mr-5 mb-4 md:mb-7 absolute right-0 bottom-0 z-40"
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
      <div
        v-if="$device.isDesktop"
        class="pcm-text flex flex-col justify-top h-full absolute w-full top-0 p-5 pt-3 transition duration-300 ease-in-out transform  z-40"
      >
        <div class="w-full text-left">
          <h3
            class="transition text-left duration-500 transform ease-in-out font-medium mb-7 text-white md:text-xl"
          >
            {{ titulo }}
          </h3>
          <div
            class="mb-7 text-sm text-white color-white w-1/2 md:w-full"
            v-html="$md.render(texto)"
          ></div>
        </div>
      </div>
      <div
        class="z-40 items-center  p-2 absolute inset-x-0 bottom-0"
        v-if="!$device.isDesktop"
      >
        <div class="w-full text-left">
          <h3
            class="text-white text-left text-base leading-none mb-2 font-medium"
          >
            {{ titulo }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'CardMiniHover'
})
export default class CardMiniHover extends Vue {
  @Prop() readonly titulo!: string
  @Prop() readonly texto!: string
  @Prop() readonly imagem!: string
  @Prop() readonly link!: string
}
</script>
