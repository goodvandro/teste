<template>
  <div class="swiper" v-swiper:myDirectiveSwiper="swiperOptions">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div
      class="swiper-pagination swiper-pagination-custom2"
      slot="pagination"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'Slideshow2Cards',
})
export default class Slideshow2Cards extends Vue {
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: false,
        grabCursor: true,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination-custom2',
          clickable: true,
          type: 'bullets',
        },
      },
    }
  }
}
</script>
<style scoped>
.swiper-container {
  height: 100%;
  width: 100%;
  padding: 30px 0 35px;
}
</style>
<style>
.swiper-pagination.swiper-pagination-custom2 {
  bottom: 0;
}
.swiper-pagination.swiper-pagination-custom2 .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 100%;
  background: #e6e6ee;
  margin: 0 10px;
}

.bg-grey-200
  .swiper-pagination.swiper-pagination-custom2
  .swiper-pagination-bullet {
  background: #fff;
}

.swiper-pagination.swiper-pagination-custom2 .swiper-pagination-bullet-active {
  opacity: 1;
  background: #D7DEE4;
}

.bg-grey-200
  .swiper-pagination.swiper-pagination-custom2
  .swiper-pagination-bullet-active {
  background: #65C9D7;
}
</style>
