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
      <button
        icon="i-lucide-arrow-left"
        to="/"
        size="xl"
      >
        Back to Home
      </button>
      <button
        trailing-icon="i-lucide-arrow-right"
        to="/docs"
        size="xl"
      >
        Explore Plans
      </button>
    </div>
  </div>
</template>

<script setup></script>
