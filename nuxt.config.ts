// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  pages: false,
  modules: ['@nuxt/fonts', '@nuxt/image'],
  css: [
    '~/assets/css/main.css'
  ],
  fonts: {
    families: [
      { name: 'helvetica', provider: 'google'}
    ]
  },
  app: {
    baseURL: 'stik'
  }
})