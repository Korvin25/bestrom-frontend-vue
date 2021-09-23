import {createRouter, createWebHistory} from 'vue-router'
import appPageMain from '../views/appPageMain'
import appPageAbout from "@/views/appPageAbout";
import appPageAboutHistory from "@/views/appPageAboutHistory";
import appPageNews from "@/views/appPageNews";

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'appPageMain',
            component: appPageMain,
        },
        {
            path: '/about',
            name: 'appPageAbout',
            component: appPageAbout,
        },
        {
            path: '/history',
            name: 'appPageAboutHistory',
            component: appPageAboutHistory,
        },
        {
            path: '/news',
            name: 'appPageNews',
            component: appPageNews,
        }
    ]
})