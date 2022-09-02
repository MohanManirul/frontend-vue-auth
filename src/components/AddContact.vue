<template>
    <div class="container">
        <h2>Add Contact</h2>
       <hr/>
      <div class="col-md-6">
        <!-- errors show start -->
        <div class="alert alert-danger mt-4" v-if="errors.length">
            <ul class="mb-0">
                <li v-for="(error , index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>
        </div>        
        <!-- errors show start -->

        <!-- form start -->

         <form @submit.prevent="saveContact" novalidate>
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

        <!-- form end -->
      </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {        
        name:'AddContact', // normally the name of file
        data(){
            return {
                contact: {},
                name: '',
                email: '',
                designation: '',
                contact_no: '',
                errors:[]
                
            }
        },
        methods : {
          async  saveContact(){
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
                    
                    let url = "http://127.0.0.1:8000/api/save_contact"
                        await axios.post(url,formData).then((response) =>{
                            console.log(response);
                            if(response.status == 200){
                                this.contact.name ='' ;
                                this.contact.email ='' ;
                                this.contact.designation = '' ;
                                this.contact.contact_no = '' ;
                               alert(response.data.message);
                            }else{
                                consile.log('errors');
                            }
                        }).catch(error =>{
                            this.errors.push(error.response);
                        });
                }
            }
        }
    }
</script>