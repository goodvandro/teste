<template>
  <!-- directive: render origin html on server & render Swiper on browser -->
  <!-- You can get the swiper instance object in current component context by the name: "mySwiper"  -->
  <div class="swiper" v-swiper:myDirectiveSwiper="swiperOptions">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 20
      }
    }
  }
}
</script>
<style scoped>
.swiper-container {
  height: 100%;
  width: 100%;
  padding: 0 0 10px;
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
