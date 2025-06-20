<template>
  <div class="flex justify-center items-center">
  <div class="flex flex-col justify-center items-center my-10 py-12 gap-8 md:text-center md:w-2/3">
    <p class="text-4xl font-bold">
      Supporting the most popular frameworks and libraries
    </p>
    <p class="text-xl">
      All frameworks are powered by vite, and are ready to use with your
      favourite libraries
    </p>
  </div>
  </div>
  <div class="flex justify-center items-center">
  <div
    class="grid grid-flow-row-dense grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-content-center gap-8 lg:w-2/3 mb-36"
  >
    <motion.div
      v-for="framework in frameworks"
      :key="framework.name"
      :class="`size-24 flex  items-center justify-center border border-gray-300 rounded-lg inset-shadow-sm ${framework.color}`"
      :whileHover="{scale: 0.8, rotate: 10, color: `${mode.value === 'dark' ? 'white' : 'black'}` , outline: '10px double ' + framework.hoverColor, outlineOffset: '2px', boxShadow: '0 0 0 2px ' + framework.color }"
    >
    <NuxtLink :to="framework.link">
      <UIcon :name="framework.icon" :class="`size-16`" />
    </NuxtLink>
    </motion.div>
  </div>
</div>
</template>

<script lang="ts" setup>
import type { Framework } from '~/types';
import { motion } from 'motion-v';

const mode = useColorMode();

const hoverColor = ref('black');
const darkmodeHoverColor = computed(() => {
  hoverColor.value = mode.value === 'dark' ? 'white' : 'black';
});

const frameworks: Framework[] = [
  {
    name: 'Vue',
    icon: 'i-simple-icons-vuedotjs',
    link: 'https://vuejs.org',
    color: 'text-[#42D292]',
    hoverColor: '#42D292',
  },
  {
    name: 'React',
    icon: 'i-simple-icons-react',
    link: 'https://reactjs.org',
    color: 'text-[#58C4DC]',
    hoverColor: '#58C4DC',
  },
  {
    name: 'Svelte',
    icon: 'i-simple-icons-svelte',
    link: 'https://svelte.dev',
    color: 'text-[#FF3B30]',
    hoverColor: '#FF3B30',
  },
  {
    name: 'Tailwind',
    icon: 'i-simple-icons-tailwindcss',
    link: 'https://tailwindcss.com',
    color: 'text-[#00BCFF]',
    hoverColor: '#00BCFF', 
  },
  {
    name: 'Bootstrap',
    icon: 'i-simple-icons-bootstrap',
    link: 'https://getbootstrap.com',
    color: 'text-[#7425EF]',
    hoverColor: '#7425EF',
  },
  {
    name: 'Typescript',
    icon: 'i-simple-icons-typescript',
    link: 'https://www.typescriptlang.org',
    color: 'text-[#2563EB]',
    hoverColor: '#2563EB',
  },
  {
    name: 'Node',
    icon: 'i-grommet-icons-node',
    link: 'https://nodejs.org',
    color: 'text-[#8CC84A]',
    hoverColor: '#8CC84A',
  },
  {
    name: 'Express',
    icon: 'i-simple-icons-express',
    link: 'https://expressjs.com',
    color: 'text-black dark:text-white',
    hoverColor: `${darkmodeHoverColor.value}`,
  },
  {
    name: 'MongoDB',
    icon: 'i-simple-icons-mongodb',
    link: 'https://www.mongodb.com',
    color: 'text-[#12E660]',
    hoverColor: '#12E660',
  },
  {
    name: 'PostgreSQL',
    icon: 'i-logos-postgresql',
    link: 'https://www.postgresql.org',
    color: 'text-[#336791]',
    hoverColor: '#336791',
  },
  {
    name: 'Docker',
    icon: 'i-simple-icons-docker',
    link: 'https://www.docker.com',
    color: 'text-[#2396ED]',
    hoverColor: '#2396ED',
  },
  {
    name: 'GitHub',
    icon: 'i-simple-icons-github',
    link: 'https://github.com',
    color: 'text-black dark:text-white',
    hoverColor: `${darkmodeHoverColor.value}`,
  },
  {
    name: 'GitLab',
    icon: 'i-simple-icons-gitlab',
    link: 'https://gitlab.com',
    color: 'text-[#E34024]',
    hoverColor: '#E34024',
  },
  {
    name: 'Gin',
    icon: 'i-logos-gin',
    link: 'https://github.com/gin-gonic/gin',
    color: 'text-[#2563EB]',
    hoverColor: '#2563EB',
  },
  {
    name: 'Prisma',
    icon: 'i-simple-icons-prisma',
    link: 'https://prisma.io',
    color: 'text-black dark:text-white',
    hoverColor: `${darkmodeHoverColor.value}`,
  },
  {
    name: 'Prometheus',
    icon: 'i-simple-icons-prometheus',
    link: 'https://github.com/prometheus/prometheus',
    color: 'text-red-500',
    hoverColor: 'red',
  },
  {
    name: 'Go',
    icon: 'i-simple-icons-go',
    link: 'https://golang.org',
    color: 'text-[#008ECF]',
    hoverColor: '#008ECF',
  },
  {
    name: 'python',
    icon: 'i-logos-python',
    link: 'https://www.python.org',
    color: 'text-[#2563EB]',
    hoverColor: '#2563EB',
  },
  {
    name: 'FastAPI',
    icon: 'i-simple-icons-fastapi',
    link: 'https://fastapi.tiangolo.com',
    color: 'text-[#009485]',
    hoverColor: '#009485',
  },
  {
    name: 'Fastify',
    icon: 'i-simple-icons-fastify',
    link: 'https://fastify.io',
    color: 'text-black dark:text-white',
    hoverColor: `${darkmodeHoverColor.value}`,
  },
];
</script>
