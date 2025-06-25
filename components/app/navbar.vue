<template>
  <nav class="flex justify-between items-center pt-2">
    <div class="flex items-center space-x-2">
      <NuxtLink to="/">
        <img
          src="~@/assets/img/logo.png"
          alt="SERSI"
          class="size-12 hover-scale cursor-pointer"
        />
      </NuxtLink>
      <NuxtLink
        to="https://github.com/sersi-project/sersi/releases/tag/v1.1.2"
        class="bg-primary rounded-full hover-outline"
      >
        <button
          class="flex text-xs px-2 font-bold w-18 h-6 items-center justify-around space-x-1"
        >
          <h4 class="text-center text-black">v1.1.2</h4>
          <Icon name="bx:down-arrow" class="size-4 text-black" />
        </button>
      </NuxtLink>
    </div>
    <NuxtLink to="https://github.com/sersi-projects"
      ><Icon
        name="uil:github"
        size="48"
        class="hover-scale cursor-pointer dark:text-white"
    /></NuxtLink>
  </nav>
</template>

<script lang="ts" setup></script>
