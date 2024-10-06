<script setup lang="ts">

const props = defineProps<{
   name:string,
   size?:string,
   hover?:boolean,
   color?:string
}>()


const obj = reactive<{
   name:string,
   size:string,
   class:string,
   hover:boolean
}>({
   name : props.name ,
   size : '2rem',
   class : '',
   hover : true
})

onMounted(()=>{
   if(!props.hover) obj.hover = false
})
</script>

<template>
<Icon
   :name="props.name"
   :size="props.size? props.size : '2rem'"
   class="duration-200 dark:text-white"
   :class="[
     {} ,
      {'hover:scale-[1.1] cursor-pointer': obj.hover}

   ]"
/>
</template>
