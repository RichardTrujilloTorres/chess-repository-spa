import toastServicePlugin from "./toast.service";
import {useToast} from "vue-toast-notification";
import 'vue-toast-notification/dist/theme-default.css';
// import 'vue-toast-notification/dist/theme-sugar.css';

const bootstrapServices = app => {
    const $toast = useToast()
    app.$toast = app.config.globalProperties.$toast = $toast

    app.use(toastServicePlugin)
}

export default bootstrapServices