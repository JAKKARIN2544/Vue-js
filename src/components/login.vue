<template>
    <div class="container">
        <div class="row">
            <div class="col-md-2"></div>
        <div class="col-md-8">
            
             <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                    <input v-model="username" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                    <input v-model="password" type="text" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <br>
            <button class="btn btn-success btn-lg" @click="login">ล็อกอิน</button>
        
        </div>
        <div class="col-md-2"></div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "Login",
    components: {},
    data() {
        return{
            username:"",
            password:"",
        };
    },
    methods: {
        login(){
            axios.get("http://localhost:7777/login", {
                params:{
                    username: this.username,
                    password: this.password,
                },
            headers: {
            "Content-Type": "application/json",
            }
        })
        .then((response) => {
            // this.datas = response.data
            console.log(response.data);
            if(response.data.data.length > 0){
                alert("login success");
            }else{
                alert("กรอกรหัสให้ถูกสิ ไอ้เวร!!!");
            }
        })
       .catch(function (error) {
             console.log(error);
        });
        },
    },
};
</script>