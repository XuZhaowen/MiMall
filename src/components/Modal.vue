<template>
  <!-- transition动画效果 -->
  <transition name="slide">
    <!-- 容易 -->
    <!-- v-show控制动画 -->
    <div class="modal" v-show="showModal">
      <!-- 遮挡层 -->
      <div class="mask"></div>
      <!-- 弹窗 -->
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{ title }}</span>
          <a
            href="javascript:;"
            class="icon-close"
            v-on:click="$emit('cancel')"
          ></a>
        </div>
        <div class="modal-body">
          <!-- 插槽 -->
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <!-- 判断btnType -->
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType == 1"
            v-on:click="$emit('submit')"
            >{{ sureText }}</a
          >
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType == 2"
            v-on:click="$emit('cancel')"
            >{{ cancelText }}</a
          >
          <div class="btn-group" v-if="btnType == 3">
            <a href="javascript:;" class="btn" v-on:click="$emit('submit')">{{
              sureText
            }}</a>
            <a
              href="javascript:;"
              class="btn btn-default"
              v-on:click="$emit('cancel')"
              >{{ cancelText }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  props: {
    // 文本框类型:小small，中middle，大large，表单form
    modalType: {
      type: String,
      default: "form"
    },
    // 弹框标题
    title: String,
    // 按钮类型：1：确定按钮 2：取消按钮 3：确定取消
    btnType: String,
    sureText: {
      type: String,
      default: "确认"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    showModal: Boolean
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
@import "./../assets/scss/modal.scss";
@import "./../assets/scss/button.scss";
</style>
