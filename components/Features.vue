<template>
  <div class="flex justify-center md:h-[235vh] my-12 md:my-32">
    <div class="md:w-1/2 md:h-[148vh] text-left">
      <div class="h-[56vh] flex flex-col justify-center items-start gap-8 mb-16">
        <div class="flex items-center gap-2 text-xl md:text-lg lg:text-xl text-primary"><UIcon name="i-lucide-code" class="size-5" />Code infrastructure</div>
        <p class="text-4xl md:text-2xl lg:text-4xl font-bold">Comprehensive Scaffold-as-Code</p>
        <p class="text-xl md:text-lg lg:text-xl text-gray-500 md:w-4/5">
          Effortlessly generate complex project structures with a single YAML configuration. 
          Define everything from file organization to dependencies, making project setup 
          consistent and automated across your team.
        </p>
        <DependencyLabel command="build -f sersi.yaml" />
      </div>
      <div class="h-12 md:h-[26vh]"></div>
      <div class="h-[60vh] flex flex-col justify-center items-start gap-8 my-16">
        <div class="flex justify-center items-center gap-2 text-xl md:text-lg lg:text-xl text-primary"><UIcon name="i-lucide-file" class="size-5" />File management</div>
        <p class="text-4xl md:text-2xl lg:text-4xl font-bold">Standardised File Structure</p>
        <p class="text-xl md:text-lg lg:text-xl text-gray-500 md:w-4/5">
          Maintain consistent project organization with predefined templates and conventions. 
          Streamline development with a clear, predictable structure that makes it easy for 
          new team members to get started and maintain code quality across your projects.
        </p>
      </div>
      <div class="h-12 md:h-[26vh]"></div>
      <div class="h-[60vh] mb-36">
        <div class="border border-primary border-dashed flex flex-col justify-center items-start gap-8 p-3 md:p-8 py-12 md:mr-12">
          <div class="flex justify-center items-center gap-2 text-xl md:text-lg lg:text-xl text-primary"><UIcon name="i-hugeicons-stars" class="size-5" />Pro Features</div>
        <p class="text-4xl md:text-2xl lg:text-4xl font-bold">Fully Customizable Scaffolds</p>
        <p class="text-xl md:text-lg lg:text-xl text-gray-500 md:w-4/5">
          Join Pro to unlock customizability - 
          Add custom hooks for pre and post installation scripts that you can run to install extra dependencies, seed databse or initialise third party integrations.
        </p>
        <UButton icon="i-hugeicons-stars" variant="outline" to="/pro" size="xl">Join Pro</UButton>
      </div>
        </div>
        
    </div>
    <motion.div
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{
        duration: 0.2,
        type: 'tween',
        ease: 'easeInOut'
      }"
      :whileHover="{ scale: 1.02 }"
      class="hidden md:block md:w-[300px] lg:w-[500px] md:h-[36vh] lg:h-[56vh] border border-gray-200 shadow-lg rounded-lg sticky top-32 md:ml-6 lg:ml-0"
    >
      <motion.div v-if="scrollValue < 0.40"
      key="yaml"
      :initial="{ opacity: 0, scale: 1 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{
        duration: 0.5,
        type: 'tween',
        ease: 'easeInOut'
      }"
      >
       <CodeSnippet />
      </motion.div>
      <motion.div v-if="scrollValue >= 0.40 && scrollValue < 0.55"
      key="tree"
      :initial="{ opacity: 0, scale: 1 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{
        duration: 0.6,
        type: 'tween',
        ease: 'easeInOut'
      }"
      class="h-full w-full p-4 overflow-y-auto">
        <FolderTree />
      </motion.div>
      <motion.div v-if="scrollValue >= 0.55">
        <CodeTypeWriter />
      </motion.div>
    </motion.div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { motion, useScroll } from 'motion-v';
import { useClipboard } from '@vueuse/core';

const scrollValue = ref(0);
const { scrollYProgress } = useScroll();
const { copy } = useClipboard();
const copied = ref(false);

const handleCopy = () => {
  copy('npx sersi@alpha build -f sersi.yaml');
  copied.value = true;
};

scrollYProgress.on('change', (value) => {
  console.log(scrollValue.value); // Uncomment this line if you want to debug the scroll value
  scrollValue.value = value;
});

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
