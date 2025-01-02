<script setup>
import { onMounted } from 'vue'
import initCardEffect from '@/assets/js/cardEffect.js'

onMounted(async () => {
  initCardEffect()
})
</script>
<template>
  <div
    class="relative min-w-full p-0 card-wrapper rounded-2xl sm:w-4/12 sm:m-0 xs:w-3/4 xs:m-auto"
  >
    <div class="card max-w-full h-full">
      <div
        class="absolute top-0 left-0 w-full h-full glossy rounded-2xl z-2 mix-blend-lighten"
      ></div>
      <slot
        class="flex-none object-cover w-full min-w-0 shadow-lg select-none rounded-card aspect-card default-transition bg-image"
      ></slot>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/base.css';

.card-wrapper {
  perspective: 1000px;
}

.card {
  transition: transform 0.05s ease;
  transform-style: preserve-3d;
}

.glossy {
  transition: 0.3s;
}
</style>
