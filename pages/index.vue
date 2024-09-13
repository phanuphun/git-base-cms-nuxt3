<script setup lang="ts">
  import { useDateConverter } from '~/composables/useDateConverter'
  import { usePageState } from '~/composables/usePageState'
  import { useReadState } from '~/composables/useReadState'
  usePageState()
  const readState = useReadState()

  useHead({
      title: "Home",
      meta: [
          { name: "description", content: "Phanuphun.na-Blog" }
      ]
  })

  const query = {
      draft: true,
      sort: [
          {
              date: -1
          },
      ]
  }
  const formatDate = (dateString: string): string => {
    return useDateConverter(dateString);
  }


</script>

<template>
    <div>
        <ContentList path="/articles" fields="title,date,thumbnail,tags" :query="query">
            <template #default="{ list }">
                <div v-for="a in list" :key="a._path" class="blog-card bg-gray-100 overflow-hidden mb-4 pb-4 rounded-md
                    hover:bg-gray-300 cursor-pointer scale-1 hover:scale-[1.01] duration-200">
                    <NuxtLink :to="`/articles/${a.path}`">
                        <div class="h-60 w-full">
                            <img :src="a.thumbnail" :alt="a.title" class="w-full h-full object-cover">
                        </div>
                        <div class=" px-4">
                            <div class="text-2xl mt-2 font-semibold">
                                {{ a.title }}
                            </div>
                            <div class="text-sm text-gray-500">
                                {{ formatDate(a.date) }}
                            </div>
                            <div class="my-2">
                                {{ a.description }}
                            </div>
                            <div class="w-full flex flex-wrap gap-2">
                                <Tag v-for="tag in a.tags" class="">{{ tag }}</Tag>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </template>
            <template #not-found>

            </template>
        </ContentList>
    </div>
</template>

<style scoped></style>
