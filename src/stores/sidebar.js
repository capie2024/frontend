import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

export const useSidebarStore = defineStore('sidebar', () => {
  const isActive = ref(false)
  const { locale } = useI18n()
  const switchLang = () => {
    isActive.value = !isActive.value
    if (isActive.value === false) {
      locale.value = 'jp'
    } else if (isActive.value === true) {
      locale.value = 'zh'
    }
  }

  return {
    isActive,
    switchLang,
  }
})
