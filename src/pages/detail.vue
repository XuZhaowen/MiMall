<template>
  <div class="product-detail">
    <ProductParams></ProductParams>
    <div class="container">
      <div class="product-main">
        <!-- 轮播图 -->
        <div class="product-lb">
          <div class="pic">
            <swiper :options="swiperOption">
              <swiper-slide>
                <img src="imgs/detail/phone-1.jpg" alt />
              </swiper-slide>
              <swiper-slide>
                <img src="imgs/detail/phone-2.jpg" alt />
              </swiper-slide>
              <swiper-slide>
                <img src="imgs/detail/phone-3.jpg" alt />
              </swiper-slide>
              <swiper-slide>
                <img src="imgs/detail/phone-4.jpg" alt />
              </swiper-slide>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
            <div class="swiper-pagination" slot="pagination"></div>
          </div>
        </div>
        <div class="product-news">
          <div class="content">
            <h2>小米8</h2>
            <p>相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红 外人脸解锁 / A</p>
            <div class="slefEmployed">小米自营</div>
            <div class="price">
              2599元
              <span>2999元</span>
            </div>
            <div class="line"></div>

            <div class="address">
              <i class="icon-loc"></i>
              <div class="address-detailed fl">北京 北京市 朝阳区 安定门街道</div>
              <div class="address-change clearfix">
                <a href="javascript:;">修改</a>
              </div>
              <div class="product-status">有现货</div>
            </div>

            <div class="choose-version clearfix">
              <h3>选择版本</h3>
              <div class="le fl">6GB+64GB 全网通 1099元</div>
              <div class="ri fr">4GB+64GB 移动4G 1049元</div>
            </div>

            <div class="choose-color">
              <h3>选择颜色</h3>
              <div class="color">深空灰</div>
            </div>

            <div class="item-news clearfix">
              <div class="item-version fl clearfix">小米8 6GB+64GB 全网通 深灰色</div>
              <div class="item-price fr clearfix">
                <div class="price">
                  1099元
                  <span>1699元</span>
                </div>
              </div>
              <div class="all-price">总计：1099元</div>
            </div>

            <div class="btn-huge">
              <a href="javascript:;" class="btn" @click="login">登录</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="price-description">
      <div class="container">
        <p>价格说明</p>
        <img src="/imgs/detail/item-price.jpeg" alt />
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
// 映入swiper
import { swiper, swiperSlide } from "vue-awesome-swiper";
// import "swiper/dist/css/swiper.css";
import ProductParams from "../components/ProductParam";
import ServiceBar from "./../components/ServiceBar";
export default {
  name: "detail",
  components: {
    ProductParams,
    ServiceBar,
    swiper,
    swiperSlide
  },

  data() {
    return {
      swiperOption: {
        autoplay: true, //可选选项，自动滑动
        slidesPerView: 1, //一页图片张数
        // spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/button.scss";
.product-detail {
  background-color: #fafafa;
  .container {
    .product-main {
      width: 100%;
      height: 870px;
      @include flex(space-between, flex-start);
      .product-lb {
        width: 613px;
        .pic {
          width: 550px;

          // margin-top: 10px;
          img {
            width: 100%;
            height: auto;
          }
          // 设置分页器样式
          .swiper-pagination {
            width: 500px;
            // margin-top: 31px;
          }
          // 设置分页器小圆点之间的距离
          .swiper-pagination-bullet {
            width: 50px;
            height: 2px;
            border-radius: 0%;
            margin: 0 14px;
          }
        }
      }
      .product-news {
        width: 613px;
        .content {
          margin-left: 30px;
          h2 {
            margin-top: 30px;
            font-size: 28px;
            line-height: 28px;
            color: $colorB;
          }
          p {
            margin-top: 16px;
            font-size: 14px;
            color: $colorD;
          }
          .slefEmployed {
            margin-top: 26px;
            font-size: 16px;
            line-height: 16px;
            color: #ff6700;
          }
          .price {
            margin-top: 14px;
            font-size: 20px;
            line-height: 20px;
            color: #ff6700;
            span {
              margin-left: 3px;
              font-size: 14px;
              line-height: 14px;
              color: $colorD;
              text-decoration: line-through;
            }
          }
          .line {
            margin-top: 25px;
            width: 583px;
            // height: 1px;
            border: 1px solid $colorH;
          }
          .address {
            margin-top: 28px;
            width: 584px;
            height: 108px;
            background-color: #fafafa;
            border: 1px solid $colorH;
            position: relative;
            font-size: 14px;
            line-height: 14px;
            .icon-loc {
              position: absolute;
              top: 27px;
              left: 34px;
              @include bgImg(20px, 22px, "/imgs/detail/icon-loc.png");
            }
            .address-detailed {
              margin-top: 31px;
              margin-left: 64px;
            }
            .address-change {
              margin-left: 270px;
              margin-top: 31px;
              a {
                color: #ff6700;
              }
            }
            .product-status {
              margin-top: 10px;
              margin-left: 64px;
              color: #ff6700;
            }
          }
          .choose-version {
            h3 {
              margin-top: 30px;
              font-size: 18px;
              line-height: 18px;
              color: $colorB;
            }
            .le {
              margin-top: 20px;
              border: 1px solid #ff6600;
              width: 287px;
              height: 50px;
              text-align: center;
              font-size: 16px;
              line-height: 50px;
            }
            .ri {
              margin-top: 20px;
              border: 1px solid #ff6600;
              width: 287px;
              height: 50px;
              text-align: center;
              font-size: 16px;
              line-height: 50px;
            }
          }
          .choose-color {
            h3 {
              margin-top: 30px;
              font-size: 18px;
              line-height: 18px;
              color: $colorB;
            }
            .color {
              margin-top: 20px;
              border: 1px solid #ff6600;
              width: 287px;
              height: 50px;
              text-align: center;
              font-size: 16px;
              line-height: 50px;
              color: #ff6700;
            }
          }
          .item-news {
            width: 584px;
            height: 108px;
            background-color: #fafafa;
            margin-top: 50px;
            .item-version {
              font-size: 14px;
              line-height: 14px;
              color: $colorB;
              padding-left: 30px;
              padding-top: 24px;
            }
            .item-price {
              padding-top: 10px;
              padding-right: 79px;
              font-size: 14px;
              line-height: 14px;
            }
            .all-price {
              padding-top: 56px;
              padding-left: 30px;
              font-size: 24px;
              color: #ff6600;
            }
          }
          .btn-huge {
            margin-top: 30px;
            width: 300px;
            height: 54px;
            background-color: #ff6600;
            text-align: center;
            a {
              font-size: 16px;
              color: #ffffff;
              line-height: 54px;
            }
          }
        }
      }
    }
  }
  .price-description {
    height: 340px;
    margin-top: 50px;
    background-color: #f3f3f3;
    .container {
      p {
        padding-top: 38px;
        font-size: 24px;
        color: $colorB;
      }
      img {
        margin-top: 30px;
        height: 189px;
      }
    }
  }
}
</style>
