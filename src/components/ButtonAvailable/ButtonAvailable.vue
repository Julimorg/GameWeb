<template>
  <button class="font-m6x11 text-4xl bg-[#BEBBBB]/[0.25] cursor-pointer w-80 h-30 rounded-2xl">
    {{ text }}
  </button>
</template>
<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
