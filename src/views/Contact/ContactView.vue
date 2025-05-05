<script setup lang="ts">
import ContactCards from './Components/ContactCards.vue'
</script>
<template>
  <div class="about flex flex-col items-center justify-center">
    <h1 class="font-m6x11 left-1/2 mt-10 text-4xl text-black">Our Members</h1>

    <ContactCards
      v-motion-slide-visible-once-top
      name="Le Kha Tuan Anh - [ GamePlay Creator / Logic Design ]"
      desc=" I am Le Kha Tuan Anh, the idea creator for games, handling Gameplay Creation and Logic Design. I am currently a Front-End Developer, but my dream is to become a Game Developer. Passionate about game creation, I collaborated with my team to develop The Super7, inspired by Bagisto on Steam, aiming to deliver a unique experience "
      facebookUrl="https://www.facebook.com/tuananh.lekha"
      githubUrl="https://github.com/Ant-TA"
      linkedinUrl=""
      instagramUrl=""
    />

    <ContactCards
      v-motion-slide-visible-once-top
      name="Tran Kien Phong - [ UI / Content Creator ]"
      desc="I am Phong aka Jian Fong, responsible for UI and Content Creation. Currently, I work as a Front-End Developer. With a passion for software development, I aim to become a Software Engineer in the future. I love game development and, together with my team, created the game The Super7, inspired by Bagisto on Steam."
      facebookUrl="https://www.facebook.com/JianFongg"
      githubUrl="https://github.com/Julimorg"
      linkedinUrl="https://www.linkedin.com/in/chen-fong-8a59122a1/"
      instagramUrl="https://www.instagram.com/jiann_fongg/"
    />

    <ContactCards
      v-motion-slide-visible-once-top
      name="Le Hoang Quoc Bao - [ GamePlay / UI Creator ]"
      desc="I am Le Hoang Quoc Bao, working on UI and Gameplay Creation. Currently, I am a Front-End Developer, with a future goal of becoming a Game Developer. With a love for creating exciting games, I joined my team to build The Super7, inspired by Bagisto on Steam, hoping to create an impressive product"
      facebookUrl="https://www.facebook.com/quocbao1703"
      githubUrl="https://github.com/GDkelvin"
      linkedinUrl="https://www.linkedin.com/in/qu%E1%BB%91c-b%E1%BA%A3o-66463a35b/"
      instagramUrl=""
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
