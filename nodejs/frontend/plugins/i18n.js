export default function ({ app, store }) {
  if(store.state.localStorage.locale != app.i18n.locale) {
    store.commit('localStorage/SET_LANG', app.i18n.locale)
  }

  // beforeLanguageSwitch called right before setting a new locale
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    store.commit('localStorage/SET_LANG', newLocale)
  }
}