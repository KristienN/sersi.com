<template>
  <ContentRenderer
    v-if="docs"
    class="prose min-w-64"
    :value="docs"
  />
  <div v-else>
    No docs found
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'docs',
});
const { data: docs } = await useAsyncData('docs', () =>
  queryCollection('content').path('/').first(),
);

useHead({
  title: docs.value?.title + ' — Sersi Docs',
  meta: [
    {
      name: 'description',
      content: docs.value?.description,
    },
  ],
});
</script>
