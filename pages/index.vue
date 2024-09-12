<script setup lang="ts">
    useHead({
        title:"Home",
        meta:[
            {name: "description" , content:"Phanuphun.na-Blog"}
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
</script>

<template>
    <div>
        <ContentList path="/articles" fields="title,date,thumbnail" :query="query" v-slot="{ list }">
            <div v-for="a in list" :key="a._path"
                class="blog-card bg-gray-100 overflow-hidden mb-4 pb-4 rounded-md
                hover:bg-gray-300 cursor-pointer scale-1 hover:scale-[1.01] duration-200">
                <NuxtLink :to="`/${a.slug}`">
                <div class="h-60 w-full">
                    <img :src="a.thumbnail" :alt="a.title" class="w-full h-full object-cover">
                </div>
                <div class="content px-4">
                    <div class="text-2xl mt-2 font-semibold">
                        
                            {{ a.title }}
                        
                    </div>
                    <div class="text-sm text-gray-500">
                        {{ a.date }}
                    </div>
                    <div class="">
                        {{ a.description }}
                    </div>
                </div>
                </NuxtLink>
            </div>
        </ContentList>
    </div>
</template>

<style scoped></style>