<template>
  <div :class="cn('leading-snug tracking-wide', props.class)">
    <div ref="scope">
      <span
        v-for="(word, idx) in wordsArray"
        :key="word + idx"
        class="inline-block text-[clamp(4px,5vw,36px)]"
        :style="spanStyle"
      >
        {{ word }}&nbsp;
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/utils/utils'
import { computed, type HTMLAttributes, onMounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    words: string
    filter?: boolean
    duration?: number
    delay?: number
    class: HTMLAttributes['class']
  }>(),
  { duration: 1.5, delay: 1, filter: true },
)

const scope = ref(null)
const wordsArray = computed(() => props.words.split(' '))

const spanStyle = computed(() => ({
  opacity: 0,
  filter: props.filter ? 'blur(10px)' : 'none',
  transition: `opacity ${props.duration}s, filter ${props.duration}s`,
}))

onMounted(() => {
  if (scope.value) {
    const spans = (scope.value as HTMLElement).querySelectorAll('span')

    setTimeout(() => {
      spans.forEach((span: HTMLElement, index: number) => {
        setTimeout(() => {
          span.style.opacity = '1'
          span.style.filter = props.filter ? 'blur(0px)' : 'none'
        }, index * 200)
      })
    }, props.delay)
  }
})
</script>
