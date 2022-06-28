import messages from "./messages";
import {createI18n} from 'vue-i18n';

const DEFAULT_LOCALE = 'en'

export const LOCALES = {
    en: 'en',
    it: 'it',
}

const i18n = createI18n({
    locale: window.locale,
    fallbackLocale: DEFAULT_LOCALE,
    messages,
})

export default i18n