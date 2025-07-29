<script setup lang="ts">
const props = defineProps(['rating'])
</script>

<template>
  <div class="flex text-amber-500 text-xl">
    <span v-for="i in 5" :key="i">
      <span v-if="props.rating / 2 >= i">
        ★
      </span>
      <span v-else-if="props.rating / 2 >= i - 0.5">
        ⯪
      </span>
      <span v-else>
        ☆
      </span>
    </span>
  </div>
</template>
