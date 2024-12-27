import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useDeckMakeStore } from './deck-make'
import { useI18n } from 'vue-i18n'

export const useCardInfoStore = defineStore('card-info', () => {
  const deckMakeStore = useDeckMakeStore()
  const { selectedCards } = storeToRefs(deckMakeStore)

  const cardInfoDisplay = ref(false)
  const cardInfo = ref(null)
  const cardIndex = ref(null)

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

  const translatedCardInfo = computed(() => {
    if(cardInfo.value === null) return
    const translateTitle = cardInfo.value.i18n?.[locale.value]?.title
    console.log(translateTitle);
    console.log(cardInfo.value.title);
    
    const translateFeature = cardInfo.value.i18n?.[locale.value]?.feature
    console.log(translateFeature);
    console.log(cardInfo.value.feature);
    
    const translateProductName = cardInfo.value.i18n?.[locale.value]?.productName
    console.log(translateProductName);
    console.log(cardInfo.value.productName);
    
    const translateSay = cardInfo.value.i18n?.[locale.value]?.say
    console.log(translateSay);
    console.log(cardInfo.value.say);
    
    const translateEffect = cardInfo.value.i18n?.[locale.value]?.effect
    console.log(translateEffect);
    console.log(cardInfo.value.effect);    
    
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

  return {
    cardInfoDisplay,
    cardInfo,
    translatedCardInfo,
    getCardInfoAndShow,
    getCardInfoIndex,
    changeCardInfoCard,
    leftDisabled,
    rightDisabled,
  }
})
