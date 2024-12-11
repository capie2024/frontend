<script setup>
import { ref, onMounted } from 'vue';
import MainPage from '../components/MainPage.vue';
import SidebarGrid from '../components/SidebarGrid.vue';
import LoginHomepage from '../components/LoginHomepage.vue';

const isLoggedIn = ref(false);

const checkStatus = () => {
  if (localStorage.getItem("token")) {
    isLoggedIn.value = true;
  }
};

onMounted(() => {
  checkStatus();
});
</script>

<template>
    <LoginHomepage v-if="isLoggedIn" />
    <MainPage v-else />
</template>