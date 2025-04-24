<template>
  <div class="body-content flex flex-col items-center">
    <h1>Body</h1>
    <!-- Test component to see if it works -->
    <!-- <ButtonText></ButtonText> -->  
    <!-- v-for if having multiple cards  -->
    <PlayingCard :title = "title"  :desc1="desc1" :desc2="desc2" :is-position-changed="false"></PlayingCard>
    <Member></Member>
  </div>
</template>

<script setup lang="ts">
  import ButtonText from '@/components/ButtonText/ButtonText.vue'
  import PlayingCard from '@/components/PlayingCard/PlayingCard.vue';
  import Member from '@/components/Contact_Member/Member.vue';

  const title = 'playing card';
  const desc1 = "Play cards, earn points. Reach the checkpoint to complete a stage."
  const desc2 = 'Bring your deck with 49 Basic Cards with 7 Basic Colors from 1 - 7 to challenge with 5 stages. The played card will be lost, so use it wisely!';

  //testing
  interface PlayingCard{
    title: string;
    desc1: string;
    desc2: string;
    isPositionChanged: boolean;
  }

  const playingCard: PlayingCard[] = [
    {
      title: 'a',
      desc1: 'a1',
      desc2: 'a2',
      isPositionChanged: true
    },
    {
      title: 'a',
      desc1: 'a1',
      desc2: 'a2',
      isPositionChanged: true
    }
  ]
</script>

<style scope>
.body-content {
  width: 100%;
  height: 50rem;
  background-color: transparent;
}
</style>

