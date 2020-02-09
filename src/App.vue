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
  mounted() {}
};
</script>

<style>
/* 导入scss文件 */
@import "./assets/scss/reset.scss";
</style>
