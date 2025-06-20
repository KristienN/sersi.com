<template>
  <div class="flex justify-center items-center">
  <div class="flex flex-col justify-center items-center my-10 gap-8 md:text-center md:w-2/3">
    <p class="text-4xl font-bold">Join the community!</p>
    <p class="text-xl">
      We value your feedback and contributions. Join our community to get help,
      share your projects, and stay updated with the latest news
    </p>
  </div>
  </div>
  <div
    class="flex flex-col md:flex-row xl:flex-col  justify-center items-center xl:grid xl:grid-flow-row xl:grid-rows-2 xl:grid-cols-3 xl:gap-12"
  >
    <UCard
      v-for="community in communities"
      :key="community.name"
      class="p-4 border border-gray-200 m-5 shadow-lg xl:w-full h-5/6"
    >
      <div class="flex flex-col items-center gap-2">
        <UIcon
          :name="community.icon"
          :class="`size-18 ${community.color} mb-6`"
        />
        <p class="text-xl font-bold">{{ community.name }}</p>
        <p class="text-sm text-center md:hidden xl:block">{{ community.description }}</p>
      </div>
    </UCard>
  </div>
</template>

<script lang="ts" setup>
import type { Community } from '~/types';

const communities: Community[] = [
  {
    name: 'Discord',
    icon: 'i-simple-icons-discord',
    description:
      'Join the Discord server to get help, share your projects, and stay updated with the latest news',
    link: 'https://discord.gg/sersi',
    color: 'bg-purple-500',
  },
  {
    name: 'Reddit',
    icon: 'i-simple-icons-reddit',
    description:
      'Join the Reddit community to get help, share your projects, and stay updated with the latest news',
    link: 'https://www.reddit.com/r/sersi/',
    color: 'bg-orange-500',
  },
  {
    name: 'Github',
    icon: 'i-simple-icons-github',
    description: 'Contribute to the project, report bugs, and request features',
    link: 'https://github.com/sersi-projects',
    color: '',
  },
];
</script>
