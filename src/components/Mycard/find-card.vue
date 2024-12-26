<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'

const API_URL = import.meta.env.VITE_API_URL
const button = ref(true) // true 代表 "deck"，false 代表 "social"
const searchType = ref('') // 默認類型
const searchCode = ref('') // 用戶輸入的代碼
const error = ref(null) // 錯誤訊息
const modalSection = ref(null)

const changeBtn = (type) => {
  searchType.value = type
  button.value = type === 'deck' // true 表示 "deck"
}

const fetchAndNavigate = async () => {
  error.value = null // 清空錯誤訊息
  if (!searchCode.value.trim()) {
    error.value = '請輸入代碼！'
    return
  }

  try {
    const response = await fetch(
      `${API_URL}/api/search?${
        searchType.value === 'deck'
          ? `deckId=${searchCode.value}`
          : `post_code=${searchCode.value}`
      }`
    )
    const data = await response.json()

    if (response.ok) {
      const route =
        searchType.value === 'deck'
          ? `/deck/${data.data.deck_id}`
          : `/social/${data.data.post_code}`
      window.location.href = route // 替代 Vue Router
    } else {
      error.value = data.error || '未知錯誤'
    }
  } catch (err) {
    error.value = '伺服器連線失敗！'
  }
}
// 彈出確認框
const confirmClose = () => {
  Swal.fire({
    title: '確定要離開嗎？',
    text: '您的資料尚未完成，確定要離開嗎？',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '離開',
    cancelButtonText: '取消',
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      // 用戶確認離開，隱藏模態框
      if (modalSection.value) {
        modalSection.value.style.display = 'none'
      }
    }
  })
}

const hideModal = () => {
  const modalElement = document.querySelector('.modal')
  if (modalElement) {
    modalElement.style.display = 'none'
  }
}
</script>

<template>
  <section
    class="fixed top-0 left-0 w-screen h-screen z-[100] grid overflow-y-auto overflow-x-hidden md:overflow-hidden backdrop-blur place-content-center"
    ref="modalSection"
  >
    <div
      class="bg-base md:rounded-xl relative h-mobile-full overflow-auto flex flex-col w-[50vw]"
    >
      <header
        class="pt-4 px-4 sticky top-0 z-20 flex pb-2 bg-zinc-900 border-b border-zinc-800 items-center"
      >
        <h2 class="grow-1 w-full text-white" id="title">尋找牌組</h2>
        <div class="flex-none flex gap-2 justify-end">
          <button
            class="flex-none p-1 rounded-full bg-black/70 hover:bg-white hover:text-black text-white"
            @click="confirmClose"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </header>
      <div class="pane-content" id="content">
        <div
          class="h-full flex flex-col gap-2 pb-4 text-white divide-y divide-white/10 min-h-[20rem]"
          query="[object Object]"
        >
          <section class="mb-4">
            <h3 class="topic my-4">
              選擇來源 <br />
              <span class="subtitle">選擇你的牌組代碼來源</span>
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-2 gap-2">
              <button
                @click="changeBtn('deck')"
                :class="searchType === 'deck' ? 'active' : 'dimmed'"
                class="item default-transition active button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  class="icon size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  ></path>
                </svg>
                <span>牌組</span>
              </button>
              <button
                @click="changeBtn('social')"
                :class="searchType === 'social' ? 'active' : 'dimmed'"
                class="item default-transition button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  class="icon size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                  ></path>
                </svg>
                <span>社群</span>
              </button>
            </div>
          </section>
          <section class="mb-4">
            <h3 class="topic my-4">輸入代碼</h3>
            <div class="grid grid-cols-1 gap-2">
              <div class="item default-transition">
                <input
                  class="custom-input w-full p-0 bg-transparent placeholder:text-zinc-500"
                  type="text"
                  placeholder="代碼"
                  v-model="searchCode"
                />
              </div>
              <p v-if="error" class="text-red-500 text-sm mt-2">{{ error }}</p>
            </div>
            <div class="mt-8 flex justify-center">
              <button
                class="item md:!w-[20rem] justify-center default-transition gray"
                @click="fetchAndNavigate"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  class="icon size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  ></path>
                </svg>
                <span> 設定完成 </span>
              </button>
            </div>
          </section>
        </div>
      </div>
      <footer class="mt-auto w-full pb-4"></footer>
    </div>
  </section>
</template>

<style scoped>
@import '@/assets/base.css';

#title {
  justify-content: left;
}

#content {
  justify-content: flex-start;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
}

.subtitle {
  color: rgb(161 161 170);
  display: block;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  margin-top: 5px;
}
.custom-input:focus-visible {
  border-color: transparent !important;
  outline: none;
}

.item {
  align-items: center;
  border-radius: 0.75rem;
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  border: 2px solid #27272a;
  background-color: #151516;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.item.active {
  background-color: #13aadd; /* 選中時的背景顏色 */
  color: white; /* 選中時的文字顏色 */
  border-color: white; /* 選中時的邊框顏色 */
}

.item.dimmed {
  background-color: #27272a; /* 未選中時的背景顏色 */
  color: rgb(161, 161, 170); /* 未選中時的文字顏色 */
  border-color: #27272a; /* 未選中時的邊框顏色 */
}

.gray:hover {
  background-color: #27272a;
}

.backdrop-blur {
  --tw-backdrop-blur: blur(8px);
}

.bg-base {
  background-color: #121212;
}

.card {
  background-color: #13aadd;
}
</style>
