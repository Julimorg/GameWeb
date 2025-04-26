<template>
    <div class="mt-20 w-full flex flex-col-reverse items-center justify-center max-w-90 sm:flex-row 
      sm:max-w-140 md:max-w-210 lg:max-w-360 gap-2" :class="{
        'sm:flex-row': !isPositionChanged,
        'sm:flex-row-reverse': isPositionChanged,
        'md:gap-10': isPositionChanged,
    }">
        <div class="flex flex-col space-y-4 md:space-y-10 text-center sm:text-left lg:max-w-160">
            <h1 class="font-m6x11 text-2xl md:text-2xl lg:text-4xl mt-4 sm:mt-0">{{ title }}</h1>
            <p class="font-m6x11 text-xl md:text-2xl">{{ desc1 }}</p>
            <p class="font-m6x11 text-xl md:text-2xl">{{ desc2 }}</p>
        </div>
        <div class="border-none">
            <img :src="image" class="w-full max-w-150" />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
    desc1: string
    desc2: string
    isPositionChanged: boolean
    image: string
}>()
</script>