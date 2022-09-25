<template>
    <div class="container">
        <h2>File Upload Page</h2>
        <form @submit.prevent="uploadFile" enctype="multipart/form-data">
               
            <div class="mb-3">
                <input type="file" id="file" ref="file" class="form-control" @change="onChange" >
            </div>

            <div class="text-end">
                <button type="submit" class="btn btn-primary">Upload</button>
            </div>
            
        </form> 
    </div>
   
</template>

<script>
    import axios from 'axios';
    export default {
        name:'FileUpload', // normally the name of file
        data(){
            return{
                file:''
            }
        },
        methods:{
            onChange(e) {
                this.file = e.target.files[0];
            },
            async uploadFile(){
                this.file = this.$refs.file.files[0];
                let formData = new FormData();
                formData.append('file',this.file);
                this.$refs.file.value = '' ;
                const config = {
                headers:{'Content-Type' : 'multipart/form-data'}
                     };
                await axios.post('http://127.0.0.1:8000/api/v1/imageUpload', formData,config,
                    ).then(function(response){
                    if(!response.data){
                        alert('File not Uploaded !');
                    }else{
                        alert('File uploaded Successfully...!')
                    }
                }).catch(function(error){
                    console.log(error);
                });
            }
        },
        mounted(){
           
            console.log('FileUpload Component Mounted');
        }
    }
   
</script>