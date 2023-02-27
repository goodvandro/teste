<template>
<div class="bg-white shadow-md py-3.5 px-5 rounded-lg">
    <ul v-if="$device.isDesktop">
        <li class="mb-2.5">
        <nuxt-link :to="localePath(baseSlug)">
            <img class="inline-block" src="/filter.png">
            <span class="inline-block pl-2">Ver todos</span>
        </nuxt-link>
        </li>
        <li class="mb-2.5" v-for="(categoria, index) in categorias" :key="index">
        <nuxt-link :to="localePath(baseSlug + '/' + categoria.slug)">
            <img v-if="categoria.icon" class="inline-block" :src="base_url(categoria.icon.url)">
            <span class="inline-block pl-2">{{categoria.nome}}</span>
        </nuxt-link>
        </li>
    </ul>
    <select class="w-full" v-if="!$device.isDesktop" v-model="selected" @change="mobileGoTo()">
        <option :value="null" disabled>Categorias</option>
        <option :value="localePath(baseSlug)" selected>Ver todos</option>
        <option :value="localePath(baseSlug + '/' + categoria.slug)" v-for="(categoria, index) in categorias" :key="index">
        {{categoria.nome}}
        </option>
    </select> 
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'FiltroCategorias'
})
export default class FiltroCategorias extends Vue {
  @Prop() readonly categorias!: []
  @Prop() readonly baseSlug!: string

}
</script>
