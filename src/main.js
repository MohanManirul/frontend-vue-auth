import { createApp } from "vue"; // imports only createApp from vue library
import App from "./App.vue"; // linking vue external page'
import routes from './routes/routes' ;
import store from './store';
import "bootstrap/dist/css/bootstrap.css"

createApp(App).use(routes,store).mount('#app')




