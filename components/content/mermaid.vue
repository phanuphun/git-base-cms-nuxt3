<script setup lang="ts">
import mermaid from 'mermaid';
import { useTheme } from '#imports';

const isDark = useTheme()

onMounted(() => {
   mermaid.initialize({
      startOnLoad: true,
      theme: isDark.value ? 'dark' : 'base'
   })
   mermaid.contentLoaded()
})
</script>

<template>
   <div class="mermaid w-full flex justify-center items-center">
      <slot></slot>
   </div>
</template>
