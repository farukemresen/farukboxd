<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goToType(type: 'movie' | 'tv') {
  router.push({
    name: 'type',
    params: { type },
  })
}
</script>

<template>
  <header class="flex items-center justify-between flex-wrap gap-y-4 px-4 py-4">
    <div class="flex-shrink-0">
      <img src="/logo3.gif" alt="Logo" class="h-20 w-auto">
    </div>
    <div class="flex flex-wrap justify-center gap-6 mx-auto">
      <UButton
        size="xl"
        color="warning"
        variant="outline"
        icon="i-lucide-home"
        class="w-12 justify-center hover:scale-105 transition-all"
        @click="router.push('/')"
      />
      <UButton
        size="xl"
        color="warning"
        variant="outline"
        icon="i-lucide-film"
        class="w-12 justify-center hover:scale-105 transition-all"
        @click="goToType('movie')"
      />
      <UButton
        size="xl"
        color="warning"
        variant="outline"
        icon="i-lucide-tv"
        class="w-12 justify-center hover:scale-105 transition-all"
        @click="goToType('tv')"
      />
    </div>
    <div class="flex-shrink-0">
      <USwitch
        color="warning"
        checked-icon="i-heroicons-sun"
        unchecked-icon="i-heroicons-moon"
        size="lg"
        variant="solid"
        class="hover:scale-110 transition-all"
        @click="toggleTheme"
      />
    </div>
  </header>
</template>
