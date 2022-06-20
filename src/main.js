import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


/**
 * Template
 */
import './assets/template/js/core/jquery.min.js';
import './assets/template/js/core/popper.min.js';
import './assets/template/js/core/bootstrap.min.js';
import './assets/template/js/plugins/bootstrap-switch.js';
import './assets/template/js/plugins/nouislider.min.js';

import jQuery from 'jquery'
window.$ = window.jQuery = jQuery
require('./assets/template/js/paper-kit.js?v=2.2.0')
import Navbar from "./components/Common/Navbar";
import Search from "./components/Common/Search";

const app = createApp(App)


/**
 * Component registration
 */
app.component('common_navbar', Navbar)
app.component('common_search', Search)


import http from './http'
http(app)

import authSetup from "./auth";
export const auth = authSetup(app)

app.use(store)
    .use(router)
    .use(auth)
    .mount('#app')

export default app