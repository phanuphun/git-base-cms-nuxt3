<script setup lang="ts">
import { useReadState } from './composables/useReadState';
import { usePageState } from '~/composables/usePageState'
usePageState()
const readState = useReadState()

const search = ref('')
const gitLink = 'https://github.com/phanuphun/phanuphun.na-blog'

const searchParams = computed(() => ({
  where: [{ title: { $contains: search.value } }]
}))

// try to access front matter
// const { data: content } = await useAsyncData('a', () => queryContent('/articles').find())
// console.log(content.value);
// console.log(content.value?.[0].tags);

</script>

<template>
  <div class="w-full flex">
    <header class="w-full px-4 py-3 flex flex-wrap justify-between items-center shadow-md shadow-gray-200">
      <div class="text-xl font-semibold">
        <NuxtLink to="/">Phanuphun.na - Blog</NuxtLink>
      </div>
      <div class="w-auto flex flex-row gap-3">
        <NuxtLink :to="gitLink" target="_blank">
          <div class="cursor-pointer duration-200">
            <img class="w-[30px] h-[30px] hover:scale-[1.05] duration-200" src="/github-logo.png" alt="github-logo">
          </div>
        </NuxtLink>
      </div>
    </header>
  </div>

  <div class="max-w-5xl pl-4 mx-auto h-auto min-h-screen border-x-2 border-gray-200 flex justify-between">
    <!-- main -->
    <div class="w-3/4 p-8 h-auto">
      <NuxtPage />
    </div>

    <!-- search side -->
    <div class="w-1/4 h-auto border-l-2 border-gray-200 pt-8 px-2">
      <input type="text" v-model="search" placeholder="Search..." class="w-full p-2 border border-gray-300" />

      <div class="">
        <ContentList v-if="search !== ''" :path="`/articles`" fields="title,path" :query="searchParams">
          <template #default="{ list }">
            <li class="w-full px-2 cursor-pointer hover:text-blue-500 mt-2 list-decimal" v-for="a in list"
              :key="a._path">
              <NuxtLink :to="a.path"> <u> {{ a.title }} </u></NuxtLink>
            </li>
          </template>
          <template #not-found>
            <p class="text-gray-500 px-2 mt-2 text-center">Not Found</p>
          </template>
        </ContentList>
      </div>
    </div>
  </div>

</template>
