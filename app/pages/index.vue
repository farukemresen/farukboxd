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
    type: 'movie' as MediaType,
  })),
)

const tvShowItems = computed(() =>
  mediaStore.tvShows.map(show => ({
    src: `https://image.tmdb.org/t/p/w300${show.poster_path}`,
    title: show.name || show.title || 'İsim yok',
    id: show.id,
    type: 'tv' as MediaType,
  })),
)

function goToDetail(item: { id: string | number, type: MediaType }) {
  router.push({
    name: 'type-id',
    params: { type: item.type, id: item.id },
  })
}

onMounted(() => {
  mediaStore.fetchMovies()
  mediaStore.fetchTVShows()
})
</script>

<template>
  <MediaCarousel
    title="Popüler Filmler"
    :items="movieItems"
    :on-item-click="goToDetail"
  />
  <USeparator color="primary" type="solid" />
  <MediaCarousel
    title="Popüler Diziler"
    :items="tvShowItems"
    :on-item-click="goToDetail"
  />
</template>
