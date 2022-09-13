<template>
     <div class="container-fluid">
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/blog">Blog</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login" v-if="!loggedIn">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/register" v-if="!loggedIn">Register</router-link>
                    </li>
                    <li class="nav-item" v-if="loggedIn">
                        <router-link class="nav-link" to="/logout">Logout</router-link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
     </div>
</template>

<script>
   export default {
    name:"Nav",
    computed:{
        loggedIn(){
            return this.$store.getters.loggedIn
        }
    }
   }
</script>

<style scoped>

</style>