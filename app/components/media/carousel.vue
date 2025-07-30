<script setup lang="ts">
import type { MediaType } from '~/types'

const props = defineProps<{
  title: string
  items: {
    src: string
    title: string
    id: string | number
    vote_average: number
    type: MediaType
  }[]
  onItemClick: (item: { id: string | number, type: MediaType }) => void
}>()
</script>

<template>
  <h2 class="text-xl font-bold mb-4 px-3 text-orange-500">
    {{ props.title }}
  </h2>
  <UCarousel
    v-slot="{ item }"
    :items="items"
    arrows
    :ui="{
      container: 'relative',
      item: 'basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 flex justify-center',
      arrows: 'mt-4 justify-between',

    }"
    class="w-full max-w-7xl mx-auto"
  >
    <div
      class="cursor-pointer w-[200px] sm:w-[220px] md:w-[240px]"
      @click="onItemClick(item)"
    >
      <div class="aspect-[2/3] w-full">
        <img
          :src="item.src"
          alt=""
          class="w-full h-full object-cover rounded-lg shadow-md hover:scale-95 transition-all hover:shadow-slate-600"
          loading="lazy"
        >
      </div>
      <p
        class="mt-2 text-center text-sm font-semibold truncate text-sky-100"
        :title="item.title"
      >
        {{ item.title }}
      </p>
      <div class="mt-1 flex justify-center">
        <MediaRating :rating="item.vote_average" />
      </div>
    </div>
  </UCarousel>
</template>
