<script setup lang="ts">
import ButtonAvailable from '@/components/ButtonAvailable/ButtonAvailable.vue'
import GameplayCard from './components/GameplayCard.vue'
import OverViewCard from './components/OverViewCard.vue'
import { onMounted, ref } from 'vue';

interface GameplayData {
  title: string
  desc: string
  image: string
}

interface GameOverviewData {
  title: string;
  desc: string;
  image: string;
}

const gameplayDatas = ref<GameplayData[]>([]);
const gameOverviewDatas = ref<GameOverviewData[]>([]);

async function fetchGameplay() {
  try {
    const response = await fetch("/data/Gameplay.json", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    gameplayDatas.value = data;
  } catch (e) {
    console.error(e);
  }
}

async function fetchGameOverview() {
  try {
    const response = await fetch("/data/GameOverview.json", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    gameOverviewDatas.value = data;
  } catch (e) {
    console.error("Failed to fetch Game Overview:", e);
  }
}


onMounted(() => {
  fetchGameplay();
  fetchGameOverview();
})

</script>

<template>
  <div class="flex flex-col items-center justify-center mb-30 space-y-10">
    <div class="">
      <GameplayCard v-motion-slide-visible-bottom v-for="(gameplay, index) in gameplayDatas" 
        :key="index" 
        :title="gameplay.title"
        :desc="gameplay.desc" 
        :image="gameplay.image" 
        :is-position-changed="index % 2 === 1">
      </GameplayCard>
    </div>

    <div class="font-m6x11 text-6xl mt-6">Game Overview</div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-10 w-full max-w-360">
      <OverViewCard v-motion-slide-visible-bottom v-for="gameoverview in gameOverviewDatas"
        :key="gameoverview.title"
        :title="gameoverview.title"
        :desc="gameoverview.desc"
        :image="gameoverview.image">
      </OverViewCard>
    </div>
    <div class="font-m6x11 text-5xl mt-20">Ready to discover Super7 ?</div>
    <ButtonAvailable text="Available on 2026" />
  </div>
</template>

<style></style>
