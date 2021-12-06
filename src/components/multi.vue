<template>
  <div id="app">
    <div class="container">
      <h1>multiplication table</h1>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <input type="number" class="form-control form-control-lg" v-model="multiplier">
            <div class="mt-5">
                <div class="row">
            <div v-for="n in max_multi" :key="n">
            {{ multiplier }} * {{ n }} = {{ multiplier * n }}
          </div>
        </div>
            </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      max_multi: 12,
      multiplier: "0",
    };
  },
  methods: {},
};
</script>

