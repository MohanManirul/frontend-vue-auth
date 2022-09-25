<template>
    <div class="container">
        <h2>Blog List</h2>
        <hr>
         <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">Sl.</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
            </tr>
        </thead>

        <tbody v-for="blog in blogs" :key="blog.id">
            <tr class="table-secondary">
                <th scope="row">{{ blog.id }}</th>
                <th scope="row">{{ blog.title }}</th>
                <th scope="row">{{ blog.description }}</th>
            </tr>
        </tbody>
    </table>
    </div>
   
</template>

<script>
    import axios from 'axios';
    export default {
        name:'Home', // normally the name of file
        data(){
            return{
                blogs : Array
            }
        },
        created(){
            this.getblogs();
        },
        methods:{

            // getblogs method Start

           async getblogs(){
            let url = 'http://127.0.0.1:8000/api/v1/blogs' ;
            await axios.get(url).then(response => {
                this.blogs = response.data.blogs ;
                }).catch(error => {
                        console.log(error);
                });
           },
           
           // getblogs method Start
        },
        mounted(){
            console.log('Blog Component Mounted');
        }
    }
   
</script>