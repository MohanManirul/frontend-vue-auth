import { createApp } from "vue"; // imports only createApp from vue library
import App from "./App.vue"; // linking vue external page'
import routes from './routes/routes' ;
import "bootstrap/dist/css/bootstrap.css"
import store from './store/index'


const app = createApp(App)
// use the store in the App
app.use(store)
app.use(routes)
app.mount('#app')