import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  locale: 'jp',
  fallbackLocale: 'zh',
  messages: {
    jp: {
      name: '日本語',
    },
    zh: {
      name: '中文',
    },
  },
})

export default i18n