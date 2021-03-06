import {SET_USER} from "./mutation-types";
import {auth} from "../main";

const UserModule = {
    namespaced: true,
    state: () => ({
        user: null,
    }),
    mutations: {
        [SET_USER] (state, user) {
            state.user = user
        }
    },
    actions: {
        setUser(context, user) {
            context.commit(SET_USER, user)
        },
        fetchUser(context) {
            if (! context.state.user) {
                return auth.fetch()
                    .then(res => {
                        context.dispatch('setUser', res.data.data.user)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }

            return new Promise((resolve) => {
                resolve(auth.user())
            })
        }
    },
    getters: {
        getUser(state) {
            return state.user
        }
    },
}

export default UserModule