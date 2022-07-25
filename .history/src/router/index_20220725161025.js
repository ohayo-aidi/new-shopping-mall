import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/home/Home.vue";
import Login from "@/views/login/Login.vue";
import Register from '@/views/register/Register.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      // 已经登陆的跳login page的直接回到Home page
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home'}) : next()
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: (to, from, next) => {
      // 已经登陆的跳register page的直接回到Home page
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home'}) : next()
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach( (to,from,next) => {
  const { isLogin } = localStorage;//取出localStorage.isLogin
  const { name } = to;
  const isLoginOrRegister = ( name === 'Login' || name)//to.name 是否等于 Login or Register
  (isLogin || isLoginOrRegister) ? next() : next({name: 'Login'})//已登录 或者 恰好要去的页面是Login or Register 才放行
  // ( isLogin || to.name === "Login" ) ? next() :next({name: 'Login'});//已登录或者去往login page 才放行
}) 

export default router;
