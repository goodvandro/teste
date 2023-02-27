<template>
  <div
    id="form_contacto"
    class="w-full float-left md:w-1/2 md:float-none md:mx-auto"
  >
    <form @submit.prevent="submit">
      <h3 class="text-center md:mb-3.5">{{ $t('form.contactos.titulo') }}</h3>
      <p class="text-center md:mb-10">{{ $t('form.contactos.texto') }}</p>
      <div>
        <input
          class="appearance-none h-12 shadow-lg rounded-md w-full py-2 px-3 text-black focus:outline-none"
          id="nome"
          name="nome"
          v-model="nome"
          type="text"
          :placeholder="$t('form.contactos.placeholders.nome')"
        />
      </div>
      <div class="mt-3.5">
        <input
          class="appearance-none h-12 shadow-lg rounded-md w-full py-2 px-3 text-black focus:outline-none"
          id="email"
          name="email"
          v-model="email"
          type="text"
          :placeholder="$t('form.contactos.placeholders.email')"
        />
      </div>
      <div class="mt-3.5">
        <textarea
          class="appearance-none h-44 shadow-lg rounded-md w-full pt-2 px-3 text-black focus:outline-none resize-none"
          id="descricao"
          v-model="mensagem"
          rows="10"
          cols="50"
          :placeholder="$t('form.contactos.placeholders.mensagem')"
        />
      </div>

      <div class="my-9">
        <input
          id="politica"
          type="checkbox"
          value="1"
          name="politica_de_privacidade"
          checked
          v-model="politica_de_privacidade"
        />
        <label for="politica" v-html="$t('form.contactos.politica')" />
      </div>

      <div v-if="errors.length" class="text-red text-xs">
        <b>{{ $t('form.erros.titulo') }}</b>
        <ul>
          <li :key="index" v-for="(error, index) in errors">{{ error }}</li>
        </ul>
      </div>

      <div class="w-full float-left text-center md:text-right">
        <button
          :disabled="disabled"
          class="cta cta-primario text-white text-sm uppercase inline-block align-midle font-museo font-bold w-50 h5 align-middle block tracking-wider hover:transform hover:scale-105 transition duration-200 ease-in-out"
        >
          <span class="inline-block">{{
            $t('form.contactos.enviar.texto')
          }}</span>
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block"
          >
            <path
              d="M23.707 12.707a1 1 0 000-1.414l-6.364-6.364a1 1 0 10-1.414 1.414L21.586 12l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM1 13h22v-2H1v2z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import axios from 'axios'

@Component({
  name: 'FormContacto'
})
export default class FormContacto extends Vue {
  private nome: string = ''
  private email: string = ''
  private mensagem: string = ''
  private politica_de_privacidade: boolean = false
  private disabled: boolean = false
  private errors: any[] = []

  checkForm() {
    this.errors = []
    if (!this.mensagem) {
      this.errors.push(this.$t('form.erros.mensagem.obrigatorio'))
    }
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
      this.disabled = true

      let obj = {
        nome: this.nome,
        email: this.email,
        mensagem: this.mensagem,
        data: new Date(),
        politica_privacidade: this.politica_de_privacidade
      }

      axios({
        method: 'post',
        url: `${this.$config.adminUrl}/pedidos-de-contactos`,
        data: obj
      }).then((data: any) => {
        this.$router.push({
          path: '/agradecimento/pedido-de-contacto'
        })
      })
    }
  }
}
</script>
