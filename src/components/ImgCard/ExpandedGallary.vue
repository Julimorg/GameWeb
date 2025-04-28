<template>
  <div :class="cn('flex h-[20rem] w-[50rem] gap-2', props.class)">
    <div
      v-for="image in images"
      :key="image"
      class="relative flex h-[20rem] flex-1 cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:flex-[3]"
    >
      <img class="relative h-full object-cover" :src="image" :alt="image" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cn } from '@/utils/utils'
import type { HTMLAttributes } from 'vue'

interface Props {
  images: string[]
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>
