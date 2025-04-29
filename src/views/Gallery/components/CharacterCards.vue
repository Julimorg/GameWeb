<script setup lang="ts">
import { defineProps } from 'vue';

interface Character {
  name: string;
  class: string;
  skill: string;
  redUp: string;
  blueUp: string;
}

defineProps<{
  character: Character;
}>();

// Map class to image icon using Vite's asset import
const classIcons: Record<string, string> = {
  Caller: new URL('../../../assets/class-icon/caller.png', import.meta.url).href,
  Controller: new URL('../../../assets/class-icon/controller.png', import.meta.url).href,
  Supporter: new URL('../../../assets/class-icon/supporter.png', import.meta.url).href,
};
</script>

<template>
  <div class="w-[300px] h-[400px] bg-white border border-black flex flex-col">
    
    <!-- Image Placeholder with Character Name and Skill Description -->
    <div class="flex-grow bg-while-200 flex flex-col justify-center relative">
       <!-- Class Badge -->
        <div class="absolute top-2 right-2 text-gray-500 px-2 py-1 flex items-center space-x-2 font-edit-undo">
        <img
            v-if="classIcons[character.class]"
            :src="classIcons[character.class]"
            alt="Class Icon"
            class="w-4 h-4 inline-block mr-1"
        />
        <span>{{ character.class }}</span>
        </div>
        
      <!-- Character Name and Skill Description at the bottom -->
      <div class="mt-auto">
        <div class="w-full bg-gray-0 text-gray-500 font-edit-undo text-lg font-bold character-name">
          {{ character.name }}
        </div>
        <div class="w-full p-2 bg-gray-100 bg-opacity-75 text-black-500 font-m6x11 text-sm text-left character-skill">
          {{ character.skill }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.character-name{
    color: #BEBBBB;
    text-align: left;
    margin-left: 20px;
    font-family: "Edit Undo BRK";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 36px */
    letter-spacing: -0.264px;
}
.character-skill{
    border-radius: 20px;
    background: rgba(115, 115, 115, 0.10);
    display: inline-flex;
    padding: 12px 9px 4px 12px;
    justify-content: center;
    align-items: center;
    font-size: 18px;
}
</style>