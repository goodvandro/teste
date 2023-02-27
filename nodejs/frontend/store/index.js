import gql from 'graphql-tag'
import { queryMenu } from '~/graphql/queries/menu'

export const state = () => ({
  menu: [],
})

export const actions = {
  async nuxtServerInit({ commit }) {
    if (this.app.apolloProvider) {
      const { data } = await this.app.apolloProvider.defaultClient.query({
        query: queryMenu(''),
      })
      commit('setMenu', data)
    }
  },
}

export const mutations = {
  setMenu(state, menu) {
    state.menu = menu
  },
}
