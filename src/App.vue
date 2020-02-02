<template>
  <div id="app">
    <!-- 视图，嵌套其他组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from "axios";
// import jsonp from "jsonp"
// import storage from "./storage";

export default {
  name: "app",
  components: {},
  data() {
    return {
      res: {}
    };
  },
  mounted() {
    // storage.setItem('a',1);
    // storage.setItem('user',{a:1});
    // storage.setItem('abc',{a:1},'user');
    // storage.clear('a');
    // storage.clear("a", "user");

    // 本地集成mockjs实现数据mock
    this.axios.get("/user/login").then(res => {
      this.res = res;
    });
  }
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
