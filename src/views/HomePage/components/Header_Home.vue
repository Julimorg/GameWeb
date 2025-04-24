<script setup lang="ts"></script>
<template>
  <div class="header relative top-0 h-[15rem] w-full border-0">
    <img
      src="/src/assets/header_background.png"
      alt=""
      class="header_img absolute w-full h-[15rem]"
    />
    <div class="content-box">
      <h1 class="top-[30%] font-m6x11 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl">
        Super7
      </h1>
      <h2
        class="top-[70%] font-m6x11 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-white"
      >
        Planning the craziest tactics with your hands
        <RouterLink to="/" class="text-customPink">Home / </RouterLink>
        <RouterLink to="/about" class="text-customPink">About</RouterLink>
      </h2>
    </div>
  </div>
</template>
