<script setup lang="ts">
import { ref, computed } from 'vue';
import CharacterCards from '../Gallery/components/CharacterCards.vue';

interface Character {
  name: string;
  class: string;
  skill: string;
  redUp: string;
  blueUp: string;
}

const characters = ref<Character[]>([]);
const searchQuery = ref<string>('');
const isLoading = ref<boolean>(true);
const error = ref<string | null>(null);

const classIcons: Record<string, string> = {
  Caller: new URL('../../assets/class-icon/caller.png', import.meta.url).href,
  Controller: new URL('../../assets/class-icon/controller.png', import.meta.url).href,
  Supporter: new URL('../../assets/class-icon/supporter.png', import.meta.url).href,
};

async function loadCharacters() {
  try {
    isLoading.value = true;
    console.log('Fetching characters from /data/characters.json');
    const response = await fetch('/data/characters.json', {
      headers: {
        'Accept': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch characters: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Fetched characters:', data);
    if (!Array.isArray(data)) {
      throw new Error('Expected an array of characters');
    }
    characters.value = data;
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error';
    console.error('Error loading characters:', err);
  } finally {
    isLoading.value = false;
  }
}

const groupedCharacters = computed(() => {
  const filtered = characters.value.filter(character =>
    character.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
  console.log('Filtered characters:', filtered);

  const groups = filtered.reduce((groups: Record<string, Character[]>, character) => {
    const className = character.class;
    if (!groups[className]) {
      groups[className] = [];
    }
    groups[className].push(character);
    return groups;
  }, {});
  console.log('Grouped characters:', groups);
  return groups;
});

loadCharacters();
</script>

<template>
  <div class="w-[80%] mx-auto">
    <div v-if="isLoading" class="text-center py-4">
      <span class="text-gray-500">Loading...</span>
    </div>
    <div v-else-if="error" class="text-center py-4 text-red-500">
      {{ error }}
    </div>
    <div v-else>
      <div class="mt-16 mb-4 max-w-md mx-auto">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search characters..."
          class="w-full p-2 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div v-if="Object.keys(groupedCharacters).length === 0" class="text-center py-4 text-gray-500">
        No characters found.
      </div>
      <div v-for="(group, className) in groupedCharacters" :key="className" class="mb-8">
        <div class="flex items-end space-x-2">
          <img
            v-if="classIcons[className]"
            :src="classIcons[className]"
            alt="Class Icon"
            class="w-6 h-6 inline-block"
          />
          <h2 class="text-2xl font-bold font-edit-undo text-[#BEBBBB]">{{ className }}</h2>
        </div>
        <hr class="border-gray-300 mb-4" />
        <div class="flex flex-wrap justify-left gap-4">
          <CharacterCards v-for="character in group" :key="character.name" :character="character" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>