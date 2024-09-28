<script setup lang="ts">
const props = defineProps<{
   name:string,
   size?:string,
   class?:string
}>()

</script>

<template>
<Icon
   :name="props.name"
   :size="props.size? props.size : '2rem'"
   class="cursor-pointer hover:scale-[1.1] duration-200 dark:text-white"
/>
</template>
