<template>
  <div
    :class="
      'bg-white p-7 w-full float-left rounded-xl shadow-md' +
        (download || cta ? ' relative pb-14 ' : '  ')
    "
  >
    <div
      class="rounded-md shadow-md mb-6 w-full h-200 overflow-hidden bg-no-repeat bg-cover bg-center "
      v-if="_imagem_bg && imagem"
      :style="'background-image:url(' + imagem + ');'"
    ></div>
    <div
      class=" mb-6 w-full h-200 overflow-hidden flex items-center"
      v-if="!_imagem_bg && imagem"
    >
      <img class="m-auto max-w-full" :src="imagem" :alt="titulo" />
    </div>
    <div
      class=" mb-6 w-full h-120p overflow-hidden flex items-center"
      v-if="mes"
    >
      <div
        class="rounded-full h-96 w-96 flex items-center mx-auto shadow-md bg-yellow text-center"
      >
        <div class="w-full float-left">
          <p class="text-white font-bold text-md m-0 leading-none">
            {{ dia }}
          </p>
          <p class="text-white font-bold text-md m-0 uppercase leading-none">
            {{ mes }}
          </p>
        </div>
      </div>
    </div>

    <svg
      v-if="_icon"
      width="45"
      height="24"
      class="fill-current  mb-4 mx-auto block"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.3061 6.94009c-5.2099 1.97164-6.2954 9.20101-6.2954 9.20101s3.0392 4.6004 7.5979 3.0669c.6513-.219 1.3025-.4381 1.9538-.8762 1.0854-.8763 1.9537-1.5335 2.822-2.1907.8684-.6573 1.5196-1.3145 2.388-1.9717.4341-.4381.8683-.6572 1.3025-.8763l.6512-.6572c1.3025-1.3144 2.605-2.4097 3.4733-3.06696 1.3025-1.09535 1.5196-1.53349 1.5196-1.53349s0-.43814-.4342-.43814c-1.3025-.21908-3.6904-.65722-6.2954-.87629-1.3025 0-3.0391-.21907-4.3416-.21907-.2171 0-.4342.21907-.4342.21907-1.5196-.21907-2.8221 0-3.9075.21907zM24.3281 5.67631c.0475-2.7839-3.1114-4.62529-3.1114-4.62529s-2.7002.56009-2.8309 2.96054c-.0186.34292-.0373.68584.0459 1.06929.2064.6661.3512 1.19087.496 1.71565.1448.52477.3297.94875.4745 1.47352.1233.28265.1448.52477.1663.7669.0617.14132.1233.28265.185.42397.3699.84791.638 1.65541.7828 2.18011.2681.8075.4315.9893.4315.9893s.2036.0811.284-.1205c.3427-.5643.9881-1.592 1.5718-2.76105.2409-.60478.664-1.37064.9049-1.97543.0402-.10079-.0214-.24212-.0214-.24212.3829-.66506.522-1.31037.621-1.85489zM15.4126 10.8454c5.21 1.9717 6.2954 9.2013 6.2954 9.2013s-3.0391 4.6006-7.5979 3.0671c-.6512-.2191-1.3025-.4382-1.9537-.8763-1.0854-.8763-1.9537-1.5336-2.82206-2.1908-.86833-.6572-1.51957-1.3145-2.3879-1.9717-.43417-.4382-.86833-.6573-1.30249-.8763l-.65125-.6573c-1.30249-1.3144-2.60498-2.4098-3.47331-3.0671-1.3025-1.0954-1.51957-1.5335-1.51957-1.5335s0-.4382.43416-.4382c1.30249-.2191 3.69039-.6572 6.29538-.8763 1.30249 0 3.03914-.2191 4.34164-.2191.2171 0 .4342.2191.4342.2191 1.5195-.2191 2.822 0 3.9074.2191z"
        fill="#8DBE22"
      />
    </svg>
    <h4 v-if="_icon || date" class="text-left mb-5 leading-tight">
      {{ titulo }}
    </h4>
    <h3 v-if="!_icon && !date" class="text-left mb-5 leading-tight text-lg">
      {{ titulo }}
    </h3>
    <div class="relative w-full float-left pl-7" v-if="_address">
      <svg
        class="absolute left-0 top-0"
        width="16"
        height="18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.00442 0C4.56094 0 .96094 2.66087.96094 7.04348c0 4.14782 6.26087 10.48692 6.49565 10.72172.15652.1565.31304.2348.54783.2348.23478 0 .3913-.0783.54782-.2348.23478-.2348 6.49566-6.5739 6.49566-10.72172C15.0479 2.66087 11.4479 0 8.00442 0zm0 9.3913c-1.33044 0-2.34783-1.01739-2.34783-2.34782 0-1.33044 1.01739-2.34783 2.34783-2.34783 1.33043 0 2.34778 1.01739 2.34778 2.34783 0 1.33043-1.01735 2.34782-2.34778 2.34782z"
          fill="#D31030"
        />
      </svg>
      <p v-if="morada" class="text-left leading-none mb-2">{{ morada }}</p>
      <p v-if="telefone" class="text-left leading-none mb-2">
        Tel: {{ telefone }}
      </p>
      <p v-if="email" class="text-left leading-none mb-2">
        E-mail:
        <a class="text-black hover:text-blue" :href="email" target="_blank">{{
          email
        }}</a>
      </p>
      <p v-if="website" class="text-left leading-none mb-0">
        <a class="text-black hover:text-blue" :href="website" target="_blank">{{
          website
        }}</a>
      </p>
    </div>
    <div
      class="w-full float-left text-component"
      v-html="$md.render(texto)"
      v-if="!_address && texto"
    ></div>
    <div
      class="text-left absolute bottom-0 left-0  px-7 pb-3 w-full"
      v-if="cta"
    >
      <ButtonCta class="" tipo="transparente" :href="link">{{ cta }}</ButtonCta>
    </div>

    <div
      class="text-left absolute bottom-0 left-0  px-7 pb-5 w-full"
      v-if="download"
    >
      <a
        :href="link"
        class="inline-block w-auto transition duration-500 ease-in-out transform text-green-light   hover:scale-105 "
        target="_blank"
      >
        <svg
          class="inline-block mr-2"
          width="18"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 13v1a3.00002 3.00002 0 003 3h10a3.00008 3.00008 0 003-3v-1m-4-4l-4 4m0 0L5 9m4 4V1"
            stroke="#8DBE22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span
          class="text-base align-middle inline-block underline text-green-light "
          >{{ download }}</span
        >
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'Card'
})
export default class Card extends Vue {
  @Prop() readonly titulo!: string
  @Prop() readonly imagem!: string
  @Prop() readonly imagem_bg!: boolean
  @Prop() readonly morada!: string
  @Prop() readonly telefone!: string
  @Prop() readonly email!: string
  @Prop() readonly website!: string
  @Prop() readonly texto!: string
  @Prop() readonly address!: boolean
  @Prop() readonly icon!: boolean
  @Prop() readonly link!: string
  @Prop() readonly cta!: string
  @Prop() readonly download!: string
  @Prop() readonly dia!: string
  @Prop() readonly mes!: string
  @Prop() readonly date!: string

  get _imagem_bg(): boolean {
    if (
      this.imagem_bg == true ||
      this.imagem_bg == null ||
      this.imagem_bg == undefined
    ) {
      return true
    } else {
      return false
    }
  }

  get _icon(): boolean {
    if (this.icon == true || this.icon == null || this.icon == undefined) {
      return true
    } else {
      return false
    }
  }

  get _address(): boolean {
    if (
      this.address == false ||
      this.address == null ||
      this.address == undefined
    ) {
      return false
    } else {
      return true
    }
  }
}
</script>
