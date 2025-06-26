// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Sersi — Your Stack, Your Rules. CLI for Rapid App Scaffolding',
    },
  },
  css: ['~/assets/css/styles.css'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    storage: 'sessionStorage',
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
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
    },
  },
  compatibilityDate: '2025-05-15',
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: true,
        quotes: 'single',
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
  robots: {
    blockNonSeoBots: true,
  },
  seo: {
    meta: {
      title: 'Sersi — Your Stack, Your Rules. CLI for Rapid App Scaffolding',
      description:
        'Sersi is an open-source CLI to generate customizable full-stack apps using your favorite tools like React, FastAPI, Postgresql, Tailwind and more!',
      ogImage: '/social-preview.png',
      ogUrl: 'https://sersi.dev',
      ogType: 'website',
      ogLocale: 'en_US',
      twitterCard: 'summary_large_image',
      twitterTitle:
        'Sersi — Your Stack, Your Rules. CLI for Rapid App Scaffolding',
      twitterDescription:
        'Sersi is an open-source CLI to generate customizable full-stack apps using your favorite tools like React, FastAPI, Postgresql, Tailwind and more!',
      twitterImage: '/social-preview.png',
      twitterSite: '@sersi_dev',
    },
  },
});
