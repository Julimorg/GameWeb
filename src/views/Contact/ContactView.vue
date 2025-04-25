<script setup lang="ts">
import ContactCards from './Components/ContactCards.vue'
</script>
<template>
  <div class="about flex flex-col items-center justify-center">
    <ContactCards
      name="Tran Kien Phong - Software Engineer"
      desc=" Want to be a Solution Architect in future"
      facebookUrl="https://www.facebook.com/JianFongg"
      githubUrl="https://github.com/Julimorg"
      linkedinUrl="https://www.linkedin.com/in/chen-fong-8a59122a1/"
      instagramUrl="https://www.instagram.com/jiann_fongg/"
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
