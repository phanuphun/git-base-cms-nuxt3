<script setup lang="ts">
import { useTheme } from '#imports';

const props = defineProps<{
   name:string,
   size?:string,
   class?:string
}>()

const isDark = useTheme()
</script>

<template>
<Icon
   :name="props.name"
   :size="props.size? props.size : '2rem'"
   class="text-black cursor-pointer hover:scale-[1.1] duration-200"
   :class="{ 'dark:text-white': isDark }" />
</template>
