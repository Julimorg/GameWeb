<script setup lang="ts">
import ButtonAvailable from '@/components/ButtonAvailable/ButtonAvailable.vue'
import ExpandedGallary from '@/components/ImgCard/ExpandedGallary.vue'
import PlayingCard from '@/components/PlayingCard/PlayingCard.vue'

//? Img
import playerCard1 from '@/assets/player_card_1.png'
import playerCard2 from '@/assets/player_card_2.png'
import specialCard1 from '@/assets/special_card_1.png'
import specialCard2 from '@/assets/special_card_2.png'
import superCard1 from '@/assets/super_card_1.png'

const images = [playerCard1, playerCard2, specialCard1, specialCard2, superCard1]
</script>

<template>
  <div class="body-content flex flex-col items-center w-full h-[65rem] bg-transparent">
    <PlayingCard
      v-motion-slide-visible-once-top
      title="What is Super7 ?"
      desc1="A strategy rogue like card game about bring your deck to travel
      throughout the world!
      "
      desc2="Customizing your deck , choose your Companion, discover all the Rule-breaker selection to help you all along the way!"
      :is-position-changed="false"
    ></PlayingCard>

    <ExpandedGallary :images="images" class="mt-[2rem]" v-motion-slide-visible-once-top />

    <div class="mt-[4rem] mb-[5rem]">
      <ButtonAvailable v-motion-slide-visible-once-top text="Available on 2026" />
    </div>
  </div>
</template>
