// import the createStore method
import { createStore } from 'vuex'

// configure the store
const store = createStore({
    state:{},
    getters:{},
    mutations:{},
    actions:{
        login(){
          console.log('test login...')  
        }
    },
    modules:{}
})
export default  store ;