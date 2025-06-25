<template>
  <div
    class="sticky top-0 border-b-4 border-gray-400 h-16 flex justify-between items-center w-full"
  >
    <nav class="text-gray-200">
      <span class="flex items-center mx-8 md:mx-24 h-16">
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden"
          :class="
            mobileMenuOpen
              ? 'bg-primary rounded-l-full flex items-center justify-center size-12 mr-0'
              : 'flex items-center justify-center size-12'
          "
        >
          <Icon
            v-if="!mobileMenuOpen"
            name="gala:menu-left"
            size="24"
            class="text-gray-400"
          />
          <Icon
            v-else
            name="ic:round-close"
            size="36"
            class="text-black size-10"
          />
        </button>
        <div class="hidden lg:block mr-10">
          <Icon name="gala:menu-left" size="30" class="text-gray-400" />
        </div>
        <ul
          class="hidden lg:flex items-center justify-center h-full list-none space-y-0 mb-0"
        >
          <li
            v-for="item in navItems"
            :key="item.id"
            :class="item.id === selectedId ? selectedClass : ''"
            class="h-full"
            @click="selectedId = item.id"
          >
            <NuxtLink
              :to="item.path"
              class="flex items-center justify-center space-x-4 h-full w-24 md:w-36 cursor-pointer hover:bg-white/30 transtion duration-500 ease-in-out"
            >
              <Icon
                name="ri:terminal-box-fill"
                size="12"
                class="text-gray-200"
              />
              <p class="text-xs md:text-lg">{{ item.name }}</p>
            </NuxtLink>
          </li>
        </ul>
        <div class="relative">
          <div
            v-if="mobileMenuOpen"
            class="z-20 flex items-center space-x-6 md:space-x-12 bg-primary px-5 py-2 text-black h-12 font-bold"
          >
            <NuxtLink
              v-for="item in navItems"
              :key="item.id"
              :to="item.path"
              class="text-xs md:text-lg hover:underline"
              >{{ item.name }}</NuxtLink
            >
          </div>
          <div
            v-if="mobileMenuOpen"
            class="absolute -right-12 top-0 h-full bg-orange-400 flex justify-center items-center rounded-r-full px-3 z-10"
          >
            help
          </div>
        </div>
      </span>
    </nav>
    <NuxtLink to="/help" class="hidden lg:block"
      ><button
        :class="
          helpSelected
            ? 'text-lg text-black bg-amber-600 border-2 rounded-full px-6 py-1 mr-12 hover:text-orange-200 hover:border-orange-200'
            : 'text-lg text-orange-400 border-2 rounded-full px-6 py-1 mr-12 hover:text-orange-200 hover:border-orange-200'
        "
        @click="helpSelected = true"
      >
        help
      </button></NuxtLink
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedId = ref(1);
const mobileMenuOpen = ref(false);
const helpSelected = ref(false);

const route = useRoute();

if (route.path === '/') {
  selectedId.value = 1;
  helpSelected.value = false;
} else if (route.path === '/docs') {
  selectedId.value = 2;
  helpSelected.value = false;
} else if (route.path === '/pro') {
  selectedId.value = 3;
  helpSelected.value = false;
} else if (route.path === '/help') {
  helpSelected.value = true;
  selectedId.value = 0;
}

const selectedClass = 'bg-white/20 border-b-5 border-primary';
const navItems = ref([
  {
    id: 1,
    name: '~/Features',
    path: '/',
  },
  {
    id: 2,
    name: '~/Docs',
    path: '/docs',
  },
  {
    id: 3,
    name: '~/Pro',
    path: '/pro',
  },
]);
</script>
