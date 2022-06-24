import { createStore } from 'vuex'
import UserModule from "./user.store";
import GameModule from "./games.store";
import {SET_LOADING} from "./mutation-types";

export default createStore({
  state: {
    loading: false,
  },
  mutations: {
    [SET_LOADING](state, isLoading) {
      state.loading = isLoading
    },
  },
  actions: {
    setLoading({commit}, isLoading) {
      commit(SET_LOADING, isLoading)
    },
  },
  getters: {
    isLoading(state) {
      return state.loading
    },
  },
  modules: {
    userModule: UserModule,
    gameModule: GameModule,
  }
})
