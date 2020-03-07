<template>
  <div class="nav-bar" :class="{'is_fixed':isFixed}">
    <div class="container">
      <div class="product-title">
        <span class="main-name">{{title}}</span>
        <!-- 优化 -->
        <!-- <span class="sx">|</span>
        <span class="little-name">{{title}}</span>
        <span class="sx">|</span>
        <span class="little-name">{{title}}</span>-->
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
  name: "nav-bar",
  // 接收数据
  props: {
    title: String
  },
  data() {
    return {
      // 默认为false
      isFixed: false
    };
  },
  mounted() {
    // 初始化方法，滚动的时候能监测到
    window.addEventListener("scroll", this.initHeight);
  },
  methods: {
    // 获取页面高度
    initHeight() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > 152 ? true : false;
    }
  },
  // 为了避免浪费资源，再退出当前页面之后不触发这个方法
  destroyed() {
    window.removeEventListener("scroll", this.initHeight, false);
  }
};
</script>

<style lang='scss'>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.nav-bar {
  // 处理detail页面
  z-index: 10;
  height: 70px;
  // 使文字居中
  line-height: 70px;
  border-top: 1px solid $colorH;
  background-color: $colorG;

  // 给initHeight设置样式
  &.is_fixed {
    // 绝对定位
    position: fixed;
    top: 0;
    width: 100%;
    // 当吸顶的时候下边增加模糊值
    box-shadow: 0 5px 5px gray;
  }
  .container {
    // display: flex;
    // justify-content: space-between;
    @include flex(space-between);
    .product-title {
      span {
        margin-right: 11px;
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
        margin: 11px;
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
        margin-right: 11px;
      }
    }
  }
}
</style>
