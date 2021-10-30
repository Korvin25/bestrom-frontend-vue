import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import store from './store'
import router from './router'
import 'vue3-carousel/dist/carousel.css';

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
