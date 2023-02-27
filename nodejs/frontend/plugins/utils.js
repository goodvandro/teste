export default (context, inject) => {
  const getQueryLang = () => {
    var language = context.app.i18n.locale
    if (language == 'pt') language = ''
    else language = '_' + language
    return language
  }

  // Inject $hello(msg) in Vue, context and store.
  inject('lingua', getQueryLang)
}

import Vue from 'vue'
Vue.mixin({
  methods: {
    base_url(url) {
      return this.$config.adminUrl + url
    },
    getDescriptionPreview(str, maxLength) {
      let trimmedString = str.substr(0, maxLength)

      if (str.length > trimmedString.length) {
        trimmedString =
          trimmedString.substr(
            0,
            Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))
          ) + '...'
      }

      return trimmedString
    },
    slugify(str) {
      str = str.replace(/^\s+|\s+$/g, '')
      str = str.toLowerCase()

      var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
      var to = 'aaaaeeeeiiiioooouuuunc------'
      for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
      }

      str = str
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')

      return str
    }
  }
})
