import axios from "axios";
import {LOADING} from "../common/events";
import emitter from "../common/emitter";
import router from "../router";

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL

export default (app) => {
    app.axios = app.$http = axios
    app.config.globalProperties.axios = app.config.globalProperties.$http = axios;

    app.axios.interceptors.request.use(config => {
        emitter.emit(LOADING, true)
        return config
    }, err => {
        emitter.emit(LOADING, false)
        Promise.reject(err)
    })

    app.axios.interceptors.response.use(res => {
        emitter.emit(LOADING, false)
        return res
    }, err => {
        if (err.status === 401) {
            router.push({name: 'Login'})
        }
        emitter.emit(LOADING, false)
        Promise.reject(err)
    })
}
