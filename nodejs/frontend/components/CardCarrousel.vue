<template>
  <div class=" w-full text-center  ">
    <div
      class="slide-card-wrapper w-full mx-auto bg-green bg-opacity-50 shadow-md  rounded-full  h-full  transition duration-200 ease-in-out"
    >
      <div
        class="slide_bg w-full  bg-cover bg-center bg-no-repeat flex  items-end rounded-full overflow-hidden "
        :style="'background-image:url(' + imagem + ');'"
        data-not-lazy
      ></div>
    </div>

    <div class="w-full float-left text-center pt-6 px-10 relative ">
      <img
        v-if="icone != ''"
        class="mx-auto"
        :src="icone"
        alt=""
        data-not-lazy
      />
      <svg
        v-if="icone == ''"
        width="45"
        height="24"
        class="mx-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.3061 6.94009c-5.2099 1.97164-6.2954 9.20101-6.2954 9.20101s3.0392 4.6004 7.5979 3.0669c.6513-.219 1.3025-.4381 1.9538-.8762 1.0854-.8763 1.9537-1.5335 2.822-2.1907.8684-.6573 1.5196-1.3145 2.388-1.9717.4341-.4381.8683-.6572 1.3025-.8763l.6512-.6572c1.3025-1.3144 2.605-2.4097 3.4733-3.06696 1.3025-1.09535 1.5196-1.53349 1.5196-1.53349s0-.43814-.4342-.43814c-1.3025-.21908-3.6904-.65722-6.2954-.87629-1.3025 0-3.0391-.21907-4.3416-.21907-.2171 0-.4342.21907-.4342.21907-1.5196-.21907-2.8221 0-3.9075.21907zM24.3281 5.67631c.0475-2.7839-3.1114-4.62529-3.1114-4.62529s-2.7002.56009-2.8309 2.96054c-.0186.34292-.0373.68584.0459 1.06929.2064.6661.3512 1.19087.496 1.71565.1448.52477.3297.94875.4745 1.47352.1233.28265.1448.52477.1663.7669.0617.14132.1233.28265.185.42397.3699.84791.638 1.65541.7828 2.18011.2681.8075.4315.9893.4315.9893s.2036.0811.284-.1205c.3427-.5643.9881-1.592 1.5718-2.76105.2409-.60478.664-1.37064.9049-1.97543.0402-.10079-.0214-.24212-.0214-.24212.3829-.66506.522-1.31037.621-1.85489zM15.4126 10.8454c5.21 1.9717 6.2954 9.2013 6.2954 9.2013s-3.0391 4.6006-7.5979 3.0671c-.6512-.2191-1.3025-.4382-1.9537-.8763-1.0854-.8763-1.9537-1.5336-2.82206-2.1908-.86833-.6572-1.51957-1.3145-2.3879-1.9717-.43417-.4382-.86833-.6573-1.30249-.8763l-.65125-.6573c-1.30249-1.3144-2.60498-2.4098-3.47331-3.0671-1.3025-1.0954-1.51957-1.5335-1.51957-1.5335s0-.4382.43416-.4382c1.30249-.2191 3.69039-.6572 6.29538-.8763 1.30249 0 3.03914-.2191 4.34164-.2191.2171 0 .4342.2191.4342.2191 1.5195-.2191 2.822 0 3.9074.2191z"
          fill="#8DBE22"
        />
      </svg>
      <p class="carroussel-title">{{ titulo }}</p>
      <p class="carroussel-number">{{ number }}</p>
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
  height: 250px;
  padding: 12px;
}
.swiper-slide .slide_bg {
  height: 226px;
}
.swiper-slide.swiper-slide-active .slide-card-wrapper {
  max-width: 290px;
  height: 290px;
  padding: 13px;
}
.swiper-slide.swiper-slide-active {
  margin: 0;
  -webkit-animation: fade-in 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.swiper-slide.swiper-slide-active .slide_bg {
  height: 264px;
}

.swiper-slide .carroussel-title {
  @apply text-grey-600 uppercase text-base mb-1 mt-4 font-bold leading-tight;
}
.swiper-slide .carroussel-number {
  @apply text-green-light uppercase text-xl m-0 font-medium;
}
.swiper-slide.swiper-slide-active .carroussel-title {
  @apply text-md;
}
.swiper-slide.swiper-slide-active .carroussel-number {
  @apply text-2xl;
}
</style>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'CardCarrousel'
})
export default class CardCarrousel extends Vue {
  @Prop() readonly titulo!: string
  @Prop() readonly number!: string
  @Prop() readonly imagem!: string
  @Prop() readonly icone!: string
}
</script>
