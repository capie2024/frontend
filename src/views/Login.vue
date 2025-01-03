<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import Swal from 'sweetalert2'
import GoogleLogin from '@/components/login/GoogleLogin.vue'
import SidebarGrid from '@/components/home/SidebarGrid.vue'
import notice from '@/components/notice/Notice.vue'
import NavLoginBtn from '@/components/login/NavLoginBtn.vue'

const router = useRouter()

const goBack = () => {
  router.go(-1)
}

const goSignup = () => {
  router.push({ name: 'signup' })
}

const goLogin = () => {
  router.push({ name: 'login' })
}

const email = ref('')
const password = ref('')

const API_URL = import.meta.env.VITE_API_URL

const submit = async () => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, {
      email: email.value,
      password: password.value,
    })

    // 後端驗證成功回傳 token
    const token = res.data.token || res.data.data?.token

    if (token) {
      localStorage.setItem('token', token)
      router.push({ name: 'user' })
    } else {
      // 如果沒有 token
      Swal.fire({
        icon: 'error',
        title: '登入失敗',
        text: '未能接收到驗證 token，請稍後重試',
        color: '#e1e1e1',
        background: '#27272a',
      })
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '登入失敗',
      text: error.response.data.message || '請檢查信箱密碼是否正確',
      color: '#e1e1e1',
      background: '#27272a',
    })
  }
}
</script>

<template>
  <div class="w-full h-full overflow-hidden bg-black root-container">
    <SidebarGrid />
    <div>
      <header class="z-10 h-16 md:mt-2 md:mr-2 header-bg md:rounded-t-2xl">
        <nav class="header-container">
          <button
            @click="goBack"
            class="flex-none p-1 text-white rounded-full bg-black/50 default-transition hover:bg-zinc-800/50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              ></path>
            </svg>
          </button>
          <!-- <button class="flex-none hidden p-1 text-white rounded-full md:block bg-black/50 default-transition hover:bg-zinc-800/50 disabled:opacity-30" disabled>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                        </svg>
                    </button> -->
          <div class="w-full min-w-0 text-lg font-bold text-white md:text-2xl">
            <h2 class="invisible text-2xl font-bold truncate">
              每日卡歷史回顧
            </h2>
          </div>
          <notice />
          <NavLoginBtn />
        </nav>
      </header>
      <div class="background">
        <main class="relative content-container bg-base z-1">
          <div class="h-full px-4 content scroll-smooth scrollbar md:px-6">
            <section class="grid w-full place-content-center">
              <form
                @submit.prevent="submit"
                class="flex flex-col items-center justify-center gap-4 p-4 shadow-lg rounded-xl"
              >
                <div class="flex items-center gap-2">
                  <img
                    src="../img/capie-icon.png"
                    alt=""
                    class="h-[5rem] w-[5rem] rounded-full"
                  />
                </div>
                <h3 class="text-2xl font-bold text-white">會員登入</h3>
                <div
                  class="flex items-center w-full gap-2 p-2 rounded-2xl bg-input"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    class="flex-none size-7 text-zinc-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    ></path>
                  </svg>
                  <input
                    id="email"
                    type="email"
                    placeholder="信箱"
                    v-model.trim="email"
                    class="w-full p-0 bg-transparent border-none focus:ring-0 placeholder:text-zinc-500"
                  />
                </div>
                <div
                  class="flex items-center w-full gap-2 p-2 rounded-2xl bg-input"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    class="flex-none size-7 text-zinc-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    ></path>
                  </svg>
                  <input
                    id="password"
                    type="password"
                    placeholder="密碼"
                    v-model.trim="password"
                    class="w-full p-0 bg-transparent border-none focus:ring-0 placeholder:text-zinc-500"
                  />
                </div>
                <div class="flex flex-col w-full gap-2">
                  <button
                    type="submit"
                    :disabled="!email || !password"
                    class="flex items-center justify-center w-full gap-2 p-2 text-white cursor-pointer rounded-2xl ring ring-white/50 hover:bg-white/90 hover:text-zinc-900"
                  >
                    登入
                  </button>
                  <button
                    class="flex items-center justify-center w-full gap-2 p-2 rounded-2xl text-cyan-500/50 hover:text-cyan-500"
                    @click="goSignup"
                  >
                    還沒有帳號？前往註冊
                  </button>
                </div>
                <hr class="w-full my-4 border border-zinc-700/50" />
                <GoogleLogin />
              </form>
            </section>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/base.css';

.root-container {
  display: grid;
  grid-template-columns: 270px 1fr;
  grid-template-rows: 4rem 1fr;
  grid-template-areas:
    'sidebar main'
    'sidebar main';
}

input:focus {
  outline: 2px solid transparent;
}

.default-transition {
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

header {
  width: calc(100% - 270px);
  position: fixed;
  top: 0;
  right: 0;
}

.header-container {
  height: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.background {
  height: calc(100vh - 1rem);
  width: calc(100% - 0.5rem);
  border-radius: 1rem;
  background-color: rgb(18, 18, 18);
  margin: 0.5rem 0.5rem 0.5rem 0;
}

.content-container {
  height: calc(100vh - 1rem);
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  /* overflow: hidden; */
}

.content {
  overflow: auto;
}

.scrollbar {
  &::-webkit-scrollbar {
    height: 0;
    width: 0;
  }
}

section {
  height: 100%;
}

section > form {
  width: 500px;
  background-color: rgb(24, 24, 27);
}

.bg-input {
  background-color: rgb(39, 39, 42);
  color: #fff;
}

.bg-input:focus-within {
  background-color: rgb(63, 63, 70);
}

@media screen and (width < 1200px) {
  .root-container {
    display: grid;
    grid-template-areas:
      'main'
      'main';
    grid-template-columns: 1fr;
    grid-template-rows: 4rem 1fr;
    height: 100vh;
  }

  header {
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
  }

  .background {
    width: 100%;
    margin: 0;
    border-radius: 0;
    background-color: #121212;
  }

  .content-container {
    padding-top: 0;
    height: 100vh;
  }

  section {
    height: 100vh;
    margin: auto;
  }
}

@media screen and (width < 768px) {
  body {
    background-color: #121212;
  }
  section > form {
    width: 100%;
    background-color: #121212;
  }
}
</style>
