<template>
  <!-- <h1>button</h1> -->
  <!-- <img src="../../assets/Button_Background.png"> -->
  <button type="button" class="h-15 w-40 rounded-[14px] text-3xl font-m6x11 font-bold cursor-pointer" :class="{'text-white custom-btn': isActive, 'bg-white text-black':!isActive }">{{ title }}</button>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  isActive: boolean;
}>()
</script>

<style scoped>
.custom-btn {
  background-image: url(../../assets/Button_Background.png);
  background-size: cover;
}
</style>
