<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <nav>
    <RouterLink to="/card-info">Card Info</RouterLink>
    <RouterLink to="/work-shop">Work Shop</RouterLink>
    <!-- <RouterLink to="/hero-member">Hero Member</RouterLink> -->
  </nav>

  <RouterView />
</template>

<style scoped>
a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 0 4px;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
</style>
