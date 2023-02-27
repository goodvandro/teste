<template>
  <main>
    <section
      :id="element.sectionId ? element.sectionId : element.__typename + index"
      :class="element.params ? sectionClass(element.params) : ''"
      v-for="(element, index) in elements"
      :key="index"
    >
      <ContentText
        v-if="element.__typename === 'ComponentContentText'"
        :texto="element.texto"
      ></ContentText>

      <ContentVideo
        v-if="element.youtube"
        :youtube="element.youtube"
        :imagem="element.thumbnail.url"
        autoplay="true"
        fullwidth="true"
      />

      <Experiencias
        v-if="element.__typename === 'ComponentContentExperiencias'"
        :items="element.experiencias"
        :estilo="element.estilo"
      />

      <CarrouselThumbs
        v-if="element.__typename === 'ComponentContentSlider'"
        class="container"
      >
        <swiper-slide
          v-for="(slide, index1) in element.Slide"
          :key="index1"
          :style="'background-image:url(' + base_url(slide.imagem.url) + ');'"
          ><p>{{ slide.legenda }}</p></swiper-slide
        >
      </CarrouselThumbs>

      <div
        class="container"
        v-if="element.__typename === 'ComponentContentCards'"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 lg:grid-cols-3">
          <Card
            v-for="(card, index2) in element.card"
            :titulo="card.nome"
            :morada="card.morada"
            :telefone="card.telefone"
            :email="card.email"
            :website="card.website"
            :address="true"
            :key="index2"
            :imagem="card.imagem ? base_url(card.imagem.url) : false"
          />
        </div>
      </div>
      <div
        class="container"
        v-if="
          element.__typename === 'ComponentContentToursCategorias' ||
            element.__typename === 'ComponentContentCardsToursTransportes'
        "
      >
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <CardMini
            v-for="(card, index3) in element.tours_transportes"
            :titulo="card.nome"
            :imagem="
              card.thumbnail
                ? base_url(card.thumbnail.url)
                : '/logotipo-sao-tome.svg'
            "
            :link="$nuxt.$route.path + (card.slug.charAt(0)=='#'?'':'/') + card.slug"
            :key="index3"
          />
        </div>
        <!-- <div v-if="element.estilo !== 'cardSimple'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <CardMini
            v-for="(card, index3) in element.tours_transportes"
            :titulo="card.nome"
            :imagem="
              card.thumbnail
                ? base_url(card.thumbnail.url)
                : '/logotipo-sao-tome.svg'
            "
            :link="'/' + $i18n.locale + '/tours-e-transportes/' + card.slug"
            :key="index3"
          />
        </div>         -->
        <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <Card v-for="(item,indexDownloads) in items" :key="item.titulo+indexDownloads"
              :titulo="item.nome"
              :download="$t('cta.download.titulo')"
              :link="item.ficheiro.url"
              />
        </div> -->
      </div>
      <div
        class="container"
        v-if="element.__typename === 'ComponentContentSobreCategorias'"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <CardMini
            v-for="(card, index3) in element.sobre_nos"
            :titulo="card.nome"
            :imagem="
              card.thumbnail
                ? base_url(card.thumbnail.url)
                : '/logotipo-sao-tome.svg'
            "
            :link="'/' + $i18n.locale + '/sobre-nos/' + card.slug"
            :key="index3"
          />
        </div>
      </div>

      <div
        class="container"
        v-if="element.__typename === 'ComponentContentImageList'"
      >
        <div class="w-full float-left text-center">
          <div
            class="w-auto float-none text-center inline-block mx-4"
            v-for="(imagem, indexImagem) in element.items"
            :key="imagem.url + indexImagem"
          >
            <img
              class="w-auto"
              v-if="imagem.imagem"
              :src="base_url(imagem.imagem.url)"
            />
          </div>
        </div>
      </div>

      <div
        class="container"
        v-if="element.__typename === 'ComponentContentClima'"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 items-center">
          <div class="md:pr-6">
            <div class="text-component" v-html="$md.render(element.texto)" />
          </div>
          <div>
            <Clima />
          </div>
        </div>
      </div>

      <div
        class="container"
        v-if="element.__typename === 'ComponentContentCardsFeriado'"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            v-for="(card, index4) in element.card"
            :dia="getDay(card.data)"
            :mes="getMonth(card.data)"
            :titulo="card.titulo"
            :texto="card.texto"
            :icon="false"
            :key="index4"
          />
        </div>
      </div>

      <div
        class="container"
        v-if="element.__typename === 'ComponentContentCardsGeral'"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            v-for="(card, index5) in element.Card"
            :titulo="card.titulo"
            :texto="card.texto"
            :imagem="
              card.imagem ? base_url(card.imagem.url) : '/logotipo-sao-tome.svg'
            "
            :icon="false"
            :key="index5"
          />
        </div>
      </div>

      <content-split-with-image
        v-if="
          element.__typename === 'ComponentContentSplitWithImages' &&
            element.imagens.length == 1
        "
        :image_right="
          element.alinhamento
            ? element.alinhamento == 'esquerda'
              ? false
              : true
            : false
        "
        :imagem="base_url(element.imagens[0].url)"
        class="py-0 md:py-20"
        :bg_imagem="
          element.params.background
            ? base_url(element.params.background.url)
            : ''
        "
        :bg_position="
          element.params.background_posicao
            ? bgPosition(element.params.background_posicao)
            : 'right-bottom'
        "
      >
        <div class="text-component" v-html="$md.render(element.texto)"></div>
      </content-split-with-image>
      <div
        class="w-full float-left"
        v-if="element.__typename === 'ComponentContentTimeline'"
      >
        <modulo-time-line :timeline="element.timeline" />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import ModuloTimeLine from './ModuloTimeLine.vue'

@Component({
  components: { ModuloTimeLine },
  name: 'TheBody'
})
export default class TheBody extends Vue {
  @Prop() readonly elements!: string

  sectionClass(params: any) {
    var klass = ''

    if (params.background_color == 'grey') {
      klass += 'bg-grey-200'
    } else {
      klass += 'bg-white'
    }

    if (params.padding) {
      switch (params.padding) {
        case 'top':
          klass += ' pb-0'
          break
        case 'bottom':
          klass += ' pt-0'
          break
        case 'zero':
          klass += ' py-0'
          break
        default:
        // code block
      }
    }

    return klass
  }

  bgPosition(background_posicao: any) {
    var klass = ''

    switch (background_posicao) {
      case 'left_top':
        klass += ' bg-left-top-2'
        break
      case 'left_bottom':
        klass += ' bg-left-bottom-2'
        break
      case 'left_center':
        klass += ' bg-left-center-2'
        break
      case 'right_top':
        klass += ' bg-right-top-2'
        break
      case 'right_bottom':
        klass += ' bg-right-bottom-2'
        break
      case 'right_center':
        klass += ' bg-right-center-2'
        break
      default:
      // code block
    }

    return klass
  }

  getDay(date: any) {
    var d = new Date(date)
    return d.getDate()
  }

  getMonth(date: any) {
    const monthNames = [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez'
    ]

    var d = new Date(date)
    return monthNames[d.getMonth()]
  }
}
</script>
