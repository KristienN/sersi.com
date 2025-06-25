<template>
  <div
    class="font-display overflow-x-hidden overflow-y-hidden bg-white dark:bg-slate-950"
  >
    <AppHeader />
    <TerminalMain>
      <slot />
    </TerminalMain>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup></script>
