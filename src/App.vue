<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCardInfoStore } from '@/stores/card-info'
import CardInfo from '@/views/CardInfo.vue'
import DeckMake from '@/components/deck/DeckMake.vue'

import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const LoginPage = computed(() => route.name === 'login')
const SignupPage = computed(() => route.name === 'signup')
const FaqInfoPage = computed(() => route.name === 'FaqInfo')

const cardInfoStore = useCardInfoStore()
const { cardInfoDisplay } = storeToRefs(cardInfoStore)
</script>

<template>
  <router-view />
  <CardInfo v-if="cardInfoDisplay" />
  <DeckMake v-if="!LoginPage && !SignupPage && !FaqInfoPage" />
</template>
