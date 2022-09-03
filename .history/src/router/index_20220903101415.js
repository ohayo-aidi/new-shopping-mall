import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/Home.vue'
import Login from '@/views/login/Login.vue'
import Register from '@/views/register/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cartList', // 依据路由id不同跳转不同的页面
    name: 'CartList',
    component: () => import(/* webpackChunkName: "CartList" */ '@/views/cartList/CartList')
  },
  {
    path: '/orderConfirmation/:id', 
    name: 'OrderConfirmation',
    component: () => import(/* webpackChunkName: "OrderConfirmation" */ '@/views/orderC/CartList')
  },
  {
    path: '/shop/:id', // 依据路由id不同跳转不同的页面
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop33" */ '@/views/shop/Shop') // 控制台查看js区可看到shop33什么时候被加载
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      // 已经登陆的跳login page的直接回到Home page
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: (to, from, next) => {
      // 已经登陆的跳register page的直接回到Home page
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage // 取出localStorage.isLogin
  const { name } = to
  const isLoginOrRegister = name === 'Login' || name === 'Register' // to.name 是否等于 Login or Register
  isLogin || isLoginOrRegister ? next() : next({ name: 'Login' }) // 已登录 或者 恰好要去的页面是Login or Register 才放行
  // ( isLogin || to.name === "Login" ) ? next() :next({name: 'Login'});//已登录或者去往login page 才放行
})

export default router
