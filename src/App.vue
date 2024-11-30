<script setup>
import { RouterLink, RouterView } from "vue-router";
import CardInfo from "@/views/CardInfo.vue";
import { storeToRefs } from "pinia";
import { useCardInfoStore } from "@/stores/card-info";

const cardInfoStore = useCardInfoStore();
const { cardInfoDisplay } = storeToRefs(cardInfoStore);
</script>

<template>
  <RouterView />
  <!-- <CardInfo v-if="cardInfoDisplay" /> -->
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
