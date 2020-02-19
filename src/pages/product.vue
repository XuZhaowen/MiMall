<template>
  <div>
    <ProductParams>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </ProductParams>
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

<style></style>
