<script setup lang="ts">
import type { MediaType } from '~/types'

const props = defineProps<{
  title: string
  items: {
    src: string
    title: string
    id: string | number
    type: MediaType
  }[]
  onItemClick: (item: { id: string | number, type: MediaType }) => void
}>()
</script>

<template>
  <section class="mt-10">
    <h2 class="text-xl font-bold mb-4">
      {{ props.title }}
    </h2>
    <div
      class="flex space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-gray-200"
      tabindex="0"
      role="list"
      aria-label="Media items"
    >
      <div
        v-for="item in props.items"
        :key="item.id"
        class="flex-shrink-0 cursor-pointer
               min-w-[140px] max-w-[180px]
               sm:min-w-[160px] sm:max-w-[200px]
               md:min-w-[180px] md:max-w-[220px]
               lg:min-w-[200px] lg:max-w-[240px]"
        role="listitem"
        tabindex="-1"
        @click="props.onItemClick(item)"
      >
        <img
          :src="item.src"
          alt=""
          class="w-full h-48 object-cover rounded-lg shadow-md"
          loading="lazy"
        >
        <p class="mt-2 text-center text-sm font-semibold truncate" :title="item.title">
          {{ item.title }}
        </p>
      </div>
    </div>
  </section>
</template>
