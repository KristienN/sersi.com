<template>
  <div class="flex flex-col mt-10 space-y-10 w-1/3">
    <NuxtLink
      v-for="item in props.navitems"
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

const props = defineProps<{
  navitems: {
    id: number;
    name: string;
    path: string;
  }[];
}>();

watch(
  () => route.path,
  () => {
    selectedId.value = props.navitems.find(
      (item: { path: string; id: number }) => item.path === route.path,
    )?.id;
  },
);
</script>
