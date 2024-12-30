import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

export const useFaqInfoStore = defineStore('faq-info', () => {
  const faqInfoDisplay = ref(false)
  const faqInfo = ref(null)

  // const { locale } = useI18n()

  const getFaqInfoAndShow = (faq) => {
    faqInfo.value = faq
    faqInfoDisplay.value = true
  }
})

// return { faqInfoDisplay, faqInfo, getFaqInfoAndShow }
