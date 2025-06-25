<template>
  <UTooltip
    :text="copied ? 'Copied to clipboard' : 'Copy to clipboard'"
    :delay-duration="200"
    :content="{
      side: 'top',
      align: 'center',
    }"
    :ui="{
      content: 'bg-primary text-black border border-primary p-2',
    }"
  >
    <button
      class="bg-white/20 px-3 py-1 rounded-sm flex w-64 md:w-auto items-center justify-center"
      @click="handleCopy"
    >
      <p class="text-subtitle">
        <span class="text-primary mr-4">:$</span>
        <span class="text-[#F39999] mr-4">{{ prefix }}</span>
        {{ command }}
      </p>
    </button>
  </UTooltip>
</template>

<script lang="ts" setup>
const { copy, copied } = useClipboard();
const toast = useToast();

const props = defineProps({
  prefix: {
    type: String,
    required: true,
  },
  command: {
    type: String,
    required: true,
  },
});

async function handleCopy() {
  await copy(`${props.prefix} ${props.command}`);
  toast.add({
    title: 'Copied to clipboard',
    color: 'primary',
  });
}
</script>
