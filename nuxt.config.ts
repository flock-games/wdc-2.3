// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // '@nuxtjs/eslint-module',
    "@nuxtjs/tailwindcss",
  ],

  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
});
