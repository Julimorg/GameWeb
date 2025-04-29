import './assets/main.css'
import './styles/fonts.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import App from './App.vue'
import router from './router'
import HomeView from './views/HomePage/HomeView.vue'
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(HomeView)

app.use(createPinia())
app.use(router)
app.use(MotionPlugin)


app.mount('#app')
