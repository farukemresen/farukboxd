<script setup lang="ts">
</script>

<template>
  <div class="min-h-dvh bg-white dark:bg-neutral-900">
    <USwitch
      color="secondary"
      checked-icon="i-heroicons-sun"
      unchecked-icon="i-heroicons-moon"
      variant="ghost"
      class="hover:scale-110 transition-all absolute top-4 right-4 z-50 flex items-center gap-2"
      @click="toggleTheme"
    />
    <div class="text-neutral-900 dark:text-white">
      <AppHeader />
    </div>
    <NuxtPage />
  </div>
</template>
