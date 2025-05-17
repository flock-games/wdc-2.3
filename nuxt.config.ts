// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // '@nuxtjs/eslint-module',
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/supabase",
  ],

  imports: {
    dirs: ["./stores"],
  },

  css: ["@fortawesome/fontawesome-svg-core/styles.css"],

  pinia: {
    autoImports: ["defineStore"],
  },

  googleFonts: {
    families: {
      Inter: [400, 700],
    },
  },

  supabase: {
    redirect: false,
  },
});
