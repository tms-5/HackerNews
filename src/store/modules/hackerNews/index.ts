import type { Module } from 'vuex'
import type { State } from '../../../types/tableHackerNews'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

const hackerNews: Module<State, State> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}

export default hackerNews
