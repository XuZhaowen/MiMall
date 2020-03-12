<template>
  <div class="orderHeader">
    <div class="container clearfixF">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="order-dis">
        <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
      </div>
      <div class="order-user">{{ username }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "order-header",

  computed: {
    ...mapState(["username"])
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/base.scss";
.orderHeader {
  box-sizing: border-box;
  padding: 30px 0;
  border-bottom: 2px solid #ff6600;
  height: 112px;

  .header-logo {
    float: left;
  }
  .order-dis,
  .order-user {
    // 为了让块元素保持在一行，或者想要给行元素设置宽高边距等属性时
    display: inline-block;
    height: 55px;
    line-height: 55px;
  }
  .order-dis {
    font-size: 28px;
    float: left;
    color: #333333;
    margin-left: 54px;
    p {
      font-size: 14px;
      margin-left: 17px;
      color: #999999;
      font-weight: bold;
    }
  }
  .order-user {
    float: right;
    a {
      color: #666666;
      font-size: 16px;
    }
  }
}
</style>
