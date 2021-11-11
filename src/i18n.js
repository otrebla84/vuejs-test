
import { createI18n } from 'vue-i18n/index'

import i18nES from './i18n/es.js'
import i18nEN from './i18n/en.js'

const i18n = createI18n({
  locale: 'ES',
  fallbackLocale: 'ES',
  messages:  {
    ES: i18nES,
    EN: i18nEN
  }
})

export default i18n
