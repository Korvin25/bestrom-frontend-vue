import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import store from './store/store'
import router from './router/router'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
