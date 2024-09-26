<script setup lang="ts">
const isDark = useTheme()

type BtnType = 'default' | 'youtube' | 'github' | 'file' | 'link'

const props = defineProps<{
   text: string
   link: string
   type?: BtnType
}>()

function checkIcon() {
   if (props.type) {
      if (props.type === 'default') return ''
      if (props.type === 'youtube') return 'uil:youtube'
      if (props.type === 'file') return 'uil:book'
      if (props.type === 'github') return 'uil:github'
      if (props.type === 'link') return 'uil:link'
   } else {
      return ''
   }
}
</script>

<template>
   <div class="w-full flex justify-center items-center py-1">
      <button class="p-4 rounded-md card-light-t w-full" :class="{ 'dark:card-dark-t': isDark }">
         <NuxtLink :to="props.link" target="_blank">
            <div class="w-full flex flex-row items-center justify-start gap-2">
               <IconF :name="String(checkIcon())"></IconF>
               <span>
                  {{ props.text }}
               </span>
            </div>
         </NuxtLink>
      </button>
   </div>
</template>

<style scoped></style>
