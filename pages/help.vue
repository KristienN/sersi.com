<template>
  <div class="flex flex-col justify-center items-center h-[60vh] gap-6">
    <UIcon
      name="i-lucide-hammer"
      size="64"
    />
    <h1 class="text-[4rem] font-bold">
      Nothing to see here ... <span class="text-purplish italic">yet.</span>
    </h1>
    <p class="text-xl">
      We are working hard to bring you the best possible developer experience.
    </p>
    <div class="flex justify-center space-x- items-center gap-2 w-full">
      <button>
        <NuxtLink to="/">Back to Home</NuxtLink>
      </button>
      <button>
        <NuxtLink to="/docs"> Explore Plans</NuxtLink>
      </button>
    </div>
  </div>
</template>
