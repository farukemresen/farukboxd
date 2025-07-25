<script setup lang="ts">
import type { MediaType } from '~/types'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useMediaStore } from '~/stores/store'

const mediaStore = useMediaStore()
const router = useRouter()

const movieItems = computed(() =>
  mediaStore.movies.map(movie => ({
    src: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
    title: movie.title || movie.name || 'İsim yok',
    id: movie.id, 
    type: 'movie' as MediaType
  })),
)

const tvShowItems = computed(() =>
  mediaStore.tvShows.map(show => ({
    src: `https://image.tmdb.org/t/p/w300${show.poster_path}`,
    title: show.name || show.title || 'İsim yok',
    id: show.id, 
    type: 'tv' as MediaType
  })),
)

const goToDetail = (item: { id: string; type: 'movie' | 'tv' }) => {
  router.push(`/${item.type}/${item.id}`)
}

onMounted(() => {
  mediaStore.fetchMovies()
  mediaStore.fetchTVShows()
})
</script>

<template>
  <section>
    <h2 class="text-xl font-bold mb-4">
      Popüler Filmler
    </h2>
    <UCarousel
      v-slot="{ item }"
      loop
      arrows
      dots
      :items="movieItems"
      :ui="{ item: 'basis-1/3' }"
    >
      <div
        class="flex flex-col items-center gap-2 p-2 cursor-pointer"
        @click="goToDetail(item)"
      >
        <img :src="item.src" width="170" height="170" class="rounded-lg">
        <p class="text-center text-sm font-semibold">
          {{ item.title }}
        </p>
      </div>
    </UCarousel>
  </section>

  <USeparator color="primary" type="solid" />

  <section class="mt-20 px-5">
    <h2 class="text-xl font-bold mb-4 py-6">
      Popüler Diziler
    </h2>
    <UCarousel
      v-slot="{ item }"
      loop
      arrows
      dots
      :items="tvShowItems"
      :ui="{ item: 'basis-1/3' }"
    >
      <div
        class="flex flex-col items-center gap-2 p-2 cursor-pointer"
        @click="goToDetail(item)"
      >
        <img :src="item.src" width="170" height="170" class="rounded-lg">
        <p class="text-center text-sm font-semibold">
          {{ item.title }}
        </p>
      </div>
    </UCarousel>
  </section>
</template>
