<template>
  <div class="orderConfirm">
    <div class="container">
      <div class="orderConfirm-main">
        <div class="confirm-address clearfix">
          <h2>收货地址</h2>
          <div class="add-address1 fl">
            <h3>Admin</h3>
            <div class="phone">18600000000</div>
            <div class="street">北京市 海定区 百度科技园</div>
          </div>
          <div class="add-address2 fl">
            <div class="icon"></div>
            <div class="add-new">
              <a href="javascript:;">
                添加新地址
              </a>
            </div>
          </div>
        </div>

        <div class="item-good">
          <h2>商品</h2>
          <ul>
            <li v-for="(item, index) in cartList" :key="index">
              <div class="good-name">
                <img v-lazy="item.productMainImage" alt="" />
                <span>{{ item.productName + " " + item.productSubtitle }}</span>
              </div>
              <div class="good-price">
                {{ item.productPrice }}元x{{ item.quantity }}
              </div>
              <div class="good-total">{{ item.productTotalPrice }}元</div>
            </li>
          </ul>
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
              <span class="pri">{{ count }}件</span>
            </div>
            <div class="all-price">
              <span>商品总价：</span>
              <span class="pri"> {{ totalPrice }}元</span>
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
              <span class="pri"> {{ totalPrice }}元 </span>
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
  name: "orderConfim",
  data() {
    return {
      addressList: [], //收货地址列表
      cartList: [], //最后需要结算的商品
      totalPrice: 0, //最后结算总价
      count: 0 //商品结算数量
    };
  },
  // mounted 生命周期的钩子
  mounted() {
    this.getAddress();
    this.getCartList();
  },
  methods: {
    getAddress() {
      this.axios.get("/shippings").then(res => {
        this.addressList = res.list;
      });
    },
    getCartList() {
      this.axios.get("/carts").then(res => {
        this.cartList = res.cartProductVoList; ////获取购物车中所有商品数据
        this.totalPrice = res.cartTotalPrice; //总金额
        // fliter过滤
        this.cartList = this.cartList.filter(item => item.productSelected); //最后需要结算的商品
        // map过滤，结算的数量，遍历数组
        this.cartList.map(item => {
          this.count += item.quantity;
        });
      });
    }
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/button.scss";
.orderConfirm {
  height: 1080px;
  background-color: $colorJ;
  .container {
    .orderConfirm-main {
      position: relative;
      box-sizing: border-box;
      height: 908px;
      background-color: $colorG;
      top: 32px;
      .confirm-address {
        height: 322px;
        h2 {
          padding-top: 38px;
          padding-left: 63px;
          font-size: 20px;
          color: $colorB;
        }
        .add-address1 {
          box-sizing: border-box;
          width: 271px;
          height: 180px;
          border: 1px solid $colorH;
          margin-top: 21px;
          margin-left: 63px;
          h3 {
            font-size: 25px;
            padding-top: 20px;
            padding-left: 20px;
          }
          .phone {
            font-size: 20px;
            margin-top: 6px;
            padding-left: 20px;
          }
          .street {
            font-size: 20px;
            margin-top: 6px;
            padding-left: 20px;
          }
        }
        .add-address2 {
          box-sizing: border-box;
          width: 271px;
          height: 180px;
          border: 1px solid $colorH;
          margin-top: 21px;
          margin-left: 63px;
          .add-new {
            margin-top: 10px;
            text-align: center;
            a {
              font-size: 14px;
              color: $colorD;
            }
          }
          // 新增地址的加号
          .icon {
            width: 30px;
            height: 30px;
            background: url("/imgs/icon-add.png") #e0e0e0 no-repeat center;
            background-size: 14px;
            margin: 0 auto;
            margin-top: 45px;
            margin-bottom: 10px;
            border-radius: 50%;
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
          padding-left: 1000px;
          .pro-count {
            margin-top: 50px;
          }
          .all-price {
            margin-top: 11px;
          }
          .activity {
            margin-top: 11px;
          }
          .freight {
            margin-top: 11px;
            color: $colorC;
          }
          .should-pay {
            margin-top: 21px;
            .pri {
              font-size: 28px;
            }
          }
        }
      }
      .item-good {
        border-bottom: 1px solid $colorH;
        padding-bottom: 12px;
        h2 {
          font-size: 20px;
          line-height: 20px;
          color: #333333;
          padding-left: 71px;
          border-bottom: 1px solid $colorH;
          padding-bottom: 10px;
        }
        ul {
          // 超出部分加拖动条
          max-height: 200px;
          overflow-y: scroll;
          overflow-x: hidden;
          li {
            display: flex;
            align-items: center;
            height: 40px;
            line-height: 40px;
            margin-top: 10px;
            font-size: 16px;
            color: #333333;
            padding-left: 70px;
            .good-name {
              flex: 5;
              img {
                width: 30px;
                height: 30px;
                vertical-align: middle;
              }
            }
            .good-price {
              flex: 2;
            }
            .good-total {
              padding-right: 44px;
              color: #ff6600;
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
