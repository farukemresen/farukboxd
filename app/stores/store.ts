import { defineStore } from 'pinia'
import type { Media, PageResult, MediaType } from '~/types'

export const useMediaStore = defineStore('media', () => {
  const movies = ref<Media[]>([])
  const tvShows = ref<Media[]>([])
  const selectedItem = ref<Media | null>(null)
  const currentType = ref<MediaType>('movie')


  })
