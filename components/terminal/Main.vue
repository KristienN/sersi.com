<template>
    <div class="relative group">
    <div class="hidden dark:block absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-tl-[5rem] blur-xl group-hover:blur-2xl transiton hover:duration-400  duration-1200 ease-in-out"></div>
    <div class="sticky block bg-gray-800 rounded-tl-[3rem] md:rounded-tl-[5rem] rounded-bl-xl border-t-4 border-l-4 border-b-4 border-gray-400">
      <TerminalNav />
      <div class="s-container text-white pb-12">
        <slot />
      </div>
    </div>
    </div>
</template>
