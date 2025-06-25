<template>
  <div :class="twMerge('relative flex items-center lg:mr-36 w-36', width)">
    <span
      :class="
        twMerge(
          'z-20 px-3 lg:h-10 lg:w-full flex items-center justify-center bg-white text-black pr-8 rounded-r-full rounded-l-lg',
          className
        )
      "
    >
      <p class="text-subtitle text-black">{{ directory }}</p>
    </span>
    <span
      v-if="branch"
      class="absolute -z-20 w-auto px-8 lg:h-10 flex items-center justify-center bg-accent -right-20 lg:-right-28 rounded-r-full"
    >
      <Icon name="jam:branch-f" size="24" class="text-white" />
      <p class="text-subtitle text-white">{{ branch }}</p>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { twMerge } from 'tailwind-merge';
defineProps({
  directory: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: false,
  },
  className: {
    type: String,
    required: false,
  },
  width: {
    type: String,
    required: false,
  },
});
</script>
