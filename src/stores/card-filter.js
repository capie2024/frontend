import { ref, computed, reactive } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { useCardSeriesStore } from "./card-series";

export const useCardFilterStore = defineStore("card-filter", () => {
  // 引入CardSeriesStore並使用
  const cardSeriesStore = useCardSeriesStore();
  // seriesCardList是目前的系列所有的卡片，定義在CardSeriesStore裡
  const { seriesCardList } = storeToRefs(cardSeriesStore);
  const getLastViewSeries = cardSeriesStore.getLastViewSeries;
  //APPLY按鈕變數
  const applyBtnStatus = ref(true);

  //AND按鈕變數
  const replaceKeyWord = ref(false);

  // 篩選用空陣列
  const newSeriesCardList = ref([]);

  // 升降排序變數集合
  const filterVaribleSet = reactive({
    replaceKeyWord: false,
    levelUpSort: false,
    levelDownSort: false,
    colorUpSort: false,
    colorDownSort: false,
    priceUpSort: false,
    priceDownSort: false,
    typeCharacter: false,
    typeScene: false,
    typeEvent: false,
    levelFilter0: false,
    levelFilter1: false,
    levelFilter2: false,
    levelFilter3: false,
    colorFilterRed: false,
    colorFilterBlue: false,
    colorFilterYellow: false,
    costFilter0: false,
    costFilter1: false,
    costFilter2: false,
    soulFilter0: false,
    soulFilter1: false,
    soulFilter2: false,
    attackFilter0: false,
    attackFilter500: false,
    attackFilter1000: false,
    attackFilter1500: false,
    attackFilter2000: false,
    attackFilter2500: false,
    attackFilter3000: false,
    attackFilter3500: false,
    attackFilter4000: false,
    attackFilter4500: false,
    attackFilter5000: false,
    attackFilter5500: false,
    attackFilter6000: false,
    attackFilter6500: false,
    attackFilter7000: false,
    attackFilter7500: false,
    attackFilter8000: false,
    attackFilter8500: false,
    attackFilter9000: false,
    attackFilter9500: false,
    attackFilter10000: false,
    attackFilter10500: false,
    attackFilter11000: false,
    rareFilterRR: false,
    rareFilterSSP: false,
    rareFilterLRR: false,
    rareFilterR: false,
    rareFilterSR: false,
    rareFilterOFR: false,
    rareFilterU: false,
    rareFilterC: false,
    rareFilterCR: false,
    rareFilterRRR: false,
    rareFilterCC: false,
    rareFilterPR: false,
    rareFilterTD: false,
    rareFilterSP: false,
    rareFilterN: false,
    rareFilterLRP: false,
    rareFilterSIR: false
  })

  // 等級升降變數
  const levelSortStatus = ref(false);

  // 顏色升降變數
  const colorSortStatus = ref(false);

  // 價格升降變數
  const priceSortStatus = ref(false);

  // 類型篩選變數
  const typeSortStatus = ref(false);

  // 等級篩選變數
  const levelFilterStatus = ref(false);

  // 顏色篩選變數
  const colorFilterStatus = ref(false);

  // 費用篩選變數
  const costFilterStatus = ref(false);

  // 魂傷篩選變數
  const soulFilterStatus = ref(false);

  // 攻擊力篩選變數
  const attackFilterStatus = ref(false);

  // 稀有度篩選變數
  const rareFilterStatus = ref(false);

  // AND按鈕切換
  const changeReplaceKeyWord = () => {
    if (filterVaribleSet.replaceKeyWord === true) {
      filterVaribleSet.replaceKeyWord = false;
    } else {
      filterVaribleSet.replaceKeyWord = true;
    }
    console.log("目前空格篩選狀態是:" + filterVaribleSet.replaceKeyWord);
  };

  // 篩選選項狀態切換
  const changeFilterStatus = (filterName) => {
    filterVaribleSet[filterName] = !filterVaribleSet[filterName];
  }

  // 升降排序篩選狀態切換
  const changeSortStatus = (sortName) => {
    if(sortName == 'level'){
      if(filterVaribleSet.levelUpSort === false){
        filterVaribleSet.levelUpSort = true;
        filterVaribleSet.levelDownSort = false;
      }else if(filterVaribleSet.levelDownSort === false){
        filterVaribleSet.levelDownSort = true;
        filterVaribleSet.levelUpSort = false;
      }
      console.log("levelUpSort:" + filterVaribleSet.levelUpSort);
      console.log("levelDownSort:" + filterVaribleSet.levelDownSort);
      
    }else if(sortName == 'color'){
      if(filterVaribleSet.colorUpSort === false){
        filterVaribleSet.colorUpSort = true;
        filterVaribleSet.colorDownSort = false;
      }else if(filterVaribleSet.colorDownSort === false){
        filterVaribleSet.colorDownSort = true;
        filterVaribleSet.colorUpSort = false;
      }
      console.log("colorUpSort:" + filterVaribleSet.colorUpSort);
      console.log("colorDownSort:" + filterVaribleSet.colorDownSort);
      
    }else if(sortName == 'price'){
      if(filterVaribleSet.priceUpSort === false){
        filterVaribleSet.priceUpSort = true;
        filterVaribleSet.priceDownSort = false;
      }else if(filterVaribleSet.priceDownSort === false){
        filterVaribleSet.priceDownSort = true;
        filterVaribleSet.priceUpSort = false;
      }
      console.log("priceUpSort:" + filterVaribleSet.priceUpSort);
      console.log("priceDownSort:" + filterVaribleSet.priceDownSort);
    }
  }

  // 重置部分篩選
  const resetFilter = (filterArr) => {
    console.log(filterArr);
    filterArr.forEach((item) => {
      filterVaribleSet[item] = false;
    })
    console.log("已重置該部分篩選");
  };

  // 重置全部篩選
  const resetAllFilter = async() => {
    Object.keys(filterVaribleSet).forEach((item) => {
      filterVaribleSet[item] = false;
    })
    await getLastViewSeries()
    console.log("已重置所有篩選");
  }

  // 篩選功能
  const useFilters = async(keyWord) => {
    newSeriesCardList.value = [];
    seriesCardList.value = [];
    await getLastViewSeries()

    // seriesCardList是目前的系列所有的卡片，newSeriesCardList是篩選後的卡片
    newSeriesCardList.value = seriesCardList.value;
    // console.log("舊陣列：" + seriesCardList.value + "新陣列：" + newSeriesCardList.value);

    // 測試下面寫的篩選相關function能不能正常使用
    if (keyWord != "") {
      keyWordFilter(keyWord);
    }
    // levelSort();
    // colorSort();
    // priceSort();
    typeSort();
    
    if(filterVaribleSet.levelFilter0 || filterVaribleSet.levelFilter1 || filterVaribleSet.levelFilter2 || filterVaribleSet.levelFilter3){
      levelFilter();
      console.log("已執行等級篩選");
    }

    if(filterVaribleSet.colorFilterRed || filterVaribleSet.colorFilterBlue || filterVaribleSet.colorFilterYellow){
      colorFilter();
      console.log("已執行顏色篩選");
    }
    
    if(filterVaribleSet.costFilter0 || filterVaribleSet.costFilter1 || filterVaribleSet.costFilter2){
      costFilter();
      console.log("已執行花費篩選");
    }

    if(filterVaribleSet.soulFilter0 || filterVaribleSet.soulFilter1 || filterVaribleSet.soulFilter2){
      soulFilter();
      console.log("已執行魂傷篩選");
    }

    if(
      filterVaribleSet.attackFilter0 || 
      filterVaribleSet.attackFilter500 || 
      filterVaribleSet.attackFilter1000 || 
      filterVaribleSet.attackFilter1500 || 
      filterVaribleSet.attackFilter2000 || 
      filterVaribleSet.attackFilter2500 || 
      filterVaribleSet.attackFilter3000 || 
      filterVaribleSet.attackFilter3500 || 
      filterVaribleSet.attackFilter4000 || 
      filterVaribleSet.attackFilter4500 ||
      filterVaribleSet.attackFilter5000 ||
      filterVaribleSet.attackFilter5500 ||
      filterVaribleSet.attackFilter6000 ||
      filterVaribleSet.attackFilter6500 ||
      filterVaribleSet.attackFilter7000 ||
      filterVaribleSet.attackFilter7500 ||
      filterVaribleSet.attackFilter8000 ||
      filterVaribleSet.attackFilter8500 ||
      filterVaribleSet.attackFilter9000 ||
      filterVaribleSet.attackFilter9500 ||
      filterVaribleSet.attackFilter10000 ||
      filterVaribleSet.attackFilter10500 ||
      filterVaribleSet.attackFilter11000
    ){
      attackFilter();
      console.log("已執行攻擊力篩選");
    }

    if(
      filterVaribleSet.rareFilterRR ||
      filterVaribleSet.rareFilterSSP ||
      filterVaribleSet.rareFilterLRR ||
      filterVaribleSet.rareFilterR ||
      filterVaribleSet.rareFilterSR ||
      filterVaribleSet.rareFilterOFR ||
      filterVaribleSet.rareFilterU ||
      filterVaribleSet.rareFilterC ||
      filterVaribleSet.rareFilterCR ||
      filterVaribleSet.rareFilterRRR ||
      filterVaribleSet.rareFilterCC ||
      filterVaribleSet.rareFilterPR ||
      filterVaribleSet.rareFilterTD ||
      filterVaribleSet.rareFilterSP ||
      filterVaribleSet.rareFilterN ||
      filterVaribleSet.rareFilterLRP ||
      filterVaribleSet.rareFilterSIR
    ){
      rareFilter();
      console.log("已執行稀有度篩選");
    }

    // 篩選完後把新的陣列賦值給seriesCardList
    seriesCardList.value = newSeriesCardList.value;
  };

  // 關鍵字搜尋
  const keyWordFilter = (keyWord) => {
    console.log(keyWord);
    console.log("關鍵字搜尋開始");
    const keyWordArray = ref([]);
    if (filterVaribleSet.replaceKeyWord === false) {
      keyWordArray.value = [keyWord];
    } else if (filterVaribleSet.replaceKeyWord === true) {
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
    if (filterVaribleSet.levelDownSort === true) {
      for (let i = maxLevel; i > 0; i--) {
        newSeriesCardList.value.forEach((card) => {
          if (card.level === i) {
            levelSortArr.value.push(card);
          }
        });
      }
    } else if (filterVaribleSet.levelUpSort === true) {
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
    if (filterVaribleSet.colorDownSort === true) {
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

    if (filterVaribleSet.priceUpSort === true) {
      for (let i = 0; i < newPriceArr.value.length; i++) {
        const filtedArr = newSeriesCardList.value.filter((card) => {
          return card.price.number === newPriceArr.value[i];
        });
        priceSortArr.value.unshift(...filtedArr);
      }
    } else if (filterVaribleSet.priceDownSort === true) {
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
    if (filterVaribleSet.typeCharacter) {
      newSeriesCardList.value.forEach((card) => {
        if (card.typeTranslate === "角色") {
          const checkHaveCard = typeSortArr.value.find((item) => {
            return item === card;
          });
          if (!checkHaveCard) {
            typeSortArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.typeScene) {
      newSeriesCardList.value.forEach((card) => {
        if (card.typeTranslate === "名場") {
          const checkHaveCard = typeSortArr.value.find((item) => {
            return item === card;
          });
          if (!checkHaveCard) {
            typeSortArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.typeEvent) {
      newSeriesCardList.value.forEach((card) => {
        if (card.typeTranslate === "事件") {
          const checkHaveCard = typeSortArr.value.find((item) => {
            return item === card;
          });
          if (!checkHaveCard) {
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
    if (filterVaribleSet.levelFilter0) {
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
    if (filterVaribleSet.levelFilter1) {
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
    if (filterVaribleSet.levelFilter2) {
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
    if (filterVaribleSet.levelFilter3) {
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
    if (filterVaribleSet.colorFilterRed) {
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
    if (filterVaribleSet.colorFilterBlue) {
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
    if (filterVaribleSet.colorFilterYellow) {
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
    if (filterVaribleSet.costFilter0) {
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
    if (filterVaribleSet.costFilter1) {
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
    if (filterVaribleSet.costFilter2) {
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
    if (filterVaribleSet.soulFilter0) {
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
    if (filterVaribleSet.soulFilter1) {
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
    if (filterVaribleSet.soulFilter2) {
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
    if (filterVaribleSet.attackFilter0) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 0) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter500) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter1000) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 1000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter1500) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 1500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter2000) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 2000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter2500) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 2500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter3000) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 3000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter3500) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 3500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter4000) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 4000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter4500) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 4500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter5000) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 5000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter5500) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 5500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter6000) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 6000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter6500) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 6500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter7000) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 7000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter7500) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 7500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter8000) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 8000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter8500) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 8500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter9000) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 9000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter9500) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 9500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter10000) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 10000) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter10500) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 10500) {
          const checkHaveCard = attackFilterArr.value.find((item) => {
            return item === card;
          });
          if (checkHaveCard === undefined) {
            attackFilterArr.value.push(card);
          }
        }
      });
    }
    if (filterVaribleSet.attackFilter11000) {
      newSeriesCardList.value.forEach((card) => {
        if (card.attack == 11000) {
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
    if (filterVaribleSet.rareFilterRR) { 
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
    
    if (filterVaribleSet.rareFilterSSP) { 
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
    
    if (filterVaribleSet.rareFilterLRR) { 
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
    
    if (filterVaribleSet.rareFilterR) { 
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
    
    if (filterVaribleSet.rareFilterSR) { 
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
    
    if (filterVaribleSet.rareFilterOFR) { 
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
    
    if (filterVaribleSet.rareFilterU) { 
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
    
    if (filterVaribleSet.rareFilterC) { 
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
    
    if (filterVaribleSet.rareFilterCR) { 
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
    
    if (filterVaribleSet.rareFilterRRR) { 
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
    
    if (filterVaribleSet.rareFilterCC) { 
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
    
    if (filterVaribleSet.rareFilterPR) { 
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
    
    if (filterVaribleSet.rareFilterTD) { 
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
    
    if (filterVaribleSet.rareFilterSP) { 
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
    
    if (filterVaribleSet.rareFilterN) { 
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
    
    if (filterVaribleSet.rareFilterLRP) { 
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
    
    if (filterVaribleSet.rareFilterSIR) { 
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
    filterVaribleSet,
    changeFilterStatus,
    resetFilter,
    changeSortStatus,
    resetAllFilter
  };
});
