import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/login/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login-view',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/HomeView.vue')
    },
    {
      path: '/cost-form',
      name: 'cost-form',
      component: () => import('../views/cost-form/CostFormView.vue')
    },
    {
      path: '/cost-result',
      name: 'cost-result',
      component: () => import('../views/cost-result/CostResultView.vue')
    }
  ]
})

export default router
