<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const type = route.params.type
const name = route.params.title
const id = route.params.id
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">
      Detay Sayfası
    </h1>
    <p>Tür: {{ type }}</p>
    <p>İsim: {{ name }}</p>
    <p>ID: {{ id }}</p>
  </div>
</template>
