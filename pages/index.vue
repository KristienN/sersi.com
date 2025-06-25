<script setup lang="ts">
import { TerminalDirectoryBranch } from '#components';
useHead({
  title: 'Home',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'SERSI is a tool that helps you scaffold your project.',
    },
  ],
});
</script>

<template>
  <main class="pt-5 lg:pt-10">
    <section
      class="flex flex-wrap flex-col space-y-4 md:flex-row md:space-x-36 md:space-y-0 lg:space-x-0 lg:justify-between w-[50rem]"
    >
      <TerminalDirectoryBranch
        directory="~/get-started/with/sersi"
        branch="main"
        className="lg:w-full"
        width="w-64 lg:w-84"
      />
      <TerminalCodeButton prefix="npx" command="sersi@latest create" />
    </section>
    <section class="min-w-md max-w-[70vw] mt-12 space-x-8">
      <p class="text-title text-white">Scaffold Your Projects in Record Time</p>
      <p class="mt-5">
        With sersi, you can generate a project with your favourite framework,
        alongside your most used libraries and utilities. Gone are the days of
        repetitive setup workflows.
      </p>
    </section>
    <section class="min-w-md max-w-[70vw] mt-16 space-x-8">
      <p class="text-title text-primary">Code Infrastructure</p>
      <p class="mt-3 xl:mt-5 text-wrap">
        Define everything from file organization to dependencies, making project
        setup consistent and automated across your team.
      </p>
      <div class="flex">
        <div class="hidden md:flex h-64 p-6 ml-10">
          <img src="~/assets/svg/tree.svg" alt="Tree" class="h-full w-full" />
        </div>
        <div
          class="flex flex-col justify-center space-y-2 lg:space-y-4 xl:space-y-14 mt-8"
        >
          <p>
            Effortlessly generate complex project structures with a single YAML
            configuration.
          </p>
          <div class="w-full md:w-4/5 mt-2">
            <TerminalCodeButton
              prefix="npx"
              command="sersi@latest build -f sersi.yaml"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="min-w-md max-w-[70vw] mt-8 space-x-8">
      <p class="text-title text-primary">Standardised File Structure</p>
      <p class="mt-5">
        Maintain consistent project organization with predefined templates and
        conventions.
      </p>
      <div class="flex flex-col">
        <div class="flex">
          <div class="hidden md:flex h-72 p-6 ml-10 xl:ml-24">
            <img
              src="~/assets/svg/tree-2.svg"
              alt="Tree"
              class="h-full w-full"
            />
          </div>
          <div class="flex flex-col justify-center space-y-0 lg:mt-0 pb-6">
            <p>
              Streamline development with a clear, predictable structure that
              makes it easy for new team members to get started and maintain
              code quality across your projects.
            </p>
          </div>
        </div>
        <div class="flex md:block w-full md:w-1/2">
          <UModal
            :title="`File Structure`"
            :description="`Sample app that was made using vue and tailwindcss, with a node typescript backend written in express.`"
            :ui="{
              body: 'bg-slate-900 font-display font-display',
              title: 'font-display',
            }"
            :close="{
              color: 'primary',
              variant: 'outline',
              class: 'rounded-full',
            }"
          >
            <UButton
              :ui="{
                base: 'text-base md:text-2xl ',
              }"
              class="text-white hover-outline hover-scale bg-accent/50 hover:bg-accent rounded-2xl px-6 py-2 mt-4"
            >
              Show Example File Structure
            </UButton>
            <template #body>
              <div class="h-[60vh] overflow-y-scroll">
                <AppFolderTree />
              </div>
            </template>
          </UModal>
        </div>
      </div>
    </section>
  </main>
</template>
