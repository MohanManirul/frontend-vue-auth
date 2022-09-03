<template>
  <Navbar title="Home" />
  <router-view></router-view>
  <Footer></Footer>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default { 
  components: {Navbar, Footer}
  }
</script>

<style>
  .text-center{
    text-align: center;
    font-size: 30px;
  }
</style>

