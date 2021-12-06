<template>
  <div id="app">
    <div id="nav">
        <div class="container">
      <div class="row">
        <div class="col-md-2">
          <h5>input Grade</h5>
          <router-link class="btn btn-danger btn-lg" to="/grade">View</router-link>
        </div>
        <div class="col-md-2">
          <h5>workshop1</h5>
          <router-link class="btn btn-danger btn-lg" to="/workshop1">View</router-link>
        </div>
        <div class="col-md-2">
          <h5>workshop2</h5>
          <router-link class="btn btn-danger btn-lg" to="/workshop2">View</router-link>
        </div>
        <div class="col-md-2">
          <h5>workshop3</h5>
          <router-link class="btn btn-danger btn-lg" to="/workshop3">View</router-link>
        </div>
        <div class="col-md-3">
          <h5>multiplication table</h5>
          <router-link class="btn btn-danger btn-lg" to="/multi">View</router-link>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-2">
          <h5>person</h5>
          <router-link class="btn btn-danger btn-lg" to="/person">View</router-link>
        </div>
        <div class="col-md-2">
          <h5>show user</h5>
          <router-link class="btn btn-danger btn-lg" to="/users">View</router-link>
        </div>
        <div class="col-md-2">
          <h5>register</h5>
          <router-link class="btn btn-danger btn-lg" to="/register">View</router-link>
        </div>
        <div class="col-md-2">
          <h5>login</h5>
          <router-link class="btn btn-danger btn-lg" to="/login">View</router-link>
        </div>
      </div>
    </div>
    </div>
    <hr>
  <router-view/>
    
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> --->
  </div>
</template>

<style>
#app {
  font-family: 'Mitr', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
