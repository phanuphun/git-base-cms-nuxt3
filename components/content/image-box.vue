<script setup lang="ts">
const props = defineProps({
   src: String
})
</script>

<template>
   <div class="-mt-4 flex w-full justify-start items-center">
      <img :src="props.src" alt="img" class="rounded-lg w-full  ">
   </div>
</template>
