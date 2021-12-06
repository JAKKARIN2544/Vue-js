<template>
  <div class="container">
    <div class="row">
     <div class="col-md-4"></div>
      <div class="col-md-4">
          <h1>person</h1>
        <table class="table">
            <tr>
                <th>name</th>
                <th>age</th>
                <th>id</th>
            </tr>
          <tr v-for="item in person" :key="item">
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.id }}</td>
          </tr>
        </table>
      </div>
     <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      person: [
        {
          name: "AAA",
          age: 16,
          id: "0001",
        },
        {
          name: "BBB",
          age: 18,
          id: "0002",
        },
        {
          name: "CCC",
          age: 19,
          id: "0003",
        },
        {
          name: "DDD",
          age: 16,
          id: "0004",
        },
        {
          name: "EEE",
          age: 17,
          id: "0005",
        },
      ],
    };
  },
  methods: {},
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
