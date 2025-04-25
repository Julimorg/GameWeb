import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import App from './App.vue'
import router from './router'
import HomeView from './views/HomePage/HomeView.vue'

const app = createApp(HomeView)

app.use(createPinia())
app.use(router)

app.mount('#app')
