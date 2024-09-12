
<script setup lang="ts">

  const {slug : path} = useRoute().params  
  
</script>

<template>
  <article class="bg-white rounded-2xl ">
      <ContentDoc :path="`/articles/${path}`" v-slot="{doc}"> 
        <header> 
          <div class="texet-center p-0">
            <h1 class="text-4xl font-semibold">{{ doc.title }}</h1>
            <div class="text-gray-500 text-sm mt-2">
              โพสต์: {{ doc.date }} 
            </div>
            <img :src="doc.thumbnail" :alt="doc.title" class="h-60 w-full object-cover mt-2">
          </div>
        </header>
        <div class=" mt-4 markdown-body">
          <ContentRenderer :value="doc" class="prose max-w-full"></ContentRenderer>
        </div>
      </ContentDoc>
  </article>
 
</template>

<style scoped>
 
</style>
