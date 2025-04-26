<template>
    <div class="max-w-sm font-m6x11 space-y-4 flex flex-col items-center sm:items-start">
        <img :src="image" alt="Image" class="">
        <div class="text-2xl md:text-4xl">{{ title }}</div>
        <div class="text-xl md:text-3xl text-center sm:text-start">{{ desc }}</div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    desc: string;
    image: string;
}>()
</script>