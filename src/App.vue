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
      this.axios.get("/user").then(res => {
        // to-do 保存到vuex里面
        this.$store.dispatch("saveUsername", res.username);
      });
    },
    getCartCount() {
      this.axios.get("/carts/products/sum").then(res => {
        // to-do 保存到vuex里面
        this.$store.dispatch("saveCartCount", res);
      });
    }
  }
};
</script>

<style>
/* 导入scss文件 */
@import "./assets/scss/reset.scss";
</style>
