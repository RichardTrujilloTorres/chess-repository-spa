import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/template/templateSetup.js';

const app = createApp(App)

import registration from "./components/registration";
registration(app)

import http from './http'
http(app)

import authSetup from "./auth";
export const auth = authSetup(app)

app.use(store)
    .use(router)
    .use(auth)
    .mount('#app')

export default app