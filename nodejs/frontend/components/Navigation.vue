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
        <ul
          :class="
            'w-full float-left text-right' +
              (scrollPosition > scrollFixed ? ' hidden ' : '')
          "
        >
          <li class="relative inline-block">
            <BaseInputSearch />
          </li>
          <li class="relative inline-block">
            <nuxt-link
              :to="localePath($t('topMenu.items.brochuras.url'))"
              class=" pr-3"
            >
              <span
                class="text-xsm leading-none text-black hover:text-green align-middle inline-block  pr-3 border-r border-black border-solid"
              >
                {{ $t('topMenu.items.brochuras.titulo') }}
              </span>
            </nuxt-link>
          </li>
          <li class="relative inline-block hover-trigger">
            <nuxt-link :to="localePath('/institucional')" class=" pr-3">
              <span
                class="text-xsm leading-none text-black hover:text-green align-middle inline-block  pr-3 border-r border-black border-solid"
              >
                {{ $t('topMenu.items.institucional.titulo') }}
              </span>
            </nuxt-link>
            <div
              class="hover-target bg-grey-200 absolute z-10 animated fade-in shadow-md top-20 w-300 custom-left3"
            >
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
              <div class="w-full float-left grid grid-cols-1">
                <nuxt-link
                  :to="
                    localePath(
                      $t('topMenu.items.institucional.items.servicos.url')
                    )
                  "
                  class="bg-withe hover:bg-grey-200 px-3 py-2 block w-full float-left text-left"
                >
                  <span
                    class="text-xsm leading-none text-grey-600 font-bold uppercase text-left inline-block"
                  >
                    {{
                      $t('topMenu.items.institucional.items.servicos.titulo')
                    }}
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
                  :to="
                    localePath(
                      $t('topMenu.items.institucional.items.regulamentos.url')
                    )
                  "
                  class="bg-withe hover:bg-grey-200 px-3 py-2 block w-full float-left text-left"
                >
                  <span
                    class="text-xsm leading-none text-grey-600 font-bold uppercase text-left inline-block"
                  >
                    {{
                      $t(
                        'topMenu.items.institucional.items.regulamentos.titulo'
                      )
                    }}
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
                  :to="
                    localePath(
                      $t('topMenu.items.institucional.items.noticias.url')
                    )
                  "
                  class="bg-withe hover:bg-grey-200 px-3 py-2 block w-full float-left text-left"
                >
                  <span
                    class="text-xsm leading-none text-grey-600 font-bold uppercase text-left inline-block"
                  >
                    {{
                      $t('topMenu.items.institucional.items.noticias.titulo')
                    }}
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
            </div>
          </li>
          <li class="relative inline-block">
            <nuxt-link
              :to="localePath('/institucional/contactos')"
              class=" pr-3 "
            >
              <span
                class="text-xsm leading-none text-black hover:text-green align-middle inline-block "
              >
                Contactos
              </span>
            </nuxt-link>
          </li>
          <li class="relative inline-block">
            <DropDownLang />
          </li>
        </ul>
        <div
          :class="
            'w-full float-left ' +
              (scrollPosition > scrollFixed ? ' mt-7 ' : ' mt-3 ')
          "
        >
          <nav>
            <ul class="w-auto float-right">
              <li
                v-for="(item, menuIndex) in _menu"
                :key="menuIndex"
                :class="
                  'float-left hover-trigger ' +
                    (scrollPosition > scrollFixed ? ' pb-5-5 ' : ' pb-4 ') +
                    (item.seccoes.length == 1 ? 'relative ' : '')
                "
              >
                <nuxt-link
                  v-if="item.slug"
                  :to="localePath(item.slug)"
                  class="block pr-2 xl:pr-3"
                >
                  <span
                    :class="
                      'text-xs xl:text-xsm leading-none text-black font-bold uppercase hover:text-green align-middle inline-block pr-2 xl:pr-3 ' +
                        (menuIndex + 1 == _menu.length
                          ? ''
                          : 'border-r-2 border-black border-solid')
                    "
                  >
                    {{ item.titulo }}
                  </span>
                </nuxt-link>
                <p v-else class="block cursor-default pr-2 mb-0 xl:pr-3">
                  <span
                    :class="
                      'text-xs xl:text-xsm leading-none text-black font-bold uppercase hover:text-green align-middle inline-block pr-2 xl:pr-3 ' +
                        (menuIndex + 1 == _menu.length
                          ? ''
                          : 'border-r-2 border-black border-solid')
                    "
                  >
                    {{ item.titulo }}
                  </span>
                </p>
                <div
                  v-if="item.seccoes.length > 0"
                  :class="
                    'hover-target bg-grey-200 absolute z-10 animated fade-in shadow-md' +
                      (scrollPosition > scrollFixed
                        ? item.seccoes.length == 1
                          ? ' top-40 w-300 custom-left3'
                          : ' top-68 w-full  left-0 '
                        : item.seccoes.length == 1
                        ? ' top-30 w-300 custom-left3'
                        : ' top-80 w-full  left-0 ')
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
                    :class="
                      'w-full float-left grid items-stretch gap-2 grid-cols-' +
                        (getMapa(item.seccoes)
                          ? item.seccoes.length + 1
                          : item.seccoes.length)
                    "
                  >
                    <!--submenu destaque column-->
                    <div
                      :class="
                        'grid place-content-start gap-3 p-2 pb-4 ' +
                          (getSeccaoItemsSize(item.seccoes) % 2 === 0
                            ? 'grid-cols-2'
                            : 'grid-cols-1')
                      "
                      v-if="getSeccaoItemsSize(item.seccoes)"
                    >
                      <CardMenu
                        v-for="(cardItem, indexCardItem) in getSeccaoItems(
                          item.seccoes
                        )"
                        :key="indexCardItem"
                        :titulo="cardItem.titulo"
                        :link="
                          localePath('/' + getCardItemInfo(cardItem, 'slug'))
                        "
                        :imagem="
                          cardItem.imagem
                            ? cardItem.imagem.url
                            : getCardItemInfo(cardItem, 'imagem')
                            ? base_url(getCardItemInfo(cardItem, 'imagem'))
                            : '/card.png'
                        "
                        :slug="getCardItemInfo(cardItem, 'slug')"
                        :cardHover="activeHover"
                      />
                    </div>
                    <!--//end submenu destaque column-->
                    <!--submenu column-->
                    <div
                      class="h-full bg-white p-2"
                      v-for="(seccao, seccaoItemIndex) in item.seccoes"
                      :key="seccaoItemIndex"
                      v-if="!seccao.body[0].items"
                    >
                      <nuxt-link
                        v-if="seccao.titulo"
                        :to="
                          item.slug
                            ? localePath('/' + item.slug + '/' + seccao.slug)
                            : localePath('/' + item.slug)
                        "
                        class=" bg-withe hover:bg-grey-200 px-3 py-2 block w-full float-left text-left"
                      >
                        <span
                          class="text-xsm leading-none text-black font-bold uppercase text-left inline-block"
                        >
                          {{ seccao.titulo }}
                        </span>
                      </nuxt-link>
                      <div
                        v-for="(subItemsList, indexSubItems) in seccao.body"
                        :key="indexSubItems"
                        v-if="seccao.body"
                      >
                        <nuxt-link
                          v-for="(subItem, subItemIndex) in getSubItems(
                            subItemsList
                          )"
                          :key="subItemIndex"
                          v-if="subItem.slug"
                          :to="
                            seccao.slug
                              ? item.slug
                                ? localePath(
                                    '/' +
                                      item.slug +
                                      '/' +
                                      seccao.slug +
                                      '/' +
                                      subItem.slug
                                  )
                                : localePath(
                                    '/' + seccao.slug + '/' + subItem.slug
                                  )
                              : localePath('/' + item.slug + '/' + subItem.slug)
                          "
                          :class="
                            'hover:bg-grey-200 px-3 py-2 block w-full float-left text-left ' +
                              (subItem.slug === activeHover
                                ? 'bg-grey-200'
                                : '')
                          "
                          @mouseover.native="activeHover = subItem.slug"
                        >
                          <span
                            v-if="subItem.nome"
                            class="text-xsm leading-none text-grey-600 font-bold uppercase text-left inline-block"
                            @mouseover="activeHover = subItem.slug"
                          >
                            {{ subItem.nome }}
                          </span>
                          <span
                            v-else
                            class="text-xsm leading-none text-grey-600 font-bold uppercase text-left inline-block"
                            @mouseover="activeHover = subItem.slug"
                          >
                            {{ subItem.nome }}
                          </span>
                          <svg
                            class="float-right"
                            width="12"
                            height="18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            @mouseover="activeHover = subItem.slug"
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
                    </div>
                    <div v-if="getMapa(item.seccoes)">
                      <MapaMenu :activeHover.sync="activeHover" />
                    </div>
                    <!--//end submenu column-->
                  </div>
                  <!--//end submenu wrapper-->
                </div>
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
<style>
.custom-left3 {
  left: calc(50% - 150px);
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
  private activeHover: string = ''
  @Prop() menu!: any

  get _menu(): any {
    return this.menu
  }

  getMapa(items: any) {
    if (this.getSeccaoItems(items)) {
      if (this.getSeccaoItems(items)[0].local_e_actividade) {
        if (
          this.getSeccaoItems(items)[0].local_e_actividade.regiao.__typename ===
          'Regioes'
        ) {
          return true
        }
      }
    }
  }

  getSeccaoItems(item: any) {
    for (const index in item) {
      if (Object.prototype.hasOwnProperty.call(item, index)) {
        if (item[index].body) {
          for (const indexBody in item[index].body) {
            if (
              Object.prototype.hasOwnProperty.call(item[index].body, indexBody)
            ) {
              if (item[index].body[indexBody].items) {
                return item[index].body[indexBody].items
              }
            }
          }
        }
      }
    }
  }

  getSeccaoItemsSize(item: any) {
    for (const index in item) {
      if (Object.prototype.hasOwnProperty.call(item, index)) {
        if (item[index].body) {
          for (const indexBody in item[index].body) {
            if (
              Object.prototype.hasOwnProperty.call(item[index].body, indexBody)
            ) {
              if (item[index].body[indexBody].items) {
                return item[index].body[indexBody].items.length
              }
            }
          }
        }
      }
    }
  }

  getCardItemInfo(item: any, get: string) {
    let slug = ''

    if (item.alojamento) {
      if (get == 'slug') {
        return item.alojamento.slug
      } else if (get == 'imagem' && item.alojamento.imagem) {
        return item.alojamento.imagem.url
      }
    } else if (item.categoria) {
      if (get == 'slug') {
        return item.categoria.slug
      } else if (get == 'imagem' && item.categoria.imagem) {
        return item.categoria.imagem.url
      }
    } else if (item.informacao) {
      if (get == 'slug') {
        return item.informacao.slug
      } else if (get == 'imagem' && item.informacao.imagem) {
        return item.informacao.imagem.url
      }
    } else if (item.local_e_actividade) {
      if (get == 'slug') {
        if (item.ancora !== '') {
          return 'lugares/' + item.local_e_actividade.regiao.slug + item.ancora
        } else {
          return (
            'lugares/' +
            item.local_e_actividade.regiao.slug +
            '/' +
            item.local_e_actividade.slug
          )
        }
      } else if (get == 'imagem' && item.local_e_actividade.imagem) {
        return item.local_e_actividade.imagem.url
      }
    } else if (item.pagina) {
      if (get == 'slug') {
        return item.pagina.slug
      } else if (get == 'imagem' && item.pagina.imagem) {
        return item.pagina.imagem.url
      }
    } else if (item.regiao) {
      if (get == 'slug') {
        return item.regiao.slug
      } else if (get == 'imagem' && item.regiao.imagem) {
        return item.regiao.imagem.url
      }
    } else if (item.restaurante) {
      if (get == 'slug') {
        return item.restaurante.slug
      } else if (get == 'imagem' && item.restaurante.imagem) {
        return item.restaurante.imagem.url
      }
    } else if (item.sobre) {
      if (get == 'slug') {
        return item.sobre.slug
      } else if (get == 'imagem' && item.sobre.imagem) {
        return item.sobre.imagem.url
      }
    } else if (item.tours_transporte) {
      if (get == 'slug') {
        return item.tours_transporte.slug
      } else if (get == 'imagem' && item.tours_transporte.imagem) {
        return item.tours_transporte.imagem.url
      }
    } else {
      return false
    }
  }

  getSubItems(item: any) {
    if (item.alojamentos) {
      return item.alojamentos
    } else if (item.categorias) {
      return item.categorias
    } else if (item.informacoes) {
      return item.informacoes
    } else if (item.locais_e_actividades) {
      return item.locais_e_actividades
    } else if (item.paginas) {
      return item.paginas
    } else if (item.regioes) {
      return item.regioes
    } else if (item.restaurantes) {
      return item.restaurantes
    } else if (item.sobre_nos) {
      return item.sobre_nos
    } else if (item.tours_transportes) {
      return item.tours_transportes
    } else {
      return '#'
    }
  }

  updateScroll() {
    this.scrollPosition = window.scrollY
  }
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>
