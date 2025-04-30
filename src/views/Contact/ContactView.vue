<script setup lang="ts">
import ContactCards from './Components/ContactCards.vue'
</script>
<template>
  <div class="about flex flex-col items-center justify-center">
    <h1 class="font-m6x11 left-1/2 mt-10 text-4xl text-black">Our Members</h1>

    <ContactCards
      v-motion-slide-visible-once-top
      name="Tran Kien Phong - Software Engineer"
      desc=" Want to be a Solution Architect in future"
      facebookUrl="https://www.facebook.com/JianFongg"
      githubUrl="https://github.com/Julimorg"
      linkedinUrl="https://www.linkedin.com/in/chen-fong-8a59122a1/"
      instagramUrl="https://www.instagram.com/jiann_fongg/"
    />
    <ContactCards
      v-motion-slide-visible-once-top
      name="Le Hoang Quoc Bao - Game Developer"
      desc=" "
      facebookUrl="https://www.facebook.com/quocbao1703"
      githubUrl="https://github.com/GDkelvin"
      linkedinUrl="https://www.linkedin.com/in/qu%E1%BB%91c-b%E1%BA%A3o-66463a35b/"
      instagramUrl=""
    />
    <ContactCards
      v-motion-slide-visible-once-top
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
