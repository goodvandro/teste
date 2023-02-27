<template>
  <div class=" w-full text-center  ">
    <div
      class="slide-card-wrapper banner-card w-full mx-auto bg-green bg-opacity-50 shadow-md  rounded-full  h-full  transition duration-200 ease-in-out"
    >
      <nuxt-link :to="link">
        <div
          class="slide_bg w-full  bg-cover bg-center bg-no-repeat flex  items-end rounded-full overflow-hidden "
          :style="'background-image:url(' + imagem + ');'"
          data-not-lazy
        >
          <div
            class="banner-card-text w-full float-left text-center p-4 relative transition duration-500 transform ease-in-out "
          >
            <div
              class="overlay-card absolute bottom-0 z-0 h-140 left-0 w-full "
            ></div>
            <h4
              class="mb-1 relative z-10 transition duration-500 transform ease-in-out"
              v-html="titulo"
            ></h4>
            <span class="text-green block mx-auto  relative z-10">
              <svg
                width="23"
                height="16"
                class="inline fill-current ml-2 mb-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7071 8.70711c.3905-.39053.3905-1.02369 0-1.41422L16.3431.92893c-.3905-.39052-1.0236-.39052-1.4142 0-.3905.39053-.3905 1.02369 0 1.41422L20.5858 8l-5.6569 5.6569c-.3905.3905-.3905 1.0236 0 1.4142.3906.3905 1.0237.3905 1.4142 0l6.364-6.36399zM0 9h22V7H0v2z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<style scoped>
.swiper-slide {
  -webkit-animation: fade-out 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-out 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.swiper-slide.swiper-slide,
.swiper-slide.swiper-slide-next,
.swiper-slide.swiper-slide-prev {
  height: 250px;
  margin: 20px 0;
}
.swiper-slide.swiper-slide-next,
.swiper-slide.swiper-slide-prev {
  -webkit-animation: fade-in 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.swiper-slide.swiper-slide .slide-card-wrapper,
.swiper-slide.swiper-slide-next .slide-card-wrapper,
.swiper-slide.swiper-slide-prev .slide-card-wrapper {
  max-width: 250px;
  padding: 12px;
}
.swiper-slide .slide_bg {
  height: 226px;
}
.swiper-slide.swiper-slide-active .slide-card-wrapper {
  max-width: 290px;
  padding: 13px;
}
.swiper-slide.swiper-slide-active {
  height: 290px;
  margin: 0;
  -webkit-animation: fade-in 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.swiper-slide.swiper-slide-active .slide_bg {
  height: 264px;
}
</style>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'CardMiniCarrousel'
})
export default class CardMiniCarrousel extends Vue {
  @Prop() readonly titulo!: string
  @Prop() readonly link!: string
  @Prop() readonly imagem!: string
}
</script>
