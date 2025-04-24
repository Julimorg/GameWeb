<template>
  <div class="body-content flex flex-col items-center w-full h-[50rem] bg-transparent">
    <PlayingCard
      title="What is Super7 ?"
      desc1="A strategy rogue like card game about bring your deck to travel
      throughout the world!
      "
      desc2="Customizing your deck , choose your Companion, discover all the Rule-breaker selection to help you all along the way!"
      :is-position-changed="false"
    ></PlayingCard>
  </div>
</template>

<script setup lang="ts">
import ButtonText from '../../../components/ButtonText/ButtonText.vue'
import PlayingCard from '@/components/PlayingCard/PlayingCard.vue'
</script>

<style scope></style>
