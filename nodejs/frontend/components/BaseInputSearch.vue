<template>
  <div
    :class="
      'relative ' +
        ($device.isMobileOrTablet
          ? ' w-full float-left block '
          : ' inline-block float-none align-middle ')
    "
  >
    <form
      v-if="(!isHidden && $device.isDesktop) || $device.isMobileOrTablet"
      action="/resultados"
      method="GET"
      :class="
        'flex flex-row items-center w-full xl:w-auto ' +
          ($device.isMobileOrTablet
            ? ' max-w-full border-grey-400 outline-none bg-grey-200 rounded-xl px-3 py-1 '
            : ' max-w-260 ')
      "
    >
      <button
        v-if="$device.isMobileOrTablet"
        class="w-1/12  mr-2 bg-transparent text-center align-midle h-8 align-middle block tracking-wider outline-none"
      >
        <svg
          width="20"
          height="20"
          fill="none"
          class="outline-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.0539 18.0462c.2782.2783.2782.7294 0 1.0077-.2783.2782-.7294.2782-1.0077 0l-3.42-3.42c-.2782-.2783-.2782-.7294 0-1.0077.2783-.2782.7294-.2782 1.0077 0l3.42 3.42zM8.29005 15.8425c-4.17113 0-7.5525-3.3813-7.5525-7.55245 0-4.17113 3.38137-7.5525 7.5525-7.5525 4.17115 0 7.55245 3.38137 7.55245 7.5525 0 4.17115-3.3813 7.55245-7.55245 7.55245zm0-1.425c3.38415 0 6.12745-2.7433 6.12745-6.12745 0-3.38413-2.7433-6.1275-6.12745-6.1275-3.38413 0-6.1275 2.74337-6.1275 6.1275 0 3.38415 2.74337 6.12745 6.1275 6.12745zm-3.515-6.69745c0 .26233-.21267.475-.475.475-.26234 0-.475-.21267-.475-.475 0-2.15115 1.74385-3.895 3.895-3.895.26233 0 .475.21266.475.475 0 .26233-.21267.475-.475.475-1.62648 0-2.945 1.31852-2.945 2.945z"
            fill="#1A051D"
          />
        </svg>
      </button>
      <input
        v-model="key"
        type="text"
        placeholder="Procurar"
        name="term"
        :class="
          'appearance-none h-8 bg-transparent rounded-none  text-xs w-full focus:outline-none outline-none ' +
            ($device.isMobileOrTablet
              ? ' text-grey-600 '
              : '   border-b border-black text-black ')
        "
      />
      <button
        v-if="$device.isDesktop"
        class="w-2/12 sm:w-1/12 lg:w-3/12  mr-3 bg-transparent text-center align-midle h-8 align-middle block tracking-wider outline-none"
      >
        <svg
          width="20"
          height="20"
          fill="none"
          class="outline-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.0539 18.0462c.2782.2783.2782.7294 0 1.0077-.2783.2782-.7294.2782-1.0077 0l-3.42-3.42c-.2782-.2783-.2782-.7294 0-1.0077.2783-.2782.7294-.2782 1.0077 0l3.42 3.42zM8.29005 15.8425c-4.17113 0-7.5525-3.3813-7.5525-7.55245 0-4.17113 3.38137-7.5525 7.5525-7.5525 4.17115 0 7.55245 3.38137 7.55245 7.5525 0 4.17115-3.3813 7.55245-7.55245 7.55245zm0-1.425c3.38415 0 6.12745-2.7433 6.12745-6.12745 0-3.38413-2.7433-6.1275-6.12745-6.1275-3.38413 0-6.1275 2.74337-6.1275 6.1275 0 3.38415 2.74337 6.12745 6.1275 6.12745zm-3.515-6.69745c0 .26233-.21267.475-.475.475-.26234 0-.475-.21267-.475-.475 0-2.15115 1.74385-3.895 3.895-3.895.26233 0 .475.21266.475.475 0 .26233-.21267.475-.475.475-1.62648 0-2.945 1.31852-2.945 2.945z"
            fill="#1A051D"
          />
        </svg>
      </button>
    </form>

    <button
      @click="isHidden = false"
      v-if="isHidden && $device.isDesktop"
      class=" mr-4 lg:mr-7 bg-transparent rounded-md text-center align-midle h-8 align-middle block tracking-wider outline-none focus:outline-none"
    >
      <svg
        width="20"
        height="20"
        fill="none"
        class="outline-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.0539 18.0462c.2782.2783.2782.7294 0 1.0077-.2783.2782-.7294.2782-1.0077 0l-3.42-3.42c-.2782-.2783-.2782-.7294 0-1.0077.2783-.2782.7294-.2782 1.0077 0l3.42 3.42zM8.29005 15.8425c-4.17113 0-7.5525-3.3813-7.5525-7.55245 0-4.17113 3.38137-7.5525 7.5525-7.5525 4.17115 0 7.55245 3.38137 7.55245 7.5525 0 4.17115-3.3813 7.55245-7.55245 7.55245zm0-1.425c3.38415 0 6.12745-2.7433 6.12745-6.12745 0-3.38413-2.7433-6.1275-6.12745-6.1275-3.38413 0-6.1275 2.74337-6.1275 6.1275 0 3.38415 2.74337 6.12745 6.1275 6.12745zm-3.515-6.69745c0 .26233-.21267.475-.475.475-.26234 0-.475-.21267-.475-.475 0-2.15115 1.74385-3.895 3.895-3.895.26233 0 .475.21266.475.475 0 .26233-.21267.475-.475.475-1.62648 0-2.945 1.31852-2.945 2.945z"
          fill="#1A051D"
        />
      </svg>
    </button>
    <div
      v-bind="tooltip"
      v-if="tooltip"
      class="tooltip absolute bg-white text-black text-xs p-2 w-56 left-0 mt-9 top-0 z-50 text-center"
    >
      Tem de inserir mais de 3 caracteres
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'BaseInputSearch'
})
export default class BaseInputSearch extends Vue {
  private key: string = ''
  private result: any = ''
  private showPesquisa: boolean = false
  private tooltip: boolean = false

  data() {
    return {
      isHidden: true
    }
  }

  get _result(): any {
    return this.result
  }
}
</script>
