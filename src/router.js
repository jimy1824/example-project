import Vue from 'vue'
import Router from 'vue-router'
import BaseView from '@/components/BaseView'
import Loginpage from '@/views/Login'
import Home from '@/views/home'
import Test01 from '@/views/test01'

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'test01',
    //   component: Test01
    // },
    {
      path: '',
      name: 'BaseView',
      component: BaseView
    },
    {
      path: '/login',
      name: 'login',
      component: Loginpage
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
  ]
})
export const router = new Router();
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  // const publicPages = ['/login','/forget/password/email/','/forget/password','/forget/password/confirm/','/singnup/'];
  // const authRequired = !publicPages.includes(to.path);
  // const loggedIn = localStorage.getItem('user-token');
  // if (authRequired && !loggedIn) {
    return next('/login');
  // }

  // next();
});
