import Home from '../components/Home.vue';
import Blog from '../components/Blog.vue';
import Login from '../components/auth/Login.vue'; 
import Register from '../components/auth/Register.vue';
import Logout from '../components/auth/Logout.vue';
import store from '../store'

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
   
    {
        name : 'Home',
        path : '/',
        component : Home
    },
    {
        name : 'Blog',
        path : '/blog',
        component : Blog,
        meta:{
            requiresAuth : true
        }
    },
    {
        name : 'Login',
        path : '/login',
        component : Login,
        meta:{
            visitor : true
        }
    },   
    {
        name : 'Register',
        path : '/register',
        component : Register
    },
    {
        name : 'Logout',
        path : '/logout',
        component : Logout,
        meta:{
            requiresAuth : true
        }
    },
] ;

const router = createRouter({
    history : createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!store.getters.loggedIn) {
        next({
            name:'Login'
        })
      } else {
        next()
      }
    }else if(to.matched.some(record => record.meta.visitor)) {
            if (store.getters.loggedIn) {
              next({
                  name:'Home'
              })
            } else {
              next()
            }
    } else {
      next()
    }
  })
export default  router ;