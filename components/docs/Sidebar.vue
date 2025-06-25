<template>
  <div class="flex flex-col mt-10 space-y-10 w-1/3">
    <NuxtLink
      v-for="item in navitems"
      :key="item.id"
      :to="item.path"
      class="hidden lg:block w-auto"
    >
      <TerminalDirectoryBranch
        :directory="item.name"
        :branch="selectedId === item.id ? 'main' : ''"
        width="w-54"
      />
    </NuxtLink>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const selectedId = ref<number | undefined>(1);
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

watch(
  () => route.path,
  () => {
    selectedId.value = navitems.value.find(
      (item: any) => item.path === route.path
    )?.id;
  }
);
</script>
