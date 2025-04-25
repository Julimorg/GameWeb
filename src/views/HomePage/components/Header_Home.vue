<script setup lang="ts">
import ButtonText from '@/components/ButtonText/ButtonText.vue';
</script>
<template>
  <div class="header relative top-0 h-[15rem] w-full border-0">
    <img src="/src/assets/header_background.png" alt="" class="header_img absolute w-full h-[15rem]" />
    <div class="content-box">
      <h1 class="top-[30%] font-m6x11 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl">
        Super7
      </h1>
      <h2 class="top-[70%] font-m6x11 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-white">
        Planning the craziest tactics with your hands
      </h2>
      <div class="absolute top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 space-x-8 bg-[#BEBBBB]/[0.25]  rounded-[14px] shadow-lg">
          <RouterLink to="/" custom v-slot="{ navigate, isActive }">
            <ButtonText title="SUPER7" :is-active="isActive" @click="navigate"></ButtonText>
          </RouterLink>
          <RouterLink to="/gameplay" custom v-slot="{ navigate, isActive }">
            <ButtonText title="Gameplay" :is-active="isActive" @click="navigate"></ButtonText>
          </RouterLink>
          <RouterLink to="/gallery" custom v-slot="{ navigate, isActive }">
            <ButtonText title="Gallery" :is-active="isActive" @click="navigate"></ButtonText>
          </RouterLink>
          <RouterLink to="/about" custom v-slot="{ navigate, isActive }">
            <ButtonText title="About" :is-active="isActive" @click="navigate"></ButtonText>
          </RouterLink>
        </div>
    </div>
    
  </div>
</template>
