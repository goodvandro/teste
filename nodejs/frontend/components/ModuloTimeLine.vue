<template>
  <div class="w-full float-left bg-timeline">
    <div class="container">
      <div class="w-full float-left relative">
        <div
          class="w-5 lg:w-full absolute left-22 sm:left-24 lg:left-0 rounded-full h-full lg:h-5 top-0 lg:top-55 bg-grey-400 z-0"
        ></div>
        <div
          class="grid grid-cols-1 lg:grid-cols-6 gap-20 lg:gap-6 align-text-top relative z-10 py-10 lg:py-0 px-0 lg:px-6"
        >
          <div
            class="grid grid-cols-2  gap-2 lg:block"
            v-for="(data, index) in timeline"
            :key="index"
          >
            <div
              class="w-full max-w-130 h-130 mx-auto rounded-full bg-green-light shadow  flex flex-wrap content-center px-2 py-6"
            >
              <p
                class="text-center text-white w-full block text-md font-bold m-0 "
              >
                {{ data.ano }}
              </p>
            </div>
            <div
              class="lg:pt-3 lg:pb-3 flex flex-wrap content-center lg:content-start"
            >
              <p
                class="text-grey-900 text-left text-base lg:text-center font-bold mb-4 block w-full"
              >
                {{ data.titulo }}
              </p>
              <!-- <p
              class="text-grey-900 text-left text-xs lg:text-center mb-0 block w-full"
            >
              A ilha de São Tomé foi descoberta em 21 de dezembro de 1470, por
              João de Santarém, no dia de São Tomé
            </p> -->
              <div
                class="text-grey-900 text-left text-xs lg:text-center mb-0 block w-full"
                v-html="$md.render(data.texto)"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-timeline {
  background: -webkit-linear-gradient(0deg, #f5f5f5 81%, #ffffff 81%);
  background: -o-linear-gradient(0deg, #f5f5f5 81%, #ffffff 81%);
  background: -moz-linear-gradient(0deg, #f5f5f5 81%, #ffffff 81%);
  background: linear-gradient(0deg, #f5f5f5 81%, #ffffff 81%);
}

@media (max-width: 1280px) {
  .bg-timeline {
    background: -webkit-linear-gradient(0deg, #f5f5f5 84%, #ffffff 84%);
    background: -o-linear-gradient(0deg, #f5f5f5 84%, #ffffff 84%);
    background: -moz-linear-gradient(0deg, #f5f5f5 84%, #ffffff 84%);
    background: linear-gradient(0deg, #f5f5f5 84%, #ffffff 84%);
  }
}

@media (max-width: 1024px) {
  .bg-timeline {
    background: -webkit-linear-gradient(90deg, #f5f5f5 33%, #ffffff 33%);
    background: -o-linear-gradient(90deg, #f5f5f5 33%, #ffffff 33%);
    background: -moz-linear-gradient(90deg, #f5f5f5 33%, #ffffff 33%);
    background: linear-gradient(90deg, #f5f5f5 33%, #ffffff 33%);
  }
}
@media (max-width: 480px) {
  .bg-timeline {
    background: -webkit-linear-gradient(90deg, #f5f5f5 29%, #ffffff 29%);
    background: -o-linear-gradient(90deg, #f5f5f5 29%, #ffffff 29%);
    background: -moz-linear-gradient(90deg, #f5f5f5 29%, #ffffff 29%);
    background: linear-gradient(90deg, #f5f5f5 29%, #ffffff 29%);
  }
}
</style>

<script>
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { query } from '~/graphql/queries/toursCards'

export default Vue.extend({
  props: {
    timeline: {}
  }
})
</script>
