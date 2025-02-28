import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/products/Product.vue'),
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: () => import('@/views/transactions/Transaction.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
