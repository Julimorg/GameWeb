<script setup lang = 'ts'>
import ContactCards from './Components/ContactCards.vue';

</script>
<template>
  <div class="about flex flex-col items-center justify-center ">
      <ContactCards
      name = "Tran Kien Phong - Software Engineer"
      desc = " Want to be a Solution Architect in future"
      />
  </div>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
