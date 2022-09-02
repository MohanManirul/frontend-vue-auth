<template>
     <header>
    <h3 class="text-center">Vue 3 crud</h3> 
    <hr>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact_list">Contact List</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/add_contact">Add Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about_us">About Us</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/vission">Vission</router-link>
        </li>
      </ul>
    </div>

   <p>fdfdf</p>
  </div>
</nav>
    </div>

</header>
</template>

<script>
   export default {
    name: 'Header',
    props:{
      title: String
    }
   }
</script>