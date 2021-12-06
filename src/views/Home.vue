<template>
  <div>
    <br>
    <div class="container">
     <div class="row">
       <div class="col-md-4"></div>
       <div class="col-md-4">
         <div class="form-group">
           <label for="number">input score</label>
            <input class="form-control" type="number" v-model="number" >
         </div>
         <br>
         <label for="Grade">Grade: <span v-text="grade"></span></label>
          <br>
         <button class="btn btn-danger mt-4" @onclick="calGrade(number)"> คำนวณเกรด</button>
         <!--<h1><span class=" text-danger mt-5" v-if="number <49 ">F</span>
                    <span class=" text-danger mt-5" v-else-if="number >=50 & number <= 54">D</span>
                    <span class=" text-danger mt-5" v-else-if="number >=55 & number <= 59">D+</span>
                    <span class=" text-danger mt-5" v-else-if="number >=60 & number <= 64">C</span>
                    <span class=" text-danger mt-5" v-else-if="number >=65 & number <= 69">C+</span>
                    <span class=" text-danger mt-5" v-else-if="number >=70 & number <= 74">B</span>
                    <span class=" text-danger mt-5" v-else-if="number >=75 & number <= 79">B+</span>
                    <span class=" text-danger mt-5" v-else-if="number >80">A</span>
         </h1>-->
       </div>
       <div class="col-md-4"></div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components:{},
  data(){
    return{
      name:"jakkarin",
      number:0,
      grade:"F",
    };
  },
  methods:{
    calGrade(number){
        if(number < 49){
          this.grade = "F";
        }else if(number >=50 & number <= 54){
          this.grade = "D";
        }else if(number >=55 & number <= 59){
          this.grade = "D+";
        }else if(number >=60 & number <= 64){
          this.grade = "C";
        }else if(number >=65 & number <= 69){
          this.grade = "C+";
        }else if(number >=70 & number <= 74){
          this.grade = "B";
        }else if(number >=75 & number <= 79){
          this.grade = "B+";
        }else if(number >=80 & number <= 100){
          this.grade = "A";
        }else{
          this.grade = "ERROR";
        }
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
