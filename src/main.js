import { createApp } from "vue"; // imports only createApp from vue library
import App from "./App.vue"; // linking vue external page'
import routes from './routes/routes' ;
import "bootstrap/dist/css/bootstrap.css"

createApp(App).use(routes).mount('#app')

