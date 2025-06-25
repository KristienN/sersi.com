<template>
  <ContentRenderer class="prose min-w-64" v-if="page" :value="page" />
  <div v-else>No docs found</div>
</template>

<script setup lang="ts">
const slug = useRoute().params.slug;
const { data: page } = await useAsyncData(`${slug}`, () => {
  return queryCollection('content').path(`/${slug}`).first();
});

useHead({
  title: page.value?.title,
  meta: [
    {
      name: 'description',
      content: page.value?.description,
    },
  ],
});

definePageMeta({
  layout: 'docs',
});
</script>
