<template>
  <div class="orderPay">
    <div class="container">
      <!-- 页面上半部分 -->
      <div class="orderPage-header">
        <!-- 一 -->
        <div class="submitSuccess clearfix">
          <div class="icon1 fl"></div>
          <div class="submitNews">
            <p>订单提交成功！去付款咯～</p>
            <div class="payTime">
              请在0小时30分内完成支付, 超时后将取消订单
            </div>
            <div class="addressDetail">
              收货信息：高丽 183****0972 北京 北京市 朝阳区 望京街道
              望京(地铁站)
            </div>
          </div>
          <div class="allPrice fr">
            <span>应付总额：2198元</span>
            <div class="showDetail">
              <span>订单详情</span>
              <div class="icon"></div>
            </div>
          </div>
        </div>

        <!-- 二 -->
        <div class="submitDetails">
          <div class="orderNum">
            订单号：5190702816411009
          </div>
          <div class="addressDetail">
            收货信息：高丽 183****0972 北京 北京市 朝阳区 望京街道 望京(地铁站)
          </div>
          <div class="proDetail">
            商品名称：小米8 青春 全网通版 6GB内存 深空灰 64GB 小米8青春版
            标准高透贴膜 高透
          </div>
          <div class="invoiceInformation">
            发票信息：电子发票 个人
          </div>
        </div>
      </div>

      <!-- 三 -->
      <div class="paymentMethod">
        <p>选择以下支付方式付款</p>
        <h3>支付平台</h3>
        <div class="payChoose">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderPay"
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/button.scss";
.orderPay {
  background-color: $colorJ;
  padding-top: 32px;
  .container {
    .orderPage-header {
      height: 444px;
      background-color: $colorG;
      .submitSuccess {
        padding-top: 62px;
        padding-left: 53px;
        border-bottom: 1px solid $colorF;

        .icon1 {
          width: 90px;
          height: 90px;
          background: url("/imgs/icon-gou.png") #80c58a no-repeat center;
          border-radius: 50%;
        }

        .submitNews {
          margin-left: 40px;
        }
      }
    }
  }
}
</style>
