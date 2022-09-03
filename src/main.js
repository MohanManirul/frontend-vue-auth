import { createApp } from "vue"; // imports only createApp from vue library
import Vuex from 'vuex'
import App from "./App.vue"; // linking vue external page
import routes from './routes/routes' ;
require("bootstrap")
import "bootstrap/dist/css/bootstrap.css"

createApp(App).use(routes).mount('#app')


export default new Vuex.Store({
    state:{},
    getters:{},
    mutations:{},
    actions:{},
    modules:{}
})