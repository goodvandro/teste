<template>
  <div id="form_newsletter" class="w-full float-left mt-8">
    <form @submit.prevent="submit">
      <div
        class="w-full float-left mb-11 grid grid-cols-1 md:grid-cols-9 gap-4"
      >
        <div class="md:col-span-4">
          <input
            class="appearance-none h-12 shadow-lg rounded-md py-2 px-3 text-black focus:outline-none inline-block pr-4 w-full"
            id="nome"
            name="nome"
            v-model="nome"
            type="text"
            :placeholder="$t('form.contactos.placeholders.nome')"
          />
        </div>
        <div v-if="$device.isDesktop" class="md:col-span-4">
          <input
            class="appearance-none h-12 shadow-lg rounded-md py-2 px-3 text-black focus:outline-none inline-block pr-4 w-full"
            id="email"
            name="email"
            v-model="email"
            type="text"
            :placeholder="$t('form.contactos.placeholders.email')"
          />
        </div>
        <div v-if="$device.isDesktop" class="text-center md:text-left">
          <button class="inline-block w-full">
            <svg
              width="48"
              height="48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mx-auto md:mx-0"
            >
              <circle cx="24" cy="24" r="24" fill="#65C9D7" />
              <path
                d="M24.416 29.926l-3.458-1.965c-.15-.1-.274-.025-.274.149v4.428c0 1.169.622 1.393 1.393.522l2.388-2.786c.1-.124.075-.274-.05-.348zM34.44 14.478l-20.348 6.79c-1.12.374-1.194 1.145-.174 1.717l5.423 3.11a.418.418 0 00.448-.025l10.796-7.538c.597-.422.646-.348.1.125l-9.13 8.358c-.125.125-.1.274.05.373l7.91 4.528c.622.373 1.319.074 1.517-.622l4.503-15.772c.224-.845-.249-1.318-1.094-1.044z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-5" v-if="!$device.isDesktop">
          <div class="col-span-4">
            <input
              class="appearance-none h-12 shadow-lg rounded-md py-2 px-3 text-black focus:outline-none inline-block pr-4 w-full"
              id="email"
              name="email"
              v-model="email"
              type="text"
              :placeholder="$t('form.contactos.placeholders.email')"
            />
          </div>
          <div class=" text-right">
            <button class="inline-block">
              <svg
                width="48"
                height="48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="text-sm"
              >
                <circle cx="24" cy="24" r="24" fill="#65C9D7" />
                <path
                  d="M24.416 29.926l-3.458-1.965c-.15-.1-.274-.025-.274.149v4.428c0 1.169.622 1.393 1.393.522l2.388-2.786c.1-.124.075-.274-.05-.348zM34.44 14.478l-20.348 6.79c-1.12.374-1.194 1.145-.174 1.717l5.423 3.11a.418.418 0 00.448-.025l10.796-7.538c.597-.422.646-.348.1.125l-9.13 8.358c-.125.125-.1.274.05.373l7.91 4.528c.622.373 1.319.074 1.517-.622l4.503-15.772c.224-.845-.249-1.318-1.094-1.044z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="mb-4">
        <input
          id="politica"
          type="checkbox"
          value="1"
          name="politica_de_privacidade"
          checked
          v-model="politica_de_privacidade"
        />
        <label
          for="politica"
          class="text-grey-600 text-xs"
          v-html="$t('form.contactos.politica')"
        />
      </div>

      <div v-if="errors.length" class="text-red text-xs">
        <b>{{ $t('form.erros.titulo') }}</b>
        <ul>
          <li :key="index" v-for="(error, index) in errors">{{ error }}</li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import axios from 'axios'

@Component({
  name: 'FormNewsletter'
})
export default class FormNewsletter extends Vue {
  private nome: string = ''
  private email: string = ''
  private politica_de_privacidade: boolean = false
  private errors: any[] = []

  checkForm() {
    this.errors = []
    if (!this.nome) {
      this.errors.push(this.$t('form.erros.nome.obrigatorio'))
    }
    if (!this.email) {
      this.errors.push(this.$t('form.erros.email.obrigatorio'))
    } else if (!this.validEmail(this.email)) {
      this.errors.push(this.$t('form.erros.email.valido'))
    }
    if (!this.politica_de_privacidade) {
      this.errors.push(this.$t('form.erros.politica.obrigatorio'))
    }
    if (!this.errors.length) {
      return true
    } else {
      return false
    }
  }

  validEmail(email: string) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  submit() {
    if (this.checkForm()) {
      let obj = {
        nome: this.nome,
        email: this.email,
        data: new Date(),
        politica_privacidade: this.politica_de_privacidade
      }

      axios({
        method: 'post',
        url: `${this.$config.adminUrl}/newsletters`,
        data: obj
      }).then((data: any) => {
        this.$router.push({
          path: '/agradecimento/inscricao-newsletter'
        })
      })
    }
  }
}
</script>
