<template>
  <div
    class="container mx-auto iframe_item fullwidth h-auto w-full flex flex-col items-center justify-center"
  >
    <div class="h-full w-full bg-cover relative">
      <div
        v-if="imagem && !showVideo"
        class="absolute inset-0 mx-auto"
        @click="loadVideo"
      >
        <img
          src="/play.svg"
          alt="Play"
          class="w-auto h-auto mx-auto cursor-pointer"
          @click="loadVideo"
          style="position: absolute;top: 40%;right: 45%;"
        />
        <!-- <img
          src="/play.svg"
          alt="Play"
          class="w-10 h-full mx-auto"
          @click="loadVideo"
        /> -->
      </div>
      <img
        v-if="imagem && !showVideo"
        :src="base_url(imagem)"
        class="rounded-lg"
        @click="loadVideo"
      />
      <video
        v-if="showVideo && _video"
        id="video"
        este="?"
        :width="fullwidth ? '100%' : '560'"
        :height="fullwidth ? '100%' : '315'"
        controls
        :src="_video"
        :autoplay="autoplay"
        :muted="autoplay"
      >
        <source :src="_video" type="video/mp4" />
      </video>
      <iframe
        v-if="showVideo && _youtube != '' && !_video"
        id="video_iframe"
        class="float-left mb-4"
        :width="fullwidth ? '100%' : '560'"
        :height="fullwidth ? '600' : '315'"
        :src="'https://www.youtube.com/embed/' + _youtube"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <h6 v-if="legenda" class="mt-2" :class="_legenda_cor" v-html="legenda"></h6>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'BaseVideo'
})
export default class BaseVideo extends Vue {
  @Prop() readonly imagem!: string
  @Prop() readonly video!: string
  @Prop() readonly legenda!: string
  @Prop() readonly legenda_cor!: string
  @Prop() readonly autoplay!: boolean
  @Prop() readonly fullwidth!: boolean
  @Prop() readonly youtube!: string

  private showVideo: boolean = true

  mounted() {
    if (this.imagem) {
      this.showVideo = false
    }
  }

  loadVideo() {
    const heightVideo = 600

    this.showVideo = true
    setTimeout(function() {
      document.getElementById('video').style.height = heightVideo + 'px'
    }, 500)
  }

  get _youtube(): string {
    if (
      this.youtube === undefined ||
      this.youtube === null ||
      this.youtube === ''
    ) {
      return ''
    } else {
      return this.youtube
    }
  }

  get _video(): string {
    return this.video
  }

  get _legenda_cor(): string {
    if (
      this.legenda_cor === undefined ||
      this.legenda_cor === null ||
      this.legenda_cor === ''
    ) {
      return ''
    } else {
      return this.legenda_cor
    }
  }
}
</script>

<style>
.video_container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
