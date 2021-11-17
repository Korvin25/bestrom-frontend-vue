import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import './carousel.css';
import store from './store'
import router from './router'
import VueSmoothScroll from 'vue3-smooth-scroll'

createApp(App)
    .use(store)
    .use(router)
    .use(VueSmoothScroll)
    .mount('#app')
