import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard'
import SignUp from '../views/SignUp'
import SignIn from '../views/SignIn'
import Payment from '../views/Payment'
import Invoice from '../views/Invoice'
import Product from '../views/Product'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: { protectedRoute: true }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'Signin',
    component: SignIn
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment,
    meta: { protectedRoute: true }
  },
  {
    path: '/invoice',
    name: 'Invoice',
    component: Invoice,
    meta: { protectedRoute: true }
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    meta: { protectedRoute: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const routeIsProtected = to.matched.some(item => item.meta.protectedRoute)
  if (routeIsProtected && store.state.token === null) {
      next('/signin')
  } else {
      next()
  }
})

export default router
