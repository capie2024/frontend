import { ref, computed, watch } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useDeckMakeStore } from './deck-make'
import { useI18n } from 'vue-i18n'
import axios from 'axios'

export const useCardInfoStore = defineStore('card-info', () => {
  const deckMakeStore = useDeckMakeStore()
  const { selectedCards } = storeToRefs(deckMakeStore)

  const cardInfoDisplay = ref(false)
  const cardInfo = ref(null)
  const cardIndex = ref(null)
  const cardQAList = ref([])

  const leftDisabled = ref(null)
  const rightDisabled = ref(null)

  
  const { locale } = useI18n()

  const getCardInfoAndShow = (card) => {
    cardInfo.value = card
    cardInfoDisplay.value = true
    getCardInfoIndex()
  }

  // 獲取目前CardInfo顯示卡片在牌組製作陣列中的位置
  const getCardInfoIndex = () => {
    cardIndex.value = selectedCards.value.findIndex((card) => {
      return card.id === cardInfo.value.id
    })

    if (cardIndex.value == -1) {
      setTimeout(() => {
        leftDisabled.value = true
        rightDisabled.value = true
      }, 0)
    }

    if (cardIndex.value == 0) {
      leftDisabled.value = true
      rightDisabled.value = false
    } else if (cardIndex.value === selectedCards.value.length - 1) {
      leftDisabled.value = false
      rightDisabled.value = true
    } else if (
      cardIndex.value != 0 &&
      cardIndex.value != selectedCards.value.length - 1
    ) {
      leftDisabled.value = false
      rightDisabled.value = false
    }
  }

  // 切換顯示的卡片
  const changeCardInfoCard = (direction) => {
    getCardInfoIndex()
    if (cardIndex.value != -1) {
      if (direction == 'left') {
        rightDisabled.value = false
        if (cardIndex.value > 0) {
          cardInfo.value = selectedCards.value[cardIndex.value - 1]
        }
      } else if (direction == 'right') {
        leftDisabled.value = false
        if (cardIndex.value < selectedCards.value.length - 1) {
          cardInfo.value = selectedCards.value[cardIndex.value + 1]
        }
      }
    }
  }

  const getCardQA = async() => {
    cardQAList.value = []
    const API_URL = import.meta.env.VITE_API_URL
    const res = await axios.get(`${API_URL}/qa`)
    const qalist = []
    res.data.forEach( qa => {
      if(qa.relations.includes(cardInfo.value.id)) {
        qalist.unshift(qa)
      }
    });
    cardQAList.value = qalist
  }

  const translatedCardInfo = computed(() => {
    if(cardInfo.value === null) return
    const translateTitle = cardInfo.value.i18n?.[locale.value]?.title
    const translateFeature = cardInfo.value.i18n?.[locale.value]?.feature
    const translateProductName = cardInfo.value.i18n?.[locale.value]?.productName
    const translateSay = cardInfo.value.i18n?.[locale.value]?.say
    const translateEffect = cardInfo.value.i18n?.[locale.value]?.effect

    return {
      ...cardInfo.value,
      title: translateTitle || cardInfo.value.title,
      feature: translateFeature || cardInfo.value.feature,
      productName: translateProductName || cardInfo.value.productName,
      say: translateSay || cardInfo.value.say,
      effect: translateEffect || cardInfo.value.effect, 
      author: cardInfo.value.i18n?.[locale.value]?.author,
    }
  })

  const translatedCardQAList = computed(() => {
    if(cardQAList.value === null) return
    
    return cardQAList.value.map(qa => {
      const translateQ = qa.i18n?.[locale.value]?.q
      const translateA = qa.i18n?.[locale.value]?.a
      return {
        ...qa,
        q: translateQ || qa.q,
        a: translateA || qa.a,
        author: qa.i18n?.[locale.value]?.author
      }
    })
  })

  return {
    cardInfoDisplay,
    cardInfo,
    translatedCardInfo,
    getCardInfoAndShow,
    getCardInfoIndex,
    changeCardInfoCard,
    leftDisabled,
    rightDisabled,
    getCardQA,
    cardQAList,
    translatedCardQAList
  }
})
