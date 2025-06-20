<template>
  <nav class="flex flex-col justify-between pt-6 items-center">
    <div v-if="!mobile_menu_open" class="flex items-center justify-between w-full">
    <div class="flex items-center justify-between w-full lg:justify-start">
      <NuxtLink to="/">
        <img
          class="font-bold hover:cursor-pointer w-30 mr-5"
          :src="mode.value === 'dark' ? dark_logo : light_logo"
          alt="SERSI"
        />
      </NuxtLink>
      <UNavigationMenu
        :items="leftItems"
        :ui="{
          link: 'text-lg',
        }"
        class="hidden lg:flex"
      />
      <UButton icon="i-lucide-menu" class="lg:hidden" @click="mobile_menu_open = !mobile_menu_open" />
    </div>
    <div class="items-center gap-4 hidden lg:flex">   
      <UInput
        v-model="search_input"
        icon="i-lucide-search"
        placeholder="Search ..."
        class="hidden lg:block"
      />
      <UButton
        icon="i-lucide-search"
        variant="outline"
        color="neutral"
        class="lg:hidden"
      />
      <UButton
        icon="i-bi-github"
        to="https://github.com/sersi-project"
        target="_blank"
        :class="`${mode.value === 'dark' ? 'bg-white' : 'bg-black'}`"
      />
      <ColorModeButton />
    </div></div>
    
    <motion.div
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{ duration: 0.5 }"
    :whileInView="{ opacity: 1 }"
    :whileTap="{ opacity: 0.9 }"
    class="fixed top-0 z-10 w-full"
    >
    <UNavigationMenu
      v-if="mobile_menu_open"
        :items="mobileItems"
        highlight
        highlight-color="primary"
        orientation="vertical"
        :ui="{
          link:'text-lg text-white p-6 border-b border-gray-200',
        }"
        class="w-full bg-primary rounded-b-2xl" 
      />
      <UButton icon="i-lucide-x" @click="mobile_menu_open = false" class="fixed top-5 right-5 z-10" v-if="mobile_menu_open" />
    </motion.div>
  </nav>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui';
import light_logo from '@/assets/img/sersi-light.png';
import dark_logo from '@/assets/img/sersi-dark.png';
import { motion } from 'motion-v';

const mode = useColorMode();

const search_input = ref('');
const mobile_menu_open = ref(false);

const leftItems = ref<NavigationMenuItem[]>([
  {
    label: 'Docs',
    to: '/docs',
  },
  {
    label: 'Blog',
    to: '/blog',
  },
  {
    label: 'Pro',
    to: '/pro',
    class: 'border-2 border-dashed border-primary font-bold text-primary',
  },
  {
    to: '/help',
    trailingIcon: 'i-lucide-help-circle',
  },
]);

const mobileItems = ref<NavigationMenuItem[]>([
  {
    label: 'SERSI',
    to: '/',
    class: 'text-2xl font-bold',
  },
  {
    label: 'Docs',
    to: '/docs',
  },
  {
    label: 'Blog',
    to: '/blog',
  },
  {
    label: 'Pro',
    to: '/pro',
    trailingIcon: 'i-hugeicons-star',
  },
  {
    label: 'Help',
    to: '/help',
    trailingIcon: 'i-lucide-help-circle',
  },
]);


</script>
