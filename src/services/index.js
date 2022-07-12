import toastServicePlugin from "./toast.service";
import {useToast} from "vue-toast-notification";
import 'vue-toast-notification/dist/theme-default.css';
import mediaService from "./media.service";
// import 'vue-toast-notification/dist/theme-sugar.css';

const bootstrapServices = app => {
    const $toast = useToast()
    app.$toast = app.config.globalProperties.$toast = $toast

    app.use(toastServicePlugin)
    app.provide('mediaService', mediaService)
}

export default bootstrapServices