<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <nav>
    <RouterLink to="/card-info">Card Info</RouterLink>
  </nav>

  <RouterView />
</template>

