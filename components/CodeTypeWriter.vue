<template>
  <div class="h-full w-full flex flex-col">
    <div class="h-12 w-full flex items-center p-2 space-x-2 border-2 border-gray-200 rounded-t-md">
      <div class="flex items-center space-x-2 border p-1 rounded-full px-3 bg-gray-100 inset-shadow-2xl">
        <UIcon name="i-lucide-code" class="size-3 text-black"/>
        <p class="text-sm text-black italic">post_install.py</p>
      </div>
    </div>
    <pre class="bg-gray-900 text-green-400 p-4 rounded-b-md font-mono overflow-x-hidden text-sm md:text-xs lg:text-sm whitespace-pre-wrap md:h-[32vh] lg:h-[52vh] border-2 border-gray-200">
      <code>{{ displayedText }}</code>
    </pre>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const displayedText = ref('');

onMounted(() => {
  const text = `
pip install sqlalchemy psycopg2

# seed script
from sqlalchemy import create_engine
from models import User

engine = create_engine(\"postgresql://user:password@localhost/db\")
with engine.connect() as conn:
    conn.execute(User.__table__.insert(), [
        {\"name\": \"Alice\"},
        {\"name\": \"Bob\"},
    ])
print(\"Database seeded successfully.\")`
  let index = 0;
  const interval = setInterval(() => {
    displayedText.value += text[index];
    index++;
    if (index === text.length) {
      clearInterval(interval);
    }
  }, 30);
});


</script>

<style>

</style>