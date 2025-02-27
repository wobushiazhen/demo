import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router';
import HomeView from '../views/layout.vue';
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [   
        {       
            path: '/',
            name: "startPage",
            component: () => import('../views/start.vue'), 
        },  
        {  
            path: '/layout',
            name: 'layout',
            component: HomeView,
            redirect: '/home',   
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('@/views/home.vue'),
                },
            ]
        },
    ],
});
export default router;
