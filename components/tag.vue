<script setup lang="ts">

const isDark = useTheme()
</script>

<template>
   <div :class="{ 'dark:bg-gray-700': isDark}"
      class="w-fit px-2 py-1 bg-white rounded-md text-sm border-2 border-gray-400">
      <slot />
   </div>
</template>
