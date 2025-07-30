<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMediaStore } from '~/stores/discover'

definePageMeta({
  name: 'media-detail',
})

const route = useRoute()
const mediaStore = useMediaStore()

const type = route.params.type as 'movie' | 'tv'
const id = route.params.id as string

onMounted(() => {
  mediaStore.fetchDetail(type, id)
})

const item = computed(() => mediaStore.selectedItem)

const trailerKey = computed(() => {
  return item.value?.videos?.results.find(v => v.type === 'Trailer' && v.site === 'YouTube')?.key
})

const castList = computed(() => {
  return item.value?.credits?.cast.slice(0, 7)
})
</script>

<template>
  <div class="max-w-6xl mx-auto p-6 text-white">
    <div v-if="item" class="flex flex-col md:flex-row gap-15 items-start">
      <img
        :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
        :alt="item.title || item.name"
        class="w-full md:w-80 rounded-2xl shadow-xl object-cover max-h-[600px] md:self-start"
      >

      <div v-if="item" class="flex-1 space-y-6">
        <h1 class="text-3xl font-bold">
          {{ item.title || item.name }}
          <span class="text-gray-400 text-xl font-normal">
            ({{ (item.release_date || item.first_air_date)?.slice(0, 4) }})
          </span>
        </h1>
        <p class="text-yellow-400 font-semibold">
          ⭐ {{ item.vote_average?.toFixed(1) }}
        </p>
        <p v-if="type === 'movie' && item.runtime" class="text-sm text-gray-200">
          {{ Math.floor(item.runtime / 60) }}h {{ item.runtime % 60 }}min
        </p>
        <div v-if="item.genres?.length" class="flex flex-wrap gap-2">
          <span
            v-for="genre in item.genres"
            :key="genre.id"
            class="bg-indigo-800 text-white text-sm px-3 py-1 rounded font-medium"
          >
            {{ genre.name }}
          </span>
        </div>

        <p class="text-md  text-gray-200">
          {{ item.overview }}
        </p>

        <div>
          <h2 class="text-lg font-semibold mt-6 mb-2">
            Oyuncular
          </h2>
          <div>
            <span
              v-for="actor in castList"
              :key="actor.id"
              class=" font-semibold gap-3 px-2 text-violet-300 text-md"
            >• {{ actor.name }}
            </span>
          </div>
        </div>

        <div v-if="trailerKey" class="mt-6">
          <h2 class="text-lg font-semibold mb-2">
            Fragman
          </h2>
          <div class="relative w-full" style="padding-bottom: 56.25%; height: 0;">
            <iframe
              :src="`https://www.youtube.com/embed/${trailerKey}`"
              class="absolute top-0 left-0 w-full h-full rounded-xl"
              frameborder="0"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
