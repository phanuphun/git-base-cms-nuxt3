<script setup lang="ts">
import { useTheme } from '#imports';

const isDark = useTheme()
</script>

<template>
   <hr class="border-black my-4" :class="{'dark:border-white':isDark}">
</template>
