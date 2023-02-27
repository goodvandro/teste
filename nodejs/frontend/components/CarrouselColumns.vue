<template>
  <div class="carrousel-columns">
    <swiper class="swiper" :options="swiperOptions">
      <slot></slot>

      <div
        class="slider-button-prev  invisible lg:visible transition duration-500 ease-in-out transform hover:scale-110"
        slot="button-prev"
      >
        <svg
          width="12"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2L3 9l7 7"
            :stroke="arrowColor"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div
        class="slider-button-next  invisible lg:visible transition duration-500 ease-in-out transform hover:scale-110"
        slot="button-next"
      >
        <svg
          width="12"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 16l7-7-7-7"
            :stroke="arrowColor"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div
        class="swiper-pagination-custom text-center w-full block"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'CarrouselColumns'
})
export default class CarrouselColumns extends Vue {
  @Prop() readonly arrowColor!: string

  data() {
    return {
      swiperOptions: {
        loop: false,
        slidesPerView: 2,
        slidesPerColumn: 2,
        grabCursor: true,
        /*autoplay: {
          delay: 7000,
          disableOnInteraction: false
        },*/
        spaceBetween: 25,
        pagination: {
          el: '.swiper-pagination-custom',
          clickable: true,
          type: 'bullets'
        },
        navigation: {
          nextEl: '.slider-button-next',
          prevEl: '.slider-button-prev'
        }
      }
    }
  }
}
</script>
<style scoped>
.slider-button-next,
.slider-button-prev {
  position: absolute;
  top: 50%;
  width: 12px;
  height: 18px;
  margin-top: calc(-1 * 36px / 2);
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
.carrousel-columns {
  width: 100%;
  float: left;
  height: 480px;
}
@media (max-width: 1024px) {
  .carrousel-columns {
    height: 405px;
  }
}
.carrousel-columns .swiper {
  height: 100%;
  width: 100%;
}

.carrousel-columns .swiper-wrapper {
  position: inherit;
}
.carrousel-columns .swiper-container {
  width: 100%;
  padding: 20px 24px;
  position: relative;
}

@media (max-width: 1024px) {
  .carrousel-columns .swiper-container {
    padding: 20px 0px;
  }
}

.carrousel-columns .swiper-slide {
  height: 200px;
}
@media (max-width: 1024px) {
  .carrousel-columns .swiper-slide {
    height: 160px;
  }
}

.carrousel-columns .swiper-pagination-custom {
  position: absolute;
  bottom: 0;
}
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
