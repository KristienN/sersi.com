<template>
  <div class="flex flex-col items-center justify-center my-10 md:text-center">
    <div class="flex flex-col items-center justify-center lg:w-2/3 mb-5">
      <p class="text-5xl font-bold mb-8">
        Scaffold your project in record time!
      </p>
      <p class="text-xl">
        With
        <code
          :class="
            mode.value === 'dark'
              ? 'bg-gray-100 text-black'
              : 'bg-gray-100 text-black'
          "
          class="p-1 rounded-md"
          >sersi</code
        >, you can generate a project with your favourite framework, alongside
        your most used libraries and utilities. Gone are the days of repetitive
        setup workflows. Save configurations in a
        <code
          :class="
            mode.value === 'dark'
              ? 'bg-gray-100 text-black'
              : 'bg-gray-100 text-black'
          "
          class="p-1 rounded-md"
          >sersi.yaml</code
        >
        file and use it build endless projects.
      </p>
    </div>
    <motion.div
      :initial="{ opacity: 0, scale: 0 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{
        duration: 0.5,
        scale: { type: 'spring', visualDuration: 0.5, bounce: 0.5 },
      }"
      class="flex flex-col lg:w-[975px] border-4 border-gray-200 shadow-lg lg:h-[64vh] my-10 rounded-lg items-center"
    >
      <div class="h-4 md:h-8 w-full bg-gray-200 flex items-center px-3 gap-1 md:gap-2">
        <div class="rounded-full size-2 md:size-4 bg-green-500"></div>
        <div class="rounded-full size-2 md:size-4 bg-yellow-500"></div>
        <div class="rounded-full size-2 md:size-4 bg-red-500"></div>
      </div>
      <div class="pt-2 overflow-hidden items-center bg-black rounded-b-lg">
        <img
          src="@/assets/img/sersi-demo.gif"
          alt="sersi-intro"
          class="w-full object-contain object-left object-bottom"
        />
      </div>
    </motion.div>
  </div>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v';

const mode = useColorMode();
</script>
