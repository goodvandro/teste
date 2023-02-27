<template>
  <!-- directive: render origin html on server & render Swiper on browser -->
  <!-- You can get the swiper instance object in current component context by the name: "mySwiper"  -->
  <div class="swiper" v-swiper:myDirectiveSwiper="swiperOptions">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination swiper-pagination-custom"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
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
}

.swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  background-color: #eee;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
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
