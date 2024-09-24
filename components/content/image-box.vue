<script setup lang="ts">
defineProps({
   src: String
})
</script>

<template>
   <div class="-mt-4 flex w-full justify-start items-center">
      <img :src="src" alt="img" class="rounded-lg w-full  ">
   </div>
</template>
