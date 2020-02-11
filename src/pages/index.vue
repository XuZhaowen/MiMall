<template>
  <div class="index">
    <!-- container容器,限定安全距离 -->
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,i) in menuList" :key="i">
                  <li v-for="(sub,j) in item" :key="j">
                    <a :href="sub?'/#/product/'+sub.id:''">
                      <img :src="sub ? sub.img:'/imgs/item-box-1.png'" alt />
                      {{sub ? sub.name:'小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">耳机 音响</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide v-for="(item,index)  in slideList" :key="index">
            <!-- 用了指令，字符串要加单引号 -->
            <a :href="'/#/product'+item.id">
              <img :src="item.img" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
          <img :src="item.img" alt />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img src="imgs/banner-1.png" alt />
        </a>
      </div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from "./../components/ServiceBar";
// 引入swiper
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "index",
  components: {
    ServiceBar,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        // 自动播放
        autoplay: true,
        // 循环播放
        loop: true,
        // 切换效果
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        // 指定分页器对象
        pagination: {
          el: ".swiper-pagination"
        },
        // 前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      // 轮播图图片
      slideList: [
        {
          id: "42",
          img: "imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "imgs/slider/slide-3.jpg"
        },
        {
          id: "",
          img: "imgs/slider/slide-4.jpg"
        },
        {
          id: "",
          img: "imgs/slider/slide-5.jpg"
        },
        {
          id: "",
          img: "imgs/slider/slide-1.jpg"
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "小米8青春版"
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      adsList: [
        { id: 33, img: "/imgs/ads/ads-1.png" },
        { id: 48, img: "/imgs/ads/ads-2.jpg" },
        { id: 45, img: "/imgs/ads/ads-3.png" },
        { id: 47, img: "/imgs/ads/ads-4.jpg" }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/base.scss";
.index {
  .swiper-box {
    .swiper-container {
      height: 451px;
      // 控制大箭头位置
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      background-color: #55585a7a;
      // 显示在轮播图上方
      z-index: 9;
      padding: 26px 0;
      // 解决padding增加的52px
      box-sizing: border-box;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            font-size: 16px;
            display: block;
            color: $colorG;
            padding-left: 30px;
            &:after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: "";
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            // 同时显示children
            .children {
              display: block;
            }
          }
          .children {
            // 默认看不见
            display: none;
            width: 962px;
            height: 451px;
            background: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              display: flex;
              // 两边对齐
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                // 指定宽度
                flex: 1;
                padding-left: 23px;
              }
              a {
                color: $colorB;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                // 居中
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
  }
  .ads-box {
    // flex布局
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 50px;
  }
}
</style>
