<template>
  <div id="app">
    <!-- 视图，嵌套其他组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {};
  },
  mounted() {
    // 初始化
    this.getUser();
    this.getCartCount();
  },
  methods: {
    getUser() {
      this.axios.get("/user").then(() => {
        // to-do 保存到vuex里面
      });
    },
    getCartCount() {
      this.axios.get("/carts/products/sum").then(() => {
        // to-do 保存到vuex里面
      });
    }
  }
};
</script>

<style>
/* 导入scss文件 */
@import "./assets/scss/reset.scss";
</style>
