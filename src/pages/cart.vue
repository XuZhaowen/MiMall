<template>
  <div>
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算!</span>
      </template>
    </order-header>
    <div class="cartList">
      <div class="container">
        <div class="list">
          <ul class="list-header">
            <li class="col-1">
              <span
                class="check-box"
                :class="{ checked: allChecked }"
                @click="checkedAll"
              ></span>
              全选
            </li>
            <li class="col-3">商品名称</li>
            <li class="col-1">价格</li>
            <li class="col-2">数量</li>
            <li class="col-1">小计</li>
            <li class="col-1">操作</li>
          </ul>
          <ul class="list-product">
            <li
              class="cart-item"
              v-for="(item, index) in cartList"
              :key="index"
            >
              <div class="item-check">
                <span
                  class="check-box"
                  :class="{ checked: item.productSelected }"
                  @click="updateCart(item)"
                ></span>
              </div>
              <div class="item-name">
                <img v-lazy="item.productMainImage" alt />
                <span>{{
                  item.productName + "，" + item.productSubtitle
                }}</span>
              </div>
              <div class="item-price">{{ item.productPrice }}元</div>
              <div class="item-amount">
                <div class="amount-box">
                  <a href="javascript:;" @click="updateCart(item, '-')">-</a>
                  <span>{{ item.quantity }}</span>
                  <a href="javascript:;" @click="updateCart(item, '+')">+</a>
                </div>
              </div>
              <div class="all-price">{{ item.productTotalPrice }}元</div>
              <div class="item-del" @click="deletePro(item)"></div>
            </li>
          </ul>
        </div>
        <div class="cartList-footer clearfix">
          <div class="cart-pro fl">
            <a href="javascript:;">继续购物</a>
            共
            <span>{{ totalAmount }}</span
            >件,已选择 <span>{{ checkedAmount }}</span
            >件
          </div>
          <div class="cart-price fr">
            合计:
            <span>{{ totalPrice }}</span
            >元
            <div class="btn-large btn" @click="order">去结算</div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from "./../components/OrderHeader";
import ServiceBar from "./../components/ServiceBar";
import NavFooter from "./../components/NavFooter";

export default {
  name: "cart",
  components: {
    ServiceBar,
    NavFooter,
    OrderHeader
  },
  data() {
    return {
      cartList: [],
      totalPrice: 0, //总价
      allChecked: false, //是否全部选中
      checkedAmount: 0, //选中商品数量
      totalAmount: 0 //总数量
    };
  },
  mounted() {
    this.getCartList();
  },
  methods: {
    getCartList() {
      this.axios.get("carts").then(res => {
        this.totalResult(res);
      });
    },
    //购物车商品数量增减，单独选择一件商品
    updateCart(item, type) {
      let quantity = item.quantity,
        selected = item.productSelected;
      if (type == "+") {
        ++quantity;
        if (quantity >= item.productStock) {
          this.$message.warning("此商品库存不足！");
        }
      } else if (type == "-") {
        if (quantity == 1) {
          this.$message.warning("商品至少保留一件！");
          return;
        }
        --quantity;
      } else {
        selected = !selected;
      }
      this.axios
        .put(`/carts/${item.productId}`, {
          quantity,
          selected
        })
        .then(res => {
          this.totalResult(res);
        });
    },
    // 删除商品
    deletePro(item) {
      this.axios.delete(`/carts/${item.productId}`).then(res => {
        this.$message.success("删除成功！");
        this.totalResult(res);
      });
    },
    // 结算
    order() {
      let isCheck = this.cartList.every(item => !item.productSelected);
      if (isCheck) {
        this.$message.warning("请选择一件商品！");
      } else {
        this.$router.push("/order/confirm");
      }
    },

    // 特殊处理获取字段，公共赋值
    totalResult(res) {
      this.cartList = res.cartProductVoList || [];
      this.totalPrice = res.cartTotalPrice;
      this.allChecked = res.selectedAll;
      this.totalAmount = this.cartList.length;
      this.checkedAmount = this.cartList.filter(
        item => item.productSelected
      ).length;
    },
    checkedAll() {
      let url = this.allChecked ? "/carts/unSelectAll" : "/carts/selectAll";
      this.axios.put(url).then(res => {
        // this.cartList = res.cartProductVoList || [];
        // this.totalPrice = res.cartTotalPrice;
        // this.allChecked = res.selectedAll;
        // this.totalAmount = res.cartTotalQuantity;
        // this.checkedAmount = this.cartList.filter(
        //   item => item.productSelected
        // ).length;
        this.totalResult(res);
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

.cartList {
  height: 676px;
  background: $colorJ;
  padding-top: 5px;
  box-sizing: border-box;
  .container {
    .list {
      .check-box {
        display: inline-block;
        width: 22px;
        height: 22px;
        border: 1px;
        background: #ff6600;
        // 对齐方式
        vertical-align: middle;
        cursor: pointer;
        margin-right: 2px;
        &.checked {
          background: url("/imgs/icon-gou.png") #ff6600 no-repeat center;
          background-size: 16px 12px;
          border: 1px solid black;
        }
      }
      height: 460px;
      background-color: $colorG;
      margin-top: 32px;
      text-align: center;
      .list-header {
        line-height: 79px;
        @include flex();
        height: 79px;
        font-size: 14px;
        color: $colorC;
        border-bottom: 1px solid $colorH;
        .col-1 {
          flex: 1;
          // padding-left: 72px;
        }
        .col-2 {
          flex: 2;
        }
        .col-3 {
          flex: 3;
        }
      }
      .list-product {
        // 超出部分加拖动条
        width: 100%;
        height: 380px;
        overflow: auto;
        .cart-item {
          @include flex();
          border-bottom: 1px solid $colorH;
          height: 125px;
          // line-height: 125px;
          .item-check {
            flex: 1;
            // padding-left: 72px;
          }
          .item-name {
            flex: 3;
            img {
              width: 80px;
              height: 80px;
              // 对齐方式
              vertical-align: middle;
            }
            span {
              margin-left: 30px;
              font-size: 18px;
              line-height: 18px;
              color: $colorB;
            }
          }
          .item-price {
            flex: 1;
            font-size: 16px;
            color: $colorB;
          }
          .item-amount {
            flex: 2;
            .amount-box {
              display: inline-block;
              width: 150px;
              height: 40px;
              line-height: 40px;
              border: 1px solid $colorH;
              font-size: 14px;
              color: $colorB;
              a {
                display: inline-block;
                width: 50px;
                color: $colorH;
              }
              span {
                display: inline-block;
                width: 50px;
              }
            }
          }
          .all-price {
            flex: 1;
            color: #ff6600;
            font-size: 16px;
          }
          .item-del {
            flex: 1;
            width: 14px;
            height: 12px;
            background: url("/imgs/icon-close.png") no-repeat center;
            line-height: 12px;
            cursor: pointer;
            // 背景图片大小,把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。
            background-size: contain;
          }
        }
      }
    }
    .cartList-footer {
      margin-top: 20px;
      .cart-pro {
        color: $colorC;
        font-size: 14px;
        a {
          margin-right: 37px;
          color: $colorC;
        }
        span {
          color: #ff6700;
        }
      }
      .cart-price {
        font-size: 14px;
        color: #ff6700;
        span {
          font-size: 20px;
        }
        .btn {
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
