<template>
  <div class="orderConfirm">
    <order-header title="订单确认">
      <template v-slot:tip>
        <span>请认真填写收货地址！</span>
      </template>
    </order-header>
    <!-- 引入svg -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="position: absolute; width: 0px; height: 0px; overflow: hidden;"
    >
      <defs>
        <symbol id="icon-add" viewBox="0 0 31 32">
          <title>add</title>
          <path
            d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"
            class="path1"
          />
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path
            d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"
            class="path1"
          />
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path
            d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"
            class="path1"
          />
          <path
            d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path2"
          />
          <path
            d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path3"
          />
          <path
            d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path4"
          />
        </symbol>
      </defs>
    </svg>
    <div class="container">
      <div class="orderConfirm-main">
        <div class="confirm-address clearfix">
          <h2>收货地址</h2>
          <div
            class="add-address1 fl"
            v-for="(item, i) in addressList"
            :key="i"
            :class="{ checked: i == checkIndex }"
            @click="checkIndex = i"
          >
            <h3>{{ item.receiverName }}</h3>
            <div class="phone">{{ item.receiverMobile }}</div>
            <div class="street">
              {{
                item.receiverProvince +
                  " " +
                  item.receiverCity +
                  " " +
                  item.receiverAddress
              }}
            </div>
            <div class="action">
              <a href="javascript:;" class="fl" @click="delAddress(item)">
                <!-- svg删除图标 -->
                <svg class="icon icon-del">
                  <use xlink:href="#icon-del" />
                </svg>
              </a>
              <a href="javascript:;" class="fr" @click="editAddressModal(item)">
                <!-- svg修改图标 -->
                <svg class="icon icon-edit">
                  <use xlink:href="#icon-edit" />
                </svg>
              </a>
            </div>
          </div>
          <div class="add-address2 fl">
            <div class="icon1"></div>
            <div class="add-new" @click="addNewAddress">
              <a href="javascript:;">添加新地址</a>
            </div>
          </div>
        </div>

        <div class="item-good">
          <h2>商品</h2>
          <ul>
            <li v-for="(item, j) in cartList" :key="j">
              <div class="good-name">
                <img v-lazy="item.productMainImage" alt />
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
            <a href>电子发票</a>
            <a href>个人</a>
            <a href>商品明细</a>
          </div>
          <div class="pro-information">
            <div class="pro-count">
              <span>商品件数：</span>
              <span class="pri">{{ count }}件</span>
            </div>
            <div class="all-price">
              <span>商品总价：</span>
              <span class="pri">{{ totalPrice }}元</span>
            </div>
            <div class="activity">
              <span>优惠活动：</span>
              <span class="pri">0元</span>
            </div>
            <div class="freight">
              <span>运费：</span>
              <span class="pri">0元</span>
            </div>
            <div class="should-pay">
              <span>应付总额：</span>
              <span class="pri">{{ totalPrice }}元</span>
            </div>
          </div>
        </div>
        <div class="confirm-pay">
          <a href="/#/cart" class="btn btn-default btn-large">返回购物车</a>
          <a href="javascript:;" class="btn btn-large" @click="goToPay"
            >去结算</a
          >
        </div>
      </div>
    </div>
    <!-- Modal弹窗 -->
    <!-- 删除地址弹窗 -->
    <modal
      title="确认删除"
      btnType="3"
      v-bind:showModal="deleteAddressModal"
      v-on:cancel="deleteAddressModal = false"
      v-on:submit="submitAddress"
    >
      <!-- 插槽 template包裹 -->
      <template v-slot:body>
        <p>您确认要删除此地址吗？</p>
      </template>
    </modal>

    <!-- 地址表单静态弹窗 -->
    <modal
      title="添加收货地址"
      btnType="3"
      v-bind:showModal="addAddressModal"
      v-on:cancel="addAddressModal = false"
      v-on:submit="submitAddress"
    >
      <!-- 插槽 template包裹 -->
      <template v-slot:body>
        <div class="select-wrap">
          <div class="item">
            <input
              type="text"
              class="input"
              placeholder="姓名"
              v-model="checkedItem.receiverName"
            />
            <input
              type="text"
              class="input"
              placeholder="手机号"
              v-model="checkedItem.receiverMobile"
            />
          </div>
          <div class="item">
            <select
              name="province"
              id=""
              v-model="checkedItem.receiverProvince"
            >
              <option value="江苏">江苏</option>
              <option value="四川">四川</option>
              <option value="上海">上海</option>
            </select>
            <select name="city" id="" v-model="checkedItem.receiverCity">
              <option value="南京">南京</option>
              <option value="成都">成都</option>
              <option value="内江">内江</option>
            </select>
            <select name="area" id="" v-model="checkedItem.receiverDistrict">
              <option value="锡山区">锡山区</option>
              <option value="新区">新区</option>
              <option value="普陀区">普陀区</option>
              <option value="闵行区">闵行区</option>
              <option value="威远县">威远县</option>
            </select>
          </div>
          <!-- textarea输入框，可自行调节大小 -->
          <div class="item">
            <textarea
              name="street"
              value="详细地址"
              v-model="checkedItem.receiverAddress"
            >
详细地址</textarea
            >
          </div>
          <div class="item">
            <input
              type="text"
              class="input"
              placeholder="邮编"
              v-model="checkedItem.receiverZip"
            />
          </div>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from "./../components/Modal";
import OrderHeader from "./../components/OrderHeader";
export default {
  name: "orderConfim",
  components: {
    OrderHeader,
    Modal
  },
  data() {
    return {
      addressList: [], //收货地址列表
      cartList: [], //最后需要结算的商品
      totalPrice: 0, //最后结算总价
      count: 0, //商品结算数量
      checkedItem: {}, //定义编辑的对象
      userAction: "", //d定义用户的行为，0：新增，1：编辑，2：删除
      deleteAddressModal: false, //是否显示删除弹窗
      addAddressModal: false, //是否显示编辑弹窗
      checkIndex: 0 //当前收货地址选中索引
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
    // 增加新地址
    addNewAddress() {
      this.addAddressModal = true;
      this.userAction = 0;
      this.checkedItem = {};
    },

    // 编辑地址
    editAddressModal(item) {
      this.addAddressModal = true;
      this.userAction = 1;
      this.checkedItem = item;
    },

    // 删除地址
    delAddress(item) {
      this.deleteAddressModal = true;
      this.userAction = 2;
      this.checkedItem = item;
    },
    // 地址删除、编辑、新增功能,根据值判断进行了什么操作
    // 整合接口调用
    submitAddress() {
      // 解构赋值
      let { checkedItem, userAction } = this;
      // 下方的简写
      // let checkedItem=this.checkedItem;
      // let userAction=this.userAction;

      let method,
        url,
        params = {};
      if (userAction == 0) {
        (method = "post"), (url = "/shippings");
      } else if (userAction == 1) {
        (method = "put"), (url = `/shippings/${checkedItem.id}`);
      } else {
        (method = "delete"), (url = `/shippings/${checkedItem.id}`);
      }

      if (userAction == 0 || userAction == 1) {
        let {
          receiverName,
          receiverMobile,
          receiverProvince,
          receiverCity,
          receiverDistrict,
          receiverAddress,
          receiverZip
        } = checkedItem;
        // 定义错误提示
        let errMsg = "";
        if (!receiverName) {
          errMsg = "请输入收货人名称";
        } else if (!receiverMobile) {
          errMsg = "请输入手机号码";
        } else if (!receiverProvince) {
          errMsg = "请选择省份";
        } else if (!receiverCity) {
          errMsg = "请选择对应城市";
        } else if (!receiverDistrict) {
          errMsg = "请输入对应的区";
        } else if (!receiverAddress) {
          errMsg = "请输入详细地址";
        } else if (!receiverZip) {
          errMsg = "请输入邮政编码";
        }

        if (errMsg) {
          this.$message.info(errMsg);
          return;
        }
        params = {
          receiverName,
          receiverMobile,
          receiverProvince,
          receiverCity,
          receiverDistrict,
          receiverAddress,
          receiverZip
        };
      }
      // method动态赋值
      this.axios[method](url, params).then(() => {
        this.closeModal();
        this.getCartList();
        this.$message.success("操作成功！");
      });
    },

    // 关闭弹框
    closeModal() {
      this.checkedItem = {};
      this.userAction = "";
      this.deleteAddressModal = false;
      this.addAddressModal = false;
      // 关闭弹窗，实时获取接口数据，刷新页面
      this.getAddress();
    },

    getCartList() {
      this.axios.get("/carts").then(res => {
        this.cartList = res.cartProductVoList; //获取购物车中所有商品数据
        this.totalPrice = res.cartTotalPrice; //总金额
        // fliter过滤
        this.cartList = this.cartList.filter(item => item.productSelected); //最后需要结算的商品
        // map过滤，结算的数量，遍历数组
        this.cartList.map(item => {
          this.count += item.quantity;
        });
      });
    },

    // 生成订单
    goToPay() {
      let item = this.addressList[this.checkIndex];
      // 判断是否选择地址
      // 生成订单之后，购物车商品就清空了
      if (!item) {
        this.$message.warning("请选择一个收货地址！");
      } else {
        this.axios
          .post("/orders", {
            shippingId: item.id
          })
          .then(res => {
            // 路由跳转
            this.$router.push({
              path: "/order/pay",
              query: {
                orderNo: res.orderNo
              }
            });
          });
      }
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
  height: 1192px;
  background-color: $colorJ;
  .container {
    .orderConfirm-main {
      position: relative;
      box-sizing: border-box;
      height: 928px;
      background-color: $colorG;
      top: 32px;
      .confirm-address {
        // overflow: hidden;
        // 地址过多时，优化页面
        overflow-y: auto;
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
          position: relative;
          &.checked {
            border: 1px solid gold;
          }
          h3 {
            // 设置高度，优化页面
            height: 33px;
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
            height: 50px;
            // 超出部分隐藏，并显示为三个点，强制放在一行
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          // 改变详细地址框样式，避免内容过长，影响布局
          .street:hover {
            cursor: pointer;
            overflow: auto;
            white-space: normal;
          }
          .action {
            height: 50px;
            line-height: 50px;
            .icon {
              padding-left: 20px;
              padding-right: 20px;
              width: 20px;
              height: 20px;
              fill: #666666;
              vertical-align: middle;
              &:hover {
                fill: #ff6700;
              }
            }
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
          .icon1 {
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
        margin-top: 20px;
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
          height: 200px;
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
  .select-wrap {
    font-size: 14px;
    .item {
      margin-bottom: 15px;
      input {
        // 避免宽度挤大换行
        box-sizing: border-box;
        display: inline-block;
        border: 1px solid $colorH;
        width: 283px;
        height: 40px;
        line-height: 40px;
        padding-left: 15px;
        color: $colorD;
        // 第二个input偏移
        & + .input {
          margin-left: 14px;
        }
      }

      select {
        height: 40px;
        line-height: 40px;
        border: 1px solid $colorH;
        margin-right: 15px;
      }

      textarea {
        height: 62px;
        width: 100%;
        padding: 13px 15px;
        box-sizing: border-box;
        border: 1px solid #e5e5e5;
        color: $colorD;
        line-height: 40px;
      }
    }
  }
}
</style>
