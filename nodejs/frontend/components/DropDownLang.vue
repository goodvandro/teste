<template>
  <div
    class="relative inline-block float-none align-middle border border-grey-400 border-solid rounded-full px-4 py-2"
  >
    <button
      @click="isOpen = !isOpen"
      class="relative z-10 flex overflow-hidden items-center text-xsm focus:outline-none text-grey-600"
    >
      English
      <svg
        width="10"
        class="inline ml-6"
        height="7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M.41494 1.65079L4.24072 6.1142c.35942.41933.99072.46789 1.41004.10847a.99993.99993 0 00.10847-.10847l3.82578-4.46341c.35942-.41932.31086-1.05062-.10847-1.41005A1 1 0 008.82575 0H1.17419c-.55228 0-1 .44771-1 1 0 .23871.0854.46955.24075.65079z"
          fill="#828282"
        />
      </svg>
      <!-- <span
        :class="
          $device.isDesktop
            ? 'text-black text-sm flex items-center'
            : 'text-black text-lg flex items-center'
        "
      >
        <svg
          v-if="!isOpen"
          :width="$device.isTablet ? '15' : '7'"
          :height="$device.isTablet ? '10' : '5'"
          viewBox="0 0 7 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L3.5 3.5L6 1"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          v-if="isOpen"
          width="7"
          height="5"
          viewBox="0 0 7 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.11426 3.5L3.61686 1L1.11946 3.5"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span> -->
    </button>
    <button
      v-if="isOpen"
      @click="isOpen = false"
      tabindex="-1"
      class="fixed inset-0 h-full w-full cursor-default"
    ></button>
    <div
      v-if="isOpen"
      class="absolute right-0 mt-3 py-2 w-30 bg-white rounded-lg shadow-xl z-10 text-center"
    >
      <nuxt-link
        :to="switchLocalePath('pt')"
        class="block px-5 py-2 text-xsm text-grey-600"
        >Português</nuxt-link
      >
      <!-- <nuxt-link
        :to="switchLocalePath('en')"
        class="block px-5 py-2 text-sm text-grey-500 hover:font-bold"
      >EN</nuxt-link>
      <nuxt-link
        :to="switchLocalePath('es')"
        class="block px-5 py-2 text-sm text-grey-500 hover:font-bold"
      >ES</nuxt-link>-->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'DropDownLang'
})
export default class DropDownLang extends Vue {
  changeLang(lang: string) {
    this.$store.commit('localStorage/SET_LANG', lang)
  }

  data() {
    return {
      isOpen: false
    }
  }

  /*created() {
    const handleEscape = (e) => {
      if (e.key === "Esc" || e.key === "Escape") {
        this.isOpen = false;
      }
    };
    document.addEventListener("keydown", handleEscape);
    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("keydown", handleEscape);
    });
  }*/
}
</script>
