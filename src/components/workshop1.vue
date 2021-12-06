<template>
  <div>
    <h2>Workshop #1 - Limit Message</h2>
    <h2>จักรินทร์ ใจเดียว 002</h2>
    <br>
    <div class="container">
      <label for="">กำหนดขนาดความจุตัวอักษร</label>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="input-group mb-5 center">
        <input type="text" class="form-control form-control-lg" v-model="max">
      </div>
        </div>
        <div class="col-md-4"></div>
      </div>
      <div class="input-group">
        <input type="text" class="form-control form-control-lg" v-model="message" :maxlength="max">
        
      </div>
      <div>
        <br>
            <span class="number1">คงเหลือ  <span class="number" v-text="max-message.length"></span>  ตัวอักษร</span>  
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      message:"",
      max:""
    }
  }
};
</script>

<style>
#app {
  font-family: 'Mitr', sans-serif;
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
