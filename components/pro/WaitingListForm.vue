<template>
  <div class="flex flex-col items-center gap-2 min-w-full" v-if="submitted">
    <UIcon name="i-lets-icons-check-fill" class="size-16 text-primary" />
    <p class="text-2xl font-bold">Thank you for joining the waitlist</p>
    <p class="text-gray-500">Stay tuned for updates on our various platforms</p>
  </div>
  <p class="text-xl" v-else>Join waiting list</p>
  <UForm
    :schema="schema"
    :state="state"
    @submit="onSubmit"
    class="flex flex-col gap-8 text-xl min-w-full"
    v-else
  >
    <UFormField label="Name" required>
      <UInput
        v-model="state.name"
        type="text"
        label="Name"
        trailing-icon="i-lucide-user"
        placeholder="Enter your name"
        size="xl"
        class="min-w-full"
      />
    </UFormField>
    <UFormField label="Email" required>
      <UInput
        v-model="state.email"
        type="email"
        label="Email"
        trailing-icon="i-lucide-at-sign"
        placeholder="Enter your email"
        size="xl"
        class="min-w-full"
      />
    </UFormField>
    <UFormField label="What best describes you." required>
      <UInputMenu
        v-model="state.role"
        :items="roles"
        size="xl"
        class="min-w-full"
      />
    </UFormField>
    <UButton
      block
      type="submit"
      :disabled="submitted"
      :ui="{
        base: 'cursor-pointer',
      }"
      >Join Waitlist</UButton
    >
  </UForm>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import * as v from 'valibot';
import type { FormSubmitEvent } from '@nuxt/ui';

const toast = useToast();
const submitted = ref(false);
const { $supabase } = useNuxtApp();

const schema = v.object({
  name: v.pipe(
    v.string(),
    v.minLength(2, 'Name must be at least 2 characters long')
  ),
  email: v.pipe(v.string(), v.email('Please enter a valid email')),
  role: v.string(),
});

type Schema = v.InferOutput<typeof schema>;

const state = reactive({
  name: '',
  email: '',
  role: '',
});

const roles = ref(['Solo Developer', 'Freelancer', 'Team', 'Company']);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const result = v.safeParse(schema, state);
  if (!result.success) {
    toast.add({
      title: 'Error',
      description: result.issues.map((issue) => issue.message).join(', '),
      color: 'error',
    });
    return;
  }

  const { error } = await $supabase.from('waiting-list').insert({
    name: state.name,
    email: state.email,
    role: state.role,
    plan: 'pro',
  });

  if (error) {
    toast.add({
      title: 'Error',
      description: error.message,
      color: 'error',
    });
    return;
  }

  toast.add({
    title: 'Success',
    description: 'You have been added to the waitlist',
    color: 'success',
  });
  submitted.value = true;
}
</script>

<style></style>
