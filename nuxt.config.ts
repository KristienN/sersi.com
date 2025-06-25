// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/ui',
  ],
  css: ['~/assets/css/styles.css'],
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
  },
  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['bash', 'yaml'],
          theme: {
            default: 'github-dark',
          },
        },
        toc: {
          depth: 3,
        },
      },
    },
  },
  fonts: {
    families: [
      {
        name: 'Ubuntu Mono Sans',
        provider: 'google',
        fallbacks: ['sans-serif'],
      },
    ],
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
    },
  },
});
