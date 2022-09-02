import ContactList from '../components/ContactList.vue'; 
import AddContact from '../components/AddContact.vue';
import AboutUs from '../components/AboutUs.vue';
import EditContact from '../components/EditContact.vue';
import Home from '../components/Home.vue';
import Vission from '../components/Vission.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
   
    {
        name : 'Home',
        path : '/',
        component : Home
    },
    {
        name : 'ContactList',
        path : '/contact_list',
        component : ContactList
    },
    {
        name : 'AddContact',
        path : '/add_contact',
        component : AddContact
    },
    {
        name : 'AboutUs',
        path : '/about_us',
        component : AboutUs
    },
    {
        name : 'Vission',
        path : '/vission',
        component : Vission
    },
    {
        name : 'EditContact',
        path : '/contact/edit/:id?',
        component : EditContact
    },
] ;

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router ;