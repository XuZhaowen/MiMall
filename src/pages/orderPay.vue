<template>
  <div class="orderPay">
    <div class="container">
      <!-- 一 -->
      <div class="submitSuccess">
        <div class="icon1"></div>
        <div class="submitNews">
          <h2>订单提交成功！去付款咯～</h2>
          <p>请在 <span> 0小时30分</span>内完成支付, 超时后将取消订单</p>
          <p>
            收货信息： 高丽 183****0972 北京 北京市 朝阳区 望京街道 望京(地铁站)
          </p>
        </div>
        <div class="allPrice">
          <p>应付总额： <span> 2198元</span></p>
          <p class="showDetail">
            订单详情
            <em
              class="icon2"
              :class="{ up: showDetail1 }"
              @click="showDetail1 = !showDetail1"
            ></em>
          </p>
        </div>
      </div>

      <!-- 二 -->
      <div class="submitDetails" v-if="showDetail1">
        <div class="orderNum">订单号：<span>5190702816411009</span></div>
        <div class="addressDetail">
          收货信息：<span
            >高丽 183****0972 北京 北京市 朝阳区 望京街道 望京(地铁站)</span
          >
        </div>
        <div class="proDetail">
          商品名称：<span
            >小米8 青春 全网通版 6GB内存 深空灰 64GB 小米8青春版 标准高透贴膜
            高透</span
          >
        </div>
        <div class="invoiceInformation">
          发票信息：<span>电子发票 个人</span>
        </div>
      </div>

      <!-- 三 -->
      <div class="payment-method">
        <div class="h3">
          <h3>选择以下支付方式付款</h3>
        </div>
        <div class="payChoose">
          <p>支付平台</p>
          <div
            class="pay pay-ali"
            :class="{ checked: payChoose == 1 }"
            @click="payChoose = 1"
          ></div>
          <div
            class="pay pay-wechat"
            :class="{ checked: payChoose == 2 }"
            @click="payChoose = 2"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderPay",
  data() {
    return {
      payChoose: 1, //支付方式默认选择支付宝
      showDetail1: false //默认不展示订单详情
    };
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/button.scss";
.orderPay {
  height: 906px;
  background-color: $colorJ;
  padding-top: 30px;
  .container {
    //（一）
    .submitSuccess {
      height: 230px;
      background-color: $colorG;
      // 解决padding撑大的问题
      box-sizing: border-box;
      // 下边框位置
      border-bottom: 1px solid $colorF;
      height: 230px;
      // 弹性布局
      display: flex;
      padding-top: 62px;
      padding-left: 53px;
      .icon1 {
        width: 90px;
        height: 90px;
        background: url("/imgs/icon-gou.png") #80c58a no-repeat center;
        border-radius: 50%;
        // 图标内容大小
        background-size: 60px;
        margin-right: 40px;
      }
      .submitNews {
        padding-top: 18px;
        margin-right: 200px;
        h2 {
          font-size: 24px;
          color: $colorB;
        }
        p:first-of-type {
          margin-top: 20px;
          font-size: 14px;
          color: $colorC;
          span {
            color: $colorA;
          }
        }
        p:last-child {
          margin-top: 10px;
          font-size: 14px;
          color: $colorC;
        }
      }
      .allPrice {
        padding-top: 19px;
        font-size: 14px;
        color: $colorC;
        p:first-of-type {
          span {
            font-size: 28px;
            color: #ff6700;
          }
        }
        p:last-child {
          margin-top: 25px;
          .icon2 {
            cursor: pointer;
            display: inline-block;
            width: 14px;
            height: 9.6px;
            background: url("/imgs/icon-down.png") no-repeat center;
            background-size: 14px;
            margin-left: 9px;
            // 箭头旋转时间
            transition: all 0.5s;
            // 默认箭头向上，不展示订单详情
            transform: rotate(180deg);
            &.up {
              // 旋转度数，需要加上默认的180deg
              transform: rotate(360deg);
            }
          }
        }
      }
    }
    // （二）
    .submitDetails {
      background-color: $colorG;
      height: 237px;
      padding-top: 47px;
      font-size: 14px;
      color: $colorB;
      padding-left: 185px;
      .orderNum {
        span {
          color: $colorA;
          margin-left: 40px;
        }
      }
      // 提取公共的span
      span {
        margin-top: 19px;
        margin-left: 26px;
      }
      .addressDetail {
        margin-top: 19px;
      }
      .proDetail {
        margin-top: 19px;
      }
      .invoiceInformation {
        margin-top: 19px;
      }
    }

    // （三）
    .payment-method {
      margin-top: 30px;
      height: 270px;
      background-color: $colorG;

      .h3 {
        height: 70px;
        border-bottom: 1px solid $colorF;
        h3 {
          box-sizing: border-box;
          padding-top: 26px;
          padding-left: 53px;
          box-sizing: border-box;
          font-size: 20px;
          color: $colorB;
        }
      }
      .payChoose {
        padding-left: 53px;
        p {
          margin-top: 26px;
        }
        .pay {
          display: inline-block;
          width: 188px;
          height: 64px;
          border: 1px solid $colorF;
          margin-top: 19px;
          cursor: pointer;
          &.checked {
            border: 1px solid $colorA;
          }
        }
        .pay-ali {
          background: url("/imgs/pay/icon-ali.png") no-repeat center;
          background-size: 103px 38px;
        }
        .pay-wechat {
          margin-left: 20px;
          background: url("/imgs/pay/icon-wechat.png") no-repeat center;
          background-size: 103px 38px;
        }
      }
    }
  }
}
</style>
