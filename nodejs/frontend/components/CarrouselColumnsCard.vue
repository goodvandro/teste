<template>
  <div
    :class="
      'bg-white p-2 w-full float-left  rounded-xl border border-grey-400 border-solid' +
        ($device.isMobileOrTablet ? ' h-160p ' : ' h-200 ')
    "
  >
    <div
      :class="
        'w-full  relative   hover:z-10  rounded-xl overflow-hidden h-full  ' +
          ($device.isMobileOrTablet ? '  ' : '  ')
      "
    >
      <img
        :src="imagem"
        :alt="titulo"
        :class="
          'absolute z-10  ' +
            ($device.isMobileOrTablet
              ? ' max-w-80 top-0-5 right-0-5 '
              : ' max-w-120 top-1-5 right-1-5 ')
        "
        data-not-lazy
      />
      <nuxt-link :to="link" class="absolute w-full h-full z-50 top-0 left-0 ">
        <span class="relative w-full h-full block text-blue">
          <svg
            width="23"
            height="16"
            :class="
              'fill-current   absolute right-0 bottom-0' +
                ($device.isMobileOrTablet ? ' mr-1 mb-2 ' : ' mr-5 mb-4 ')
            "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.7071 8.70711c.3905-.39053.3905-1.02369 0-1.41422L16.3431.92893c-.3905-.39052-1.0236-.39052-1.4142 0-.3905.39053-.3905 1.02369 0 1.41422L20.5858 8l-5.6569 5.6569c-.3905.3905-.3905 1.0236 0 1.4142.3906.3905 1.0237.3905 1.4142 0l6.364-6.36399zM0 9h22V7H0v2z"
              fill="currentColor"
            />
          </svg>
        </span>
      </nuxt-link>

      <div
        :class="
          'z-40 items-center pb-2   absolute inset-x-0 bottom-0' +
            ($device.isMobileOrTablet ? ' px-0  ' : ' px-5  ')
        "
      >
        <div
          :class="
            ' text-left' +
              ($device.isMobileOrTablet ? ' w-3/4 pr-2 ' : ' w-1/2 ')
          "
        >
          <p
            :class="
              'text-black text-left  uppercase  leading-1 m-0 font-bold ' +
                ($device.isMobileOrTablet ? ' text-xs ' : ' text-base ')
            "
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
  name: 'CarrouselColumnsCard'
})
export default class CarrouselColumnsCard extends Vue {
  @Prop() readonly titulo!: string
  @Prop() readonly imagem!: string
  @Prop() readonly link!: string
}
</script>
