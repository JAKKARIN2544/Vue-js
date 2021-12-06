<template>
  <div class="container">
    <h2>Workshop #3 - คำนวณราคาสินค้า</h2>
    <h2>จักรินทร์ ใจเดียว 002</h2>
    <br/>
    <div>
      <div class="row">
            <div class="col-md-4" v-for="item in products" :key="item">
              <div class="card h-100">
                    <img :src="item.image" class="card-img-top">
                    <div class="card-body">
                          <h4 class="card-title">{{item.name}}</h4>
                          <p class="card-text">ราคา {{item.price}} บาท</p>
                    </div>
                    <div class="card-footer">
                          <input type="checkbox" class="form-control" @change="selected(item)">
                    </div>
              </div>
            </div>
        </div>
      <br>
      <div class="text-center mr-5">
          <h2>ยอดชำระเงิน {{total()}} บาท</h2>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      products:[
        {
          id:1,
          name:"พิซซ่า",
          price:100,
          image:"https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg",
          active:false
        },
        {
          id:2,
          name:"สเต็ก",
          price:100,
          image:"https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg",
          active:false
        },
        {
          id:3,
          name:"สตอเบอรี่",
          price:100,
          image:"https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755_960_720.jpg",
          active:false
        }
      ]
    }
  },
  methods:{
    selected:function(item){
        item.active = !item.active
    },
    total:function(){
        var sum=0;
        this.products.forEach(function(item){
              if(item.active){
                  sum+=item.price; 
              }
        });
        return sum;
    }
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
