import type { Media, MediaType, PageResult } from '~/types'
import { defineStore } from 'pinia'

export const useMediaStore = defineStore('media', () => {
  const movies = ref<Media[]>([])
  const tvShows = ref<Media[]>([])
  const selectedItem = ref<Media | null>(null)
  const currentType = ref<MediaType>('movie')

  const config = useRuntimeConfig()

  async function fetchMovies() {
    const apiKey = config.public.tmdbApiKey
    const url = `${config.public.tmdbBaseUrl}/movie/popular?api_key=${apiKey}&include_adult=false`
    const res = await fetch(url)
    if (!res.ok) {
      movies.value = []
      return
    }
    const data = await res.json()
    movies.value = data.results
    currentType.value = 'movie'
  }

  async function fetchTVShows() {
    const apiKey = config.public.tmdbApiKey
    const url = `${config.public.tmdbBaseUrl}/tv/popular?api_key=${apiKey}&include_adult=false`
    const res = await fetch(url)
    if (!res.ok) {
      tvShows.value = []
      return
    }
    const data: PageResult<Media> = await res.json()
    tvShows.value = data.results
    currentType.value = 'tv'
  }

  async function fetchDetail(type: MediaType, id: string | number) {
    const apiKey = config.public.tmdbApiKey
    const url = `${config.public.tmdbBaseUrl}/${type}/${id}?api_key=${apiKey}&append_to_response=videos,credits,images,external_ids`
    const res = await fetch(url)
    if (!res.ok) {
      selectedItem.value = null
      return
    }
    selectedItem.value = await res.json()
  }

  return {
    movies,
    tvShows,
    selectedItem,
    currentType,
    fetchMovies,
    fetchTVShows,
    fetchDetail,
  }
})
