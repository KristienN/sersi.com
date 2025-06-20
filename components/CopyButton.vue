<template>
<UButton
          icon="i-lucide-copy"
          @click="handleCopy"
          variant="outline"
          :color="diabled ? 'neutral' : 'primary'"
          :disabled="diabled"
          :ui="{
            base: 'hover:cursor-pointer',
          }"
        />
</template>
<script lang="ts" setup>
import { useClipboard } from '@vueuse/core';
const { copy } = useClipboard();
const toast = useToast();
const props = defineProps<{ text: string }>();

const diabled = ref(false);

const handleCopy = () => {
  copy(props.text);
  toast.add({
    title: 'Copied to clipboard',
    color: 'success',
    duration: 2000,
  });
  diabled.value = true;
  setTimeout(() => {
    diabled.value = false;
  }, 2000);
};
</script>