<script setup lang="ts">
   import mermaid from 'mermaid';
   onMounted(()=>{
      mermaid.initialize({
         startOnLoad:true
      })
      mermaid.run()
   })
</script>

<template>
   <div class="mermaid">
      <slot></slot>
   </div>
</template>
