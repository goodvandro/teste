<template>
  <main>
    <BannerHome
      class=""
      titulo="São Tomé e Príncipe"
      ctatexto="Explorar são tomé e príncipe"
      ctalink="#"
      imagem="/banner-topo1.jpg"
    ></BannerHome>
    <Banner class=" mt-10" imagem="/banner-topo.jpg" :carrousel="true">
      <CarrouselCard arrowColor="#fff">
        <CardMiniCarrousel
          titulo="Onde dormir 1"
          link="#"
          imagem="/slide1.png"
          class="swiper-slide"
        />
        <CardMiniCarrousel
          titulo="Onde dormir"
          link="#"
          imagem="/slide2.png"
          class="swiper-slide"
        />

        <CardMiniCarrousel
          titulo="Onde dormir 3"
          link="#"
          imagem="/slide3.png"
          class="swiper-slide"
        />
      </CarrouselCard>
    </Banner>

    <section id="section1" class=" ">
      <div class="container-slider">
        <CarrouselCard arrowColor="#8DBE22">
          <CardCarrousel
            titulo="um dos últimos paraísos da terra"
            icone=""
            number="01"
            imagem="/slide1.png"
            class="swiper-slide"
          />
          <CardCarrousel
            titulo="um segredo bem guardado"
            icone=""
            number="02"
            imagem="/slide2.png"
            class="swiper-slide"
          />
          <CardCarrousel
            titulo="141 espécies de pássaros"
            icone="/icon.png"
            number="03"
            imagem="/slide3.png"
            class="swiper-slide"
          />
        </CarrouselCard>
      </div>
    </section>

    <section class="bg-grey-200">
      <div class="container">
        <div
          class="
            grid  gap-6 mb-10 grid-cols-1 lg:grid-cols-2
          "
        >
          <CarrouselColumns arrowColor="#848B95">
            <swiper-slide>
              <CarrouselColumnsCard
                titulo="Vistos"
                link="#"
                imagem="/vistos.png"
                class=""
              />
            </swiper-slide>
            <swiper-slide>
              <CarrouselColumnsCard
                titulo="Voos"
                link="#"
                imagem="/aviao.png"
                class=""
              />
            </swiper-slide>
            <swiper-slide>
              <CarrouselColumnsCard
                titulo="Vistos"
                link="#"
                imagem="/vistos.png"
                class=""
              />
            </swiper-slide>
            <swiper-slide>
              <CarrouselColumnsCard
                titulo="Voos"
                link="#"
                imagem="/aviao.png"
                class=""
              />
            </swiper-slide>
            <swiper-slide>
              <CarrouselColumnsCard
                titulo="Vistos"
                link="#"
                imagem="/vistos.png"
                class=""
              />
            </swiper-slide>
            <swiper-slide>
              <CarrouselColumnsCard
                titulo="Voos"
                link="#"
                imagem="/aviao.png"
                class=""
              />
            </swiper-slide>
          </CarrouselColumns>
        </div>
      </div>
    </section>

    <section class="bg-grey-400">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <CardMini
            titulo="História e Língua"
            link="#"
            imagem="/card.png"
            class=""
          />
        </div>
        <div class="grid grid-cols-3 gap-6" v-if="$device.isDesktop">
          <CardMiniHover
            titulo="Descobrir"
            texto="As nossas famosas Roças /empresas agrícolas, vilas e florestas."
            link="#"
            imagem="/card.png"
            class=""
          />
        </div>
        <CarrouselCard v-if="$device.isMobileOrTablet">
          <CardMiniHover
            titulo="Descobrir"
            texto="As nossas famosas Roças /empresas agrícolas, vilas e florestas."
            link="#"
            imagem="/card.png"
            class="swiper-slide mb-4"
          />
          <CardMiniHover
            titulo="Descobrir"
            texto="As nossas famosas Roças /empresas agrícolas, vilas e florestas."
            link="#"
            imagem="/card.png"
            class="swiper-slide mb-4"
          />
          <CardMiniHover
            titulo="Descobrir"
            texto="As nossas famosas Roças /empresas agrícolas, vilas e florestas."
            link="#"
            imagem="/card.png"
            class="swiper-slide mb-4"
          />
        </CarrouselCard>
      </div>
    </section>
    <section>
      <div class="container">
        <CarrouselThumbs>
          <swiper-slide style="background-image:url(/banner-topo.jpg);"
            ><p>Legenda imagem</p></swiper-slide
          >
          <swiper-slide style="background-image:url(/banner-topo1.jpg);"
            ><p>Legenda imagem 1</p></swiper-slide
          >
          <swiper-slide style="background-image:url(/banner-topo.jpg);"
            ><p>Legenda imagem 2</p></swiper-slide
          >
          <swiper-slide style="background-image:url(/banner-topo1.jpg);"
            ><p>Legenda imagem 3</p></swiper-slide
          >
          <swiper-slide style="background-image:url(/banner-topo.jpg);"
            ><p>Legenda imagem 4</p></swiper-slide
          >
          <swiper-slide style="background-image:url(/banner-topo1.jpg);"
            ><p>Legenda imagem 5</p></swiper-slide
          >
          <swiper-slide style="background-image:url(/banner-topo.jpg);"
            ><p>Legenda imagem 6</p></swiper-slide
          >
          <swiper-slide style="background-image:url(/banner-topo1.jpg);"
            ><p>Legenda imagem 7</p></swiper-slide
          >
          <swiper-slide style="background-image:url(/banner-topo.jpg);"
            ><p>Legenda imagem 8</p></swiper-slide
          >
        </CarrouselThumbs>
      </div>
    </section>

    <section class="bg-grey-600">
      <div class="container">
        <div class="w-full lg:w-1/2">
          <CardList
            titulo="Roça Água Izé"
            imagem="/card_image.jpg"
            texto="Fundada em 1854, pelo Barão de Água Izé, foi a primeira roça a acolher o cultivo de cacau em São Tomé, depois de ter sido introduzido na ilha do Príncipe.
Água Izé foi a sede da Companhia do Príncipe, foi uma das maiores plantações e mais avançadas tecnologicamente, possuía um cais próprio para exportação do cacau e uma extensa linha férrea. 
Nesta roça pode-se acompanhar a actividade de apanha de cacau, que é feita, duas vezes por ano, em Abril e Outubro."
            class=""
            cta="Saber mais"
            link="#"
          />
        </div>
      </div>
    </section>

    <section class="">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <Card
            titulo="PESTANA SÃO TOMÉ*****"
            imagem="/card_image.jpg"
            morada="Av. Marginal 12 de Julho"
            telefone="(+239) 2244500/2244539"
            email="pestana.stome@pestana.com"
            website="www.pestana.com"
            :address="true"
          />
          <Card
            titulo="Avis rent-a-car"
            imagem="/avis.jpg"
            morada=""
            telefone="(+ 239) 2221567/ 9911080 "
            email=" tbrilha@cfao.com"
            website=""
            :imagem_bg="false"
            :address="true"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <Card
            titulo="Turismo"
            imagem="/card_image.jpg"
            texto="<p>Destino turístico insular mais preservado da África Equatorial, praias paradisíacas, envoltas numa natureza exuberante e desfrutáveis todo o ano. Biodiversidade única no mar e na terra. O país oferece benefícios fiscais específicos para o sector de turismo.</p><p><strong>Oportunidades de negócios:</strong></p><ul><li>Turismo de sol e mar</li><li>Hotéis, Resorts e Similares</li><li>Transporte aéreo “Low cost</li></ul>"
          />

          <Card
            titulo="Eddington 100 anos depois"
            imagem="/card_image.jpg"
            texto="<p>Em 2019, comemorou-se os 100 anos da confirmação experimental da Teoria da Relatividade Geral. A confirmação teve um dos seus principais palcos na ilha do Príncipe, com uma expedição conjunta da Royal Astronomical Society e da Royal Society liderada pelo astrónomo Arthur Eddington durante o eclipse solar total de 29 de Maio de 1919.</p>"
            cta="ler mais"
            link="#"
          />
          <Card
            titulo="Eddington 200 anos depois"
            imagem="/card_image.jpg"
            texto="<p>Em 2019, comemorou-se os 100 anos da confirmação experimental da Teoria da Relatividade Geral.</p>"
            cta="ler mais"
            link="#"
          />
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mb-10"
        >
          <Card
            titulo="Procedimentos de licenciamento para os operadores turisticos (ficheiro PDF)"
            download="Download do ficheiro"
            link="#"
          />
          <Card
            titulo="Procedimentos (ficheiro PDF)"
            download="Download do ficheiro"
            link="#"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <Card
            imagem="/aviao.png"
            titulo="Voos Domésticos"
            texto="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt elit ut mattis nec sed quisque dignissim libero. Adipiscing sit aliquet arcu adipiscing sed tincidunt feugiat. Egestas pellentesque amet ac adipiscing penatibus nibh augue nunc neque. Lectus sit mi rhoncus malesuada vivamus amet donec feugiat. Mattis euismod penatibus at suspendisse amet. Nunc, dapibus lorem at nec est pellentesque a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt elit ut mattis nec sed quisque dignissim libero.</p>"
            cta="Saber Mais"
            link="#"
            :imagem_bg="false"
            :icon="false"
          />
          <Card
            imagem="/barco.png"
            titulo="Barcos entre ilhas"
            texto="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt elit ut mattis nec sed quisque dignissim libero. Adipiscing sit aliquet arcu adipiscing sed tincidunt feugiat. Egestas pellentesque amet ac adipiscing penatibus nibh augue nunc neque. </p>"
            cta="Saber Mais"
            link="#"
            :imagem_bg="false"
            :icon="false"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            dia="4"
            mes="JAN"
            titulo="dia do rei amador"
            texto="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt elit ut mattis nec sed quisque dignissim libero. Adipiscing sit aliquet arcu adipiscing sed tincidunt feugiat. Egestas pellentesque amet ac adipiscing penatibus nibh augue nunc neque. Lectus sit mi rhoncus malesuada vivamus amet donec feugiat. </p>"
            :icon="false"
          />
          <Card
            dia="17"
            mes="JAN"
            titulo="dia da descoberta da ilha do príncipe"
            texto="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt elit ut mattis nec sed quisque dignissim libero. Adipiscing sit aliquet arcu adipiscing sed tincidunt feugiat. Egestas pellentesque amet ac adipiscing penatibus nibh augue nunc neque. Lectus sit mi rhoncus malesuada vivamus amet donec feugiat. </p>"
            :icon="false"
          />
        </div>
      </div>
    </section>

    <section class=" relative bg-grey-200">
      <div class="container">
        <content-with-image :image_right="true" imagem="/image22.jpg" class="">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            elit ut mattis nec sed quisque dignissim libero. Adipiscing sit
            aliquet arcu adipiscing sed tincidunt feugiat. Egestas pellentesque
            amet ac adipiscing penatibus nibh augue nunc neque. Lectus sit mi
            rhoncus malesuada vivamus amet donec feugiat. Mattis euismod
            penatibus at suspendisse amet. Nunc, dapibus lorem at nec est
            pellentesque a.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            elit ut mattis nec sed quisque dignissim libero. Adipiscing sit
            aliquet arcu adipiscing sed tincidunt feugiat. Egestas pellentesque
            amet ac adipiscing penatibus nibh augue nunc neque. Lectus sit mi
            rhoncus malesuada vivamus amet donec feugiat. Mattis euismod
            penatibus at suspendisse amet. Nunc, dapibus lorem at nec est
            pellentesque a.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            elit ut mattis nec sed quisque dignissim libero. Adipiscing sit
            aliquet arcu adipiscing sed tincidunt feugiat. Egestas pellentesque
            amet ac adipiscing penatibus nibh augue nunc neque. Lectus sit mi
            rhoncus malesuada vivamus amet donec feugiat. Mattis euismod
            penatibus at suspendisse amet. Nunc, dapibus lorem at nec est
            pellentesque a.
          </p>
        </content-with-image>
      </div>
    </section>

    <section class=" relative ">
      <div class="container">
        <content-2-columns
          texto1="<p><strong>Pratos Típicos de São Tomé</strong></p><ul><li>Ijogó</li><li>BláBlá</li><li>Izaquente</li><li>Calulú</li></ul>"
          texto2="<p><strong>Pratos típicos do Príncipe</strong></p><ul><li>Molho no Fogo</li><li>Azagoa</li><li>UFundi Maquita,</li><li>Obobô</li></ul>"
        >
        </content-2-columns>
      </div>
    </section>

    <section class=" relative bg-grey-200 py-0">
      <content-split-with-image
        :image_right="false"
        imagem="/image.jpg"
        class="py-0 md:py-20"
        bg_imagem="/baleia.png"
        bg_position="bg-right-bottom-2"
      >
        <h2 class="text-center md:text-left mb-4">
          São Tomé e Príncipe
        </h2>
        <div class="text-component">
          <h3 class="text-center md:text-left mb-4">Um mundo a descobrir</h3>
          <p>
            Nas águas mornas do Oceano Atlântico, o nosso País tropical espera
            pela sua visita. Com uma natureza abundante e com um povo calmo e
            alegre, São Tomé e Príncipe é o destino perfeito para férias únicas.
          </p>

          <p>
            Descubra a cidade Capital de traços coloniais, visite a natureza
            virgem, caminhe por vales escondidos, observe pássaros endémicos,
            descubra praias escondidas, observe tartarugas, cruze o equador ou
            mergulhe no Oceano à volta das Ilhas de Sete Pedras. Delicie com a
            nossa cozinha crioula, que é tão mista como o nosso País, de
            influências da África central, de Portugal e do Brasil.
          </p>
        </div>
        <div class="text-center md:text-left">
          <ButtonCta class="mt-8" href="/en">Ler mais</ButtonCta>
        </div>
      </content-split-with-image>
    </section>

    <section class="py-0 relative  bg-grey-200">
      <content-split-with-carrousel
        :image_right="true"
        class="pb-0 md:pb-20"
        bg_imagem="/baleia.png"
        bg_position="bg-left-bottom-2"
      >
        <h2 class="text-center md:text-left mb-4">
          São Tomé e Príncipe
        </h2>
        <div class="text-component">
          <h3 class="text-center md:text-left mb-4">Um mundo a descobrir</h3>
          <p>
            Nas águas mornas do Oceano Atlântico, o nosso País tropical espera
            pela sua visita. Com uma natureza abundante e com um povo calmo e
            alegre, São Tomé e Príncipe é o destino perfeito para férias únicas.
          </p>

          <p>
            Descubra a cidade Capital de traços coloniais, visite a natureza
            virgem, caminhe por vales escondidos, observe pássaros endémicos,
            descubra praias escondidas, observe tartarugas, cruze o equador ou
            mergulhe no Oceano à volta das Ilhas de Sete Pedras. Delicie com a
            nossa cozinha crioula, que é tão mista como o nosso País, de
            influências da África central, de Portugal e do Brasil.
          </p>
        </div>
        <div class="text-center md:text-left">
          <ButtonCta class="mt-8" href="/en">Ler mais</ButtonCta>
        </div>
      </content-split-with-carrousel>
    </section>

    <section class=" ">
      <div class="container">
        <div class="w-full float-left relative">
          <div
            class="w-5 lg:w-full absolute left-22 sm:left-24 lg:left-0 rounded-full h-full lg:h-5 top-0 lg:top-55 bg-grey-400 z-0"
          ></div>
          <div
            class="grid grid-cols-1 lg:grid-cols-6 gap-20 lg:gap-6 align-text-top relative z-10 py-10 lg:py-0 px-0 lg:px-6"
          >
            <!--item-->
            <div class="grid grid-cols-2  gap-2 lg:block">
              <div
                class="w-full max-w-130 h-130 mx-auto rounded-full bg-green-light shadow  flex flex-wrap content-center px-2 py-6"
              >
                <p
                  class="text-center text-white w-full block text-md font-bold m-0 "
                >
                  1470
                </p>
              </div>
              <div
                class="lg:pt-3 lg:pb-3 flex flex-wrap content-center lg:content-start"
              >
                <p
                  class="text-grey-900 text-left text-base lg:text-center font-bold mb-4 block w-full"
                >
                  Descoberta de <br />São Tome
                </p>
                <p
                  class="text-grey-900 text-left text-xs lg:text-center mb-0 block w-full"
                >
                  A ilha de São Tomé foi descoberta em 21 de dezembro de 1470,
                  por João de Santarém, no dia de São Tomé
                </p>
              </div>
            </div>
            <!--//end item-->
            <!--item-->
            <div class="grid grid-cols-2 lg:block gap-2 ">
              <div
                class="w-full max-w-130 h-130 mx-auto rounded-full bg-green-light shadow  flex flex-wrap content-center px-2 py-6"
              >
                <p
                  class="text-center text-white w-full block text-md font-bold m-0 "
                >
                  1471
                </p>
              </div>
              <div
                class="lg:pt-3 lg:pb-3 flex flex-wrap content-center lg:content-start"
              >
                <p
                  class="text-grey-900 text-left text-base lg:text-center font-bold mb-4 block w-full"
                >
                  Descoberta da Ilha do Príncipe
                </p>
                <p
                  class="text-grey-900 text-left text-xs lg:text-center mb-0 block w-full"
                >
                  No dia de Santo Antão, Pêro Escobar chega à ilha do Príncipe
                </p>
              </div>
            </div>
            <!--//end item-->
            <!--item-->
            <div class="grid grid-cols-2 lg:block gap-2">
              <div
                class="w-full max-w-130 h-130 mx-auto rounded-full bg-green-light shadow  flex flex-wrap content-center px-2 py-6"
              >
                <p
                  class="text-center text-white w-full block text-md font-bold m-0 "
                >
                  1493
                </p>
              </div>
              <div
                class="lg:pt-3 lg:pb-3 flex flex-wrap content-center lg:content-start"
              >
                <p
                  class="text-grey-900 text-left text-base lg:text-center font-bold mb-4 block w-full"
                >
                  Ilha do Príncipe
                </p>
                <p
                  class="text-grey-900 text-left text-xs lg:text-center mb-0 block w-full"
                >
                  Álvaro de Caminha recebe a terra como uma concessão da coroa.
                </p>
              </div>
            </div>
            <!--//end item-->
            <!--item-->
            <div class="grid grid-cols-2 lg:block gap-2">
              <div
                class="w-full max-w-130 h-130 mx-auto rounded-full bg-green-light shadow  flex flex-wrap content-center px-2 py-6"
              >
                <p
                  class="text-center text-white w-full block text-md font-bold m-0 "
                >
                  1502
                </p>
              </div>
              <div
                class="lg:pt-3 lg:pb-3 flex flex-wrap content-center lg:content-start"
              >
                <p
                  class="text-grey-900 text-left text-base lg:text-center font-bold mb-4 block w-full"
                >
                  Ilha do Príncipe
                </p>
                <p
                  class="text-grey-900 text-left text-xs lg:text-center mb-0 block w-full"
                >
                  Príncipe foi inicialmente chamado de Santo Antão ("Santo
                  António"), mudando o seu nome em 1502 para a Ilha do Príncipe,
                  em referência ao Príncipe de Portugal para quem foram pagos
                  impostos sobre a produção de açúcar da ilha.
                </p>
              </div>
            </div>
            <!--//end item-->
            <!--item-->
            <div class="grid grid-cols-2 lg:block gap-2">
              <div
                class="w-full max-w-130 h-130 mx-auto rounded-full bg-green-light shadow  flex flex-wrap content-center px-2 py-6"
              >
                <p
                  class="text-center text-white w-full block text-md font-bold m-0 "
                >
                  1960
                </p>
              </div>
              <div
                class="lg:pt-3 lg:pb-3 flex flex-wrap content-center lg:content-start"
              >
                <p
                  class="text-grey-900 text-left text-base lg:text-center font-bold mb-4 block w-full"
                >
                  Oposição
                </p>
                <p
                  class="text-grey-900 text-left text-xs lg:text-center mb-0 block w-full"
                >
                  Surge um grupo nacionalista opositor ao domínio português.
                </p>
              </div>
            </div>
            <!--//end item-->
            <!--item-->
            <div class="grid grid-cols-2 lg:block gap-2">
              <div
                class="w-full max-w-130 h-130 mx-auto rounded-full bg-green-light shadow  flex flex-wrap content-center px-2 py-6"
              >
                <p
                  class="text-center text-white w-full block text-md font-bold m-0 "
                >
                  1975
                </p>
              </div>
              <div
                class="lg:pt-3 lg:pb-3 flex flex-wrap content-center lg:content-start"
              >
                <p
                  class="text-grey-900 text-left text-base lg:text-center font-bold mb-4 block w-full"
                >
                  Independência
                </p>
                <p
                  class="text-grey-900 text-left text-xs lg:text-center mb-0 block w-full"
                >
                  Após cerca de 500 anos de controlo de Portugal, o arquipélago
                  é descolonizado.
                </p>
              </div>
            </div>
            <!--//end item-->
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import { query } from '~/graphql/queries/content'

import ContentIntro from '~/components/ContentIntro'

export default Vue.extend({
  components: {
    ContentIntro
  },
  data() {
    return {
      pagina: [] //query result
    }
  },
  /*async asyncData(ctx) {
    if (ctx.app.apolloProvider) {
      const { data } = await ctx.app.apolloProvider.defaultClient.query({
        query: query(''),
        variables: {
          slug: 'mais-um-testea'
        }
      })
      return {
        pagina: data.paginas[0]
      }
    }
  },*/

  head() {
    return {
      title: 'Turismo São Tomé e Príncipe',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'Turismo São Tomé e Príncipe'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Turismo São Tomé e Príncipe'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Turismo São Tomé e Príncipe',
          vmid: 'og:title'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Turismo São Tomé e Príncipe',
          vmid: 'og:description'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '',
          vmid: 'og:image'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: '',
          vmid: 'og:url'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
          vmid: 'og:type'
        }
      ]
    }
  }
})
</script>
