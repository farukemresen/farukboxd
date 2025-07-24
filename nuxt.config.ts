// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'
import tailwindcss from '@tailwindcss/vite'

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/fonts', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  runtimeConfig: {
    tmdbApiKey: process.env.TMDB_KEY,
    public: {
      tmdbBaseUrl: 'https://api.themoviedb.org/3',
    },
  },
})
