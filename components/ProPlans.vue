<template>
  <div class="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row items-center justify-center gap-12 md:my-32">
    <UCard
      v-for="plan in plans"
      :key="plan.id"
      class="flex flex-col justify-between w-86 shadow-lg"
    >
      <template #header>
        <p
          class="flex text-xl md:text-2xl font-bold items-center justify-center"
          :class="plan.name_color"
        >
          <UIcon :name="plan.icon" class="" /><code>{{ plan.name }}</code>
        </p>
      </template>
      <div class="flex flex-col h-[32vh]">
        <p class="text-gray-500 text-center dark:text-white">
          {{ plan.description }}
        </p>

        <div
          :class="plan.name_color"
          class="text-center text-4xl font-bold mt-10"
        >
          {{ plan.price }}
          <span v-if="plan.alt_price" class="text-gray-400 text-center text-lg"
            >/year</span
          >
          <div
            v-if="plan.alt_price"
            class="flex flex-col items-center text-center"
          >
            <p class="text-gray-500 text-center text-sm font-bold">or</p>
            <p class="text-primary text-center text-lg font-bold">
              {{ plan.alt_price }}
              <span class="text-gray-400 text-center text-sm">/month</span>
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center mt-6">
          <ul>
            <li
              v-for="feature in plan.featureList"
              :key="feature"
              class="flex gap-2 items-center text-gray-500 dark:text-white text-xs md:text-sm"
            >
              <UIcon name="i-gg-check-o" class="text-primary" />
              <p>{{ feature }}</p>
            </li>
          </ul>
        </div>
      </div>

      <template #footer>
        <UButton
        v-if="plan.name === 'Core'"
          block
          :color="plan.call_to_action_color"
          :variant="plan.call_to_action_variant"
          :label="plan.call_to_action"
          class="py-3"
          to="/"
        />

        <UModal
          title="Join Waitlist"
          v-else
        >
          <UButton
            block
            :color="plan.call_to_action_color"
            :variant="plan.call_to_action_variant"
            :label="plan.call_to_action"
            class="py-3"
          />
          <template #content>
            <div class="py-18 flex flex-col items-center gap-8 w-full">
            <div v-if="plan.name === 'Pro'" class="flex items-center gap-2 font-bold text-4xl"><UIcon name="i-hugeicons-star" class="size-8 text-primary" />SERSI <code class="text-primary border border-dashed p-2">Pro</code></div>
            <div v-if="plan.name === 'Teams'" class="flex items-center gap-2 font-bold text-4xl"><UIcon name="i-hugeicons-stars" class="size-8 text-primary" />SERSI <code class="text-primary border border-dashed p-2">Teams</code></div>   
            <WaitingListForm />
            </div>
          </template>
        </UModal>
      </template>
    </UCard>
  </div>
</template>

<script lang="ts" setup>
import type { Plan } from '~/types';
import { ref } from 'vue';
import WaitingListForm from './WaitingListForm.vue';


const plans: Plan[] = [
  {
    id: 1,
    name: 'Core',
    name_color: 'text-purplish',
    icon: 'i-bx-chip',
    description:
      'Great for solo devs learning new frameworks, and starting new projects.',
    price: 'FREE',
    alt_price: '',
    call_to_action: 'Get Started',
    call_to_action_variant: 'outline',
    call_to_action_color: 'neutral',
    featureList: [
      'New features',
      'Community support',
      'Popular frameworks',
      'Fullstack IaC',
    ],
  },
  {
    id: 2,
    name_color: 'text-primary',
    name: 'Pro',
    icon: 'i-hugeicons-star',
    description:
      'The best plan for streamlining freelance projects and getting paid faster.',
    price: '$100',
    alt_price: '$10',
    call_to_action: 'Join Waitlist',
    call_to_action_variant: 'solid',
    call_to_action_color: 'primary',
    featureList: [
      'Everything in Core',
      'Custom Hooks',
      'Scaffold store',
      'CI/CD workflows',
    ],
  },
  {
    id: 3,
    name_color: 'text-primary',
    name: 'Teams',
    icon: 'i-hugeicons-stars',
    description:
      'The ultimate plan for team projects and super specific use cases.',
    price: '$600',
    alt_price: '$60',
    call_to_action: 'Join Waitlist',
    call_to_action_variant: 'solid',
    call_to_action_color: 'primary',
    featureList: [
      'Everything in Pro',
      'Shared Hooks & Scaffold store',
      'Priority support',
      'Custom workflows',
      '5 free seats ($5/month per additional seat)',
    ],
  },
];
</script>

<style></style>
