<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import notice from './notification/Notice.vue'
import NavLoginBtn from './NavLoginBtn.vue'
import MainFooter from './MainFooter.vue'
const BASE_URL = import.meta.env.VITE_BASE_URL
const API_DATA = async () => {
  try {
    const response = await axios.get('/api/topics')
    const apiData = response.data // API 返回的資料

    // 分別處理 topics 和 videos 資料
    const topics = apiData.find((item) => item.title === 'topics')
    const videos = apiData.find((item) => item.title === 'videos')
    const latest = apiData.find((item) => item.title === '最新商品')

    // 處理 topics 資料
    if (topics) {
      items.value.topics = topics.items.map((item) => ({
        ...item.data, // 解構出每個 topic 的資料
        title: formatValue(item.data.title),
        link: formatValue(item.data.link),
        cover: formatValue(item.data.cover),
      }))
    }

    // 處理 videos 資料
    if (videos) {
      items.value.videos = videos.items.map((item) => ({
        ...item.data, // 解構出每個 video 的資料
        title: formatValue(item.data.title),
        ytId: formatValue(item.data.ytId),
        publishAt: formatDate(item.data.publishAt),
        authorName: formatValue(item.data.author?.name),
        authorHead: formatValue(item.data.author?.head),
      }))
    }

    // 處理最新商品資料
    if (latest) {
      items.value.latestProducts = latest.items.map((item) => ({
        cover: formatValue(item.data.cover),
        name: formatValue(item.data.name),
        description: formatValue(item.data.description),
        link: formatValue(item.data.link),
        publishAt: formatDate(item.data.publishAt),
      }))
    }

    // 新增 /api/series 的請求
    const seriesResponse = await axios.get('/api/series')
    const seriesData = seriesResponse.data
    items.value.series = seriesData.map((series) => ({
      id: formatValue(series.id),
      name: formatValue(series.name),
      cover: series.cover || 'https://bottleneko.app/images/cover.png',
      sellAt: formatDate(series.sell),
      code: formatValue(series.code.join(', ')),
    }))
  } catch (err) {
    console.error('獲取資料失敗:', err.message)
  }
}
const items = ref({ topics: [], videos: [], latestProducts: [], series: [] })

// 格式化資料函數，避免顯示 null 或 undefined
const formatValue = (value, defaultValue = '無資料') => {
  return value !== null && value !== undefined ? value : defaultValue
}

// 格式化日期函數
const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date instanceof Date && !isNaN(date)
    ? date.toLocaleDateString()
    : '無發布日期'
}

onMounted(async () => {
  await API_DATA()
  import('@/assets/js/login-homepage/css-control.js')
  import('@/assets/js/login-homepage/swiper')
  import('@/assets/js/login-homepage/fancybox')
})
</script>

<template>
  <div class="All">
    <!-- <SidebarGrid /> -->
    <div class="container">
      <!-- 通知與登入 -->
      <div class="icons">
        <div class="search-bar">
          <div class="search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <input
            type="text"
            class="search-bar-input search-bar-input-hidden"
            placeholder="我想找找...?"
          />
          <div class="xmark-icon xmark-icon-hidden">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div class="icon">
          <notice />
        </div>
        <div class="login" id="login">
          <NavLoginBtn />
        </div>
      </div>
    </div>

    <div class="aa">
      <div class="card1">
        <!-- first swiper -->
        <div class="swiper first-swiper-container">
          <div
            class="swiper-wrapper first-swiper-wrapper"
            id=""
            v-if="items.topics.length"
          >
            <div
              class="swiper-slide first-swiper-slide"
              v-for="(item, index) in items.topics"
              :key="index"
            >
              <a href="#">
                <img :src="item.cover" :alt="item.title" />
                <p>{{ item.title }}</p>
              </a>
            </div>
          </div>
        </div>
        <!-- first swiper -->
      </div>
      <h2 class="title">
        每日卡
        <a :href="`${BASE_URL}/daily-card`" class="title-a">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            class="size-5 stroke-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            ></path>
          </svg>
          <span class="text">回顧歷史紀錄</span>
        </a>
      </h2>
      <div class="card2">
        <h2>プレミアムブースター リコリス・リコイル</h2>
        <span class="card2-top-span">▼2024/11/15（金）発売</span>

        <!-- second swiper -->
        <div class="swiper second-swiper-container">
          <div class="swiper-wrapper second-swiper-wrapper">
            <div class="swiper-slide second-swiper-slide">
              <a
                href="#"
                data-fancybox="card-list"
                data-src="./src/assets/img/login-homepage/default-card/20241114_yt01.png"
                data-caption="ブースターパック 「Re:ゼロから始める異世界生活」Vol.3 - ▼2024/11/22（金）発売"
              >
                <img
                  src="@/assets/img/login-homepage/default-card/20241114_yt01.png"
                  alt=""
                />
              </a>
            </div>
            <div class="swiper-slide second-swiper-slide">
              <a
                href="#"
                data-fancybox="card-list"
                data-src="./src/assets/img/login-homepage/default-card/20241114_yt02.png"
                data-caption="ブースターパック 「Re:ゼロから始める異世界生活」Vol.3 - ▼2024/11/22（金）発売"
              >
                <img
                  src="@/assets/img/login-homepage/default-card/20241114_yt02.png"
                  alt=""
                />
              </a>
            </div>
            <div class="swiper-slide second-swiper-slide">
              <a
                href="#"
                data-fancybox="card-list"
                data-src="./src/assets/img/login-homepage/default-card/20241114_yt03.png"
                data-caption="ブースターパック 「Re:ゼロから始める異世界生活」Vol.3 - ▼2024/11/22（金）発売"
              >
                <img
                  src="@/assets/img/login-homepage/default-card/20241114_yt03.png"
                  alt=""
                />
              </a>
            </div>
            <div class="swiper-slide second-swiper-slide">
              <a
                href="#"
                data-fancybox="card-list"
                data-src="./src/assets/img/login-homepage/default-card/20241114_yt04.png"
                data-caption="ブースターパック 「Re:ゼロから始める異世界生活」Vol.3 - ▼2024/11/22（金）発売"
              >
                <img
                  src="@/assets/img/login-homepage/default-card/20241114_yt04.png"
                  alt=""
                />
              </a>
            </div>
            <div class="swiper-slide second-swiper-slide">
              <a
                href="#"
                data-fancybox="card-list"
                data-src="./src/assets/img/login-homepage/default-card/20241114_yt05.png"
                data-caption="プレミアムブースター リコリス・リコイル - ▼2024/11/15（金）発売"
              >
                <img
                  src="@/assets/img/login-homepage/default-card/20241114_yt05.png"
                  alt=""
                />
              </a>
            </div>
            <div class="swiper-slide second-swiper-slide">
              <a
                href="#"
                data-fancybox="card-list"
                data-src="./src/assets/img/login-homepage/default-card/20241114_yt06.png"
                data-caption="プレミアムブースター リコリス・リコイル - ▼2024/11/15（金）発売"
              >
                <img
                  src="@/assets/img/login-homepage/default-card/20241114_yt06.png"
                  alt=""
                />
              </a>
            </div>
            <div class="swiper-slide second-swiper-slide">
              <a
                href="#"
                data-fancybox="card-list"
                data-src="./src/assets/img/login-homepage/default-card/20241114_yt07.png"
                data-caption="プレミアムブースター リコリス・リコイル - ▼2024/11/15（金）発売"
              >
                <img
                  src="@/assets/img/login-homepage/default-card/20241114_yt07.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <!-- second swiper -->

        <span class="card2-bottom-span">2024-11-14</span>
      </div>
      <h2 class="title">發燒影片</h2>
      <div class="card3">
        <!-- third swiper -->
        <div class="swiper third-swiper-container">
          <div class="swiper-wrapper third-swiper-wrapper">
            <div
              class="swiper-slide third-swiper-slide"
              v-for="(video, index) in items.videos"
              :key="index"
            >
              <a :href="'https://www.youtube.com/watch?v=' + video.ytId">
                <div class="third-swiper-slide-content">
                  <div class="third-swiper-slide-content-img">
                    <img
                      src="@/assets/img/login-homepage/新手教學.png"
                      alt=""
                    />
                  </div>
                  <div class="third-swiper-slide-content-info">
                    <h2>{{ video.title || '無標題' }}</h2>
                    <div class="third-swiper-slide-content-info-text">
                      <img :src="video.author.head" alt="" />
                      <div class="third-swiper-slide-content-info-text-box">
                        <p>{{ video.author.name }}</p>
                        <p>{{ formatDate(video.publishAt) }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <!-- third swiper -->
      </div>
      <h2 class="title">
        <a :href="`${BASE_URL}/products`" class="title-a2">最新商品</a>
        <a :href="`${BASE_URL}/products`" class="title-a3">
          閱讀更多
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            ></path>
          </svg>
        </a>
      </h2>
      <section class="show-card">
        <a
          :href="product.link"
          class="url transition-colors"
          v-for="product in items.latestProducts"
          :key="product.name"
        >
          <div>
            <img :src="product.cover" alt="商品圖片" />
          </div>
          <div class="card-text">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                class="icon-size color-a1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
                ></path>
              </svg>
              <p class="color-a1">{{ product.publishAt }}</p>
            </div>
            <p class="font-size20 color-white padding-bottom">
              {{ product.name }}
            </p>
          </div>
        </a>
      </section>

      <h2 class="title">
        <a :href="`${BASE_URL}/series`" class="title-a2">卡片系列</a>
        <a :href="`${BASE_URL}/series`" class="title-a3">
          閱讀更多
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            ></path>
          </svg>
        </a>
      </h2>
      <section class="show-card">
        <a
          :href="`${BASE_URL}/card-series/${series.id}`"
          class="url transition-colors"
          v-for="series in items.series"
          :key="series.id"
        >
          <div>
            <img :src="series.cover" alt="series cover" />
          </div>
          <div class="card-text">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                class="icon-size flex-none color-a1"
              >
                <path
                  d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z"
                ></path>
                <path
                  d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z"
                ></path>
              </svg>
              <p class="color-a1">{{ series.code }}</p>
            </div>
            <p class="font-size20 color-white padding-bottom">
              {{ series.name }}
            </p>
            <p class="color-a1">{{ series.sellAt }}</p>
          </div>
        </a>
      </section>

      <MainFooter />
    </div>

    <!-- fix -->
    <!-- fix -->
  </div>
</template>

<style scoped>
@import '@/assets/css/login-homepage/Login Homepage.css';
</style>
