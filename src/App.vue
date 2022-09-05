<template>
  <Nav title="Home" />
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
export default { 
  components: {Nav, Footer}
  }
</script>

<style>
  .text-center{
    text-align: center;
    font-size: 30px;
  }
</style>

