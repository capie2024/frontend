import { ref, computed } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { useCardSeriesStore } from "./card-series";

export const useCardFilterStore = defineStore("card-filter", () => {
  // 引入CardSeriesStore並使用
  const cardSeriesStore = useCardSeriesStore();
  // seriesCardList是目前的系列所有的卡片，定義在CardSeriesStore裡
  const { seriesCardList } = storeToRefs(cardSeriesStore);

  //APPLY按鈕變數
  const applyBtnStatus = ref(true);

  //AND按鈕變數
  const replaceKeyWord = ref(false);

  // 篩選用空陣列
  const newSeriesCardList = ref([]);

  // 等級升降變數
  const levelSortStatus = ref(0);
  const levelDownSort = ref(false);
  const levelUpSort = ref(false);

  // 顏色升降變數
  const colorSortStatus = ref(0);
  const colorDownSort = ref(false);
  const colorUpSort = ref(false);

  // 價格升降變數
  const priceSortStatus = ref(0);
  const priceDownSort = ref(false);
  const priceUpSort = ref(true);

  // 類型篩選變數
  const typeSortStatus = ref(0);
  const typeCharacter = ref(false);
  const typeScene = ref(false);
  const typeEvent = ref(true);

  // 等級篩選變數
  const levelFilterStatus = ref(0);
  const levelFilter0 = ref(false);
  const levelFilter1 = ref(false);
  const levelFilter2 = ref(false);
  const levelFilter3 = ref(false);

  // 顏色篩選變數
  const colorFilterStatus = ref(0);
  const colorFilterRed = ref(false);
  const colorFilterBlue = ref(false);
  const colorFilterYellow = ref(false);

  // 費用篩選變數
  const costFilterStatus = ref(0);
  const costFilter0 = ref(false);
  const costFilter1 = ref(false);
  const costFilter2 = ref(false);

  // 魂傷篩選變數
  const soulFilterStatus = ref(0);
  const soulFilter0 = ref(false);
  const soulFilter1 = ref(false);
  const soulFilter2 = ref(false);

  // AND按鈕切換
  const changeReplaceKeyWord = () => {
    if (replaceKeyWord.value === true) {
      replaceKeyWord.value = false;
    } else {
      replaceKeyWord.value = true;
    }
    console.log("目前空格篩選狀態是:" + replaceKeyWord.value);
  };

  // 篩選功能
  const useFilters = (keyWord) => {
    // seriesCardList是目前的系列所有的卡片，newSeriesCardList是篩選後的卡片
    newSeriesCardList.value = seriesCardList.value;
    // console.log("舊陣列：" + seriesCardList.value + "新陣列：" + newSeriesCardList.value);

    // 這一列是在測試下面寫的篩選相關function能不能正常用
    // if (keyWord != "") {
    //   keyWordFilter(keyWord);
    // }
    // levelSort();
    // colorSort();
    // priceSort();
    // typeSort();
    // colorFilter();
    // levelFilter();
    // costFilter();
    // soulFilter();

    // 篩選完後把新的陣列賦值給seriesCardList
    seriesCardList.value = newSeriesCardList.value;
  };

  // 關鍵字搜尋
  const keyWordFilter = (keyWord) => {
    console.log(keyWord);
    console.log("關鍵字搜尋開始");
    const keyWordArray = ref([]);
    if (replaceKeyWord.value === false) {
      keyWordArray.value = [keyWord];
    } else if (replaceKeyWord.value === true) {
      keyWordArray.value = keyWord.replace(" ", ",").split(",");
    }
    console.log(keyWordArray);
    const filterCards = ref([]);

    keyWordArray.value.forEach((key) => {
      newSeriesCardList.value.filter((card) => {
        if (
          card.effect.includes(key) ||
          card.title.includes(key) ||
          card.i18n.zh.title.includes(key) ||
          card.i18n.zh.effect.includes(key)
        ) {
          console.log("符合的卡:" + card);
          filterCards.value.push(card);
        }
      });
    });
    console.log(filterCards.value);
    newSeriesCardList.value = filterCards.value;
  };

  // 等級升降排序
  const levelSort = () => {
    const levelSortArr = ref([]);
    const levelArr = newSeriesCardList.value.map((card) => {
      return card.level;
    });
    const maxLevel = Math.max(...levelArr);
    // 判斷降序還是升序
    if (levelDownSort.value === true) {
      for (let i = maxLevel; i > 0; i--) {
        newSeriesCardList.value.forEach((card) => {
          if (card.level === i) {
            levelSortArr.value.push(card);
          }
        });
      }
    } else if (levelUpSort.value === true) {
      for (let i = maxLevel; i >= 0; i--) {
        newSeriesCardList.value.forEach((card) => {
          if (card.level === i) {
            levelSortArr.value.unshift(card);
          }
        });
      }
    }
    newSeriesCardList.value = levelSortArr.value;
  };

  // 顏色升降排序
  const colorSort = () => {
    const colorSortArr = ref([]);
    if (colorDownSort.value === true) {
      newSeriesCardList.value.forEach((card) => {
        if (card.color === "red") {
          colorSortArr.value.push(card);
        }
      });
      newSeriesCardList.value.forEach((card) => {
        if (card.color === "yellow") {
          colorSortArr.value.push(card);
        }
      });
      newSeriesCardList.value.forEach((card) => {
        if (card.color === "green") {
          colorSortArr.value.push(card);
        }
      });
      newSeriesCardList.value.forEach((card) => {
        if (card.color === "blue") {
          colorSortArr.value.push(card);
        }
      });
      newSeriesCardList.value.forEach((card) => {
        if (card.color === "purple") {
          colorSortArr.value.push(card);
        }
      });
    } else if (colorUpSort.value === true) {
      newSeriesCardList.value.forEach((card) => {
        if (card.color === "purple") {
          colorSortArr.value.push(card);
        }
      });
      newSeriesCardList.value.forEach((card) => {
        if (card.color === "blue") {
          colorSortArr.value.push(card);
        }
      });
      newSeriesCardList.value.forEach((card) => {
        if (card.color === "green") {
          colorSortArr.value.push(card);
        }
      });
      newSeriesCardList.value.forEach((card) => {
        if (card.color === "yellow") {
          colorSortArr.value.push(card);
        }
      });
      newSeriesCardList.value.forEach((card) => {
        if (card.color === "red") {
          colorSortArr.value.push(card);
        }
      });
    }
    newSeriesCardList.value = colorSortArr.value;
  };

  // 價格升降排序
  const priceSort = () => {
    const priceSortArr = ref([]);
    const priceArr = newSeriesCardList.value.map((card) => {
      return card.price.number;
    });
    const newPriceArr = ref([]);
    priceArr
      .sort((a, b) => a - b)
      .forEach((price) => {
        const checkHavePrice = newPriceArr.value.find((item) => {
          return item == price;
        });
        if (!checkHavePrice) {
          newPriceArr.value.push(price);
        }
      });

    if (priceUpSort.value === true) {
      for (let i = 0; i < newPriceArr.value.length; i++) {
        const filtedArr = newSeriesCardList.value.filter((card) => {
          return card.price.number === newPriceArr.value[i];
        });
        priceSortArr.value.unshift(...filtedArr);
      }
    } else if (priceDownSort.value === true) {
      for (let i = 0; i < newPriceArr.value.length; i++) {
        const filtedArr = newSeriesCardList.value.filter((card) => {
          return card.price.number === newPriceArr.value[i];
        });
        priceSortArr.value.push(...filtedArr);
      }
    }
    newSeriesCardList.value = priceSortArr.value;
  };

  // 類型篩選排序
  const typeSort = () => {
    const typeSortArr = ref([]);
    if (typeCharacter.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.typeTranslate === "角色") {
          const checkHaveCard = typeSortArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            typeSortArr.value.push(card);
          }
        }
      });
    }
    if (typeScene.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.typeTranslate === "名場") {
          const checkHaveCard = typeSortArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            typeSortArr.value.push(card);
          }
        }
      });
    }
    if (typeEvent.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.typeTranslate === "事件") {
          const checkHaveCard = typeSortArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            typeSortArr.value.push(card);
          }
        }
      });
    }
    console.log(typeSortArr.value);
    newSeriesCardList.value = typeSortArr.value;
  };

  // 等級篩選排序
  const levelFilter = () => {
    const levelFilterArr = ref([]);
    if (levelFilter0.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.level === 0) {
          const checkHaveCard = levelFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            levelFilterArr.value.push(card);
          }
        }
      });
    }
    if (levelFilter1.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.level === 1) {
          const checkHaveCard = levelFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            levelFilterArr.value.push(card);
          }
        }
      });
    }
    if (levelFilter2.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.level === 2) {
          const checkHaveCard = levelFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            levelFilterArr.value.push(card);
          }
        }
      });
    }
    if (levelFilter3.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.level === 3) {
          const checkHaveCard = levelFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            levelFilterArr.value.push(card);
          }
        }
      });
    }
    console.log(levelFilterArr.value);
    newSeriesCardList.value = levelFilterArr.value;
  };

  // 顏色篩選排序
  const colorFilter = () => {
    const colorFilterArr = ref([]);
    if (colorFilterRed.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.color === "red") {
          const checkHaveCard = colorFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            colorFilterArr.value.push(card);
          }
        }
      });
    }
    if (colorFilterBlue.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.color === "blue") {
          const checkHaveCard = colorFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            colorFilterArr.value.push(card);
          }
        }
      });
    }
    if (colorFilterYellow.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.color === "yellow") {
          const checkHaveCard = colorFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            colorFilterArr.value.push(card);
          }
        }
      });
    }
    console.log(colorFilterArr.value);
    newSeriesCardList.value = colorFilterArr.value;
  };

  // 費用篩選排序
  const costFilter = () => {
    const costFilterArr = ref([]);
    if (costFilter0.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.cost === 0) {
          const checkHaveCard = costFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            costFilterArr.value.push(card);
          }
        }
      });
    }
    if (costFilter1.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.cost === 1) {
          const checkHaveCard = costFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            costFilterArr.value.push(card);
          }
        }
      });
    }
    if (costFilter2.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.cost === 2) {
          const checkHaveCard = costFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            costFilterArr.value.push(card);
          }
        }
      });
    }
    console.log(costFilterArr.value);
    newSeriesCardList.value = costFilterArr.value;
  };

  // 魂傷篩選排序
  const soulFilter = () => {
    const soulFilterArr = ref([]);
    if (soulFilter0.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.soul === 0) {
          const checkHaveCard = soulFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            soulFilterArr.value.push(card);
          }
        }
      });
    }
    if (soulFilter1.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.soul === 1) {
          const checkHaveCard = soulFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            soulFilterArr.value.push(card);
          }
        }
      });
    }
    if (soulFilter2.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.soul === 2) {
          const checkHaveCard = soulFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            soulFilterArr.value.push(card);
          }
        }
      });
    }
    console.log(soulFilterArr.value);
    newSeriesCardList.value = soulFilterArr.value;
  };

  return {
    useFilters,
    applyBtnStatus,
    changeReplaceKeyWord,
  };
});
