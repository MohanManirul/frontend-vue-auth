<template>
    <div class="container">
        <h2>Welcome to Home Page</h2>
        <hr>
    </div>
   
</template>

<script>
    import axios from 'axios';
    export default {
        name:'Home', // normally the name of file
        data(){
        },
        mounted(){
            console.log('Home Page Component Mounted');
        }
    }

</script>