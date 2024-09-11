<template>
  <div class="max-w-3xl px-4 mx-auto">
    <!-- Header Content -->
    <header class="px-8 pt-8 pb-4 flex justify-between items-end border-b-2 border-dashed border-gray-400" >
      <div class="">
          <h1 class="text-2xl  font-semibold mb-2 ">
            <NuxtLink to="/">
              หัดแปล ไม่มีอะไรหรอก
            </NuxtLink>
          </h1>
      </div>
    </header>
    <!-- ./Header Content -->

    <!-- Main Content -->
    <div class="p-8">
      <NuxtPage />
    </div>
    <!-- ./Main Content -->

  </div>
</template>

<script setup lang="ts">
</script>