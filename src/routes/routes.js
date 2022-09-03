

import Home from '../components/Home.vue';
import AboutUs from '../components/AboutUs.vue';
import Login from '../components/auth/Login.vue'; 
import Register from '../components/auth/Register.vue';
import Logout from '../components/auth/Logout.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
   
    {
        name : 'Home',
        path : '/',
        component : Home
    },
    {
        name : 'AboutUs',
        path : '/about_us',
        component : AboutUs
    },
    {
        name : 'Login',
        path : '/login',
        component : Login
    },   
    {
        name : 'Register',
        path : '/register',
        component : Register
    },
    {
        name : 'Logout',
        path : '/logout',
        component : Logout
    },
] ;

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router ;