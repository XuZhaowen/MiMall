<template>
  <div class="index">
    <!-- container容器,限定安全距离 -->
    <div class="container">
      <div class="swiper-box">
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
      <div class="ads-box"></div>
      <div class="banner"></div>
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
      ]
    };
  }
};
</script>

<style lang="scss">
.index {
  .swiper-box {
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
