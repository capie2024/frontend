<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import CardInfo from "@/views/CardInfo.vue";
import { storeToRefs } from "pinia";
import { useCardInfoStore } from "@/stores/card-info";

const cardInfoStore = useCardInfoStore();
const { cardInfoDisplay } = storeToRefs(cardInfoStore);
</script>

<template>
    <router-view />
    <CardInfo v-if="cardInfoDisplay" :key="cardInfoDisplay" />
</template>
