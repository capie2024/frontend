<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!-- <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <nav>
    <RouterLink to="/card-info">Card Info</RouterLink>
    <RouterLink to="/work-shop">Work Shop</RouterLink>
<<<<<<< HEAD
    <!-- <RouterLink to="/hero-member">Hero Member</RouterLink> -->
  </nav>
=======
    <RouterLink to="/hero-member">Hero Member</RouterLink>
    <RouterLink to="/OfficialProductList">OfficialProductList</RouterLink>
    <RouterLink to="/Card-List-by-Series">Card List by Series</RouterLink>
    <RouterLink to="/daily-card">Daily Card</RouterLink>
    <RouterLink to="/login-homepage">login homepage</RouterLink>
  </nav> -->
>>>>>>> 7a266cfce8cc459dfd15f8a6918c2d8b0496a652

  <RouterView />
</template>

<style scoped>
/* body{
  width: 100vw;
} */

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
