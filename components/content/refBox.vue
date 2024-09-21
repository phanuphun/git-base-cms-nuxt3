<template>
   <div
      class="px-4 w-full border-2 border-dashed rounded-md "
      :class="{'dark:darl-t':isDark}"
      style="word-break: break-all;"
   >
      <slot name="note-text"></slot>
   </div>
</template>

<script setup  lang="ts">
import { useTheme } from '#imports';

const isDark = useTheme()
</script>

