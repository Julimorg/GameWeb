<template>
  <div class="body-content flex flex-col items-center">
    <h1>Body</h1>
    <!-- Test component to see if it works -->
    <!-- <ButtonText></ButtonText> -->     
    <PlayingCard :title="title" :desc1="desc1" :desc2="desc2" :is-position-changed="false"></PlayingCard>
  </div>
</template>

<script setup lang="ts">
  import ButtonText from '../../../components/ButtonText/ButtonText.vue'
  import PlayingCard from '@/components/PlayingCard/PlayingCard.vue';

  const title = 'playing card';
  const desc1 = "Play cards, earn points. Reach the checkpoint to complete a stage."
  const desc2 = 'Bring your deck with 49 Basic Cards with 7 Basic Colors from 1 - 7 to challenge with 5 stages. The played card will be lost, so use it wisely!';
  
</script>

<style scope>
.body-content {
  width: 100%;
  height: 50rem;
  background-color: transparent;
}
</style>

