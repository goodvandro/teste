<template>
  <a
    :href="_href"
    :class="
      'cta cta-' +
        _tipo +
        ' inline-block w-full sm:w-auto transition duration-500 px-4 sm:px-8 ease-in-out transform  hover:scale-105'
    "
    :target="_target"
    v-if="externo"
  >
    <span class="text-xsm uppercase font-bold align-middle inline-block">
      <slot />
    </span>
    <svg
      width="23"
      height="16"
      class="inline fill-current ml-2 mb-1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.7071 8.70711c.3905-.39053.3905-1.02369 0-1.41422L16.3431.92893c-.3905-.39052-1.0236-.39052-1.4142 0-.3905.39053-.3905 1.02369 0 1.41422L20.5858 8l-5.6569 5.6569c-.3905.3905-.3905 1.0236 0 1.4142.3906.3905 1.0237.3905 1.4142 0l6.364-6.36399zM0 9h22V7H0v2z"
        fill="currentColor"
      />
    </svg>
  </a>
  <nuxt-link
    :to="_href"
    :class="
      'cta cta-' +
        _tipo +
        ' inline-block w-full sm:w-auto transition duration-500 px-4 md:px-8 ease-in-out transform  hover:scale-105'
    "
    :target="_target"
    v-else
  >
    <span class="text-xsm uppercase font-bold align-middle inline-block">
      <slot />
    </span>
    <svg
      width="23"
      height="16"
      class="inline fill-current ml-2 mb-1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.7071 8.70711c.3905-.39053.3905-1.02369 0-1.41422L16.3431.92893c-.3905-.39052-1.0236-.39052-1.4142 0-.3905.39053-.3905 1.02369 0 1.41422L20.5858 8l-5.6569 5.6569c-.3905.3905-.3905 1.0236 0 1.4142.3906.3905 1.0237.3905 1.4142 0l6.364-6.36399zM0 9h22V7H0v2z"
        fill="currentColor"
      />
    </svg>
  </nuxt-link>
</template>

<style>
.text-component .cta {
  @apply no-underline;
}
.cta {
  @apply text-center rounded-lg tracking-wide  py-3 text-white border border-solid border-blue;
}
.cta-primario {
  @apply bg-blue;
}
.cta-primario span {
  @apply text-white;
}
.cta-transparente span,
.cta-transparente {
  @apply text-blue border-transparent px-0;
}

.cta.cta-primario:hover {
  @apply bg-white text-blue;
}
.cta.cta-primario:hover span {
  @apply text-blue;
}

.cta-secundario {
  @apply bg-white border border-blue text-blue;
}
.cta-secundario span {
  @apply text-blue;
}
.cta-transparente:hover {
  @apply bg-transparent text-green;
}
.cta.cta-secundario:hover {
  @apply bg-blue text-white;
}
.cta-transparente:hover span {
  @apply text-green;
}
.cta.cta-secundario:hover span {
  @apply text-white;
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'ButtonCta'
})
export default class ButtonCta extends Vue {
  @Prop() readonly externo!: boolean
  @Prop() readonly href!: string
  @Prop() readonly target!: string
  @Prop() readonly tipo!: string

  get _href(): string {
    if (this.href === undefined || this.href === null || this.href === '') {
      return ''
    } else {
      return this.href
    }
  }

  get _target(): string {
    return this.target
  }

  get _tipo(): string {
    if (this.tipo === undefined || this.tipo === null || this.tipo === '') {
      return 'primario'
    } else {
      return this.tipo
    }
  }
}
</script>
