<script setup>
const API_URL = import.meta.env.VITE_API_URL; 
const redirectToGoogleAuth = () => {
  // this will redirect to the google auth page
  window.location.href = `${API_URL}/auth/google`;
}
</script>

<template>
    <button type="button" @click="redirectToGoogleAuth" class="flex items-center w-full gap-2 p-2 bg-white border shadow rounded-2xl cursor-pointer">
        <img src="../img/google-icon.png" class="flex-none size-7">
        <span class="block w-full text-center"> Sign in with Google</span>
    </button>
  <!-- <div id="google-sign-in-button"></div> -->
</template>

<style scoped>
@import '@/assets/base.css';
</style>