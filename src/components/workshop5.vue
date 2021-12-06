<template>
  <div class="container">
    <h2>Workshop #4 - ตะกร้าสินค้า</h2>
    <h2>จักรินทร์ ใจเดียว 002</h2>
    <br/>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      image: "",
    };
  },
  methods: {
    onFilechange: function (e) {
      var files = e.target.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(files) {
      var reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(files);
    },
    removeImage(){
      this.image="";
    }
  }
};
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
