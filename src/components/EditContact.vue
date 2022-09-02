<template>
    <div class="container">
        <h2>Edit Contact</h2>
       <hr/>
      <div class="col-md-6">
         <form @submit.prevent="updateContact" novalidate>
            <div class="form-group">
                <label class="form-label mt-4">Name : </label>
                <input class="form-control" type="text" placeholder="Enter your name" v-model="contact.name">
            </div>

            <div class="form-group">
                <label class="form-label mt-4">Email : </label>
                <input class="form-control" type="email" placeholder="Enter your email" v-model="contact.email">
            </div>

            <div class="form-group">
                <label class="form-label mt-4">Designation : </label>
                <input class="form-control" type="text" placeholder="Enter your Designation" v-model="contact.designation">
            </div>

            <div class="form-group">
                <label class="form-label mt-4">Contact Number : </label>
                <input class="form-control" type="text" placeholder="Enter your Contact Number" v-model="contact.contact_no">
            </div> <br>
            <button class="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {        
        name:'EditContact',
        data(){
            return {
                contact:{
                    name:'',
                    email:'',
                    designation:'',
                    contact_no:'',
                    errors:[]
                }
                
            }
        },
        created(){
           this.getContactbyId(); 
        },
        methods : {
          async getContactbyId(){
            let url = `http://127.0.0.1:8000/api/get_contact/${this.$route.params.id}`;
            await axios.get(url).then(response => {
                console.log(response);
                this.contact = response.data;
            });
          },
          async updateContact(){
             this.errors = [];
                if(!this.contact.name){
                    this.errors.push("name is required");
                }
                if(!this.contact.email){
                    this.errors.push("email is required");
                }
                if(!this.contact.designation){
                    this.errors.push("designation is required");
                }
                if(!this.contact.contact_no){
                    this.errors.push("contact_no is required");
                }
                if(!this.errors.length){
                    let formData = new FormData();
                    formData.append('name', this.contact.name);
                    formData.append('email', this.contact.email);
                    formData.append('designation', this.contact.designation);
                    formData.append('contact_no', this.contact.contact_no);
                    
                    let url = `http://127.0.0.1:8000/api/update_contact/${this.$route.params.id}`
                        await axios.post(url,formData).then((response) =>{
                            console.log(response);
                            if(response.status == 200){
                               alert(response.data.message);
                            }else{
                                consile.log('errors');
                            }
                        }).catch(error =>{
                            this.errors.push(error.response);
                        });
                }
          }
        },
        mounted: function(){
            console.log('Edit Component from component loaded...');
        }
    }
</script>