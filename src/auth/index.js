import {createAuth} from "@websanova/vue-auth";
import router from "../router";
import driverHttpAxios from '@websanova/vue-auth/dist/drivers/http/axios.1.x.esm.js'
import driverAuthBearer from '@websanova/vue-auth/dist/drivers/auth/bearer.esm.js';
import driverRouterVueRouter from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm.js';
import driverOAuth2Google    from '@websanova/vue-auth/dist/drivers/oauth2/google.esm.js';
import driverOAuth2Facebook  from '@websanova/vue-auth/dist/drivers/oauth2/facebook.esm.js';

/**
 * Auth package setup
 */
const auth = (app) => createAuth({
    plugins: {
        http: app.axios,
        router,
    },
    drivers: {
        http: driverHttpAxios,
        auth: driverAuthBearer,
        router: driverRouterVueRouter,
        oauth2: {
            google: driverOAuth2Google,
            facebook: driverOAuth2Facebook,
        },
        options: {
            // notFoundRedirect: {name: 'MustLogIn'},
        },
        // tokenDefaultKey: 'access_token',
    },
})

export default auth
