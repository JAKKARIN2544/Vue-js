<template>
  <div class="container">
    <h2>Workshop #2 - Preview Image</h2>
    <h2>จักรินทร์ ใจเดียว 002</h2>
    <br/>
    <div class="row">
      <div class="col-md-6">
        <div v-if="!image">
      <input type="file" class="form-control" @change="onFilechange"/>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4 mt-5">
          <img :src="image" class="img-fluid" />
        </div>
        <div class="col-md-4"></div>
      </div>
       <button class="btn btn-danger mt-5" @click="removeImage">remove</button>
    </div>
      </div>
<!------------------------------------------------------------------------------------------------------------------->
      <div class="col-md-6">
        <div v-if="!image1">
      <input type="file" class="form-control" @change="previewFiles"/>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4 mt-5">
          <img :src="image1" class="img-fluid"/>
        </div>
        <div class="col-md-4"></div>
      </div>
       <button class="btn btn-danger mt-5" @click="removeImage1">remove</button>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      image:"",
      image1:""
    }
  },
  methods:{
      onFilechange(e){
        //   console.log(e.target.files);
        var files=e.target.files
        if (!files.length)
        return
        this.createImage(files[0]);
      },
      createImage(files){
          var reader =new FileReader();
          reader.onload=(e)=>{
              this.image=e.target.result;
          }
          reader.readAsDataURL(files);
      },
      removeImage(){
          this.image="";
      },

      previewFiles(e){
        var files=e.target.files
        if (!files.length)
        return
        this.createImage1(files[0]);
      },
      createImage1(files){
          var reader =new FileReader();
          reader.onload=(e)=>{
              this.image1=e.target.result;
          }
          reader.readAsDataURL(files);
      },
       removeImage1(){
          this.image1="";
      },
  } 
}
</script>

<style>
#app {
  font-family: "Mitr", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.number1 {
  font-size: 100px;
}
.number {
  font-size: 100px;
  color: #ff1e00;
}
</style>
