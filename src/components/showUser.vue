<template>
  <div class="container">
    <h1>User</h1>
    <table class="table">
      <thead>
        <th>No.</th>
        <th>FristName Lastname</th>
        <th>Phone</th>
        <th>E-mail</th>
        <th>Password</th>
      </thead>
      <tbody>
        <tr v-for="(value, index) in user" v-bind:key="value">
          <td>{{ ++index }}</td>
          <td>{{ value.fname+" "+value.lname }}</td>
          <td>{{ value.phone }}</td>
          <td>{{ value.email }}</td>
          <td>{{ value.password }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {

  name: "App",
  components: {},
  data() {
    return {
      user: [],
      number_user: 0,
    };
  },
  mounted () {
      axios.get("http://localhost:7777/getData", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        this.user = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>