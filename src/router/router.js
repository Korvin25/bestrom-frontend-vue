import {createRouter, createWebHistory} from 'vue-router'
import appPageMain from '../views/appPageMain'

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'appPageMain',
            component: appPageMain,
        }
    ]
})