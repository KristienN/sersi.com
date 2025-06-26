<template>
  <ContentRenderer
    v-if="page"
    class="prose min-w-64"
    :value="page"
  />
  <div v-else>
    No docs found
  </div>
</template>

<script setup lang="ts">
const slug = useRoute().params.slug;
const { data: page } = await useAsyncData(`${slug}`, () => {
  return queryCollection('content').path(`/${slug}`).first();
});

useHead({
  title: page.value?.title + ' — Sersi Docs',
  meta: [
    {
      name: 'description',
      content: page.value?.description,
    },
    {
      property: 'og:title',
      content: page.value?.title + ' — Sersi Docs',
    },
    {
      property: 'og:description',
      content: page.value?.description,
    },
    {
      property: 'og:image',
      content: '/social-preview.png',
    },
  ],
});

useSeoMeta(page.value?.seo || {});

definePageMeta({
  layout: 'docs',
});
</script>
