<template>
  <div
    class="font-display overflow-x-hidden overflow-y-hidden bg-white dark:bg-slate-950"
  >
    <AppHeader />
    <TerminalMain>
      <slot />
    </TerminalMain>
    <AppFooter />
    <Analytics />
  </div>
</template>

<script lang="ts" setup>
import { Analytics } from '@vercel/analytics/vue';
</script>
