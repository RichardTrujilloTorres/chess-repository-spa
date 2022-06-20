import { createStore } from 'vuex'
import UserModule from "./user.store";
import GameModule from "./games.store";

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userModule: UserModule,
    gameModule: GameModule,
  }
})
