<script setup lang="ts">
import ButtonAvailable from '@/components/ButtonAvailable/ButtonAvailable.vue'
import GameplayCard from './components/GameplayCard.vue'
import OverViewCard from './components/OverViewCard.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center mb-30 space-y-10">
    <div class="">
      <GameplayCard
        v-motion-slide-visible-once-top
        image="src/assets/Playing_Card_Img.png"
        title="Playing card"
        desc1="Play cards, earn points. Reach the checkpoint to complete a stage."
        desc2="Bring your deck with 49 Basic Cards with 7 Basic Colors from 1 - 7 to challenge with 5 stages. The played card will be lost, so use it wisely!"
        :is-position-changed="false"
      >
      </GameplayCard>

      <GameplayCard
        v-motion-slide-visible-once-top
        image="src/assets/Playing_Card_Img.png"
        title="Activate Super Card."
        desc1="Gain even more point by activate Super Card."
        desc2="Super Card activated grant Multiplier to your score, which are multiplicative so that you can activate as more as possible to gain massive value."
        :is-position-changed="true"
      >
      </GameplayCard>

      <GameplayCard
        v-motion-slide-visible-once-top
        image="src/assets/Playing_Card_Img.png"
        title="Choose your companion!"
        desc1="These are many of friends will help you out!"
        desc2="Each companion have specific abilities: Grant some additional way to achieve score, give advantage effect or entirely change the game mechanic to support you. "
        :is-position-changed="false"
      >
      </GameplayCard>

      <GameplayCard
        v-motion-slide-visible-once-top
        image="src/assets/Playing_Card_Img.png"
        title="Roguelike adventure!"
        desc1="Each run generate a random map for player with a lot of surprises."
        desc2="New companion join your team, occurrences of some guests, purchase item from varieties of shop, forge your cards,... and more!"
        :is-position-changed="true"
      >
      </GameplayCard>

      <GameplayCard
        v-motion-slide-visible-once-top
        image="src/assets/Playing_Card_Img.png"
        title="Manage your resources and enhance your strength."
        desc1="Complete a stage give you token to purchase more cards, game-changing items and more to help you in the next stage."
        desc2="New companion join your team, occurrences of some guests, purchase item from varieties of shop, forge your cards,... and more!"
        :is-position-changed="false"
      >
      </GameplayCard>

      <GameplayCard
        v-motion-slide-visible-once-top
        image="src/assets/Playing_Card_Img.png"
        title="Strategy at all choices!"
        desc1="All the choices matter! Adapting with the current circumstances and choose the right path to gain success, even when you almost losing the run."
        desc2=""
        :is-position-changed="true"
      >
      </GameplayCard>
    </div>

    <div class="font-m6x11 text-6xl mt-6">Game Overview</div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-10 w-full max-w-360"
    >
      <OverViewCard
        v-motion-slide-visible-bottom
        image="src/assets/Playing_Card_Img.png"
        title="Choose a level"
        desc="The game verse contain multiple worlds, each world have a number of level. Choose a level to start the game."
      >
      </OverViewCard>

      <OverViewCard
        v-motion-slide-visible-bottom
        image="src/assets/Playing_Card_Img.png"
        title="Choose your path"
        desc="Each level when start will generate a map with multiple directions. Choose the path suit your playstyle: Play hard win hard, manage resources or gamble for strength."
      >
      </OverViewCard>

      <OverViewCard
        v-motion-slide-visible-bottom
        image="src/assets/Playing_Card_Img.png"
        title="Perform you strength in Stage"
        desc="Each stage have a checkpoint score to pass.
  Use carefully your resources before enter the final Boss Stage!"
      >
      </OverViewCard>

      <OverViewCard
        v-motion-slide-visible-bottom
        image="src/assets/Playing_Card_Img.png"
        title="Purchase items and buffs"
        desc="Each stage you pass will give you token to purchase in shop. Always remember to check it after each stage."
      >
      </OverViewCard>

      <OverViewCard
        v-motion-slide-visible-bottom
        image="src/assets/Playing_Card_Img.png"
        title="Final Boss Stage"
        desc="When you reach the final boss stage, whether by your strength or just a luck, ready for the final.
              Boss Stage have a specific effect that change your play. Review your final boss carefully to plan your run. "
      >
      </OverViewCard>

      <OverViewCard
        v-motion-slide-visible-bottom
        image="src/assets/Playing_Card_Img.png"
        title="Play to gain more power!"
        desc="Both win or lose give you the Essences to enhance your Card in gallery or buff of the Universe. That help you pass the next level easier!"
      >
      </OverViewCard>
    </div>
    <div class="font-m6x11 text-5xl mt-20">Ready to discover Super7 ?</div>
    <ButtonAvailable></ButtonAvailable>
  </div>
</template>

<style></style>
