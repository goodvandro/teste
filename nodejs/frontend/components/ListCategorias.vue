<template>
  <section class="bg-grey-200" id="category-list">
    <div class="container">
      <div class="w-full float-left md:w-1/3 mb-4 md:mb-0">
          <FiltroCategorias :baseSlug="baseSlug" :categorias="categorias" />
      </div>
      <div class="w-full float-right md:w-2/3 relative">
        <div class="md:pl-6">
          <CardList
            v-for="(item, index) in filteredItems"
            :titulo="item.nome"
            :imagem="
              item.imagem
                ? base_url(item.imagem.url)
                : item.banner
                ? base_url(item.banner.url)
                : '/card_image.jpg'
            "
            :texto="item.descricao"
            :key="index + item.nome"
            :cta="item.locais_e_actividades ? item.locais_e_actividades.length > 0 ? 'Ver mais' : false : false"
            :link="item.locais_e_actividades ? item.locais_e_actividades.length > 0 ? $nuxt.$route.path + '/' + item.slug : '' : ''"
          />
          <div
            v-if="viewMore <= items.length"
            class="w-full float-left text-center mt-0"
          >
            <p
              class="cta cta-primario inline-block cursor-pointer px-12"
              @click="
                viewMore += 5
                getFiltredItems()
              "
            >
              <span class="inline-block font-bold text-white hover:text-blue">
                CARREGAR MAIS
              </span>
              <svg
                class="inline-block"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2929 23.7071C11.6834 24.0976 12.3166 24.0976 12.7071 23.7071L19.0711 17.3431C19.4616 16.9526 19.4616 16.3195 19.0711 15.9289C18.6805 15.5384 18.0474 15.5384 17.6569 15.9289L12 21.5858L6.34315 15.9289C5.95262 15.5384 5.31946 15.5384 4.92893 15.9289C4.53841 16.3195 4.53841 16.9526 4.92893 17.3431L11.2929 23.7071ZM11 1L11 23L13 23L13 1L11 1Z"
                  fill="currentColor"
                />
              </svg>
            </p>
          </div>
          <!-- <div class="absolute bottom-0 right-0 z-50"> -->
          <svg
            v-if="$device.isDesktop"
            @click="scrollTo()"
            :class="
              'absolute -right-10 z-5  mb-6   cursor-pointer' +
                (viewMore <= items.length ? ' bottom-14 ' : ' bottom-0 ')
            "
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#65C9D7" />
            <path
              d="M27 24L20 17L13 24"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'ListCategorias'
})
export default class ListCategorias extends Vue {
  @Prop() readonly baseSlug!: string
  @Prop() readonly categorias!: []
  @Prop() readonly items!: []

  private viewMore: number = 5
  private filteredItems: [] = []

  getFiltredItems() {
    this.filteredItems = []
    if (this.$route.hash) {
      let hash = this.$route.hash.replace('#','')
      for (const key in this.items) {
        if (Object.prototype.hasOwnProperty.call(this.items, key)) {
          let x: any = this.items[key]

          if(hash === this.slugify(x.nome)) 
          
          this.filteredItems.push(this.items[key])
        }
      }
    }
    for (const key in this.items) {
      if (parseInt(key) >= this.viewMore) break
      if (Object.prototype.hasOwnProperty.call(this.items, key)) {
        if (!this.filteredItems.includes(this.items[key])) {          
          this.filteredItems.push(this.items[key])
        }
      }
    }
  }

  slugify(str: string):string {
        str = str.replace(/^\s+|\s+$/g, '');
        str = str.toLowerCase();
        
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to   = "aaaaeeeeiiiioooouuuunc------";
        for (var i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
    
        str = str.replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    
        return str;
    }

  scrollTo() {
    document.getElementById('category-list').scrollIntoView()
  }

  mounted() {
    this.getFiltredItems()
  }
}
</script>
