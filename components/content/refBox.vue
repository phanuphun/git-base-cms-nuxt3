<script setup  lang="ts">
import { useTheme } from '#imports';

const isDark = useTheme()
</script>

<template>
   <div
      class="border-gray-400 w-full border-2 border-dashed rounded-md px-5 pb-6 whitespace-pre-line	"
      :class="{'dark:darl-t':isDark}"
      style="word-break: break-all;"
   >
      <slot></slot>
   </div>
</template>

