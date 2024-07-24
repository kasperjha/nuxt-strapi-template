// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/strapi', '@nuxtjs/tailwindcss', '@nuxt/eslint', 'nuxt-strapi-zone-utils'],
  eslint: {
    config: {
      standalone: false,
    },
  },
})
