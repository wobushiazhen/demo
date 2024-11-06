import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home1',
      component: homePage,
      children: [
        {
          path: '/1',
          name: '',
          component: import('../views/exprive/1.vue')
        }, 
        {
          path: '/2',
          name: '',
          component: import('../views/exprive/2.vue')
        }
      ]
    }
  ]
})

export default router
