<template>
  <div class="carrousel-thumbs">
    <swiper
      class="swiper gallery-top"
      :options="swiperOptionTop"
      ref="swiperTop"
    >
      <slot></slot>
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
            stroke="#848B95"
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
            stroke="#848B95"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </swiper>

    <swiper
      class="swiper gallery-thumbs"
      :options="swiperOptionThumbs"
      ref="swiperThumbs"
    >
      <slot></slot>
    </swiper>
  </div>
</template>

<script>
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default Vue.extend({
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 7, // looped slides should be the same
        spaceBetween: 0,
        navigation: {
          nextEl: '.slider-button-next',
          prevEl: '.slider-button-prev'
        }
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 7, // looped slides should be the same
        spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
})
</script>
<style scoped>
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
.gallery-top.swiper-container {
  padding: 0 50px;
}

.gallery-thumbs.swiper-container {
  width: calc(100% - 90px);
  margin: 0 45px;
}
.gallery-top .swiper-slide {
  visibility: hidden;
}
.gallery-top .swiper-slide-active {
  visibility: visible;
  @apply rounded-lg shadow-md;
}
.carrousel-thumbs {
  height: 680px;
}
.carrousel-thumbs .swiper-slide {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.gallery-top {
  height: 84%;
  width: 100%;
}
.gallery-thumbs {
  height: 16%;
  margin-top: 5px;
  box-sizing: border-box;
  padding: 0;
}
.gallery-thumbs .swiper-slide {
  width: 16.66666%;
  border: 5px solid #fff;
  height: 100%;
  opacity: 0.4;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  cursor: pointer;
  -webkit-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  transition: all 300ms linear;
}
.gallery-thumbs .swiper-slide:hover,
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
.gallery-thumbs .swiper-slide p {
  display: none;
}

.gallery-top .swiper-slide p {
  @apply absolute bottom-0 left-0 w-full text-white text-center p-4 text-base m-0 font-bold z-10;
}

@media (max-width: 1024px) {
  .carrousel-thumbs {
    height: 500px;
  }
  .gallery-top.swiper-container {
    padding: 0 0px;
  }

  .gallery-thumbs.swiper-container {
    width: 100%;
    margin: 0 0px;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    border: 3px solid #fff;
  }
}
@media (max-width: 680px) {
  .carrousel-thumbs {
    height: 300px;
  }
  .gallery-top {
    height: 80%;
  }
  .gallery-thumbs {
    height: 20%;
  }
}
@media (max-width: 480px) {
  .carrousel-thumbs {
    height: 220px;
  }
  .gallery-top {
    height: 75%;
  }
  .gallery-thumbs {
    height: 25%;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
  }
}
</style>
