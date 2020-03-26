<template>
  <div class="orderConfirm">
    <div class="container">
      <div class="orderConfirm-main">
        <div class="confirm-address">
          <h2>收货地址</h2>
          <div class="add-address">
            <div class="icon"></div>
            <div class="add-new">
              <a href="javascript:;">
                添加新地址
              </a>
            </div>
          </div>
        </div>
        <div class="confirm-information clearfix">
          <div class="delivery-method">
            <h2 class="fl">配送方式</h2>
            <span>包邮</span>
          </div>
          <div class="pro-invoice clearfix">
            <h2 class="fl">发票</h2>
            <a href="">电子发票</a>
            <a href="">个人</a>
            <a href="">商品明细</a>
          </div>
          <div class="pro-information">
            <div class="pro-count">
              <span>商品件数：</span>
              <span class="pri">7件</span>
            </div>
            <div class="all-price">
              <span>商品总价：</span>
              <span class="pri"> 999元</span>
            </div>
            <div class="activity">
              <span>优惠活动：</span>
              <span class="pri"> 0元</span>
            </div>
            <div class="freight">
              <span>运费：</span>
              <span class="pri"> 0元 </span>
            </div>
            <div class="should-pay">
              <span>应付总额：</span>
              <span class="pri"> 6969元 </span>
            </div>
          </div>
        </div>
        <div class="confirm-pay">
          <a href="/#/cart" class="btn btn-default btn-large">返回购物车</a>
          <a href="javascript:;" class="btn btn-large">去结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderConfim"
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/button.scss";
.orderConfirm {
  height: 1080px;
  background-color: #e0e0e0;
  .container {
    .orderConfirm-main {
      position: relative;
      box-sizing: border-box;
      height: 844px;
      background-color: $colorG;
      top: 32px;
      .confirm-address {
        height: 322px;
        border-bottom: 1px solid $colorH;
        h2 {
          padding-top: 38px;
          padding-left: 63px;
          font-size: 20px;
          color: $colorB;
        }
        .add-address {
          box-sizing: border-box;
          width: 271px;
          height: 180px;
          border: 1px solid $colorH;
          margin-top: 21px;
          margin-left: 63px;
          .add-new {
            padding-top: 100px;
            text-align: center;
            a {
              font-size: 14px;
              color: $colorD;
            }
          }
        }
      }
      .confirm-information {
        height: 343px;
        border-bottom: 1px solid $colorH;
        .delivery-method {
          margin-top: 31px;
          padding-left: 63px;
          h2 {
            font-size: 20px;
            line-height: 20px;
            color: $colorB;
          }
          span {
            font-size: 16px;
            line-height: 16px;
            color: #ff6700;
            margin-left: 71px;
          }
        }
        .pro-invoice {
          margin-top: 49px;
          padding-left: 63px;
          h2 {
            font-size: 20px;
            line-height: 20px;
            color: $colorB;
          }
          a {
            font-size: 16px;
            line-height: 16px;
            color: #ff6700;
            margin-left: 112px;
          }
        }
        .pro-information {
          font-size: 16px;
          line-height: 16px;
          color: $colorC;
          .pro-count {
            padding-left: 1001px;
            margin-top: 50px;
          }
          .all-price {
            padding-left: 997px;
            margin-top: 11px;
          }
          .activity {
            padding-left: 1000px;
            margin-top: 11px;
          }
          .freight {
            padding-left: 1033px;
            margin-top: 13px;
            color: $colorC;
          }
          .should-pay {
            padding-left: 1000px;
            margin-top: 21px;
            .pri {
              font-size: 28px;
            }
          }
        }
      }
      .confirm-pay {
        margin-top: 37px;
        text-align: right;
      }
    }
  }
}
</style>
