import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router/auto'
import { routes as autoRoutes } from 'vue-router/auto-routes'

// 手动添加一些路由配置
const customRoutes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/regsiter'  
  },  
  {
    path: '/login',
    meta: { requiresAuth: false },
  },
  {
    path: '/home',
    meta: { requiresAuth: false },
  },
  {
    path: '/404',
    meta: { requiresAuth: false },
  },

  { path: "/:pathMatch(.*)", redirect: "/404", name: "notMatch", hidden: true }
]

// 合并自动生成的路由和手动配置的路由
const routes = [ ...customRoutes,...autoRoutes]

const router = createRouter({ 
  history: createWebHashHistory(), 
  routes,
})

// 全局前置守卫 
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  // 如果目标页面需要权限且没有登录
  if (to.meta.requiresAuth && !loggedIn) {
    return next('/login')
  }

  next()
})

export default router