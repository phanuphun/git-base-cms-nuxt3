<script setup lang="ts">
const props = defineProps<{
   src: string,
   detail?: string
}>()

console.log(props.detail);

</script>

<template>
   <div class="-mt-4 flex flex-col w-full justify-center items-center">
      <div class="rounded-lg w-full xl:w-[70%] ">
         <img :src="props.src" alt="img" class="rounded-lg w-full">
         <p class="text-center text-gray-500 font-mono italic">
            (ภาพจาก
            <a :href="props.detail" target="_blank" class="text-gray-500 hover:text-blue-500">
               {{ props.detail }}
            </a>)
         </p>
      </div>
   </div>
</template>
