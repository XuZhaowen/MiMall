<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// import axios from "axios";
import jsonp from "jsonp";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data() {
    return {
      age: 30,
      data: ""
    };
  },
  mounted() {
    let url = "https://m.imooc.com/api/search/searchword";
    // 当使用axios方式请求机会报错，因为慕课网不允许别人调用，所以存在跨域
    // axios(url).then(() => {});
    // jsonp不会报错，因为他不是请求，就是一段js脚本,等于是函数
    jsonp(url, (err, res) => {
      let result = res;
      this.data = result;
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
