<template>
  <div class="font-display overflow-x-hidden dark:bg-slate-950">
    <AppHeader />
    <TerminalMain>
      <div
        class="flex flex-col lg:flex-row items-center lg:items-start justify-center"
      >
        <DocsSidebar :navitems="navitems">
          <button
            :class="
              showNav
                ? 'lg:hidden flex items-center justify-center mb-9'
                : 'lg:hidden flex items-center justify-center border-2 border-white p-1'
            "
            @click="showNav = !showNav"
          >
            <UIcon
              v-if="showNav"
              name="ic:round-close"
              size="36"
              class="text-white"
            />
            <UIcon
              v-else
              name="ic:round-menu-book"
              size="36"
              class="text-white"
            />
          </button>
        </DocsSidebar>
        <div class="flex flex-col lg:flex-row w-full px-10">
          <div
            class="bg-white/50 w-full h-full space-y-10 px-10 py-5 lg:hidden"
            :class="{ 'hidden lg:block': !showNav }"
          >
            <NuxtLink
              v-for="item in navitems"
              :key="item.id"
              :to="item.path"
              class="w-full flex"
            >
              <p class="text-title text-white">{{ item.name }}</p>
              <UIcon
                name="ic:round-arrow-right"
                size="24"
                class="text-white"
              />
            </NuxtLink>
          </div>
          <slot />
        </div>
      </div>
    </TerminalMain>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
const showNav = ref(false);
const navitems = ref([
  {
    id: 1,
    name: 'Getting Started',
    path: '/docs',
  },
  {
    id: 2,
    name: 'Installation',
    path: '/docs/installation',
  },
  {
    id: 3,
    name: 'Configuration',
    path: '/docs/configuration',
  },
  {
    id: 4,
    name: 'Usage',
    path: '/docs/usage',
  },
  {
    id: 5,
    name: 'Pro',
    path: '/docs/pro',
  },
]);
</script>
