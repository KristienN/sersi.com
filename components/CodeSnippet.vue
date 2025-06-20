<template>
   <div
          class="flex justify-between items-center h-10 w-full border-b border-gray-200 px-2"
        >
          <div class="flex items-center text-sm font-bold">
            <UIcon class="size-5" name="i-simple-icons-yaml" />
            <code>sersi.yaml</code>
          </div>
          <CopyButton :text="yamlSnippet" />
        </div>
        <div class="h-full w-full p-4">
          <pre class="text-sm">{{ yamlSnippet }}</pre>
        </div>
</template>

<script lang="ts" setup>
const yamlSnippet = `
template: "my-favourite-arch"
type: personal
structure: monorepo
scaffold:
  frontend:
    framework: "vue"
    css: "tailwind"
    lang: "ts"
  backend:
    framework: "express"
    lang: "ts"
    database: "mongodb"
    cache: "redis"
  devops:
    docker: true
    CICD: "github-actions"
`;
</script>

<style>

</style>