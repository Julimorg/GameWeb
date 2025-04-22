<script setup lang="ts"></script>
<template>
  <div class="header">
    <img src="/src/assets/header_background.png" alt="" class="header_img" />
    <div class="content-box">
      <h1>Super 7</h1>
      <h2>Planning the craziest tactics with your hands</h2>
    </div>
  </div>
</template>

<style scoped>
.header_img {
  position: absolute;
  width: 100%;
  height: 15rem;
}
.header {
  top: 0;
  position: relative;
  height: 15rem;
  width: 100%;
  border: none;
}
h1 {
  top: 35%;
}
h2 {
  top: 50%;
  color: #fff;
}
.content-box h1,
h2 {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'm6x 11', sans-serif;
}
</style>
