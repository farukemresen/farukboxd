<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToType = (type: 'movie' | 'tv') => {
  router.push(`/${type}`)
}
</script>

<template>
  <header class="flex items-center justify-center gap-6 py-4">
    <UButton
      size="xl"
      color="warning"
      variant="outline"
      @click="router.push('/')"
    >
      Anasayfa
    </UButton>
    <UButton
      size="xl"
     color="warning"
      variant="outline"
      @click="goToType('movie')"
    >
      Filmler
    </UButton>
    <UButton
      size="xl"
      color="warning"
      variant="outline"
      @click="goToType('tv')"
    >
      Diziler
    </UButton>
  </header>
</template>
