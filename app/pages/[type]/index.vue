<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, computed } from 'vue'
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
    }))
  } else if (type === 'tv') {
    return mediaStore.tvShows.map(show => ({
      src: `https://image.tmdb.org/t/p/w300${show.poster_path}`,
      title: show.name || show.title || 'İsim yok',
      id: show.id,
    }))
  }
  return []
})

function goToDetail(id: number | string) {
  router.push(`/${type}/${id}`)
}

onMounted(() => {
  if (type === 'movie') {
    mediaStore.fetchMovies()
  } else if (type === 'tv') {
    mediaStore.fetchTVShows()
  }
})

</script>

<template>
  <section>
    <h2 class="text-xl font-bold mb-4 capitalize">{{ type }} Listesi</h2>
    <UCarousel
      v-slot="{ item }"
      loop
      arrows
      dots
      :items="items"
      :ui="{ item: 'basis-1/3' }"
    >
      <div 
        class="flex flex-col items-center gap-2 p-2 cursor-pointer"
        @click="goToDetail(item.id)"
      >
        <img :src="item.src" width="170" height="170" class="rounded-lg" />
        <p class="text-center text-sm font-semibold">{{ item.title }}</p>
      </div>
    </UCarousel>
  </section>
</template>