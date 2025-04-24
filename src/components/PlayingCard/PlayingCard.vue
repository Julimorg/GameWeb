<template>
  <div
    class="mt-10 w-full flex flex-col-reverse items-center justify-center max-w-90 sm:flex-row sm:max-w-140 md:max-w-210 lg:max-w-360 gap-2"
    :class="{
      'sm:flex-row': !isPositionChanged,
      'sm:flex-row-reverse': isPositionChanged,
      'gap-10': isPositionChanged,
    }"
  >
    <div class="flex flex-col h-full text-center sm:text-left md:justify-evenly lg:max-w-160">
      <h1 class="font-bold font-m6x11 text-md md:text-2xl lg:text-4xl">{{ title }}</h1>
      <p class="font-bold font-m6x11 text-md md:text-xl lg:text-3xl">{{ desc1 }}</p>
      <p class="font-bold font-m6x11 text-md md:text-xl lg:text-3xl">{{ desc2 }}</p>
    </div>
    <div class="border-none">
      <img src="../../assets/Playing_Card_Img.png" class="w-full max-w-150" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  desc1: string
  desc2: string
  isPositionChanged: boolean
}>()
</script>
