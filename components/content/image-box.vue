<script setup lang="ts">
defineProps({
   src: String
})
</script>

<template>
   <div class="-mt-4 w-full">
      <img :src="src" alt="img" class="rounded-lg">
   </div>
</template>
