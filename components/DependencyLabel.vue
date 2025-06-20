<template>
  <motion.div :whileHover="{ scale: 1.05 }" class="flex justify-center items-center mb-4">
      <div
        class="border border-gray-200 p-5 px-8 w-auto flex justify-center items-center gap-10 rounded-sm mt-18 shadow-lg"
      >
        <code>npx sersi<span class="text-purplish">@alpha</span> {{ command }}</code>
        <CopyButton :text="`npx sersi@alpha ${command}`" />
      </div>
    </motion.div>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v';
const props = defineProps<{ command: string }>();
</script>
