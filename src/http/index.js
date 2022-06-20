import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL

export default (app) => {
    app.axios = app.$http = axios

    app.config.globalProperties.axios = app.config.globalProperties.$http = axios;
}
