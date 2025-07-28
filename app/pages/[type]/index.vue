<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMediaStore } from '~/stores/store'

const route = useRoute()
const router = useRouter()
const mediaStore = useMediaStore()

const type = route.params.type as 'movie' | 'tv'

const items = computed(() => {
  if (type === 'movie') {
    return mediaStore.movies.map(movie => ({
      src: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
      title: movie.title || movie.name || 'İsim yok',
      id: movie.id,
      type: 'movie' as const,
    }))
  }
  else if (type === 'tv') {
    return mediaStore.tvShows.map(show => ({
      src: `https://image.tmdb.org/t/p/w300${show.poster_path}`,
      title: show.name || show.title || 'İsim yok',
      id: show.id,
      type: 'tv' as const,
    }))
  }
  return []
})

function goToDetail(item: { id: string | number, type: 'movie' | 'tv' }) {
  router.push({
    name: 'type-id',
    params: {
      type: item.type,
      id: item.id,
    },
  })
}

onMounted(() => {
  if (type === 'movie') {
    mediaStore.fetchMovies()
  }
  else if (type === 'tv') {
    mediaStore.fetchTVShows()
  }
})
</script>

<template>
  <section>
    <MediaCarousel
      :title="type === 'movie' ? 'Popüler Filmler' : 'Popüler Diziler'"
      :items="items"
      :on-item-click="goToDetail"
    />
  </section>
</template>
