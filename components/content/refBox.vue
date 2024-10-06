<script setup lang="ts">
const props = defineProps<{
   isMode?: boolean
}>()

onMounted(() => {
   console.log(props.isMode);
})
</script>

<template>
   <div
   class="px-5 pb-7 border-gray-400 w-full whitespace-pre-line border-2 border-dotted rounded-md dark:darl-t">
      <slot />
   </div>
   <!-- <div class="w-full flex flex-col whitespace-pre-line">
      <div class="py-4 px-4 rounded-t-xl bg-red-700 border-x-2 border-t-2 border-red-500">
         <IconF
            name="uil:info-circle"
            :hover="false"
            class="text-white text-xl"
            >
         </IconF>
      </div>
      <div class="py-2 px-4 rounded-b-xl bg-red-700 border-x-2 border-b-2 border-red-500 text-white">
         <slot></slot>
      </div>
   </div> -->
</template>
