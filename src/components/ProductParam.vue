<template>
  <div class="nav-bar">
    <div class="container">
      <div class="product-title">
        <span class="main-name">小米8 透明探索版</span>
        <span class="sx">|</span>
        <span class="little-name">小米8</span>
        <span class="sx">|</span>
        <span class="little-name">小米8 SE</span>
      </div>
      <div class="product-param">
        <a href="javascript:;">概述</a>
        <span>|</span>
        <a href="javascript:;">参数</a>
        <span>|</span>
        <a class="user" href="javascript:;">用户评价</a>
        <!-- slot插槽实现按钮 -->
        <slot class="buy" name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar"
};
</script>

<style lang='scss'>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.nav-bar {
  height: 70px;
  // 使文字居中
  line-height: 70px;
  border-top: 1px solid $colorH;
  .container {
    // display: flex;
    // justify-content: space-between;
    @include flex(space-between);
    .product-title {
      span {
        margin-right: 5px;
      }
      .main-name {
        font-size: $fontH;
        color: $colorB;
      }
      .little-name {
        font-size: $fontK;
        color: $colorC;
      }
    }
    .product-param {
      span {
        margin: 5px;
        color: $colorD;
      }
      a {
        font-size: $fontJ;
        color: $colorC;
        line-height: 14px;
      }
      .buy {
        margin-left: 5px;
      }
      .user {
        margin-right: 5px;
      }
    }
  }
}
</style>
