<script setup lang="ts">
defineProps({
   src: String
})
</script>

<template>
   <div class="-mt-4">
      <img :src="src" alt="img" class="rounded-lg w-full  lg:w-2/3 xl:w-3/4">
   </div>
</template>
