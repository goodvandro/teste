<template>
  <header
    :class="
      'w-full float-left fixed z-50 top-0 left-0 ' +
        (scrollPosition > scrollFixed
          ? ' bg-white pt-2 pb-0 shadow-md '
          : ' py-4/5 ')
    "
  >
    <div class="container relative">
      <div
        :class="
          'w-1/6 float-left' +
            (scrollPosition > scrollFixed ? ' h-15 mb-2 ' : ' ')
        "
      >
        <nuxt-link :to="localePath('/')">
          <img
            src="/logotipo-sao-tome.svg"
            alt="São Tomé"
            width="190"
            height="77"
            class="logo w-auto max-h-full"
            data-not-lazy
          />
        </nuxt-link>
      </div>
      <div class="w-5/6 float-left pl-5">
        <div
          :class="
            'w-full float-left text-right' +
              (scrollPosition > scrollFixed ? ' hidden ' : '')
          "
        >
          <BaseInputSearch />
          <nuxt-link :to="localePath('#')" class=" pr-3">
            <span
              class="text-xsm leading-none text-black hover:text-green align-middle inline-block  pr-3 border-r border-black border-solid"
            >
              Brochuras e Mapas
            </span>
          </nuxt-link>
          <nuxt-link :to="localePath('#')" class=" pr-3">
            <span
              class="text-xsm leading-none text-black hover:text-green align-middle inline-block  pr-3 border-r border-black border-solid"
            >
              Institucional
            </span>
          </nuxt-link>
          <nuxt-link :to="localePath('#')" class=" pr-3 ">
            <span
              class="text-xsm leading-none text-black hover:text-green align-middle inline-block "
            >
              Contactos
            </span>
          </nuxt-link>
          <DropDownLang />
        </div>
        <div
          :class="
            'w-full float-left ' +
              (scrollPosition > scrollFixed ? ' mt-7 ' : ' mt-3 ')
          "
        >
          <nav>
            <ul class="w-full float-left text-right  text-0">
              <li
                :class="
                  'float-none inline-block align-middle hover-trigger ' +
                    (scrollPosition > scrollFixed ? ' pb-5-5 ' : ' pb-4 ')
                "
              >
                <nuxt-link :to="localePath('sobre-nos')" class=" pr-2 xl:pr-3">
                  <span
                    class="text-xs xl:text-xsm leading-none text-black font-bold uppercase hover:text-green align-middle inline-block pr-2 xl:pr-3 border-r-2 border-black border-solid"
                  >
                    São Tomé e Príncipe
                  </span>
                </nuxt-link>
                <!--submenu-->
                <div
                  :class="
                    'hover-target w-full  left-0 bg-grey-200 absolute z-10 animated fade-in shadow-md' +
                      (scrollPosition > scrollFixed ? ' top-68 ' : ' top-80 ')
                  "
                >
                  <!--submenu arrow-->
                  <div class="w-full float-left text-center py-1">
                    <svg
                      width="18"
                      height="7"
                      fill="none"
                      class="inline mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.00036 3.34506L15.866.14108c.7507-.35033 1.6433-.02576 1.9936.72495.3504.75071.0258 1.64327-.7249 1.9936l-7.50001 3.5a1.49996 1.49996 0 01-1.26866 0l-7.5-3.5C.11533 2.5093-.20925 1.61674.14108.86603.49141.11533 1.38398-.20925 2.1347.14108l6.86567 3.20398z"
                        fill="#8DBE22"
                      />
                    </svg>
                  </div>
                  <!--//end submenu arrow-->
                  <!--submenu wrapper-->
                  <div
                    class="w-full float-left grid grid-cols-3 items-stretch gap-2"
                  >
                    <!--submenu column-->
                    <div
                      class="grid grid-cols-2 place-content-start gap-3 p-2 pb-4"
                    >
                      <CardMenu
                        titulo="pico cão grande"
                        link="#"
                        imagem="/card.png"
                        class=""
                      />
                      <CardMenu
                        titulo="boca do inferno"
                        link="#"
                        imagem="/card.png"
                        class=""
                      />
                      <CardMenu
                        titulo="roça água izé"
                        link="#"
                        imagem="/card.png"
                        class=""
                      />
                      <CardMenu
                        titulo="praia jalé"
                        link="#"
                        imagem="/card.png"
                        class=""
                      />
                    </div>
                    <!--//end submenu column-->
                    <!--submenu column-->
                    <div class="h-full bg-white p-2">
                      <nuxt-link
                        :to="localePath('#')"
                        class=" bg-withe hover:bg-grey-200 px-3 py-2 block w-full float-left text-left"
                      >
                        <span
                          class="text-xsm leading-none text-grey-600 font-bold uppercase text-left inline-block"
                        >
                          Norte de São Tomé
                        </span>
                        <svg
                          class="float-right"
                          width="12"
                          height="18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 16l7-7-7-7"
                            stroke="#65C9D7"
                            stroke-width="3"
                            stroke-linecap="round"
                          />
                        </svg>
                      </nuxt-link>
                      <nuxt-link
                        :to="localePath('#')"
                        class=" bg-withe hover:bg-grey-200 px-3 py-2 block w-full float-left text-left"
                      >
                        <span
                          class="text-xsm leading-none text-grey-600 font-bold uppercase text-left inline-block"
                        >
                          Centro São Tomé
                        </span>
                        <svg
                          class="float-right"
                          width="12"
                          height="18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 16l7-7-7-7"
                            stroke="#65C9D7"
                            stroke-width="3"
                            stroke-linecap="round"
                          />
                        </svg>
                      </nuxt-link>
                      <nuxt-link
                        :to="localePath('#')"
                        class=" bg-withe hover:bg-grey-200 px-3 py-2 block w-full float-left text-left"
                      >
                        <span
                          class="text-xsm leading-none text-grey-600 font-bold uppercase text-left inline-block"
                        >
                          Sul São Tomé
                        </span>
                        <svg
                          class="float-right"
                          width="12"
                          height="18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 16l7-7-7-7"
                            stroke="#65C9D7"
                            stroke-width="3"
                            stroke-linecap="round"
                          />
                        </svg>
                      </nuxt-link>
                      <nuxt-link
                        :to="localePath('#')"
                        class=" bg-withe hover:bg-grey-200 px-3 py-2 block w-full float-left text-left"
                      >
                        <span
                          class="text-xsm leading-none text-grey-600 font-bold uppercase text-left inline-block"
                        >
                          Ilhéu das rolas
                        </span>
                        <svg
                          class="float-right"
                          width="12"
                          height="18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 16l7-7-7-7"
                            stroke="#65C9D7"
                            stroke-width="3"
                            stroke-linecap="round"
                          />
                        </svg>
                      </nuxt-link>
                      <nuxt-link
                        :to="localePath('#')"
                        class=" bg-withe hover:bg-grey-200 px-3 py-2 block w-full float-left text-left"
                      >
                        <span
                          class="text-xsm leading-none text-grey-600 font-bold uppercase text-left inline-block"
                        >
                          ilha do príncipe
                        </span>
                        <svg
                          class="float-right"
                          width="12"
                          height="18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 16l7-7-7-7"
                            stroke="#65C9D7"
                            stroke-width="3"
                            stroke-linecap="round"
                          />
                        </svg>
                      </nuxt-link>
                    </div>
                    <!--//end submenu column-->
                    <!--submenu column-->
                    <div class="self-center">
                      <img
                        src="/mapa.png"
                        alt="São Tomé"
                        width="564"
                        height="548"
                        class="h-auto max-w-full"
                        data-not-lazy
                      />
                    </div>
                    <!--//end submenu column-->
                  </div>
                  <!--//end submenu wrapper-->
                </div>
                <!--//end submenu-->
              </li>
              <li
                :class="
                  'float-none inline-block align-middle ' +
                    (scrollPosition > scrollFixed ? ' pb-5-5 ' : ' pb-4 ')
                "
              >
                <nuxt-link :to="localePath('lugares')" class=" pr-2 xl:pr-3">
                  <span
                    class="text-xs xl:text-xsm leading-none text-black font-bold uppercase hover:text-green align-middle inline-block  pr-2 xl:pr-3 border-r-2 border-black border-solid"
                  >
                    Onde Ir
                  </span>
                </nuxt-link>
              </li>
              <li
                :class="
                  'float-none inline-block align-middle ' +
                    (scrollPosition > scrollFixed ? ' pb-5-5 ' : ' pb-4 ')
                "
              >
                <nuxt-link
                  :to="localePath('o-que-fazer')"
                  class=" pr-2 xl:pr-3"
                >
                  <span
                    class="text-xs xl:text-xsm leading-none text-black font-bold uppercase hover:text-green align-middle inline-block pr-2 xl:pr-3 border-r-2 border-black border-solid"
                  >
                    O Que Fazer
                  </span>
                </nuxt-link>
              </li>
              <li
                :class="
                  'float-none inline-block align-middle ' +
                    (scrollPosition > scrollFixed ? ' pb-5-5 ' : ' pb-4 ')
                "
              >
                <nuxt-link
                  :to="localePath('onde-dormir')"
                  class=" pr-2 xl:pr-3"
                >
                  <span
                    class="text-xs xl:text-xsm leading-none text-black font-bold uppercase hover:text-green align-middle inline-block pr-2 xl:pr-3 border-r-2 border-black border-solid"
                  >
                    onde dormir
                  </span>
                </nuxt-link>
              </li>
              <li
                :class="
                  'float-none inline-block align-middle ' +
                    (scrollPosition > scrollFixed ? ' pb-5-5 ' : ' pb-4 ')
                "
              >
                <nuxt-link :to="localePath('onde-comer')" class=" pr-2 xl:pr-3">
                  <span
                    class="text-xs xl:text-xsm leading-none text-black font-bold uppercase hover:text-green align-middle inline-block pr-2 xl:pr-3 border-r-2 border-black border-solid"
                  >
                    onde comer
                  </span>
                </nuxt-link>
              </li>
              <li
                :class="
                  'float-none inline-block align-middle ' +
                    (scrollPosition > scrollFixed ? ' pb-5-5 ' : ' pb-4 ')
                "
              >
                <nuxt-link
                  :to="localePath('tours-e-transportes')"
                  class=" pr-2 xl:pr-3"
                >
                  <span
                    class="text-xs xl:text-xsm leading-none text-black font-bold uppercase hover:text-green align-middle inline-block pr-2 xl:pr-3 border-r-2 border-black border-solid"
                  >
                    como se deslocar
                  </span>
                </nuxt-link>
              </li>
              <li
                :class="
                  'float-none inline-block align-middle ' +
                    (scrollPosition > scrollFixed ? ' pb-5-5 ' : ' pb-4 ')
                "
              >
                <nuxt-link :to="localePath('informacoes-uteis')" class="">
                  <span
                    class="text-xs xl:text-xsm leading-none text-black font-bold uppercase hover:text-green align-middle inline-block "
                  >
                    Info úteis
                  </span>
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  -webkit-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  transition: all 300ms linear;
}
</style>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'Navigation'
})
export default class Navigation extends Vue {
  private scrollPosition: number = 0
  private scrollFixed: number = 100

  updateScroll() {
    this.scrollPosition = window.scrollY
  }
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>
