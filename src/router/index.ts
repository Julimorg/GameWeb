import { createRouter, createWebHistory } from 'vue-router'
import Body_Home from '@/views/HomePage/components/Body_Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Body_Home,
    },
    {
      path: '/gameplay',
      name: 'gameplay',
      component: () => import('../views/Gameplay/GameplayView.vue'),
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/Gallery/GalleryView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Contact/AboutView.vue'),
    },
   
  ],
})

export default router
