<template>
  <!-- directive: render origin html on server & render Swiper on browser -->
  <!-- You can get the swiper instance object in current component context by the name: "mySwiper"  -->

  <div class="swiper relative" v-swiper:myDirectiveSwiper="swiperOptions">
    <div class="swiper-wrapper ease-in-out">
      <slot></slot>
    </div>
    <div
      class="swiper-pagination-custom text-center w-full lg:hidden block"
    ></div>
    <div
      class="slider-button-prev  invisible lg:visible transition duration-500 ease-in-out transform hover:scale-105"
      slot="button-prev"
    >
      <svg
        width="31"
        height="56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.5 52.5L3 28 27.5 3.5"
          :stroke="arrowColor"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div
      class="slider-button-next  invisible lg:visible transition duration-500 ease-in-out transform hover:scale-105"
      slot="button-next"
    >
      <svg
        width="31"
        height="56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.5 3.5L28 28 3.5 52.5"
          :stroke="arrowColor"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'CarrouselCard'
})
export default class CarrouselCard extends Vue {
  @Prop() readonly arrowColor!: string

  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        grabCursor: true,
        /*autoplay: {
          delay: 7000,
          disableOnInteraction: false
        },*/
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination-custom',
          clickable: true,
          type: 'bullets'
        },
        navigation: {
          nextEl: '.slider-button-next',
          prevEl: '.slider-button-prev'
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            grabCursor: false
          },
          768: {
            slidesPerView: 1,
            grabCursor: true
          },
          100: {
            slidesPerView: 1,
            grabCursor: true
          }
        }
      }
    }
  }
}
</script>
<style scoped>
.swiper-container {
  height: 100%;
  width: 100%;
  padding: 30px 40px 15px 40px;
}

@media (max-width: 1024px) {
  .swiper-container {
    padding: 30px 0px 15px 0px;
  }
}

.slider-button-next,
.slider-button-prev {
  position: absolute;
  top: 50%;
  width: 31px;
  height: 56px;
  margin-top: calc(-1 * 56px / 2);
  z-index: 30;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  outline: 0;
}
.slider-button-prev {
  left: 0px;
  right: auto;
}
.slider-button-next {
  right: 0px;
  left: auto;
}
</style>
<style>
.swiper-pagination-custom .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 100%;
  background: #d7dee4;
  margin: 0 10px;
}

.swiper-pagination-custom .swiper-pagination-bullet-active {
  opacity: 1;
  background: #65c9d7;
}
</style>
