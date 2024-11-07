// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app:{
      head:{
         link:[
            { rel: 'icon', type: 'image/jpg', href: '/favicon.jpg' },
         ]
      }
   },
   devtools: { enabled: true },
   components: true,
   modules: [
      "@nuxt/content",
      "@nuxtjs/tailwindcss",
      "@nuxt/image",
      "@nuxt/icon",
   ],
   css: [
      "~/assets/css/global.css",
      "~/assets/css/bgPattern.css",
      "~/assets/css/tailwind.css",
   ],
   routeRules: {
      "/": { prerender: true },
   },
   content: {
      highlight: {
         // theme: "material-theme-ocean",
         langs:['csharp','js','ts','shell','vue','css','html','md']
      },
   },
   icon: {
      mode: "svg",
   },
   vite:{
      server:{
         hmr:true // Hot Module Replacement
      }
   },
   compatibilityDate: "2024-10-08",
});
