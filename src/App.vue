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
    // 加判断，当进入首页时，执行方法
    if (this.$cookie.get("userId")) {
      this.getUser();
      this.getCartCount();
    }
  },
  methods: {
    getUser() {
      // 设置默认值，保证不登录也不会报错
      this.axios.get("/user").then((res = {}) => {
        // to-do 保存到vuex里面
        this.$store.dispatch("saveUsername", res.username);
      });
    },
    getCartCount() {
      this.axios.get("/carts/products/sum").then((res = 0) => {
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
