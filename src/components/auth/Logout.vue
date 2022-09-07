<template>
    <div class="container-fluid">
     
         <div class="container">
             <p class="m-0 text-center">Logout</p>
         </div>
    </div>
 </template>
 
 <script>
    export default {
     name:"Logout",
     created(){
        this.$store.dispatch('logout').then(()=>{
               this.$router.push({
                name: 'Login'
               })  
            }) 
     },
     mounted(){
            console.log('Logout Component Mounted');
        },
    }
 </script>
 
 <style scoped>
 
 </style>