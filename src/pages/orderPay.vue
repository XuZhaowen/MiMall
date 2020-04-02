<template>
  <div class="orderPay">
    <div class="container">
      <!-- 一 -->
      <div class="submitSuccess">
        <div class="icon1"></div>
        <div class="submitNews">
          <h2>订单提交成功！去付款咯～</h2>
          <p>请在 <span> 0小时30分</span>内完成支付, 超时后将取消订单</p>
          <p>收货信息：{{ addressInfo }}</p>
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
        <div class="orderNum">
          订单号：<span>{{ orderId }}</span>
        </div>
        <div class="addressDetail">
          收货信息：<span>{{ addressInfo }}</span>
        </div>
        <div class="proDetail">
          商品名称：
          <div class="proDetail2">
            <ul>
              <li v-for="(item, index) in proDetail" :key="index">
                <img v-lazy="item.productImage" />
                <span>
                  {{ item.productName }}
                </span>
              </li>
            </ul>
          </div>
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
        <div class="payType">
          <p>支付平台</p>
          <div
            class="pay pay-ali"
            :class="{ checked: payType == 1 }"
            @click="paySubmit(1)"
          ></div>
          <div
            class="pay pay-wechat"
            :class="{ checked: payType == 2 }"
            @click="paySubmit(2)"
          ></div>
        </div>
      </div>
    </div>
    <!-- 二维码支付页面 -->
    <!-- :img 动态绑定 -->
    <scan-pay-code
      v-if="showPay"
      @close="closePayModal"
      :img="payImg"
    ></scan-pay-code>
  </div>
</template>

<script>
// 引入qrcode
import QRCode from "qrcode";
// 引入支付页面
import ScanPayCode from "./../components/ScanPayCode";
export default {
  name: "orderPay",
  components: {
    ScanPayCode
  },
  data() {
    return {
      payType: "", //支付方式默认选择支付宝
      orderId: this.$route.query.orderNo, //根据路由获取当前的orderName
      addressInfo: "", //收货人信息
      proDetail: [], //订单商品详情，包含商品列表
      showDetail1: false, //默认不展示订单详情
      showPay: false, //是否显示微信支付弹框
      payImg: "" //微信支付的二维码地址
    };
  },
  mounted() {
    this.getOrderDetails();
  },
  methods: {
    // 获取订单详情
    getOrderDetails() {
      this.axios.get(`/orders/${this.orderId}`).then(res => {
        // 收货人信息
        let item = res.shippingVo;
        // 收获信息
        this.addressInfo = `${item.receiverName} ${item.receiverMobile} ${item.receiverProvince} ${item.receiverCity} ${item.receiverDistrict} ${item.receiverAddress}`;
        // 商品详情
        this.proDetail = res.orderItemVoList;
      });
    },

    // 定义方法，判断支付方式，跳到对应的支付页面
    // _blank，表示打开新窗口
    paySubmit(payType) {
      if (payType == 1) {
        window.open("/#/order/alipay?orderId=" + this.orderId, "_blank");
      } else {
        this.axios
          .post("/pay", {
            orderId: this.orderId,
            orderName: "Vue仿小米商城", //扫码支付时订单名称
            amount: 0.01, //单位元
            payType: 2 //1支付宝，2微信
          })
          .then(res => {
            //转换编码,链接转换为二维码
            QRCode.toDataURL(res.content)
              .then(url => {
                // 点击支付跳出弹框
                this.showPay = true;
                // url转为二维码图片
                this.payImg = url;
              })
              .catch(() => {
                this.$message.error("微信二维码生成失败，请稍后重试");
              });
          });
      }
    },
    // 关闭二维码弹框
    closePayModal() {
      this.showPay = false;
    }
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
          // 防止地址过长影响页面样式
          width: 600px;
          height: 50px;
          overflow-x: auto;
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
      height: 320px;
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
        .proDetail2 {
          height: 100px;
          width: 600px;
          margin-top: 9px;
          overflow: auto;
          ul {
            li {
              img {
                width: 30px;
                height: 30px;
                vertical-align: middle;
                margin-left: 26px;
              }
            }
          }
        }
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
      .payType {
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
