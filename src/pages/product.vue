<template>
  <div class="product">
    <ProductParams>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </ProductParams>
    <div class="content">
      <!-- 产品配置信息 -->
      <div class="bgImg-one">
        <h3>小米8</h3>
        <h4>8周年旗舰店</h4>
        <p>
          <a href="jac=vascript:;">全球首款双频 GPS</a>
          <span>|</span>
          <a href="jac=vascript:;">骁龙845</a>
          <span>|</span>
          <a href="jac=vascript:;">AI 变焦双摄</a>
          <span>|</span>
          <a href="jac=vascript:;">红外人脸识别</a>
        </p>
        <div class="price">
          <h5>￥2599</h5>
          <h6>￥2999</h6>
        </div>
      </div>
      <div class="bgImg-two"></div>
      <div class="bgImg-three"></div>
      <!-- 轮播图 -->
      <div class="carousel">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide>
            <img src="imgs/product/gallery-2.png" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="imgs/product/gallery-3.png" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="imgs/product/gallery-4.png" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="imgs/product/gallery-5.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="imgs/product/gallery-6.jpg" alt />
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
        <p class="small-title">小米8 AI变焦双摄拍摄</p>
      </div>
      <!-- 点击播放视频区域 -->
      <div class="item-video">
        <h2>
          60帧超慢动作摄影
          <br />慢慢回味每一瞬间的精彩
        </h2>
        <p>
          后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！
          <br />更能AI 精准分析视频内容，15个场景智能匹配背景音效。
        </p>
        <div class="video-bg">
          <img src="/imgs/product/gallery-1.png" @click="showSlide='slideDown'" alt />
          <div class="video-box">
            <div class="overlay" v-if="showSlide=='slideDown'"></div>
            <div class="video" v-bind:class="showSlide">
              <span class="icon-close" @click="showSlide='slideUp'"></span>
              <video src="/imgs/product/video.mp4" muted controls autoplay></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductParams from "./../components/ProductParam";
// 映入swiper
import { swiper, swiperSlide } from "vue-awesome-swiper";
// import "swiper/dist/css/swiper.css";
export default {
  name: "product",
  components: {
    ProductParams,
    swiper,
    swiperSlide
  },
  data() {
    return {
      showSlide: "",
      swiperOption: {
        autoplay: true, //可选选项，自动滑动
        slidesPerView: 3, //一页图片张数
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.product {
  .content {
    color: $colorB;
    // width: 1919px;
    // height: 718px;
    .bgImg-one {
      height: 718px;
      background: url("/imgs/product/product-bg-1.png") no-repeat center;
      background-size: cover;
      text-align: center;
      h3 {
        padding-top: 55px;
        padding-left: 50px;
        display: inline-block;
        font-size: 80px;
        line-height: 75px;
      }
      h4 {
        // 文字间隔
        letter-spacing: 15px;
        // 使用文字间隔后居中
        text-indent: 15px;
        margin-top: 13px;
        padding-left: 50px;
        font-size: 24px;
        line-height: 24px;
      }
      p {
        margin-top: 19px;
        font-size: 16px;
        line-height: 16px;
        span {
          margin-right: 17px;
          margin-left: 17px;
          color: #bfab9d;
        }
        a {
          color: $colorB;
        }
      }
      .price {
        margin-top: 40px;
        height: 29px;
        h5 {
          padding-left: 48px;
          display: inline-block;
          font-size: 38px;
          line-height: 29px;
        }
        h6 {
          display: inline-block;
          font-size: 26px;
          line-height: 50px;
          // 文字加贯穿的删除线
          text-decoration: line-through;
          margin-left: 11px;
        }
      }
    }
    .bgImg-two {
      height: 480px;
      background: url("/imgs/product/product-bg-2.png") no-repeat center;
      background-size: 1226px 397px;
    }
    .bgImg-three {
      background: url("/imgs/product/product-bg-3.png") no-repeat center;
      height: 638px;
      background-size: cover;
    }
    .carousel {
      margin: 32px auto 52px;
      img {
        width: 100%;
      }
      // 设置分页器样式
      .swiper-pagination {
        width: 100%;
        margin-top: 31px;
      }
      // 设置分页器小圆点之间的距离
      .swiper-pagination-bullet {
        width: 27px;
        height: 3px;
        border-radius: 0%;
        margin: 0 14px;
      }
      .small-title {
        font-size: 20px;
        text-align: center;
        margin-top: 57px;
        color: #333333;
      }
    }

    .item-video {
      text-align: center;
      height: 1044px;
      background-color: #070708;
      h2 {
        padding-top: 82px;
        font-size: 60px;
        color: $colorG;
      }
      p {
        font-size: 24px;
        color: $colorG;
        margin-top: 47px;
      }
      .video-bg {
        img {
          width: 1226px;
          height: 540px;
          margin-top: 58px;
          cursor: pointer;
        }
        .video-box {
          .overlay {
            @include position(fixed);
            background-color: $colorI;
            opacity: 0.5;
            z-index: 10;
          }

          // 使用animation动画实现,视频框的下拉和取消
          @keyframes slideDown {
            from {
              top: -50%;
              opacity: 0;
            }
            to {
              top: 50%;
              opacity: 1;
            }
          }

          @keyframes slideUp {
            from {
              top: 50%;
              opacity: 1;
            }
            to {
              top: -50%;
              opacity: 0;
            }
          }
          .video {
            z-index: 10;
            @include position(fixed);
            // 初始时设置位置为-50%
            top: -50%;
            // 使视频居中
            left: 50%;
            z-index: 10;
            transform: translate(-50%, -50%);
            width: 1000px;
            height: 536px;
            // 初始透明度为0
            opacity: 1;
            &.slideDown {
              animation: slideDown 0.6s linear;
              // 动画完成之后，保持在50%
              top: 50%;
            }

            &.slideUp {
              animation: slideUp 0.6s linear;
            }
            video {
              // 去除video默认样式
              object-fit: cover;
              // 100% 完全填充父容器
              width: 100%;
              height: 100%;
            }
            // 视频弹窗添加退出按钮
            .icon-close {
              z-index: 100;
              @include bgImg(20px, 20px, "/imgs/icon-close.png");
              position: absolute;
              top: 20px;
              right: 20px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
