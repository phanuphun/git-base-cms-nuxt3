<script setup lang="ts">
const props = defineProps<{
   name: string,
   class?: string,
   color?: string,
   width?: string,
   disable: boolean
}>()
</script>

<template>
   <button v-if="!props.disable" class="p-4 rounded-md card-light-t w-auto dark:card-dark-t"
      :disabled="props.disable">
      {{ props.name }}
   </button>

   <button v-else class="p-4 rounded-md bg-gray-200 text-gray-400 w-32 min-w-fit dark:bg-gray-800"
      :disabled="props.disable">
      {{ props.name }}
   </button>
</template>
