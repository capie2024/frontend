<script setup>
const BASE_URL = import.meta.env.VITE_BASE_URL

const footerData = [
  {
    title: '簡介',
    linkText: ['關於我們', '與我聯絡', 'Weiβ Schwarz'],
    url: ['', `${BASE_URL}/contact`, 'https://ws-tcg.com/'],
  },
  {
    title: '資源',
    linkText: ['遊々亭價格', '基本規則', '禁卡表'],
    url: [
      'https://yuyu-tei.jp/',
      'https://ws-tcg.com/rules/',
      'https://ws-tcg.com/rules/deck_rule/',
    ],
  },
  {
    title: '常用連結',
    linkText: ['卡片問答集', '我的專頁', '英雄榜'],
    url: ['', `${BASE_URL}/login`, `${BASE_URL}/hero-member`],
  },
]
</script>

<template>
  <div class="main-footer">
    <div class="main-footer-flexbox">
      <div class="main-footer-flexbox-left">
        <ul class="main-footer-flexbox-left-item" v-for="item in footerData">
          <li class="main-footer-flexbox-left-item-title">
            {{ item.title }}
          </li>
          <li
            class="main-footer-flexbox-left-item-link"
            v-for="(link, index) in item.linkText"
            :key="index"
          >
            <a
              class="main-footer-flexbox-left-item-link-text"
              :href="item.url[index]"
            >
              {{ link }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr class="main-footer-hr" />
    <div class="main-footer-copyright">
      <ul class="main-footer-copyright-left">
        <li class="main-footer-copyright-left-item">
          <a href="#">感謝貓罐子 BottleNeko 遊戲卡牌網站</a>
        </li>
      </ul>
      <div class="main-footer-copyright-right">
        <span>卡片資料來源 Weiβ Schwarz.</span>
        <span>Copyright @ 2024 Capie</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/css/footer/main-footer-rwd.css';

.main-footer {
  max-width: 100%;
  padding: 80px 32px 64px;
  box-sizing: border-box;
  background-color: #121212;
}

.main-footer-flexbox {
  width: 100%;
  display: flex;
}

.main-footer-flexbox-left {
  width: 100%;
  display: flex;
  gap: 1rem;
}

.main-footer-flexbox-left-item {
  list-style: none;
  margin-top: 16px;
  width: 160px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.main-footer-flexbox-left-item-title {
  width: 100%;
  color: white;
  line-height: 24px;
}

.main-footer-flexbox-left-item-link {
  width: 100%;
  line-height: 24px;
}

.main-footer-flexbox-left-item-link-text {
  display: inline-block;
  width: 100%;
  text-decoration: none;
  color: #6d6d76;
}

.main-footer-flexbox-left-item-link-text:hover {
  color: white;
}

.main-footer-flexbox-right {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
}

.main-footer-flexbox-right-group {
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.main-footer-flexbox-right-item {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  color: #d4d4d8;
  text-decoration: none;
}

.main-footer-flexbox-right-item:hover span {
  cursor: pointer;
  color: white;
}

.main-footer-flexbox-right-item-icon {
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  color: #d4d4d8;
  font-size: 20px;
}

.main-footer-flexbox-right-item-text {
  color: #d4d4d8;
  font-size: 20px;
  line-height: 28px;
}

.main-footer-flexbox-right-icon-list {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.main-footer-flexbox-right-icon-list a {
  display: inline-block;
  width: 40px;
  height: 40px;
  color: white;
  font-size: 24px;
  border-radius: 50%;
  background-color: #3f3f46;
  text-align: center;
  line-height: 40px;
}

.main-footer-flexbox-right-icon-list a:hover {
  background-color: #5b5b64;
}

.main-footer-hr {
  border: none;
  border-top: 1px solid #3f3f46;
  margin: 16px 0px;
}

.main-footer-copyright {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-footer-copyright-left {
  display: flex;
  gap: 1rem;
  list-style: none;
}

.main-footer-copyright-left-item {
  width: 100%;
  text-wrap: nowrap;
}

.main-footer-copyright-left-item a {
  text-decoration: none;
  color: #6d6d76;
  width: 100%;
}

.main-footer-copyright-right {
  color: #6d6d76;
  font-size: 14px;
}

.main-footer-copyright-right span {
  line-height: 20px;
}

.text-color-red {
  color: #941816;
}

.text-color-red:hover {
  color: red;
}
</style>
