<script setup lang="ts">

type TagSize = 'normal' | 'mini'

const props = defineProps<{
   type?: TagSize
}>()
</script>

<template>
   <div v-if="props.type && props.type === 'normal'"
   class="w-fit min-w-fit px-2 py-1 bg-white rounded-md text-sm border-2 border-gray-400 dark:bg-gray-700">
      <slot></slot>
   </div>
   <div v-else-if="props.type === 'mini'"
   class="w-fit min-w-fit px-2.5 py-0.5 pb-1 bg-orange-600 rounded-full text-sm text-white font-extralight ">
      <slot></slot>
   </div>
</template>
