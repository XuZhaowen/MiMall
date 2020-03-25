<template>
  <div>
    <order-header v-bind:title="title">
      <!-- slot插槽 -->
      <template v-slot:tip>
        <span>{{ tip }}</span>
      </template>
    </order-header>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderHeader";
import NavFooter from "../components/NavFooter";
import ServiceBar from "../components/ServiceBar";
export default {
  name: "order",
  components: {
    OrderHeader,
    NavFooter,
    ServiceBar
  },
  data() {
    return {
      title: "",
      tip: ""
    };
  },
  mounted() {
    // 根据路径不同tip值不同
    let path = this.$route.path;
    if (path == "/order/confirm") {
      this.title = " 订单确认";
      this.tip = "请认真填写收货地址！";
    } else if (path == "/order/list") {
      this.title = " 订单列表";
      this.tip = "请确认订单商品！";
    } else if (path == "/order/pay") {
      this.title = " 订单支付";
      this.tip = "请谨防钓鱼链接或诈骗电话，了解更多！";
    }
  }
};
</script>

<style></style>
