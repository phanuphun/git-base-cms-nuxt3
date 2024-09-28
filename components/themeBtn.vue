<script setup lang="ts">
import { useTheme } from '~/composables/usePageState';
const isDark = useTheme()

onMounted(() => {
  if (localStorage.getItem('theme') === 'dark') {
    isDark.value = true
  }
})

watch(isDark, (newValue) => {
  localStorage.setItem('theme', newValue ? 'dark' : 'light')
})

function toggleMode(){
   isDark.value = !isDark.value
   const bodyElement = document.body;
   bodyElement.classList.toggle('dark');
}

</script>

<template>
   <div :class="{'dark:dark-t':isDark}">
      <button @click="toggleMode()" class="rounded-md">
         <IconF :name="isDark ?'uil:moon' : 'uil:sun'" />
      </button>
   </div>
</template>

<style scoped>

</style>
