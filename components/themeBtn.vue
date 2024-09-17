<script setup lang="ts">
import { useTheme } from '~/composables/useTheme';
const isDark = useTheme()

onMounted(() => {
  if (localStorage.getItem('theme') === 'dark') {
    isDark.value = true
  }
})

watch(isDark, (newValue) => {
  localStorage.setItem('theme', newValue ? 'dark' : 'light')
})

function changeMode(){
   isDark.value = !isDark.value
}

</script>

<template>
   <div :class="{'dark:dark-t':isDark}">
      <button @click="changeMode" class="rounded-md">
         <Icon
            :name="isDark ?'uil:moon' : 'uil:brightness'"
            size="2rem"
            class="text-black hover:scale-[1.1] duration-200"
            :class="{'dark:text-white':isDark}"
         />
      </button>
   </div>
</template>

<style scoped>

</style>
