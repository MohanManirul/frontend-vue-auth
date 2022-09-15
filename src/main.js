import { createApp } from "vue"; // imports only createApp from vue library
import App from "./App.vue"; // linking vue external page'
import routes from './routes/routes' ;
import "bootstrap/dist/css/bootstrap.css"
import store from './store/index'
import "./assets/scss/app.scss";

const app = createApp(App)
app.use(routes)
app.mount('#app')