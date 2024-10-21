<script setup lang="ts">
import Navbar from '~/layouts/navbar.vue';

useHead({
   bodyAttrs: {
      class: "font-body text-black border-white",
   }
});
</script>

<template>
   <NuxtLoadingIndicator />
   <div class="flex h-full w-full min-h-screen flex-col dark:dark-t">
      <Navbar></Navbar>
      <div class="relative mx-auto w-full flex h-full flex-1 border-gray-200">
         <div id="mainContain" class="flex max-w-full flex-1 w-full py-8 px-8 pb-8 xl:px-24">
            <NuxtPage> </NuxtPage>
         </div>
      </div>
   </div>

</template>

<style lang="scss" scoped></style>
