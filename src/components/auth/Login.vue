<template>
    <div class="container-fluid py-4"> 
        <div class="row justify-content-center">
           <div class="col-md-5">
               <div class="card">
                    <div class="card-header text-center">Login Here</div>
                    <div class="card-body">
                        <form @submit.prevent="login">
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" v-model="credential.email">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" v-model="credential.password">
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <div class="text-end">
                                <button type="submit" class="btn btn-primary">Login</button>
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
     name:"Login",
     data(){
        return{
            credential:{
                email: 'admin@gmail.com',
                password: '123456'
            }
        }
     },
     mounted(){
            console.log('Login Component Mounted');
        },
     methods:{
        login(){
            this.$store.dispatch('login', this.credential).then(()=>{
               this.$router.push({
                name: 'Home'
               })  
            })           
        }
     }
    }
 </script>
 

 