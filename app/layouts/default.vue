<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen fixed ">
    <div
      class="fixed left-0 top-0 w-screen h-dvh flex flex-col overflow-y-auto
         bg-gradient-to-br
         from-[#4d0707] via-[#1b0f29] to-[#5d4528]
         dark:from-[#beafaf] dark:via-[#74629e] dark:to-[#9c8e87]"
    >
      <div
        class="w-full absolute inset-x-0 -top-40 transform-gpu overflow-visible blur-3xl sm:-top-20 opacity-60 z-[-1]"
        aria-hidden="true"
      >
        <div
          class="relative aspect-1155/678 w-[720px] -translate-x-1/2 rotate-30 bg-gradient-to-tr
             from-[#C19A6B] via-[#5A3E7A] to-[#B22222]
             opacity-20 sm:right-[calc(50%-60rem)] sm:w-[1403px]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
        <div
          class="absolute inset-x-0 -top-40 transform-gpu overflow-visible blur-3xl sm:-top-20"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%-11rem)] aspect-1155/678 w-[720px] -translate-x-1/2 rotate-30 bg-gradient-to-tr
               from-[#C19A6B] via-[#A37445] to-[#B22222]
               opacity-15 sm:left-[calc(50%-30rem)] sm:w-[1155px]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          />
        </div>
      </div>
      <AppHeader class="sticky top-0 z-40 bg-transparent backdrop-blur-sm" />
      <NuxtPage />
      <AppFooter class="bottom-0 z-40 bg-transparent backdrop-blur-sm " />
    </div>
  </div>
</template>
