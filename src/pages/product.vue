<template>
  <div class="product">
    <ProductParams>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </ProductParams>
    <div class="h">Kobe</div>
  </div>
</template>

<script>
import ProductParams from "./../components/ProductParam";
export default {
  name: "product",
  components: {
    ProductParams
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
.product {
  .h {
    height: 500px;
    background-color: lightblue;
  }
}
</style>
