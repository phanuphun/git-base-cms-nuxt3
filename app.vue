<template>
  <div class="max-w-3xl px-4 mx-auto">
    <!-- Header Content -->
    <header class="px-8 pt-8 pb-4 flex justify-between items-end 
    border-b-2 border-r-2 border-l-2 border-dashed border-gray-400" >
      <div class="">
          <h1 class="text-2xl  font-semibold mb-2 ">
            <NuxtLink to="/">
              Phanuphun.na - Blog
            </NuxtLink>
          </h1>
      </div>
    </header>
    <div class="flex flex-row items-end w-full justify-end
    border-b-2 border-r-2 border-l-2 border-dashed border-gray-400">
      <NuxtLink to="https://github.com/phanuphun/phanuphun.na-blog" target="_blank">
        <div class="border-l-2 border-dashed border-gray-400 p-2 cursor-pointer 
          duration-200">
          <img src="/github-logo.png" alt="github-logo" class="w-[30px] h-[30px] hover:scale-[1.05] duration-200">
        </div>
      </NuxtLink>
      </div>
    <!-- ./Header Content -->

    <!-- Main Content -->
    <div class="w-full p-8 h-auto min-h-screen border-l-2 border-r-2 border-gray-400 border-dashed">
      <NuxtPage />
    </div>
    <!-- ./Main Content -->

    <footer class="border-gray-400 border-dashed border-t-2  border-r-2 border-l-2">
      <p class="text-sm mx-4 my-2 text-gray-600">© 2024 Phanuphun Namwong</p>
    </footer>
  </div>
</template>

<script setup lang="ts">

</script>

<style>


</style>