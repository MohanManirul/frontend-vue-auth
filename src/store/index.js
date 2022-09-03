import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
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