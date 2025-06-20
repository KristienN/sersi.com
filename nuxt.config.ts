// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxtjs/seo',
  ],
  css: ['~/assets/css/styles.css'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
    storage: 'localStorage',
    storageKey: 'sersi-color-mode', 
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            dark: 'github-dark',
            light: 'github-light',
            default: 'github-light',
            sepia: 'monokai',
          },
        },
        toc: {
          depth: 3,
        },
      },
    },
  },
  fonts:{
    defaults:{
      preload:true,
      styles:['normal', 'italic'],
    },
    families:[
      {
        name:'Atkinson Hyperlegible',
        provider:'bunny',
        styles:['normal', 'italic'],
      }
    ]
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY
    }
  },
});
