<template>
    <div class="container-fluid py-4"> 
        <div class="row justify-content-center">
           <div class="col-md-5">
               <div class="card">
                    <div class="card-header text-center">Login Here</div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1">
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <div class="text-end">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                            
                        </form> 
                    </div>
               </div>
           </div>
        </div>         
    </div>
 </template>
 
 <script>
    export default {
     name:"Login"
    }
 </script>
 
 <style scoped>
 
 </style>