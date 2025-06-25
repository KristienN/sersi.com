<template>
  <ContentRenderer class="prose min-w-64" v-if="docs" :value="docs" />
  <div v-else>No docs found</div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'docs',
});
const { data: docs } = await useAsyncData('docs', () =>
  queryCollection('content').path('/').first()
);

useHead({
  title: docs.value?.title,
  meta: [
    {
      name: 'description',
      content: docs.value?.description,
    },
  ],
});
</script>
