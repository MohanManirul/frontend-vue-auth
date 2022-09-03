<template>
  <Navbar title="Home" />
  <router-view></router-view>
</template>
<script>
import Navbar from './components/Navbar.vue'
export default {
 
  components: {
    Navbar 
    
  }
};

</script>

<style>
  .text-center{
    text-align: center;
    font-size: 30px;
  }
</style>

