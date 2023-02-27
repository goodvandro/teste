<template>
  <header
    :class="
      'w-full float-left fixed z-50 top-0 left-0 bg-white shadow-md py-3 ' +
        (scrollPosition > scrollFixed ? '  ' : '  ')
    "
  >
    <div class="container relative">
      <div
        :class="
          'w-1/3 float-left' + (scrollPosition > scrollFixed ? '  ' : ' ')
        "
      >
        <nuxt-link :to="localePath('/')">
          <img
            src="/logotipo-mobile.svg"
            alt="São Tomé"
            width="110"
            height="44"
            class="logo w-auto max-h-full"
            data-not-lazy
          />
        </nuxt-link>
      </div>
      <div
        :class="
          'w-2/3 float-left text-right pt-2' +
            (scrollPosition > scrollFixed ? '  ' : '  ')
        "
      >
        <!--svg
          width="25"
          height="19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="8" width="25" height="3" rx="1.5" fill="#1A051D" />
          <rect width="25" height="3" rx="1.5" fill="#1A051D" />
          <rect y="16" width="25" height="3" rx="1.5" fill="#1A051D" />
        </svg-->
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-black float-right hover:text-blue focus:text-blue focus:outline-none"
        >
          <svg class="h-8 w-8 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="w-full h-screen fixed top-0 left-0 bg-white pb-3 px-0 z-50 "
    >
      <div class="w-full float-left px-6">
        <div
          class="w-full float-left py-4 border-b border-grey-400 border-solid relative"
        >
          <nuxt-link :to="localePath('/')" @click.native="isOpen = false">
            <img
              src="/logotipo-mobile.svg"
              alt="São Tomé"
              width="110"
              height="44"
              class="logo w-auto max-h-full float-left"
              data-not-lazy
            />
          </nuxt-link>
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="block text-black float-right hover:text-blue focus:text-blue focus:outline-none mt-2"
          >
            <svg
              class="h-8 w-9 sm:h-10 sm:w-10 fill-current"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            </svg>
          </button>
        </div>
        <div
          class="w-full float-left py-4 border-b border-grey-400 border-solid relative"
        >
          <BaseInputSearch />
        </div>
      </div>
      <div class="w-full h-full float-left px-6 relative overflow-y-auto">
        <div class="w-full float-left mb-1">
          <ul class="w-full float-left mb-3">
            <li
              class="w-full float-left border-b border-grey-400 border-solid py-4 pr-6 relative"
              v-for="(item, index) in _menu"
              :key="item.url"
            >
              <nuxt-link
                @click.native="
                  active = 9999
                  isOpen = false
                "
                v-if="item.slug"
                :to="localePath(item.slug)"
                :class="
                  'w-full float-left font-bold uppercase text-sm  m-0 text-left ' +
                    (active == index ? ' text-green ' : 'text-black')
                "
              >
                {{ item.titulo }}
                <svg
                  v-if="!item.seccoes"
                  @click="active == index ? (active = 9999) : (active = index)"
                  :class="
                    'absolute top-0 right-0 mt-4 ' +
                      (active == index && items.seccoes
                        ? ' transform rotate-90 '
                        : '  ')
                  "
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
              <span
                @click="active == index ? (active = 9999) : (active = index)"
                v-else
                :class="
                  ' float-left font-bold uppercase text-sm m-0 text-left ' +
                    (active == index ? ' text-green ' : 'text-black')
                "
              >
                {{ item.titulo }}
              </span>
              <svg
                v-if="item.seccoes"
                @click="
                  active == index && item.seccoes.length > 0
                    ? (active = 9999)
                    : (active = index)
                "
                :class="
                  'absolute top-0 right-0 mt-4 ' +
                    (active == index && item.seccoes.length > 0
                      ? ' transform rotate-90 '
                      : '  ')
                "
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
              <ul
                v-if="active == index && item.seccoes.length > 0"
                class="w-full float-left"
              >
                <!--sub item-->
                <div
                  v-for="(seccao, seccaoItemIndex) in item.seccoes"
                  :key="seccaoItemIndex"
                  v-if="!seccao.body[0].items"
                >
                  <div
                    v-for="(subItemsList, indexSubItems) in seccao.body"
                    :key="indexSubItems"
                  >
                    <li
                      v-for="(subItem, subItemIndex) in getSubItems(
                        subItemsList
                      )"
                      :key="subItemIndex"
                      class="w-full float-left mb-0 mt-2 pl-3"
                    >
                      <nuxt-link
                        @click.native="
                          active = 9999
                          isOpen = false
                        "
                        :to="
                          seccao.slug
                            ? localePath(
                                '/' +
                                  item.slug +
                                  '/' +
                                  seccao.slug +
                                  '/' +
                                  subItem.slug
                              )
                            : localePath('/' + item.slug + '/' + subItem.slug)
                        "
                        class="w-full float-left font-medium uppercase text-xsm m-0 text-left text-black mb-0 relative pr-6"
                      >
                        <span class="">
                          {{ subItem.nome }}
                        </span>
                        <svg
                          width="9"
                          class="absolute right-0 top-0-2"
                          height="13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 10.875L6.375 6.5 2 2.125"
                            stroke="#65C9D7"
                            stroke-width="3"
                            stroke-linecap="round"
                          />
                        </svg>
                      </nuxt-link>
                    </li>
                  </div>
                </div>
                <!--sub item-->
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'NavigationMobile'
})
export default class NavigationMobile extends Vue {
  private scrollPosition: number = 0
  private scrollFixed: number = 100
  private active: number = 9999
  private showingMenu: string = ''
  @Prop() menu!: any

  get _menu(): any {
    return this.menu
  }

  // getSubItems(item:any){
  //   let temp: [] = []
  //   item.forEach((element:any) => {
  //     element.body.forEach((value:any) => {

  //       if (value.alojamentos) {
  //         return value.alojamentos
  //       } else if (value.categorias) {
  //         return value.categorias
  //       } else if (value.informacoes) {
  //         return value.informacoes
  //       } else if (value.locais_e_actividades) {
  //         return value.locais_e_actividades
  //       } else if (value.paginas) {
  //         return value.paginas
  //       } else if (value.regioes) {
  //         return value.regioes
  //       } else if (value.restaurantes) {
  //         return value.restaurantes
  //       } else if (value.sobre_nos) {
  //         return value.sobre_nos
  //       } else if (value.tours_transportes) {
  //         return item.tours_transportes
  //       }else{
  //         return '#'
  //       }
  //     });
  //   });
  // }

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

  getItemsbody(item: any) {
    let temp: any = []
    item.forEach((element: any) => {
      element.body.forEach((value: any) => {
        temp.push(value)
      })
    })
    return temp
  }

  updateScroll() {
    this.scrollPosition = window.scrollY
  }
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  }

  showMenu(menuitem: string) {
    if (menuitem == this.showingMenu) {
      this.showingMenu = ''
    } else {
      this.showingMenu = menuitem
    }
  }

  data() {
    return {
      isOpen: false
    }
  }
}
</script>
