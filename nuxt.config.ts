// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/strapi',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    'nuxt-strapi-zone-utils',
    '@nuxt/icon',
    '@nuxtjs/sitemap',
  ],

  site: {
    url: 'example.com',
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  compatibilityDate: '2024-07-24',
})
