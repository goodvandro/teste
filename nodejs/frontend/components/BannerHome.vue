<template>
  <div
    :class="
      ' relative  bg-center bg-cover min-h-screen lg:min-h-screen xl:min-h-screen  ' +
        ($device.isDesktop
          ? ' pb-400 pt-215 flex relative items-stretch '
          : ' py-23 ')
    "
    :style="'background-image: url(' + imagem + ')'"
  >
    <div
      class="absolute top-0 left-0 w-full h-56 bg-gradient-to-b from-white"
    ></div>
    <div class="self-center flex container relative pt-8 mb-8  mx-auto">
      <div class="text-white text-center w-full">
        <h1 v-if="titulo != ''" class="text-center text-black  leading-tight">
          {{ titulo }}
        </h1>
        <h3 v-if="subtitulo != ''" class="text-2xxl">
          Verdadeira Tranquilidade
        </h3>
        <ButtonCta
          v-if="ctatexto != ''"
          class="mt-15 lg:mt-40"
          :href="ctalink"
          >{{ ctatexto }}</ButtonCta
        >
        <img
          v-if="$device.isDesktop"
          class="selo absolute"
          src="/selo.png"
          alt="clean safe"
        />
        <div
          v-if="isOpen"
          :class="
            'bg-white bg-opacity-75 rounded-lg py-4 px-5 ' +
              ($device.isDesktop
                ? ' absolute right-0 bottom-0 w-270 '
                : ' mx-auto flex  mt-5 sm:max-w-260 w-full ')
          "
        >
          <div class="w-full float-left relative">
            <a href="https://covid.ms.gov.st/st/" target="_blank">
              <h4 class="text-red text-left mb-3">COVID-19</h4>
              <p class="text-xsm font-bold m-0 text-left">
                Conselhos para viajar em segurança
              </p>
            </a>
            <span
              @click="isOpen = !isOpen"
              class="absolute right-0 top-0 text-black cursor-pointer hover:text-red"
              >X</span
            >
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="$device.isMobileOrTablet"
      class="w-full float-left text-center absolute bottom-0 left-0 z-30 mb-10"
    >
      <svg
        @click="scrollToElem('#section1')"
        width="18"
        height="22"
        class="inline-block "
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 12l7 7 7-7M2 2l7 7 7-7"
          stroke="#1A051D"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <div v-if="$device.isDesktop" class="absolute z-20 bottom-0 left-0  w-full">
      <div class="container-slider">
        <CarrouselCard arrowColor="#fff">
          <CardMiniCarrousel
            v-for="(slide, index) in slides"
            :key="index"
            :titulo="slide.nome"
            :link="slide.slug"
            :imagem="
              slide.banner
                ? base_url(slide.banner.url)
                : `${$config.adminUrl}/uploads/banner_sobre_da6af939f1.jpg`
            "
            class="swiper-slide"
          />
        </CarrouselCard>
      </div>
    </div>
    <div
      class="absolute bottom-0 z-10 left-0 w-full h-48 bg-gradient-to-t from-grey-200"
    ></div>
  </div>
</template>

<style scoped>
h1 {
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.selo {
  top: -30px;
  right: -50px;
}
@media (max-width: 1320px) {
  .selo {
    max-width: 120px;
    height: auto;
    right: 0px;
    top: 0px;
  }
}
</style>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'bannerhome'
})
export default class bannerhome extends Vue {
  @Prop() readonly titulo!: string
  @Prop() readonly subtitulo!: string
  @Prop() readonly ctatexto!: string
  @Prop() readonly ctalink!: string
  @Prop() readonly imagem!: string
  @Prop() readonly slides!: []

  scrollToElem(el: any) {
    var topOfElement = document.querySelector(el).offsetTop - 120
    window.scroll({ top: topOfElement, behavior: 'smooth' })
  }

  data() {
    return {
      isOpen: true
    }
  }
}
</script>
