// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },
   components: true,
   modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/icon"],
   css: [
      "~/assets/css/global.css"
   ],
   routeRules: {
      "/": { prerender: true },
   },
   content: {
      highlight: {
         theme: "monokai",
      },
      markdown:{
         rehypePlugins: []
      }
   },
   icon:{
      mode:"svg"
   }
});
