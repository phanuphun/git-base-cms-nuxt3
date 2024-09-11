// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components : true ,
  css: [
    // '~/assets/css/github-markdown-dark.css',
    //'~/assets/css/github-markdown-light.css',
    // '~/assets/css/github-markdown.css'
  ],
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/image'],
  routeRules: {
    '/': { prerender: true }
  },
})