import {createRouter, createWebHashHistory} from "vue-router"
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import NotFound from "@/pages/NotFound";

const routerHistory = createWebHashHistory()

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/:catchAll(.*)',
            name: '404',
            component: NotFound
        },

    ]
})

export default routers