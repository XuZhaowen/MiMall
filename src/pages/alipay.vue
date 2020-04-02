<template>
  <div class="aliPay">
    <!-- 支付表单 -->
    <!-- v-html
    message可以包含html标签，来展示一个页面的内容。
    特别是，如果后端返回包含了标签的内容，
    可以转化为html页面的形式展示。 -->
    <loading></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import Loading from "./../components/Loading";
export default {
  name: "alipay",
  components: {
    Loading
  },
  data() {
    return {
      content: "", //后台返回的模板
      orderId: this.$route.query.orderId
    };
  },
  mounted() {
    this.paySubmit();
  },
  methods: {
    paySubmit() {
      this.axios
        .post("/pay", {
          orderId: this.orderId,
          orderName: "Vue仿小米商城", //扫码支付时订单名称
          amount: 0.01, //单位元
          payType: 1 //1支付宝，2微信
        })
        .then(res => {
          this.content = res.content;
          setTimeout(() => {
            // 延迟一秒提交表单
            document.forms[0].submit();
          }, 100);
        });
    }
  }
};
</script>

<style></style>
