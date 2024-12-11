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
  const levelSortStatus = ref(true);
  const levelDownSort = ref(false);
  const levelUpSort = ref(false);

  // 顏色升降變數
  const colorSortStatus = ref(false);
  const colorDownSort = ref(false);
  const colorUpSort = ref(false);

  // 價格升降變數
  const priceSortStatus = ref(false);
  const priceDownSort = ref(false);
  const priceUpSort = ref(true);

  // 類型篩選變數
  const typeSortStatus = ref(false);
  const typeCharacter = ref(false);
  const typeScene = ref(false);
  const typeEvent = ref(true);

  // 等級篩選變數
  const levelFilterStatus = ref(false);
  const levelFilter0 = ref(false);
  const levelFilter1 = ref(false);
  const levelFilter2 = ref(false);
  const levelFilter3 = ref(false);

  // 顏色篩選變數
  const colorFilterStatus = ref(false);
  const colorFilterRed = ref(false);
  const colorFilterBlue = ref(false);
  const colorFilterYellow = ref(false);

  // 費用篩選變數
  const costFilterStatus = ref(false);
  const costFilter0 = ref(false);
  const costFilter1 = ref(false);
  const costFilter2 = ref(false);

  // 魂傷篩選變數
  const soulFilterStatus = ref(false);
  const soulFilter0 = ref(false);
  const soulFilter1 = ref(false);
  const soulFilter2 = ref(false);

  // 攻擊力篩選變數
  const attackFilterStatus = ref(false);
  const attackFilter0 = ref(true);
  const attackFilter500 = ref(false);
  const attackFilter1000 = ref(false); 
  const attackFilter1500 = ref(false); 
  const attackFilter2000 = ref(false); 
  const attackFilter2500 = ref(false); 
  const attackFilter3000 = ref(false); 
  const attackFilter3500 = ref(false); 
  const attackFilter4000 = ref(false); 
  const attackFilter4500 = ref(false); 
  const attackFilter5000 = ref(false); 
  const attackFilter5500 = ref(false); 
  const attackFilter6000 = ref(false); 
  const attackFilter6500 = ref(false); 
  const attackFilter7000 = ref(false); 
  const attackFilter7500 = ref(false); 
  const attackFilter8000 = ref(false); 
  const attackFilter8500 = ref(false); 
  const attackFilter9000 = ref(false); 
  const attackFilter9500 = ref(false); 
  const attackFilter10000 = ref(false); 
  const attackFilter10500 = ref(false); 
  const attackFilter11000 = ref(false);

  // 稀有度篩選變數
  const rareFilterStatus = ref(false);
  const rareFilterRR = ref(true);
  const rareFilterSSP = ref(false);
  const rareFilterLRR = ref(false);
  const rareFilterR = ref(false);
  const rareFilterSR = ref(false);
  const rareFilterOFR = ref(false);
  const rareFilterU = ref(false);
  const rareFilterC = ref(true);
  const rareFilterCR = ref(false);
  const rareFilterRRR = ref(false);
  const rareFilterCC = ref(false);
  const rareFilterPR = ref(false);
  const rareFilterTD = ref(false);
  const rareFilterSP = ref(false);
  const rareFilterN = ref(false);
  const rareFilterLRP = ref(false);
  const rareFilterSIR = ref(false);


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
    if (keyWord != "") {
      keyWordFilter(keyWord);
    }
    // levelSort();
    // colorSort();
    // priceSort();
    // typeSort();
    // colorFilter();
    // levelFilter();
    // costFilter();
    // soulFilter();
    // attackFilter();
    // rareFilter();

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

  // 攻擊力篩選排序
  const attackFilter = () => {
    const attackFilterArr = ref([]);
    if (attackFilter0.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 0) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter500.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter1000.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 1000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter1500.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 1500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter2000.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 2000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter2500.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 2500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter3000.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 3000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter3500.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 3500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter4000.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 4000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter4500.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 4500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter5000.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 5000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter5500.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 5500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter6000.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 6000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter6500.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 6500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter7000.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 7000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter7500.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 7500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter8000.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 8000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter8500.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 8500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter9000.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 9000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter9500.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 9500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter10000.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 10000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter10500.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 10500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (attackFilter11000.value) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack <= 11000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }

    console.log(attackFilterArr.value);
    newSeriesCardList.value = attackFilterArr.value;
  };

  // 稀有度篩選排序
  const rareFilter = () => {
    const rareFilterArr = ref([]);
    if (rareFilterRR.value) { 
      newSeriesCardList.value.forEach((card) => {
        if (card.rare == 'RR') { 
          const checkHaveCard = rareFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard == undefined) {
            rareFilterArr.value.push(card);
          }
        }
      });
    }
    
    if (rareFilterSSP.value) { 
      newSeriesCardList.value.forEach((card) => {
        if (card.rare == 'SSP') { 
          const checkHaveCard = rareFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard == undefined) {
            rareFilterArr.value.push(card);
          }
        }
      });
    }
    
    if (rareFilterLRR.value) { 
      newSeriesCardList.value.forEach((card) => {
        if (card.rare == 'LRR') { 
          const checkHaveCard = rareFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard == undefined) {
            rareFilterArr.value.push(card);
          }
        }
      });
    }
    
    if (rareFilterR.value) { 
      newSeriesCardList.value.forEach((card) => {
        if (card.rare == 'R') { 
          const checkHaveCard = rareFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard == undefined) {
            rareFilterArr.value.push(card);
          }
        }
      });
    }
    
    if (rareFilterSR.value) { 
      newSeriesCardList.value.forEach((card) => {
        if (card.rare == 'SR') { 
          const checkHaveCard = rareFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard == undefined) {
            rareFilterArr.value.push(card);
          }
        }
      });
    }
    
    if (rareFilterOFR.value) { 
      newSeriesCardList.value.forEach((card) => {
        if (card.rare == 'OFR') { 
          const checkHaveCard = rareFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard == undefined) {
            rareFilterArr.value.push(card);
          }
        }
      });
    }
    
    if (rareFilterU.value) { 
      newSeriesCardList.value.forEach((card) => {
        if (card.rare == 'U') { 
          const checkHaveCard = rareFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard == undefined) {
            rareFilterArr.value.push(card);
          }
        }
      });
    }
    
    if (rareFilterC.value) { 
      newSeriesCardList.value.forEach((card) => {
        if (card.rare == 'C') { 
          const checkHaveCard = rareFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard == undefined) {
            rareFilterArr.value.push(card);
          }
        }
      });
    }
    
    if (rareFilterCR.value) { 
      newSeriesCardList.value.forEach((card) => {
        if (card.rare == 'CR') { 
          const checkHaveCard = rareFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard == undefined) {
            rareFilterArr.value.push(card);
          }
        }
      });
    }
    
    if (rareFilterRRR.value) { 
      newSeriesCardList.value.forEach((card) => {
        if (card.rare == 'RRR') { 
          const checkHaveCard = rareFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard == undefined) {
            rareFilterArr.value.push(card);
          }
        }
      });
    }
    
    if (rareFilterCC.value) { 
      newSeriesCardList.value.forEach((card) => {
        if (card.rare == 'CC') { 
          const checkHaveCard = rareFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard == undefined) {
            rareFilterArr.value.push(card);
          }
        }
      });
    }
    
    if (rareFilterPR.value) { 
      newSeriesCardList.value.forEach((card) => {
        if (card.rare == 'PR') { 
          const checkHaveCard = rareFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard == undefined) {
            rareFilterArr.value.push(card);
          }
        }
      });
    }
    
    if (rareFilterTD.value) { 
      newSeriesCardList.value.forEach((card) => {
        if (card.rare == 'TD') { 
          const checkHaveCard = rareFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard == undefined) {
            rareFilterArr.value.push(card);
          }
        }
      });
    }
    
    if (rareFilterSP.value) { 
      newSeriesCardList.value.forEach((card) => {
        if (card.rare == 'SP') { 
          const checkHaveCard = rareFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard == undefined) {
            rareFilterArr.value.push(card);
          }
        }
      });
    }
    
    if (rareFilterN.value) { 
      newSeriesCardList.value.forEach((card) => {
        if (card.rare == 'N') { 
          const checkHaveCard = rareFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard == undefined) {
            rareFilterArr.value.push(card);
          }
        }
      });
    }
    
    if (rareFilterLRP.value) { 
      newSeriesCardList.value.forEach((card) => {
        if (card.rare == 'LRP') { 
          const checkHaveCard = rareFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard == undefined) {
            rareFilterArr.value.push(card);
          }
        }
      });
    }
    
    if (rareFilterSIR.value) { 
      newSeriesCardList.value.forEach((card) => {
        if (card.rare == 'SIR') { 
          const checkHaveCard = rareFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard == undefined) {
            rareFilterArr.value.push(card);
          }
        }
      });
    }
    
    console.log(rareFilterArr.value);
    newSeriesCardList.value = rareFilterArr.value;
  };

  return {
    useFilters,
    applyBtnStatus,
    changeReplaceKeyWord,
    levelSortStatus,
    colorSortStatus,
    priceSortStatus,
    typeSortStatus,
    levelFilterStatus,
    colorFilterStatus,
    costFilterStatus,
    soulFilterStatus,
    attackFilterStatus,
    rareFilterStatus,
  };
});
