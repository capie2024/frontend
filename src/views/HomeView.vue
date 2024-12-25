<script setup>
import { ref, onMounted } from 'vue'
import MainPage from '../components/MainPage.vue'
import SidebarGrid from '../components/SidebarGrid.vue'
import LoginHomepage from '../components/LoginHomepage.vue'

const isLoggedIn = ref(false)

const checkStatus = () => {
  if (localStorage.getItem('token')) {
    isLoggedIn.value = true
  }
}

onMounted(() => {
  checkStatus()
})
</script>

<template>
  <div class="overflow-hidden bg-black root-container">
    <SidebarGrid />
    <LoginHomepage v-if="isLoggedIn" />
    <MainPage v-else />
  </div>
</template>

<style scoped>
.root-container {
  display: grid;
  grid-template-columns: 270px 1fr;
  grid-template-rows: 4rem 1fr;
  grid-template-areas:
    'sidebar main'
    'sidebar main';
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
}
</style>
