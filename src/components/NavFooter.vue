<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://product.pconline.com.cn/mobile/#ad=8833" target="_blank">手机</a>
      <span>|</span>
      <a href="https://product.pconline.com.cn/notebook/#ad=8833" target="_blank">笔记本</a>
      <span>|</span>
      <a href="http://detail.zol.com.cn/digital_tv/" target="_blank">电视</a>
      <span>|</span>
      <a href="http://www.mi.com/about/contact" target="_blank">售后服务</a>
    </div>
    <div class="copyright">
      Copyright©2019
      <span class="domain">mi.51purse.com</span> All Right Reserved
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-footer"
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
.footer {
  height: 234px;
  background-color: $colorB;
  border-top: 4px solid #ff7301;
  text-align: center;
  font-size: 16px;
  color: $colorD;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    margin-bottom: 13px;
    a {
      // a标签优先级问题，所以还要写一次颜色属性
      color: $colorD;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
  }
  .copyright {
    .domain {
      color: $colorA;
    }
  }
}
</style>
