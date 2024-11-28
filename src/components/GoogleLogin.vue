<script setup>
import { onMounted } from 'vue';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api'

const loadGoogleScript = () => {
  return new Promise((resolve, reject) => {
    if (document.getElementById('google-client-script')) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.id = 'google-client-script';
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

// 定義解析 JWT 的函數
const parseJwt = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  );

  return JSON.parse(jsonPayload);
};

// 定義處理認證回應的函數
const handleCredentialResponse = (response) => {
  const data = parseJwt(response.credential);
  console.log('response:', response);
  console.log('Google 使用者資料：', data);
  // 處理登入資料，發送到後端進行驗證
  const user = axios.post(`${API_URL}/auth/google`, { token: response.credential })
        .then(res => {
          console.log('用户已認證');
        })
        .catch(err => {
          console.error('認證失敗', err);
        });
  
  return user;
};

onMounted(async () => {
    try {
        await loadGoogleScript();
        // 初始化 Google 身份驗證
        window.google.accounts.id.initialize({
          client_id: '1056158717143-bkprq0lqqml2fjegt3offmbtqhgutu6s.apps.googleusercontent.com', // YOUR_GOOGLE_CLIENT_ID
          callback: handleCredentialResponse,
        });

        // 渲染 Google 登入按钮
        document
            .getElementById('custom-google-button')
            .addEventListener('click', () => {
              window.google.accounts.id.prompt(); // 顯示 One Tap 提示框或进行登入操作
            });
    } catch (error) {
      console.error('加載 Google 腳本失敗', error);
    }

    // 可選：自動提示
    window.google.accounts.id.prompt();
});
</script>

<template>
    <button type="button" id="custom-google-button" class="flex items-center w-full gap-2 p-2 bg-white border shadow rounded-2xl">
        <img src="../img/google-icon.png" class="flex-none size-7">
        <span class="block w-full text-center"> Sign in with Google</span>
    </button>
</template>

<style scoped>
@import '@/assets/base.css';
</style>