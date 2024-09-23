import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ShoppingCartView from '@/views/ShoppingCartView.vue'
import PaymentView from '@/views/PaymentView.vue'
import FilldataView from '@/views/FilldataView.vue'
import FinishView from '@/views/FinishView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return {
      top:0
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shoppingcart',
      name: 'shoppingCart',
      component: ShoppingCartView,
      meta: {
        title: 'Shopping Cart'
      }
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentView,
      meta: {
        title: 'Payment'
      }
    },
    {
      path: '/filldata',
      name: 'filldata',
      component: FilldataView,
      meta: {
        title: 'Fill Data'
      }
    },
    {
      path: '/finish',
      name: 'finish',
      component: FinishView,
      meta: {
        title: 'Finish'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        title: 'Login'
      }
    }
  ]
})

export default router
