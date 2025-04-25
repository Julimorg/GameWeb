<template>
  <div
    class="card relative font-m6x11 w-[50%] h-[20rem] translate-[-6px -6px] bg-[#ff66a3] border-[3px] border-[solid] border-[#000000] [box-shadow:12px_12px_0_#000000] overflow-hidden [transition:all_0.3s_ease]"
  >
    <div
      class="head font-m6x11 text-xl/[50px] w-full h-[50px] bg-[#ffffff] padding-[5px 20px] text-[#000000] border-b-[3px_solid_#000000] text-center"
    >
      {{ name }}
    </div>
    <div class="content padding-[8px 12px] text-sm font-semibold  p-[10px] h-[10rem] w-full bg-[#333]">
      {{ desc }}
      <br />
    </div>
    <div class="information-box w-[30%] bg-[#333] h-[4rem] flex flex-col items-center justify-center">
      <button class="button"></button>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  name: string
  desc: string
}>()
</script>
<style scoped>
.button {
  padding: 5px 10px;
  margin-top: 10px;
  border: 3px solid #000000;
  box-shadow: 3px 3px 0 #000000;
  font-weight: 750;
  background: #4ade80;
  transition: all 0.3s ease;
  cursor: pointer;
}

.button:hover {
  translate: 1.5px 1.5px;
  box-shadow: 1.5px 1.5px 0 #000000;
  background: #1ac2ff;
}

.button:active {
  translate: 3px 3px;
  box-shadow: 0 0 0 #000000;
}

.card:hover {
  translate: -6px;
}
</style>
