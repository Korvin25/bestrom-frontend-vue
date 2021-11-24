import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import VueSmoothScroll from 'vue3-smooth-scroll'
import App from './App.vue'
import './carousel.css'
import router from './router'
import store from './store'
import './theme.css'

createApp(App).use(store).use(router).use(VueSmoothScroll).use(createMetaManager()).mount('#app')
