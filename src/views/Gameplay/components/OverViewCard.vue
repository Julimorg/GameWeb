<template>
    <div class="max-w-sm h-150 font-m6x11 space-y-4 flex flex-col items-center sm:items-start">
        <img :src="image" alt="Image" class="">
        <div class="text-2xl md:text-4xl">{{ title }}</div>
        <div class="text-xl md:text-3xl text-center sm:text-start line-clamp-7">{{ desc }}</div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    desc: string;
    image: string;
}>()
</script>