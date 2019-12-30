<template>
  <div id="app">
    <!-- 视图，嵌套其他组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from "axios";
// import jsonp from "jsonp"

export default {
  name: "app",
  components: {},
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
