import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from '../router/index'

export const useCardInfoStore = defineStore("card-info", () => {
    const cardInfoDisplay = ref(false);
    const cardInfo = ref(null); 
    const getCardInfoAndShow = (card) => {
        cardInfo.value = card;
        console.log(cardInfo.value);
        console.log("成功傳入卡片資訊");
        cardInfoDisplay.value = true;
    }

    return {
        cardInfoDisplay,
        cardInfo,
        getCardInfoAndShow,
    }
})