<template>
    <div class="container-fluid py-4"> 
        <div class="row justify-content-center">
           <div class="col-md-5">
               <div class="card">
                    <div class="card-header text-center">Register Here</div>
                    <div class="card-body">
                        <form @submit.prevent="register">
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" v-model="FormData.name">
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" v-model="FormData.email">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" v-model="FormData.password">
                            </div>                         
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <div class="text-end">
                                <button type="submit" class="btn btn-primary">Register</button>
                            </div>
                            
                        </form> 
                    </div>
               </div>
           </div>
        </div>         
    </div>
 </template>
 <script>
    export default {
     name:"Register",
     data(){
        return{
            FormData:this.initForm()
        }
     },
     mounted(){
            console.log('Register Component Mounted');
        },
     methods:{
        register(){
            this.$store.dispatch('register', this.FormData).then(()=>{
               this.$router.push({
                name: 'Login'
               })  
            })           
        },
        initForm(){
            return{
                name : '',
                email: '',
                password: '',
            }
            
        }
     }
    }
 </script>
 
 <style scoped>
 
 </style>