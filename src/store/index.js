import { createStore } from 'vuex'
import UserModule from "./user.store";

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userModule: UserModule,
  }
})
