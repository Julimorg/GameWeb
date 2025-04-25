<template>
  <div
    class="hover:scale-x-105 transition-all duration-300 *:transition-all *:duration-300 flex justify-start text-2xl items-center shadow-xl z-10 bg-[#e8e4df] gap-2 p-2 rounded-full"
  >
    <button
      class="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Facebook'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white rounded-full p-2 px-3"
    >
      <a :href="facebookUrl">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1024px-2023_Facebook_icon.svg.png"
          alt="facebook icon"
          class="w-[30px]"
        />
      </a>
    </button>
    <button
      class="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Github'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white rounded-full p-2 px-3"
    >
      <a :href="githubUrl">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="github icon"
          class="w-[30px]"
        />
      </a>
    </button>
    <button
      class="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Linkedin'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white rounded-full p-2 px-3"
    >
      <a :href="linkedinUrl">
        <img
          src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
          alt="linkedin icon"
          class="w-[30px]"
        />
      </a>
    </button>
    <button
      class="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Instagram'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white rounded-full p-2 px-3"
    >
      <a :href="instagramUrl">
        <img
          src="https://i.pinimg.com/474x/1e/d6/e0/1ed6e0a9e69176a5fdb7e090a1046b86.jpg"
          alt="instagram icon"
          class="w-[30px]"
        />
      </a>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  facebookUrl: string
  githubUrl: string
  linkedinUrl: string
  instagramUrl: string
}>()
</script>
