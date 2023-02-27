<template>
  <section class="bg-grey-200 bg-no-repeat bg-auto bg-right-top-6" style="background-image:url(/papagaio.png);">
    <div class="container">
      <h5>{{$t('information.title')}}</h5>
      <h2>{{$t('information.sub-title')}}</h2>
      <p class="mt-5">{{$t('information.description')}}</p>      
      <div class="grid gap-6 mb-10 grid-cols-1 lg:grid-cols-2">
        <!-- <div class="bg-white p-7 rounded-xl border border-grey-400 border-solid" v-if="metereologia.current">
          <h4 class="text-grey-600">São Tomé, São Tomé e Príncipe</h4>
          <p class="my-5">{{dias[metereologia.current.dt.getDay()]}}<br>{{ metereologia.current.weather[0].description }}</p>
          <div class="flex content-center">
            <img class="float-left" :src="getIcon(metereologia.current.weather[0])" />
            <span class="text-3xl pt-4">{{parseInt(metereologia.current.temp)}}º</span>
          </div> 
          <div class="grid grid-cols-4 md:grid-cols-6 mt-10">
            <div v-for="(previsao,indexPrevisao) in metereologia.daily" :key="previsao.temp.max+indexPrevisao">
              <span class="uppercase text-center block text-grey-600 font-bold">{{ dias[previsao.dt.getDay()].substr(0,3) }}</span>
              <img class="mx-auto" :src="getIcon(metereologia.current.weather[0])" />
              <div class="text-center"><span class="font-bold">{{parseInt(previsao.temp.max)}}º </span><span class="text-grey-600">| {{parseInt(previsao.temp.min)}}º</span></div>
            </div>
          </div>
        </div> -->
        <Clima />
        <CarrouselColumns arrowColor="#848B95">
          <swiper-slide :key="index" v-for="(info, index) in informacoes">
            <CarrouselColumnsCard
              :titulo="info.nome"
              :link="localePath('/informacoes-uteis' + '/' + info.slug)"
              :imagem="base_url(info.icon.url)"
              class=""
            />
          </swiper-slide>
        </CarrouselColumns>
      </div>  
    </div>
  </section>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import { queryInfo } from '~/graphql/queries/informacoes_lista'
import axios from 'axios'

export default Vue.extend({
  data() {
    return {
      dias: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
      informacoes: [],
      metereologia: []
    }
  },
  created() {
    this.$apollo.addSmartQuery('informacoes', {
      query: queryInfo(this.$root.context.app.$lingua()),
      prefetch: true
    })
  }
})
</script>
