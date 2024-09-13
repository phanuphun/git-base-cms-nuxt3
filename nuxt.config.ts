// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components : true ,
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],

  routeRules: {
    '/': { prerender: true }
  },
  content: {
   documentDriven: false, // deploy error will trigger if u turn on
   highlight: {
      theme: 'monokai',
   },
  }
})
